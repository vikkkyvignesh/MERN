import React from "react";
import Weather from "./components/Weather";
import Counter from "./components/Counter";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<User />}></Route>
    //     <Route path="/create" element={<CreateUser />}></Route>
    //     <Route path="/edit/:id" element={<UpdateUser />}></Route>
    //   </Routes>
    // </BrowserRouter>
    <Weather />
    // <Counter />
  );
};

export default App;
