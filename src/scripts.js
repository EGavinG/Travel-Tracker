import "./css/styles.css";
import "./images/turing-logo.png";
import { fetchAPICall } from "./apiCalls";
import {
  displayTrips,
  getTotalAmountSpentThisYear,
  displayTotalAmountSpent,
} from "./domUpdates";

const userID = 6;

window.addEventListener("load", function () {
  Promise.all([
    fetchAPICall("travelers", userID),
    fetchAPICall("trips"),
    fetchAPICall("destinations"),
  ]).then((allData) => {
    const user = allData[0];
    const trips = allData[1].trips.filter((trip) => trip.userID === user.id);
    const destination = allData[2];
    displayTrips(trips);
    displayTotalAmountSpent(user, trips, destination);
    getTotalAmountSpentThisYear(trips, destination, userID);
  });
});

// login concept sandbox
// id = form.id;
// password = form.password;

// if (password = "travel") {
//   const user = fetchAPICall("travelers", id)[0];
//   if (user) {
//     const userTrips = fetchAPICall("trips").filter((trip) => trip.userID === user.id);
//     // const userTripDestinationIDs = userTrips.map(destinationID);
//     // const userDestinations = fetchAPICall("destinations").filter((destination) => userTripDestinationIDs.includes(destination.id));
//   };
// };
