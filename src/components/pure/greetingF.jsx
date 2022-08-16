import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // useState introduction // 
    // const [variable, método para ctualizarlo] = useState(valor inicial)

    const [age, setAge] = useState(29)

    const birthday = () => {
        //actualizamos el state
        setAge(age + 1)
    }

    return (
        <div>
            <h1>
                !hello {props.name} from functional component¡
            </h1>
            <h2>
                Your age is {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    become one year older
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
