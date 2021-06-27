import classNames from 'classnames/bind';
import styles from './C2.module.css';
const cx = classNames.bind(styles);

const C2 = () => {
  return <h1 className={cx('heading')}>Heading</h1>;
};

export default C2;
