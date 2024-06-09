import { useDispatch, useSelector } from "react-redux"
import { Form, Link, useNavigate } from "react-router-dom"
import { loginUser, updateErrorUser, updateMessageUser, updatePasswordUser, updateUsernameUser } from "../../state/UserSlice";
import { useEffect } from "react";

function Login() {
    const userState = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleUsernameInputChange = (event) => {
        event.target.value = event.target.value.replace(/[^a-z0-9]/g, '');
        console.log(event.target.value)
        dispatch(updateUsernameUser(event.target.value))
    }

    const handlePasswordInputChange = (event) => {
        dispatch(updatePasswordUser(event.target.value))
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        if (userState.login.username === "" || userState.login.password === "") {
            dispatch(updateErrorUser(true));
            dispatch(updateMessageUser("Isian tidak boleh kosong"));
            return
        }

        const prepData = {
            username: userState.login.username,
            password: userState.login.password
        }

        console.log(userState.login.username, userState.login.password)

        dispatch(loginUser(prepData)).then(result => {
            if (!result.error) {
                navigate("/")
            }
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (userState.error) {
                dispatch(updateErrorUser(false))
            }
        }, 5000)
        return () => clearTimeout(timer)
    }, [userState.error])

    useEffect(()=>{
        if( userState.data.token != null || undefined ){
            navigate("/");
        }
    }, [])

    return (
        <div className="bg-gray-50">
            <section className="flex min-h-screen justify-center items-center flex-col p-3">

                <div className="card w-full max-w-lg bg-base-100 shadow-xl">
                    <Form onSubmit={handleLoginSubmit} className="card-body items-center">
                        <h2 className="text-[2em] font-bold text-center">LOGIN</h2>
                        {
                            userState.error && (
                                <div role="alert" className="alert alert-warning transition-all ease-in">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span>{userState.message}</span>
                                </div>
                            )
                        }
                        <label className="input border-none w-full max-w-96 flex items-center gap-2 before:bg-black relative before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0">
                            <input onChange={handleUsernameInputChange} type="text" className="w-full" placeholder="Nama Pengguna" />
                            <span className="material-symbols-outlined">
                                person
                            </span>
                        </label>
                        <label className="input border-none w-full max-w-96 flex items-center gap-2 before:bg-black relative before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0">
                            <input onChange={handlePasswordInputChange} type="password" className="w-full" placeholder="Kata Sandi" />
                            <span className="material-symbols-outlined">
                                lock
                            </span>
                        </label>
                        <Link to="/lupa-sandi" className="text-center italic">Lupa Kata Sandi?</Link>
                        <div className="card-actions justify-center w-full p-4">
                            <button type="submit" className="btn rounded-full w-full max-w-80" disabled={userState.loading}>
                                <span className={userState.loading ? "loading loading-spinner" : ""}></span>
                                LOGIN
                            </button>
                        </div>
                    </Form>

                </div>

            </section>
        </div>
    )
}

export default Login