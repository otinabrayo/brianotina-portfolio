import { useNavigate } from 'react-router-dom'
import React from "react";
import { FaSpotify } from "react-icons/fa6";
import { TbBrandDatabricks, TbDeviceAnalytics } from "react-icons/tb";
import { SiAmazons3, SiSnowflake, SiApachekafka, SiApacheairflow, SiPostgresql } from "react-icons/si";
import { FaAws, FaPython, FaDatabase } from "react-icons/fa";
import { DiDocker } from "react-icons/di";
import { useImageViewer } from '../Image_viewer';
import Footer from '../Footer';

function Spotify_pipeline() {
    const navigate = useNavigate();
    const { openModal } = useImageViewer();
    return(
        <>
            <section className="max-w-4xl mx-auto px-6 pt-12">

                <button
                    onClick={() => navigate('/')}
                    className="mb-5 mr-1 px-3 py-1.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 15 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back
                </button>

                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    🎧 Spotify Data Pipeline – Real-Time ETL Orchestration & Reporting
                </h1>

                {/* Repo Link */}
                <a
                    href="https://github.com/otinabrayo/SpotifyDataEngineering"
                    target="_blank"
                    className="text-blue-500 mb-6 animate animate-pulse hover:underline"
                >
                    Source Code (GitHub Repository)
                </a>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    A robust data engineering pipeline for Spotify, designed to automate data extraction, transformation, and loading (ETL) using batch and streaming methods. The final output supports analytics and reporting through Power BI, ensuring both operational and business insights.
                </p>

                {/* Objective */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">🎯 Objective</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                    Build a scalable and automated pipeline to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mt-2">
                    <li>Extract music and playlist data from the Spotify API.</li>
                    <li>Ingest real-time data using Apache Kafka.</li>
                    <li>Clean and transform data using Python and Snowflake SQL.</li>
                    <li>Store intermediate and final data in Amazon S3 and Snowflake.</li>
                    <li>Orchestrate the pipeline using Apache Airflow and visualize insights in Power BI.</li>
                    </ul>
                </div>

                {/* Key Features */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">🏗️ Key Features</h2>
                    <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1"><FaSpotify size={20} /></span>
                        <span><strong>Data Source:</strong> Uses Spotify API to extract real-time music and playlist metadata.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1"><SiApachekafka size={20} /></span>
                        <span><strong>Streaming Ingestion:</strong> Kafka and ZooKeeper handle real-time data streaming for live analytics.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-purple-500 mt-1"><FaPython size={20} /></span>
                        <span><strong>Data Transformation:</strong> Custom Python scripts clean, enrich, and prepare data for analysis.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1"><SiApacheairflow size={20} /></span>
                        <span><strong>Apache Airflow:</strong> Apache Airflow manages DAGs to automate and monitor the full pipeline workflow.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1"><FaAws size={20} /></span>
                        <span><strong>Cloud Integration:</strong> Stores raw and intermediate transformed datasets in S3 before being processed.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-cyan-500 mt-1"><SiSnowflake size={20} /></span>
                        <span><strong>Snowflake:</strong> Data is loaded into snowflake, cleaned and queried for reporting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1"><TbDeviceAnalytics size={20} /></span>
                        <span><strong>Visualization:</strong> Power BI dashboards provide actionable insights for end-users and stakeholders.</span>
                    </li>
                    </ul>
                </div>


                {/* Project Structure */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">📁 Project Structure</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">Key files and directories include:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                    <li><code>airflow/dags/</code> – DAG definitions for Airflow</li>
                    <li><code>data_pipeline.py</code> – Core ETL logic for API ingestion and processing</li>
                    <li><code>playlist_producer.py / playlist_consumer.py</code> – Kafka streaming producer and consumer</li>
                    <li><code>load_data_snowflake.py</code> – Loads processed data into Snowflake</li>
                    <li><code>airflow/sqls/</code> – SQL scripts used for transformations and aggregation</li>
                    <li><code>.env</code> – Environment configuration (Spotify keys, DB credentials)</li>
                    <li><code>docker-compose.yaml</code> and <code>Dockerfile</code> – Containerized setup for local development</li>
                    </ul>
                </div>

                {/* Workflow */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">🔁 Pipeline Workflow</h2>
                    <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-4">
                    <li>
                        <strong>Extract:</strong> <br />
                        <code>data_pipeline.py</code> extracts tracks, artists, playlists, and metadata from the Spotify API. <br />
                        <code>playlist_producer.py</code> streams new playlist updates to Kafka topics.
                    </li>
                    <li>
                        <strong>Transform:</strong> <br />
                        Python scripts clean nulls, flatten nested fields, and standardize formats. <br />
                        SQL scripts in Snowflake aggregate and filter key attributes for downstream use.
                    </li>
                    <li>
                        <strong>Load:</strong> <br />
                        Transformed data is written to Amazon S3 for backup. Final tables are loaded into Snowflake using <code>load_data_snowflake.py</code>.
                    </li>
                    <li>
                        <strong>Visualize:</strong> <br />
                        Power BI dashboards connect to Snowflake to visualize playlist growth, artist performance, genre popularity, and regional listener trends.
                    </li>
                    </ol>
                </div>

                {/* Architecture Diagram */}
                <h2 className="font-semibold my-4 text-gray-900 dark:text-white">Pipeline Architecture</h2>
                <img
                    src="assets/spotify_pipe/spotify-pipeline.png"
                    alt="crypto_etl_architect"
                    className="border rounded-2xl mb-2 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("assets/spotify_pipe/spotify-pipeline.png")}
                />

                {/* Insights */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">📊 Key Insights & Outcomes</h2>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Real-time playlists and track updates monitored via Kafka streaming topics.</li>
                    <li>Artist popularity and genre trends analyzed by region using Snowflake views.</li>
                    <li>Power BI visualizations provide marketing and A&R teams with listener trends and behavior segmentation.</li>
                    <li>ETL pipeline fully orchestrated using Airflow, with retry and SLA configurations.</li>
                    </ul>
                </div>

                {/* Key Technologies */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">🧰 Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Spotify API</span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Apache Kafka</span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Apache Airflow</span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Python</span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Amazon S3</span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Snowflake</span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Power BI</span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Docker</span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">AWS EC2</span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Spotify_pipeline;
