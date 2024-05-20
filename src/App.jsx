import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Invoices from "./pages/Invoices";
import CreateInvoice from "./pages/CreateInvoice";
import ViewInvoice from "./pages/ViewInvoice";



function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [addItemTable, setAddItemTable] = useState(false);
  const [darkLight, setDarkLight] = useState(true)

  return (
    <>
      <BrowserRouter>
        <Header 
        darkLight={darkLight}
        setDarkLight={setDarkLight}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Invoices
                data={data}
                setData={setData}
                filtered={filtered}
                setFiltered={setFiltered}
                darkLight={darkLight}
                setDarkLight={setDarkLight}
              />
            }
          />
          <Route path="/createinvoice" element={<CreateInvoice 
           addItemTable={addItemTable}
              setAddItemTable={setAddItemTable}
                darkLight={darkLight}
                  setDarkLight={setDarkLight}
                
          />} />
          <Route path="/viewinvoice" element={<ViewInvoice
            darkLight={darkLight}
              setDarkLight={setDarkLight}
           />
          }
        />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
