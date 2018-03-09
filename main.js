webpackJsonp([0],{

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/connection/connection.module": [
		187
	],
	"../pages/discussion/discussion.module": [
		170
	],
	"../pages/questions/questions.module": [
		167
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPageModule", function() { return QuestionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestionsPageModule = (function () {
    function QuestionsPageModule() {
    }
    QuestionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__questions__["a" /* QuestionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__questions__["a" /* QuestionsPage */]),
            ],
        })
    ], QuestionsPageModule);
    return QuestionsPageModule;
}());

//# sourceMappingURL=questions.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_quest_manager_quest_manager__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionsPage = (function () {
    function QuestionsPage(navCtrl, navParams, storage, qProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.qProv = qProv;
        console.log("I: On commence l'init quest");
        qProv.init_quest_screen(this);
    }
    QuestionsPage.prototype.ionViewDidLoad = function () {
    };
    QuestionsPage.prototype.make_choice = function (choice) {
        console.log("Choix réalisé");
        this.update_storage_resp(this.id_quest, choice);
        console.log("On enlève la première quest de la liste");
        this.quests.splice(0, 1);
        console.log(this.quests);
        this.update_curr_quest();
        this.qProv.update_quests(this);
    };
    QuestionsPage.prototype.update_storage_resp = function (id, resp) {
        console.log("US: On update le storage avec la nouvelle reponse");
        console.log(resp);
        console.log("US: On commence par get resp");
        this.storage.get("resps").then(this.qProv.constr_update_storage(id, resp));
    };
    QuestionsPage.prototype.update_curr_quest = function () {
        console.log("UC: Update_curr_quests");
        var curr_quest = this.quests[0];
        this.id_quest = curr_quest._id;
        this.title = curr_quest.title;
        this.choices = curr_quest.choices;
    };
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-questions',template:/*ion-inline-start:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/pages/questions/questions.html"*/'<!--\n  Generated template for the QuestionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile quizz</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card>\n  <ion-card *ngIf="title">\n    {{title}}\n  </ion-card>\n  <div *ngFor="let choice of choices">\n      <button ion-button round block (click)="make_choice(choice);">{{choice}}</button>        \n  </div>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/pages/questions/questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_quest_manager_quest_manager__["a" /* QuestManagerProvider */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_vars_global_vars__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';





var QuestManagerProvider = (function () {
    function QuestManagerProvider(http, storage, globVars) {
        this.http = http;
        this.storage = storage;
        this.globVars = globVars;
        this.main_url = this.globVars.MAIN_URL;
        this.quest_url = this.main_url + "/questions";
        this.answers_url = this.main_url + "/answers";
        console.log('Hello QuestManagerProvider Provider');
    }
    QuestManagerProvider.prototype.get_quests = function () {
        var token = this.globVars.get_token();
        return this.http.get(this.quest_url, { params: { access_token: token } }).map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    QuestManagerProvider.prototype.put_resp = function (resp) {
        var obj = { "answers": resp };
        var token = this.globVars.get_token();
        return this.http.put(this.answers_url, obj, { params: { access_token: token } })
            .map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    QuestManagerProvider.prototype.init_quest_screen = function (page) {
        var _this = this;
        this.storage.get('quests').then(function (res) {
            if (res != null) {
                console.log("I-Async: Quest stored non-null:");
                console.log(res);
                res = JSON.parse(res);
                page.quests = res;
            }
            else {
                console.log("I-Async: Quest stored null");
                page.quests = [];
            }
            _this.update_quests(page);
        });
    };
    QuestManagerProvider.prototype.update_quests = function (page) {
        var _this = this;
        console.log("UQ: Update quest: ");
        if (page.quests.length < 5) {
            console.log("UQ: Quests < 5. On lance la requete.");
            this.get_quests()
                .subscribe(function (res) {
                console.log("UQ-Async: Requete de quest faite:");
                console.log(res);
                console.log("UQ-Async: On concatène toutes les questions");
                page.quests = page.quests.concat(res);
                console.log(page.quests);
                page.update_curr_quest();
                console.log("UQ-Async: On met a jour toutes les quest a storage");
                _this.storage.set('quests', JSON.stringify(page.quests));
            });
        }
        else {
            page.update_curr_quest();
            console.log("UQ: On met a jour toutes les quest a storage");
            this.storage.set('quests', JSON.stringify(page.quests));
        }
    };
    QuestManagerProvider.prototype.constr_update_storage = function (id, resp) {
        var _this = this;
        return function (res) {
            console.log("US-ASync: Resultats de get resps:");
            console.log(res);
            if (res != null) {
                res = JSON.parse(res);
            }
            else {
                res = {};
            }
            console.log(res);
            console.log("US-Async: On append le nouveau resultat et update storage");
            res[id] = resp;
            if (Object.keys(res).length > 10) {
                console.log("US-Async: Resp trop long: on met en ligne");
                _this.put_resp(res)
                    .subscribe(function (ress) {
                    var oRess = ress; //JSON.parse(ress);
                    if (oRess.status != "ok") {
                        console.log("US-Async2: on met a jour resps de storage");
                        _this.storage.set('resps', JSON.stringify(oRess.responses));
                        alert("Error: could not send resp");
                    }
                    else {
                        console.log("US-Async2: Mise en ligne faite, on efface le resp de storage");
                        _this.storage.set('resps', "{}");
                    }
                });
            }
            else {
                console.log("US-Async: on met a jour resps de storage");
                _this.storage.set('resps', JSON.stringify(res));
            }
        };
    };
    QuestManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__global_vars_global_vars__["a" /* GlobalVarsProvider */]])
    ], QuestManagerProvider);
    return QuestManagerProvider;
}());

