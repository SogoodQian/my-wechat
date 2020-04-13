import {homeHeader} from "./home-header.js";

import {wechat} from "./wechat.js";
import {contact} from "./contact.js";
import {discover} from "./discover.js";
import {me} from "./me.js";

let homeComponent = {
    template:`
    <div class="page">
        <home-header :index="index"></home-header>
        
        <component :is="comName"></component>

        <div class="footer">
            <div class="footer-btn" :class="{'active':index==1}" @click="change(1)">
                <span class="iconfont">&#xe743;</span>
                <span>微信</span>
            </div>
            <div class="footer-btn" :class="{'active':index==2}" @click="change(2)">
                <span class="iconfont">&#xe655;</span>
                <span>通讯录</span>
            </div>
            <div class="footer-btn" :class="{'active':index==3}" @click="change(3)">
                <span class="iconfont">&#xe636;</span>
                <span>发现</span>
            </div>
            <div class="footer-btn" :class="{'active':index==4}" @click="change(4)">
                <span class="iconfont">&#xe626;</span>
                <span>我</span>
            </div>
        </div>
    </div>
    `,

    data(){
        return {
            index:1,
            comName:"wechat"
        }
    },

    methods:{
        change(index){
            this.index = index;
            if(index==1){
                this.comName = "wechat";
            }
            if(index==2){
                this.comName = "contact";
            }
            if(index==3){
                this.comName = "discover";
            }
            if(index==4){
                this.comName = "me";
            }
        }
    },
    components:{
        "home-header":homeHeader,
        "wechat":wechat,
        "contact":contact,
        "discover":discover,
        "me":me
    }

};

export {homeComponent};