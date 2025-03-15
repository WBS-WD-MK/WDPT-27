// You can work here or download the template
// Your components go here

const App = () => {
  // Handle button click event
  const handleButtonClick = () => {
    alert('Button was clicked!');
  };

  // Handle input change event
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Event Handling Exercise</h1>
      <button onClick={handleButtonClick}>Click Me</button>
      <br />
      <input type='text' onChange={handleInputChange} placeholder='Type something...' />
    </div>
  );
};

export default App;
