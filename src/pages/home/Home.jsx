import React, { useState, useEffect } from 'react';
//import './Home.css';
import { fetchUser } from '../service/ApiUser';

function Home() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUser();
                setUserData(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex justify-center ml-9">
            <div className="overflow-x-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Contact App</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Firstname</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Salary</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Number</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200" id="tbody">
                        {userData.map((user, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.first_name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.date_of_birth}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.monthly_net_salary}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.account_number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}

export default Home;
