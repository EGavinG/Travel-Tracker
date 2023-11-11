function displayTrips(trips) {
  const tripInfoDiv = document.getElementById("tripInfo");

  tripInfoDiv.innerHTML = "";

  trips.forEach((trip) => {
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

// Function to display total amount spent on trips this year in a specific div with class "spent"
function displayTotalAmountSpent(totalAmount) {
  const totalAmountDiv = document.createElement("div");
  totalAmountDiv.className = "spent";

  const totalAmountText = document.createTextNode(
    `Total amount spent on trips this year: $${totalAmount}`
  );
  totalAmountDiv.appendChild(totalAmountText);

  const totalAmountDivContainer = document.getElementById("totalAmountDiv");
  if (totalAmountDivContainer) {
    totalAmountDivContainer.appendChild(totalAmountDiv);
  } else {
    console.error("Element with id 'totalAmountDiv' not found.");
  }
}

function getTotalAmountSpentThisYear(trips) {
  const currentYear = new Date().getFullYear();
  let totalAmount = 0;

  trips.forEach((trip) => {
    const tripDate = new Date(trip.date);
    const tripYear = tripDate.getFullYear();

    // Check if the trip is in the current year
    if (tripYear === currentYear) {
      const destination = destinations.find(
        (dest) => dest.id === trip.destinationID
      );
      const traveler = travelers.find((user) => user.id === trip.userID);

      if (destination && traveler) {
        const lodgingCost =
          destination.estimatedLodgingCostPerDay * trip.duration;
        const flightCost =
          destination.estimatedFlightCostPerPerson * trip.travelers;
        const totalCost = lodgingCost + flightCost;
        const totalCostWithFee = totalCost + totalCost * 0.1; // Adding 10% fee

        totalAmount += totalCostWithFee;
      }
    }
  });
  console.log(totalAmount);
  return totalAmount;
}

module.exports = {
  displayTrips,
  getTotalAmountSpentThisYear,
  displayTotalAmountSpent,
};
