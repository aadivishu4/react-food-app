import React from "react";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const users = this.props.usersData;

    return (
      <div>
        <ul>
          {users.map((ur) => {
            return <li key={ur.id}>{ur.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default UsersList;
