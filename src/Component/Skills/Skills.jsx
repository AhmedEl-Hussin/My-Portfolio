import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Skills() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
        <>
            <body className="skills bg-danger shared-background">

                <div className="m-auto pt-4 text-center bg-dange w-25">
                    <span className="headTitle ">What Skills I Hava?</span>
                    <h4 className="aboutTilte">My Skills</h4>
                </div>

                <div className="carusal mt-5">
                    <Carousel responsive={responsive}>

                        <div className="skill ms-5 text-center">
                            <i className="fa-brands fa-html5"></i>
                            <h2 className="mt-2">HTML</h2>
                        </div>

                        <div className="skill ms-5 text-center">
                            <i className="fa-brands fa-html5"></i>
                            <h2 className="mt-2">HTML</h2>
                        </div>

                        <div className="skill ms-5 text-center">
                            <i className="fa-brands fa-html5"></i>
                            <h2 className="mt-2">HTML</h2>
                        </div>

                        <div className="skill ms-5 text-center">
                            <i className="fa-brands fa-html5"></i>
                            <h2 className="mt-2">HTML</h2>
                        </div>

                        <div className="skill ms-5 text-center">
                            <i className="fa-brands fa-html5"></i>
                            <h2 className="mt-2">HTML</h2>
                        </div>
                        
                    </Carousel>
                </div>
                

                {/* <div className="carusal ">

                <Carousel className="ms-1" responsive={responsive}>
                    <div className="skill d-flex justify-content-center align-items-center">
                        <div className="text-center ">
                            <i className="fa-solid fa-house "></i>
                            <h2>CSS</h2>
                        </div>
                    </div>
                </Carousel>

                </div> */}
                

                {/* <div id="carouselExample" className="carousel slide mt-5">
                    
                    <div className="carousel-inner">
                        
                        <div className="carousel-item active">
                            <img src={backGround} className="d-block w-50" alt="..."/>
                        </div>
                        
                        <div className="carousel-item">
                            <img src={backGround} className="d-block w-50" alt="..."/>
                        </div>
                        
                    </div>
                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                
                </div> */}

            </body>
        </>
    )
}
