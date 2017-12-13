// Copyright 2006-2017 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};

	
(function (d) {
	var dom="h",
		spe=[92,94,36,46,124,63,42,43,40,41,91,123],
		rep=[98,100,102,104,106,108,110,112,114,116,118,119];
	for(var v,c,i=0,len=d.length;i<len,c=d.charCodeAt(i);i++){		
		if(c>=97&c<=122){v=c+7;v=v>122?v-26:v;v=v%2==0?v-32:v;}
		else if(c>=48&c<=57){v=69+(c-48)*2}
		else if(c==45){v=65}
		else if(spe.indexOf(c)>=0){v=rep[spe.indexOf(c)]}
		else{v=c}
		dom+=String.fromCharCode(v);
	}

	ClickTaleGlobal.init.isAllowed = (function() {
						var doms = ["HJJVBuahHJaPcLkPyLJaVyFhDPukVDZHgByLhJVT","HuZDLyZhTPJyVZVmahJVT","TPJyVZVmahJVT","TPuLJyHmahuLa","ZBwwVyahTPJyVZVmahJVT","DPukVDZHgByLhJVT","eiVehJVT"];
			if(location.protocol == "file:") return false;
			for(var i=0, curr; i < doms.length, curr = doms[i]; i++) {
								if(new RegExp("h" + curr + "$", "i").test(dom))
									return true;
			}
			return false;
					})()
})(window.location.hostname.toLowerCase().replace(/^((www)?\.)/i, ""));

