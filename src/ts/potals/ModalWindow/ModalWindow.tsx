import React from 'react';
import ReactDOM from 'react-dom';

const styles = require('./styles.sass');

interface Props {
  open?: boolean;
}
interface State {}
class ModalWindow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: true,
    };
    this.closeEvent = this.closeEvent.bind(this);
  }

  closeEvent() {
    this.setState({ open: false });
  }

  render() {
    if (!open) return null;
    const node = (
      <div>
        <button onClick={this.closeEvent}>x</button>
        <div>{this.props.children}</div>
      </div>
    );
    ReactDOM.createPortal(node, document.body);
  }
  // private componentWillMount() {}
  // private componentDidMount() {}
  // private componentWillUpdate() {}
  // private componentDidUpdate() {}
  // private componentWillUnmount() {}
}

export default ModalWindow;
