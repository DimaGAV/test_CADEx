import { Container, Typography } from "@mui/material";
import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2">Contact Us</Typography>
            <ContactForm/>
        </Container>
    )
}

export default ContactPage