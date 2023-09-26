import "./style.css";
export default function AnimatedShape({ isBg,background }) {
  return (
    <section className="i pg ji gp uq">
      {/* Bg Shapes */}
      <span className="rc h s r vd fd/5 fh rm" style={{backgroundColor:background}}/>
      {isBg && (
        <img src="images/shape-08.svg" alt="Shape Bg" className="h q r" />
      )}
      <img src="images/shape-09.svg" alt="Shape" className="of h y z/2" />
      <img src="images/shape-10.svg" alt="Shape" className="h _ aa" />
      <img src="images/shape-11.svg" alt="Shape" className="of h m ba" />
      {/* Section Services Start */}

      {/* Section Services End */}
    </section>
  );
}
