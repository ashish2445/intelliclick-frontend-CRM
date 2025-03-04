import { API } from '@/utils/enum';
import { callApi } from './http.service';


class LoginService{
    getLoginResponse = async (userId:string) => {
      const url = `api/leader/read/get-leader-data?userId=${userId}`;
      return await callApi(url,API.GET);
    }
}

export const LoginInstance = new LoginService();