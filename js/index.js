import {homeComponent} from "./components/home.js";

import {chatDetail} from "./components/chat-detail.js";

let routes = [
    {
        path:"/",
        component:homeComponent
    },
    {
        path:"/chat",
        component:chatDetail
    }
];


let router = new VueRouter({
    routes:routes
});

let app = new Vue({
    el:"#app",
    data:{
        slideName:"slide-left"
    },
    router:router
});