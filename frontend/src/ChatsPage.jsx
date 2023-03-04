import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced"



const ChatsPage =(props)=>{
    const chatProps =useMultiChatLogic(
        "a74f889f-20d6-4713-8415-184844923858",
        props.user.username,
        props.user.secret)
    return(
        <div style={{height: '100vh'}}>
<MultiChatSocket {...chatProps} />
<MultiChatWindow {...chatProps} style={{height: '100%'}} />


        </div>
    )
}


export default ChatsPage