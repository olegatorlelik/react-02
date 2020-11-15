import React from "react";
import axios from "axios";

class LifeReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://serverless-backend-ky9b8rmuq.now.sh/api/users"
    );
    this.setState({ user: response.data });
  }

  check = () => {
    console.log(this.state.user);
  };

  render() {
    return (
      <div>
        {this.state.user.map((elem) => {
          return <div key={elem.id}>{elem.name.first}</div>;
        })}
        <button onClick={this.check}>click</button>
      </div>
    );
  }
}

export default LifeReact;
