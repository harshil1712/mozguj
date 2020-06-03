import React from 'react'
import '../components/layout.css'
import { Card,Accordion, Container } from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';

const Faq = () => {
    return (
        <div className="mt-5">
            <Header/>
            <div className="main">
                <Container>
                    <div className="content">
                    <h1 id="faq" className="text-center"><i>FAQ</i></h1>
            <div>
                <Accordion className="mt-5 ml-5">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h2 ><i className="accordion1">Who can be a member?</i></h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body><h3 className="mt-n3 ml-2"><i>Anyone who thinks he/she can work in and with community,
                        feels happy to be a part of acommunity is
                        always welcome in the community!</i></h3></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h2><i className="accordion1">Are there any meetups?</i></h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body><h3 className="mt-n3 ml-2"><i>Mozilla Gujarat holds 1 or 2 monthly meetups!</i></h3></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                <h2><i className="accordion1">How can I contribute?</i></h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body><h3 className="mt-n3 ml-2"><i>You can contribute to the community by volunteering in the events held by Mozilla Gujarat or
                            you can
                            contribute to various Mozilla projects like Common Voice, Pontoon, Bug Hunting, contributing
                            to
                            Mozilla Codebase, Support Mozilla etc...For that, you can click on the “Get Started” button
                            in the
                            Navbar.</i></h3></Card.Body>
                </Accordion.Collapse>
                </Card>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                <h2><i className="accordion1">How to know about the upcoming events?</i></h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                <Card.Body><h3 className="mt-n3 ml-2"><i>You can sign-up for the newsletter or you can join us on our Slack Channel for constant
                            community
                            updates. You can do that by clicking on that “Join Us” button in the Home Section of our
                            page.</i></h3></Card.Body>
                </Accordion.Collapse>
                </Card>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                <h2><i className="accordion1">What are the community guidelines?</i></h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                <Card.Body><h3 className="mt-n3 ml-2"><i>You can checkout the <a
                                href="https://www.mozilla.org/en-US/about/governance/policies/participation/" target="_blank">Community
                                Guidelines</a>.</i></h3></Card.Body>
                </Accordion.Collapse>
                </Card>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                <h2><i className="accordion1">Did we miss something?</i></h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                <Card.Body><h3 className="mt-n3 ml-2"><i> We hope we have solved your queries, if we have missed something then you can surely reach
                            out to
                            us, we will love to hear it from your side! You can contact us at <a
                                href="mailto:info@mozguj.org" target="_blank">info@mozguj.org</a></i></h3></Card.Body>
                </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
                </div>
            </Container>
            <Footer/>
            </div>
        </div>
    )
   
}

export default Faq