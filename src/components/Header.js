import full_logo from "../data/full_logo.png";

export default function Header() {
  return (
    <div className="header_outline">
      <img src={full_logo} className="header_logo"></img>
      <h3 className="header_contact">
        Denver <br /> 720-331-9735
      </h3>
      <h3>
        Book a free <br /> estimate!
      </h3>
    </div>
  );
}
