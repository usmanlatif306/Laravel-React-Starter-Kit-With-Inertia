import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import Layout from "../../Shared/Layout";

const Account = () => {
    const ImageRef = useRef("");
    const { user, flash } = usePage().props;
    const { data, setData, post, processing, errors, progress } = useForm({
        name: user.name,
        email: user.email,
        password: "",
        password_confirmation: "",
        image: "",
    });
    // profile image
    function handleProfileImage(e) {
        e.preventDefault();
        post(route("account.image"));
        ImageRef.current.value = "";
    }

    // user details form
    function handleUserDetails(e) {
        e.preventDefault();
        post(route("account.profile"));
    }

    return (
        <>
            <div className="container page-container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Account</h3>
                        <hr />
                    </div>
                    {flash.success && (
                        <div
                            className="col-12 alert alert-success"
                            role="alert"
                        >
                            {flash.success}
                        </div>
                    )}
                    {/* profile image */}
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Profile Image</div>
                            <div className="card-body">
                                <div className="w-50 mx-auto mb-3">
                                    <img
                                        src={user.profile_image}
                                        alt="User Image"
                                        className="rounded img-fluid"
                                    />
                                </div>
                                <form onSubmit={handleProfileImage}>
                                    <div className="form-group">
                                        <label htmlFor="profile">
                                            Profile Image
                                        </label>
                                        <input
                                            id="profile"
                                            className="form-control"
                                            type="file"
                                            ref={ImageRef}
                                            onChange={(e) =>
                                                setData(
                                                    "image",
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                        {errors.image && (
                                            <span
                                                className="d-block  invalid-feedback"
                                                role="alert"
                                            >
                                                <strong>{errors.image}</strong>
                                            </span>
                                        )}
                                    </div>
                                    {progress && (
                                        <div
                                            className="progress mb-3"
                                            style={{
                                                height: "15px",
                                            }}
                                        >
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                    width: `${progress.percentage}%`,
                                                }}
                                                aria-valuenow={
                                                    progress.percentage
                                                }
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {progress.percentage}%
                                            </div>
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={processing}
                                    >
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* profile image end */}

                    {/* user details start */}
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header"> User Details</div>
                            <div className="card-body">
                                <form onSubmit={handleUserDetails}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            className={`form-control ${
                                                errors.name && "is-invalid"
                                            }`}
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            placeholder="Name"
                                        />
                                        {errors.name && (
                                            <span
                                                className="invalid-feedback"
                                                role="alert"
                                            >
                                                <strong>{errors.name}</strong>
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className={`form-control ${
                                                errors.email && "is-invalid"
                                            }`}
                                            id="email"
                                            placeholder="Enter your email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        {errors.email && (
                                            <span
                                                className="invalid-feedback"
                                                role="alert"
                                            >
                                                <strong>{errors.email}</strong>
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            className={`form-control ${
                                                errors.password && "is-invalid"
                                            }`}
                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.password && (
                                            <span
                                                className="invalid-feedback"
                                                role="alert"
                                            >
                                                <strong>
                                                    {errors.password}
                                                </strong>
                                            </span>
                                        )}
                                        <small className="text-info">
                                            Don't write in field if you want old
                                            password
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password_confirmation">
                                            Password Confirmation
                                        </label>
                                        <input
                                            id="password_confirmation"
                                            className="form-control"
                                            type="password"
                                            name="password_confirmation"
                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            value={data.password_confirmation}
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={processing}
                                    >
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* user details end*/}
                </div>
            </div>
        </>
    );
};
Account.layout = (page) => <Layout title="Account" children={page} />;
export default Account;
