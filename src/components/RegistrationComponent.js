import React from 'react';

function RegistrationComponent(props) {

    const processRegister = ()=>{
        
    };
    return (
        <div className='container border rounded-3 mt-5 mb-5 p-3'>
            <div className='row'>
                <div className='col d-flex justify-content-start mb-5'>
                    <h4>Register</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col mb-2'>
                    <input type='email' placeholder='Email Address' className='form-control' autoComplete='off' />
                </div>
            </div>
            <div className='row'>
                <div className='col mb-2'>
                    <input type='password' placeholder='Password' className='form-control' autoComplete='off' />
                </div>
            </div>
            <div className='row'>
                <div className='col mb-2'>
                    <input type='password' placeholder='Confirm Password' className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className='col mb-2'>
                    <input type='text' placeholder='First Name' className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className='col mb-2'>
                    <input type='text' placeholder='Last Name' className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className='col mb-2 d-flex justify-content-start'>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" />
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" />
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                </div>
            </div>     
            <div className='row'>
                <div className='col'>
                    <button className='btn btn-primary' onClick={processRegister}>Register</button>
                </div>

            </div>       
        </div>
    );
}

export default RegistrationComponent;