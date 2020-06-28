import React from 'react'
import { Profiles } from '../components/Profiles.js'
import howThisWork from '../assets/img/juntassomoscomunidad.png'
import { Subscribe } from './Subscribe.js'
import portada from '../assets/REVISTA_AHORA_NOSOTRAS/1_PORTADA/portada_revista.jpg'
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import { useWindowSize } from "@react-hook/window-size/throttled"

export default function Home() {
  const [width, height] = useWindowSize({ fps: 10 });
  const videoW = width && width > 800 ? width - 100 : width - 50
  const videoH = width && width > 400 ? height - 200 : height - 450


  return (
    <React.Fragment>
      <div className="home-scroll-container">
        <div id="home" className="home">
          <Link to="/magazine">
            <img
              src={portada}
              alt="portada"
              className="home-cover-img"
            />
          </Link>
        </div>
        <Link to="/aboutUs">
          <div className="home-infography">
            <h2 className="about-us-h2 how-work">¿Cómo funciona la Comunidad Ahora Nosotras?</h2>
            <img
              src={howThisWork}
              alt="Como funciona la comunidad"
              className="home-info-img"
            />
          </div>
        </Link>
        <div className="home-video">
          <ReactPlayer
            url="https://vimeo.com/429805329"
            controls
            width={videoW}
            height={videoH}
          />
        </div>
        <div id="profiles" className="home-section">
          <Profiles renderFromHome={true} />
        </div>
        <div id="subscribe" className="home-section">
          <Subscribe renderFromHome={true} />
        </div>
      </div>
    </React.Fragment >
  )
}
