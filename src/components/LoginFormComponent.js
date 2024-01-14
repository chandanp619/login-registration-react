import React from 'react';

function LoginFormComponent(props) {

    const processLogin = () => {
        
    }
    return (
        <div className='container border rounded-3 mt-5 mb-5 p-3'>
            <div className='row'>
                <div className='col d-flex justify-content-start mb-5'>
                    <h4>Login</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col mb-2'>
                    <input type='email' placeholder='Email Address' className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className='col mb-2'>
                    <input type='password' placeholder='Password' className='form-control' />
                </div>
            </div>
                
            <div className='row'>
                <div className='col'>
                    <button className='btn btn-primary' onClick={processLogin}>Login</button>
                </div>

            </div>       
        </div>
    );
}

export default LoginFormComponent;