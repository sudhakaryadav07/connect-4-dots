import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import AppBar from './components/Appbar';
import { Screen1, Screen2, Screen3 } from './components/index';
import NumberOfGames from './components/NumberOfGames';
import WhosTurn from './components/WhosTurn';
import { checkWin } from './util/gameLogic';

class App extends Component {

  INITAILSTATE = {
    matrix: [
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ],
    step: 1,
    noOfGames: "",
    whoStarts: "",
    playingGame: 1,
    currentPlayer: '',
    nextPlayer: null,
    matchDraw: false,
    showSuccess: false,
    showTournamentStatus: false,
    tournamentWinner: null,
    winner: null,
    winPattern: [],

    scoreQueue: [],
    scoreQueueStatus: false,

    player1: {
      photo: "",
      status: '',
      begin: null,
      name: "",
      score: 0,
      id: 1
    },
    player2: {
      photo: "",
      status: '',
      begin: null,
      name: "",
      score: 0,
      id: 2
    },
    message: "",

    gKeySelectGame: false,
    gKeyWhosTurn: false
  }

  constructor(props) {
    super(props);
    this.state = this.INITAILSTATE
  }

  handleChangeStep = (valid) => {
    if (valid) {
      this.setState({ step: this.state.step + 1 })
    } else {
      this.setState({ message: "Coming Soon" })
      setTimeout(() => {
        this.setState({ message: "" })
      }, 3000)
    }
  }

  handleStartAGame = () => {
    let { player1, player2, whoStarts, noOfGames } = this.state;
    if (player1.name === player2.name) {
      this.setState({ message: "Players with same name not allowed !" })
      setTimeout(() => {
        this.setState({ message: "" })
      }, 3000)
    } else if (player1.name && player2.name && whoStarts && noOfGames) {
      this.setState({ step: this.state.step + 1 })
    } else {
      this.setState({ message: "Please fill the details" })
      setTimeout(() => {
        this.setState({ message: "" })
      }, 3000)
    }
  }

  putImage = (e, player) => {
    let { player1, player2 } = this.state;
    if (player === 1) {
      this.setState({ player1: { ...player1, photo: URL.createObjectURL(e.target.files[0]) } })
    }
    if (player === 2) {
      this.setState({ player2: { ...player2, photo: URL.createObjectURL(e.target.files[0]) } })
    }
  }

  handleBackScreen = () => this.setState({ step: this.state.step - 1 })

  handleNameChange = (e) => {
    let { player1, player2 } = this.state;
    if (e.target.name === 'player1') {
      player1 = { ...player1, name: e.target.value }
      return this.setState({ player1 })
    }
    if (e.target.name === 'player2') {
      player2 = { ...player2, name: e.target.value }
      return this.setState({ player2 })
    }
  }

  handleSelectGame = (key) => this.setState({ gKeySelectGame: key })
  handleSelectTurn = (key) => this.setState({ gKeyWhosTurn: key })

  handleCloseGamesModal = () => this.setState({ gKeySelectGame: null })
  handleChangeNumberOfGames = (val) => this.setState({ noOfGames: val })

