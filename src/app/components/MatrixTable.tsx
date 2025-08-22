// components/MatrixTable.tsx
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';

type Props = {
  matrix: number[][];
  title: string;
  showIndices?: boolean;
};

const MatrixTable = ({ matrix, title, showIndices = true }: Props) => {
  if (!matrix || matrix.length === 0) return null;

  return (
    <Box sx={{ mb: 4 }}>
      <h3>{title}</h3>
      <TableContainer component={Paper} sx={{ maxWidth: 600, mx: 'auto', border: '1px solid #ccc' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: '#f0f0f0' }}>#</TableCell>
              {showIndices &&
                matrix[0].map((_, j) => (
                  <TableCell key={j} align="center" sx={{ fontWeight: 'bold', bgcolor: '#f0f0f0' }}>
                    {j}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {matrix.map((row, i) => (
              <TableRow key={i}>
                <TableCell sx={{ fontWeight: 'bold', bgcolor: '#f0f0f0' }}>{i}</TableCell>
                {row.map((val, j) => (
                  <TableCell key={j} align="center" sx={{ fontFamily: 'monospace' }}>
                    {val}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MatrixTable;