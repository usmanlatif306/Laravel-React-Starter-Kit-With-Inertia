import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

const Sidebar = () => {
    const { url, component } = usePage();
    return (
        <ul className="nav">
            <li className={`nav-item ${component === "dashboard" && "active"}`}>
                <Link className="nav-link" href={route("dashboard")}>
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Dashboard</span>
                </Link>
            </li>
            <li className={`nav-item ${component === "Account" && "active"}`}>
                <Link className="nav-link" href={route("account")}>
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Account</span>
                </Link>
            </li>
            {/* <li className="nav-item">
                <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#users"
                    aria-expanded="false"
                    aria-controls="users"
                >
                    <i className="icon-layout menu-icon"></i>
                    <span className="menu-title">Users</span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="users">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                            <a className="nav-link" href={route("about")}>
                                Admin Users
                            </a>
                        </li>
                    </ul>
                </div>
            </li> */}
        </ul>
    );
};

export default Sidebar;
