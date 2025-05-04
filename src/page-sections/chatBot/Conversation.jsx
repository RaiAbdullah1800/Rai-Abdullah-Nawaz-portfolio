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
import Mic from '@mui/icons-material/Mic'
import CameraAlt from '@mui/icons-material/CameraAlt'
import AttachFile from '@mui/icons-material/AttachFile'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { useDropzone } from 'react-dropzone'
import IncomingMsg from './incoming-msg'
import OutgoingMsg from './outgoing-msg'

// Placeholder for your actual API call
const sendMessageToBackend = async (message) => {
  // TODO: replace this with your real API integration
  // e.g. const { data } = await api.sendMessage(message)
  return Promise.resolve(`Bot reply dummy: ${message}`)
}

export default function Conversation({ handleOpen }) {
  const [messages, setMessages] = useState([])
  const [draft, setDraft] = useState('')
  const containerRef = useRef(null)

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
      const replyText = await sendMessageToBackend(outgoingMsg.text)
      const incomingMsg = {
        id: String(Date.now() + 1),
        direction: 'incoming',
        text: replyText,
        timestamp: Date.now(),
      }
      setMessages(prev => [...prev, incomingMsg])
    } catch (err) {
      console.error('Failed to fetch reply', err)
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
      <Box px={2} py={1} sx={{ borderBottom: '1px solid #e0e0e0' }}>
        <Box display="flex" alignItems="center" gap={1.5}>
          <Avatar src="/static/user/user-19.png" alt="" />
          <Typography variant="h6" fontWeight={600}>
            My ChatBot
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
              backgroundColor: '#f5f5f5',
              borderRadius: 1,
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
            <Button variant="contained" size="small" onClick={handleSend}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
