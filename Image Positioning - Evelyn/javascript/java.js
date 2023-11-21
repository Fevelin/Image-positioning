// how to position images making an arc in html and css

var points = document.getElementsByClassName("point");

/**
 * Calculate points positions making an arc
 */
const calculatePointsPositions = () => {

  const TOTAL_WIDTH = window.innerWidth; // in px
  const TOTAL_HEIGHT = window.innerHeight; // in px
  const IMAGE_WIDTH = 100; // width in px
  const IMAGE_HEIGHT = 200; // height in px

  //get maximum left and maximum top for the image location
  const MAX_LEFT = TOTAL_WIDTH - IMAGE_WIDTH;
  const MAX_TOP = TOTAL_HEIGHT - IMAGE_HEIGHT;

  // manually position images
  points[0].style.left = 0 + "px";
  points[0].style.top = MAX_TOP + "px";

  points[1].style.left = 1 / 5 * MAX_LEFT + "px";
  points[1].style.top = 1 / 2 * MAX_TOP + "px";

  points[2].style.left = 2 / 5 * MAX_LEFT + "px";
  points[2].style.top = 0 + "px";

  points[3].style.left = 3 / 5 * MAX_LEFT + "px";
  points[3].style.top = 0 + "px";

  points[4].style.left = 4 / 5 * MAX_LEFT + "px";
  points[4].style.top = 1 / 2 * MAX_TOP + "px";

  points[5].style.left = MAX_LEFT + "px";
  points[5].style.top = MAX_TOP + "px";
}

// calculate points positions at init
calculatePointsPositions();

// recalculate at each resize of the window so that page is responsive
window.onresize = () => {
  calculatePointsPositions();
}