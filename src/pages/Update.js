// function Update(){
//     return <div style={{textAlign: "center"}}>
//     <h2>Update Job</h2>
//     <Form action={`/update/${job.id}/`} method="put">
//       <input type="text" name="title" placeholder="Job Title" defaultValue={job.title}/>
//       <input type="text" name="type" placeholder="Job Type" defaultValue={job.type}/>
//       <input type="text" name="description" placeholder="Job Description" defaultValue={job.description}/>
//       <input type="text" name="salary" placeholder="Job Salary" defaultValue={job.salary}/>
//       <input type="checkbox" name="remote" value="Remote" checked={isChecked} onChange={handleOnChange}/> Remote
//       <button>Update Job</button>
//     </Form>
//     <Form action={`/delete/${job.id}`} method="post">
//       <button>Delete Job</button>
//     </Form>
//     </div>
// }