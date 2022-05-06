import "./App.css";
import Container from "./Components/Container";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="dark:bg-slate-700 transition-all ease-in-out duration-700 h-screen w-screen flex flex-column justify-center">
        <div className="sm:w-max md:w-5/6 lg:w-8/12">
          <Header />
          <div className="flex flex-row justify-center items-center mt-20">
            <Container />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
