import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Invoices from "./pages/Invoices";
import CreateInvoice from "./pages/CreateInvoice";
import ViewInvoice from "./pages/ViewInvoice";

function App() {
  const [data, setData] = useState([]);

  const [filtered, setFiltered] = useState(["Draft", "Pending", "Paid"]);
  const [show, setShow] = useState(false);
  const [addItemTable, setAddItemTable] = useState(false);
  const [darkLight, setDarkLight] = useState(true);
  const [getInvoice, setGetInvoice] = useState(0);
  const [arrowIcon, setArrowIcon] = useState(false)
  const [list, setList] = useState(["Net 1 Day", "Net 7 Day"], "Net 14 Day", "Net 30 Day");

   
  
  return (
    <>
      <BrowserRouter>
        <Header darkLight={darkLight} setDarkLight={setDarkLight} />
        <Routes>
          <Route
            path="/"
            element={
              <Invoices
                data={data}
                setData={setData}
                filtered={filtered}
                setFiltered={setFiltered}
                show={show}
                setShow={setShow}
                darkLight={darkLight}
                setDarkLight={setDarkLight}
                getInvoice={getInvoice}
                setGetInvoice={setGetInvoice}
              />
            }
          />
          <Route
            path="/createinvoice"
            element={
              <CreateInvoice
                addItemTable={addItemTable}
                setAddItemTable={setAddItemTable}
                darkLight={darkLight}
                setDarkLight={setDarkLight}
                arrowIcon={arrowIcon} 
                setArrowIcon={setArrowIcon}
                list={list}
                setList={setList}
              />
            }
          />
          <Route
            path="/viewinvoice/:id"
            element={
              <ViewInvoice to={"/ViewInvoice/id"}  darkLight={darkLight} setDarkLight={setDarkLight} navi/>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
