import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/nurse");
  }

  return (
    <div className="homesection">
      <div className="meshgradintss">
        <div className="bgshape1"></div>
        <div className="bgshape2"></div>
        <div className="bgshape3"></div>
      </div>
      <div className="forbgblur">
        <div className="homecontainer">
          <div className="homecontent">
            Connecting your loved one to a nurse
          </div>
          <button className="homebtn" onClick={handleClick}>
            Hire a Nurse
          </button>
        </div>
        <div className="homeimg"></div>
      </div>
    </div>
  );
}
export default Home;
