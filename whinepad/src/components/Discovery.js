import Excel from "./Excel";
import Logo from "./Logo";
import Body from "./Body";
import Button from "./Button";
import Suggest from "./Suggest";

function Discovery() {
  return (
    <div>
      <h2>Logo</h2>

      <div style={{ background: "#f6f6f6", display: "inline-block" }}>
        <Logo />
      </div>

      <h2>Body</h2>
      <Body>I am the content inside the Body</Body>

      <h2>Buttons</h2>
      <p>
        Button with onClick:{" "}
        <Button onClick={() => alert("ouch")}>Click Me</Button>
      </p>
      <p>
        A link: <Button href="https://reactjs.org/">Follow Me</Button>
      </p>
      <p>
        Custom class name:{" "}
        <Button className="Discovery-custom-button">I do nothing</Button>
      </p>

      <h2>Suggest</h2>
      <p>
        <Suggest options={["eenie", "meenie", "miney", "mo"]} />
      </p>
    </div>
  );
}

export default Discovery;
