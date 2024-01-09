import Image from "next/image";

const PrivacyPolicy = () => {
    return (
        <div className="mx-auto mb-4 max-w-6xl p-4">
            <div className="relative rounded-2xl bg-[rgba(0,0,0,0.6)] h-80 lg:h-96 overflow-hidden flex justify-center items-center">
                <Image src="/Legal Research/pexels-lukas-317355.jpg" alt="Policy BG" priority fill className="absolute -z-10 object-cover" />
                <div className="max-w-[80%] lg:max-w-[60%] mx-auto text-center text-white leading-8">
                    <p> We are committed to protecting your privacy and take appropriate measures to maintain the confidentiality and privacy of data shared with us.</p>
                </div>
            </div>
            <section class="leading-8">
                <h3 className="text-2xl md:text-3xl my-4">We Respect Your Policy.</h3>
                <ul className="list-disc pl-8">
                    <li>
                        The information you provide on the website inquiry forms is securely and confidentially stored and processed.
                    </li>
                    <li>Your personal details (such as your name, telephone, fax number, and e-mail address), will be used only for communicating with you about our products and services.</li>
                    <li>Your personal information will never be shared, leased, sold, or distributed to any third-party entities for marketing purposes without your prior consent.</li>
                    <li> We employ appropriate technologies and processes to prevent unauthorised access, use, and/or disclosure of your personal information.</li>
                    <li>In order to provide you with our products and services we may need to, at times, share your personal information with –
                        <ul className="list-disc pl-8">
                            <li> Business partners</li>
                            <li> Affiliates</li>
                            <li> Authorised service vendors and contractors</li>
                        </ul>
                    </li>
                </ul>
                <h3 className="text-2xl md:text-3xl my-4" >Your Information is Leveraged to Serve You Better</h3>
                <ul className="list-disc pl-8">
                    <li>Cookies are used on our websites to provide you with more personalised and effective user experience.</li>
                    <li> We analyse the cookie-captured information only to help us improve our service offerings and website features.</li>
                    <li> These cookies do not grant us remote access to your systems or to any confidential information you have not shared with us.</li>
                    <li>We will never make any data related to your location or any other customer-centric information public.</li>
                    <li>Cookies are stored and restricted to your browser or system memory. They can be disabled by changing your browser’s settings. But turning off cookies may prevent you from obtaining the full benefits of using our website.</li>
                    <li> To understand more about cookies and how they are used, visit allaboutcookies.org.</li>
                </ul>

                <h3 className="text-2xl md:text-3xl my-4">Links to External Sites</h3>
                <ul className="list-disc pl-8">
                    <li>Any links on our website to external third-party sites are for your convenience only and should be accessed at your own risk.</li>
                    <li>The Legal Base is not responsible in any manner for the security features, content, or privacy policies of these third-party websites
                    </li>
                </ul>

                <h3 className="text-2xl md:text-3xl my-4">GDPR Compliance (For Visitors to our Website from the European Union)</h3>
                <ul className="list-disc pl-8">
                    <li>Basic identification details provided by you on our websites such as name, email address, company name, telephone number, and country, as well as web data like IP address, system location, and cookies are securely and confidentially stored.</li>
                    <li>
                        This information will be used only for communication with clients and potential customers about our products and services.
                    </li>
                    <li>
                        We will not retain this personal information any longer than necessary to achieve the purposes defined in this privacy policy unless a longer retention period is specified by the law or for directly related legitimate business purposes.
                    </li>
                    <li>
                        You may request us to provide copies of your personal information, how and where the data is stored, and the purpose of storing this data.
                    </li>
                </ul>
                <h3 className="text-2xl md:text-3xl my-4">Changes to Privacy Policy</h3>
                <p>
                    The Legal Base will review, change, or update our privacy policy as and when required. We will ensure that our updated privacy policy is made available on our website
                </p>
                <h3 className="text-2xl md:text-3xl my-4">How to Contact Us ?</h3>
                <div>
                    <p>Contact us if you have any questions about our privacy policy or email us at the following:</p>
                    <a href="mailto:contact@thelegalbase.com" className="text-blue-600">contact@thelegalbase.com</a>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;