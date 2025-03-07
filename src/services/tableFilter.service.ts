import { API } from '@/utils/enum';
import { callApi } from './http.service';
import { FilterState, QueryState } from '@/interfaces/tableFilterTypes';


class FilterService{
    getFilterResponse = async (payload: QueryState) => {
    //   const url = `api/leader/read/get-leader-data?userId=${userId}`;
      return await callApi(url,API.GET);
    }

    getColumnData = async (columnLabel:string) => {
      return await callApi(url,API.GET);
    }
}

export const FilterInstance = new FilterService();