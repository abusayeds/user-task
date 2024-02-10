
import Main from './layout/Main/Main'
import Alluser from './components/Alluser/Alluser'
import Dashbord from './components/Dashbord/Dashbord'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingleUser from './components/SingleUser/SingleUser'
// import './App.css'

function App() {
    const router =createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
               {
                path: '/',
                element: <Alluser></Alluser>
               },
               {
                path: '/dashbord',
                element: <Dashbord></Dashbord>
               },
               {
                path: 'user/:id',
                loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`),
                element: <SingleUser></SingleUser>
               }
              
               
            ]
        }
       ])

  return (
    <>
    <RouterProvider
    router={router}
    ></RouterProvider>
    </>
  )
}

export default App
