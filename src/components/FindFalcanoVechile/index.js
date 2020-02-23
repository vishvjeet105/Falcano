import React from "react";

class FindFalcanoVechile extends React.PureComponent {
  state = {
    vechileSelected: []
  };
  handleVechile = event => {
    let vechileSelected = [
      ...this.state.vechileSelected,
      {
        ...JSON.parse(event.target.value),
        vechileSelectionListId: this.props.vechileSelectionListId
      }
    ];
    this.setState({
      vechileSelected: vechileSelected
    });
    this.props.handleVechileList({
      ...JSON.parse(event.target.value),
      vechileSelectionListId: this.props.vechileSelectionListId
    });
  };
  render() {
    console.log("props", this.props, "state", this.state);
    const vechileSelected = this.state.vechileSelected;
    return (
      <form>
      <div
        className="vechiles-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {this.props.vechiles.length
          ? this.props.vechiles.map((vechile, i) => (
              <label key={"vechile" + i + 1}>
                <input
                  type="radio"
                  name="vechile"
                  value={JSON.stringify(vechile)}
                  onClick={this.handleVechile}
                />
                {`${vechile.name} (${vechile.total_no})`}
              </label>
            ))
          : ""}
      </div>
      </form>
    );
  }
}
export default FindFalcanoVechile;
