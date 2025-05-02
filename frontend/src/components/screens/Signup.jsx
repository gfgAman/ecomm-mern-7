import axios from 'axios'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Signup = () => {

    const [confirmPassword, setConfirmPassword] = useState('')

    const [userDetails, setUserDetails] = useState(
        { username: '', email: '', contact: '', password: '' }
    )

    const onSubmitHandler = async () => {
        try {
            const response = await axios.post('http://localhost:3000/signup', userDetails)
            console.log(response?.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
            <div>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <label className="text-slate-800 text-sm font-medium mb-2 block">
                            First Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Enter name"
                            onChange={(e) => setUserDetails(prev => ({ ...prev, username: e.target.value }))}
                        />
                    </div>
                    <div>
                        <label className="text-slate-800 text-sm font-medium mb-2 block">
                            Email Id
                        </label>
                        <input
                            name="email"
                            type="text"
                            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Enter email"
                            onChange={(e) => setUserDetails(prev => ({ ...prev, email: e.target.value }))}
                        />
                    </div>
                    <div>
                        <label className="text-slate-800 text-sm font-medium mb-2 block">
                            Mobile No.
                        </label>
                        <input
                            name="number"
                            type="number"
                            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Enter mobile number"
                            onChange={(e) => setUserDetails(prev => ({ ...prev, contact: e.target.value }))}
                        />
                    </div>
                    <div>
                        <label className="text-slate-800 text-sm font-medium mb-2 block">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Enter password"
                            onChange={(e) => setUserDetails(prev => ({ ...prev, password: e.target.value }))}
                        />
                    </div>
                    <div>
                        <label className="text-slate-800 text-sm font-medium mb-2 block">
                            Confirm Password
                        </label>
                        <input
                            name="cpassword"
                            type="password"
                            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Enter confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mt-12">
                    <button
                        onClick={onSubmitHandler}
                        className="mx-auto block py-3 px-6 text-sm font-medium tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Signup