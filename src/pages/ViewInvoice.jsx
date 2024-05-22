import React from "react";
import styled from "styled-components";
import arrowLeft from "/images/icon-arrow-left.svg";

import { Link, Navigate } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import DeletionConfirm from "../components/DeletionConfirm";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ViewInvoice({ darkLight }) {
  const navigate = useNavigate();
  const [invoiceObj, setInvoiceObj] = useState({});
  const location = useLocation();
  const id = location.pathname.slice(-6);
  const [deleteSpanShow, setDeleteSpanShow] = useState(false);
  const DivToShow = useMediaQuery("only screen and (min-width:48rem)");
  const TabletTextToHide = useMediaQuery("only screen and (max-width:48rem)");
  async function deleteInvoice() {
    const res =
      await fetch`https://invoice-api-bcbr.onrender.com/api/invoice/${id} , {
        method: 'DELETE',
        'Content-Type': 'application/json',
      }`;
  }

  async function changeItem() {
    const res = await fetch(
      `https://invoice-api-bcbr.onrender.com/api/invoice/mark_as_paid/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    navigate("/");
  }
  useEffect(() => {
    async function fetchData2() {
      const res = await fetch(
        `https://invoice-api-bcbr.onrender.com/api/invoice/${id}`
      );
      const info = await res.json();
      setInvoiceObj(info);
    }
    fetchData2();
  }, []);

  return (
    <>
      {invoiceObj.status ? (
        <MainContainer darkLight={darkLight}>
          {deleteSpanShow ? (
            <DeletionConfirm
              setDeleteSpanShow={setDeleteSpanShow}
              deleteSpanShow={deleteSpanShow}
            />
          ) : null}
          <GoBack>
            <img src={arrowLeft} alt="" />

            <p>
              <Link id="styleLink" to={"/"}>
                Go back
              </Link>
            </p>
          </GoBack>

          <StatusMain darkLight={darkLight}>
            <Status darkLight={darkLight}>
              <p>Status</p>
              <SpanCon>
                <Circletwo></Circletwo>
                <span className="personStatus">Pending</span>
              </SpanCon>
            </Status>
            {DivToShow ? (
              <ThreeConParent>
                <div className="editIn">
                  <Link
                    to={`/viewInvoice/${id}/EditInvoice`}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <span>edit</span>
                  </Link>
                </div>
                <div
                  className="deleteIn"
                  onClick={() => setDeleteSpanShow(!deleteSpanShow)}
                >
                  <span>Delete</span>
                </div>
                <div className="markIn" onClick={() => changeItem(id)}>
                  <span>Mark as Paid</span>
                </div>
              </ThreeConParent>
            ) : null}
          </StatusMain>

          <InvoiceContainer darkLight={darkLight}>
            <MainInformation darkLight={darkLight}>
              <IdAndAdresComoCon>
                <NumberDesc>
                  <div className="id">
                    <span>#</span>
                    {invoiceObj.id}
                  </div>
                  <div className="samestyle">{invoiceObj.description}</div>
                </NumberDesc>

                <Address>
                  <div className="samestyle">
                    {invoiceObj.senderAddress.street}
                  </div>
                  <div className="samestyle">
                    {invoiceObj.senderAddress.city}
                  </div>
                  <div className="samestyle">
                    {invoiceObj.senderAddress.postCode}
                  </div>
                  <div className="samestyle">
                    {invoiceObj.senderAddress.country}
                  </div>
                </Address>
              </IdAndAdresComoCon>

              <InvoiceInfo>
                <ClientInfo>
                  <Dates>
                    <div className="dateInfo">
                      <div className="samestyle">Invoice Date</div>
                      <div className="id">{invoiceObj.createdAt}</div>
                    </div>

                    <div className="dateInfo">
                      <div className="samestyle">Payment Due</div>
                      <div className="id">{invoiceObj.paymentDue}</div>
                    </div>
                  </Dates>

                  <Bill>
                    <div className="samestyle">Bill To</div>
                    <div className="clientName id">{invoiceObj.clientName}</div>
                    <div className="samestyle">
                      {invoiceObj.clientAddress.street}
                    </div>
                    <div className="samestyle">
                      {invoiceObj.clientAddress.city}
                    </div>
                    <div className="samestyle">
                      {invoiceObj.clientAddress.postCode}
                    </div>
                    <div className="samestyle">
                      {invoiceObj.clientAddress.country}
                    </div>
                  </Bill>
                </ClientInfo>
                <div className="clientMail">
                  <div className="samestyle">Sent to</div>
                  <div className="id">{invoiceObj.clientEmail}</div>
                </div>
              </InvoiceInfo>

              <PriceInfo darkLight={darkLight}>
                {DivToShow ? (
                  <div className="priceTitle">
                    <p className="samestyle">Item Name</p>
                    <p className="samestyle">QTY.</p>
                    <p className="samestyle">Price</p>
                    <p className="samestyle">Total</p>
                  </div>
                ) : null}
                {invoiceObj.items.map((item, index) => (
                  <Prices darkLight={darkLight} key={index}>
                    <ProductInfo>
                      <p className="id">{item.name}</p>
                      <div className="quantity">
                        <p className="samestyle">{item.quantity}</p>
                        {TabletTextToHide ? (
                          <span className="samestyle">x</span>
                        ) : null}
                        <p className="samestyle">£ {item.price.toFixed(2)}</p>
                      </div>
                    </ProductInfo>
                    <div className="id">£ {item.total.toFixed(2)}</div>
                  </Prices>
                ))}
              </PriceInfo>
              <GrandTotal darkLight={darkLight}>
                <p>Amount Due</p>
                <h2>£ {Number(invoiceObj.total).toFixed(2)}</h2>
              </GrandTotal>
            </MainInformation>
          </InvoiceContainer>
          {TabletTextToHide ? (
            <Buttons darkLight={darkLight}>
              <Link to={`/viewInvoices/${id}/EditInvoices`}>
                <button className="edit">Edit</button>
              </Link>

              <button
                className="delete"
                onClick={() => setDeleteSpanShow(!deleteSpanShow)}
              >
                Delete
              </button>
              <button className="mark">Mark as Paid</button>
            </Buttons>
          ) : null}
        </MainContainer>
      ) : null}
    </>
  );
}

