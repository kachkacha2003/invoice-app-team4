import React from "react";
import styled from "styled-components";
import arrowLeft from "/images/icon-arrow-left.svg"
import deleteIcon from "/images/icon-delete.svg"
import { useState } from "react";




export default function CreateInvoice() {
    const [senderAddress, setSenderAddress]=useState({})
    const [street, setStreet] = useState("")
    const [City, setCity] = useState("")
    const [PostCode, setPostCode] = useState("")
    const [Country, setCountry] = useState("")
    const [ClientsName, setClientsName] = useState("")
    const [ClientsEmail, setClientsEmail] = useState("")
    const [ClientAddress, setClientAddress] = useState({})
    const [streetTo, setStreetTo] = useState("")
    const [CityTo, setCityTo] = useState("")
    const [PostCodeTo, setPostCodeTo] = useState("")
    const [CountryTo, setCountryTo] = useState("")
    const [InvoiceDate, setInvoiceDate] = useState("")
    const [PaymentTerms, setPaymentTerms] = useState("")
    const [ProjectDescription, setProjectDescription] = useState("")
    const [ItemName, setItemName] = useState("")
    const [Qty, setQty] = useState("")
    const [Price, setPrice] = useState("")
    const [Total, setTotal] = useState("")
    const [Items, setItems] =useState("")
    const [PaymentDue, setPaymentDue] = useState()
    const arr=[]
    
    



const handldraft = (event)=>{ 
    event.preventDefault();
    // console.log({senderAddress, ClientAddress})
    // console.log({ClientsName, ClientsEmail, streetTo, CityTo, PostCodeTo, CountryTo, InvoiceDate, PaymentTerms, ProjectDescription})
    // console.log({Items: [...arr, {name: `${ItemName}`, quantity: `${Qty}`, price: `${Price}`, total: `${Total}`}]})
    // console.log({Items})

    console.log([{createdAt: InvoiceDate, /*paymentDue: (`${PaymentTerms}` + (`${InvoiceDate}`)),*/ 
    description: ProjectDescription, paymentTerms: PaymentTerms,
    clientEmail: ClientsEmail, status: "pending", senderAddress: senderAddress,
    clientAddress: ClientAddress, items: [{name: `${ItemName}`, quantity: `${Qty}`, price: `${Price}`, /*total: `${Total}`*/}]}])

    setStreet("");
    setCity("");
    setPostCode("");
    setCountry("");
    setClientsName("");
    setClientsEmail("");
    setClientAddress("");
    setStreetTo("");
    setCityTo("");
    setPostCodeTo("");
    setCountryTo("");
    setInvoiceDate("");
    setPaymentTerms("");
    setProjectDescription("");
    setItemName("");
    setQty("");
    setTotal();
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
                    <label className="label" htmlFor="Post Code">
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
                <label className="label" htmlFor="streetTo" >
                    Street Address <span>can't Empty</span></label>
                    <input 
                    id="streetTo"
                    name="streetTo"
                    value={streetTo}
                    type="text" 
                    onChange={(e)=>setStreetTo(e.target.value)}/>
                </Couple>
              <CityPostcodeCountry>
                <CityPostCode>
                <Couple>
                    <label className="label" htmlFor="CityTo">
                        City<span>can't Empty</span>
                        </label>
                        <input 
                        id="CityTo"
                        name="CityTo"
                        value={CityTo}
                        type="text" 
                        onChange={(e)=>setCityTo(e.target.value)}/>
                </Couple>  
                <Couple>       
                    <label className="label" htmlFor="Post Code To">
                        Post Code<span>can't Empty</span></label>
                        <input 
                        id="PostCodeTo"
                        name="Post Code To"
                        value={PostCodeTo}
                        type="text" 
                        onChange={(e)=>setPostCodeTo(e.target.value)}/>
                </Couple>
                </CityPostCode>
                <Couple>
                <label className="label" htmlFor="CountryTo">
                        Country<span>can't Empty</span></label>
                        <input 
                        id="CountryTo"
                        name="CountryTo"
                        value={CountryTo}
                        type="text" 
                        onChange={(e)=>setCountryTo(e.target.value) & setClientAddress({street: `${streetTo}`, city: `${CityTo}`, postCode: `${PostCodeTo}`, country: e.target.value})}/>
                </Couple>
                 </CityPostcodeCountry>   
                 
                <DateTerms> 
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
                        type="text" 
                        onChange={(e)=>setPaymentTerms(e.target.value)}/>
                </Couple>
                </DateTerms>

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

                <ItemList>
                <p>Item List</p>
                
                
                <Couple>
                    <label className="label" htmlFor="ItemName">
                    Item Name<span>can't Empty</span></label>
                            <input 
                            id="ItemName"
                            name="ItemName"
                            value={ItemName}
                            type="text"
                            onChange={(e)=>setItemName(e.target.value)}/>
                </Couple>
            <ItemsPriceDel>
            <ItemPrice>
                <Couple>
                    <label className="label" htmlFor="Qty">
                    Qty.<span>can't Empty</span></label>
                            <input 
                            id="Qty"
                            name="Qty"
                            value={Qty}
                            type="text" 
                            onChange={(e)=>setQty(e.target.value)}/>
                </Couple>

                <Couple>
                    <label className="label" htmlFor="Price">
                    Price<span>can't Empty</span></label>
                            <input 
                            id="Price"
                            name="Price"
                            value={Price}
                            type="text"
                            onChange={(e)=>setPrice(e.target.value)}/>
                </Couple>

                <Couple>
                    <label className="label" htmlFor="Total">
                    Total<span>can't Empty</span></label>
                    <input 
                        id="TotalPrice"
                        name="Total"
                        value={`${Price}`* `${Qty}`}
                        type="submit"
                        onChange={(e)=>setPrice(e.target.value)}/>
                </Couple>
            </ItemPrice>
            
                <img src={deleteIcon} alt="" />

    
                </ItemsPriceDel>
                <button id="add" type="click" 
                
                >+ Add New Item</button>
                </ItemList>
                
                <EmptyContainer></EmptyContainer>
                <Buttons>
                     <button className="discard" type="click" >Discard</button>
                     <button className="draft" type="click">Save as Draft</button>
                     <button className="send" type="submit">Save & Send</button>
                </Buttons>   
                </SenderAddress>
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

const DateTerms = styled.div`
    display: flex;
    flex-direction: column; /*tablet, desktop*/
    gap:2.5rem;
`
const CityPostcodeCountry = styled.div`
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
    #ClientsName,
    #ClientsEmail, 
    #InvoiceDate,
    #PaymentTerms,
    #ProjectDescription,
    #streetTo,
    #CityTo,
    #PostCodeTo,
    #CountryTo,
    #ItemName
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
    #PostCode,
    #CityTo,
    #PostCodeTo {
        width: 15.2rem;
        padding-right: 0;
    }

    #InvoiceDate {
        display: flex;
        justify-content: space-between;
        padding: 1rem 1rem 1rem 1rem;
        width: 100%;
    }

    #Qty {
        width: 6.4rem;
        height: 4.8rem;
        border: solid 1px #dfe3fa;
        text-align: center;
    }

    #Price {
        width: 10rem;
        height: 4.8rem;
        border: solid 1px #dfe3fa;
        text-align: center
    }

    #TotalPrice {
        width: 4.7rem;
        height: 4.8rem;
        border: none;
        background-color: #fff;
    }
    
    span {
        display: none;
    }
`
const ItemPrice = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.6rem;

`

const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.2rem;

    #add {
        border-radius: 2.4rem;
        background-color: #f9fafe;
        padding: 1.8rem 10.7rem 1.5rem 10.8rem;
        color: #7e88c3;
        border: none;
        font-weight: bold;
        font-size: 1.5rem;
    }

    p {
        color: #777f98;
    }
`
const ItemsPriceDel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
        width: 1.07rem;
        height: 1.24rem
    }
`

const EmptyContainer = styled.div`
    width: 100%;
    height: 6.4rem;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));

`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.7rem;
    

    .discard {
        background-color: #f9fafe;
        padding: 1.8rem 1.9rem 1.5rem 1.8rem;
        width: 8.4rem;
        color: #7e88c3;
        border-radius: 2.4rem;
        border: none;
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: -0.25px;
    }

    .draft {
        background-color: #373b53;
        padding: 1.8rem 1.39rem 1.5rem 1.61rem;
        width: 11.7rem;
        color: #888eb0;
        border-radius: 2.4rem;
        border: none;
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: -0.25px;
    }

    .send {
        background-color: #7c5dfa;
        padding: 1.8rem 1.5rem 1.5rem 1.6rem;
        width: 11.2rem;
        color: #ffffff;
        border-radius: 2.4rem;
        border: none;
        letter-spacing: -0.25px;
        font-size: 1.2rem;
        font-weight: bold;
    }
`

