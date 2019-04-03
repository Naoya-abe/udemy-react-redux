import React from 'react'; // jsxを使う際にこのReactは必要

const App = () => {
  const profiles = [
    {name: 'Taro', age: 10},
    {name: 'Hanako', age: 20},
    {name: 'Naoya'},
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = props => {
  return (
    <div>
      Hi, I am {props.name}, and I'm {props.age} years old!
    </div>
  );
};

User.defaultProps = {
  age: 1,
};
export default App;
