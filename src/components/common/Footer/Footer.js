import React from 'react';
import '../Footer/Footer.css';
import instagramLogo from '../../../static/img/logos/insta.svg';
import facebookLogo from '../../../static/img/logos/face.svg';
import linkedinLogo from '../../../static/img/logos/linked.svg';
import emailLogo from '../../../static/img/logos/email.svg';
import whatsappLogo from '../../../static/img/logos/whats.svg';
// import logo from '../../../static/img/logos/logosm.png';



const Footer = () => {
  return (
    <footer className="footer footer-centered">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-sm-6">
          <a className="navbar-brand" href="/home">
             {/* <img id="logo" src={logo} className="img" alt="..." /> */}
     
            <h4 className="display-8" id="nome" >Sistema de Gestão de Carteira</h4>
            <h4 className="display-9" id="tagline">Half-Blood Dev™</h4>     </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 className="footer-heading">Redes Sociais</h4>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="mailto:example@example.com">
            <img src={emailLogo} alt="E-mail" className="social-icon" />
          </a>
          <a href="https://wa.me/xxxxxxxxxxx" target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp" className="social-icon" />
          </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 className="footer-heading">Contato</h4>
            <ul className="footer-contact">
              <li><i className="fas fa-map-marker-alt"></i> Endereço: Rua dos Alfeneiros, Londres/UK</li>
              <li><i className="fas fa-phone"></i> Telefone: (12) 1242-4242</li>
              <li><i className="fas fa-envelope"></i> E-mail: contato@halfblood.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
