import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", {
        formData,
      });
      setResponseMessage(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {responseMessage ? (
        <Typography variant="h1" textAlign="center" sx={{ marginTop: "1rem" }}>
          {responseMessage}
        </Typography>
      ) : (
        <Container
          // maxWidth="sm"
          sx={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography variant="h2" gutterBottom textAlign="center">
            Contact Us
          </Typography>
          <Box
            sx={{
              width: "400px",
              backgroundColor: "#ffffff",
              padding: 4,
              borderRadius: 3,
              boxShadow: 2,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography variant="subtitle1">Name</Typography>
                <TextField
                  name="name"
                  placeholder="Value"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Box>

              <Box sx={{ width: "100%" }}>
                <Typography variant="subtitle1">Email</Typography>
                <TextField
                  name="email"
                  placeholder="Value"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Box>

              <Box sx={{ width: "100%" }}>
                <Typography variant="subtitle1">Message</Typography>
                <TextField
                  name="message"
                  placeholder="Value"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  required
                  multiline
                  minRows={4}
                />
              </Box>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: "100%", height: 48 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default ContactForm;
