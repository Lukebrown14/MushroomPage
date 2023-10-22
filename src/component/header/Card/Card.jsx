import React, {useState} from "react";
import './Card.css'

const Card = () => {

    const [clicked, setClick] = useState(false)

    const handleClick = () => {
        if(clicked){
            setClick(false)
        }else{
            setClick(true)
        }
        console.log(clicked)
    }

    const ExtraInformation = () => {
        if (clicked) {
            return <p>Extra information</p>
        }
    }

    return (
        <div className="Body">
            <h2 className="title" >Lion Mane</h2>
            <div className="grid-container">
                <div className="grid-item">
                <img className="image"  src='./Lionmane.jpg' alt="Lion Mane Mushroom"/>
                </div>
                <div className="grid-item">
                <p className="grid-item">Hericium erinaceus (also called lion's mane mushroom, mountain-priest mushroom, bearded tooth fungus, and bearded hedgehog) is an edible mushroom belonging to the tooth fungus group</p>    
                </div>
                
                
                
            </div>
           
            <button onClick={handleClick}>Learn More</button>
            <ExtraInformation />

        </div>
        
    )
}

export default Card