import React from 'react';
import "./Product.css";

export default function ActivityPriceSection ({ oldPrice, newPrice }){
    let style = {
        backgroundColor: "skyblue",
        padding: "5px",
        color: "black",
        marginTop: "8px",
    }

    return (
        <>
          <div style={style} className='pricing'>
            <span style={{textDecoration: "line-through"}}>{oldPrice}</span>
               &nbsp; &nbsp; 
               <span style={{fontWeight: "bold"}}>{newPrice}</span>
          </div>
        </>
    )
}