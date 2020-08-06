import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";
import { animateScroll as scroll } from 'react-scroll'

export class Historicas extends Component {
  componentDidMount() {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="section historicas">
        <GoBack />
        <div className="section-titles">
          <h3 className="section-h3">HISTÓRICAS</h3>
          <h1 className="section-h1">LAS FEMINISTAS DE AYER Y HOY </h1>
          {/* <h2 className="section-h2">Ilustración por: ????</h2> */}
        </div>

        <div className="section-div-span ">
          <span className="section-span">
            En este mes queremos reconocer al Movimiento Pro-Emancipación de las Mujeres de Chile (Memch) y las estudiantes del Mayo Feminista que con fuerza exigieron educación sexual y no sexista en las instituciones educativas durante el 2018.
          </span>
          <span className="section-span">
            El Memch de los años treinta batalló por la dignidad de las mujeres y para que nosotras conquistáramos derechos civiles y políticos - como el sufragio femenino- que estaban en deuda pero además, como si la historia se repitiera, abogaron por la protección de la maternidad de la mujer trabajadora. Sin lugar a dudas, sus integrantes fueron un referente de organización y vanguardia de la lucha feminista en Chile.
          </span>
          <span className="section-span">
            Estas mujeres pioneras y valientes inspirarían permanente a las generaciones venideras con liderazgos como el de Elena Caffarena, abogada de la Universidad de Chile, Olga Poblete, profesora y defensora de los derechos humanos, entre tantas otras como Eulogia Román, Felisa Vergara, Gabriela Mandujano o Marta Vergara.
          </span>
          <span className="section-span">
            Por eso, no es sorpresa que la pañoleta verde que usamos este inspirada en las primeras gráficas sacadas por las feministas del Memch con la mujer que alza la bandera con la consigna ¡Aborto ya! Esa es la misma consigna que se usó para el Primer Congreso del Movimiento Pro-Emancipación de las Mujeres de Chile llevado a cabo en 1937.
          </span>
          <span className="section-span">
            La segunda mujer es una actual relacionada con las jóvenes feministas que salen a la calle con sus pañoletas verdes o moradas y no dudan en desnudarse como un gesto subversivo y emancipador. Son ellas, el movimiento feminista chileno de la actualidad, quienes también nos inspiran. Son las jóvenes estudiantes secundarias y universitarias, aquellas que saltan los torniquetes con su jumper, quienes son el reflejo de esas nueva generación de mujeres que pierden el miedo y alzan con fuerza al denunciar la violencia, acoso y abusos en espacios educativos.

          </span>
          <span className="section-span">
            Su lucha se centró en la urgencia de la educación no sexista, derechos sexuales, la libertad sobre sus cuerpos y detener el acoso, los abusos y la violencia machista. Es esta la historia que nos interesa representar. Una desde una mirada colectiva y de procesos que nos mantienen con la lucha y convicción.
          </span>
        </div>

        <div className="historicas-img-div">
          <img
            src={"https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA2/Historicas.png?raw=true"}
            alt="Historicas"
            className="historicas-img"
          />
        </div>

        <ReadNext section={"historicas"} />
      </div>
    );
  }
}

export default Historicas;
