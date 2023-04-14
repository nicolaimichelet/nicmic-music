import React, { useEffect, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const PayPalButtonNicmic = ({ amount, currencyCode, onSuccess, onError }) => {
    const [paypalLoaded, setPaypalLoaded] = useState(false)

    useEffect(() => {
        setPaypalLoaded(true)
    }, [])

    if (!paypalLoaded) {
        return <div>Loading...</div>
    }

    return (
        <PayPalScriptProvider options={{ 'client-id': 'test' }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: amount,
                                    currency_code: currencyCode,
                                },
                            },
                        ],
                    })
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        onSuccess(details)
                    })
                }}
                onError={(error) => {
                    onError(error)
                }}
            />
        </PayPalScriptProvider>
    )
}

export default PayPalButtonNicmic
