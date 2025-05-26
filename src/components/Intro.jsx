import React from "react";
// import { FaAws, SiApachekafka } from "react-icons/si";

function Intro() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-6 pb-6 px-4">
      {/* Logo */}
      <div className="w-full flex justify-start mb-6">
        <img
          src="./assets/logo.png"
          className="w-16 h-16 rounded-full border-2 border-stone-900 dark:border-white"
          alt="logo"
        />
      </div>

      {/* Name */}
      <h1 className="md:text-7xl dark:text-white mb-2 font-bold">
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
          My journey into data engineering began with foundational skills in <strong>Python</strong> and <strong>SQL</strong>, which I’ve expanded through hands-on experience and continuous learning. Over time, I've designed and maintained end-to-end data pipelines using modern tools like <strong>Apache Airflow</strong> for workflow orchestration, <strong> Apache Kafka</strong> for real-time data streaming, and <strong>PySpark</strong> for distributed processing at scale.
        </p>

        <p className="text-lg leading-relaxed">
          I have hands-on experience working within the <strong>Amazon Web Services (AWS)</strong> ecosystem, leveraging services such as <strong>S3</strong> for data storage, <strong>Lambda</strong> for serverless computing, <strong>Glue</strong> for ETL jobs, <strong>Athena</strong> for querying, <strong>Redshift</strong> and <strong>SnowFlake</strong> for high-performance data warehousing. I’m also experienced in integrating these services into automated data pipelines that support both batch and real-time analytics.
        </p>

        <p className="text-lg leading-relaxed">
          One of my key focuses has been on structuring data platforms using <strong>Medallion Architecture</strong>, ensuring clean separation between raw, processed, and aggregated layers of data. I leverage best practices in <strong>data modeling</strong>, <strong>pipeline optimization</strong>, and <strong>governance</strong> to build systems that are not only scalable but also maintainable and future-proof.
        </p>

        <p className="text-lg leading-relaxed">
          Beyond the technical side, I enjoy bridging the gap between raw data and actionable insights — collaborating closely with analysts and stakeholders to turn complex data problems into streamlined, reliable workflows.
        </p>
      </div>
    </section>
  );
}

export default Intro;