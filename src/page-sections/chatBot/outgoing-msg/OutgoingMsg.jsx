
// src/components/OutgoingMsg.jsx

import React from 'react'
import { Box, Avatar, Typography, Stack } from '@mui/material'

export default React.memo(function OutgoingMsg({ text, timestamp }) {
  const time = new Date(timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  return (
    <Box
      alignSelf="end"
      maxWidth={{
        xs: '80%',
        sm: '70%',
        md: '60%',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1.5} justifyContent="flex-end" mb={1}>
        <Box textAlign="right">
          <Typography variant="body2" fontWeight={600} lineHeight={1}>
            <Typography
              component="span"
              variant="caption"
              fontWeight={400}
              color="text.secondary"
              sx={{ marginRight: 0.5 }}
            >
              {time}
            </Typography>
            You
          </Typography>
        </Box>
        <Avatar
          src="/static/user/user-11.png"
          sx={{ width: 27, height: 27 }}
        />
      </Stack>

      <Box
        sx={{
          bgcolor: '#1976d2',
          color: 'white',
          p: 1.5,
          borderRadius: 2,
          fontSize: 14,
        }}
      >
        {text}
      </Box>
    </Box>
  )
})
