import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormButton } from './FormButton';


export const StudentInfo = ({
    activeStep,
    handleBack,
    handleNext,
    steps }) => {
    const [gender, setGender] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [mobileNum, setMobileNum] = React.useState('');
    const [parentName, setParentName] = React.useState('');
    const [parentRelation, setParentRelation] = React.useState('');
    const [parentMobileNum, setParentMobileNum] = React.useState('');
    const [dob, setDob] = React.useState('');

    // const [errMsg,setError]=React.useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleFirstNameChange = (event) => {
        // if (event.target.value.length === 0) {
        //     errMsg =setError('required first name')
        // }else{
            console.log(event.target.value)
            setFirstName(event.target.value);
      //  }  
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleMobileNum = (event) => {
        setMobileNum(event.target.value)
    }
    const handleParentName = (event) => {
        setParentName(event.target.Name)
    }
    const handleParentRelation = (event) => {
        setParentRelation(event.target.Name)
    }

    const handleParentMobileNum = (event) => {
        setParentMobileNum(event.target.Name)
    }
    const handleDob = (event) => {
        setDob(event.target.Name)
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Personal Information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        First Name
                    </Typography>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        value={firstName}
                        fullWidth
                        //error={errMsg ? true : false}
                        autoComplete="given-name"
                        variant="outlined"
                        //helperText={errMsg}
                        onChange={(e) => {
                           handleFirstNameChange(e)
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Last Name
                    </Typography>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={lastName}
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                        onChange={handleLastNameChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Gender
                    </Typography>
                    <FormControl fullWidth sx={{ m: 0 }} size="large">

                        <InputLabel id="demo-select-small">Gender</InputLabel>
                        <Select
                            labelId="gender"
                            id="gender"
                            value={gender}
                            label="Select Gender"
                            onChange={handleGenderChange}
                        >
                            <MenuItem value="select">
                                <em>Select Gender</em>
                            </MenuItem>
                            <MenuItem value={10}>Male</MenuItem>
                            <MenuItem value={20}>Female</MenuItem>
                            <MenuItem value={30}>Others</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Email
                    </Typography>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        value={email}
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        onChange={handleEmail}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Mobile Number
                    </Typography>
                    <TextField
                        required
                        id="mobileNum"
                        name="mobileNum"
                        label="Mobile Number"
                        value={mobileNum}
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        onChange={handleMobileNum}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Parent Name
                    </Typography>
                    <TextField
                        required
                        id="parentName"
                        name="parentName"
                        label="Parent Name"
                        value={parentName}
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        onChange={handleParentName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Patent Relation
                    </Typography>
                    <TextField
                        required
                        id="parentRelation"
                        name="parentRelation"
                        label="Patent Relation"
                        value={parentRelation}
                        fullWidth
                        autoComplete="Patent Relation"
                        variant="outlined"
                        onChange={handleParentRelation}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Parent Mobile Number
                    </Typography>
                    <TextField
                        id="parentNumber"
                        name="parentNumber"
                        label="Parent Mobile Number"
                        value={parentMobileNum}
                        fullWidth
                        variant="outlined"
                        onChange={handleParentMobileNum}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Date of Birth
                    </Typography>
                    <TextField
                        required
                        id="dob"
                        name="dob"
                        label="Date of Birth"
                        value={dob}
                        fullWidth
                        autoComplete="dob"
                        variant="outlined"
                        onChange={handleDob}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                    Religion
                    </Typography>
                    <TextField
                        required
                        id="religion"
                        name="religion"
                        label="Religion"
                        fullWidth
                        autoComplete="religion"
                        variant="outlined"
                    />
                </Grid>
                {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
            </Grid>
            <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }} xs={12} >
                <FormButton
                    activeStep={activeStep}
                    handleBack={handleBack}
                    handleNext={handleNext}
                    steps={steps} />
            </Grid>
        </React.Fragment>
    );
}
