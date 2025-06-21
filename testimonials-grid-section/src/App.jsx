import './styles/App.scss'
import Card from './Card'
import data from './data'

function App() {
  
  const renderCards = data.map((item, index) => {
    const { name, header, content, border, img, backgroundColor, color, area } = item
    return (
      <Card
        key={index}
        name={name}
        header={header}
        border={border}
        img={img}
        backgroundColor={backgroundColor}
        color={color}
        gridArea={area}
      >
        {content}
      </Card>
    )
  })

  return (
    <>
      <main>
        <div className="wrapper">
            {renderCards}
        </div>
      </main>
    </>
  )
}

export default App