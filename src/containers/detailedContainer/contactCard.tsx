import { FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";

interface ContactCardProps {
  name: string;
  status: string;
  phone: string;
  email: string;
  location: string;
  rating: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, status, phone, email, location, rating }) => {
  return (
    <div className="max-w-xl mx-auto w-[524px] h-[308px] bg-[#F8D0FE] rounded-2xl shadow-lg overflow-hidden border border-black">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <FaStar className="text-gray-700" />
        </div>
        <h2 className="text-lg font-bold text-black">{name}</h2>
        <p className="text-gray-600">{status}</p>

        <div className="mt-4 space-y-6 text-black">
          <div className="flex items-center gap-2">
            <FaPhone className="text-xl" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-xl" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xl" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center bg-[#E446EF26] p-3 border-t border-black">
        <div className="flex items-center gap-2">
          <MdSpeed className="text-2xl text-green-600" />
          <span className="text-lg font-semibold">{rating}</span>
        </div>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
          <FaPhone />
          <span>Call</span>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;

{/* <ContactCard
        name="Nilesh Patel"
        status="Enroll"
        phone="India2521160180"
        email="nileshpatel2@gmail.com"
        location="Nawada"
        rating={12}
      /> */}
