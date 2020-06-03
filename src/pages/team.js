import React from 'react'
import { graphql,useStaticQuery } from "gatsby";
import '../components/layout.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container,Row,Col, Card } from 'react-bootstrap'
import Img from 'gatsby-image'
import { FaTwitter,FaLinkedin,FaGithub } from 'react-icons/fa';


const Team = () => {
    const data = useStaticQuery(graphql`
    query Images_T1{
      rep1: file(relativePath:{eq: "team/pranshu.png"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      rep2: file(relativePath:{eq: "team/harshil.jpg"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      rep3: file(relativePath:{eq: "team/pratik.jpg"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      rep4: file(relativePath:{eq: "team/harsh.jpg"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      rep5: file(relativePath:{eq: "team/viral.jpg"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      mbr1: file(relativePath:{eq: "team/arpan.jpg"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      mbr2: file(relativePath:{eq: "team/devansh.jpg"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      mbr3: file(relativePath:{eq: "team/pranit.jpg"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      mbr4: file(relativePath:{eq: "team/dhruv.jpg"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      mbr5: file(relativePath:{eq: "team/meet.jpg"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      mbr6: file(relativePath:{eq: "team/vraj.png"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      mbr7: file(relativePath:{eq: "team/yash.jpg"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
      mbr8: file(relativePath:{eq: "team/ayush.png"}){
        childImageSharp{
        fixed(width: 210, height: 210){
            ...GatsbyImageSharpFixed_noBase64
            }
        }
      }
    }
    `)
    return (
        <div className="main">
            <Header/>
            <Container fluid>
                <div className="content text-center"> 
                    <h1 id="faq"><i>REPS</i></h1>
                    <div className="mt-5">
                        <Row className="team justify-content-center">
                            <Col xl="4" lg="6" md="6">
                                <div><Img className="img-thumbnail rounded-circle" fixed ={data.rep1.childImageSharp.fixed}/></div>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Pranshu Khanna</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>Mozilla Representative</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                Resource Rep, <br></br>HealthierAI Co-Organizer, Mozilla Open Design Maintainer,  Mozilla Open Leaders Mentor
                                </Card.Text>
                                <Card.Link href="https://twitter.com/pransh15?s=20" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/pransh15" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/pransh15/" target="_blank"><FaLinkedin size={20} /></Card.Link>
                                </Card.Body>   
                            </Card>
                            </Col>
                            <Col xl="4" lg="6" md="6" className="mt-xl-0 mt-lg-0 mt-md-0 mt-sm-n5 mt-n5">
                            <Img className="img-thumbnail rounded-circle" fixed ={data.rep2.childImageSharp.fixed}/>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Harshil Agrawal</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>Mozilla Representative</strong></Card.Subtitle> 
                                <Card.Text className="text-secondary mt-3">
                                JavaScript Developer, MLH Coach, GitHub Campus Expert, Flutter Vadodara Co-founder    
                                </Card.Text> 
                                <Card.Link href="https://twitter.com/harshil1712?s=20" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/harshil1712" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/harshil1712/" target="_blank"><FaLinkedin size={20} /></Card.Link>                                                              
                                </Card.Body>
                            </Card>                     
                            </Col>
                            <Col xl="4" lg="6" md="6" className="mt-xl-0 mt-lg-n5 mt-md-n5 mt-sm-n5 mt-n5">
                            <Img className="img-thumbnail rounded-circle" fixed ={data.rep3.childImageSharp.fixed}/>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Pratik Parmar</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>Mozilla Representative</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                Data Scientist, Backend Developer, Machine Learning Expert    
                                </Card.Text>
                                <Card.Link href="https://twitter.com/hackyroot?s=20" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/HackyRoot" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/pratikparmar1/" target="_blank"><FaLinkedin size={20} /></Card.Link>                                                                       
                                </Card.Body>                            
                            </Card>               
                            </Col>
                            <Col xl="4" lg="6" md="6" className="mt-xl-n5 mt-lg-n5 mt-md-n5 mt-sm-n5 mt-n5">
                            <Img className="img-thumbnail rounded-circle" fixed ={data.rep4.childImageSharp.fixed}/>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Harsh Mehta</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>Mozilla Representative</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                iOS Developer, Flutter Developer, Flutter Vadodara Co-Organizer    
                                </Card.Text>
                                <Card.Link href="https://twitter.com/obitodarky?s=20" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/obitodarky" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/obitodarky/" target="_blank"><FaLinkedin size={20} /></Card.Link>                                                                        
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col xl="4" lg="6" md="6" className="mt-xl-n5 mt-lg-n5 mt-md-n5 mt-sm-n5 mt-n5">
                            <Img className="img-thumbnail rounded-circle" fixed ={data.rep5.childImageSharp.fixed}/>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Viral Parmar</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>Mozilla Representative</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                Founder of ComExpo Cyber Security Foundation, Security Consultant, Initatior of LogOut Campaign    
                                </Card.Text>
                                <Card.Link href="https://twitter.com/viralparmarhack?s=20" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/viral-parmar-8402a04a/" target="_blank"><FaLinkedin size={20} /></Card.Link>                                                                        
                                </Card.Body>
                            </Card>
                            </Col>           
                            </Row>                        
                    </div>
{/* ************************************************ T E A M ************************************************************** */}
                    <h1 id="faq"><i>TEAM</i></h1>
                    <div className="mt-5">
                        <Row className="team justify-content-center">
                            <Col xl="4" lg="6" md="6">
                            <div><Img className="img-thumbnail rounded-circle" fixed ={data.mbr1.childImageSharp.fixed}/></div>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Arpan Patel</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>contributor</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                Web Dev, SVIT Campus Club Lead & Flutter Vadodara Co-Organizer
                                </Card.Text>
                                <Card.Link href="https://twitter.com/arps_1899" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/arps18" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/arpan-patel-025323154/" target="_blank"><FaLinkedin size={20} /></Card.Link>
                                </Card.Body>   
                            </Card>
                            </Col>
                            <Col xl="4" lg="6" md="6" className="mt-xl-0 mt-lg-0 mt-md-0 mt-sm-n5 mt-n5">
                            <div><Img className="img-thumbnail rounded-circle" fixed ={data.mbr2.childImageSharp.fixed}/></div>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Devansh Gajjar</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>designer</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                Designer, Speaker, Organizer of Karigar Samuday and a FreeLancer
                                </Card.Text>
                                <Card.Link href="https://twitter.com/gajjar_devansh" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/devanshgajjar" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/devansh-gajjar/" target="_blank"><FaLinkedin size={20} /></Card.Link>
                                </Card.Body>   
                            </Card>
                            </Col>
                            <Col xl="4" lg="6" md="6" className="mt-xl-0 mt-lg-n5 mt-md-n5 mt-sm-n5 mt-n5">
                            <div><Img className="img-thumbnail rounded-circle" fixed ={data.mbr3.childImageSharp.fixed}/></div>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Pranit Brahmbhatt</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>contributor</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                Web Developer, Budding Flutter Developer, Mozilla Campus Club Lead & Flutter Vadodara Co-Organizer
                                </Card.Text>
                                <Card.Link href="https://twitter.com/pranitb10" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/pb-10" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/pranit-brahmbhatt-340ab7149/" target="_blank"><FaLinkedin size={20} /></Card.Link>
                                </Card.Body>   
                            </Card>
                            </Col>
                            <Col xl="4" lg="6" md="6" className="mt-xl-n5 mt-lg-n5 mt-md-n5 mt-sm-n5 mt-n5">
                            <div><Img className="img-thumbnail rounded-circle" fixed ={data.mbr4.childImageSharp.fixed}/></div>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Dhruv Jasani</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>contributor</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                Web Developer, Budding GatsbyJS, Contributor at Mozilla Gujarat
                                </Card.Text>
                                <Card.Link href="https://twitter.com/jd_jasani" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/JD235" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="http://linkedin.com/in/dhruv-jasani-3290b01a0" target="_blank"><FaLinkedin size={20} /></Card.Link>
                                </Card.Body>   
                            </Card>
                            </Col>
                            <Col xl="4" lg="6" md="6" className="mt-xl-n5 mt-lg-n5 mt-md-n5 mt-sm-n5 mt-n5">
                            <div><Img className="img-thumbnail rounded-circle" fixed ={data.mbr5.childImageSharp.fixed}/></div>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Meet Savani</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>contributor</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                Web Developer, Volunteer - Mozilla Gujarat
                                </Card.Text>
                                <Card.Link href="https://twitter.com/savani__meet?s=20" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/meetsavani" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/meet-savani-b98734178/" target="_blank"><FaLinkedin size={20} /></Card.Link>
                                </Card.Body>   
                            </Card>
                            </Col>
                            <Col xl="4" lg="6" md="6" className="mt-xl-n5 mt-lg-n5 mt-md-n5 mt-sm-n5 mt-n5">
                            <div><Img className="img-thumbnail rounded-circle" fixed ={data.mbr6.childImageSharp.fixed}/></div>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Vraj Patel</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>contributor</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                Mozilla Campus Lead, Web Developer
                                </Card.Text>
                                <Card.Link href="https://twitter.com/vraj6198" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/vraj6198" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/vraj-patel-2989b6154/" target="_blank"><FaLinkedin size={20} /></Card.Link>
                                </Card.Body>   
                            </Card>
                            </Col>
                            <Col xl="4" lg="6" md="6" className="mt-xl-n5 mt-lg-n5 mt-md-n5 mt-sm-n5 mt-n5">
                            <div><Img className="img-thumbnail rounded-circle" fixed ={data.mbr7.childImageSharp.fixed}/></div>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Yash Dave</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>contributor</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                Volunteer - Mozilla Gujarat, Web Developer, Budding Data Scientist
                                </Card.Text>
                                <Card.Link href="https://twitter.com/amorpheuz" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/amorpheuz" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/amorpheuz/" target="_blank"><FaLinkedin size={20} /></Card.Link>
                                </Card.Body>   
                            </Card>
                            </Col>
                            <Col xl="4" lg="6" md="6" className="mt-xl-n5 mt-lg-n5 mt-md-n5 mt-sm-n5 mt-n5">
                            <div><Img className="img-thumbnail rounded-circle" fixed ={data.mbr8.childImageSharp.fixed}/></div>
                            <Card className="pt-4">
                                <Card.Body className="mt-5">
                                <Card.Title className="mt-5"><h4><strong>Ayush Bherwani</strong></h4></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3 text-uppercase"><strong>contributor</strong></Card.Subtitle>
                                <Card.Text className="text-secondary mt-3">
                                Volunteer - Mozilla Gujarat, Flutter Developer, Android Developer, Flutter Vadodara Founder
                                </Card.Text>
                                <Card.Link href="https://twitter.com/ayushbherwani" target="_blank"><FaTwitter size={20} /></Card.Link>
                                <Card.Link href="https://github.com/AyushBherwani1998" target="_blank"><FaGithub size={20} /></Card.Link>
                                <Card.Link href="https://linkedin.com/in/ayushbherwani" target="_blank"><FaLinkedin size={20} /></Card.Link>
                                </Card.Body>   
                            </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>    
            <Footer/>
        </div>
    )
}

export default Team