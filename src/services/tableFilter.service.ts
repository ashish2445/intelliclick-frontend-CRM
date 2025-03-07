import { API } from '@/utils/enum';
import { callApi } from './http.service';
import { FilterState } from '@/interfaces/tableFilterTypes';


class FilterService{
    getFilterResponse = async (filterState: FilterState) => {
    //   const url = `api/leader/read/get-leader-data?userId=${userId}`;
      return await callApi(url,API.GET);
    }
}

export const FilterInstance = new FilterService();