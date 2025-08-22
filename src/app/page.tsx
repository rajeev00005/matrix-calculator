'use client';

import { Box, Typography, TextField, Button, Paper, Grid, Container } from '@mui/material';
import { useState } from 'react';


import { createSumMatrix, createMultiplyMatrix, addMatrices } from '../utils/matrixUtils';

export default function Home() {
  const [rows, setRows] = useState<number>(2);
  const [cols, setCols] = useState<number>(2);
  const [sumMatrix, setSumMatrix] = useState<number[][] | null>(null);
  const [multiplyMatrix, setMultiplyMatrix] = useState<number[][] | null>(null);
  const [addedMatrix, setAddedMatrix] = useState<number[][] | null>(null);

  const handleGenerate = () => {
    if (rows < 1 || cols < 1) return;
    const A = createSumMatrix(rows, cols);
    const B = createMultiplyMatrix(rows, cols);
    setSumMatrix(A);
    setMultiplyMatrix(B);
    setAddedMatrix(null); // Reset result
  };

  const handleAddMatrices = () => {
    if (sumMatrix && multiplyMatrix) {
      const result = addMatrices(sumMatrix, multiplyMatrix);
      setAddedMatrix(result);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" fontWeight="600" color="primary">
          🧮 Matrix Calculator
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mt={1}>
          Generate and add matrices based on row & column indices
        </Typography>
      </Box>

      {/* Input Controls */}
      <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mb={4}>
        <TextField
          label="Rows"
          type="number"
          value={rows}
          onChange={(e) => setRows(Math.max(1, parseInt(e.target.value) || 1))}
          size="medium"
          inputProps={{ min: 1 }}
          sx={{ width: 120 }}
        />
        <TextField
          label="Columns"
          type="number"
          value={cols}
          onChange={(e) => setCols(Math.max(1, parseInt(e.target.value) || 1))}
          size="medium"
          inputProps={{ min: 1 }}
          sx={{ width: 120 }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleGenerate}
          sx={{ height: 'fit-content', px: 4 }}
        >
          Generate
        </Button>
      </Box>

      {/* Matrix A and B Side-by-Side */}
      {sumMatrix && multiplyMatrix && (
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
          {/* Matrix A */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, bgcolor: '#f8fdff', border: '1px solid #e0f2ff' }}>
              <Typography variant="h6" fontWeight="bold" textAlign="center" mb={2} color="primary">
                Matrix A (i + j)
              </Typography>
              <MatrixDisplay matrix={sumMatrix} />
            </Paper>
          </Grid>

          {/* Matrix B */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, bgcolor: '#fff8f8', border: '1px solid #ffd6d6' }}>
              <Typography variant="h6" fontWeight="bold" textAlign="center" mb={2} color="error">
                Matrix B (i × j)
              </Typography>
              <MatrixDisplay matrix={multiplyMatrix} />
            </Paper>
          </Grid>
        </Grid>
      )}

      {/* Add Matrix Button */}
      {sumMatrix && multiplyMatrix && !addedMatrix && (
        <Box textAlign="center" my={3}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleAddMatrices}
            sx={{ px: 5, py: 1.5, fontSize: '1.1rem' }}
          >
            ➕ Add Matrix
          </Button>
        </Box>
      )}

      {/* Result Matrix */}
      {addedMatrix && (
        <Box textAlign="center" mb={4}>
          <Typography variant="h5" fontWeight="bold" mb={2} color="success.main">
            ✅ After Adding (A + B)
          </Typography>
          <Paper
            elevation={4}
            sx={{
              display: 'inline-block',
              p: 3,
              borderRadius: 3,
              bgcolor: '#f0fff4',
              border: '2px solid #aaffb0',
              mx: 'auto',
            }}
          >
            <MatrixDisplay matrix={addedMatrix} showIndices />
          </Paper>
        </Box>
      )}
    </Container>
  );
}

// Reusable Matrix Display Component (Inline for simplicity)
function MatrixDisplay({
  matrix,
  showIndices = true,
}: {
  matrix: number[][];
  showIndices?: boolean;
}) {
  return (
    <Box sx={{ overflowX: 'auto' }}>
      <table
        style={{
          borderCollapse: 'collapse',
          margin: '0 auto',
          fontFamily: 'monospace',
          fontSize: '1rem',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <thead>
          <tr>
            {showIndices && <th style={headerStyle}>i↓ j→</th>}
            {matrix[0].map((_, j) => (
              <th key={j} style={headerStyle}>
                {j}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {showIndices && <td style={indexStyle}>{i}</td>}
              {row.map((val, j) => (
                <td key={j} style={cellStyle}>
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}

// Shared Styles
const headerStyle: React.CSSProperties = {
  backgroundColor: '#1976d2',
  color: 'white',
  padding: '8px 12px',
  fontWeight: 'bold',
  textAlign: 'center',
};

const indexStyle: React.CSSProperties = {
  backgroundColor: '#bbdefb',
  color: '#000',
  fontWeight: 'bold',
  padding: '8px 12px',
  textAlign: 'center',
};

const cellStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '10px 14px',
  textAlign: 'center',
  minWidth: '50px',
  backgroundColor: '#ffffff',
  transition: 'background-color 0.2s',
};