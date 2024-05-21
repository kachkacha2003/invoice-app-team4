import React from "react";
import styled from "styled-components";
import arrowDown from "/images/icon-arrow-down.svg";
import plus from "/images/icon-plus.svg";
import empty from "/images/illustration-empty.svg";
import { useEffect } from "react";

import { useMediaQuery } from "@uidotdev/usehooks";

import { Link } from "react-router-dom";
import FilterContainer from "../components/FilterContainer";
import arrowRight from "/images/icon-arrow-right.svg";




export default function Invoices({
  data,
  setData,
  filtered,
  setFiltered,
  show,
  setShow,
  darkLight,
  
}) {
  const tabletText = useMediaQuery("only screen and (min-width : 48rem)");
  const tabletArrow = useMediaQuery("only screen and (min-width : 48rem)");
  const FilterDataToShow = data.filter((item) => {
    if (
      filtered.includes("paid") &&
      filtered.includes("pending") &&
      filtered.includes("draft")
    )
      return true;
    if (filtered.includes("paid") && filtered.includes("pending")) {
      return item.status === "paid" || item.status === "pending";
    }
    if (filtered.includes("paid") && filtered.includes("draft")) {
      return item.status === "paid" || item.status === "draft";
    }
    if (filtered.includes("pending") && filtered.includes("draft")) {
      return item.status === "pending" || item.status === "draft";
    }
    if (filtered.includes("pending") && filtered.includes("paid")) {
      return item.status === "pending" || item.status === "paid";
    }
    if (filtered.includes("paid")) {
      return item.status === "paid";
    }
    if (filtered.includes("pending")) {
      return item.status === "pending";
    }
    if (filtered.includes("draft")) {
      return item.status === "draft";
    }
  });

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const res = await fetch("http://localhost:3000/people");
    const info = await res.json();
    setData(info);
  }


  return (
    <>

      <InvoicesInfoDiv darkLight={darkLight}>
        <InvoicecCounterCon>

          <InvoiceCountersDiv>
            <span>Invoices</span>
            <p>7 invoices</p>
          </InvoiceCountersDiv>
          <FilterAndNew>
            <FilterCon show={show} setShow={setShow}>
              <span onClick={() => setShow(!show)}>
                Filter {tabletText ? "by status" : null}
              </span>
              <ArrowImg
                src={arrowDown}
                alt="arrow down"
                onClick={() => setShow(!show)}
                show={show}
              />
            </FilterCon>
            <BtnCon>
              <Btn><Link id="styleLink" to={"/createinvoice"}>New</Link></Btn>
              <Circle>
                <img src={plus} alt="" />
              </Circle>
            </BtnCon>
          </FilterAndNew>
          {show ? (
            <FilterContainer
              filtered={filtered}
              setFiltered={setFiltered}
              show={show}
            />
          ) : null}
        </InvoicecCounterCon>

        <InvoicesListsCon darkLight={darkLight}>
          {FilterDataToShow.map((person, index) => {
            return (
              <InvoiceContainer status={person.status} key={index}>
                <span className="personId">
                  <span className="symbol">#</span>
                  {person.id}
                </span>
                <span className="personName">{person.clientName}</span>
                <span className="personPayDate">Due {person.paymentDue}</span>
                <span className="personTotal"> £ {person.total}</span>
                <SpanCon status={person.status}>
                  <Circletwo status={person.status}></Circletwo>
                  <span className="personStatus">{person.status}</span>
                </SpanCon>
                {tabletArrow ? <img src={arrowRight} alt="" /> : null}
              </InvoiceContainer>
            );
          })}

        </InvoicesListsCon>
      </InvoicesInfoDiv>
      {data.length === 0 ? (
        <EmptyCon>
          <img src={empty} alt="" />
          <span>There is nothing here</span>
          <p>
            Create an invoice by clicking the <span>New</span> button and get
            started
          </p>
        </EmptyCon>
      ) : null}
    </>
  );
}

