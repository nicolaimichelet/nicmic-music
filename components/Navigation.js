import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
    const router = useRouter()

    const CustomLink = ({ href, children }) => {
        const isActive = router.pathname === href
        const className = isActive ? 'active' : ''

        return (
            <Link className={className} href={href}>
                {children}
            </Link>
        )
    }

    return (
        <nav>
            <ul className="flex text-xl justify-evenly w-[348px] ">
                <li>
                    <CustomLink href="/">Home</CustomLink>
                </li>
                <li>
                    <CustomLink href="/about">About</CustomLink>
                </li>
                <li>
                    <CustomLink href="/events">Events</CustomLink>
                </li>
            </ul>
        </nav>
    )
}
