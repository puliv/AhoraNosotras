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
            DE OSCURIDAD Y LUZ
          </h1>
          <h2 className="section-h2">Por Alejandra Toledo Figueroa, activista trans y presidenta de la Fundación Acuarela </h2>
        </div>

        <div className="section-img-div">
          <img
            src={"https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA3/hablamos_alejandratoledo.png?raw=true"}
            alt="hablamos"
            className="section-img "
          />
        </div>
        <div className="section-div-span">
          <span className="section-span">
            “¿Te imaginas lo que sería vivir un momento histórico?” Yo creo que todas las personas nos hemos planteado alguna vez esta interrogante, intentando llenar con un grado de epicidad el vacío de una vida subordinada por el sistema, pero al pueblo chileno se le acumularon los procesos históricos. Diría que el alza de los $30 en el precio del metro fue la gota que rebalsó el vaso, pero en verdad esa alza fue simplemente parte del chorro de agua descontrolado que sigue y sigue rebalsando el vaso colapsado.

          </span>
          <span className="section-span">
            Y es que el pueblo chileno no ha tenido descanso. Después de décadas de explotación laboral, de corrupción política, de colusiones empresariales, de desfalcos económicos, de violaciones a los derechos humanos y de traiciones a la confianza social, la gente de nuestro país se aburrió de soportar abusos y dijo ya no más. Ocurrió lo que pensábamos que nunca iba a suceder: reunirnos.

          </span>
          <span className="section-span">
            Progresamos hasta que el coronavirus se convirtió en pandemia. Qué frustrante. Mientras la gente se estaba comenzando a organizar en las calles, de pronto tuvimos que cambiar nuestro estilo de vida a un confinamiento voluntario. El sentimiento de esperanza de construir una mejor sociedad cambió por miedo e incertidumbre, las personas que luchaban por una vida digna, ahora luchan por sobrevivir y no morir de hambre o en un servicio de salud colapsado. La angustia reinaba de nuevo y la desolación se paseaba por las poblaciones mientras estábamos encerrados.
          </span>
          <span className="section-span">
            Al comienzo de la cuarentena debo confesar que estaba afligida. Estudio en la universidad y mi mente estaba dividida: por un lado, el sistema educativo me exigía que rindiera y que siguiera con una tele-rutina y, por otra parte, veía en los medios una seguidilla de nefastas decisiones políticas que el gobierno tomaba. Con esto, era imposible ignorar la realidad país.
          </span>
          <span className="section-span">
            ¿Qué se puede hacer encerrada en casa? ¿Qué hacer con las ganas de reencontrarnos en sociedad, ya que le estábamos agarrando el gustito? ¿Cómo canalizar la energía de revolución que despertó en octubre para que perdure hasta que los cambios se concreten?
          </span>
          <span className="section-span">
            Durante marzo y abril no hubo caso que pudiera concentrarme en la universidad. Me esforzaba por estudiar pero mi cerebro me decía “¡no niiña, si está mala la cosa!”. Divagaba y divagaba. Amo caminar con audífonos saliendo de la u o mientras aprecio el paisaje y le sonrío a la gente. Extraño tanto esa sensación. Entenderán que fue muy duro adaptarme al encierro. Un alma libre volviendo a experimentar la jaula, sentía.
          </span>

          <span className="section-span">
            Continuaba la cuarentena y el panorama seguía lamentable ¿Aprendizajes obtenidos? Hay que ser un poco menos dura con uno misma, no es el mejor momento para sobreexigirse.
          </span>

          <span className="section-span">
            Confinamiento no debe ser sinónimo de distanciamiento con las personas que se quieren, sobre todo con redes sociales y la conectividad disponible. Si la crisis no te ha pegado tan duro, da gracias a la vida. Hay distintas maneras de ayudar a las personas que lo están pasando mal; si quieres aportar, busca iniciativas en tu localidad más cercana, de seguro hay vecinos y vecinas organizándose ante la dificultad. Si lo tuyo son las redes, comunícate y comparte con los tuyos.
          </span>

          <span className="section-span">
            Los que puedan aprovechar el tiempo de unirse como familia, inténtelo y disfruten. Finalmente, también aprendí que si no puedo salir de mi casa y ayudar presencialmente al resto, puedo en mi encierro aprender, soñar y organizarme, para que cuando todo esto pase, volvamos con más energía que nunca a construir una patria digna.
          </span>

          {/* Destacado */}
          <div className="section-div-split">
            <div className="section-div-half">
              {/* Negrita */}
              <span className="section-div-half-right">
                El momento más oscuro de la noche es precisamente antes de comenzar a amanecer.
                Cuando descubrí esa frase, recordé todos los momentos de dolor, dificultad y desesperanzas que me han tocado vivir.
            </span>
            </div>
            <div className="section-div-half">
              <span className="section-div-half-left">
                El momento más oscuro de la noche es precisamente antes de comenzar a amanecer. Cuando descubrí esa frase, recordé todos los momentos de dolor, dificultad y desesperanzas que me han tocado vivir. Los recordé porque precisamente después de sentir que todo estaba perdido, las cosas comenzaron a mejorar. Todos tenemos altos y bajos, lo importante del caso son las lecciones que sacamos. Ahora que como país estamos bien abajo ¿qué lecciones aprenderemos?
            </span>
            </div>
          </div>

          <span className="section-span">
            Nuestro país está próximo a vivir un proceso constituyente. El pueblo tendrá la oportunidad de escribir la primera Constitución democrática desde que Chile se llama Chile, y más encima será con paridad de género, una lección para el resto del mundo. No podemos perder la oportunidad de participar de este proceso histórico, y redactar en esa constitución de hoja en blanco las directrices para una mejor sociedad. Aguantemos lo mejor que podamos estos tiempos de crisis, porque cuando nos encontremos será hermoso, y juntas haremos historia.
          </span>

        </div>

        {/* DIVISION */}
        <div className="hablamos-division"></div>

        {/* HABLAMOS 2 */}
        <div className="section-titles">
          <h3 className="section-h3">HABLAMOS</h3>
          <h1 className="section-h1">
            DESDE IQUIQUE CONTRA LA VIOLENCIA MACHISTA
          </h1>
          <h2 className="section-h2">Por Camila Castillo Guerrero </h2>
        </div>

        <div className="section-img-div">
          <img
            src={"https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA3/hablamos_camilacastillo1.png?raw=true"}
            alt="hablamos"
            className="section-img "
          />
        </div>

        <div className="section-div-span">
          <span className="section-span">
            Soy una mujer nortina, nacida y criada en Iquique. Una ciudad ubicada entre el mar y el Cerro Dragón, la duna urbana más grande del mundo. Tengo 30 años y, aunque soy abogada de profesión, lo que realmente me apasiona es la radio. Desde hace cuatro años tengo la oportunidad de comunicar por señal FM a los vecinos y vecinas de mi región.
          </span>
          <span className="section-span">
            Han sido cuatro meses difíciles. Al igual que todas, nunca imaginé vivir una situación como esta: ¡una pandemia mundial! Menos después de vivir dos terremotos y la permanente preocupación de tener que evacuar de un tsunami.
          </span>
          <span className="section-span">
            La incertidumbre nos invade a todas.Esta pandemia ha demostrado lo más crudo del sistema económico-social que tenemos. Esas debilidades del sistema que tenían cansadas a la ciudadanía son las que se gritaron en las calles desde el 18 de octubre en adelante. Pero, no solo son las cuestiones económicas.
          </span>
          <span className="section-span">
            Durante los últimos dos años he participado junto a mis compañeras en la Asociación de Abogadas Feministas (Abofem), una organización que lucha en la defensa y el reconocimiento de nuestros derechos. Desde mi profesión he observado que la cuarentena nos ha puesto en alerta de situaciones que se viven a diario y que ahora se han intensificado como la violencia machista contra las mujeres.
          </span>

          {/* Destacado */}
          <div className="section-div-split">
            <div className="section-div-half" style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between' }}>
              <span className="section-div-half-left" style={{ marginBottom: '10px' }}>
                El trabajo de asesorar mujeres en la búsqueda de restitución de sus derechos ante los actos de violencia machista que viven, es impagable, pero a la vez no se puede negar que es frustrante ver cómo mucha veces la justicia no está a la altura de las necesidades de ellas.
                </span>
              <span className="section-div-half-left">
                Actualmente, tenemos un sistema que revíctimiza a las mujeres, que duda de sus relatos, que pocas veces terminará condenado a sus agresores y que finalmente es lo que hace que muchas no tengan voluntad de iniciar y/o continuar un proceso de denuncia, pues desde antes que comience saben que existe pocas posibilidades que la ley pueda jugar a su favor.
                </span>
            </div>
            {/* Negrita */}
            <div className="section-div-half">
              <span className="section-div-half-right">
                Pero esto, más que desanimar da fuerza para seguir incidiendo en reformular un sistema que realmente proteja los derechos de las víctimas y donde cada uno de los actores e instituciones que participan en él puedan hacerlo en base a una perspectiva feminista, que no es más que una visión basada en la justicia e igualdad.
                </span>
            </div>
          </div>

          <span className="section-span">
            Pero esto, más que desanimar da fuerza para seguir incidiendo en reformular un sistema que realmente proteja los derechos de las víctimas y donde cada uno de los actores e instituciones que participan en él puedan hacerlo en base a una perspectiva feminista, que no es más que una visión basada en la justicia e igualdad.
          </span>

          <span className="section-span">
            El encierro ha dejado a mujeres conviviendo diariamente con sus agresores. Ejemplo de ello, es el fuerte aumento de las solicitudes a la asociación de acompañamientos sobre esta temática. Frente a esta situación los llamados han sido muchos más constantes, las amenazas mucho más reales y la ineficacia del Estado una realidad innegable
          </span>

          <span className="section-span">
            Por eso, resulta de suma relevancia la organización de la sociedad civil, que viene a suplir la deficiencia de quien supuestamente debería protegernos: el Estado, a través de sus políticas públicas. El hacernos parte de la solución del problema y encontrar aquella motivación que nos permita activarnos en colectivo por ayudar a la comunidad, genera una energía que, en lo personal, me ayuda a vivir de forma más tranquila esta crisis.
          </span>
        </div>

        <ReadNext section={"hablamos"} />
      </div>
    );
  }
}

export default Hablamos;
