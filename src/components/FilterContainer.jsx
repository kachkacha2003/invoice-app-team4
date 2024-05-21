import React from "react";
import styled from "styled-components";
import check from "/images/icon-check.svg";

export default function FilterContainer({
  filtered,
  setFiltered,
  show,
  setShow,
}) {
  return (
    <Parent>
      <Inside
        onClick={() =>
          filtered.includes("Draft")
            ? setFiltered(filtered.filter((el) => el !== "Draft"))
            : setFiltered([...filtered, "Draft"])
        }
      >
        <CheckCon filtered={filtered}>
          {filtered.includes("Draft") ? <img src={check} alt="" /> : null}
        </CheckCon>
        <span>Draft</span>
      </Inside>
      <Inside
        onClick={() =>
          filtered.includes("Pending")
            ? setFiltered(filtered.filter((el) => el !== "Pending"))
            : setFiltered([...filtered, "Pending"])
        }
      >
        <CheckConTwo filtered={filtered}>
          {filtered.includes("Pending") ? <img src={check} alt="" /> : null}
        </CheckConTwo>
        <span>Pending</span>
      </Inside>
      <Inside
        filtered={filtered}
        onClick={() =>
          filtered.includes("Paid")
            ? setFiltered(filtered.filter((el) => el !== "Paid"))
            : setFiltered([...filtered, "Paid"])
        }
      >
        <CheckConThree filtered={filtered}>
          {filtered.includes("Paid") ? <img src={check} alt="" /> : null}
        </CheckConThree>
        <span>Paid</span>
      </Inside>
    </Parent>
  );
}

const CheckConThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 2px;
  background: ${(props) =>
    props.filtered.includes("Paid")
      ? "var(--01, #7C5DFA)"
      : "var(--05, #DFE3FA)"};
`;

const CheckConTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 2px;
  background: ${(props) =>
    props.filtered.includes("Pending")
      ? "var(--01, #7C5DFA)"
      : "var(--05, #DFE3FA)"};
`;
const CheckCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 2px;
  background: ${(props) =>
    props.filtered.includes("Draft")
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
  :hover {
    cursor: pointer;
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
  @media (min-width: 48rem) {
    right: 23.5rem;
    top: 12rem;
  }
`;
