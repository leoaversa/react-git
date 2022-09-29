import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-flex">
      <div></div>

      <div className="logo-fender">
        <img src="../logofender.png" alt="logo" />
      </div>

      <div>
        <ul className="mediaq">
          <h6>Productos</h6>
          <li>Guitarras</li>
          <li>Bajos</li>
          <li>Cuerdas</li>
          <li>Accesorios</li>
          <li>Amplificadores</li>
          <li>Stratocaster</li>
        </ul>
      </div>

      <div>
        <ul className="mediaq">
          <h6>Productos</h6>
          <li>Guitarras</li>
          <li>Bajos</li>
          <li>Cuerdas</li>
          <li>Accesorios</li>
          <li>Amplificadores</li>
          <li>Stratocaster</li>
        </ul>
      </div>

      <div>
        <ul className="mediaq">
          <h6>Productos</h6>
          <li>Guitarras</li>
          <li>Bajos</li>
          <li>Cuerdas</li>
          <li>Accesorios</li>
          <li>Amplificadores</li>
          <li>Stratocaster</li>
        </ul>
      </div>

      <div>
        <ul>
          <h6>Productos</h6>
          <li>Guitarras</li>
          <li>Bajos</li>
          <li>Cuerdas</li>
          <li>Accesorios</li>
          <li>Amplificadores</li>
          <li>Stratocaster</li>
        </ul>
      </div>

      <div className="icons">
        <ul>
          <li>
            <a href="https://www.facebook.com/Fender">
              <img
                className="inner"
                src="../faceicon.png"
                alt="icon"
                width="35px"
              ></img>
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.instagram.com/fender/">
              {" "}
              <img
                className="inner"
                src="../instaicon.png"
                alt="icon"
                width="35px"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Fender?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <img
                className="inner"
                src="../twittericon.png"
                alt="icon"
                width="35px"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/fendermusical">
              <img
                className="inner"
                src="../youtubeicon.png"
                alt="icon"
                width="35px"
              ></img>
            </a>
          </li>
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Footer;
