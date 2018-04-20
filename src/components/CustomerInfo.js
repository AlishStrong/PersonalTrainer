import React, {Component} from 'react';
import SkyLight from 'react-skylight';

class CustomerInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //name: this.props.customer.firstname,
            //surname: this.props.customer.lastname,
            //link: this.props.customer.linkCust,
            //custList: [this.props.customer]
            name: this.props.customer._original.firstname,
            surname: this.props.customer._original.lastname,
            trainingLink: this.props.customer._original.links[2].href,
            city: this.props.customer._original.city,
            email: this.props.customer._original.email,
            phone: this.props.customer._original.phone,
            postcode: this.props.customer._original.postcode,
            streetaddress: this.props.customer._original.streetaddress
        }

    }
/*
    //retreive info about the customer
    loadCust = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(res => res.json())
            .then(resData => {
                this.setState({custList: resData.content});
            })
            .then(this.setState({custList: this.state.custList[0]}))
    }
*/
    componentDidMount() {
        //this.loadCust();
        console.log(this.props);
    }


    render() {
        return (
            <div>
                <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Customer info">
                    <p>{this.state.name}</p>
                    <p>{this.state.surname}</p>
                    <p><a href={this.state.trainingLink}>trainings</a></p>
                    <p>{this.state.city}</p>
                    <p>{this.state.email}</p>
                    <p>{this.state.phone}</p>
                    <p>{this.state.postcode}</p>
                    <p>{this.state.streetaddress}</p>
                </SkyLight>
                <button className="btn btn-primary" onClick={() => this.simpleDialog.show()}>View info</button>
            </div>
    )
        ;
    }
}

export default CustomerInfo;
