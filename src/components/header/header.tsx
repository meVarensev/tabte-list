import { Typography } from '../typography/typography';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Typography>Table with search and sort</Typography>
        </header>
    );
};

export {Header};
