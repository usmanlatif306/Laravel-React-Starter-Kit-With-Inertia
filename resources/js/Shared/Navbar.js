import React from "react";
import { usePage, Link } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";

const Navbar = () => {
    const { logo, logo_mini, user } = usePage().props;
    return (
        <>
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <a className="navbar-brand brand-logo mr-5" href="#">
                        <img src={logo} className="mr-2" alt="logo" />
                    </a>
                    <a className="navbar-brand brand-logo-mini" href="#">
                        <img src={logo_mini} alt="logo" />
                    </a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <button
                        className="navbar-toggler navbar-toggler align-self-center"
                        type="button"
                        data-toggle="minimize"
                    >
                        <span className="icon-menu"></span>
                    </button>

                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-profile dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                data-toggle="dropdown"
                                id="profileDropdown"
                            >
                                <img
                                    src={user.profile_image}
                                    alt="profile image"
                                />
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                                aria-labelledby="profileDropdown"
                            >
                                <Link
                                    href={route("account")}
                                    className="dropdown-item"
                                >
                                    <i className="ti-settings text-primary"></i>
                                    My Account
                                </Link>
                                <Link
                                    className="dropdown-item"
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    type="button"
                                >
                                    <i className="ti-power-off text-primary"></i>
                                    Logout
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <button
                        className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                        type="button"
                        data-toggle="offcanvas"
                    >
                        <span className="icon-menu"></span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
