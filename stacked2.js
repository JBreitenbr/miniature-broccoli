// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 110, left: 50},
    width = 360 - margin.left - margin.right,
    height = 360 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
// Parse the Data
d3.csv("https://raw.githubusercontent.com/JBreitenbr/Music-Genres/refs/heads/main/spoti_stack.csv", function(data) {

  // List of subgroups = header of the csv files = soil condition here
  var subgroups = data.columns.slice(1)

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  var groups = d3.map(data, function(d){return(d.group)}).keys()
    
