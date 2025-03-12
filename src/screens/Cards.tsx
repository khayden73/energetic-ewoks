import Card from "../components/Card.tsx";
import DogImage1
    from "../../public/images/placeholders/dogs/beagle-puppy-running-through-a-yard-with-a-ball-in-his-mouth.jpg";
import TileGrid from "../components/TileGrid.tsx";

function Cards () {
    return (
        <>
            <h2>Let's play some cards</h2>
            <TileGrid>
                <Card>
                    <Card.Image>
                        <img src={DogImage1} alt="DogImage1" />
                    </Card.Image>
                    <Card.Caption>hello world</Card.Caption>
                </Card>
                <Card>
                    <Card.Image>
                        <img src={DogImage1} alt="DogImage1" />
                    </Card.Image>
                    <Card.Caption>hello world</Card.Caption>
                </Card>
                <Card>
                    <Card.Image>
                        <img src={DogImage1} alt="DogImage1" />
                    </Card.Image>
                    <Card.Caption>hello world</Card.Caption>
                </Card>
                <Card>
                    <Card.Image>
                        <img src={DogImage1} alt="DogImage1" />
                    </Card.Image>
                    <Card.Caption>hello world</Card.Caption>
                </Card>
                <Card>
                    <Card.Image>
                        <img src={DogImage1} alt="DogImage1" />
                    </Card.Image>
                    <Card.Caption>hello world</Card.Caption>
                </Card>
                <Card>
                    <Card.Image>
                        <img src={DogImage1} alt="DogImage1" />
                    </Card.Image>
                    <Card.Caption>hello world</Card.Caption>
                </Card>
            </TileGrid>
        </>

    )
}

export default Cards;
