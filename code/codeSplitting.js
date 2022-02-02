//lazy loading - loading asynchronously 
//React version 16.6 or later


import React, { lazy, Suspense} from 'react';
import {Switch, Route } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/Mainpage'))
const LoginPage = lazy(() => import('../pages/Login'))
const HomePage = lazy(() => import ('../pages/Homepage'))

const Routess = () => {
  return(
    <Switch>
      <Suspense fallback={<div> loading page... </div>}>
        <Route path="/:id" component={MainPage} />
        <Route path="/login" component={LoginPage} /> 
        <Route path='/' component={HomePage} /> 
      </Suspense>
   </Switch>
  )  
}

export default Routess


