import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Emily Hall</title>
        
      </Head>

      <main>
        <p className="description">
        <strong>FULL STACK SOFTWARE DEVELOPER</strong> <br />
Analytical and organized professional and developer with outstanding attention to detail and excellent communication skills.   Proven ability to quickly learn and navigate multiple informational systems and technologies.  Committed to teamwork, accountability and continuous improvement and refinement of problem-solving skills.

        </p>
        
      {/*   <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
        </p>
        <FeedbackForm />
        <JokeBlock /> */}
      </main>
      <Footer />
    </div>
  );
}
