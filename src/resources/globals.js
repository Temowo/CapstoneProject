import { Dimensions, Platform } from "react-native";

const isAndroid = Platform.OS === "android";
const isIos = Platform.OS === "ios";
const isWeb = Platform.OS === "web";
const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const validEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validPassword = (password) => {
    return password.length >= 8;
  };

export { isAndroid, isIos, isWeb, windowHeight, windowWidth, validEmail, validPassword };