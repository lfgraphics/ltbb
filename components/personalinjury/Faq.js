import React from 'react'
import FaqBlock from '../UI/FAQ';

export const Faq = () => {
    return (
        <FaqBlock data={faqData} subtitle="TLB’S PERSONAL INJURY LITIGATION SERVICES" title="Frequently Asked Questions" />
    )
}


const a2 = (
    <p>
        A tort happens when one person behaves incorrectly and causes harm to
        another person. A fall, a vehicle accident, a faulty product, a botched
        medical treatment, false allegations, poisoning by hazardous substances,
        police misconduct, unlawful serving of alcohol to a child, criminal
        behaviour, and so on can all result in tort. The range of probable tort
        causes is as diverse as the actions that take place in society. However, the
        injury is the fundamental feature of a tort—without hurt or harm, there is
        no tort, even if someone behaved wrongfully:<br></br>
        <strong>For example,</strong> if you slip and fall in a supermarket on a
        damp floor and you stand up and walk away unharmed, there is no tort or
        personal injury lawsuit, regardless of how irresponsible the shop was in not
        cleaning its floor.<br></br>
        <strong>For example,</strong> a car runs a red light, forcing you to fall on
        the ground. Again, regardless of the driver's behaviour, there is no tort if
        you get up and walk away unharmed. People who have been harmed by the
        improper actions of others can seek monetary compensation in civil court.
    </p>
);
const a5 = (
    <div className='w-full overflow-x-auto table-scrollbar'>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <td>Personal Injury</td>
                        <td>Construction Accidents</td>
                        <td>Premise Liability</td>
                        <td>Medical Malpractice</td>
                        <td>Workers Compensation</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul className="min-w-[250px] max-w-[250px]">
                                <li>Auto, Bicycle accidents, etc.</li>
                                <li>Assault and battery</li>
                                <li>Dog bite</li>
                                <li>Lead Poison</li>
                                <li>Pedestrian accidents</li>
                                <li>Amusement park accidents</li>
                                <li>Defective product liability</li>
                                <li>Slip/trip and falls</li>
                                <li>Daycare provider negligence</li>
                                <li>School negligence resulting in injury</li>
                            </ul>
                        </td>
                        <td>
                            <ul className="min-w-[250px] max-w-[250px]">
                                <li>Scaffolding/Machinery</li>
                                <li>Burn injuries</li>
                                <li>Crane accidents</li>
                                <li>Electrocution</li>
                                <li>Fall from heights</li>
                                <li>Hoisting accidents</li>
                            </ul>
                        </td>
                        <td>
                            <ul className="min-w-[250px] max-w-[250px]">
                                <li>Unsafe sidewalks</li>
                                <li>Broken staircase</li>
                                <li>Poor security</li>
                                <li>Broken or damaged elevators</li>
                                <li>Unsafe or broken escalators</li>
                                <li>Faulty or inadequate lighting</li>
                            </ul>
                        </td>
                        <td>
                            <ul className="min-w-[250px] max-w-[250px]">
                                <li>Birth injuries</li>
                                <li>Surgical errors</li>
                                <li>Failure to monitor</li>
                                <li>Nursing home abuse</li>
                                <li>Wrongful death</li>
                                <li>Dental Malpractice</li>
                                <li>Medication errors</li>
                                <li>Failure to diagnose</li>
                                <li>Anesthesia error</li>
                                <li>General Negligence</li>
                                <li>Emergency room errors</li>
                                <li>Misdiagnos is or Delayed diagnosis</li>
                            </ul>
                        </td>
                        <td>
                            <ul className="min-w-[250px] max-w-[250px]">
                                <li>Spinal cord injuries</li>
                                <li>Toxic exposure</li>
                                <li>Occupatio nal diseases</li>
                                <li>Repetitive motion injuries</li>
                                <li>Psycholog ical trauma</li>
                                <li>Vehicle-related accidents while a</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);
const faqData = [
    {
        question: "What comes under Personal Injury?",
        answer: `The law allows persons to seek restitution for losses unlawfully committed by others. One of the most extensive areas of the law is the conditions in which a person seeks to recover in court for bodily, mental, reputational, or property harm caused intentionally, accidentally, or carelessly by another person, a firm, or even a municipality or other government entity. This is what attorneys and others refer to as "tort law." This section deals with non-property-related tort law, or harm to a person's body or mind, sometimes known as personal injury law.`,
    },
    {
        question: "What is a Tort?",
        answer: a2,
    },
    {
        question: "How can a personal injury lawyer/ attorney help you ? ",
        answer:
            "The time restriction for making a claim to collect damages for a personal injury might be very short.Regardless of your age or position, an experienced personal injury lawyer can assist you in investigating the foundation of your claim and ensuring that your claim is submitted on time, allowing you to finally collect any and all damages that you have incurred as a consequence of the unjust conduct of another",
    },
    {
        question: " Why do you need to outsource your Personal Injury cases?",
        answer:
            "Understandably, Personal Injury Law firms or attorneys are highly-occupied and already dealing with a large volume of work on a daily basis; consequently, adding a new case to it consumes time committed to the growth of the business. Long hours of labor, research, and client interaction can upset a law firm's workers in the United States, reducing productivity",
    },
    {
        question: "What are the various areas covered under Personal Injury",
        answer: a5,
    },
];

export default Faq;
