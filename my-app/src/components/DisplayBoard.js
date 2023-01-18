import React from 'react'

export const DisplayBoard = ({numberOfUsers, onChangeToggle}) => {

    return(
        <div className="display-board">
            <h4>Users Created</h4>
            <div className="number">
            {numberOfUsers}
            </div>
            <div className="btn">
                <label className="switch"> Show Users 
                    <input type="checkbox" style={{marginLeft : 6 + 'px'}} onChange={onChangeToggle}></input>
                </label>
            </div>
        </div>
    )
}