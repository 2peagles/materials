import React, {Component} from 'react'
import commerce from '@chec/commerce.js';
// import commerce from '../../lib/commerce';
import '../../styles/Checkout/Checkout.scss'
class Checkout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checkoutToken: {},
            // Customer details
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'janedoe@email.com',
            // Shipping details
            shippingName: 'Jane Doe',
            shippingStreet: '123 Fake St',
            shippingCity: 'San Francisco',
            shippingStateProvince: 'CA',
            shippingPostalZipCode: '94107',
            shippingCountry: 'US',
            // Payment details
            cardNum: '4242 4242 4242 4242',
            expMonth: '11',
            expYear: '2023',
            ccv: '123',
            billingPostalZipcode: '94107',
            // Shipping and fulfillment data
            shippingCountries: {},
            shippingSubdivisions: {},
            shippingOptions: [],
            shippingOption: '',
        }
    };
    componentDidMount() {
        this.generateCheckoutToken();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.form.shipping.country !== prevState.form.shipping.country) {
            this.fetchShippingOptions(this.state.checkoutToken.id, this.state.shippingCountry);
        }
    }
    generateCheckoutToken() {
        const { cart } = this.props;
        if (cart.line_items.length) {
            return commerce.checkout.generateToken(cart.id, { type: 'cart' })
                .then((token) => this.setState({ checkoutToken: token }))
                .then(() => this.fetchShippingCountries(this.state.checkoutToken.id))
                .catch((error) => {
                    console.log('There was an error in generating a token', error);
                });
        }
    }
    fetchShippingCountries(checkoutTokenId) {
        commerce.services.localeListShippingCountries(checkoutTokenId).then((countries) => {
            this.setState({
                shippingCountries: countries.countries,
            })
        }).catch((error) => {
            console.log('There was an error fetching a list of shipping countries', error);
        });
    }
    fetchSubdivisions(countryCode) {
        commerce.services.localeListSubdivisions(countryCode).then((subdivisions) => {
            this.setState({
                shippingSubdivisions: subdivisions.subdivisions,
            })
        }).catch((error) => {
            console.log('There was an error fetching the subdivisions', error);
        });
    }
    fetchShippingOptions(checkoutTokenId, country, stateProvince = null) {
        commerce.checkout.getShippingOptions(checkoutTokenId,
            {
                country: country,
                region: stateProvince
            }).then((options) => {
                const shippingOption = options[0] || null;
                this.setState({
                    shippingOptions: options,
                    shippingOption: shippingOption,
                })
            }).catch((error) => {
                console.log('There was an error fetching the shipping methods', error);
            });
    }

    renderCheckoutForm() {

        return (
            <form className="checkout__form">
                <h4 className="checkout__subheading">Customer information</h4>

                <label className="checkout__label" htmlFor="firstName">First name</label>
                <input className="checkout__input" type="text" value={this.state.firstName} name="firstName" placeholder="Enter your first name" required />

                <label className="checkout__label" htmlFor="lastName">Last name</label>
                <input className="checkout__input" type="text" value={this.state.lastName} name="lastName" placeholder="Enter your last name" required />

                <label className="checkout__label" htmlFor="email">Email</label>
                <input className="checkout__input" type="text" value={this.state.email} name="email" placeholder="Enter your email" required />

                <h4 className="checkout__subheading">Shipping details</h4>

                <label className="checkout__label" htmlFor="shippingName">Full name</label>
                <input className="checkout__input" type="text" value={this.state.shippingName} name="shippingName" placeholder="Enter your shipping full name" required />

                <label className="checkout__label" htmlFor="shippingStreet">Street address</label>
                <input className="checkout__input" type="text" value={this.state.shippingStreet} name="shippingStreet" placeholder="Enter your street address" required />

                <label className="checkout__label" htmlFor="shippingCity">City</label>
                <input className="checkout__input" type="text" value={this.state.shippingCity} name="shippingCity" placeholder="Enter your city" required />

                <label className="checkout__label" htmlFor="shippingPostalZipCode">Postal/Zip code</label>
                <input className="checkout__input" type="text" value={this.state.shippingPostalZipCode} name="shippingPostalZipCode" placeholder="Enter your postal/zip code" required />

                <h4 className="checkout__subheading">Payment information</h4>

                <label className="checkout__label" htmlFor="cardNum">Credit card number</label>
                <input className="checkout__input" type="text" name="cardNum" value={this.state.cardNum} placeholder="Enter your card number" />

                <label className="checkout__label" htmlFor="expMonth">Expiry month</label>
                <input className="checkout__input" type="text" name="expMonth" value={this.state.expMonth} placeholder="Card expiry month" />

                <label className="checkout__label" htmlFor="expYear">Expiry year</label>
                <input className="checkout__input" type="text" name="expYear" value={this.state.expYear} placeholder="Card expiry year" />

                <label className="checkout__label" htmlFor="ccv">CCV</label>
                <input className="checkout__input" type="text" name="ccv" value={this.state.ccv} placeholder="CCV (3 digits)" />

                <button className="checkout__btn-confirm">Confirm order</button>
            </form>
        );
    };
};

export default Checkout;