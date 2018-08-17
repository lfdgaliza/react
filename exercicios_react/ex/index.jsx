import React from 'react'
import ReactDOM from 'react-dom'
import Member from './Member'
import Family from './Family';


ReactDOM.render(
    <Family lastName="Galiza">
        <Member firstName="Luiz" />
        <Member firstName="Irlene" />
        <Member firstName="Rachel" />
    </Family>
    , document.getElementById("app")
)