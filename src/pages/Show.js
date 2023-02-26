import { Form, Link, useLoaderData } from "react-router-dom";
import { useState } from "react"
import styles from "./show.module.css"
import { style } from "@mui/system";

const Show = (props) => {
  const [isChecked, setIsChecked] = useState(false)
  const handleOnChange = () => {
    return setIsChecked(!isChecked)
  }
  const job = useLoaderData()  
  return (
    <div>
      <h3>{job.title}</h3>
      <div>{job.link}</div>
      <h6>{job.type}</h6>
      <p>{job.description}</p>
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