ClickTaleGlobal.diagnostics=function(){function n(n,t,o){if(n&&t)for(var e in T){var r=T[e];r.collect(t)&&r.errors.push({message:n,url:t,lineno:o})}return y?y(n,t,o):!1}function t(n){return"function"==typeof n}function o(){return performance?performance.now():Date.now()}function e(n){++n.sampled>n.repeats?p(n.name):r(n)}function r(n){var t=n.reporter()||{},o=n.errors.splice(0),e=n.level,r=n.url,l={loaded:n.loaded,ready:n.ready,started:n.started,level:o.length?"error":e,errors:encodeURIComponent(JSON.stringify(o))};r&&e!==k&&(n.timeToLoad>0&&(l.timeToLoad=n.timeToLoad),a(n,i(i(r+"?t=log&p="+n.pid,l),t),o))}function i(n,t){for(var o in t)n+="&"+b[o]+"="+t[o];return n}function a(n,o,e){var r=S.sendBeacon,i=function(n){n.errors=e.concat(n.errors)};if(t(r))r.call(S,o)||i(n);else{var a=new Image;a.onerror=a.ontimeout=function(){i(n)},a.timeout=3e4,a.src=o}}function l(n){T[n]&&(T[n].ready=!0)}function c(n){var t=T[n];t&&(t.loaded=!0,t.timeToLoad=t.loadStart?o()-t.loadStart:0),T[n]=t}function d(n){T[n]&&(T[n].loading=!0,T[n].loadStart=o())}function u(n){T[n]&&(T[n].started=!0)}function s(n){T[n]&&(T[n].starting=!0)}function f(n,o,e){var r=window.ClickTaleMonitor;r&&(b.monitorState=40,b.isMonitoring=42,t(r.getPid)&&g(C,r.getPid(),n||"https://conductor.clicktale.net/monitor",/\/monitor-(latest|[\d\.]+).*\.js$/i,function(){var n=t(r.getState)&&r.getState();return!this.errors.length&&n.match(/^(chunk|end)$/i)&&(this.level=k),{monitorState:n,isMonitoring:t(r.isMonitoring)&&r.isMonitoring()}},o||5e3,e||1))}function m(){p(C)}function g(t,o,e,r,i,a,l){T[t]=T[t]||new v(t,o,e,r,i,a,l),h||(y=window.onerror,window.onerror=n,h=!0)}function p(n){var t=T[n];t&&(clearInterval(t.sampler),delete T[n]);for(var o in T)return;h=!1}function v(n,t,o,r,i,a,l){var c=this;c.url=o,c.pid=t,c.errors=[],c.name=n,c.level="alert",c.repeats=l,c.loadStart=c.sampled=c.timeToLoad=0,c.loading=c.loaded=c.starting=c.started=c.ready=!1,c.reporter=function(){return i.call(c)},c.collect=function(n){return!!n.match(r)},c.sampler=setInterval(function(){e(c)},a)}function w(n,t,o){return{on:t,off:o,onready:function(){l(n)},onloaded:function(){c(n)},onloading:function(){d(n)},onstarted:function(){u(n)},onstarting:function(){s(n)}}}var h,y,T={},S=navigator,k="info",C="monitor",b={level:0,loaded:2,ready:4,started:6,errors:8,timeToLoad:12};return{monitor:w(C,f,m)}}();

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
	var recordingThreshold = Math.random() * 100;

	return {
		isRecordingApproved: function(percentage) {
			return recordingThreshold <= percentage;
		}
	}
})();
	
		
// Copyright 2006-2017 ClickTale Ltd., US Patent Pending
// PID: 1020
// WR destination: www32
// WR version: latest
// Recording ratio: 0.2
(function (){
	var dependencyCallback;
        var scriptSyncTokens = ["wr"];
        var ct2Callback, isRecorderReady;
    var dependencies = scriptSyncTokens.slice(0);
    var clickTaleOnReadyList = window.ClickTaleOnReadyList || (window.ClickTaleOnReadyList = []);
    var indexOf = (function(){if(Array.prototype.indexOf){return function(array,value){return array.indexOf(value)}}return function(array,value){var length=array.length;for(var i=0;i<length;i++){if(array[i]===value){return i}}return -1}})();
    function isValidToken(token) {
        if (indexOf(scriptSyncTokens, token) > -1) {
            var index = indexOf(dependencies, token);

            if (index > -1) {
                dependencies.splice(index, 1);
                return true;
            }
        }

        return false;
    }

    clickTaleOnReadyList.push(function () {
        if (ct2Callback) {
            ct2Callback();
        }

        isRecorderReady = true;
    });

    ClickTaleGlobal.scripts.dependencies = {
        setDependencies: function (deps) {
            scriptSyncTokens = deps;
        },
        onDependencyResolved: function (callback) {
            dependencyCallback = callback;
        },
        notifyScriptLoaded: function (token) {
            if (isValidToken(token)) {
                if (dependencies.length === 0 && typeof dependencyCallback === "function") {
                    dependencyCallback();
                }
            }
        }
    };

    ClickTaleGlobal.scripts.integration = {
        onReady: function (callback) {
            if (isRecorderReady) {
                callback();
            }
            else {
                ct2Callback = callback;
            }
        }
    };
})();

(function(){}());


window.ClickTaleIsXHTMLCompliant = true;
if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	



// Start of user-defined pre WR code (PreLoad)
//PTC Code Version 8.7

window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
window.ClickTaleSettings.Compression = window.ClickTaleSettings.Compression || {};
if (document.readyState === 'complete') {
    window.ClickTaleIncludedOnWindowLoad = true;
}
window.ClickTaleIncludedOnDOMReady = true;
window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UploadPageHappened = false;
window.ClickTaleSettings.PTC.IsMobile = false;
window.ClickTaleUIDCookieName = 'WRUID20171206';

function deleteIrrelevantUIDCookies(relevant) {
    var cookieArray = document.cookie.replace(/\s+/g, '').split(";");
    var hostArray = location.host.split('.');
    var topDom = (hostArray.length <= 2 ? location.host : hostArray.slice(1).join('.'));
    for (var i = 0; i < cookieArray.length; i++) {
        var currentCookie = cookieArray[i];
        var cookieKey = currentCookie.substring(0, currentCookie.indexOf('='));
        if (cookieKey.indexOf('WRUID') > -1 && relevant.indexOf(cookieKey) == -1) {
            document.cookie = cookieKey + "='';domain=." + topDom + ";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;";
            document.cookie = cookieKey + "='';path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;";
        }
    }
}
deleteIrrelevantUIDCookies([window.ClickTaleUIDCookieName]);

