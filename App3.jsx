import React from 'react';
import {connect} from 'react-redux'
import {addStudent,fetchStudent,deleteStudent} from './main.js'

 class App3 extends React.Component{
    constructor(){
        super()
        this.state = {name:"",count:1}
    }

    componentDidMount(){
        this.props.dispatch(fetchStudent())
    }

    handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSave(){
        this.setState({count: this.state.count + 1})
        this.props.dispatch(addStudent(this.state))
    }

    handleDelete(_id){
        if(confirm("delete huh ?")){
            this.props.dispatch({
                type: "DELETE_STUDENT",
                payload: _id
                
            })
        this.props.dispatch(deleteStudent(_id))
        }
    }
    render(){
        return(
            <div>
                <h1>Greeting Bitch</h1>
                <input type="text" name="name" value = {this.state.name} onChange={this.handleChange.bind(this)}/>
                <button onClick={()=>this.handleSave(this.state.count)}>greet</button><br/>
                {this.state.name} | {this.state.count}
                {this.props.students.map((s)=>
                    <li>{s.name}|{s.count}<button onClick ={()=>this.handleDelete(s._id)}>Delete</button></li>
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
