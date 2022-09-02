import React, { useState, useRef } from "react";
import { useEffect } from "react";
import PeopleCard from "../components/PeopleCard";
import "./home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {
  gsap.registerPlugin(ScrollTrigger);
  var [value, setValue] = useState(0);

  useEffect(() => {
    document.querySelector(".carousel").scrollTo(value, value);
  }, [value]);

  const drag = (e) => {
    setValue(e.pageX);
  };

  const data = [
    {
      img: "/woman.jpg",
      caption:
        "Hosting my studio changed my life and gifted me with memorable experiences and people.",
      name: "Reka",
      place: "Host in Milan",
    },
    {
      img: "/man.jpg",
      caption:
        "Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.",
      name: "Darrel",
      place: "Host in Atlanta",
    },
    {
      img: "/cooking.jpg",
      caption:
        "We’re able to keep our culture alive by hosting our pasta-making experience.",
      name: "Nerina",
      place: "Host in Palombara Sabina",
    },
    {
      img: "/yellowgown.jpg",
      caption:
        "Airbnb has allowed me to create my own job doing what I love — taking care of guests in our home.",
      name: "Clair",
      place: "Host in Chiang Mia",
    },
    {
      img: "/arabian.jpg",
      caption:
        "Hosting my bedouin tent has introduced me to people around the world.",
      name: "Mohammed",
      place: "Host in Wadi Rum",
    },
    {
      img: "/marco.jpg",
      caption:
        "I love hosting my eco-home so people can connect with nature and their loved ones.",
      name: "Marko",
      place: "Host in Paraty",
    },
  ];

  let hero = useRef("");
  let header = useRef("");
  let overlay = useRef("");
  let heroTop = useRef("");
  let heroBottom = useRef("");
  let heroLeft = useRef("");
  let heroRight = useRef("");

  useEffect(() => {
    gsap.to(heroTop, 0.8, { y: "-100%", opacity: 0 });
    gsap.to(heroBottom, 0.8, { y: "100%", opacity: 0 });
    gsap.to(overlay, 0.8, { display: "none" });
    gsap.from(heroLeft, 0.8, { x: "-50%", opacity: 0, delay: 0.6 });
    gsap.from(heroRight, 0.8, { x: "50%", opacity: 0, delay: 0.6 });
    gsap.from(header, 0.8, {
      y: "-80",
      scrollTrigger: {
        trigger: hero,
        start: "bottom top",
        scrub: 1,
        markers: false,
      },
    });
  }, []);

  return (
    <div className="homepage">
      <div className="hero" ref={(el) => (hero = el)}>
        <div className="overlay" ref={(el) => (overlay = el)}>
          <div ref={(e) => (heroTop = e)} className="top"></div>
          <div ref={(e) => (heroBottom = e)} className="bottom"></div>
        </div>

        <header ref={(el) => (header = el)}>
          <img src="/headerlogo.svg" className="logo" alt="" />
          <div className="hRight">
            <div className="headerRound">
              <div className="images">
                <img src="/man.jpg" alt="" />
                <img src="/man.jpg" alt="" />
                <img src="/man.jpg" alt="" />
              </div>

              <p>Ask a Superhost</p>
            </div>

            <button>Try hosting</button>
          </div>
        </header>

        <div className="left" ref={(el) => (heroLeft = el)}>
          <img src="/logo.svg" className="logo" alt="logo" />
          <h1>Open your door to hosting</h1>

          <button>Try hosting</button>
        </div>
        <div className="right" ref={(el) => (heroRight = el)}>
          <video src="/heroVideo.webm" loop autoPlay muted playsInline></video>
        </div>
      </div>

      <div className="second">
        <h1>Find out what you could earn as a host</h1>

        <div className="container">
          <div className="findOut">
            <p>Hosts in your area earn an average of*</p>

            <h2>
              <span>$913</span>/month
            </h2>
          </div>
          <div className="findOut">
            <p>They earn</p>

            <h2>
              <span>$83</span>/month
            </h2>
          </div>
          <div className="findOut">
            <p>They're booked</p>

            <h2>
              <span>$913</span>night/month
            </h2>
          </div>
        </div>

        <p>Tell us about your place</p>
      </div>

      <div className="map"></div>

      <div className="slider">
        <h1>You can host anything anywhere</h1>

        <div className="carousel">
          {data.map((e, index) => (
            <PeopleCard data={e} key={index} />
          ))}
        </div>
      </div>

      <div className="ukraine">
        <p>Help house 100,000 refugees fleeing Ukraine</p>
        <button>learn more</button>
      </div>

      <div className="questions">
        <p>Questions about hosting? Ask a Superhost.</p>
        <button>learn more</button>
      </div>

      <div className="aircover">
        <div className="left">
          <h1>
            <span>air</span>cover
          </h1>
          <p>for Hosts</p>

          <h3>
            Top-to-bottom protection. Always included, always free. Only on
            Airbnb.
          </h3>
          <button>Learn more</button>
        </div>
        <div
          className="right
        "
        ></div>
      </div>

      <div className="try">
        <div className="left">
          <video
            autoPlay
            playsInline
            loop
            muted
            src="/secondvideo.webm"
          ></video>
        </div>
        <div className="right">
          <h2>Try hosting on Airbnb</h2>
          <p>Join us. We'll help you every step of the way </p>

          <button>Let's go</button>
        </div>
      </div>

      <footer>
        <div className="firstFooter">
          <div className="support">
            <h1>Support</h1>
            <li>Help Center</li>
            <li>Supporting people with disabilities</li>
            <li>Report a neighborhood concern</li>
            <li>AirCover</li>
            <li>Cancellation options</li>
            <li>Safety information</li>
            <li>Our COVID-19 Response</li>
          </div>
          <div className="community">
            <h1>Community</h1>
            <li>Help Center</li>
            <li>Supporting people with disabilities</li>
            <li>Report a neighborhood concern</li>
            <li>AirCover</li>
            <li>Cancellation options</li>
            <li>Safety information</li>
            <li>Our COVID-19 Response</li>
          </div>
          <div className="hosting">
            <h1>Hosting</h1>
            <li>Help Center</li>
            <li>Supporting people with disabilities</li>
            <li>Report a neighborhood concern</li>
            <li>AirCover</li>
            <li>Cancellation options</li>
            <li>Safety information</li>
            <li>Our COVID-19 Response</li>
          </div>
          <div className="airbnb">
            <h1>Airbnb</h1>
            <li>Help Center</li>
            <li>Supporting people with disabilities</li>
            <li>Report a neighborhood concern</li>
            <li>AirCover</li>
            <li>Cancellation options</li>
            <li>Safety information</li>
            <li>Our COVID-19 Response</li>
          </div>
        </div>

        <hr />

        <div className="secondFooter">
          © 2022 Airbnb, Inc. ·Privacy· Terms· Sitemap
        </div>
      </footer>
    </div>
  );
}

export default Home;
