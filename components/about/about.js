"use client"
import React from 'react'
import './style.css'
import AboutSecond from './aboutSecond'
import AboutThird from './aboutThird'
import AboutFore from './aboutFore'
import AboutHero from './aboutHero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
const about = () => {
  useEffect(() => {
		AOS.init({
			offset: 300, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 1000,
		});
	});
  const router  = useRouter();

 
  
    
  

  const profileData = [
    {
      id:1,
      name:"ANSHU GAUTAM",
      roal:"Co-Founder and Director",
      img:"Anshu.jpg",
      linkdin:"https://www.linkedin.com/in/shashi-shekhar-pandey-a4553912/",
      facebook:"#",
      twitter:"#",
      details:`Ms. Anshu Gautam has earned her B.A. in psychology and an M.B.A and PGD in finance and operations from leading universities such as Oxford, University of East London, University of Coventry, Chartered Management Institute and has approximately 15 years of rich experience in the field of finance , operations and quality assurance. She completed her higher education and work experience in England and has successfully held managerial level positions in companies such as Barclays Bank, Close Brothers Bank, Pentasia Recruitment and University of Coventry.
          After spending 18 years in England and travelling around the globe, Anshu Gautam decided to return to her roots and her belief in importance of education lead her to start working in the education sector. Ms. Gautam joined the KD Group as operation and strategy consultant in the year 2016 and was elected as C.E.O and Director of operations and strategy by the board in year 2019. She is a big advocate of “Social Justice”, “Women Empowerment” with “Right to Equality” and under her leadership various groups of KD Group have seen over 70% growth in securing professional programmes and placement in government and private sector with collaboration from international academics and speakers. She feels deeply passionate about various non-profit and community enhancement programmes run by KD Group and is responsible for managing KD Groups CSR activities. She is also in-charge of managing international collaboration and KD Groups radio station. She has a wealth of experience of driving and leading cross functional teams to deliver value to clients. A firm believer in continues learning, she is currently pursuing an executive leadership programme from Oxford University.
          
          `
    
    },
    
    {
      id:2,
      name:"Shashi Shekhar",
      roal:"Co-founder and Principal Advisor",
      img:"Shashi.jpg",
      linkdin:"https://www.linkedin.com/in/shashi-shekhar-pandey-a4553912/",
      facebook:"#",
      twitter:"#",
      details:`An alumni of Campus Law Centre, Delhi University - Shashi Shekhar has over 15 years of experience with specialization in Employment, Corporate and Cyber laws. He regularly advises on various legal matters including but not limited to employment, industrial and  corporate laws etc. In the course of his career, Shashi Shekhar has gained extensive experience of working and successfully dealing with variety of  complex issues in industrial and corporate sector whilst in parallel working with many start-ups in structuring their establishment. He has extensive knowledge in drafting employment contracts,  nationwide employment audits, company policies and handbooks, internal disciplinary inquiries, sexual harassment proceedings, structuring compensation and benefits, negotiation of senior management severances and labour management practices. His inclination towards outsourcing  industry paved way for his association with various IT COMPANIES as their adviser helping them to overcome their data theft and employment contract issues. 
          He is a member of Delhi High Court Bar Association and Supreme Court Bar Association.
          He also has a publication under his wings - 
          The Law and the Legal process outsourcing  (2008) Wolters Kluers Publication
          `
    },
    
    {
      id:3,
      name:"Shashi Shekhar",
      roal:"Co-founder and Principal Advisor",
      img:"Shashi.jpg",
      linkdin:"https://www.linkedin.com/in/shashi-shekhar-pandey-a4553912/",
      facebook:"#",
      twitter:"#",
      details:`An alumni of Campus Law Centre, Delhi University - Shashi Shekhar has over 15 years of experience with specialization in Employment, Corporate and Cyber laws. He regularly advises on various legal matters including but not limited to employment, industrial and  corporate laws etc. In the course of his career, Shashi Shekhar has gained extensive experience of working and successfully dealing with variety of  complex issues in industrial and corporate sector whilst in parallel working with many start-ups in structuring their establishment. He has extensive knowledge in drafting employment contracts,  nationwide employment audits, company policies and handbooks, internal disciplinary inquiries, sexual harassment proceedings, structuring compensation and benefits, negotiation of senior management severances and labour management practices. His inclination towards outsourcing  industry paved way for his association with various IT COMPANIES as their adviser helping them to overcome their data theft and employment contract issues. 
          He is a member of Delhi High Court Bar Association and Supreme Court Bar Association.
          He also has a publication under his wings - 
          The Law and the Legal process outsourcing  (2008) Wolters Kluers Publication
          `
    }
    
  ]
  return (
    <React.Fragment>
    <AboutHero></AboutHero>
  {/* ===== Team Start ===== */}
  <>
  {/* component */}
  <div className="mb-16">
    {/* Code block starts */}
    <dh-component>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BUILDING TEAM
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">

          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            {/* <div
              role="listitem"
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                      alt="Display Picture of Andres Berlin"
                      role="img"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold text-3xl text-center mb-1">
                    Andres Berlin
                  </h1>
                  <p className="text-gray-800 text-sm text-center">
                    Chief Executive Officer
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    The CEO's role in raising a company's corporate IQ is to
                    establish an atmosphere that promotes knowledge sharing and
                    collaboration.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Github" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Twitter" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Instagram" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div
              role="listitem"
              className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                      alt="Display Picture of Silene Tokyo"
                      role="img"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold text-3xl text-center mb-1">
                    Silene Tokyo
                  </h1>
                  <p className="text-gray-800 text-sm text-center">
                    Product Design Head
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    The emphasis on innovation and technology in our companies
                    has resulted in a few of them establishing global benchmarks
                    in product design and development.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Github" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Twitter" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Instagram" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div
              role="listitem"
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                      alt="Display Picture of Johnson Stone"
                      role="img"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold text-3xl text-center mb-1">
                    Johnson Stone
                  </h1>
                  <p className="text-gray-800 text-sm text-center">
                    Manager Development
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Our services encompass the assessment and repair of property
                    damage caused by water, fire, smoke, or mold. We can also be
                    a part of the restoration.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Github" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Twitter" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Instagram" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div
              role="listitem"
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
                      alt="Display Picture of Dean Jones"
                      role="img"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold text-3xl text-center mb-1">
                    Dean Jones
                  </h1>
                  <p className="text-gray-800 text-sm text-center">
                    Principal Software Engineer
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    An avid open-source developer who loves to be creative and
                    inventive. I have 20 years of experience in the field.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Github" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Twitter" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Instagram" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div
              role="listitem"
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
                      alt="Display Picture of Rachel Adams"
                      role="img"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold text-3xl text-center mb-1">
                    Rachel Adams
                  </h1>
                  <p className="text-gray-800 text-sm text-center">
                    Product Design Head
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Product designer with interests in immersive computing and
                    XR, political ventures, and emerging technologies. Able to
                    take ideas and give them a life.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Github" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Twitter" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Instagram" role="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
                      {profileData.map((item,key)=>{
                        return (

                        <div
                        role="listitem"
                        onClick={()=>{router.push(`/about/${item.id}`);}}
                        className="xl:w-1/3 sm:w-3/4 cursor-pointer md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                      >
                        <div className="rounded overflow-hidden shadow-md bg-white">
                          <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                              <img
                                src={item.img}
                                alt="Display Picture of Charles Keith"
                                role="img"
                                className="rounded-full object-cover h-full w-full shadow-md"
                              />
                            </div>
                          </div>
                          <div className="px-6 mt-16">
                            <h1 className="font-bold text-3xl text-center mb-1">
                            {item.name}
                            </h1>
                            <p className="text-gray-800 text-sm text-center">
                           {item.roal}
                            </p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">
                             {item.details.slice(0,100)}...
                            </p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                              <a href="javascript:void(0)" className="mx-5">
                                <div aria-label="Github" role="img">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#718096"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-github"
                                  >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                  </svg>
                                </div>
                              </a>
                              <a href="javascript:void(0)" className="mx-5">
                                <div aria-label="Twitter" role="img">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#718096"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-twitter"
                                  >
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                  </svg>
                                </div>
                              </a>
                              <a href="javascript:void(0)" className="mx-5">
                                <div aria-label="Instagram" role="img">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#718096"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-instagram"
                                  >
                                    <rect
                                      x={2}
                                      y={2}
                                      width={20}
                                      height={20}
                                      rx={5}
                                      ry={5}
                                    />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                  </svg>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                        )
            
          })}
            
          </div>
        </div>
      </div>
    </dh-component>
    {/* Code block ends */}
    {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
  </div>
</>

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