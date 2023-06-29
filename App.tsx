import Loading from "./src/screens/Loading";
import Routes from "./src/routes";
import Login from "./src/screens/Login";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <Routes/>
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent />
    </>
  );
}

