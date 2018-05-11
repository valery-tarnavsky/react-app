import  React from 'react';

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
    };

    render(){
        return (
           <div className="form-group">
                <input className="form-group__item" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} onChange={this.handleChange}/>
           </div>
        )
    }
}

export default Input;