//# sourceMappingURL=quest-manager.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPageModule", function() { return DiscussionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discussion__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiscussionPageModule = (function () {
    function DiscussionPageModule() {
    }
    DiscussionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__discussion__["a" /* DiscussionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__discussion__["a" /* DiscussionPage */]),
            ],
        })
    ], DiscussionPageModule);
    return DiscussionPageModule;
}());

//# sourceMappingURL=discussion.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_disc_manager_disc_manager__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscussionPage = (function () {
    function DiscussionPage(navCtrl, navParams, dProv, globVars) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dProv = dProv;
        this.globVars = globVars;
        if (this.display_name()) {
            this.dProv.init_discussion(this);
            this.dProv.listen_messages(this);
            this.role = globVars.role;
        }
    }
    DiscussionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiscussionPage');
    };
    DiscussionPage.prototype.display_name = function () {
        var name = this.globVars.currentMatch;
        if (name.length > 0) {
            this.name = name;
            return true;
        }
        else {
            return false;
        }
    };
    DiscussionPage.prototype.add_last_messages = function (messages) {
        console.log("Update-online: messages to add");
        console.log(messages);
        var msgs = this.messages;
        msgs = msgs.concat(messages);
        this.display_messages(msgs);
        this.dProv.store_discussion(this.obj_discussion());
    };
    DiscussionPage.prototype.display_messages = function (messages) {
        if (messages === void 0) { messages = null; }
        messages = messages || this.messages || null;
        console.log("DM: messages to sort");
        console.log(messages);
        if (messages != null) {
            messages.sort(function (a, b) {
                return (a.time > b.time) ? 1 : -1;
            });
            console.log(messages);
            this.messages = messages;
        }
    };
    DiscussionPage.prototype.send_message = function () {
        console.log("Message envoyé: " + this.curr_message);
        var new_mess = {
            "content": this.curr_message,
            "time": Date.now(),
            "type": this.role
        };
        //    this.messages.push(new_mess);
        //    this.display_messages();
        //    this.dProv.store_discussion(this.obj_discussion());
        this.dProv.send_msg(new_mess);
        this.curr_message = "";
    };
    DiscussionPage.prototype.obj_discussion = function () {
        return this.make_obj_discussion(this.name, this.messages);
    };
    DiscussionPage.prototype.make_obj_discussion = function (name, messages) {
        return {
            "name": name,
            "messages": messages
        };
    };
    DiscussionPage.prototype.get_type = function (type) {
        if (type == this.role) {
            return "host";
        }
        else {
            return "guest";
        }
    };
    DiscussionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-discussion',template:/*ion-inline-start:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/pages/discussion/discussion.html"*/'<!--\n  Generated template for the DiscussionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf=\'name\'>Discussion with {{name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid *ngIf=\'messages\'>\n  <ion-card id="disc_message" *ngFor="let message of messages">\n    <div class="{{get_type(message.type)}}">{{message.content}}</div>\n  </ion-card>\n</ion-grid>\n<form (ngSubmit)="send_message()">\n    <ion-input [(ngModel)]="curr_message" name="message_text" type="text"></ion-input>\n    <button ion-button type="submit">Send</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/pages/discussion/discussion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_disc_manager_disc_manager__["a" /* DiscManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */]])
    ], DiscussionPage);
    return DiscussionPage;
}());

