export const ADD = (item) =>{
    return{
        type: "ADD_CART",
        payload: item 
    }
}


export const DLT = (id) =>{
    return{
        type: 'DELETE_ITEM',
        payload: id
    }
}

// remove using minus button in cart detail page
export const REMOVE = (item) =>{
 return{
    type: 'REMOVE_ONE',
    payload: item
 }
}