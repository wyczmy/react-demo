import React from 'react';
import {connect} from 'react-redux';
function Sum(props){
    const {addList} = props
    return <div>{
        Number(addList[0]) + Number(addList[1]) + Number(addList[2]) + Number(addList[3])
    
    }</div>
}
export default connect(data=>data.addSum)(Sum);
