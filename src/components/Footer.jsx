import React from "react"

function Footer() {
   return (
      <div className="py-1 text-center dark:bg-stone-900 bg-stone-200 dark:text-white text-black">
         {/* Social Icons */}
         <p className="text-sm mt-2 opacity-50">
            &copy; {new Date().getFullYear()}  Developed and Designed by Brian Otina. <br /> All rights reserved.
         </p>
      </div>
   )
}

export default Footer;