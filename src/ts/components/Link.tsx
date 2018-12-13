import React from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal"
};

interface Props {
  page: string;
}
interface State {
  class: string;
}

class Link extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL
    };
  }

  onMouseEnter() {
    this.setState({ class: STATUS.HOVERED });
  }

  onMouseLeave() {
    this.setState({ class: STATUS.NORMAL });
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || "#"}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Link;
