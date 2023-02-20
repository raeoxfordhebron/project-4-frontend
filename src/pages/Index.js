import { Link, useLoaderData } from "react-router-dom";

const Index = (props) => {
  const jobs = useLoaderData()  
  return jobs.map(job => (
    <div key={job.id} className="job">
      <Link to={`/${job.id}`}>
        <h1>{job.title}</h1>
      </Link>
      <h3>{job.description}</h3>
    </div>
  ));
  };
  
  export default Index;