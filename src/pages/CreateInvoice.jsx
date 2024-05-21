import React from "react";
import styled from "styled-components";
import arrowLeft from "/images/icon-arrow-left.svg";
import deleteIcon from "/images/icon-delete.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useMediaQuery } from "@uidotdev/usehooks";

export default function Create({ addItemTable, setAddItemTable, darkLight }) {
  const [selectedValue, setSelectedValue] = useState("");
  const mobileText = useMediaQuery("only screen and (max-width : 48rem)");

  let maxItem = [];
  let secondObj = {};
  let firstObj = {};
  let itemsArr = [];
  let finalitemsArr = [];

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
  const [itemObj, setItemObj] = useState({
    name: "",
    quantity: 0,
    price: 0,
    total: 0,
  });

  let [finalObj, setFinalObj] = useState({
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: "",
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: senderAddress,
    clientAddress: clientAddress,
    total: 0,
  });
  const [errorMes, setErrorMes] = useState({
    createdAt: "",
    description: "",
    paymentTerms: "",
    clientName: "",
    clientEmail: "",
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
  });
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCreateinvoice({
      ...createInvoice,
      [name]: value,
    });

    setFinalObj({
      ...finalObj,
      [name]: value,
    });
  };
  const errorMessage = (event) => {
    event.preventDefault();

    if (createInvoice.createdAt == "") {
      errorMes.createdAt = "can't Empty";
    }
    if (createInvoice.description == "") {
      errorMes.description = "can't Empty";
    }
    if (createInvoice.paymentTerms == "") {
      errorMes.paymentTerms = "can't Empty";
    }
    if (createInvoice.clientName == "") {
      errorMes.clientName = "can't Empty";
    }
    if (createInvoice.clientEmail == "") {
      errorMes.clientEmail = "can't Empty";
    }
    if (createInvoice.senderAddressStreet == "") {
      errorMes.senderAddressStreet = "can't Empty";
    }
    if (createInvoice.senderAddressCity == "") {
      errorMes.senderAddressCity = "can't Empty";
    }
    if (createInvoice.senderAddressPostCode == "") {
      errorMes.senderAddressPostCode = "can't Empty";
    }
    if (createInvoice.senderAddressCountry == "") {
      errorMes.senderAddressCountry = "can't Empty";
    }
    if (createInvoice.clientAddressStreet == "") {
      errorMes.clientAddressStreet = "can't Empty";
    }
    if (createInvoice.clientAddressCity == "") {
      errorMes.clientAddressCity = "can't Empty";
    }
    if (createInvoice.clientAddressPostCode == "") {
      errorMes.clientAddressPostCode = "can't Empty";
    }
    if (createInvoice.clientAddressCountry == "") {
      errorMes.clientAddressCountry = "can't Empty";
    }
    if (createInvoice.itemName == "") {
      errorMes.itemName = "can't Empty";
    }
    if (createInvoice.itemQuantity == "") {
      errorMes.itemQuantity = "can't Empty";
    }
    if (createInvoice.itemPrice == "") {
      errorMes.itemPrice = "can't Empty";
    }

    // ID random

    let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let numberrandom = Math.floor(Math.random() * 9000) + 999;
    let stringrandom1 = str.charAt(Math.floor(Math.random() * 27));
    let stringrandom2 = str.charAt(Math.floor(Math.random() * 27));
    let resultid = stringrandom1 + stringrandom2 + numberrandom;
    createInvoice.id = resultid;

    // paymentDue
    let theDate = new Date(createInvoice.createdAt);
    theDate.setDate(theDate.getDate() + Number(createInvoice.paymentTerms));
    let date = new Date(theDate);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    let formattedDate = `${year}-${month}-${day}`;

    //senderAddress and clientAddress objects

    // Object for API
    delete finalObj.clientAddressCity,
      delete finalObj.clientAddressCountry,
      delete finalObj.clientAddressPostCode,
      delete finalObj.clientAddressStreet,
      delete finalObj.senderAddressCity,
      delete finalObj.senderAddressCountry,
      delete finalObj.senderAddressPostCode,
      delete finalObj.senderAddressStreet,
      (finalObj = Object.assign(finalObj, { id: resultid }));
    finalObj = Object.assign(finalObj, { paymentDue: formattedDate });
  };
  {
    Object.keys(createInvoice).forEach((element) => {
      if (element.includes("senderAddress")) {
        senderAddress.street = Object.values(
          createInvoice.senderAddressStreet
        ).join("");
        senderAddress.city = Object.values(
          createInvoice.senderAddressCity
        ).join("");
        senderAddress.postCode = Object.values(
          createInvoice.senderAddressPostCode
        ).join("");
        senderAddress.country = Object.values(
          createInvoice.senderAddressCountry
        ).join("");
      }
      if (element.includes("clientAddress")) {
        clientAddress.street = Object.values(
          createInvoice.clientAddressStreet
        ).join("");
        clientAddress.city = Object.values(
          createInvoice.clientAddressCity
        ).join("");
        clientAddress.postCode = Object.values(
          createInvoice.clientAddressPostCode
        ).join("");
        clientAddress.country = Object.values(
          createInvoice.clientAddressCountry
        ).join("");
      }
    });
  }

  const [disabled, setDisabled] = useState(true);

  function addItems() {
    setItemObj({
      name: createInvoice.itemName,
      quantity: createInvoice.itemQuantity,
      price: createInvoice.itemPrice,
      total: `${createInvoice.itemQuantity * createInvoice.itemPrice}`,
    });
  }

  maxItem.push(...maxItem, maxItem);

  firstObj = {
    name: createInvoice.itemName,
    quantity: createInvoice.itemQuantity,
    price: createInvoice.itemPrice,
    total: `${createInvoice.itemQuantity * createInvoice.itemPrice}`,
  };
  secondObj = {
    name: Object.values(itemObj.name).join(""),
    quantity: Object.values(itemObj.quantity).join(""),
    price: Object.values(itemObj.price).join(""),
    total: Object.values(itemObj.total).join(""),
  };

  itemsArr.push(...itemsArr, firstObj, secondObj);
  finalitemsArr = Object.values(itemsArr);
  finalObj = Object.assign(finalObj, { items: finalitemsArr });
  delete finalObj.itemName,
    delete finalObj.itemQuantity,
    delete finalObj.itemPrice,
    delete finalObj.itemTotal,
    console.log(finalObj);

  function send() {
    finalObj.status = "panding";
    finalObj.total = Number(`${firstObj.total + secondObj.total}`);
    console.log(finalObj);
  }
  function draft() {
    finalObj.status = "draft";
    finalObj.total = `${firstObj.total}` + `${secondObj.total}`;
    console.log(finalObj);
  }
  function discard() {
    (createInvoice.idcreatedAt.value = ""),
      (createInvoice.description.value = ""),
      (createInvoice.paymentTerms = ""),
      (createInvoice.clientName = ""),
      (createInvoice.clientEmail = ""),
      (createInvoice.senderAddressStreet.target.value = ""),
      (createInvoice.senderAddressCity = ""),
      (createInvoice.senderAddressPostCode = ""),
      (createInvoice.senderAddressCountry = ""),
      (createInvoice.clientAddressStreet = ""),
      (createInvoice.clientAddressCity = ""),
      (createInvoice.clientAddressPostCode = ""),
      (createInvoice.clientAddressCountry = ""),
      (createInvoice.itemName = ""),
      (createInvoice.itemQuantity = ""),
      (createInvoice.itemPrice = ""),
      (createInvoice.itemTotal = "");
    console.log(createInvoice.senderAddressStreet);
  }
  console.log(createInvoice.senderAddressStreet);

  console.log(finalObj);

  return (
    <>
      <MainContainer darkLight={darkLight}>
        <GoBack>
          <img src={arrowLeft} alt="" />
          <p>
            <Link darkLight={darkLight} id="styleLink" to={"/"}>
              {mobileText ? "Go back" : null}
            </Link>
          </p>
        </GoBack>
        <h1>New Invoice</h1>
        <Bill>
          <p>Bill From</p>
          <SenderAddress onSubmit={errorMessage}>
            <div>
              <Couple darkLight={darkLight}>
                <label className="label" htmlFor="street">
                  Street Address{" "}
                  <span style={{ color: "red" }}>
                    {errorMes.senderAddressStreet}
                  </span>
                </label>
                <input
                  id="street"
                  name="senderAddressStreet"
                  value={createInvoice.senderAddressStreet}
                  type="text"
                  onChange={handleChange}
                />
              </Couple>
              <CityPostcodeCountry>
                <CityPostCode>
                  <Couple darkLight={darkLight}>
                    <label className="label" htmlFor="City">
                      City
                      <span style={{ color: "red" }}>
                        {errorMes.senderAddressCity}
                      </span>
                    </label>
                    <input
                      id="City"
                      name="senderAddressCity"
                      value={createInvoice.senderAddressCity}
                      type="text"
                      onChange={handleChange}
                    />
                  </Couple>
                  <Couple darkLight={darkLight}>
                    <label className="label" htmlFor="Post Code">
                      Post Code
                      <span style={{ color: "red" }}>
                        {errorMes.senderAddressPostCode}
                      </span>
                    </label>
                    <input
                      id="PostCode"
                      name="senderAddressPostCode"
                      value={createInvoice.senderAddressPostCode}
                      type="text"
                      onChange={handleChange}
                    />
                  </Couple>
                </CityPostCode>
                <Couple darkLight={darkLight}>
                  <label className="label" htmlFor="Country">
                    Country
                    <span style={{ color: "red" }}>
                      {errorMes.senderAddressCountry}
                    </span>
                  </label>
                  <input
                    id="Country"
                    name="senderAddressCountry"
                    value={createInvoice.senderAddressCountry}
                    type="text"
                    onChange={handleChange}
                  />
                </Couple>
              </CityPostcodeCountry>

              <p>Bill To</p>
              <NameEmail>
                <Couple darkLight={darkLight}>
                  <label className="label" htmlFor="ClientsName">
                    Client's Name{" "}
                    <span style={{ color: "red" }}>{errorMes.clientName}</span>
                  </label>
                  <input
                    id="ClientsName"
                    name="clientName"
                    value={createInvoice.clientName}
                    type="text"
                    onChange={handleChange}
                  />
                </Couple>

                <Couple darkLight={darkLight}>
                  <label className="label" htmlFor="ClientsEmail">
                    Client's Email{" "}
                    <span style={{ color: "red" }}>{errorMes.clientEmail}</span>
                  </label>
                  <input
                    id="ClientsEmail"
                    name="clientEmail"
                    value={createInvoice.clientEmail}
                    type="text"
                    onChange={handleChange}
                  />
                </Couple>

                <Couple darkLight={darkLight}>
                  <label className="label" htmlFor="streetTo">
                    Street Address{" "}
                    <span style={{ color: "red" }}>
                      {errorMes.clientAddressStreet}
                    </span>
                  </label>
                  <input
                    id="streetTo"
                    name="clientAddressStreet"
                    value={createInvoice.clientAddressStreet}
                    type="text"
                    onChange={handleChange}
                  />
                </Couple>
              </NameEmail>
              <CityPostcodeCountry>
                <CityPostCode>
                  <Couple darkLight={darkLight}>
                    <label className="label" htmlFor="CityTo">
                      City
                      <span style={{ color: "red" }}>
                        {errorMes.clientAddressCity}
                      </span>
                    </label>
                    <input
                      id="CityTo"
                      name="clientAddressCity"
                      value={createInvoice.clientAddressCity}
                      type="text"
                      onChange={handleChange}
                    />
                  </Couple>
                  <Couple darkLight={darkLight}>
                    <label className="label" htmlFor="Post Code To">
                      Post Code
                      <span style={{ color: "red" }}>
                        {errorMes.clientAddressPostCode}
                      </span>
                    </label>
                    <input
                      id="PostCodeTo"
                      name="clientAddressPostCode"
                      value={createInvoice.clientAddressPostCode}
                      type="text"
                      onChange={handleChange}
                    />
                  </Couple>
                </CityPostCode>
                <Couple darkLight={darkLight}>
                  <label className="label" htmlFor="CountryTo">
                    Country
                    <span style={{ color: "red" }}>
                      {errorMes.clientAddressCountry}
                    </span>
                  </label>
                  <input
                    id="CountryTo"
                    name="clientAddressCountry"
                    value={createInvoice.clientAddressCountry}
                    type="text"
                    onChange={handleChange}
                  />
                </Couple>
              </CityPostcodeCountry>
              <DateTerms>
                <Couple darkLight={darkLight}>
                  <label className="label" htmlFor="InvoiceDate">
                    Invoice Date
                    <span style={{ color: "red" }}>{errorMes.createdAt}</span>
                  </label>
                  <input
                    id="InvoiceDate"
                    name="createdAt"
                    value={createInvoice.createdAt}
                    type="Date"
                    onChange={handleChange}
                  />
                </Couple>
                <Couple darkLight={darkLight}>
                  <label className="label" htmlFor="PaymentTerms">
                    Payment Terms
                    <span style={{ color: "red" }}>
                      {errorMes.paymentTerms}
                    </span>
                  </label>
                  <div style={{ backgroundColor: "red" }}> </div>
                  <input
                    id="PaymentTerms"
                    name="paymentTerms"
                    value={createInvoice.paymentTerms}
                    type="number"
                    onChange={handleChange}
                  />
                </Couple>
              </DateTerms>

              <Couple darkLight={darkLight}>
                <label className="label" htmlFor="ProjectDescription">
                  Project Description
                  <span style={{ color: "red" }}>{errorMes.description}</span>
                </label>
                <input
                  id="ProjectDescription"
                  name="description"
                  value={createInvoice.description}
                  type="text"
                  onChange={handleChange}
                />
              </Couple>
            </div>
            <ItemList>
              <p>Item List</p>
              <div>
                <Couple darkLight={darkLight}>
                  <label className="label" htmlFor="ItemName">
                    Item Name
                    <span style={{ color: "red" }}>{errorMes.itemName}</span>
                  </label>
                  <input
                    id="ItemName"
                    name="itemName"
                    value={createInvoice.itemName}
                    type="text"
                    onChange={handleChange}
                  />
                </Couple>

                <ItemsPriceDel>
                  <ItemPrice>
                    <Couple darkLight={darkLight}>
                      <label className="label" htmlFor="Qty">
                        QTY.
                        <span style={{ color: "red" }}>
                          {errorMes.itemQuantity}
                        </span>
                      </label>
                      <input
                        id="Qty"
                        name="itemQuantity"
                        value={createInvoice.itemQuantity}
                        type="number"
                        onChange={handleChange}
                      />
                    </Couple>
                    <Couple darkLight={darkLight}>
                      <label className="label" htmlFor="Price">
                        Price
                        <span style={{ color: "red" }}>
                          {errorMes.itemPrice}
                        </span>
                      </label>
                      <input
                        id="Price"
                        name="itemPrice"
                        value={createInvoice.itemPrice}
                        type="number"
                        onChange={handleChange}
                      />
                    </Couple>
                    <Couple darkLight={darkLight}>
                      <label className="label" htmlFor="Total">
                        Total
                      </label>
                      <input
                        id="TotalPrice"
                        name="itemTotal"
                        value={`${
                          createInvoice.itemQuantity * createInvoice.itemPrice
                        }`}
                        type="number"
                        onChange={handleChange}
                      />
                    </Couple>
                  </ItemPrice>

                  <img src={deleteIcon} alt="" />
                </ItemsPriceDel>
              </div>
              {maxItem.map((item, index) => (
                <div
                  key={index}
                  style={{ display: addItemTable < 10 ? "block" : "none" }}
                  className="addTable"
                >
                  <Couple darkLight={darkLight}>
                    <label className="label" htmlFor="ItemName">
                      Item Name
                      <span style={{ color: "red" }}>{errorMes.itemName}</span>
                    </label>
                    <input
                      id="ItemName"
                      name="itemName"
                      value={secondObj.name}
                      type="text"
                      disabled={disabled}
                      onChange={handleChange}
                    />
                  </Couple>

                  <ItemsPriceDel>
                    <ItemPrice>
                      <Couple darkLight={darkLight}>
                        <label className="label" htmlFor="Qty">
                          QTY.
                          <span style={{ color: "red" }}>
                            {errorMes.itemQuantity}
                          </span>
                        </label>
                        <input
                          id="Qty"
                          name="itemQuantity"
                          value={secondObj.quantity}
                          type="number"
                          disabled={disabled}
                          onChange={handleChange}
                        />
                      </Couple>
                      <Couple darkLight={darkLight}>
                        <label className="label" htmlFor="Price">
                          Price
                          <span style={{ color: "red" }}>
                            {errorMes.itemPrice}
                          </span>
                        </label>
                        <input
                          id="Price"
                          name="itemPrice"
                          value={secondObj.price}
                          type="number"
                          disabled={disabled}
                          onChange={handleChange}
                        />
                      </Couple>
                      <Couple darkLight={darkLight}>
                        <label className="label" htmlFor="Total">
                          Total
                        </label>
                        <input
                          id="TotalPrice"
                          name="itemTotal"
                          value={secondObj.total}
                          type="number"
                          disabled={disabled}
                          onChange={handleChange}
                        />
                      </Couple>
                    </ItemPrice>

                    <img src={deleteIcon} alt="" />
                  </ItemsPriceDel>
                </div>
              ))}

              <button
                id="add"
                type="click"
                darkLight={darkLight}
                onClick={addItems}
              >
                + Add New Item
              </button>
            </ItemList>
          </SenderAddress>
        </Bill>
      </MainContainer>
      <EmptyContainer darkLight={darkLight}></EmptyContainer>
      <Buttons darkLight={darkLight}>
        <button className="discard" type="click" onClick={discard}>
          Discard
        </button>
        <button
          className="draft"
          type="onSubmit"
          onClick={draft}
          onSubmit={errorMessage}
        >
          Save as Draft
        </button>
        <button
          className="send"
          type="onClick"
          onClick={send}
          onSubmit={errorMessage}
        >
          Save & Send
        </button>
      </Buttons>
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;

  padding: 3.3rem 2.4rem 0 2.2rem;
  background-color: ${(props) => (props.darkLight ? "#fff" : "#141625")};
  @media (min-width: 48rem) {
    width: 61.6rem;
    padding: 5.9rem 5.6rem 0;
  }

  h1 {
    margin-top: 2.6rem;
    font-size: 2.4rem;
    font-weight: bold;
    @media (min-width: 48rem) {
      margin-top: 4.6rem;
    }

    color: ${(props) => (props.darkLight ? "#0c0e16" : "#ffffff")};
  }

  p {
    margin-bottom: 2.4rem;
  }
`;
const GoBack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.79rem;
  align-items: center;
  #styleLink {
    text-decoration: none;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => (props.darkLight ? "#373b53" : "#1e2139")};

    letter-spacing: -0.25px;
  }

  img {
    width: 0.42rem;
    height: 0.85rem;
  }
`;

const Bill = styled.div`
  margin-top: 2.2rem;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #7c5dfa;
    line-height: 1;
    letter-spacing: -0.25px;
  }
`;

const NameEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const SenderAddress = styled.form`
  display: flex;
  flex-direction: column;

  .label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: var(--07, #7e88c3);
    font-family: "League Spartan";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.1px;
    color: ${(props) => (props.darkLight ? "#7e88c3" : "#7e88c3")};
  }
  p {
    margin-top: 4.1rem;
    margin-bottom: 2.4rem;
  }
`;

const DateTerms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;

  margin-top: 2.5rem;
  @media (min-width: 48rem) {
    flex-direction: row;
    width: 100%;
    gap: 6%;
    align-items: center;
    margin-bottom: 2.5rem;
  }
`;
const CityPostcodeCountry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2.5rem;
  @media (min-width: 48rem) {
    flex-direction: row;
    gap: 3rem;
    justify-content: space-between;
  }

  input::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 10%;
  }
`;

const CityPostCode = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
`;

const Couple = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  justify-content: center;

  input[type="date"]::-webkit-calendar-picker-indicator {
    background-color: ${(props) => (props.darkLight ? "bleck" : "#7e88c3")};
    cursor: pointer;
    right: 80%;
    transform: translateX(5000%);
  }

  #street,
  #City,
  #PostCode,
  #Country,
  #ClientsName,
  #ClientsEmail,
  #InvoiceDate,
  #PaymentTerms,
  #ProjectDescription,
  #streetTo,
  #CityTo,
  #PostCodeTo,
  #CountryTo,
  #ItemName {
    height: 4.8rem;
    border-radius: 0.4rem;

    border: solid 0.1rem ${(props) => (props.darkLight ? "#dfe3fa" : "#252945")};

    padding: 1.8rem 0.5rem 1.5rem 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: -0.25px;
    text-align: left;

    color: ${(props) => (props.darkLight ? "#0c0e16" : "#ffffff")};
    text-align: left;
    background-color: ${(props) => (props.darkLight ? "#ffffff" : "#1e2139")};
  }
  #PaymentTerms {
    width: 23.6rem;
  }
  @media (min-width: 48rem) {
    #CountryTo {
      width: 15rem;
    }
  }
  @media (min-width: 48rem) {
    #Country {
      width: 15.2rem;
    }
  }
  #City,
  #PostCode,
  #CityTo,
  #PostCodeTo {
    width: 15.2rem;
    padding-right: 0;
  }

  #InvoiceDate {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 1rem;
    width: 100%;
    @media (min-width: 48rem) {
      width: 23.6rem;
    }
  }

  #Qty {
    width: 6.4rem;
    height: 4.8rem;
    border: solid 0.1rem #dfe3fa;
    text-align: center;
  }

  #Price {
    width: 10rem;
    height: 4.8rem;
    border: solid 0.1rem #dfe3fa;
    text-align: center;
  }

  #TotalPrice {
    width: 4.7rem;
    height: 4.8rem;
    border: none;

    background-color: ${(props) => (props.darkLight ? "#fff" : "#141625")};
  }

  #Price,
  #Qty {
    background-color: ${(props) => (props.darkLight ? "#fff" : "#1e2139")};
    border: solid 0.1rem ${(props) => (props.darkLight ? "#dfe3fa" : "#252945")};
  }

  span {
    display: block;
  }
`;
const ItemPrice = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  margin-top: 2rem;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  #add {
    border-radius: 2.4rem;

    background-color: ${(props) => (props.darkLight ? "#fff" : "#1e2139")};
    border: solid 0.1rem ${(props) => (props.darkLight ? "#dfe3fa" : "#252945")};

    padding: 1.8rem 10.7rem 1.5rem 10.8rem;
    color: #7e88c3;
    border: none;
    font-weight: bold;
    font-size: 1.5rem;
  }

  p {
    color: #777f98;
  }
