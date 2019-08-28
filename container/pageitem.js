import React from 'react';
import {connect} from 'react-redux';

export default connect(data => data)((props) => {
    console.log(props)
    const {num} = props.match.params
    return <div>
        这是第{num}个页面
    </div>
})
