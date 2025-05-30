import React from "react";
import { SiGmail } from "react-icons/si";
import {
   FaPhoneAlt,
   FaMapMarkerAlt,
   FaLinkedin,
   FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Title from "./Title";

function Contact() {
   return (
      <section className="max-w-xl mx-auto px-7 pb-2 dark:text-white text-stone-900">
         {/* Direct Communication */}
         <Title id="contact">Get In Contact</Title>

         {/* <div className="flex flex-col mb-10 mx-auto"> */}
         <div className=" justify-center items-center ">
            <form
               action="https://getform.io/f/bolmpdea"
               method='POST'
               className=" flex flex-col "
            >
               <input
                  required
                  type="text"
                  name='email'
                  placeholder="Email"
                  className="dark:border-white border border-stone-900 my-2 p-2 bg-transparent rounded-md focus:outline-none"
               />
               <textarea
                  required
                  name="message"
                  placeholder="Message"
                  rows='4'
                  className="dark:border-white border border-stone-900 p-2 mb-2 bg-transparent rounded-md focus:outline-none"
               />
               <button
                  type="submit"
                  className="mb-5 transform transition-transform duration-400 hover:scale-[1.03]
                     cursor-pointer text-center inline-block px-8 py-3 w-max text-base
                     font-medium rounded-3xl text-white bg-gradient-to-r from-yellow-500 to-pink-500
                     drop-shadow-md "
               >
                  Work With Me
               </button>
            </form>
         </div>

         <div className="dark:border-white border border-stone-900 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Direct Message</h2>
            <div className="flex flex-col gap-4">

               {/* Email */}
               <a href="mailto:brianotina20@gmail.com">
                  <div className="hover:text-blue-300 transition-transform hover:bg-stone-500 hover:scale-[1.02] flex items-center justify-between bg-stone-600 rounded-lg p-2">
                     <div className="flex items-center gap-2">
                        <SiGmail size={20} color="BF3131" className="bg-white rounded p-1" />
                        <span className='hover:underline text-blue-500'>Email</span>
                     </div>
                     <span>brianotina20@gmail.com</span>
                  </div>
               </a>

               {/* Phone */}
               <a href="tel:+254799978833">
                  <div className="hover:text-blue-300 transition-transform hover:bg-stone-500 hover:scale-[1.02] flex items-center justify-between bg-stone-600 rounded-lg p-2 ">
                     <div className="text-blue-500 flex items-center gap-2">
                        <FaPhoneAlt size={20} color="483AA0" className="bg-white rounded p-1" />
                        <span>Phone</span>
                     </div>
                     <span>+254799978833</span>
                  </div>
               </a>

               {/* Location */}
               <div className="flex items-center justify-between bg-stone-600 rounded-lg p-2">
                  <div className="flex items-center gap-2">
                     <FaMapMarkerAlt size={20} color="#fff" />
                     <span>Location</span>
                  </div>
                  <span>Nairobi, KENYA</span>
               </div>
            </div>
         </div>

         {/* Networks */}
         <div className="dark:border-white border border-stone-900 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Networks</h2>
            <div className="flex flex-col gap-4">

               {/* LinkedIn */}
               <a href="https://www.linkedin.com/in/brian-makau-3a93b6354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-blue-500 hover:text-blue-300" >
                  <div className="transition-transform hover:bg-stone-500 hover:scale-[1.02] flex items-center justify-between bg-stone-600 rounded-lg p-2">
                     <div className="flex items-center gap-2">
                        <FaLinkedin size={20} color="#fff" className="bg-blue-800 p-1" />
                        <span className='hover:underline'>LinkedIn</span>
                     </div>
                     <p className="text-sm text-gray-300">
                        Professional network
                        <br />
                        500+ connections
                     </p>
                  </div>
               </a>

               {/* GitHub */}
               <a href="https://github.com/otinabrayo" target="_blank" className="text-blue-500 hover:text-blue-300">
                  <div className="transition-transform hover:bg-stone-500 hover:scale-[1.02] flex items-center justify-between bg-stone-600 rounded-lg p-2">
                     <div className="flex items-center gap-2">
                        <FaGithub size={20} color="#fff" />
                        <span className='hover:underline'>GitHub</span>
                     </div>
                     <p className="text-sm text-gray-300">
                        Code repositories
                        <br />
                        530+ contributions
                     </p>
                  </div>
               </a>

               {/* Twitter */}
               <a href="https://x.com/JustOtina" target="_blank" className="text-blue-500 hover:text-blue-300">
                  <div className="transition-transform hover:bg-stone-500 hover:scale-[1.02] flex items-center justify-between bg-stone-600 rounded-lg p-2">
                     <div className="flex items-center gap-2">
                        <FaXTwitter size={20} color="#fff" className="bg-black p-1 rounded" />
                        <span className='hover:underline'>formerly Twitter</span>
                     </div>
                     <p className="text-sm text-gray-300">
                        Tech Insights
                        <br />
                        800+ followers
                     </p>
                  </div>
               </a>

            </div>
         </div>

         {/* Status */}
         <div className="dark:border-white border border-stone-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Status</h2>
            <div className="flex flex-col gap-4">
               {/* Current Role */}
               <div>
                  <p className="text-sm">Current Role</p>
                  <h3 className="text-lg font-semibold">Data Engineer</h3>
                  <p className="text-sm">Personalised Projects</p>
               </div>

               {/* Availability */}
               <div>
                  <p className="text-sm">Availability</p>
                  <span className="text-green-500 font-semibold">Open to opportunities</span>
               </div>

               {/* Response Time */}
               <div>
                  <p className="text-sm">Response Time - within 24hrs</p>
               </div>

               {/* Time Zone */}
               <div>
                  <p className="text-sm">Time Zone</p>
                  <span className="text-sm">East Africa Time (EAT)</span>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contact;