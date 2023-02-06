import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to='#'  onClick={(e) => {
                window.location.href = "mailto:gabriel.hazeredo@gmail.com";
                e.preventDefault();
            }}>Contact</Link>
        </li>
        {/* <li>
          <Link to="#0">About us</Link>
        </li>
        <li>
          <Link to="#0">FAQ's</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default FooterNav;