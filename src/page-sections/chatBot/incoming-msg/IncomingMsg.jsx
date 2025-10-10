import React from 'react'
import { Box, Avatar, Typography, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default React.memo(function IncomingMsg({ text, timestamp }) {
  const theme = useTheme()
  const time = new Date(timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })

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
          src="/static/aboutme/mycropimage.jpg"
          sx={{ width: 27, height: 27 }}
        />
        <Box>
          <Typography variant="body2" fontWeight={600} lineHeight={1}>
            Assistant{' '}
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
          bgcolor: theme.palette.grey[400], // use theme background
          color: theme.palette.text.primary,
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
