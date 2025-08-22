// app/components/Footer.tsx
import { Box, Typography, Container } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          All rights reserved by
          <Link
            href="https://rajeevkumarsaw.vercel.app/" style={{ color: 'black', textDecoration: 'none' }}>
              {"  "} Rajeev Kumar Saw
            </Link>
        </Typography>
      </Container>
    </Box>
  );
}