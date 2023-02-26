import { Form } from "react-router-dom";
import { useState } from "react";
import styles from "./create.module.css"

function Create(props) {
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        return setIsChecked(!isChecked);
    }
    return (
        <div>
            <h2>Create a Job</h2>
            <Form action="/create" method="post" className={styles.createform}>
                <input type="input" name="title" placeholder="Job Title"/>
                <input type="input" name="link" placeholder="Application Link"/>
                <input type="input" name="description" placeholder="Job Description"/>
                <input type="input" name="type" placeholder="Job Type"/>
                <input type="input" name="salary" placeholder="Job Salary"/>
                <input type="checkbox" id="remote" name="remote" value={isChecked} checked={isChecked} onChange={handleOnChange} /> Remote
                <div>
                <button type="submit">Create New Job</button>
                </div>
            </Form>
        </div>
    )
}

export default Create