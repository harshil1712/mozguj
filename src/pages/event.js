import React from 'react'
import '../components/layout.css'
import { Row, Col, Container } from 'react-bootstrap'
import Header from '../components/header'
import Footer from '../components/footer'

const Event = () => {
    return (
        <div className="mt-5">
            <Header/>
            <div className="main">
                <Container>
                    <div className="content">
                    <h1 id="event" className="text-center"><i>EVENTS</i></h1>
            <div className="ml-xl-4 ml-lg-4 ml-md-5 ml-sm-5 ml-5">
                <Row className="mt-5 ml-xl-5 ml-lg-1 ml-md-2 ml-sm-5 ml-1">
                    <Col lg="4" md="6" sm="12" xs="12">
                        <div className="card1 red">
                            <a href="https://community.mozilla.org/events/footprints-x10/" target="_blank">
                            <div className="card4">
                                <h1 className="ml-2 mt-2"><i>21st Feb</i></h1>
                                <h2 className="ml-2 mt-5"><b><i>FootPrints X10</i></b></h2>
                                <h3 className="ml-2 mt-5">2020 <br></br> MSU</h3>
                            </div>
                            </a>
                        </div>
                    </Col >
                    <Col lg="4" md="6" sm="12" xs="12" className="mt-5 mt-xl-0 mt-md-0 mt-sm-5">
                    <div className="card1 yellow">
                        <a href="https://reps.mozilla.org/e/mlh-local-hackday-building-codes/" target="_blank">
                            <div className="card4">
                                <h1 className="ml-2 mt-2"><i>7th Dec</i></h1>
                                <h2 className="ml-2 mt-5"><b><i>Building Codes</i></b></h2>
                                <h3 className="ml-2 mt-5">2019 <br></br> SVIT</h3>
                            </div>
                        </a>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" xs="12" className="mt-5 mt-xl-0 mt-md-5 mt-sm-5 mt-lg-0">
                    <div className="card1 blue">
                        <a href="https://reps.mozilla.org/e/hacktoberfest-vadodara/" target="_blank">
                            <div className="card4">
                                <h1 className="ml-2 mt-2"><i>13th Oct</i></h1>
                                <h2 className="ml-2 mt-5"><b><i>HacktoberFest</i></b></h2>
                                <h3 className="ml-2 mt-5">2019 <br></br> NUV</h3>
                            </div>
                        </a>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" xs="12" className="mt-5 mt-xl-5 mt-md-5 mt-sm-5">
                        <div className="card1 red">
                        <a href="https://reps.mozilla.org/e/wiz-a-thon/" target="_blank">
                            <div className="card4"> 
                                <h1 className="ml-2 mt-2"><i>5th Oct</i></h1>
                                <h2 className="ml-2 mt-5"><b><i>Wiz-a-thon</i></b></h2>
                                <h3 className="ml-2 mt-5">2019 <br></br> PU</h3>
                            </div>
                        </a>
                        </div>
                    </Col >
                    <Col lg="4" md="6" sm="12" xs="12" className="mt-5 mt-xl-5 mt-md-5 mt-sm-5">
                    <div className="card1 yellow">
                        <a href="https://reps.mozilla.org/e/flutter-bootcamp/" target="_blank">
                            <div className="card4">
                                <h1 className="ml-2 mt-2"><i>16th June</i></h1>
                                <h2 className="ml-2 mt-5"><b><i>Flutter Bootcamp</i></b></h2>
                                <h3 className="ml-2 mt-3">2019 <br></br> NUV</h3>
                            </div>
                        </a>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" xs="12" className="mt-5 mt-xl-5 mt-md-5 mt-sm-5 mb-5">
                    <div className="card1 blue">
                        <a href="https://reps.mozilla.org/e/os-fest/" target="_blank">
                            <div className="card4">
                                <h1 className="ml-2 mt-2"><i>20th Apr</i></h1>
                                <h2 className="ml-2 mt-5"><b><i>OS Fest</i></b></h2>
                                <h3 className="ml-2 mt-5">2019 <br></br> BITS</h3>
                            </div>
                        </a>
                        </div>
                    </Col>
                </Row>
            </div>
                    </div>
                </Container>
                <Footer/>
            </div>
        </div>
    )
}

export default Event