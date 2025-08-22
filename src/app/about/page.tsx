// app/about/page.tsx
import { Container, Typography, Paper } from '@mui/material';

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 3, bgcolor: '#f8f9fa' }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          📄  About Matrix Calculator
        </Typography>
        <Typography variant="body1" paragraph>
          This app demonstrates matrix generation and addition based on row and column indices.
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Matrix A</strong>: Each cell = <code>i + j</code> (sum of indices)
          <br />
          - <strong>Matrix B</strong>: Each cell = <code>i * j</code> (product of indices)
          <br />
          - Click <strong>Add Matrix</strong> to compute <code>A + B</code>
        </Typography>
        <Typography variant="body1">
          Built with <strong>Next.js, TypeScript, and Material UI</strong>.
        </Typography>
      </Paper>
    </Container>
  );
}