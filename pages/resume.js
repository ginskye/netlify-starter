import Link from "next/link";
import Header from "@components/Header";
import Head from "next/head";
import Navbar from "@components/Navbar";

export default function Resume(){
    return (
        <div className="container">
            <Head><title>Resume</title></Head>
        <main>
            <Navbar/>
        <Header title="Emily Hall" />
        <br/><br/>
      <center><strong>FULL STACK SOFTWARE DEVELOPER </strong> <br/>
  Analytical and organized professional and developer with outstanding attention to detail and excellent communication skills.   Proven ability to quickly learn and navigate multiple informational systems and technologies.  Committed to teamwork, accountability and continuous improvement and refinement of problem-solving skills. </center>< br />
  <p> 
  <center><strong>TECHNOLOGIES AND CONCEPTS:</strong> < br />
        C# | Ruby | SQL | MySQL | HTML | CSS | Javascript | Ruby on Rails | .Net with MVC | React and React Native | AngularJS | Android Studio | Python 3 | Selenium | Xamarin | Microsoft Office Suite - Outlook,  Excel, PowerPoint, Teams | Power BI | Azure DevOps | Ubuntu Linux | Element | Slack | IBM Z Mainframe | Object Oriented Programming |  Test Driven Development | Version Control (Git and Github) | APIs | Scrum and Agile methodology | IDEs including Visual Studio, Visual Studio Code, IntelliJ, SublimeText, SQLite Studio, PyCharm
        </center>
        < br /></p>
      
      <p>
        <center><strong>EXPERIENCE</strong></center> <br/>
        PPG Industries, Pittsburgh, PA 							JUNE 2022 - FEBRUARY 2023<br/>
  Software Engineering Analyst, Partnerships and Innovation<br/>
  <ul>
  <li>Identified and coordinated external partnership opportunities across multiple Business Units, providing up to $4 MIL in potential savings as part of a team.</li>
  <li>Evaluated vendor software, developed early stage Proof of Concept projects, and implemented an Azure DevOps project for the Partnerships and Innovation Center of Excellence.</li>
  <li>Awarded the PPG Copper Star by a colleague for my performance demonstrating The PPG Way.</li></ul><br/><br/>
  
  <strong>Natural Stitches, Pittsburgh, PA </strong>            								2012 - 2016<br/>
  Associate and Knitting Instructor<br/>
  <ul>
  <li>Managed inventory via QuickBooks POS. </li><br/>
  <li>Counseled patrons in pairing colors and materials selection, and taught detailed instruction and troubleshooting in knitting.</li><br/><br/>
  </ul>
  <strong>Vanilla Pastry Studio, Pittsburgh, PA				</strong>				2010 - 2016<br/>
  <strong>Associate and Barista</strong><br/>
  <ul>
  <li>Provided exemplary customer service to patrons to ensure that their customer experience resulted in repeat business to associates.</li></ul><br/><br/>
  
  <strong>UPMC Presbyterian, Liver Cancer Center & Starzl Transplantation Institute, Pittsburgh, PA             2008 - 2010</strong><br/>
  Data Coordinator<br/>
  <ul>
  <li>This fast-paced, high pressure environment required a great deal of multitasking, and the ability to critically evaluate various forms of patient data for optimal database integrity.</li><br/>
  <li>Quickly and efficiently procured and processed patient data from disparate systems, while maintaining confidentiality procedures.<br/></li></ul>
  </p>
  <center><h3>EDUCATION</h3>
  <strong>Diploma, Full Stack Software Development Bootcamp, 2021</strong><br />
  Academy Pittsburgh, Pittsburgh, PA <br />
  <strong>Bachelor of Arts (BA), English Literature</strong><br />
  University of Pittsburgh, Pittsburgh, PA  <br /></center>
  
</main>
</div>
                  
    );
}