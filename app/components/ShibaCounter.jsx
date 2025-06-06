import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from '../shibaCounterSlice';

export function ShibaCounter() {
  const count = useSelector(state => state.shibaCounter.shibaCount);
  const dispatch = useDispatch();

  function handleIncrement(event) {
    event.preventDefault();
    dispatch(incrementByAmount(parseInt(event.currentTarget.elements.number.value)));
  }

  return (
    <div>
      <span>Shibas: {count}</span>
      <form onSubmit={(event) => handleIncrement(event)}>
        <label htmlFor='number'>Number</label>
        <input id='number' type="number"/>
        <button type="submit">Add Shibas</button>
      </form>
    </div>
  )
}