import './FirstElement.css';

import { FirstRuContent } from '../../../content/content-ru';

export const FirstElement = () => {
  return (
    <section>
      <div className="container d-flex-col">
        <div className="first-element-container d-flex">
          <div className="first-element-img">
            <img src="../../../public/img/engine.png" alt="oil-engine" />
          </div>
          <div className="first-element-desc d-flex-col">
            <h3>{FirstRuContent.title}</h3>
            <p className="first-element-parag">{FirstRuContent.desc[0]}</p>
            <p className="first-element-parag">{FirstRuContent.desc[1]}</p>
          </div>
        </div>
        <div className="first-element-container d-flex">
          <div className="first-element-cart">
            <p className="first-element-parag">{FirstRuContent.info}</p>
          </div>
          <div className="first-element-desc d-flex">
            <p className="first-element-parag">{FirstRuContent.desc[2]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
