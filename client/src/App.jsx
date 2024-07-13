import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <main className="min-h-svh">
      <div className="text-2xl font-semibold text-center my-4 underline">
        Personal Finance Management App
      </div>

      <div className="border border-gray-500 max-w-2xl p-4 m-4">
        {data.map((item) => {
          return (
            <div key={item._id} className="p-4 text-lg">
              <div>ID: {item._id}</div>
              <div>Name: {item.name}</div>
              <div>Email: {item.email}</div>
              <div>Passsword: {item.password}</div>
              <div>Account Opens on : {item.accountCreated}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default App;
