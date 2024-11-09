import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
    margin-bottom: 1rem;
    
    &.MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: #1976d2
        }
    }
`

const ContactForm: React.FC = () => {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [responseMessage, setResponseMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/contact', {name, message})
            setResponseMessage(response.data)
        } catch (error) {
            console.error(error)
        }
    }

return (
<form onSubmit={handleSubmit}>
<StyledTextField
label='Name'
variant="outlined"
required
fullWidth
value={name}
onChange={(e) => setName(e.currentTarget.value)}
/>

<StyledTextField
label='Message'
variant="outlined"
required
fullWidth
multiline
rows={4}
value={message}
onChange={(e) => setMessage(e.currentTarget.value)}
/>

<Button type='submit' variant="contained" color="primary">
Submit
</Button>
{responseMessage && <Typography sx={{marginTop: '1rem'}}>{responseMessage}</Typography>}
</form>
)
}

export default ContactForm