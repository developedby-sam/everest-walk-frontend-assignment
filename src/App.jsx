import { Routes, Route } from "react-router-dom";
// components
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shoppage/shoppage.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shoppage />} />
      </Routes>
    </div>
  );
}

export default App;
