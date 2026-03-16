import React from 'react';

const VMCard = ({ vm }) => {
    const startVM = () => {
        // Logic to start the VM
        console.log(`Starting VM: ${vm.name}`);
    };

    const stopVM = () => {
        // Logic to stop the VM
        console.log(`Stopping VM: ${vm.name}`);
    };

    return (
        <div className="vm-card">
            <h3>{vm.name}</h3>
            <p>Status: {vm.status}</p>
            <button onClick={startVM} disabled={vm.status === 'running'}>Start VM</button>
            <button onClick={stopVM} disabled={vm.status === 'stopped'}>Stop VM</button>
        </div>
    );
};

export default VMCard;
