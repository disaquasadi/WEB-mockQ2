import React from 'react';
import Hello from './Hello.jsx'
import {connect} from 'react-redux'
import {addStudent} from './main.js'

 class App3 extends React.Component{
    constructor(){
        super()
        this.state = {name:"",count:0}
    }

    handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSave(){
        this.setState({count: this.state.count + 1})
        this.props.dispatch(addStudent({name: this.state.name}))
    }

    handleDelete(name){
        if(confirm("delete huh ?")){
            this.props.dispatch({type: "DELETE_STUDENT",payload: name})
        }
    }
    render(){
        return(
            <div>
                <h1>Greeting Bitch</h1>
                <input type="text" name="name" value = {this.state.name} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleSave.bind(this)}>greet</button><br/>
                {this.state.name} <br/>
                {this.state.count}
                {this.props.students.map((s)=>
                    <li>{s.name}|<a onClick ={()=>this.handleDelete(s.name)}>Delete</a></li>
                )}
            </div>
        )
    }

}
function mapStateToProps(centralState){
    return {
        students: centralState.students
    }
}
export default connect(mapStateToProps)(App3)
