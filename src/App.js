import React, { Component, Fragment } from 'react'
import './App.css'

import artigo1 from './assets/images/artigo1.jpg'
import artigo2 from './assets/images/artigo2.jpg'
import artigo3 from './assets/images/artigo3.jpg'
import facebook from './assets/images/facebook.png'
import fperfil from './assets/images/fperfil.jpg'
import git from './assets/images/git.png'
import portfolio1 from './assets/images/portfolio1.png'

import curriculo from './assets/file/curriculo.pdf'


class App extends Component {
  render() {
    return <Fragment> 

      <nav className='menu-nav'>
        <ul className='menu-list'>
          <li className='container'>
            <a href="#apres"> PERFIL</a>
          </li>
          <li className='container'>
            <a href="#skill"> SKILLS</a>
          </li>
          <li className='container'>
            <a href="#blog"> BLOG</a>
          </li>
          <li className='container'>
            <a href="#portfolio"> PORTFOLIO</a>
          </li>
          <li className='container'>
            <a href="#info"> INFO</a>
          </li>
          <li className='container'>
            <a href="#contato"> CONTATO</a>
          </li>
        </ul>
      </nav>
      
      <section id='apres'>
        <div className='apres-esquerda'>
          <div className='apres-esquerda-container'>
            <img src={fperfil}></img>
            <p>Oi, me chamo Henrique Jacomini de Oliveira, Nasci e moro em Córnelio Prócopio - PR. 
              Atualmente cursando Análise e Desenvolvimento De Sistemas (UTFPR).
            </p>
            <a href={curriculo} target="_blank" className='myButton'>CURRÍCULO COMPLETO</a>
          </div>
        </div>

        <div className='apres-direita'>
          <div className='apres-direita-container'>
            <h2>HENRIQUE JACOMINI DE OLIVEIRA</h2>

            <h3>INTERESSES</h3>
            <ul>
              <li>Desenvolvimento de Jogos</li>
              <li>Desenvolvimento de Aplicativos Mobile</li>
            </ul>

            <h3>IDIOMA</h3>
            <ul>
              <li>Português – Nativo</li>
            </ul>

            <h3>FORMAÇÃO</h3> 
            <ul>
              <li>Cursando Análise E Desenvolvimento De Sistema</li>
            </ul>

            <h3>ATIVIDADE</h3>
            <ul>
              <li>Desenvolvimento de Sistemas Web</li>
              <li>Estudante</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='skill'>
        <div className='skill-container'>
          <h1>SKILLS</h1>
          <h3>Conhecimento basico que possuo de algumas linguagens</h3>
          <p>C</p>
          <p>C#</p>
          <p>Java</p>
          <p>PostgreSQL</p>          
        </div>
      </section>

      <section id='blog'>
        <div className="blog-container">
          <h1>BLOG</h1>
          <div className="art">
            <a target="_blank" href="https://mundoconectado.com.br/noticias/v/7363/conheca-o-palm-phone-o-novo-mini-smartphone-da-palm">
              <img src={artigo1}></img>
            </a>
            <h1>Conheça o Palm Phone, o novo mini-smartphone da Palm</h1>
            <p>Aparelho super portátil serve como "companheiro" para seu smartphone</p>
          </div>

          <div className="art">
            <a target="_blank" href="https://adrenaline.uol.com.br/2018/10/19/56850/analise-placa-de-video-evga-geforce-rtx-2070-black/">
              <img src={artigo2}></img>
            </a>
            <h1>EVGA GeForce RTX 2070 Black</h1>
            <p>Placa entrega preço e performance de GTX 1080, e segue devendo diferenciais RTX</p>
          </div>

          <div className="art">
            <a target="_blank" href="https://adrenaline.uol.com.br/2018/10/01/56625/analise-games-mega-man-11/">
              <img src={artigo3}></img>
            </a>
            <h1>Mega Man 11</h1>
            <p>Jogo incorpora bem novos elementos sem perder a essência dos clássicos</p>
          </div>
        </div>
      </section>

      <section id='portfolio'>
        <div className="portfolio-container">
          <h1>PORTFOLIO</h1>
          <img src={portfolio1}></img>
        </div>      
      </section>

      <section id='info'>
        <div className='info-container'>
          <h1>MAIS INFORMAÇÕES</h1>
          
          <div className='info-esquerda'>
            <div className='info-esquerda-container'>
              <h2>BIOGRAFIA</h2>
              <p>
                Eu ingressei no curso de Análise e 
                Desenvolvimento De Sistemas no ano de 2015. 
              </p>
            </div>
          </div>

          <div className='info-direita'>
            <div className='info-direita-container'>
              <h2>PROFISSÃO</h2>
              <p>
                Desde de jovem eu ja me interessava por computadores
                e sempre tive a vontade de ingressar em alguma area de tecnologia
                e com passar do tempo fui descobrindo mais sobre esse tema e acabando 
                escolhendo a area de desenvolvimento.
              </p>
            </div>          
          </div>
          
          <a href="https://github.com/henriquejo">
            <img src={git}></img>
          </a>
          <a>GITHUB</a>
        </div>
      </section>
      
      <section id='contato'>
        <div className='contato-container'>
          <h3>Entre em Contato</h3>
          <h4>Entre em contato comigo pelo formulário ao lado</h4>

          <form action="https://formspree.io/your@email.com" method="POST">
            <input type="text" name="name" placeholder="nome"></input>
            <p>Preencha este campo.</p>
            <
              input type="email" name="email" placeholder="email"></input>
            <p>Preencha este campo.</p>
            
            <input type="text" name="tema" placeholder="assunto"></input>
            <p>Preencha este campo.</p>
            
            <textarea rows="4" cols="111" name="msg" placeholder="mensagem"></textarea>
            <p>Preencha este campo.</p>
            
            <a href="#" class="enviar-button">ENVIAR</a>
          </form>

          <a className="fb" href="https://www.facebook.com/henrique.jacomini.7" target="_blank">
            <img src={facebook}></img>
          </a>
        </div>      
      </section>

      <footer className="rodape">
        <div className="rodape-container">
          <p>Henrique Jacomini de Oliveira</p>
          <p>henriquejacomin1@live.com</p>
        </div>
      </footer>

    </Fragment>
  }
}

export default App;
