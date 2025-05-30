import React from "react";
import { FaFilePdf, FaDownload, FaRegIdCard, FaFileAlt } from "react-icons/fa";
import Title from "./Title";

function CertificatesAndCV() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-3 transition-colors duration-300">
            {/* CV Section */}
            <Title id="contact">Resume & Certifications</Title>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md dark:shadow-none">

                {/* RESUME */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                    <FaFileAlt /> Cover Letter
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                    You can download my Cover Letter.
                    </p>

                    <a
                    // href="/resume-brian-otina.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                    >
                    <FaDownload />
                    Download (Cover letter)
                    </a>
                </div>

                {/* COVER LETTER */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                    <FaFilePdf /> Resume
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                    You can download my latest CV below. It contains detailed information about my work experience, education, skills, and projects.
                    </p>

                    <a
                    // href="/resume-brian-otina.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                    >
                    <FaDownload />
                    Download (Resume)
                    </a>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md dark:shadow-none">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">
                <FaRegIdCard /> Certifications
                </h2>

                <div className="space-y-6">
                    {/* Certification 2 */}
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Data Analysis with Python Certificate</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Cognitive Powered by IBM Developer Skills Network. - Completed Jan 2025</p>
                        <a
                        href="https://courses.cognitiveclass.ai/certificates/aabb87c54002454986b086e261f713ec"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline mt-2 inline-block"
                        >
                        View Credential →
                        </a>
                    </div>

                    {/* Certification 3 */}
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Python for Everybody Specialization</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">University of Michigan via Coursera - Completed Oct 2022</p>
                        <a
                        // href="https://www.coursera.org/account/accomplishments/specialization/YOURCODE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline mt-2 inline-block"
                        >
                        Uploading soon
                        </a>
                    </div>

                    {/* Certification 1 */}
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">AWS Certified Data Engineer - Associate</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services - Issued Aug 2023</p>
                        <a
                        // href="https://www.credly.com/badges/your-badge-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline mt-2 inline-block"
                        >
                        On Progress Certification Coming Soon
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CertificatesAndCV;
