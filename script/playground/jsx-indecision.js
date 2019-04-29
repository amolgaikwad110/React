// JSX == Javascript XML 

const title = "InDecision App";

const app = {
    title: "InDecision App",
    subTitle: "Put your life in the hands of computer",
    options: [
        "One",
        "Two",
        "Three",
        "Four",
    ]
};

// only render the subTitle and p tag if subTitle exits logical and 
// render p tag if options.length > 0 "Here are your options" "No options"

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }

}

const removeAll = () => {
    app.options = [];
    renderIndecisionApp();
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
}

// create Remove All button above list 
// on click  



const appRoot = document.getElementById("app");

/**
 * Create templateTwo var JSX expression
 * <div>
 *      <h1>Amol Gaikwad</h1>
 *      <p>Age : 26</p>
 *      <p>Location: India</p>
 * </div>
 */

const user = {
    name: "Amol Gaikwad",
    age: 26,
    location: "New Jersey"
};

function getLocation(location) {
    if (location) {
        return <p>Location : {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user && user.name ? user.name : "Annonymous"}</h1>
        {(user && user.age > 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app && app.subTitle) && <p>{app.subTitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do ???</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option, index) => {
                        return <li key={index}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderIndecisionApp();