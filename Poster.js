AFRAME.registerComponent("comic", {
    init: function (){
        this.enterLeave()
    },

    enterLeave:function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.el.setAttribute("color", "blue")
        })
        this.el.addEventListener("mouseleave", ()=>{
            this.el.setAttribute("color", "navy")
        })
    }
})