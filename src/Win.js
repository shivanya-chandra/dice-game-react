import React from 'react'

export const Win = ({ Human, AI }) => {
    if (Human === 6) {
        return <div><h3>You win!</h3></div>
    } else if (AI === 6) {
        return (
            <div><h3>The computer wins, better luck next time!</h3></div>
        )
    }
    else {
        return null
    }
}
