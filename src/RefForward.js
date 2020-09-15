import React from 'react'

const ForwardButton = React.forwardRef((props,ref)=>{
    console.log(props)
    return <RefForward forward={ref}  {...props}/>
})

class RefForward extends React.Component {
    render(){
        const {forward,...rest} = this.props;
        return (
            <div>
                <input type="text" ref={forward} defaultValue={rest.value}/>
            </div>
        )
    }

}

export default ForwardButton;