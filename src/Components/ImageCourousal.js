import Carousel from 'react-bootstrap/Carousel';
import Foot_1 from '../assets/images/Food_1.jpg'
import Foot_2 from '../assets/images/Food_2.jpg'
import Foot_3 from '../assets/images/Food_3.jpg'
import Foot_4 from '../assets/images/Food_4.jpg'
import Foot_5 from '../assets/images/Food_5.jpg'


const ImageCourousal = () => {
    return (
        <>

            <div className='container-fluid mt-2'>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img

                            src={Foot_1}
                            alt="First slide"
                            className="d-block w-100 "
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            src={Foot_2}
                            alt="Second slide"
                            className="d-block w-100"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Foot_3}
                            alt="Third slide"
                            className="d-block w-100"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Foot_4}
                            alt="Fourth slide"
                            className="d-block w-100"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Foot_5}
                            alt="Fifth slide"
                            className="d-block w-100"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default ImageCourousal;