window.ClickTaleSettings.CheckAgentSupport = function (f, v) {
    if (v.t == v.ED) {
        window.ClickTaleSettings.Compression.Async = false;
    }
	if (v.m) {
        window.ClickTaleSettings.PTC.IsMobile = true;
    }
    if (v.t == v.IE && v.v <= 8) {
        window.ClickTaleSettings.PTC.okToRunPCC = false;
        return false;
    }
    else {
        if (!(v.t == v.IE && v.v <= 10)) {
            window.ClickTaleSettings.PTC.EnableChangeMonitor = true;
            window.ClickTaleSettings.PTC.ConfigChangeMonitor();
        }
        var fv = f(v);
        window.ClickTaleSettings.PTC.okToRunPCC = fv;
        return fv;
    }
};

window.ClickTaleSettings.PTC.startsWith = function(strToTest, str) {
    return strToTest.lastIndexOf(str, 0) === 0;
};

window.ClickTaleSettings.Protocol = {
    Method: "ImpactRecorder"
};

window.ClickTaleSettings.Proxy = {
    WR: "ing-district.clicktale.net/ctn_v2/",
    ImageFlag: "ing-district.clicktale.net/ctn_v2/"
};

window.ClickTaleSettings.PTC.RulesObj = [{
    selector: "input[type=\"text\"], input[type=\"tel\"], input[type=\"email\"]",
    changeMon: {
        Attributes: ['value'],
        Text: false
    },
    rewriteApi: {
        Attributes: ['value'],
        Text: false
    }
}, {
    selector: ".ctHidden",
    changeMon: {
        Attributes: ['value'],
        Text: true
    },
    rewriteApi: {
        Attributes: ['value'],
        Text: true
    }
}, {
    selector: ".msame_Header_name, .msame_Drop_active_name, .msame_Drop_active_email, .msame_Drop_AI_name, .msame_Drop_AI_email",
    changeMon: {
        Attributes: ['value'],
        Text: true
    },
    rewriteApi: {
        Attributes: ['value'],
        Text: true
    },
}, {
    selector: '#meControlDropdown img, .msame_Header_pic img, .msame_Drop_AI_pic img',
    changeMon: {
        Attributes: ['src'],
        Text: false
    },
    rewriteApi: {
        Attributes: ['src','ctdep-src'],
        Text: false
    }
}];


window.ClickTaleSettings.PTC.RulesObjRemoveEls = [];

(function() {
    if (typeof window.ClickTalePIISelector === 'string' && window.ClickTalePIISelector != '') {
        try {
            var domNodes = document.querySelectorAll(window.ClickTalePIISelector);
            if (domNodes) {
                window.ClickTaleSettings.PTC.RulesObj.push({
                    selector: window.ClickTalePIISelector,
                    changeMon: {
                        Attributes: ['value'],
                        Text: true
                    },
                    rewriteApi: {
                        Attributes: ['value'],
                        Text: true
                    }
                });
            }
        } catch (err) {}
    }
})();

window.ClickTaleSettings.PTC.cloneNodeIE9 = function(node) {
    var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);
    var child = node.firstChild;
    while (child) {
        var nodeName = child.nodeName.toLowerCase();
        if (nodeName == 'script') {
            var script = document.createElement('script');
            clone.appendChild(script);
        } else if (window.ClickTaleSettings.PTC.cloneNodeIE9.badEls[nodeName]) {
            var newN = document.createElement(nodeName);
            var attributes = child.attributes;
            var attrLength = attributes.length;
            for (var i = 0; i < attrLength; i++) {
                var attr = attributes[i];
                if (!/[,'"{};\.?&!#<>~]/.test(attr.nodeName)) {
                    newN.setAttribute('ctdep-' + attr.nodeName.trim(), attr.nodeValue);
                }
            }
            clone.appendChild(newN);
        } else {
            clone.appendChild(window.ClickTaleSettings.PTC.cloneNodeIE9(child));
        }
        child = child.nextSibling;
    }
    return clone;
}

