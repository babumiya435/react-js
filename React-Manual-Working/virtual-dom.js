function test(i) {
    const ele = `<div>
    <div>
        Hello World - Native JS Way
    </div>
    <div>
        <input type='text'></input>
        <div>
            ${new Date().toLocaleTimeString()}
        </div>
    </div>
    </div>`

    document.getElementById('app1').innerHTML = ele; // real - dom updation

    // React try to store the previous state of the Real-DOM and update it accordingly
    const ele2 = React.createElement(
        'div',
        null,
        React.createElement('div',null,'Hello World - React JS Way'),
        React.createElement(
            'div',
            null,
            React.createElement('input',{type:'text'}),
            React.createElement('div',null, new Date().toLocaleTimeString())
        )
        )
    ReactDOM.render(ele2,document.getElementById('app2')); // react-dom updation
}

// for (let i = 0; i < 100; i++) {
//         setTimeout(()=>{
//             test(i);
//         },5000);
// }
setInterval(test,1000);

