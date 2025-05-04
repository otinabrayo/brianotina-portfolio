export default [
    {
        title: 'Data Analytics',
        imgUrl: `${import.meta.env.BASE_URL}assets/data_analysis.jpg`,
        stack: ['Python', 'SQLServer', 'PowerBi', 'SQL'],
        link: 'https://github.com/otinabrayo/Data-Warehouse-Project-sql',
        description: 'A data warehouse project that uses SQL Server and Power BI to analyze \
        and visualize data. The project includes ETL processes, data modeling, and dashboard \
        creation.'
    },
    {
        title: 'Data Pipeline Engineering',
        imgUrl: `${import.meta.env.BASE_URL}assets/pipeline.jpg`,
        stack: ['Snowflake', 'Amazon EC2', 'APIs', 'Snowflake', 'Docker'],
        link: 'https://github.com/otinabrayo/Reddit-Data-Pipeline',
        description: 'This project is designed for real-time data streaming using Kafka. \
        It fetches user data from the UserMe API, processes it using Python, and streams it \
        via Kafka for further consumption.'
    },
    {
        title: 'Airflow Orchestration',
        imgUrl: `${import.meta.env.BASE_URL}assets/airflow-orchestration.jpg`,
        stack: ['Python','Apache Airflow', 'Amazon s3 Bucket', ' Apache Kafka'],
        link: 'https://github.com/otinabrayo/AirflowWorkFlow',
        description: 'A complete Data Engineering pipeline using Apache Airflow, designed to \
        demonstrate scheduling, orchestration, data ingestion, transformation, and inter-task \
        communication.'
    },
    {
        title: 'Reddit Data Pipeline',
        imgUrl: `${import.meta.env.BASE_URL}assets/reddit.jpg`,
        stack: ['RedditApi','EC2', 'Amazon s3 Bucket', 'AWS'],
        link: 'https://github.com/otinabrayo/Reddit-Data-Pipeline',
        description: 'This project demonstrates a scalable Reddit Data Pipeline using Reddit API,\
        Python, Apache Airflow, Amazon EC2, and Amazon S3. It automates the extraction of data\
        from the Reddit API and stores it in an S3 bucket for further analysis or processing.'
    },
]