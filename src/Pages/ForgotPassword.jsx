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
import { textAlign } from "@mui/system";

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
  left: "20%",
};
const ForgotPassword = () => {
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
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
                height: '70vh',
                color: '#fff',
              }}>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box style={{
                backgroundSize: 'cover',
                height: "70vh",
                borderRadius: "25px",
                backgroundColor: '#434dc7',
                color: '#ffffff',
              }}>
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={35} />
                    <Box sx={center}>
                      <Typography component="h1" variant="h4">
                        Forgot Password?
                      </Typography>
                    </Box>
                    <Box height={35} />
                    <Grid container spacing={1}>
                      <Grid item xs={12} sx={{ ml: "1em", mr: "0em" }}>
                        <TextField
                          required
                          id="email"
                          label="Enter Your Email"
                          name="email"
                          // type="password"
                          autoComplete="email"
                          variant="outlined"
                          sx={{
                            minWidth: '422px !important',
                            width: '100px !important',
                          }}
                        />
                      </Grid> 
                      <Grid item xs={12} sx={{ ml: "1em", mr: "0em" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullwidth="true"
                          size="large"
                          sx={{
                            mt: "10px",
                            mr: "20px",
                            borderRadius: 28,
                            color: "#434dc7 !important",
                            minWidth: '422px !important',
                            width: '100px !important',
                            backgroundColor: "#ffffff !important",
                            textTransform : "none",
                          }}
                          onClick={() => navigate("/")}
                        >
                          Send
                        </Button>
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "6em", mr: "0em"}}>
                        <Stack direction="row" spacing={2}>
                          <Typography
                            variant="body1"
                            component="span"
                            style={{ marginTop: "10px" }}
                          >
                            Login to your Account. {""}
                            <span
                              style={{ color: "#", cursor: "pointer" }}
                              onClick={() => {
                                navigate("/");
                              }}
                            >
                            Sign In
                            </span>
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
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

export default ForgotPassword
