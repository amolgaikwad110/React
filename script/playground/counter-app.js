
// let count = 0;
// const plusOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {

//     const templateThree = (
//         <div>
//             <h1>
//                 Counter {count}
//             </h1>
//             <button id="plusOne" className="button" onClick={plusOne}>+1</button>
//             <button id="minusOne" className="button" onClick={minusOne}>-1</button>
//             <button id="reset" className="button" onClick={reset}>Reset</button>
//         </div>
//     );

//     // ReactDOM.render(first, second) it takes two argument
//     // first one is JSX we need to render
//     // second one is DOM Element where we need to render 
//     ReactDOM.render(templateThree, appRoot);

// }

// renderCounterApp();

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count++
            };
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count--
            };
        })
    }

    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            };
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// Create three methods handleAddOne, handleMinusOne, handleReset
// use console.log to print method name
// Wire up onClick and bind in the constructor


// 1. Setup the default state object 
// 2. Component rendered with default state values 
// 3. Change state based on event 
// 4. Component re-rendered using new state values 
// 5. Start again at 3 

