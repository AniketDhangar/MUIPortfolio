import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Stack,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Send,
} from '@mui/icons-material';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "fd86a8c4-d3ba-4ef7-8c02-e666800c4a13"); // Your access key
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity('error');
    } finally {
      setIsSubmitting(false);
      setOpenSnackbar(true);
    }
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: '21aniketdhangar13@gmail.com',
      link: 'mailto:21aniketdhangar13@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 7875942104',
      link: 'tel:+917875942104',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Jalgaon, Maharashtra',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.97) 0%, rgba(30, 41, 59, 0.97) 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            color: '#fff',
            mb: 6,
            textAlign: 'center',
          }}
        >
          Get In Touch
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Stack spacing={4}>
              {contactInfo.map((info, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  sx={{
                    p: 3,
                    background: 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(99, 102, 241, 0.1)',
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'rgba(99, 102, 241, 0.1)',
                        color: '#6366f1',
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: 'Space Grotesk',
                          color: '#fff',
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        component={info.link ? 'a' : 'p'}
                        href={info.link}
                        sx={{
                          color: '#94a3b8',
                          fontFamily: 'Poppins',
                          textDecoration: 'none',
                          '&:hover': {
                            color: info.link ? '#6366f1' : '#94a3b8',
                          },
                        }}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              ))}

              {/* Social Links */}
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  background: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(99, 102, 241, 0.1)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Space Grotesk',
                    color: '#fff',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Connect With Me
                </Typography>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    href="https://github.com/AniketDhangar"
                    target="_blank"
                    sx={{
                      color: '#94a3b8',
                      '&:hover': { color: '#6366f1' },
                    }}
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/in/aniket-dhangar-b59603267/"
                    target="_blank"
                    sx={{
                      color: '#94a3b8',
                      '&:hover': { color: '#6366f1' },
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                </Stack>
              </Paper>
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(99, 102, 241, 0.1)',
              }}
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(99, 102, 241, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(99, 102, 241, 0.3)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#6366f1',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#94a3b8',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(99, 102, 241, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(99, 102, 241, 0.3)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#6366f1',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#94a3b8',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(99, 102, 241, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(99, 102, 241, 0.3)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#6366f1',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#94a3b8',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                    disabled={isSubmitting}
                    sx={{
                      bgcolor: '#6366f1',
                      color: 'white',
                      py: 1.5,
                      fontFamily: 'Poppins',
                      '&:hover': {
                        bgcolor: '#4f46e5',
                      },
                      '&.Mui-disabled': {
                        bgcolor: 'rgba(99, 102, 241, 0.5)',
                      },
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={snackbarSeverity}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Contact;
