(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{fhSy:function(r,t,e){"use strict";e.r(t),e.d(t,"RegisterModule",(function(){return y}));var n=e("tyNb"),a=e("3Pt+"),i=e("fXoL"),o=e("tLlE"),s=e("dNgK"),c=e("Wp6s"),l=e("kmnG"),m=e("qFsG"),b=e("ofXK"),u=e("bTqV");function d(r,t){1&r&&(i.Ub(0,"mat-error"),i.Cc(1,"Enter a valid email"),i.Tb())}function p(r,t){1&r&&(i.Ub(0,"mat-error"),i.Cc(1,"Please enter at least 3 characters"),i.Tb())}function f(r,t){1&r&&(i.Ub(0,"mat-error"),i.Cc(1,"Please enter at least 3 characters"),i.Tb())}function g(r,t){1&r&&(i.Ub(0,"mat-error"),i.Cc(1,"Please enter at least 3 characters"),i.Tb())}function h(r,t){1&r&&(i.Ub(0,"span"),i.Cc(1,"Creating..."),i.Tb())}function C(r,t){1&r&&(i.Ub(0,"span"),i.Cc(1,"Register"),i.Tb())}const w=[{path:"",component:(()=>{class r{constructor(r,t,e,n){this.formBuilder=r,this.http=t,this._snackBar=e,this.router=n,this.hide=!0,this.loading=!1}ngOnInit(){this.registerFormGroup=this.formBuilder.group({email:[null,[a.r.required,a.r.email]],firstName:[null,[a.r.required,a.r.minLength(3)]],lastName:[null,[a.r.required,a.r.minLength(3)]],password:[null,[a.r.required,a.r.minLength(3)]]})}submitRegister(){this.registerFormGroup.valid&&(this.loading=!0,this.http.create("users",this.registerFormGroup.value).subscribe(r=>{this.openSnackBar("Success!"),setTimeout(()=>{this.router.navigate(["/sign-in"]),this.loading=!1},1e3),console.log("OK",r)},r=>{this.loading=!1,this.openSnackBar("Something went wrong!"),console.log("ERROR",r)}))}openSnackBar(r){this._snackBar.open(r,"",{duration:2e3})}}return r.\u0275fac=function(t){return new(t||r)(i.Ob(a.c),i.Ob(o.a),i.Ob(s.a),i.Ob(n.a))},r.\u0275cmp=i.Ib({type:r,selectors:[["nat-register"]],decls:31,vars:8,consts:[[1,"register"],[3,"formGroup"],["appearance","fill",1,"register__field"],["matInput","","formControlName","email","placeholder","Enter your email","required",""],[4,"ngIf"],["matInput","","formControlName","firstName","placeholder","Enter your first name","required",""],["matInput","","formControlName","lastName","placeholder","Enter your last name","required",""],["matInput","","type","password","autocomplete","off","formControlName","password","placeholder","Enter password","required",""],[1,"register__button-field"],["mat-flat-button","","color","accent",1,"w-100",3,"disabled","click"]],template:function(r,t){1&r&&(i.Ub(0,"mat-card",0),i.Ub(1,"h3"),i.Cc(2,"Registration"),i.Tb(),i.Ub(3,"form",1),i.Ub(4,"mat-form-field",2),i.Ub(5,"mat-label"),i.Cc(6,"Email"),i.Tb(),i.Pb(7,"input",3),i.Ac(8,d,2,0,"mat-error",4),i.Tb(),i.Pb(9,"br"),i.Ub(10,"mat-form-field",2),i.Ub(11,"mat-label"),i.Cc(12,"First name"),i.Tb(),i.Pb(13,"input",5),i.Ac(14,p,2,0,"mat-error",4),i.Tb(),i.Pb(15,"br"),i.Ub(16,"mat-form-field",2),i.Ub(17,"mat-label"),i.Cc(18,"Last name"),i.Tb(),i.Pb(19,"input",6),i.Ac(20,f,2,0,"mat-error",4),i.Tb(),i.Pb(21,"br"),i.Ub(22,"mat-form-field",2),i.Ub(23,"mat-label"),i.Cc(24,"Enter password"),i.Tb(),i.Pb(25,"input",7),i.Ac(26,g,2,0,"mat-error",4),i.Tb(),i.Ub(27,"div",8),i.Ub(28,"button",9),i.cc("click",(function(){return t.submitRegister()})),i.Ac(29,h,2,0,"span",4),i.Ac(30,C,2,0,"span",4),i.Tb(),i.Tb(),i.Tb(),i.Tb()),2&r&&(i.Cb(3),i.mc("formGroup",t.registerFormGroup),i.Cb(5),i.mc("ngIf",t.registerFormGroup.controls.email.invalid),i.Cb(6),i.mc("ngIf",t.registerFormGroup.controls.firstName.invalid),i.Cb(6),i.mc("ngIf",t.registerFormGroup.controls.lastName.invalid),i.Cb(6),i.mc("ngIf",t.registerFormGroup.controls.password.invalid),i.Cb(2),i.mc("disabled",t.loading),i.Cb(1),i.mc("ngIf",t.loading),i.Cb(1),i.mc("ngIf",!t.loading))},directives:[c.a,a.s,a.m,a.g,l.c,l.f,m.b,a.b,a.l,a.f,a.q,b.l,u.b,l.b],styles:["[_nghost-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center}.register[_ngcontent-%COMP%]{width:100%;max-width:400px}.register__field[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.register__button-field[_ngcontent-%COMP%]{width:100%;margin-top:10px}"]}),r})()}];let T=(()=>{class r{}return r.\u0275mod=i.Mb({type:r}),r.\u0275inj=i.Lb({factory:function(t){return new(t||r)},imports:[[n.c.forChild(w)],n.c]}),r})();var U=e("PCNd"),P=e("5dmV");let y=(()=>{class r{}return r.\u0275mod=i.Mb({type:r}),r.\u0275inj=i.Lb({factory:function(t){return new(t||r)},imports:[[U.a,P.a,T]]}),r})()}}]);