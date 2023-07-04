import Routes from "./src/routes";
import { StatusBar } from "react-native";
import Settings from "./src/screens/Settings";

export default function App() {
  return (
    <>
      <Routes/>
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent />
    </>
  );
}

