import {Link} from "react-router-dom";
import {useDescope, useSession} from "@descope/react-sdk"
import {useCallback} from "react";
import Logo from "../assets/logo.png"

export default function Navbar(){

    function showMenu(){
        if(document.querySelector(".drop-down-items").style.display === "flex"){
            document.querySelector(".drop-down-items").style.display = "none";
        }else{
            document.querySelector(".drop-down-items").style.display = "flex";
        }
    }
    function closeMenu(){
        document.querySelector(".drop-down-items").style.display = "none";
    }

    const {isAuthenticated} = useSession();
    const { logout } = useDescope()
    const handleLogout = useCallback(() => {
        logout()
    }, [logout])

    if(isAuthenticated){
        return(
            <>
                <nav className={"navbar fixed-top bg-light-shadow-transparent-gradient-shadow"}>
                    <ul className={"navbar-nav"}>
                        <li className={"nav-logo"}>
                            <Link to={"/"}>
                                <img src={Logo} style={{height: "30px", width: "40px"}} alt="logo"/>
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/" className={"nav-link"}>About</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/" className={"nav-link"}>Courses</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/" className={"nav-link"}>Contact</Link>
                        </li>
                    </ul>
                    <ul className={"navbar-nav"}>
                        <li className={"drop-down"}>
                            <button className={"btn btn-primary"} onClick={showMenu}>Menu</button>
                            <div className={"drop-down-items fadeInRight"}>
                                <ul>
                                    <button className={"btn btn-danger"} onClick={closeMenu}>X</button>
                                    <li className={"drop-down-item"}>
                                        <Link to={"/"}>link</Link>
                                    </li>
                                    <li className={"drop-down-item"}>
                                        <Link to={"/"}>link</Link>
                                    </li>
                                    <li className={"drop-down-item"}>
                                        <Link to={"/"}>link</Link>
                                    </li>
                                    <li className={"drop-down-item"}>
                                        <Link to={"/"}>link</Link>
                                    </li>
                                    <hr className={"my-2"}/>
                                    <li className={"drop-down-item"}>
                                        <button className={"btn btn-danger"} onClick={handleLogout}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/login" className={"nav-link"}>Profile</Link>
                        </li>
                        <li className={"nav-item"}>
                            <button onClick={handleLogout} className={"btn btn-primary"}>Logout</button>
                        </li>
                    </ul>
                </nav>
            </>
        )
    } else {
        return (
            <>
                <nav className={"navbar fixed-top bg-light-shadow-transparent-gradient-shadow"}>
                    <ul className={"navbar-nav"}>
                        <li className={"nav-logo"}>
                            <Link to={"/"}>
                                <img src={Logo} style={{height: "30px", width: "40px"}} alt="logo"/>
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/" className={"nav-link"}>About</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/" className={"nav-link"}>Courses</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/" className={"nav-link"}>Contact</Link>
                        </li>
                    </ul>
                    <ul className={"navbar-nav"}>
                        <li className={"drop-down"}>
                            <button className={"btn btn-primary"} onClick={showMenu}>Menu</button>
                            <div className={"drop-down-items fadeInRight"}>
                                <ul>
                                    <button className={"btn btn-danger"} onClick={closeMenu}>X</button>
                                    <li className={"drop-down-item"}>
                                        <Link to={"/"}>link</Link>
                                    </li>
                                    <li className={"drop-down-item"}>
                                        <Link to={"/"}>link</Link>
                                    </li>
                                    <li className={"drop-down-item"}>
                                        <Link to={"/"}>link</Link>
                                    </li>
                                    <li className={"drop-down-item"}>
                                        <Link to={"/"}>link</Link>
                                    </li>
                                    <hr className={"my-2"}/>
                                    <li className={"drop-down-item"}>
                                        <Link to={"/login"}>Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={"nav-item"}>
                        <Link to="/login" className={"nav-link"}>Login</Link>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}