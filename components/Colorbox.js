//import { useRouter } from "next/router";
import styles from './Colorbox.module.css';


export default function Colorbox() {


    return (
    <>
        <colorbox classname={styles.colorbox}>
           This colorbox item does not display properly.
        </colorbox>
        </>
    );
}