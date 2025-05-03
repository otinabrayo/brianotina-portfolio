import React from "react"

function Footer() {
   return (
      <div className="py-5 text-center bg-stone-900 text-white">
         {/* Social Icons */}
         <p className="text-sm mt-2 opacity-50">
            &copy; {new Date().getFullYear()}  Developed and Designed by Brian Otina. <br /> All rights reserved.
         </p>
      </div>
   )
}

export default Footer;