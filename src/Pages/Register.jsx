import background from "./bg/background.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "./bg/image.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { InputLabel, Select, MenuItem } from "@mui/material";
// import { FormControl } from '@material-ui/core';
import { FormControl } from '@mui/material';
const schema = yup.object({
  first_name: yup.string().min(6).required(),
  last_name: yup.string().min(4).required(),
  email: yup.string().email().required(),
  gender: yup.string().required(),
  contact_number: yup.number().required(),
  confirm_password: yup.string().required(),
  password: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "25px",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  boxShodow: 50,
};
const center = {
  position: "relative",
  top: "50%",
  left: "25%",
};
const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid  } } = useForm({
    resolver: yupResolver(schema),
  });
  const [gender,setGender] = useState();
  const onSubmit = data => console.log(data);
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      <div style={{
        backgroundColor: "#f2f2f2",
        backgroundSize: 'cover',
        height: '100vh',
        color: '#fff',
      }}>
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              <Box style={{
                backgroundImage: `url(${Image})`,
                borderRadius: "25px",
                backgroundSize: 'cover',
                marginTop: "0px",
                margin: "0px",
                height: '80vh',
                color: '#fff',
              }}>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box style={{
                backgroundSize: 'cover',
                height: "80vh",
                borderRadius: "25px",
                backgroundColor: '#434dc7',
              }}>
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={15} />
                    <Box sx={center}>
                      <Typography component="h1" variant="h4">
                        Create Account
                      </Typography>
                    </Box>
                    <Box height={15} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <TextField
                          {...register("first_name")}
                          id="first_name"
                          label="First Name"
                          name="first_name"
                          autoComplete="first_name"
                          variant="outlined"
                            sx={{
                              minWidth: '200px !important',
                              height: '50px !important',
                              width: '100px !important',
                          }}
                        />
                          <p style={{color:"#f7d643", fontSize:"12px" }}>{errors.first_name?.message}</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          {...register("last_name")}
                          id="last_name"
                          label="Last Name"
                          name="last_name"
                          autoComplete="last_name"
                          variant="outlined"
                          sx={{
                            minWidth: '200px !important',
                            height: '50px !important',
                            width: '100px !important',
                          }}
                        />
                          <p style={{ color: "#f7d643", fontSize: "12px" }}>{errors.last_name?.message}</p>
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "0em", mr: "0em" }}>
                        <TextField
                          {...register("email")}
                          id="email"
                          label="Email"
                          name="email"
                          autoComplete="email"
                          variant="outlined"
                          sx={{
                            minWidth: '435px !important',
                            height: '50px !important',
                            width: '100px !important',
                          }}
                        />
                          <p style={{ color: "#f7d643", fontSize: "12px" }}>{errors.email?.message}</p>
                      </Grid>
                      <Grid item xs={6} sx={{ ml: "0em", mr: "0em" }}>
                        <TextField
                          {...register("contact_number")}
                          label="Contact Number"
                          name="contact_number"
                          autoComplete="contact_number"
                          variant="outlined"
                          sx={{
                            minWidth: '200px !important',
                            height: '50px !important',
                            width: '100px !important',
                          }}
                        />
                          <p style={{ color: "#f7d643", fontSize: "12px" }}>{errors.contact_number ?.message}</p>
                      </Grid>
                        <Grid item xs={6} sx={{ ml: "0em", mr: "0em" }}>
                          <FormControl fullwidth="true">
                              <InputLabel id="demo-simple-select-label">
                              Gender
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                size="small"
                                onChange={handleChange}
                                sx={{
                                minWidth: '200px !important',
                                height: '50px !important',
                                width: '100px !important',
                              }}
                              >
                              <MenuItem value="male">Male</MenuItem>
                              <MenuItem value="female">Female</MenuItem>
                              <MenuItem value="other">Other</MenuItem>
                              </Select>
                            </FormControl>
                        </Grid>
                      <Grid item xs={6} sx={{ ml: "0em", mr: "0em" }}>
                        <TextField
                          {...register("password")}
                          label="Password"
                          name="password"
                          type="password"
                          autoComplete="new-password"
                          variant="outlined"
                          sx={{
                            minWidth: '200px !important',
                            height: '40px !important',
                            width: '100px !important',
                          }}
                        />
                          <p style={{ color: "#f7d643", fontSize: "12px" }}>{errors.password ?.message}</p>
                      </Grid>
                        <Grid item xs={6} sx={{ ml: "0em", mr: "0em" }}>
                          <TextField
                            {...register("confirm_password")}
                            label="Confirm Password"
                            name="confirm_password"
                            type="password"
                            autoComplete="confirm_password"
                            variant="outlined"
                            sx={{
                              minWidth: '200px !important',
                              height: '40px !important',
                              width: '100px !important',
                            }}
                          />
                          <p style={{ color: "#f7d643", fontSize: "12px" }}>{errors.confirm_password?.message}</p>
                        </Grid>
                      <Grid item xs={12} sx={{ ml: "1em", mr: "0em" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          sx={{
                            mt: "10px",
                            mr: "20px",
                            borderRadius: 28,
                            color: "#434dc7 !important",
                            minWidth: '422px !important',
                            width: '100px !important',
                            backgroundColor: "#ffffff !important",
                          }}
                            onClick={() => isValid && navigate("/")}
                        >
                          Submit
                        </Button>
                      </Grid>  
                    </Grid>
                    </form>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default Register
