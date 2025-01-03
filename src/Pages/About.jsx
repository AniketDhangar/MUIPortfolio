import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Fab,
  Tooltip,
} from '@mui/material';
import {
  Code,
  School,
  WorkHistory,
  ArrowRight,
  CheckCircleOutline,
  Download,
} from '@mui/icons-material';

const skills = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'HTML/CSS',
  'Material-UI',
  'Git/GitHub',
  'REST APIs',
  'Redux',
  'Responsive Design',
  'Next.js',
  'Tailwind CSS',

];

const education = [
  {
    degree: 'Masters of  Computer Application',
    school: 'School of Computer Science,KBCNMU,Jalgaon',
    year: '2023 - 2025',
    
  },
  {
    degree: 'Bachelor of  Computer Application',
    school: 'KCES Institute of Management and Research,Jalgaon',
    year: '2020 - 2023',
    grade: 'CGPA: 9.14',
  },
  {
    degree: 'Higher Secondary (XII), Science',
    school: 'SVKM ,Moolji Jetha College,Jalgaon',
    year: '2019 - 2020',
    grade: 'Percentage: 63%',
  },
];

function About() {
  const handleDownloadResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1cIt66W_0xA7Hd7rakVRqEi6BgbB6A8UD/view?usp=sharing';
    window.open(resumeUrl, 'self');
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aniket_Dhangar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.97) 0%, rgba(30, 41, 59, 0.97) 100%)',
        position: 'relative',
      }}
    >
      <Tooltip title="Download Resume" placement="left">
        <Fab
          color="primary"
          aria-label="download resume"
          onClick={handleDownloadResume}
          sx={{
            position: 'fixed',
            bottom: { xs: 20, sm: 40 },
            right: { xs: 20, sm: 40 },
            bgcolor: '#6366f1',
            '&:hover': {
              bgcolor: '#4f46e5',
            },
            zIndex: 1000,
            boxShadow: '0 0 20px rgba(99,102,241,0.3)',
          }}
        > 
          <Download />
        </Fab>
      </Tooltip>

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
          About Me
        </Typography>

        <Grid container spacing={4}>
          {/* Left Section - Introduction */}
          <Grid item xs={12} md={6}>
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
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Space Grotesk',
                  color: '#fff',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Code /> Introduction
              </Typography>
              <Typography
                sx={{
                  color: '#94a3b8',
                  mb: 2,
                  fontFamily: 'Poppins',
                  lineHeight: 1.8,
                }}
              >
                I am a passionate MERN Stack Developer with a strong foundation in web development.
                Currently pursuing my Bachelor's in Computer Science, I specialize in creating
                responsive and user-friendly web applications.
              </Typography>
              <Typography
                sx={{
                  color: '#94a3b8',
                  fontFamily: 'Poppins',
                  lineHeight: 1.8,
                }}
              >
                My journey in web development started with curiosity and has evolved into a
                professional pursuit. I enjoy solving complex problems and learning new technologies
                to build better solutions.
              </Typography>
            </Paper>
          </Grid>

          {/* Right Section - Skills */}
          <Grid item xs={12} md={6}>
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
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Space Grotesk',
                  color: '#fff',
                  mb: 3,
                }}
              >
                Skills & Technologies
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                }}
              >
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
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
              </Box>
            </Paper>
          </Grid>

          {/* Education Section */}
          <Grid item xs={12}>
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
                variant="h5"
                sx={{
                  fontFamily: 'Space Grotesk',
                  color: '#fff',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <School /> Education
              </Typography>
              <List>
                {education.map((edu, index) => (
                  <React.Fragment key={edu.degree}>
                    <ListItem alignItems="flex-start">
                      <ListItemIcon>
                        <CheckCircleOutline sx={{ color: '#6366f1' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontFamily: 'Space Grotesk',
                              color: '#fff',
                              fontWeight: 600,
                            }}
                          >
                            {edu.degree}
                          </Typography>
                        }
                        secondary={
                          <Box sx={{ color: '#94a3b8', fontFamily: 'Poppins' }}>
                            <Typography component="span" sx={{ display: 'block' }}>
                              {edu.school}
                            </Typography>
                            <Typography component="span" sx={{ display: 'block' }}>
                              {edu.year} | {edu.grade}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < education.length - 1 && (
                      <Divider sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)' }} />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;