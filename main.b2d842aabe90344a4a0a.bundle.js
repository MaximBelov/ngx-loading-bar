webpackJsonp([1],{0:function(t,e,n){t.exports=n("6Wgd")},"1ITJ":function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="1ITJ"},"6Wgd":function(t,e,n){"use strict";function o(t,e,n){return new w(t,e,n)}Object.defineProperty(e,"__esModule",{value:!0});var r=n("/oeL"),i=n("Qa4U"),a=n("fc+i"),s=n("BkNc"),c=n("fL27"),l=n("cC+T"),u=n("0bRs"),p=n("CPp0"),d=n("qbdv"),f=n("rlar"),b=n("CH/r"),h=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},g=function(){function t(){this.progress$=b.debounceTime.call(new f.Subject),this._pending=new f.Subject,this._pendingRequests=0,this._value=0}return t.prototype.start=function(t){void 0===t&&(t=2),++this._pendingRequests,0!==this._value&&1!==this._pendingRequests||this.set(1===this._pendingRequests&&this._value>0?this._value:t)},t.prototype.complete=function(){var t=this;0===this._pendingRequests&&0===this._value||(this._pendingRequests>0&&--this._pendingRequests,(0===this._pendingRequests||0===this._pendingRequests&&this._value>0)&&(100!==this._value&&this.set(100),setTimeout(function(){return t.set(0)},500)))},t.prototype.set=function(t){var e=this;0===t&&this._pendingRequests>0&&(t=2),this._value=t,this.progress$.next(t),0!==this._pendingRequests&&(clearTimeout(this._incTimeout),this._value>0&&this._value<100&&(this._incTimeout=setTimeout(function(){return e.increment()},250)))},t.prototype.increment=function(t){void 0===t&&(t=0),t>0&&this.set(this._value+t);var e=this._value;t=e>=0&&e<25?3*Math.random()+3:e>=25&&e<65?3*Math.random():e>=65&&e<90?2*Math.random():e>=90&&e<99?.5:0,this.set(this._value+t)},t.prototype.ngOnDestroy=function(){this.progress$.complete()},t=h([Object(r.C)()],t)}(),y=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},v=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},m=function(){function t(t){this.loader=t,this.includeSpinner=!0,this.includeBar=!0,this.fixed=!0}return y([Object(r.F)(),v("design:type",Object)],t.prototype,"includeSpinner",void 0),y([Object(r.F)(),v("design:type",Object)],t.prototype,"includeBar",void 0),y([Object(r.F)(),v("design:type",Object)],t.prototype,"fixed",void 0),y([Object(r.F)(),v("design:type",Object)],t.prototype,"color",void 0),y([Object(r.F)(),v("design:type",Object)],t.prototype,"height",void 0),y([Object(r.F)(),v("design:type",Object)],t.prototype,"diameter",void 0),t=y([Object(r.o)({selector:"ngx-loading-bar",template:'\n    <ng-container *ngIf="(loader.progress$|async) as progress">\n      <div id="loading-bar-spinner" *ngIf="includeSpinner" [style.color]="color">\n        <div [style.width]="diameter" [style.height]="diameter" class="spinner-icon"></div>\n      </div>\n      <div id="loading-bar" *ngIf="includeBar" [style.color]="color">\n        <div class="bar" [style.background]="color" [style.height]="height" [style.width]="progress + \'%\'">\n          <div class="peg" [style.height]="height"></div>\n        </div>\n      </div>\n    </ng-container>\n  ',preserveWhitespaces:!1,styles:[n("O1Sm")],host:{"[class.loading-bar-fixed]":"fixed"}}),v("design:paramtypes",["function"==typeof(e=void 0!==g&&g)&&e||Object])],t);var e}(),j=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},O=function(){function t(){}return e=t,t.forRoot=function(){return{ngModule:e,providers:[g]}},t=e=j([Object(r.M)({imports:[d.b],declarations:[m],exports:[m]})],t);var e}(),R=n("uYJe"),_=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),x=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},M=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},w=function(t){function e(e,n,o){var r=t.call(this,e,n)||this;return r.loadingBar=o,r}return _(e,t),e.prototype.request=function(e,n){var o=this,r=n&&n.headers;if(!r&&e&&e.headers&&(r=e.headers),r&&r.has("ignoreLoadingBar"))return r.delete("ignoreLoadingBar"),t.prototype.request.call(this,e,n);var i=t.prototype.request.call(this,e,n);if(n&&!0===n.ignoreLoadingBar)return i;var a=!1,s=i.subscribe.bind(i);return i.subscribe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o.loadingBar.start(),a=!0,s.apply(void 0,t)},R._finally.call(i,function(){return a&&o.loadingBar.complete()})},e=x([Object(r.C)(),M("design:paramtypes",["function"==typeof(n=void 0!==p.a&&p.a)&&n||Object,"function"==typeof(o=void 0!==p.d&&p.d)&&o||Object,"function"==typeof(i=void 0!==g&&g)&&i||Object])],e);var n,o,i}(p.b),k=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},I=function(){function t(){}return t=k([Object(r.M)({imports:[p.c,O.forRoot()],exports:[p.c,O],providers:[{provide:p.b,useFactory:o,deps:[p.e,p.d,g]}]})],t)}(),P=n("XKz0"),D=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},L=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},C=function(){function t(t){this.loadingBar=t}return t.prototype.intercept=function(t,e){var n=this;if(t.headers.has("ignoreLoadingBar"))return e.handle(t.clone({headers:t.headers.delete("ignoreLoadingBar")}));var o=e.handle(t),r=!1,i=o.subscribe.bind(o);return o.subscribe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.loadingBar.start(),r=!0,i.apply(void 0,t)},R._finally.call(o,function(){return r&&n.loadingBar.complete()})},t=D([Object(r.C)(),L("design:paramtypes",["function"==typeof(e=void 0!==g&&g)&&e||Object])],t);var e}(),T=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},A=function(){function t(){}return t=T([Object(r.M)({imports:[P.c,O.forRoot()],exports:[P.c,O],providers:[{provide:P.a,useClass:C,multi:!0}]})],t)}(),q=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},N=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},B=function(){function t(t,e){t.events.subscribe(function(t){t instanceof s.d&&e.start(),(t instanceof s.c||t instanceof s.b||t instanceof s.a)&&e.complete()})}return t=q([Object(r.M)({imports:[s.f,O.forRoot()],exports:[s.f,O]}),N("design:paramtypes",["function"==typeof(e=void 0!==s.e&&s.e)&&e||Object,"function"==typeof(n=void 0!==g&&g)&&n||Object])],t);var e,n}(),S=n("bKpL"),z=(n("ACG2"),n("5uCp"),n("5v8a"),this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}),F=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},G=function(){function t(t,e,n){this.http=t,this.httpClient=e,this.loader=n,this.timer=0}return t.prototype.ngAfterViewInit=function(){},Object.defineProperty(t.prototype,"count",{get:function(){return this.loader._pendingRequests},enumerable:!0,configurable:!0}),t.prototype.startHttpRequest=function(){var t=this;this.users=[],this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(function(e){return t.users=e.json()})},t.prototype.startHttpClientRequest=function(){var t=this;this.users=[],this.httpClient.get("https://jsonplaceholder.typicode.com/users").take(1).subscribe(function(e){return t.users=e})},t.prototype.start=function(){this.loader.start(10)},t.prototype.set=function(){this.loader.set(50)},t.prototype.increment=function(){this.loader.increment(10)},t.prototype.complete=function(){this.loader.complete()},t.prototype.startTimer=function(){var t=this;S.Observable.interval(1e3).take(3).subscribe(function(e){return t.timer=e+1},function(e){return t.loader.complete()},function(){return t.loader.complete()}),this.loader.start()},t=z([Object(r.o)({selector:"app-root",template:n("XUmN"),changeDetection:r.k.OnPush,styles:["\n    :host {\n      padding: 64px 32px;\n      display: block;\n    }\n  "]}),F("design:paramtypes",["function"==typeof(e=void 0!==p.b&&p.b)&&e||Object,"function"==typeof(o=void 0!==P.b&&P.b)&&o||Object,"function"==typeof(i=void 0!==g&&g)&&i||Object])],t);var e,o,i}(),E=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},Z=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},H=function(){function t(){}return E([Object(r.F)(),Z("design:type",String)],t.prototype,"name",void 0),t=E([Object(r.o)({selector:"app-hello",template:"",changeDetection:r.k.OnPush})],t)}(),J=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},W=function(){function t(){}return t=J([Object(r.M)({declarations:[G,H],imports:[a.a,s.f.forRoot([{path:"",component:H},{path:"home",component:H}]),c.a,l.a,u.a,I,A,B],bootstrap:[G]})],t)}();Object(r._23)(),Object(i.a)().bootstrapModule(W).catch(function(t){return console.log(t)})},O1Sm:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,":host{position:relative;display:block}:host.loading-bar-fixed>div .bar{position:fixed}:host.loading-bar-fixed>div:first-child{position:fixed;top:10px;left:10px}:host.loading-bar-fixed>div .peg{display:block}:host>div{pointer-events:none;transition:all .35s linear;color:#29d}:host>div .bar{transition:width .35s;background:#29d;z-index:10002;left:0;width:100%;border-bottom-right-radius:1px;border-top-right-radius:1px}:host>div .bar,:host>div .peg{position:absolute;top:0;height:2px}:host>div .peg{display:none;width:70px;right:0;opacity:.45;box-shadow:1px 0 6px 1px;color:inherit;border-radius:100%}:host>div:first-child{display:block;position:absolute;z-index:10002;top:5px;left:0}:host>div:first-child .spinner-icon{width:14px;height:14px;border:2px solid transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:loading-bar-spinner .4s linear infinite;animation:loading-bar-spinner .4s linear infinite}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),t.exports=t.exports.toString()},XUmN:function(t,e){t.exports='<div class="container">\n  <div class="row">\n    <div class="text-center col">\n      <h1>@ngx-loading-bar/*</h1>\n      <ngx-loading-bar [color]="\'red\'"></ngx-loading-bar>\n      <router-outlet></router-outlet>\n      <p>\n        Automatic loading bar with zero configuration (http, http-client and router)\n      </p>\n      <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">\n    </div>\n    <div class="col">\n      <h3 class="text-center">\n        Number of pending requests:\n        <span class="badge badge-secondary">{{ count }}</span>\n      </h3>\n      <ul>\n        <li>\n          Load request using `@angular/common/http`\n          <div>\n            <button class="btn btn-sm btn-outline-primary" (click)="startHttpClientRequest()" type="button" name="button">Load</button>\n          </div>\n        </li>\n        <li>\n          Load request using `@angular/http`\n          <div>\n            <button class="btn btn-sm btn-outline-primary" (click)="startHttpRequest()" type="button" name="button">Load</button>\n          </div>\n        </li>\n        <li>\n          Display loading-bar on route navigation `@angular/router`\n          <div>\n            <a class="btn btn-sm btn-outline-primary" role="button" [routerLink]="[\'\']" routerLinkActive="disabled" [routerLinkActiveOptions]="{exact:\ntrue}">\n              page \'/\'\n            </a>\n            <a class="btn btn-sm btn-outline-primary" role="button" [routerLink]="[\'home\']" routerLinkActive="disabled" [routerLinkActiveOptions]="{exact:\ntrue}">\n              page \'/test\'\n            </a>\n          </div>\n        </li>\n        <li>\n          Manage manually loading bar\n          <div>\n            <button class="btn btn-sm btn-outline-primary" (click)="start()" type="button" name="button">Start</button>\n            <button class="btn btn-sm btn-outline-primary" (click)="set()" type="button" name="button">set to 50%</button>\n            <button class="btn btn-sm btn-outline-primary" (click)="increment()" type="button" name="button">increment by 10%</button>\n            <button class="btn btn-sm btn-outline-primary" (click)="complete()" type="button" name="button">Complete</button>\n          </div>\n        </li>\n        <li>\n          With disabled fixed position `[fixed]="false"`\n          <div style="height: 20px;">\n            <ngx-loading-bar [color]="\'black\'" [fixed]="false"></ngx-loading-bar>\n          </div>\n        </li>\n        <li>\n          Manage manually loading bar: using rxjs observable (timer 3 seconds)\n          <div>\n            <button class="btn btn-sm btn-outline-primary" (click)="startTimer()" type="button" name="button">Start Timer ({{ timer }})</button>\n          </div>\n        </li>\n        <li>\n          Using <a href="https://material.angular.io/components/progress-bar/overview" target="_blank">Material Progress bar</a>\n          <mat-progress-bar mode="determinate" [value]="loader.progress$|async"></mat-progress-bar>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n'}},[0]);