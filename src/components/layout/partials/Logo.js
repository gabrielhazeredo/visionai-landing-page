import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require('./../../../assets/images/visionai-low-resolution-logo-white-on-transparent-background.png')}
            alt="Open"
            width={120}
            height={40} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;