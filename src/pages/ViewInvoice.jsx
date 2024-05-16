import React from "react";
import styled from "styled-components";
import arrowLeft from "/images/icon-arrow-left.svg"
import { Link } from "react-router-dom";
import data from "../data.json"




export default function ViewInvoice() {
    let indexOfArr
    let invoiceObj
    for (let i=0; i<data.length; i++) {
       if (data[i].id == "XM9141"){
        indexOfArr = i
        console.log(indexOfArr)
       }
       invoiceObj = data[indexOfArr]
    }

    return (
    <MainContainer>
         <GoBack>
            <img src={arrowLeft} alt="" />
            
            <p><Link to={"/"}>Go back</Link></p>
        </GoBack>

        <Status>
            <p>Status</p>
            <SpanCon>
                <Circletwo></Circletwo>
                <span className="personStatus">Pending</span>
              </SpanCon>
        </Status>

        <InvoiceContainer >
           
                <MainInformation>
                    <div>
                        <div>{invoiceObj.id}</div>
                        <div>{invoiceObj.description}</div>
                    </div>

                    <div>
                        <div>{invoiceObj.senderAddress.street}</div>
                        <div>{invoiceObj.senderAddress.city}</div>
                        <div>{invoiceObj.senderAddress.postcode}</div>
                        <div>{invoiceObj.senderAddress.country}</div>
                    </div>

                    <div>
                        <div>
                            <div>Invoice Date</div>
                            <div>{invoiceObj.createdAt}</div>
                        </div>

                        <div>
                            <div>Bill To</div>
                            <div>{invoiceObj.clientAddress.street}</div>
                            <div>{invoiceObj.clientAddress.city}</div>
                            <div>{invoiceObj.clientAddress.postcode}</div>
                            <div>{invoiceObj.clientAddress.country}</div>
                        </div>

                        <div>
                        <div>Sent to</div>
                        <div>{invoiceObj.clientEmail}</div>
                        </div>
                    </div>
                
                </MainInformation>
                    
            
        </InvoiceContainer>


    </MainContainer>

    
    )
}


const MainContainer = styled.div`
    width: 100%;
    padding: 3.3rem 2.4rem 2rem 2.2rem;
    background-color: #f8f8fb;

  h1 {
    margin-top: 2.6rem;
    font-size: 2.4rem;
    font-weight: bold;
    color: #0c0e16
    }
`
const GoBack = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.79rem;
    


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
`
const Status = styled.div`
    height: 9.1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    margin-top: 3.1rem;
    padding: 2.4rem 2.4rem 2.7rem;
    
    & p {
        font-size: 1.3rem;
        color: #858bb2;
        font-weight: 500;
    }
`


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
    color:  #FF8F00;
    font-family: "League Spartan";
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
    letter-spacing: -0.25px;
    border-radius: 0.6rem;
  }
`

const Circletwo = styled.div`
  background: #FF8F00;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
`

const InvoiceContainer = styled.div`
    width: 100%;
    height: 69.5rem;
    background-color: #fff;
    margin-top: 1.6rem;
    padding: 2.5rem 2.4rem 2.4rem;
`

const MainInformation=styled.div`
    width: 100%
`
    
