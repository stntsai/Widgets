import React, {useState} from 'react';
import axios from  'axios';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
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
    const [selected, setSelectd] = useState(options[0]);
    return (
        <div>
            <Header />
            <div className="ui container">
                <Route path="/">
                    <Accordion items={items}/>
                </Route>
                <Route path ="/list">
                    <Search />
                </Route>
                <Route path ="/dropdown">
                    <Dropdown 
                        label="Select a Color" 
                        options={options} 
                        selected={selected} 
                        onSelectedChange={setSelectd}
                    />
                </Route>
                <Route path="/translate">
                    <Translate />
                </Route>
            </div>
        </div>
    )
};