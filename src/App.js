import React, { useState, useReducer, useEffect } from 'react';
import { Choice } from './Choice';
import { Choice2 } from './Choice2';
import { Win } from './Win';
import './style.css'
import { Score } from './Score';
import { Modal } from './Modal';

function App() {
  const initialVal = { num: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case 'Hard':
        const randNum = Math.floor(Math.random() * 6 + 3);
        return { num: randNum };
      case 'Easy':
        const randNum2 = Math.floor(Math.random() * 6 + 1);
        return { num: randNum2 };
      case 'Medium':
        const randNum3 = Math.floor(Math.random() * 6 + 2);
        return { num: randNum3 };
    }
  }
    const initialVal2 = { num2: 0 };
  function reducer2(state2, action2) {
    switch (action2.type) {
      case 'Hard':
        const randNum4 = Math.floor(Math.random() * 6 + 3);
        return { num2: randNum4 };
      case 'Easy':
        const randNum5 = Math.floor(Math.random() * 6 + 1) ;
        return { num2: randNum5 };
      case 'Medium':
        const randNum6 = Math.floor(Math.random() * 6 + 2);
        return { num2: randNum6 };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialVal);
  const [state2, dispatch2] = useReducer(reducer2, initialVal2);
  const [tries, setTries] = useState(0);
  const [count, setCount] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const handleChange = (e) => {
    setTries(parseInt(e.target.value));
    setGameOver(false);
  }
  if (state.num > 6) {
    state.num = 1;
  };

  if (state2.num2 > 6) {
    state2.num2 = 1;
  }
  useEffect(() => {
    if (count === tries) {
      setGameOver(true);
      setCount(0);
      setTries(0);
    }
    
  }, [state.num, state2.num2])

    if (gameOver) {
      state.num = 0;
      state2.num2 = 0;
      return (
        <div className="main">
        <div className='main2'>
        <div className="container">
        <h2>Your-choice: {state.num}</h2> <br/>
              <h2>AI-Choice: {state2.num2}</h2>
        <Score Human={state.num} AI={state2.num2}/>
            </div>
            <div className="container-2">
              <Choice2 Human={state.num} />
      <Choice AI={state2.num2}  />
      
              
      </div>
        <div className="btn-container">
      <button className='btn' onClick={() => {
          dispatch({ type: 'Easy' })
          dispatch2({type: 'Easy'})
          setCount(count + 1)
      }}>Easy</button>
      <button className='btn' onClick={() => { dispatch({ type: 'Medium' }); setCount(count + 1); dispatch2({type: 'Medium'})}}>Medium</button>
        <button className='btn' onClick={() => { dispatch({ type: 'Hard' }); setCount(count + 1); dispatch2({ type: 'Hard' }) }}>Hard</button>
      </div>
          <h4>Enter number of choices</h4><select name="" id="play" onChange={handleChange}>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
                <option value="6">5</option>
                <option value="7">6</option>
                <option value="8">7</option>
                <option value="9">8</option>
        </select>
        <h1>Game over</h1>
          </div>
  </div>
  )

  }
  return (
    <div className="main">
    <div className='main2'>
      <div className="container">
          <h2>Your-Choice: {state.num}</h2>

          <br />
          <h2>AI-Choice: {state2.num2}</h2>
          <Score Human={state.num} AI={state2.num2} />
          <Modal closeModal={() => { setGameOver(false); setOpenModal(false) }} openModal={openModal}/>
        {/* Score1: {score}
        Score2: {score2} */}
      </div>
        <div className="container-2">
          <Choice2 Human={state.num} />
      <Choice AI={state2.num2}  />
      
      </div>
      <div className="btn-container">
      <button className='btn' onClick={() => {
        dispatch({ type: 'Easy' })
        setCount(count + 1);
        dispatch2({ type: 'Easy' });
      }}>Easy</button>
      <button className='btn' onClick={() => { dispatch({ type: 'Medium' }); setCount(count + 1); dispatch2({ type: 'Medium' });}}>Medium</button>
      <button className='btn' onClick={() => { dispatch({ type: 'Hard' }); setCount(count + 1); dispatch2({type: 'Hard'})  }}>Hard</button>
      </div>
        <h4>Enter number of choices</h4><select name="" id="play" onChange={handleChange}>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
                <option value="6">5</option>
                <option value="7">6</option>
                <option value="8">7</option>
                <option value="9">8</option>
      </select>
      <Win Human={state.num} AI={state2.num2}/>
      </div>
      </div>
  );
}

export default App;
 
