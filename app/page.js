import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Header from "./Components/Header";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <main className="max-w-screen-xl w-full mx-auto px-4">
      <div className="mt-20">
        <Header />
        <Contacts />
        <About />
        <Skills />
      </div>
    </main>
  );
}
