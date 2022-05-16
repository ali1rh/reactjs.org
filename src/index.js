import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



/**
 * SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
 *              Square
 */

// function Square(props) {
//     return (
//       <button
//         className="square"
//         onClick={props.onClick}
//       >
//         {props.value}
//       </button>
//     );
// }

class Square extends React.Component {


  render(){



    // console.log(this.props)
    const splitClass =  "square";
    return (
      <button
        className= {`${splitClass} ${this.props.winnerBlock}`}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}



/**
 * BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
 *              Board
 */


class Board extends React.Component {
  

  renderSquare(i) {
    var winnerBlock = this.props.winnerBlock;
    // console.log('winnerBlock:', winnerBlock)
    

    // if(winnerBlock){
    //   for (let i = 0; i < winnerBlock.length; i++) {
    //     // console.log(lines[i])
    //     console.log(winnerBlock[i]);
    //   }
    // }
    let classWinnerBox = null;
    if(winnerBlock){
      if(winnerBlock.includes(i)){
        classWinnerBox = "winnerBlock";
      }
    }
    


    
    return (<Square
                value={this.props.squares[i]}
                winnerBlock={classWinnerBox}
                onClick={() => this.props.onClick(i)}
            />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


/**
 * GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
 *              game
 */

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      gamerNext: true,
      winnerBlock: []
    }
    
  }

  
  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length -1];
    const squares = current.squares.slice()
    if (calculateWinner(squares).status) {
      return;
    }
    if (squares[i]){
      // remove click again
      return;
    }

    squares[i]= this.state.gamerNext ? 'X' : 'O';
    
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      gamerNext: !this.state.gamerNext,
    })
    
    
  }
  
  jumpTo(step){
    this.setState({
      stepNumber: step,
      gamerNext: (step % 2) === 0
    })
  }

  alibd(i, j){
    // console.log('hi', j)
      return(<Board 
        winnerBlock= {j}
        squares ={i}
        onClick={(i)=> this.handleClick(i)}
      />);
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const gameStatus = calculateWinner(current.squares)
    // console.log('gameStatus.winnerBlock: ', gameStatus.winnerBlock)

    const moves = history.map((step, move) => {
      // console.log('step: ', step);
      // console.log('move: ', move);
      
      const desc = move ?
      'رفتن به مرحله #' + move :
      'پیمایش به اول بازی';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })
    let status;
    if (gameStatus.status === "X" || gameStatus.status === "O") {
      status = 'برنده: ' + gameStatus.status + this.state.winnerBlock;
    }
    else if(gameStatus.status === "end"){
      status = 'بازی بدون نتیجه بود';
    }
    else {
      status = 'پلیر کنونی: ' + (this.state.gamerNext ? 'X' : 'O');
    }
    // console.log(this.state.history)

    console.log('this.state.winnerBlock: ', this.state.winnerBlock)
    return (
      <div className="game">
        <div className="game-board">
          {this.alibd(current.squares, gameStatus.winnerBlock)}
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {
  // console.log('squares: ', squares);
  

  
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // console.log('lines: ', lines.length);
  for (let i = 0; i < lines.length; i++) {
    // console.log(lines[i])
    const [a, b, c] = lines[i];
    // console.log('a:', a , '|', 'squares[a]: ', squares[a]);
    // console.log('b:', b , '|', 'squares[b]: ', squares[b]);
    // console.log('c:', c , '|', 'squares[c]: ', squares[c]);
    
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // console.log(squares[a]);
      return {
        status: squares[a],
        winnerBlock: [a, b, c]
      }
    }
    
    

  }
  if(squares.includes(null) === false){
    console.log('end');
    return {
      status: 'end',
    }
  }
  return {
    status: null,
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
