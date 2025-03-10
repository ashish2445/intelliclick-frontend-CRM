import { API } from '@/utils/enum';
import { callApi } from './http.service';


class FormService{

  getRegions = async () => {
    const url='';
    return await callApi(url,API.GET);
  }

  submitForm = async (payload:any) => {
    const url = `api/leader/read/get-leader-data`;
    return await callApi(url,API.POST,payload,true);
  }
}

export const FormInstance = new FormService();