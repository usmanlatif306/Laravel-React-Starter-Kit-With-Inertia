import React from "react";
import AuthLayout from "../../Shared/AuthLayout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";

const Login = () => {
    const { app_name } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    // handle form submit
    function handleSubmit(e) {
        e.preventDefault();
        post("/login");
    }
    return (
        <section className="">
            <h4 className="mb-2">Welcome to {app_name}! 👋</h4>
            <p className="mb-4">Please sign-in to your account</p>

            <form
                id="formAuthentication"
                className="mb-3"
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        className={`form-control ${
                            errors.email && "is-invalid"
                        }`}
                        id="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        autoFocus
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
                        <Link href={route("password.request")}>
                            <small>Forgot Password?</small>
                        </Link>
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
                <div className="mb-3 pl-3">
                    <div className="form-check pl-1">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember-me"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <label
                            className="form-check-label ml-0 ml-1"
                            htmlFor="remember-me"
                        >
                            Remember Me
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <button
                        className="btn btn-primary d-grid w-100"
                        type="submit"
                        disabled={processing}
                    >
                        Sign in
                    </button>
                </div>
            </form>
            <p className="text-center">
                <span>New on our platform?</span>
                <Link href={route("register")} className="px-1">
                    <span>Create an account</span>
                </Link>
            </p>
        </section>
    );
};

Login.layout = (page) => <AuthLayout title="Login" children={page} />;
export default Login;
