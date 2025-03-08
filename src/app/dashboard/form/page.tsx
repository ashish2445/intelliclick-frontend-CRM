"use client";
import DynamicForm from '@/containers/dynamicForm';
import React from 'react';

const fields = [
    {
        "_id": "67c056d750770385063ce1dd",
        "name": "class",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-02-27T12:13:11.865Z",
        "updatedAt": "2025-02-27T12:13:11.865Z",
        "__v": 0
    },
    {
        "_id": "67c8316e805b8529252cdcc6",
        "name": "name",
        "type": "TEXT",
        "options": [
            "academic",
            "upsc"
        ],
        "createdAt": "2025-03-05T11:11:42.096Z",
        "updatedAt": "2025-03-05T11:11:42.096Z",
        "__v": 0
    },
    {
        "_id": "67c831a4805b8529252cdcc9",
        "name": "board",
        "type": "DROPDOWN",
        "options": [
            "academic",
            "upsc"
        ],
        "createdAt": "2025-03-05T11:12:36.537Z",
        "updatedAt": "2025-03-05T11:12:36.537Z",
        "__v": 0
    },
    {
        "_id": "67c831be805b8529252cdccc",
        "name": "status",
        "type": "TEXT",
        "options": [
            "academic",
            "upsc"
        ],
        "createdAt": "2025-03-05T11:13:02.827Z",
        "updatedAt": "2025-03-05T11:13:02.827Z",
        "__v": 0
    },
    {
        "_id": "67c831e4805b8529252cdccf",
        "name": "assigned",
        "type": "TEXT",
        "options": [
            "academic",
            "upsc"
        ],
        "createdAt": "2025-03-05T11:13:40.975Z",
        "updatedAt": "2025-03-05T11:13:40.975Z",
        "__v": 0
    },
    {
        "_id": "67c831fd805b8529252cdcd2",
        "name": "leadScore",
        "type": "TEXT",
        "options": [
            "academic",
            "upsc"
        ],
        "createdAt": "2025-03-05T11:14:05.826Z",
        "updatedAt": "2025-03-05T11:14:05.826Z",
        "__v": 0
    },
    {
        "_id": "67c8320f805b8529252cdcd5",
        "name": "address",
        "type": "TEXT",
        "options": [
            "academic",
            "upsc"
        ],
        "createdAt": "2025-03-05T11:14:23.626Z",
        "updatedAt": "2025-03-05T11:14:23.626Z",
        "__v": 0
    },
    {
        "_id": "67c832663d7b24448b97a961",
        "name": "phoneNumber",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-03-05T11:15:50.090Z",
        "updatedAt": "2025-03-05T11:15:50.090Z",
        "__v": 0
    },
    {
        "_id": "67c832cd3d7b24448b97a974",
        "name": "email",
        "type": "EMAIL",
        "options": [],
        "createdAt": "2025-03-05T11:17:33.232Z",
        "updatedAt": "2025-03-05T11:17:33.232Z",
        "__v": 0
    },
    {
        "_id": "67c837d03d7b24448b97a977",
        "name": "fatherOccupation",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-03-05T11:38:56.584Z",
        "updatedAt": "2025-03-05T11:38:56.584Z",
        "__v": 0
    },
    {
        "_id": "67c837d83d7b24448b97a97a",
        "name": "motherOccupation",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-03-05T11:39:04.596Z",
        "updatedAt": "2025-03-05T11:39:04.596Z",
        "__v": 0
    },
    {
        "_id": "67c838033d7b24448b97a97d",
        "name": "alternativeNumber",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-03-05T11:39:47.959Z",
        "updatedAt": "2025-03-05T11:39:47.959Z",
        "__v": 0
    },
    {
        "_id": "67c838133d7b24448b97a980",
        "name": "parentName",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-03-05T11:40:03.607Z",
        "updatedAt": "2025-03-05T11:40:03.607Z",
        "__v": 0
    },
    {
        "_id": "67c838273d7b24448b97a983",
        "name": "schoolName",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-03-05T11:40:23.043Z",
        "updatedAt": "2025-03-05T11:40:23.043Z",
        "__v": 0
    },
    {
        "_id": "67c838373d7b24448b97a986",
        "name": "leadScore",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-03-05T11:40:39.735Z",
        "updatedAt": "2025-03-05T11:40:39.735Z",
        "__v": 0
    },
    {
        "_id": "67c838423d7b24448b97a989",
        "name": "city",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-03-05T11:40:50.716Z",
        "updatedAt": "2025-03-05T11:40:50.716Z",
        "__v": 0
    },
    {
        "_id": "67c8384f3d7b24448b97a98c",
        "name": "state",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-03-05T11:41:03.387Z",
        "updatedAt": "2025-03-05T11:41:03.387Z",
        "__v": 0
    },
    {
        "_id": "67c838583d7b24448b97a98f",
        "name": "percentage",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-03-05T11:41:12.954Z",
        "updatedAt": "2025-03-05T11:41:12.954Z",
        "__v": 0
    },
    {
        "_id": "67c838673d7b24448b97a992",
        "name": "interactWith",
        "type": "TEXT",
        "options": [],
        "createdAt": "2025-03-05T11:41:27.449Z",
        "updatedAt": "2025-03-05T11:41:27.449Z",
        "__v": 0
    }
]

const handleFormSubmit = (data: Record<string, string>) => {
  console.log("Form Data:", data);
};

const FormPage = () => {
  return (
    <div >      
      <DynamicForm fields={fields} onSubmit={handleFormSubmit} />
    </div>
  )
}

export default FormPage;