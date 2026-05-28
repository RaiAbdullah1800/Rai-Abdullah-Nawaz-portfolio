import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress'; // CUSTOM COMPONENTS

import { Paragraph } from '@/components/typography';
import FlexRowAlign from '@/components/flexbox/FlexRowAlign'; // ==============================================================

// ==============================================================
export default function ProgressItem({
  title,
  value
}) {
  const [currentValue, setCurrentValue] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 1000; // 1 second duration
          const startTime = performance.now();

          const animate = (now) => {
            const timeElapsed = now - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Ease out quad curve
            const easeProgress = progress * (2 - progress);
            
            setCurrentValue(start + easeProgress * (end - start));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return <FlexRowAlign ref={containerRef} flexDirection="column" gap={1} maxWidth={80}>
      <Box position="relative" display="inline-flex">
        <CircularProgress size={80} value={100} thickness={3} color="secondary" variant="determinate" // sx={(theme) => ({
      //   color: theme.palette.grey[200],
      //   ...theme.applyStyles('dark', { color: theme.palette.grey[800] }),
      // })}
      />
        <CircularProgress size={80} thickness={3} value={currentValue} disableShrink color="primary" variant="determinate" sx={{
        left: 0,
        position: 'absolute',
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: 'round'
        }
      }} />
        <FlexRowAlign sx={{
        inset: 0,
        position: 'absolute'
      }}>
          <Typography component="p" sx={{
          fontSize: 16,
          fontWeight: 600
        }}>
            {`${Math.round(currentValue)}%`}
          </Typography>
        </FlexRowAlign>
      </Box>

      <Paragraph fontWeight={500}>{title}</Paragraph>
    </FlexRowAlign>;
}