//# sourceMappingURL=discussion.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_vars_global_vars__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiscManagerProvider = (function () {
    function DiscManagerProvider(http, storage, globVars, socket) {
        this.http = http;
        this.storage = storage;
        this.globVars = globVars;
        this.socket = socket;
        this.main_url = this.globVars.MAIN_URL;
        this.disc_url = this.main_url + "/discussions";
        this.mess_url = this.main_url + "/discussions/message";
        console.log('Hello DiscManagerProvider Provider');
    }
    DiscManagerProvider.prototype.listen_messages = function (page) {
        console.log("LM: opening socket listener");
        this.socket.connect();
        this.socket.emit('room', this.globVars.get_socket_name());
        this.socket.on('message', function (msgs) {
            console.log("LM: message received" + msgs.toString());
            page.add_last_messages(msgs);
        });
    };
    DiscManagerProvider.prototype.req_send_msg = function (msg) {
        var token = this.globVars.get_token();
        return this.http.post(this.mess_url, { "messages": [msg] }, { params: { access_token: token } }).map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    DiscManagerProvider.prototype.req_get_discussion = function (last_time) {
        if (last_time === void 0) { last_time = null; }
        var token = this.globVars.get_token();
        return this.http.get(this.disc_url, { params: { access_token: token } }).map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    DiscManagerProvider.prototype.disp_discussion = function (data, page) {
        page.display_messages(data.messages);
    };
    DiscManagerProvider.prototype.get_disp_online_data = function (page) {
        var _this = this;
        this.req_get_discussion()
            .subscribe(function (res) {
            _this.disp_discussion(res, page);
            _this.store_discussion(res);
        });
    };
    DiscManagerProvider.prototype.send_msg = function (msg) {
        console.log("SM: on envoie le message");
        this.req_send_msg(msg)
            .subscribe(function (res) {
            var oRess = res; //JSON.parse(ress);
            if (oRess.status != "ok") {
                console.log("SM-Async: Erreur de requete");
                alert("Error: could not send message");
            }
            else {
                console.log("SM-Async: Message envoyé");
            }
        });
    };
    DiscManagerProvider.prototype.init_discussion = function (page) {
        var _this = this;
        console.log("ID: debut initialisation discussion");
        this.storage.get('discussion').then(function (res) {
            res = res || null;
            console.log("Async-ID: messages de storage");
            console.log(res);
            if (res !== null) {
                _this.disp_discussion(JSON.parse(res), page);
            }
            _this.get_disp_online_data(page);
        });
    };
    DiscManagerProvider.prototype.store_discussion = function (discussion) {
        this.storage.set("discussion", JSON.stringify(discussion));
    };
    DiscManagerProvider.prototype.ionViewWillLeave = function () {
        this.socket.removeAllListeners();
        this.socket.disconnect();
    };
    DiscManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__global_vars_global_vars__["a" /* GlobalVarsProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"]])
    ], DiscManagerProvider);
    return DiscManagerProvider;
}());

//# sourceMappingURL=disc-manager.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPageModule", function() { return ConnectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConnectionPageModule = (function () {
    function ConnectionPageModule() {
    }
    ConnectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__connection__["a" /* ConnectionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__connection__["a" /* ConnectionPage */]),
            ],
        })
    ], ConnectionPageModule);
    return ConnectionPageModule;
}());

//# sourceMappingURL=connection.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_vars_global_vars__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HTTP } from '@ionic-native/http';








