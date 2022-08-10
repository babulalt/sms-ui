import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MainFeaturedPost } from './MainFeature';

const theme = createTheme();

const mainFeaturedPost = {
    title: 'Welcome to Mahendra Ratna Campus',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://mrctu.edu.np/images/1.jpg',
    imageText: 'main image description',
  };

export const Home = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container disableGutters maxWidth="xl" component="main" sx={{ pt: 2, pb: 6 }}> 
                <MainFeaturedPost post={mainFeaturedPost} />
                    <Typography
                        component="h1"
                        variant="h4"
                        align="left"
                        color="blue"
                        gutterBottom
                        sx={{ pt: 3 }}
                    >
                        Welcome to MRC
                    </Typography>
                    <Typography
                        paragraph
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >
                        Mahendra Ratna Campus (MRC), college of IT and Education, is a highly professional
                        and experienced college based in Kathmandu which was established in 1979.It comprises of multitalented
                        professionals considered among the best in the industry. It educates all students, not only to face the
                        challenges of the fast-moving industry but also to perform exceedingly well. NCCS is fully dedicated in
                        providing university curriculum to students. It is affiliated with Nepal's oldest and prestigious
                        Tribhuvan University. In this regard it is conducting four years Bachelor of Information Communication and
                        Technology program, four years Bachelor of Major Mathematics Program, four years Bachelor of Major Science
                        program, four years of Bachelor of Major English and four years Bachelor of Major English and so on.
                    </Typography>
                </Container>
            </ThemeProvider>
        </div>
    )
}