var domContainer = document.getElementById('root');
// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return (
//       <button onClick={() => this.setState({ liked: true })}>
//         Like
//       </button>
//     );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, domContainer);
// }

// setInterval(tick, 1000);


function Welcome(props) {
  return React.createElement(
    "h1",
    null,
    " hello, ",
    props.name
  );
}

// const element = <Welcome name="Sara" />

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Welcome, { name: "sara" }),
    React.createElement(Welcome, { name: "cahal" }),
    React.createElement(Welcome, { name: "edite" })
  );
}

ReactDOM.render(React.createElement(App, null), domContainer);