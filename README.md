# The Oxford Job Dictionary

This app lets users keep track of their job applications as they embark on their job searches. This app is specifically for job seekers in the coding and technology world. Users will be able to see a list of jobs, click on one and view the individual job, create, update, and delete job listings, as well as check it off as applyed. 

[Trello Board Link](https://trello.com/b/lmmx9rYi/unit-4-project)

### Technologies Used
- JavaScript
- HTML
- CSS
- React
- Python
- Django

### Routes & Components

```
App --> Header
App --> Outlet
Outlet -- "/" --> Index
Outlet -- "/jobs/:id" --> Show
Outlet -- "/jobs/create" --> createAction
Outlet -- "/jobs/update/:id" --> updateAction
Outlet -- "/jobs/delete/:id" --> deleteAction
```

| Route | Element | Loader | Action | Summary |
| ----- | ------- | ------ | ------ | ------- |
|   /   |  Index  | indexLoader |   | Loads up list of jobs|
| /jobs/:id | Show | showLoader |   | Lods up an individual job |
| /jobs/create | Create |  | createAction | Handles submission of create form for one job| 
| /jobs/update/:id | Update | | updateAction | Handles submission of update form for one job |
| /jobs/delete/:id | Delete | | deleteAction | Handles submission of delete form for one job |

### User Stories
- As a user, I want to able to see a list of my jobs.
- As a user, I want to click on one of the jobs and show and individual job.
- As a user, I want to be able to add, edit, and delete jobs.
- As a user, I want to be able to check off jobs as I apply to them.

### Schema
<img src="https://i.imgur.com/VtjUh1b.png">

### Wireframes & Mockups

#### General Design

<img src="https://i.imgur.com/ApfT5MI.png">

#### Index Page - Desktop and mobile

### Daily Plan

| Day | Goal |
| --- | ---- |
| 2/19 | Finish readme | 
| 2/20 | Finish CRUD | 
| 2/21 | Research Burger Menu | 
| 2/22 | Work on Burger Menu | 
| 2/23 | Finish Burger Menu | 
| 2/24 | Filter ability | 
| 2/25 | Filter ability | 
| 2/26 | Styling | 
| 2/27 | Styling |
| 2/28 | Present! |
