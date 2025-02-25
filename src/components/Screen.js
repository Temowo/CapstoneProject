import SafeAreaBox from "./base/SafeAreaBox";
import { StatusBar } from "react-native";

export default function Screen({ children, statusbarProps, ...rest }) {
    return (
      <SafeAreaBox flex={1} {...rest}>
        <StatusBar {...statusbarProps} />
        {children}
      </SafeAreaBox>
    );
  }