import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { leadServiceInstance } from "@/services";
import { AxiosError } from "axios";
import { handleError } from "@/utils/helpers";

interface PhoneInputComponentProps {
  onPhoneChange: (value: string) => void;
  setOtpSent: (value: boolean) => void;
  setCountry: (value: string) => void;
  refCode: string;
}

const PhoneInputComponent = ({ onPhoneChange, setOtpSent, setCountry, refCode }: PhoneInputComponentProps) => {
  const [phone, setPhone] = useState("");
  const [resendOtp, setResendOtp] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setResendOtp(false);
      setOtpSent(false);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handlePhoneChange = (value: string, countryData: { name: string }) => {
    setCountry(countryData.name);
    setPhone(value);
    onPhoneChange(value);
  };

  const handleSendOtp = async () => {
    try {
      const payload = { phone: "+" + phone };
      // const otpResponse = await leadServiceInstance.sendOtp(payload);
      const otpResponse = '';
      if (otpResponse.message === "OTP saved successfully!") {
        setResendOtp(true);
      }
      setOtpSent(true);
      setTimer(60);
    } catch (error) {
      handleError(error as AxiosError, true);
    }
  };

  return (
    <div className="relative flex items-center w-full">
      <PhoneInput
        country="in"
        value={phone}
        onChange={handlePhoneChange}
        containerClass="w-full border border-gray-300 rounded-md"
        inputClass="w-[calc(100%-60px)] h-10 px-3 text-black text-lg rounded-r-md border-none focus:ring-0"
        buttonClass="bg-blue-500 rounded-full w-10 h-10 cursor-pointer"
        searchClass="w-full p-2 text-sm border border-gray-300 rounded-md bg-red-500"
        dropdownStyle={{ textAlign: "left", color: "black" }}
      />
      {resendOtp ? (
        <button
          type="button"
          className="absolute right-3 text-white bg-gradient-to-r from-purple-700 to-blue-500 px-3 py-1 rounded-md text-sm"
        >
          Resend in {timer}s
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSendOtp}
          className="absolute right-3 text-white bg-gradient-to-r from-purple-700 to-blue-500 px-3 py-1 rounded-md text-sm hover:from-purple-600 hover:to-blue-400"
        >
          Send OTP
        </button>
      )}
    </div>
  );
};

export default PhoneInputComponent;
