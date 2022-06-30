import React from 'react';

const BillingPage = () => {
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