  handleCloseWhosTurn = () => this.setState({ gKeyWhosTurn: null })
  handleWhosTurn = (e) => {
    let { player1, player2 } = this.state;

    if (e === 'Alternative turn') {
      player1 = { ...player1, begin: true }
      player2 = { ...player2, begin: false }
      this.setState({ player1, player2, whoStarts: e, currentPlayer: player1, nextPlayer: player2 })
    }

    if (e === 'Looser first') {
      if (player1.status === "looser") {
        player1 = { ...player1, begin: true }
        player2 = { ...player2, begin: false }
        this.setState({ player1, player2, whoStarts: e })
      } else {
        this.setState({ gKeyWhosTurn: null, message: "Player need to play at least one game" })
        setTimeout(() => {
          this.setState({ message: "" })
        }, 3000)
      }

      if (player2.status === "looser") {
        player2 = { ...player2, begin: true }
        player1 = { ...player1, begin: false }
        this.setState({ player1, player2, whoStarts: e })
      } else {
        this.setState({ gKeyWhosTurn: null, message: "Player need to play at least one game" })
        setTimeout(() => {
          this.setState({ message: "" })
        }, 3000)
      }
    }

    if (e === 'Winner first') {
      if (player1.status === "winner") {
        player1 = { ...player1, begin: true }
        player2 = { ...player2, begin: false }
        this.setState({ player1, player2, whoStarts: e })
      } else {
        this.setState({ gKeyWhosTurn: null, message: "Player need to play at least one game" })
        setTimeout(() => {
          this.setState({ message: "" })
        }, 3000)
      }

      if (player2.status === "winner") {
        player2 = { ...player2, begin: true }
        player1 = { ...player1, begin: false }
        this.setState({ player1, player2, whoStarts: e })
      } else {
        this.setState({ gKeyWhosTurn: null, message: "Player need to play at least one game" })
        setTimeout(() => {
          this.setState({ message: "" })
        }, 3000)
      }
    }

    if (e === 'Always player 01') {
      player1 = { ...player1, begin: true }
      player2 = { ...player2, begin: false }
      this.setState({ player1, player2, whoStarts: e, currentPlayer: player1, nextPlayer: player2 })
    }

    if (e === 'Always player 02') {
      player2 = { ...player2, begin: true }
      player1 = { ...player1, begin: false }
      this.setState({ player1, player2, whoStarts: e, currentPlayer: player2, nextPlayer: player1 })
    }

  }

  handleStep = async (i, j) => {

    let { player1, player2 } = this.state;

    if (player1.begin) {
      this.setState({ player1: { ...player1, begin: false } })
    } else {
      this.setState({ player1: { ...player1, begin: true } })
    }

    if (player2.begin) {
      this.setState({ player2: { ...player2, begin: false } })
    } else {
      this.setState({ player2: { ...player2, begin: true } })
    }

    this.updateMatrix(i, j);

  }

  undoStep = () => {
    let { matrix, scoreQueue } = this.state;
    if (scoreQueue.length > 0) {
      matrix[scoreQueue[0]][scoreQueue[1]] = ""
      this.setState({ scoreQueueStatus: false, scoreQueue: [], matrix })
    }
  }

  updateMatrix = async (row, col) => {
    let { matrix, winPattern, currentPlayer } = this.state;
    if (winPattern.length > 0) {
      return;
    }

    // console.log(matrix.length)
    let i = matrix.length - 1;
    for (; i > -1; i--) {
      // console.log(matrix[i][col])
      if (matrix[i][col] === "") {
        // console.log(i, col)
        matrix[i][col] = currentPlayer.name;
        break;
      }
    }
    // Return if all the slots are full, i.e. do nothing
    if (i === -1) {
      return;
    }
    await this.resetMatrix(matrix);
    this.handleDecisionMaker(i, col);
  }

  resetMatrix = async (matrix) => {
    this.setState({ matrix })
  }

  handleDecisionMaker = (row, col) => {

    let { matrix, player1, player2, currentPlayer, nextPlayer } = this.state;
    this.setState({ scoreQueue: [row, col], scoreQueueStatus: true })
    checkWin(matrix, currentPlayer.name, row, col)
      .then(result => {
        if (result.win) {
          this.setState({
            showSuccess: true,
            winPattern: result.winPattern,
            player1: currentPlayer.name == player1.name ? { ...player1, status: 'winner', score: player1.score + 1 } : { ...player1, status: 'looser' },
            player2: currentPlayer.name == player2.name ? { ...player2, status: 'winner', score: player2.score + 1 } : { ...player2, status: 'looser' }
          }, () => {
            this.checkTournamentStatus();
          })

        } else {
          this.setState({ currentPlayer: nextPlayer, nextPlayer: currentPlayer })
        }
      })
  }

  handleUpdatePlayer = async () => {
    let { player1, player2, playingGame } = this.state;
    let matrix = [
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ]

    this.setState({
      showSuccess: false, winPattern: [], scoreQueue: [],
      playingGame: playingGame + 1, matrix, player1: { ...player1, status: "looser" }, player2: { ...player2, status: "looser" }
    })
  }

