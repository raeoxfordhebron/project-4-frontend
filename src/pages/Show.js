import { Form, Link, useLoaderData } from "react-router-dom";
import { useState } from "react"
import styles from "./show.module.css"


const Show = (props) => {
  const [isChecked, setIsChecked] = useState(false)
  const handleOnChange = () => {
    return setIsChecked(!isChecked)
  }
  const job = useLoaderData()  
  return (
    <div>
      <div className={styles.jobcontainer}>
      <h3>{job.title}</h3>
      {job.remote?<div>Remote</div>:<div>Office</div>}
      <a href={job.link} target="_blank" rel="noreferrer noopener">{job.link}</a>
      <h6>{job.type}</h6>
      <p>{job.description}</p>
      </div>
      <div className={styles.updatecontainer}>
    <h2>Update Job</h2>
    <Form action={`/update/${job.id}/`} method="put">
      <input type="text" name="title" placeholder="Job Title" defaultValue={job.title}/>
      <input type="text" name="link" placeholder="Link to Application" defaultValue={job.link}/>
      <input type="text" name="type" placeholder="Job Type" defaultValue={job.type}/>
      <input type="text" name="description" placeholder="Job Description" defaultValue={job.description}/>
      <input type="text" name="salary" placeholder="Job Salary" defaultValue={job.salary}/>
      <div className={styles.showbuttons}>
      Remote <input type="checkbox" name="remote" value={isChecked} checked={isChecked} onChange={handleOnChange}/>
      <button>Update Job</button>
      </div>
    </Form>
    </div>
    <div className={styles.crudbuttons}>
      <Form action={`/delete/${job.id}`} method="post">
        <button>Delete Job</button>
      </Form>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      </div>
    </div>
  );
  };
  
  export default Show;