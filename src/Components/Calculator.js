import React , { useState } from 'react'
import './calculator.css';
import Navbar from './Navbar';

export default function Calculator() {
    const [expression, setexpression] = useState('');
    const [history, sethistory] = useState([]);
    
    const onNumClick = (e) => {
        setexpression(expression.concat(e.target.value));
    }
    const onOperatorClick = (e) => {
        if (expression.slice(-1) === "+" || expression.slice(-1) === "*" || expression.slice(-1) === "/" || expression.slice(-1) === "-"){
            setexpression(expression.slice(0,-1).concat(e.target.value));
        }
        else{
            setexpression(expression.concat(e.target.value));
        }
    }
    const onEqualClick = (e) => {
        let evaluate = eval(expression);
        sethistory([...history , expression.concat('=').concat(evaluate)]);
        setexpression(evaluate);
    }
    const onCEClick = (e) => {
        setexpression('');
    }
    const onCClick = (e) => {
        setexpression(expression.slice(0,-1));
    }
    const onDotClick = (e) => {
        if (expression.slice(-1) !== "."){
            setexpression(expression.concat(e.target.value));
        }
    }
    return (
        <div>
            <Navbar history = {history} />
            <div className = "container cal">
            <main>
                <input readOnly value = {expression} className = "cal-input"/>
                <div className = "container">
                    <div className = "row pb-4">
                        <button className = "col-5 text-center px-1 py-3 ce" onClick = {onCEClick}>CE</button>
                        <button className = "col-2 text-center px-1 py-3 offset-1 c" onClick = {onCClick}>C</button>
                        <button className = "col-3 text-center px-1 py-3 offset-1 operator" onClick = {onOperatorClick} value = "+">+</button>
                    </div>
                    <div className = "row pb-4">
                        <button className = "col-2 text-center px-1 py-3 num" onClick = {onNumClick} value = "7">7</button>
                        <button className = "col-2 text-center px-1 py-3 offset-1 num" onClick = {onNumClick} value = "8">8</button>
                        <button className = "col-2 text-center px-1 py-3 offset-1 num" onClick = {onNumClick} value = "9">9</button>
                        <button className = "col-3 text-center px-1 py-3 offset-1 operator" onClick = {onOperatorClick} value = "-">-</button>
                    </div>
                    <div className = "row pb-4">
                        <button className = "col-2 text-center px-1 py-3 num" onClick = {onNumClick} value = "4">4</button>
                        <button className = "col-2 text-center px-1 py-3 offset-1 num" onClick = {onNumClick} value = "5">5</button>
                        <button className = "col-2 text-center px-1 py-3 offset-1 num" onClick = {onNumClick} value = "6">6</button>
                        <button className = "col-3 text-center px-1 py-3 offset-1 operator" onClick = {onOperatorClick} value = "*">&times;</button>
                    </div>
                    <div className = "row pb-4">
                        <button className = "col-2 text-center px-1 py-3 num" onClick = {onNumClick} value = "1">1</button>
                        <button className = "col-2 text-center px-1 py-3 offset-1 num" onClick = {onNumClick} value = "2">2</button>
                        <button className = "col-2 text-center px-1 py-3 offset-1 num" onClick = {onNumClick} value = "3">3</button>
                        <button className = "col-3 text-center px-1 py-3 offset-1 operator" onClick = {onOperatorClick} value = "/">/</button>
                    </div>
                    <div className = "row">
                        <button className = "col-2 text-center px-1 py-3 num" onClick = {onDotClick} value = ".">.</button>
                        <button className = "col-2 text-center px-1 py-3 offset-1 num" onClick = {onNumClick} value = "0">0</button>
                        <button type = "submit" className = "col-6 text-center px-1 py-3 offset-1 equal" onClick = {onEqualClick}>=</button>
                    </div>
                </div> 
            </main>       
        </div>  
        </div>
    )
}