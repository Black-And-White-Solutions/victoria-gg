import React, {
  VoidFunctionComponent,
  ReactChild,
  ReactNode,
  MouseEventHandler,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import DropdownBar from './Navbar/DropdownBar';
import Footer from './Footer';

type ComponentChilds = {
  children?: ReactChild[] | ReactNode;
};

const Layout: VoidFunctionComponent<ComponentChilds> = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleNavbar: MouseEventHandler = () => {
    setToggle(!toggle);
  };

  return (
    <BrowserRouter>
      <DropdownBar isOpen={toggle} toggle={toggleNavbar} />
      <NavBar toggle={toggleNavbar} />
      {children}
      <Footer />
    </BrowserRouter>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
