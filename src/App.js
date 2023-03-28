import './App.css'
import { Address } from "./Component/Profile/Address";
import FullName from './Component/Profile/FullName';
import MyPicture from './Component/Profile/ProfilePhoto';


function App() {
  return (
    <div className="container" style={{marginTop:50}}>
      <div className="d-flex">
        <MyPicture />
      </div>
      <div className="d-flex">
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
