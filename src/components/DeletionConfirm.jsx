import React from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function DeletionConfirm({ setDeleteSpanShow, deleteSpanShow }) {
  const navigate = useNavigate();
  console.log(setDeleteSpanShow, deleteSpanShow);
  const id = location.pathname.slice(-6);
  async function deleteInvoice() {
    const res = await fetch(
      `https://invoice-api-bcbr.onrender.com/api/invoice/${id}`,
      {
        method: "DELETE",
        "Content-Type": "application/json",
      }
    );
    navigate("/");
  }

  return (
    <Cover>
      <Hone>Confirm Deletion</Hone>
      <Para>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </Para>
      <Containerr>
        <CancelCon onClick={() => setDeleteSpanShow(!deleteSpanShow)}>
          Cancel
        </CancelCon>
        <DeleteCon onClick={deleteInvoice}>Delete </DeleteCon>
      </Containerr>
    </Cover>
  );
}

const DeleteCon = styled.div`
  border-radius: 24px;
  background: var(--08, #ec5757);
  color: #fff;
  font-family: "League Spartan";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 100% */
  letter-spacing: -0.25px;
  padding: 1.6rem 2.5rem;
  margin-left: 0.8rem;
`;
const CancelCon = styled.div`
  border-radius: 24px;
  background: #f9fafe;
  color: var(--07, #7e88c3);
  font-family: "League Spartan";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 100% */
  letter-spacing: -0.25px;
  padding: 1.6rem 2.5rem;
  margin-left: auto;
`;
const Containerr = styled.div`
  display: flex;
  margin-left: auto;
`;
const Para = styled.p`
  color: var(--06, #888eb0);
  font-family: "League Spartan";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 169.231% */
  letter-spacing: -0.1px;
  width: 29ch;
  margin-bottom: 2.2rem;
`;
const Hone = styled.h5`
  color: var(--08, #0c0e16);
  font-family: "League Spartan";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.5px;
  margin-bottom: 0.8rem;
`;
const Cover = styled.div`
  transform: translate(-50%, -50%);
  justify-content: center;
  top: 50%;
  left: 50%;
  position: absolute;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  width: 32.7rem;
  padding: 3.2rem;
`;
