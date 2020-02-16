<template>
    <header>
        <router-link class="logo" :to="'/'"><h2>Forcelate Test Task</h2></router-link>
        <nav>
            <ul class="nav__links">
                <li><router-link :to="'/dashboard'">Dashboard</router-link></li>
                <li><router-link :to="'/1'">Instances</router-link></li>
                <li><router-link :to="'/2'">Pairs</router-link></li>
                <li><router-link :to="'/3'">About</router-link></li>
                <li><router-link :to="'/4'">Help</router-link></li>
                <li><router-link :to="'/5'">Contact</router-link></li>
            </ul>
        </nav>
         <router-link :to="'/profile'"><v-icon class="user-icon" name="user" /></router-link>
        <router-link class="sign-out" :to="'/sign-out'"><button>LogOut <v-icon name="sign-out-alt" /></button></router-link>
    </header>
</template>

<style scoped>
li, a, button {
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
}

.logo {
    cursor: pointer;
    margin-right: auto;
}

.nav__links {
    list-style: none;
    margin: 0px 20px;
}

.nav__links li {
    display: inline-block;
    padding: 0px 20px;
}

.nav__links li a {
    transition: all .2s ease-out 0s;
    color: #858696;
}

.nav__links li a:hover,
.nav__links li .router-link-active {
    color: #edf0f1;
}

.nav__links li .router-link-active {
    padding-bottom: 4px;
    border-bottom: 2px solid #35f1ad;
}

.sign-out svg {
    background-color: transparent;
    vertical-align: middle;
    margin-bottom: 2px;
}

.user-icon {
    height: 30px;
    width: 60px;
    color: rgba(53, 241, 173, 1);
    vertical-align: middle;
}

.user-icon:hover {
    color: rgba(53, 241, 173, .8);
}

button {
    padding: 5px 20px;
    background-color: rgba(53, 241, 173, 1);
    color: #54555f;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all .3s ease 0s;
    word-spacing: .5ch;
}

button:hover {
    background-color: rgba(53, 241, 173, .8);
    color: #000;
}
</style>
