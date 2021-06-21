import React, { useState, useEffect } from 'react';

const Dropdown =({options, selected, onSelectedChange})=>{
    const renderedOptions = options.map((option)=>{
        if (option.value!==selected.value){
            return(
                <div onClick={()=>onSelectedChange(option)} key={option.value} className="item">
                    {option.label}
                </div>
            )
        }
    })
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"/>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Dropdown;