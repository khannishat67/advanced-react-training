ReactDOM.render(
    React.createElement('div'), document.getElementById('root')
    );

const canvas = document.getElementById('canvas1');
// 2D, 3D
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.color = '#ff0000'
ctx.fillRect(10,10,100,120);

ctx.drawArc(120,120,60,20,30,120)
