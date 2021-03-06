this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["leaderboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<div class=\"congratsDiv\">\n\n<h2>Congrats "
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "! You guessed correctly!</h2>\n\n<div class=\"singleWrap\">\n    <div class=\"singleMain\">\n      <i class=\"fa fa-camera\"></i>\n      <p>posted by <span>"
    + alias3(((helper = (helper = helpers.owner || (depth0 != null ? depth0.owner : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"owner","hash":{},"data":data}) : helper)))
    + "<span></p>\n\n      <div class=\"image\">\n        <img src=\""
    + alias3(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\">\n\n        <div class=\"imageInfo\">\n          <h3>Correct Answer: "
    + alias3(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</h3>\n\n          <p>Total Incorrect: </p>\n\n\n          <!-- would be cool to add div with user's score and addClass show on hover for this information -->\n\n        </div>\n      </div>\n\n<p>Your score is now: "
    + alias3(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"points","hash":{},"data":data}) : helper)))
    + "</p>\n\n<div class=\"keepPlayingDiv\">\n  <button class=\"keepPlaying\" id=\"keepPlaying\">Keep Playing</button>\n\n</div>\n\n\n</div><!--end of congratsDiv-->\n\n\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <li>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + ": "
    + alias3(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"points","hash":{},"data":data}) : helper)))
    + "</li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n<div class=\"leaderboardSection\">\n          <h4 class=\"leaderboardh4\">Leaderboard</h4>\n          <ul id=\"leaderboard\" class=\"leaderboard\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.user : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n\n<div class=\"deleteDiv\">\n  <button id=\"#deleteUser\">Delete Account</button>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"loginBox\">\n\n  <div class=\"loginLogo\">\n    <img src=\"https://raw.githubusercontent.com/Group-4/Qpic-Logos/master/QpicLogo.png\">\n  </div>\n\n\n\n  <div class=\"formDiv\" id=\"loginDiv\">\n  <h2>Login</h2>\n  <p class=\"signUp\" id=\"signUp\">Or click here to sign up.</p>\n    <form id=\"loginForm\" class=\"loginForm\">\n      <input type=\"text\" id=\"loginusername\" placeholder=\" username\">\n      <input type=\"password\" id=\"loginpassword\" placeholder=\" password\">\n      <div class=\"errormsg\" id=\"errormsg\"></div>\n      <button id=\"loginButton\">Login</button>\n    </form>\n  </div>\n\n  <div class=\"formDiv hide\" id=\"registerDiv\">\n  <h2>Register</h2>\n  <p class=\"signUp\" id=\"returnLogin\">Go back to login.</p>\n\n    <form id=\"registerForm\" class=\"registerForm\">\n      <input type=\"email\" id=\"email\" placeholder=\" email\">\n      <input type=\"text\" id=\"regusername\" placeholder=\" username\">\n      <input type=\"password\" id=\"regpassword\" placeholder=\" password\">\n      <div class=\"errormsg\" id=\"errormsgregister\"></div>\n      <button id=\"registerButton\">Register</button>\n    </form>\n  </div>\n\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "     <li data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n\n       <div class=\"imageWrap\">\n        <p class=\"poster\">\n  <i class=\"fa fa-camera\"> Posted by: </i>\n    <span>"
    + alias3(((helper = (helper = helpers.owner || (depth0 != null ? depth0.owner : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"owner","hash":{},"data":data}) : helper)))
    + "</span></p>\n\n          <div class=\"actualImage\">\n            <a href=\"#/single/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\"></a>\n          </div>\n  <div id=\"databox\">\n    <p><b>FIRST SOLVED BY: </b>"
    + alias3(((helper = (helper = helpers.solved_by || (depth0 != null ? depth0.solved_by : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"solved_by","hash":{},"data":data}) : helper)))
    + "</p>\n       </div>\n       </div>\n\n     </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"mainImages\">\n  <h2>LET'S PLAY!</h2>\n  <div class=\"rightBtns\">\n    <div class=\"logout\" id=\"logout\">\n      <p class=\"logoutBtn\" id=\"logoutBtn\">Logout</p>\n    </div>\n    <a href=\"/#newpost\"><div class=\"newpostBtn\">\n      <i class=\"fa fa-camera\"></i>\n      <p>Add a new post</p>\n    </div></a>\n  </div>\n\n  <ul class=\"small-block-grid-3\">\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.image : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  </ul>\n\n</div>\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["newpost"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"newpostMain\">\n\n  <h2>Add a post. And don't make it easy!</h2>\n\n\n    <form id=\"postImage\" class=\"postImage\">\n      <input type=\"text\" placeholder=\"Image URL\" id=\"image_url\">\n      <input type=\"text\" placeholder=\"Answer\" id=\"answer\">\n      <input type=\"text\" placeholder=\"Add a hint here\" id=\"hint\">\n      <button id=\"submitPost\">Add post</button>\n    </form>\n    <button id=\"home\">Go home</button>\n\n  <div class=\"preview\" id=\"preview\"></div>\n\n\n\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["sidebar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n      <div class=\"innerAside\">\n        <div class=\"asideTop\">\n          <h4>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</h4>\n          <div class=\"avatar\">\n              <img src=\"images/q_blue_orange.png\">\n          </div>\n          <div class=\"score\">\n            <p>Current score: "
    + alias3(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"points","hash":{},"data":data}) : helper)))
    + "</p>\n          </div>\n        </div>\n\n        </div>\n\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["single"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"singleWrap\">\n    <div class=\"singleMain\">\n    <div class=\"singleMainTop\">\n      <i class=\"fa fa-camera\"></i>\n      <p>posted by <span>"
    + alias3(((helper = (helper = helpers.owner || (depth0 != null ? depth0.owner : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"owner","hash":{},"data":data}) : helper)))
    + "<span></p>\n      <p class=\"deletePost\" id=\"deletePost\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-minus-square\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i></p>\n    </div>\n      <div class=\"image\">\n        <img src=\""
    + alias3(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\">\n\n        <div class=\"imageInfo\">\n          <p class=\"imageInfoP\">First solved by: <span>"
    + alias3(((helper = (helper = helpers.solved_by || (depth0 != null ? depth0.solved_by : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"solved_by","hash":{},"data":data}) : helper)))
    + "</span></p>\n          <p class=\"imageInfoP\">Correct so far: <span>"
    + alias3(((helper = (helper = helpers.times_solved || (depth0 != null ? depth0.times_solved : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"times_solved","hash":{},"data":data}) : helper)))
    + "</span></p>\n          <p class=\"imageInfoP\">Total Attempts: <span>"
    + alias3(((helper = (helper = helpers.attempts || (depth0 != null ? depth0.attempts : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"attempts","hash":{},"data":data}) : helper)))
    + "</span></p>\n          <p class=\"imageInfoP\" id=\"hint\">Show hint: <span class=\"hint\">"
    + alias3(((helper = (helper = helpers.hint || (depth0 != null ? depth0.hint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hint","hash":{},"data":data}) : helper)))
    + "</span></p>\n\n          <!-- would be cool to add div with user's score and addClass show on hover for this information -->\n\n        </div>\n      </div>\n\n      <form class=\"guessInput\" id=\"guessInput\">\n        <input type=\"text\" placeholder=\"What's your guess?\" id=\"guess\" class=\"guess\">\n        <a href=\"#/leaderboard/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><button id=\"guessBtn\" class=\"guessBtn\">Check it!</button></a>\n\n      </form>\n      <div class=\"errormsg\" id=\"errorMsgGuess\"></div>\n\n\n    <div class=\"singleGuesses\" id=\"singleGuesses\">\n      <p id=\"seeOldGuesses\">Show / hide your <span>incorrect</span> guesses</p>\n      <ul class=\"incorrectGuesses\" id=\"incorrectGuesses\">\n      </ul>\n    </div>\n\n    <div class=\"test\"></div>\n\n    </div> <!-- end singleMain -->\n\n  </div> <!-- end singleWrap -->\n";
},"useData":true});