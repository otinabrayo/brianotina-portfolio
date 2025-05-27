import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Intro from './components/Intro'
import IntroExpanded from './components/IntroExpanded'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import TechStackPage from './components/TechStackPage'
import Crypto_currency from './components/projects_components/Crypto_currency'
import Data_analysis from './components/projects_components/Data_analysis'
import { ImageViewerProvider } from './components/Image_viewer'

function App() {
   const [theme, setTheme] = useState(null);

   useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
         setTheme('dark')
      } else {
         setTheme('light')
      }
   }, []);

   const handleThemeChange = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
   };

   useEffect(() => {
      if (theme === 'dark') {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }, [theme]);

   const sun = (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={2}
         stroke="orange"
         className="size-4"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386
            6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25
            12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0
            3.75 3.75 0 0 1 7.5 0Z"
         />
      </svg>
   );

   const moon = (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24"
         strokeWidth={2}
         stroke="white"
         className="size-4"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.21 3.21a9 9 0 1 0 8.79 8.79A4.5 4.5 0 0 1 12.21 3.21z"
         />
      </svg>
   );

   return (
      <>
         <button
            type="button"
            onClick={handleThemeChange}
            className="fixed p-3 z-10 right-20 top-4 bg-zinc-900 dark:bg-white rounded-md"
         >
            {theme === 'dark' ? sun : moon}
         </button>
         <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
            <div className="max-w-5xl w-11/12 mx-auto">
               <Router>
                  <ImageViewerProvider>
                     <Routes>
                        <Route
                           path="/"
                           element={
                              <>
                                 <Intro />
                                 <Portfolio />
                                 <TechStackPage />
                                 <Timeline />
                                 <Contact />
                                 <Footer />
                              </>
                           }
                        />
                        <Route path="/journey" element={<IntroExpanded />} />
                        <Route path="/crypto-project" element={<Crypto_currency />} />
                        <Route path="/data-analysis" element={<Data_analysis />} />
                     </Routes>
                  </ImageViewerProvider>
               </Router>
            </div>
         </div>
      </>
   )
}

export default App
