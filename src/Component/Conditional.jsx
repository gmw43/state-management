const Conditional = (props) => {
  const temperature = props.degTemp;

  return (
    <>
      {temperature > 50 && 'It\'s too Hot Weather'}
      {temperature <= 50 && temperature > 40 && 'Hot Day '}
      {temperature <= 40 && temperature > 30 && 'Sunny Day'}
      {temperature <= 30 && temperature > 20 && 'Cold Day'}
      {temperature <= 20 && temperature >0 &&  'It\'s too Cold Weather'}
    </>
  );
};

export default Conditional;