import React from "react";
import styled from "styled-components";
import check from "/images/icon-check.svg";

export default function FilterContainer({
  filtered,
  setFiltered,
  show,
  setShow,
}) {
  console.log(filtered);
  return (
    <Parent>
      <Inside
        onClick={() =>
          filtered.includes("draft")
            ? setFiltered(filtered.filter((el) => el !== "draft"))
            : setFiltered([...filtered, "draft"])
        }
      >
        <CheckCon filtered={filtered}>
          <img src={check} alt="" />
        </CheckCon>
        <span>Draft</span>
      </Inside>
      <Inside
        onClick={() =>
          filtered.includes("pending")
            ? setFiltered(filtered.filter((el) => el !== "pending"))
            : setFiltered([...filtered, "pending"])
        }
      >
        <CheckCon filtered={filtered}>
          <img src={check} alt="" />
        </CheckCon>
        <span>Pending</span>
      </Inside>
      <Inside
        filtered={filtered}
        onClick={() =>
          filtered.includes("paid")
            ? setFiltered(filtered.filter((el) => el !== "paid"))
            : setFiltered([...filtered, "paid"])
        }
      >
        <CheckCon filtered={filtered}>
          <img src={check} alt="" />
        </CheckCon>
        <span>Paid</span>
      </Inside>
    </Parent>
  );
}

const CheckCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 2px;
  background: ${(props) =>
    props.filtered.includes("draft")
      ? "var(--01, #7C5DFA)"
      : "var(--05, #DFE3FA)"};
`;
const Inside = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  & span {
    color: var(--08, #0c0e16);
    font-family: "League Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
  }
`;

const Parent = styled.div`
  top: 10rem;
  right: 15rem;
  position: absolute;
  width: 12rem;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  padding: 1.5rem 0 1.5rem 1.5rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0.25);
`;
