import React from "react";
import AuthLayout from "../../Shared/AuthLayout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";

const ResetPassword = ({ token, email }) => {
    const { flash } = usePage().props;
    const { post, processing } = useForm();

    // handle form submit
    function handleSubmit(e) {
        e.preventDefault();
        post("/email/resend");
    }
    return (
        <section className="">
            <h4 className="mb-2">Verify Your Email Address</h4>
            <p className="mb-4">
                Before proceeding, please check your email for a verification
                link.
            </p>
            {flash.resent && (
                <div className="alert alert-success" role="alert">
                    A fresh verification link has been sent to your email
                    address.
                </div>
            )}
            <span className="d-block mb-2">
                If you did not receive the email
            </span>
            <form
                id="formAuthentication"
                className="mb-3"
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <button
                        className="btn btn-primary d-grid w-100"
                        type="submit"
                        disabled={processing}
                    >
                        Click here to request another
                    </button>
                </div>
            </form>
        </section>
    );
};

ResetPassword.layout = (page) => (
    <AuthLayout title="Reset Password" children={page} />
);
export default ResetPassword;
