function displayTrips(trips) {
  const tripInfoDiv = document.getElementById("tripInfo");

  tripInfoDiv.innerHTML = "";
  console.log(trips);
  trips.forEach((trip) => {
    console.log("new", trip);
    const tripElement = document.createElement("div");
    tripElement.className = "trip";
    tripElement.id = `trip${trip.id}`;

    const tripInfoParagraph = document.createElement("p");
    tripInfoParagraph.className = "trip-info";
    tripInfoParagraph.textContent = `Trip ${trip.id}: ${trip.destinationID} - ${trip.status}`;

    tripElement.appendChild(tripInfoParagraph);
    tripInfoDiv.appendChild(tripElement);
  });
}

module.exports = {
  displayTrips,
};
