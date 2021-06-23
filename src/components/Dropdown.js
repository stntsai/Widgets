import React, { useState, useEffect, useRef } from 'react';

const Dropdown =({label, options, selected, onSelectedChange})=>{
    const [open, setOpen] = useState(false);
    const ref = useRef();
    useEffect(()=> {
        const onBodyClick = (event)=>{
            if (!ref.current.contains(event.target)){
                setOpen(false)
            }
        }
        document.body.addEventListener('click',onBodyClick,{capture:true})
        return ()=>{
            document.body.removeEventListener('click', onBodyClick,{capture:true});
        };
    },[]);

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
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={()=>setOpen(!open)} 
                    className={`ui selection dropdown ${open? 'visible active': ''}`}
                >
                    <i className="dropdown icon"/>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open?'visible transition':''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            {label=="Select a Color"?
            <div>
                <h1 className={`colored-text ${selected.value}`}>This is the color</h1>
            </div> : null}
        </div>
        
    )
    
}

export default Dropdown;