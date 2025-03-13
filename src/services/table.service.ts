import { API } from '@/utils/enum';
import { callApi } from './http.service';

const responseObject = {
    "total": 19,
    "leads": [
        {
            "_id": "67ce6b3f4353d8124a10bef1",
            "name": {
                "name": "reetesh leadC",
                "favorite": false
            },
            "phone": "9700001868",
            "assignedAdmin": null,
            "region": "67cb186197eb04cf8489c916",
            "status": 1,
            "leadscore": 0,
            "createdBy": "67cb19dd97eb04cf8489c931",
            "createdAt": "2025-03-10T04:31:59.037Z",
            "updatedAt": "2025-03-10T07:29:26.127Z",
            "__v": 0,
            "assignedOwner": {
                "_id": "67cb19dd97eb04cf8489c931",
                "assignedOwner": "caller@gmail.com",
                "email": "caller@gmail.com"
            },
            "class": "9th Grade",
            "board": "CBSE",
            "address": "123 Main Street",
            "phoneNumber": "9876543210",
            "email": "johndoe@example.com",
            "fatherOccupation": "Engineer",
            "motherOccupation": "Doctor",
            "alternativeNumber": "7890123456",
            "parentName": "Mr. and Mrs. Doe",
            "schoolName": "ABC High School",
            "city": "New York",
            "state": "NY",
            "percentage": "92%",
            "interactWith": "Counselor"
        },
        {
            "_id": "67ce69fd7f30e90eb3c6bcb2",
            "name": {
                "name": "reetesh leadB",
                "favorite": true
            },
            "phone": "9700001867",
            "assignedAdmin": "67cb17f097eb04cf8489c914",
            "region": "67cb186197eb04cf8489c916",
            "status": 1,
            "createdBy": "67cb19dd97eb04cf8489c931",
            "createdAt": "2025-03-10T04:26:37.287Z",
            "updatedAt": "2025-03-10T04:26:37.287Z",
            "__v": 0,
            "assignedOwner": null,
            "class": "9th Grade",
            "board": "CBSE",
            "address": "123 Main Street",
            "phoneNumber": "9876543210",
            "email": "johndoe@example.com",
            "fatherOccupation": "Engineer",
            "motherOccupation": "Doctor",
            "alternativeNumber": "7890123456",
            "parentName": "Mr. and Mrs. Doe",
            "schoolName": "ABC High School",
            "city": "New York",
            "state": "NY",
            "percentage": "92%",
            "interactWith": "Counselor"
        },
        {
            "_id": "67ce69567a67c6e824266109",
            "name": {
                "name": "reetesh lead",
                "favorite": true
            },
            "phone": "9500001867",
            "assignedAdmin": "67cb17f097eb04cf8489c914",
            "region": "67cb186197eb04cf8489c916",
            "status": 1,
            "createdBy": "67cb19dd97eb04cf8489c931",
            "createdAt": "2025-03-10T04:23:50.190Z",
            "updatedAt": "2025-03-10T04:23:50.190Z",
            "__v": 0,
            "assignedOwner": null,
            "class": "9th Grade",
            "board": "CBSE",
            "address": "123 Main Street",
            "phoneNumber": "9876543210",
            "email": "johndoe@example.com",
            "fatherOccupation": "Engineer",
            "motherOccupation": "Doctor",
            "alternativeNumber": "7890123456",
            "parentName": "Mr. and Mrs. Doe",
            "schoolName": "ABC High School",
            "city": "New York",
            "state": "NY",
            "percentage": "92%",
            "interactWith": "Counselor"
        },
        {
            "_id": "67cc01a3ec834502a69566f1",
            "name": {
                "name": "reeteshB",
                "favorite": true
            },
            "phone": "5500001867",
            "region": "67c7df011e3e66164e985253",
            "status": 1,
            "createdAt": "2025-03-08T08:36:51.962Z",
            "updatedAt": "2025-03-08T08:38:23.389Z",
            "__v": 0,
            "assignedOwner": {
                "_id": "67cb19dd97eb04cf8489c931",
                "assignedOwner": "caller@gmail.com",
                "email": "caller@gmail.com"
            },
            "class": "10th Grade",
            "board": "CBSE",
            "leadScore": 85,
            "address": "123 Main Street",
            "phoneNumber": "9876543210",
            "email": "johndoe@example.com",
            "fatherOccupation": "Engineer",
            "motherOccupation": "Doctor",
            "alternativeNumber": "7890123456",
            "parentName": "Mr. and Mrs. Doe",
            "schoolName": "ABC High School",
            "city": "New York",
            "state": "NY",
            "percentage": "92%",
            "interactWith": "Counselor"
        },
        {
            "_id": "67cc0193ec834502a69566e8",
            "name": {
                "name": "reetesh",
                "favorite": true
            },
            "phone": "5300001867",
            "region": "67c7df011e3e66164e985253",
            "status": 1,
            "createdAt": "2025-03-08T08:36:35.047Z",
            "updatedAt": "2025-03-08T08:38:23.389Z",
            "__v": 0,
            "assignedOwner": {
                "_id": "67cb19dd97eb04cf8489c931",
                "assignedOwner": "caller@gmail.com",
                "email": "caller@gmail.com"
            },
            "class": "10th Grade",
            "board": "CBSE",
            "leadScore": 85,
            "address": "123 Main Street",
            "phoneNumber": "9876543210",
            "email": "johndoe@example.com",
            "fatherOccupation": "Engineer",
            "motherOccupation": "Doctor",
            "alternativeNumber": "7890123456",
            "parentName": "Mr. and Mrs. Doe",
            "schoolName": "ABC High School",
            "city": "New York",
            "state": "NY",
            "percentage": "92%",
            "interactWith": "Counselor"
        },
        {
            "_id": "67c844c9ce78280e8565ea6b",
            "name": {
                "name": "John M",
                "favorite": true
            },
            "phone": "3300001867",
            "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
            "region": "67c7df011e3e66164e985253",
            "createdAt": "2025-03-05T12:34:17.889Z",
            "updatedAt": "2025-03-07T16:08:20.109Z",
            "__v": 0,
            "assignedOwner": {
                "_id": "67cb19dd97eb04cf8489c931",
                "assignedOwner": "caller@gmail.com",
                "email": "caller@gmail.com"
            },
            "class": "10th Grade",
            "board": "CBSE",
            "leadScore": 85,
            "address": "123 Main Street",
            "phoneNumber": "9876543210",
            "email": "johndoe@example.com",
            "fatherOccupation": "Engineer",
            "motherOccupation": "Doctor",
            "alternativeNumber": "7890123456",
            "parentName": "Mr. and Mrs. Doe",
            "schoolName": "ABC High School",
            "city": "New York",
            "state": "NY",
            "percentage": "92%",
            "interactWith": "Counselor"
        },
        {
            "_id": "67c844bace78280e8565ea62",
            "name": {
                "name": "John l",
                "favorite": true
            },
            "phone": "9900001867",
            "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
            "region": "67c7df011e3e66164e985253",
            "createdAt": "2025-03-05T12:34:02.417Z",
            "updatedAt": "2025-03-07T16:08:20.109Z",
            "__v": 0,
            "assignedOwner": {
                "_id": "67cb19dd97eb04cf8489c931",
                "assignedOwner": "caller@gmail.com",
                "email": "caller@gmail.com"
            },
            "class": "10th Grade",
            "board": "CBSE",
            "leadScore": 85,
            "address": "123 Main Street",
            "phoneNumber": "9876543210",
            "email": "johndoe@example.com",
            "fatherOccupation": "Engineer",
            "motherOccupation": "Doctor",
            "alternativeNumber": "7890123456",
            "parentName": "Mr. and Mrs. Doe",
            "schoolName": "ABC High School",
            "city": "New York",
            "state": "NY",
            "percentage": "92%",
            "interactWith": "Counselor"
        },
        {
            "_id": "67c844b0ce78280e8565ea59",
            "name": {
                "name": "John K",
                "favorite": true
            },
            "phone": "8900001867",
            "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
            "region": "67c7df011e3e66164e985253",
            "createdAt": "2025-03-05T12:33:52.549Z",
            "updatedAt": "2025-03-07T16:08:20.109Z",
            "__v": 0,
            "assignedOwner": {
                "_id": "67cb19dd97eb04cf8489c931",
                "assignedOwner": "caller@gmail.com",
                "email": "caller@gmail.com"
            },
            "class": "10th Grade",
            "board": "CBSE",
            "leadScore": 85,
            "address": "123 Main Street",
            "phoneNumber": "9876543210",
            "email": "johndoe@example.com",
            "fatherOccupation": "Engineer",
            "motherOccupation": "Doctor",
            "alternativeNumber": "7890123456",
            "parentName": "Mr. and Mrs. Doe",
            "schoolName": "ABC High School",
            "city": "New York",
            "state": "NY",
            "percentage": "92%",
            "interactWith": "Counselor"
        },
        {
            "_id": "67c844a1ce78280e8565ea50",
            "name": {
                "name": "John j",
                "favorite": true
            },
            "phone": "8900007867",
            "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
            "region": "67c7df011e3e66164e985253",
            "createdAt": "2025-03-05T12:33:37.798Z",
            "updatedAt": "2025-03-07T16:08:20.109Z",
            "__v": 0,
            "assignedOwner": {
                "_id": "67cb19dd97eb04cf8489c931",
                "assignedOwner": "caller@gmail.com",
                "email": "caller@gmail.com"
            },
            "class": "10th Grade",
            "board": "CBSE",
            "leadScore": 85,
            "address": "123 Main Street",
            "phoneNumber": "9876543210",
            "email": "johndoe@example.com",
            "fatherOccupation": "Engineer",
            "motherOccupation": "Doctor",
            "alternativeNumber": "7890123456",
            "parentName": "Mr. and Mrs. Doe",
            "schoolName": "ABC High School",
            "city": "New York",
            "state": "NY",
            "percentage": "92%",
            "interactWith": "Counselor"
        },
        {
            "_id": "67c84493ce78280e8565ea47",
            "name": {
                "name": "John i",
                "favorite": true
            },
            "phone": "8900007887",
            "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
            "region": "67c7df011e3e66164e985253",
            "createdAt": "2025-03-05T12:33:23.334Z",
            "updatedAt": "2025-03-07T16:08:20.109Z",
            "__v": 0,
            "assignedOwner": {
                "_id": "67cb19dd97eb04cf8489c931",
                "assignedOwner": "caller@gmail.com",
                "email": "caller@gmail.com"
            },
            "class": "10th Grade",
            "board": "CBSE",
            "leadScore": 85,
            "address": "123 Main Street",
            "phoneNumber": "9876543210",
            "email": "johndoe@example.com",
            "fatherOccupation": "Engineer",
            "motherOccupation": "Doctor",
            "alternativeNumber": "7890123456",
            "parentName": "Mr. and Mrs. Doe",
            "schoolName": "ABC High School",
            "city": "New York",
            "state": "NY",
            "percentage": "92%",
            "interactWith": "Counselor"
        }
    ]
}


class TableService{
 
    getTableData = async () => {
      const url = `api/lead/read/leads-without-actions`;
      return responseObject;
      // return await callApi(url,API.POST);
    }

    toggleFavorite = async (leadId:string,currentState:boolean) => {
      const url = `api/lead/write/favorite/${leadId}`;
      return await callApi(url,API.PATCH,{favorite:currentState},true);
    }
}

export const TableInstance = new TableService();