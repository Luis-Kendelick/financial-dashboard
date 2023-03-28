import Frame from "components/pages/Frame";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Frame />
      <div className="pl-[110px] pt-[100px] pb-[90px] pr-[30px] w-screen h-screen bg-pale-gray">
      </div>
    </>
  );
}

export default App;
