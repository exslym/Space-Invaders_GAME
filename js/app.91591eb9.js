!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(0);var n=i.p+"public/sounds/shoot.wav",r=i.p+"public/images/space2.png",o=i.p+"public/images/player.png",s=i.p+"public/sounds/enemy-death.wav";function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var a=function(){function t(e,i,n,r,h,a,u,c){var d=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"rightPressed",!1),l(this,"leftPressed",!1),l(this,"shootPressed",!1),l(this,"keydown",(function(t){"ArrowLeft"==t.code&&(d.leftPressed=!0),"ArrowRight"==t.code&&(d.rightPressed=!0),"Space"==t.code&&(d.shootPressed=!0)})),l(this,"keyup",(function(t){"ArrowLeft"==t.code&&(d.leftPressed=!1),"ArrowRight"==t.code&&(d.rightPressed=!1),"Space"==t.code&&(d.shootPressed=!1)})),l(this,"handleStart",(function(t){"leftArrow"==t.target.id&&(t.preventDefault(),t.stopPropagation(),d.leftPressed=!0),"rightArrow"==t.target.id&&(t.preventDefault(),t.stopPropagation(),d.rightPressed=!0),"fireButton"==t.target.id&&(t.preventDefault(),t.stopPropagation(),d.shootPressed=!0)})),l(this,"handleEnd",(function(t){"leftArrow"==t.target.id&&(d.leftPressed=!1),"rightArrow"==t.target.id&&(d.rightPressed=!1),"fireButton"==t.target.id&&(d.shootPressed=!1)})),this.canvas=e,this.velocity=i,this.bulletController=n,this.x=this.canvas.width/2-r/2,this.y=this.canvas.height-2*r,this.y<=this.canvas.height-75&&(this.y=this.canvas.height-75),this.width=r,this.height=h,this.image=new Image,this.image.src=o,this.leftArrow=a,this.rightArrow=u,this.fireButton=c,this.deathSound=new Audio(s),this.deathSound.volume=.5,document.addEventListener("keydown",this.keydown),document.addEventListener("keyup",this.keyup),this.leftArrow.addEventListener("touchstart",this.handleStart),this.leftArrow.addEventListener("touchend",this.handleEnd),this.rightArrow.addEventListener("touchstart",this.handleStart),this.rightArrow.addEventListener("touchend",this.handleEnd),this.fireButton.addEventListener("touchstart",this.handleStart),this.fireButton.addEventListener("touchend",this.handleEnd)}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){this.move(),this.collideWidthWalls(),this.shootPressed&&this.bulletController.shoot(this.x+this.width/2,this.y,4,10),t.drawImage(this.image,this.x,this.y,this.width,this.height)}},{key:"move",value:function(){this.rightPressed?this.x+=this.velocity:this.leftPressed&&(this.x+=-this.velocity)}},{key:"collideWidthWalls",value:function(){this.x<0&&(this.x=0),this.x>this.canvas.width-this.width&&(this.x=this.canvas.width-this.width)}}])&&h(e.prototype,i),n&&h(e,n),t}(),u={left:0,right:1,downLeft:2,downRight:3},c=i.p+"public/images/enemy1.png",d=i.p+"public/images/enemy2.png",f=i.p+"public/images/enemy3.png";function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var m=function(){function t(e,i,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=r,this.height=o,this.image=new Image,1===n?this.image.src=c:2===n?this.image.src=d:3===n&&(this.image.src=f)}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){t.drawImage(this.image,this.x,this.y,this.width,this.height)}},{key:"move",value:function(t,e){this.x+=t,this.y+=e}},{key:"collideWith",value:function(t){return this.x+this.width>t.x&&this.x<t.x+t.width&&this.y+this.height>t.y&&this.y<t.y+t.height}}])&&y(e.prototype,i),n&&y(e,n),t}(),v=i.p+"public/sounds/enemy-death1.wav",w=i.p+"public/sounds/enemy-death2.wav";function p(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return g(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,h=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){h=!0,o=t},f:function(){try{s||null==i.return||i.return()}finally{if(h)throw o}}}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function b(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var A=window,T=document.getElementsByTagName("body")[0],k=A.innerWidth||T.clientWidth,E=44,S=32,D=1.36,I=1.36,P=1.6,B=1;k<=1024&&(E*=.85,S*=.85),k<=600&&(E*=.7,S*=.7,D*=1.1,I*=1,P=1,B=.7),k<=425&&(E*=.55,S*=.55,D*=1.2,I*=1.1,P=.9,B=.6),Audio.prototype.stop=function(){this.pause(),this.currentTime=0},Audio.prototype.restart=function(){this.pause(),this.currentTime=0,this.play()};var C=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,"enemyMap",[[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[2,2,2,3,3,3,3,2,2,2],[2,2,2,3,3,3,3,2,2,2],[1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2]]),x(this,"enemyRows",[]),x(this,"currentDirection",u.right),x(this,"xVelocity",0),x(this,"yVelocity",0),x(this,"defaultXVelocity",P),x(this,"defaultYVelocity",B),x(this,"moveDownTimerDefault",32),x(this,"moveDownTimer",this.moveDownTimerDefault),x(this,"fireBulletTimerDefault",100),x(this,"fireBulletTimer",this.fireBulletTimerDefault),x(this,"arrayIndex",0),this.canvas=e,this.enemyBulletController=i,this.playerBulletController=n,this.createEnemies(),this.deathSound1=new Audio(v),this.deathSound2=new Audio(w),this.sounds=[this.deathSound1,this.deathSound2],this.sounds.forEach((function(t){t.volume=.5}))}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){this.decrementMoveDownTimer(),this.updateVelocityAndDirection(),this.collisionDetection(),this.drawEnemies(t),this.resetMoveDownTimer(),this.fireBullet()}},{key:"getItem",value:function(t){return this.item=t[this.arrayIndex++],this.arrayIndex===t.length&&(this.arrayIndex=0),this.item.stop(),this.item}},{key:"collisionDetection",value:function(){var t=this;this.enemyRows.forEach((function(e){e.forEach((function(i,n){t.playerBulletController.collideWith(i)&&(t.getItem(t.sounds).restart(),e.splice(n,1))}))})),this.enemyRows=this.enemyRows.filter((function(t){return t.length>0}))}},{key:"fireBullet",value:function(){if(this.fireBulletTimer--,this.fireBulletTimer<=0){this.fireBulletTimer=this.fireBulletTimerDefault;var t=this.enemyRows.flat(),e=t[Math.floor(Math.random()*t.length)];this.enemyBulletController.shoot(e.x,e.y,-4)}}},{key:"decrementMoveDownTimer",value:function(){this.currentDirection!==u.downLeft&&this.currentDirection!==u.downRight||this.moveDownTimer--}},{key:"resetMoveDownTimer",value:function(){this.moveDownTimer<=0&&(this.moveDownTimer=this.moveDownTimerDefault)}},{key:"updateVelocityAndDirection",value:function(){var t,e=p(this.enemyRows);try{for(e.s();!(t=e.n()).done;){var i=t.value;if(this.currentDirection===u.right){this.xVelocity=this.defaultXVelocity,this.yVelocity=0;var n=i[i.length-1];if(n.x&&n.x+n.width>=this.canvas.width){this.currentDirection=u.downLeft;break}}else if(this.currentDirection===u.downLeft){if(this.moveDown(u.left))break}else if(this.currentDirection===u.left){this.xVelocity=-this.defaultXVelocity,this.yVelocity=0;var r=i[0];if(r.x&&r.x<=0){this.currentDirection=u.downRight;break}}else if(this.currentDirection===u.downRight&&this.moveDown(u.right))break}}catch(t){e.e(t)}finally{e.f()}}},{key:"moveDown",value:function(t){return this.xVelocity=0,this.yVelocity=this.defaultYVelocity,this.moveDownTimer<=0&&(this.currentDirection=t,!0)}},{key:"drawEnemies",value:function(t){var e=this;this.enemyRows.flat().forEach((function(i){i.move(e.xVelocity,e.yVelocity),i.draw(t)}))}},{key:"createEnemies",value:function(){var t=this;this.enemyMap.forEach((function(e,i){t.enemyRows[i]=[],e.forEach((function(e,n){e>0&&t.enemyRows[i].push(new m(n*E*D,i*S*I,e,E,S))}))}))}},{key:"collideWith",value:function(t){return this.enemyRows.flat().some((function(e){return e.collideWith(t)}))}}])&&b(e.prototype,i),n&&b(e,n),t}();function L(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var O=function(){function t(e,i,n,r,o,s,h){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.x=i-s/2,this.y=n,this.velocity=r,this.bulletColor=o,this.width=s,this.height=h}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){this.y-=this.velocity,t.fillStyle=this.bulletColor,t.fillRect(this.x,this.y,this.width,this.height)}},{key:"collideWith",value:function(t){return this.x+this.width>t.x&&this.x<t.x+t.width&&this.y+this.height>t.y&&this.y<t.y+t.height}}])&&L(e.prototype,i),n&&L(e,n),t}(),R=i.p+"public/sounds/shoot1.wav",V=i.p+"public/sounds/shoot2.wav";function W(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function j(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var M=window,N=document.getElementsByTagName("body")[0],q=M.innerWidth||N.clientWidth,_=5,X=20;q<=1024&&(_*=.85,X*=.85),q<=600&&(_*=.75,X*=.75,1.1),q<=425&&(_*=.7,X*=.7,1.2),Audio.prototype.stop=function(){this.pause(),this.currentTime=0},Audio.prototype.restart=function(){this.pause(),this.currentTime=0,this.play()};var Y=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,"bullets",[]),j(this,"timeTillNextBulletAllowed",0),j(this,"arrayIndex",0),this.canvas=e,this.maxBulletsAtATime=i,this.bulletColor=n,this.soundEnabled=r,this.shootSound1=new Audio(R),this.shootSound2=new Audio(V),this.sounds=[this.shootSound1,this.shootSound2],this.sounds.forEach((function(t){t.volume=.5}))}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){var e=this;this.bullets=this.bullets.filter((function(t){return t.y+t.width>0&&t.y<=e.canvas.height})),this.bullets.forEach((function(e){return e.draw(t)})),this.timeTillNextBulletAllowed>0&&this.timeTillNextBulletAllowed--}},{key:"collideWith",value:function(t){var e=this.bullets.findIndex((function(e){return e.collideWith(t)}));if(e>=0)return this.bullets.splice(e,1),!0}},{key:"getItem",value:function(t){return this.item=t[this.arrayIndex++],this.arrayIndex===t.length&&(this.arrayIndex=0),this.item.stop(),this.item}},{key:"shoot",value:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(this.timeTillNextBulletAllowed<=0&&this.bullets.length<this.maxBulletsAtATime){var r=new O(this.canvas,t,e,i,this.bulletColor,_,X);if(this.bullets.push(r),this.soundEnabled){var o=this.getItem(this.sounds);o.restart()}this.timeTillNextBulletAllowed=n}}}])&&W(e.prototype,i),n&&W(e,n),t}();function G(){var t=document.querySelector("#game"),e=document.querySelector("#endGame"),i=document.querySelector("#start"),o=document.querySelector("#restart"),s=document.querySelector(".section__content"),h=t.getContext("2d"),l=document.querySelector("#leftArrow"),c=document.querySelector("#rightArrow"),d=document.querySelector("#fireButton"),f=document.querySelector("#controls");f.style.display="none";var y=window,m=document.getElementsByTagName("body")[0],v=y.innerWidth||m.clientWidth,w=window.getComputedStyle(s,null),p=w.getPropertyValue("width"),g=w.getPropertyValue("height");t.width=parseInt(p),t.height=parseInt(g);var b=50,x=48;v<=1024&&(b*=.85,x*=.85),v<=768&&(t.height=.76*t.height,f.style.display="flex",i.style.top="".concat(parseInt(g)/2-(parseInt(g)-t.height)/2,"px"),o.style.top="".concat(parseInt(g)/2-(parseInt(g)-t.height)/3.2,"px"),e.style.top="".concat(parseInt(g)/2-(parseInt(g)-t.height)/1.4,"px")),v<=600&&(b*=.7,x*=.7),v<=400&&(b*=.7,x*=.7),v<=360&&(f.style.bottom="15px",i.style.top="".concat(parseInt(g)/2-(parseInt(g)-t.height)/2.2,"px"),o.style.top="".concat(parseInt(g)/2-(parseInt(g)-t.height)/3.2,"px"),e.style.top="".concat(parseInt(g)/2-(parseInt(g)-t.height)/1.4,"px"));var A=new Image;function T(e){var i=Math.max(t.width/e.width,t.height/e.height),n=t.width/2-e.width/2*i,r=t.height/2-e.height/2*i;h.drawImage(e,n,r,e.width*i,e.height*i)}A.src=r,A.onload=function(){T(this)};var k=new Y(t,20,"lime",!0),E=new a(t,4,k,b,x,l,c,d),S=new Y(t,4,"red",!1),D=new C(t,S,k),I=!1,P=!1,B=0;function L(){T(A),function(){if(I)return;S.collideWith(E)&&(E.deathSound.currentTime=0,E.deathSound.play(),I=!0);D.collideWith(E)&&(E.deathSound.currentTime=0,E.deathSound.play(),I=!0);0===D.enemyRows.length&&(P=!0,I=!0)}(),I&&(clearInterval(B),o.style.display="block",e.style.display="block",e.textContent=P?"YOU WIN!":"GAME OVER"),I||(D.draw(h),E.draw(h),k.draw(h),S.draw(h))}var O=new Audio(n);O.volume=.5;var R=function t(){i.removeEventListener("click",t),o.removeEventListener("click",t),O.currentTime=0,O.play()};function V(){B=setInterval(L,1e3/60)}i.addEventListener("click",(function(){i.style.display="none",I=!1,P=!1,V(),R()})),o.addEventListener("click",(function(){o.style.display="none",e.style.display="none",I=!1,P=!1,function(){h.clearRect(0,0,t.width,t.height),E.x=t.width/2-b/2,E.y=t.height-2*E.width,E.y<=t.height-75&&(E.y=t.height-75);D.createEnemies(),D.currentDirection=u.right,S.bullets=[],S.timeTillNextBulletAllowed=0,k.bullets=[],k.timeTillNextBulletAllowed=0}(),clearInterval(B),V(),R()}))}window.addEventListener("DOMContentLoaded",(function(){G()}))}]);
//# sourceMappingURL=app.91591eb9.js.map