import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Link,
  Divider,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardArrowUp,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHub />,
      url: 'https://github.com/AniketDhangar',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Email',
      icon: <Email />,
      url: 'mailto:21aniketdhangar13@gmail.com',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: '100px',
        py: 4,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.97) 0%, rgba(30, 41, 59, 0.97) 100%)',
        borderTop: '1px solid rgba(99, 102, 241, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Space Grotesk',
                color: '#fff',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Aniket Dhangar
            </Typography>
            <Typography
              sx={{
                color: '#94a3b8',
                fontFamily: 'Poppins',
                mb: 2,
                fontSize: '0.9rem',
              }}
            >
              MERN Stack Developer passionate about creating innovative web solutions
              and delivering exceptional user experiences.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Space Grotesk',
                color: '#fff',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link) => (
                <RouterLink
                  key={link.name}
                  to={link.path}
                  style={{
                    color: '#94a3b8',
                    fontFamily: 'Poppins',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                  }}
                  sx={{
                    '&:hover': {
                      color: '#6366f1',
                    },
                  }}
                >
                  {link.name}
                </RouterLink>
              ))}
            </Stack>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Space Grotesk',
                color: '#fff',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Connect With Me
            </Typography>
            <Stack direction="row" spacing={2}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#94a3b8',
                    '&:hover': {
                      color: '#6366f1',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(99, 102, 241, 0.1)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: '#94a3b8',
              fontFamily: 'Poppins',
              fontSize: '0.9rem',
            }}
          >
            © {new Date().getFullYear()} Aniket Dhangar. All rights reserved.
          </Typography>

          <IconButton
            onClick={scrollToTop}
            sx={{
              bgcolor: 'rgba(99, 102, 241, 0.1)',
              color: '#6366f1',
              '&:hover': {
                bgcolor: 'rgba(99, 102, 241, 0.2)',
              },
            }}
          >
            <KeyboardArrowUp />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;