import React from "react";
import Layout from "../../Shared/Layout";

const Dashboard = () => {
    return (
        <>
            <div className="container page-container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Dashboard</h3>
                        <hr />
                    </div>
                </div>
                {/* dashboard */}
                <div className="card">
                    <div className="card-body">
                        <span>You are logged in</span>
                    </div>
                </div>
            </div>
        </>
    );
};
Dashboard.layout = (page) => <Layout title="Dashboard" children={page} />;
export default Dashboard;
