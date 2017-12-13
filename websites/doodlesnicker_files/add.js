/*!
 * cache=true
 * @license Licences are viewable at this URL: http://w.cdn.gaiaonline.com/src/=/e143bb5df5304ae98988a03a4dabca2e-1446-107/src/js/collections/add.js
 */


/*! /src/js/collections/add.js */
YUI().add("project-addcollections", function (Y) {

    Y.GAddCollections = function () {
        this.panel = null;
        this.avatar_params = {
            type:"avatar",
            width:"470px",
            height:"360px",
            header:'Collect an Avatar'
        };
        this.thread_params = {
            type:"thread",
            width:"470px",
            height:"360px",
            header:'Collect from Forums'
        };
        this.guild_params = {
            type:"guild",
            width:"470px",
            height:"360px",
            header:'Collect from Guilds'
        };
        this.arena_params = {
            type:"arena",
            width:"470px",
            height:"360px",
            header:'Collect from Arenas'
        };
    };

    Y.GAddCollections.prototype.init = function () {
        //avatar, forum post, guild post, arena content
        /*var possible_favorite = Y.one(".possible_favorite");
        if(possible_favorite){
            possible_favorite.on('click', this.addFavoriteClick, this);
        }
        var possible_refavorite = Y.one(".possible_refavorite");
        if(possible_refavorite){
            possible_refavorite.on('click', this.addRefavoriteClick, this);
        }*/
    };

    Y.GAddCollections.prototype.resetPanel = function () {
        if(Y.one('.yui-panel .container-close'))
            Y.one('.yui-panel .container-close').remove();
        this.panel = null;
    };

    Y.GAddCollections.prototype.parseTarget = function(target_object){
        if(target_object.hasClass("avatar")){
            this.avatar_params.url = 'type=avatar&collection_id=&comment=&hashtags=&target_uid=' + target_object.getAttribute('data-uid');
            this.avatar_params.placeholder = target_object.getAttribute('data-username');

            return this.avatar_params;
        } else if(target_object.hasClass("thread")){
            this.thread_params.url = 'type=post&collection_id=&comment=&hashtags=&thread_id=' + target_object.getAttribute('data-tid') + '&post_id=' + target_object.getAttribute('data-pid');
            this.thread_params.placeholder = '';//target_object.getAttribute('data-title');

            return this.thread_params;
        } else if(target_object.hasClass("guild")){
            this.guild_params.url = 'type=guildpost&collection_id=&comment=&hashtags=&thread_id=' + target_object.getAttribute('data-tid') + '&post_id=' + target_object.getAttribute('data-pid');
            this.guild_params.placeholder = '';//target_object.getAttribute('data-title');

            return this.guild_params;
        } else if(target_object.hasClass("arena")){
            this.arena_params.url = 'type=arena&collection_id=&comment=&hashtags=&post_id=' + target_object.getAttribute('data-pid');
            this.arena_params.placeholder = target_object.getAttribute('data-title');

            return this.arena_params;
        }
    };

    Y.GAddCollections.prototype.addFavoriteClick = function(evt) {
        evt.preventDefault();
        var target_node = Y.one(evt.target);
        if(target_node.hasClass("favorites_add")){

            //get right data for right kind
            var data = this.parseTarget(target_node);

            var handleCollectionResponse = function(resp) {

                var collection_list = Y.JSON.parse(resp.responseText);
                var options = "";
                for(var collection_id in collection_list){
                    options = options + '<option value="' + collection_id + '">' + collection_list[collection_id] + '</option>';
                }

                //do not display the modal if collections failed to load
                if(options){

                    var cancelNode;
                    var addNode;
                    this.resetPanel();
                    this.panel = new YAHOO.widget.Panel( "add_favorite_"+data.type+"_modal", {
                        "width": data.width,
                        "height": data.height,
                        "close": true,
                        "modal": true,
                        "fixedcenter": true,
                        "zIndex": 1000
                    });

                    //cancel button create
                    cancelNode = Y.Node.create('<a href="#" id="cancel_panel">Cancel</a>');
                    cancelNode.on("click", function (evt) {
                        evt.preventDefault();
                        this.panel.hide();
                    }, this);

                    //add button create
                    addNode = Y.Node.create('<a href="#" id="add_favorite_'+data.type+'">Add</a>');
                    addNode.on("click", function (evt) {
                        evt.preventDefault();

                        var collection_id = Y.one('#add_favorite_'+data.type+'_modal #valid_collections')._node.value;
                        data.url = data.url.replace('collection_id=', 'collection_id='+collection_id);
                        var comment = Y.one('#add_favorite_'+data.type+'_modal #comment')._node.value;
                        var hashtags = Y.one('#add_favorite_'+data.type+'_modal #hashtags')._node.value;
                        data.url = data.url.replace('comment=', 'comment='+comment);
                        data.url = data.url.replace('hashtags=', 'hashtags='+hashtags);

                        var handleAddResponse = function(resp) {
                            if(resp.responseText == 'OK'){
                                this.panel.hide();
                            } else {
                                //display error message
                            }
                        }

                        var callback = { 'success': handleAddResponse, 'failure': handleAddResponse, 'scope': this };
                        var requestUrl = '/collections/show/addfavorite/' + (new Date().getTime());
                        YAHOO.util.Connect.asyncRequest('POST', requestUrl, callback, data.url);

                            }, this);

                    this.panel.setFooter(cancelNode._node);
                    this.panel.appendToFooter(addNode._node);
                    this.panel.render(document.body);

                    var panelBody = "<ul><li class='label'><p>Collection: </p> <select id='valid_collections'>" + options + "</select></li><li class='label'><p>Comment: </p><textarea id='comment' value='"+data.placeholder+"' spellcheck='true'>"+data.placeholder+"</textarea><p>Hash Tags: </p><textarea id='hashtags' spellcheck='true'>#</textarea></li></ul>";

                    this.panel.setHeader(data.header);
                    this.panel.setBody(panelBody);
                    this.panel.render();
                    this.panel.show();

                }
            }

            var callback = { 'success': handleCollectionResponse, 'failure': handleCollectionResponse, 'scope': this };

            var requestUrl = '/collections/show/getcollections/' + (new Date().getTime());
            YAHOO.util.Connect.asyncRequest('GET', requestUrl, callback, null);
        }
    };

    Y.GAddCollections.prototype.addRefavoriteClick = function(evt){
        var target_node = Y.one(evt.target);
        if(!target_node.hasClass("add_favorite")){
            target_node = target_node.ancestor('div');
        }
        if(target_node.hasClass("add_favorite")){

            var handleCollectionResponse = function(resp) {

                var collection_list = Y.JSON.parse(resp.responseText);
                var options = "";
                for(var collection_id in collection_list){
                    options = options + '<option value="' + collection_id + '">' + collection_list[collection_id] + '</option>';
                }

                //do not display the modal if collections failed to load
                if(options){

                    var cancelNode;
                    var addNode;
                    this.resetPanel();
                    this.panel = new YAHOO.widget.Panel( "add_refavorite_modal", {
                        "width": "470px",
                        "height": "360px",
                        "close": true,
                        "modal": true,
                        "fixedcenter": true,
                        "zIndex": 1000
                    });

                    //cancel button create
                    cancelNode = Y.Node.create('<a href="#" id="cancel_panel">Cancel</a>');
                    cancelNode.on("click", function (evt) {
                        evt.preventDefault();
                        this.panel.hide();
                    }, this);

                    //add button create
                    addNode = Y.Node.create('<a href="#" id="add_refavorite">Add</a>');
                    addNode.on("click", function (evt) {
                        evt.preventDefault();

                        var collection_id = target_node.getAttribute('data-c_id');
                        var favorite_id = target_node.getAttribute('data-f_id');
                        var user_id = target_node.getAttribute('data-u_id');
                        var new_collection_id = Y.one('#add_refavorite_modal #valid_collections')._node.value;
                        var comment = Y.one('#add_refavorite_modal #comment')._node.value;
                        var hashtags = Y.one('#add_refavorite_modal #hashtags')._node.value;

                        var handleAddResponse = function(resp) {
                            if(resp.responseText == 'OK'){
                                this.panel.hide();
                            } else {
                                //display error message
                            }
                        }

                        var callback = { 'success': handleAddResponse, 'failure': handleAddResponse, 'scope': this };
                        var requestUrl = '/collections/landing/addrefavorite/' + (new Date().getTime());
                        YAHOO.util.Connect.asyncRequest('POST', requestUrl, callback, "new_collection_id="+new_collection_id+"&collection_id="+collection_id+"&favorite_id="+favorite_id+"&user_id="+user_id+"&comment="+comment+"&hashtags="+hashtags);

                            }, this);

                    this.panel.setFooter(cancelNode._node);
                    this.panel.appendToFooter(addNode._node);
                    this.panel.render(document.body);

                    var user_comment = target_node.getAttribute('data-comment');
                    var user_hashtags = target_node.getAttribute('data-hashtags');

                    var panelBody = "<ul><li class='label'><p>Collection: </p> <select id='valid_collections'>" + options + "</select></li><li class='label'><p>Comment: </p><textarea id='comment' value='"+user_comment+"' spellcheck='true'>"+user_comment+"</textarea><p>Hash Tags: </p><textarea id='hashtags' spellcheck='true' placeholder='"+user_hashtags+"'>"+user_hashtags+"</textarea></li></ul>";

                    this.panel.setHeader("Add Favorite");
                    this.panel.setBody(panelBody);
                    this.panel.render();
                    this.panel.show();

                }
            }

            var callback = { 'success': handleCollectionResponse, 'failure': handleCollectionResponse, 'scope': this };

            var requestUrl = '/collections/show/getcollections/' + (new Date().getTime());
            YAHOO.util.Connect.asyncRequest('GET', requestUrl, callback, null);
        }
    };

}, "0.0.1", {
    "requires": ["node", "event", "node-event-delegate", "io-base", "json-parse", "anim"]
});