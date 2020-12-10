import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey =
        'pk_test_51HwYXJKlDcCNy8dLLna1g8uSLYyazlVxOKPO3AOB6D4YH6TyrviDWypx60w06T927D4ZbXZGzN3uRmubX3Zme0BL00Y4V9OUOh'

    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Ecommerce Project"
            billingAddress
            shippingAddress
            image=""
            description={`Your Total is: $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
