import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import BookApp from './components/BookApp';
import Counter from './components/Counter';
import Course from './components/Course';
import DeleteCourse from './components/DeleteCourse';
import Header from './components/Header';
import Login from './components/Login';
import SearchTodo from './components/SearchTodo';
import Task from './components/Task';
import TodoApp from './components/TodoApp';
import UpdateTodo from './components/UpdateTodo';
import ViewCourses from './components/ViewCourses';
import ViewCrses from './components/ViewCrses';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">


 <BrowserRouter>
 
 <Header />
<Route path="/" exact component={SearchTodo} />
<Route path="/update" exact component={UpdateTodo} />
<Route path="/delete" exact component={DeleteCourse} />


 </BrowserRouter>
    </div>
  );
}

export default App;
