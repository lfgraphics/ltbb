"use client"
import React from 'react'
import './style.css'
import AboutSecond from './aboutSecond'
import AboutThird from './aboutThird'
import AboutFore from './aboutFore'
import AboutHero from './aboutHero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
const about = () => {
  useEffect(() => {
		AOS.init({
			offset: 300, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 1000,
		});
	});
  return (
    <React.Fragment>
    <AboutHero></AboutHero>
  {/* ===== Team Start ===== */}
  <section className="i pg ji gp uq bg-white-900  " data-aos="fade-down">
    {/* Bg Shapes */}
    <span className="rc h s r vd fd/5 fh rm" />
    <img src="images/shape-08.svg" alt="Shape Bg" className="h q r" />
    <img src="images/shape-09.svg" alt="Shape" className="of h y z/2" />
    <img src="images/shape-10.svg" alt="Shape" className="h _ aa" />
    <img src="images/shape-11.svg" alt="Shape" className="of h m ba" />
    {/* Section Title Start */}
    <div x-data="{ sectionTitle: `Meet With Our Creative Dedicated Team`, sectionTitleText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`}">
      <div className="animate_top bb ze rj ki xn vq">
        <h2
          x-text="sectionTitle"
          className="fk vj pr kk wm on/5 gq/2 bb _b"
        ></h2>
        <p className="bb on/5 wo/5 hq" x-text="sectionTitleText" />
      </div>
    </div>
    {/* Section Title End */}
    <div className="bb ze i va ki xn xq jb jo  ">
      <div className="wc qf pn xo gg cp  ">
       

        {/* Team Item */}
        <div className="animate_top rj ">
          <div className="c i pg z-1">
            <img className="vd min-h-34" src="Anshu.jpg"  alt="Team" />
            <div className="ef im nl il">
              <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa" />
              <span className="h s p rc vd hd mh va" />
              <div className="h s p vd ij jj xa">
                <ul className="tc xf wf gg">
                  <li>
                    <a href="#">
                      <svg
                        className="uh vl ml il"
                        width={10}
                        height={18}
                        viewBox="0 0 10 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/shashi-shekhar-pandey-a4553912/">
                      <svg
                        className="uh vl ml il"
                        width={18}
                        height={14}
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/anshu-gautam-044b9930/"
                    target="_blank"
                    >
                      <svg
                        className="uh vl ml il"
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h4 className="yj go kk wm ob zb">ANSHU GAUTAM</h4>
          <p>Co-founder and Director
</p>
        </div>
        {/* Team Item */}
        <div className="animate_top rj ">
          <div className="c i pg z-1">
            <img className="vd min-h-34" src="Shashi.jpg" alt="Team" />
            <div className="ef im nl il">
              <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa" />
              <span className="h s p rc vd hd mh va" />
              <div className="h s p vd ij jj xa">
                <ul className="tc xf wf gg">
                  <li>
                    <a href="#">
                      <svg
                        className="uh vl ml il"
                        width={10}
                        height={18}
                        viewBox="0 0 10 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        className="uh vl ml il"
                        width={18}
                        height={14}
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/shashi-shekhar-pandey-a4553912/"
                    target="_blank"
                    >
                      <svg
                        className="uh vl ml il"
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h4 className="yj go kk wm ob zb"> Shashi Shekhar</h4>
          <p>Co-founder and Principal Advisor
</p>
        </div>
        {/* Team Item */}
        {/* <div className="animate_top rj max-h-34">
          <div className="c i pg z-1">
            <img className="vd" src="images/team-03.png" alt="Team" />
            <div className="ef im nl il">
              <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa" />
              <span className="h s p rc vd hd mh va" />
              <div className="h s p vd ij jj xa">
                <ul className="tc xf wf gg">
                  <li>
                    <a href="#">
                      <svg
                        className="uh vl ml il"
                        width={10}
                        height={18}
                        viewBox="0 0 10 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        className="uh vl ml il"
                        width={18}
                        height={14}
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        className="uh vl ml il"
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h4 className="yj go kk wm ob zb">Avi Pestarica</h4>
          <p>Web Designer</p>
        </div> */}
      
      </div>
    </div>
  </section>
  {/* ===== Team End ===== */}

  <section className="hj rp hr" data-aos="zoom-in">
  {/* Section Title Start */}
  <div x-data="{ sectionTitle: `Clients Testimonials`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
    <div className="animate_top bb ze rj ki xn vq">
      <h2 x-text="sectionTitle" className="fk vj pr kk wm on/5 gq/2 bb _b"></h2>
      <p className="bb on/5 wo/5 hq" x-text="sectionTitleText" />
    </div>
  </div>
  {/* Section Title End */}
  <div className="bb ze ki xn ar">
    <div className="animate_top jb cq">
      {/* Slider main container */}
      <div className="swiper testimonial-01">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          {/* Slides */}
          <div className="swiper-slide">
            <div className="i hh rm sg vk xm bi qj">
              {/* Border Shape */}
              <span className="rc je md/2 gh xg h q r" />
              <span className="rc je md/2 mh yg h q p" />
              <div className="tc sf rn tn un zf dp">
                <img className="bf" src="images/testimonial.png" alt="User" />
                <div>
                  <img src="images/icon-quote.svg" alt="Quote" />
                  <p className="ek ik xj _p kc fb">
                  TLB is the trading name of Omnifix Technology Solutions Private Limited and a one-stop shop for all your legal needs. Led by a team of seasoned professionals with a wealth of experience in the legal, financial services, and technology industries, our aim is to provide a seamless and invaluable extension to law firms, attorneys and corporates.
                  </p>
                  <div className="tc yf vf">
                    <div>
                    
                      <span className="rc">TLB</span>
                    </div>
                    {/* <img
                      className="rk"
                      src="images/brand-light-02.svg"
                      alt="Brand"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* If we need navigation */}
        {/* <div className="tc wf xf fg jb">
          <div className="swiper-button-prev c tc wf xf ie ld rg _g dh pf ml vr hh rm tl zm rl ym">
            <svg
              className="th lm"
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.52366 7.83336L7.99366 12.3034L6.81533 13.4817L0.333663 7.00002L6.81533 0.518357L7.99366 1.69669L3.52366 6.16669L13.667 6.16669L13.667 7.83336L3.52366 7.83336Z"
                fill=""
              />
            </svg>
          </div>
          <div className="swiper-button-next c tc wf xf ie ld rg _g dh pf ml vr hh rm tl zm rl ym">
            <svg
              className="th lm"
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z"
                fill=""
              />
            </svg>
          </div>
        </div> */}
      </div>
    </div>
  </div>
</section>

  
 
<AboutSecond ></AboutSecond>
<AboutThird ></AboutThird>
<AboutFore ></AboutFore>

    </React.Fragment>
  )
}

export default about