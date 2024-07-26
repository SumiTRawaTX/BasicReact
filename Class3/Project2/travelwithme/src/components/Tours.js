import Card from './Card'
function Tours({Tours, removeTour, }) {
  return (
    <div>
      <div>
        <h2>Plan With Us</h2>
      </div>
      <div>
        {
          Tours.map((tour) => {
            return <card {...tour} removeTour={removeTour}></card>
          })
        }
      </div>
    </div>
  )
}

export default Tours;