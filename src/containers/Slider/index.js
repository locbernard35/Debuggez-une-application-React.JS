import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";// True=> console recup Data
import { getMonth } from "../../helpers/Date";
import "./style.scss";



const Slider = () => {

//  Meca=>
  const { data } = useData();// return =>Object  
  const [index, setIndex] = useState(0);// return =>0
 
//  Trie =>json
/*  avant
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );
 */
//  apres=>Tri par date décroissant
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? 1 : -1
  );


  //  erreur stat  -1 => fichier  json Data
  const nextCard = () => {
    setIndex((prevIndex) =>
      prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0
    );
  };

  // debug interval auto 5000ms
  useEffect(
    () => {
      const interval = setInterval(nextCard, 5000);
      return () => clearInterval(interval);
    },   
    [index, byDateDesc]
  );
  
  //  jsx erreur  =>(key) unique ,erreur => (index) checked={index === radioIdx}
  return (
    <div className="SlideCardList">

    {byDateDesc?.map((event, idx) => (
        <div key={event.title}>
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>

          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={_.title}
                  type="radio"
                  readOnly
                  name="radio-button"
                  checked={index === radioIdx}
                />
              ))}
            </div>
          </div>
        </div>
      ))}











   
    </div>
  );
};

export default Slider;
