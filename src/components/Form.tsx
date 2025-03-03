import React, { useState, useEffect, useCallback } from "react";
import PhoneInputComponent from "@/components/PhoneInput"
import ClipLoader from 'react-spinners/ClipLoader';
import { AxiosError } from "axios";

interface CreateLeadFormProps {
  onSubmit?: () => void; 
  closeModal: () => void;
  refCode?: string;
}

const CreateForm = ({ onSubmit, closeModal, refCode = '' }: CreateLeadFormProps) => {
  const [isOtpSent, setOtpSent] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState("");
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    otp: "",
    selectedClass: "",
    selectedBoard: "",
    interactedWith: ""
  });
  
  const [errors, setErrors] = useState({
    studentName: "",
    phone: "",
    selectedClass: "",
    selectedBoard: "",
    interactedWith: "",
  });

  const [classDetails, setClassDetails] = useState([]);
  const [isClassLoading, setClassLoading] = useState(false);

//   const classList = classDetails?.map(eachClass => eachClass.name);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;    
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }, []);

  const handlePhoneChange = (phone: string) => {
    setFormData(prevData => ({ ...prevData, phone }));
  };

//   const handleVerifyOtp = async () => {
//     try {
//       const payload = { phone: formData.phone, code: verifyOtp };
//     //   const otpVerifyResponse = await leadServiceInstance.verifyOtp(payload);
//       if (otpVerifyResponse.message === "OTP verified successfully!") {
//         setVerifyOtp("");
//         setOtpSent(false);
//       }
//     } catch (error) {
//       handleError(error as AxiosError, true);
//     }
//   };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formIsValid = true;
    let newErrors = { studentName: "", phone: "", selectedClass: "", selectedBoard: "", interactedWith: "" };
    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student Name is required";
      formIsValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      formIsValid = false;
    }
    if (!formData.selectedClass.trim()) {
      newErrors.selectedClass = "Class selection is required";
      formIsValid = false;
    }
    setErrors(newErrors);
    if (!formIsValid) return;

    // const selectedId = classDetails?.find(eachClass => eachClass.name === formData.selectedClass)?._id;
    const payload = {
      studentName: formData.studentName,
      mobile: formData.phone,
    //   standard: selectedId,
      createdBy: "offline",
      board: formData.selectedBoard,
      interactedWith: formData.interactedWith,
      ...(refCode && { refCode })
    };
    try {
    //   await leadServiceInstance.createLead(payload);
      closeModal();
      onSubmit && onSubmit();
    } catch (error) {
    //   handleError(error as AxiosError, true);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {refCode === '' ? "Book a Live Class Today, for " : "Register Form"}
        {refCode === '' && <span className="text-orange-500 font-bold"> FREE</span>}
      </h2>
      {refCode === '' && <p className="text-gray-600 mb-4">Start Learning Today</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentName"
          placeholder="Student Name*"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
          value={formData.studentName}
          onChange={handleInputChange}
        />
        {errors.studentName && <p className="text-red-500 text-sm">*{errors.studentName}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email (Optional)"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
          value={formData.email}
          onChange={handleInputChange}
        />

        <PhoneInputComponent onPhoneChange={handlePhoneChange} setOtpSent={setOtpSent} refCode={refCode} />
        {isOtpSent && (
          <div className="flex items-center gap-2 border border-gray-300 rounded p-2">
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              className="flex-1 p-2 focus:outline-none"
              value={verifyOtp}
              onChange={(e) => setVerifyOtp(e.target.value)}
            />
            <button className="bg-green-500 text-white px-4 py-1 rounded" type="button">
              Verify
            </button>
          </div>
        )}

        <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded hover:from-purple-600 hover:to-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
