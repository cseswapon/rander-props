import Box from "./components/Box";
import Counter from "./components/RenderProps/Counter";
import Profile from "./components/Profile";
import Toggle from "./components/RenderProps/Toggle";
import Fetcher from "./components/RenderProps/Fetcher";
import FormHandler from "./components/RenderProps/FormHandler";
import RegForm from "./components/RenderProps/RegForm";

function App() {
  const handleLogin = async (values) => {
    console.log("Form Data:", values);
  };
  return (
    <>
      <Profile name="ABC" age={23} city="Dhaka, Bangladesh" />
      <b></b>
      <Box>
        <h2>হ্যালো ভাই 👋</h2>
        <p>এটা children props এর example</p>
      </Box>
      <br />
      <Box>
        <button>Click Me</button>
      </Box>
      <div>
        <h1>Render Props</h1>
        <Counter>
          {(count, increment, decrement) => (
            <>
              <button onClick={decrement}>-</button>
              <p>Count: {count}</p>
              <button onClick={increment}>+</button>
            </>
          )}
        </Counter>
        <Toggle>
          {(toggle, handelToggle) => (
            <>
              <div>
                <p>You'r My KAKU{toggle ? " YES" : " NO"}</p>
                <button onClick={handelToggle}> {toggle ? "ON" : "OFF"}</button>
              </div>
            </>
          )}
        </Toggle>
        <Fetcher url="https://jsonplaceholder.typicode.com/posts/1">
          {({ data, loading, error }) => (
            <div>
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}
              {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            </div>
          )}
        </Fetcher>

        <div>
          <h1>Form</h1>
          {/* <FormHandler
            initialValues={{ name: "", email: "", age: "", nationality: "" }}
            onSubmit={(values) => console.log("Form Submitted:", values)}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={values?.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                />
                <br />

                <input
                  type="email"
                  name="email"
                  value={values?.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
                <br />

                <input
                  type="number"
                  name="age"
                  value={values?.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                />
                <br />

                {values?.age >= 18 && (
                  <select
                    name="nationality"
                    value={values?.nationality}
                    onChange={handleChange}
                  >
                    <option value="">Select nationality</option>
                    <option value="Bangladeshi">Bangladeshi</option>
                    <option value="Indian">Indian</option>
                    <option value="Other">Other</option>
                  </select>
                )}
                <br />

                <button type="submit">Submit</button>
              </form>
            )}
          </FormHandler> */}
          <FormHandler onSubmit={handleLogin}>
            {({ values, handleChange, handleSubmit }) => (
              <div>
                <input
                  name="email"
                  value={values.email || ""}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <br />
                <input
                  name="password"
                  value={values.password || ""}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <br />
                <button onClick={handleSubmit}>Login</button>
              </div>
            )}
          </FormHandler>
        </div>
      </div>
      {/* adv reg form task */}
      <div
        style={{ backgroundColor: "lightblue", padding: "2rem", marginTop: 10 }}
      >
        <RegForm
          initialValues={{
            name: "",
            email: "",
            password: "",
            age: "",
            nationality: "",
          }}
          onSubmit={(value) => console.log(value)}
        >
          {({ values, handleChange, handleSubmit, reset }) => (
            <>
              <div>
                <input
                  name="name"
                  value={values.name || ""}
                  onChange={handleChange}
                  placeholder="name"
                  type="text"
                />
                <br />
                <input
                  name="email"
                  value={values.email || ""}
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
                />
                <br />
                <input
                  name="password"
                  value={values.password || ""}
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                />
                <br />
                <input
                  name="age"
                  value={values.age || ""}
                  onChange={handleChange}
                  placeholder="age"
                  type="number"
                />
                <br />
                {Number(values?.age) >= 18 && (
                  <select
                    name="nationality"
                    value={values.nationality || ""}
                    onChange={handleChange}
                    id=""
                  >
                    <option value="" disabled>
                      --Select Nationality---
                    </option>
                    <option value="BD">BD</option>
                    <option value="NP">NP</option>
                    <option value="INR">INR</option>
                  </select>
                )}
                <br />
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={reset}>Reset</button>
              </div>
            </>
          )}
        </RegForm>
      </div>
    </>
  );
}

export default App;
