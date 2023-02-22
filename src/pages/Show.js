import { Link, useLoaderData } from "react-router-dom";

const Show = (props) => {
  const job = useLoaderData()  
  return (
    <div>
      <h1>{job.title}</h1>
      <h2>{job.type}</h2>
      <p>{job.description}</p>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
  };
  
  export default Show;