import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import api from "../api/axiosConfig";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../redux/userDetailsReducer";

const initialValues = {
  userProfile: "",
  userPassword: "",
  userFirstName: "",
  userLastName: "",
  userEmail: "",
  userPhoneNumber: "",
};

const uuid = uuidv4();

const schema = yup.object().shape({
  userFirstName: yup.string().required("Required"),
  userLastName: yup.string().required("Required"),
  userPassword: yup.string().required("Required"),
  userProfile: yup.string().required("Required"),
  userPhoneNumber: yup.string().required("Required"),
  userEmail: yup.string().required("Required").email("Email is invalid"),
  userPassword: yup.string().required("Required"),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      addNewUserOnRegister();
      dispatch(
        addUserInfo({
          ...values,
          userID: uuid,
        })
      );
    },
    validationSchema: schema,
  });

  const addNewUserOnRegister = async () => {
    try {
      const response = await api.post("/users", {
        ...formik?.values,
        userID: uuid,
      });

      if (response?.data?.message == "success") {
        alert("Account created");
        navigate("/");
      } else if (response?.data?.message == "failure") {
        alert("The account already exist");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid
      container
      height="100vh"
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          mx: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          backgroundColor: "#f2f2f2",
          borderRadius: "10px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid item>
          <TextField
            id="email"
            label="First Name"
            variant="outlined"
            sx={{ m: 2 }}
            name="userFirstName"
            value={formik?.values?.userFirstName}
            onChange={formik?.handleChange}
            helperText={
              formik?.errors?.userFirstName && formik?.touched?.userFirstName
                ? formik?.errors?.userFirstName
                : null
            }
            error={
              formik?.errors?.userFirstName && formik?.touched?.userFirstName
                ? formik?.errors?.userFirstName
                : null
            }
          />
          <TextField
            name="userLastName"
            label="Last Name"
            variant="outlined"
            sx={{ m: 2 }}
            value={formik.values.userLastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik?.errors.userLastName && formik?.touched.userLastName}
            helperText={
              formik?.errors.userLastName && formik?.touched.userLastName ? (
                <span>{formik?.errors.userLastName}</span>
              ) : null
            }
          />
        </Grid>
        <Grid item>
          <TextField
            name="userProfile"
            label="User Profile"
            variant="outlined"
            sx={{ m: 2 }}
            value={formik.values.userProfile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik?.errors.userProfile && formik?.touched.userProfile}
            helperText={
              formik?.errors.userProfile && formik?.touched.userProfile ? (
                <span>{formik?.errors.userProfile}</span>
              ) : null
            }
          />
          <TextField
            name="userEmail"
            label="Email"
            variant="outlined"
            sx={{ m: 2 }}
            value={formik.values.userEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik?.errors.userEmail && formik?.touched.userEmail}
            helperText={
              formik?.errors?.userEmail && formik?.touched?.userEmail ? (
                <span>{formik?.errors.userEmail}</span>
              ) : null
            }
          />
        </Grid>
        <Grid item>
          <TextField
            type="password"
            name="userPassword"
            label="Password"
            variant="outlined"
            sx={{ m: 2 }}
            value={formik.values.userPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik?.errors.userPassword && formik?.touched.userPassword}
            helperText={
              formik?.errors.userPassword && formik?.touched?.userPassword ? (
                <span>{formik?.errors.userPassword}</span>
              ) : null
            }
          />
          <TextField
            name="userPhoneNumber"
            label="Phone Number"
            variant="outlined"
            sx={{ m: 2 }}
            value={formik.values.userPhoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik?.errors.userPhoneNumber && formik?.touched.userPhoneNumber
            }
            helperText={
              formik?.errors.userPhoneNumber &&
              formik?.touched.userPhoneNumber ? (
                <span>{formik?.errors.userPhoneNumber}</span>
              ) : null
            }
          />
        </Grid>

        <Button
          variant="contained"
          sx={{ m: 1 }}
          onClick={formik?.handleSubmit}
        >
          Register
        </Button>
        <Typography>
          Already a member? <Link to="/signin">SignIn Here</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Register;
