import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, redirect, useNavigate } from 'react-router-dom'
import { updateSuccessStok } from '../../state/StokSlice';
import axios from 'axios';


export async function actionDashboard() {
    const user = JSON.parse(localStorage.getItem("user"));
    
    try {
        console.log("sfasd")
        const response = await axios.get("http://localhost:3000/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": user?.token
            }
        })
        const result = await response.data;
        return null
    } catch (error) {
        return redirect("/login");
    }
}

function Dashboard() {
    const drawerRef = useRef(null);
    const userState = useSelector(state => state.user);
    const stokState = useSelector(state => state.stok);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Pangkalan LPG Egi Rahayu - Dashboard"
        // if (userState?.data?.token == null || undefined) {
        //     navigate("/login");
        // }
        // console.log("dahsbor")
    }, [])

    useEffect(() => {
        console.log("successs alert")
        const timer = setTimeout(() => {
            if (stokState.success) {
                dispatch(updateSuccessStok(false))
            }
        }, 5000)
        return () => clearTimeout(timer)
    }, [stokState.success == true])

    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <div className="navbar bg-base-100 max-w-7xl sticky top-0 z-50">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </button>
                    </div>
                </div>
                <div className="drawer lg:drawer-open z-0 max-w-7xl">
                    <input ref={drawerRef} id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center px-7">
                        {/* Page content here */}
                        <Outlet />
                    </div>
                    <div className="drawer-side lg:h-[calc(100dvh-4rem)] top-[4rem]">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2">
                            {/* Sidebar content here */}
                            <li>

                                <NavLink to="/"
                                    className={({ isActive, isPending }) => {
                                        return `btn justify-start relative ${isActive ? 'btn-active before:w-1 before:rounded-md before:absolute before:bg-black before:h-6 before:-left-0.5' : ''}`
                                    }}
                                    onClick={() => {
                                        drawerRef.current.checked = false
                                    }}
                                >

                                    <span className="material-symbols-outlined">
                                        space_dashboard
                                    </span>
                                    Dashboard

                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/pelanggan"
                                    className={({ isActive, isPending }) => {
                                        return `btn justify-start relative ${isActive ? 'btn-active before:w-1 before:rounded-md before:absolute before:bg-black before:h-6 before:-left-0.5' : ''}`
                                    }}
                                    onClick={() => {
                                        drawerRef.current.checked = false
                                    }}>
                                    <span className="material-symbols-outlined">
                                        fact_check
                                    </span>
                                    Cek NIK
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/penjualan"
                                    className={({ isActive, isPending }) => {
                                        return `btn justify-start relative ${isActive ? 'btn-active before:w-1 before:rounded-md before:absolute before:bg-black before:h-6 before:-left-0.5' : ''}`
                                    }}
                                    onClick={() => {
                                        drawerRef.current.checked = false
                                    }}>
                                    <span className="material-symbols-outlined">
                                        insert_chart
                                    </span>
                                    Penjualan
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/stok"
                                    className={({ isActive, isPending }) => {
                                        return `btn justify-start relative ${isActive ? 'btn-active before:w-1 before:rounded-md before:absolute before:bg-black before:h-6 before:-left-0.5' : ''}`
                                    }}
                                    onClick={() => {
                                        drawerRef.current.checked = false
                                    }}>
                                    <span className="material-symbols-outlined">
                                        propane_tank
                                    </span>
                                    Atur Stok
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profil"
                                    className={({ isActive, isPending }) => {
                                        return `btn justify-start relative ${isActive ? 'btn-active before:w-1 before:rounded-md before:absolute before:bg-black before:h-6 before:-left-0.5' : ''}`
                                    }}
                                    onClick={() => {
                                        drawerRef.current.checked = false
                                    }}>
                                    <span className="material-symbols-outlined">
                                        source_environment
                                    </span>
                                    Profil
                                </NavLink>

                            </li>
                        </ul>
                    </div>
                </div>
            </div >
            {
                stokState.success &&
                <div className="toast toast-end">
                    <div role="alert" className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{stokState.message}</span>
                    </div>
                </div>
            }
            
        </>
    )
}

export default Dashboard