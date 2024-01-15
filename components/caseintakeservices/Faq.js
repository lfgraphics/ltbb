import FaqBlock from "../UI/FAQ";
const Faq = () => {
    return (
        <FaqBlock data={faqData} subtitle=" How it works" title=" Frequently Asked Questions" />
    );
};


const faqData = [
    {
        question: "What is case intake and how does it work?",
        answer: "Case intake is the process of assessing and gathering information from potential clients seeking legal assistance. The intake worker conducts an initial assessment of the client's needs, determines their eligibility for services, and gathers necessary information about their case. If the client is eligible, they are assigned a case manager who will provide ongoing support and services."
    },
    {
        question: "What types of legal cases do you handle at your organisation?",
        answer: "Our organisation specialises in handling all kinds of Civil, criminal and bankruptcy cases."
    },
    {
        question: "What is the process for seeking assistance through your organisation?",
        answer: "The process for seeking assistance begins with an initial contact with our organisation. From there, we will conduct an assessment of your needs and determine your eligibility for our services. If you are eligible, we will gather the necessary information about your case and assign a case manager to work with you."
    },
    {
        question: "How do I know if I am eligible for your services?",
        answer: "Eligibility is determined by our intake worker during the initial assessment. We will consider factors such as your income, location, and the specific nature of your case when determining your eligibility."
    },
    {
        question: "How long does the case intake process take?",
        answer: "The case intake process typically can take somewhere around a week to a month depending on your organisation’s unique needs."
    },
    {
        question: "Can I speak with a case manager before starting the intake process?",
        answer: "Yes, you can contact our organisation and request to speak with a case manager before starting the intake process."
    }
];


export default Faq;