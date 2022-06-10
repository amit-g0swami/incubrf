import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/headers'

function About() {
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
        <div id='mainBlock' className='bg-gradient-to-r from-purple-500 to-pink-500'>
            <Header />
            <div className="top" style={{ boxSizing: 'border-box', width: '293px', height: "87px", marginLeft: '203px', marginTop: '200px', border: '1px solid #444343', borderRadius: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                }}>JOURNALS</h1>
            </div>
            <div className="heading" style={{
                width: "1307px",
                height: "386px",
                marginLeft: "203px",
                marginTop: "60px",
                fontFamily: 'Helvetica',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "175px",
                lineHeight: '103.9%',
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                color: " #1F1D1D",
            }}>
                <h1>OUR | BLOG</h1>
            </div>
            <div id="textAnimated" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: "500px", marginRight: '170px' }}>
                <div className='sidecard'>
                    <h4 className='sidecardh4'>all posts</h4>
                </div>
                <div className='sidecard2'>
                    <h4 className='sidecardh3'>category x</h4>
                </div>
                <div className='sidecard2'>
                    <h4 className='sidecardh3'>category x</h4>
                </div>
                <div className='sidecard2'>
                    <h4 className='sidecardh3'>category x</h4>
                </div>
                <div className='sidecard2'>
                    <h4 className='sidecardh3'>category x</h4>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '170px' }}>
                <div className='box1'>
                    <div className="bordertop">
                    </div>
                    <div className="cat" style={{ marginTop: '20px' }}>
                        <h4 className='cat1'>CATEGORY</h4>
                        <h4 className='cat2'>MONTH 00, 2022  ⚫   o min   </h4>
                    </div>
                    <div className="quote">
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim
                        </h4>
                    </div>
                </div>
                <div className='box1'>
                    <div className="bordertop">
                    </div>
                    <div className="cat" style={{ marginTop: '20px' }}>
                        <h4 className='cat1'>CATEGORY</h4>
                        <h4 className='cat2'>MONTH 00, 2022  ⚫   o min   </h4>
                    </div>
                    <div className="quote">
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim
                        </h4>
                    </div>
                </div>
                <div className='box1'>
                    <div className="bordertop">
                    </div>
                    <div className="cat" style={{ marginTop: '20px' }}>
                        <h4 className='cat1'>CATEGORY</h4>
                        <h4 className='cat2'>MONTH 00, 2022  ⚫   o min   </h4>
                    </div>
                    <div className="quote">
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim
                        </h4>
                    </div>
                </div>
                <div className='box1'>
                    <div className="bordertop">
                    </div>
                    <div className="cat" style={{ marginTop: '20px' }}>
                        <h4 className='cat1'>CATEGORY</h4>
                        <h4 className='cat2'>MONTH 00, 2022  ⚫   o min   </h4>
                    </div>
                    <div className="quote">
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim
                        </h4>
                    </div>
                </div>
                <div className='box1'>
                    <div className="bordertop">
                    </div>
                    <div className="cat" style={{ marginTop: '20px' }}>
                        <h4 className='cat1'>CATEGORY</h4>
                        <h4 className='cat2'>MONTH 00, 2022  ⚫   o min   </h4>
                    </div>
                    <div className="quote">
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim
                        </h4>
                    </div>
                </div>
                <div className='box1'>
                    <div className="bordertop">
                    </div>
                    <div className="cat" style={{ marginTop: '20px' }}>
                        <h4 className='cat1'>CATEGORY</h4>
                        <h4 className='cat2'>MONTH 00, 2022  ⚫   o min   </h4>
                    </div>
                    <div className="quote">
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim
                        </h4>
                    </div>
                </div>
                <div className='box1'>
                    <div className="bordertop">
                    </div>
                    <div className="cat" style={{ marginTop: '20px' }}>
                        <h4 className='cat1'>CATEGORY</h4>
                        <h4 className='cat2'>MONTH 00, 2022  ⚫   o min   </h4>
                    </div>
                    <div className="quote">
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim
                        </h4>
                    </div>
                </div>
                <div className='box1'>
                    <div className="bordertop">
                    </div>
                    <div className="cat" style={{ marginTop: '20px' }}>
                        <h4 className='cat1'>CATEGORY</h4>
                        <h4 className='cat2'>MONTH 00, 2022  ⚫   o min   </h4>
                    </div>
                    <div className="quote">
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim
                        </h4>
                    </div>
                </div>
            </div>

            <div className="last">
                <div className="first">UP NEXT</div>
                <div className="middle"><h4>DISCOVER</h4></div>
                <div className="end"><h6 className='endh6'>| ABOUT US</h6></div>
            </div>

            <div className="h-full flex justify-center items-center">
                <Footer />
            </div>
        </div>
    )
}

export default About