//React - element
const ele = React.createElement(
    'div',{},'Hello World',
    React.createElement('h2',{className: 'sameer'},'basic tag')
    );
console.log(ele);

//JSX - element
const ele2 = (<div>
                <div>
                    Hello React World
                    <h2 className="sameer-react">React-basics</h2>
                </div>
            </div>)

ReactDOM.render(ele2,document.getElementById('app'));
// ReactDOM.render(ele,document.getElementById('app'));
// why JSX is needed and we can diretly creat react elements using React.cloneElement etc
// with JSx it is easy to understand by deveopers and gives wings to use a of the JS features like : conditions,loops,methods,es6 etc.
const myName = "Sameer";
function getName(a){
    if(a){
        return <div>Sameer</div>;
    }else{
        return <div>Defaut</div>;
    }
}
const ele3 = (<div>
    <div>
        Hello React World
        <h1>
           {myName}
           {2 + 3}
           {getName(false)}
           {getName(true)}
        </h1>
        <h2 className="sameer-react">React-basics</h2>
    </div>
</div>)

ReactDOM.render(ele3,document.getElementById('app'));
