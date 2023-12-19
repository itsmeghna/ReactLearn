import React from "react";
import { useState, useEffect } from "react"; //useeffect will call as soon as useeffect load
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import { getUser, editUser } from "../service/api";

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

const Edituser = () => {
  const [user, setUser] = useState(initialValues);

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const navigate = useNavigate();
  const { id } = useParams(); //the id after urls

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await getUser(id);
    setUser(response.data);
  };

  //email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //phone number validation
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
    return phoneRegex.test(phone);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  // key:value
  // ==> key : Tripathi
  // here name is variable

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
      await editUser(user, id);
      navigate("/all");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <Textfield>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </Textfield>

      <Textfield>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={user.username}
        />
      </Textfield>

      <Textfield>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />{" "}
        {emailError && <Typography color="error">{emailError}</Typography>}
      </Textfield>

      <Textfield>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={user.phone}
        />
        {phoneError && <Typography color="error">{phoneError}</Typography>}
      </Textfield>
      <FormControl>
        <Button onClick={() => addUserDetails()} variant="contained">
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default Edituser;
