
import React, { useState } from 'react'
import qBank from './QuestionBank';
import QuizResult from './QuizResult';
import './App.css';


function App()
{
    const [currentquestion, setCurrentquestion]=useState(0)
    const [score, setScore]=useState(0);
    const [clickecdoption, setClickedoption]=useState(null);
    const [showResult, setShowresult]=useState(false);
    const changequestion=()=>
    {
        update();
         if(currentquestion<qBank.length-1)
            {
                setCurrentquestion(currentquestion+1)
                setClickedoption(null);
            }
            else
            {
                setShowresult(true)  
            }
    }
    const update=()=>
        {
            if(clickecdoption === qBank[currentquestion].answer)
                {
                    setScore((prevScore)=> prevScore+1);
                }
        }
        const resetAll=()=>
            {
                setShowresult(false);
                setCurrentquestion(0);
                setClickedoption(null);
                setScore(0);
            }
    return(
        <div>
            <p className='heading-txt'>quiz app</p>
            <div className='container'>
            {showResult ? (
                 <QuizResult score={score} totalScore={qBank.length} tryAgain={resetAll} />
            ):(
            <>  
            <div className="question">   
             <span id='question-number'>{currentquestion + 1}</span>  
             <span id='question=txt'>{qBank[currentquestion].question}</span> 
             </div>
            <div className='option-container'>
                {qBank[currentquestion].options.map((options,i)=>{
                    return(
                        <button className={`option-btn ${
                            clickecdoption === i?"checked":null
                        }`} key={i} onClick={()=>setClickedoption(i)}>
                        {options}
                        </button>
                    )
                })}
            </div>
            <input type='button' value='next' id="next-button" onClick={changequestion}/>
            </>)}
            </div>
             
           
        </div>
    )
}
export default App;