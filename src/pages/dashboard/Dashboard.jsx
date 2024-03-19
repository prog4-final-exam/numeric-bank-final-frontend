//import './Dashboard.css'


function Dashboard({ children }) {
    return (
        <div className="flex flex-row items-stretch h-screen bg-gray-100">
                    {children}   
        </div>
    );
}

export default Dashboard;

