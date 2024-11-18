import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

const Schedule = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        enquiry: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="bg-secondary p-6 rounded-lg shadow-md ">
            <div className="flex space-x-8 mx-7">
                <form onSubmit={handleSubmit} className="space-y-4 w-2/4 bg-white p-10 rounded-lg">
                    <div className="flex space-x-4 ">
                        <label className="block flex-1">
                            Full name<span className="text-red-500">*</span>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </label>
                        <label className="block flex-1">
                            Phone number<span className="text-red-500">*</span>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </label>
                    </div>
                    <label className="block">
                        Email<span className="text-red-500">*</span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                    </label>
                    <label className="block">
                        What is your enquiry about?<span className="text-red-500">*</span>
                        <select
                            name="enquiry"
                            value={formData.enquiry}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Select one</option>
                           
                        </select>
                    </label>
                    <label className="block">
                        Additional information<span className="text-red-500">*</span>
                        <textarea
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            placeholder="Your message"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded h-32"
                        />
                    </label>
                    <button type="submit" className="bg-tertiary text-white py-2 px-4 rounded-full ">
                        Send Message
                    </button>
                </form>
                <div>
                    <h1 className="text-xl font-semibold mb-4 self-center">Get in touch to schedule a visit to your new house</h1>
                    <p className="text-gray-500 mb-5">Kindly fill this form with your details about your inquiries and we would respond your inquiry shortly.</p>
                    <p className="border-b-2 border-gray-300"></p>
                    <div className="flex items-start mt-5">
                        <IoIosSend className="text-tertiary text-xl mr-2"/>
                        <div>
                            <p className="text-black text-lg font-semibold">Send us a message</p>
                            <p className="text-tertiary font-medium text-lg">21522445@gm.uit.edu.vn</p>
                        </div>
                    </div>
                    <div className="flex items-start mt-5">
                        <FaPhone className="text-tertiary text-xl mr-2"/>
                        <div>
                            <p className="text-black text-lg font-semibold">Give us a call</p>
                            <p className="text-tertiary font-medium text-lg">0399245580</p>
                        </div>
                    </div>
                    <div className="flex items-start mt-5">
                        <RiMapPin2Fill className="text-tertiary text-xl mr-2"/>
                        <div>
                            <p className="text-black text-lg font-semibold">Office Address</p>
                            <p className="text-tertiary font-medium text-lg">1234 Main Street, Anytown, USA</p>
                        </div>
                    </div>
                    <div className="flex items-start mt-5">
                        <FaPhone className="text-tertiary text-xl mr-2"/>
                        <div>
                            <p className="text-black text-lg font-semibold">Working Hours</p>
                            <p className="text-[#27563A] font-medium text-lg">Mon - Sat: 10am - 4pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;