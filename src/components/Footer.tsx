import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{ textAlign: "center", padding: "1em", marginTop: "auto" }}
    >
      <Typography variant="body2" fontSize="32px" fontWeight="bold">
        Some Company 2024
      </Typography>
    </Box>
  );
};

export default Footer;
