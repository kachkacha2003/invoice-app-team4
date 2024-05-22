
import React from "react"
import { useState } from "react";
import styled from "styled-components";


    
   

export default function ListCheck({
  list,
  setList, 
  arrowicon, 
  createInvoice}) {
  console.log(list)
    return(
          <DayListCon >
                {list.map((item)=>(
                   <div>
                  <DayList    
                      list={list} 
                      setList={setList} 
                      arrowicon={arrowicon}
                      styled = {{display: arrowicon ? "block" : "none"}}
                      
                      onClick={(item) =>
                        
                        item.includes("1 ")
                        ? createInvoice.paymentTerms = "1"
                        :

                        item.includes("7")
                        ? createInvoice.paymentTerms = 7
                        : 

                        item.includes("14")
                        ? createInvoice.paymentTerms = 14
                        : 

                        item.includes("30")
                        ? createInvoice.paymentTerms = 30
                        : null

                      }>{item}</DayList>
                      </div>
                    )
                  )}
                  
                  </DayListCon> 
      
    )}


    const DayListCon = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4.6rem;
  `;

  const DayList = styled.div`
    padding: 1.5rem;
    width: 95%;
    position: absolute;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #252945;
    border: solid 1.7px #141625;
    color:#dfe3fa;
    text-align:center;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
    border-radius: 8px 8px 0 0;

    `
