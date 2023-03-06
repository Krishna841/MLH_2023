import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Software from "./Components/Software/Software";
import Form from "./Containers/Form/Form";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Software" element={<Software />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
