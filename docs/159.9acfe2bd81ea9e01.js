"use strict";(self.webpackChunkkeypark2=self.webpackChunkkeypark2||[]).push([[159],{5159:(h,o,a)=>{a.r(o),a.d(o,{AnimalViewComponent:()=>u});var s=a(6814),c=a(7394),p=a(7398),n=a(4946),m=a(7649),g=a(9310);function _(t,l){1&t&&(n.TgZ(0,"div",3),n._UZ(1,"div",4),n.qZA())}function d(t,l){if(1&t&&(n.TgZ(0,"article",5),n._UZ(1,"img",6),n.TgZ(2,"article")(3,"h1",7),n._uU(4),n.qZA(),n.TgZ(5,"h2")(6,"span",8),n._uU(7),n.qZA()(),n._UZ(8,"div",9),n.TgZ(9,"p"),n._uU(10,"I live in "),n.TgZ(11,"span",8),n._uU(12),n.qZA()()()()),2&t){const i=l.ngIf;n.xp6(1),n.s9C("src",i.photoUrl,n.LSH),n.MGl("alt","Photo of ",i.name,""),n.xp6(3),n.hij("Hi, I'm a ",i.name,""),n.xp6(3),n.Oqu(i.scientificName),n.xp6(1),n.Q6J("innerHTML",i.description,n.oJD),n.xp6(4),n.Oqu(i.location)}}let u=(()=>{class t{constructor(i,e){this.animalsService=i,this.route=e,this.loading=!0,this.subscriptions=new c.w0}ngOnInit(){this.subscriptions.add(this.animalsService.getSheetData().subscribe(i=>{this.animal$=this.route.paramMap.pipe((0,p.U)(e=>(this.loading=!1,this.animalsService.sheetDataToArray(i)[Number(e.get("index"))])))}))}ngOnDestroy(){this.subscriptions.unsubscribe()}static#n=this.\u0275fac=function(e){return new(e||t)(n.Y36(m.u),n.Y36(g.gz))};static#i=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-animal-view"]],standalone:!0,features:[n.jDz],decls:4,vars:4,consts:[[1,"container","pt-4"],["class","loadercontainer",4,"ngIf"],["class","details-panel",4,"ngIf"],[1,"loadercontainer"],[1,"loader"],[1,"details-panel"],[1,"main-img",3,"src","alt"],[1,"main-text"],[1,"emphasize"],[3,"innerHTML"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0),n.YNc(1,_,2,0,"div",1),n.YNc(2,d,13,6,"article",2),n.ALo(3,"async"),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngIf",r.loading),n.xp6(1),n.Q6J("ngIf",n.lcZ(3,2,r.animal$)))},dependencies:[s.ez,s.O5,s.Ov],styles:[".details-panel[_ngcontent-%COMP%]{display:flex;padding:10px;gap:50px}.main-img[_ngcontent-%COMP%]{border-radius:10px;width:400px}.main-text[_ngcontent-%COMP%]{font-size:34pt;margin-bottom:20px}.emphasize[_ngcontent-%COMP%]{font-weight:700}"]})}return t})()}}]);