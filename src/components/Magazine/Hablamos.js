import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";

export class Hablamos extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="section hablamos">
        <GoBack />

        <div className="section-titles">
          <h3 className="section-h2">HABLAMOS</h3>
          <h1 className="section-h1">
            VALDIVIA SOLIDARIA: ABRIR LA PUERTA Y CERRAR EL PRIVILEGIO.
          </h1>
          <h2 className="section-h3">Por @Vic_tonha_</h2>
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
            La emergencia sanitaria, por el Covid-19, me hizo saber que
            prontamente viviría en un Valdivia con mayores inequidades. Pero a
            la vez me mantenía inquieta pensando en cómo íbamos a trabajar
            socialmente en este nuevo contexto y así comenzó la solidaridad.
          </span>

          <span className="section-span">
            La pandemia me mostró que la trabajadora de parquímetro de la
            empresa de Cristián Coronel no tenía el derecho de quedarse en casa
            para cuidar de su salud y la de su familia. También me hacía
            escuchar a la señora Bernarda, dirigenta social de un barrio popular
            de la comuna, decir que algunos “no morirán por el coronavirus pero
            sí de hambre”.
          </span>
          <span className="section-span">
            Situaciones como estas fueron forjando Valdivia Solidaria, una red
            que busca generar distintos apoyos a quienes por la pandemia se han
            visto afectados. Con dedicación, con mis compañeras y compañeros de
            militancia creamos campañas donde articulamos la sanitización del
            comercio barrial, mascarillas y recolección de alimentos. A partir
            de esta instancia, les cuento que todos los viernes, haciendo caso
            estricto a los protocolos de seguridad, salimos en busca de
            donaciones.
          </span>
          <span className="section-span">
            Pese a mi preocupación, los primeros días estaba contenta y sonreí
            al recibir mensajes de personas queriendo sumarse a la causa. Luego
            de eso, mi celular sonaba y ya no era grato contestar. Por el
            contrario, mi mandíbula se apretaba, mi estómago dolía y mi
            respiración agitada me hacían saber que alguien con mucha
            complicaciones económicas nos escribía o llamaba para pedir ayuda.
          </span>
          <span className="section-span">
            El sentido de injusticia se ha hecho presente con mayor fuerza en
            esta emergencia sanitaria, desnudando a un Chile brutalmente
            desigual y a un Valdivia que día a día vuelve su brecha social más
            grande. Un mes después y con este pesar, mapa en mano salimos a
            repartir las canastas que logramos reunir junto a valdivianas y
            valdivianos llegando a articulamos con más de 250 familias.
          </span>
          <span className="section-span">
            Fue ejemplificador ver cómo dirigentas y dirigentes de las
            organizaciones de la sociedad civil conocen a su gente, sabiendo con
            claridad sus necesidades. Este proceso reafirmó que con el
            conocimiento popular no puede haber indiferencia ni olvido. Lo digo
            porque en el proceso de asignación de recursos quedó claro quién
            tiene el saber requerido para hacer las cosas bien.
          </span>
          <span className="section-span">
            Con Valdivia Solidaria logramos concretar relaciones horizontales
            colaborativas con líderes y lideresas sociales. Hay algo que me
            parece hermoso y que debiese estar más en política es hacer visible
            las voces que han sido negadas por el Estado chileno y por esa
            maquinaria asistencialista que solo busca negar derechos.
          </span>
          <span className="section-span">
            En este momento de preguntas aparece una humilde convicción que
            viene de cuna, desde mi padre rescatista y una madre despierta
            socialmente. Ambos me enseñaron el significado de la solidaridad:
            hacer algo de manera desinteresada por otra persona cuando hay
            situaciones de aprieto. Así se fue forjando en mí el principio de
            ayudar para mejorar la calidad de vida de las personas
            contradiciendo el principio neoliberal de la responsabilidad
            individual y que espero después de esta crisis sanitaria comience a
            terminarse.
          </span>
          <span className="section-span">
            Una de las contradicciones de esta pandemia ha sido la tensión entre
            solidaridad versus individualismo. Por décadas, nos hicieron creer
            que los intentos del neoliberalismo por producir personas
            individualistas habían resultado. Por otra parte, desde los primeros
            días de esta crisis hablamos que el momento requiere de colaboración
            para salir de ella. Entonces, ante un Estado que muestra una total
            desprotección con la ciudadanía ¿no piensan que es hora de poner en
            entredicho al individualismo a través de la creación y
            multiplicación de redes de solidaridad?
          </span>
          <span className="section-span">
            Pasado unos días retomo mi relato… y comienzo a escribir
            quebrantada. Vividas las primeras entregas cómo no declararme
            indignada ¡Sí casa tras casa juntamos nuevas y dolorosas razones
            para que Valdivia Solidaria perdure en el tiempo! Como no sentirme
            rebelde y serlo si la realidad me golpea con cada historia que
            aparece ante nosotros.
          </span>
          <span className="section-span">
            El Coronavirus dejará a Valdivia en un lugar del que será difícil
            salir, los años de estancamiento están quedando al descubierto. Solo
            hemos tenido administraciones municipales y no gobiernos locales,
            sin existir un proyecto comunal que nos piense. No podemos permitir
            que esta pandemia nos herede mayores inequidades, no puedo
            permitirme hacer nada ante esto. Gritaré que es injusto lo que le
            sucede a doña María, gritaré guturalmente que este ¡no es el
            Valdivia que merecemos!
          </span>
          <span className="section-span">
            Hoy me doy cuenta que mi puerta se cierra pero también se abre para
            responder al rol que la política demanda de cada una de nosotras.
            Las invito a activarse y a que Valdivia Solidaria se replique por
            distintas comunas del país. Nosotras somos quienes tenemos la
            responsabilidad de articular redes de trabajo que permitan la
            solidaridad.
          </span>
          <span className="section-span">
            Este hilo de emociones termina con una Tonha profundamente
            agradecida de muchos y muchas que han hecho posible la solidaridad.
            Diciendo que una mujer puede liderar un proceso como el que Valdivia
            Solidaria ha levantado, poniendo mayor diversidad en la toma de
            decisiones. Esto ya ha sido evidenciado en los países cuyos
            liderazgos femeninos están llevando la crisis sanitaria por la
            pandemia Covid-19. Por ahora, me despido privilegiada de estar junto
            a quienes luchan para poder ayudar.
          </span>
          <span className="section-span">
            De ahora en adelante es tiempo que las voces negadas y oprimidas
            sean aquellas que entregan conducción a los espacios. Tenemos la
            responsabilidad de generar rupturas y continuidades como seres
            políticas en el trabajo territorial, seguir pre- alimentando nuestra
            relación con dirigentes y dirigentas y, finalmente, seguir sin
            entrar en las prácticas asistencialistas.
          </span>
        </div>

        <ReadNext section={"hablamos"} />
      </div>
    );
  }
}

export default Hablamos;
