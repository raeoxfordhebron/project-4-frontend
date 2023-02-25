import HomeIcon from '@mui/icons-material/Home'
import CreateIcon from '@mui/icons-material/Create'
import UpdateIcon from '@mui/icons-material/Update'

export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <CreateIcon/>,
        text: "Create",
        link: "/create"
    },
    {
        id: 2,
        icon: <UpdateIcon/>,
        text: "Update",
        link: "/update"
    }
]