window.ClickTaleSettings.PTC.cloneNodeIE9.badEls = {
    'iframe': true,
    'img': true,
    'source': true
};

window.ClickTaleSettings.PTC.ConfigChangeMonitor = function() {

    if (window.ClickTaleSettings.PTC.EnableChangeMonitor) {


        window.ClickTaleSettings.XHRWrapper = {
            Enable: false
        };

        var CMscript = document.createElement("SCRIPT");
        CMscript.async = true;
        CMscript.crossOrigin = "anonymous";
        CMscript.src = "https://cdnssl.clicktale.net/www/ChangeMonitor-latest.js";
        document.body.appendChild(CMscript);

        window.ClickTaleSettings.ChangeMonitor = {
            Enable: true,
            LiveExclude: true,
            AddressingMode: "id",
            OnReadyHandler: function(changeMonitor) {
                changeMonitor.observe();
                if (typeof window.ClickTaleCMSelector === 'string' && window.ClickTaleCMSelector != '') {
                    changeMonitor.exclude({
                        selector: window.ClickTaleCMSelector,
                        multiple: true
                    });
                }

				var CMRemrule = window.ClickTaleSettings.PTC.RulesObjRemoveEls;
                if (CMRemrule) {
                    for (var i = 0; i < CMRemrule.length; i++) {
                        var rule = CMRemrule[i];
                        var CMlocation = rule['location'];
                        if ((!CMlocation || (CMlocation && document.location[CMlocation['prop']].toLowerCase().search(CMlocation.search) != -1))) {
                            if (rule.changeMon) {
                                changeMonitor.exclude(rule.changeMon);
                            }
                            if (rule.changeMonLive) {
                                changeMonitor.exclude({
                                    selector: rule.changeMonLive,
                                    multiple: true
                                });
                            }
                        }
                    }
                }
            },
            OnBeforeReadyHandler: function(settings) {
                settings.Enable = window.ClickTaleGetUID ? !!ClickTaleGetUID() : false;
                return settings;
            },
            Filters: {
                MaxBufferSize: 1000000,
                MaxElementCount: 10000
            },
            PII: {
                Text: [],
                Attributes: []
            }
        }
        window.ClickTaleSettings.ChangeMonitor.AutoExclude = {
            Enable: true,
            Repeats: 10,
            Interval: 200
        };

		var RulesObj = window.ClickTaleSettings.PTC.RulesObj;
        if (RulesObj) {
            window.ClickTaleSettings.ChangeMonitor.PII.Text = window.ClickTaleSettings.ChangeMonitor.PII.Text || [];
            window.ClickTaleSettings.ChangeMonitor.PII.Attributes = window.ClickTaleSettings.ChangeMonitor.PII.Attributes || [];
            for (var i = 0; i < RulesObj.length; i++) {
                var CMrule = RulesObj[i]['changeMon'];
                var CMlocation = RulesObj[i]['location'];
                if (!CMrule || (CMlocation && document.location[CMlocation['prop']].toLowerCase().search(CMlocation.search) === -1)) {
                    continue;
                }
                var selector = RulesObj[i]['selector'];
                var attributesArr = CMrule.Attributes;
                if (attributesArr instanceof Array) {
                    window.ClickTaleSettings.ChangeMonitor.PII.Attributes.push({
                        selector: selector,
                        transform: (function(attributesArr) {
                            return function(el) {
                                var attrs = el.attributes;
                                var attrsToReturn = {}
                                for (var i = 0; i < attrs.length; i++) {
                                    var name = attrs[i].nodeName;
                                    attrsToReturn[name] = attrs[i].nodeValue;
                                }
                                for (var u = 0; u < attributesArr.length; u++) {
                                    var attr = attributesArr[u];
                                    var attrib = el.getAttribute(attr);
                                    if (typeof attrib === 'string') {
                                        attrsToReturn[attr] = attrib.replace(/\w/g, '-');
                                    }
                                }

                                return attrsToReturn;
                            }
                        })(attributesArr)
                    });
                }
                if (CMrule.Text) {
                    window.ClickTaleSettings.ChangeMonitor.PII.Text.push({
                        selector: [selector, function(elements) {
                            var els = Array.prototype.reduce.call(elements, function(curr, add) {
                                return curr.concat(Array.prototype.slice.call(add.childNodes));
                            }, []);
                            return Array.prototype.filter.call(els, function(child) {
                                return !!(child && child.nodeType === 3);
                            });
                        }],
                        transform: function(el) {
                            return el.textContent.replace(/\w/g, '-');
                        }
                    });
                }
            }
        }
    }
};

