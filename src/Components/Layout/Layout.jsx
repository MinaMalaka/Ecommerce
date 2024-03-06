import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import toast, { Toaster } from 'react-hot-toast';
export default function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Toaster/>
    </>
  )
}
