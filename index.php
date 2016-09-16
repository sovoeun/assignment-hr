<!DOCTYPE html>
<html>
	<head>
		<meta charset='UTF-8'>   
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Assignment</title>
		<link rel="stylesheet" href="style/css/pure-min.css"/>
		<link rel="stylesheet" href="style/css/style.css"/>
		<link rel="stylesheet" href="style/css/grids-responsive-min.css"/>
		<script src="style/js/jquery-3.1.0.min.js"></script>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6v5-2uaq_wusHDktM9ILcqIrlPtnZgEk&sensor=false">
</script>
	</head>
	<body>
	<center>	
		<table  class="pure-table pure-table-bordered space-top" width="50%" id="displayData">
			<tr>
				<td>No</td>
				<td>Name</td>
				<td>Price</td>
				<td>Tags</td>
				<td>Dimensions</td>
				<td>Maps</td>
			</tr>
		</table>
		<div id="myModal" class="modal">
		  <div class="modal-content">
			<span class="close">×</span>
			<div id="gmap"></div>
		  </div>
		</div>
	</center>
	<script type="text/javascript" src="style/js/js.js"></script>
	</body>
</html>

