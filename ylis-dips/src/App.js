import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
      <div id="cs-background">
          <div className="title-container">
              <div className="box">
                  <header>
                      <h1 id="title">
                          <img src={("imgs/2021+Yli_'s+Dips+Logo-1.png")}
                          alt="logo" height="500" width="500" />
                      </h1>
                  </header>
              </div>
          </div>

      <div className="btn-group">
          <a href="order.html" className="col" id="order">Order Curated Boxes</a>
          <a href="build.html"  className="col" id="build">Build Your Own</a>
          <a href="contact.html"  className="col" id="contact">Contact Me</a>
      </div>
  </div>
</div>
  );
}

export default App;
