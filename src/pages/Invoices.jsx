import React from "react";
import styled from "styled-components";
import arrowDown from "/images/icon-arrow-down.svg";
import plus from "/images/icon-plus.svg";
import { useEffect } from "react";

export default function Invoices({ data, setData }) {
  useEffect(() => {
    foo();
  }, []);
  async function foo() {
    const res = await fetch("http://localhost:3000/people");
    const info = await res.json();
    setData(info);
  }

  return (
    <InvoicesInfoDiv>
      <InvoicecCounterCon>
        <InvoiceCountersDiv>
          <span>Invoices</span>
          <p>7 invoices</p>
        </InvoiceCountersDiv>
        <FilterAndNew>
          <FilterCon>
            <span>Filter</span>
            <img src={arrowDown} alt="arrow down" />
          </FilterCon>
          <BtnCon>
            <Btn>New</Btn>
            <Circle>
              <img src={plus} alt="" />
            </Circle>
          </BtnCon>
        </FilterAndNew>
      </InvoicecCounterCon>
      <InvoicesListsCon>
        {data.map((person) => {
          return (
            <InvoiceContainer status={person.status}>
              <span className="personId">
                <span className="symbol">#</span>
                {person.id}
              </span>
              <span className="personName">{person.clientName}</span>
              <DateTotalCon>
                <span className="personPayDate">{person.paymentDue}</span>
                <span className="personTotal">{person.total}</span>
              </DateTotalCon>
              <span className="personStatus">{person.status}</span>
            </InvoiceContainer>
          );
        })}
      </InvoicesListsCon>
    </InvoicesInfoDiv>
  );
}
const DateTotalCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  & .personTotal {
    color: var(--08, #0c0e16);
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 160% */
    letter-spacing: -0.25px;
  }
`;
const InvoicesListsCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background: var(--11, #f8f8fb);
`;

const InvoiceContainer = styled.div`
  padding: 2.5rem 2.4rem 2.2rem 2.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  & .symbol {
    color: var(--07, #7e88c3);
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px; /* 100% */
    letter-spacing: -0.25px;
  }
  & .personId {
    color: var(--08, #0c0e16);
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
  }
  & .personName {
    color: #858bb2;
    text-align: right;
    font-family: "League Spartan";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.1px;
  }
  & .personPayDate {
    color: var(--07, #7e88c3);
    font-family: "League Spartan";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.1px;
  }
  & .personStatus {
    text-align: center;
    color: ${(props) => (props.status === "paid" ? "#33D69F" : "#FF8F00")};
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    border-radius: 6px;
    opacity: 0.0571;
    background: ${(props) => (props.status === "paid" ? "#33D69F" : "#FF8F00")};
  }
`;

const BtnCon = styled.div`
  position: relative;
`;
const Circle = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.button`
  text-align: right;
  color: #fff;
  font-family: "League Spartan";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  border-radius: 24px;
  background: var(--01, #7c5dfa);
  border: none;
  padding: 1.5rem;
  width: 9rem;
`;
const InvoicecCounterCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FilterCon = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  & > span {
    color: var(--08, #0c0e16);
    text-align: right;
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px; /* 100% */
    letter-spacing: -0.25px;
  }
`;
const FilterAndNew = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
`;
const InvoiceCountersDiv = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    color: var(--08, #0c0e16);
    font-family: "League Spartan";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.75px;
  }
  & > p {
    color: var(--06, #888eb0);
    font-family: "League Spartan";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.1px;
  }
`;
const InvoicesInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background: var(--11, #f8f8fb);
  padding: 3.6rem 2.4rem 10.5rem 2.4rem;
`;
