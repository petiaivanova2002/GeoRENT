// import logo from './logo.svg';s
// import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import ToolsCatalog from './components/ToolsCatalog/ToolsCatalog'
import { useEffect, useState} from 'react';
import * as toolsService from './services/toolsService'
import AddTool from './components/AddTool/AddTool';
import { Routes, Route } from 'react-router-dom'
import Details from './components/Details/Details';
import Delete from './components/Details/Delete/Delete';
import Footer from './components/Footer/Footer';
import CategoryItems from './components/ToolsCatalog/CategoryItems/CategoryItems';
import EditTool from './components/Details/EditTool/EditTool'
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {

  const [tools, setTools] = useState([]);
  const [selectedTool, setSelectedTool] = useState(null);

const [formErrors, setFormErrors] = useState({
    brand: '',
    category: '',
    description: '',
    imageUrl: '',
    price: '',
    weeklyPrice: '',
});
  
  useEffect(() => {
    toolsService.getAll()
      .then(data => {
        // console.log(data)
        setTools(Object.values(data));
      })
  }, []);


  const onDetailsTool = async (toolId) => {
    const tool = await toolsService.getOne(toolId);
    console.log(tool)

    setSelectedTool(tool);

    console.log(selectedTool);  // asinhronno e i zatowa e null (rezultata idwa predi da se e izpylnilo)
  };

  const onToolAdd = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData)
    const data = Object.fromEntries(formData);

    const createdTool = await toolsService.create(data);

    setTools(state => [...state, createdTool]);

  };

  const onToolEdit = async (e, toolId) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const updatedTool = await toolsService.update(toolId, data);
    setTools(state => state.map(x => x._id === toolId ? updatedTool : x));
  }

  const onToolDelete = async (toolId) => {   
    await toolsService.remove(toolId)
    setTools(state => state.filter(tool => tool._id !== toolId));  
    console.log(tools);
  };

  const formValidate = (e) => {
    const value = e.target.value;
    const categoryArray = ['GPS receivers', 'Laser scanning systems', 'Total stations', 'Drones', 'Levels', 'Accessories'];
    const errors = {};
    if (e.target.name === 'brand' && value.length < 2 && value !== '') {
        // setFormErrors(state => ({...state, brand: 'Brand should be at least two characters'}))
        errors.brand = 'Brand should be at least two characters'
    }
    if (e.target.name === 'category' && !categoryArray.includes(value) && value !== '') {
        // setFormErrors(state => ({ ...state, category: 'Category do not match' }))
        errors.category = 'Category do not match'
    }
    if (e.target.name === 'description' && (value.length < 5 || value.length > 100) && value !== '') {
        // setFormErrors(state => ({ ...state, description: 'Description should be between 5 and 100 characters' }))
        errors.description = 'Description should be between 5 and 100 characters'
    }
    if (e.target.name === 'imageUrl' && !value.startsWith('https://') && value !== '') {
        // setFormErrors(state => ({ ...state, imageUrl: 'Image should starts with https://' }))
        errors.imageUrl = 'Image should starts with https://';
    }
    if (e.target.name === 'price' && Number(value) < 0 && value !== '') {
        // setFormErrors(state => ({ ...state, price: 'Price should be positive number' }))
        errors.price = 'Price should be positive number'
    }
    if (e.target.name === 'weeklyPrice' && Number(value) < 0 && value !== '') {
        // setFormErrors(state => ({ ...state, weeklyPrice: 'Price should be positive number' }))
        errors.weeklyPrice = 'Price should be positive number'
    }
    setFormErrors(errors);
};

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<ToolsCatalog tools={tools} onDetailsTool={onDetailsTool} />} />
        <Route path='/add' element={<AddTool onToolAdd={onToolAdd} formErrors={formErrors} formValidate={formValidate}/>} />
        <Route path='/details/:toolId' element={<Details {...selectedTool} />} />
        <Route path='/details/:toolId/edit' element={<EditTool {...selectedTool} onToolEdit={onToolEdit} formErrors={formErrors} formValidate={formValidate}/>} />
        <Route path='/details/:toolId/delete' element={<Delete {...selectedTool} onToolDelete={onToolDelete} />} />
        <Route path='/catalog/:categoryItems' element={<CategoryItems tools = {tools} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />


        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
