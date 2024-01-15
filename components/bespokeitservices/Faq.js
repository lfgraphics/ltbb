import FaqBlock from "../UI/FAQ";

const Faq = () => {
    return (
        <FaqBlock data={faqData} subtitle="HOW IT WORKS" title="Frequently Asked Questions" />
    )
}

const faqData = [
    {
        question: "How does one go about creating bespoke legal management software?",
        answer: "To create your specific solutions, we use the agile development technique at The Legal Base. This way, you'll always be up to know on the status of your project at each step of development. Our development procedure entails:",
        features: [
            "Analysis of requirements",
            "MVP development",
            "QA and testing for software/app development.",
            "Deployment",
            "Maintenance and support"
        ]
    },
    {
        question: "What are the prices for legal IT services?",
        answer: "Many factors influence your software development cost, including the number of people engaged, testing approach, functionality, and technology stack. As a result, in order to receive an accurate price for your project, you must specify all of your requirements and ideas. You may schedule a free 30-minute consultation with one of our specialists to evaluate your ideas and receive an accurate quotation tailored to your company's needs."
    },
    {
        question: "How much time will it take to create a custom legal solution?",
        answer: "The development time is generally determined by crucial aspects such as features, technology stack, customization, and so on. You may discuss your needs with our skilled business analyst team and schedule a free consultation. In addition to assessing your proposal, our specialists will assist you to examine its viability, identifying areas for development, and executing a best-in-class solution for your organization."
    },
    {
        question: "What additional services do you provide in addition to legal IT?",
        answer: "From concept validation and technology consulting services through UI/UX, product prototyping, cloud integration, testing, data transfer, technology upgrades, and much more, you receive a comprehensive range of professional development services for your company."
    },
    {
        question: "Can you transform my current legal website into a legal mobile app?",
        answer: "We can turn your website into a fully working mobile app with your preferred features, technology stack, and APIs. By collaborating with us for legal app development, you can also establish a custom mobile application outfitted with cutting-edge technology and resources."
    },
    {
        question: "Will TLB keep my data safe?",
        answer: "Absolutely. We ensure that all of your data and sensitive information is kept secure. We sign an NDA to ensure that none of our management or staff discloses your sensitive information."
    }
];


export default Faq;