import './ItemDate.css';

function ItemDate(props) {
  const date = props.date;
  const month = props.month;
  const year = props.Year;
  return (
    <div clasName='mfg-date'>
      <span>{date}</span>
      <span>{month}</span>
      <span>{year}</span>
    </div>
  );
}

export default ItemDate;