import React, { ChangeEvent, FormEvent } from 'react';
import TextArea from '../components/atoms/TextArea';
import { hot } from 'react-hot-loader';

interface Props {}
interface State {
  message: string;
}
@hot(module)
class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { message: 'sample' };
    this.eventChange = this.eventChange.bind(this);
  }

  eventChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ message: event.currentTarget.value });
    console.log(this.state.message);
  }

  render() {
    return (
      <div>
        <TextArea value={this.state.message} eventChange={this.eventChange} />
      </div>
    );
  }
}

export default Index;
