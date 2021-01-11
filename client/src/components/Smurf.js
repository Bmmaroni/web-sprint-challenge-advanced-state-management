import React from 'react';
import

class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;

        return(<div data-testid="smurf" className="card">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{smurf.name}</h5>
                    <h5 class="card-subtitle">{smurf.nickname}</h5>
                    <p class="card-text">{smurf.position}</p>
                    <p class="card-text">{smurf.description}</p>
                </div>
            </div>
        </div>);
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.