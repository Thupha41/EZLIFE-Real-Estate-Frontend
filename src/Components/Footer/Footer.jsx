import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BiSolidHomeHeart } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="bg-[#02254B] text-white p-6">
            <div className='flex flex-row mx-7'>
                <div className="flex justify-between flex-col  items-start space-y-10">
                    <div className="flex items-center">
                        <BiSolidHomeHeart size={30} />
                        <span className="ml-2 text-2xl font-bold">Ezlife Realty</span>
                    </div>
                    <div className="flex space-x-4 text-2xl">
                        <div className="rounded-full bg-white p-2">
                            <FaFacebook className='text-[#213123]'/>
                        </div>
                        <div className="rounded-full bg-white p-2">
                            <FaTwitter className='text-[#213123]'/>
                        </div>
                        <div className="rounded-full bg-white p-2">
                            <FaLinkedin className='text-[#213123]'/>
                        </div>
                        <div className="rounded-full bg-white p-2">
                            <FaInstagram className='text-[#213123]'/>
                        </div>
                    </div>
                    <button className="bg-[#E4E5DF] font-medium text-[#213123] py-2 px-4 rounded-full">
                        Contact Us
                    </button>
                </div>
                
                <div className="flex justify-between mt-6 ml-96 text-lg">
                    <div className="flex space-x-56">
                        <div>
                            <h4 className="font-bold mb-4">Navigation</h4>
                            <ul className='space-y-4'>
                                <li>Company</li>
                                <li>Home</li>
                                <li>Contact Us</li>
                                <li>Blog</li>
                                <li>Consultant & Training</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Company</h4>
                            <ul className='space-y-2'>
                                <li>About us</li>
                                <li>Our mission and vision</li>
                                <li>Our team</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Support</h4>
                            <ul className='space-y-2'>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-left mt-6 mx-7">
                <p>Copyright © 2022. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;