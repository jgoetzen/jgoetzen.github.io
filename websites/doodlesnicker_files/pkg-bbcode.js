/*!
 * cache=true
 * @license Licences are viewable at this URL: http://w.cdn.gaiaonline.com/src/=/e143bb5df5304ae98988a03a4dabca2e-1446-34/pkg-bbcode.js
 */


/*! src/js/bbcode/common.js */
/*jslint browser: true, continue: true, nomen: true, plusplus: true, sloppy: true, indent: 4 */
/*global YAHOO */
(function (YU) {
    YU.Event.onDOMReady(function () {
        YU.Event.on(document.body, "click", function (evt) {
            var target = YU.Event.getTarget(evt),
                elIsButton = function (el) {
                    return el && "object" === typeof el && 1 === el.nodeType && "button" === el.tagName.toLowerCase();
                },
                wrapperClass = "spoiler-wrapper",
                hiddenClass = "spoiler-hidden",
                shownClass = "spoiler-revealed",
                spoilerNode;

            if (!elIsButton(target) && !elIsButton(spoilerNode = YU.Dom.getAncestorByTagName(target, "button"))) {
                return;
            }

            spoilerNode = target;
            if (!YU.Dom.hasClass(target, wrapperClass)) {
                spoilerNode = YU.Dom.getAncestorByClassName(target, wrapperClass);
            }
            if (spoilerNode) {
                if (YU.Dom.hasClass(spoilerNode, hiddenClass)) {
                    YU.Dom.replaceClass(spoilerNode, hiddenClass, shownClass);
                } else {
                    YU.Dom.replaceClass(spoilerNode, shownClass, hiddenClass);
                }
                YU.Event.stopEvent(evt);
            }
        });
    });
}(YAHOO.util));
