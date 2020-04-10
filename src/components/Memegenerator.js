import React from "react";
import Form from "./Form";
import MemeText from "./MemeText";

class Memegenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state.allMemeImgs[1]);
  }

  handleClick(event) {
    event.preventDefault();
    const allMemes = this.state.allMemeImgs;
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
    const image = randomMeme.url;
    this.setState({
      randomImg: image,
    });
  }

  render() {
    return (
      <div className="container">
        <Form
          data={this.state}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />

        <MemeText data={this.state} />
      </div>
    );
  }
}

export default Memegenerator;
