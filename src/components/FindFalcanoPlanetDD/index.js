import React from "react";
class FindFalconePlanetDD extends React.PureComponent {
  state = {
    selectedValue: ""
  };
  handlePlanet = value => {
    this.props.handleDD &&
      this.props.handleDD({ ...JSON.parse(value), ddId: this.props.ddId });
  };
  render() {
    console.log(this.state);
    return (
      <form>
      <select onChange={({ target: { value } }) => this.handlePlanet(value)}>
        <option style={{ display: "none" }}>select</option>
        {this.props.planets.length ? (
          this.props.planets.map((planet, i) => (
            <option key={"planet" + i + 1} value={JSON.stringify(planet)}>
              {planet.name}
            </option>
          ))
        ) : (
          <option>No data</option>
        )}
      </select>
      </form>
    );
  }
}
export default FindFalconePlanetDD;
