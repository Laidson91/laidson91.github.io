import { useEffect } from 'react'
import HeaderImage from '../../assets/Eu_Foto.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Laidson Saturnino</h3>
        <p data-aos="fade-up">
        Comecei a programar com JS em 2022, depois pulei para .NET & ASP.NET com C# para Web e Desktop. Desenvolvimento de aplicativos e agora estou trabalhando com Node.js,TypeScript, Angular, React.js, React Native.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className='btn primary'>Contatos</a>
          <a href="#portfolio" className='btn light'>Projetos</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank'
            rel='noopener noreferrer'> {item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header