import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/" legacyBehavior>
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
                <a className={router.pathname === "/about" ? "active" : ""}>
                    About
                </a>
            </Link>
            <style jsx>{`
                nav {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                }
                .active {
                    color: tomato;
                }
            `}</style>
        </nav>
    );
}
