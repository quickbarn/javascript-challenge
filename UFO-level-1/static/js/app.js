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
  var city = d3.select("#city");
  var state = d3.select("#state");
  var country = d3.select("#country");
  var shape = d3.select("#shape");
  // utilize the datetime and turn it into a value to use
  var filterValue = filterElement.property("value");
  var filterValue2 = city.property("value");
  var filterValue3 = state.property("value");
  var filterValue4 = country.property("value");
  var filterValue5 = shape.property("value");
 

  console.log(filterValue);
  console.log(tableData);

  var filteredData1 = tableData.filter(tableData => tableData.datetime === filterValue)
                              .filter(tableData => tableData.city === filterValue2)
                              .filter(tableData => tableData.state === filterValue3)
                              .filter(tableData => tableData.country === filterValue4)
                              .filter(tableData => tableData.shape === filterValue5);
  
  console.log(filteredData);

  filteredData1.forEach((ufoReport1) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport1).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
