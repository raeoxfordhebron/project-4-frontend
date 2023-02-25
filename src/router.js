import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import {indexLoader, showLoader} from "./loaders.js"
import Create from "./pages/Create"
import { createAction, deleteAction, updateAction } from "./actions"
import Update from './pages/Update'


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path="/:id" element={<Show/>} loader={showLoader}/>
            <Route path="create" element={<Create/>} action={createAction} />
            {/* <Route path="update/:id/"element={<Update/>} action={updateAction}/> */}
            <Route path="delete/:id/" action={deleteAction}/>
        </Route>
    </>
))

export default router