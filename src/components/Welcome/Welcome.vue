<template>
    <div id="welcome">
        <div id="greeting_left">
            <h1>Hejsan!</h1>
            <p>einer ist Erik,<br>
            Vater, Mathematiker, Redner,
            Modellierer, operativer Leiter,
            Projektmanager<br>
            und vieles noch
            </p>
        </div>
        <div id='greeting_right'>
            <img id="profile_bullet" src="~@/assets/ejk.jpg">
        </div>
    </div>
</template>

<style scoped>
#welcome {
    padding: 0;
    background-color: rgba(30, 30, 30, 0.75);
    filter: grayscale(250);
    width: 50vw;
    height: 50vh;
    position: absolute;
    left: 40vw;
    top: 40vh;
}

#profile_bullet {
   margin-top: 10vh;
   margin-left: 10vw;
   border-radius: 50%;
   width: 35%; 
}

#greeting_left {
    float: left;
    max-width: 40%;
}

#greeting_right {
}

h1 {
    font-size: 40pt;
    margin-left: 2vw;
    color: rgb(100, 100, 100); 
}

p {
    font-size: 15pt;
    margin-left: 2vw;
    max-width: 66vw;
    color: rgb(150, 150, 150); 
}
</style>