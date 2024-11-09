import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{ textAlign: "center", padding: "1em", marginTop: "auto" }}
    >
      <Typography variant="body2">© 2024 My Website</Typography>
    </Box>
  );
};

export default Footer;
