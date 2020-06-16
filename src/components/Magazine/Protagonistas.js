import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";

export class Protagonistas extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="section protagonistas">
        <GoBack />
        <div className="section-titles">
          <h3 className="section-h3">PROTAGONISTAS</h3>
          <h1 className="section-h1">
            Aurora Pardo: “Chile es un mal empleador”
          </h1>
          <h2 className="section-h2">Por Javiera López Layana</h2>
        </div>

        <div className="section-img-div">
          <img
            src={
              "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/3_PROTAGONISTAS/protagonistaspng-03.png?raw=true"
            }
            alt="protagonistas"
            className="section-img"
          />
        </div>
        <div className="protag-div-aurora">
          <span className="section-span">
            En medio de esta crisis social y económica, en cada rincón de Chile
            hay mujeres que frente al abandono del Estado dejan a un lado el
            miedo para buscar soluciones. En este primer número de Ahora
            Nosotras, conversamos con Aurora Pardo, dirigenta social y sindical
            que entre el ajetreo del supermercado y las ollas comunes en su
            población diariamente se pregunta “¿Cómo puede ser posible que
            algunos se crean dueños de nuestras vidas?”
          </span>

          <span className="section-span">
            Sea cara a cara o por medio de una pantalla de computador, Aurora
            Pardo González sonríe para hacer frente a la vida. Aurora tiene 44
            años y vive en la población Las Turbinas, ubicada en el límite de
            las comunas de Lo Espejo y San Bernardo, en la periferia de
            Santiago.
          </span>
          <span className="section-span">
            En el 2004 ingresó a trabajar como cajera al supermercado Líder del
            paradero 17 de Gran Avenida, San Miguel. Cuatro años más tarde
            participó en la creación del primer sindicato autónomo en “DyS”,
            grupo controlador de la cadena los hermanos Felipe Ibáñez Scott y
            Nicolás Ibañez Scott, hasta el 2009. A pesar de la compra de la
            marca Líder en manos de Wal-Mart, uno de los operadores de
            supermercados más grande en los Estados Unidos, siempre ha trabajado
            en el mismo lugar.
          </span>
          <span className="protag-span-aurora">
            <span className="protag-span-aurora bold">
              “Durante los años que llevo presente en el sindicato y cuando
              Wal-Mart ha tratado de vulnerar los derechos fundamentales de los
              trabajadores y <span className="p-aurora"> trabajadoras </span>
              siempre he tratado de estar presente en las demandas que van en
              favor de mis compañeros y
              <span className="p-aurora"> compañeras</span>
            </span>
            ”, explica Aurora Pardo, quien actualmente se desempeña como
            estudiante de Derecho en la Universidad Autónoma. Su motivación para
            estudiar esa carrera fue aprender cómo se redactan las reglas del
            juego de un país desigual.
          </span>
        </div>

        <div className="protag-div-top">
          <span className="section-span">
            Para hacer frente a la crisis, el gobierno de Sebastián Piñera
            impulsó la Ley de Protección al empleo, medida que permite que los
            empleadores dejen de pagar los sueldos a sus trabajadores para que
            éstos lo cobren a través del seguro de cesantía y, de esta manera,
            no tengan que reducir su personal.
          </span>
        </div>

        {/* <div className="protag-div-main"> */}
        <div className="section-div-split">
          <div className="protag-div-left">
            <span className="protag-span-left">
              “En medio de esta pandemia, hemos visto muchas empresas
              acogiéndose a la Ley de Protección al Empleo. El problema es que
              muchas nunca han sido ni pymes, mini-pymes o negocios familiares.
              Son grandes empresas internacionales que tienen lucas como para
              poder pagar las remuneraciones justas a los trabajadores”
            </span>
          </div>
          <div className="protag-div-right">
            <span className="protag-span-right">
              Tras su promulgación, varias empresas, entre ellas grandes tiendas
              del retail o multinacionales como Ripley, La Polar, Starbucks,
              H&M, Corona, entre otras decidieron sumarse a la normativa para
              “proteger a los trabajadores ante la posibilidad de quedar sin
              trabajo”.
            </span>
            <span className="protag-span-right">
              Según la última actualización realizada por la ministra del
              Trabajo, María José Zaldívar, hasta el viernes 15 de mayo, 593.615
              trabajadores habían hecho solicitudes para estar bajo la
              normativa, mientras que 86.070 empresas ingresaron peticiones, de
              acuerdo con el último informe de la Superintendencia de Pensiones.
            </span>
          </div>
        </div>

        <div className="protag-div-bottom">
          <span className="section-span">
            “En medio de esta pandemia, hemos visto muchas empresas acogiéndose
            a la Ley de Protección al Empleo. El problema es que muchas nunca
            han sido ni pymes, mini-pymes o negocios familiares. Son grandes
            empresas internacionales que tienen lucas como para poder pagar las
            remuneraciones justas a los trabajadores” - reclama Aurora durante
            la videollamada.
          </span>
        </div>

        <div className="protag-div-work-future">
          <h2 className="protag-h2-work-future">El futuro del trabajo</h2>

          <span className="section-span">
            A diferencia de la situación laboral de más un millón de chilenos y
            chilenas que debido a la crisis han perdido su trabajo o tienen sus
            contratos suspendidos, esta dirigenta social reconoce que Wal - Mart
            “se ha portado bien con los trabajadores”. Para ella, la razón no es
            al azar y tiene su justificación en el tipo de productos que vende
            la empresa en la que labura.
          </span>
          <span className="section-span">
            “Si bien tenemos electrodomésticos, bazar o vestuario vendemos
            alimentos de primera necesidad. Entonces, Wal - Mart ha mantenido
            los trabajos de mis compañeros y compañeras a nivel nacional. Otra
            razón es que hoy enfrentamos una negociación colectiva a nivel
            nacional desde Arica hasta Punta Arenas y que debería estar
            terminada por junio o fines de julio”, explica Aurora Pardo.
          </span>
          <span className="section-span">
            La técnico jurídico y ahora estudiante de quinto año de derecho
            reconoce que aunque “faltan algunos detalles en la negociación”
            valora la importancia de la organización sindical para la conquista
            de mejoras para los trabajadores y trabajadoras. Debido a la
            reestructuración del mercado laboral y fenómenos como la
            automatización a Aurora Pardo también le preocupa el futuro del
            trabajo en Chile.
          </span>
          <span className="section-span">
            “Cuando era DyS sólo había remuneración. Hemos ido avanzando harto
            en las negociaciones colectivas, pero siempre hay que estar atentos
            con lo que se viene y sobretodo, con las contrataciones de las
            personas nuevas en Wal - Mart. Sin embargo, hay discusiones que ya
            están presentes como la llamada polifuncionalidad. Estas son
            contrataciones a 4 horas y con alta rotación que merman bastante las
            remuneraciones de los trabajadores del retail”, advierte.
          </span>
          <span className="section-span section-span-work-future bold">
            Aurora mencionas lo indignante que te parece el actuar de algunas
            grandes empresas. Como dirigenta sindical y estudiante de derecho
            ¿De qué manera se vive ese proceso de negociación colectiva cuando
            en paralelo se crean leyes que finalmente desprotegen a los
            trabajadores y trabajadoras?
          </span>
          <span className="section-span">
            Como Sindicato de Autónomo de Wal-Mart pertenecemos a la
            Coordinadora de Sindicatos del Comercio y estuvimos presentes
            durante la últimas semanas cuando Cencosud suspendió los contratos
            con los trabajadores. Afortunadamente los compañeros y compañeras de
            Cencosud denunciaron a la empresa cuando ellos pretendían repartirse
            las utilidades de la empresa entre sus accionistas. Esta crisis no
            la pueden pagar los trabajadores. Por eso, el dirigente tiene que
            estar atento siempre y sobretodo en época de crisis. El empleador
            siempre va tratar de defender sus bolsillos, defender sus arcas, no
            querer repartirlas.
          </span>
        </div>

        <div className="protag-div-text">
          <div className="div-question">
            <h2 className="protag-h2-crisis">La crisis en primera persona</h2>

            <div className="section-div-split">
              <div className="crisis-left">
                <span className="crisis-left-span">
                  "La crisis visibiliza la pobreza real que hay. Si no se hace
                  una nueva Constitución, si no quitamos de raíz el Estado
                  subsidiario de la Constitución nunca jamás se va a solucionar
                  el problema"
                </span>
              </div>
              <div className="crisis-right">
                <span className="protag-span-right crisis-right-span">
                  Desde el inicio de la pandemia y al igual que en tiempos
                  pasados, las mujeres han estado en la primera línea del
                  combate al hambre e incertidumbre producto del COVID 19. De
                  este modo, si en octubre de 2019 la frase “solo el pueblo
                  ayuda al pueblo” resonó junto a las cacerolas, hoy está más
                  vigente que nunca gracias a la generación de redes solidarias
                  y el levantamiento de ollas comunes en barrios populares.
                </span>
              </div>
            </div>

            <span className="section-span">
              Aurora aparte de ser dirigenta sindical, se desempeña como
              presidenta de la Unidad Vecinal de la población Las Turbinas de Lo
              Espejo. Ante la falta de internet de muchos pobladores, desde ese
              rol ayuda a sus vecinos a realizar trámites del seguro de
              cesantía, obtener clave única para acceder a beneficios, imprimir
              cotizaciones o sacar salvoconductos para aquellos vecinos que
              trabajan en la feria.
            </span>
          </div>

          <div className="div-question">
            <h3 className="protag-h3">
              ¿Qué desafíos te ha traído en términos personales, familiares y
              laborales la pandemia?
            </h3>
            <span className="section-span">
              No he podido hacer cuarentena total en mi casa producto del
              trabajo y me preocupa bastante lo que ocurre en mi población. Con
              otras dirigentas hemos creado dos veces ollas comunes. Juntamos
              unos recursos y salimos en ayuda de unas familias para darles
              mercadería. Nosotros siempre hemos tenido crisis en las casas,
              siempre han habido crisis, porque a la gente no le alcanza para
              comer. Para los insumos básicos, simplemente no tenemos.
            </span>
            <span className="section-span">
              “La crisis visibiliza la pobreza real que hay. Si no se hace una
              nueva Constitución, si no quitamos de raíz el Estado subsidiario
              de la Constitución nunca jamás se va a solucionar el problema.
              Necesitamos mitigar el estado de pobreza de las personas. Tampoco
              estamos diciendo que queremos todo gratis. Lo que necesitamos son
              necesidades básicas cubiertas por el Estado. El problema es que
              nosotros siempre vamos a aportar al Estado, estamos dando más que
              recibiendo y ellos no nos aportan nada. A nosotras todo nos
              cuesta”, reflexiona.
            </span>
          </div>

          <div className="div-question">
            <h3 className="protag-h3">¿Has sentido miedo?</h3>
            <span className="section-span">
              Sí, hay bastante miedo en mi interior. No salgo ni a la esquina
              sin mascarilla, ni guantes, etc. Pero en todas estas semanas no me
              he dado cuenta de lo que pasa en mí, no he tenido tiempo para
              hacerlo. Estoy preocupada de la familia pero ellos igual han
              tomado harta conciencia. A veces creo que nos quieren matar y que
              quieren terminar con los que más puedan. Me da miedo pensar que
              nos están ganando a costa de mantener la economía, de mantener sus
              bolsillos.
            </span>
            <span className="section-span">
              Entonces, ¡Mira lo que nos ha costado estar en contra de estos
              grandes! Siempre he sabido que para ganar hemos tenido que morir
              varios pero antiguamente, uno moría de inmediato. Acá es distinto,
              morimos en agonía. Sentimos que nos falta el aire. Prefiero morir
              en Plaza Dignidad pero no morir así o cómo quieren. Con hambre,
              angustiados, desesperados o solos.
            </span>
            <span className="section-span">
              “¿Como tanto?”, se preocupa Aurora Pardo. Para la dirigenta, “ni
              siquiera estamos pidiendo la mitad del pan. Estamos pidiendo la
              mitad de la mitad del pan, pero tampoco estamos para pedir
              migajas. Si me voy a morir no les voy a pedir migajas, pero si me
              voy a morir les quiero pedir para unas cuantas generaciones. Si me
              voy a morir ahora prefiero reclamar y pelear lo que más pueda”,
              dice.
            </span>
          </div>

          <div className="div-question">
            <h3 className="protag-h3">Una crisis con rostro de mujer</h3>
            <span className="section-span">
              Aurora es madre. Tiene un solo hijo y ya es abuela. En la
              actualidad también le toca criar a sus sobrinas de 14 y 10 años.
              Su realidad es la que viven miles de mujeres jefas de hogar que,
              en muchas ocasiones, sin redes de apoyo estatales o familiares
              deben hacerse cargo del cuidado de sus hijos desde la soledad.
            </span>
          </div>

          <div className="div-question">
            <h3 className="protag-h3">
              Parece que te había costado tener ese tiempo para preguntarte cómo
              te sentías. Estás arriba de la máquina todo el día, entre la pega,
              la casa y la dirigencia social.
            </h3>
            <span className="section-span">Es difícil.</span>
          </div>

          <div className="div-question">
            <h3 className="protag-h3">
              ¿Piensas que existe alguna desigualdad respecto como las mujeres
              viven la crisis? ¿Qué implica ser mujer trabajadora en este
              tiempo?
            </h3>
            <span className="section-span">
              He estado acostumbrada a parar la olla toda la vida sola entonces
              tampoco me he puesto a pensar cien por ciento en el miedo de esta
              pandemia. Nada me impresiona y a muchas mujeres nada les queda
              grande. No me había puesto a pensar en mi, solo le doy. Obviamente
              me retengo un poco porque soy crónica pero nada más.
            </span>
          </div>

          <div className="div-question">
            <h3 className="protag-h3">
              ¿Las mujeres viven distinto la crisis o no?
            </h3>
            <span className="section-span">
              Hay muchas compañeras mías, mujeres solas, que tienen que cuidar a
              sus hijos y sin embargo, tienen que salir a trabajar igual. He
              visto que algunas han tenido hartos problemas con sus hijos que
              son más grandes. Sobre todo con los adolescentes porque algunos se
              van a la calle. He visto de todo un poco pero las mujeres siguen
              ahí de pie y firmes no más. Hoy en día, que estoy en quinto de
              derecho, también ayudo a perseguir pensiones de alimento de
              algunos lindos que se van olímpicamente y abandonan a mis
              compañeras. Estoy apoyando con mi conocimiento jurídico.
            </span>
            <span className="section-span">
              “Pero, acá en la población pienso que es distinto”, sentencia
              Aurora Pardo.
            </span>
            <span className="section-span">
              “En la población muchas mujeres no pueden acceder a una mejor
              remuneración porque muchas de ellas no tienen estudios y trabajan
              haciendo aseo en las fábricas de atrás como las bodegas de Ripley,
              poniendo alarmas o en las colas de la feria. Ahí están las mujeres
              jefas de hogar que trabajan en la población. Ellas tienen que
              ingeniárselas como sea”, señala al precisar entre las diferencias
              y similitudes de las mujeres trabajadoras.
            </span>
            <span className="section-span">
              Para Pardo, “otro distinto es en el lugar de trabajo, en el
              supermercado. La trabajadora igual es remunerada y gana un poquito
              más alto de lo que gana esta dueña de casa”, explica. Y agrega:
              “Suponte en el supermercado también tenemos asegurado alimento
              asegurado desayuno, almuerzo y once. En cambio la dueña de casa o
              la trabajadora de la cola de la feria no”.
            </span>
            <span className="section-span">
              Entonces, veo los dos campos que me ha tocado ver se viven
              distintos pero son parte del mismo problema del modelo. Es más
              sacrificado para la que vende sopaipillas acá en la casa afuera,
              completos, pan amasado que para la que está de cajera o reponedora
              en el supermercado. A las dos les cuesta lo mismo, pero pienso que
              la que tiene su kiosco acá en casa le cuesta más que la que está
              al otro lado.
            </span>
          </div>

          <div className="div-question">
            <h3 className="protag-h3">
              Hay menos herramientas y menos apoyo ...
            </h3>
            <span className="section-span">
              Sobretodo porque hay vecinas que tienen segundo o tercer año
              básico. Dentro de sus posibilidades buscan acceder a una
              oportunidad de trabajo. Yo conozco dos realidades distintas pero,
              a pesar de ello, la vecina que está acá en la población igual
              tiene los beneficios del Estado. Ellas tienen los bonos, son parte
              del 40 por ciento más pobre y pueden postular a todo lo que está
              acá. A la inversa, a las trabajadoras del supermercado les falta
              para esos beneficios pero les sobra para endeudarse con los
              bancos.
            </span>
          </div>

          <div className="div-question">
            <h3 className="protag-h3">
              Uno podría pensar que esa cajera de Líder tal vez es un "poco más
              privilegiada". Pero vivir endeudada o tener que pagar la carne
              molida con tarjeta no es lo justo.
            </h3>
            <span className="section-span">
              Claro, a los trabajadores del supermercado con contrato nos
              bombardean con tarjetas. Todos tienen tarjetas y en cambio acá en
              la población no hay ese acceso. Siempre me he puesto a pensar de
              que existen diferentes realidades. Otros pueden tener vivienda y
              otros seguir toda la vida arrendando. Me alegra conocer las dos
              veredas y estar metida también conociendo varias realidades que
              son muy distintas.
            </span>
          </div>

          <div className="div-question">
            <h3 className="protag-h3">
              Son muy distintas pero también son parte del mismo problema que
              comentabas al inicio. La lógica del Estado subsidiario hace que el
              Estado aparezca sólo en forma de bonos para la vecina de Las
              Turbinas, quienes reciben estos beneficios que le llegan sólo cada
              cierto tiempo o por la cantidad de hijos que pueden tener.
            </h3>
            <span className="section-span">
              De acuerdo. No aparece de otra manera, de forma permanente donde
              se nos permita vivir bien y felices. Al Estado tampoco le interesa
              tener familias felices. Dicen que “somos el mejor lugar para
              trabajar” pero Chile no es el mejor país para vivir. Chile es un
              mal empleador.La gente de arriba es la que no quiere tener a la
              gente bien. Entre la dueña de casa que está en la población y la
              trabajadora que está en el retail, en el comercio, ninguna de las
              dos tiene nada bueno.
            </span>
          </div>

          <div className="section-div-split">
            <div className="protag-last-div-left">
              <span className="last-span-left">
                “Al Estado tampoco le interesa tener familias felices somos el
                mejor lugar para trabajar” pero Chile no es el mejor país para
                vivir. Chile es un mal empleador.
              </span>
            </div>
            <div className="protag-div-right">
              <h3 className="protag-h3 last">
                Imaginemos que la crisis termina mañana ¿Qué aprendizajes has
                obtenido durante este tiempo?
              </h3>
              <span className="section-span section-span-right">
                Nos hemos dado cuenta de que hay que hacer cambios profundos. No
                se pueden hacer cambios por encima. Tiene que estructurarse el
                Estado respecto a sus prioridades y somos nosotros, el pueblo
                los primeros a considerar.
              </span>
            </div>
          </div>

          <div className="div-question">
            <h3 className="protag-h3">
              Valorar aquello que no ha sido valorado...
            </h3>
            <span className="section-span">
              Exacto, privilegiar a los que nunca se han privilegiado e invertir
              el orden de prioridades como la pirámide de Kelsen. En la
              universidad me enseñaron que ese es un triángulo que dice que
              arriba de las normas están los tratados internacionales, la
              constitución, las leyes y luego, las personas. Sin embargo, pienso
              que de ahora en adelante esa mayoría finalmente es la que debería
              tener más peso. Estos tontos, los de arriba, creen que el Estado
              son los gobiernos de turno y que a diestra y siniestra pueden
              administrar nuestros recursos.
            </span>
            <span className="section-span">
              “Pero el Estado somos nosotros”, concluye Aurora en una entrevista
              marcada por el anuncio de cuarentena total en Santiago y que
              advierte que la pandemia requerirá de medidas económicas fuertes o
              nuevamente serán los pobres quienes paguen la crisis.
            </span>
          </div>
        </div>
        <ReadNext section={"protagonistas"} />
      </div>
    );
  }
}

export default Protagonistas;
