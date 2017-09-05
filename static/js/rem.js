~(function() {

    var EventUtil = {
        addHandler: function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        }
    };
    var eventHandler = 'orientationchange' in window ? 'orientationchange' : 'resize';

    console.log(eventHandler);
    EventUtil.addHandler(window, eventHandler, remChange);
    // EventUtil.addHandler(window, 'resize', remChange);
    remChange();

    function remChange() {
        var viewHeight = document.documentElement.clientWidth;
        viewHeight = viewHeight > 640 ? 640 : (viewHeight < 320 ? 320 : viewHeight);
        document.documentElement.style.fontSize = viewHeight / 6.4 + 'px';
    }

})();