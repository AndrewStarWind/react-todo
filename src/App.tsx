import { useState } from "react";
import Accordion from "./components/Accordion";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./css/App.css";


function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="app">
      <Header searchValue={searchValue} onSearchCallback={setSearchValue} />
      <Accordion />
      <Content searchValue={searchValue} />
      <Footer />
    </div>
  );
}

export default App;