const IdAndAdresComoCon = styled.div`
  @media (min-width: 48rem) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const ThreeConParent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .editIn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    background: var(--04, #252945);
    color: var(--05, #dfe3fa);
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    width: 7.3rem;
    padding: 1.5rem 0 1.5rem;
  }
  .deleteIn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0 1.5rem;
    width: 8.9rem;
    border-radius: 24px;
    background: var(--08, #ec5757);
    color: #fff;
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px; /* 100% */
    letter-spacing: -0.25px;
  }
  .markIn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0 1.5rem;
    width: 13.1rem;
    border-radius: 24px;
    background: var(--01, #7c5dfa);
    color: #fff;
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  padding: 3.3rem 2.4rem 2rem 2.2rem;
  background-color: ${(props) => (props.darkLight ? "#F8F8FB" : "#141625")};
  font-family: "League Spartan";
  overflow-y: auto;
  @media (min-width: 90rem) {
    margin-top: 6.5rem;
    margin-left: 25rem;
  }

  .samestyle {
    font-size: 1.3rem;
    font-weight: 500;
    color: ${(props) => (props.darkLight ? "#858bb2" : "#888eb0")};
  }

  .id {
    color: ${(props) => (props.darkLight ? "#0c0e16" : "#ffffff")};
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: -0.25px;
  }

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
  text-decoration: none;

  #styleLink {
    text-decoration: none;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #0c0e16;
    letter-spacing: -0.25px;
    text-decoration: none;
  }

  img {
    width: 0.42rem;
    height: 0.85rem;
  }

  link {
    text-decoration: none;
  }
`;

const Status = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 2.4rem 2.7rem;
  @media (min-width: 48rem) {
    justify-content: center;
    gap: 2rem;
  }
