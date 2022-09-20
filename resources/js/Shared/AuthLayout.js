import React from "react";
import { usePage } from "@inertiajs/inertia-react";

const AuthLayout = ({ title, children }) => {
    const { app_name } = usePage().props;
    return (
        <div className="container-xxl">
            <div
                className="authentication-wrapper authentication-basic container-p-y"
                style={{
                    backgroundColor: "#f7fafc",
                }}
            >
                <div className="authentication-inner">
                    <div className="card border">
                        <div className="card-body">
                            <div className="app-brand d-flex justify-content-center">
                                <a
                                    href="{{ url('/') }}"
                                    className="app-brand-link gap-2 text-decoration-none"
                                >
                                    <span className="app-brand-text demo text-body fs-18 fw-bolder">
                                        {app_name}
                                    </span>
                                </a>
                            </div>
                            {/* main content start */}
                            {children}
                            {/* main content end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
