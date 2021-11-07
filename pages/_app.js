import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../components/theme";
import Header from "../components/navigation/header";
import Footer from "../components/footer";
import { useRouter } from "next/router";

import routes from "../components/navigation/routes";
import { frontendURL } from "../utils/constants";

export default function SAPApp(props) {
    const { Component, pageProps } = props;

    const router = useRouter();

    const findRouteObject = () => {
        return routes.find(route => route.href === router.pathname);
    };

    const currentRoute = findRouteObject();

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                {currentRoute ? (
                    <>
                        <title>{currentRoute.name} - SAMAHAN ang Pinas</title>
                        <meta name="description" content={currentRoute.desc} />
                        <meta name="twitter:card" value="summary" />
                        <meta
                            property="og:title"
                            content={currentRoute.title}
                        />
                        {/* <meta name="twitter:image" content={`${cdnURL}/samahan-seo-twitter-default.png`} /> */}
                        <meta property="og:type" content="website" />
                        {/* <meta property="og:image" content={`${cdnURL}/samahan-seo-default.png`} /> */}
                        <meta
                            property="og:url"
                            content={`${frontendURL}${currentRoute.href}`}
                        />
                        <meta
                            property="og:description"
                            content={currentRoute.desc}
                        />
                    </>
                ) : (
                    <>
                        <title>SAMAHAN ang Pinas</title>
                        <meta
                            name="description"
                            content="AdDU's SAMAHAN ang Pinas Initiatives Website"
                        />
                    </>
                )}
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    );
}

SAPApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
