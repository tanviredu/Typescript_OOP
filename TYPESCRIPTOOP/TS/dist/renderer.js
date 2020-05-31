var Renderer = /** @class */ (function () {
    // stop the class for initialize
    function Renderer() {
    }
    Renderer.render = function (html) {
        Renderer.viewTemplate.innerHTML = html;
    };
    return Renderer;
}());
export { Renderer };
//# sourceMappingURL=renderer.js.map