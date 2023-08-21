
import React, { useState } from 'react'

const aboutProfile = ({id}) => {
    const [data,setData] = useState(null);
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
  <div className='container m-14 w-full mx-auto bg-white'>
  <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <div className="lg:-mx-6 lg:flex lg:items-center">
      <img
        className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
        src={`/${profileData[id-1].img}`}
        alt=""
      />
      <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
        <p className="text-5xl font-semibold text-blue-500 ">“</p>
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
          {profileData[id-1].name}
        </h1>
        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
         {profileData[id-1].details}
        </p>
        <h3 className="mt-6 text-lg font-medium text-blue-500"></h3>
        <p className="text-gray-600 dark:text-gray-300">
          {profileData[id-1].roal}
        </p>
        <div className="flex items-center justify-between mt-12 lg:justify-start">
       
        
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
  

  </React.Fragment>
  )
}

export default aboutProfile