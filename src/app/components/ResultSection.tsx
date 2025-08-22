// components/ResultSection.tsx
import MatrixTable from './MatrixTable';
import { Box } from '@mui/material';

type Props = {
  sumMatrix: number[][] | null;
  multiplyMatrix: number[][] | null;
  addedMatrix: number[][] | null;
};

const ResultSection = ({ sumMatrix, multiplyMatrix, addedMatrix }: Props) => {
  return (
    <Box>
      {sumMatrix && (
        <MatrixTable matrix={sumMatrix} title="Matrix A (i + j)" />
      )}
      {multiplyMatrix && (
        <MatrixTable matrix={multiplyMatrix} title="Matrix B (i * j)" />
      )}
      {addedMatrix && (
        <MatrixTable matrix={addedMatrix} title="After Adding (A + B)" />
      )}
    </Box>
  );
};

export default ResultSection;