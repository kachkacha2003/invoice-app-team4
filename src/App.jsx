import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Invoices from "./pages/Invoices";
import CreateInvoice from "./pages/CreateInvoice";
import ViewInvoice from "./pages/ViewInvoice";

function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(["draft", "pending", "paid"]);
  const [show, setShow] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />
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
              />
            }
          />
          <Route path="/createinvoice" element={<CreateInvoice />} />
          <Route path="/viewinvoice" element={<ViewInvoice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
