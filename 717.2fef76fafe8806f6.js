"use strict";(self.webpackChunkargo_shop_material=self.webpackChunkargo_shop_material||[]).push([[717],{8717:(A,u,o)=>{o.r(u),o.d(u,{AuthenticationModule:()=>Z});var e=o(4006),l=o(1635),c=o(3215),t=o(4541),d=o(2317),g=o(5480),p=o(4859),h=o(7392),s=o(9549),f=o(4144);const v=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class n{constructor(i,a,m,y){this.authService=i,this.formBuilder=a,this.header=m,this.router=y,this.loginForm=this.formBuilder.group({email:["",e.kI.required],password:["",e.kI.required]})}ngOnInit(){this.header.setHeaderButtonsVisibility(!1)}login(){const i=this.loginForm.value;this.authService.login(i.email??"",i.password??"").subscribe(a=>{console.log("Successfully logged in: "+JSON.stringify(a)),this.router.navigateByUrl("")})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(d.$),t.Y36(e.qu),t.Y36(g.r),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:21,vars:2,consts:[["id","container",3,"formGroup","ngSubmit"],[1,"mat-display-3"],["appearance","outline"],["matInput","","type","email","formControlName","email","required",""],["matPrefix",""],["matInput","","type","password","formControlName","password","required",""],["mat-flat-button","","color","primary",3,"disabled"],["id","newAccount",1,"mat-h3"],["id","newAccountLink","routerLink","/signup"]],template:function(i,a){1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return a.login()}),t.TgZ(1,"h1",1),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"mat-form-field",2)(4,"mat-label"),t._uU(5,"Email"),t.qZA(),t._UZ(6,"input",3),t.TgZ(7,"mat-icon",4),t._uU(8,"alternate_email"),t.qZA()(),t.TgZ(9,"mat-form-field",2)(10,"mat-label"),t._uU(11,"Password"),t.qZA(),t._UZ(12,"input",5),t.TgZ(13,"mat-icon",4),t._uU(14,"vpn_key"),t.qZA()(),t.TgZ(15,"button",6),t._uU(16,"Login"),t.qZA(),t.TgZ(17,"p",7),t._uU(18,"Not registered yet? "),t.TgZ(19,"a",8),t._uU(20,"Create an account."),t.qZA()()()),2&i&&(t.Q6J("formGroup",a.loginForm),t.xp6(15),t.Q6J("disabled",!a.loginForm.valid))},dependencies:[p.lW,h.Hw,s.KE,s.hX,s.qo,f.Nt,e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.sg,e.u,l.yS],styles:["#newAccount[_ngcontent-%COMP%]{margin:15px}#newAccountLink[_ngcontent-%COMP%]{text-decoration:none}"]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.m,l.Bz.forChild(v),e.UX]}),n})()}}]);