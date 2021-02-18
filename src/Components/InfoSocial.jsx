import React from 'react';
import '../Sass/social.scss';

const InfoSocial = () => {
  return ( 
    <aside className='info-social'>
      <div className="cont-info text">
        <h3>XKCD API</h3> 
      </div>
      <div className="cont-info text">
        <h3>Nicolas Valencia</h3> 
      </div>
      <div className="cont-info social">
        <a href="https://github.com/eduvaldev/comicApi"> <i className="fas fa-file-code"></i></a>
        <a href="https://www.linkedin.com/in/nicolas-valencia-093315193/"> <i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/eduvaldev"> <i className="fab fa-github"></i></a>
      </div>
    </aside>
   );
}
 
export default InfoSocial;