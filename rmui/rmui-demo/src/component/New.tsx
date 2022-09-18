import { Box, Stack, Grid, Button } from "@mui/material";

export const New = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Box bgcolor="primary.light" p={2}>
          {" "}
          Item1
        </Box>
      </Grid>
      <Grid item>
        <Box bgcolor="primary.light" p={2}>
          Item2
        </Box>
      </Grid>
      <Grid item>
        <Box bgcolor="primary.light" p={2}>
          Item3
        </Box>
      </Grid>
    </Grid>
  );
};
export default New;
