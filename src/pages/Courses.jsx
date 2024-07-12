import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <main className={"container my-5 py-5"}>
                <section className={"row"}>
                    <div className={"col-lg-6"}>
                        <h1 className={"h1"}>Courses</h1>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
