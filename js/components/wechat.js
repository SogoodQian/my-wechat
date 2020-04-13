let wechat = {
    data(){
        return {
            list:[
                {
                    title:"蒋方方",
                    avatar:"images/3.jpeg",
                    desc:"是来扩大飞机啊啊，；势力扩大解放，塑料袋放进,螺丝扣搭街坊是",
                    time:"09:25",
                    isShield:false
                },
                {
                    title:"傻吊",
                    avatar:"images/4.jpeg",
                    desc:"士大夫士大夫",
                    time:"10:25",
                    isShield:true
                },
                {
                    title:"remix",
                    avatar:"images/6.jpeg",
                    desc:"手动阀",
                    time:"11:25",
                    isShield:true
                },
                {
                    title:"阿毛",
                    avatar:"images/7.jpeg",
                    desc:"你好啊",
                    time:"13:25",
                    isShield:false
                },
                {
                    title:"阿斯蒂芬",
                    avatar:"images/9.jpeg",
                    desc:"你好啊",
                    time:"09:25",
                    isShield:true
                },
                {
                    title:"阿斯蒂芬",
                    avatar:"images/10.jpeg",
                    desc:"你好啊",
                    time:"09:25",
                    isShield:true
                },
                {
                    title:"法国",
                    avatar:"images/11.jpeg",
                    desc:"你好啊",
                    time:"09:25",
                    isShield:true
                },
                {
                    title:"蒋方方",
                    avatar:"images/3.jpeg",
                    desc:"是来扩大飞机啊啊，；势力扩大解放，塑料袋放进,螺丝扣搭街坊是",
                    time:"09:25",
                    isShield:false
                },
                {
                    title:"傻吊",
                    avatar:"images/4.jpeg",
                    desc:"士大夫士大夫",
                    time:"10:25",
                    isShield:true
                },
                {
                    title:"remix",
                    avatar:"images/6.jpeg",
                    desc:"手动阀",
                    time:"11:25",
                    isShield:true
                },
                {
                    title:"阿毛",
                    avatar:"images/7.jpeg",
                    desc:"你好啊",
                    time:"13:25",
                    isShield:false
                },
                {
                    title:"阿斯蒂芬",
                    avatar:"images/9.jpeg",
                    desc:"你好啊",
                    time:"09:25",
                    isShield:true
                },
                {
                    title:"阿斯蒂芬",
                    avatar:"images/10.jpeg",
                    desc:"你好啊",
                    time:"09:25",
                    isShield:true
                },
                {
                    title:"法国",
                    avatar:"images/11.jpeg",
                    desc:"你好啊",
                    time:"09:25",
                    isShield:true
                }
            ]
        }
    },
    template:`
        <div class="content">
            <div class="chat-item" v-for="item in list" @click="toChatDetail(item)">
                <div class="chat-avatar">
                    <img :src="item.avatar">
                </div>
                <div class="chat-content">
                    <div class="chat-title-wrap">
                        <div class="chat-title">{{item.title}}</div>
                        <div class="chat-time">{{item.time}}</div>
                    </div>
                    <div class="chat-text-wrap">
                        <div class="chat-text">{{item.desc}}</div>
                        <div class="chat-icon" v-if="item.isShield">
                            <span class="iconfont">&#xe60f;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    methods:{
        toChatDetail(item){
            this.$router.push({
                path:"/chat",
                query:{
                    name:item.title
                }
            });
        }
    }
};

export {wechat};
