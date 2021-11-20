import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

function Footer() {
  return (
    <footer>
      Feito com fins educacionais por Fernando Serpa<br />
      Dados consumidos da <a className="apiLink" href="https://www.themoviedb.org/documentation/api?language=pt-BR">API do The Movie DataBase</a><br />
      Baseado na plataforma Netflix a qual pertencem todos os direitos do design
      <div className="contacts">
        <a href="https://github.com/serpaef/" target="_blank" className="contLink" rel="noreferrer"><button className="linkButton" type="button"><GitHubIcon sx={{fontSize: 50}}/>/serpaef</button></a>
        <a href="https://www.linkedin.com/in/serpaef/" target="_blank" className="contLink" rel="noreferrer"><button className="linkButton" type="button"><LinkedInIcon sx={{fontSize: 50}}/>/serpaef</button></a>
      </div>
    </footer>
  )
}

export default Footer
