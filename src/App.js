import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';


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
            <Search />
        </div>
    )
};