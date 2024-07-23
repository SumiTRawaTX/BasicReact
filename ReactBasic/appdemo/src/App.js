import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Cards from  './components/Cards';

function App() {

  // 3rd method
  // suppose we have a response and fetching three data
  // we using array and object inside the array as well

  const response = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "june",
      itemYear: "1998",
    },

    {
      itemName: "Nirma2",
      itemDate: "202",
      itemMonth: "june2",
      itemYear: "19982",
    },

    {
      itemName: "Nirma3",
      itemDate: "203",
      itemMonth: "june3",
      itemYear: "19983",
    }
  ];


  // 2nd method
  const itemTwoName = "SurfExcel";
  return (

    // 2nd method
    <div>
    <Cards>
      <Item name={response[0].itemName}>
          what the hell is this man
        </Item> 
        <ItemDate date={response[0].itemDate} month={response[0].itemMonth} Year={response[0].itemYear}></ItemDate>
        
        <Item name={response[1].itemName}></Item> 
        <ItemDate date={response[1].itemDate} month={response[1].itemMonth} Year={response[1].itemYear}></ItemDate>

        <Item name={response[2].itemName}></Item> 
        <ItemDate date={response[2].itemDate} month={response[2].itemMonth} Year={response[2].itemYear}></ItemDate>

        <div className="App">Hello World</div>
    </Cards>

    </div>
  );
}

export default App;




    // <div>

    //   {/* normal method */}
    //   <Item name="nirma"></Item> 
    //   <ItemDate date="19" month="July" Year="1998"></ItemDate>
      
    //   {/* 2nd method */}
    //   <Item name={itemTwoName}></Item> 
    //   <ItemDate date="19" month="August" Year="2000"></ItemDate>

    //   <Item name="555"></Item> 
    //   <ItemDate date="23" month="September" Year="2010"></ItemDate>
    //   <div className="App">Hello World</div>
    // </div>

