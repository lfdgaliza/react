import React from 'react'
import If from '../template/If';

export default props => {
    if (props.hide) {
        return null
    }
    else {
        return (
            <If test="{!props.hide}">
                <button className={`btn btn-${props.style || "primary"}`}>
                    <i className={`fa fa-${props.icon || "plus"}`} onClick={props.onClick}></i>
                </button>
            </If>
        )
    }


}