var ConnectionPage = (function () {
    function ConnectionPage(navCtrl, navParams, storage, alertCtrl, http, 
        //private http: HTTP,
        socket, globVars) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.socket = socket;
        this.globVars = globVars;
        this.main_url = this.globVars.MAIN_URL;
        this.auth_url = this.main_url + "/auth";
        this.subs_url = this.main_url + "/new_user";
        this.check_storage();
        this.subs_is_disp = false;
    }
    ConnectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConnectionPage');
    };
    ConnectionPage.prototype.req_auth = function (logins) {
        return this.http.post(this.auth_url, logins).map(function (res) { return res.json(); }); //{
        //    return this.http.post(this.auth_url, logins).map(res => {
        //        console.log(JSON.stringify(res));
        //        return res.json();
        //    });
    };
    /*
        return new Observable(observer => {
            if((logins.email_conn == "w848") && (logins.password_conn == "password")){
              observer.next(JSON.parse(JSON.stringify(this.example_good)));
            }
            else{
              observer.next(JSON.parse(JSON.stringify(this.example_bad)));
            }
          }
        );
      }
    */
    ConnectionPage.prototype.req_subs = function (subs) {
        return this.http.post(this.subs_url, subs).map(function (res) { return res.json(); });
    };
    ConnectionPage.prototype.launch_connect = function () {
        var _this = this;
        console.log("LC: Try connection");
        var logins = this.make_logins();
        console.log(JSON.stringify(logins));
        if ((this.email_conn.length > 0) && (this.password_conn.length > 0)) {
            //      this.req_auth(logins).then(res => {
            this.req_auth(logins).subscribe(function (res) {
                console.log("Async-LC: Result from connection");
                console.log(res);
                if (!res.code) {
                    console.log("Async-LC: Connection accepted: updating storage");
                    _this.globVars.init_glob(res);
                    _this.globVars.set_user_info(res);
                    _this.storage.set("logins", JSON.stringify(_this.make_logins()));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    alert(res.data.message);
                }
            }, function (error) {
                console.log(error);
                alert(JSON.parse(error._body).code);
            });
        }
    };
    ConnectionPage.prototype.launch_subs = function () {
        var _this = this;
        console.log("LS: Try subscribing");
        var subs = this.make_subs();
        console.log(JSON.stringify(subs));
        if (subs.error) {
            console.log("Erreur déclenchée");
            console.log(subs.error);
            this.password_subs = "";
            this.password2_subs = "";
            var alert_1 = this.alertCtrl.create({
                title: 'Subscribing error',
                subTitle: subs.error,
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        else {
            console.log("LS: trying subscribe request");
            this.req_subs(subs).subscribe(function (res) {
                console.log("Async-LC: Result from connection");
                console.log(res);
                if (!res.code) {
                    console.log("Async-LC: Subscribing accepted");
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Profile waiting to be confirmed',
                        subTitle: "An email has been sent to your adress, please confirm your account",
                        buttons: ['Dismiss']
                    });
                    _this.disp_subs();
                }
                else {
                    console.log("Async-LC: Subscribing refused");
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Profile refused',
                        subTitle: res.message,
                        buttons: ['Dismiss']
                    });
                }
            });
        }
    };
    ConnectionPage.prototype.check_storage = function () {
        var _this = this;
        console.log("CS: Checking storage");
        this.storage.get("logins").then(function (res) {
            console.log("Async-CS: Here is logins");
            console.log(res);
            if (res != null) {
                console.log("Async-CS: Updating page.data");
                res = JSON.parse(res);
                console.log(res);
                _this.email_conn = res.email || "";
                _this.password_conn = res.password || "";
                _this.autoconnect = res.autoconnect || false;
                if (res.autoconnect) {
                    _this.launch_connect();
                }
            }
            else {
                console.log("Async-CS: Initialising page.data to ''");
                _this.email_conn = "";
                _this.password_conn = "";
                _this.autoconnect = false;
            }
        });
    };
    ConnectionPage.prototype.make_logins = function () {
        var obj = { "email": this.email_conn,
            "password": this.password_conn,
            "autoconnect": this.autoconnect
        };
        return JSON.parse(JSON.stringify(obj));
    };
    ConnectionPage.prototype.make_subs = function () {
        var obj = null;
        if (this.lastName.length == 0) {
            obj = { "error": "Please fill up family name" };
        }
        else if (this.firstName.length == 0) {
            obj = { "error": "Please fill up first name" };
        }
        else if (this.email_subs.length == 0) {
            obj = { "error": "Please fill up email" };
        }
        else if (this.password_subs.length == 0) {
            obj = { "error": "Please fill up password" };
        }
        else if (this.password_subs !== this.password2_subs) {
            obj = { "error": "The passwords are different" };
        }
        else {
            obj = {
                "error": false,
                "lastName": this.lastName,
                "firstName": this.firstName,
                "email": this.email_subs,
                "password": this.password_subs,
                "password2": this.password2_subs,
            };
        }
        return JSON.parse(JSON.stringify(obj));
    };
    ConnectionPage.prototype.disp_subs = function () {
        console.log("Subscribing menu displayed");
        this.subs_is_disp = !this.subs_is_disp;
    };
    ConnectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-connection',template:/*ion-inline-start:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/pages/connection/connection.html"*/'<!--\n  Generated template for the ConnectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Connection</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="launch_connect()">\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input [(ngModel)]="email_conn" name="email" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input [(ngModel)]="password_conn" name="password" type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Connexion automatique ?</ion-label>\n      <ion-checkbox color="dark" [(ngModel)]="autoconnect" checked="autoconnect" name="check_autoconnect"></ion-checkbox>\n    </ion-item>\n\n    <button ion-button type="submit">Sign in</button>\n\n  </form>        \n\n  <button ion-button *ngIf="!subs_is_disp" (click)="disp_subs();">No account yet ?</button>\n\n  <div *ngIf="subs_is_disp" id="subs_menu">\n    <ion-title >No account yet ?</ion-title>\n\n    <form (ngSubmit)="launch_subs()">\n\n      <ion-item>\n        <ion-label stacked>Family name</ion-label>\n        <ion-input [(ngModel)]="lastName" name="fam_name" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>First name</ion-label>\n        <ion-input [(ngModel)]="firstName" name="fam_name" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input [(ngModel)]="email_subs" name="email" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input [(ngModel)]="password_subs" name="password" type="password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Type the password again</ion-label>\n        <ion-input [(ngModel)]="password2_subs" name="password" type="password"></ion-input>\n      </ion-item>\n\n      <button ion-button type="submit">Sign up</button>\n\n    </form>        \n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/pages/connection/connection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */]])
    ], ConnectionPage);
    return ConnectionPage;
}());

