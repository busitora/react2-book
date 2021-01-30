import { FC, useEffect, useState } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import './Timer.css';

const Timer: FC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  //   useState を呼ぶと何が起きるの？ これにより『state 変数』が宣言されます

  //   state 変数 timeLeft とその更新関数 setTimeLeft() を定義し、
  //   さらに timeLeft を props としてコンポーネントに渡された limit の値
  //   によって初期化してる。
  const reset = (): void => setTimeLeft(limit);
  const tick = (): void => setTimeLeft((t) => t - 1);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);
  // 第2引数に空の配列を渡してあげているので、setInterval(...)
  // は初回のレンダリング時にのみ実行される。戻り値として clearInterval()
  // の実行関数を設定しているので、コンポーネントがアンマウントされる際
  // にそれが実行される

  //   aaaaaaa eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(limit);
  }, [timeLeft, limit]);
  //  残り時間 timeLeft の値が0になったら、
  //   再度 limit の 値に設定し直す

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value>{timeLeft}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          <Icon name="redo" />
          Reset
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Timer;
