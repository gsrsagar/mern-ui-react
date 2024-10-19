import axios from "axios"
import { url } from "./actions"



export const getAPI = () =>{
    return axios.get(url);
}

export const putAPI = (body,id) =>{
    const token = localStorage.getItem("token");
   // localStorage.setItem("token",value)
    let headers ={
        'Authorization':`Bearer ${token}`,
        'Content-Type':'application/json'

    }
    //return axios.put(url,body,{headers:headers});
    return axios.put(`${url}/${id}`,body);
}

export const postAPI = (body) =>{
    return axios.post(`${url}`,body);
}

export const deleteAPI = (id) =>{
    return axios.delete(`${url}/${id}`);
}