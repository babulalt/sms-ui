import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Course } from '../course';
import { EnrollForm } from '../EnrollForm';
import { Home } from '../Home';
import { SignIn } from '../Signin';
import { SignUp } from '../Signup';
import PrivateRoute from "./PrivateRouting";
import { BictCourse } from '../BictCourse';



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route element={<PrivateRoute />}>
        <Route index path='/home' element={<Home />} />
        <Route  path='/online' element={<EnrollForm />} /> 

        <Route path='/courses' element={<Course />} />
        <Route path='/menu' element={<BictCourse />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router



