import { API } from '@/utils/enum';
import { callApi } from './http.service';
import { FilterState, IAssignee, QueryState } from '@/interfaces/tableFilterTypes';


class DropdownService{
    getAssignee = async (): Promise<IAssignee[]> => {
      return await callApi(url,API.GET);
    }
}

export const DropdownInstance = new DropdownService();