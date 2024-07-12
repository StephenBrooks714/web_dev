import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className={"footer-bg"}>
                <div className={"container py-2"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-lg-8"}>
                            <h5 className={"h5 mb-1"}>Company Name</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur blanditiis cupiditate dignissimos error ex explicabo facere fuga, id inventore laboriosam placeat possimus repellat voluptate voluptates. Et iure minima voluptates!
                            </p>
                        </div>
                        <div className={"col-lg-2"}>
                            <h5 className={"h5 mb-1"}>Links</h5>
                            <ul>
                                <li>
                                    <Link to={"/"} className={"nav-link"}>Home Page</Link>
                                </li>
                                <li>
                                    <Link to={"/"} className={"nav-link"}>About Us</Link>
                                </li>
                                <li>
                                    <Link to={"/"} className={"nav-link"}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={"col-lg-2"}>
                            <h5 className={"h5 mb-1"}>Links</h5>
                            <ul>
                                <li>
                                    <Link to={"/"} className={"nav-link"}>Accounts</Link>
                                </li>
                                <li>
                                    <Link to={"/"} className={"nav-link"}>Courses</Link>
                                </li>
                                <li>
                                    <Link to={"/"} className={"nav-link"}>Support</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <p className={"text-center mt-1"}>Copyright © 2022. All rights reserved.</p>
            </footer>
        </>
    );
}