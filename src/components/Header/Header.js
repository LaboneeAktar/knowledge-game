import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-slate-300 lg:px-36 ">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-700 bg-slate-300"
                      : "hover:text-rose-700 bg-slate-300"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-700 bg-slate-300"
                      : "hover:text-rose-700 bg-slate-300"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-700 bg-slate-300"
                      : "hover:text-rose-700 bg-slate-300"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <h1 className="lg:text-3xl text-xl text-rose-800">Knowledge-Game</h1>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-[18px]">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-rose-700 bg-slate-300"
                    : "hover:text-rose-700 bg-slate-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive
                    ? "text-rose-700 bg-slate-300"
                    : "hover:text-rose-700 bg-slate-300"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-rose-700 bg-slate-300"
                    : "hover:text-rose-700 bg-slate-300"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
