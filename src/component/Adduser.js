import React from "react";
import { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";

import { useNavigate ,NavLink} from "react-router-dom";
import { addUser } from "../service/api";


const Link = styled(NavLink)`
  background: #0000000;
  margin-left: 80rem;
  text-decoration: none;
  font-size: 20px;
  background-color:LightGray;
  margin-top:20rem;
`;
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
`;

const Textfield = styled(FormControl)`
  margin-top: 2%;
  margin-bottom: 2%;
`;

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const Adduser = () => {
  const [user, setUser] = useState(initialValues);

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // key:value
  // ==> key : Tripathi
  // here name is variable

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
    return phoneRegex.test(phone);
  };

  const addUserDetails = async () => {
    let isValid = true;

    if (!validateEmail(user.email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!validatePhone(user.phone)) {
      setPhoneError("Invalid phone number");
      isValid = false;
    } else {
      setPhoneError("");
    }
    if (isValid) {
      await addUser(user);
      navigate("/all");
    }
  };

  return (
<>
    <Link to="/SignOut"> Log-Out </Link>
    <Container>
      <Typography variant="h4">Add User</Typography>
      <Textfield>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </Textfield>

      <Textfield>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </Textfield>

      <Textfield>
        <InputLabel>Email</InputLabel>
        <Input
          type="email"
          onChange={(e) => onValueChange(e)}
          name="email"
        />{" "}
        {emailError && <Typography color="error">{emailError}</Typography>}
      </Textfield>

      <Textfield>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
            setPhoneError("");
          }}
          name="phone"
        />
        {phoneError && <Typography color="error">{phoneError}</Typography>}
      </Textfield>
      <FormControl>
        <Button onClick={() => addUserDetails()} variant="contained">
          Add User
        </Button>
      </FormControl>
    </Container>
    </>
  );
  
};

export default Adduser;
