import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Stack,
} from '@mui/material';
import {
  Code,
  Storage,
  Brush,
  Build,
} from '@mui/icons-material';
import Footer from './Footer';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Material-UI", level: 55 },
      { name: "Tailwind CSS", level: 80 },
    ]
  },
  {
    title: "Backend Development",
    icon: <Storage />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "SQL", level: 55 },
      { name: "Core Java", level: 65 },
    ]
  },
  {
    title: "UI/UX & Design",
    icon: <Brush />,
    skills: [
      { name: "Responsive Design", level: 90 },
      { name: "UI/UX Principles", level: 75 },
      { name: "CSS Frameworks", level: 85 },
    ]
  },
  {
    title: "Development Tools",
    icon: <Build />,
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 85 },
      { name: "MongoDB Compass", level: 75 },
      { name: "Postman", level: 80 },
      { name: "Thunder Client", level: 75 },
      { name: "Docker", level: 30 },
      { name: "Cursor AI", level: 70 },
    ]
  },
  {
    title: "Tools & Others",
    icon: <Build />,
    skills: [
      { name: "Redux", level: 75 },
      { name: "Problem Solving", level: 65 },
      { name: "Team Collaboration", level: 90 },
      { name: "MATLAB", level: 65 },
    ]
  }
];

function Skills() {
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
          Skills & Expertise
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category) => (
            <Grid item xs={12} md={6} key={category.title}>
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
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mb: 3 }}
                >
                  {React.cloneElement(category.icon, {
                    sx: { color: '#6366f1', fontSize: 28 }
                  })}
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'Space Grotesk',
                      color: '#fff',
                      fontWeight: 600,
                    }}
                  >
                    {category.title}
                  </Typography>
                </Stack>

                <Stack spacing={3}>
                  {category.skills.map((skill) => (
                    <Box key={skill.name}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        sx={{ mb: 1 }}
                      >
                        <Typography
                          sx={{
                            fontFamily: 'Poppins',
                            color: '#94a3b8',
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: 'Poppins',
                            color: '#6366f1',
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Stack>
                      {/* <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: 'rgba(99, 102, 241, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: '#6366f1',
                            borderRadius: 4,
                          },
                        }}
                      /> */}
                    </Box>
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
            mt: 4,
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
            I am constantly learning and expanding my skill set. My focus is on writing clean,
            efficient code and creating intuitive user experiences. I believe in the power of
            continuous learning and staying updated with the latest technologies.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Skills;