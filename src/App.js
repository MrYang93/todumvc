import React from 'react';


import Todolist from './components/Todolist';
import TodoControl from './components/TodoControl';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      inputValue: '',
      data: []
    }
    visible: 'ALL'
  }

  handleFilter(visible){
    console.log(visible);
    this.setState({visible: visible})
  }

  handleInput(e){
    this.setState({inputValue: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    let newItem = this.state.inputValue.trim();//trim()方法是去掉首位的空格
    if (newItem.length===0) {
      alert('输入内容不能为空')
    }else{
      // this.state.data.push(newItem);
      // this.setState({data: this.state.data}) //尽量不更改this.state 的属性值
      let newTodo = {
        text: newItem,
        completet: false,
        id: new Date().getTime()
      }
      this.setState({
        data: [...this.state.data,newTodo],
        inputValue:''
      })
    }
    this.setState({inputValue:''})
  }

  myFiindIndex(id){
    return this.state.data.findIndex(item => item.id===id);
  }

  handleCompleted(id){
    console.log(index);
    let index = this.myFiindIndex(id);
    this.state.data[index].completed = !this.state.data[index].completed;
    this.setState({data: this.state.data})
  }

  handleRemove(id){
    let index = this.myFiindIndex(id);
    this.state.data.splice(index,1);
    this.setState({data:this.state.data})
  }

  componentWillMount(){
    if (localStorage.todos) {
      this.setState({data: JSON.parse(window.localStorage.getItem('todos') || '[]') })
    }
  }

  render(){
    localStorage.setItem('todos',JSON.stringify(this.state.data))
    let styles={
      root: {
        maxWidth: '400px',
        margin: '0 auto',
      },
      inputSty: {
        width: '100%'
      }
    }

    let showData;
    switch(this.state.visible){
      case 'ACTIVE' :
        showData = this.state.data.filter( item => !item.completed );
        break;
      case 'COMPLETED':
        showData = this.state.data.filter( item => item.completed );
        break;
      default:
        showData = this.state.data
    }

    return(

      <div style={styles.root}>

        <h1>TODO</h1>

        <form onSubmit={this.handleSubmit.bind(this)} >

          <input style={styles.inputSty} type='text' value={this.state.inputValue}
            onChange={this.handleInput.bind(this)}
          />

          <button>ADD
            #{this.state.data.length}
          </button>
        </form>

        <Todolist data={showData}
          handleCompleted = {this.handleCompleted.bind(this)}
          handleRemove = {this.handleRemove.bind(this)}
        />
        <TodoControl handleFilter = {this.handleFilter.bind(this)}
          visible= {this.state.visible} />
      </div>
    )
  }
}
export default App;
