import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { addPackageTransportDetails } from "../../redux/packageDetailsReducer";
import { v4 as uuidv4 } from "uuid";

const TransportationDetails = (props) => {
  const { formik, classes, setStep, edit } = props;
  const uuid = uuidv4();
  const dispatch = useDispatch();
  const handleNext = () => {
    setStep("three");
    {
      edit == "false" &&
        formik?.setFieldValue(`packageTransportDetails.transportID`, uuid);
    }
    dispatch(
      addPackageTransportDetails({
        transportID: formik?.values?.packageTransportDetails?.transportID,
        transportType: formik?.values?.packageTransportDetails?.transportType,
        rentalPrice: formik?.values?.packageTransportDetails?.rentalPrice
          ? formik?.values?.packageTransportDetails?.rentalPrice
          : 0,
        carCount: formik?.values?.packageTransportDetails?.carCount
          ? formik?.values?.packageTransportDetails?.carCount
          : 0,
        dayCount: formik?.values?.packageTransportDetails?.dayCount
          ? formik?.values?.packageTransportDetails?.dayCount
          : 0,
        ticketPrice: formik?.values?.packageTransportDetails?.ticketPrice
          ? formik?.values?.packageTransportDetails?.ticketPrice
          : 0,
        ticketCount: formik?.values?.packageTransportDetails?.ticketCount
          ? formik?.values?.packageTransportDetails?.ticketCount
          : 0,
      })
    );
  };
  return (
    <>
      <Grid container spacing={2}>
        <Typography variant="h5">Transportation Details</Typography>
        <Grid item xs={12} fullWidth>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              Transportation Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name={`packageTransportDetails.transportType`}
              value={formik?.values?.packageTransportDetails?.transportType}
              onChange={formik.handleChange}
              label="Transportation Type"
            >
              <MenuItem value="car">Car</MenuItem>
              <MenuItem value="flight">Flight</MenuItem>
              <MenuItem value="rail">Rail</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {formik?.values?.packageTransportDetails?.transportType &&
          formik?.values?.packageTransportDetails?.transportType == "car" && (
            <>
              <Grid item xs={12}>
                <TextField
                  label="Rental Price"
                  name={`packageTransportDetails.rentalPrice`}
                  value={formik.values.packageTransportDetails?.rentalPrice}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.packageTransportDetails?.rentalPrice &&
                    Boolean(formik.errors.packageTransportDetails?.rentalPrice)
                  }
                  helperText={
                    <>
                      {formik.touched.packageTransportDetails?.rentalPrice &&
                        formik.errors.packageTransportDetails?.rentalPrice}
                      {"Please enter the price in pounds"}
                    </>
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Car Count"
                  name={`packageTransportDetails.carCount`}
                  value={formik.values.packageTransportDetails?.carCount}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.packageTransportDetails?.carCount &&
                    Boolean(formik.errors.packageTransportDetails?.carCount)
                  }
                  helperText={
                    formik.touched.packageTransportDetails?.carCount &&
                    formik.errors.packageTransportDetails?.carCount
                  }
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Day Count"
                  name={`packageTransportDetails.dayCount`}
                  value={formik.errors.packageTransportDetails?.dayCount}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.packageTransportDetails?.dayCount &&
                    Boolean(formik.errors.packageTransportDetails?.dayCount)
                  }
                  helperText={
                    formik.touched.packageTransportDetails?.dayCount &&
                    formik.errors.packageTransportDetails?.dayCount
                  }
                  fullWidth
                />
              </Grid>
            </>
          )}

        {formik?.values?.packageTransportDetails?.transportType &&
          (formik?.values?.packageTransportDetails?.transportType == "flight" ||
            formik?.values?.packageTransportDetails?.transportType ==
              "rail") && (
            <>
              <Grid item xs={12}>
                <TextField
                  label="Ticket Price"
                  name={`packageTransportDetails.ticketPrice`}
                  value={formik.values.packageTransportDetails?.ticketPrice}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.packageTransportDetails?.ticketPrice &&
                    Boolean(formik.errors.packageTransportDetails?.ticketPrice)
                  }
                  helperText={
                    <>
                      {formik.touched.packageTransportDetails?.ticketPrice &&
                        formik.errors.packageTransportDetails?.ticketPrice}
                      {"Please enter the price in pounds"}
                    </>
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Ticket Count"
                  name={`packageTransportDetails.ticketCount`}
                  value={formik.values.packageTransportDetails?.ticketCount}
                  onChange={formik.handleChange}
                  error={
                    formik.touched?.packageTransportDetails?.ticketCount &&
                    Boolean(formik.errors?.packageTransportDetails?.ticketCount)
                  }
                  helperText={
                    formik.touched?.packageTransportDetails?.ticketCount &&
                    formik.errors?.packageTransportDetails?.ticketCount
                  }
                  fullWidth
                />
              </Grid>
            </>
          )}
      </Grid>{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button color="primary" variant="contained" onClick={handleNext}>
          NEXT
        </Button>
      </div>
    </>
  );
};

export default TransportationDetails;
