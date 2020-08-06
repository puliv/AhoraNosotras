import React, { Component } from "react"
import GoBack from "./GoBack"
import ReadNext from "./ReadNext"
import { animateScroll as scroll } from 'react-scroll'


export class Opinamos extends Component {
  componentDidMount() {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div>
        <div className="section opinamos">
          <GoBack />

          <div className="section-titles">
            <h3 className="section-h3">OPINAMOS</h3>
            <h1 className="section-h1">OBLIGADAS AL ENCIERRO
            </h1>
            <h2 className="section-h2">Por Valeria Cárcamo, Vocera Coordinadora 8M Valparaíso</h2>
          </div>

          <div className="section-img-div">
            <img
              src={"https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA3/opinamos.png?raw=true"}
              alt="Opinamos"
              className="section-img"
            />
          </div>
          <div className="section-div-span">
            <span className="section-span">
              Ha sido cada vez más difícil definir el paso siguiente en esta pandemia. Más pesado con cada actuar del ministerio de la Mujer y Equidad de Género que, con su silencio, nos condena a todas a la violencia que ha sostenido constantemente el sistema. Cuando cierran las puertas de nuestros hogares, nos encierran en el círculo de violencia más común: el “intrafamiliar”.
            </span>
            <span className="section-span">
              Mientras esto ocurre, en cientos de hogares, el gobierno avanza solo en políticas superficiales como medidas de prevención de la violencia machista. Ejemplo de ello fue la campaña de “mascarilla 19” que jamás dio frutos o teléfonos de ayuda como el 1455 que solo quedó precisamente en llamadas.
            </span>
            <span className="section-span">
              Otro punto problemático es que estas políticas, al ser pocas, van dirigidas principalmente hacia mujeres cis heterosexuales. Esto deja en el olvido políticas públicas efectivas para las mujeres lesbianas, bisexuales, trans y gays, quienes en sus “hogares” son víctimas de violencia o discriminaciòn producto de su expresión de género y/u orientación sexual.
            </span>

            {/* Destacado */}
            <div className="section-div-split">
              <div className="section-div-half">
                {/* Negrita */}
                <span className="section-div-half-right">
                  Nadie piensa en ellas y quedan desamparadas de las medidas sociales frente al escenario actual.
            </span>
              </div>
              <div className="section-div-half">
                <span className="section-div-half-left">
                  La correctividad y la discriminación son indicadores de violencias marcadas en las palabras diarias con las que deben lidiar las mujeres de la comunidad LGTBI y bajo la misma presión, poder llevar el transcurso del día. Nadie piensa en ellas y quedan desamparadas de las medidas sociales frente al escenario actual.
            </span>
              </div>
            </div>

            <span className="section-span">
              Durante mucho tiempo, hablar de nuestras cuerpas ha sido todo un desafío, porque planteamos la idea de que tenemos autonomía sobre ella y podemos decidir cómo queremos vivir nuestra sexualidad.
            </span>
            <span className="section-span">
              Esto ha sido foco de represión, persecución y discriminación. La idea de la mujer empoderada, cis, diversa y disidente, ha llevado a empujar la invisibilización cada vez de nuestras demandas, porque al vernos decidiendo sobre nuestra reproducción, ven también que dominamos nuestra situación en la subordinación de derechos.
            </span>
            <span className="section-span">
              Bajo este crudo panorama, las organizaciones sociales feministas y frentes de las diversidades y disidencias sexuales somos quienes hemos tenido que solventar las falencias del trabajo que debía impulsar el gobierno, quienes jamás han desarrollado un enfoque de género íntegro, capaz de combatir la violencia.
            </span>
            <span className="section-span">
              En ese sentido, las autoridades polìticas deben tomar un rol principal en la preveción, comprender la interseccionalidad, entender que existen múltiples focos de discriminación contra las mujeres y no seguir invisibilizando realidades.
            </span>
            <span className="section-span">
              Junto con la necesidad de eliminar la violencia contra nosotras en tiempos de pandemia, también crece la necesidad de tomar conciencia de ello y cambiar la forma de pensar las políticas públicas, abarcar la transversalidad en demandas de mujeres cis, disidentes y diversas para crear un espacio protector por y para nosotras.
            </span>
          </div>

          <ReadNext section={"opinamos"} />
        </div>
      </div>
    );
  }
}

export default Opinamos;
