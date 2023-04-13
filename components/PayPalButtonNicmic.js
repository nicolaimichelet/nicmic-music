import { PayPalButton } from 'react-paypal-button-v2'
import React, { useState, useEffect } from 'react'

export default function PayPalButtonNicmic() {
    const [paymentDetails, setPaymentDetails] = useState({
        amount: 100, // Amount to be charged
        description: 'Digital Download', // Description of the purchase
    })

    return (
        <PayPalButton
            amount={paymentDetails.amount}
            currency="NOK"
            onSuccess={(details, data) => {
                console.log(
                    'Transaction completed by ' + details.payer.name.given_name
                )
                // Call function to handle successful payment completion
            }}
            options={{
                clientId:
                    'AWRvujwypxxnOBatQ9FD6USH-30v5uA0752t9SWGWW_X2Xb1SQq8irlBTyf7obJawgw9Y0JRR6Gvk9tp',
                currency: 'NOK',
            }}
            style={{
                layout: 'vertical',
                color: 'blue',
                shape: 'rect',
                label: 'pay',
                height: 40,
            }}
        />
    )
}
