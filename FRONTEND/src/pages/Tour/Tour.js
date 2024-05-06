import React, { Fragment, useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import Header from "../../components/Header";
import TourItem from "./TourItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Tour() {
  const navigate = useNavigate();
  const [tourList, setTourList] = useState([]);
  const [addNew, setAddNew] = useState(false);

  const getAllTourList = async () => {
    try {
      const response = await api.get("/tourDetails");
      setTourList(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTourList();
  }, []);

  return (
    <>
      <Header />
      <Fragment>
        {/* <input
          type="text"
          placeholder="Search destination"
          //value={searchTerm}
          //onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
        {/* <Button
          style={{ float: "right", marginTop: "20px", marginRight: "10px" }}
          onClick={() => navigate("/add-new-package")}
        >
          <AddCircleIcon
            style={{
              fontSize: "48px",
              color: "#105719",
            }}
          />
        </Button> */}

        {tourList?.map((tourListItem) => (
          <TourItem
            key={tourListItem?.packageID}
            data={{
              tourID: tourListItem?.tourID,
              tourName: tourListItem?.tourName,
              tourDestination: tourListItem?.tourDestination,
              tourDescription: tourListItem?.tourDescription,
              tourPrice: tourListItem?.tourPrice,
              tourImage: tourListItem?.tourImage,
              tourGuide: tourListItem?.tourGuide,
              tourAvailability: tourListItem?.tourAvailability,
              tourSeason: tourListItem?.tourSeason,
            }}
            getAllTourList={getAllTourList}
          />
        ))}
      </Fragment>
    </>
  );
}

export default Tour;
