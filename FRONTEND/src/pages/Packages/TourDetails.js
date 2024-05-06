import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { tourList } from "../../assets/data/tour";
import { tourSeasonType } from "../../assets/utils";

const TourDetails = (props) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const {
    formik,
    //classes,
    isAddTourChecked = "false",
    setIsAddTourChecked,
  } = props;
  const [selectedTourItem, setSelectedTourItem] = useState({});

  //const [isAddTourChecked, setIsAddTourChecked] = useState(false);

  const handleChange = (event) => {
    setIsAddTourChecked(event.target.checked);
  };

  useEffect(() => {
    if (formik?.values?.packageTourDetails?.tourName) {
      formik?.setFieldValue(
        `packageTourDetails.tourID`,
        selectedTourItem?.tourID
      );
      // formik?.setFieldValue(
      //   `packageAccommodationDetails.accName`,
      //   selectedTourItem?.accName
      // );
      formik?.setFieldValue(
        `packageTourDetails.tourDestination`,
        selectedTourItem?.tourDestination
      );
      formik?.setFieldValue(
        `packageTourDetails.tourDescription`,
        selectedTourItem?.tourDescription
      );
      formik?.setFieldValue(
        `packageTourDetails.tourImage`,
        selectedTourItem?.tourImage
      );
      formik?.setFieldValue(
        `packageTourDetails.tourPrice`,
        selectedTourItem?.tourPrice
      );
      formik?.setFieldValue(
        `packageTourDetails.tourAvailability`,
        selectedTourItem?.tourAvailability
      );
      formik?.setFieldValue(
        `packageTourDetails.tourGuide`,
        selectedTourItem?.tourGuide
      );
      formik?.setFieldValue(
        `packageTourDetails.tourSeason`,
        selectedTourItem?.tourSeason
      );
    }
  }, [formik?.values?.packageTourDetails?.tourName]);

  return (
    <Grid container spacing={2}>
      <Typography variant="h5">Tour Details</Typography>
      <Grid item xs={12} fullWidth>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            Tour Name
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name={`packageTourDetails.tourName`}
            value={formik?.values?.packageTourDetails?.tourName}
            onChange={(e) => {
              formik.handleChange(`packageTourDetails.tourName`)(e);
              const selectedTourItem = tourList?.find(
                (tourItem) => tourItem.tourName === e.target.value
              );
              setSelectedTourItem(selectedTourItem);
            }}
            label="Accommodation Name"
          >
            {tourList?.map((tourItem) => {
              return (
                <MenuItem value={tourItem?.tourName}>
                  {tourItem?.tourName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>

      {/* <Grid item xs={12} fullWidth>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            Tour Name
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name={`packageTourDetails.tourName`}
            value={formik?.values?.packageTourDetails?.tourName}
            onChange={(e) => {
              formik.handleChange(`packageTourDetails.tourName`)(e);
              const selectedTourItem = tourList?.find(
                (tourItem) => tourItem.tourName === e.target.value
              );
              setSelectedTourItem(selectedTourItem);
            }}
            label="Accommodation Name"
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                  width: 250,
                },
              },
            }}
          >
            {tourList?.map((tourItem) => {
              return (
                <MenuItem value={tourItem?.tourName}>
                  {tourItem?.tourName}
                </MenuItem>
              );
            })}
            <MenuItem value={formik?.values?.packageTourDetails?.tourName}>
              <em>Add New</em>
            </MenuItem>
          </Select>
          {formik?.values?.packageTourDetails?.tourName &&
            !tourList?.find(
              (tourItem) =>
                tourItem.tourName ===
                formik?.values?.packageTourDetails?.tourName
            ) && (
              <TextField
                fullWidth
                label="New Tour Name"
                name={`packageTourDetails.tourName`}
                value={formik?.values?.packageTourDetails?.tourName}
                onChange={formik.handleChange}
              />
            )}
        </FormControl>
      </Grid> */}
      <Grid item xs={12}>
        <TextField
          label="Tour Destination"
          name={`packageTourDetails.tourDestination`}
          value={formik.values.packageTourDetails?.tourDestination}
          onChange={formik.handleChange}
          error={
            formik.touched.packageTourDetails?.tourDestination &&
            Boolean(formik.errors.packageTourDetails?.tourDestination)
          }
          helperText={
            formik.touched.packageTourDetails?.tourDestination &&
            formik.errors.packageTourDetails?.tourDestination
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Tour Description"
          name={`packageTourDetails.tourDescription`}
          value={formik.values.packageTourDetails?.tourDescription}
          onChange={formik.handleChange}
          error={
            formik.touched.packageTourDetails?.tourDescription &&
            Boolean(formik.errors.packageTourDetails?.tourDescription)
          }
          helperText={
            formik.touched.packageTourDetails?.tourDescription &&
            formik.errors.packageTourDetails?.tourDescription
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Tour Price"
          name={`packageTourDetails.tourPrice`}
          value={formik.values.packageTourDetails?.tourPrice}
          onChange={formik.handleChange}
          error={
            formik.touched.packageTourDetails?.tourPrice &&
            Boolean(formik.errors.packageTourDetails?.tourPrice)
          }
          helperText={
            <>
              {formik.touched.packageTourDetails?.tourPrice &&
                formik.errors.packageTourDetails?.tourPrice}
              {"Please enter the tour price in pounds"}
            </>
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            Tour Season
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name={`packageTourDetails.tourSeason`}
            value={formik?.values?.packageTourDetails?.tourSeason}
            onChange={formik?.handleChange}
            label="Tour Season "
          >
            {tourSeasonType?.map((item) => {
              return <MenuItem value={item?.value}>{item?.label}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Tour Image"
          name={`packageTourDetails.tourImage`}
          value={formik.values.packageTourDetails?.tourImage}
          onChange={formik.handleChange}
          error={
            formik.touched.packageTourDetails?.tourImage &&
            Boolean(formik.errors.packageTourDetails?.tourImage)
          }
          helperText={
            formik.touched.packageTourDetails?.tourImage &&
            formik.errors.packageTourDetails?.tourImage
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Tour Guide"
          name={`packageTourDetails.tourGuide`}
          value={formik.values.packageTourDetails?.tourGuide}
          onChange={formik.handleChange}
          error={
            formik.touched.packageTourDetails?.tourGuide &&
            Boolean(formik.errors.packageTourDetails?.tourGuide)
          }
          helperText={
            formik.touched.packageTourDetails?.tourGuide &&
            formik.errors.packageTourDetails?.tourGuide
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Tour Availability"
          name={`packageTourDetails.tourAvailability`}
          value={formik.values.packageTourDetails?.tourAvailability}
          onChange={formik.handleChange}
          error={
            formik.touched.packageTourDetails?.tourAvailability &&
            Boolean(formik.errors.packageTourDetails?.tourAvailability)
          }
          helperText={
            formik.touched.packageTourDetails?.tourAvailability &&
            formik.errors.packageTourDetails?.tourAvailability
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isAddTourChecked}
              onChange={handleChange}
              size="small"
              color="primary"
            />
          }
          label="Add this to the Tour Package List"
        />
      </Grid>
    </Grid>
  );
};

export default TourDetails;
