const { createApp } = Vue;

createApp({
    data(){
        return{
            message: 'Hello Vue!',
            textColor: 'red-underlined'
        }
    }
    

}).mount('#app');