import '../styles/about.css';
// import carletonLogo from '../images/carletonlogo.png';
import carletonLogo2 from '../images/carletonlogo2.png';

const About = () => {
    return ( 
        <div className="aboutme">

            <p className='aboutMeTitle'>About Me</p>
            <hr style={{'color': 'white', 'marginTop': '-1%', 'marginBottom': '3%'}} />

            <nav class="nav nav-pills flex-column flex-sm-row">
                <button class="flex-sm-fill fs-4 text-sm-center nav-link active" data-bs-toggle="tab" data-bs-target="#quicksummary-tab-pane" type="button" role="tab" aria-controls="quicksummary-tab-pane" aria-selected="true">Quick Summary</button>
                <button class="flex-sm-fill fs-4 text-sm-center nav-link" data-bs-toggle="tab" data-bs-target="#education-tab-pane" type="button" role="tab" aria-controls="education-tab-pane" aria-selected="true">Education</button>
                <button class="flex-sm-fill fs-4 text-sm-center nav-link" data-bs-toggle="tab" data-bs-target="#skills-tab-pane" type="button" role="tab" aria-controls="skills-tab-pane" aria-selected="true">Skills</button>
                <button class="flex-sm-fill fs-4 text-sm-center nav-link" data-bs-toggle="tab" data-bs-target="#projects-tab-pane" type="button" role="tab" aria-controls="projects-tab-pane" aria-selected="true">Projects</button>
                <button class="flex-sm-fill fs-4 text-sm-center nav-link" data-bs-toggle="tab" data-bs-target="#experience-tab-pane" type="button" role="tab" aria-controls="experience-tab-pane" aria-selected="true">Experience</button>
            </nav>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active align-contents-center" id="quicksummary-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <hr />
                    <strong className='d-flex justify-content-center'>Welcome</strong>
                    <hr />

                    Osarentinmwen Iyamu graduated Carleton University with a Software Engineering degree in November of 2024. He is an individual with lots of passion. Dive into his different life areas to find out more about him. <br /><br />Remember to have fun doing it.

                    <hr />
                </div>
                <div class="tab-pane fade education" id="education-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <hr />
                    <div className="education">
                        <div>
                            <img className='carletonLogo' src={carletonLogo2} alt="carletonLogo" />
                        </div>
                        <div className="details">
                            <strong>Degree: </strong>Bachelor of Software Engineering <br></br>
                            <strong>School & Location: </strong>Carleton University, Ottawa, ON <br></br>
                            <strong>Years Active: </strong>September 2019 – August 2024 <br></br>
                        </div>
                    </div> 
                    <hr />
                </div>
                <div class="tab-pane fade" id="skills-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                    <hr />
                    <strong className='d-flex justify-content-center'>School Related</strong>
                    <hr />
                    <strong>Programming Languages:</strong> Python, Java, C, Assembly, JavaScript, HTML, CSS, TypeScript <br></br>
                    <strong>Frameworks & Libraries:</strong> React, Swingboot <br></br>
                    <strong>Testing & CI/CD Tools:</strong> Selenium, TestCafe, JMeter, K6, TestRunner, GitHub Actions, Azure <br></br>
                    <strong>Project Management:</strong> Jira, GitHub Kanban, Confluence, BitBucket, SourceTree <br></br>
                    <strong>Automation Tools:</strong> Docker, AWS, IntelliJ, TortoiseGit <br></br>

                    <hr />
                    <strong className='d-flex justify-content-center'>For fun</strong>
                    <hr />
                    <strong>Music: </strong> 3 strong instruments - keyboard, drum, and saxophone, learning others like bass guitar, clarinet, etc <br />
                    <strong>Photography: </strong> Beginner Level - still learning and improving <br />
                    <strong>Sports: </strong> Track and Field
                </div>
                <div class="tab-pane fade" id="projects-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                    <hr />
                    <strong>ArtConnect</strong>
                    <strong className="date">June 2024 – July 2024</strong> <br></br>
                    <i><strong>Languages and tools: </strong>Javascript, HTML, CSS, Github, React, Figma </i><br />
                    <strong>Website: </strong> <a href="https://github.com/osasiyamu/artconnect">GitHub Repo</a><br></br>
                    <br />
                    - Developed a mockup for an art application that empowers users to express their creativity, draw inspiration from artists, and foster community engagement. <br></br>
                    - Gained experience in building applications with a user-centered UI design approach. <br></br>
                    - Deepened my understanding of how each element on the application interface impacts the overall user experience. <br></br>
                    - Expanded my proficiency in development tools such as React, and design tools like Figma. <br></br>
                    
                    <br />
                    <hr />

                    <strong>IceCuts</strong>
                    <strong className="date">May 2024 – June 2024</strong> <br></br>
                    <i><strong>Languages and tools: </strong>Javascript, HTML, CSS, Github, Figma </i><br />
                    <strong>Website: </strong> <a href="https://github.com/osasiyamu/IceCuts">GitHub Repo</a><br></br>
                    <br />
                    - Developed a mockup for an salon application that eases the typical process of getting a haircut. <br></br>
                    - Kickstarted my knowledge in building applications that promote a smooth user experience. <br></br>
                    - Gained a basic understanding of how each element on the application interface impacts the overall user experience. <br></br>
                    - Expanded my proficiency in development tools such as React, and design tools like Figma. <br></br>
                    
                    <br />
                    <hr />

                    <strong>SearchMeUp</strong>
                    <strong className="date">September 2023 – May 2024</strong> <br></br>
                    <i><strong>Languages and tools: </strong>Javascript, HTML, CSS, Jira, AWS, Github, React, Selenium </i><br />
                    <strong>Website: </strong> <a href="https://github.com/osasiyamu/Personal-Portfolio.git">GitHub Repo</a><br></br>
                    <br />
                    - Built a web application enabling users to create personalized portfolios. <br></br>
                    - Implemented automated testing using Selenium WebDriver.<br></br>
                    - Followed Agile methodologies to optimize the SDLC.<br></br>
                    - Managed tasks and collaboration with Jira.<br></br>
                    
                    <br />
                    <hr />

                    <strong>Survey-Monkey Clone</strong>
                    <strong className="date">September 2023 – December 2023</strong><br></br>
                    <i><strong>Languages and tools: </strong>IntelliJ, Java, Swingboot, Docker, Azure </i><br />
                    <strong>Website: </strong> <a href="https://github.com/charles-55/Mini-SurveyMonkey.git">GitHub Repo</a><br></br>
                    <br />
                    - Developed a survey app clone, focusing on CI/CD processes.<br></br>
                    - Integrated GitHub Actions and Azure for continuous integration and deployment.<br></br>
                    - Managed project workflow using GitHub Kanban.<br></br>
                    
                    <br />
                    <hr />

                    <strong>UNOFlip-clone Application (School Project)</strong>
                    <strong className="date">September 2023 – December 2023</strong><br></br>
                    <i><strong>Languages and tools: </strong>Java, Swing, jUnit5, IntelliJ IDEA</i><br />
                    <strong>Website: </strong><a href="#">GitHub Repo</a><br></br>
                    <br />

                    - Created a UNO Flip clone application utilizing object-oriented programming (OOP) principles. <br></br>
                    - Evolved the project from a terminal-based simulation to a graphical user interface (GUI) simulation. <br></br>
                    - Conducted thorough testing and debugging using the jUnit4 framework and IntelliJ IDEA's local debugging tool. <br></br>
                    - Applied the Java Event Model and MVC pattern to ensure proper class decoupling. <br></br>
                    - Integrated Serialization to restore the game’s saved state. <br></br>
                    - Organized and maintained the project structure with Maven. <br></br>

                    <br />
                    <hr />

                    <strong>Elevator Control System (School Project)</strong>
                    <strong className="date">January 2022 – April 2022</strong><br></br>
                    <i><strong>Languages and tools: </strong>IntelliJ, Java, jUnit5, Eclipse</i><br />
                    <strong>Website: </strong><a href="https://github.com/O-iyamu/Elevator-System.git">GitHub Repo</a><br></br>
                    <br />

                    - Developed unit test classes for an elevator system using the jUnit4 package, with Multithreading as the primary design principle.<br></br>
                    - Incorporated communication streams between local threads, using IP principles.<br></br>
                    - Designed state machines for the elevator system.<br></br>
                    - Ensured proper decoupling of all classes by following common OOP patterns.<br></br>

                    <br />
                    <hr />

                    <strong>Monopoly-clone Application (School Project)</strong>
                    <strong className="date">September 2021 – December 2021</strong><br></br>
                    <i><strong>Languages and tools: </strong>Java, Swing, jUnit5, IntelliJ IDEA</i><br />
                    <strong>Website: </strong><a href="https://github.com/O-iyamu/Monopoly0clone.git">GitHub Repo</a><br></br>
                    <br />

                    - Developed a Monopoly-clone application using OOP patterns.<br></br>
                    - Progressed the project from a terminal-interface simulation to a GUI-based simulation.<br></br>
                    - Tested and debugged the code using the jUnit4 package and IntelliJ IDEA’s local debugging tool.<br></br>
                    - Ensured proper decoupling of classes by applying the Java Event Model and MVC Model.<br></br>
                    - Implemented Serialization to restore the saved state of the game.<br></br>
                    - Managed the project structure using Maven.<br></br>

                    <br />
                    <hr />

                    <strong>Season Camp Application (Personal Project)</strong>
                    <strong className="date">August 2021 – Present</strong><br></br>
                    <i><strong>Languages and tools: </strong>JavaScript, HTML, CSS, Bootstrap, XML, NodeJS, Express, MongoDB, Mongoose</i><br />
                    <br />

                    - Developing a camp marketplace that uses CRUD functionalities for camps accommodating various seasons of the year.<br></br>
                    - Implemented data organization using MongoDB and Mongoose.<br></br>
                    - Used Bootstrap to enhance the styling and formatting of the application.<br></br>

                    <hr />
                </div>

                <div class="tab-pane fade" id="experience-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                    <hr />
                    <strong className='d-flex justify-content-center'>Software Engineering</strong>
                    <hr />
                    <strong>Performance Test Developer</strong>
                    <strong className="date">May 2024 – Present</strong><br></br>
                    <strong><i>Kinaxis Inc., Ottawa, ON </i></strong>
                    <br />
                    • Work with a mentor in the Center of Excellence team to conduct performance testing, develop simulations, and collect and analyze results<br />
                    • Collaborate with testers and developers to enhance user simulation tests<br />
                    • Leverage Kibana to visualize and analyze JMeter and K6 test results.<br />
                    • Investigate server activity before and after test executions using Datadog for deeper insights into performance metrics and system behavior<br />
                    • Develop automation scripts to analyze and report on performance test results<br />
                    • Translate and optimize JMeter test scripts into K6 scripts for enhanced performance testing and streamlined execution<br />
                    • Create and maintain Confluence pages to track the progress of the test framework translation<br />

                    <br />
                    <hr />
                    <strong>Test Developer - Front-End Technologies</strong>
                    <strong className="date">September 2022 – August 2023</strong><br />
                    <strong><i>Kinaxis Inc., Ottawa, ON </i></strong>
                    <br /><br />
                    • Verified bug (escalation and in-house) and story fixes over the most recent software build on all browsers (Manual Testing)<br />
                    • Raised bugs with appropriate reproductive steps, screenshots, and screen recordings<br />
                    • Approved multiple Acceptance Criteria for in-house stories/bugs<br />
                    • Implemented automation test suites using TestCafe for the web <br />
                    • Developed detailed automation and manual test plans for the new features of product<br />
                    • Updated frameworks and testcases to support recent changes made to the product<br />
                    • Spoke to feature primes in order to better understand product functionality<br />
                    • Attended Retrospectives to give feedback for previously concluded sprints<br />
                    • Wrote a confluence page for automating complex escalation bugsSoftware<br />

                    <br /><br /><br />
                    <hr />
                    <strong className='d-flex justify-content-center'>Others</strong>
                    <hr />
                    
                    <strong>Instructor</strong>
                    <strong className="date">January 2024 – April 2024</strong><br />
                    <strong><i>Virtual Ventures, Carleton University · Contract Part-time · On-site</i></strong><br /><br />
                    • Led delivery of comprehensive outreach programs and activities, encompassing workshops, events, and after-school sessions<br />
                    • Designed and executed engaging curriculum focused on engineering and technology<br />
                    • Facilitated workshops customized for students from kindergarten to grade 12<br />

                    <hr />
                    <strong>Residence Fellow</strong>
                    <strong className="date">September 2023 – April 2024</strong><br />
                    <strong><i>Carleton University · Seasonal · On-site</i></strong><br /><br />
                    • Collaborated closely with the Residence Manager to foster a supportive environment for student learning and personal development<br />
                    • Created opportunities for academic support, personal growth, and community engagement<br />
                    • Provided assistance and guidance to students through both informal interactions and formal programming initiatives<br />
                    • Actively engaged with students through group activities and one-on-one interactions to promote well-being within the residence community<br />
                    • Facilitated the development of a positive and inclusive living environment conducive to academic achievement and personal growth<br />

                    <hr />
                    <strong>Tutor</strong>
                    <strong className="date">July 2022 – November 2023</strong><br />
                    <strong><i>Varsity Tutors, a Nerdy Company · Contract Part-time · Remote</i></strong><br /><br />
                    • Educated students with challenges in various programming languages<br />
                    • Developed a tutoring scheme to help students achieve their goals<br />
                    • Constructed assignments that expose key concepts important for specific programming languages<br />

                    <hr />
                    <strong>Peer Mentor</strong>
                    <strong className="date">September 2022 – October 2022</strong><br />
                    <strong><i>Carleton University · Seasonal · Remote</i></strong><br /><br />
                    • Met weekly with mentees to build rapport and offer personalized support<br />
                    • Submitted meeting reports promptly to the Mentorship Coordinator<br />
                    • Maintained consistent communication with the Peer Mentor group through MS Teams<br />
                    • Identified and suggested engagement opportunities within the Carleton community for mentees<br />
                    • Completed evaluations of training at the end of the program<br />

                    <hr />
                    <strong>Sales Associate</strong>
                    <strong className="date">July 2021 – September 2022</strong><br />
                    <strong><i>Banana Republic · Contract Part-time · Ottawa, Ontario, Canada</i></strong><br /><br />
                    • Ensured customer satisfaction with various store products<br />
                    • Processed sales transactions and sales contracts<br />
                    • Managed inventory by maintaining and auditing in-store products<br />
                    
                    <hr />
                </div>
            </div>
        </div>
     );
}
 
export default About;