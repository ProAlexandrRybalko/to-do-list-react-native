import { Provider } from 'react-redux';
import ToDoList from './src/components/ToDoList/ToDoList';
import { store } from './src/store';
import { NativeRouter, Routes, Route } from 'react-router-native'
import { ManageAccoutning } from './src/components/ManageAccounting/ManageAccounting';
import { AboutUs } from './src/components/AboutUs/AboutUs';
import { Login } from './src/components/Login/Login';
import { Signup } from './src/components/Signup/Signup';

export default function App() {

  return (
    <NativeRouter>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/todolist" element={<ToDoList/>}/>
        <Route path="/accounting/:id" element={<ManageAccoutning/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
      </Provider>
    </NativeRouter>
  );
}
