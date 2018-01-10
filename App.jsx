// import React from 'react'
// import Hello from './Hello.jsx'
// import {connect} from 'react-redux'
// import {addStudent} from './main.js'
// class App extends React.Component{

//     constructor(){
//         super()
//         this.state = {
//              name: "",
//              count: 0
//         }
//     }
//     handleChange(e){
//         var change = {}
//         change[e.target.name] = e.target.value
//         this.setState(change)
//     }
//     add(){
//         this.setState({count: this.state.count + 1})
//         this.props.dispatch(addStudent({
//             name: this.state.name
//         }))
//     }
//     handleDelete(name){
//         if(confirm('Do you want to delete?')){
//             this.props.dispatch({type: 'DELETE_STUDENT', 
//             payload: name })  
//         }
//     }
//     resetState(){
//         this.setState({count: this.state.count = 0})
//     }
//     // handleClick(click){
//     //     click = click + 1
//     //     this.setState({count: click})
//     // }

//     render(){
//         return(
//         <div>
//         <input type="text" name='name' value={this.state.name} onChange={this.handleChange.bind(this)}
//         />
//         <button onClick={this.add.bind(this)}>Add a student</button> <br/>
//         <button onClick={this.resetState.bind(this)}>reset</button>
//         <div>{this.state.count}</div>

//           {this.props.students.map((s)=>
//                 <li>
//                        {s.name} 
//                        | <a onClick={()=>this.handleDelete(s.name)}>Delete</a>
//                   </li>
              
//         )}
//         </div>
//         )
//     }
// }
// function mapStateToProps(centralState){
//     return {
//         students: centralState.students
//     }
// }
// export default connect(mapStateToProps)(App)