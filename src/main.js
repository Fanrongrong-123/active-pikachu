const demo = document.querySelector('#demo')
const demo1 = document.querySelector('#demo1')

let string = `<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::before,
*::after {
    box-sizing: border-box;
}
body{
    background-color: #ffe600;
    min-height: 100vh;
  }
  
  .skin{
    position: relative;
  }
  
  .nose{
    position: absolute;
    width: 10px;
    height: 10px;
    border: 10px solid black;
    border-radius: 20px 20px 0 0 ;
    border-color: black transparent transparent;
    left: 50%;
    top: 150px;
    margin-left: -10px;
    z-index: 2;
  }
  @keyframes wave{
    0%{
      transform: rotate(0deg);
    }
    33%{
      transform: rotate(5deg);
    }
    66%{
      transform: rotate(-5deg);
    }
    100%{
      transform: rotate(0deg);
    }
  }
  .nose:hover{
    animation: wave 150ms linear infinite;
  }
  .eye{
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position:absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    border-radius: 50%;
    background-color: #2D2D2D ;
  }
  .eye.left{
    transform: translate(-100px);
  }
  .eye.right{
    transform: translate(100px);
  }
  .eye::before{
    content: '';
    display: block;
    border: 2px solid black;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left: 8px;
  }
  .eye::after{
    content: '';
    display: block;
    border: 2px solid black;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left: 30px;
    top: 20px;
  }
  .mouth{
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    top: 165px;
    margin-left: -100px;
    position: relative;
  }
  .mouth .up .lip{
    z-index: 1;
    background-color: #ffe600;
  }
  .mouth .up .lip.left{
    border: 3px solid black;
    position: absolute;
    width: 100px;
    height: 20px;
    border-bottom-left-radius: 40px 25px;
    border-top: transparent;
    border-right: transparent;
    transform: rotate(-15deg);
  }
  .mouth .up .lip.right{
    border: 3px solid black;
    position: absolute;
    width: 100px;
    height: 20px;
    left: 100px;
    border-bottom-right-radius: 40px 25px;
    border-top: transparent;
    border-left: transparent;
    transform: rotate(15deg);
  }
  .mouth .down{
    height: 400px;
    position: absolute;
    width: 150px;
    left: 25px;
    top: 7px;
    overflow: hidden;
  }
  .mouth .down .se{
    height: 400px;
    position: absolute;
    width: 150px;
    left: 0px;
    top:-150px;
    border-radius: 75px/200px;
    overflow: hidden;
    background-color: #A61108;
  }
  .xse{
    position: absolute;
    width: 160px;
    height: 220px;
    bottom: 0;
    left: 50%;
    margin-left: -80px;
    border-radius: 150px/100px;
    background-color: #FF5B5D;
  }
  .face{
    border: 3px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    left: 50%;
    margin-left: -44px;
    border-radius: 50%;
    background-color: #FE1800;
  }
  .face.left{
    transform: translate(-200px,230px);
  }
  .face.right{
    transform: translate(200px,230px);
  }
  @media (max-width: 500px){
    .face.left{
      transform: translate(-130px,230px);
    }
    .face.right{
      transform: translate(130px,230px);
    }
</style>
`
let n = 1

demo1.innerText = string.substr(0, n)
demo.innerHTML = string.substr(0, n)

let run = () => {
  n++
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  demo1.innerText = string.substr(0, n) //写入string的子字符串，从0~n
  demo.innerHTML = string.substr(0, n)
  demo1.scrollTop = demo1.scrollHeight //demo1的滚动高度
}

let time = 50

let play = () => {
  return setInterval(run, time)
}

let stop = () => {
  window.clearInterval(id)
}

let id = play()

btnPause.onclick = () => {
  stop()
}

btnPlay.onclick = () => {
  stop()
  id = play()
}

btnNormal.onclick = () => {
  stop()
  time = 50
  id = play()
}

btnSlow.onclick = () => {
  stop()
  time = 500
  id = play()
}

btnFast.onclick = () => {
  stop()
  time = 0
  id = play()
}