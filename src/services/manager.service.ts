import { API } from '@/utils/enum';
import { callApi } from './http.service';


class ManagerService{
    getManagerLeads = async (userId:string) => {
      const url = `api/leader/read/get-leader-data?userId=${userId}`;
      return await callApi(url,API.GET);
    }
}

export const ManagerInstance = new ManagerService();