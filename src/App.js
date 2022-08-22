import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Componente propio Greeting.jsx*/}
      {/* <Greeting name="marina"></Greeting>
        <Greeting name="juanjo"></Greeting> */}

      {/* Componente de ejemplo funcional */}
      {/* <GreetingF name="marina"></GreetingF> */}

      {/* Componente de Listado de Tareas */}
      {/* <TaskListComponent></TaskListComponent> */}

      {/* Ejemplo de uso de hooks */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* <Ejemplo4 nombre="marina"> */}
      {/* Todo lo que hay aquí, es tratado como props.children */}
      {/* <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
      {/* <GreetingStyled name="marina"></GreetingStyled> */}
      {/* </header> */}
      {/* Gestión de eventos */}
      {/* <Father></Father> */}
      {/* Ejemplos de Renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}

      <RegisterFormik></RegisterFormik>
      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}

    </div>
  );
}

export default App;
