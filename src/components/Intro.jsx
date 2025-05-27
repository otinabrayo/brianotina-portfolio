import { useNavigate } from 'react-router-dom'
import React from "react";
// import { FaAws, SiApachekafka } from "react-icons/si";

function Intro() {
    const navigate = useNavigate();

    return (
        // <section className="flex flex-col items-center justify-center text-center pt-6 pb-6 px-4">
        <div className="flex flex-col items-center justify-center pt-6 pb-6">
            <div className="w-full flex justify-start">
                <img src="./assets/logo.png" alt="logo" className="mb-2 w-16 h-16 rounded-full border-2 border-stone-900 dark:border-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Brian Otina Makau</h1>
            <p className="text-xl font-medium mb-6">Data Engineer | Building Scalable Data Solutions</p>
            <p className="max-w-xl text-lg leading-relaxed">
                Hello, 👋 I'm Brian Otina, a dedicated Data Engineer passionate about building scalable and efficient data solutions that power business intelligence and advanced analytics.
            </p>
            <ul className="list-disc pl-6 mt-4">
                <li>Started with foundational skills in <strong>Python</strong>  and <strong>SQL</strong> for scripting and data transformation.</li>
                <li>Designed and maintained end-to-end data pipelines using <strong>Apache Airflow</strong>,<strong> Apache Kafka</strong>,  and <strong>PySpark.</strong></li>
                <li>Built real-time and batch processing workflows using Kafka, with structured topic modeling and schema evolution.</li>
                <li>Developed and managed external stages and transformations using <strong>    SnowFlake</strong> with LATERAL FLATTEN and data lake integration.</li>
                <li>Hands-on experience with <strong>AWS</strong> services including EC2, S3, Lambda, Glue, Athena, and Redshift for scalable cloud pipelines.</li>
                <li>Orchestrated Dockerized environments using <strong>Docker Compose</strong> to manage Airflow, Kafka, PostgreSQL, and Schema Registry setups.</li>
                <li>Focus on <strong>Medallion Architecture</strong> and best practices in data modeling, pipeline optimization, and governance.</li>
            </ul>
            <span className="p-4">🧾 My Extended Data Engineering Journey <a onClick={() => { navigate('/journey') }} className="m-1 border border-y-4 cursor-pointer text-stone-900 animate-pulse dark:text-pink-400 p-1">Click Me</a></span>
        </div>
        // </section>
    );
}

export default Intro;