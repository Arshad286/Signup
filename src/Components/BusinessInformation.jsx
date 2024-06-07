import React from 'react'
import { Container, Box, TextField, Button, Typography, Stepper, Step, StepLabel, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/system';

const steps = ['Your Profile', 'Business Information', 'Additional Users'];

const CustomStepper = styled(Stepper)(({ theme }) => ({
    backgroundColor: '#e3f2fd', 
    borderRadius: '25px',
    padding: '10px',
    marginBottom: theme.spacing(3),
}));

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
    '& .MuiStepIcon-root': {
        color: '#42a5f5', // Blue for the step icons
    },
    '& .MuiStepIcon-active': {
        color: '#1e88e5', // Darker blue for the active step icon
    },
    '& .MuiStepIcon-completed': {
        color: '#1976d2', // Even darker blue for the completed step icon
    },
}));

function BusinessInformation({ handleBack, handleNext }) {
  return (
    <div style={{ background: 'linear-gradient(45deg, #87CEEB 30%, #FF8E53 90%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
    <Container component="main" maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography component="h1" variant="h5" align="center">
                    Create New Account
                </Typography>
                <CustomStepper activeStep={1} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <CustomStepLabel>{label}</CustomStepLabel>
                        </Step>
                    ))}
                </CustomStepper>
                <Typography component="h2" variant="h6">
                    Step 2: Business Information
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Please, enter information about your company.
                </Typography>
                <Box component="form" noValidate sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        General Information
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="brandName"
                        label="Brand Name"
                        name="brandName"
                        autoComplete="organization"
                        autoFocus
                    />
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel id="brandType-label">Brand Type</InputLabel>
                        <Select
                            labelId="brandType-label"
                            id="brandType"
                            label="Brand Type"
                            name="brandType"
                        >
                            <MenuItem value="Local">Local</MenuItem>
                            <MenuItem value="National">National</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="streetAddress"
                        label="Street Address"
                        name="streetAddress"
                        autoComplete="street-address"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="zipCode"
                        label="Zip Code"
                        name="zipCode"
                        autoComplete="postal-code"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="city"
                        label="City"
                        name="city"
                        autoComplete="address-level2"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="taxIdNumber"
                        label="Tax ID Number"
                        name="taxIdNumber"
                    />
                    <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                        Documents
                    </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="document1"
                        label="Electronically sign the agreement(s)"
                        name="document1"
                        value="Electronically sign the agreement(s)"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="document2"
                        label="Non adult beverage Kroger market supplier waiver and release"
                        name="document2"
                        value="Non adult beverage Kroger market supplier waiver and release"
                        InputProps={{
                            readOnly: true,
                            endAdornment: (
                                <Box component="span" sx={{ color: 'red' }}>X</Box>
                            )
                        }}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="document3"
                        label="Electronically sign the agreement(s)"
                        name="document3"
                        value="Electronically sign the agreement(s)"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button onClick={handleBack} variant="outlined" color="primary">
                            Previous Step
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
}

export default BusinessInformation