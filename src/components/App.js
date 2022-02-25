import React, { Fragment } from "react";
import logo from "../img/logo-white.png";
import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";

import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";

import bgVideo from "../img/video.mp4";

import xlogo from "../img/logo-green-2x.png";

const App = () => (
  <Fragment>
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__bg"></div>
      <nav className="navigation__box">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              about natours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              popular tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              book now
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary__main">outdoors</span>
          <span className="heading-primary__sub">is where life happens</span>
        </h1>
        <a href="#" className="btn btn--white btn--animated">
          discover our tours
        </a>
      </div>
    </header>

    <main>
      <section className="section-about">
        <div className="u-text-center u-margin-bottom-large">
          <h2 className="heading-secondary">
            exciting tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              you're going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              veniam est culpa aspernatur quisquam! Repellendus aliquid odio
              possimus doloribus iure!
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              molestiae recusandae eaque, deleniti veritatis doloremque?
            </p>
            <a href="#" className="btn-link">
              Learn More &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={nat1}
                alt="nat-1"
                className="composition__img composition__img--p1"
              />
              <img
                src={nat2}
                alt="nat-2"
                className="composition__img composition__img--p2"
              />
              <img
                src={nat3}
                alt="nat-3"
                className="composition__img composition__img--p3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-world"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                explore the world
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                deleniti tempore omnis delectus!
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                meet nature
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                deleniti tempore omnis delectus!
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-map"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                find your way
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                deleniti tempore omnis delectus!
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-heart"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                live a healthier life
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                deleniti tempore omnis delectus!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tours">
        <h3 className="heading-secondary u-margin-bottom-medium">
          most popular tours
        </h3>

        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__face card__face--front card__face--front--p1">
                <div className="card__img card__img--1"></div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    the sea explorer
                  </span>
                </h4>
                <div className="card__text">
                  <ul>
                    <li>3 day tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty : easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__face card__face--back card__face--back--p1">
                <div className="card__detail">
                  <span className="card__detail--text">only</span>
                  <span className="card__detail--price">$297</span>
                </div>
                <a href="#popup" className="btn btn--white">
                  Book Now!
                </a>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__face card__face--front card__face--front--p2">
                <div className="card__img card__img--2"></div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    the forest hiker
                  </span>
                </h4>
                <div className="card__text">
                  <ul>
                    <li>7 day tours</li>
                    <li>Up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty : medium</li>
                  </ul>
                </div>
              </div>
              <div className="card__face card__face--back card__face--back--p2">
                <div className="card__detail">
                  <span className="card__detail--text">only</span>
                  <span className="card__detail--price">$497</span>
                </div>
                <a href="#popup" className="btn btn--white">
                  Book Now!
                </a>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__face card__face--front card__face--front--p3">
                <div className="card__img card__img--3"></div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    the snow adventurer
                  </span>
                </h4>
                <div className="card__text">
                  <ul>
                    <li>5 day tours</li>
                    <li>Up to 15 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty : hard</li>
                  </ul>
                </div>
              </div>
              <div className="card__face card__face--back card__face--back--p3">
                <div className="card__detail">
                  <span className="card__detail--text">only</span>
                  <span className="card__detail--price">$897</span>
                </div>
                <a href="#popup" className="btn btn--white">
                  Book Now!
                </a>
              </div>
            </div>
          </div>
        </div>

        <h3 className="u-text-center u-margin-top-extra-large">
          <a href="#" className="btn btn--primary">
            discover all tours
          </a>
        </h3>
      </section>

      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>
        <div className="u-text-center u-margin-bottom-large">
          <h2 className="heading-secondary">we make people genuinely happy</h2>
        </div>
        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={nat8} alt="" className="story__shape--img" />
              <figcaption className="story__shape--caption">
                Mary Rose
              </figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                i had the best week ever with my family
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                quis, nisi ullam eos maiores illo, necessitatibus amet sed
                reiciendis similique sit nostrum porro voluptatibus dicta?
                Deleniti totam modi cum ipsum voluptates dolor laudantium. Rem
                sapiente est voluptas molestias quibusdam dolore provident.
                Explicabo quas repellat necessitatibus exercitationem nihil
                nemo? Consectetur, vero!
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={nat9} alt="" className="story__shape--img" />
              <figcaption className="story__shape--caption">
                jack wilson
              </figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                wow! my life is completely different now
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                quis, nisi ullam eos maiores illo, necessitatibus amet sed
                reiciendis similique sit nostrum porro voluptatibus dicta?
                Deleniti totam modi cum ipsum voluptates dolor laudantium. Rem
                sapiente est voluptas molestias quibusdam dolore provident.
                Explicabo quas repellat necessitatibus exercitationem nihil
                nemo? Consectetur, vero!
              </p>
            </div>
          </div>
        </div>

        <div className="u-text-center u-margin-top-extra-large">
          <a href="#" className="btn-link">
            Read all stories &rarr;
          </a>
        </div>
      </section>

      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__content">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">start booking now</h2>
              </div>
              <form className="form">
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    id="name"
                    placeholder="Full name"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    id="email"
                    placeholder="Email Address"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email Address
                  </label>
                </div>
                <div className="form-group u-margin-bottom-extra-large">
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio-group__input"
                      name="group-size"
                      id="small-group"
                    />
                    <label htmlFor="small-group" className="radio-group__label">
                      <span className="radio-group__custom"></span>
                      Small tour group
                    </label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio-group__input"
                      name="group-size"
                      id="large-group"
                    />
                    <label htmlFor="large-group" className="radio-group__label">
                      <span className="radio-group__custom"></span>
                      large tour group
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn--primary">next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer__logo-box u-margin-bottom-medium">
        <img src={xlogo} alt="2x-logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <ul className="footer__navigations">
            <li className="footer__item">
              <a href="#" className="footer__link">
                company
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                contact us
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                careers
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                privacy policy
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                terms
              </a>
            </li>
          </ul>
        </div>

        <div className="col-1-of-2">
          <div className="footer__copyright">
            <p>
              Built by{" "}
              <a href="#" className="footer__link">
                thana wisutphusi
              </a>{" "}
              for an online course at{" "}
              <a href="#" className="footer__link">
                Udemy
              </a>
              . <br />
              Copyright &copy; Web site designed by{" "}
              <a href="#" className="footer__link">
                jonas schmedtmann
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>

    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__close">
          <a href="#" className="popup__close-icon">
            &times;
          </a>
        </div>
        <div className="popup__content-left">
          <img src={nat8} alt="" className="popup__img" />
          <img src={nat9} alt="" className="popup__img" />
        </div>
        <div className="popup__content-right">
          <h2 className="heading-secondary u-margin-bottom-small">
            start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            important - please read these terms before booking
          </h3>
          <p className="popup__text u-margin-bottom-extra-large">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus voluptatem optio praesentium fugiat expedita, assumenda
            doloribus corrupti blanditiis nisi, iste omnis possimus mollitia
            ducimus architecto deserunt voluptatum suscipit! Quidem sit maxime
            libero illo totam a autem nam exercitationem recusandae odio ex
            explicabo corporis velit rerum eaque et, provident, magni tempore
            quia. Atque debitis harum velit minus architecto maiores consequatur
            commodi, omnis animi temporibus sed voluptates dolorem, error
            praesentium saepe nam, quae quisquam! Animi asperiores repellat
            quisquam praesentium earum voluptate quia, laborum illo nulla libero
            veritatis molestiae, ratione quidem vitae quibusdam repudiandae
            tenetur consequuntur impedit eaque possimus? Ipsam consequatur
            officia quia.
          </p>
          <a href="#" className="btn btn--primary">
            book now
          </a>
        </div>
      </div>
    </div>
  </Fragment>
);

export default App;
