import { Dimensions, PixelRatio } from "react-native";
import { windowHeight, windowWidth } from "./globals";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");
const frame = { height: 926, width: 428 };

const widthScale = windowWidth / frame.width;
const heightScale = windowHeight / frame.height;

function setLayout(size, based = "width") {
  const newSize = based === "height" ? size * heightScale : size * widthScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const widthPixel = (size) => setLayout(size, "width");

const heightPixel = (size) => setLayout(size, "height");

const widthPercentage = (widthPercent) => {
  const elementWidth =
    typeof widthPercent === "number"
      ? widthPercent
      : Number.parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((windowWidth * elementWidth) / 100);
};

export {
  widthPixel as wp,
  screenWidth,
  screenHeight,
  widthPercentage as wpt,
  heightPixel as hp,
};
