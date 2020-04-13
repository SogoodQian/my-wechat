let chatDetail = {
    template:`
        <div class="page">
            <div class="chat-header">聊天头部</div>
            <div class="content">{{$route.query.name}}</div>
            <div class="chat-footer">聊天尾部</div>
        </div>
    `
};

export {chatDetail};