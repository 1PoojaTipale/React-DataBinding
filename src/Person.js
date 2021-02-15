import React,{useState} from 'react'; 

function Person  (props) 
{

const [myText,changeMyText] = useState ("wisdom");

  return (
    <div>
    <h1> welcome, {props.myName}</h1>
    <button onClick={props.PersonButton}>Click Here</button>
    </div>
  );
}

export default Person;
