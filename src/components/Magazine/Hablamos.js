import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";
import { animateScroll as scroll } from 'react-scroll'

export class Hablamos extends Component {
  componentDidMount() {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="section hablamos">
        <GoBack />

        <div className="section-titles">
          <h3 className="section-h3">HABLAMOS</h3>
          <h1 className="section-h1">
            ¿Cómo cuidarnos del virus si no tenemos agua?
          </h1>
          <h2 className="section-h2">Por Lorena Donaire, Vocera y encargada Nacional Mujeres Modatima </h2>
        </div>

        <div className="section-img-div">
          <img
            src={
              "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/4_HABLAMOS/Hablamos.png?raw=true"
            }
            alt="hablamos"
            className="section-img "
          />
        </div>
        <div className="section-div-span">
          <span className="section-span">
            A causa de un modelo extractivista instalado brutalmente a mediados de los ochenta, la provincia de Petorca es un lugar que vive en crisis hace más de 15 años por falta de agua. Una provincia que tiene una alta población de adultos mayores concentrados principalmente en las localidades rurales.
          </span>

          <span className="section-span">
            Una provincia con habitantes que han dado paso a la resignación y a la resiliencia  de vivir en un territorio privado de agua y en permanente despojo. Una provincia que ha sido por siempre el patio trasero de la región de Valparaíso, donde políticos del duopolio y empresarios son cómplices de un modelo que vulnera sistemáticamente el derecho humano al agua.
          </span>
          <span className="section-span">
            La crisis sanitaria llega en el peor momento. Si bien desde el año 2008 la Provincia de Petorca fue declarada como zona de catástrofe hídrica, hoy nos consume el temor, la rabia y la impotencia que provoca el COVID - 19. Sin el agua suficiente para las acciones ni herramientas básicas de prevención somos presa fácil para el virus.
          </span>
          <span className="section-span">
            Desde la primera declaración de catástrofe hídrica, el agua prometida y entregada es muy diferente. De acuerdo a la Organización Mundial de la Salud (OMS), la higienización de manos debe ser mínimo 20 veces al día con el agua corriendo al menos 30 segundos. Esto nos impide limpiar y desinfectar con frecuencia las superficies de contacto diario.
          </span>
          <span className="section-span">
            Simplemente esto es imposible con los 50 litros de agua que se nos prometen. En la actualidad hay territorios que reciben menos de 20 litros de agua por día y que no cumplen con la calidad internacionalmente esperada.
          </span>
          <span className="section-span">
            La crisis sanitaria por COVID - 19 vino a develar todas las problemáticas asociadas al desabastecimiento. Ante inconsistencia en la forma y continuidad del abastecimiento hídrico, se profundizó una incertidumbre que no permite a la población rural de la Provincia de Petorca cubrir sus necesidades básicas de consumo e higiene personal, doméstica y seguridad alimentaria.
          </span>
          <span className="section-span">
            A lo que se suman altas tasas de informalidad laboral y de trabajo e ingresos precarios, campesinos empobrecidos, etc. Sin poder sostener sus actividades de sustento económico, ni cumplir con las recomendaciones de higiene que demanda la prevención del COVID-19  y que afectan de igual manera a un gran número de personas en la región.
          </span>
          <span className="section-span">
            A fin de frenar la rápida propagación de esta enfermedad y proteger a toda la población, es urgente que todas las personas, sobre todo los grupos de alto riesgo, tengan la oportunidad de acceder al agua potable para evitar la saturación de los centros de salud.
          </span>
          <span className="section-span">
            Esta situación ha provocado un sin fin de emociones. Hemos pasado desde el temor, la rabia y la impotencia hasta la rebeldía y valentía de romper con el confinamiento para ir apoyar a las comunidades que sufren estrés hídrico.
          </span>
          <span className="section-span">
            A través de operativos hemos entregado agua de calidad y certificada a aquellas localidades que han sido más golpeadas. Llevamos 9 salidas a terreno con más de 16 mil litros de agua entregados. Si bien sabemos que estas medidas no son suficientes, no podemos quedarnos sentados en nuestras zonas de confort sabiendo que nuestra gente vive en permanente riesgo.
          </span>
          <span className="section-span">
            Junto a las compañeras y compañeros de Modatima decidimos levantar esta campaña porque era un deber moral para nosotros y nosotras, quienes hemos sido defensores/as permanentes de la recuperación del agua y de los bienes naturales comunes.
          </span>
          <span className="section-span">
            Por otro lado, hoy en mi rol de dirigenta social, como parte de Revolución Democrática y como Coordinadora Territorial del equipo del Senador Juan Ignacio Latorre, hemos levantando iniciativas de cooperación con quienes más ha golpeado esta pandemia, con proyectos que van en apoyo de distintas comunidades de la Provincia de Petorca y Aconcagua.
          </span>
          <span className="section-span">
            Sin duda esta crisis nos dejará lecciones en distintos frentes, pero si hay algo claro es que no podemos volver a lo de antes. Si bien nos ha golpeado fuertemente como sociedad, este momento nos da paso a reflexionar sobre cómo dejar atrás la visión antropocéntrica que tenemos de la naturaleza. Esa visión no es factible con la vida. No se puede seguir funcionando como si la contaminación de la Tierra fuera un dato más.
          </span>
          <span className="section-span">
            Este es un gran desafío que tenemos a través de una nueva Constitución, que pueda relevar a la naturaleza como un sujeto de derecho y  compatibilizar esto con una economía más estable y  más justa.
          </span>
          <span className="section-span">
            En términos de enfoque de género y derechos, la crisis sanitaria golpea fuertemente a las mujeres en muchos aspectos. Pero también viene a evidenciar muchas vulneraciones que no son prioridad en las discusiones legislativas y que hoy se hacen urgentes. En condiciones totalmente adversas, una vez más cae sobre nuestros hombros la gran responsabilidad de sostener la economía de cuidados. Esto me lleva junto a mis compañeras a seguir levantando mi puño en esta interminable lucha por la recuperación de todos nuestros derechos.
          </span>
        </div>

        <ReadNext section={"hablamos"} />
      </div>
    );
  }
}

export default Hablamos;
