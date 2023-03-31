import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import Navbar from "@components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head><title>Emily Hall, Software Developer</title></Head>
      <Navbar /><br/>
     
      
      
       
      <main>
        <hr/>
        <div class="content">
      <h1>Hello!</h1>
      <br/>
      This is a Portfolio site for Emily Hall, Software Developer, created in Netlify. <br/>
      I'm currently open to work, seeking early career Backend and FrontEnd Development roles.<br/>
      Please check out my Resume and Github to learn more about my sample projects.
   
      </div>
      </main>
      <Footer />
    </div>
  );
}
