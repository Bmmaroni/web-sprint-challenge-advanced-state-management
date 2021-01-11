import React from 'react';
import { Card } from 'react-bootstrap';

class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;

        return(<div data-testid="smurf" className="card">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Header>{smurf.name}</Card.Header>
                    <Card.Subtitle>{smurf.nickname}</Card.Subtitle>
                    <Card.Text>{smurf.position}</Card.Text>
                    <Card.Text>{smurf.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>);
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.