import React from "react";
import styled from "styled-components";
import arrowLeft from "/images/icon-arrow-left.svg";
import deleteIcon from "/images/icon-delete.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateInvoice() {
  const [createInvoice, setCreateinvoice] = useState({
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: "",
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        quantity: "",
        price: "",
        total: "",
      },
      {
        name: "",
        quantity: "",
        price: "",
        total: "",
      },
      {
        name: "",
        quantity: "",
        price: "",
        total: "",
      },
    ],
    total: 0,
  });

  const [errorMes, setErrorMes] = useState("");

  const errorMessage = (event) => {
    event.preventDefault();

    if (createInvoice.clientEmail == "") {
      setErrorMes("can't");
    }
    console.log(errorMes);
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

    let numberrandom = Math.floor(Math.random() * 9000) + 999;
    let stringrandom1 = str.charAt(Math.floor(Math.random() * 27));
    let stringrandom2 = str.charAt(Math.floor(Math.random() * 27));

    let result = stringrandom1 + stringrandom2 + numberrandom;
    createInvoice.id = result;

    setCreateinvoice({
      ...createInvoice,
      [name]: value,
    });
  };
  console.log(createInvoice);

  let itemsObj = {
    itemname: "Item Name",
    quantity: "Qty.",
    price: "Price",
    total: "Total",
  };

  let itemsArr = [
    {
      itemname: "Item Name",
      quantity: "Qty.",
      price: "Price",
      total: "Total",
    },
  ];

  return (
    <MainContainer>
      <GoBack>
        <img src={arrowLeft} alt="" />
        <p>
          <Link to={"/"}>Go back</Link>
        </p>
      </GoBack>
      <h1>New Invoice</h1>

      <Bill>
        <p>Bill From</p>
        <SenderAddress onSubmit={errorMessage}>
          <Couple>
            <label className="label" htmlFor="street">
              Street Address <span style={{ color: "red" }}>{errorMes}</span>
            </label>
            <input
              id="street"
              name="street"
              value={createInvoice.street}
              type="text"
              onChange={handleChange}
            />
          </Couple>
          <CityPostcodeCountry>
            <CityPostCode>
              <Couple>
                <label className="label" htmlFor="City">
                  City<span style={{ color: "red" }}>{errorMes}</span>
                </label>
                <input
                  id="City"
                  name="city"
                  value={createInvoice.city}
                  type="text"
                  onChange={handleChange}
                />
              </Couple>
              <Couple>
                <label className="label" htmlFor="Post Code">
                  Post Code<span style={{ color: "red" }}>{errorMes}</span>
                </label>
                <input
                  id="PostCode"
                  name="postCode"
                  value={createInvoice.postCode}
                  type="text"
                  onChange={handleChange}
                />
              </Couple>
            </CityPostCode>
            <Couple>
              <label className="label" htmlFor="Country">
                Country<span style={{ color: "red" }}>{errorMes}</span>
              </label>
              <input
                id="Country"
                name="country"
                value={createInvoice.country}
                type="text"
                onChange={handleChange}
              />
            </Couple>
          </CityPostcodeCountry>

          <p>Bill To</p>

          <Couple>
            <label className="label" htmlFor="ClientsName">
              Client's Name <span style={{ color: "red" }}>{errorMes}</span>
            </label>
            <input
              id="ClientsName"
              name="clientName"
              value={createInvoice.clientName}
              type="text"
              onChange={handleChange}
            />
          </Couple>

          <Couple>
            <label className="label" htmlFor="ClientsEmail">
              Client's Email <span style={{ color: "red" }}>{errorMes}</span>
            </label>
            <input
              id="ClientsEmail"
              name="clientEmail"
              value={createInvoice.clientEmail}
              type="text"
              onChange={handleChange}
            />
          </Couple>

          <Couple>
            <label className="label" htmlFor="streetTo">
              Street Address <span style={{ color: "red" }}>{errorMes}</span>
            </label>
            <input
              id="streetTo"
              name="street"
              value={createInvoice.street}
              type="text"
              onChange={handleChange}
            />
          </Couple>
          <CityPostcodeCountry>
            <CityPostCode>
              <Couple>
                <label className="label" htmlFor="CityTo">
                  City<span style={{ color: "red" }}>{errorMes}</span>
                </label>
                <input
                  id="CityTo"
                  name="city"
                  value={createInvoice.city}
                  type="text"
                  onChange={handleChange}
                />
              </Couple>
              <Couple>
                <label className="label" htmlFor="Post Code To">
                  Post Code<span style={{ color: "red" }}>{errorMes}</span>
                </label>
                <input
                  id="PostCodeTo"
                  name="postCode"
                  value={createInvoice.postCode}
                  type="text"
                  onChange={handleChange}
                />
              </Couple>
            </CityPostCode>
            <Couple>
              <label className="label" htmlFor="CountryTo">
                Country<span style={{ color: "red" }}>{errorMes}</span>
              </label>
              <input
                id="CountryTo"
                name="country"
                value={createInvoice.country}
                type="text"
                onChange={handleChange}
              />
            </Couple>
          </CityPostcodeCountry>

          <DateTerms>
            <Couple>
              <label className="label" htmlFor="InvoiceDate">
                Invoice Date<span style={{ color: "red" }}>{errorMes}</span>
              </label>
              <input
                id="InvoiceDate"
                name="createdAt"
                value={createInvoice.createdAt}
                type="Date"
                onChange={handleChange}
              />
            </Couple>

            <Couple>
              <label className="label" htmlFor="PaymentTerms">
                Payment Terms<span style={{ color: "red" }}>{errorMes}</span>
              </label>
              <input
                id="PaymentTerms"
                name="paymentTerms"
                value={createInvoice.paymentTerms}
                type="text"
                onChange={handleChange}
              />
            </Couple>
          </DateTerms>

          <Couple>
            <label className="label" htmlFor="ProjectDescription">
              Project Description
              <span style={{ color: "red" }}>{errorMes}</span>
            </label>
            <input
              id="ProjectDescription"
              name="description"
              value={createInvoice.description}
              type="text"
              onChange={handleChange}
            />
          </Couple>

          <ItemList>
            <p>Item List</p>

            {createInvoice.items.map((item) => (
              <div>
                <Couple>
                  <label className="label" htmlFor="ItemName">
                    Item Name<span style={{ color: "red" }}>{errorMes}</span>
                  </label>
                  <input
                    id="ItemName"
                    name="name"
                    value={createInvoice.items.name}
                    type="text"
                    onChange={handleChange}
                  />
                </Couple>

                <ItemsPriceDel>
                  <ItemPrice>
                    <Couple>
                      <label className="label" htmlFor="Qty">
                        QTY.<span style={{ color: "red" }}>{errorMes}</span>
                      </label>
                      <input
                        id="Qty"
                        name="quantity"
                        value={createInvoice.items.quantity}
                        type="text"
                        onChange={handleChange}
                      />
                    </Couple>

                    <Couple>
                      <label className="label" htmlFor="Price">
                        Price<span style={{ color: "red" }}>{errorMes}</span>
                      </label>
                      <input
                        id="Price"
                        name="price"
                        value={createInvoice.items.price}
                        type="text"
                        onChange={handleChange}
                      />
                    </Couple>

                    <Couple>
                      <label className="label" htmlFor="Total">
                        Total
                      </label>
                      <input
                        id="TotalPrice"
                        name="Total"
                        value={
                          `${createInvoice.price}` * `${createInvoice.quantity}`
                        }
                        type="submit"
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
              // onClick={itemsArr.push(
              //     ... itemsArr, itemsObj
              // )}
            >
              + Add New Item
            </button>
          </ItemList>

          <EmptyContainer></EmptyContainer>
          <Buttons>
            <button
              className="discard"
              type="click"
              onClick={(createInvoice.clientEmail = "")}
            >
              Discard
            </button>
            <button className="draft" type="submit">
              Save as Draft
            </button>
            <button className="send" type="submit">
              Save & Send
            </button>
          </Buttons>
        </SenderAddress>
      </Bill>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  padding: 3.3rem 2.4rem 2.4rem 2.2rem;

  h1 {
    margin-top: 2.6rem;
    font-size: 2.4rem;
    font-weight: bold;
    color: #0c0e16;
  }
`;
const GoBack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.79rem;

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #0c0e16;
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
  gap: 2.4rem;

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #7c5dfa;
    line-height: 1;
    letter-spacing: -0.25px;
  }
`;

const SenderAddress = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DateTerms = styled.div`
  display: flex;
  flex-direction: column; /*tablet, desktop*/
  gap: 2.5rem;

  input::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 10%;
  }
`;
const CityPostcodeCountry = styled.div`
  display: flex;
  flex-direction: column; /* media შეიცვლება row-Ti*/
  /* justify-content: space-between; */
  gap: 2.5rem;
`;

const CityPostCode = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2.3rem;
`;

const Couple = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

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
    border: solid 0.1rem #dfe3fa;
    padding: 1.8rem 11.5rem 1.5rem 1.2rem;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: -0.25px;
    text-align: left;
    color: #0c0e16;
    text-align: left;
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
    background-color: #fff;
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
    background-color: #f9fafe;
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

  img {
    width: 1.07rem;
    height: 1.24rem;
  }
`;

const EmptyContainer = styled.div`
  width: 100%;
  height: 6.4rem;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.1)
  );
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.7rem;

  .discard {
    background-color: #f9fafe;
    padding: 1.8rem 1.9rem 1.5rem 1.8rem;
    width: 8.4rem;
    color: #7e88c3;
    border-radius: 2.4rem;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: -0.25px;
  }

  .draft {
    background-color: #373b53;
    padding: 1.8rem 1.39rem 1.5rem 1.61rem;
    width: 11.7rem;
    color: #888eb0;
    border-radius: 2.4rem;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: -0.25px;
  }

  .send {
    background-color: #7c5dfa;
    padding: 1.8rem 1.5rem 1.5rem 1.6rem;
    width: 11.2rem;
    color: #ffffff;
    border-radius: 2.4rem;
    border: none;
    letter-spacing: -0.25px;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
