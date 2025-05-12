import React from 'react'
import { Box, Avatar, Typography, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default React.memo(function OutgoingMsg({ text, timestamp }) {
  const theme = useTheme()
  const time = new Date(timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })

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
              color={theme.palette.text.secondary}
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
          bgcolor: theme.palette.primary.main,        // replaced '#1976d2'
          color: theme.palette.common.white,          // replaced 'white'
          p: theme.spacing(1.5),
          borderRadius: theme.shape.borderRadius,
          fontSize: theme.typography.body2.fontSize,
        }}
      >
        {text}
      </Box>
    </Box>
  )
})