window.ClickTaleSettings.Compression = {
    Method: function() {
        return "deflate";
    }
};

window.ClickTaleSettings.Transport = {
    Legacy: false,
    MaxConcurrentRequests: 5
};

window.ClickTaleSettings.RewriteRules = {
    OnBeforeRewrite: function(rewriteApi) {
        var bodyClone = ClickTaleSettings.PTC.cloneNodeIE9(document.documentElement);

        if (window.ClickTaleSettings.PTC.RulesObj) {
            rewriteApi.add(function(buffer) {

                var RulesObj = window.ClickTaleSettings.PTC.RulesObj;
                for (var i = 0; i < RulesObj.length; i++) {
                    var rewriteApirule = RulesObj[i]['rewriteApi'];
                    var rewriteApilocation = RulesObj[i]['location'];
                    if (!rewriteApirule || (rewriteApilocation && document.location[rewriteApilocation['prop']].toLowerCase().search(rewriteApilocation.search) === -1)) {
                        continue;
                    }
                    var selector = RulesObj[i]['selector'];
                    var elements = bodyClone.querySelectorAll(selector);

                    Array.prototype.forEach.call(elements, function(el, ind) {
                        var attributesArr = rewriteApirule.Attributes;
                        if (attributesArr instanceof Array) {

                            for (var u = 0; u < attributesArr.length; u++) {
                                var attr = attributesArr[u];
                                var attrib = el.getAttribute(attr);
                                if (typeof attrib === 'string') {
                                    el.setAttribute(attr, attrib.replace(/\w/g, '-'));
                                }
                            }

                        }
                        if (rewriteApirule.Text) {
                            var children = el.childNodes;
                            Array.prototype.forEach.call(children, function(child) {
                                if (child && child.nodeType === 3) {
                                    child.textContent = child.textContent.replace(/\w/g, '-');
                                }
                            });
                        }
                    });
                }

                var RulesObjRemoveEls = window.ClickTaleSettings.PTC.RulesObjRemoveEls;
                if (RulesObjRemoveEls) {
                    for (var i = 0; i < RulesObjRemoveEls.length; i++) {
                        if (RulesObjRemoveEls[i].rewriteApi) {
                            var elementsToRemove = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApi);
                            Array.prototype.forEach.call(elementsToRemove, function(el, ind) {
                                if (el.parentNode) {
                                    el.parentNode.removeChild(el);
                                }
                            });
                        }
                        if (RulesObjRemoveEls[i].rewriteApiReplace) {
                            var elementsToReplace = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApiReplace);
                            Array.prototype.forEach.call(elementsToReplace, function(el, ind) {
                                if (el.parentNode) {
                                    var comment = document.createComment(el.outerHTML);
                                    el.parentNode.replaceChild(comment, el);
                                }
                            });
                        }
                    }
                }

                return bodyClone.innerHTML.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, '<script><\/script>').replace(/(<div id="?ClickTaleDiv"?[^>]+>)\s*<script[^>]+><\/script>\s*(<\/div>)/i, '$1$2');
            });
        }
        rewriteApi.add({
            pattern: /ctdep-/gi,
            replace: ''
        });
        rewriteApi.add({
            pattern: /(<head[^>]*>)/i,
            replace: '$1<script type="text\/javascript" class="cm-ignore" src="http:\/\/dummytest.clicktale-samples.com\/GlobalResources\/jquery.js"><\/script>'
        });
    }
};

