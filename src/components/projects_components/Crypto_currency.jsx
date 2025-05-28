import React, { useState } from "react";
import { FaDocker, FaRegListAlt, FaAws } from "react-icons/fa";
import { SiApacheairflow, SiApachekafka, SiSnowflake } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Footer from '../Footer';
import { useImageViewer } from '../Image_viewer';

function Crypto_currency() {
  const navigate = useNavigate();
  const { openModal } = useImageViewer();

  return (
    <>

      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-5 mr-1 px-3 py-1.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 15 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>

        {/* Title */}
        <h1 className="text-3xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          End-to-End Crypto Currency Data Pipeline with Real-Time Ingestion & Quality Automation
        </h1>

        {/* Repo Link */}
        <a
          href="https://github.com/otinabrayo/CryptoDataPipeline"
          target="_blank"
          className="text-blue-500 mb-6 animate animate-pulse hover:underline"
        >
          View Source Code in my GitHub
        </a>

        {/* Objective */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Project Objective</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          The goal of this project was to build a production-grade, real-time data pipeline that ingests, validates, and analyzes cryptocurrency data with a focus on automation, scalability, and data quality assurance using modern cloud-native tools.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          This data pipeline enables real-time ingestion and transformation of large-scale datasets using <strong>Apache Kafka</strong> for streaming and <strong>Apache Airflow</strong> for orchestration. It follows the <strong>Medallion pattern (Bronze, Silver, Gold)</strong> to progressively improve data quality. Services are containerized using <strong>Docker</strong> and integrated with a <strong>Schema Registry</strong> to manage schema evolution.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Raw data is stored in <strong>Amazon S3</strong> and automatically loaded into <strong>Snowflake</strong> using <strong>Snowpipe</strong>. Invalid records are isolated and emailed as CSV reports to ensure fast resolution, preserving data integrity across all stages.
        </p>

        {/* Key Features */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h2>
        <ul className="space-y-4 mb-10">
          <li className="flex items-start gap-3"><span className="text-blue-500 mt-1"><SiApachekafka size={20} /></span><span><strong>Real-Time Streaming:</strong> Apache Kafka ensures continuous and reliable ingestion of raw data.</span></li>
          <li className="flex items-start gap-3"><span className="text-purple-500 mt-1"><SiApacheairflow size={20} /></span><span><strong>Workflow Orchestration:</strong> Apache Airflow automates and schedules ETL processes.</span></li>
          <li className="flex items-start gap-3"><span className="text-teal-500 mt-1"><FaDocker size={20} /></span><span><strong>Modular Deployment:</strong> Dockerized services enable scalable and reproducible environments.</span></li>
          <li className="flex items-start gap-3"><span className="text-yellow-500 mt-1"><FaRegListAlt size={20} /></span><span><strong>Staged Transformation:</strong> Medallion Architecture ensures data quality at each stage (Bronze → Silver → Gold).</span></li>
          <li className="flex items-start gap-3"><span className="text-orange-500 mt-1"><FaAws size={20} /></span><span><strong>Cloud Integration:</strong> Amazon S3 + Snowflake Snowpipe provide efficient storage and query capabilities.</span></li>
          <li className="flex items-start gap-3"><span className="text-cyan-500 mt-1"><SiSnowflake size={20} /></span><span><strong>Automated Error Handling:</strong> Cleaned and corrupted data are auto-detected, logged, and emailed to stakeholders.</span></li>
        </ul>

        {/* Challenges */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Challenges & Solutions</h2>
        <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300 mb-10">
          <li><strong>Schema Evolution:</strong> Managed with Confluent Schema Registry and Avro serialization.</li>
          <li><strong>Bad Records:</strong> Isolated invalid payloads with alerting via automated emails containing CSV attachments.</li>
          <li><strong>Pipeline Failures:</strong> Used Airflow retries and failure callbacks for alerting and resiliency.</li>
          <li><strong>Observability:</strong> Monitored Airflow DAGs using logging and email status reports for end-to-end visibility.</li>
          <li><strong>Security:</strong> AWS IAM roles and Snowflake RBAC policies were implemented to protect data and services.</li>
        </ul>

        {/* Performance Metrics */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Performance Highlights</h2>
        <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300 mb-10">
          <li><strong>Ingestion Rate:</strong> ~5,000 Kafka messages/sec.</li>
          <li><strong>End-to-End Latency:</strong>  3 minutes from ingestion to Snowflake availability.</li>
          <li><strong>Uptime:</strong> 99.8% thanks to containerization and job monitoring.</li>
        </ul>

        {/* Architecture Diagram */}
        <h2 className="text-2xl font-semibold my-4 text-gray-900 dark:text-white">Pipeline Architecture</h2>
        <img
          src="assets/crypto_pr/crypto_etl_architect.png"
          alt="crypto_etl_architect"
          className="border rounded-2xl mb-3 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => openModal("assets/crypto_pr/crypto_etl_architect.png")}
        />
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Emails Notifications</h2>
        <img
          src="assets/crypto_pr/crypto_data_mails.jpg"
          alt="crypto_data_mails"
          className="border rounded-2xl cursor-pointer mb-4 hover:opacity-90 transition-opacity"
          onClick={() => openModal("assets/crypto_pr/crypto_data_mails.jpg")}
        />

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "Apache Kafka",
            "Apache Airflow",
            "Docker",
            "Schema Registry",
            "AWS S3",
            "Snowflake",
            "Snowpipe",
            "Medallion Architecture",
            "Avro",
            "Python",
          ].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* API Credit */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Data Source: <a href="https://www.coingecko.com/en/api" className="text-blue-500 hover:underline" target="_blank">CoinGecko API</a>
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Crypto_currency;