import React from "react";
import AuthLayout from "../../Shared/AuthLayout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";

const Email = () => {
    const { app_name, flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    // handle form submit
    function handleSubmit(e) {
        e.preventDefault();
        post("/password/email");
    }
    return (
        <section className="">
            <h4 className="mb-2">Welcome to {app_name}! 👋</h4>
            <p className="mb-4">
                Please enter your email to send reset password link
            </p>
            {flash.status && (
                <div class="alert alert-success" role="alert">
                    {flash.status}
                </div>
            )}
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
                <div className="mb-3">
                    <button
                        className="btn btn-primary d-grid w-100"
                        type="submit"
                        disabled={processing}
                    >
                        Send Password Reset Link
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

Email.layout = (page) => <AuthLayout title="Password Reset" children={page} />;
export default Email;
