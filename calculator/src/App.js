import './App.css';
import { useState } from "react";

function Key({label, onClick}) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}

function Display({display }) {
    return (
        <>{display}</>
    );
}

function App() {

  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const clickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
  }  


  const numclickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
if (op===null) {
  if (num1===null) {
    setNum1(value);
    setDisp(value);
  } else {
    setNum1(num1+value);
    setDisp(num1+value);
  }
  } else {
    if (num2===null){
      setNum2(value);
      setDisp(value);
    }else {
      setNum2(num2+value);
      setDisp(num2+value);
    }
  }
console.log(num1 + '|' + op + num2);
}
const opclickHandler = (e) => {
  e.preventDefault();
  const value = e.target.innerHTML;
  setOp(value);
  setDisp(value);
  console.log(num1 + '|' + op + '|' + num2);
}

const eqclickHandler = (e) => {
  e.preventDefault();
  const value = e.target.innerHTML;
  console.log(num1 + '|' + op + '|' + num2);
  if (op==='+') {
    setDisp(parseInt(num1) + parseFloat(num2));
    
  }else if (op==='-'){
    setDisp(parseInt(num1) - parseInt(num2));
  }else if (op==='x'){
    setDisp(parseInt(num1) * parseInt(num2));
  }else if (op==='÷'){
    setDisp(parseInt(num1) / parseInt(num2));
  }else{
    setDisp("ERROR");
  }
}
 const clrclickHandler = (e) => {
  setNum1(null);
  setNum2(null);
  setOp(null);
  setDisp(0);
}  
  
    return (
        <div className="App">
            <div className="Calc">
                <div className="Disp">
                    <Display display={disp} />

                </div>
                <div className="Buttons">
                    <Key label={7} onClick={numclickHandler}/>
                    <Key label={8} onClick={numclickHandler}/>
                    <Key label={9} onClick={numclickHandler}/>
                    <Key label={"÷"} onClick={opclickHandler}/>
                    <Key label={4} onClick={numclickHandler}/>
                    <Key label={5} onClick={numclickHandler}/>
                    <Key label={6} onClick={numclickHandler}/>
                    <Key label={"x"} onClick={opclickHandler}/>
                    <Key label={1} onClick={numclickHandler}/>
                    <Key label={2} onClick={numclickHandler}/>
                    <Key label={3} onClick={numclickHandler}/>
                    <Key label={"-"} onClick={clickHandler}/>
                    <Key label={"C"} onClick={clrclickHandler}/>
                    <Key label={0} onClick={numclickHandler}/>
                    <Key label={"="} onClick={eqclickHandler}/>
                    <Key label={"+"} onClick={opclickHandler}/>
                </div>
            </div>
        </div>
    )
}
 


 export default App;