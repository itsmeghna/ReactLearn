import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)`
  width: 50%;
  margin: 5% auto 0 auto;
`;

const TextData = styled(TextField)`
  margin-top: 2%;
  margin-bottom: 2%;
`;

const ButtonOpt = styled(Button)`
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 50%;
`;

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [SignIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log(name);
    console.log(email);
    if (name === "meghna" && email === "abc@gmail.com") {
      setSignIn(true);
      navigate("/all");
    }
  };

  return (
    <div>
      <form>
        <Container>
          <Typography variant="h5">Log-In</Typography>
          <TextData
            type="text"
            variant="outlined"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextData
            type="email"
            variant="outlined"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <ButtonOpt variant="contained" onClick={handleSignIn}>
            Sign-In
          </ButtonOpt>
        </Container>
      </form>
    </div>
  );
};

export default LoginForm;
