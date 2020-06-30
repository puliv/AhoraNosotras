import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";
import { animateScroll as scroll } from 'react-scroll'

export class Editorial extends Component {
  componentDidMount() {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="section editorial">
        {/* HEAD */}
        <GoBack />
        <div className="section-titles">
          <h3 className="section-h3">EDITORIAL</h3>
          <h1 className="section-h1">
            Un Chile donde la vida esté en el centro
          </h1>
          <h2 className="section-h2">
            Por Anita Martínez, Directora Revista Ahora Nosotras
          </h2>
        </div>
        <div className="section-img-div">
          <img
            src={
              "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA2/Editorial.png?raw=true"
            }
            alt="editorial"
            className="section-img"
          />
        </div>

        {/* BODY */}
        {/* <div className="section-div-span"> */}
        <span className="section-span">
          “No es sequía, es saqueo”, decían miles de carteles en la revuelta popular ocurrida en Octubre de 2019. Se trata, entonces, de una verdad que ya no se puede tapar y que carga la mayoría de sus costos sobre las espaldas de las mujeres. Según datos de Modatima, en los territorios con crisis hídrica las mujeres son las que principalmente entregan el agua a sus comunidades. Ejemplo de ello es que 8 de 10 mujeres son recolectoras de agua, donde entre eso hay niñas incluidas.
          </span>

        <span className="section-span">
          Pero el modelo neoliberal y extractivista no solo ha sacrificado la calidad de vida de miles de familias, sino que también ha respondido con amenazas y el asesinato de cientos de dirigentas que, a lo largo de todo el mundo, han decidido defender sus territorios y a la naturaleza, en tanto patrimonio. Volviéndolo una verdadera afrenta entre dos visiones que se contraponen.
          </span>
        {/* </div> */}

        {/* <div className="section-div-split">
          <div className="section-div-half">
            <span className="section-div-half-right">
            </span>
          </div>
          <div className="section-div-half">
            <span className="section-div-half-left">
            </span>
          </div>
        </div> */}

        <span className="section-span">
          Por un lado, una que pone en el centro un modelo capitalista neoliberal y su dictámenes, entre ellos: la invisibilización y devaluación del trabajo doméstico y de cuidados, aun cuando sean estos los que sostienen la tan ansiada productividad del modelo; junto a la idea infinitud de los recursos naturales, en tanto se asume que se dispone de ellos de forma inagotable y sin límites.
        </span>
        <span className="section-span">
          Y por el otro, una visión que entiende a la humanidad solo como una parte más de la naturaleza y por tanto, pone énfasis en la forma en cómo ambas se conectan y son interdependientes. Algo que nuestros pueblos originarios tuvieron siempre presente. Tanto que les significó ser despojados de sus tierras, cultura y cosmovisión por el mismo aparato estatal, quien también se encargó de implantar el actual modelo.
        </span>
        <span className="section-span">
          Sin embargo, la fragilidad de ese modelo y de nuestra propia existencia quedaron demostrados en esta pandemia. No solo porque somos seres que dependemos de la naturaleza, sino que también porque requerimos del cuidado de otra y nos relacionamos entre nosotras mediante ese trabajo y cuidado. No asumir esta realidad nos impide notar que el tiempo se nos acaba,  y que el coronavirus pareciera ser una más de una seguidillas de crisis que se avecinan, entre ellas, la Crisis Climática.
        </span>
        <span className="section-span">
          Vale preguntarse entonces, ¿Cómo pensamos reactivar la economía y reconstruir Chile sin que eso implique el sacrificio de zonas completas y de quienes las habitan?, ¿Qué o quiénes permiten que el mundo funcione de la forma en cómo lo solíamos hacer? Y finalmente, superada esta crisis, ¿Es posible seguir adelante sin que la tierra ni las mujeres sean territorios de conquista?
        </span>

        <span className="section-span">
          Así, en el contexto de una de las crisis sanitarias más graves de las últimas décadas y el desplome el sistema económico vigente junto al desamparo de miles de trabajadoras por el Estado, resulta fundamental nuestra capacidad de trazar el nuevo horizonte que imaginamos para Chile. Y en este la vida debe estar en el centro y esto considera especialmente la forma en cómo la humanidad se relaciona y valora a la naturaleza.
        </span>
        <span className="section-span">
          Proponemos, entonces, al ecofeminismo como piedra angular para la reconstrucción de un nuevo Chile, en tanto teoría política que cuestiona a un modelo económico basado en el crecimiento por acumulación y en cómo este reproduce la vida bajo sociedades capitalistas neoliberales. Solo esto nos permitirá dejar de intentar sobrevivir a cada una de estas crisis y empezar a pensar, en serio, en una sostenibilidad humana que sea consistente con una ecológica. Porque el sistema económico ha de estar a disposición de quienes habitamos este mundo y no limitando nuestra existencia dentro de él.
        </span>

        {/* CREDITOS */}
        <div className="credits">
          <img
            src={
              "https://raw.githubusercontent.com/puliv/AhoraNosotras/master/src/assets/REVISTA2/Creditos.png"
            }
            alt="Creditos"
            className="credits-img"
          />
        </div>

        {/* SEGUIENTE SECCIÓN */}
        <ReadNext section={"editorial"} />
      </div>
    );
  }
}

export default Editorial;
