import httpClient from "../../httpClient/httpClient";
import { apiLinks } from "../MainService";


interface User {
    user: { [key: string]: string | number };
}

 export const register = async ({ user }: User) => {
    try {
      const response = await httpClient.post({
        url: apiLinks.Auth.register,
        data: user,
      });
      return response.data;
    } catch (error: any) {
  
      console.log("error.response.data", error);
      throw error; 
    }
  };