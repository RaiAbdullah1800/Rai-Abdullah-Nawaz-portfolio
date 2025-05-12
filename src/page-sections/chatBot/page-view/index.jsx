import React, { useState } from 'react';
import { Box, Fade, Popover, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Conversation from '@/page-sections/chatBot/Conversation';
import VoiceConversation from '@/page-sections/chatBot/VoiceConversation';

export default function ChatbotBox({ isOpen, toggleChat, theme }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElMic, setAnchorElMic] = useState(null); // Added for mic hover
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const popoverOpen = Boolean(anchorEl);
  const micPopoverOpen = Boolean(anchorElMic); // Popover open state for mic tooltip

  const handleHover = (e) => { if (!isOpen) setAnchorEl(e.currentTarget); };
  const handleHoverClose = () => setAnchorEl(null);
  const handleModeToggle = () => setIsVoiceMode((v) => !v);

  const handleMicHover = (e) => { if (!isOpen) setAnchorElMic(e.currentTarget); }; // Handle mic hover
  const handleMicHoverClose = () => setAnchorElMic(null); // Close mic hover

  return (
    <>
      {/* Chat Tooltip */}
      {!isVoiceMode && (
        <Popover
          disableRestoreFocus
          anchorEl={anchorEl}
          open={popoverOpen}
          onClose={handleHoverClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          sx={{ pointerEvents: 'none' }}
        >
          <Box p={2} maxWidth={200}>
            <Typography fontWeight="bold">Chat with My Assistant?</Typography>
            <Typography variant="body2">
              Get your questions answered quickly.
            </Typography>
          </Box>
        </Popover>
      )}

      {/* Mic Tooltip */}
      {isVoiceMode && (
        <Popover
          disableRestoreFocus
          anchorEl={anchorElMic}
          open={micPopoverOpen}
          onClose={handleMicHoverClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          sx={{ pointerEvents: 'none' }}
        >
          <Box p={2} maxWidth={220}>
            <Typography fontWeight="bold">Need Navigation Assistance??</Typography>
            <Typography variant="body2">
              Ask the voice assistant — it’ll take you to the right section and explain it in text.
            </Typography>
          </Box>
        </Popover>
      )}

      {/* Mode Toggle */}
      <Box
        onClick={handleModeToggle}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 90,
          width: 40,
          height: 40,
          bgcolor: theme.palette.secondary.main,
          borderRadius: '50%',
          boxShadow: 3,
          zIndex: 1000,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label={isVoiceMode ? 'Switch to Chat' : 'Switch to Voice'}
      >
        {isVoiceMode ? (
          <DotLottieReact
            src="https://lottie.host/3b4f0967-2211-45e5-bc76-0b21c06d5ef3/QumKJyCNMl.lottie"
            loop
            autoplay
            style={{ width: 32, height: 32 }}
          />
        ) : (
          <MicIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} />
        )}
      </Box>

      {/* Main Icon Box */}
      <Box
        onClick={toggleChat}
        onMouseEnter={isVoiceMode ? handleMicHover : handleHover} // Show mic tooltip on hover
        onMouseLeave={isVoiceMode ? handleMicHoverClose : handleHoverClose} // Close mic tooltip on hover leave
        sx={{
          position: 'fixed',
          bottom: 10,
          right: 10,
          width: 76,
          height: 76,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 998, // lowered
          cursor: 'pointer',
        }}
      >
        {isVoiceMode ? (
          <MicIcon
            sx={{
              fontSize: 47,
              padding: 1,
              borderRadius: 40,
              color: theme.palette.primary.text,
              background: theme.palette.primary.main,
            }}
          />
        ) : (
          !isOpen && (
            <DotLottieReact
              src="https://lottie.host/3b4f0967-2211-45e5-bc76-0b21c06d5ef3/QumKJyCNMl.lottie"
              loop
              autoplay
              style={{ width: 68, height: 68 }}
            />
          )
        )}
      </Box>

      {/* Close Button */}
      {isOpen && (
        <Box
          onClick={toggleChat}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            width: 56,
            height: 56,
            bgcolor: theme.palette.primary.main,
            color: 'white',
            borderRadius: '50%',
            boxShadow: 3,
            zIndex: 1001, // raised
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover': { bgcolor: theme.palette.primary.main },
          }}
        >
          <CloseIcon />
        </Box>
      )}

      {/* Chat/Voice Window */}
      <Fade in={isOpen}>
        <Box
          sx={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            width: { xs: '70%', sm: 300, md: 350, lg: 400 },
            height: { xs: '60%', sm: 350, md: 400, lg: 450 },
            boxShadow: 3,
            borderRadius: 2,
            p: 2,
            zIndex: 1000,
            overflow: 'auto',
          }}
        >
          {isVoiceMode ? <VoiceConversation /> : <Conversation />}
        </Box>
      </Fade>
    </>
  );
}
