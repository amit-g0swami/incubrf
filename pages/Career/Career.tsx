import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/headers'

function Career() {
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
        <div> <Header />
            <div className='topher' style={{ display: 'flex', alignItems: 'flex-end', marginLeft: "203px" }}>
                <div className="top" style={{ boxSizing: 'border-box', width: '293px', height: "87px", marginLeft: '0px', marginTop: '200px', border: '1px solid #444343', borderRadius: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            <div className="heading" style={{}}>
                <h1>WORK | LIFE</h1>
            </div>
            <div className='quote1ee'>
                <h4 className='quoteh4'>
                    AT INCUBR WE ARE HAVING FUN, AND HELP BRANDS INVENT, EXPERIMENT, MASSIVELY GROW WITH CALCULATED RISKS, BREAKING RULES, AND CREATING IMPACT IN THEIR DOMAINS.
                </h4>
            </div>


            <div className='boxesss'>
                <div className='boxes__3'>
                    <div className="boxe">
                        <div className="boxee">
                            <h4>NAME HERE</h4>
                            <h6>DESIGNATION</h6>
                        </div>
                    </div>
                    <div className="boxe">
                        <div className="boxee">
                            <h4>NAME HERE</h4>
                            <h6>DESIGNATION</h6>
                        </div>
                    </div>
                    <div className="boxe">
                        <div className="boxee">
                            <h4>NAME HERE</h4>
                            <h6>DESIGNATION</h6>
                        </div>
                    </div>
                </div>
                <div className='boxes__3'>
                    <div className="boxe">
                        <div className="boxee">
                            <h4>NAME HERE</h4>
                            <h6>DESIGNATION</h6>
                        </div>
                    </div>
                    <div className="boxe">
                        <div className="boxee">
                            <h4>NAME HERE</h4>
                            <h6>DESIGNATION</h6>
                        </div>
                    </div>
                    <div className="boxe">
                        <div className="boxee">
                            <h4>NAME HERE</h4>
                            <h6>DESIGNATION</h6>
                        </div>
                    </div>
                </div>
                <div className='boxes__3'>
                    <div className="boxe">
                        <div className="boxee">
                            <h4>NAME HERE</h4>
                            <h6>DESIGNATION</h6>
                        </div>
                    </div>
                    <div className="boxe">
                        <div className="boxee">
                            <h4>NAME HERE</h4>
                            <h6>DESIGNATION</h6>
                        </div>
                    </div>
                    <div className="boxe">
                        <div className="boxee">
                            <h4>NAME HERE</h4>
                            <h6>DESIGNATION</h6>
                        </div>
                    </div>
                </div>
            </div>


            <div className="last">
                <div className="first">UP NEXT</div>
                <div className="middle"><h4>DISCOVER</h4></div>
                <div className="end"><h6 className=''>| Careers</h6></div>
            </div>

            <div className="h-full flex justify-center items-center">
                <Footer />
            </div>
        </div>
    )
}

export default Career