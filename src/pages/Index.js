import { Link, useLoaderData } from "react-router-dom";
import { useState, useRef } from "react";

const Index = (props) => {
  const jobs = useLoaderData()
  const [displayedJobs, setDisplayedJobs] = useState(jobs)
  const inputRef = useRef(null)
  const searchJobs = (searchString) => {
    return jobs.filter((job) => {
      return job.title.toLowerCase().includes(searchString.toLowerCase())
    })
  }  

  const handleSubmit = (event) => {
    const search = inputRef.current.value
    if(search === ""){
      setDisplayedJobs(jobs)
      return 1
    }
    setDisplayedJobs(searchJobs(search))
  }
  return (<>
    Search: <input type="text" ref={inputRef}/> <input onClick={handleSubmit} type="submit"/>
    <div className="job-container">
    {displayedJobs.map(job => (
    <div key={job.id} className="job">
      <Link to={`/${job.id}`}>
        <div>{job.title}</div> 
      </Link>
      
      <h3>{job.description}</h3>
    </div>
  ))}
  </div>
  </>
  );

  };
  
  export default Index;