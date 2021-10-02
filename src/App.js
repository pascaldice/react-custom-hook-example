import useBinder from "./hooks/useBinder";

function App() {
    const { bindState, bindValue, setBinder, state } = useBinder();
    //setBinder("testValue", "this is test!");
    return (
        <div>
            <input
                {...bindState("test")}
                onChange={({ target }) => {
                    //setBinder("testValue", target.value + "test");
                    setBinder({ test: target.value, testValue: target.value + "test" });
                }}
            ></input>
            <input {...bindValue("test")}></input>
            <input {...bindState("testValue")}></input>
        </div>
    );
}

export default App;