//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questions_questions__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discussion_discussion__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navCtrl, storage, socket) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.socket = socket;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__questions_questions__["a" /* QuestionsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__discussion_discussion__["a" /* DiscussionPage */];
        this.home_icon = "ios-home-outline";
        this.quest_icon = "ios-pizza-outline";
        this.disc_icon = "ios-chatboxes-outline";
    }
    TabsPage.prototype.log_out = function () {
        var _this = this;
        this.storage.get("logins").then(function (res) {
            if (res != null) {
                console.log("LO: restore autoconnect to false");
                res = JSON.parse(res);
                res.autoconnect = false;
                _this.storage.set("logins", JSON.stringify(res));
            }
            console.log("LO: Back to connectionPage");
            _this.navCtrl.pop();
        });
        this.socket.removeAllListeners();
        this.socket.disconnect();
    };
    TabsPage.prototype.change_icon = function (icon) {
        switch (icon) {
            case "home":
                this.home_icon = this.sel_icon(this.home_icon);
                this.quest_icon = this.unsel_icon(this.quest_icon);
                this.disc_icon = this.unsel_icon(this.disc_icon);
                break;
            case "quest":
                this.home_icon = this.unsel_icon(this.home_icon);
                this.quest_icon = this.sel_icon(this.quest_icon);
                this.disc_icon = this.unsel_icon(this.disc_icon);
                break;
            case "disc":
                this.home_icon = this.unsel_icon(this.home_icon);
                this.quest_icon = this.unsel_icon(this.quest_icon);
                this.disc_icon = this.sel_icon(this.disc_icon);
                break;
        }
        ;
    };
    TabsPage.prototype.sel_icon = function (txt) {
        if (txt.indexOf("-outline") !== -1) {
            return txt.substr(0, txt.length - 8);
        }
        return txt;
    };
    TabsPage.prototype.unsel_icon = function (txt) {
        if (txt.indexOf("-outline") === -1) {
            return txt + "-outline";
        }
        return txt;
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="1">\n  <ion-tab [root]="tab1Root" (ionSelect)="change_icon(\'home\')" tabTitle="Home" tabIcon={{home_icon}}></ion-tab>\n  <ion-tab [root]="tab2Root" (ionSelect)="change_icon(\'quest\')" tabTitle="Questions" tabIcon={{quest_icon}}></ion-tab>\n  <ion-tab [root]="tab3Root" (ionSelect)="change_icon(\'disc\')" tabTitle="Discussion" tabIcon={{disc_icon}}></ion-tab>\n</ion-tabs>\n<form (ngSubmit)="log_out()">\n  <button ion-button type="submit">Log out</button>\n</form>\n\n'/*ion-inline-end:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_home_manager_home_manager__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, globVars, hProv) {
        this.navCtrl = navCtrl;
        this.globVars = globVars;
        this.hProv = hProv;
        this.surname = this.globVars.lastName;
        this.first_name = this.globVars.firstName;
        this.email = this.globVars.email;
        this.other_first_name = this.globVars.currentMatch;
    }
    HomePage.prototype.traits = function () {
        return []; //"Audace", "Exigence", "Respect"];
    };
    HomePage.prototype.other_traits = function () {
        return []; //"Sport", "Timidité", "Fan de José Garcia"];
    };
    HomePage.prototype.show_modify = function () {
        var _this = this;
        var alert = this.hProv.create_modify_alert(this);
        alert.present().then(function () {
            _this.boo_modify_open = true;
        });
    };
    HomePage.prototype.show_modify_mdp = function () {
        var _this = this;
        var alert = this.hProv.create_modify_mdp_alert(this);
        alert.present().then(function () {
            _this.boo_modify_open = true;
        });
    };
    HomePage.prototype.show_evaluate = function () {
        var _this = this;
        var alert = this.hProv.create_eval_alert(this);
        alert.present().then(function () {
            _this.boo_eval_open = true;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n      <ion-card-header>\n        Ton profil\n      </ion-card-header>\n      \n      <ion-list>\n          <ion-item>\n              <ion-icon name="person"></ion-icon>\n              {{surname}} {{first_name}}\n          </ion-item>\n\n          <ion-item>\n              <ion-icon name="at"></ion-icon>\n              {{email}}\n          </ion-item>\n          <button ion-button color="secondary" outline (click)="show_modify()">Modifier compte</button>\n          <button ion-button color="secondary" outline (click)="show_modify_mdp()">Modifier mot de passe</button>\n      \n          <ion-item>\n              <ion-icon name="podium"></ion-icon>\n              Tes traits forts\n              <ion-list>\n                  <ion-item *ngFor="let trait of traits()">\n                - {{trait}}\n              </ion-item>\n            </ion-list>\n          </ion-item>\n\n      </ion-list>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Son profil\n    </ion-card-header>\n    \n    <ion-list>\n        <ion-item>\n            <ion-icon name="person"></ion-icon>\n            {{other_first_name}}\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name="podium"></ion-icon>\n            Ses traits forts\n            <ion-list>\n                <ion-item *ngFor="let trait of other_traits()">\n              - {{trait}}\n            </ion-item>\n          </ion-list>\n        </ion-item>\n  </ion-list>\n    <button ion-button color="secondary" outline (click)="show_evaluate()">Evaluer la relation</button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_home_manager_home_manager__["a" /* HomeManagerProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_vars_global_vars__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeManagerProvider = (function () {
    function HomeManagerProvider(http, alert_ctrl, globVars) {
        this.http = http;
        this.alert_ctrl = alert_ctrl;
        this.globVars = globVars;
        this.main_url = this.globVars.MAIN_URL;
        this.eval_url = this.main_url + "/evals";
        this.user_details_url = this.main_url + "/users/details";
        this.user_pswd_url = this.main_url + "/users/password";
        console.log('Hello HomeManagerProvider Provider');
    }
    HomeManagerProvider.prototype.update_details = function (data) {
        var data_up = {
            firstName: data.first_name,
            lastName: data.surname
        };
        var token = this.globVars.get_token();
        console.log("Sending details update");
        return this.http.put(this.user_details_url, { to_update: data_up }, { params: { access_token: token } }).map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    HomeManagerProvider.prototype.update_password = function (data) {
        var token = this.globVars.get_token();
        console.log("Sending details update");
        return this.http.put(this.user_pswd_url, {
            password: data.curr_pswd,
            new_password: data.new_pswd
        }, { params: { access_token: token } }).map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    HomeManagerProvider.prototype.send_eval = function (mark) {
        var token = this.globVars.get_token();
        console.log("Sending eval");
        return this.http.put(this.eval_url, { eval: mark }, { params: { access_token: token } }).map(function (res) {
            return res.json();
        });
    };
    HomeManagerProvider.prototype.create_eval_alert = function (page) {
        var _this = this;
        var alert = this.alert_ctrl.create();
        alert.setTitle('Evalue ta relationa avec cette personne');
        for (var i = 1; i <= 5; i++) {
            alert.addInput({
                type: 'radio',
                label: i.toString(),
                value: i.toString(),
                checked: false
            });
        }
        alert.addButton({
            text: 'Cancel',
            handler: function (data) {
                page.boo_eval_open = false;
                console.log("Eval cancelled");
            }
        });
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                page.eval_res = Number(data);
                console.log("Eval chosen " + page.eval_res);
                _this.send_eval(data).subscribe(function (res) {
                    console.log(res);
                    if (res.status === "ok") {
                        console.log("Eval posted without error");
                    }
                    else {
                        console.log("Eval not posted: " + res.message);
                    }
                });
                page.boo_eval_open = false;
            }
        });
        return alert;
    };
    HomeManagerProvider.prototype.create_modify_alert = function (page) {
        var _this = this;
        return this.alert_ctrl.create({
            title: "Modification",
            message: "Change tes coordonnées",
            inputs: [
                {
                    name: "surname",
                    placeholder: page.surname.toString(),
                },
                {
                    name: "first_name",
                    placeholder: page.first_name.toString(),
                }
            ],
            buttons: [
                {
                    text: 'Annuler',
                    handler: function (data) {
                        console.log('Cancel clicked');
                        page.boo_modify_open = false;
                    }
                },
                {
                    text: 'Valider',
                    handler: function (data) {
                        console.log('Infos modifiées');
                        console.log(data);
                        if (page.surname !== data.surname
                            || page.first_name !== data.first_name) {
                            data.surname = data.surname || page.surname;
                            data.first_name = data.first_name || page.first_name;
                            _this.update_details(data).subscribe(function (res) {
                                if (res.status === "ok") {
                                    page.surname = data.surname;
                                    page.first_name = data.first_name;
                                }
                            });
                        }
                        page.boo_modify_open = false;
                    }
                }
            ]
        });
    };
    HomeManagerProvider.prototype.create_modify_mdp_alert = function (page) {
        var _this = this;
        return this.alert_ctrl.create({
            title: "Modification MdP",
            message: "Change ton mot de passe",
            inputs: [
                {
                    name: "curr_pswd",
                    placeholder: "Mot de passe actuel",
                    type: "password"
                },
                {
                    name: "new_pswd",
                    placeholder: "Nouveau mot de passe",
                    type: "password"
                },
                {
                    name: "new_pswd_2",
                    placeholder: "Nouveau mot de passe",
                    type: "password"
                }
            ],
            buttons: [
                {
                    text: 'Annuler',
                    handler: function (data) {
                        console.log('Cancel clicked');
                        page.boo_modify_open = false;
                    }
                },
                {
                    text: 'Valider',
                    handler: function (data) {
                        if (data.new_pswd !== data.new_pswd_2) {
                            console.log("Mdps pas identiques");
                        }
                        else {
                            console.log("Mdp modifié");
                        }
                        console.log('Infos modifiées');
                        console.log(data);
                        _this.update_password(data).subscribe(function (res) {
                            if (res.status === "ok") {
                                console.log("Password modified with success");
                            }
                            else {
                                console.log("Problem with updating password: " + res.message);
                            }
                        });
                        page.boo_modify_open = false;
                        page.boo_modify_open = false;
                    }
                }
            ]
        });
    };
    HomeManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__global_vars_global_vars__["a" /* GlobalVarsProvider */]])
    ], HomeManagerProvider);
    return HomeManagerProvider;
}());

