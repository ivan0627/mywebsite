import React from "react";
import "../Styles.css/Contactme.css"

function Contactme () {
    return(
        <div className="contactme-container" id="Contact">
        
        <form action="">
            <label for="GET-name">Name </label>
            <input id="GET-name" type="text" name="name" />
            <br/>
            <label for="GET-name">Email</label>
            <input id="GET-name" type="email" name="email" />
            <br/>
            <label for="GET-name">Comments</label>
            <input id="GET-name" type="text" name="comments" />
            
        
            <input type="submit" value="Save" />
        </form>


        </div>
    )
}

export default Contactme