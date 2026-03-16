import React from 'react';

const Dashboard = () => {
    const vmList = [
        { id: 1, name: 'VM1', status: 'Running' },
        { id: 2, name: 'VM2', status: 'Stopped' },
        { id: 3, name: 'VM3', status: 'Paused' },
    ];

    const handleStart = (id) => {
        console.log(`Starting VM with id: ${id}`);
    };

    const handleStop = (id) => {
        console.log(`Stopping VM with id: ${id}`);
    };

    return (
        <div>
            <h1>VM Dashboard</h1>
            <ul>
                {vmList.map(vm => (
                    <li key={vm.id}>
                        {vm.name} - {vm.status} 
                        {vm.status === 'Stopped' && <button onClick={() => handleStart(vm.id)}>Start</button>}
                        {vm.status === 'Running' && <button onClick={() => handleStop(vm.id)}>Stop</button>} 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;