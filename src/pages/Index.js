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
  <div className="search-feature">
    <span id="search">Search:</span> <input type="text" ref={inputRef} className="search-bar"/> <input onClick={handleSubmit} type="submit"/>
    </div> 
    <div className="job-container">
    {displayedJobs.map(job => (
    <div key={job.id} className="job">
      <Link to={`/${job.id}`}>
        <div>{job.title}</div> 
      </Link>
      <h6>{job.type}</h6>
      <h6>{job.salary}</h6>
      <div>{job.description}</div>
    </div>
  ))}
  </div>
  </>
  );

  };
  
  export default Index;