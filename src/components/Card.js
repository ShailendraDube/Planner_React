import { useState } from "react";

function Card({id,name,info,image,price,removebtn}) {

    const[readmore,setmore] = useState(false);
    // agar readmore true hai toh aap 200 ki length batana hai
    //else complete length bato 
    const description = readmore ? info : `${info.substring(0,200)}...`

    function readmorehandler() {
        setmore(!readmore);
    }

    return(
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price"> ₹ {price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            <div className="description">
            {description}
                <span className="read-more" onClick={readmorehandler}>
                    {readmore ? `Show Less` : `Read More`}
                </span>
            </div>
            </div>

            <button className="btn-read" onClick={() => removebtn(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;