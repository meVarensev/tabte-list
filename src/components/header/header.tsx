import { Typography } from '../../shared/ui-kit/typography/typography';
import styles from './header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <Typography>Table with search and sort</Typography>
        </header>
    );
}

export {Header};