`;
const ItemsPriceDel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img:hover {
    cursor: pointer;
  }

  img {
    width: 1.07rem;
    height: 1.24rem;
  }
`;

const EmptyContainer = styled.div`
  width: 100%;
  height: 6.4rem;
  background-color: ${(props) =>
    props.darkLight
      ? "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1))"
      : "#141625"};
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.7rem;

  padding: 2.1rem 2.4rem 2.2rem 2.4rem;
  background-color: ${(props) => (props.darkLight ? "#fff" : "#1e2139")};
  @media (min-width: 48rem) {
    width: 52.4rem;
    margin-left: 3.7rem;
    padding-right: 0;
  }

  .discard {
    background-color: ${(props) => (props.darkLight ? "#f9fafef" : "#252945")};
    padding: 1.8rem 1.9rem 1.5rem 1.8rem;
    width: 8.4rem;
    color: ${(props) => (props.darkLight ? "#dfe3fa" : "#7e88c3")};

    border-radius: 2.4rem;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: -0.25px;
    @media (min-width: 48rem) {
      width: 12.8rem;
    }
  }

  .draft {
    background-color: #373b53;
    padding: 1.8rem 1.39rem 1.5rem 1.61rem;
    width: 11.7rem;

    color: ${(props) => (props.darkLight ? "#888eb0" : "#dfe3fa")};

    border-radius: 2.4rem;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: -0.25px;
    @media (min-width: 48rem) {
      width: 12.8rem;
    }
  }

  .send {
    background-color: #7c5dfa;
    padding: 1.8rem 1.5rem 1.5rem 1.6rem;
    width: 11.2rem;

    color: ${(props) => (props.darkLight ? "#dfe3fa" : "#ffffff")};

    border-radius: 2.4rem;
    border: none;
    letter-spacing: -0.25px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .send:hover {
    cursor: pointer;
  }
`;
