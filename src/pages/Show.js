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
      <h3>{job.title}</h3>
      <a href={job.link}>{job.link}</a>
      <h6>{job.type}</h6>
      <p>{job.description}</p>
      <div style={{textAlign: "center"}}>
    <h2>Update Job</h2>
    <Form action={`/update/${job.id}/`} method="put">
      <input type="text" name="title" placeholder="Job Title" defaultValue={job.title}/>
      <input type="text" name="link" placeholder="Link to Application" defaultValue={job.link}/>
      <input type="text" name="type" placeholder="Job Type" defaultValue={job.type}/>
      <input type="text" name="description" placeholder="Job Description" defaultValue={job.description}/>
      <input type="text" name="salary" placeholder="Job Salary" defaultValue={job.salary}/>
      <div className={styles.showbuttons}>
      <input type="checkbox" name="remote" value={isChecked} checked={isChecked} onChange={handleOnChange}/> Remote
      <button>Update Job</button>
      </div>
    </Form>
    </div>
      <Form action={`/delete/${job.id}`} method="post">
        <button>Delete Job</button>
      </Form>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
  };
  
  export default Show;