  checkTournamentStatus = async () => {
    let { noOfGames, player1, player2, playingGame } = this.state;

    if (parseInt(noOfGames) % 2 !== 0) {

      if (parseInt(noOfGames) % 2 !== 0 && player1.score == Math.round(parseInt(noOfGames) / 2)) {
        this.handleSetTournamentStatus(player1)
      }

      if (parseInt(noOfGames) % 2 !== 0 && player2.score == Math.round(parseInt(noOfGames) / 2)) {
        this.handleSetTournamentStatus(player2)
      }
    } else {
      if (player1.score + player2.score == noOfGames) {
        if (player1.score == noOfGames) {
          this.handleSetTournamentStatus(player1)
        } else if (player2.score == noOfGames) {
          this.handleSetTournamentStatus(player2)
        } else {
          this.handleMatchDraw()
        }
      }
    }

  }

  restartTheGame = () => {
    let matrix = [
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ]
    this.setState({ ...this.INITAILSTATE, matrix })
  }

  handleSetTournamentStatus = async (player) => {
    this.setState({ showSuccess: false, matchDraw: false, showTournamentStatus: true, tournamentWinner: player.name })
  }

  handleMatchDraw = async () => {
    this.setState({ showSuccess: false, matchDraw: true, showTournamentStatus: false })
  }

  handleEndTournament = () => {
    let matrix = [
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ]
    this.setState({ ...this.INITAILSTATE, matrix })
  }

  renderScreen() {
    let { message, scoreQueueStatus, step, player1, player2, noOfGames, showSuccess, showTournamentStatus, tournamentWinner,
      playingGame, whoStarts, matrix, currentPlayer, matchDraw } = this.state;

    let winner = player1.status === "winner" ? player1.name : player2.name;

    switch (step) {
      case 1:
        return (
          <Screen1
            message={message}
            handleClick={this.handleChangeStep}
          />
        );

      case 2:
        return (
          <Screen2
            message={message}
            player1={player1}
            player2={player2}
            noOfGames={noOfGames}
            whoStarts={whoStarts}
            putImage={this.putImage}
            handleChange={this.handleNameChange}
            handleClick={this.handleStartAGame}
            selectGame={this.handleSelectGame}
            selectTurn={this.handleSelectTurn}
          />
        );

      case 3:
        return (
          <Screen3
            winner={winner}
            matrix={matrix}
            player1={player1}
            player2={player2}
            noOfGames={noOfGames}
            playingGame={playingGame}
            showSuccess={showSuccess}
            matchDraw={matchDraw}
            scoreQueueStatus={scoreQueueStatus}
            handleStep={this.handleStep}
            tournamentWinner={tournamentWinner}
            handleUndoStep={this.handleUndoStep}
            showTournamentStatus={showTournamentStatus}
            handleEndTournament={this.handleEndTournament}
            currentPlayer={currentPlayer}
            handleUpdatePlayer={this.handleUpdatePlayer}
            restartTheGame={this.restartTheGame}
            winPattern={this.state.winPattern}
            undoStep={this.undoStep}
          />
        );

      default:
        break;
    }
  }

  renderNumberOfGames() {
    let { gKeySelectGame, noOfGames } = this.state;
    if (gKeySelectGame) {
      return (
        <NumberOfGames
          noOfGames={noOfGames}
          handleClose={this.handleCloseGamesModal}
          handleChangeNumberOfGames={this.handleChangeNumberOfGames}
        />
      )
    }
  }

  renderWhosTurn() {
    let { gKeyWhosTurn, whoStarts } = this.state;
    if (gKeyWhosTurn) {
      return (
        <WhosTurn
          whoStarts={whoStarts}
          handleClose={this.handleCloseWhosTurn}
          handleWhosTurn={this.handleWhosTurn}
        />
      )
    }
  }

  render() {
    let { message, step } = this.state;
    console.log(message)
    return (
      <Grid item spacing={10} style={{ margin: 0, backgroundColor: '#CED2DC' }}>
        {step > 1 ? <AppBar handleBack={this.handleBackScreen} /> : ""}
        {this.renderScreen()}

        {this.renderNumberOfGames()}
        {this.renderWhosTurn()}
      </Grid>
    )
  }

}

export default App;
