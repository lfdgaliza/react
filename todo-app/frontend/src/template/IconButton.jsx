import React from 'react'
import If from '../template/If';

export default props => {

    return (
        <If test="{!props.hide}">
            <button className={`btn btn-${props.style || "primary"}`} onClick={props.onClick}>
                <i className={`fa fa-${props.icon || "plus"}`}></i>
            </button>
        </If>
    )


}