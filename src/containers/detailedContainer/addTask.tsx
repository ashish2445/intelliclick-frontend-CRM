// 'use client';

// import { TableInstance } from '@/services/table.service';
// import { handleError } from '@/utils/helpers';
// import { AxiosError } from 'axios';
// import React, { useState } from 'react';
// import { FiCalendar, FiClock } from 'react-icons/fi';

// interface AddTaskProps {
//   onSubmit?: (taskData: TaskData) => void;
//   onCancel?: () => void;
//   leadName?: string;
// }

// export interface TaskData {
//   Activity: string;
//   dueDate: string;
//   time: string;
//   note: string;
//   remindMe: boolean;
//   reminderTime: string;
//   sendEmailReminder: boolean;
//   assignedUser: string;
// }

// const AddTask: React.FC<AddTaskProps> = ({ onSubmit, onCancel, leadName = "Nilesh Patel" }) => {
//   const [taskData, setTaskData] = useState<TaskData>({
//     Activity: '',
//     dueDate: '',
//     time: '',
//     note: '',
//     remindMe: true,
//     reminderTime: '15 min',
//     sendEmailReminder: false,
//     assignedUser: 'prashant.kumar@intelliclickin',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setTaskData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddTask = async () => {
//    try {
//       const filterResponse = await TableInstance.createTask(query); // Await the response
//     } catch (error) {
//       handleError(error as AxiosError,false);
//     } 
//   }

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = e.target;
//     setTaskData((prev) => ({ ...prev, [name]: checked }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit?.(taskData);
//   };

//   return (
//     <div className="w-full">
//       <div className="bg-white rounded-[22px] shadow-lg border border-black mb-0 overflow-hidden">
//         <div className="text-black bg-[#E446EF80] text-lg font-semibold px-4 py-3 border-b border-black">
//           Add Task
//         </div>
//         <form onSubmit={handleSubmit} className="p-4">
//           {/* Top Row - Activity, Due Date, Time */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             <div>
//               <label className="block text-sm mb-2 text-[#0D2167]">Activity</label>
//               <input
//                 type="text"
//                 name="Activity"
//                 value={taskData.Activity}
//                 onChange={handleInputChange}
//                 placeholder="Lead Follow up By Nilesh patel"
//                 className="w-full border border-gray-300 bg-[#F9F9F9] rounded-md px-3 py-2 focus:outline-none"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm mb-2 text-[#0D2167]">Due Date</label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="dueDate"
//                   value={taskData.dueDate}
//                   onChange={handleInputChange}
//                   placeholder="DD/MM/YYYY"
//                   className="w-full border border-gray-300 bg-[#F9F9F9] rounded-md px-3 py-2 focus:outline-none"
//                 />
//                 <button 
//                   type="button"
//                   className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#0D2167]"
//                   onClick={() => {
//                     const dateInput = document.createElement('input');
//                     dateInput.type = 'date';
//                     dateInput.style.display = 'none';
//                     dateInput.onchange = (e) => {
//                       const target = e.target as HTMLInputElement;
//                       const date = new Date(target.value);
//                       const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
//                       setTaskData(prev => ({...prev, dueDate: formattedDate}));
//                     };
//                     document.body.appendChild(dateInput);
//                     dateInput.click();
//                     document.body.removeChild(dateInput);
//                   }}
//                 >
//                   <FiCalendar />
//                 </button>
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm mb-2 text-[#0D2167]">Time</label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="time"
//                   value={taskData.time}
//                   onChange={handleInputChange}
//                   placeholder="03:00 PM"
//                   className="w-full border border-gray-300 bg-[#F9F9F9] rounded-md px-3 py-2 focus:outline-none"
//                 />
//                 <button 
//                   type="button"
//                   className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#0D2167]"
//                   onClick={() => {
//                     const timeInput = document.createElement('input');
//                     timeInput.type = 'time';
//                     timeInput.style.display = 'none';
//                     timeInput.onchange = (e) => {
//                       const target = e.target as HTMLInputElement;
//                       const timeStr = target.value;
//                       const [hours, minutes] = timeStr.split(':');
//                       const hoursNum = parseInt(hours);
//                       const ampm = hoursNum >= 12 ? 'PM' : 'AM';
//                       const hours12 = hoursNum % 12 || 12;
//                       const formattedTime = `${hours12.toString().padStart(2, '0')}:${minutes} ${ampm}`;
//                       setTaskData(prev => ({...prev, time: formattedTime}));
//                     };
//                     document.body.appendChild(timeInput);
//                     timeInput.click();
//                     document.body.removeChild(timeInput);
//                   }}
//                 >
//                   <FiClock />
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Note and Remind Me Section */}
//           <div className="flex flex-wrap mb-6 gap-6">
//             <div className="flex-grow">
//               <label className="block text-sm mb-2 text-[#0D2167]">Note</label>
//               <textarea
//                 name="note"
//                 value={taskData.note}
//                 onChange={handleInputChange}
//                 rows={3}
//                 className="w-full h-20 border border-gray-300 bg-[#F9F9F9] rounded-md px-3 py-2 focus:outline-none"
//               ></textarea>
//             </div>
            
