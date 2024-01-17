import ContactForm from "../contactus/ContactForm";

export default function ContactSection() {
  return (
    <section className="relative text-black bg-white  flex justify-center items-center flex-col gap-3 min-h-screen py-5" id="contact">
      <ContactForm title="Get in touch" message="We’d love to hear from you. Please fill out this form." />
    </section>
  );
}
