"use client";
import React from "react";
import Player from "./player";
const aboutHero = () => {
  return (
    <React.Fragment>
      <div className="bg-white">
        <section className="ji gp uq 2xl:ud-py-35 pg">
          <div className="bb ze ki xn wq">
            <div className="tc wf gg qq">
              <div className="animate_right jn/2">
                {/* <h4 className="ek yj mk gb">Why Choose Us</h4> */}
                <h2 className="fk vj zp pr kk wm qb">
                  Your extended legal partner!
                </h2>
                <p className="uo">
                  TLB: Your legal companion, offering expert solutions. Navigate
                  complexities confidently with our dedicated team. Elevate your
                  legal experience with TLB.
                </p>
                {/* <a
          href="https://www.youtube.com/watch?v=xcJtL7QggTI"
          data-fslightbox=""
          className="vc wf hg mb"
        >
          <span className="tc wf xf be dd rg i gh ua">
            <span className="nf h vc yc vd rg gh qk -ud-z-1" />
            <img src="images/icon-play.svg" alt="Play" />
          </span>
          <span className="kk">SEE HOW WE WORK</span>
        </a> */}
                <Player></Player>
              </div>

              {/* About Images */}
              <div className="animate_left xc gn gg jn/2 i">
                <div>
                  {/* <img
            src="images/shape-05.svg"
            alt="Shape"
            className="h -ud-left-5 x"
          /> */}
                  <img src="images/about-01.png" alt="About" className="ib" />
                  <img src="images/about-02.png" alt="About" />
                </div>
                <div>
                  {/* <img src="images/shape-06.svg" alt="Shape" /> */}
                  <img
                    src="images/about-03.png"
                    alt="About"
                    className="ob gb"
                  />
                  {/* <img src="images/shape-07.svg" alt="Shape" className="bb" /> */}
                </div>
              </div>
              {/* About Content */}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default aboutHero;
