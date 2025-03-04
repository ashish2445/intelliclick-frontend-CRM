import React from "react";
import { Card, CardContent, Button } from "@mui/material";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineNoteAdd } from "react-icons/md";
import { BiTask } from "react-icons/bi";

const LeadContentDetails = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Lead Info Card */}
      <Card className="bg-pink-100 p-4 rounded-xl shadow-md">
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Nilesh Patel</h2>
              <p className="text-gray-600">Enroll</p>
              <div className="flex items-center mt-2 space-x-2">
                <FaPhone className="text-gray-600" />
                <span>India2521160180</span>
              </div>
              <div className="flex items-center mt-1 space-x-2">
                <FaEnvelope className="text-gray-600" />
                <span>nileshpatel2@gmail.com</span>
              </div>
              <div className="flex items-center mt-1 space-x-2">
                <FaMapMarkerAlt className="text-gray-600" />
                <span>Nawada</span>
              </div>
            </div>
            <FaStar className="text-gray-500" />
          </div>
        </CardContent>
        <div className="flex justify-between p-4 bg-pink-200 rounded-b-xl">
          <Button variant="ghost">
            <IoIosAddCircleOutline className="mr-1" /> +12
          </Button>
          <Button variant="ghost">
            <FaPhone className="mr-1" /> Call
          </Button>
        </div>
      </Card>

      {/* Lead Details Table */}
      <div className="mt-4 bg-white p-4 rounded-xl shadow-md">
        <table className="w-full text-sm">
          <tbody>
            <tr className="bg-gray-200">
              <td className="p-2 font-semibold">Lead Source:</td>
              <td className="p-2">Webinar</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Lead Age:</td>
              <td className="p-2">35 Days</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="p-2 font-semibold">Lead Owner:</td>
              <td className="p-2">Nilesh Patel</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Board:</td>
              <td className="p-2">CBSE</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around mt-6">
        <Button variant="outline">
          <BiTask className="mr-1" /> Create Task
        </Button>
        <Button variant="outline">
          <MdOutlineNoteAdd className="mr-1" /> Add Note
        </Button>
      </div>
    </div>
  );
};

export default LeadContentDetails;
