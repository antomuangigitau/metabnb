import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/header/Nav';

const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default SharedLayout;
