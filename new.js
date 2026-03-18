<!DOCTYPE html>
<html>
<body>

<h2>GET Idea</h2>

<p>JavaScript can change HTML attribute.</p>

<p>In this case JavaScript changes the value of the src (source) image.</p>

<button onclick="document.getElementById('myImage').src='d:\Downloads\source.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='d:\Downloads\giphy.gif'">Turn off the light</button>

</body>
</html>
