// components/TechStackPage.js
import React from "react";
import TechStack from "./TechStack";

// Import icons from specific sets
import { FaAws, FaPython, FaDatabase } from "react-icons/fa";
import { SiApachekafka, SiApacheairflow, SiApacheecharts, SiSnowflake, SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const techItems = [
  { name: "AWS", icon: FaAws },
  { name: "Python", icon: FaPython },
  { name: "SQL", icon: SiPostgresql },
  { name: "NoSQL", icon: DiMongodb },
  { name: "Apache Kafka", icon: SiApachekafka },
  { name: "Apache Airflow", icon: SiApacheairflow },
  { name: "PySpark", icon: SiApacheecharts },
  { name: "Snowflake", icon: SiSnowflake },
  { name: "Databases", icon: FaDatabase}
];

function TechStackPage() {
  return (
    <section className="max-w-xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center flex items-center justify-center gap-2">
        <span>⚙️</span> Tech Stacks I Work With
      </h2>

      <TechStack items={techItems} />
    </section>
  );
}

export default TechStackPage;