# GoogleMapsMarkerBuilder

A lightweight JavaScript helper for the Google Maps JavaScript API. It places colored markers, opens an info window when a marker is clicked (content comes from your own builder function), and adds a legend to the map.

## Usage

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
<script src="GoogleMarkerBuilder.js"></script>
<script>
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.03, lng: 121.56 },
    zoom: 12
  });

  var builder = new GoogleMarkerBuilder(map, function (info) {
    return "<b>" + info.name + "</b>";
  });

  builder.setMarkers([
    { lat: 25.03, lng: 121.56, color: "red", name: "Taipei 101" }
  ]);

  builder.setLegend([{ color: "red", name: "Landmark" }]);
</script>
```

Supported marker colors: `blue`, `yellow`, `green`, `ltblue`, `orange`, `pink`, `purple`, `red`. An unknown color or no color uses `blue`.

See `demo.html` for a full example.

## License

[MIT](LICENSE) © 2016 Ryan Juan
