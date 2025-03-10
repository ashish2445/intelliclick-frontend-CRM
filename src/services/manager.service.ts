import { API } from '@/utils/enum';
import { callApi } from './http.service';


class ManagerService{
    getManagerLeads = async (userId:string) => {
      const url = `api/leader/read/get-leader-data?userId=${userId}`;
      return await callApi(url,API.GET);
    }
    getTableData = async () => {
      const url = `api/lead/read/leads-without-actions`;
      return await callApi(url,API.POST);
    }

    getStatusInfo = async () => {
      const url = '';
      return await callApi(url,API.GET);
    }

    toggleFavorite = async (leadId:string,currentState:boolean) => {
      const url = '';
      return await callApi(url,API.GET);
    }
}

export const ManagerInstance = new ManagerService();