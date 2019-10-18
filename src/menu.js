import React, { Component } from 'react';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = ({ 
            etat:false

        
         })

    }
    
    render() { 
        return(<div className='menu_bar'>
        <ul className='menu_ul'>
        <li className='active'><a href="">HOME</a></li>
        <li onClick={()=>this.setState({etat:!this.state.etat})}>SERVICES
        <div className='sub_menu' >
        <ul style={this.state.etat?{display:"block",background:"white",position:"absolute",left:"-30px",width:"300px" ,color:"#77b5fe"}:{display:"none"}}>
        <li><a className="item" href="">For entrepreneurs</a></li>
        <li><a className="item" href="">For students</a></li>
        <li><a className="item" href="">For hobbyists</a></li>
        </ul>
        </div>
        </li>
        <li><a href="">CONTACT</a></li>
        </ul>
        </div>
        );
    }
}
 
export default Menu;
