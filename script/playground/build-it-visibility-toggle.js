// const title = "Visibility Toggle";
// const appRoot = document.getElementById("app");
// const toggleText = "Show";

// let visibility = false;

// const toggle = () => {
//     visibility = !visibility;
//     renderApp();
// }

// const renderApp = () => {

//     const template = (
//         <div>
//             <h1>{title}</h1>
//             <button onClick={toggle}>{visibility ? "Hide Details" : "Show Details"}</button>
//             {visibility && <p>Demoe   dmoee</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// renderApp();


// VisibilityToggle -- render , constructor, handleToggleVisibility
// visibility -->> false

class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey, These are some details you can now see !!!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));