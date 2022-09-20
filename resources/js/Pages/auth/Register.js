import React from "react";
import AuthLayout from "../../Shared/AuthLayout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";

const Register = () => {
    const { app_name } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    // handle form submit
    function handleSubmit(e) {
        e.preventDefault();
        post("/register");
    }
    return (
        <section className="">
            <h4 className="mb-2">Welcome to {app_name}! 👋</h4>
            <p className="mb-4">Please create your account</p>

            <form
                id="formAuthentication"
                className="mb-3"
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${
                            errors.name && "is-invalid"
                        }`}
                        id="name"
                        placeholder="Enter your name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        autoFocus
                    />
                    {errors.name && (
                        <span className="invalid-feedback" role="alert">
                            <strong>{errors.name}</strong>
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className={`form-control ${
                            errors.email && "is-invalid"
                        }`}
                        id="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && (
                        <span className="invalid-feedback" role="alert">
                            <strong>{errors.email}</strong>
                        </span>
                    )}
                </div>
                <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className="input-group input-group-merge">
                        <input
                            type="password"
                            id="password"
                            className={`form-control ${
                                errors.password && "is-invalid"
                            }`}
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {errors.password && (
                            <span className="invalid-feedback" role="alert">
                                <strong>{errors.password}</strong>
                            </span>
                        )}
                    </div>
                </div>
                <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                        <label
                            className="form-label"
                            htmlFor="password_confirmation"
                        >
                            Confirm Password
                        </label>
                    </div>
                    <div className="input-group input-group-merge">
                        <input
                            type="password"
                            id="password_confirmation"
                            className="form-control"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <button
                        className="btn btn-primary d-grid w-100"
                        type="submit"
                        disabled={processing}
                    >
                        Register
                    </button>
                </div>
            </form>
            <p className="text-center">
                <span>Already have an account?</span>
                <Link href={route("login")} className="px-1">
                    <span>Login</span>
                </Link>
            </p>
        </section>
    );
};

Register.layout = (page) => <AuthLayout title="Register" children={page} />;
export default Register;
