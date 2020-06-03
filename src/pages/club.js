import React from 'react'
import '../components/layout.css'
import { Row, Col, Container } from 'react-bootstrap'
import { graphql,useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import Header from '../components/header'
import Footer from '../components/footer'

const Club = () => {
    const data = useStaticQuery(graphql`
    query Images_C1{
      club1: file(relativePath:{eq: "MozNeurons.jpeg"}){
        childImageSharp{
        fluid(maxWidth:230, quality: 100){
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
      }
      club2: file(relativePath:{eq: "721x346.png"}){
        childImageSharp{
        fluid(maxWidth:200, quality: 100){
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
      }
      club3: file(relativePath:{eq: "721x346.png"}){
        childImageSharp{
        fluid(maxWidth:200, quality: 100){
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
      }
      club4: file(relativePath:{eq: "ITM.png"}){
        childImageSharp{
        fluid(maxWidth:230, quality: 100){
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
      }
      club5: file(relativePath:{eq: "vier.jpg"}){
        childImageSharp{
        fluid(maxWidth:95, quality: 100){
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
      }
    }
  `)
    return (
        <div className="mt-5">
            <Header/>
            <div className="main">
                <Container>
                    <div className="content">
                    <h1 id="club" className="text-center"><i>CLUBS</i></h1>
            <div className="mt-5 ml-5">
                <Row className="ml-xl-1 ml-lg-0 ml-md-0 ml-sm-5 justify-content-around">
                    <Col lg="4" md="6" sm="12">
                        <div className="card2 red">
                        <a href="https://community.mozilla.org/groups/mozneurons" target="_blank">
                            <div className="card3">
                                <Img className="ml-2 mt-2" fluid ={data.club1.childImageSharp.fluid}/>
                                <h2 className="mt-5 ml-2"><b>MozNeurons</b><br></br><span>SVIT</span></h2>
                            </div>
                        </a>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <div className="card2 yellow mt-xl-0 mt-lg-0 mt-md-0 mt-sm-5 mt-5">
                        <a href="" target="_blank">
                            <div className="card3">
                                <Img className="ml-4 mt-1" fluid ={data.club2.childImageSharp.fluid}/>
                                <h2 className="mt-2 ml-2"><b>MozPU</b><br></br><span>PU</span></h2>
                            </div>
                        </a>
                        </div>                    
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <div className="card2 blue mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                        <a href="" target="_blank">
                            <div className="card3">
                                <Img className="ml-4 mt-1" fluid ={data.club3.childImageSharp.fluid}/>
                                <h2 className="mt-2 ml-2"><b>MozNUV</b><br></br><span>NUV</span></h2>
                            </div>
                        </a>
                        </div>                    
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <div className="card2 red mt-md-5 mt-5">
                        <a href="https://community.mozilla.org/groups/xplora-club/" target="_blank">
                            <div className="card3">
                                <Img className="ml-2 mt-0" fluid ={data.club4.childImageSharp.fluid}/>
                                <h2 className="mt-2 ml-2"><b>Xplora</b><br></br><span>ITM</span></h2>
                            </div>
                        </a>
                        </div>                    
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <div className="card2 yellow mt-md-5 mt-5 mb-5">
                        <a href="" target="_blank">
                            <div className="card3">
                                <Img className="ml-2 mt-2" fluid ={data.club5.childImageSharp.fluid}/>
                                <h2 className="mt-0 ml-2"><b>MozVIER</b><br></br><span>VIER</span></h2>
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

export default Club