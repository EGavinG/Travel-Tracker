import "./css/styles.css";
import "./images/turing-logo.png";
import { fetchAPICall } from "./apiCalls";
import { displayTrips } from "./domUpdates";

window.addEventListener("load", function () {
  Promise.all([fetchAPICall("trips")]).then((allData) => {
    const trips = allData[0].trips.filter((trip) => trip.userID === 50);
    displayTrips(trips);
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
