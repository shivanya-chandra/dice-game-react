import React, { useState, useEffect, useRef } from 'react';

export const Score = ({ Human, AI }) => {
    const [score, setScore] = useState(0);
    const [score2, setScore2] = useState(0);
    const prevScore = usePrevious(score);
    const prevScore2 = usePrevious(score2);
    function usePrevious(preVal) {
        const ref = useRef()
        useEffect(() => {
            ref.current = preVal
        }, [preVal]);
        return ref.current
    }
    // useEffect(() => {
    //     if (Human === 0 || AI === 0) {
    //         setScore(0)
    //         setScore2(0)
    //         console.log('render')
    //     }
        
    //     }, [AI, Human]
    // );
    /* In this above useEffect either the AI was changing or Human was changing always we re ran again and again */
    useEffect(() => {
        if (AI === 6) {
            setScore(score + 1)
        }
    }, [AI])
    useEffect(() => {
        if (Human === 6) {
            setScore2(score2 + 1)
        }
    }, [Human])

         if (score2 > score) {
             return <>
        <div className='score'>
            AI-score: {score}<br/>
            Your-score: {score2}
          <h5 className='Green'>You are in the lead!</h5>
        </div>
             </>
        }
       if (score > score2) {
           return <>
        <div className='score'>
            AI-score: {score}<br/>
            Your-score: {score2}
               <h5 className='Red'>AI is in the lead!</h5>
        </div>
               </>
        }
    return (
        <div className='score'>
            AI-score: {score}<br/>
            Your-score: {score2}
        </div>
    )
}
