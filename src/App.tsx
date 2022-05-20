import { useState } from "react";
import Accordion from "./Accordion";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";


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
