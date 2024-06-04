import { useSelector } from "react-redux"
import { Form, Link } from "react-router-dom"
import { FORGET_PASSWORD_PROGRESS } from "../../state/ForgetPasswordSlice";
import ForgetPasswordEmail from "./ForgetPasswordEmail";
import ForgetPasswordCode from "./ForgetPasswordCode";
import ForgetPasswordNewPass from "./ForgetPasswordNewPass";

function ForgetPassword() {
    const forgetPasswordProgress = useSelector(state => state.forgetPassword.progress);
    return (
        <div className="bg-gray-50">
            <section className="flex min-h-screen justify-center items-center flex-col p-3">

                <div className="card w-full max-w-lg bg-base-100 shadow-xl">
                    {forgetPasswordProgress === FORGET_PASSWORD_PROGRESS.EMAIL && <ForgetPasswordEmail />}
                    {forgetPasswordProgress === FORGET_PASSWORD_PROGRESS.CODE && <ForgetPasswordCode />}
                    {forgetPasswordProgress === FORGET_PASSWORD_PROGRESS.REPASS && <ForgetPasswordNewPass />}
                    
                </div>

            </section>
        </div>
    )
}

export default ForgetPassword