import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Stack,
    Chip,
    IconButton,
    Link,
} from '@mui/material';
import {
    GitHub,
    Launch,
    Code,
} from '@mui/icons-material';
import Footer from './Footer';

const projects = [
    {
        title: "Real-time Chat Application",
        description: "A modern chat application with real-time messaging capabilities, user authentication, and a responsive interface. Currently in development.",

        image: "https://plus.unsplash.com/premium_photo-1720032304972-1f1142e73253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhdCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D", // Add your project screenshot
        technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Material-UI", "Express.js"],
        liveLink: "https://your-chat-app-demo.com",
        githubLink: "https://github.com/AniketDhangar",
        features: [
            "Real-time messaging with Socket.io",
            "User authentication and profiles",
            "Private and group chat functionality",
            "Message history and search",
            "Responsive design for all devices"
        ]
    },
    {
        title: "Personal Portfolio",
        description: "A modern portfolio website showcasing my projects and skills, built with React and Material-UI. Features a clean, responsive design with smooth animations.",
        image:"https://imgs.search.brave.com/AolErR9Dw1-fUX01yFsDO70gZH5DJou_AHGbW-gaEBk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc1/NDMxOTQ3L3Bob3Rv/L3BvcnRmb2xpby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OXBiMEFxY1dxaktJ/MmJKSl9wUmlkWnli/NWNLeHBkU1ZCNmRn/WU9wREx3ST0",
        technologies: ["React.js", "Material-UI", "React Router", "Framer Motion"],
        liveLink: "https://your-portfolio.com",
        githubLink: "https://github.com/AniketDhangar",
        features: [
            "Responsive design with Material-UI",
            "Interactive project showcase",
            "Smooth page transitions",
            "Skills and experience sections",
            "Contact information integration"
        ]
    }
];

function Projects() {
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
                    Featured Projects
                </Typography>

                {/* Projects Grid */}
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    height: '100%',
                                    background: 'rgba(30, 41, 59, 0.5)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(99, 102, 241, 0.1)',
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                    },
                                }}
                            >
                                {/* Project Image */}
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        overflow: 'hidden',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'rgba(0,0,0,0.2)',
                                        }
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={project.image}
                                        alt={project.title}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>

                                {/* Project Content */}
                                <Box sx={{ p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontFamily: 'Space Grotesk',
                                            color: '#fff',
                                            fontWeight: 600,
                                            mb: 2,
                                        }}
                                    >
                                        {project.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: '#94a3b8',
                                            fontFamily: 'Poppins',
                                            mb: 2,
                                            fontSize: '0.9rem',
                                            minHeight: '60px',
                                        }}
                                    >
                                        {project.description}
                                    </Typography>

                                    {/* Features */}
                                    <Box mb={3}>
                                        {project.features.slice(0, 4).map((feature, i) => (
                                            <Typography
                                                key={i}
                                                sx={{
                                                    color: '#94a3b8',
                                                    fontFamily: 'Poppins',
                                                    fontSize: '0.85rem',
                                                    mb: 0.5,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                }}
                                            >
                                                <Code sx={{ fontSize: 16, color: '#6366f1' }} />
                                                {feature}
                                            </Typography>
                                        ))}
                                    </Box>

                                    {/* Technologies */}
                                    <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                                        {project.technologies.map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                sx={{
                                                    bgcolor: 'rgba(99, 102, 241, 0.1)',
                                                    color: '#fff',
                                                    fontFamily: 'Poppins',
                                                    fontSize: '0.75rem',
                                                }}
                                            />
                                        ))}
                                    </Stack>

                                    {/* Links */}
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        sx={{
                                            borderTop: '1px solid rgba(99, 102, 241, 0.1)',
                                            pt: 2,
                                        }}
                                    >
                                        <Link
                                            href={project.githubLink}
                                            target="_blank"
                                            sx={{ color: '#94a3b8' }}
                                        >
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    color: 'inherit',
                                                    '&:hover': { color: '#6366f1' },
                                                }}
                                            >
                                                <GitHub />
                                            </IconButton>
                                        </Link>
                                        <Link
                                            href={project.liveLink}
                                            target="_blank"
                                            sx={{ color: '#94a3b8' }}
                                        >
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    color: 'inherit',
                                                    '&:hover': { color: '#6366f1' },
                                                }}
                                            >
                                                <Launch />
                                            </IconButton>
                                        </Link>
                                    </Stack>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            
        </Box>
    );
}

export default Projects; 