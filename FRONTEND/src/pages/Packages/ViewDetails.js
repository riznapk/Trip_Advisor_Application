import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import PackageForm from "./PackageForm";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 800,
    margin: "auto",
    marginTop: "50px",
    marginBottom: "50px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function ViewDetails() {
  const navigate = useNavigate();
  const selectedPackageDetails = useSelector(
    (state) => state?.package?.selectedPackage
  );
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  const handleUpdateDetails = () => {
    setEdit(true);
  };

  return (
    <>
      {edit ? (
        <PackageForm
          selectedPackageDetails={selectedPackageDetails}
          edit={edit}
          setEdit={setEdit}
        />
      ) : (
        <>
          <Header />
          <Card className={classes.root}>
            <CardHeader
              title={selectedPackageDetails?.packageName}
              subheader={selectedPackageDetails?.packageDestination}
            />
            <CardMedia
              className={classes.media}
              image={selectedPackageDetails?.packageImage}
              title={selectedPackageDetails?.packageName}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ mb: 2 }}
              >
                {selectedPackageDetails?.packageDescription}
              </Typography>
              <Typography variant="h6" color="primary">
                Price: {selectedPackageDetails?.packagePrice}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: {selectedPackageDetails?.packageDuration}{" "}
                {selectedPackageDetails?.packageDurationType}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Accommodation:{" "}
                {selectedPackageDetails?.packageAccommodationDetails?.accName}
                {
                  selectedPackageDetails?.packageAccommodationDetails?.accType
                }-{" "}
                {
                  selectedPackageDetails?.packageAccommodationDetails
                    ?.accDuration
                }{" "}
                {
                  selectedPackageDetails?.packageAccommodationDetails
                    ?.accDurationType
                }
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Tour: {selectedPackageDetails?.packageTourDetails?.tourName} (
                {selectedPackageDetails?.packageTourDetails?.tourDestination}) -{" "}
                {selectedPackageDetails?.packageTourDetails?.tourPrice} -{" "}
                {selectedPackageDetails?.packageTourDetails?.tourAvailability}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Transport:{" "}
                {selectedPackageDetails?.packageTransportDetails?.transportType}{" "}
              </Typography>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aliginContents: "center",
                  my: 1,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdateDetails}
                >
                  Update Details
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
}

export default ViewDetails;
