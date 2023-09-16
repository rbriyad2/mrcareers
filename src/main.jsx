import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './components/Layout/Index.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blog from './components/Blog/Blog.jsx';
import Applying from './components/Applying/Applying.jsx';
import Homepage from './components/Homepage/Homepage.jsx';
import JobDetail from './components/JobDetail/JobDetail.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Index></Index>,
    children:[
      {
        path:'/',
        element: <Homepage></Homepage>,
        loader: ()=> fetch('jobcategorys.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('jobs.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
        loader: ()=> fetch('jobs.json')
      },
      {
        path: '/applying',
        element: <Applying></Applying>,
        loader: ()=> fetch('jobs.json')
      },
      {
        path: '/jobdetails/:id',
        element: <JobDetail></JobDetail>,
        loader: async ({params})=>{ 
          const jobsjson = await fetch('jobs.json')
          const jobs = await jobsjson.json()
          return jobs.find(job=>job.id==params.id)
        }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
