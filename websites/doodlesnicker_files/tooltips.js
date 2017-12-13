/*!
 * cache=true
 * @license Licences are viewable at this URL: http://w.cdn.gaiaonline.com/src/=/1446/src/js/widgets/tooltips.js
 */


/*! /src/js/widgets/tooltips.js */
"use strict";
/*jslint white: false, browser: true, widget: true, undef: true, newcap: true, immed: true, plusplus: false, nomen: false */
/*global YAHOO, Exception, window, document, GAIA_config, console */
(function () {
    var Y   = YAHOO,
        YU  = Y.util,
        YUD = YU.Dom,
        YUE = YU.Event,
        GAW = Y.namespace('gaia.widgets');
        
        GAW.Tooltips = function (selector, oSpec) {
            var spec = oSpec || {},
                panelEffect = {
                    effect   : YAHOO.widget.ContainerEffect.FADE,
                    duration : 0.125
                },
                tooltip,
                previousContext = null,
                showTimeout,
                hideTimeout,
                delayShowHide = 175,
                config = {
                    "width"           : null,
                    "listenerType"    : 'hover', // or click
                    "root"            : document.body,
                    "preventDefault"  : false,
                    "balloonContentClassName" : "gTooltip-content"
                },
                notch = '<div class="notch">&nbsp;</div>',
                closerCallback;
            
            Y.lang.augmentObject(config, spec, true);
            
            function _getContext() {
                return previousContext;
            }

            function _setContext(obj) {
                previousContext = obj;
            }
                        
            /**
             * Determines which orientation class wass applied.
             */
            function _getOrientationClass(el) {
                var classnames  = el.className,
                    posRegx,
                    matches;
                    
                if (!el._orientation) {
                    posRegx = /((top|bottom|left|right)\-(left|right|top|center|bottom))/;
                    matches = classnames.match(posRegx);
                    el._orientation = (matches) ? matches.shift() : 'bottom-center';
                }

                
                return el._orientation;
            }
            
            function _calculatePosition(orientation, context, satellite) {
                var c = YUD.getRegion(context),
                    s = YUD.getRegion(satellite),
                    x,
                    y,
                    offset = 7; // offset required to calculate the notch.
                    
                switch (orientation) {
                    case "right-top":
                        x = c.right + offset;
                        y = c.top;
                        break;
                    case "right-center":
                        x = c.right + offset;
                        y = c.top - s.height / 2 + c.height / 2;
                        break;
                    case "right-bottom":
                        x = c.right + offset;
                        y = c.bottom - s.height - 2;
                        break;
                    case "bottom-left":
                        x = c.left;
                        y = c.bottom + offset;
                        break;
                    case "bottom-center":
                        x = c.left - s.width / 2 + c.width / 2;
                        y = c.bottom + offset;
                        break;
                    case "bottom-right":
                        x = c.right - s.width;
                        y = c.bottom + offset;
                        break;
                    case "left-top":
                        x = c.left - s.width - offset;
                        y = c.top;
                        break;
                    case "left-center":
                        x = c.left - s.width - offset;
                        y = c.top - s.height / 2 + c.height / 2;
                        break;
                    case "left-bottom":
                        x = c.left - s.width - offset;
                        y = c.bottom - s.height;
                        break;
                    case "top-left":
                        x = c.left;
                        y = c.top - s.height - offset;
                        break;
                    default:
                    case "top-center":
                        x = c.left - s.width / 2 + c.width / 2;
                        y = c.top - s.height - offset;
                        break;
                    case "top-right":
                        x = c.right - s.width;
                        y = c.top - s.height - offset;
                        break;
                }
                
                return {
                    'x' : x,
                    'y' : y
                    };
            }
            
            /**
             * Moves the panel to the proper position, taking into account its
             * height and width.
             * @todo Fix collision detection thinger.
             */
            function _setPosition(orientation, context, panel) {
                var coordinates,
                    pos,
                    x, y,
                    directions,
                    satellite = panel.element,
                    primary,
                    secondary,
                    pRegion,
                    windowOverflow;
                
                pos = _calculatePosition(orientation, context, satellite);
                
                panel.cfg.setProperty("xy", [pos.x, pos.y]);
                
                YUD.addClass(panel.innerElement, orientation);
                
                panel._orientation = orientation;
            }
            
            function _createPanel() {
                var panel,
                    closer;
                    
                panel = new YAHOO.widget.Panel(YUD.generateId(), {
                    close : false,
                    visible : false,
                    effect : panelEffect,
                    constraintoviewport : false,
                    draggable : false,
                    underlay : 'none'
                });
                
                if (spec.listenerType === 'click') {
                    closer = document.createElement('div');
                    closer.onclick   = closerCallback;
                    closer.className = "closer";
                    
                    panel.setHeader(closer);
                }
                
                panel.setFooter(notch);
                
                panel._showing = false;
                
                YUD.addClass(panel.element, "gaia-tooltip-container");
                YUD.addClass(panel.innerElement, "gaia-tooltip");
                
                if (config.width) {
                    YUD.setStyle(panel.innerElement, 'width', config.width + "px");
                }
                
                panel.beforeShowEvent.subscribe(function () {
                    panel._showing = true;
                });
                
                panel.beforeHideEvent.subscribe(function () {
                    panel._hiding = true;
                });
                
                panel.hideEvent.subscribe(function () {                    
                    panel._showing = false;
                    panel._hiding = false;
                    panel.title = panel._content;
                    
                    YUD.removeClass(panel.innerElement, panel._orientation);
                    
                    // If there is a callback defined then execute it
                    if (panel.hasOwnProperty('_onHideCompleteCallback')) {
                        panel._onHideCompleteCallback();
                    }
                });
                
                panel.cfg.setProperty('zIndex', 200);
                
                panel.render(document.body);
                
                return panel;
            }
            
            function _getTooltip() {
                if (tooltip === undefined) {
                    tooltip = _createPanel();
                }
                return tooltip;
            }
            
            function _showTooltip(context, tt, scope) {
                var self = scope,
                    orientation = _getOrientationClass(context),
                    tag = context.tagName.toLowerCase(),
                    id,
                    el,
                    body;
                
                context.region = YUD.getRegion(context);

                YUD.generateId(context, 'gaia-tooltip-context-');
                
                // Determine balloonCallout id.
                id = context.rel || (function () {
                    var href = context.href || null;
                    return (tag === 'a' && href && href.indexOf("#") > -1) ? href.split("#")[1] : null;
                }());
                
                el = (id) ? YUD.get(id) : null;
                
                if (el) {
                    body = el.innerHTML;
                } else {
                    if (context.title) {
                        context._content = context.title;
                        context.title = "";
                    }
                    
                    body = context._content;
                }
                
                tt.setBody(body);
                
                _setPosition(orientation, context, tt);
                
                tt.show();
                
                previousContext = context;

            }
            
            function _hideTooltip(context, tt, scope) {
                var self = scope;
                tt.hide();
            }
            
            /**
             * Single delegated click handler for hiding and showing the Tooltip.
             */
            function _onClickTooltipDelegate(evt, obj, container) {
                var target      = obj,
                    prevContext = _getContext(),
                    panel       = _getTooltip(),
                    tag         = target.tagName.toLowerCase();
                
                if (tag === "a" || config.preventDefault) {
                    YUE.preventDefault(evt);
                }
                
                YUD.generateId(target, 'gTooltip-context-');
                
                // If there is a previous clicked context, then check to see it's not the same one that was clicked.
                if (prevContext && prevContext.id !== target.id && panel._showing) {
                    panel._onHideCompleteCallback = function () {
                        _showTooltip(target, panel, this);
                        panel._onHideCompleteCallback = null;
                    };
                }

                if (panel._showing) {
                    _hideTooltip(target, panel, this);
                } else if (tag !== "input" || (tag === "input" && target.checked)) {
                    _showTooltip(target, panel, this);
                }
            }
            
            function _onMouseEnterTooltipDelegate(evt, obj, container) {
                var self = this,
                    tt   = _getTooltip();
                
                clearTimeout(showTimeout);
                
                showTimeout = setTimeout(function () {
                    if (tt._hiding) {
                        // If tooltip is showing then xxset a callback to the 
                        // hide event.
                        tt._onHideCompleteCallback  = function () {
                            _showTooltip(obj, tt, self);
                            // Destroy event callback, we only want to execute
                            // this callback only if something is hiding.
                            tt._onHideCompleteCallback  = null;
                        };
                    } else {
                        _showTooltip(obj, tt, self);
                    }
                }, delayShowHide);
            }
            
            function _onMouseLeaveTooltipDelegate(evt, obj, container) {
                var self   = this,
                    tt     =  _getTooltip(),
                    target = YUE.getTarget(evt);
                    
                clearTimeout(showTimeout);
                
                _hideTooltip(target, tt, self);
            }
            
            // We defined this lower on the page to make sure all the functions 
            // it's using have been defined.
            
            closerCallback = function () {
                var context = _getContext(),
                    panel   = _getTooltip();
                _hideTooltip(context, panel);
            };
            
            if (config.listenerType === "click") {
                YUE.delegate(config.root, "click", _onClickTooltipDelegate, selector, this, true);
                YUE.on(window, 'resize', function () {
                    var self     = this,
                        context  = _getContext(),
                        tt       = _getTooltip();
                    if (tt._showing) {
                        _showTooltip(context, tt, self);
                    }
                });
            } else if(config.listenerType === "hover") {
                YUE.delegate(config.root, "mouseenter",  _onMouseEnterTooltipDelegate, selector, this, true);
                YUE.delegate(config.root, "mouseleave",  _onMouseLeaveTooltipDelegate,  selector, this, true);
            } else {
                alert('Invalid listener type.');
            }
            
            if (config.balloonContentClassName) {
                YUD.getElementsByClassName(config.balloonContentClassName, null, config.root, function (el) {
                    YUD.addClass(el, "yui-hidden");
                });
            }
            
            return {
                setConfig : function (o) {
                    var key;
                    for (key in o) {
                        if (o.hasOwnProperty(key)) {
                            config[key] = o[key];
                        }
                    }
                }
            };
        };
        
}());