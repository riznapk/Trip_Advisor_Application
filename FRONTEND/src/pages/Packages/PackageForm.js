import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { validationSchema } from "./validationSchema";
import { initialValues } from "./initialValues";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header";

import PackageDetails from "./PackageDetails";
import TransportationDetails from "./TransportationDetails";
import AccomodationDetails from "./AccomodationDetails";
import TourDetails from "./TourDetails";
import api from "../../api/axiosConfig";
import { formatPackageData } from "../../assets/utils";
import { useNavigate } from "react-router-dom";
import {
  addPackageDetails,
  addPackageTourDetails,
} from "../../redux/packageDetailsReducer";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  form: {
    padding: theme.spacing(4),
    backgroundColor: "#fff",
    borderRadius: theme.spacing(2),
    maxWidth: "600px",
    width: "100%",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const PackageForm = (props) => {
  const { selectedPackageDetails, edit = "false", setEdit } = props;
  const [isAddTourChecked, setIsAddTourChecked] = useState(false);
  const [step, setStep] = useState("first");
  const classes = useStyles();
  const navigate = useNavigate();
  const uuid = uuidv4();
  const dispatch = useDispatch();
  const packageAccommodationDetails = useSelector(
    (state) => state?.package?.packageAccommodationDetails
  );
  const packageTransportDetails = useSelector(
    (state) => state?.package?.packageTransportDetails
  );
  const packageInfo = useSelector((state) => state?.package?.package);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,

    onSubmit: (values) => {
      if (edit == "false") {
        const packageTourDetails = {
          tourID: uuid,
          tourName: formik.values.packageTourDetails?.tourName,
          tourDestination: formik.values.packageTourDetails?.tourDestination,
          tourDescription: formik.values.packageTourDetails?.tourDescription,
          tourPrice: formik.values.packageTourDetails?.tourPrice,
          tourImage: formik.values.packageTourDetails?.tourImage,
          tourGuide: formik.values.packageTourDetails?.tourGuide,
          tourSeason: formik.values.packageTourDetails?.tourSeason,
          tourAvailability: formik.values.packageTourDetails?.tourAvailability,
        };
        dispatch(addPackageTourDetails(packageTourDetails));
        dispatch(
          addPackageDetails({
            ...packageInfo,
            packageTransportDetails,
            packageAccommodationDetails,
            packageTourDetails,
          })
        );

        values = formatPackageData(values);
        //api call to add new package
        addNewPackageDetails();

        if (isAddTourChecked) {
          addTourPackageItem();
        }
        navigate("/package-list");
      } else {
        if (edit) {
          updateExitingPackage();
          navigate("/package-list");
          setEdit(false);
        }
      }
    },
  });

  useEffect(() => {
    if (edit && selectedPackageDetails) {
      formik?.setValues(selectedPackageDetails);
    }
  }, [selectedPackageDetails]);

  const addNewPackageDetails = async () => {
    try {
      const response = await api.post("/packageDetails", {
        ...formik?.values,
      });

      if (response?.data?.message == "success") {
        alert("Package created");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateExitingPackage = async () => {
    try {
      const response = await api.put("/packageDetails", {
        ...formik?.values,
      });

      if (response?.data?.message == "success") {
        alert("Package updated");
        //navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addTourPackageItem = async () => {
    try {
      const response = await api.post("/tourDetails", {
        tourID: uuid,
        tourName: formik.values.packageTourDetails?.tourName,
        tourDestination: formik.values.packageTourDetails?.tourDestination,
        tourDescription: formik.values.packageTourDetails?.tourDescription,
        tourPrice: formik.values.packageTourDetails?.tourPrice,
        tourImage: formik.values.packageTourDetails?.tourImage,
        tourGuide: formik.values.packageTourDetails?.tourGuide,
        tourSeason: formik.values.packageTourDetails?.tourSeason,
        tourAvailability: formik.values.packageTourDetails?.tourAvailability,
      });

      // if (response?.data?.message == "success") {
      //   alert("Account created");
      //   navigate("/");
      // } else if (response?.data?.message == "failure") {
      //   alert("The account already exist");
      // }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          {step == "first" && (
            <PackageDetails
              formik={formik}
              classes={classes}
              setStep={setStep}
              edit={edit}
            />
          )}
          {step == "second" && (
            <TransportationDetails
              formik={formik}
              classes={classes}
              setStep={setStep}
              edit={edit}
            />
          )}
          {step == "three" && (
            <AccomodationDetails
              formik={formik}
              classes={classes}
              setStep={setStep}
              edit={edit}
            />
          )}
          {step == "final" && (
            <TourDetails
              formik={formik}
              isAddTourChecked={isAddTourChecked}
              setIsAddTourChecked={setIsAddTourChecked}
              //classes={classes}
              //setStep={setStep}
              //edit={edit}
            />
          )}
          {step == "final" && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={formik?.handleSubmit}
              >
                Submit
              </Button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default PackageForm;
