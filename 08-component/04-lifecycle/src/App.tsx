import { Component, ReactElement } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import './App.css';

const LIMIT = 60;
type State = { timeLeft: number };

class App extends Component<unknown, State> {
  timerId: NodeJS.Timer | null = null;
  // LIMITを 60に
  // レンダリングされた直後に、 componentDidMount が呼ばれるので、1秒毎にtickメソッドが呼ばれる
  // tickでは、 stateに入っている値位から -1 している?
  // componentDidUpdate で、 stateの値を常時変化させ、残り0秒になったらリセット
  // reset関数が呼ばれて、stateの値が LIMITに戻る。

  constructor(props: unknown) {
    super(props);
    this.state = { timeLeft: LIMIT };
  }

  componentDidMount = (): void => {
    this.timerId = setInterval(this.tick, 1000);
    console.log(this.timerId);
    console.log('コンポーネントのマウント後');
  };

  componentDidUpdate = (): void => {
    const { timeLeft } = this.state;
    if (timeLeft === 0) this.reset();
    console.log('コンポーネントがアップデートされた後');
  };

  componentWillUnmount = (): void => {
    if (this.timerId) clearInterval(this.timerId);
    console.log('コンポーネントがアンマウントされた後');
  };

  tick = (): void =>
    this.setState((prevState) => ({ timeLeft: prevState.timeLeft - 1 }));

  reset = (): void => this.setState({ timeLeft: LIMIT });

  render = (): ReactElement => {
    const { timeLeft } = this.state;

    return (
      <div className="container">
        <header>
          <h1>タイマー</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>time</Statistic.Label>
            <Statistic.Value>{timeLeft}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <Button color="red" fluid onClick={this.reset}>
              <Icon name="redo" />
              Reset
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  };
}

export default App;
