const URL = "https://project-4-backend.onrender.com"

export const indexLoader = async () => {
    const response = await fetch(URL + "/jobs/")
    const jobs = await response.json()
    return jobs
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/jobs/${params.id}/`)
    const job = await response.json()
    return job
}