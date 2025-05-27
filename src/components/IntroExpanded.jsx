import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function IntroExpanded() {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex flex-col items-center justify-center text-center pt-6 pb-6 px-4">
        {/* Logo and Back Button */}
        <div className="w-full flex justify-between items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="mt-10 mr-1 px-3 py-1.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 15 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
        </div>

        {/* Name */}
        <h1 className="text-5xl dark:text-white mb-2 font-bold">
          Brian Otina Makau
        </h1>

        {/* Bio Section */}
        <div className="max-w-3xl mx-auto space-y-6 mt-6 text-left">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <span>📘</span> My Data Engineering Journey
          </h2>

          <p className="text-lg leading-relaxed">
            Hello, 👋 I'm <strong>Brian Otina</strong>, a dedicated Data Engineer passionate about building scalable and efficient data solutions that power business intelligence and advanced analytics.
          </p>

          <p className="text-lg leading-relaxed">
            My journey into data engineering began with foundational skills in <strong>Python</strong> and <strong>SQL</strong>, which I've expanded through hands-on experience and continuous learning. Over time, I've designed and maintained end-to-end data pipelines using modern tools like <strong>Apache Airflow</strong> for workflow orchestration, <strong> Apache Kafka</strong> for real-time data streaming, and <strong>PySpark</strong> for distributed processing at scale.
          </p>

          <p className="text-lg leading-relaxed">
            I have hands-on experience working within the <strong>Amazon Web Services (AWS)</strong> ecosystem, leveraging services such as <strong>S3</strong> for data storage, <strong>Lambda</strong> for serverless computing, <strong>Glue</strong> for ETL jobs, <strong>Athena</strong> for querying, <strong>Redshift</strong> and <strong>SnowFlake</strong> for high-performance data warehousing. I'm also experienced in integrating these services into automated data pipelines that support both batch and real-time analytics.
          </p>

          <p className="text-lg leading-relaxed">
            One of my key focuses has been on structuring data platforms using <strong>Medallion Architecture</strong>, ensuring clean separation between raw, processed, and aggregated layers of data. I leverage best practices in <strong>data modeling</strong>, <strong>pipeline optimization</strong>, and <strong>governance</strong> to build systems that are not only scalable but also maintainable and future-proof.
          </p>

          <p className="text-lg leading-relaxed">
            Beyond the technical side, I enjoy bridging the gap between raw data and actionable insights — collaborating closely with analysts and stakeholders to turn complex data problems into streamlined, reliable workflows.
          </p>
          <p className="text-lg leading-relaxed pb-7">
            This website serves as a portfolio of my work, showcasing my <strong>skills</strong>, <strong>projects</strong>, and ongoing growth in the world of <strong>data engineering</strong>.
          </p>
        </div>
      </section>
    <Footer />
  </>
  );
}

export default IntroExpanded;