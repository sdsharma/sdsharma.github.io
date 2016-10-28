$(document).ready(function() {
	// initializes the variables for map
	var height = $(window).height();
	var width = $(window).width();
	var routes = {};
	var longLat = d3.geo.albers()
		.translate([width*4/8, height/3])
		.scale(300000)
		.rotate([122.4194, 0])
		.center([0, 37.7749]);
	var geoPath = d3.geo.path().projection(longLat);
	var lines = d3.svg.line().x(function(m) { 
		return longLat([m.lon, m.lat])[0]; }).y(function(m) { 
			return longLat([m.lon, m.lat])[1]; }).interpolate("linear");
	var zoom = d3.behavior.zoom().scaleExtent([1, 1]);
	var svg = d3.select("#map")
		.insert("svg")
		.attr("height", height)
		.attr("width", width*3/4);
	svg.call(zoom);
	var jsonFiles = ["streets", "freeways", "arteries", "neighborhoods"]
	for(var i=0; i<4; i++){
		d3.json("sfmap/" + jsonFiles[i] + ".json", function(m) {
		    svg.selectAll("path")
		       .data(m.features)
		       .enter()
		       .append("path")
		       .attr("d", geoPath)
		       .attr("class", "mapoverlay");
		});
	}
	// calls functions for the map
	getRoutes();
	setTimeout(buttonActions, 2000);
	setInterval(refreshVehicles, 15000);
	setTimeout(function() {
		drawRoute();
		setInterval(refreshMap, 200);
	}, 2000);

	// gets all the different routes that exist
	function getRoutes(){
		var query = "http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=sf-muni";
		var retry = 0;
		var trains = ["L", "M", "N", "S", "F", "J", "KT"];
		d3.xml(query, function(error, xml) {
			if(error){
				console.log("Error Fetching Data Try Refreshing Page");
				return;
			}
			var json = $.xml2json(xml);
			$.each(json["route"], function(i,m) {
				var queryIn = "http://webservices.nextbus.com/service/publicXMLFeed?command=routeConfig&a=sf-muni&r=" + m.tag;
				d3.xml(queryIn, function(error, xml) {
					var json = $.xml2json(xml);
					routes[m.tag] = json.route;
					routes[m.tag]["vRefresh"] = false;
					var routeButton= "<div id=" + m.tag +  " class='button'>" + m.tag + "</div>";
					if ($.inArray(m.tag, trains) == -1) {
						$("#buses").append(routeButton);
					} else {
						$("#trains").append(routeButton);
					}
					getVehicles(m.tag);
				});
			});
		});
	}

	// gets up to date vehicle movement information
	function getVehicles(routeGiven) {
		var query = "http://webservices.nextbus.com/service/publicXMLFeed?command=vehicleLocations&a=sf-muni&r=" + routeGiven + "&t=" + routes[routeGiven]["lastTime"];
		d3.xml(query, function(error, xml) {
			if(error){
				console.log("Error Fetching Data Try Refreshing Page");
				return;
			}
			json = $.xml2json(xml);
			routes[routeGiven]["lastTime"] = json["lastTime"]["time"];
			if (typeof routes[routeGiven]["vehicles"] == "undefined") {
				routes[routeGiven]["vehicles"] = [];
			}
			var vehicles = routes[routeGiven]["vehicles"];
			if (typeof json.vehicle !== "undefined") {
				for (var i = 0; i < json.vehicle.length; i++) {
					var newVehicle = true;
					for (var j = 0; j < vehicles.length; j++) {
						if (vehicles[j]["id"] == json.vehicle[i]["id"]) {
							json.vehicle[i].lat_init = vehicles[j].lat_init;
							json.vehicle[i].lon_init = vehicles[j].lon_init;
							vehicles[j] = json.vehicle[i];
							newVehicle = false;
							break;
						}
					}
					if (newVehicle) {
						json.vehicle[i].lat_init = json.vehicle[i].lat;
						json.vehicle[i].lon_init = json.vehicle[i].lon;
						routes[routeGiven]["vehicles"].push(json.vehicle[i]);
					}
				}
			}
		});
	}

	// draws the different routes on the map
	function drawRoute() {
		$.each(routes, function(i,route) {
			var p = svg.selectAll("path.route")
		       .data(routes[route.tag]["path"])
		       .enter()
		       .append("path")
		       .attr("d", function(m) { return lines(m.point); })
		       .attr("class", "path_" + route.tag)
		       .attr("stroke", "#" + routes[route.tag]["color"])
		       .attr("stroke-width", 1.5)
		       .attr("fill", "none")
		       .attr("visibility", "hidden");
		});
	}

	// draws the vehicles as circles
	function showRouteVehicles(routeGiven) {
		var vehicles = svg.selectAll(".route_" + routeGiven)
			.data(routes[routeGiven]["vehicles"]);
		vehicles
		    .transition()
		    .duration(200)
		    .ease("linear")
			.attr("transform", function(m) {
				var translateFunc = "translate(" + (longLat([m.lon, m.lat])[0] - longLat([m.lon_init, m.lat_init])[0]) + 
					"," + (longLat([m.lon, m.lat])[1] - longLat([m.lon_init, m.lat_init])[1]) + ")";
				return translateFunc;
			});
		vehicles.enter()
			.append("g")
			  	.attr("class", function(m) { return "route_" + routeGiven; })
			  	.attr("visibility", function(){
			  		if (routes[routeGiven]["vRefresh"]) {
			  			return "visible";
			  		} else {
			  			return "hidden";
			  		}
			  	})
		  	.append("circle")
		        .attr("cy", function(m) { return longLat([m.lon, m.lat])[1]; })
		        .attr("cx", function(m) { return longLat([m.lon, m.lat])[0]; })
		    	.attr("fill", "#" + routes[routeGiven]["color"])
		    	.attr("r", 4);
		vehicles.exit().remove();
	}

	// gets the new information for vehicle locations
	function refreshVehicles() {
		$.each(routes, function(i,m) {
			if (m["vRefresh"]) {
				getVehicles(m.tag);
			}
		});
	}

	// Shows the vehicles on the map
	function refreshMap() {
		$.each(routes, function(i,m) {
			showRouteVehicles(m.tag);
		});
	}

	// Bind the click function to the buttons, and toggle vehicle refresh
	function buttonActions() {
		$(".button").on("click", function() {
			var routeGiven = $(this).attr("id");
			if ($(this).hasClass("clicked")) {
				$(this).removeClass("clicked");
				routes[routeGiven]["vRefresh"] = false;
				$(".route_" + routeGiven + "," + ".path_" + routeGiven).css({
					"visibility": "hidden"
				});
				$("#"+routeGiven).css({
					"background-color": "#fff",
					"color": "#000"
				});
			} else {
				$(this).addClass("clicked");
				routes[routeGiven]["vRefresh"] = true;
				$(".route_" + routeGiven + "," + ".path_" + routeGiven).css({
					"visibility": "visible"
				});
				$("#"+routeGiven).css({
					"background-color": "#" + routes[routeGiven]["color"],
					"color": "#fff"
				});
			}
			return false;
		});
	}

});