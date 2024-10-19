import { getAPI, postAPI } from "./apicalls";

export const url ="https://dummyjson.com/comments";



export const getALLUsers = ()=> async(dispatch) =>{
    const response = await getAPI();
    dispatch({ type:'GET_SUCCESS',payload:response.data.comments})
}

export const postNewRequest = (body)=> async(dispatch) =>{
    const response = await postAPI(body);
    dispatch({ type:'POST_SUCCESS',payload:response.data.comments})
}


// export const getALLUsers = ()=> async() =>{

// }

// export const getALLUsers = ()=> async() =>{

// }