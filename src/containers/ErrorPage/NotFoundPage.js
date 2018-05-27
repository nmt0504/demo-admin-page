import React from 'react';
import '../style.css';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h1>404 Error</h1>
        <p className="zoom-area"><b>Sorry for this inconvenient.</b></p>
        <section className="error-container">
          <span className="four"><span className="screen-reader-text">4</span></span>
          <span className="zero"><span className="screen-reader-text">0</span></span>
          <span className="four"><span className="screen-reader-text">4</span></span>
        </section>
        <div className="link-container">
          <a target="_blank" href="https://www.silocreativo.com/en/creative-examples-404-error-css/" className="more-link">Back to home</a>
        </div>
      </div>
    )
  }
}

export default NotFoundPage;
