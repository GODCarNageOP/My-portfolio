import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                      <h2>
                        Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={meter1} alt="Img" />
                            <h5>Web Development</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="Img" />
                            <h5>Graphic designing</h5>
                        </div>

                        <div className="item">
                            <img src={meter3} alt="Img" />
                            <h5>Video Editing</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="Img" />
                            <h5>Digital Marketing</h5>
                        </div>

                        
                        <div className="item">
                            <img src={meter2} alt="Img" />
                            <h5>Content Creation</h5>
                        </div>

                        <div className="item">
                            <img src={meter3} alt="Img" />
                            <h5>GFX Artist</h5>
                        </div>

                        <div className="item">
                            <img src={meter3} alt="Img" />
                            <h5>Freelancing</h5>
                        </div>

                        <div className="item">
                            <img src={meter3} alt="Img" />
                            <h5>Event Management</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="Img" />
                            <h5>Copywriting</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="Img" />
                            <h5>VFX Artist</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="Img" />
                            <h5>Search Engine Optimization</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="Img" />
                            <h5>HTML/CSS</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="Img" />
                            <h5>React Javascript</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="Img" />
                            <h5>API Development</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="Img" />
                            <h5>Vite Javascript</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="Img" />
                            <h5>Bootstrap 5</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="Img" />
                            <h5>Tailwind CSS</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="Img" />
                            <h5>App Development</h5>
                        </div>

                        </Carousel> 
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Img" />
        </section>
    );
}
 
export default Skills;