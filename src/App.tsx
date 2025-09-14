import GlobalStyles from 'styles/GlobalStyles'
import {BrowserRouter, Route, Routes}from "react-router-dom"
//Page
import Home from 'pages/EmployeeApp/Home/Home'
import ContactUs from 'pages/EmployeeApp/ContactUs/ContactUs'
import About from 'pages/EmployeeApp/About/About'
import LogIn from 'pages/EmployeeApp/LogIn/LogIn'
import Clients from 'pages/EmployeeApp/Clients/Clients'

// import Homework_06 from "homeworks/Homework_06/Homework_06"
// import Homework_07 from 'homeworks/Homework_07/Homework_07'
// import Homework_08 from 'homeworks/Homework_08/Homework_08'
// import Lesson_06 from "lessons/Lesson_06/Lesson_06"
// import Lesson_07 from "lessons/Lesson_07/Lesson_07"
// import Lesson_08 from 'lessons/Lesson_08/Lesson_08'
// import Lesson_09 from 'lessons/Lesson_09/Lesson_09'
// import Homework_09 from 'homeworks/Homework_09/Homework_09'
// import Lesson_09 from 'lessons/Lesson_09/Lesson_09'
import Lesson_10 from 'lessons/Lesson_10/Lesson_10'


import Lesson_11 from 'lessons/Lesson_11/Lesson_11'
import Homework_11 from 'homeworks/Homework_11/Homework_11'
import Layout from 'components/Layout/Layout'
import Apple from 'pages/EmployeeApp/Clients/Apple/Apple'
import Audi from 'pages/EmployeeApp/Clients/Audi/Audi'
import Wargaming from 'pages/EmployeeApp/Clients/Wargaming/Wargaming'
import{ MENU_ROUTES }from "constants/routes"
 import Lesson_13 from 'lessons/Lesson_13/Lesson_13'
import Lesson_06 from 'lessons/Lesson_06/Lesson_06'
import Homework_13 from 'homeworks/Homework_13/Homework_13'

function App() {
  return <BrowserRouter>
   <GlobalStyles/>
   


{/* 
   <Layout>
    <Routes>
    <Route  path ={MENU_ROUTES.HOME} element ={<Home/>}  />
    <Route  path ={MENU_ROUTES.CONTACT_US} element ={<ContactUs/>}  />
    <Route  path ={MENU_ROUTES.ABOUT} element ={<About/>}  />
    <Route  path ={MENU_ROUTES.LOGIN} element ={<LogIn/>}  />
    <Route  path = {MENU_ROUTES.CLIENTS} element = {<Clients/>} />
    <Route  path = {MENU_ROUTES.APPLE} element = {<Apple/>} />
    <Route  path = {MENU_ROUTES.AUDI} element = {<Audi/>} />
    <Route  path = {MENU_ROUTES.WARGAMING} element = {<Wargaming/>} />
    <Route  path={MENU_ROUTES.NOT_FOUND} element = "Page not found"/>
   </Routes>
   </Layout> */}


    {/* <Lesson_06/> */}
    {/* <Homework_06/> */}
    {/* <Lesson_07/> */}
     {/* <Lesson_08/> */}
    {/* <Homework_07/> */}
  {/* <Homework_08/> */}

    {/* <Lesson_09/> */}

      {/* <Homework_09/> */}

     {/* <Lesson_10/> */}

    {/* <Lesson_11/> */}
    {/* <Homework_11/> */}
    {/* <Lesson_13/> */}
    <Homework_13/>
  </BrowserRouter>
  
}


export default App
