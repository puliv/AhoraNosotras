import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";
import { animateScroll as scroll } from 'react-scroll'
import protagonista from '../../assets/REVISTA3/protagonistas.png'

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
            GLORIA MAIRA: LA REPRODUCCIÓN DE LAS MUJERES ES DONDE EL PATRIARCADO HUNDE SUS UÑAS
          </h1>
          <h2 className="section-h2">Por Javiera López Layana</h2>
        </div>

        <div className="section-img-div">
          <img
            src={protagonista}
            alt="protagonistas"
            /* img-protag es un clase especial para seccion editorial revista 2 */
            className="section-img img-protag"
            style={{ objectPosition: "0 -80px" }}
          />
        </div>
        <div className="protag-div-aurora">
          <span className="section-span" style={{ fontStyle: "italic" }}>
            En un Julio donde las marchas por un aborto libre y seguro pasaron de las calles hacia lo virtual producto de la pandemia, en este nuevo número de Ahora Nosotras conversamos con Gloria Maira, ex directora del Sernam y actual coordinadora de la Mesa de Acción por el Aborto sobre el estado de los derechos sexuales y reproductivos en tiempos de crisis y los desafíos del movimiento feminista de cara al proceso constituyente.
          </span>
          <span className="section-span">
            Gloria Maira Vargas (62) se define como una mujer política. Nacida al calor de un hogar donde los conflictos sociales eran parte de las conversaciones de la mesa, la actual coordinadora de la Mesa de Acción por el Aborto en Chile creció en un época de tensiones. Vivió la Unidad Popular, el golpe militar, la dictadura y el exilio y desde esas experiencias reconoce que ha tenido “una vida muy tocada por los tiempos”.
          </span>
          <span className="section-span">
            Integrante de una generación donde la vinculación con la política era un paso lógico para la juventud, la militancia para Gloria Maira llegó desde los catorce años. Participó en trabajos voluntarios y en movilizaciones en la Alameda.“Siempre he pensado en la política como una herramienta que te sirve para transformar, para analizar, para conversar, para acordar, para construir, para resistir”, reflexiona Maira.
            </span>
          <span className="section-span">
            Su defensa por los derechos sexuales y reproductivos de las mujeres también llegó desde temprano. “Desde cabra  estuve vinculada al aborto porque yo también he abortado. Lo hice en la clandestinidad y también cuando estaba legalizado. Tú llegabas y le decías al doctor «mire, quiero terminar con este embarazo». Adquirí una perspectiva donde lo incorporé como parte de mis necesidades en términos de reconocimiento de la libertad de decidir para las mujeres sobre su futuro”, dice.
          </span>
          {/* Sub-titulo */}
          <span className="protag-h2-crisis" style={{ marginTop: "20px" }}>
            Mala negociadora
          </span>
          <span className="section-span">
            Gloria Maira reconoce que primero llegó a la izquierda y luego, al feminismo.  A los veinte años y producto de una crisis personal que le permitió revisar su propia historia sintió que era una mala negociadora. “Al principio, el malestar lo traducía en que yo no hacía buenas negociaciones. ¿Me entiendes? No pensaba que era un problema de discriminación, sino que era yo la que no hacía buenas negociaciones”, recuerda.
          </span>
          {/* Pregunta */}
          <span className="protag-h3">
            ¿Frente a otros compañeros?
          </span>
          <span className="section-span">
            Sí, en las militancias políticas o en las relaciones afectivas. Pensaba que no hacía bien la negociación, pero después ya me di cuenta que el problema era estructural, no era yo, formaba parte de algo más grande.
          </span>
          {/* Pregunta */}
          <span className="protag-h3">
            Y donde posiblemente habían muchas malas negociadoras…
          </span>
          <span className="section-span">
            Exactamente, todas éramos malas negociadoras. Entonces, cuando el feminismo entra a mi vida. Te entra, se queda y no sale nunca más. No sale nunca más porque te ubica en un lugar distinto para leer el mundo, tu propia vida, la vida con tu entorno y lo que quieres hacer es transformarlo. De ahí, he estado generalmente trabajando en ámbitos que tienen que ver con derechos de las mujeres, desde el ámbito de los derechos humanos, en los derechos sexuales y reproductivos y en el aborto, siempre presente.
          </span>
          {/* Sub-titulo */}
          <span className="protag-h2-crisis" style={{ marginTop: "20px" }}>
            Derechos sexuales y reproductivos en crisis
          </span>
          <span className="section-span">
            Este 30 de julio, la octava marcha por un aborto libre, seguro, legal y gratuito se realizó de manera virtual y desde sus organizaciones convocantes como la Mesa de Acción por el Aborto o la Coordinadora de Feministas en Lucha se instaló como consigna “Mi cuerpo, mi decisión”.
          </span>
          {/* Pregunta */}
          <span className="protag-h3">
            En entrevista con El Mostrador señalaste que “las mujeres no podemos postergar la entrega de los anticonceptivos o el aborto legal, porque hay consecuencias que son permanentes en la vida.  Gloria, ¿cuándo la sexualidad será una prioridad?
          </span>
          <span className="section-span">
            El movimiento feminista y los feminismos han estado movilizados desde hace varios años. Siento que somos uno de los sujetos políticos y sociales que con mayor fuerza se instala en la disputa nacional abierta. En eso, tenemos el Mayo de 2018 como una cosa súper interesante. Pero, no es la primera. Hay que mirar nuestras propias trayectorias e ir ligándolas a la sexualidad.
          </span>
          <span className="section-span">
            La primera gran marcha, desde el fin de la dictadura fue la del pildorazo. Lo que pasa es que como éramos veinte mil y ahora somos dos millones y se ve como una cosita en el tiempo, pero esa cosita en ese momento tuvo un tremendo impacto.  El pildorazo mostró las ansias de libertad instaladas en las mujeres y en la población en general. Creo que fue súper importante ubicar en el imaginario público una calle de gente pidiendo libertad, derecho a decidir sobre el cuerpo. En los últimos 8M yo decía: "¡somos dos millones y además copamos las ciudades!".
          </span>
          {/* Pregunta */}
          <span className="protag-h3">
            Perdimos el miedo...
          </span>
          <span className="section-span">
            Ante la falta de respuesta del Estado, y particularmente de este gobierno, a lo que han sido las necesidades de la población en la pandemia, han sido los movimientos sociales y el movimiento feminista particularmente, no solamente, el que ha asumido, el que ha desarrollado, el que ha trabajado por construir, fortalecer la solidaridad y politizar.
          </span>
          <span className="section-span">
            Creo que en esa lucha la sexualidad y la reproducción son absolutamente medulares a lo que el sistema ha sido de dominación, o sea, es en el cuerpo y es en el control de la sexualidad y la reproducción de las mujeres donde el patriarcado hunde sus uñas y muerde de la manera más feroz. Sí tengo derecho a voto pero no tengo derecho a abortar, ¿qué clase de ciudadanía es esa?
          </span>
          {/* Pregunta */}
          <span className="protag-h3">
            Si uno hace una revisión, ese énfasis también lo hacían las feministas del Movimiento Pro-Emancipación de las Mujeres de Chile en los años treinta...
          </span>
          <span className="section-span">
            Claro, ellas hablaban de la emancipación de la maternidad, y las feministas siempre lo han hecho. Separemos las cosas. Tiene que ver con la autonomía que es esencial y si eso no está colocado como un sine qua non en la conversación social, no podemos hablar de las mujeres como un sector liberado. Entonces, yo siento que esa pelea es una pelea larga y es una pelea permanente.
          </span>
          <span className="section-span">
            Es un tema que tiene que ver con la política, que tiene que ver con la dominación y la subordinación de las mujeres, que tiene que ver con esos roles tradicionales que se esperan o fruiciones esenciales que siempre van a estar en disputa y claro, se encarna en el cuerpo de las mujeres pero no solo en el cuerpo de las mujeres.
          </span>
          <span className="section-span">
            Siento que cuando hablamos de una Nueva Constitución y hablamos de la necesidad de que los derechos sexuales y reproductivos formen parte de los derechos reconocidos. Ese reconocimiento que tiene que estar acompañado con garantías de ejercicio y esto es algo que beneficia a todas las personas, no solamente a las mujeres.
          </span>
          {/* Pregunta */}
          <span className="protag-h3">
            Poner en el centro la vida...
          </span>
          <span className="section-span">
            La vida. Eso está en el centro de esa política para la vida, cómo construyes nuevos acuerdos de convivencia, donde lo que pones en el centro son la protección y la felicidad de las personas. Por tanto, la sexualidad y la reproducción, que son dimensiones que nos constituyen como seres humanos y se reconocen como algo que forma parte de la intimidad, que forma parte del desarrollo personal y que tiene que ser protegido, más allá de las discusiones sobre población que pueda tener el país.
          </span>
          {/* Pregunta */}
          <span className="protag-h3">
            ¿Cuáles son las dificultades en concreto a las que se han visto enfrentadas las mujeres en esta pandemia?
          </span>
          <span className="section-span">
            En Chile tenemos un sistema de salud donde la apuesta, en general, de construcción del sistema, ha estado más en los hospitales que en la atención primaria en salud. Siento que una de las grandes lecciones que deja el coronavirus es la necesidad de hacer de la atención primaria la columna vertebral del sistema de salud. Es ahí donde trabajas prevención, en donde trabajas promoción, donde puedes, con mayor efectividad, trabajar en transformaciones culturales, que tienen que ver con el bienestar y la salud que deben ser fortalecidos.           </span>
          {/* Pregunta */}
          <span className="protag-h3">
            El tú a tú…
          </span>
          <span className="section-span">
            Puedes incorporar mucho más fácilmente lo que son las necesidades específicas que vienen de pueblos originarios, o de pueblos afro o las mismas poblaciones migrantes. La atención primaria es una esponja que puede realmente absorber y trabajar en una perspectiva mucho más inclusiva, en favor de la salud de la población en general.
          </span>
          <span className="section-span">
            En esta pandemia se ha repetido que las prestaciones en salud sexual y reproductiva se tiran pa' la cola, se ven como no necesarias, como no esenciales. La evidencia muestra que tratarlas como marginales o de segundo orden de necesidad lo que hace es profundizar las desigualdades que ya existían previo al desastre con el que estás lidiando. Cuando sales de este proceso tan doloroso, lo que haces es tener sectores de la población, en este caso, las mujeres, sobre todo las mujeres que tienen una vida mucho más precaria en términos de acceso a recursos, trabajo, viviendo, en fin, aún en condiciones de mayor precariedad.
          </span>
          {/* Pregunta */}
          <span className="protag-h3">
            Y con más bocas que alimentar...
          </span>
          <span className="section-span">
            Los niveles de precariedad se te complican. Agrégale que en tiempos de pandemia, lo que ha surgido con mucha fuerza es el aumento brutal de la violencia contra las mujeres. Eso incluye violencia sexual. También vas a tener ahí casos de embarazos forzados, en las niñas, en las jóvenes, producto de la agresión sexual de los entornos familiares, de las mujeres que viven en pareja y que viven violencia intrafamiliar también. Cuando decimos que las consecuencias son permanentes, son permanentes, porque además, en este momento, difícilmente puedes acceder a un aborto particularmente por razón de violación.
          </span>
          {/* Sub-titulo */}
          <span className="protag-h2-crisis" style={{ marginTop: "20px" }}>
            Constitución feminista
          </span>
          <span className="section-span">
            Producto del exilio, Gloria Maira se forjó como feminista en Ecuador junto a compañeras como Nela Meriguet o Tatiana Cordero. Desde ese lugar de habla se reconoce como feminista del sur del mundo, donde al calor del trabajo con mujeres de sectores populares de los barrios de Quito poco a poco incorporó este pensamiento a su práctica cotidiana.
          </span>
          <span className="section-span">
            En la entrevista agradece el rol del "Taller de Comunicación Mujer" en su formación. En los ochentas, esta escuela se sumó a otros grandes referentes de la región como La Morada en Chile o Manuela Ramos y Flora Tristán en Perú. En Ecuador aprendió sobre procesos constituyentes latinoamericanos y desde esa experiencia opina sobre el plebiscito de octubre 2020, que se realizará un año más tarde del inicio de la revuelta.
          </span>
          {/* Pregunta */}
          <span className="protag-h3">
            La Corporación Humanas dice que un nuevo contrato social viene de la mano a pensar en un nuevo contrato sexual ¿Cuáles serán las batallas que el movimiento feminista deberá salir a conquistar en este proceso constituyente y cuál será el rol de aquellas que nos reconocemos como feministas en la disputa de esos contenidos?
          </span>
          <span className="section-span">
            A propósito de la pandemia, la crisis de los cuidados y en toda la línea, dentro y fuera de la casa ha demostrado que el cuidado o el cuido de las  personas tiene que ser central a la función del Estado y el sentido del Estado.  Si colocas “el cuido” como un elemento central, que inspira la construcción constitucional, evidentemente estás visualizando otra cosa.  Esa pelea que hay que dar lo que hace es marcar un nuevo lugar de construcción, la posibilidad de otros diálogos, la posibilidad de otros caminos, pero que no van a estar exentos de disputa y de lucha.
          </span>
          <span className="section-span">
            Que la norma constitucional ponga el cuidado de la persona y de las familias en el centro del sentido del Estado, pero eso no significa que al otro día amanecimos en otro país. Hay una cosa que se llama romanticismo constitucional donde dices "así va a ser" y ahí en adelante es como llegar al Edén, al Nirvana, al Olimpo, una cosa donde todo está resuelto. Que algo quede en la Constitución significa que te permite cambiar el eje. De lo que se puede, a lo que no se puede hacer. Los conflictos van a seguir ocurriendo. Demora unas buenas décadas de trabajo mirarse en una posibilidad distinta de convivencia en la práctica, más allá de lo que diga la formulación constitucional.
          </span>
          {/* Pregunta */}
          <span className="protag-h3">
            Gloria, en medio de este proceso de deliberación ¿Cuáles son tus irrenunciables?
          </span>
          <span className="section-span">
            Uno de esos es que el cuidado tiene que ser fundamentalmente colocado en la Constitución. No es como "un derecho más", sino como un sentido de la construcción social, económica y política, la protección y el cuidado de las personas, de la naturaleza. Los derechos sexuales y reproductivos, los derechos sociales también son un irrenunciable. Todo lo que tenga que ver con la profundización de la democracia es irrenunciable. Una ciudadanía que forma parte de una democracia tiene que tener muchas más herramientas en términos de incidencia de las que existen ahora.
          </span>
          <span className="section-span">
            Evidentemente, la interrogación al sistema neoliberal, que es fundamento en nuestra Constitución también es un irrenunciable, o sea nunca más podemos nosotras y nosotros encontrarnos de frente con un Estado que le dé preferencia al mercado por sobre la vida misma. Que no pueda controlar los precios, no pueda efectivamente decir "no se pagan los servicios básicos" o que todo eso es inconstitucional. Siento que los fundamentos neoliberales que hoy tiene la Constitución se tienen que modificar radicalmente.
          </span>
          {/* Pregunta */}
          <span className="protag-h3">
            Dicen que las decisiones de hoy día van a determinar cómo vamos a ser en unos años más, ¿hay algún aprendizaje que debemos tomar como país y que ha quedado en descubierto en esta pandemia?
          </span>
          <span className="section-span">
            Un aprendizaje tiene que ver con la solidaridad y tiene que ver con el tejido social. La solidaridad como un elemento fundante de lo que es nuestro sistema institucional de protección social, de distribución de riquezas y de relacionamiento entre las personas. Quien finalmente está garantizado hoy que las personas puedan comer, aunque sea un plato al día, es precisamente tener un sentido de la solidaridad, un sentido de lo que es vivir en sociedad y hacernos todos y todas y todes cargo de lo que son las necesidades de las personas.
          </span>
          <span className="section-span">
            Yo creo que eso es un tremendo aprendizaje.
          </span>
        </div>
        <ReadNext section={"protagonistas"} />
      </div>
    );
  }
}

export default Protagonistas
