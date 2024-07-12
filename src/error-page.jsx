import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div className={"container"}>
                <div className={"row justify-content-center text-center align-items-center"} style={{height: "100vh"}}>
                    <div className={"col-lg-8"}>
                        <div id="error-page">
                            <h1 className={"display-4 fw-bold"}>Oops!</h1>
                            <p>Sorry, an unexpected error has occurred.</p>
                            <p>
                                <i>{error.statusText || error.message}</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}