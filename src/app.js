console.log('App.js is running');
// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length >0 ? 'Here are your options' : 'No options'}
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

const user = {
    name: 'Tom',
    age: 18,
    location: 'Toronto'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

const userName = 'Billy';
const userAge = 33;
const userLocation = "Chicago"

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
        {<h3>my h3</h3>}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);