const ArrowImg = styled.img`
  transform: ${(props) => (props.show ? "rotate(180deg)" : "rotate( 0 deg)")};
`;
const EmptyCon = styled.div`
  background: var(--11, #f8f8fb);
  padding: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > span {
    color: var(--08, #0c0e16);
    font-family: "League Spartan";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.75px;
  }
  & p {
    color: var(--06, #888eb0);
    text-align: center;
    font-family: "League Spartan";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.1px;
    margin-top: 2.3rem;
    width: 24ch;
    & > span {
      color: var(--06, #888eb0);
      font-family: "League Spartan";
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: -0.1px;
    }
  }
  & > img {
    margin-bottom: 4.2rem;
  }
`;
const Circletwo = styled.div`
  background: ${(props) =>
    props.status === "paid"
      ? "#33D69F"
      : props.status === "pending"
      ? "#FF8F00"
      : "#373B53"};
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
`;
const SpanCon = styled.div`
  grid-column: 2/3;
  grid-row: 2/4;
  border-radius: 6px;
  background-color: ${(props) =>
    props.status === "paid"
      ? "rgba(51, 214, 159, 0.0571)"
      : props.status === "pending"
      ? "rgba(255, 143, 0, 0.0571)"
      : "rgba(55, 59, 83, 0.0571)"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  @media (min-width: 48rem) {
    width: 10rem;
    height: 4rem;
  }
  & .personStatus {
    text-align: center;
    color: ${(props) =>
      props.status === "paid"
        ? "#33D69F"
        : props.status === "pending"
        ? "#FF8F00"
        : "#373B53"};
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    border-radius: 6px;
  }
`;

const DateTotalCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  & .personTotal {
    color: ${(props)=>props.darkLight 
      ? "var(--08, #0c0e16)"
      : "#ffffff"};
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

  background: ${(props)=> 
      props.darkLight 
      ? "var(--11, #f8f8fb)" 
      : "#141625"};


  :hover {
    cursor: pointer;
  }

`;

const InvoiceContainer = styled.div`
  padding: 2.5rem 2.4rem 2.2rem 2.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20%;
  border-radius: 8px;

  box-shadow: ${(props)=> 
      props.darkLight 
      ? "0px 10px 10px -10px rgba(72, 84, 159, 0.1)": 
      "0 10px 10px -10px rgba(72, 84, 159, 0.1);"};
  background: ${(props)=> 
      props.darkLight 
      ? "#fff": 
      "#1e2139"};

  &:hover {
    cursor: pointer;
  }
  @media (min-width: 48rem) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-column-gap: 0;
    align-items: center;
  }

  & .symbol {
    color: var(--07, #7e88c3);
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px; /* 100% */
    letter-spacing: -0.25px;
    
    
  }
  .in
  & .personId {
    color: var(--08, #0c0e16);
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;

    color:  ${(props)=>props.darkLight 
      ? "var(--08, #0c0e16)"
      : "#ffffff"};

    order: -9;

  }
  & .personName {
    color: #858bb2;
    text-align: left;
    font-family: "League Spartan";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.1px;
    color:  ${(props)=>props.darkLight 
      ? "#858bb2"
      : "#ffffff"};
  }
  & .personPayDate {
    text-align: right;
    color: var(--07, #7e88c3);
    color:  ${(props)=>props.darkLight 
      ? "var(--07, #7e88c3)"
      : "#dfe3fa"};
    font-family: "League Spartan";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.1px;
    order: -8;
  }
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


const BtnCon = styled.div`
  position: relative;

  #styleLink {
        text-decoration: none;
    }
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
  position: relative;
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
  padding: 3.6rem 2.4rem 2.5rem 2.4rem;

  background: ${(props)=> 
      props.darkLight 
      ? "var(--11, #f8f8fb)": 
      "#141625"};
  


  @media (min-width: 48rem) {
    padding: 6.2rem 4.8rem 4rem 4.8rem;
    gap: 5.5rem;
  }
`;
