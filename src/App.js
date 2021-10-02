import useBinder from "./hooks/useBinder";

function App() {
    const { bindState, bindValue, setBinder, state } = useBinder();
    setBinder("testValue", "this is test!");
    return (
        <div>
            <input {...bindState("test")}></input>
            <input {...bindValue("test")}></input>
            <input {...bindState("testValue")}></input>
        </div>
    );
}

export default App;
