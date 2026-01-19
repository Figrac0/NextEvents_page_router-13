// components/layout/layout.js
import { Fragment } from "react";
import MainHeader from "./main-header";
import Footer from "./footer";

function Layout(props) {
    return (
        <Fragment>
            <MainHeader />
            <main
                style={{ marginTop: "80px", minHeight: "calc(100vh - 160px)" }}>
                <div className="container">{props.children}</div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Layout;
