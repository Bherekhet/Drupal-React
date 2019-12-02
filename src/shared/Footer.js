import React from 'react';
import '../components/app/App.css'

//function for what gets displayed at footer section of the page
function Footer() {
    return(
      <div className="footer">
        <div className="footer-copyright text-center py-3 ">© 2019 Copyright:
          <a href="https://github.com/Bherekhet/Drupal-React.git"> Bereket Degefa</a>
        </div>
      </div>
    )
  }

export default Footer;