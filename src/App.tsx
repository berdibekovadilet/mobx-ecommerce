import Header from "./components/Header";
import AllProducts from "./components/AllProducts";
import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <AllProducts />
      <Footer />
      <Login />
    </div>
  );
}

export default App;
