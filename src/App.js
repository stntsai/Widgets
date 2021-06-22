import React, {useState} from 'react';
import axios from  'axios';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import './App.css'

const items=[
    {
        title: 'what is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Hello!',
        content: 'how are you?'
    },
    {
        title: 'Who are you?',
        content: 'No one'
    }
]

const options=[
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The Color Green',
        value:'green'
    },
    {
        label:'A Shade Of Blue',
        value:'blue'
    }
]


    

export default ()=>{

    return <Translate />
    // const [selected, setSelected] = useState(options[0])
    // const [showDropdown, setShowDropdown] = useState(true)

    // return (
    //     <div className="ui container">
    //         <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
    //         {showDropdown ? 
    //             <Dropdown 
    //                 selected={selected} 
    //                 onSelectedChange={setSelected} 
    //                 options={options}
    //             />:null
    //         }    
    //         <h1 className={`colored-text ${selected.value}`}>This is the color you want</h1>    
    //     </div>
    // )    
};