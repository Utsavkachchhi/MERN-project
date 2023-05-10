import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/feedback", state).then((response) => {
      console.log(response);
      setState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });
    });
  };

  return (
    <div>
      <Grid>
        <Card
          style={{ maxWidth: 450, padding: "20px 5px", margin: "20px auto" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              style={{ fontStyle: "underline" }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
              style={{ fontSize: "12px" }}
            >
              Fill up the form and our team will get back to you within 24
              hours.
            </Typography>

            <form>
              <Grid container spacing={1} style={{ marginTop: "10px" }}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    autoComplete="off"
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    name="lastName"
                    value={state.lastName}
                    label="Last Name"
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={state.email}
                    label="Email"
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    value={state.mobile}
                    name="mobile"
                    onChange={handleChange}
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    value={state.message}
                    multiline
                    rows={4}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Contact;
