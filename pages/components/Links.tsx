import Link from "next/link"

const Links = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Index</Link>
                </li>
                <li>
                    <Link href="/about">about</Link>
                </li>
            </ul>
        </div>
    )
}

export default Links