//             <div className="flex flex-col justify-center w-48">
//               <div className="mb-2">
//                 <span className="text-sm text-[#0D2167]">Remind Me</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="relative inline-block">
//                   <select
//                     name="reminderTime"
//                     value={taskData.reminderTime}
//                     onChange={handleInputChange}
//                     className="appearance-none border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm focus:outline-none bg-[#F9F9F9]"
//                   >
//                     <option value="15 min">15 min</option>
//                     <option value="30 min">30 min</option>
//                     <option value="1 hour">1 hour</option>
//                     <option value="1 day">1 day</option>
//                   </select>
//                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#0D2167]">
//                     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
//                     </svg>
//                   </div>
//                 </div>
//                 <span className="text-sm text-[#0D2167]">Before Task</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Send Email Reminder Checkbox */}
//           <div className="flex flex-wrap items-start mb-6">
//             <div className="w-full">
//               <label className="flex items-center">
//                 <input 
//                   type="checkbox" 
//                   name="sendEmailReminder"
//                   checked={taskData.sendEmailReminder}
//                   onChange={handleCheckboxChange}
//                   className="w-4 h-4 text-[#0D2167] border-gray-300 rounded"
//                 />
//                 <span className="ml-2 text-sm text-[#0D2167]">Send Reminder by Email</span>
//               </label>
//             </div>
//           </div>
          
//           {/* Assign Task and Buttons */}
//           <div className="flex flex-wrap justify-between items-center mt-8">
//             <div className="flex items-center gap-2">
//               <label className="text-sm text-[#0D2167]">Assign Task to User</label>
//               <div className="relative w-64">
//                 <select
//                   name="assignedUser"
//                   value={taskData.assignedUser}
//                   onChange={handleInputChange}
//                   className="appearance-none w-full border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm focus:outline-none bg-[#F9F9F9]"
//                 >
//                   <option value="prashant.kumar@intelliclickin">prashant.kumar@intelliclickin</option>
//                   <option value="nilesh.patel@intelliclickin">nilesh.patel@intelliclickin</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#0D2167]">
//                   <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex gap-4">
//               <button
//                 type="submit"
//                 onClick={handleAddTask}
//                 className="px-6 py-2 bg-[#FBE8FF] text-[#8E198F] rounded-md hover:bg-[#F4D5FF] text-sm font-medium"
//               >
//                 Add
//               </button>
//               <button
//                 type="button"
//                 onClick={onCancel}
//                 className="px-6 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 text-[#0D2167] text-sm font-medium"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddTask;

'use client';

import { IAddTask } from '@/interfaces/addTask.interface';
import { TableInstance } from '@/services/table.service';
import { handleError } from '@/utils/helpers';
import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';

interface AddTaskProps {
  onSubmit?: (taskData: TaskData) => void;
  onCancel?: () => void;
  leadName?: string;
}

