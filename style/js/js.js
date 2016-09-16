var modal = document.getElementById('myModal');
		var span = document.getElementsByClassName("close")[0];
		span.onclick = function() {
			modal.style.display = "none";
		}
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	
		function initialize(lat,lon) {
			modal.style.display = "block";
			var myLatlng = new google.maps.LatLng(lat,lon);
			var myOptions = {
				zoom:7,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			map = new google.maps.Map(document.getElementById("gmap"), myOptions);
			marker = new google.maps.Marker({
				position: myLatlng,
				map: map
			});
			google.maps.event.addListener(map, 'center_changed', function () {
				var location = map.getCenter();
				document.getElementById("lat").innerHTML = location.lat();

				document.getElementById("lon").innerHTML = location.lng();
				placeMarker(location);
			});
			google.maps.event.addListener(map, 'zoom_changed', function () {
				zoomLevel = map.getZoom();
				document.getElementById("zoom_level").innerHTML = zoomLevel;
			});
			google.maps.event.addListener(marker, 'dblclick', function () {
				zoomLevel = map.getZoom() + 1;
				if (zoomLevel == 20) {
					zoomLevel = 10;
				}
				document.getElementById("zoom_level").innerHTML = zoomLevel;
				map.setZoom(zoomLevel);
			});

			function placeMarker(location) {
				var clickedLocation = new google.maps.LatLng(location);
				marker.setPosition(location);
			}
		}
	
		$(document).ready(function() {
		$.getJSON("data.json", function(data) {
			$.each(data, function(i, item) {
				var tags="",dimension="",length="",width="",height="",lat=0.00,lon=0.00;
				var myButton = ['pure-button', 'pure-button pure-button-primary', 'button-success pure-button',
				'button-error pure-button','button-warning pure-button','button-secondary pure-button']; 
				if (item.hasOwnProperty('tags')) {
					$.each(item.tags,function(j,value){
						var rand = myButton[Math.floor(Math.random() * myButton.length)];
						tags +="<button class='"+ rand +" button-width'>" + value + "</button></br></br>";
					});
					console.log(tags);
				}
				if(item.hasOwnProperty('dimensions')){
						if(item.dimensions.hasOwnProperty('length')){
							length=item.dimensions.length;
						}
						if(item.dimensions.hasOwnProperty('width')){
							width=item.dimensions.width;
						}
						if(item.dimensions.hasOwnProperty('height')){
							height=item.dimensions.height;
						}
				}
				if(item.hasOwnProperty('warehouseLocation')){
					if(item.warehouseLocation.hasOwnProperty('latitude')){
						lat=item.warehouseLocation.latitude;
					}
					if(item.warehouseLocation.hasOwnProperty('longitude')){
						lon=item.warehouseLocation.longitude;
					}
				}
				var row = $("<tr><td>" + item.id + "</td><td>" + item.name + "</td><td>" + item.price + "</td><td>" + tags + "</td><td>" + "Length : " + length + " <br/>Width : " + width + "<br/>Height : " + height + "</td><td><a href='#' id='showMaps' class='pure-button pure-button-primary' onclick='initialize("+ lat +","+ lon +")'>View Maps</a></td></tr>");
                $("#displayData").append(row);
			});
			        
		});     
	});