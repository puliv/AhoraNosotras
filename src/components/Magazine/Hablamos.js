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

        {/* HABLAMOS 1 */}
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
              "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA2/Hablamos.png?raw=true"
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
          <div className="section-div-split">
            <div className="section-div-half">
              <span className="section-div-half-right">
                Sin el agua suficiente para las acciones ni herramientas básicas de prevención somos presa fácil para el virus.
            </span>
            </div>
            <div className="section-div-half">
              <span className="section-div-half-left">
                Este momento nos da paso a reflexionar sobre cómo dejar atrás la visión antropocéntrica que tenemos de la naturaleza. Esa visión no es factible con la vida. No se puede seguir funcionando como si la contaminación de la Tierra fuera un dato más.
            </span>
            </div>
          </div>
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

        {/* DIVISION */}
        <div className="hablamos-division"></div>

        {/* HABLAMOS 2 */}
        <div className="section-titles">
          <h3 className="section-h3">HABLAMOS</h3>
          <h1 className="section-h1">
            Temuco en resistencia
          </h1>
          <h2 className="section-h2">Por Loreto Vilches, militante de Revolución Democrática</h2>
        </div>

        <div className="section-img-div">
          <img
            src={
              "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA2/Hablamos%20-%20Lore%20Vilches.png?raw=true"
            }
            alt="hablamos"
            className="section-img "
          />
        </div>

        <div className="section-div-span">
          <span className="section-span">
            En enero de este año en Temuco comenzó a gestarse el retorno de los campamentos que habían sido “erradicados” el 2014. Pongo el erradicado entre comillas porque los campamentos nunca se fueron, sino que seguían ocultos y resistiendo en lo más profundo de nuestro territorio.
          </span>
          <span className="section-span">
            En pleno verano conocimos a vecinos de un campamento recién instalado. Fue algo estremecedor, pues en ese lugar percibimos la desigualdad de muchas formas. Al pensar en esos momentos, agradezco haber conocido a sus integrantes antes de que comenzara esta  pandemia.
          </span>
          <span className="section-span">
            Gracias al campamento pudimos conocer a un sindicato de trabajadoras feriantes, quienes nos mostraron todo lo que han debido soportar para llevar sustento a sus hogares. Esos primeros encuentros permiten que hoy tengamos una relación estrecha tanto con los habitantes del campamento como con el sindicato. Desde aquí les digo a esas compañeras que mi admiración les pertenece ¡Son bacanas y poderosas las mujeres de Temuco!
          </span>
          <span className="section-span">
            Cuando inició la pandemia en nuestra comuna también comenzó una especie de pesadilla. A la incertidumbre y la angustia se sumaron las acciones represivas del municipio contra quienes más lo necesitaban. En ese instante, entre todas y todos nuestros compañero/as de militancia nos preguntamos a quienes podíamos recurrir y fue muy decepcionante ver el silencio cómplice y la indiferencia de quienes tienen cargos de elección popular a nivel local.
          </span>
          <span className="section-span">
            Miguel Becker es un personaje absolutamente siniestro. En Temuco vendedoras y vendedores ambulantes no solo tuvieron que lidiar con el COVID -19, sino también con el alcalde. En todos los medios salió a la luz el video de la persecusión y hostigamiento de Carabineros a hortaliceras mapuche, los desalojos de los campamentos y la invisibilización absoluta de quienes resisten a esos ataques sistemáticos por parte de las autoridades.

          </span>
          <span className="section-span">
            Nos cuesta mucho pensar que había gente que podía dormir tranquila, mientras en una parte de la comuna comenzaba a sentirse el hambre. Esta falta de humanidad te hacen ir perdiendo la fe en las personas por rato. Sumado a todo lo que trae la pandemia para nuestras vidas, ahí comienza el desvelo, los dolores de cabeza y la preocupación por esas compañeras.
          </span>
          <span className="section-span">
            A pesar de la rabia e indolencia, por otro lado nos llena el corazón ver a todas las personas que están dispuestas a ponerse al servicio de lo que se requiera. Por eso, en medio de esta crisis junto al territorio Temuco de Revolución Democrática nos pusimos a disposición del sindicato y actualmente apoyamos con locomoción, gestión, entrega de alimentos y asesoría administrativa a las integrantes del sindicato de feriantes.

          </span>
          <span className="section-span">
            En este camino, se generó una confianza muy grande. Un lazo de cariño y respeto. De colaboración y gratitud mutua con las dirigentas que me emociona montones. Toda esta labor ha significado un tremendo aprendizaje.

          </span>

          <div className="section-div-split">
            <div className="section-div-half">
              <span className="section-div-half-right" style={{ lineHeight: '1.25' }}>
                Pasar de lo individual a lo colectivo se vuelve urgente y necesario en estos tiempos donde ni el gobierno ni el municipio de Temuco han podido leer a la ciudadanía, ni mucho menos brindar protección y tranquilidad.
            </span>
            </div>
            <div className="section-div-half">
              <span className="section-div-half-left">
                Después de mucho sentir llegué a la conclusión que nuestro peor enemigo es el individualismo, que es precisamente lo que este sistema ha validado como forma de vida. Pasar de lo individual a lo colectivo se vuelve urgente y necesario en estos tiempos donde ni el gobierno ni el municipio de Temuco han podido leer a la ciudadanía, ni mucho menos brindar protección y tranquilidad.
            </span>
            </div>
          </div>

          <span className="section-span">
            Creo que un porcentaje no menor del Chile que despertó también lo hizo ahora en plena pandemia. Ahora que sabemos del poder de la organización aprendimos a reconocer en otras cuerpas nuestras propias luchas, dolores, sueños y alegrías.  Ahora sabemos que estamos juntas y juntos ¡venceremos!
          </span>
        </div>

        <ReadNext section={"hablamos"} />
      </div>
    );
  }
}

export default Hablamos;
