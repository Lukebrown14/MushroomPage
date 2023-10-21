import React, {useState} from "react";
import './Body.css'

const Body = () => {

    const [clicked, setClick] = useState()

    const handleClick = () => {
        console.log('Button Clicked')
    }

    return (
        <div className="Body">
            <h2 >Lion Mane</h2>
            <img src='../../../public/Lionmane.jpg' />
            <p>Hericium erinaceus (also called lion's mane mushroom, mountain-priest mushroom, bearded tooth fungus, and bearded hedgehog) is an edible mushroom belonging to the tooth fungus group</p>
            <button onClick={handleClick}>Learn More</button>

        </div>
        
    )
}

export default Body