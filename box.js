AFRAME.registerComponent("move", {
    schema: {
        moveX: { type: "number", default: 1 }
    },
    init: function () {
        console.log(this.data.moveX);
    },
    tick: function () {
        this.data.moveX += 0.01
        var position = this.el.getAttribute("position")
        position.x = this.data.moveX
        position.y += 0.01
        position.z -= 0.01
        var rotation = this.el.getAttribute("rotation")
        rotation.x++
        rotation.y += 0.01
        rotation.z -= 1
        this.el.setAttribute("rotation", { x: rotation.x, y: rotation.y, z: rotation.z })
        this.el.setAttribute("position", { x: position.x, y: position.y, z: position.z })
        console.log(this.data.moveX)
    }
})
