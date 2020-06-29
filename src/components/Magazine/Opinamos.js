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
            <h1 className="section-h1">
              Falta de correponsabilidad: Otro síntoma de un mal pandémico
              llamado machismo
            </h1>
            <h2 className="section-h2">Por Paula Tina Mente</h2>
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
              Vivimos tiempos difíciles, pero si tratamos de ver el vaso medio
              lleno, podemos rescatar que la corresponsabilidad en el hogar se
              ha tornado un tema de discusión. Y para resolver cualquier
              problema, lo primero es tomar conciencia sobre él.
            </span>
            <span className="section-span">
              En Chile, desde el 2016 tenemos datos duros que corroboran que las
              mujeres hacemos más trabajo doméstico y de cuidado no remunerado
              que los hombres. Según la Encuesta Nacional del Uso del Tiempo
              (ENUT) del año 2015 hacemos más del doble: 6,1 horas las mujeres
              versus 2,8 horas de los hombres en un día tipo. Esta diferencia es
              transversal. Desde las personas que están dentro y fuera del
              mercado laboral, las que tienen más años de escolaridad y menos,
              las que son más y menos jóvenes hasta quienes tienen más y menos
              ingresos.
            </span>
            <span className="section-span">
              Además, si todas las horas destinadas tanto por hombres como
              mujeres al trabajo doméstico y de cuidado no remunerado fueran
              valorizadas a “precios de mercado” y este valor fuera agregado al
              PIB, este crecería en un 28 por ciento.
            </span>
            <span className="section-span">
              A partir de un estudio de Comunidad Mujer del 2019, se analizó que
              dentro del llamado “PIB ampliado”, el trabajo doméstico y de
              cuidado no remunerado representa el 21,8 por ciento. Del total
              14,5 puntos son aportados por las mujeres y 7,3 por los hombres.
              Esto significa que el trabajo doméstico y de cuidado no remunerado
              es la actividad económica más importante del país.
            </span>
            <span className="section-span">
              Pero, ¿En qué parte del contrato dice que si no hay colegio, la
              que tiene que reemplazar al profesor o profesora soy yo? ¿Quién
              definió que mis reuniones por videollamada son menos importantes y
              que pueden ser objeto de interrupciones de los niños y niñas?
              ¿Alguna vez acordamos que yo siempre iba a ser la que definiera
              qué se come y que, en caso de teletrabajar, le restaría horas a mi
              trabajo para cocinar?
            </span>
            <span className="section-span">
              Entonces, ¿Cuál es el problema? El abuso.
            </span>
            <span className="section-span">
              Las mujeres no tenemos ningún superpoder para darnos cuenta de que
              el cesto de la ropa sucia está desbordado y nada hay en la
              naturaleza de nuestros cuerpos que explique alguna facilidad
              extraordinaria para pasar la aspiradora.
            </span>
            <span className="section-span">
              Los hombres hacen uso de uno de los tantos privilegios que les
              otorga el sistema sexo-género imperante: por siglos, el espacio
              doméstico ha sido un asunto de mujeres y ellos descansan en eso.
              Pueden ir a luchar contra los dragones y liberar los reinos del
              yugo enemigo sin preocupación por el frente interno, pues siempre
              habrá una mujer que estará cuidando a sus hijos e hijas, incluso,
              a sus ancianos padre y madre, y, además, les tendrá el castillo
              impecable para cuando regresen.
            </span>
            <span className="section-span">
              Pero las mujeres hemos hecho el esfuerzo por ganarnos un lugar en
              el espacio público. Hemos ingresado masivamente a la educación
              superior, al mercado laboral y también a la política. ¿Podemos un
              día llegar tarde a la casa porque el dragón nos salió más chúcaro
              de lo esperado? ¿Podemos irnos un fin de semana a parlamentar con
              los cortesanos del reino de al lado para ver cómo resolvemos
              nuestros conflictos? ¿Podemos hacer esto sin que corra peligro el
              frente interno? ¿Tenemos esa tranquilidad?
            </span>
            <span className="section-span">
              Lamentablemente, en la mayoría de los casos, no. El frente interno
              debe ser socorrido por alguna abuela o personal remunerado. Al no
              existir una apropiación del espacio doméstico por parte de los
              hombres, nuestro arrojo se traduce en mil malabares conciliatorios
              o derechamente en un aumento de la carga global de trabajo, es
              decir, de la suma entre la carga de trabajo remunerada y no
              remunerada.
            </span>
            <span className="section-span">
              A nadie le gusta trabajar más; para cualquiera es mucho más cómodo
              que la comida esté servida a tener que prepararla. Pero no es
              tolerable seguir reproduciendo este desbalance.
            </span>
            <span className="section-span">
              Si hay mujeres que conscientes de la explotación se quejaron y
              consiguieron que sus parejas hicieran un poco más o si hay hombres
              que conscientes de la injusticia, decidieron enmendar y hacer un
              poco más, no lo sabremos oficialmente. El Instituto Nacional de
              Estadísticas (INE) este año debía realizar la II Encuesta Nacional
              sobre Uso del Tiempo (ENUT), pero el contexto de cuarentena obligó
              su postergación.
            </span>
            <span className="section-span">
              Es posible que la pandemia sirva para tomar conciencia, cambiar
              los patrones y dar un salto relevante hacia una distribución más
              equitativa de la carga de trabajo doméstico y de cuidado no
              remunerado —enhorabuena si la próxima ENUT lo recogiera—, pero no
              podemos dejarle a un bicho tamaña responsabilidad. Este problema,
              al no ser únicamente de las mujeres, ni de las parejas, sino de la
              sociedad, debe abordarse como tal, desde las políticas públicas
            </span>
            <span className="section-span">
              Una primera vía se encuentra en la formación. El sistema
              educacional debe contar con un abordaje de género que permita
              tener futuras generaciones corresponsables. En esto también son
              críticos los modelos de rol que se transmitan a través de los
              medios de comunicación y todos sus dispositivos socializadores.
            </span>
            <span className="section-span">
              Por otro lado, es fundamental contar con un sistema nacional de
              cuidados de acceso universal, que permita implementar una
              corresponsabilidad social y no solo parental o familiar frente a
              las necesidades de cuidado.
            </span>
            <span className="section-span">
              Al mismo tiempo, la institucionalidad pública y privada deben
              comprender que existen trabajadores y trabajadoras con
              responsabilidades familiares. Actualmente, en el Código del
              Trabajo no existe la corresponsabilidad parental. Las únicas con
              la responsabilidad y la titularidad del derecho a cuidar son las
              mujeres. Mientras eso no cambie, será difícil desarrollar culturas
              organizacionales que respalden el cumplimiento de los deberes que
              como padres tienen los hombres.
            </span>
            <span className="section-span">
              Por otro parte, es indispensable reconocer la importancia que
              tiene el trabajo doméstico y de cuidado no remunerado en el
              desarrollo económico y social. Sin este trabajo no hay
              sobrevivencia y tampoco la posibilidad de generar riqueza. Las
              mujeres que dedican su vida total o parcialmente a este trabajo no
              solo no reciben remuneración, tampoco tienen vacaciones ni
              previsión social. Tras la jubilación, para ellas no hay un
              reconocimiento que dé cuenta del aporte que hicieron con su
              trabajo al país. Es urgente que la institucionalidad machista, que
              se niega a darle valor a este trabajo, enmiende su decisión de
              nombrarlo como inactividad en las estadísticas de empleo, se
              decida a medirlos en las cuentas nacionales, y, por sobre todo,
              ofrezca una pensión a todas estas mujeres por sobre la línea de la
              pobreza.
            </span>
            <span className="section-span">
              Solo nos resta seguir empujando estas transformaciones a cada una
              desde su espacio. El proceso constituyente en curso es una enorme
              oportunidad para dejar atrás siglos de invisibilidad,
              subvaloración, subordinación y de injusticia. Preparémonos porque
              Ahora nos toca a Nosotras.
            </span>
          </div>

          <ReadNext section={"opinamos"} />
        </div>
      </div>
    );
  }
}

export default Opinamos;
