import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";

export class Creamos extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="section creamos">
        <GoBack />
        <div className="section-titles">
          <h3 className="section-h3">CREAMOS</h3>
          <h1 className="section-h1">Homenaje a Fabiola Campillay</h1>
          <h2 className="section-h2">Equipo Ahora Nosotras</h2>
        </div>

        <div className="creamos-subtitles">
          <h2 className="creamos-h2-micro">Ilustración</h2>
          <h3 className="creamos-h3-micro">Por Carolina Leria</h3>
        </div>

        <div className="section-div-span">
          <span className="section-span">
            CREAMOS; es una sección pensada como un espacio de expresión,
            encuentro y desahogo entre compañeras por medio del arte. En este
            primer número de la Revista Ahora Nosotras dedicado al
            reconocimiento de las mujeres trabajadoras de nuestro país,
            realizamos un homenaje a Fabiola Campillay. Con 36 años y 3 hijos,
            esta vecina de la población Cinco Pinos de San Bernardo, que en
            octubre se desempeñaba como operaria de Carozzi, se convirtió en una
            de las primeras mujeres víctimas de trauma ocular que dejó la
            revuelta social de Octubre 2019. Tras el impacto de una bomba
            lacrimógena lanzada por el represivo actuar de Carabineros, a menos
            de 20 metros de su rostro, perdió sus dos ojos y exige justicia.
          </span>
        </div>

        <div className="creamos-div-img protag-div-aurora">
          <img
            src={
              "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/5_CREAMOS/FABIOLA_CAMPILLAY.png?raw=true"
            }
            alt="creamos"
            className="creamos-img "
          />
        </div>

        <div className="creamos-subtitles">
          <h2 className="creamos-h2-micro">Microcuento</h2>
          <h3 className="creamos-h3-micro">
            Por Margarita Portuguez G. Dirigenta Sindical
          </h3>
        </div>

        <div className="creamos-text-div-micro">
          <div className="creamos-div-left">
            <span className="creamos-span">
              Un martes de noviembre, camino al turno de noche a Carozzi donde
              trabajaba de operaria, el destino de Fabiola Campillay y su
              familia se selló para siempre. ¿La razón? Una bomba lacrimógena
              lanzada por las Fuerzas Especiales de Carabineros de Chile.
            </span>
            <span className="creamos-span">
              La prensa le llama el “Estallido Social”, otros preferimos decirle
              la Revuelta Popular. La comuna de San Bernardo donde vive Fabiola
              no está ajena a ese reclamo. Había protestas, había necesidades.
              Ella misma en su calidad de dirigente social organizó bingos, a
              ratos únicas formas de financiamiento que tienen las mayorías de
              las familias de Chile para enfrentar alguna enfermedad o
              imponderable económico.
            </span>
          </div>
          <div className="creamos-div-right">
            <span className="creamos-span-fabiola">
              Fabiola es una heroína como muchas mujeres que luchan día a día
              por su bienestar personal, familiar y también por su población, su
              barrio y a fin de cuentas, por su país.
            </span>
          </div>
        </div>

        <div className="creamos-text-div">
          <span className="section-span">
            Fabiola tenía un bajo sueldo, debía cumplir turnos extenuantes y una
            familia de quien preocuparse. Sin embargo, eso no fue impedimento
            para asumir otras responsabilidades o compromisos como dirigenta
            vecinal. También apagaba incendios como bombera y daba los pases gol
            en los campeonatos de fútbol en su trabajo. Fabiola se vinculaba
            activamente en su entorno y era capaz no sólo de ver más allá de sus
            propias carencias, sino de trabajar y ayudar al prójimo
            anónimamente. Fabiola en esos momentos ya es una heroína.
          </span>
          <span className="section-span">
            Por ahora Fabiola, mujer de sangre diaguita, madre de 3 hijos, hija
            de María Isabel, hermana de Ana María y compañera de Marco tendrá
            otros desafíos en el día a día y percibirá el mundo de formas que
            muchos desconocemos. Por eso, Fabiola no debe ser sólo recordada
            como un símbolo de la represión policial en el gobierno de Sebastián
            Piñera. Fabiola es una heroína como muchas mujeres que luchan día a
            día por su bienestar personal, familiar y también por su población,
            su barrio y a fin de cuentas, por su país.
          </span>
          <span className="section-span">
            Si queremos avanzar juntas en la construcción de un Chile consciente
            y sustentable, la reparación y justicia para Fabiola Campillay es
            indispensable y necesaria.
          </span>
        </div>
        <ReadNext section={"creamos"} />
      </div>
    );
  }
}

export default Creamos;
