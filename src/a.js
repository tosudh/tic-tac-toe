import React, {useState} from 'react'
import Icon from './Components/Icon/icon'
// import toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import react strap 
import 'bootstrap/dist/css/bootstrap.css';
import { Container,Button,Row,Col,Card,CardBody } from 'reactstrap';
import "./style/style.css"


const tiktocArray = new Array(9).fill("")
const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMessage] = useState("")
    
    const playAgain=()=>{
       setIsCross(true)
       setWinMessage("")
       tiktocArray.fill("")
    }

    const winner = () => {
        if (tiktocArray[0] === tiktocArray[1] && tiktocArray[1] === tiktocArray[2] && tiktocArray[0] !== "") {
            setWinMessage(`${tiktocArray[0]} is the winner`)
        }
        else if (tiktocArray[3] === tiktocArray[4] && tiktocArray[4] === tiktocArray[5] && tiktocArray[3] !== "") {
            setWinMessage(`${tiktocArray[3]} is the winner`)
        }
        else if (tiktocArray[6] === tiktocArray[7] && tiktocArray[7] === tiktocArray[8] && tiktocArray[6] !== "") {
            setWinMessage(`${tiktocArray[6]} is the winner`)
        }
        else if (tiktocArray[0] === tiktocArray[3] && tiktocArray[3] === tiktocArray[6] && tiktocArray[0] !== "") {
            setWinMessage(`${tiktocArray[0]} is the winner`)
        }
        else if (tiktocArray[1] === tiktocArray[4] && tiktocArray[4] === tiktocArray[7] && tiktocArray[1] !== "") {
            setWinMessage(`${tiktocArray[1]} is the winner`)
        }
        else if (tiktocArray[2] === tiktocArray[5] && tiktocArray[5] === tiktocArray[8] && tiktocArray[2] !== "") {
            setWinMessage(`${tiktocArray[2]} is the winner`)
        }
        else if (tiktocArray[0] === tiktocArray[4] && tiktocArray[4] === tiktocArray[8] && tiktocArray[0] !== "") {
            setWinMessage(`${tiktocArray[0]} is the winner`)
        }
        else if (tiktocArray[2] === tiktocArray[4] && tiktocArray[2] === tiktocArray[6] && tiktocArray[2] !== "") {
              setWinMessage(`${tiktocArray[2]} is the winner`)
        }
        else if(tiktocArray.includes("")==false){
            setWinMessage("Draw")
        }
    }
    
    // put cross or circle on tic tok toe
    const putCrossOrCircle = (index) => {
      if(winMessage){
        return toast.error(' Hey The game has alreay ended', {
          position: "bottom-center"
          });
      }
      if (tiktocArray[index] === "") {
        tiktocArray[index] = isCross == true ? "cross":"circle"
        setIsCross(!isCross)
    }
    else{
      return toast.error(' Hey The box is already filled', {
        position: "bottom-center"
        });
    }
    winner()
  }

  return (
    <Container className = "p-5">
    <ToastContainer position="top-right" />

       <Row> 
       
       <Col md={6} className="offset-md-3"> 
          
           {
              winMessage ? (
                <div> 
                <h1 className="text-center"> {winMessage} </h1>
                <Button onClick={playAgain}> Play Again</Button>
                </div>
              ):
              (
                <h1> 
                 { isCross ? "Cross" : "Circle" }'s Turn
                </h1>
              )
           }
           <div className="grid"> 
              
               {
                  tiktocArray.map((value,index)=>(
                    <Card onClick={() => {putCrossOrCircle(index)}}> 
                       <CardBody className="box">
                          <Icon choice={tiktocArray[index]}/>
                       </CardBody>
                    </Card> 
                  ))
               }

           </div>
           
       
       </Col>
       
       </Row>
    </Container>
  )
}
export default App