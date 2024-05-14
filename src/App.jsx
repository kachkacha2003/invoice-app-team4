import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Invoices from "./pages/Invoices";
import CreateInvoice from "./pages/CreateInvoice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Invoices />} />
          <Route path="/createinvoice" element={<CreateInvoice />} />
          {/* <Route path="/Editinvoice" element={<EditInvoice />} />
        <Route path="/Invoices/:id" element={<ViewInvoice />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
