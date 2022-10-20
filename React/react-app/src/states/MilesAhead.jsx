import { useState } from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const MilesAhead = () => {

    const [steps, setSteps] = useState(0);

    const increment = () => {
        setSteps(prev => prev + 1);
    }

    return (
        <>
            <p>Today you've taken {steps} steps!</p>
            <br />
            <Button variant="success" type="button" onClick={increment}>I took another step</Button>
        </>
    );
}

export default MilesAhead;
