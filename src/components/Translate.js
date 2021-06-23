import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options =[
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Chinese',
        value: 'zh-TW'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
]


const Translate = () =>{
    const [language, setLanguage] = useState(options[3]);
    const [text, setText] = useState('Hello There!');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)}/>        
                </div>
            </div>
            <Dropdown label={'Select a Language'} selected={language} onSelectedChange={setLanguage} options={options}/>
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    )
}


export default Translate;