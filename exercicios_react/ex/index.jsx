import React from 'react'
import ReactDOM from 'react-dom'
import Member from './Member'
import Family from './Family';
import Contador from './Contador'

ReactDOM.render(
    <div>
        <Contador initialValue={10} />
        <Family lastName="Galiza">
            <Member firstName="Luiz" />
            <Member firstName="Irlene" />
            <Member firstName="Rachel" />
        </Family>
    </div>
    , document.getElementById("app")
)