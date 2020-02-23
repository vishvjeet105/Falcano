import React from "react";
import axios from "axios";
import FindFalcanoPlanetDD from "../FindFalcanoPlanetDD";
import FindFalcanoVechile from "../FindFalcanoVechile";
class FindingFalcano extends React.Component {
  state = {
    planets: [],
    vechiles: [],
    selectedPlanet: [],
    selectedVechile: []
  };
  componentDidMount() {
    axios
      .get("https://findfalcone.herokuapp.com/planets")
      .then(response => this.setState({ planets: response.data }))
      .catch(error => console.log(error.response));
    axios
      .get("https://findfalcone.herokuapp.com/vehicles")
      .then(response => this.setState({ vechiles: response.data }))
      .catch(error => console.log(error.response));
  }
  handleDD = palnetSelectedData => {
    console.log("dd click", palnetSelectedData);
    let selectedPlanet = [...this.state.selectedPlanet, palnetSelectedData];
    this.setState({ selectedPlanet: selectedPlanet });
  };
  handleVechileList = vechileSelectedData => {
    console.log("handleVechileList click", vechileSelectedData);
    let selectedVechile = [...this.state.selectedVechile, vechileSelectedData];
    this.setState({ selectedVechile: selectedVechile });
  };
  render() {
    console.log("selectedplanet", this.state.selectedPlanet);
    console.log("selectedVechile", this.state.selectedVechile);
    return (
      <div
        className="finding-falcano-container"
        state={{ display: "flex", flexDirection: "column" }}
      >
        <div
          className="finding-falcano-dd-vechiles"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="select-first">
            <FindFalcanoPlanetDD
              planets={this.state.planets}
              handleDD={this.handleDD}
              ddId={1}
            />
            <FindFalcanoVechile
              vechiles={this.state.vechiles}
              vechileSelectionListId={1}
              handleVechileList={this.handleVechileList}
            />
          </div>
          <div className="select-second">
            <FindFalcanoPlanetDD
              planets={this.state.planets}
              handleDD={this.handleDD}
              ddId={2}
            />
            <FindFalcanoVechile
              vechiles={this.state.vechiles}
              vechileSelectionListId={2}
              handleVechileList={this.handleVechileList}
            />
          </div>
          <div className="select-third">
            <FindFalcanoPlanetDD
              planets={this.state.planets}
              handleDD={this.handleDD}
              ddId={3}
            />
            <FindFalcanoVechile
              vechiles={this.state.vechiles}
              vechileSelectionListId={3}
              handleVechileList={this.handleVechileList}
            />
          </div>
          <div className="select-fourth">
            <FindFalcanoPlanetDD
              planets={this.state.planets}
              handleDD={this.handleDD}
              ddId={4}
            />
            <FindFalcanoVechile
              vechiles={this.state.vechiles}
              vechileSelectionListId={4}
              handleVechileList={this.handleVechileList}
            />
          </div>
          <div className="time-count">Total Time Taken</div>
        </div>
        <button>Find falcano</button>
      </div>
    );
  }
}
export default FindingFalcano;
