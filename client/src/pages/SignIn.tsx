import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { StylesConstant } from "../utils/constants";
import { signInAPI, signInWithGoogleAPI } from "../firebase/api";
import Loading from "./Loading";
import { FcGoogle } from "react-icons/fc";
import { UserInfoLogin } from "../utils/interface";
import { firebaseAuth } from "../firebase/config";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // checks current state of auth locally
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) navigate("/");
      // just to persist loading effect for sometime
      setTimeout(() => setIsLoading(false), 500);
    });

    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // prevent default effect of submit allover webpage
    event.preventDefault();
    // setIsLoading(true);

    // get all input fields data with FormData function
    const data = new FormData(event.currentTarget);
    const userInfo: UserInfoLogin = {
      email: data.get("email") as string,
      password: data.get("password") as string,
    };
    signInAPI(userInfo.email, userInfo.password)
      // .then(() => navigate("/dashboard"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoogleBtn = () => {
    setIsLoading(true);
    // Sign In using Google OAuth
    signInWithGoogleAPI().finally(() => {
      setIsLoading(false);
    });
  };

  //loading window for sometime meanwhile check auth
  return isLoading ? (
    <Loading message="Just loading to Say Hello !!" />
  ) : (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        ...StylesConstant.divCenterStyle,
        ...StylesConstant.fullScreenVWPort,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleGoogleBtn}
          sx={{ mt: 3, mb: 2, py: 1.0, backgroundColor: "#0e171d" }}
        >
          <FcGoogle style={{ height: 30, width: 30, marginRight: "8px" }} />
          Google
        </Button>
        <Divider flexItem>OR</Divider>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={StylesConstant.changeAutofillColor}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={StylesConstant.changeAutofillColor}
          />
          <FormControlLabel
            control={
              <Checkbox value="remember" color="primary" defaultChecked />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            Sign In
          </Button>
          <Grid container mt={3}>
            <Grid item xs>
              <Link to="/" component={ReactRouterLink}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                to="/signup"
                id="sign-in-button"
                component={ReactRouterLink}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        mt={8}
        mb={4}
      >
        {"Copyright © "}
        <Link color="inherit" href="/">
          ZUCO
        </Link>
        &nbsp;
        {new Date().getFullYear()}
      </Typography>
    </Container>
  );
}
