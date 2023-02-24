import { redirect } from "react-router-dom";

const URL = "https://project-4-backend.onrender.com"

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newJob = {
        title: formData.get("title"),
        description: formData.get("description"),
        type: formData.get("type"),
        salary: formData.get("salary"),
        remote: formData.get("remote")
    }
    await fetch(URL + "/jobs/", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob)
    })
    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const id = params.id
    const updatedJob = {
        title: formData.get("title"),
        description: formData.get("description"),
        type: formData.get("type"),
        salary: formData.get("salary"),
        remote: formData.get("remote")
    }
    await fetch(URL + `/jobs/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedJob)
    })
    return redirect(`/jobs/${id}/`)
}

export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(URL + `/jobs/${id}/`, {
        method: "delete",
    })
    return redirect("/")
}