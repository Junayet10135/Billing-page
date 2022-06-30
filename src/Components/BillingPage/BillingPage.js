import React, { useEffect, useState } from 'react';

const BillingPage = () => {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        fetch('details.json')
            .then(res => res.json())
            .then(data => setBills(data));
    }, []);
    return (
        <div className='mt-10'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Payment Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        bills.sort((a,b) => b.id - a.id).map((bill) => <tr>
                            <th>{bill.id}</th>
                            <th>{bill.name}</th>
                            <th>{bill.email}</th>
                            <th>{bill.phone}</th>
                            <th>{bill.paid}</th>
                            <th><div className='flex items-center justify-center'>
                                <button class="btn btn-xs">Edit</button>
                                |
                                <button class="btn btn-xs">Delete</button>
                            </div></th>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
            <div class="btn-group mt-5">
                <button class="btn btn-sm">1</button>
                <button class="btn btn-sm btn-active">2</button>
                <button class="btn btn-sm">3</button>
                <button class="btn btn-sm">4</button>
            </div>
        </div>
    );
};

export default BillingPage;