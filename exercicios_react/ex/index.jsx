import React from 'react'
import ReactDOM from 'react-dom'
import Member from './Member'
import Family from './Family';
import Contador from './Contador'
import ChangingText from './ChangingText'

ReactDOM.render(
    <div>
        <ChangingText initialValue="teste" />
        <Contador initialValue={10} />
        <Family lastName="Galiza">
            <Member firstName="Luiz" />
            <Member firstName="Irlene" />
            <Member firstName="Rachel" />
        </Family>
    </div>
    , document.getElementById("app")
)