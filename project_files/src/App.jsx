
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./App.css";
import myPhoto from './assets/KylePhoto.png';
import fourPointPhoto from './assets/4pointGrammar.png';
import bookDBPhoto from './assets/BookDBImage.png';
import flowchartPhoto from './assets/course flowchart demo.png';
import gpaPhoto from './assets/GPA_screenshot.png';
import githubSvg from './assets/github.svg';
import linkedInSvg from './assets/linkedIn.svg';

function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky='top'>
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Stack> 
        <Container className='aboutContent' id='about' fluid>
          <Row>
            <Col>
              <Image src={myPhoto} height={450} roundedCircle/>
            </Col>
            <Col className='me-5 pe-5'>
              <Container>
                <h1>Hi. I'm <strong>Kyle</strong></h1>
                <br />
                <p>
                  I am a software developer and a recent graduate of Seattle Pacific University with a BS in Computer Science. 
                  I am always excited to sharpen my skills and learn new things. My most proficient languages are Go, Dart, and C++. 
                  I have 2 years of full-stack web development experience at Teachally and hope to continue pursuing a career in Web Development.                
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container className='portfolioContent' id='portfolio' fluid>
          <Col>
            <Stack>
              <Container className='d-flex justify-content-center'>
                <h1><strong>My Portfolio</strong></h1>
              </Container>
              <br/>
              <Container className='d-flex justify-content-center'>
                <h2><strong>Here are some projects I've worked on...</strong></h2>
              </Container>
            </Stack>
          </Col>
          <br/>
          <Row>
            <Col className='mx-5'>
              <Stack>
                <Card className='my-5'>
                  <Card.Img variant="top" src={gpaPhoto}/>
                  <Card.Body>
                    <Card.Title>
                      <h2><strong>Graduation Planning App</strong></h2>
                      <br/>
                      <h3><strong>(Senior Project Oct 2022 - Jun 2023)</strong></h3>
                    </Card.Title>
                    <Card.Text>
                      This project was a web application enabling students at SPU to easily plan out their course sequence during their time at school. 
                      Students are able to see which courses are offered in a quarter and save those courses into a plan. 
                      The course plan is organized into a flowchart for easy viewing. 
                      <br/>
                      I worked on the backend of this project with a team of six and also led the design of the mySQL database that stored courses and course plans. 
                      We used NodeJS for the backend and vanilla Javascript on the frontend. 
                      It was also my first experience working with Microsoft Azure services to deploy and host the web application.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className='my-5'>
                  <Card.Img variant="top" src={bookDBPhoto}/>
                  <Card.Body>
                    <Card.Title>
                      <h2><strong>Library Database</strong></h2>
                      <br/>
                      <h3><strong>(School Project June 2021)</strong></h3>
                    </Card.Title>
                    <Card.Text>
                      This was the final project for my Netcentric Computing course at Seattle Pacific University.
                      It is a web application that models a library, allowing the user to view, add, delete, and edit the book information stored in a database.
                      <br/>
                      This project was a way for me to apply my knowledge about REST APIs that I had gained throughout the quarter by creating one to interface with and perform CRUD operations on a database.
                      It was also a chance for me to learn about and use MongoDB, which was used to store the book information.
                    </Card.Text>
                    <Button variant="primary" href='https://github.com/KyleTelnes/ktelnes-CSC3221-Final-Assignment-Frontend' target='_blank'>Github Repository</Button>
                  </Card.Body>
                </Card>
                <Card className='my-5'>
                  <Card.Img variant="top" src={flowchartPhoto}/>
                  <Card.Body>
                    <Card.Title>
                      <h2><strong>Course Flowchart</strong></h2>
                      <br/>
                      <h3><strong>(School Project Feb 2022 - March 2022)</strong></h3>
                    </Card.Title>
                    <Card.Text>
                      This project was a group final project for my Algorithms class at SPU.
                      The objective of the project was to create an in-order course plan given a list of courses and their prerequisites, with extra credit being awarded for visualizing the graph.
                      We also had to consider the quarter that a student would start and the maximum amount of credits that the student wanted to take for each quarter.
                      Using the igraph library for Python, my partner <a href='https://www.linkedin.com/in/bosena-telila/'>Bosena Telila</a> and I created a program which asked the user for their desired start quarter and the max amount of credits for each quarter, which created directed acyclical graph of a possible course plan and then generated a picture of the flowchart to download.
                      <br/>
                      This project was a great opportunity to work with graphs and was also my first exposure to Python.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className='my-5'>
                  <Card.Img variant="top" src={fourPointPhoto}/>
                  <Card.Body>
                    <Card.Title>
                      <h2><strong>4Point Parser</strong></h2>
                      <br/>
                      <h3><strong>(School Project Oct 2021)</strong></h3>
                    </Card.Title>
                    <Card.Text>
                      This project was for my Concepts in Programming Languages class at SPU.
                      The objective for this project was to parse a simple mock language called 4Point and output equivalent code in Prolog and Scheme.
                      I created a Golang program that ran lexical and syntactical analysis on 4Point code.
                      If the 4Point code passed, then it was reprinted into both its Prolog and Scheme equivalent.
                      <br/>
                      This project was my first exposure to Golang, which ended up becoming one of my favorite programming languages. 
                      It also further developed my understanding of BNF and some of the processes that compilers and interpreters must go through, like lexical tokenization and syntax analysis.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Stack>
            </Col>
          </Row>
        </Container>
        <Container className='contactContent' id='contact' fluid>
            <Col>
              <Stack>
                <Row>
                  <Col>
                    <Stack>
                      <Col>
                        <hr className='solid'></hr>
                      </Col>
                      <Col>
                        <br/>
                      </Col>
                      <Col>
                        <h3 className='whiteText'>Find me on...</h3>
                      </Col>
                    </Stack>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <Button className='linkedInBtn' href='https://www.linkedin.com/in/kyle-telnes/' target='_blank'>
                      <Image height="20" width="20" src={linkedInSvg}></Image>
                    </Button>
                  </Col>
                  <Col>
                    <Button className='githubBtn' variant="light "href='https://github.com/KyleTelnes' target='_blank'>
                      <Image height="20" width="20" src={githubSvg}></Image>
                    </Button>
                  </Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
                  <Col>
                    <hr className='solid'></hr>
                  </Col>
              </Stack>
            </Col>
        </Container>
      </Stack>
    </>
  )
}

export default App
