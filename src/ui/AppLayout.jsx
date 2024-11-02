import { Outlet, useNavigation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Loader from "./Loader"

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state==="loading"

    return (
        <div className="h-screen">
            {isLoading && <Loader />}
            <Header />
            <main >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout
