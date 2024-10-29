// components/AddTrainPopup.js
import React, { useState } from 'react';

const AddTrainPopup = ({ showPopup, setShowPopup, onAddTrain }) => {
    const [newTrain, setNewTrain] = useState({
        name: '',
        type: '',
        coaches: '',
        startPoint: '',
        endPoint: '',
        startDate: '',
        endDate: '',
        status: 'Chưa hoạt động', // Đổi trạng thái mặc định thành "Chưa hoạt động"
    });

    const handleAddTrain = (e) => {
        e.preventDefault();
        onAddTrain(newTrain); // Gọi hàm thêm chuyến tàu
        setNewTrain({ // Reset giá trị
            name: '',
            type: '',
            coaches: '',
            startPoint: '',
            endPoint: '',
            startDate: '',
            endDate: '',
            status: 'Chưa hoạt động', // Reset trạng thái về "Chưa hoạt động"
        });
        setShowPopup(false); // Ẩn popup
    };

    return (
        showPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">Thêm Chuyến Tàu</h2>
                    <form onSubmit={handleAddTrain}>
                        <div className="mb-4">
                            <label className="block mb-1">Tên tàu:</label>
                            <input 
                                type="text" 
                                value={newTrain.name} 
                                onChange={(e) => setNewTrain({ ...newTrain, name: e.target.value })} 
                                className="border border-gray-300 rounded-md p-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Loại tàu:</label>
                            <input 
                                type="text" 
                                value={newTrain.type} 
                                onChange={(e) => setNewTrain({ ...newTrain, type: e.target.value })} 
                                className="border border-gray-300 rounded-md p-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Số toa:</label>
                            <input 
                                type="number" 
                                value={newTrain.coaches} 
                                onChange={(e) => setNewTrain({ ...newTrain, coaches: e.target.value })} 
                                className="border border-gray-300 rounded-md p-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Điểm đi:</label>
                            <input 
                                type="text" 
                                value={newTrain.startPoint} 
                                onChange={(e) => setNewTrain({ ...newTrain, startPoint: e.target.value })} 
                                className="border border-gray-300 rounded-md p-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Điểm đến:</label>
                            <input 
                                type="text" 
                                value={newTrain.endPoint} 
                                onChange={(e) => setNewTrain({ ...newTrain, endPoint: e.target.value })} 
                                className="border border-gray-300 rounded-md p-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Ngày bắt đầu:</label>
                            <input 
                                type="date" 
                                value={newTrain.startDate} 
                                onChange={(e) => setNewTrain({ ...newTrain, startDate: e.target.value })} 
                                className="border border-gray-300 rounded-md p-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Ngày kết thúc:</label>
                            <input 
                                type="date" 
                                value={newTrain.endDate} 
                                onChange={(e) => setNewTrain({ ...newTrain, endDate: e.target.value })} 
                                className="border border-gray-300 rounded-md p-2 w-full"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-green-500 text-white p-2 rounded-md mr-2">
                            Thêm
                        </button>
                        <button type="button" onClick={() => setShowPopup(false)} className="bg-red-500 text-white p-2 rounded-md">
                            Hủy
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};

export default AddTrainPopup;
