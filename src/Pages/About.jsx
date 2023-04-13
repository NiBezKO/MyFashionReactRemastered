import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <main>
      <section>
        <div className="container">
          <div className="about">
            <div className="about__top">
              <h1>О бренде</h1>
              <p onClick={goBack}>Назад</p>
            </div>
            <div className="about__content about-content">
              <div className="about-content__item">
                <div className="about-content__inner">
                  <h3 className="about-content__title">Магия в деталях</h3>
                  <p className="about-content__description">
                    Первый магазин кампании был открыт в маленьком городке на севере страны в
                    2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были
                    копиями парижских моделей. <br />
                    Несмотря на то, что по образованию основательница была адвокатом, ее семья
                    всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для
                    женщин, а мать основала профессиональную школу кроя и шитья). Стремление
                    производить одежду для масс несло в себе большие перспективы, особенно в то
                    время, когда высокая мода по-прежнему доминировала, а рынка качественного
                    prêt-a-porter попросту не существовало.
                  </p>
                </div>
                <img src="./img/aboutImg1.jpg" alt="" className="about-content__img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
