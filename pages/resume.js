
import Header from "@components/Header";
import Head from "next/head";
import Navbar from "@components/Navbar";
import { useState } from "react";

export default function Resume(){
    const [display, setDisplay] = useState(false);
    return (
        <div className="container">
            <Head><title>Resume</title>
            </Head>
            <Navbar/>
        <main>
            
        <Header title="Emily Hall" />
        <br/><br/>
      <center><strong>FULL STACK SOFTWARE DEVELOPER </strong> <br/>   
  Analytical and organized software developer with experience designing and developing software solutions that meet business requirements while leveraging emerging technologies and programming languages to ensure high-quality deliverables. Demonstrated ability to learn and navigate multiple information systems and technologies quickly. Dedicated to promoting teamwork, accountability, and continuous improvement of problem-solving skills. A collaborative team player adept at fostering positive relationships and facilitating effective communication to achieve common goals and deliver successful outcomes.</center>< br />
  <p> 
  <center><strong>CORE COMPETENCIES</strong> < br />
  Full Stack Development | Object-Oriented Programming | Test-Driven Development | Technical Troubleshooting
Scrum and Agile methodology |DevOps |  Technical Documentation | Cross-functional Team collaboration</center>
        < br /></p>
        <center><strong>TECHNICAL SUMMARY</strong> <br/>
                </center>
                <strong>Programming Languages:</strong> C#, .Net with MVC, AngularJS, HTML, CSS, JavaScript, Ruby on Rails, React, React Native, Ruby, Python 3, Xamarin <br/>

                <strong>Operating System and DevOps: </strong>Azure DevOps, Ubuntu Linux, Microsoft Windows, IBM Mainframe <br/>
                <strong>Applications and Tools: </strong> Microsoft Office Suite, including Outlook,  Excel, PowerPoint,  Microsoft Teams, Element, Slack, Selenium <br/>       
                <strong>IDEs:</strong> Visual Studio 2019/2022, Visual Studio Code, PyCharm, IntelliJ, Sublime Text, SQLite Studio, Android Studio <br/>
                <strong>Databases:</strong> SQL, MySQL, SQLite, Power BI<br/>
                <strong>Version control and methodologies: </strong> Git and GitHub, APIs,  Scrum and Agile methodology<br/>
      
      <p>
        <center><strong>EXPERIENCE</strong></center> <br/>
  <strong>     PPG Industries, Pittsburgh, PA 			</strong> 				 June 2022 - February 2023<br/>
  Software Engineering Analyst, Partnerships and Innovation<br/>
  <ul> 
    <li>Implemented and administered an Azure DevOps project for the Partnerships and Innovation Center of Excellence following secure best practices, resulting in improved collaboration with internal and vendor partners and successful project delivery.</li>
    <li>
    Developed and coded an end-to-end Proof of Concept project for PDF search based on stakeholder needs, including: <br/>
* Creation of a REST API in Microsoft C# .Net with MSSQL Server database source.<br/>
* Front-end UI development in AngularJS with checkbox and search.
   </li>
  <li>Conducted a thorough evaluation of vendor software to identify the most effective partner solutions for each Business Unit, resulting in streamlined processes and increased efficiency.</li>
  <li>Monitored and created scaling visualizations for a safety pilot found to reduce costs by $250k/yr and Illness & Injury rates by 60%.</li>
  <li>Received PPG Copper Star award for consistently demonstrating exceptional performance aligned with The PPG Way.</li></ul>
  <br/><br/>
  
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
  
  
  <button type="button" class="collapsible" onClick={()=>setDisplay(display => !display)}><h3>Certificates:</h3><span class="hovertext">(Click to Expand/Collapse)</span>
  </button>  <a href="https://www.codewars.com/users/ginskye"><img src="https://www.codewars.com/users/ginskye/badges/large" id="right"/></a>
 <div style={{display: display ? "block" : "none"}}>
  <ul>
    <li>
        <a href="./Certs/IBM_Z_Xplore___Advanced_Badge20230411-28-za40mj.pdf">IBM Z Xplore - Advanced</a>
    </li>
    <li>
        <a href="./Certs/IBM_Z_Xplore___Concepts_Badge20230406-28-1b8bpcc.pdf">IBM Z Xplore - Concepts</a>
    </li>
    <li>
        <a href="./Certs/CertificateOfCompletion_Business Development Foundations Researching Market and Customer Needs.pdf">Business Development Foundations</a>
    </li>
    <li>
        <a href="./Certs/CertificateOfCompletion_Data Visualization Storytelling.pdf">Data Visualization Storytelling</a>
    </li>
    <li>
        <a href="./Certs/CertificateOfCompletion_Excel 2016 Managing and Analyzing Data.pdf">Excel 2016:  Managing and Analyzing Data</a>
    </li>
    <li>
        <a href="./Certs/CertificateOfCompletion_Power BI Essential Training 2020.pdf">Power BI Essential Training</a>
    </li>
    <li>
        <a href="./Certs/CertificateOfCompletion_UX Design for Developers.pdf">UX Design For Developers</a>
    </li>
    <li>
        <a href="./Certs/CertificateOfCompletion_Python Essential Training.pdf">Python Essential Training</a>
    </li>
    <li>
        <a href="./Certs/CertificateOfCompletion_Selenium Essential Training.pdf">Selenium Essential Training</a>
    </li>
    <li>
        <a href="./Certs/CertificateOfCompletion_Using SQL with Python.pdf">Using SQL with Python</a>
    </li>
    <li>
        <a href="./Certs/CertificateOfCompletion_Learning Cloud Computing Cloud Security.pdf">Learning Cloud Computing and Cloud Security</a>

    </li>
    <li>
        <a href="./Certs/CertificateOfCompletion_Designing RESTful APIs.pdf">Designing RESTful APIs</a>
    </li>
  </ul>
  </div>
</main>
</div>
                  
    );
}