import React, { useState } from "react";
import { FaPython, FaDatabase, FaChartBar } from 'react-icons/fa';
import { TbBrandDatabricks, TbDeviceAnalytics } from "react-icons/tb";
import { SiAmazons3, SiSnowflake, SiApachekafka, SiApacheairflow, SiPostgresql } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import { useImageViewer } from '../Image_viewer';

function Airflow_orchestration() {
    const navigate = useNavigate();
    const { openModal } = useImageViewer();

    return (
        <>
            <section className="max-w-4xl mx-auto px-6 py-12">
                <button
                    onClick={() => navigate('/')}
                    className="my-5 mr-1 px-3 py-1.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 15 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back
                </button>

                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    <span className="text-blue-500 animate-spin-slow mr-2 inline-block"><SiApacheairflow size={50} /></span>Airflow Data Engineering Pipeline – Orchestration, S3 to Snowflake ETL
                </h1>

                {/* Repo Link */}
                <a
                    href="https://github.com/otinabrayo/AirflowWorkFlow"
                    target="_blank"
                    className="text-blue-500 mb-6 animate-pulse hover:underline"
                >
                    Source Code (GitHub Repository)
                </a>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    A complete data engineering pipeline built with Apache Airflow, this project showcases core orchestration concepts like scheduling, task dependencies, branching, custom operators, and data movement from Amazon S3 to Snowflake using Python, SQL, and Docker.
                </p>

                {/* Objective */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">🎯 Objective</h2>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Ingest FX and product data from Amazon S3.</li>
                        <li>Transform and load data into Snowflake using external stages and SQL scripts.</li>
                        <li>Showcase Apache Airflow capabilities: XComs, Branching, Hooks, Trigger Rules, and Custom Operators.</li>
                        <li>Ensure robust orchestration with task retries, conditional logic, and modular structure.</li>
                    </ul>
                </div>

                {/* Tools & Technologies */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">🧰 Tools & Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Apache Airflow</span>
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Amazon S3</span>
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Snowflake</span>
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Python</span>
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">SQL</span>
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Docker</span>
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">VS Code</span>
                    </div>
                </div>

                {/* Architecture */}
                <div className="mb-2">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">🏗️ Pipeline Architecture</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                        The architecture combines modern ETL concepts with the flexibility of Airflow:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Amazon S3 as the raw data lake (CSV/JSON landing zone).</li>
                        <li>Snowflake as the final destination with schema and query support.</li>
                        <li>Airflow DAGs for workflow automation and data lineage tracking.</li>
                        <li>Python and SQL scripts for transformation logic and task orchestration.</li>
                        <li>Docker for local containerized development and reproducibility.</li>
                    </ul>
                </div>

                {/* Architecture Diagram */}

                <img
                    src="assets/airflow_orch/etl_architect.jpg"
                    alt="crypto_etl_architect"
                    className="border rounded-2xl mb-7 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("assets/airflow_orch/etl_architect.jpg")}
                />

                {/* Key Concepts */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">🔄 Key Concepts Demonstrated</h2>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>TaskFlow API and traditional Airflow DAG styles with <code>@task</code> decorators.</li>
                        <li>XComs: for passing values between task instances.</li>
                        <li>BranchPythonOperator: Dynamic branching logic based on file types or flags.</li>
                        <li>Trigger Rules: <code>all_success</code>, <code>one_failed</code>, <code>all_done</code> for handling conditional execution.</li>
                        <li>Custom Hooks and Operators: Extend Airflow with reusable logic in <code>plugins/</code>.</li>
                        <li>LatestOnlyOperator: Avoid historical backfill for real-time pipelines.</li>
                        <li>LATERAL FLATTEN: JSON unnesting during Snowflake transformation.</li>
                    </ul>
                </div>

                {/* Example Workflow */}
                <div className="mb-3">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">🧪 Example DAG Workflow</h2>
                    <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-4">
                        <li>Detect new FX or product files in S3 using S3KeySensor.</li>
                        <li>Branch based on file type (e.g., FX or Product) with BranchPythonOperator.</li>
                        <li>Transform data locally with Python, then upload to Snowflake staging area.</li>
                        <li>Use external stage in Snowflake to ingest staged data.</li>
                        <li>Run transformation queries using SnowflakeOperator.</li>
                        <li>Send email notification on success or failure using a custom EmailOperator.</li>
                    </ol>
                </div>
                <h2 className="font-semibold my-4 text-gray-900 dark:text-white">Conditional branching graph </h2>
                <img
                    src="assets/airflow_orch/conditional_branching_graph.png"
                    alt="crypto_etl_architect"
                    className="border rounded-2xl mb-7 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("assets/airflow_orch/conditional_branching_graph.png")}
                />

                {/* Notifications */}
                <div className="mb-3">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">📩 Email Notifications</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Email alerts are configured for task completion status using a custom operator, supporting:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mt-2">
                        <li>Success notifications with summary logs.</li>
                        <li>Failure alerts with traceback and DAG context.</li>
                    </ul>
                </div>
                <img
                    src="assets/airflow_orch/dag_notifications_in_mail.jpg"
                    alt="crypto_etl_architect"
                    className="border rounded-2xl mb-7 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("assets/airflow_orch/dag_notifications_in_mail.jpg")}
                />

                {/* Output Summary */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">📬 Outputs</h2>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Transformed and loaded data into Snowflake for querying.</li>
                        <li>Audit logs and run history available in Airflow's web UI.</li>
                        <li>Intermediate files cached in Amazon S3 and <code>/tmp</code> directories.</li>
                    </ul>
                </div>

                {/* Final Summary */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">🔗 Summary</h2>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>✅ Developed a modern ETL pipeline using Airflow, Snowflake, and S3.</li>
                        <li>✅ Demonstrated Airflow features: Branching, XComs, Hooks, Trigger Rules, Custom Operators.</li>
                        <li>✅ Packaged for local execution with Docker Compose for reproducibility.</li>
                        <li>✅ Delivered reliable and modular orchestration logic for enterprise-ready pipelines.</li>
                    </ul>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Airflow_orchestration;