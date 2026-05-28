import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCopy from '@mui/icons-material/ContentCopy';
import Check from '@mui/icons-material/Check';
import { useState } from 'react';

const BIBTEX_DATA = `@article{ahmed2025efficient,
  title={Efficient Region-Based Video Text Extraction Using Advanced Detection and Recognition Models},
  author={Ahmed, Naveed and Iqbal, Zahid and Nawaz, Abdullah and Chan, Huah Yong and AL-Aswadi, Fatima N. and Zia, Hafiz Usman},
  journal={International Journal of Innovations in Science \\& Technology},
  volume={7},
  number={5},
  pages={120--135},
  year={2025},
  publisher={Science \\& Technology Publications}
}`;

export default function BibtexModal({ open, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BIBTEX_DATA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>Cite Publication (BibTeX)</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Copy the BibTeX citation below to include in your bibliography manager or LaTeX document.
        </Typography>
        <Box
          component="pre"
          sx={{
            p: 2,
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
            color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            borderRadius: 1,
            fontSize: '0.85rem',
            overflowX: 'auto',
            fontFamily: 'monospace',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          {BIBTEX_DATA}
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={onClose} color="inherit">
          Close
        </Button>
        <Button
          onClick={handleCopy}
          variant="contained"
          color="primary"
          startIcon={copied ? <Check /> : <ContentCopy />}
        >
          {copied ? 'Copied!' : 'Copy Citation'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
