import React from "react";
import ReactDom from "react-dom";
import "./background.css";
import CustomTestInput from "./CustomTestInput";
import ForwardButton from "./RefForward";
import AntdTest from "./AntdTest";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "hello world!",
      inputRef: React.createRef(),
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    if (this.state.inputRef) {
      this.state.inputRef.current.focus();
    }
  }

  render() {
    return (
      <div className="background">
        <AntdTest />
      </div>
      //   <div className="background">
      //     <CustomTestInput />
      //     <ForwardButton value={this.state.value} ref={this.state.inputRef} />
      //     <input type="button" onClick={this.buttonClick} value="Click Me!" />
      //   </div>
    );
  }
}

ReactDom.render(<Background />, document.getElementById("root"));
