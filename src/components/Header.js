import full_logo from "../data/full_logo.png";

export default function Header() {
  return (
    <div className="header_outline">
      <a href="https://www.vivaxpros.com">
        <img src={full_logo} className="header_logo"></img>
      </a>
      <h3 className="header_contact">
        Denver <br /> <a href="tel:7203319735">720-331-9735</a>
      </h3>
      <h3>
        Book a free <br /> estimate!
      </h3>
    </div>
  );
}
