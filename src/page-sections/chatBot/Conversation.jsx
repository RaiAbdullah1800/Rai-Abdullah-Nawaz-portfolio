// src/components/Conversation.jsx

import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Card,
  Stack,
  Button,
  Avatar,
  Divider,
  InputBase,
  IconButton,
  Typography
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { GROQ_MODEL, CHATBOT_SYSTEM_PROMPT } from '../../utils/constants'

import { useDropzone } from 'react-dropzone'
import IncomingMsg from './incoming-msg'
import OutgoingMsg from './outgoing-msg'

// Frontend-only Groq API chat completion call using OpenAI-compatible endpoint
const sendMessageToGroq = async ({ historyMessages, userMessage }) => {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY
  if (!apiKey) {
    throw new Error('Missing VITE_GROQ_API_KEY in environment. Add it to your .env (not committed).')
  }

  // Build OpenAI-style messages with system prompt + history + new user message
  const messages = [
    { role: 'system', content: CHATBOT_SYSTEM_PROMPT },
    ...historyMessages,
    { role: 'user', content: userMessage }
  ]

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages,
      temperature: 0.3,
      max_tokens: 512,
    }),
  })

  if (!res.ok) {
    const errText = await res.text().catch(() => '')
    throw new Error(`Groq API error ${res.status}: ${errText}`)
  }

  const data = await res.json()
  const content = data?.choices?.[0]?.message?.content?.trim()
  if (!content) throw new Error('No content returned from Groq API')
  return content
}

export default function Conversation({ handleOpen }) {
  const [messages, setMessages] = useState([])
  const [draft, setDraft] = useState('')
  const containerRef = useRef(null)
  const theme = useTheme();
  const [sending, setSending] = useState(false)

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => console.log(files),
  })

  const handleSend = async () => {
    if (!draft.trim()) return

    const outgoingMsg = {
      id: String(Date.now()),
      direction: 'outgoing',
      text: draft,
      timestamp: Date.now(),
    }
    setMessages(prev => [...prev, outgoingMsg])
    setDraft('')

    try {
      setSending(true)
      // Build minimal chat history for the API in OpenAI format from local state
      const historyMessages = messages.map(m => ({
        role: m.direction === 'outgoing' ? 'user' : 'assistant',
        content: m.text,
      }))
      const replyText = await sendMessageToGroq({
        historyMessages,
        userMessage: outgoingMsg.text,
      })
      const incomingMsg = {
        id: String(Date.now() + 1),
        direction: 'incoming',
        text: replyText,
        timestamp: Date.now(),
      }
      setMessages(prev => [...prev, incomingMsg])
    } catch (err) {
      console.error('Failed to fetch reply', err)
      const errorMsg = {
        id: String(Date.now() + 2),
        direction: 'incoming',
        text: `Error: ${err.message}`,
        timestamp: Date.now(),
      }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setSending(false)
    }
  }

  // Auto-scroll when messages change
  useEffect(() => {
    const el = containerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages.length])

  return (
    <Card className="h-full" elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box px={2} py={1} sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Box display="flex" alignItems="center" gap={1.5}>
          <Avatar src="/static/user/user-19.png" alt="" />
          <Typography variant="h6" fontWeight={600}>
            Abdullah's Assistant
          </Typography>
        </Box>
      </Box>

      {/* Chat area (scrollable) */}
      <Box
        ref={containerRef}
        flexGrow={1}
        overflow="auto"
        px={2}
        py={2}
        sx={{ maxHeight: '100%', scrollBehavior: 'smooth' }}
      >
        <Stack spacing={2}>
          {messages.map(msg =>
            msg.direction === 'outgoing' ? (
              <OutgoingMsg key={msg.id} text={msg.text} timestamp={msg.timestamp} />
            ) : (
              <IncomingMsg key={msg.id} text={msg.text} timestamp={msg.timestamp} />
            )
          )}
        </Stack>
      </Box>

      {/* Input section */}
      <Box px={2} py={1} sx={{ borderTop: '1px solid #e0e0e0' }}>
        <Box display="flex" flexDirection="column" gap={1}>
          <InputBase
            fullWidth
            multiline
            placeholder="Type something..."
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // prevent newline
                handleSend(); // send the message
              }
            }}
            sx={{
              fontSize: 14,
              fontWeight: 500,
              borderBottom: `1px`,
              backgroundColor: theme.palette.background.default,
              px: 1,
              py: 0.5,
              maxHeight: '4.5em', // roughly 2 lines of text
              overflowY: 'auto',
              lineHeight: '1.5em',
            }}
          />

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" gap={1}>
            </Box>
            <Button variant="contained" size="small" onClick={handleSend} disabled={sending || !draft.trim()}>
              {sending ? 'Sending…' : 'Send'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

