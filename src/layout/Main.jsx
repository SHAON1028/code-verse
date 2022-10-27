
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footerr from '../component/Pages/Footerr/Footerr';
import Header from '../component/Pages/Header/Header';

const Main = () => {
    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <Footerr></Footerr>
            
        </div>
    );
};

export default Main;