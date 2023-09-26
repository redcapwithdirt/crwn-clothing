import Home from "./components/routes/home/home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation";
import Signin from "./components/routes/sign-in/sign-in";

const Shop = () => {
  return (
    <div>I am the shop page</div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Signin />} />
      </Route>
    </Routes>
  );
}

export default App;
