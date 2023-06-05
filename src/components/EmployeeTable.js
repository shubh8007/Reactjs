import {useState} from "react";


const EmployeeTable=(props)=>{
    let [myname,setmyname]=useState("");
    let addnewname=()=>{
        props.insertData(myname)

    }

    let rendorTable=props.empdata.map((name,index)=><tr key={index}><td>{name}</td></tr>)
    
        return(<div>
            <input type='text' id='nm' name='nm'
            value={myname} onchange={(event)=>{setmyname(event.target.value)}}></input>
            <button type="button" id="btn" value="btn" onClick={addnewname}>addnewname</button>
        
        <table border="2">

            <thead><tr>Employee name</tr></thead>
            <tbody>
                {rendorTable}

            </tbody>
        </table>
        </div>
        )

   
    
}
export default EmployeeTable;