import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    //constructores, propiedades de clase, metodos propios...

    // myAge = 20

    constructor(props) {
        super(props); // las props son informacion que van a recibir por atributod
        this.state = { // el state : informacion privada que tiene el componente y que se puede modificar y mostrar
            // age: this.myAge
            age: 20
        }
    }

    render() { // siempre devolverá contenido html. solo se puede devolver un elemento
        return (
            <div>
                <h1>
                    !hello {this.props.name}¡
                </h1>
                <h2>
                    Your age is {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        become one year older
                    </button>
                </div>
            </div>
            /*
            no se podrían devolver más elementos
            <div>
            </div>
            esto daría error
            */
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))

        // this.myAge++  así  no funcionaría porque seguiría con el estado anterior
    }
}


Greeting.propTypes = { // son el contenido que yo le puedo pasar a un componente desde un componente superior
    // declaramos qué tipo de dato tienen las props
    name: PropTypes.string,
};


export default Greeting;

//clases y componentes en mayusculas