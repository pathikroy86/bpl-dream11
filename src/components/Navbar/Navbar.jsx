import React from 'react';
import './Navbar.css';
import { HiCurrencyDollar } from "react-icons/hi2";
const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"><img className='max-h-full' src="https://i.ibb.co.com/8gPpFJFN/logo.png" alt="" /></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                        <li><a><div className="badge badge-ghost"><span>0</span> Coin <HiCurrencyDollar /></div></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;