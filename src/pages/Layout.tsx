import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "../components/NavBar";
import Footer from "../components/Footer";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StyleContext from "../contexts/StyleContext";

const Layout = () => {

    return (
        <StyleContext>

            <div style={{width: '100%'}}>
                <CssBaseline />

                <ResponsiveAppBar></ResponsiveAppBar>

                <Outlet />

                <Footer></Footer>

            </div>

        </StyleContext>
    )
};



export default Layout;