import React from 'react';
import './style.css';

export const Choice = ({ AI }) => {
    if (AI === 0) {
        return (
            <div className="dice">
                <img src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.svg" alt=""/>
            </div>
        )
    }
    if (AI === 1) {
        return (
            <div className = 'dice'>
                <img src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg" width = '50%'  alt="one" />
            </div>
        )
    }
    else if (AI === 2) {
        return (
            <div className = 'dice'>
                <img src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg" width = '50%' alt="" />
            </div>
        )
    }
    else if (AI === 3) {
        return (
            <div className = 'dice'>
                <img src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg"width = '50%'  alt="" />
            </div>
        )
    }
    else if (AI === 4) {
        return (
            <div className = 'dice'>
                <img src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg"width = '50%'  alt="" />
            </div>
        )
    }
    else if (AI === 5) {
        return (
            <div className = 'dice'>
                <img src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg" width = '50%'  alt="" />
            </div>
        )
    }
    else if (AI === 6) {
        return (
            <div className = 'dice'>
                <img src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg" width = '50%' alt="" />
            </div>
        )
    }
    else{
        return null
    }

}

