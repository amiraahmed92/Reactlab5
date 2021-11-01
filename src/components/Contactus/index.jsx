import { useHistory } from 'react-router-dom';
import { useState } from "react";
export const Contactus = () => {
    const history = useHistory();   

    const handleClick = () => {
    
    
    history.push('/Posts')};
    const [value1, setValue1] =useState()
    const [value2, setValue2] =useState()
    const handleChange1 = (event)=>{
        setValue1(event.target.value);
    };
    const handleChange2 = (event)=>{
        setValue2(event.target.value);
    };
    console.log(value1)
    console.log(value2)
return (
<>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">contactus</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>your Email</td>
                <td><input value={value1}
        onChange={handleChange1}></input></td>  
            </tr>
            <tr>
                <td>your message</td>
                <td> <input value={value2}
        onChange={handleChange2}></input></td>
            </tr>
        </tbody>
    </table>
    <button className= "btn btn-primary"onClick={handleClick}  >send</button>
</>
    );
};

