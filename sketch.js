// API Key for MapboxGL. Get one here:
// https://www.mapbox.com/studio/account/tokens/
const key = 'pk.eyJ1Ijoic3cxMTU1MTciLCJhIjoiY2pud2R1b2w1MDVtejNwcGRwYTd4N2ZvMiJ9.AE55H-c3Gq_7YvAEXvqaKw';

// Options for map
const options = {
  lat: 39.3292,
  lng: -82.1013,
  zoom: 13,
  style: 'mapbox://styles/sw115517/ckma06ffb2no717n4psvknbz7',
  pitch: 0,
};

// Create an instance of MapboxGL
const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //.parent('canvasContainer');

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);



}

// The draw loop is fully functional but we are not using it for now.
function draw() {
  clear();

  fill('#F2C9C9');
  stroke('#A61103');
  strokeWeight(2);
  const zoom = myMap.zoom();
  const walmartVax = myMap.latLngToPixel(39.33567, -82.066879);
  ellipse(walmartVax.x, walmartVax.y, 14, 14);
  if (dist(walmartVax.x, walmartVax.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(13);
     fill('#F2C9C9');
  stroke('#A61103');
  strokeWeight(2);

    text("Walmart",walmartVax.x,walmartVax.y);
  } 

  
  
  const krogerVax = myMap.latLngToPixel (39.33649, -82.06834);
  ellipse(krogerVax.x, krogerVax.y, 14, 14);
  if (dist(krogerVax.x, krogerVax.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(13);
     fill('#F2C9C9');
  stroke('#A61103');
  strokeWeight(2);

    text("Kroger",krogerVax.x,krogerVax.y);
  } 

  
  const oblenessVax = myMap.latLngToPixel (39.32864, -82.11544);
  ellipse(oblenessVax.x, oblenessVax.y, 14, 14);
  if (dist(oblenessVax.x, oblenessVax.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(13);
     fill('#F2C9C9');
  stroke('#A61103');
  strokeWeight(2);


    text("The Drugstore At O'Bleness",oblenessVax.x,oblenessVax.y);
  } 
  
  const cvscourtVax = myMap.latLngToPixel (39.32862, -82.10115);
  ellipse(cvscourtVax.x, cvscourtVax.y, 14, 14);
  if (dist(cvscourtVax.x, cvscourtVax.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(13);
    fill('#F2C9C9');
  stroke('#A61103');
  strokeWeight(2);


    text("CVS Pharmacy",cvscourtVax.x,cvscourtVax.y);}
  
  const cvsstateVax = myMap.latLngToPixel (39.33689, -82.079);
  ellipse(cvsstateVax.x, cvsstateVax.y, 14, 14);
   if (dist(cvsstateVax.x, cvsstateVax.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(13);
    fill('#F2C9C9');
  stroke('#A61103');
  strokeWeight(2);


    text("CVS Pharmacy",cvsstateVax.x,cvsstateVax.y);}
}
  