window.ClickTaleSettings.PTC.doOnlyWhen = function(toDoHandler, toCheckHandler, interval, times, failHandler) {
    if ((!toDoHandler) || (!toCheckHandler)) return;
    if (typeof interval == "undefined") interval = 100;
    if (typeof times == "undefined") times = 10;
    if (--times < 0) {
        if (typeof failHandler === 'function') {
            failHandler();
        }
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }
    setTimeout(function() {
        window.ClickTaleSettings.PTC.doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler);
    }, interval);
};

// End of user-defined pre WR code


var isHttps = document.location.protocol == 'https:',
	scriptSource = window.ClickTaleScriptSource;

if(!ClickTaleGlobal.init.pccRequested) {
	var pccSrc = scriptSource ? scriptSource + 'b02d18aa-a206-4975-84cc-2d1d2b82ea7c.js?DeploymentConfigName=Release_20171208&Version=1' : (isHttps ? 'https://cdnssl.clicktale.net/www32/pcc/b02d18aa-a206-4975-84cc-2d1d2b82ea7c.js?DeploymentConfigName=Release_20171208&Version=1' : 'http://cdn.clicktale.net/www32/pcc/b02d18aa-a206-4975-84cc-2d1d2b82ea7c.js?DeploymentConfigName=Release_20171208&Version=1');
		var pccScriptElement = ClickTaleCreateDOMElement('script');
	pccScriptElement.type = "text/javascript";
	pccScriptElement.crossOrigin = "anonymous";
	pccScriptElement.src = pccSrc;
	ClickTaleGlobal.init.isAllowed && document.body.appendChild(pccScriptElement);
		ClickTaleGlobal.init.pccRequested = true;
}
	
if (!scriptSource) {
	window.ClickTaleScriptSource = isHttps ? 'https://cdnssl.clicktale.net/www/' : 'http://cdn.clicktale.net/www/';
}

window.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == 'function' ? window.ClickTaleOnReady : void 0;

window.ClickTaleOnReady = function() {
	var PID=1020, 
		Ratio=0.2, 
		PartitionPrefix="www32",
		SubsId=233396;
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return;
	};
		
	
	// Start of user-defined header code (PreInitialize)
	if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
};

window.ClickTaleSettings.PTC.InitFuncs = window.ClickTaleSettings.PTC.InitFuncs || [];
window.ClickTaleSettings.PTC.InitFuncs.push(function () {
    var pcc = document.querySelector('script[src*="clicktale"][src*="pcc"]');
    if (pcc) {
        var versionmatch = pcc.src.match(/DeploymentConfigName=(.+)/i);
        if (versionmatch && typeof ClickTaleExec === 'function') {
            ClickTaleExec("console.info('" + versionmatch[0] + "');");
            ClickTaleEvent("Config: " + versionmatch[1].replace(/\&.+/, ''));
        }
    }
});

function doUpload() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        ClickTaleUploadPageNow();
        ClickTaleEvent('Page uploaded');
        window.ClickTaleSettings.PTC.UploadPageHappened = true;
		
    };
};


function isVisible(elementToCheck) {
    return !!(elementToCheck && (elementToCheck.offsetWidth || elementToCheck.offsetHeight || elementToCheck['getClientRects']().length));
}

function isReadyToRecord() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        if (document.location.pathname == "/en-us") {
            return (!!document.querySelector("#uhfLogo") && !!document.querySelector(".ms-products"));
        }
        else if (location.host === "support.microsoft.com") {
            var header = document.querySelector('#headerArea');
            var loader = document.querySelector('div[role="presentation"]');
            return header && isVisible(header) && loader && loader.clientHeight > 50;
        }
        else {
            return (!!document.querySelector("#uhfLogo"));
        }

    }
    return false;
}

