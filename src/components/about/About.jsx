import "./about.css";
import Award from "../../img/tlax.PNG";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Wechat Mini App</h1>
        <p className="a-sub">
        The applet does not need to be downloaded and installed, just click and use</p>
        <p className="a-sub">
        Mini program development cost is low, sitting on a super platform with 1.3 billion users, no need to worry about traffic

        </p>
        <p className="a-sub">
        Drink one less Starbucks a day and you can have your own mini program

        </p>
        {/* <p className="a-desc">
        About the company's profile and content, please fill in by yourself
        </p> */}
        <div className="a-award">
          {/* <img src={Award} alt="" className="a-award-img" /> */}
          <div className="a-award-texts">
            <h4 className="a-award-title">Do more with less</h4>
            <p className="a-award-desc">
            Whether online or offline, we are inseparable from traffic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
