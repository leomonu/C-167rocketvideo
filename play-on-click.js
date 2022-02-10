AFRAME.registerComponent("play-on-click", {
     //Add code here
    schema:{
        isPlaying:{type:"boolean",default:false}

    },
    init:function(){
        this.video=this.el.getAttribute("material").src
        this.onclick()
        
    },
    play:function(){
        window.addEventListener("click",this.onclick)
    },
    onclick:function(){
        if(!this.video){
            return
        }
        var rocketplay=this.el.getAttribute("play-on-click").isPlaying

       this.el.object3D.visible=true
       if(!rocketplay){
            this.el.setAttribute("play-on-click",{
                isPlaying:true,
            })
            this.video.play()
        } 
        else{
            this.el.setAttribute("play-on-click",{
                isPlaying:false
            })
            this.video.pause()
        }
        }
    });
