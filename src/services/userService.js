import axios from "axios"
import { serverUrl } from "./serverUrl"

console.log(serverUrl) //  http://localhost:8080
const axiosInstance=axios.create(
    {

        baseURL:serverUrl,
        withCredentials:true
    }

)

export const registerUser=async(userData)=>{
    try {
        console.log(userData)
        const response = await axiosInstance.post(`/api/user/register`,userData)
        console.log({response})
        return response.data
        
    } catch (error) {
        console.log(error)
        
    }
}
export const loginUser=async(userData)=>{
    try {
        console.log('insdie login service')
        const response = await axiosInstance.post('/api/user/login',userData)
        console.log(response.data)
        return response.data
    } catch (error) {
        
    }

}