export interface TaskData {
  Activity: string;
  dueDate: string;
  time: string;
  note: string;
  remindMe: boolean;
  reminderTime: string;
  sendEmailReminder: boolean;
  assignedUser: string;
}

const AddTask: React.FC<AddTaskProps> = ({ onSubmit, onCancel, leadName = "Nilesh Patel" }) => {

  // const [taskData, setTaskData] = useState<IAddTask>({
  //   type: '',
  //   endTime: '',
  //   description: '',
  //   remindMe: true,
  //   startTime: '15 min',
  //   sendEmailReminder: false,
  //   assignedUser: 'prashant.kumar@intelliclickin',
  // });

  const [taskData, setTaskData] = useState<IAddTask>({
    activity: '', // Default to an empty string, assuming it's an ID
    description: '',
    startTime: '', // Should be an ISO string (e.g., "2025-03-15T11:00:00Z")
    endTime: '',
    reminder: '', // Defaulting to 30 minutes
    emailBy: false, // Defaulting to false
    associated_lead: '', // Default to an empty string, assuming it's an ID
  });



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleAddTask = async () => {
    try {
      const response = await TableInstance.createTask(taskData);
      // onSubmit?.(taskData); // Pass data to parent if needed
    } catch (error) {
      handleError(error as AxiosError, false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTask();
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-[22px] shadow-lg border border-black mb-0 overflow-hidden">
        <div className="text-black bg-[#E446EF80] text-lg font-semibold px-4 py-3 border-b border-black">
          Add Task
        </div>
        <form className="p-4">
          {/* Top Row - Activity, Due Date, Time */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm mb-2 text-[#0D2167]">Activity</label>
              <input
                type="text"
                name="activity"
                value={taskData.activity || ''} // Ensures it is never undefined
                onChange={handleInputChange}
                placeholder="Lead Follow up By Nilesh Patel"
                className="w-full border border-gray-300 bg-[#F9F9F9] rounded-md px-3 py-2 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-[#0D2167]">Due Date</label>
              <input
                type="date"
                name="endTime"
                value={taskData.endTime}
                onChange={handleInputChange}
                className="w-full border border-gray-300 bg-[#F9F9F9] rounded-md px-3 py-2 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-[#0D2167]">Time</label>
              <input
                type="time"
                name="startTime"
                value={taskData.startTime}
                onChange={handleInputChange}
                className="w-full border border-gray-300 bg-[#F9F9F9] rounded-md px-3 py-2 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Note and Reminder Section */}
          <div className="flex flex-wrap mb-6 gap-6">
            <div className="flex-grow">
              <label className="block text-sm mb-2 text-[#0D2167]">Note</label>
              <textarea
                name="description"
                value={taskData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full h-20 border border-gray-300 bg-[#F9F9F9] rounded-md px-3 py-2 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex flex-col justify-center w-48">
              <label className="text-sm text-[#0D2167] mb-2">Remind Me</label>
              <select
                name="reminder"
                value={taskData.reminder}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-1 bg-[#F9F9F9]"
              >
                <option value="15 min">15 min</option>
                <option value="30 min">30 min</option>
                <option value="1 hour">1 hour</option>
                <option value="1 day">1 day</option>
              </select>
              <span className="text-sm text-[#0D2167] mt-2">Before Task</span>
            </div>
          </div>

          {/* Send Email Reminder Checkbox */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="emailBy"
                checked={taskData.emailBy}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-[#0D2167] border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-[#0D2167]">Send Reminder by Email</span>
            </label>
          </div>

          {/* Assign Task */}
          <div className="mb-6">
            <label className="text-sm text-[#0D2167]">Assign Task to User</label>
            <select
              name="associated_lead"
              value={taskData.associated_lead}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-1 bg-[#F9F9F9] w-full mt-2"
            >
              <option value="prashant.kumar@intelliclickin">prashant.kumar@intelliclickin</option>
              <option value="nilesh.patel@intelliclickin">nilesh.patel@intelliclickin</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-2 bg-[#FBE8FF] text-[#8E198F] rounded-md hover:bg-[#F4D5FF] text-sm font-medium"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 text-[#0D2167] text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
