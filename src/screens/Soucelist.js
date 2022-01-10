import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';

export default function Soucelist() {
    
    const [souces,setSouceList] = useState([])
    //eslint-disable-next-line
      useEffect(async () => {
        const response = await axios.get('https://pizza-app-apis.herokuapp.com/Souce/getsouce');
        setSouceList(response.data);
    },[])

    const deleteSouce = async(id) =>{
        var response = await axios.delete(`https://pizza-app-apis.herokuapp.com/Souce/deletesouce/${id}`, {souces})
        console.log(response);
        window.location.reload()
    }

    return (
        <div>
         <h3>Soucelist</h3>
        <table  className='table table-bordered border-primary table-responsive-sm'>
    
            <thead className='table-dark'>
                <tr>
                    <th>Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {souces && souces.map(souce=>{
    
                return <tr>
                    <td>{souce.name}</td>
                    <td>
                      {souce.price}
                    </td>
                    <td>{souce.category}</td>
                    <td>
                    <Button variant="contained" color="error" style={{marginRight:"10px"}} onClick={()=>deleteSouce(souce._id)}>Delete</Button>
                    </td>
                </tr>
            })}
            </tbody>
    
        </table>
            </div>
    )
}
