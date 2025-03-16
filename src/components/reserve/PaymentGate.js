import React from 'react';

const PaymentGate = ({ paymentId }) => {
    // Now you can access all the properties of the booking like paymentId.dates, paymentId.user, etc.
    if (!paymentId) {
        return <div>Loading...</div>;
    }
    console.log("booking id for paymrent is", paymentId)
    return (
        <div>
            <h2>Payment Details</h2>
            <div>
                <strong>Booking ID: </strong>{paymentId._id}<br />
                <strong>Hotel: </strong>{paymentId.hotels[0].name}<br />
                <strong>Total Rent: </strong>{paymentId.hotels[0].cheapestPrice * paymentId.days}<br />

                {/* Add more details as needed */}
            </div>

            <button onClick={() => { /* Handle payment logic */ }}>
                Proceed with Payment
            </button>
        </div>
    );
};

export default PaymentGate;
