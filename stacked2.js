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
