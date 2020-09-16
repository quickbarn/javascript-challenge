// from data.js
var tableData = data;

// YOUR CODE HERE!

//create variable to hold values
var tbody = d3.select("tbody");

console.log(tableData);

//append from loop into list/array
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// select button, button id = <name>
var button = d3.select("#filter-btn");

// select input field, input class = <name>
var inputField = d3.select("#form-control");

button.on("click", filterClick);
inputField.on("submit", filterClick);

// This function is triggered when the button is clicked
function filterClick() {
  console.log("Filter activated");

  //not a refreshed page
  d3.event.preventDefault();
  
  //erase the current data from table
  tbody.html("");

  //take the date entered into id = "datetime"
  var filterElement = d3.select("#datetime");

  // utilize the datetime and turn it into a value to use
  var filterValue = filterElement.property("value");

  console.log(filterValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime == filterValue);

  console.log(filteredData);

  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
