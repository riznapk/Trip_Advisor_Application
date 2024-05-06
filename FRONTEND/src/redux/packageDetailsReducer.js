import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  packageDetails: {},
  package: {},
  packageAccommodationDetails: {},
  packageTourDetails: {},
  packageTransportDetails: {},
  selectedPackage: {},
};
const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    addPackageInfo(state, action) {
      state.package = { ...action?.payload };
      console.log("package detaisl  state.package", state.package);
    },
    addPackageAccommodationDetails(state, action) {
      state.packageAccommodationDetails = { ...action?.payload };
      console.log(
        "package state.packageAccommodationDetails",
        state.packageAccommodationDetails
      );
    },
    addPackageTourDetails(state, action) {
      state.packageTourDetails = { ...action?.payload };
      console.log("package state.packageTourDetails", state.packageTourDetails);
    },
    addPackageTransportDetails(state, action) {
      state.packageTransportDetails = { ...action?.payload };
      console.log(
        "package  state.packageTransportDetails",
        state.packageTransportDetails
      );
    },
    addPackageDetails(state, action) {
      state.packageDetails = { ...action?.payload };
      console.log("package state.packageDetails", state.packageDetails);
    },
    selectedPackageViewDetails(state, action) {
      state.selectedPackage = { ...action?.payload };
      console.log("package state.selectedPackage", state.selectedPackage);
    },
    clearPackageInfo(state, action) {
      state.packageDetails = {};
      state.package = {};
      state.packageAccommodationDetails = {};
      state.packageTourDetails = {};
      state.packageTransportDetails = {};
    },
  },
});

export const {
  addPackageInfo,
  addPackageAccommodationDetails,
  addPackageTransportDetails,
  addPackageTourDetails,
  addPackageDetails,
  selectedPackageViewDetails,
  clearPackageInfo,
} = packageSlice.actions;

export default packageSlice.reducer;
