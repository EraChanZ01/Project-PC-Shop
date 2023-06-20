import React, { useState } from 'react'
import "./ModalAuth.scss"

interface IModalAuth {
    input: Array<any>,
    button: (data: any) => any,
    exitModal: () => void,
    classes?: any,
    title: string,
    buttonText: string,
    id?: string
}

function ModalAuth({ input, button, exitModal, title, buttonText, id }: IModalAuth) {
    const [user, setUser] = useState({
    })
    const HandleChange = ({ target }: any) => {
        setUser({ ...user, [target.name]: target.value })
    }
    const HandleClick = () => {
        button(user)
    }
    return (
        <div className="modal" id={id ? id : title}>
            <div className="ModalHeader">
                <p>{title}</p>
                <button onClick={exitModal}><img src="/image/cross.png" /></button>
            </div>
            <div className="input-part">
                {input.map((e, index) => <label key={index}><p>{e.text}</p><input name={e.name} onChange={(e) => HandleChange(e)}></input></label>)}
            </div>
            <button className='buttonRegister' onClick={HandleClick}>{buttonText}</button>
        </div>
    )
}

export default ModalAuth