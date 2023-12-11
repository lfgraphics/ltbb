import ContactForm from "../contactus/ContactForm";

export default function ContactSection() {
  return (
    <section className="relative text-black bg-white pt-5" id="contact">
      <ContactForm title="Get in touch" message="We’d love to hear from you. Please fill out this form." />
    </section>
  );
}
