import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";
import { animateScroll as scroll } from 'react-scroll'

export class Editorial extends Component {
  componentDidMount() {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="section editorial">
        {/* HEAD */}
        <GoBack />
        <div className="section-titles">
          <h3 className="section-h3">EDITORIAL</h3>
          <h1 className="section-h1">
            PODER DECIDIR, PARA NO MORIR
          </h1>
          <h2 className="section-h2">
            Por Anita Martínez, Directora Revista Ahora Nosotras
          </h2>
        </div>
        <div className="section-img-div">
          <img
            src={"https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA3/editorial.png?raw=true"}
            alt="editorial"
            className="section-img"
          />
        </div>

        {/* BODY */}
        {/* <div className="section-div-span"> */}
        <span className="section-span">
          Julio de 2020 no se parece al de años anteriores. Estamos encerradas y no pudimos participar de la octava marcha por el Aborto libre, legal, seguro y gratutito. Junto a ello,  fuimos las impotentes espectadoras de la audiencia de formalización de Martín Pradenas en el caso de Antonia Barra y esto nos removió y abrió viejas heridas.
          </span>

        <span className="section-span">
          Lo paradigmático de este caso no es solo la violencia sexual que acecha a miles de mujeres de manera cotidiana, sino que también todo el entramado de machismo y cultura de la violación que gatillan la fatídica decisión de Antonia. Lo que termina por remecer a nuestra sociedad y abre importantes preguntas en torno al consentimiento, la autonomía sexual y el continuo de violencia que es ejercido contra las mujeres durante todas las etapas de su desarrollo.
          </span>

        <span className="section-span">
          Así, la cosificación que realiza la sociedad respecto a las niñas y mujeres se manifiesta en cuestiones concretas que van desde ser clasificadas acorde a su belleza por su pares varones hasta ser juzgadas por las decisiones que toman en torno a cuándo y cómo desean vivir su sexualidad. Paralelamente, los hombres aprenden desde pequeños a subordinar a las mujeres y esperar su sumisión y en lo que respecta a vivir su sexualidad, encuentran parte importante de su aprendizaje en la pornografía.
        </span>
        <span className="section-span">
          De esta manera, el orden de género es claro en sus intentos de disciplinar las decisiones sobre autonomía sexual y reproductiva y muchas veces su desobediencia trae aparejada una respuesta violenta, la que también se manifiesta en el abandono u omisión que realiza el Estado al no resguardar los derechos sexuales y reproductivos de niñas y mujeres. Es lo que está ocurriendo hoy, de forma aún más grave, en esta crisis sanitaria debido al desabastecimiento y alza de precios en anticonceptivos y a los obstáculos de acceso tanto en la atención ginecológica como en la práctica de abortos
        </span>
        <span className="section-span">
          Esta ausencia del Estado y en particular, para el gobierno de Sebastián Piñera demuestra que la vida de las mujeres no es una prioridad, porque la maternidad no es un asunto del que las mujeres puedan decidir de forma libre y autónoma. Se trata de un destino obligado o al menos una materia que no requiere de acciones urgentes, reafirmando la idea de que las mujeres pueden ser postergadas, incluso tratándose de algo tan trascendente en su proceso vital como lo es la decisión sobre ser o no madres.
        </span>
        <span className="section-span">
          De esta forma el escenario que se augura es de los más demoledores. Según datos de la ONU habrá más de 7 millones de embarazos no deseados en todo el mundo y además, un número importante de mujeres que desesperadas tomarán la decisión de interrumpir sus embarazos mediante abortos clandestinos que pondrán en riesgo sus vidas.
        </span>

        <span className="section-span">
          Y si bien esta situación límite en que se encuentran miles de mujeres pareciera ser irrelevante a los ojos de este gobierno. Lo cierto es que, aún en la peor crisis sanitaria del siglo, existe un movimiento feminista que resiste y que demuestra su fuerza tanto en un histórico 8 de marzo como en la reivindicación de los derechos de las mujeres frente a la inexistencia de una Ministra de la Mujer y Equidad de Género y en la exigencia de Justicia para Antonia.

        </span>
        <span className="section-span">
          La conmemoración por el Aborto libre, legal, seguro y gratuito de este año no fue la excepción, porque las feministas sabemos que el reconocimiento y resguardo de nuestra  autonomía reproductiva es, en la práctica, lo que pone en jaque al patriarcado, ya que implica el reconocimiento de nuestra calidad de sujetas de derecho y deseo. Y hoy, más que nunca, sabemos que llegó el momento de conquistar ese futuro para hacerlo nuestro.
        </span>

        {/* CREDITOS */}
        <div className="credits">
          <img
            src={
              "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA3/creditos.png?raw=true"
            }
            alt="Creditos"
            className="credits-img"
          />
        </div>

        {/* SEGUIENTE SECCIÓN */}
        <ReadNext section={"editorial"} />
      </div>
    );
  }
}

export default Editorial;
