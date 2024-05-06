import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";

function TourItem(props) {
  const { data, getAllPackageList } = props;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    //navigate("/view-details");
  };

  const handleDelete = async () => {
    //   try {
    //     const response = await api.delete("/packageDetails", {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       data: {
    //           tourID: data?.tourID,
    //       },
    //     });
    //     console.log("ererer***********", response);
    //     if (response?.data?.message == "success") {
    //       getAllPackageList();
    //       alert("package deleted");
    //     }
    //   } catch (err) {
    //     console.error(err);
    //   }
  };

  return (
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
            src={data?.tourImage}
            alt={data?.tourImage}
            style={{
              width: "300px",
              height: "300px",
            }}
          />
          <div>
            <Typography variant="h5" component="h2">
              {data?.tourName}
            </Typography>
            <Typography variant="body2">{data?.tourDescription}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Destination: {data?.tourDestination}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Availability: {data?.tourAvailability}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Guide: {data?.tourGuide}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Price: {data?.tourPrice}
            </Typography>
          </div>
        </div>
      </CardContent>
      {/* <CardActions>
        <Button variant="contained" color="primary" onClick={handleViewDetails}>
          View Details
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleDelete()}
        >
          Delete
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default TourItem;
