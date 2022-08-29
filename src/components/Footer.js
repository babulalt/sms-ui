import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';


const footers = [
    {
        title: 'Contact',
        description: ['Address: Tahachal, Kathmandu', 'PO Box: 20828, Nepal', 'Phone :  01-537 1728', 'Email : mahendraratnacampus@gmail.com'],
    },
    {
        title: 'Quick Links',
        description: [
            'Home',
            'Programs',
            'Notices',
            'Addmission',
            'Downloads',
        ],
    },
    {
        title: 'Useful Links',
        description: ['National Examinations Board (NEB)', 'Tribhuvan University (TU) ', 'Faculty of Education', 'Ministry of Education'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Mahendra Ratna Campus
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const Footer = () => {
    return (
        <div>
            <Container
                maxWidth="xl"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 3],
                    backgroundColor: "blue",
                    color: "white",
                }}
            >
                <Typography variant="h3" color="white" gutterBottom>
                   Mahendra Ratna Campus
                </Typography>
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="text.secondary">
                                            {item}
                                        </Link>
                                     </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container
                maxWidth="xl"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    py: [2, 2],
                    backgroundColor: "blue",
                }}
            >
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </div>
    )
}

