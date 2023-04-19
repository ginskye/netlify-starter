//import { useRouter } from "next/router";
import { Component } from 'react';
import styles from './Colorbox.module.css';




export default function Colorbox() {


    return (
        <>    
   
    
    
    
        <colorbox classname={styles.colorbox}>
           <div class="boxColor"></div>
        </colorbox>
        </>
    );
}
/*  */
/*  class Colorbox{ */
/* constructor(props) { */
/*     super(props); */
/*  */
/*     this.state = { */
/*         colorbg: "rgb (0,0,0)" */
/*     } */
/* } */
/*  */
/* colorChange = ()=> { */
/*     var newCol = Math.floor(Math.random()* 16777215).to_hex; */
/*     this.setState({ */
/*         colorbg: "#"+newCol */
/*     }); */
/* } */
/*  */
/*     render() { return ( */
/*        <div className='colorbox' style={{background: this.state.colorbg}} */
/*        onMouseEnter={this.colorChange}></div> */
/*         */
/*     );}} */
/*  */
/*     export default Colorbox */