import Tile from "../components/Tile.tsx";
// import DogImage1
//     from "../../public/images/placeholders/dogs/beagle-puppy-running-through-a-yard-with-a-ball-in-his-mouth.jpg";
import TileGrid from "../components/TileGrid.tsx";
import {TileOrientation} from "../lib/enums.ts";

const dogImage = "/public/images/placeholders/dogs/beagle-puppy-running-through-a-yard-with-a-ball-in-his-mouth.jpg";

function Cards () {
    return (
        <>
            <h2>Let's play some cards</h2>
            <TileGrid>
                <TileGrid.Cell
                    columns={2}
                >
                    <Tile orientation={TileOrientation.ROW}>
                        <Tile.Image>
                            <img src={dogImage} alt="dogImage" />
                        </Tile.Image>
                        <Tile.Caption>hello world</Tile.Caption>
                    </Tile>
                </TileGrid.Cell>

                {/*<Tile>
                    <Tile.Image>
                        <img src={dogImage} alt="dogImage" />
                    </Tile.Image>
                    <Tile.Caption>hello world</Tile.Caption>
                </Tile>*/}

                <TileGrid.Cell>
                <Tile>
                    <Tile.Image>
                        <img src={dogImage} alt="dogImage" />
                    </Tile.Image>
                    <Tile.Caption>hello world</Tile.Caption>
                </Tile>
                </TileGrid.Cell>
                <TileGrid.Cell>
                <Tile>
                    <Tile.Image>
                        <img src={dogImage} alt="dogImage" />
                    </Tile.Image>
                    <Tile.Caption>hello world</Tile.Caption>
                </Tile>
                </TileGrid.Cell>
                <TileGrid.Cell>
                <Tile>
                    <Tile.Image>
                        <img src={dogImage} alt="dogImage" />
                    </Tile.Image>
                    <Tile.Caption>hello world</Tile.Caption>
                </Tile>
                </TileGrid.Cell>
                <TileGrid.Cell>
                <Tile>
                    <Tile.Image>
                        <img src={dogImage} alt="dogImage" />
                    </Tile.Image>
                    <Tile.Caption>hello world</Tile.Caption>
                </Tile>
                </TileGrid.Cell>
            </TileGrid>
        </>

    )
}

export default Cards;
