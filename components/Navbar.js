//import { useRouter } from "next/router";
import styles from './navbar.module.css'
import Link from "next/link";

export default function Navbar() {
//const router = useRouter()

    return (
        <navbar class="navbar" >
       
        <Link href="/"><a>Home</a></Link> 
        <span class="navspace"></span>
        <Link href="/resume">Resume</Link>
        <span class="navspace"></span>
        <Link href="/contact">Contact</Link>
        </navbar>
    );
}