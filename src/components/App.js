import React, { Fragment } from "react";
import logo from "../img/logo-white.png";
import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";

import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";

import bgVideo from "../img/video.mp4";

const App = () => (
  <Fragment>
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
                <a href="#" className="btn btn--white">
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
                <a href="#" className="btn btn--white">
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
                <a href="#" className="btn btn--white">
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
  </Fragment>
);

export default App;