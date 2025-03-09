// "use client";
// import React from "react";

// interface FormField {
//   _id: string;
//   name: string;
//   type: string;
//   options: string[];
// }

// interface DynamicFormProps {
//   fields: FormField[];
//   onSubmit: (data: Record<string, string>) => void;
// }

// const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
//   const [formData, setFormData] = React.useState<Record<string, string>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto bg-white shadow-lg rounded-lg space-y-4">
//       {fields.map((field) => (
//         <div key={field._id} className="flex flex-col">
//           <label className="font-semibold text-gray-700 capitalize">{field.name.replace(/([A-Z])/g, ' $1')}</label>
//           {field.type === "DROPDOWN" ? (
//             <select
//               name={field.name}
//               onChange={handleChange}
//               className="border p-2 rounded-md"
//             >
//               <option value="">Select {field.name}</option>
//               {field.options.map((option) => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           ) : (
//             <input
//               type={field.type.toLowerCase()}
//               name={field.name}
//               onChange={handleChange}
//               className="border p-2 rounded-md"
//               placeholder={`Enter ${field.name}`}
//             />
//           )}
//         </div>
//       ))}
//       <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Submit</button>
//     </form>
//   );
// };

// export default DynamicForm;


"use client";
import React from "react";

interface FormField {
  _id: string;
  name: string;
  type: string;
  options: string[];
}

interface DynamicFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = React.useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-full mx-auto bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fields.map((field) => (
          <div key={field._id} className="flex flex-col">
            <label className="font-semibold text-gray-700 capitalize">{field.name.replace(/([A-Z])/g, " $1")}</label>
            {field.type === "DROPDOWN" ? (
              <select
                name={field.name}
                onChange={handleChange}
                className="border p-2 rounded-md"
              >
                <option value="">Select {field.name}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type.toLowerCase()}
                name={field.name}
                onChange={handleChange}
                className="border p-2 rounded-md"
                placeholder={`Enter ${field.name}`}
              />
            )}
          </div>
        ))}
      </div>
      <button type="submit" className="flex justify-center min-w-[120px] mx-auto bg-blue-500 text-white p-2 rounded-md mt-4">
        Submit
      </button>    
    </form>
  );
};

export default DynamicForm;

