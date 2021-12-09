import React from "react";

function Card({name,reqFn}) {
    if(name==='x'){
        return <div onClick={reqFn} className={`card cross`}>{'\u00D7'}</div>
    }
    else if(name==='o'){
        return <div onClick={reqFn} className={`card circle`}>{'\u25CB'}</div>
    }else{
        return <div onClick={reqFn} className={`card blank`}></div>
    }
}

export default Card;