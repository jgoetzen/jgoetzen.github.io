/*!
 * cache=true
 * @license Licences are viewable at this URL: http://w.cdn.gaiaonline.com/src/=/2.3//src/js/pulldown/dropdown.js
 */


/*! /src/js/pulldown/dropdown.js */
(function() {
    // local vars that can be shared amongst our friendly functions
    var YU = YAHOO.util,
        YUD = YU.Dom,
        YUE = YU.Event,
        cache = {},
        dropdowns, dropbox, trigger, menu, cur_id, cur_obj, pushbox, headshotEvents, statusbarEvents, timer, current, img, img2, imgftr;
    YAHOO.namespace("gaia.app");

    // if this file is loaded more than once on a pageload
    if (YAHOO.gaia.app.dropdown) {
        return;
    }

    // will only run when dropdown 'trigger' is discovered
    YAHOO.gaia.app.dropdown = function () {
        // inserting some useful menu html into the page
        if (!trigger) {
            dropbox = document.createElement("div");
            dropbox.setAttribute("id", "avatar_dropbox");
            dropbox.innerHTML = '<div id="trigger">&nbsp;</div>';
            document.body.appendChild(dropbox);
        }
        trigger = document.getElementById("trigger");
        if (!menu) {
            menu = document.createElement("ul");
            menu.setAttribute("id", "avatar_menu");
            document.body.appendChild(menu);
        }
        // this function populates the menu bitch
        var populate = function (o) {
            var test = null, // test for cashshop presence
                str = ['<li id="viewposts"><a href="/gsearch/posthistory/', o.id, '">View Posts</a></li> <li><a href="/collections/show/', o.id, '">Favorites</a></li> <li><a href="/achievements/public/', o.id, '">Achievements</a></li> <li><a href="/profiles/', encodeURIComponent(o.username), '/', encodeURIComponent(o.id), '/?_gaia_t_=718" title="View ', o.username, '\'s Profile">Profile</a></li><li id="jointhem"><a title="Join ', o.username, '" href="/get/location?userid=', o.id, '&_gaia_t_=720">Join Them</a></li><li id="journalentry"><a href="/journal/?mode=view&u=', o.id, '&_gaia_t_=722">Journal</a></li><li id="addfriend"><a title="Add ', o.username, ' as friend" onclick="YAHOO.gaia.widgets.addFriend.click(event)" href="/friends/add/', o.id, '?_gaia_t_=724">Add as Friend</a></li><li class="menu_seperator">&nbsp;</li><li id="sendpm"><a href="/profile/privmsg.php?mode=post&u=', o.id, '&_gaia_t_=726">Send PM</a></li><li id="viewstore"><a href="/marketplace/userstore/', o.id, '&_gaia_t_=8668" title="View Store">View Store</a></li><li id="sendim"><a href="javascript:YAHOO.gaia.widgets.getIM(\'', o.id, '\');">Send IM</a></li><li id="sendline" class="menu_seperator">&nbsp;</li><li id="trade"><a href="/gaia/bank.php?mode=trade&uid=', o.id, '&_gaia_t_=728">Trade</a></li><li><a id="buyGift" title="Give a gift to ', o.username, '" href="/gaia/shopping.php?key=hbjdcjkygqwygbqw&buyGift=1&userId=',o.username,'">Give a Gift</a></li><li><a title="View ', o.username, '\'s Item" href="javascript:YAHOO.gaia.apps.ei.getItemList(', o.id, ');">View Equipped List</a></li><li id="website"><a title="Visit ', o.username, '\'s Website" class="www" target="_userwww" href="/gaia/redirect.php?r=', o.website, '&_gaia_t_=730">My website</a></li><li class="menu_seperator" id="ignoreline">&nbsp;</li><li id="ignore"><a title="Ignore ', o.username, '" href="/friends/?hook=', o.id, '&_gaia_t_=724">Ignore</a></li><li class="menu_seperator" id="toolsline">&nbsp;</li><li id="mtools"><a title="Moddog Tools" href="/moddog/note/?go=Search&searchstr=', o.id, '&searchby=user&_gaia_t_=734">Moddog Tools</a></li><li id="ptools"><a title="Profile Tools" href="/admin/user/mod/', o.id, '?_gaia_t_=736">Profile Tools</a></li>'].join("");
            // populate the menu with the html
            menu.innerHTML = str;
            try {
                test = YAHOO.gaia.app.CashShop.SenderApplication.show;
            } catch (err) {
                test = null;
            }
            // go to market landing is cashshop is not there
            if(!test) {
                document.getElementById("buyGift").setAttribute("href", "/market/?cashshop=true&username=" + o.username);
            }
            // hide irrelavent options based on the data ajax returns
            if(o.location && o.jointhem) {
                document.getElementById("jointhem").getElementsByTagName("a")[0].href = o.location.url;
            } else {
                YUD.setStyle(["jointhem"], "display", "none");
            }
            if(o.is_friend) {
                YUD.setStyle(["addfriend"], "display", "none");
            }
            if(o.is_ignored && !o.moderator) {
                YUD.setStyle(["sendpm", "sendtext", "sendim", "sendline"], "display", "none");
            }
            if((2 === o.receive_pm && !o.is_friend) || !o.receive_pm) {
                YUD.setStyle(["sendpm", "sendtext", "sendim", "sendline"], "display", "none");
            }
            if(!o.website) {
                YUD.setStyle(["website"], "display", "none");
            }
            if(!o.moderator) {
                YUD.setStyle(["mtools", "ptools", "toolsline"], "display", "none");
            }
            if(o.self) {
                YUD.setStyle(["jointhem", "addfriend", "sendpm", "sendtext", "sendim", "sendline", "ignore", "ignoreline", "trade"], "display", "none");
            }
            if(!o.online) {
                YUD.setStyle(["jointhem", "sendim"], "display", "none");
            }
        };

        // calculate x,y coordinates of where the menu should appear
        var displaymenu = function (obj) {
            var offset,
                offsetRegion,
                menuRegion;
            if ("head" === current) {
                offset = dropbox;
            } else if ("statusbar" === current) {
                var grandparent;
                if(length in obj) {
                    grandparent = obj[0].parentNode.parentNode;
                } else {
                    grandparent = obj.parentNode.parentNode;
                }
                offset = grandparent;
            }
            offsetRegion = YUD.getRegion(offset);
            YUD.setStyle(menu, "top", (offsetRegion.bottom - 1) + "px");
            YUD.setStyle(menu, "left", (offsetRegion.left) + "px");
            YUD.setStyle(menu, "display", "block");
            menuRegion = YUD.getRegion(menu);
            // flip, if can't display fully top down
            if(YUD.getClientRegion().bottom - menuRegion.bottom <= 0) {
                YUD.setStyle(menu, "top", (offsetRegion.top + menuRegion.top - menuRegion.bottom + 1) + "px");
                YUD.setStyle(menu, "left", (offsetRegion.left) + "px");
            }
        };

        // these events are shared by avatar and status bar menu

        // do not fire event when mouseover these containers
        dropbox = menu;
        YUE.addListener(dropbox, "mouseover", function (evt) {
            YUE.stopEvent(evt);
        });

        // do not prevent event from firing when doing a menu click
        YUE.addListener(menu, "click", function (evt) {
            // no stopEvent as we still want the default stuff to happen in the menu :)
            YUE.stopPropagation(evt);
            dropbox = menu;
            YUD.setStyle(dropbox, "display", "none");
        });

        // hide the menu if you ever leave the avatar or status bar
        YUE.addListener(document, "mouseover", function (evt) {
            dropbox = menu;
            YUD.setStyle(dropbox, "display", "none");
        });

        // these are the events registered to avatar headshots
        headshotEvents = function () {
            YAHOO.gaia.app.dropdown.bindListenerToImage();
            YUE.addListener(dropbox, "mouseout", function (evt) {
                YUE.stopEvent(evt);
                YUD.removeClass(dropbox, "trigger");
            });
            YUE.addListener(trigger, "mouseover", function (evt) {
                var dropboxRegion = YUD.getRegion(dropbox);
                YUE.stopEvent(evt);
                YUD.addClass(dropbox, "trigger");
                dropbox.cur_id = cur_id;
                var isFooter = YUD.getAncestorByClassName(YUE.getTarget(evt), "gfooter") ? true : false;
                if(!cache[cur_id]) {
                    if (!isFooter) {
                        YUD.setStyle(img, "display", "block");
                        YUD.setStyle(img, "top", (dropboxRegion.top + 1) + "px");
                        YUD.setStyle(img, "left", (dropboxRegion.left + 1) + "px");
                        YUD.setStyle(img, "opacity", "0.4");
                    } else {
                        YUD.setStyle(imgftr, "display", "block");
                        YUD.setStyle(imgftr, "top", (dropboxRegion.top + 1) + "px");
                        YUD.setStyle(imgftr, "left", (dropboxRegion.left + 1) + "px");
                        YUD.setStyle(imgftr, "opacity", "0.4");
                    }
                    YU.Connect.asyncRequest("get", "/avatarmenu/" + cur_id, {
                        success: function (o) {
                            var str = eval(o.responseText),
                                id = cur_id;
                            cache[str.id] = str;
                            populate(str);
                            if (!isFooter) {
                                YUD.setStyle(img, "display", "none");
                                YUD.setStyle(img, "opacity", "0.0");
                            } else {
                                YUD.setStyle(imgftr, "display", "none");
                                YUD.setStyle(imgftr, "opacity", "0.0");
                            }
                            // if our dropbox is still the one that we need
                            if ("block" === YUD.getStyle(dropbox, "display") && id === dropbox.cur_id) {
                                displaymenu();
                            }
                        }
                    });
                } else {
                    populate(cache[cur_id]);
                    displaymenu();
                }
            });
        };

        // these are the events registered to the status bar
        statusbarEvents = function () {
            YUE.addListener(document, "mouseover", function (evt) {
                YUD.removeClass(pushbox, "trig");
            });
            YUE.addListener(pushbox, "mouseover", function (evt) {
                var parentRegion;
                current = "statusbar";
                YUE.stopEvent(evt);
                YUD.addClass(this, "trig");
                cur_id = this.id.substring(2);
                cur_obj = this;
                parentRegion = YUD.getRegion(this.parentNode.parentNode);
                if(!cache[cur_id]) {
                    YUD.setStyle(img2, "display", "block");
                    YUD.setStyle(img2, "top", (parentRegion.top + 1) + "px");
                    YUD.setStyle(img2, "left", (parentRegion.left + 1) + "px");
                    YUD.setStyle(img2, "opacity", "0.1");
                    YU.Connect.asyncRequest("get", "/avatarmenu/" + cur_id, {
                        success: function(o) {
                            var str = eval(o.responseText);
                            cache[str.id] = str;
                            populate(str);
                            displaymenu(cur_obj);
                            YUD.setStyle(img2, "display", "none");
                            YUD.setStyle(img2, "opacity", "0.0");
                        }
                    });
                } else {
                    populate(cache[cur_id]);
                    displaymenu(cur_obj);
                }
            });
            // no event should fire here
            pushboxGrandparents = [];
            for (var i = 0; i < pushbox.length; i++) {
                pushboxGrandparents[i] = pushbox[i].parentNode.parentNode;
            }
            YUE.addListener(pushboxGrandparents, "mouseover", function (evt) {
                YUE.stopEvent(evt);
            });
        };
        YAHOO.gaia.app.dropdown.headshotEvents = headshotEvents;
        YAHOO.gaia.app.dropdown.bindListenerToImage = function () {
            dropdowns = YUD.getElementsByClassName("avatarImage");
            YUE.addListener(dropdowns, "mouseover", function (evt) {
                var thisElemRegion = YUD.getRegion(this);
                current = "head";
                YUE.stopEvent(evt);
                cur_id = this.title;
                YUD.setStyle(dropbox, "display", "block");
                YUD.setStyle(dropbox, "top", (thisElemRegion.top - 1) + "px");
                YUD.setStyle(dropbox, "left", (thisElemRegion.left - 1) + "px");
                if(this.className.indexOf("gfooter") > -1) {
                    YUD.addClass(dropbox, "gfooter");
                } else {
                    YUD.removeClass(dropbox, "gfooter");
                }
                YUD.setStyle(menu, "display", "none");
            });
        };
    };

    YUE.onDOMReady(function () {
        var fragment = document.createDocumentFragment(),
            loaderSrc = ["//", GAIA_config("graphics_server"), "/images/template/dropdown/ajax-loader.gif"].join("");
            loader2Src = ["//", GAIA_config("graphics_server"), "/images/template/dropdown/ajax-loader2.gif"].join("");
        dropdowns = YUD.getElementsByClassName("avatarImage"),
        pushbox = YUD.getElementsByClassName("pushBox");
        if(dropdowns.length || pushbox.length) {
            YAHOO.gaia.app.dropdown();
        }
        // inserting some useful menu html into the page
        img = document.createElement("img");
        img.setAttribute("src", loaderSrc);
        YUD.setStyle(img, "width", "50px");
        YUD.setStyle(img, "height", "50px");
        imgftr = document.createElement("img");
        imgftr.setAttribute("src", loaderSrc);
        YUD.setStyle([imgftr], "width", "20px");
        YUD.setStyle([imgftr], "height", "30px");
        YUD.setStyle([imgftr], "z-index", "501");
        YUD.setStyle([imgftr], "display", "none");
        YUD.setStyle([imgftr], "position", "absolute");
        headshotEvents();
        if (pushbox.length) {
            img2 = document.createElement("img");
            img2.setAttribute("src", loaderSrc);
            YUD.setStyle(img2, "width", "20px");
            YUD.setStyle(img2, "height", "30px");
            YUD.setStyle(img2, "z-index", "501");
            YUD.setStyle(img2, "display", "none");
            YUD.setStyle(img2, "position", "absolute");
            statusbarEvents();
        }
        // documentFragments allow less interaction with the DOM and fewer reflows
        document.body.appendChild(fragment);
    });
}());
