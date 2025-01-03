import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
  Grid,
} from '@mui/material';
import {
  Work,
  Code,
  CalendarMonth,
  LocationOn,
} from '@mui/icons-material';
import Footer from './Footer';

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company: "Technoweit",
    duration: "Dec 2023 - Jan 2024",
    location: "On-Site,Jalgaon, Maharashtra",
    description: [
      "Developed and maintained web applications using React.js and Node.js",
      "Implemented responsive designs and user-friendly interfaces using Material-UI",
      "Worked with REST APIs and MongoDB for data management",
      "Collaborated with team members using Git for version control"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Material-UI", "Git"],
    type: "Internship"
  }
  
];

function Experience() {
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
          Experience
        </Typography>

        {/* Experience Cards */}
        <Grid container spacing={4} mb={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(99, 102, 241, 0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  mb={3}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'Space Grotesk',
                      color: '#fff',
                      fontWeight: 600,
                      mb: { xs: 2, sm: 0 },
                    }}
                  >
                    {exp.title}
                  </Typography>
                  <Chip 
                    icon={<Work sx={{ color: '#6366f1 !important' }} />}
                    label={exp.type}
                    sx={{
                      bgcolor: 'rgba(99, 102, 241, 0.1)',
                      color: '#6366f1',
                      fontFamily: 'Poppins',
                    }}
                  />
                </Stack>

                <Stack spacing={2} mb={3}>
                  <Stack 
                    direction="row" 
                    alignItems="center" 
                    spacing={1}
                    sx={{ color: '#94a3b8' }}
                  >
                    <Code sx={{ fontSize: 20 }} />
                    <Typography sx={{ fontFamily: 'Poppins' }}>
                      {exp.company}
                    </Typography>
                  </Stack>

                  <Stack 
                    direction="row" 
                    alignItems="center" 
                    spacing={1}
                    sx={{ color: '#94a3b8' }}
                  >
                    <CalendarMonth sx={{ fontSize: 20 }} />
                    <Typography sx={{ fontFamily: 'Poppins' }}>
                      {exp.duration}
                    </Typography>
                  </Stack>

                  <Stack 
                    direction="row" 
                    alignItems="center" 
                    spacing={1}
                    sx={{ color: '#94a3b8' }}
                  >
                    <LocationOn sx={{ fontSize: 20 }} />
                    <Typography sx={{ fontFamily: 'Poppins' }}>
                      {exp.location}
                    </Typography>
                  </Stack>
                </Stack>

                <Box mb={3}>
                  {exp.description.map((desc, i) => (
                    <Typography
                      key={i}
                      sx={{
                        color: '#94a3b8',
                        fontFamily: 'Poppins',
                        fontSize: '0.9rem',
                        mb: 1,
                        '&:before': {
                          content: '"•"',
                          marginRight: '8px',
                          color: '#6366f1',
                        },
                      }}
                    >
                      {desc}
                    </Typography>
                  ))}
                </Box>

                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {exp.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(99, 102, 241, 0.1)',
                        color: '#fff',
                        fontFamily: 'Poppins',
                        '&:hover': {
                          bgcolor: 'rgba(99, 102, 241, 0.2)',
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(99, 102, 241, 0.1)',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              color: '#94a3b8',
              textAlign: 'center',
              lineHeight: 1.8,
            }}
          >
            These experiences have helped me develop strong problem-solving skills and 
            the ability to work effectively in team environments. I'm always eager to 
            take on new challenges and contribute to innovative projects.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Experience;