import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, FormControlLabel } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



const Signup = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const [state, setState] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
      });
    
    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.value,
        });
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:8080/api/user",{
        "name" : state.name,
        "email":  state.email,
        "mobile" : state.mobile,
        "password" : state.password
      })
      .then((response) => {
        const mytoken = response?.data?.data?.token;
        localStorage.setItem("mytoken", mytoken);
        localStorage.setItem("userid", response?.data?.data?.id);
        
        if(response.data.success == true){
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            html: '<b>' + response.data.message + '</b>',
            showConfirmButton: false,
            timer: 3500
          });
          navigate("/home")
        }

        if(response.data.success == false){
          Swal.fire({
            title: 'Error!',
            html: '<b>' + response.data.message + '</b>',
            icon: 'error',
            timer: 4000,
            confirmButtonText: 'ok'
          })
        }

      })
    };


    return  (

        <div className={classes.paper}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="off"
                autoFocus
                value={state.name}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                value={state.email}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile no."
                name="mobile"
                autoComplete="off"
                value={state.mobile}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={state.password}
                onChange={handleChange}
              />

              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </form>
        </div>
      </div>
    
    )

}

export default Signup;