import React from 'react';
import {connect} from 'react-redux';
import Sum from './sum';

function Item (props){
    const {count,onChange,onAdd} = props;
    return <div>
        <input type="number" value={count} onChange={onChange} />
        <span onClick={onAdd}>add+</span>
    </div>
}

class Add extends React.Component{
    constructor(){
        super();
        this.onChange = this.onChange.bind(this)
        this.onAdd = this.onAdd.bind(this)
        this.resetNum = this.resetNum.bind(this)
    }
    onChange(e,index){
        let list = this.props.addSum.addList
        list.splice(index,1,e.target.value)
        this.props.dispatch({type:'add',payload:list})
    }
    onAdd(e){
        let list = this.props.addSum.addList
        list.splice(e,1,Number(list[e]) + 1 )
        this.props.dispatch({type:'add',payload:list})
    }
    resetNum(){
         this.props.dispatch({type:'INCREMENT_ASYNC'})
    }
    render (){
        const { addSum:{addList} } = this.props;
        console.log('-',this.props)
        return <div>
            {
                addList.map((item,index)=>{
                   return <Item key={index} count={item} onChange={(e)=>{this.onChange(e,index)}} onAdd={()=>{this.onAdd(index)}}  />
                })

            }
            <Sum />
            <div onClick={this.resetNum}>2s后重置数据</div>
            <div onClick={()=>{this.props.history.push({pathname:'/tab1/2'})}}>跳转tab2</div>
        </div>
    }
}

export default connect(data => data)(Add);