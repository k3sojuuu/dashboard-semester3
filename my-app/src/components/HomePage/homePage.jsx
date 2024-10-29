
import React, { useState ,useEffect} from 'react';
import { trainDataSeptember,trainDataOctober } from '../../data/TrainData';
import "./homePage.css";

const HomePage = () => {
    const [startPoint, setStartPoint] = useState('');
    const [status, setStatus] = useState('');
    const [trainType, setTrainType] = useState('');
    const [month, setMonth] = useState(''); // Lọc theo tháng

    useEffect(() => {
        // Lấy tháng hiện tại (0 - 11) và cộng thêm 1 để có tháng (1 - 12)
        const currentMonth = new Date().getMonth() + 1; 
        setMonth(currentMonth.toString()); // Chuyển tháng thành chuỗi
    }, []);

    // Chọn dữ liệu của tháng dựa trên lựa chọn của người dùng
    let filteredData = [];

    if (month === '9') {
        filteredData = trainDataSeptember;
    } else if (month === '10') {
        filteredData = trainDataOctober;
    }

    // Lọc dữ liệu dựa trên các lựa chọn filter khác
    filteredData = filteredData.filter((train) => {
        return (
            (startPoint === '' || train.startPoint === startPoint) &&
            (status === '' || train.status === status) &&
            (trainType === '' || train.type === trainType)
        );
    });

    return (
        <div className="flex p-4">
            <div className="filter-section w-64 bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
                <div className="filter-group mb-4">
                    <h1>Start Point</h1>
                    <select 
                        value={startPoint} 
                        onChange={(e) => setStartPoint(e.target.value)} 
                        className="w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="">All</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                    </select>
                </div>
                <div className="filter-group mb-4">
                    <h1>Status</h1>
                    <select 
                        value={status} 
                        onChange={(e) => setStatus(e.target.value)} 
                        className="w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="">All</option>
                        <option value="Hoàn thành">Hoàn thành</option>
                        <option value="Đang hoạt động">Đang hoạt động</option>
                        <option value="Đang chờ">Đang chờ</option>
                    </select>
                </div>
                <div className="filter-group mb-4">
                    <h1>Train type</h1>
                    <select 
                        value={trainType} 
                        onChange={(e) => setTrainType(e.target.value)} 
                        className="w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="">All</option>
                        <option value="Chở khách">Chở khách</option>
                        <option value="Chở hàng">Chở hàng</option>
                    </select>
                </div>
                <div className="filter-group mb-4">
                    <h1>Month</h1>
                    <select 
                        value={month} 
                        onChange={(e) => setMonth(e.target.value)} 
                        className="w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="4">Tháng 4</option>
                        <option value="5">Tháng 5</option>
                        <option value="6">Tháng 6</option>
                        <option value="7">Tháng 7</option>
                        <option value="8">Tháng 8</option>
                        <option value="9">Tháng 9</option>
                        <option value="10">Tháng 10</option>
                    </select>
                </div>
            </div>

            {/* Hiển thị dữ liệu bảng chỉ khi người dùng đã chọn tháng */}
            <div className="table-section flex-grow ml-4">
                {month ? (
                    <table className="min-w-full table-auto border border-gray-300 rounded-lg">
                        <thead className="bg-gray-200">
                            <tr className='nav1'>
                                <th className="p-2 border">STT</th>
                                <th className="p-2 border">Tên tàu</th>
                                <th className="p-2 border">Loại tàu</th>
                                <th className="p-2 border">Số toa</th>
                                <th className="p-2 border">Điểm đi</th>
                                <th className="p-2 border">Điểm đến</th>
                                <th className="p-2 border">Ngày bắt đầu</th>
                                <th className="p-2 border">Ngày kết thúc</th>
                                <th className="p-2 border">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((train) => (
                                <tr key={train.stt}>
                                    <td className="p-2 border">{train.stt}</td>
                                    <td className="p-2 border">{train.name}</td>
                                    <td className="p-2 border">{train.type}</td>
                                    <td className="p-2 border">{train.coaches}</td>
                                    <td className="p-2 border">{train.startPoint}</td>
                                    <td className="p-2 border">{train.endPoint}</td>
                                    <td className="p-2 border">{train.startDate}</td>
                                    <td className="p-2 border">{train.endDate}</td>
                                    <td className={`p-2 border ${
                                        train.status === 'Hoàn thành' ? 'text-green-500' : 
                                        train.status === 'Đang hoạt động' ? 'text-yellow-500' : 
                                        train.status === 'Đang chờ' ? 'text-red-500' : ''
                                    }`}>
                                        {train.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="mt-4">Vui lòng chọn tháng để hiển thị dữ liệu.</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;