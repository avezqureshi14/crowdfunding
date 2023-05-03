import "./App.css";
import Single from "./components/DetailsPage/Single";
import Featured from "./components/Featured/Featured";
import Featureds from "./components/Featured/Featureds";
import MyFooter from "./components/Footer";
import CampaignForm from "./components/Form";
import Home from "./components/Home";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/campaign" element={<Single />}></Route>
          <Route path="/form" element={<CampaignForm/>}></Route>
        </Routes>
      </BrowserRouter>
      <MyFooter />
    </div>
  );
}

export default App;
