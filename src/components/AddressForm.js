import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormButton } from './FormButton';

export const AddressForm = (
    {
        activeStep,
        handleBack,
        handleNext,
        steps }
) => {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Permanent Address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Country
                    </Typography>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        State
                    </Typography>
                    <TextField
                        required
                        id="state"
                        name="state"
                        label="State"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Rural/Municipality
                    </Typography>
                    <TextField
                        required
                        id="municipality"
                        name="municipality"
                        label="Rural/Municipality"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Street
                    </Typography>
                    <TextField
                        required
                        id="street"
                        name="street"
                        label="Street"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Ward Number
                    </Typography>
                    <TextField
                        required
                        id="wardNum"
                        name="wardNum"
                        label="Ward Number"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        House Number
                    </Typography>
                    <TextField
                        required
                        id="houseNum"
                        name="houseNum"
                        label="House Number"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ pt: 2, mb: 3 }}>
                Temporary Address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Country
                    </Typography>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        State
                    </Typography>
                    <TextField
                        required
                        id="state"
                        name="state"
                        label="State"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Rural/Municipality
                    </Typography>
                    <TextField
                        required
                        id="municipality"
                        name="municipality"
                        label="Rural/Municipality"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Street
                    </Typography>
                    <TextField
                        required
                        id="street"
                        name="street"
                        label="Street"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Ward Number
                    </Typography>
                    <TextField
                        required
                        id="wardNum"
                        name="wardNum"
                        label="Ward Number"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        House Number
                    </Typography>
                    <TextField
                        required
                        id="houseNum"
                        name="houseNum"
                        label="House Number"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }} xs={12}>
                    <FormButton
                        activeStep={activeStep}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        steps={steps} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
