//import { useRouter } from "next/router";
import styles from './navbar.module.css'
import Link from "next/link";

export default function Navbar() {
//const router = useRouter()

    return (
        <navbar classname={styles.navbar} >
        <Link href="/"><a>Home</a></Link>           <Link href="/resume">Resume</Link>
        
        </navbar>
    );
}