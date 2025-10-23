import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setVisible] = useState(false);

  const toggleMessage = () => setVisible((prev) => !prev);

  return (
    <section>
      <button onClick={toggleMessage}>Toggle Message</button>
      {isVisible && <p>Message is visible</p>}
    </section>
  );
}
export default ToggleMessage;
