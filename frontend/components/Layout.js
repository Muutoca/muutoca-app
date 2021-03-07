import Head from 'next/head';
import Link from 'next/link';
import { Container, Nav, NavItem } from 'reactstrap';

const Layout = (props) => {
  const title = 'Welcome to Muutoca';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <header>
        <Nav className="navbar navbar-purple navbar-dark">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Muutoca</a>
            </Link>
          </NavItem>

          <NavItem className="ml-auto">
            <Link href="/register">
              <a className="nav-link">Register</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/login">
              <a className="nav-link">login</a>
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
