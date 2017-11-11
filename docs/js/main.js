var map = L.map('map');

var layer = Tangram.leafletLayer({
    scene: 'scene.yaml'
});
map.setView([32.72,-117.15],12);
window.layer = layer;
window.addEventListener('load', function () {
  layer.on('init', function() {
    debugger
  });
  layer.addTo(map);
});
