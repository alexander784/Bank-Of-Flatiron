import React from "React";


const Select = (props) => {
    let handleSelect = (evt) => {
        props.selectFun(evt.terget.value)
    }
}