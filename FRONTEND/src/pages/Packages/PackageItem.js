import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";
import ViewDetails from "./ViewDetails";
import { selectedPackageViewDetails } from "../../redux/packageDetailsReducer";
import { formatDataDurationType } from "../../assets/utils";

function PackageItem(props) {
  const { data, getAllPackageList } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleViewDetails = () => {
    dispatch(selectedPackageViewDetails(data));
    navigate(`/view-details`);
  };

  const handleDelete = async () => {
    try {
      const response = await api.delete("/packageDetails", {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          packageID: data.packageID,
        },
      });

      if (response?.data?.message == "success") {
        getAllPackageList();
        alert("package deleted");
      }
    } catch (err) {
      console.error(err);
    }
  };
  console.log("data from package item", data);

  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          m: 4,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          p: 2,
          ml: 10,
          mr: 10,
        }}
      >
        <CardContent>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "400px auto",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <img
              src={data?.packageImage}
              alt={data?.packageImage}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <div>
              <Typography variant="h5" component="h2">
                {data?.packageName}
              </Typography>
              <Typography variant="body2">
                {data?.packageDescription}
              </Typography>
              <Typography sx={{ mb: 1.5, mt: 1 }} color="text.secondary">
                Duration: {data?.packageDuration} -{" "}
                {formatDataDurationType(data?.packageDurationType)}
              </Typography>
              <Typography sx={{ mb: 1.5, mt: 1 }} color="text.secondary">
                People Count: {data?.peopleCount} people
              </Typography>
              <Typography sx={{ mb: 1.5, mt: 1 }} color="text.secondary">
                Transportation Details:{" "}
                {data?.packageTransportDetails?.transportType} - £
                {data?.packageTransportDetails?.transportPrice}
              </Typography>

              <Typography sx={{ mb: 1.5, mt: 1 }} color="text.secondary">
                Accommodation Details:{" "}
                {data?.packageAccommodationDetails?.accName} - £
                {data?.packageAccommodationDetails?.accPrice}
              </Typography>
              <Typography sx={{ mb: 1.5, mt: 1 }} color="text.secondary">
                Tour Details: {data?.packageTourDetails?.tourName} - £
                {data?.packageTourDetails?.tourPrice
                  ? data?.packageTourDetails?.tourPrice
                  : ""}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Price: £{data?.packagePrice}
              </Typography>
            </div>
          </div>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default PackageItem;
