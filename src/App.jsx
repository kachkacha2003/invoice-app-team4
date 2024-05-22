import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Invoices from "./pages/Invoices";
import CreateInvoice from "./pages/CreateInvoice";
import ViewInvoice from "./pages/ViewInvoice";
import EditInvoice from "./pages/EditInvoice";

function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(["Draft", "Pending", "Paid"]);
  const [show, setShow] = useState(false);
  const [addItemTable, setAddItemTable] = useState(false);
  const [darklight, setDarklight] = useState(true);
  const [getInvoice, setGetInvoice] = useState(0);
  const [arrowicon, setArrowicon] = useState(true);
  const [list, setList] = useState([
    "Net 1 Day",
    "Net 7 Day",
    "Net 14 Day",
    "Net 30 Day",
  ]);
  const [disabled, setDisabled] = useState(true);
  const [createInvoice, setCreateinvoice] = useState({
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: "",
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddressStreet: "",
    senderAddressCity: "",
    senderAddressPostCode: "",
    senderAddressCountry: "",
    clientAddressStreet: "",
    clientAddressCity: "",
    clientAddressPostCode: "",
    clientAddressCountry: "",
    itemName: "",
    itemQuantity: "",
    itemPrice: "",
    itemTotal: "",
  });
  const [senderAddress, setSenderAddress] = useState({
    street: "",
    city: "",
    postCode: "",
    country: "",
  });
  const [clientAddress, setClientAddress] = useState({
    street: "",
    city: "",
    postCode: "",
    country: "",
  });

  console.log(createInvoice);

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
                setDarkLight={setDarklight}
                getInvoice={getInvoice}
                setGetInvoice={setGetInvoice}
                senderAddress={senderAddress}
                setSenderAddress={setSenderAddress}
                clientAddress={clientAddress}
                setClientAddress={setClientAddress}
              />
            }
          />
          <Route
            path="/createinvoice"
            element={
              <Invoices
                arrowicon={arrowicon}
                setArrowicon={setArrowicon}
                data={data}
                setData={setData}
                filtered={filtered}
                setFiltered={setFiltered}
                show={show}
                setShow={setShow}
                darklight={darklight}
                setDarkLight={setDarklight}
                getInvoice={getInvoice}
                list={list}
                setList={setList}
                createInvoice={createInvoice}
                setCreateinvoice={setCreateinvoice}
                disabled={disabled}
                setGetInvoice={setGetInvoice}
                addItemTable={addItemTable}
                setAddItemTable={setAddItemTable}
              />
            }
          />
          <Route
            path="/viewinvoice/:id"
            element={
              <ViewInvoice
                to={"/ViewInvoice/:id"}
                darklight={darklight}
                setDarkLight={setDarklight}
                navi
              />
            }
          />
          <Route
            path="/viewInvoice/:id/EditInvoice"
            element={
              <EditInvoice
                data={data}
                setData={setData}
                filtered={filtered}
                setFiltered={setFiltered}
                show={show}
                setShow={setShow}
                darkLight={darklight}
                setDarkLight={setDarklight}
                getInvoice={getInvoice}
                setGetInvoice={setGetInvoice}
                addItemTable={addItemTable}
                setAddItemTable={setAddItemTable}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
