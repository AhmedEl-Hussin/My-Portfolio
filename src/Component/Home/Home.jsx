import Typewriter from 'typewriter-effect';


export default function Home() {
    return (
        <>
            <body className="home d-flex justify-content-center align-items-center">
                    <div className="bg- text-white w-5 text-center ">
                        
                        <h6>Hello I'm</h6>
                        <h1>Ahmed Mohamed</h1>
                        
                        <div className='d-flex justify-content-center typeWriter fs-5'>
                            
                            <h4 className='text-white '>I'm a </h4>
                            <Typewriter
                                options={{
                                    strings: [ `Front End`,`Developer` , 'Designer', ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>

                        <div className='mt-3'>
                            <button className='btnCV'>Download CV</button>
                            <button className='ms-3 btn2' >Let's Talk</button>
                        </div>
                        
                    </div>
            </body>
        </>
    )
}
