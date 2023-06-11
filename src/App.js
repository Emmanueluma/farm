import {Routes, Route} from 'react-router-dom';
import Loginto from './component/login/Login';
import Register from './component/register/Register'
import Home from './component/main/Home'
import Trend from './component/main/trend/Trend';
import Animal from './component/main/animal/Animal';
import Machine from './component/main/machine/Machine';
import Seed from './component/main/seed/Seed';
import User from './component/main/user/User';
import AnimalData from './component/main/db/AnimalData'
import MachineData from './component/main/db/MachineData'
import SeedData from './component/main/db/SeedData'
import UserData from './component/main/db/UserData'
import Details from './component/main/Detail/Details';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Register />}/>
      <Route path='/login' element={<Loginto />}/>
      <Route path='/home' element={<Home />}>
        <Route index element={<Trend />}/>
        <Route path='trend' element={<Trend />}/>
        <Route path='animal' element={<Animal data={AnimalData} />}/>
        <Route path='animal/:id' element={<Details data={AnimalData} />}/>
        <Route path='machine' element={<Machine data={MachineData}/>}/>
        <Route path='machine/:id' element={<Details data={MachineData} />}/>
        <Route path='food' element={<Seed data={SeedData}/>}/>
        <Route path='food/:id' element={<Details data={SeedData} />}/>
        <Route path='user' element={<User data={UserData}/>}/>
        <Route path='user/:id' element={<Details data={UserData} />}/>
      </Route>
    </Routes>
  );
}

export default App;
