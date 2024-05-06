export const formatPackageData = (data) => {
  const packageDetails = {
    packageID: data?.packageID,
    packageName: data?.packageName,
    packageDuration: data?.packageDuration,
    packageDurationType: data?.packageDurationType,
    packageDescription: data?.packageDescription,
    packageDestination: data?.packageDestination,
    packagePrice: data?.packagePrice,
    packageImage: data?.packageImage,
    peopleCount: parseInt(data?.peopleCount),
    packageAccommodationDetails: {
      accID: data?.packageAccommodationDetails?.accID,
      accName: data?.packageAccommodationDetails?.accName,
      accType: data?.packageAccommodationDetails?.accType,
      accPrice: parseInt(data?.packageAccommodationDetails?.accPrice),
      accImage: data?.packageAccommodationDetails?.accImage,
      accDuration: data?.packageAccommodationDetails?.accDuration,
      accDurationType: data?.packageAccommodationDetails?.accDurationType,
    },
    packageTourDetails: {
      tourID: data?.packageTourDetails.tourID,
      tourName: data?.packageTourDetails.tourName,
      tourDestination: data?.packageTourDetails.tourDestination,
      tourDescription: data?.packageTourDetails.tourDescription,
      tourPrice: parseInt(data?.packageTourDetails.tourPrice),
      tourImage: data?.packageTourDetails.tourImage,
      tourGuide: data?.packageTourDetails.tourGuide,
      tourAvailability: data?.packageTourDetails.tourAvailability,
    },
    packageTransportDetails: {
      transportID: data?.packageTransportDetails.transportID,
      transportType: data?.packageTransportDetails.transportType,
      rentalPrice: parseInt(data?.packageTransportDetails.rentalPrice),
      carCount: parseInt(data?.packageTransportDetails.carCount),
      dayCount: parseInt(data?.packageTransportDetails.dayCount),
      ticketPrice: parseInt(data?.packageTransportDetails?.ticketPrice),
      ticketCount: parseInt(
        data?.pacpackageTransportDetailskageID?.ticketCount
      ),
    },
  };
};

export const accomodationDurationType = [
  {
    value: "hourly",
    label: "Hour(s)",
  },
  {
    value: "daily",
    label: "Day(s)",
  },
];

export const tourSeasonType = [
  {
    value: "high",
    label: "High Season",
  },
  {
    value: "shoulder",
    label: "Shoulder Season",
  },
  {
    value: "low",
    label: "Low Season",
  },
];

export const formatDataDurationType = (val) => {
  if (val == "week") return "Weeks";
  else if (val == "month") return "Months";
  else if (val == "day") return "Days";
  else return "";
};
