let homeHeader = {
    props:["index"],
    computed:{
        title(){
            if(this.index==1){
                return "微信";
            }

            if(this.index==2){
                return "通讯录";
            }

            if(this.index==3){
                return "发现";
            }
        }
    },
    template:`
    <div class="header" :class="{'white':index==4}">
        <div class="header-title">{{title}}</div>
        <div>
            <span class="icon iconfont" v-if="index!=4" style="font-size:18px;">&#xe62b;</span>
            <span class="icon iconfont" v-if="index!=4">&#xe616;</span>
            <span class="icon iconfont" v-if="index==4">&#xe6e7;</span>
        </div>
    </div>
    `
};

export {homeHeader};