import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";
import { animateScroll as scroll } from 'react-scroll'
import protagonistas from '../../assets/REVISTA2/Protagonistas.png'

export class Protagonistas extends Component {
  componentDidMount() {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="section protagonistas">
        <GoBack />
        <div className="section-titles">
          <h3 className="section-h3">PROTAGONISTAS</h3>
          <h1 className="section-h1">
            Raquel González, integrante de Mujeres Modatima: “En Chile la usurpación del agua es legal”
          </h1>
          <h2 className="section-h2">Por Javiera López Layana</h2>
        </div>

        <div className="section-img-div">
          <img
            src={protagonistas}
            alt="protagonistas"
            /* img-protag es un clase especial para seccion editorial revista 2 */
            className="section-img img-protag"
          />
        </div>
        <div className="protag-div-aurora">
          <span className="section-span">
            Hubo una época en la vida de Raquel que en vez de denunciar frente a los  escenarios a los responsables de la tierra seca y quebradiza disfrutó de grandes ríos. En este segundo número de la Revista Ahora Nosotras dedicado a “Mujeres, crisis climática y defensa de los territorios” conversamos sobre el despojo del agua en la Provincia de Petorca con Raquel González, profesora de la Escuela Rural de Pullally y dirigenta de Mujeres Modatima
          </span>
          <span className="section-span">
            “¡Álamos, Pérez Yoma, Triveri, Gazmuri, Yuleman, Ruiz Tagle, Bosch!”, grita vestida de negro, Raquel González Espinoza (45), directora de “Viudas del Agua”, obra de teatro que representa el despojo del agua en la Provincia de Petorca.
          </span>
          <span className="section-span">
            En entrevista con la Revista Ahora Nosotras su mente se inunda con recuerdos de infancia. A mediados de los ochenta, recorrió junto a su familia el interior de la quinta región arriba de una camioneta Ford. Uno de sus destinos preferidos era El Trapiche, una localidad ubicada 77 kilómetros al norte de La Serena y 17 km de la localidad de La Higuera.
            </span>
          <span className="section-span">
            “En esa zona se recolectaban pepitas de oro e incluso habían camarones de río. Nosotros íbamos a pillar truchas con la mano, no con anzuelo. Así no más, a todo campo”. ¡Eran tremendas las pozas en el río, gigantes! El agua corría y nosotros nos bañamos”, relata Raquel González.
          </span>
          <span className="section-span">
            Más que en tono de nostalgia piensa en esos recuerdos como una tragedia. Precisamente porque en lugares como El Trapiche, Río Tinto o la Poza de los Loros en Chincolco, donde aprendió a nadar y casi se ahogó cuando era pequeña, hoy solo hay piedras.
          </span>
          <span className="section-span">
            “Era otra época, otros tiempos. Tú te podías venir caminando desde Chincolco hasta Río Tinto, pero tú vas ahora y en esos lugares que antes eran fértiles no hay nada. En la Poza de Los Loros habían orificios donde vivían los loros tricahue. Mis papás se conocieron allá y se casaron”, agrega la activista.
          </span>
          <span className="section-span">
            También recuerda sus vacaciones. “En Chincolco fuese invierno o verano en la mañana tú te levantabas y te mandaban a comprar la leche. Pero ahora ¿dónde encuentras leche? No hay po', o es muy escasa. Lo mismo que los quesos o los pejerreyes. Con toda la falta de agua han muerto muchos animales”, reflexiona la dirigenta.
          </span>
          <span className="section-span">
            De generación en generación los paisajes fueron cambiando. “Es triste porque mis hijos si bien alcanzaron a bañarse en el río, cuando ellos tenían cinco y siete años el agua les llegaba hasta la cintura no más. No como a mí que, de lo hondo, casi me llegué a ahogar. Agradezco al menos que tuvieron la fortuna de conocer ese lugar”, dice González.
          </span>
          <span className="protag-h2-crisis">
            ¡Profe, baje las revoluciones!
          </span>
          <span className="section-span">
            Raquel González (45) es profesora de la Escuela Rural de Pullally, una localidad que se encuentra en la entrada del interior de la quinta región y en la que vive hace más de quince años. Este rincón es reconocido por su parque y sus salinas, formaciones geológicas de reconocido valor turístico para la comuna de Papudo.
          </span>
          <span className="section-span">
            La escuela donde trabaja Raquel González tiene 180 estudiantes desde prekinder hasta octavo básico. Ella es profesora de lenguaje pero además tiene jefatura de un curso de sexto año.
          </span>
          <span className="protag-h3">
            ¿Qué significa para ti como docente educar en un sector rural en medio de un contexto de crisis donde el acceso a la llamada “modernidad” parece que aún no llega en algunos lugares de Chile?
          </span>
          <span className="section-span">
            Por deber humano los profesores y profesoras tenemos un rol social muy importante. Siempre es difícil. Ya es complejo sin pandemia porque los recursos no llegan donde tienen que llegar, que es a los niños, a la escuela. Recuerdo que en 2016 pasamos el invierno con treinta y tres vidrios menos y con mucho frío. Hoy día, en tiempos de pandemia, es el triple de difícil.
          </span>
          <span className="section-span">
            También hay casos de estudiantes que no se han conectado con nosotros o por Whatsapp y que debemos derivar a la profesora de convivencia escolar. Hace poco implementamos clases online con séptimo y octavo y de repente no funciona la conexión, aún así teniéndola en casa.
          </span>
          <span className="section-span">
            Raquel González es una mujer de esas que llaman creativas e inagotables. Es profesora, activista, directora de las Viudas del Agua, integrante de Mujeres Modatima y militante de Revolución Democrática.
          </span>
          <span className="section-span">
            “Hay veces que mis alumnas más jóvenes me dicen 'yapo, profe, baje las revoluciones' ”, comenta entre risas. Después de criar a sus hijos, de 25 y 27 años respectivamente, se siente más libre para decidir dónde y con quién trabajar. Al preguntarle qué la llevó a organizarse en diferentes espacios sociales reconoce la influencia de una cultura familiar que lleva en las venas.
          </span>
          <span className="section-span">
            “Mi papá fue electo muchas veces como presidente provincial del Colegio de Profesores. Vienen muchos años de lucha y también un legado que te invita a ser parte de los cambios. No solamente a pensarlo, idearlo o quedarte en casa. Hay que hacer algo para que el cambio se genere. Entonces, es ahí cuando decido buscar espacios de participación”, explica Raquel.
          </span>
          <span className="section-span">
            “Los profesores hemos sido grandes revolucionarios, hemos sido parte de los cambios sociales porque hemos sido muy maltratados, por eso para mí es importante colegiarse porque no puedo pasarme criticando. Hay que aportar”, señala Raquel González, quien está a punto de cumplir su segundo período como secretaria en el Colegio de Profesores del comunal de Papudo.
          </span>
          <span className="protag-h2-crisis">
            Vencer el miedo
          </span>
          <span className="section-span">
            Hace una década Raquel participó en la primera marcha de mujeres por el agua en La Ligua. Esta manifestación revolucionó la ciudad y el futuro de su vida. Luego de participar en un grupo artístico de la Ligua, Raquel llegó hace una década de lo que se convertiría años más tarde en el Movimiento de Defensa del Agua, la Tierra y la Protección del Medioambiente (Modatima).
          </span>
          <span className="protag-h3">
            ¿Cómo fue tu ingreso a modatima?
          </span>
          <span className="section-span">
            A raíz de los contactos con el vocero nacional de Modatima, Rodrigo Mundaca, participamos en una Marcha por Agua que se hizo en Valparaíso. Fue una marcha gigante. Luego viajamos al sur, a Temuco, a una marcha plurinacional. Luego a Concepción y así. Desde nuestra agrupación que era más pequeña era muy importante apoyar a Modatima Entonces, este movimiento como nace en la Provincia de Petorca, tú lo sientes tuyo, es tu movimiento y dice, ¿cómo no vas a colaborar?
          </span>
          <span className="section-span">
            Un día me llamó Lorena Donaire para participar y conversamos. Así nace Mujeres Modatima que también era de acá. Nos decíamos  “Nosotras tenemos un rol fundamental y fuimos aprendiendo desde los movimientos sociales. Si bien Teresa Flores, tal vez no sabía leer, fue un gran mujer y levantó una lucha en el mundo del salitre ¿por qué nosotras no?”.
          </span>
          <span className="section-span">
            En medio de esta crisis sanitaria, Mujeres Modatima, junto al resto de la organización generaron operativos para entregar bidones de agua de cinco litros a comunidades sin acceso a este suministro vital para la protección y el cuidado de salud.
          </span>
          <span className="protag-h3">
            ¿Qué acciones han abordado en esta crisis como organización?
          </span>
          <span className="section-span">“Primero llevamos 60 bidones de agua, luego un camión. Nosotros salimos temprano a comprar agua y en la tarde salimos a repartir. No me puedo quedar tranquila pensando que hay familias que no tendrán agua un día. Hay familias donde primero se baña el marido, luego la señora y con la misma agua bañan a los hijos.
          </span>
          <span className="protag-h3">
            Fue difícil salir porque ustedes también se ponen en riesgo y a su familia...
          </span>
          <span className="section-span">
            Exacto. A nosotras con nuestros compañeros nos costó mucho salir la primera vez.  Cuando decidimos empezar con la campaña, que partimos muy pudorosamente dijimos ¿qué hacemos? Un día nos organizamos vía zoom y nuestro vocero junto a alrededor de diez personas dijimos ¡vamos! Nos mandamos a hacer mascarillas y partimos con guantes gruesos a las zonas.
          </span>
          <span className="section-span">
            Entonces partimos la campaña "Sólo el pueblo ayuda al pueblo" donde entregamos  bidones de agua y nos encontramos con comunidades muy agradecidas. Nos encontramos con abuelitas de la tercera edad que lloraban para darte las gracias por dos, tres bidones de agua. Sin embargo, como Modatima tenemos más que claro que son medidas paliativas pero teníamos que llegar a la gente. Si el gobierno no se hace cargo, si nadie se hace cargo. Nosotros teníamos que hacerlo.
          </span>
          <span className="protag-h3">
            ¿Te llena el corazón?
          </span>
          <span className="section-span">
            Es impagable, es impagable.
          </span>
          <span className="protag-h3">
            Raquel, desde la realidad territorial ¿cómo viven las mujeres en zona de catástrofe la crisis sanitaria?
          </span>
          <span className="section-span">
            Campesinas o esposas de campesinos tienen una visión muy particular de lo que es ser mujer y algunas no pueden hablar. Nosotras visibilizamos y nos convertimos en la voz de un sector que por miedo o temor no puede hablar porque le trabaja al patrón. Hay gente que piensa que si va a hablar la van a despedir y se quedarán sin su sustento.
          </span>
          <span className="section-span">
            Las mujeres viven con sobrecarga: desde trabajar desde la casa, cocinar, hacer aseo, además ver a niños o no tener internet para cumplir a las tareas. Sumale a esto la problemática del agua y las consecuencias en salud mental por eso es importante la solidaridad y unión entre compañeras.
          </span>
          <span className="section-span">
            Para Raquel la labor que cumplen desde Mujeres Modatima trasciende la entrega de suministros básicos como el agua. “Nosotros entre todas las labores cumplimos un rol de contención. No podemos solo traer “el agüita” y chao. A la gente tu tienes que escucharla, porque hay gente que quiere decir, hablar. Acá la gente está viviendo con 50 litros de agua al día cuando la Organización Mundial de la Salud recomienda 100 litros”, dice.
          </span>
          <span className="section-span">
            “A nosotros nos da rabia porque después de conocer toda la realidad del interior, los comerciales que muestran en la televisión son una burla. “Lávese las manos veinte veces al día” y tú dices ¿Con qué, si con suerte hay familias que tienen agua para tomar, beber y hacerse comida?”, agrega Raquel González.
          </span>
          <span className="protag-h2-crisis">
            Viudas del Agua
          </span>
          <span className="section-span">
            En las Viudas del Agua se reúnen mujeres y niñas desde los cuatro hasta los cincuenta y ocho años. Hay estudiantes, dueñas de casa, presidentas del Centro de Padres, profesoras y pobladoras. Inspiradas en los relatos de “La privatización del agua”, libro escrito por el reconocido dirigente socioambiental, Rodrigo Mundaca, construyeron la obra de teatro.
          </span>
          <span className="section-span">
            “Primero partimos desde la alegría de antaño cuando teníamos agua. Tenemos muchas remembranzas y recuerdos bonitos de los río y, valles preciosos. Luego pasamos al tema de la sobre explotación de los recursos, el extractivismo y los monocultivos que empezaron a depredar lo poco que nos quedaba”, explica la activista.
          </span>
          <span className="section-span">
            El 2019, Las Viudas del Agua alcanzaron a presentar su obra en diferentes lugares, acompañando a la Mesa del Agua en sus reuniones y manifestaciones como la toma del pozo de El Melón. Para nosotras “esta es una forma de aportar desde otros frentes. Las luchas deben ser frontalmente, pero también desde otros espacios como el arte y la cultura”.
          </span>
          <span className="protag-h3">
            ¿En qué consiste la obra las Viudas del Agua?
          </span>
          <span className="section-span">
            Las Viudas del Agua relatan cuando teníamos el código de antes de 1965 donde no estaba esta división, donde no existía esta separación del agua del dominio de la tierra y, además, era un bien de uso público, por lo tanto no habían dueños del agua. El dueño era el Estado de Chile. Entonces, Las Viudas del Agua reflejan esta alegría de haber vivido hasta cuando viene el despojo y nos empiezan a quitar el agua. Cuando sufrimos y nos duele todo porque por más que rasguemos el suelo no va a salir agua.
          </span>
          <span className="section-span">
            El Código de Aguas de 1981 separa el agua del dominio de la tierra. “En Chile hay dueños de agua sin tierra y dueños de tierra sin agua”, añade Raquel González con determinación.
          </span>
          <span className="section-span">
            Para la activista de Mujeres Modatima, “Nosotras nombramos los personeros porque porque tienen nombre y apellido como Eduardo Cerda García, Edmundo Pérez Yoma. Son grandes personeros de la política. Otros como Álamos, Trivelli también estuvieron un rato por estos lados. Y agrega, “El ciclo del agua fue quebrado por esta usurpación. No voy a decir robo. En Chile la usurpación del agua es legal, es con autorización y tampoco hay fiscalización por parte de las autoridades.
          </span>
          <span className="protag-h3">
            ¿Qué consecuencias tuvo para las mujeres ese despojo?
          </span>
          <span className="section-span">
            Las Viudas del Agua son la muestra de mujeres, donde sus maridos tuvieron que salir de su hogar, de su campo agrícola a trabajar porque fue necesario. Algunas se quedaron viudas de verdad, otras se quedaron solteras siendo jefas de familia y lidiando con todo lo que este rol conlleva.
          </span>
          <span className="section-span">
            Si antes el marido estaba dedicado a trabajar en la agricultura y con eso les alcanzaba para vivir y subsistir, hoy día no es suficiente. Nosotras vemos cómo las mujeres también tienen que salir a trabajar, cómo las mujeres tienen que sembrar lo poco y nada de tierra que aún queda y si es que tienen agua.
          </span>
          <span className="section-span">
            Finalmente, en esta pandemia, Modatima junto al Centro por la Justicia y el Derecho Internacional (Cejil) presentaron medidas cautelares ante la Comisión Interamericana de Derechos humanos a favor de las comunidades rurales con escasez hídrica. “La justicia es injusta contra el pueblo pobre y sencillo. Sobre todo con las mujeres más vulnerables”, señala la profesora.
          </span>
          <span className="section-span">
            “Nosotros no nos quedamos con excusas como “es inconstitucional” “no, que depende del Ejecutivo”. Si antes era importante defender el agua como derecho humano, como bien público, hoy es tres veces más importante”, sentencia Raquel González, dirigenta que, como muchas a lo largo y ancho de Chile, hace de la creatividad una herramienta de supervivencia para paliar la crisis.
          </span>
        </div>
        <ReadNext section={"protagonistas"} />
      </div>
    );
  }
}

export default Protagonistas
