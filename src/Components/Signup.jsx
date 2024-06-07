import React from 'react';
import { Container, Box, TextField, Button, Typography, Stepper, Step, StepLabel, Paper } from '@mui/material';

const steps = ['Your Profile', 'Business Information', 'Additional Users'];

const SignUpForm = ({ handleNext }) => {
    return (
        <div style={{ background: 'linear-gradient(45deg, #87CEEB 30%, #FF8E53 90%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
           <Container component="main" maxWidth="sm">
                <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                    <Typography component="h1" variant="h5" align="center">
                        Create New Account
                    </Typography>
                    <Stepper activeStep={0} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Typography component="h2" variant="h6">
                        Step 1: Your Profile
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        Enter the login information for your account. You will be able to create additional users after registering.
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 2 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoComplete="given-name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phoneNumber"
                            label="Phone Number"
                            name="phoneNumber"
                            autoComplete="tel"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            autoComplete="new-password"
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                            <Button variant="outlined" color="primary">
                                Back to Login
                            </Button>
                            <Button onClick={handleNext} variant="contained" color="primary">
                                Next Step
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </div>
    )
           
};

export default SignUpForm;
