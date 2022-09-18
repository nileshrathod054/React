import { Box, FormControlLabel, Checkbox } from "@mui/material";

export const MuiCheckbox = () => {
  return (
    <Box>
      <FormControlLabel
        label="Accept terms and condition"
        control={<Checkbox />}
      />
    </Box>
  );
};
export default MuiCheckbox;
