
import React from "react"
import styled from "styled-components";
import arrowLeft from "/images/icon-arrow-left.svg";
import { Link } from "react-router-dom";
import data from "../data.json/";



export default function ViewInvoice({darkLight}) {
    
    let invoiceObj

    for (let i=0; i<data.people.length; i++) {
        if (data.people[i].id == "XM9141"){
         invoiceObj = data.people[i]
        }
       
    }


    return (
        <>
    <MainContainer darkLight={darkLight}>
         <GoBack >
            <img src={arrowLeft} alt="" />
            
            <p><Link id="styleLink" to={"/"}>Go back</Link></p>
        </GoBack>

        <Status darkLight={darkLight}>
            <p>Status</p>
            <SpanCon>
                <Circletwo></Circletwo>
                <span className="personStatus">Pending</span>
              </SpanCon>
        </Status>

        <InvoiceContainer darkLight={darkLight}>
           
                <MainInformation darkLight={darkLight}>
                    <NumberDesc>
                        <div className="id"><span>#</span>{invoiceObj.id}</div>
                        <div className="samestyle">{invoiceObj.description}</div>
                    </NumberDesc>

                    <Address>
                        <div className="samestyle">{invoiceObj.senderAddress.street}</div>
                        <div className="samestyle">{invoiceObj.senderAddress.city}</div>
                        <div className="samestyle">{invoiceObj.senderAddress.postCode}</div>
                        <div className="samestyle">{invoiceObj.senderAddress.country}</div>
                    </Address>

                    <InvoiceInfo>
                        <ClientInfo>
                            <Dates>
                                <div className="dateInfo" >
                                    <div className="samestyle">Invoice Date</div>
                                    <div className="id">{invoiceObj.createdAt}</div>
                                </div>

                                <div className="dateInfo" >
                                    <div className="samestyle">Payment Due</div>
                                    <div className="id">{invoiceObj.paymentDue}</div>
                                </div>
                            </Dates>

                            <Bill>
                                <div className="samestyle">Bill To</div>
                                <div className="clientName id">{invoiceObj.clientName}</div>
                                <div className="samestyle">{invoiceObj.clientAddress.street}</div>
                                <div className="samestyle">{invoiceObj.clientAddress.city}</div>
                                <div className="samestyle">{invoiceObj.clientAddress.postcode}</div>
                                <div className="samestyle">{invoiceObj.clientAddress.country}</div>
                            </Bill>
                        </ClientInfo>
                        <div  className="clientMail" >
                            <div className="samestyle">Sent to</div>
                            <div className="id">{invoiceObj.clientEmail}</div>
                        </div>
                    </InvoiceInfo>

                    <PriceInfo darkLight={darkLight}>
                        <div  className="priceTitle">
                            <div className="samestyle">Item Name</div>
                            <div className="samestyle">QTY.</div>
                            <div className="samestyle">Price</div>
                            <div className="samestyle">Total</div>
                        </div>
                    {invoiceObj.items.map((item)=>(
                        <Prices darkLight={darkLight}>
                                <ProductInfo>
                                    <div className="id">{item.name}</div>
                                    <div className="quantity" >
                                        <div className="samestyle">{item.quantity}</div><span className="samestyle">x</span>
                                        <div className="samestyle">£ {item.price.toFixed(2)}</div>
                                    </div>
                                </ProductInfo>
                                <div className="id">£ {item.total.toFixed(2)}</div>  
                        </Prices>
                    ))}                    
                    </PriceInfo>
                    <GrandTotal darkLight={darkLight}>
                            <p>Grand Total</p>
                            <h2>£ {invoiceObj.total.toFixed(2)}</h2>
                    </GrandTotal>
                </MainInformation>  
        </InvoiceContainer>
    </MainContainer>
<Buttons darkLight={darkLight}>
    <button className="edit" >Edit</button>
    <button className="delete">Delete</button>
    <button className="mark">Mark as Paid</button>
</Buttons>
</>
    )
}


const MainContainer = styled.div`
    width: 100%;
    padding: 3.3rem 2.4rem 2rem 2.2rem;
    background-color: ${(props)=> 
      props.darkLight 
      ? "#fff": 
      "#141625"};
    font-family: "League Spartan";
    overflow-y: auto;
    
    .samestyle {
        font-size: 1.3rem;
        font-weight: 500;
        color: ${(props)=>props.darkLight 
      ? "#858bb2"
      : "#888eb0"};
        }
    
    

    
    .id {
        color:  ${(props)=>props.darkLight 
      ? "#0c0e16"
      : "#ffffff"};
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: -0.25px;
    }

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
    text-decoration: none;

    #styleLink {
        text-decoration: none
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
`
const Status = styled.div`
    height: 9.1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props)=> 
            props.darkLight 
            ? "#ffffff" 
            : "#1e2139"};
    margin-top: 3.1rem;
    padding: 2.4rem 2.4rem 2.7rem;
    border-radius: 0.8rem;
    
    & p {
        font-size: 1.3rem;
        color: ${(props)=> 
      props.darkLight 
      ? "#858bb2": 
      "#dfe3fa"};
      
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
    background-color: ${(props)=> 
            props.darkLight 
            ? "#ffffff" 
            : "#1e2139"};
    margin-top: 1.6rem;
    padding: 2.5rem 2.4rem 2.4rem;
`
const MainInformation=styled.div`
    width: 100%;
    
`
const NumberDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    span {
        color: #7e88c3;
        font-size: 1.3rem
    }
`
const Address = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 3rem;
`

const InvoiceInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    margin-top: 3.1rem;

    .clientMail {
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
    }
`
const ClientInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6.2rem;

`
const Dates = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.1rem;

  .dateInfo {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }
`
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
`
const PriceInfo = styled.div`
    width: 100%;
    margin-top: 3.8rem;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2.4rem 2.2rem;
    gap: 3.2rem;
    border-radius: 0.8rem 0.8rem 0 0;
    background-color: ${(props)=> 
      props.darkLight 
      ? "#f9fafe" 
      : "#252945"};
    
    .priceTitle {
        display: none;
    }
`

const Prices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8.3rem;
    background-color: ${(props)=> 
      props.darkLight 
      ? "#f9fafe" 
      : "#252945"};
    
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    
    
    

    .quantity {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }
`
const GrandTotal = styled.div`
    width: 100%;
    height: 8rem;
    padding: 2.6rem 2.4rem 2.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 0.8rem 0.8rem;
    background-color: ${(props)=> 
      props.darkLight 
      ? "#373b53" 
      : "#0c0e16"};

    p {
        color: #fff;
        font-size: 1.3rem;
        font-weight: 500;
    }

    h2 {
        color: #fff;
        font-size: 2.4rem;
    }
`


const Buttons=styled.div`
    width: 100%;
    height: 9.1rem;
    background-color: #ffffff;
    display: flex;
    gap: 0.8rem;
    justify-content: space-around;
    align-items: center;
    padding: 0 2.4rem;
    background-color: ${(props)=> 
            props.darkLight 
            ? "#ffffff" 
            : "#1e2139"};

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
        background-color: ${(props)=> 
      props.darkLight 
      ? "#f9fafe" 
      : "#252945"};
        color: ${(props)=> 
      props.darkLight 
      ? "#7e88c3" 
      : "#dfe3fa"};
    }

    .delete {
        width: 8.9rem;
        background-color: #ec5757;
    }

    .mark {
        width: 14.9rem;
        background-color: #7c5dfa;
    }

`
    
