import React, { Component } from 'react';
import './App.css';

//Importing react-table
import ReactTable from "react-table";
import "react-table/react-table.css";

//View info about customer
import CustomerInfo from './components/CustomerInfo'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {customers: []};
    }

    //fetch the customers
    loadCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
        .then(res => res.json())
        .then(resData => {
        this.setState({customers: resData.content});
    })
    }

    componentDidMount() {
        this.loadCustomers();
}

  render() {
/*
        const rows = this.state.customers.map(value =>
            <tr>
            <td>value.firstname</td>
            <td>value.lastname</td>
            <td>value.streetaddress</td>
            <td>value.postcode</td>
            <td>value.city</td>
            <td>value.email</td>
            <td>value.phone</td>
            <td>value.links[1].href</td>
            </tr>)
*/

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fitness Paradise</h1>
        </header>
    <ReactTable
    data={this.state.customers}
    columns={[
            {
                columns: [
                    {
                        Header: "First name",
                        accessor: "firstname"
                    },
                    {
                        Header: "Last name",
                        accessor: "lastname"
                    },
/*
                    {
                        id: "linkCust",
                        Header: "Link",
                        //accessor: data => data.links[1].href
                        accessor: "links[1].href",
                        show: false

                    },
*/
                    {
                        id: 'button',
                        accessor: "_links.self.href",
                        filterable: false,
                        sortable: false,
                        width: 100,
                        Cell: ({row}) => (<CustomerInfo customer={row} />)
                    }
                    /*
                    {
                        Header: "Address",
                        accessor: "streetaddress"
                    },
                    {
                        Header: "Postcode",
                        accessor: "postcode"
                    },
                    {
                        Header: "City",
                        accessor: "city"
                    },
                    {
                        Header: "Email address",
                        accessor: "email"
                    },
                    {
                        Header: "Phone number",
                        accessor: "phone"
                    }
                    */
                         ]
            }
            ]}
    filterable
    defaultPageSize={10}
    className="-striped -highlight"
        />
      </div>
    );

  }
}

export default App;
