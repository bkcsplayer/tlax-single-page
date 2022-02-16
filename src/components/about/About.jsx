import "./about.css";
import Award from "../../img/binance.png";

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
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Proficiency with UI/UX tools and React
        </p>
        <p className="a-desc">
        A full-stack project built using React as the front-end + .NET as the back-end framework. Easy-App is a highly customized enterprise management tool. Serverless deployment because of the use of Amazon Cloud Services. Efficient, stable, and inexpensive.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Project In Progress</h4>
            <p className="a-award-desc">
             Develop an automated grid trading bot based on Binance API and Python
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
