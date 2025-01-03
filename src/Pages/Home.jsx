import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
  IconButton,
} from '@mui/material';
import {
  KeyboardArrowRight,
  GitHub,
  LinkedIn,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@mui/system';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Skills from './Skills';
import Footer from './Footer';
import Project from './Project';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

function Home() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `
          linear-gradient(135deg, rgba(15, 23, 42, 0.97) 0%, rgba(30, 41, 59, 0.97) 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(99, 102, 241, 0.1) 50%, transparent 52%)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.5,
          zIndex: 1,
        },
        '& > *': {
          position: 'relative',
          zIndex: 2,
        },
      }}
    >
      {/* Background decorations */}
      <Box
        sx={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
          top: '100px',
          right: '-100px',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0) 70%)',
          bottom: '-100px',
          left: '-100px',
        }}
      />

      {/* Main content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid
          container
          sx={{
            minHeight: '100vh',
            py: 4,
          }}
        >
          {/* Left section */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Space Grotesk',
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                color: '#94a3b8',
                mb: 2,
                letterSpacing: '0.02em',
              }}
            >
              👋 Hello, I'm
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                background: 'linear-gradient(90deg, #fff 0%, #94a3b8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                mb: 3,
              }}
            >
              Aniket Dhangar
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Space Grotesk',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                color: '#6366f1',
                mb: 3,
                fontWeight: 600,
              }}
            >
              MERN Stack Developer
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
                color: '#94a3b8',
                maxWidth: '600px',
                mx: { xs: 'auto', md: 0 },
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              Crafting innovative web solutions with modern technologies.
              Specialized in building full-stack applications that deliver
              exceptional user experiences.
            </Typography>

            {/* Action buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              mb={4}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<KeyboardArrowRight />}
                sx={{
                  fontFamily: 'Poppins',
                  bgcolor: '#6366f1',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#4f46e5',
                  },
                  boxShadow: '0 0 20px rgba(99,102,241,0.3)',
                }}
                onClick={() => navigate('/project')}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  fontFamily: 'Poppins',
                  borderColor: '#6366f1',
                  color: '#6366f1',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#4f46e5',
                    bgcolor: 'rgba(99,102,241,0.04)',
                  },
                }}
                onClick={() => navigate('/contact')}
              >
                Get in Touch
              </Button>
            </Stack>

            {/* Social links */}
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <IconButton
                sx={{
                  color: '#94a3b8',
                  '&:hover': { color: '#6366f1' },
                }}
                href="https://github.com/AniketDhangar"
                target="_blank"
              >
                <GitHub />
              </IconButton>
              <IconButton
                sx={{
                  color: '#94a3b8',
                  '&:hover': { color: '#6366f1' },
                }}
                href="https://www.linkedin.com/in/aniket-dhangar-b59603267/"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
              {/* <IconButton 
                sx={{ 
                  color: '#94a3b8',
                  '&:hover': { color: '#6366f1' },
                }}
                href="https://instagram.com/yourusername"
                target="_blank"
              >
                <Instagram />
              </IconButton> */}
            </Stack>
          </Grid>

          {/* Right section - You can add an image or animation here */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"

              alt="Profile"
              sx={{
                width: '380px',
                height: '380px',
                objectFit: 'cover',
                borderRadius: '20px',
                // boxShadow: '0 0 20px rgba(99,102,241,0.3)',
                border: '4px solid rgba(99,102,241,0.3)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                  // boxShadow: '0 0 30px rgba(99,102,241,0.5)',
                }
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
      {/* <Footer /> */}
    </Box>
  );
}

export default Home;