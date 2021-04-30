import React from "react";
import { Route, Link, useParams, useHistory } from "react-router-dom";

const HomePage = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/topics">Go topics </Link>
      <button onClick={() => props.history.push("/topics")}>
        Go topics page
      </button>
    </div>
  );
};

const TopicsList = (props) => {
  let history = useHistory();
  const handleClick = (id) => {
    history.push(`/topics/${id}`);
  };

  console.log(props);
  return (
    <div>
      <p>TopicsList Page</p>
      <Link to={`${props.match.url}/13`}>Click 13</Link>
      <Link to={`${props.match.url}/14`}>Click 14</Link>
      <Link to={`${props.match.url}/15`}>Click 15</Link>
      <button onClick={() => handleClick(11)}>Click 11</button>
      <button onClick={() => handleClick(112)}>Click 112</button>
      <button onClick={() => handleClick(13)}>Click 13</button>
    </div>
  );
};

const TopicsDetails = (props) => {
  const params = useParams();
  let { topicsId } = params;
  console.log(props);
  return (
    <>
      <h1>TopicsDetails Page:{props.match.params.topicsId}</h1>
      <h2>TopicsDetails :{topicsId}</h2>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicsList} />
      <Route path="/topics/:topicsId" component={TopicsDetails} />
    </div>
  );
};

export default App;
