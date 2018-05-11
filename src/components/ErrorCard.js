import React, { Component } from 'react';
import styled from 'styled-components';

class ErrorCard extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 1 };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ opacity: this.state.opacity - 0.01 });
    }, 25);
  }

  render() {
    if (this.state.opacity > 0) {
      return (
        <Wrapper behavior="position" enabled>
          <ErrorView opacity={this.state.opacity}>
            <ErrorText>{this.props.children}</ErrorText>
          </ErrorView>
        </Wrapper>
      );
    } else {
      clearInterval(this.timer);
      return null;
    }
  }
}

const Wrapper = styled.KeyboardAvoidingView`
  width: 100%;
  position: absolute;
  margin-top: 587;
`;

const ErrorView = styled.View`
  flex-direction: row;
  width: 100%;
  height: 80;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: white;
`;

export default ErrorCard;
