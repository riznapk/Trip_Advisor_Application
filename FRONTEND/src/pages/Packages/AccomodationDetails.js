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
import React, { useEffect, useState } from "react";
import { accommodationList } from "../../assets/data/accommodation";
import { addPackageAccommodationDetails } from "../../redux/packageDetailsReducer";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { accomodationDurationType } from "../../assets/utils";

const AccomodationDetails = (props) => {
  const { formik, classes, setStep, edit } = props;
  const uuid = uuidv4();
  const [selectedAccItem, setSelectedAccItem] = useState({});
  const dispatch = useDispatch();

  const handleNext = () => {
    setStep("final");
    {
      edit == "false" &&
        formik?.setFieldValue(`packageAccommodationDetails.accID`, uuid);
    }
    dispatch(
      addPackageAccommodationDetails({
        accID: formik.values.packageAccommodationDetails?.accID,
        accName: formik.values.packageAccommodationDetails?.accName,
        accType: formik.values.packageAccommodationDetails?.accType,
        accPrice: formik.values.packageAccommodationDetails?.accPrice,
        accImage: formik.values.packageAccommodationDetails?.accImage,
        accDuration: formik.values.packageAccommodationDetails?.accDuration,
        accDurationType:
          formik.values.packageAccommodationDetails?.accDurationType,
      })
    );
  };

  useEffect(() => {
    if (formik?.values?.packageAccommodationDetails?.accName) {
      formik?.setFieldValue(
        `packageAccommodationDetails.accID`,
        selectedAccItem?.accID
      );
      // formik?.setFieldValue(
      //   `packageAccommodationDetails.accName`,
      //   selectedAccItem?.accName
      // );
      formik?.setFieldValue(
        `packageAccommodationDetails.accType`,
        selectedAccItem?.accType
      );
      formik?.setFieldValue(
        `packageAccommodationDetails.accPrice`,
        selectedAccItem?.accPrice
      );
      formik?.setFieldValue(
        `packageAccommodationDetails.accImage`,
        selectedAccItem?.accImage
      );
    }
  }, [formik?.values?.packageAccommodationDetails?.accName]);

  return (
    <>
      <Grid container spacing={2}>
        <Typography variant="h5">Accommodation Details</Typography>
        <Grid item xs={12} fullWidth>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              Accommodation Name
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name={`packageAccommodationDetails.accName`}
              value={formik?.values?.packageAccommodationDetails?.accName}
              onChange={(e) => {
                formik.handleChange(`packageAccommodationDetails.accName`)(e);
                const selectedAccItem = accommodationList.find(
                  (accItem) => accItem.accName === e.target.value
                );
                setSelectedAccItem(selectedAccItem);
              }}
              label="Accommodation Name"
            >
              {accommodationList?.map((accItem) => {
                return (
                  <MenuItem value={accItem?.accName}>
                    {accItem?.accName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        {formik?.values?.packageAccommodationDetails?.accName && (
          <Grid item xs={12}>
            <img
              src={formik.values.packageAccommodationDetails?.accImage}
              alt={formik.values.packageAccommodationDetails?.accImage}
              style={{
                width: "400px",
                height: "400px",
              }}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            label="Accommodation Type"
            name={`packageAccommodationDetails.accType`}
            value={formik.values.packageAccommodationDetails?.accType}
            onChange={formik.handleChange}
            error={
              formik.touched.packageAccommodationDetails?.accType &&
              Boolean(formik.errors.packageAccommodationDetails?.accType)
            }
            helperText={
              formik.touched.packageAccommodationDetails?.accType &&
              formik.errors.packageAccommodationDetails?.accType
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Accommodation Price"
            name={`packageAccommodationDetails.accPrice`}
            value={formik.values.packageAccommodationDetails?.accPrice}
            onChange={formik.handleChange}
            error={
              formik.touched.packageAccommodationDetails?.accPrice &&
              Boolean(formik.errors.packageAccommodationDetails?.accPrice)
            }
            helperText={
              <>
                {formik.touched.packageAccommodationDetails?.accPrice &&
                  formik.errors.packageAccommodationDetails?.accPrice}
                {"Please enter the price in pounds"}
              </>
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Accommodation Image Link"
            name={`packageAccommodationDetails.accImage`}
            value={formik.values.packageAccommodationDetails?.accImage}
            onChange={formik.handleChange}
            error={
              formik.touched.packageAccommodationDetails?.accImage &&
              Boolean(formik.errors.packageAccommodationDetails?.accImage)
            }
            helperText={
              formik.touched.packageAccommodationDetails?.accImage &&
              formik.errors.packageAccommodationDetails?.accImage
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Accommodation Duration"
            name={`packageAccommodationDetails.accDuration`}
            value={formik.values.packageAccommodationDetails?.accDuration}
            onChange={formik.handleChange}
            error={
              formik.touched.packageAccommodationDetails?.accDuration &&
              Boolean(formik.errors.packageAccommodationDetails?.accDuration)
            }
            helperText={
              formik.touched.packageAccommodationDetails?.accDuration &&
              formik.errors.packageAccommodationDetails?.accDuration
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          {/* <TextField
            label="Accommodation Duration Type"
            name={`packageAccommodationDetails.accDurationType`}
            value={formik.values.packageAccommodationDetails?.accDurationType}
            onChange={formik.handleChange}
            error={
              formik.touched.packageAccommodationDetails?.accDurationType &&
              Boolean(
                formik.errors.packageAccommodationDetails?.accDurationType
              )
            }
            helperText={
              formik.touched.packageAccommodationDetails?.accDurationType &&
              formik.errors.packageAccommodationDetails?.accDurationType
            }
            fullWidth
          /> */}
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              Accommodation Duration Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name={`packageAccommodationDetails.accDurationType`}
              value={
                formik?.values?.packageAccommodationDetails?.accDurationType
              }
              onChange={formik?.handleChange}
              label="Accommodation Duration Type"
            >
              {accomodationDurationType?.map((accItem) => {
                return (
                  <MenuItem value={accItem?.value}>{accItem?.label}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
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

export default AccomodationDetails;
