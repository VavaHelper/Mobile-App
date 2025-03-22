import axios from "axios";

const API_URL = "http://localhost:8080/auth/login";

export const login = async (username: string , password: string) => 
{
    try
    {
        const response = await axios.post(`${API_URL}/login`, {
            login: username,
            password:password
        });

        if(response.data.token){
            localStorage.setItem("token", response.data.token);
        }

        return response.data;
    }
    catch(error)
    {
        throw new Error("Usuario ou seha invalido")
    }
};

export const logout = () =>
{
   localStorage.removeItem("token") 
}

export const getToken = () =>
{
    return localStorage.getItem("token")
}