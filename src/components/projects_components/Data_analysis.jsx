import React, { useState } from "react";
import { FaPython, FaDatabase, FaChartBar } from 'react-icons/fa';
import { TbBrandDatabricks, TbDeviceAnalytics } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import { useImageViewer } from '../Image_viewer';

function Data_analysis() {
    const navigate = useNavigate();
    const { openModal } = useImageViewer();

    return (
        <>
            <section className="max-w-4xl mx-auto px-6 py-12">
                <button
                    onClick={() => navigate('/')}
                    className="mb-5 mr-1 px-3 py-1.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 15 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back
                </button>

                {/* Project 1*/}
                <h1 className="text-2xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    1. Customer Behavior Analysis Project — Data Insights for Targeted Strategies
                </h1>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    This project aimed to uncover actionable insights into customer purchasing behavior using real-world transactional data. By leveraging Python and SQL for data preparation and transformation, and Power BI for advanced visualization, the analysis supported segmentation and behavioral profiling to enhance business decision-making.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    The pipeline covered data cleaning, enrichment, and modeling stages to identify key metrics like purchase frequency, recency, and monetary value. The final dashboards revealed patterns such as seasonal trends, churn risk, and high-value customer clusters.
                </p>

                {/* Key Features */}
                <div className="mb-10">
                    <h2 className="font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-green-500 mt-1"><FaPython size={20} /></span>
                            <span><strong>Data Wrangling:</strong> Cleaned raw data using Python (Pandas, NumPy) to handle nulls, duplicates, and inconsistencies.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-sky-500 mt-1"><TbSql size={20} /></span>
                            <span><strong>SQL Analytics:</strong> Performed grouping, joins, window functions, and CTEs for cohort and RFM segmentation.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-indigo-500 mt-1"><TbDeviceAnalytics size={20} /></span>
                            <span><strong>Data Visualization:</strong> Built interactive dashboards in Power BI showing KPIs, churn trends, and segment-wise purchase behavior.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-yellow-500 mt-1"><TbDeviceAnalytics size={20} /></span>
                            <span><strong>Segmentation Analysis:</strong> Implemented Recency-Frequency-Monetary (RFM) modeling and customer lifetime value metrics.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 mt-1"><TbDeviceAnalytics size={20} /></span>
                            <span><strong>Actionable Insights:</strong> Delivered business-focused recommendations like loyalty campaign targeting and retention triggers.</span>
                        </li>
                    </ul>
                </div>

                {/* Repo Link */}
                <a
                    href="https://github.com/otinabrayo/CustomerBehaviourAnalysis"
                    target="_blank"
                    className="text-blue-500 mb-6 animate animate-pulse hover:underline"
                >
                    Source Code (GitHub Repository)
                </a>

                {/* Dashboard Reports */}
                <h2 className="text-2xl font-semibold my-4 text-gray-900 dark:text-white">Dashboard Reports</h2>
                <img
                    src="assets/data_analysis/SalesReport_page1.jpg"
                    alt="crypto_etl_architect"
                    className="border rounded-2xl mb-2 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("assets/data_analysis/SalesReport_page1.jpg")}
                />
                <img
                    src="assets/data_analysis/Products_page2.jpg"
                    alt="crypto_data_mails"
                    className="border rounded-2xl cursor-pointer mb-10 hover:opacity-90 transition-opacity"
                    onClick={() => openModal("assets/data_analysis/Products_page2.jpg")}
                />

                {/* Project 2 */}
                <h1 className="text-2xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    2. Data Warehouse and Analytics Project
                </h1>

                {/* Repo Link */}
                <a
                    href="https://github.com/otinabrayo/CustomerBehaviourAnalysis"
                    target="_blank"
                    className="text-blue-500 mb-6 animate animate-pulse hover:underline"
                >
                    Source Code (GitHub Repository)
                </a>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    🚀 This project demonstrates a comprehensive data warehousing and analytics solution, from building a data warehouse to generating actionable insights. Designed as a portfolio project, it highlights industry best practices in data engineering and analytics.
                </p>
                <h3 className="font-semibold my-4 text-gray-900 dark:text-white">Project Overview 📖</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300 mb-10">
                    <li> <strong>Data Architecture:</strong> Designing a Modern Data Warehouse Using <strong>Medallion Architecture</strong> i.e Bronze, Silver, and Gold layers.</li>
                    <li> <strong>ETL Pipeline:</strong> Extracting, transforming, and loading data from source systems into the warehouse.</li>
                    <li> <strong>Data Modelling:</strong> Developing fact and dimension tables optimized for analytical queries.</li>
                    <li><strong>Analytics & Reporting:</strong> Creating SQL-based reports and dashboards for actionable insights.</li>
                </ul>

                {/* Architecture Diagram */}
                <h2 className="font-semibold my-4 text-gray-900 dark:text-white">Warehousing using Mysql Server</h2>
                <img
                    src="assets/data_analysis/data_warehouse.jpg"
                    alt="crypto_etl_architect"
                    className="border rounded-2xl mb-10 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("assets/data_analysis/data_warehouse.jpg")}
                />


                {/* Project 3 */}
                <h1 className="text-2xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    3. DataDNA Dataset Challenge
                </h1>

                {/* Post Link*/}
                <a
                    href="https://www.linkedin.com/posts/brian-makau-3a93b6354_powerbi-dataanalytics-datascience-activity-7304954812930912257-PDHf?utm_source=share&utm_medium=member_android&rcm=ACoAAFhWCbEB3TF8VNM0DJ791w48mwWgV5sTR-o"
                    target="_blank"
                    className="text-blue-500 mb-6 animate animate-pulse hover:underline"
                >
                    Find it in linkedIn
                </a>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    This was a succesfully completed the DataDNA Dataset Challenge from Onyx Data. I got it from Linked In and decided i could hop in it. <br />
                    I successfully transormed the data and set it ready for analyszation thru python.
                    I developed an interactive PowerBI dashboard to unveil significant crime trends by distrits, crime types, and changes in time.
                    Throughout the data transformation to visu         alization journey, this challenge was a great experience in sharpening my analytical skills as well as data story telling.
                </p>

                <strong>Key  Takeaways  in the dashboard:</strong>
                <ul className="list-disc ml-5 mt-5 space-y-2 text-gray-700 dark:text-gray-300 mb-10">
                    <li>Distribution of  crime by districts</li>
                    <li>Distribution of crime by time</li>
                    <li>Major types of offence and how often</li>
                    <li>Most important factors affecting crime trends</li>
                </ul>

                {/* Architecture Diagram */}
                <h2 className="font-semibold my-4 text-gray-900 dark:text-white">Crime Report</h2>
                <img
                    src="assets/data_analysis/crime_report.jpg"
                    alt="crypto_etl_architect"
                    className="border rounded-2xl mb-2 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("assets/data_analysis/crime_report.jpg")}
                />
                <img
                    src="assets/data_analysis/crime_report_.jpg"
                    alt="crypto_etl_architect"
                    className="border rounded-2xl mb-10 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("assets/data_analysis/crime_report_.jpg")}
                />


                {/* Project 3 */}
                <h1 className="text-2xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    4. 🎬 Movie Industry Profit Analysis
                </h1>

                {/* Post Link*/}
                <a
                    href="https://github.com/otinabrayo/Movie-Industry-Profitability"
                    target="_blank"
                    className="text-blue-500 mb-6 animate animate-pulse hover:underline"
                >
                    Source Code (GitHub Repository)
                </a>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    This project analyzes profitability trends in the global movie industry using a full-stack data pipeline, from data preprocessing to database management and dashboard visualization. The goal was to determine what drives movie revenue and profit, using real-world data from TMDB.
                </p>

                {/* Project Workflow */}
                <div className="mb-10">
                    <h2 className="font-semibold mb-4 text-gray-900 dark:text-white">🚀 Project Workflow</h2>
                    <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-4">
                        <li>
                            <strong>Data Collection</strong><br />
                            Pulled and structured the TMDB 5000 dataset for analysis and ingestion.
                        </li>
                        <li>
                            <strong>Data Cleaning & Transformation</strong><br />
                            Used <strong>Python (Pandas, NumPy)</strong> for preprocessing: removed duplicates, filled missing values, transformed nested JSON fields.<br />
                            Applied <strong>SQL DDL & DML</strong> to create schemas and clean raw records for integrity.
                        </li>
                        <li>
                            <strong>Database & Querying</strong><br />
                            Created relational schemas using <code>ddl_movies.sql</code>, enforced primary and foreign keys, and optimized queries with indexes.<br />
                            Used complex SQL queries to calculate profitability, ROI, top genres, and studio performance.
                        </li>
                        <li>
                            <strong>Analysis & Insights</strong><br />
                            Performed Exploratory Data Analysis (EDA) in Python (Jupyter Notebooks). Used Power BI to build visuals on genre success, studio performance, and ROI trends.
                        </li>
                        <li>
                            <strong>Visualization & Reporting</strong><br />
                            Created a Power BI dashboard <code>(movies_report.pbix)</code> for interactive filtering of profits by year, studio, genre, and ratings.
                        </li>
                    </ol>
                </div>

                {/* Key Insights */}
                <div className="mb-10">
                    <h2 className="font-semibold mb-4 text-gray-900 dark:text-white">📊 Key Insights</h2>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li><strong>Genre Popularity:</strong> Action, Adventure, and Drama dominate in both number of releases and total revenue.</li>
                        <li><strong>Post-2000 Surge:</strong> Profitability significantly increased after 2000, though Return on Investment (ROI) has gradually declined since 2015.</li>
                        <li><strong>Top Studios:</strong> Universal Pictures, Paramount, and Columbia lead in total box office revenue across decades.</li>
                        <li><strong>Runtime Impact:</strong> Most profitable films tend to have a runtime between 100–130 minutes.</li>
                    </ul>
                </div>

                {/* Architecture Diagram */}
                <h2 className="font-semibold my-4 text-gray-900 dark:text-white">Crime Report</h2>
                <img
                    src="assets/data_analysis/movie_industry.jpg"
                    alt="crypto_etl_architect"
                    className="border rounded-2xl mb-5 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("assets/data_analysis/movie_industry.jpg")}
                />

                {/* Tech Stack */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Python (Pandas, NumPy)</span>
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">SQL (MySQL, SQLSERVER)</span>
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Power BI</span>
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">Excel</span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Data_analysis;