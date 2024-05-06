import React, { Fragment, useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import Header from "../../components/Header";
import PackageItem from "./PackageItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ViewDetails from "./ViewDetails";

function Package() {
  const navigate = useNavigate();
  const [packageList, setPackageList] = useState([]);

  const getAllPackageList = async () => {
    try {
      const response = await api.get("/packageDetails");
      console.log("response get data from sb", response);
      setPackageList(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPackageList();
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
        <Button
          style={{ float: "right", marginTop: "20px", marginRight: "10px" }}
          onClick={() => navigate("/add-new-package")}
        >
          <AddCircleIcon
            style={{
              fontSize: "48px",
              color: "#105719",
            }}
          />
        </Button>

        {packageList?.map((packageListItem) => (
          <PackageItem
            key={packageListItem?.packageID}
            data={{
              packageID: packageListItem?.packageID,
              packageName: packageListItem?.packageName,
              packageDuration: packageListItem?.packageDuration,
              packageDescription: packageListItem?.packageDescription,
              packageDestination: packageListItem?.packageDestination,
              packagePrice: packageListItem?.packagePrice,
              packageImage: packageListItem?.packageImage,
              packageDurationType: packageListItem?.packageDurationType,
              packageAccommodationDetails:
                packageListItem?.packageAccommodationDetails,
              packageTourDetails: packageListItem?.packageTourDetails,
              packageTransportDetails: packageListItem?.packageTransportDetails,
              peopleCount: packageListItem?.peopleCount,
            }}
            getAllPackageList={getAllPackageList}
          />
        ))}
      </Fragment>
    </>
  );
}

export default Package;
