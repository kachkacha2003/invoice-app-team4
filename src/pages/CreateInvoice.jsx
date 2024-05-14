import React from "react";
import styled from "styled-components";
import arrowLeft from "/images/icon-arrow-left.svg"
import { useState } from "react";




export default function CreateInvoice() {
    const [senderAddress, setSenderAddress]=useState({})
    const [street, setStreet] = useState("")
    const [City, setCity] = useState("")
    const [PostCode, setPostCode] = useState("")
    const [Country, setCountry] = useState("")
    const [BillTostrAddre, setBillTostrAddre] = useState("")
    const [ClientsName, setClientsName] = useState("")
    const [ClientsEmail, setClientsEmail] = useState("")
    const [InvoiceDate, setInvoiceDate] = useState("")
    const [PaymentTerms, setPaymentTerms] = useState("")
    const [ProjectDescription, setProjectDescription] = useState("")

const handldraft = (event)=>{
    event.preventDefault();
    console.log({senderAddress})
    setStreet("");
    setCity("");
    setPostCode("");
    setCountry("");

   
}

    return (
        <MainContainer>
           <GoBack>
                <img src={arrowLeft} alt="" />
                <p>Go back</p>
           </GoBack>

           <h1>New Invoice</h1>

           <Bill>
            <p>Bill From</p>
            <SenderAddress onSubmit={handldraft}  >
                <Couple>
                <label className="label" htmlFor="street" >
                    Street Address <span>can't Empty</span></label>
                    <input 
                    id="street"
                    name="street"
                    value={street}
                    type="text" 
                    onChange={(e)=>setStreet(e.target.value)}/>
                </Couple>
              <CityPostcodeCountry>
                <CityPostCode>
                <Couple>
                    <label className="label" htmlFor="City">
                        City<span>can't Empty</span>
                        </label>
                        <input 
                        id="City"
                        name="City"
                        value={City}
                        type="text" 
                        onChange={(e)=>setCity(e.target.value)}/>
                </Couple>  
                <Couple>       
                    <label className="label" htmlFor="City">
                        Post Code<span>can't Empty</span></label>
                        <input 
                        id="PostCode"
                        name="Post Code"
                        value={PostCode}
                        type="text" 
                        onChange={(e)=>setPostCode(e.target.value)}/>
                </Couple>
                </CityPostCode>
                <Couple>
                <label className="label" htmlFor="Country">
                        Country<span>can't Empty</span></label>
                        <input 
                        id="Country"
                        name="Country"
                        value={Country}
                        type="text" 
                        onChange={(e)=>setCountry(e.target.value) & setSenderAddress({street: `${street}`, city: `${City}`, postCode: `${PostCode}`, country: e.target.value})}/>
                </Couple>
                 </CityPostcodeCountry>  
               
            <p>Bill To</p>

            <Couple>
                <label className="label" htmlFor="ClientsName" >
                Client's Name <span>can't Empty</span></label>
                    <input 
                    id="ClientsName"
                    name="ClientsName"
                    value={ClientsName}
                    type="text" 
                    onChange={(e)=>setClientsName(e.target.value)}/>
                </Couple>

                <Couple>
                <label className="label" htmlFor="ClientsEmail" >
                Client's Email <span>can't Empty</span></label>
                    <input 
                    id="ClientsEmail"
                    name="ClientsEmail"
                    value={ClientsEmail}
                    type="text" 
                    onChange={(e)=>setClientsEmail(e.target.value)}/>
                </Couple>

                <Couple>
                <label className="label" htmlFor="BillTostrAddress" >
                    Street Address <span>can't Empty</span></label>
                    <input 
                    id="BillTostrAddress"
                    name="BillTostrAddress"
                    value={BillTostrAddre}
                    type="text" 
                    onChange={(e)=>setBillTostrAddre(e.target.value)}/>
                </Couple>
              <CityPostcodeCountry>
                <CityPostCode>
                <Couple>
                    <label className="label" htmlFor="City">
                        City<span>can't Empty</span>
                        </label>
                        <input 
                        id="City"
                        name="City"
                        value={City}
                        type="text" 
                        onChange={(e)=>setCity(e.target.value)}/>
                </Couple>  
                <Couple>       
                    <label className="label" htmlFor="City">
                        Post Code<span>can't Empty</span></label>
                        <input 
                        id="PostCode"
                        name="Post Code"
                        value={PostCode}
                        type="text" 
                        onChange={(e)=>setPostCode(e.target.value)}/>
                </Couple>
                </CityPostCode>
                <Couple>
                <label className="label" htmlFor="Country">
                        Country<span>can't Empty</span></label>
                        <input 
                        id="Country"
                        name="Country"
                        value={Country}
                        type="text" 
                        onChange={(e)=>setCountry(e.target.value)}/>
                </Couple>
                 </CityPostcodeCountry>   
                    
                 <Couple>
                <label className="label" htmlFor="InvoiceDate">
                Invoice Date<span>can't Empty</span></label>
                        <input 
                        id="InvoiceDate"
                        name="InvoiceDate"
                        value={InvoiceDate}
                        type="Date" 
                        onChange={(e)=>setInvoiceDate(e.target.value)}/>
                </Couple>  

                <Couple>
                <label className="label" htmlFor="PaymentTerms">
                Payment Terms<span>can't Empty</span></label>
                        <input 
                        id="PaymentTerms"
                        name="PaymentTerms"
                        value={PaymentTerms}
                        type="range"
                        value:  
                        onChange={(e)=>setPaymentTerms(e.target.value)}/>
                </Couple>
                     
                <Couple>
                <label className="label" htmlFor="ProjectDescription">
                Project Description<span>can't Empty</span></label>
                        <input 
                        id="ProjectDescription"
                        name="ProjectDescription"
                        value={ProjectDescription}
                        type="text" 
                        onChange={(e)=>setProjectDescription(e.target.value)}/>
                </Couple>
                     <button type="submit">Save as Draft</button>
                     
            </SenderAddress>
            {/* </div> */}
            </Bill>

            

            
        </MainContainer>
    )
}

const MainContainer = styled.div`
     width: 100%;
    padding: 33px 24px 24px 22px;

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
    }

    img {
        width: 4.2px;
        height: 8.5px;
    }
`

const Bill = styled.div`
    margin-top: 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    p {
        font-size: 15px;
        font-weight: bold;
        color: #7c5dfa;
        line-height: 1;
        letter-spacing: -0.25px;
    }
`


const SenderAddress=styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .label {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`
const CityPostcodeCountry=styled.div`
    display: flex;
    flex-direction: column; /* media შეიცვლება row-Ti*/
    /* justify-content: space-between; */
    gap: 2.5rem;
`

const CityPostCode = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2.3rem;
`


const Couple = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;

    #street,
    #City,
    #PostCode,
    #Country,
    #BillTostrAddress,
    #ClientsName,
    #ClientsEmail, 
    #InvoiceDate,
    #PaymentTerms,
    #ProjectDescription
    {
        height: 4.8rem;
        border-radius: 4px;
        border: solid 1px #dfe3fa;
        padding: 1.8rem 11.5rem 1.5rem 1.2rem;
        font-size: 15px;
        font-weight: bold;
        letter-spacing: -0.25px;
        text-align: left;
        color: #0c0e16;
        text-align: left;
    }

    #City,
    #PostCode {
        width: 15.2rem;
        padding-right: 0;
    }

    span {
        display: none;
    }
`


