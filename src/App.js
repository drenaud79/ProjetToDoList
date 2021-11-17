import './App.css';
import MainHeader from './components/MainHeader';
import Welcome from './page/welcome';
import TodoList from './page/todolist';
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
        <MainHeader />
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/welcome" />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/todolist">
              <TodoList/>
            </Route>
          </Switch>
        </main>
      </>
  );
}

export default App;
