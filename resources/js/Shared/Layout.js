import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link, usePage } from "@inertiajs/inertia-react";

const Layout = ({ title, children }) => {
    const { app_name } = usePage().props;
    return (
        <div className="container-scroller">
            {/* navbar start */}
            <Navbar />
            {/* navbar enad */}
            <div className="container-fluid page-body-wrapper">
                {/* sidebar start */}
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <Sidebar />
                </nav>
                {/* sidebar end */}
                <div className="main-panel">
                    {/* content-wrapper starts  */}
                    <div className="content-wrapper">{children}</div>
                    {/* content-wrapper end  */}
                    {/* footer start */}
                    <footer className="footer">
                        <div className="d-flex justify-content-center">
                            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                                Copyright © {new Date().getFullYear()}.{" "}
                                <a href="#" target="_blank">
                                    {app_name}{" "}
                                </a>
                                All rights reserved.
                            </span>
                        </div>
                    </footer>
                    {/* footer end */}
                </div>
            </div>
        </div>
    );
};

export default Layout;
