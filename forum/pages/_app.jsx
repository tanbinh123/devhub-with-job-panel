import React from "react";
import App, { Container as NextContainer} from "next/app";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (ctx.req && ctx.req.session.passport) {
      pageProps.user = ctx.req.session.passport.user;
    }
    return { pageProps };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: props.pageProps.user
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    const props = {
      ...pageProps,
      user: this.state.user,
    };

    return (
<Container>
        <Head>
          <title>devHuß-Wiki</title>
        </Head>
        <Navbar user={this.state.user} />
          <Container>
            <div className="jumbotron" style={{ color: "#33539E", backgroundColor: "#ECF0F1", borderRadius: "7px" }}>
              <Component {...props} />
            </div>
        </Container>
        <Footer />
</Container>

    );
  }
}

export default MyApp;
