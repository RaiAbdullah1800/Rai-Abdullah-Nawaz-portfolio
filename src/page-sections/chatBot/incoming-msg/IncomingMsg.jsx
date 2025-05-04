
// src/components/IncomingMsg.jsx

import React from 'react'
import { Box, Avatar, Typography, Stack } from '@mui/material'

export default React.memo(function IncomingMsg({ text, timestamp }) {
  const time = new Date(timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  return (
    <Box
      maxWidth={{
        xs: '80%',
        sm: '70%',
        md: '60%',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1.5} mb={1}>
        <Avatar
          src="/static/user/user-19.png"
          sx={{ width: 27, height: 27 }}
        />
        <Box>
          <Typography variant="body2" fontWeight={600} lineHeight={1}>
            Bot{' '}
            <Typography
              component="span"
              variant="caption"
              fontWeight={400}
              color="text.secondary"
              sx={{ marginLeft: 0.5 }}
            >
              {time}
            </Typography>
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          bgcolor: '#f1f1f1',
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
