import AboutImage from '../../assets/Eu_JG2.jpg'
import Laidson_CV from '../../assets/Laidson_CV.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
    <div className="container about__container">
      <div className="about__left">
        <div className="about__portrait">
          <img src={AboutImage} alt="" />
        </div>
      </div>
      <div className="about__right">
        <h2>Sobre Mim</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
          Construir projetos que meus clientes adoram sempre foi minha paixão. Estando na indústria de desenvolvimento web há quase 1 ano e atendendo a mais de 10 clientes satisfeitos em todo o mundo, estou sempre motivado a fazer mais!
            </p>
          <p>
          Olá, meu nome é Laidson Saturnino de Feira de Santana, Bahia. Sou um desenvolvedor web full-stack jr. com bacharelado em Ciências Contábeis. Minha principal prioridade é colocar sua empresa on-line da maneira certa, oferecendo um design padrão do setor e todas as funcionalidades de que você precisa para operar on-line sem problemas. Entre em contato hoje com os detalhes do seu projeto, vamos começar! Confira abaixo meu currículo!
            </p>
          <a href={Laidson_CV} download className='btn primary'>Download CV <HiDownload/></a>
      </div>
    </div>
   </section>
  )
}

export default About