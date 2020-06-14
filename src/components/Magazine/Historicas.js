import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";

export class Historicas extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="section historicas">
        <GoBack />
        <div className="section-titles">
          <h2 className="section-h2">HISTÓRICAS</h2>
          <h1 className="section-h1">Eloísa Díaz e Izkia Siches</h1>
          <h3 className="section-h3">Ilustración por: Luisa Rivera</h3>
        </div>

        <div className="historicas-img-div">
          <img
            src={
              "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/7_CONTRAPORTADA/ahoranosotras.png?raw=true"
            }
            alt="Historicas"
            className="section-img historicas-img"
          />
        </div>

        <div className="edit-text">
          <span className="edit-text-span">
            En tiempos de pandemia, las mujeres se han convertido en la primera
            línea en la defensa de la salud y la vida. Sin embargo, este
            protagonismo de doctoras, enfermeras y asistentes no es azaroso,
            sino que se lo debemos a mujeres pioneras que se atrevieron a dar un
            paso al frente y ser parte de disciplinas del conocimiento
            históricamente masculinizadas como las ciencias.
          </span>
          <span className="edit-text-span">
            Recordemos que, en el siglo XIX la mujer chilena no podía acceder a
            una educación profesional pues ésta se encontraba limitada por una
            ley que impedía a las mujeres ingresar a la universidad. Finalmente,
            en 1877, y después de una larga batalla de las mujeres de la época,
            se permite a las mujeres poder formarse profesionalmente. Es por
            ello que, en esta primera versión de históricas, queremos reconocer
            a Eloísa Díaz, la primera mujer estudiante de medicina de la
            Universidad de Chile y la primera mujer médico de Chile y América
            del Sur, quien abrió las puertas para muchas compañeras pudiesen
            ingresaran a estos campos. Décadas más tarde, podemos decir que el
            legado de Eloísa sigue vigente gracias a otro liderazgo que ha
            destacado por su rol en esta crisis.
          </span>
          <span className="edit-text-span">
            Hablamos de la Izkia Siches, ariqueña, médica cirujana chilena de la
            Universidad de Chile, primera presidenta del Colegio Médico de Chile
            y la más joven en ocupar un cargo que por más de 70 años fue sólo
            ocupado por hombres. Izkia no sólo ha destacado por ser pionera en
            este puesto directivo, sino porque lo ha ejercido tenazmente a pesar
            de la oposición en el propio sector de salud. Su figura ha sido
            clave para mostrar a la ciudadanía y al gobierno, los caminos más
            seguros y eficaces en la presente crisis sanitaria.
          </span>
        </div>
        <ReadNext section={"historicas"} />
      </div>
    );
  }
}

export default Historicas;
