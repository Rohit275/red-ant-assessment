import React, { Component } from "react";
import "./App.css";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'

const styles = {
  root: {
    background: "white"
  },
  input: {
    color: "#2EFF22"
  }
};

class products extends Component {
  state = {
   members: 0,
   relation: [ {Name:'', Relation:'',RelativeName:''}]
  }
   constructor(props) {
    super(props);
    this.incmember = this.incmember.bind(this);
  }

handleChangeInput = (index,event) =>{
  console.log(index,event.target.name)
 }

handleAddFields =() => {
  this.setState.relation([...this.state.relation],{Name:'', Relation:'',RelativeName:''})
}


incmember()
{
  this.setState({ members: this.state.members + 1 })
}
  render() {
     const { classes } = this.props;
    return (
     
     <div style={{ display: 'flex', flexDirection: 'row' }}>
      <br></br>
      <br></br>
  
          <div style={{ width: '100%' }}>
            {this.state.relation.map((relation,index) =>(
              <div key={index}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div  style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{flex:1}}>
                   <h6 style={{fontFamily:"Roboto",fontSize:"30px",fontWeight:"900",marginTop:"40px",marginLeft:"180px"}}>Name</h6>
                  </div>
                  <div style={{flex:1}}>
                     <h6 style={{fontFamily:"Roboto",fontSize:"30px",fontWeight:"900",marginTop:"40px",marginLeft:"80px"}}>Relation</h6>
                  </div>
                  <div style={{flex:1}}>
                     <h6 style={{fontFamily:"Roboto",fontSize:"30px",fontWeight:"900",marginTop:"40px",marginLeft:"10px"}}>Relative Name</h6>
                  </div>
                </div>    
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div  style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{flex:1}}>
                      <input className="member-input" style={{ width: '40%',height:"40%",fontFamily:"Roboto",fontWeight:"500",marginTop:"44px",marginLeft:"130px" }} />
                  </div>
                   <div style={{flex:1}}>
                      <input name="Relation" style={{ width: '40%',height:"40%",fontFamily:"Roboto",fontWeight:"500",marginTop:"44px",marginLeft:"70px" }} />
                  </div>
                  <div style={{flex:1}}>
                      <input name="Relation" style={{ width: '40%',height:"40%",fontFamily:"Roboto",fontWeight:"500",marginTop:"44px",marginLeft:"60px" }} />
                  </div>
                  <IconButton>
                    <RemoveIcon style={{marginTop:"30px"}}/>
                  </IconButton>
                  <IconButton onClick={this.handleAddFields}>
                    <AddIcon style={{marginTop:"30px"}}/>
                  </IconButton>
                  
                </div>
              </div>    
            
        </div>
            )) }
          </div>
        </div>
      );
  }
}
export default products;
