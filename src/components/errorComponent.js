import React from 'react';

class ErrorBox extends React.Component{
    render(){
        return(
            <div>
                <div className="errorBox">
                    Invalid City Name
                </div>
            </div>
        )
    }
}

export default ErrorBox;