`;
const StatusMain = styled.div`
  background-color: ${(props) => (props.darkLight ? "#ffffff" : "#1e2139")};
  margin-top: 3.1rem;

  border-radius: 0.8rem;
  @media (min-width: 48rem) {
    padding-right: 3rem;
    display: flex;
    gap: 15rem;
  }

  & p {
    font-size: 1.3rem;
    color: ${(props) => (props.darkLight ? "#858bb2" : "#dfe3fa")};

    font-weight: 500;
  }
`;
const SpanCon = styled.div`
  width: 10.4rem;
  border-radius: 4px;
  background-color: rgba(255, 143, 0, 0.0571);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 1.9rem 1.1rem 1.4rem;
  gap: 0.8rem;

  & .personStatus {
    text-align: center;
    color: #ff8f00;
    font-family: "League Spartan";
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
    letter-spacing: -0.25px;
    border-radius: 0.6rem;
  }
`;
const Circletwo = styled.div`
  background: #ff8f00;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
`;
const InvoiceContainer = styled.div`
  width: 100%;
  background-color: ${(props) => (props.darkLight ? "#ffffff" : "#1e2139")};
  margin-top: 1.6rem;
  padding: 2.5rem 2.4rem 2.4rem;
`;
const MainInformation = styled.div`
  width: 100%;
`;
const NumberDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  @media (min-width: 48rem) {
    gap: 2rem;
  }

  span {
    color: #7e88c3;
    font-size: 1.3rem;
  }
`;
const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 3rem;
`;

const InvoiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin-top: 3.1rem;
  @media (min-width: 48rem) {
    flex-direction: row;
    gap: 11.7rem;
  }

  .clientMail {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }
`;
const ClientInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6.2rem;
  @media (min-width: 48rem) {
    gap: 12rem;
  }
`;
const Dates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.1rem;

  .dateInfo {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }
`;
const Bill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .clientName {
    margin-top: 1.3rem;
  }

  .clientAddress {
    margin-top: 0.7rem;
  }
`;
const PriceInfo = styled.div`
  width: 100%;
  margin-top: 3.8rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2.4rem 2.2rem;
  gap: 3.2rem;
  border-radius: 0.8rem 0.8rem 0 0;
  background-color: ${(props) => (props.darkLight ? "#f9fafe" : "#252945")};
  & .priceTitle {
    display: flex;
    justify-content: space-between;
  }
`;

const Prices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8.3rem;
  background-color: ${(props) => (props.darkLight ? "#f9fafe" : "#252945")};
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
    gap: 14rem;
  }

  .quantity {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    @media (min-width: 48rem) {
      justify-content: space-between;
      gap: 17.5rem;
    }
  }
`;
const GrandTotal = styled.div`
  width: 100%;
  height: 8rem;
  padding: 2.6rem 2.4rem 2.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 0.8rem 0.8rem;
  background-color: ${(props) => (props.darkLight ? "#373b53" : "#0c0e16")};

  p {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 500;
  }

  h2 {
    color: #fff;
    font-size: 2.4rem;
  }
`;

const Buttons = styled.div`
  width: 100%;
  height: 9.1rem;
  display: flex;
  gap: 0.8rem;
  justify-content: space-around;
  align-items: center;
  padding: 0 2.4rem;
  background-color: ${(props) => (props.darkLight ? "#fff" : "#1e2139")};

  .edit,
  .delete,
  .mark {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    border-radius: 2.4rem;
    height: 4.8rem;
    border: none;
    font-family: "League Spartan";
  }

  .edit {
    width: 7.3rem;
    background-color: ${(props) => (props.darkLight ? "#f9fafe" : "#252945")};
    color: ${(props) => (props.darkLight ? "#7e88c3" : "#dfe3fa")};
  }

  .delete {
    width: 8.9rem;
    background-color: #ec5757;
  }

  .mark {
    width: 14.9rem;
    background-color: #7c5dfa;
  }
`;
