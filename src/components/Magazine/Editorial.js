import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";
import creditos from "../../assets/img/CREDITOS.png";

export class Editorial extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="section editorial">
        <GoBack />

        <div className="section-titles">
          <h3 className="section-h3">EDITORIAL</h3>
          <h1 className="section-h1">
            Criar y cuidar también es trabajar, queremos seguridad social
          </h1>
          <h2 className="section-h2">
            Por Anita Martínez, Directora Revista Ahora Nosotras
          </h2>
        </div>

        <div className="section-img-div">
          <img
            src={
              "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/2_EDITORIAL/editorial_banner.png?raw=true"
            }
            alt="editorial"
            className="section-img"
          />
        </div>
        <div className="section-div-span">
          <span className="section-span">
            No cabe duda, la pandemia y el confinamiento revelaron de forma
            ineludible que limpiar y cuidar es trabajar. Podríamos pasar horas
            en cualquiera de estas labores sin que nadie lo reconociera, tal y
            como lo han hecho, históricamente, millones de mujeres en dobles y
            triples jornadas laborales. Solo que hoy, más que nunca, se hizo
            visible y nadie desconoce que en el hogar “se trabaja”. ¿Qué clase
            de trabajo es ese? ¿Por qué a esta sociedad le parecen labores tan
            irrelevantes que ni siquiera las considera en su Producto Interno
            Bruto? Lo cierto es que se ha decidido vivir bajo esa tamaña ceguera
            de forma deliberada, nos acomoda dar por sentado que el sacrificio
            es casi una cualidad natural en algunas personas, por regla general,
            mujeres. Nos tranquiliza creer que son tareas secundarias, de poco
            estatus, que podría hacer cualquiera a un precio barato.
          </span>

          <span className="section-span">
            Sin embargo, tú y yo sabemos que son esas labores las que han
            garantizado la subsistencia, desarrollo y estabilidad emocional de
            cualquier habitante en este mundo. Lo sabemos mucho antes de esta
            pandemia, porque esta crisis solo vino a recordarnos el orden bajo
            lo que todo se encuentra estructurado. Existen quienes dominan y
            quienes son oprimidos/as en base a la clase, etnia y, por supuesto,
            al género que les constituye. A partir de eso habrá vidas más o
            menos valiosas, gente con más o menos hambre, personas con distintos
            niveles de exposición a la contaminación y seres más o menos
            susceptibles a la violencia y explotación.
          </span>
        </div>
        <div className="edit-text  middle">
          <div className="edit-text-div">
            <span className="edit-text-span-middle right">
              Más de la mitad de las mujeres se está haciendo cargo sola de las
              labores de cuidado y domésticas.
            </span>
          </div>
          <div className="edit-text-div">
            <span className="edit-text-span-middle left">
              Bajo el orden sexo-género imperante, el cuidado y el trabajo
              doméstico no remunerado prácticamente no tienen valoración y
              nuevamente, en plena cuarentena, se encuentra ejercido
              principalmente por nosotras. Quienes no solo nos hemos vuelto la
              primera línea del cuidado, sino que hemos tenido que seguir
              rindiendo igual o más en el teletrabajo remunerado y en trabajos
              informales. Tanto, que más de la mitad de las mujeres se está
              haciendo cargo sola de las labores de cuidado y domésticas, según
              la encuesta Ipso-La Tercera. Tanto, que se están “llevando un peso
              que si no lo dosificamos, nos podría quebrar”, anuncia la
              psicóloga Paula Saez.
            </span>
          </div>
        </div>

        <div className="edit-text">
          <span className="section-span">
            Así, esta pandemia puede ser esta temida distopía que - tristemente-
            se hace realidad, pero también la oportunidad de quitarnos el
            vendaje. Y esa apertura no puede ser en solitario, porque si hay
            algo que nos ha legado el movimiento feminista ha sido,
            precisamente, la capacidad de cuestionarnos el mundo en el que
            vivimos, criticarlo e incomodarlo, nombrando lo que nadie se atreve
            a nombrar. En ese camino de superación del patriarcado y sus
            distintas formas de dominación, las redes de mujeres han cumplido y
            cumplirán un rol vital, porque nos enseñan de solidaridad, pero
            también porque la pobreza, el dolor y la esperanza se viven mejor
            compartidas.
          </span>
          <span className="section-span">
            En esa tarea los hombres también han de participar, porque este
            modelo se ha de derrumbar asumiendo ellos también esa toma de
            consciencia. No tenemos duda, otro Chile es posible si los cuidados
            y el trabajo doméstico no remunerado son reconocidos y valorizados;
            sin son asumidos como una responsabilidad colectiva de una sociedad
            que pone en el centro la vida, garantizando la seguridad social de
            todos quienes la componen, sin distinción. #AhoraNosotras pretende
            ser, entonces, no solo una revista feminista, sino que ese espacio
            de construcción entre mujeres, en que todas y todes estamos
            invitadas a sacar la voz. A relatar nuestra vida en primera persona.
            Porque la experiencia de cada una es también nuestra y nos permite
            delinear un nuevo futuro alegre, justo y digno.
          </span>
        </div>
        <div className="credits">
          <img src={creditos} alt="Creditos" className="credits-img" />
        </div>
        <ReadNext section={"editorial"} />
      </div>
    );
  }
}

export default Editorial;