//# sourceMappingURL=home-manager.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(257);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_questions_questions_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_discussion_discussion_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_connection_connection_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_quest_manager_quest_manager__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_disc_manager_disc_manager__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_global_vars_global_vars__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_home_manager_home_manager__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var config = { url: 'http://localhost:9000/discussions', options: {} };












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/questions/questions.module#QuestionsPageModule', name: 'QuestionsPage', segment: 'questions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discussion/discussion.module#DiscussionPageModule', name: 'DiscussionPage', segment: 'discussion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/connection/connection.module#ConnectionPageModule', name: 'ConnectionPage', segment: 'connection', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_12__pages_connection_connection_module__["ConnectionPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_questions_questions_module__["QuestionsPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_discussion_discussion_module__["DiscussionPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_quest_manager_quest_manager__["a" /* QuestManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_disc_manager_disc_manager__["a" /* DiscManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_home_manager_home_manager__["a" /* HomeManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__["a" /* HTTP */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalVarsProvider = (function () {
    //  MAIN_URL = "https://adeq.rezoleo.fr";
    function GlobalVarsProvider() {
        //  MAIN_URL = "http://127.0.0.1:9000";
        //  MAIN_URL = "http://192.168.0.15:9000";
        this.MAIN_URL = "http://localhost:9000";
        console.log('Hello GlobalVarsProvider Provider');
        this.TOKEN = "";
    }
    GlobalVarsProvider.prototype.set_token = function (token) { this.TOKEN = token; };
    GlobalVarsProvider.prototype.get_token = function () { return this.TOKEN; };
    GlobalVarsProvider.prototype.set_socket_name = function (name) { this.socket_name = name; };
    GlobalVarsProvider.prototype.get_socket_name = function () { return this.socket_name; };
    GlobalVarsProvider.prototype.set_role = function (role) { this.role = role; };
    GlobalVarsProvider.prototype.get_role = function () { return this.role; };
    GlobalVarsProvider.prototype.set_lastName = function (name) { this.lastName = name; };
    GlobalVarsProvider.prototype.get_lastName = function () { return this.lastName; };
    GlobalVarsProvider.prototype.set_firstName = function (name) { this.firstName = name; };
    GlobalVarsProvider.prototype.get_firstName = function () { return this.firstName; };
    GlobalVarsProvider.prototype.set_email = function (email) { this.email = email; };
    GlobalVarsProvider.prototype.get_email = function () { return this.email; };
    GlobalVarsProvider.prototype.set_currentMatch = function (match) { this.currentMatch = match; };
    GlobalVarsProvider.prototype.get_currentMatch = function () { return this.currentMatch; };
    GlobalVarsProvider.prototype.init_glob = function (res) {
        this.set_token(res.token);
        this.set_socket_name(res.room_name);
        this.set_role(res.role);
    };
    GlobalVarsProvider.prototype.set_user_info = function (res) {
        this.set_email(res.email);
        this.set_firstName(res.firstName);
        this.set_lastName(res.lastName);
        this.set_currentMatch(res.currentMatch);
    };
    GlobalVarsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalVarsProvider);
    return GlobalVarsProvider;
}());

//# sourceMappingURL=global-vars.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_connection_connection__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_connection_connection__["a" /* ConnectionPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_connection_connection__["a" /* ConnectionPage */];
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/w848/AndroidStudioProjects/adeqwacy_project/adeq_front/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[234]);
//# sourceMappingURL=main.js.map