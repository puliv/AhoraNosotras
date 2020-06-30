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
            <h1 className="section-h1">La bicicleta, una herramienta comunitaria para un nuevo Chile
            </h1>
            <h2 className="section-h2">Por Sandra Aguilera</h2>
          </div>

          <div className="section-img-div">
            <img
              src={
                "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/8_OPINAMOS/opinamos.png?raw=true"
              }
              alt="Opinamos"
              className="section-img"
            />
          </div>
          <div className="section-div-span">
            <span className="section-span">
              En 1896, Susan B. Anthony, feminista y sufragista, dijo: “La bicicleta ha hecho más para emancipar a las mujeres que nada en el mundo. Me levanto y me regocijo cada vez que veo a una mujer paseando sobre ruedas. Da a la mujer una sensación de libertad e independencia”. Esta cita, expresada hace 114 años, ya hablaba de la multiplicidad de sus aportes y las diversas dimensiones que comenzaba a revelar su uso.
            </span>
            <span className="section-span">
              En medio de dos momentos tan complejos para nuestro país, como el estallido social de octubre y la pandemia mundial, la bicicleta ha emergido como una gran herramienta de prevención y resiliencia humana. En este escenario de complejidades sociales y sanitarias, su relevancia es vital para la construcción de comunidades.
            </span>
            <span className="section-span">
              Según el Departamento de Estudios del Automóvil Club de enero, a partir de octubre 2019 y dadas las graves limitaciones de transporte y movilidad, en solo tres meses se aumentó en un 10 por ciento su uso. Una estadística reveladora, pues en el quinto Índice de Ciclismo Mundial realizado por Eco-Counter y New Cities, ya se había ubicado a nuestro país con un crecimiento del 10 por ciento de uso anual de la bicicleta.
            </span>
            <span className="section-span">
              Paradójicamente, mientras nos enfrentamos a graves problemas a nivel nacional, de salud física y mental, al hambre, a las problemáticas educacionales, de transporte, distribución de insumos, desempleo, este escenario se convirtió en una oportunidad. A través de la movilidad activa y sustentable es posible mejorar los asentamientos humanos del país y por tanto la vida de las personas.
            </span>
            <span className="section-span">
              Si bien siempre había estado en la en la dimensión más comunitaria, la bicicleta volvió a aparecer. Por eso, hoy no solo debe ser comprendida como un vehículo, es un vínculo entre diversas realidades. La bicicleta es un conector que nos permite estar en una escala diferente de aporte al desarrollo de la vida.
            </span>
            <span className="section-span">
              Desde octubre surgieron múltiples iniciativas desde la sociedad civil. Las acciones de agrupaciones ciclistas y activistas se volcaron a enseñar. Muchos talleres gratuitos emergieron en diversos sectores para explicar cómo reparar tu bicicleta, cómo cuidarte en tu traslado o cómo planificar la ruta. Si aumentaba la cantidad de viajes, también debían aumentar las iniciativas para que los y las más novatas pudieran circular sin contratiempos en sus trayectos
            </span>
            <span className="section-span">
              Esos talleres de mecánica básica, pasaron a ser talleres sociales de mecánica, porque ya no solo se aprendía unilateralmente a reparar algo. Se generó un intercambio de saberes y de experiencias. Se compartieron historias humanas y territoriales en cada encuentro. Finalmente, ambas partes regresaban con un aprendizaje práctico y de valor incalculable.
            </span>
            <span className="section-span">
              La bicicleta no solo es un vehículo para servicios delivery. No bastaba usarla como herramienta de prevención y de fomento de alguna actividad física, para mantenernos sanos y sanas. En el contexto actual, se adhirió su potencial para solucionar las problemáticas de logística y distribución.
            </span>
            <span className="section-span">
              En un trabajo colaborativo y bien articulado entre la población de riesgo y quiénes pueden prestar asistencia, diversas agrupaciones ciclistas aportan en el retiro y entrega de donaciones a amplios sectores de las ciudades. En la comuna de Independencia, el trabajo asociativo es entre la comunidad ciclista, cocineras y cocineros comunitarios, muchos de ellos migrantes, y la Municipalidad, para semanalmente repartir decenas de almuerzos.
            </span>
            <span className="section-span">
              Esa cocina comunitaria, se expresa como un círculo virtuoso de identidad territorial y de apoyo mutuo. Integra a las personas en la asistencia a otras e integra elementos transversales como la bicicleta y así genera un proyecto colectivo y una red que hace frente a la emergencia.
            </span>
            <span className="section-span">
              En otros ámbitos cotidianos, afectados por la crisis sanitaria, son múltiples las historias de profesoras y profesores que recorren varios kilómetros en bicicleta, para llegar a sus estudiantes con sus tareas y materiales de aprendizaje. Enfocándose principalmente en aquellos y aquellas que no cuentan con internet, en una especie de ejercicio para combatir las desigualdades, digitales y sociales, donde la bicicleta vuelve a ser un medio transversal y sencillo de conexión.
            </span>
            <span className="section-span">
              Si estuviéramos pensando en el futuro inmediato pos pandemia, se podrían generar reactivaciones de barrios y lograr fomentar economías locales en equilibrio. Una opción sería que los mismos hogares entreguen sus residuos orgánicos para generación de compost y avanzar hacia la producción de huertas locales, administradas por vecinas y vecinos, vendidas a precios justos y entregadas en los hogares en bicicleta.
            </span>
            <span className="section-span">
              Esta es solo una, de las infinitas actividades probables, para generar algo tan necesario como es la salud comunitaria de nuestros territorios. Sobre un siglo después, y tal como dijo Susan B. Anthony, nosotras continuamos aprendiendo sobre el valor de la bicicleta y cómo logra conectar lo social con lo humano
            </span>
          </div>

          <ReadNext section={"opinamos"} />
        </div>
      </div>
    );
  }
}

export default Opinamos;
