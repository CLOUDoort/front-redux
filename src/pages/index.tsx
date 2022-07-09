import Link from 'next/link'

const Index = () => {
    return (
        <main>
            <Link href='/apple'>
                <a>
                    <p>Go to apple page</p>
                </a>
            </Link>
            <Link href='/banana'>
                <a>
                    <p>Go to banana page</p>
                </a>
            </Link>
            <Link href='/count'>
                <a>
                    <p>Go to count page</p>
                </a>
            </Link>
        </main>
    )
}

export default Index