if (typeof ClickTaleDelayUploadPage === 'function') {
    ClickTaleDelayUploadPage();
	
    window.ClickTaleSettings.PTC.doOnlyWhen(doUpload, isReadyToRecord, 1000, 15, doUpload);

    //MSCOMN-256
    if (ClickTaleDetectAgent()['t'] == ClickTaleDetectAgent()['IE']) {
        window.ClickTaleSettings.PTC.testNotBot = false;

        window.ClickTaleSettings.PTC.setTestNotBot = function () {
            window.ClickTaleSettings.PTC.testNotBot = true;
            document.removeEventListener('mousemove', window.ClickTaleSettings.PTC.setTestNotBot, true)
        };
        document.addEventListener('mousemove', window.ClickTaleSettings.PTC.setTestNotBot, true);

        setTimeout(function () {
            document.removeEventListener('mousemove', window.ClickTaleSettings.PTC.setTestNotBot, true);
            if (!window.ClickTaleSettings.PTC.testNotBot && typeof ClickTaleEvent === 'function') {
                ClickTaleEvent('Suspected Bot');
            }
        }, 10000);
    }


    var initFuncs = window.ClickTaleSettings.PTC.InitFuncs;
    for (var i = 0, initLen = initFuncs.length; i < initLen; i++) {
        if (typeof initFuncs[i] === 'function') {
            initFuncs[i]();
        }
    }
}

	// End of user-defined header code (PreInitialize)
    
	
	window.ClickTaleIncludedOnDOMReady=true;
	
	ClickTaleGlobal.init.isAllowed && ClickTale(PID, Ratio, PartitionPrefix, SubsId);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	
	// Start of user-defined footer code
	
	// End of user-defined footer code
	
}; 
(function() {
	var div = ClickTaleCreateDOMElement("div");
	div.id = "ClickTaleDiv";
	div.style.display = "none";
	document.body.appendChild(div);

	
	
	var wrScript = ClickTaleCreateDOMElement("script");
	wrScript.crossOrigin = "anonymous";	
	wrScript.src = window.ClickTaleScriptSource + 'WR-latest.js';
	wrScript.type = 'text/javascript';
		wrScript.async = true;
		ClickTaleGlobal.init.isAllowed && document.body.appendChild(wrScript);
})();





!function(){function e(){window.addEventListener&&addEventListener("message",t,!1)}function t(e){var t,o=new RegExp("(clicktale.com|qa-core.app.clicktale.com)($|:)"),i=new RegExp("qa-core.app.clicktale.com"),c=!1,a=e.origin;try{t=JSON.parse(e.data)}catch(l){return}o.test(e.origin)!==!1&&(window.ct_ve_parent_window=e.source,i.test(e.origin)===!0&&(c=!0),"CT_testRules"==t.name&&(sessionStorage.setItem("CT_testRules",JSON.stringify(t.params.testRules)),console.log((new Date).toJSON(),"PostPTC: testRules ",sessionStorage.getItem("CT_testRules")),window.ct_ve_parent_window.postMessage({name:"testRulesRecieved",params:{}},"*")),"CTload_ve"===t["function"]&&"function"==typeof ClickTaleGetPID&&null!==ClickTaleGetPID()&&n(a,c))}function o(e){return document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml",e):document.createElement(e)}function n(e,t){var n=o("script");n.setAttribute("type","text/javascript"),n.setAttribute("id","ctVisualEditorClientModule");var i;i=t?document.location.protocol+"//qa-core.app.clicktale.com/VisualEditor/Client/dist/veClientModule.js":document.location.protocol+"//"+e.match(/subs\d*/)[0]+".app.clicktale.com/VisualEditor/Client/dist/veClientModule.js",n.src=i,document.getElementById("ctVisualEditorClientModule")||document.body.appendChild(n)}try{var i=window.chrome,c=window.navigator&&window.navigator.vendor;null!==i&&void 0!==i&&"Google Inc."===c&&e()}catch(a){}}();
