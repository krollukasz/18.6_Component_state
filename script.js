var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter -1
    });
  },

  render: function() {
    return React.createElement("div", {},
      React.createElement("span", {}, "Licznik " + this.state.counter),
      React.createElement("button", {
        onClick: this.increment
      }, "Zwiększ o 1"),
      React.createElement("button", {
        onClick: this.decrement
      }, "Zmniejsz o 1"),
    );
  }
});

var otherCounters = React.createClass({
  render: function() {
    return (
      React.createElement("div", {
        className: "app"
      },
      React.createElement("div", {},
        React.createElement("div", {},
          React.createElement(Counter, {})
        ),

        React.createElement("div", {},
          React.createElement(Counter, {})
        ),

        React.createElement("div", {},
          React.createElement(Counter, {})
        ),
      ),
    )
  )}
});

var element = React.createElement(otherCounters);
ReactDOM.render(element, document.getElementById("app"));