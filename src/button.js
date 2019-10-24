import React, {useState, useEffect} from 'react';
import axios from "axios";
const Button = () => {
    
    const [first, setfirst] = useState(null);
    const [second, setsecond] = useState(null);
    const [response, setresponse] = useState([]);

    useEffect(() => {
         axios.get("https://jsonplaceholder.typicode.com/posts?_start=0&_end=10")
         .then((res)=>{
             console.log(res.data);
             setresponse(res.data);
         })
         .catch((e)=>{
             console.log(e);
         })
     }, [])

    const displayFirst = () => {
        setsecond(null);
        let slact = response.map((item,i)=>{
            return(
                <div key={i}>
                  {item.title}
                </div>
            )
        })

        setfirst(slact);
    }

    const displaySecond = () => {
        setfirst(null);
        let slact = response.map((item,i)=>{
            return(
                <div key={i}>
                  {item.body}
                </div>
            )
        });
        setsecond(slact)
    }
    return (
        console.log(response),
        <div>
        <div className="buttons">
        <div>
          <button onClick={displayFirst}>First Button</button>
          <br/>
          <br/>
           {first}
         </div>
         <div>
          <button  onClick={displaySecond}>Second Button</button>
          <br/>
          <br/>
          {second}
          </div>
        </div>
        </div>
    );
};

export default Button;