import './Cards.css'
import cardUno from './assets/cardUno.jpeg';
import cardDos from './assets/cardDos.jpeg';
import cardTres from './assets/cardTres.jpeg';




function Cards(){
    return (


        <div>

            {/* División Primeros Cards */}
        <section className='containerUno'>
            <img src={cardUno} className="cardsInicio cardPosition cardTransition"></img>
            <img src={cardDos} className="cardsInicio cardPosition cardTransition"></img>
            

        </section>

            {/* División Segundos Cards */}
        <section className='containerUno'>
            <img src={cardTres} className="cardsInicio cardPosition cardTransition"></img>
            <img src={cardUno} className="cardsInicio cardPosition cardTransition"></img>
                
        </section>

            {/* División Terceros Cards */}
        <section className='containerUno'>
            <img src={cardUno} className="cardsInicio cardPosition cardTransition"></img>
            <img src={cardUno} className="cardsInicio cardPosition cardTransition"></img>
                
        </section>

        <div className='imageBackground'></div>
        </div>

        

        

        
    );
}

export default Cards;