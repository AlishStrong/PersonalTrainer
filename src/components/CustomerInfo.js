import React, {Component} from 'react';
import SkyLight from 'react-skylight';

class CustomerInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trainings: [],
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

    //fetch trainings
    loadTrainings = () => {
        fetch(this.state.trainingLink)
            .then(res => res.json())
            .then(resData => {
                this.setState({trainings: resData.content});
            })
    }

    //delete training
    deleteTraining = (value) => {
                        fetch(value, {method: 'DELETE'})
                            .then(res => {
                                    this.loadTrainings()
                                    alert('Training deleted')
                                         }
                            )
                                }

    componentDidMount() {
        this.loadTrainings();
        //console.log(this.props);
    }

    render() {
        const trainingRow = this.state.trainings.map(
            (exercise) =>
            <tr key={exercise.id}>
            <td>{exercise.activity}</td>
            <td>{exercise.date}</td>
            <td>{exercise.duration}</td>
            <td><button className="btn btn-primary" onClick={() => this.deleteTraining(exercise.links[0].href)}>Delete</button></td>
        </tr>
    )
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
        <table>
        {trainingRow}
        </table>
                </SkyLight>
                <button className="btn btn-primary" onClick={() => this.simpleDialog.show()}>View info</button>
            </div>
    )
        ;
    }
}

export default CustomerInfo;
