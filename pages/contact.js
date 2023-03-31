import Header from "@components/Header";
import Head from "next/head";
import Navbar from "@components/Navbar";
import FeedbackForm from "@components/FeedbackForm";
export default function Contact(){
    return(
<div className="container">
            <Head><title>Contact Me</title>
            </Head>
            <Navbar/>
        <main>
            <hr/>
            
            <Header title={"Emily Hall, Software Developer"}/>
            <hr/>
            <h3>Curious about something?  Send me some feedback!</h3>
        <FeedbackForm />
       </main>
       </div>
    );

}
