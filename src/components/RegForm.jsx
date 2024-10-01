import FooterBase from "./basic/footers/FooterBase";
import Layout from "./basic/Layout";
import { useState } from "react";
import { Context } from "../main";
import { useContext } from "react";
import Store from "../store/store";

function RegForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { store } = useContext(Context);

    const handleForm = () => {
        store.registration(email, password);
    }

    return (
        <div className="text-white">
            <Layout>
                <section className="bg-color-blue min-h-screen pt-20 pb-20">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Please log in or register</h1>

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
                        <div class="mb-5">
                            <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                            <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div class="flex items-start mb-5">
                            <div class="flex items-center h-5">
                                <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                        </div>
                        <div class="flex items-start mb-5">
                            <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account? <a href="/login" class="text-blue-600 hover:underline dark:text-blue-500">login</a></label>
                        </div>
                        <button type="button" onClick={handleForm} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                    </form>

                </section>
            </Layout>
        </div>
    );
}

export default RegForm;