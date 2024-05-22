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
  const [darklight, setDarklight] = useState(true);
  const [getInvoice, setGetInvoice] = useState(0);
  const [arrowicon, setArrowicon] = useState(true);
  const [list, setList] = useState(["Net 1 Day", "Net 7 Day", "Net 14 Day", "Net 30 Day"]);
  

   
  
  return (
    <>
      <BrowserRouter>
        <Header darklight={darklight} setDarklight={setDarklight} />
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
                darklight={darklight}
                setDarklight={setDarklight}
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
                darklight={darklight}
                setDarklight={setDarklight}
                arrowicon={arrowicon} 
                setArrowicon={setArrowicon}
                list={list}
                setList={setList}                
              />
            }
          />
          <Route
            path="/viewinvoice/:id"
            element={
              <ViewInvoice to={"/ViewInvoice/:id"}  darklight={darklight} setDarklight={setDarklight} navi/>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
