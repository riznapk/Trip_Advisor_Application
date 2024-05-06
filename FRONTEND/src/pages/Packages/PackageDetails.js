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
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPackageInfo } from "../../redux/packageDetailsReducer";
import { v4 as uuidv4 } from "uuid";

const PackageDetails = (props) => {
  const { formik, classes, setStep, edit = "false" } = props;
  const uuid = uuidv4();
  const dispatch = useDispatch();

  const handleNext = () => {
    setStep("second");

    {
      edit == "false" && formik?.setFieldValue("packageID", uuid);
    }
    dispatch(
      addPackageInfo({
        packageName: formik?.values?.packageName,
        packageID: formik?.values?.packageID,
        packageDuration: formik?.values?.packageDuration,
        packageDurationType: formik?.values?.packageDurationType,
        packageDescription: formik?.values?.packageDescription,
        packageDestination: formik?.values?.packageDestination,
        //packagePrice: formik?.values?.packagePrice,
        packageImage: formik?.values?.packageImage,
        peopleCount: formik?.values?.peopleCount,
      })
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Typography variant="h5" sx={{ py: 1 }}>
          Package Details
        </Typography>

        <Grid item xs={12} className={classes.textField}>
          <TextField
            label="Package Name"
            name="packageName"
            value={formik?.values?.packageName}
            onChange={formik?.handleChange}
            error={
              formik?.touched?.packageName &&
              Boolean(formik?.errors?.packageName)
            }
            helperText={
              formik?.touched?.packageName && formik?.errors?.packageName
            }
            fullWidth
          />
        </Grid>

        <Grid item xs={12} className={classes.textField}>
          <TextField
            label="Package Description"
            name="packageDescription"
            value={formik?.values?.packageDescription}
            onChange={formik.handleChange}
            error={
              formik?.touched?.packageDescription &&
              Boolean(formik?.errors?.packageDescription)
            }
            helperText={
              formik?.touched?.packageDescription &&
              formik?.errors?.packageDescription
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Package Destination"
            name="packageDestination"
            value={formik?.values?.packageDestination}
            onChange={formik?.handleChange}
            error={
              formik?.touched?.packageDestination &&
              Boolean(formik?.errors?.packageDestination)
            }
            helperText={
              formik?.touched?.packageDestination &&
              formik?.errors?.packageDestination
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="People Count"
            name="peopleCount"
            value={formik?.values?.peopleCount}
            onChange={formik?.handleChange}
            error={
              formik?.touched?.peopleCount &&
              Boolean(formik?.errors?.peopleCount)
            }
            helperText={
              formik?.touched?.peopleCount && formik?.errors?.peopleCount
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className={classes.textField}>
          <TextField
            label="Image Link"
            name="packageImage"
            value={formik?.values?.packageImage}
            onChange={formik?.handleChange}
            error={
              formik?.touched?.packageImage &&
              Boolean(formik?.errors?.packageImage)
            }
            helperText={
              formik?.touched?.packageImage && formik?.errors?.packageImage
            }
            fullWidth
          />
          {/* <>
            <input
              accept="image/*"
              id="packageImage"
              type="file"
              name="packageImage"
              onChange={(event) => {
                formik.setFieldValue(
                  "packageImage",
                  event.currentTarget.files[0]
                );
              }}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="packageImage">
              <Button variant="contained" component="span" color="primary">
                Upload Image
              </Button>
            </label>
            {formik.touched.packageImage && formik.errors.packageImage && (
              <div className={classes.error}>{formik.errors.packageImage}</div>
            )}
          </> */}
        </Grid>
        <Grid item container spacing={2} alignItems="center" fullWidth>
          <Grid item xs={12} sm={8} className={classes.textField}>
            <TextField
              label="Package Duration"
              name="packageDuration"
              value={formik?.values?.packageDuration}
              onChange={formik.handleChange}
              error={
                formik?.touched?.packageDuration &&
                Boolean(formik?.errors?.packageDuration)
              }
              helperText={
                formik?.touched?.packageDuration &&
                formik?.errors?.packageDuration
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.textField} fullwidth>
            <FormControl
              variant="standard"
              fullwidth
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Type
              </InputLabel>
              <Select
                name="packageDurationType"
                value={formik?.values?.packageDurationType}
                onChange={formik.handleChange}
                label="Type"
              >
                <MenuItem value="day">Day(s)</MenuItem>
                <MenuItem value="week">Week(s)</MenuItem>
                <MenuItem value="month">Month(s)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
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

export default PackageDetails;
