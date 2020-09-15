import React from "react";

class CustomTestInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = (element) => {
      this.textInput = element;
    };
    this.focusTextInput = () => {
      if (this.textInput) {
        this.textInput.focus();
      }
    };
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input type="button" onClick={this.focusTextInput} />
      </div>
    );
  }
}

export default CustomTestInput;
