import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Invoices from "./pages/Invoices";
import CreateInvoice from "./pages/CreateInvoice";
import ViewInvoice from "./pages/ViewInvoice";
// import Create from "./pages/Create";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Invoices data={data} setData={setData} />} />
          <Route path="/createinvoice" element={<CreateInvoice />} />
          <Route path="/viewinvoice" element={<ViewInvoice />} />
          {/* <Route path="/create" element={<Create />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
