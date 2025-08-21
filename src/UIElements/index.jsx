import Group from "../assets/Group 3741.svg";

export function LeftArrow() {
  return <img src={Group} alt="Left Arrow" />;
}

export function RightArrow() {
  return (
    <img
      src={Group}
      alt="Right Arrow"
      style={{ transform: "rotate(180deg)" }}
    />
  );
}
