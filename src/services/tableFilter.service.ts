import { API } from '@/utils/enum';
import { callApi } from './http.service';
import { QueryState } from '@/interfaces/tableFilterTypes';
import { Pagination } from '@mui/material';


class FilterService{
    getFilterResponse = async (payload: QueryState) => {
      // const payload2 = {
      //   ...payload,
      //   "page" : payload.pagination.page,
      //   "limit" : payload.pagination.limit
        
      // }
      const { pagination, ...restPayload } = payload;
      const payload2 = {
        ...restPayload,
        page: pagination.page,
        limit: pagination.limit
      };
      console.log('payyyyy',payload2);
      const payload3 = {
        "logic": "AND",
        "page": 1,
        "limit": 10
      }
    
      const url = 'api/lead/read/leads-without-actions';
      return await callApi(url,API.POST,payload2);
    }

    getColumnData = async (columnLabel:string) => {
      const url = 'api/lead_field/read/get-all-fields';
      return await callApi(url,API.GET);
    }
}

export const FilterInstance = new FilterService();