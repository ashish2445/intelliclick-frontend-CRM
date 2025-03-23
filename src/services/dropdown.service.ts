import { API } from '@/utils/enum';
import { callApi } from './http.service';
import { FilterState, IAssignee, IStatus, QueryState } from '@/interfaces/tableFilterTypes';

const statusInfo = [
    {
        "statusid": 1,
        "label": "Prospects",
        "color": "#828278",
        "_id": "67cc0c8b1b37841a58ecfcdf"
    },
    {
        "statusid": 2,
        "label": "Qualified",
        "color": "#00876c",
        "_id": "67cc0c8b1b37841a58ecfce3"
    },
    {
        "statusid": 5,
        "label": "Interested",
        "color": "#822278",
        "_id": "67cc0dfc1b37841a58ecfcf9"
    },
    {
        "statusid": 3,
        "label": "Enrolled",
        "color": "#10de10",
        "_id": "67cc0c8b1b37841a58ecfce7"
    },
    {
        "statusid": 4,
        "label": "Not Enrolled",
        "color": "#fc1414",
        "_id": "67cc0c8b1b37841a58ecfceb"
    }
];

class DropdownService{
    getAssignee = async (): Promise<IAssignee[]> => {
      const url = 'api/admin/read/get-all-managers';
    //   return assignee1;
      return await callApi(url,API.GET);
    }

    getStatus = async ():Promise<IStatus[]> => {
      const url = 'api/lead_stage/read/stages';
      return await callApi(url,API.GET)
    //   return statusInfo;
    }
}

export const DropdownInstance = new DropdownService();