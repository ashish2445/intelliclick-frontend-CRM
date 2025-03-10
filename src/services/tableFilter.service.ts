import { API } from '@/utils/enum';
import { callApi } from './http.service';
import { FilterState, QueryState } from '@/interfaces/tableFilterTypes';


class FilterService{
    getFilterResponse = async (payload: QueryState) => {
    //   const url = `api/leader/read/get-leader-data?userId=${userId}`;
      const url = 'api/lead/read/leads-without-actions';
      return await callApi(url,API.POST,payload,true);
    }

    getColumnData = async (columnLabel:string) => {
      const url = '';
      return await callApi(url,API.GET);
    }
}

export const FilterInstance = new FilterService();