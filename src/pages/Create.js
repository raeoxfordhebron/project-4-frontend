import { Form } from "react-router-dom";
import { useState } from "react";

function Create(props) {
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div>
            <h2>Create a Job</h2>
            <Form action="/create" method="post">
                <input type="input" name="title" placeholder="Job Title"/>
                <input type="input" name="description" placeholder="Job Description"/>
                <input type="input" name="type" placeholder="Job Type"/>
                <input type="input" name="salary" placeholder="Job Salary"/>
                <input type="checkbox" id="remote" name="remote" value="Remote" checked={isChecked} onChange={handleOnChange} /> Remote
                <input type="submit" value="Create Job"/>
            </Form>
        </div>
    )
}

export default Create