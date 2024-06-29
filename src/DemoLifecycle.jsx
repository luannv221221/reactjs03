import React from "react";
class DemoLifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "Nguyen Van A"
        };
        this.hanldeClick = this.hanldeClick.bind(this);
        console.log("Giai đoạn initialization");
    }
    hanldeClick() {
        this.setState({ fullName: "Demo" })
    }
    // componentWillMount() {
    //     console.log("componentWillMount");
    // }
    componentDidMount() {
        console.log("componentDidMount");
    }
    render() {
        console.log("Hàm render chạy");
        return (<>
            <h1>Xin Chaof</h1>
            <h1>{this.state.fullName}</h1>
            <button onClick={this.hanldeClick}>Click</button>
        </>)
    }
}
export default DemoLifecycle;