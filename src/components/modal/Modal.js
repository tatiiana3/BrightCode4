import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Styles.scss';

const Modal = ({info, setModal, modal}) => {


    const handleClicks = (e) => {
        if(document.getElementById("modalId") !== e.target) {
            document.removeEventListener("click", handleClicks)
            setModal(false)
        }
    }

    if(modal){
        document.addEventListener("click", handleClicks)
    }

    return (
        <div className="modal">
        <div className="modal--content" id="modalId">
            <span className="modal--title">Rules</span>
            <FontAwesomeIcon icon={faTimes} className="modal--close" onClick={()=> setModal(false)}/>

            <p className="modal--text">{info}</p>
        </div>
        </div>
    )
}

export default Modal 