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

  /*
    getDefaultProps: function() {
      console.log("Ustawienie domyślnych wartości")
    },

    componentWillMount: function() {
      console.log("Podłączenie komponentu przed wykoananiem metody 'render'")
    },

    componentDidMount: function() {
      console.log("Umożliwia dalsze operacje na utworzonym już elemencie")
    },

    componentWillReceiveProps: function() {
      console.log("Aktualizacja stanu komponentu po zmianie właściwości")
    },

    shouldComponentUpdate: function() {
      console.log("Sprawdzenie, czy komponent wymaga ponownego renderowania")
    },

    componentWillUpdate: function() {
      console.log("Aktualizacja komponentu, następuje w przypadku kiedy poprzednia metoda zwróci wartość 'true'")
    },

    componentDidUpdate: function() {
      console.log("Analogicznie do componentDidMount umożliwia dalsze operacje na elemencie")
    },

    componentWillUnmount: function() {
      console.log("Usunięcie komponentu po wykonaniu 'zadania'")
    },
  */
 
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