(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{fhSy:function(r,e,t){"use strict";t.r(e),t.d(e,"RegisterModule",(function(){return I}));var n=t("tyNb"),a=t("3Pt+"),o=t("fXoL"),i=t("tLlE"),s=t("dNgK"),l=t("Wp6s"),c=t("kmnG"),m=t("qFsG"),b=t("ofXK"),u=t("bTqV");function d(r,e){1&r&&(o.Ub(0,"mat-error"),o.Cc(1,"Enter a valid email"),o.Tb())}function p(r,e){1&r&&(o.Ub(0,"mat-error"),o.Cc(1,"Please enter at least 3 characters"),o.Tb())}function f(r,e){1&r&&(o.Ub(0,"mat-error"),o.Cc(1,"Please enter at least 3 characters"),o.Tb())}function g(r,e){1&r&&(o.Ub(0,"mat-error"),o.Cc(1,"Please enter at least 3 characters"),o.Tb())}function h(r,e){1&r&&(o.Ub(0,"mat-error"),o.Cc(1,"Please enter at least 3 characters"),o.Tb())}function C(r,e){1&r&&(o.Ub(0,"span"),o.Cc(1,"Creating..."),o.Tb())}function T(r,e){1&r&&(o.Ub(0,"span"),o.Cc(1,"Register"),o.Tb())}const w=[{path:"",component:(()=>{class r{constructor(r,e,t,n){this.formBuilder=r,this.http=e,this._snackBar=t,this.router=n,this.hide=!0,this.loading=!1}ngOnInit(){this.registerFormGroup=this.formBuilder.group({email:[null,[a.r.required,a.r.email]],firstName:[null,[a.r.required,a.r.minLength(3)]],lastName:[null,[a.r.required,a.r.minLength(3)]],address:[null,[a.r.required,a.r.minLength(3)]],password:[null,[a.r.required,a.r.minLength(3)]]})}submitRegister(){this.registerFormGroup.valid&&(this.loading=!0,this.http.create("users",this.registerFormGroup.value).subscribe(r=>{this.openSnackBar("Success!"),setTimeout(()=>{this.router.navigate(["/sign-in"]),this.loading=!1},1e3),console.log("OK",r)},r=>{this.loading=!1,this.openSnackBar("Something went wrong!"),console.log("ERROR",r)}))}openSnackBar(r){this._snackBar.open(r,"",{duration:2e3})}}return r.\u0275fac=function(e){return new(e||r)(o.Ob(a.c),o.Ob(i.a),o.Ob(s.a),o.Ob(n.a))},r.\u0275cmp=o.Ib({type:r,selectors:[["nat-register"]],decls:37,vars:9,consts:[[1,"register"],[3,"formGroup"],["appearance","fill",1,"register__field"],["matInput","","formControlName","email","placeholder","Enter your email","required",""],[4,"ngIf"],["matInput","","formControlName","firstName","placeholder","Enter your first name","required",""],["matInput","","formControlName","lastName","placeholder","Enter your last name","required",""],["matInput","","formControlName","address","placeholder","Enter your address","required",""],["matInput","","type","password","autocomplete","off","formControlName","password","placeholder","Enter password","required",""],[1,"register__button-field"],["mat-flat-button","","color","accent",1,"w-100",3,"disabled","click"]],template:function(r,e){1&r&&(o.Ub(0,"mat-card",0),o.Ub(1,"h3"),o.Cc(2,"Registration"),o.Tb(),o.Ub(3,"form",1),o.Ub(4,"mat-form-field",2),o.Ub(5,"mat-label"),o.Cc(6,"Email"),o.Tb(),o.Pb(7,"input",3),o.Ac(8,d,2,0,"mat-error",4),o.Tb(),o.Pb(9,"br"),o.Ub(10,"mat-form-field",2),o.Ub(11,"mat-label"),o.Cc(12,"First name"),o.Tb(),o.Pb(13,"input",5),o.Ac(14,p,2,0,"mat-error",4),o.Tb(),o.Pb(15,"br"),o.Ub(16,"mat-form-field",2),o.Ub(17,"mat-label"),o.Cc(18,"Last name"),o.Tb(),o.Pb(19,"input",6),o.Ac(20,f,2,0,"mat-error",4),o.Tb(),o.Pb(21,"br"),o.Ub(22,"mat-form-field",2),o.Ub(23,"mat-label"),o.Cc(24,"Address"),o.Tb(),o.Pb(25,"input",7),o.Ac(26,g,2,0,"mat-error",4),o.Tb(),o.Pb(27,"br"),o.Ub(28,"mat-form-field",2),o.Ub(29,"mat-label"),o.Cc(30,"Enter password"),o.Tb(),o.Pb(31,"input",8),o.Ac(32,h,2,0,"mat-error",4),o.Tb(),o.Ub(33,"div",9),o.Ub(34,"button",10),o.cc("click",(function(){return e.submitRegister()})),o.Ac(35,C,2,0,"span",4),o.Ac(36,T,2,0,"span",4),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&r&&(o.Cb(3),o.mc("formGroup",e.registerFormGroup),o.Cb(5),o.mc("ngIf",e.registerFormGroup.controls.email.invalid),o.Cb(6),o.mc("ngIf",e.registerFormGroup.controls.firstName.invalid),o.Cb(6),o.mc("ngIf",e.registerFormGroup.controls.lastName.invalid),o.Cb(6),o.mc("ngIf",e.registerFormGroup.controls.address.invalid),o.Cb(6),o.mc("ngIf",e.registerFormGroup.controls.password.invalid),o.Cb(2),o.mc("disabled",e.loading),o.Cb(1),o.mc("ngIf",e.loading),o.Cb(1),o.mc("ngIf",!e.loading))},directives:[l.a,a.s,a.m,a.g,c.c,c.f,m.b,a.b,a.l,a.f,a.q,b.l,u.b,c.b],styles:["[_nghost-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center}.register[_ngcontent-%COMP%]{width:100%;max-width:400px}.register__field[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.register__button-field[_ngcontent-%COMP%]{width:100%;margin-top:10px}"]}),r})()}];let U=(()=>{class r{}return r.\u0275mod=o.Mb({type:r}),r.\u0275inj=o.Lb({factory:function(e){return new(e||r)},imports:[[n.c.forChild(w)],n.c]}),r})();var P=t("PCNd"),y=t("5dmV");let I=(()=>{class r{}return r.\u0275mod=o.Mb({type:r}),r.\u0275inj=o.Lb({factory:function(e){return new(e||r)},imports:[[P.a,y.a,U]]}),r})()}}]);