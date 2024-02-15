import backGround from '../../assets/Images/test2.jpeg'

export default function About() {
    return (
        <>
            <body className="about shared-background">

                <div className="m-auto pt-4 text-center bg-dange w-25">
                    <span className="headTitle ">Get To Know</span>
                    <h4 className="aboutTilte">About Me</h4>
                </div>

                <div className="captionAbout mt-5 m-auto w-75 px-4 ">
                    <div className="row gx-5">

                        <div className="col-md-5 aboutImg">
                            <img className='w-100 h-100 rounded-2' src={backGround} alt="" />
                        </div>

                        <div className="col-md-7">
                            <span className='aboutSpan'>Some Info About Me</span>
                            <h4 className='captionTitle py-2'>Web Developer</h4>
                            <p className='aboutPar'>I hold a baccalaureate degree for the year 2004, 
                                Mechanical industry Division as a regular candidate at jaber bin hayyan high school, 
                                Al-Masila, an acceptable grade. I studied computer science at
                                Mohamed Boudiaf university in M'sila - i did not complete the study
                                He holds a baccalaureate for the year 2015, the division of experimental 
                                science as a free candidate, Al-Masila, with a grade of Good
                            </p>

                            <a href=""></a>
                        </div>

                    </div>
                </div>
                
            </body>
        </>
    )
}
