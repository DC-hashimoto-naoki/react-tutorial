import { ReactNode } from 'react';
import styles from '../../styles/Home.module.css'

type HeaderProps = {
    page?: string,
    component? : JSX.Element,
    onclick? : object,
    children: ReactNode
}

const Header = (props: HeaderProps) => {
    console.log(props);
    return (
        <div>
            <h1 className={styles.title}>
                {props.component}
                Welcome to <a href="https://nextjs.org">{props.page}.js</a>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/{props.page}.tsx</code>
                <span className="font-bold underline">太文字になる</span>
            </p>
            <button className='text-orange-500' onClick={props.onclick}>ボタン</button>
        </div>
    )
}

export default Header;