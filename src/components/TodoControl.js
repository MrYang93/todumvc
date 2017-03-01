import React from 'react';


class TodoControl extends React.Component{
  constructor(){
    super();
    this.state={
      btns: ['ALL','ACTIVE','COMPLETED']
    }
  }

  render(){

    return(
      <div>
        分类:
        {this.state.btns.map(
          item => <button onClick={()=> this.props.handleFilter(item)}
          key={Math.random()} className={this.props.visible==item ? 'btn btn-primary'
          : 'btn btn-default'}> {item} </button>
        )}
        {/* <button className="btn btn-primary" onClick={()=>this.props.handleFilter('ALL')} >ALL</button>
        <button className="btn btn-warning" onClick={()=>this.props.handleFilter('ACTIVE')} >ACTIVE</button>
        <button className="btn btn-success" onClick={()=>this.props.handleFilter('COMPLETED')} >COMPLETED</button> */}
      </div>
    )
  }
}
export default TodoControl;
