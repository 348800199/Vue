<template>
    <div>
        <NavList /> 
        <div class="left">   
                课程页面  
            <div class="top"> 
                <ul>
                    <li><router-link to="java" >java</router-link></li>
                    <li><router-link to="web">web</router-link></li>
                    <li>python</li>
                </ul>
            </div>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
  
    </div>
</template>

<script>
    import NavList from "@/components/NavList";
    export default {
        name: "course",
        data() {
            return {};
        },
        components: {
            NavList
        }
    };
</script>

<style scoped>
.top{
    margin-top:20px 
};
ul{
    list-style: none;
}
.top ul li {
    padding: 5px
}
.left,.right{
    float: left;
}
.right{
    margin-left: 50px;
}

</style>


