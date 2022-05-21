// Internal imports
import './mobilenavmenu.css';

const MobileNavMenu = () => {
    const defaultBlack = "";
    const lightBlue = "#2272db";
    const babyBlue = "#7babea";

    // Event handlers
    const handleMouseEnter = (e) => {
        // Change the border color of the main circle
        const circle = e.target.children[0];
        circle.style.border = `1px solid ${lightBlue}`;

        // Change the small center circle color
        const smallCenterCircle = e.target.children[1];
        smallCenterCircle.style.backgroundColor = babyBlue;
        smallCenterCircle.style.boxShadow = "5px 5px 40px 30px #8bc7fd";

        // Change the line colors
        const line1 = e.target.children[2];
        const line2 = e.target.children[3];
        const line3 = e.target.children[4];
        const line4 = e.target.children[5];
        line1.style.backgroundColor = lightBlue;
        line2.style.backgroundColor = lightBlue;
        line3.style.backgroundColor = lightBlue;
        line4.style.backgroundColor = lightBlue;

        // Change the circle endpoint colors
        const circleEndpoint1 = e.target.children[6];
        const circleEndpoint2 = e.target.children[7];
        const circleEndpoint3 = e.target.children[8];
        const circleEndpoint4 = e.target.children[9];
        circleEndpoint1.style.backgroundColor = lightBlue;
        circleEndpoint2.style.backgroundColor = lightBlue;
        circleEndpoint3.style.backgroundColor = lightBlue;
        circleEndpoint4.style.backgroundColor = lightBlue;

        // Change the inner circle endpoint colors
        const innerCircleEndpoint1 = e.target.children[10];
        const innerCircleEndpoint2 = e.target.children[11];
        const innerCircleEndpoint3 = e.target.children[12];
        const innerCircleEndpoint4 = e.target.children[13];
        innerCircleEndpoint1.style.backgroundColor = lightBlue;
        innerCircleEndpoint2.style.backgroundColor = lightBlue;
        innerCircleEndpoint3.style.backgroundColor = lightBlue;
        innerCircleEndpoint4.style.backgroundColor = lightBlue;
    };
    const handleMouseLeave = (e) => {
        // Change the color of the main circle back to the default
        const circle = e.target.children[0];
        circle.style.border = `1px solid ${defaultBlack}`;

        // Change the small center circle color back to default
        const smallCenterCircle = e.target.children[1];
        smallCenterCircle.style.backgroundColor = defaultBlack;
        smallCenterCircle.style.boxShadow = "none";

        // Change the line colors back to the default
        const line1 = e.target.children[2];
        const line2 = e.target.children[3];
        const line3 = e.target.children[4];
        const line4 = e.target.children[5];
        line1.style.backgroundColor = defaultBlack;
        line2.style.backgroundColor = defaultBlack;
        line3.style.backgroundColor = defaultBlack;
        line4.style.backgroundColor = defaultBlack;

        // Change the circle endpoint colors back to the default
        const circleEndpoint1 = e.target.children[6];
        const circleEndpoint2 = e.target.children[7];
        const circleEndpoint3 = e.target.children[8];
        const circleEndpoint4 = e.target.children[9];
        circleEndpoint1.style.backgroundColor = defaultBlack;
        circleEndpoint2.style.backgroundColor = defaultBlack;
        circleEndpoint3.style.backgroundColor = defaultBlack;
        circleEndpoint4.style.backgroundColor = defaultBlack;

        // Change the inner circle endpoint colors back to the default
        const innerCircleEndpoint1 = e.target.children[10];
        const innerCircleEndpoint2 = e.target.children[11];
        const innerCircleEndpoint3 = e.target.children[12];
        const innerCircleEndpoint4 = e.target.children[13];
        innerCircleEndpoint1.style.backgroundColor = defaultBlack;
        innerCircleEndpoint2.style.backgroundColor = defaultBlack;
        innerCircleEndpoint3.style.backgroundColor = defaultBlack;
        innerCircleEndpoint4.style.backgroundColor = defaultBlack;
    };

    return (
        <div classNameName="button_container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div className="inner_circle"></div>
            <div className="smallcircle_center"></div>
            <div className="line"></div>
            <div className="line_2"></div>
            <div className="line_3"></div>
            <div className="line_4"></div>
            <div className="circle_endpoint_1"></div>
            <div className="circle_endpoint_2"></div>
            <div className="circle_endpoint_3"></div>
            <div className="circle_endpoint_4"></div>
            <div className="inner_circle_endpoint_1"></div>
            <div className="inner_circle_endpoint_2"></div>
            <div className="inner_circle_endpoint_3"></div>
            <div className="inner_circle_endpoint_4"></div>
        </div>
    );
}

export default MobileNavMenu;