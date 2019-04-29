class InDecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options: ["Thing One", "Thing Two", "Thing Three", "Thing Four"]
        }
    }

    // handleDeleteOptions
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        })
    }

    render() {
        const title = "InDecision App";
        const subTitle = "Put your life in the hands of computer";

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0} />
                <Options options={this.state.options} hasOptions={this.state.options.length > 0} handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("Handle Pick");
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick} disabled={!this.props.hasOptions}>
                    What should I do?
                </button>
            </div>
        );
    }
}

// Options 
// Setup options prop for options component
// Render the length of an Array

// Add Remove All button
// Setup handleRemoveAll ==>> Alert some message 
// setup onClick to fire the method

class Options extends React.Component {
    constructor(props) {
        super(props);
        // this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    // handleRemoveAll() {
    //     alert("Remove All");
    //     this.props.options = [];
    // }
    render() {
        console.log(this.props.options.length);
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions} disabled={!this.props.hasOptions}>Remove All</button>
                {
                    this.props.options.map((option, index) => {
                        return <Option key={index} option={option} />
                    })
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>Option: {this.props.option}</div>
        );
    }
}

// 1. Setup the form with text input and submit button 
// 2. Wire onSubmit
// 3. handleAddOption ==>> fetch the value typed ==>> if value then alert();

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<InDecisionApp />, appRoot); 