import React, { FC, useContext, useState } from 'react';

function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <form>
                <fieldset>
                    <div class="row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <input
                            class="form-control"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            placeholder='Email'
                        />
                        <p></p>
                        <input
                            class="form-control"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder='Password'
                        />
                        <p></p>
                        <button type="button" class="btn btn-info" onClick={() => store.login(email, password)}>
                            Log in
                        </button>
                        <p></p>
                        <button type="button" class="btn btn-info" onClick={() => store.registration(email, password)}>
                            Register
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default LoginForm;