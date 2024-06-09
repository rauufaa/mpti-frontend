import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link, useNavigate } from "react-router-dom"
import FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { getAllHistorySales, getSales, updateCurrentPageSales, updateEndDateSales, updateStartDateSales } from "../../../state/SalesSlice";

function Sales() {
    const salesState = useSelector(state => state.sales);
    const userState = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleStartDateInputChange = (event) => {
        dispatch(updateStartDateSales(event.target.value == "" ? undefined : event.target.value))
        console.log(event.target.value)
    }

    const handleEndDateInputChange = (event) => {
        dispatch(updateEndDateSales(event.target.value == "" ? undefined : event.target.value))
    }

    const handleSubmitSearchHistory = (event) => {
        event.preventDefault();
        const dataPrep = {
            token: userState.data.token,
            currentPage: salesState.historyData?.currentPage,
            startDate: salesState.historyData?.startDate,
            endDate: salesState.historyData?.endDate
        }
        console.log(salesState.historyData.startDate)
        dispatch(getSales(dataPrep)).then(result => console.log(result))
    }

    const handleHistoryNextPage = (event) => {
        dispatch(updateCurrentPageSales(salesState.historyData.currentPage + 1))
        const dataPrep = {
            token: userState.data.token,
            currentPage: salesState.historyData.paging?.next,
            startDate: salesState.historyData?.startDate,
            endDate: salesState.historyData?.endDate
        }
        dispatch(getSales(dataPrep)).then(result => console.log(result))
    }

    const handleHistoryPrevPage = (event) => {
        dispatch(updateCurrentPageSales(salesState.historyData.currentPage - 1))
        const dataPrep = {
            token: userState.data.token,
            currentPage: salesState.historyData.paging?.prev,
            startDate: salesState.historyData?.startDate,
            endDate: salesState.historyData?.endDate
        }
        dispatch(getSales(dataPrep)).then(result => console.log(result))
    }
    console.log("kerender", salesState.historyData?.endDate)

    useEffect(() => {
        fetch('https://worldtimeapi.org/api/timezone/Asia/Jakarta')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(updateStartDateSales(data.datetime.slice(0, 11) + "00:00"))
                dispatch(updateEndDateSales(data.datetime.slice(0, 11) + "23:59"))
                const dataPrep = {
                    token: userState.data.token,
                    currentPage: 1,
                    startDate: data.datetime.slice(0, 11) + "00:00",
                    endDate: data.datetime.slice(0, 11) + "23:59"
                }
                dispatch(getSales(dataPrep))
            })
            .catch(error => {
                console.error('Error:', error);
            });

        console.log(salesState.historyData?.endDate)
        
    }, [])

    const handleDonwloadHistory = (event) => {
        const dataPrep = {
            token: userState.data.token,
            startDate: salesState.historyData.startDate,
            endDate: salesState.historyData.endDate
        }
        console.log(salesState.historyData.endDate)
        dispatch(getAllHistorySales(dataPrep)).then(result => {
            console.log(result)
            if (!result.error) {
                excelExport(result.payload)
            }
        })
        dispatch(getSales(dataPrep))
    }

    const excelExport = (result) => {
        // console.log([...stokState?.dataPrint.map((data, index)=>[index++, data.nama_penginput, data.nama_gas, data.jumlah, data.tanggal, data.informasi])])
        //console.log(result)
        const fileName = 'apidata';
        const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        const fileExtension = ".xlsx";
        const Heading = [
            [`Total Terjual : ${result.dataSold.countSold}`],
            [`Total Keuntungan : ${result.dataSold.revenue}`],
            ['No', 'Nama', 'Tanggal', 'Jumlah', 'Harga Satuan', 'Total', 'Penginput']
        ];
        const ws = XLSX.utils.json_to_sheet(result.data.map((data, index)=>[index+1, data.nama_penginput, data.nama_gas, data.jumlah, data.tanggal, data.informasi]), { origin: 'A2'});
        XLSX.utils.sheet_add_aoa(ws, Heading, { origin: 'A1' });
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const filedata = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(filedata, fileName + fileExtension);
    }

    return (
        <div className="w-full py-2">

            <h1 className="text-[2em]">Laporan Penjualan</h1>
            <p className="text-[1.2em]">Data Penjualan Gas LPG</p>

            <div className="grid gap-3">
                <div className="card bg-base-100 shadow-xl overflow-x-auto max-w-5xl ">
                    <Form className="card-body gap-4 flex-col" onSubmit={handleSubmitSearchHistory}>
                        <div className="flex md:flex-row flex-col gap-4">
                            <div className="w-full">
                                <h2 className="card-title">Dari Tanggal</h2>
                                <input defaultValue={salesState.historyData?.startDate} onChange={handleStartDateInputChange} type="datetime-local" className="input input-bordered w-full" />
                            </div>
                            <div className="w-full">
                                <h2 className="card-title">Sampai Tanggal</h2>
                                <input defaultValue={salesState.historyData?.endDate} onChange={handleEndDateInputChange} type="datetime-local" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <button type="submit" className="btn w-full" disabled={salesState?.loading}>
                            {/* {salesState?.loading &&
                                <span className="loading loading-spinner"></span>
                            } */}
                            Cari
                        </button>
                    </Form>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body justify-between sm:flex-row sm:items-center">
                        <div>
                            <h2 className="card-title">Keuntungan Penjualan</h2>
                            <p>Total terjual : {salesState.data?.countSold ?? 0}</p>
                        </div>
                        <h3 className="text-[1.5em] font-bold">{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR" }).format(salesState.data?.revenue)}</h3>

                    </div>
                </div>
                <div className="card max-w-5xl bg-base-100 shadow-xl overflow-x-auto">
                    <div className="card-body">
                        <div className="flex gap-4 justify-between flex-col sm:flex-row">
                            <h2 className="card-title">Riwayat Penjualan</h2>
                            <button className="btn" onClick={handleDonwloadHistory}>
                                <span className="material-symbols-outlined">
                                    download
                                </span>
                                Unduh
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr className="bg-base-200">
                                        <th>No.</th>
                                        <th>Nama</th>
                                        <th>Tanggal</th>
                                        <th>Jumlah</th>
                                        <th>Harga Satuan</th>
                                        <th>Total</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody className={salesState?.loading?"skeleton":""}>
                                    {
                                        salesState.error ? (
                                            <tr><td colSpan={6} className="text-center">{salesState.message}</td></tr>
                                        ) : (
                                            salesState.historyData.list?.map((data, index) => {
                                                const dataIndex = (5 * salesState.historyData.currentPage - ((5 - index - 1)))
                                                return (
                                                    <tr key={index}>
                                                        <td>{dataIndex}</td>
                                                        <td>{data.nama_pembeli}</td>
                                                        <td>{data.tanggal}</td>
                                                        <td>{data.jumlah}</td>
                                                        <td>{data.hargaSatuan}</td>
                                                        <td>{data.totalBayar}</td>
                                                        <td>
                                                            <button className="btn btn-ghost btn-circle">
                                                                <span className="material-symbols-outlined">
                                                                    edit
                                                                </span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        )
                                    }

                                </tbody>

                            </table>
                        </div>
                        <div className="card-actions justify-center">
                            <div className="join">
                                {
                                    salesState.historyData.paging?.prev &&
                                    <button className="join-item btn" onClick={handleHistoryPrevPage}>«</button>
                                }

                                <button className="join-item btn">{salesState.historyData.currentPage}</button>

                                {
                                    salesState.historyData.paging?.next &&
                                    <button className="join-item btn" onClick={handleHistoryNextPage}>»</button>
                                }
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Sales