import React, {useState} from "react";
import "./fontConverter.css"

export default function FontConverter(){

    const [textToConvert, setTextToConvert] = useState('')

    return(
        <>
            <div style={{
                fontFamily: "Cedarville Cursive, cursive"
            }}>
                {textToConvert? textToConvert: ""}
            </div>
            <div>
                <input onChange={(e) => setTextToConvert(e.target.value)} type="text"/>
            </div>
        </>
    )
}