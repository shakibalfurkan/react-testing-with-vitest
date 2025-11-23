import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting/Greeting";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <section>
      <Greeting name={"Shakib"} />
      <Counter />
      <UserProfile userId={4} />
    </section>
  );
}
export default App;
