import React from 'react'

export default function Alert(props) {

    const capitalized = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

    return (
        props.alert &&  <div>
            <div className={`alert alert-${props.alert.typeOfAlert} d-flex align-items-center`} role="alert">
                <div>
                   <strong>{capitalized(props.alert.typeOfAlert)} : </strong> {props.alert.msg}
                </div>
            </div>
        </div>
    )
}

