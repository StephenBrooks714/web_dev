import { useCallback } from 'react'
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';
import Navbar from "../layouts/Navbar"

const Login = () => {
    const { isAuthenticated, isSessionLoading } = useSession()
    const { user, isUserLoading } = useUser()
    const { logout } = useDescope()

    const exampleFetchCall = async () => {
        const sessionToken = getSessionToken();

        // example fetch call with authentication header
        fetch('your_application_server_url', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + sessionToken,
            }
        })
    }

    const handleLogout = useCallback(() => {
        logout()
    }, [logout])

    return <>
        <Navbar/>
        <section className={"container my-5 py-2"}>
            <div className={"row justify-content-center"}>
                    {!isAuthenticated &&
                        (
                            <div className={"col-lg-8"}>
                                <Descope
                                    flowId="sign-up-or-in"
                                    onSuccess={(e) => console.log(e.detail.user)}
                                    onError={(e) => console.log('Could not log in!')}
                                />
                            </div>
                        )
                    }

                    {
                        (isSessionLoading || isUserLoading) &&
                        <div className={"text-center"} style={{marginTop: "90px"}}>
                            <img src={"https://thumbs.dreamstime.com/b/content-loading-bar-concept-hand-drawing-marker-transparent-wipe-board-93552432.jpg"}
                                 className={"img-fluid"}
                                 alt="loading"/>
                        </div>
                    }

                    {!isUserLoading && isAuthenticated &&
                        (
                            <>
                                <div className={"row"}>
                                    <div className={"col-6 mb-4"}>
                                        <h1 className={"h3"}>Hello {user.name}</h1>
                                    </div>
                                    <div className={"col-6 mb-4 text-end"}>
                                        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                                    </div>
                                    <div className={"col-lg-12 text-center"}>
                                        <h2 className={"mb-2"}>My Current & Completed Courses</h2>
                                        <div className={"row text-center"}>
                                            <div className={"col-lg-4"}>
                                                <h3>Front End</h3>
                                                <p>
                                                    Html, Css, JavaScript, React.js
                                                </p>
                                            </div>
                                            <div className={"col-lg-4"}>
                                                <h3>Figma</h3>
                                                <p>
                                                    Created and shared design url
                                                </p>
                                            </div>
                                            <div className={"col-lg-4"}>
                                                <h3>Back End</h3>
                                                <p>
                                                    Node.js, Express.js, MongoDB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
            </div>
        </section>
    </>;
}

export default Login;
