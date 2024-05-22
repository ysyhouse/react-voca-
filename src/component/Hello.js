//import World from './World';
//import styles from './Hello.module.css';

import { useState } from "react";

export default function Hello(props){
    //let name= "Mike";

    const [name, setName]=useState('Mike');
    const [age, setAge]=useState(props.age);
    const msg =age > 19? "성인입니다":"미성년입니다";
  

    function changeName(){

        const newName=name==="Mike" ? "Jane": "Mike";

        console.log(name);
       // document.getElementById("name").innerText= name;
        setName(newName);
        setAge(age+1);

    }
    
    return (
        <div>
        <h1>Hello</h1>
        
           
            

            <h2 id="name">{name}({age})::{msg}</h2>
            <button onClick={changeName}>Change</button>
           

        </div>
     
    );
      
  

}
