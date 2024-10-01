import FooterBase from "./basic/footers/FooterBase";
import Layout from "./basic/Layout";
import { useState } from "react";
import Store from "../store/store";
import { useContext } from "react";
import { Context } from "../main";
function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { store } = useContext(Context);

    const handleForm = () => {
        store.login(email, password);
    }

    return (
        <div className="text-white">
            <Layout>
                <section className="bg-color-blue min-h-screen pt-20 pb-20">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Please log in</h1>

                    <form class="max-w-sm mx-auto">
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" 
                                    id="email" 
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                                    placeholder="name@gmail.com" 
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    required />
                        </div>
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input onChange={e => setPassword(e.target.value)} 
                            value={password}type="password" id="password" 
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            required />
                        </div>
                        <button type="button" onClick={handleForm} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    </form>
                </section>
            </Layout>
        </div>
    );
}

export default LoginForm;