import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from 'semantic-ui-react'

const ButtonLogin = (props) => {
    const { 
        history,
        isValid,
        isSubmitting,
    } = props;

    return (
        <React.Fragment>
            <Button
                onClick={() => history.push('/main')}
                type="submit"
                color='violet'
                className={`submit ${isSubmitting || !isValid ? 'disable' : ''}`} //si esta siendo submitida o no es valida
                disabled={isSubmitting || !isValid}
            >
                Submit
            </Button >
        </React.Fragment>
    );
};

export default withRouter(ButtonLogin);