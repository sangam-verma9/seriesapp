import React from "react";
function Card (props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.image} alt="img" className="card_img" />
                <div className="card_info">
                    <span className="card_catagory">{props.catagoryname} </span>
                    <h3 className="card_title">{props.name}</h3>
                    <a href={props.link} target="_blank" rel="noreferrer" >
                        <button>Watch Now</button>
                    </a> 
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;