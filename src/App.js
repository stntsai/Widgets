import React from 'react';
import axios from  'axios';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

export default ()=>{

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

    return (
        <div className="ui container">
            <Dropdown />
        </div>
    )
};