import styles from '../../styles/Home.module.css'

type HeaderProps = {
    page: string
}

const Header = (props: HeaderProps) => {
    return (
        <div>
            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">{props.page}.js</a>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/{props.page}.tsx</code>
                <span className="font-bold underline">太文字になる</span>
            </p>
        </div>
    )
}

export default Header;