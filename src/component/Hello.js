import World from './World';
import styles from './Hello.module.css';

export default function Hello(){

    function showName(){
        console.log("Mike");
    }

 
    
    return (
        <div>
        <h1>Hello</h1>
        <World />
        
        <div className={styles.box}>world</div>
        <button onClick={showName}>showName</button>
        <button onClick={()=>{
            console.log("10");
        }}>showAge</button>

        <input type="text" onChange={e =>{
            const txt= e.target.value;
            showTxt(txt);
        }}></input>
        </div>
    );
        function showTxt(txt){

            console.log(txt);
        }
  

}
