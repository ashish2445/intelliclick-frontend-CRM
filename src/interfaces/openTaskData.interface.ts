export interface IOpenTaskData {
    StudentName: string;
    Class: string;
    PhoneNumber: string;
    Status: string;
    CreatedBy: string;
    CreatedAt: string;
  }

// export interface ITableFields {
//   name:Object,
//   class: string;
//   board: string;
//   status: string;
//   leadScore: number;
//   address: string;
//   phoneNumber: string;
//   email: string;
//   fatherOccupation: string;
//   motherOccupation: string;
//   alternativeNumber: string;
//   parentName: string;
//   schoolName: string;
//   city: string;
//   state: string;
//   percentage: string;
//   interactWith: string;
// }

export interface ITableFields {
  [key: string]: any; // Allows any string as a key
}


  