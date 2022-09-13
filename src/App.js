import laptop from "./laptop.png";
import mobile from "./mobile.png";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <a href="https://www.wix.com" className="logoWix">
              <span>WIX</span>
            </a>
            <img src={laptop} className="img" alt="laptop" />
            <span>|</span>
            <img src={mobile} className="img" alt="laptop" />
          </div>
          <div className="right">
            <p>Нажмите Редактировать, чтобы создать ваш сайт!</p>
            <a href="htps://www.wix.com" className="more">
              Подробнее
            </a>
            <button className="btn1">Редактировать</button>
          </div>
        </div>
      </header>
      <main>
        <div className="title">
          <h1>Олег Марков</h1>
          <div className="list">
            <ul className="about">
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">Обо мне</a>
              </li>
              <li>
                <a href="#">Связаться</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="photos">
          <div className="column">
            <img
              src="https://static.wixstatic.com/media/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg"
              alt="11"
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_3eea4c192eed4667a602ead5652459c5.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_3eea4c192eed4667a602ead5652459c5.jpg"
              alt="12"
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_b9747effc3074458a295cf5674f8c73c.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b9747effc3074458a295cf5674f8c73c.jpg"
              alt="13"
            />
          </div>
          <div className="column">
            <img
              src="https://static.wixstatic.com/media/d78df6_9f4f79dd27814710b261e3acb931156e.jpg/v1/fill/w_453,h_680,al_c,q_80,usm_0.66_1.00_0.01/d78df6_9f4f79dd27814710b261e3acb931156e.jpg"
              alt="21"
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_b572be78b8984e2db58978eb21e433d7.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b572be78b8984e2db58978eb21e433d7.jpg"
              alt="22"
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_394a136048754355ad8432b30522c761.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_394a136048754355ad8432b30522c761.jpg"
              alt="23"
            />
          </div>
          <div className="column">
            <img
              src="https://static.wixstatic.com/media/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg"
              alt="31"
            />

            <img
              src="https://static.wixstatic.com/media/d78df6_afe9335eb67640c988d648f7671308e5.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_afe9335eb67640c988d648f7671308e5.jpg"
              alt="32"
            />

            <img
              src="https://static.wixstatic.com/media/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg"
              alt="33"
            />
          </div>
        </div>
        <div className="footer">
          <p>
            © 2023 Олег Марков. Сайт создан на{" "}
            <a href="https://www.wix.com">Wix.com.</a>
          </p>
          <ul className="socials">
            <li>
              <a href="www.facebook.com/wix">
                <img
                  className="socialSets"
                  src="https://static.wixstatic.com/media/8d2c2a4846503b9067e2fd2f590445c2.wix_mp/v1/fill/w_29,h_29,al_c,usm_0.66_1.00_0.01,enc_auto/8d2c2a4846503b9067e2fd2f590445c2.wix_mp"
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a href="www.flicker.com/wix">
                <img
                  className="socialSets"
                  src="https://static.wixstatic.com/media/f33e5c8ff44ad726a15419f6ff97b3fd.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f33e5c8ff44ad726a15419f6ff97b3fd.png"
                  alt="flicker"
                />
              </a>
            </li>
            <li>
              <a href="www.twitter.com/wix">
                <img
                  className="socialSets"
                  src="https://static.wixstatic.com/media/fe7017590fbd384c7502a64601c7b444.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe7017590fbd384c7502a64601c7b444.png"
                  alt="flicker"
                />
              </a>
            </li>
            <li>
              <a href="www.pinterest.com/wixcom/">
                <img
                  className="socialSets"
                  src="https://static.wixstatic.com/media/a0a5617532c029a9bcc4b6490606cc49.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a0a5617532c029a9bcc4b6490606cc49.png"
                  alt="flicker"
                />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
