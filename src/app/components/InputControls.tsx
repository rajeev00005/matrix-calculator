// components/InputControls.tsx
import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';

type Props = {
  onGenerate: (rows: number, cols: number) => void;
};

const InputControls = ({ onGenerate }: Props) => {
  const [rows, setRows] = useState<number>(2);
  const [cols, setCols] = useState<number>(2);

  const handleGenerate = () => {
    if (rows > 0 && cols > 0) {
      onGenerate(rows, cols);
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3, flexWrap: 'wrap' }}>
      <TextField
        label="Rows"
        type="number"
        value={rows}
        onChange={(e) => setRows(parseInt(e.target.value) || 1)}
        size="small"
        inputProps={{ min: 1 }}
        sx={{ width: 100 }}
      />
      <TextField
        label="Columns"
        type="number"
        value={cols}
        onChange={(e) => setCols(parseInt(e.target.value) || 1)}
        size="small"
        inputProps={{ min: 1 }}
        sx={{ width: 100 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerate}
      >
        Generate
      </Button>
    </Box>
  );
};

export default InputControls;