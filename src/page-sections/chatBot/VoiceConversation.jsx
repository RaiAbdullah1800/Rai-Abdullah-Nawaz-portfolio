import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Card,
  Avatar
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import { useTheme } from '@mui/material/styles';

export default function VoiceConversation() {
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);
  const theme = useTheme();

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = ({ results }) => {
      let interim = '';
      let finalText = transcript;
      for (let i = 0; i < results.length; i++) {
        const text = results[i][0].transcript;
        if (results[i].isFinal) finalText += text + ' ';
        else interim += text;
      }
      setTranscript(finalText + interim);
    };

    recognition.onerror = () => recognition.stop();
    recognitionRef.current = recognition;
  }, [transcript]);

  const handleMicClick = () => {
    if (!recognitionRef.current) return;
    recognitionRef.current.start();
  };

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: theme.palette.background.default,
      }}
    >
      {/* Header */}
      <Box px={2} py={1} sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Box display="flex" alignItems="center" gap={1.5}>
          <Avatar src="/static/user/user-19.png" alt="" />
          <Typography variant="h6" fontWeight={600}>
            Abdullah's Voice Assistant
          </Typography>
        </Box>
      </Box>

      {/* Content */}
      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={2}
        py={2}
      >
        <Typography variant="body2" sx={{ mb: 2 }}>Tap the mic to start speaking</Typography>
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
          {transcript || 'Say something...'}
        </Typography>
        <IconButton color="primary" size="large" onClick={handleMicClick}>
          <MicIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Card>
  );
}
