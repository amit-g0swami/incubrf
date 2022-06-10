import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/headers'

function Journel() {
    React.useEffect(() => {
        let element = document.getElementById("mainBlock");
        if (element) {
            element.addEventListener("scroll", () => {
                let position = element?.scrollTop || 0;
                let textElement = document.getElementById("textAnimated");
                if (element) {
                    if (
                        position > window.innerHeight * 0.7 &&
                        position < window.innerHeight * 2.7
                    ) {
                        element.style.backgroundImage =
                            "linear-gradient(#367589, #7F587BB5, #367589)";
                    } else if (position > window.innerHeight * 2.7) {
                        element.style.backgroundImage =
                            "linear-gradient( #367589, #367589)";
                    } else if (position < window.innerHeight) {
                        element.style.background = "linear-gradient(#ffffff 60%, #367589)";
                    } else {
                    }
                }
            });
        }
    }, []);
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', alignItems: 'flex-end', marginLeft: "600px" }}>
                <div className="top" style={{ boxSizing: 'border-box', width: '293px', height: "87px", marginLeft: '350px', marginTop: '200px', border: '1px solid #444343', borderRadius: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{
                        position: "absolute",
                        width: "243px",
                        height: "57px",
                        fontFamily: 'Steiner',
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: "40px",
                        lineHeight: "143.4%",
                        letterSpacing: "0.1em",
                        color: "#2A2929",
                    }}>ABOUT US</h1>
                </div>
            </div>
            <div className="heading" style={{
                width: "auto",
                height: "386px",
                marginLeft: "100px",
                marginTop: "60px",
                fontFamily: 'Helvetica',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "160px",
                lineHeight: '103.9%',
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                color: " #1F1D1D",
            }}>
                <h1>GROW | CHILL</h1>
            </div>
            <div className='quote'>
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim vitarum nobis erunt instituta capienda. Nam quibus rebus efficiuntur voluptates, eae
                </h4>
            </div>
            <div className="middlebox"><h4>CURRENT OPENINGS</h4></div>

            <div className="jobtitle" style={{ marginTop: '100px', marginBottom: '200px' }}>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', height: '130px', marginBottom: '60px' }}>
                    <div className="job">
                        <h4 className='des'>JOB TITLE HERE</h4>
                        <h4 className='plus'>+</h4>
                    </div>
                    <div className='line'></div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', height: '130px', marginBottom: '60px' }}>
                    <div className="job">
                        <h4 className='des'>JOB TITLE HERE</h4>
                        <h4 className='plus'>+</h4>
                    </div>
                    <div className='line'></div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column', height: '', marginBottom: '60px' }}>
                    <div className="job">
                        <h4 className='des'>JOB TITLE HERE</h4>
                        <h4 className='plus'>+</h4>
                    </div>
                    <div className="point">
                        <h3>time</h3>
                        <h3>location</h3>
                        <h3>wprk exp.</h3>
                    </div>
                    <div className="quotes_"><h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, c</h4></div>
                    <div className="buttons">
                        <h4>LET’S CONNECT</h4>
                    </div>
                    <div className='line'></div>
                </div>


                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', height: '130px', marginBottom: '60px' }}>
                    <div className="job">
                        <h4 className='des'>JOB TITLE HERE</h4>
                        <h4 className='plus'>+</h4>
                    </div>
                    <div className='line'></div>
                </div>

            </div>

            <div className="last">
                <div className="first">UP NEXT</div>
                <div className="middle">DISCOVER</div>
                <div className="end">| JOURNALS</div>
            </div>

            <div className="h-full flex justify-center items-center">
                <Footer />
            </div>
        </div>
    )
}

export default Journel