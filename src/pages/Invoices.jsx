import React from "react";
import styled from "styled-components";
import arrowDown from "/images/icon-arrow-down.svg";
import plus from "/images/icon-plus.svg";

export default function Invoices() {
  async function foo() {
    const res = await fetch("http://localhost:3000/people");
    const data = await res.json();
  }
  return (
    <CommonInvoicesDiv>
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
    </CommonInvoicesDiv>
  );
}

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
  /* background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: right; */
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
const CommonInvoicesDiv = styled.div`
  background: var(--11, #f8f8fb);
  padding: 3.6rem 2.4rem 10.5rem 2.4rem;
`;
