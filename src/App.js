import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SignupSignin from "./pages/SignupSignin";

function App() {
  return (
    <div className="App" style={{padding:'0',margin:'0',width:'100%',height:'100%'}}>
        <NavBar/>
        <Home/>
        <SignupSignin/>
    </div>
  );
}
export default App;
