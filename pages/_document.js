/* eslint-disable react/jsx-filename-extension */
import React from "react";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Main, Head, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class SAPDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&family=Rakkas&family=Squada+One&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="icon"
                        type="img/png"
                        href="/assets/sap_thumb_logo.png"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
SAPDocument.getInitialProps = async ctx => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ],
    };
};
