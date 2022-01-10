import axios from 'axios';

export const getAllPizzas= ()=> async dispatch =>{

    dispatch({type:'GET_PIZZAS_REQUEST'})

    try {
        const response = await axios.get('https://pizza-app-apis.herokuapp.com/Pizza/getpizza')
        dispatch({type:'GET_PIZZAS_SUCCESS', payload : response.action})
    } catch (error) {
        dispatch({type:'GET_PIZZAS_FAILED', payload : error})
    }
};

export const getPizzaById=(pizzaid)=>async dispatch=>{

    dispatch({type:'GET_PIZZABYID_REQUEST'})

    try {
        const response = await axios.post('https://pizza-app-apis.herokuapp.com/Pizza/getpizzabyid/:pizzaid' , {pizzaid})
        console.log(response);
        dispatch({type:'GET_PIZZABYID_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type:'GET_PIZZABYID_FAILED' , payload : error})
    }

}

export const addPizza=(pizza)=>async dispatch=>{
    dispatch({type:'ADD_PIZZA_REQUEST'})
    try {
        const response= await axios.post('https://pizza-app-apis.herokuapp.com/Pizza/addpizza', pizza)
        console.log(response);
        dispatch({type:'ADD_PIZZA_SUCCESS'})
        window.location.reload()
    } catch (error) {
        dispatch({type:'ADD_PIZZA_FAILED' , payload : error})
    }
}

export const editPizza=(editedpizza)=>async dispatch=>{
    dispatch({type:'EDIT_PIZZA_REQUEST'})
    try {
        const response= await axios.patch(`https://pizza-app-apis.herokuapp.com/Pizza/uptadepizza/${editedpizza._id}` , {editedpizza})
        console.log(response);
        dispatch({type:'EDIT_PIZZA_SUCCESS'})
        window.location.href='/admin/pizzaslist'
    } catch (error) {
        dispatch({type:'EDIT_PIZZA_FAILED' , payload : error})
    }
}

export const deletePizza=(pizzaid)=>async dispatch=>{

try {
    const response =await axios.delete(`https://pizza-app-apis.herokuapp.com/Pizza/deletepizza/${pizzaid}` , {pizzaid})
    alert('Pizza Deleted Successfully')
    console.log(response);
    window.location.reload()
} catch (error) {
    alert('Something went wrong')
    console.log(error);
}

}