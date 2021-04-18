import React from 'react'

export const Modal = ({ closeModal, openModal }) => {
    if (!openModal) {
        return null
        
    }
    if (openModal) {
        console.log('true')
        return (
            <div>
                <div className="overlay" />
                <div className='modal'>
                    <button onClick={closeModal}>Restart</button>
                </div>
            </div>
        )
    }
}
