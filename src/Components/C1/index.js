import React from 'react';
import classNames from 'classnames/bind';
import styles from './C1.module.css';
const cx = classNames.bind(styles);

const C1 = () => {
  return <h1 className={cx('heading')}>Heading</h1>;
};

export default C1;
