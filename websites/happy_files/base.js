var _yt_player={};(function(g){var window=this;var ba,da,ma,la,na,ra,sa,xa,Fa,Ha,Ka,Ma,Qa,Ua,bb,ib,eb,kb,fb,lb,pb,rb,tb,Cb,Db,Jb,Mb,Nb,Ob,Qb,Tb,Zb,ac,bc,ec,fc,lc,kc,nc,oc,pc,qc,sc,tc,zc,Ac,Dc,Ec,Fc,Hc,Mc,Kc,Qc,Wc,Zc,od,sd,Cd,Md,Nd,wd,cd,Wd,be,ce,ae,Xd,fe,he,ee,ie,je,ke,le,me,ne,pe,te,se,ue,ve,we,xe,ze,ye,Ae,Be,Ge,Ke,Le,Me,Ne,Pe,Ve,Ye,Se,$e,hf,gf,bf,Ue,lf,mf,nf,of,pf,rf,sf,vf,uf,wf,xf,zf,Df,Ff,Gf,Jf,Lf,Mf,Nf,Pf,Qf,Tf,Wf,Sf,Uf,Hf,Of,bg,Zf,Xf,Yf,cg,ag,$f,gg,hg,ig,jg,kg,mg,og,ng,qg,tg,ug,Bg,Cg,Dg,Eg,Fg,Gg,Ig,Kg,Lg,Pg,Qg,Rg,Sg,Ug,Vg,bh,ch,eh,fh,gh,
ih,jh,kh,ph,uh,vh,zh,sh,Fh,Ih,Jh,Kh,Lh,Mh,Nh,Oh,Ph,Qh,Rh,Sh,Th,Vh,Xh,Zh,$h,ai,bi,fi,gi,hi,ii,ji,ki,li,ni,ti,ui,xi,yi,zi,Bi,Di,Ei,Fi,Gi,Hi,Ai,Ci,Ii,Ji,Ki,Li,Mi,Ni,Qi,Oi,Ri,Si,Ui,Ti,Vi,Wi,Xi,Zi,$i,aj,dj,fj,ij,kj,mj,jj,oj,nj,qj,rj,sj,tj,uj,vj,wj,xj,yj,zj,Aj,Bj,Cj,Dj,Ej,Fj,Gj,Hj,Ij,Jj,Kj,Lj,Oj,Pj,Qj,Vj,Mj,Wj,Nj,Yj,Zj,ak,bk,dk,ck,ek,fk,hk,ik,jk,kk,nk,ok,rk,sk,qk,tk,uk,vk,wk,pk,xk,Bk,Ak,Ck,yk,Dk,Ek,Gk,Ik,Mk,Nk,Ok,Pk,Qk,Rk,Tk,Uk,Vk,Wk,Xk,$k,Zk,Yk,al,bl,cl,el,dl,fl,gl,hl,il,jl,kl,ll,ml,nl,ol,pl,ql,rl,sl,
tl,vl,ul,xl,yl,zl,Al,Bl,Dl,El,Fl,Gl,Jl,Ll,Ml,Il,Nl,Pl,Rl,Sl,Tl,Ul,Kl,Vl,Ol,Yl,Xl,Zl,$l,Wl,Ql,am,bm,cm,em,fm,hm,dm,im,jm,km,lm,mm,nm,pm,om,qm,rm,sm,um,tm,vm,wm,xm,ym,zm,Am,Em,Fm,Gm,Hm,Im,Mm,Nm,Om,Km,Qm,Rm,Sm,Tm,Vm,Um,Ym,Wm,bn,an,cn,fn,gn,hn,jn,kn,mn,rn,nn,vn,wn,xn,yn,zn,An,Bn,Cn,En,Dn,Gn,Hn,In,Jn,Kn,Ln,Mn,Nn,Qn,Rn,Tn,Sn,Un,Vn,Wn,Xn,Zn,Yn,co,bo,io,jo,mo,qo,ro,to,so,lo,wo,Ao,Bo,Do,Eo,Fo,Co,Ho,Io,Jo,No,Po,Ko,Lo,Mo,Ro,So,Qo,Vo,Uo,Wo,$o,ap,dp,ep,gp,ip,jp,lp,kp,mp,op,pp,qp,rp,sp,tp,vp,wp,xp,Ap,Bp,Dp,Jp,
Np,Op,Vp,Xp,Yp,Zp,$p,aq,bq,eq,gq,hq,iq,lq,oq,pq,qq,rq,sq,tq,vq,wq,xq,yq,zq,Cq,Eq,Hq,Iq,Kq,Lq,Mq,Oq,Qq,Rq,Sq,Nq,Pq,Vq,Uq,Wq,Xq,Zq,$q,dr,er,fr,hr,or,qr,tr,ur,vr,xr,Br,yr,zr,Dr,Hr,Fr,Gr,Cr,Mr,Or,Pr,Qr,Rr,Sr,Tr,Lr,Ur,Kr,Xr,Vr,bs,cs,as,ds,es,fs,hs,gs,is,ns,ls,ms,ps,os,qs,rs,ts,us,As,Bs,Es,Fs,Gs,Cs,Is,Js,Ls,Qs,Rs,Ss,Xs,Ys,$s,dt,bt,ft,et,jt,kt,lt,At,Bt,zt,Lt,Ot,Mt,Rt,Ut,Tt,St,Zt,au,$t,du,tu,uu,xu,yu,zu,vu,Du,Cu,Eu,Fu,Gu,Hu,Iu,Ju,Ku,Lu,Mu,Nu,Ou,Pu,Ru,Uu,Vu,Wu,Xu,Yu,Zu,av,$u,bv,dv,fv,hv,ov,qv,vv,zv,Av,Bv,
Ev,Cv,Gv,Dv,Hv,Fv,Jv,Kv,Lv,Pv,Qv,Sv,Rv,Tv,Vv,Wv,Xv,Yv,Zv,$v,aw,bw,cw,dw,ew,fw,gw,hw,jw,kw,nw,ow,iw,lw,tw,uw,qw,mw,vw,ww,pw,rw,xw,yw,zw,Aw,Cw,Dw,Fw,Ew,Gw,Hw,Iw,Jw,Kw,Mw,Lw,Nw,Ow,Pw,Qw,Vw,Xw,bx,Sw,Yw,$w,Zw,Ww,dx,fx,ex,Rw,Tw,Uw,cx,ax,gx,hx,ix,jx,kx,lx,mx,px,qx,rx,sx,tx,ux,vx,wx,xx,yx,zx,Ax,Bx,Cx,Dx,Ex,Fx,Hx,Jx,Kx,Lx,Ox,Px,Rx,Nx,Ux,Sx,Tx,Vx,Wx,Xx,Yx,Zx,$x,by,ay,dy,fy,gy,iy,jy,ky,ly,my,ny,py,oy,qy,ry,sy,ty,uy,vy,wy,yy,zy,Ay,Ey,Fy,By,Cy,Dy,Hy,Jy,Ly,Ky,Oy,Py,Qy,Sy,Vy,Uy,Ty,Wy,Yy,Xy,dz,az,bz,ez,fz,gz,hz,
iz,jz,kz,lz,mz,nz,oz,$y,Zy,qz,rz,tz,uz,wz,xz,sz,zz,Bz,Az,Ez,Fz,Hz,Gz,Iz,Jz,Kz,Lz,Mz,Nz,Oz,Qz,Rz,Sz,Tz,Uz,Vz,Wz,Pz,Xz,Yz,Zz,cA,dA,bA,kA,oA,BA,AA,zA,yA,jA,lA,IA,JA,KA,LA,MA,NA,PA,QA,RA,TA,UA,VA,XA,YA,rB,sB,tB,uB,vB,xB,jB,qB,CB,DB,iB,FB,HB,JB,KB,LB,MB,NB,OB,QB,PB,RB,SB,VB,XB,ZB,YB,$B,WB,aC,bC,cC,dC,fC,iC,gC,tC,lC,vC,wC,xC,yC,zC,DC,SC,VC,KC,WC,HC,$C,RC,JC,QC,fD,LC,NC,dD,PC,TC,IC,UC,gD,AC,EC,CC,eD,kD,jD,uD,vD,wD,xD,yD,AD,BD,ED,GD,HD,KD,LD,CD,MD,pD,qD,rD,oD,QD,RD,SD,UD,VD,WD,XD,YD,nD,sD,ZD,bE,cE,dE,eE,
fE,gE,hE,iE,jE,kE,lE,mE,pE,qE,rE,sE,nE,uE,vE,wE,xE,yE,zE,FE,EE,GE,HE,IE,DE,KE,ME,CE,QE,RE,TE,VE,WE,XE,YE,ZE,aF,cF,SE,eF,hF,gF,iF,jF,lF,mF,fF,nF,pF,oF,qF,rF,sF,tF,uF,xF,yF,wF,vF,zF,AF,BF,CF,FF,GF,IF,QF,RF,SF,TF,KF,LF,MF,NF,OF,UF,VF,WF,XF,YF,ZF,$F,cG,eG,gG,fG,hG,iG,jG,dG,bG,aG,lG,mG,nG,oG,pG,qG,rG,sG,kG,tG,uG,vG,wG,xG,yG,zG,AG,BG,DG,IG,GG,HG,JG,LG,KG,EG,FG,MG,NG,OG,PG,QG,SG,TG,RG,UG,VG,XG,YG,WG,ZG,$G,aH,bH,cH,dH,eH,fH,hH,iH,jH,kH,lH,mH,gH,oH,nH,qH,pH,sH,rH,tH,uH,vH,xH,wH,AH,DH,EH,FH,GH,zH,HH,IH,yH,
JH,KH,LH,MH,CH,BH,NH,OH,PH,RH,QH,SH,TH,UH,VH,$H,aI,bI,ZH,dI,WH,eI,XH,YH,fI,cI,gI,hI,iI,jI,kI,nI,mI,lI,oI,pI,rI,qI,sI,tI,uI,vI,wI,xI,yI,zI,AI,BI,CI,FI,GI,HI,KI,LI,OI,NI,SI,PI,TI,WI,XI,RI,UI,VI,YI,II,JI,$I,ZI,aJ,bJ,QI,cJ,EI,dJ,eJ,fJ,gJ,hJ,iJ,jJ,kJ,lJ,mJ,oJ,nJ,pJ,qJ,sJ,rJ,vJ,wJ,xJ,uJ,yJ,zJ,AJ,BJ,CJ,DJ,EJ,FJ,HJ,JJ,IJ,MJ,LJ,NJ,OJ,KJ,PJ,QJ,RJ,TJ,WJ,VJ,YJ,baa,caa,daa,ZJ,XJ,UJ,aaa,$J,oE,tE,NE,aK,bK,cK,dK,fK,gK,qK,eaa,iK,sK,tK,vK,uK,eK,nK,CK,AK,BK,gaa,wK,IK,HK,GK,OK,QK,RK,SK,DK,TK,iaa,jaa,EK,jK,JK,PK,kaa,
KK,$K,laa,zK,aL,xK,WK,YK,XK,ZK,cL,maa,eL,oK,haa,fL,bL,pK,gL,yK,hL,NK,hK,dL,UK,iL,MK,kL,LK,lL,mL,pL,vL,FL,RL,SL,paa,TL,qaa,raa,saa,taa,UL,VL,WL,YL,ZL,$L,aM,cM,bM,dM,eM,vaa,waa,jM,fM,iM,gM,hM,xaa,kM,lM,yaa,zaa,Aaa,mM,nM,oM,pM,qM,rM,sM,tM,uM,vM,wM,yM,zM,BM,DM,GM,FM,KM,Caa,NM,MM,OM,Daa,PM,Eaa,QM,RM,SM,TM,UM,Faa,VM,WM,XM,YM,Gaa,ZM,$M,aN,cN,Haa,bN,dN,eN,fN,gN,Iaa,hN,iN,jN,LM,Jaa,lN,mN,nN,kN,oN,pN,Kaa,qN,Laa,sN,uN,Naa,vN,wN,xN,zN,AN,Oaa,BN,DN,Paa,GN,HN,IN,CN,EN,FN,JN,KN,MN,Qaa,NN,LN,ON,PN,Raa,QN,RN,SN,TN,
UN,VN,WN,XN,YN,ZN,$N,aO,bO,cO,dO,eO,fO,gO,hO,iO,jO,kO,lO,mO,nO,oO,pO,qO,rO,sO,tO,Saa,wO,xO,uO,vO,yO,zO,AO,Taa,Uaa,CO,Vaa,DO,Waa,EO,Xaa,Yaa,FO,aba,$aa,Zaa,IO,JO,LO,NO,OO,PO,bba,cba,dba,QO,eba,GO,TO,RO,BO,HO,UO,YO,ZO,$O,aP,X,bP,eP,fP,gP,hP,jP,mP,nP,oP,qP,rP,sP,tP,vP,wP,xP,yP,zP,BP,CP,DP,EP,FP,GP,HP,IP,JP,fba,gba,iba,jba,MP,NP,KP,hba,LP,kba,OP,PP,QP,RP,SP,TP,UP,VP,WP,YP,ZP,$P,XP,bQ,cQ,dQ,eQ,fQ,gQ,hQ,kQ,lQ,mQ,nQ,lba,oQ,pQ,qQ,rQ,sQ,tQ,mba,uQ,nba,vQ,wQ,xQ,yQ,zQ,AQ,BQ,CQ,oba,DQ,pba,EQ,FQ,GQ,HQ,JQ,IQ,KQ,
LQ,MQ,NQ,OQ,PQ,RQ,qba,SQ,TQ,UQ,VQ,WQ,YQ,ZQ,$Q,aR,bR,cR,dR,fR,eR,rba,gR,sba,tba,hR,uba,iR,jR,kR,vba,lR,mR,nR,oR,pR,qR,rR,sR,tR,uR,wR,xR,AR,BR,zR,CR,xba,DR,ER,HR,FR,JR,yN,KR,LR,MR,NR,OR,PR,RR,UR,TR,VR,WR,XR,ZR,$R,YR,aS,cS,dS,fS,eS,gS,hS,iS,kS,lS,mS,nS,jS,oS,qS,pS,rS,sS,tS,wS,uS,vS,xS,yS,zS,BS,CS,AS,DS,ES,FS,GS,HS,JS,IS,LS,zba,PS,Aba,WS,XS,VS,$S,aT,bT,cT,dT,eT,hT,iT,gT,fT,jT,lT,kT,mT,nT,pT,rT,oT,tT,vT,uT,Bba,sT,wT,xT,yT,zT,AT,BT,Cba,CT,DT,ET,FT,GT,HT,IT,JT,LT,KT,NT,MT,OT,PT,QT,RT,VT,TT,ST,UT,XT,WT,ZT,
$T,bU,dU,eU,cU,gU,hU,iU,jU,fU,kU,mU,qU,lU,tU,uU,vU,oU,wU,nU,yU,sU,pU,xU,zU,rU,AU,DU,EU,FU,GU,HU,IU,JU,KU,LU,MU,NU,Gba,OU,PU,QU,RU,TU,SU,UU,VU,WU,XU,ZU,YU,aV,cV,Hba,dV,eV,gV,KS,iV,hV,fV,jV,aU,lV,Iba,Jba,mV,pV,nV,oV,qV,rV,kV,sV,tV,QL,uV,Lba,Kba,yV,AV,BV,SO,VO,wV,DV,WO,CV,FV,GV,EV,HV,Nba,Oba,LV,KV,xV,QV,RV,vV,TV,rL,UV,VV,JV,IV,YV,PV,ZV,aW,OV,$V,cW,eW,dW,fW,iW,jW,XV,WV,kW,GL,lW,Iv,mW,NV,oW,pW,IL,rW,bW,sW,qW,tW,uW,Mba,SV,aa,ka,ha,ia,oa,vW,Ca,Da;
ba=function(a){return function(){return aa[a].apply(this,arguments)}};
g.ca=function(a,b){return aa[a]=b};
da=function(){da=function(){};
ha.Symbol||(ha.Symbol=ia)};
ma=function(){da();var a=ha.Symbol.iterator;a||(a=ha.Symbol.iterator=ha.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(this)}});
ma=function(){}};
la=function(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
na=function(a){ma();a={next:a};a[ha.Symbol.iterator]=function(){return this};
return a};
g.q=function(a){ma();var b=a[window.Symbol.iterator];return b?b.call(a):la(a)};
g.r=function(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ua=b.prototype};
g.qa=function(a){if(!(a instanceof Array)){a=g.q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
ra=function(a,b){if(b){for(var c=ha,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}};
sa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.t=function(a){return void 0!==a};
g.w=function(a){return"string"==typeof a};
g.ta=function(a){return"boolean"==typeof a};
g.ua=function(a){return"number"==typeof a};
g.y=function(a,b,c){a=a.split(".");c=c||g.x;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.t(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.z=function(a,b){for(var c=a.split("."),d=b||g.x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.va=function(){};
g.wa=function(a){a.oc=void 0;a.getInstance=function(){return a.oc?a.oc:a.oc=new a}};
xa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.ya=function(a){return"array"==xa(a)};
g.za=function(a){var b=xa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Aa=function(a){return"function"==xa(a)};
g.Ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ea=function(a){return a[Ca]||(a[Ca]=++Da)};
Fa=function(a,b,c){return a.call.apply(a.bind,arguments)};
Ha=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.A=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.A=Fa:g.A=Ha;return g.A.apply(null,arguments)};
g.B=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.Ia=function(a,b){for(var c in b)a[c]=b[c]};
g.F=function(a,b){function c(){}
c.prototype=b.prototype;a.ua=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.EM=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
Ka=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ka);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.La=function(a){return a[a.length-1]};
Ma=function(a,b){var c=0;(0,g.G)(a,function(a,e,f){b.call(void 0,a,e,f)&&++c},void 0);
return c};
g.Oa=function(a,b,c){b=g.Na(a,b,c);return 0>b?null:g.w(a)?a.charAt(b):a[b]};
g.Na=function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
Qa=function(a,b){var c=g.Pa(a,b,void 0);return 0>c?null:g.w(a)?a.charAt(c):a[c]};
g.Pa=function(a,b,c){for(var d=g.w(a)?a.split(""):a,e=a.length-1;0<=e;e--)if(e in d&&b.call(c,d[e],e,a))return e;return-1};
g.Sa=function(a,b){return 0<=(0,g.Ra)(a,b)};
g.Ta=function(a){return 0==a.length};
Ua=function(a){if(!g.ya(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};
g.Va=function(a,b){g.Sa(a,b)||a.push(b)};
g.Xa=function(a,b){var c=(0,g.Ra)(a,b),d;(d=0<=c)&&g.Wa(a,c);return d};
g.Wa=function(a,b){Array.prototype.splice.call(a,b,1)};
g.Ya=function(a,b){var c=g.Na(a,b,void 0);0<=c&&g.Wa(a,c)};
g.$a=function(a){return Array.prototype.concat.apply([],arguments)};
g.ab=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
bb=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.za(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.db=function(a,b,c,d){Array.prototype.splice.apply(a,g.cb(arguments,1))};
g.cb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
g.gb=function(a,b,c){return eb(a,c||fb,!1,b)};
ib=function(a,b){return eb(a,b,!0,void 0,void 0)};
eb=function(a,b,c,d,e){for(var f=0,k=a.length,l;f<k;){var m=f+k>>1,n;c?n=b.call(e,a[m],m,a):n=b(d,a[m]);0<n?f=m+1:(k=m,l=!n)}return l?f:~f};
g.jb=function(a,b){a.sort(b||fb)};
kb=function(a,b){var c=fb;g.jb(a,function(a,e){return c(b(a),b(e))})};
g.nb=function(a,b){if(!g.za(a)||!g.za(b)||a.length!=b.length)return!1;for(var c=a.length,d=lb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0};
fb=function(a,b){return a>b?1:a<b?-1:0};
lb=function(a,b){return a===b};
g.ob=function(a,b,c){var d={};(0,g.G)(a,function(e,f){d[b.call(c,e,f,a)]=e});
return d};
pb=function(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};
g.qb=function(a,b){return 0==a.lastIndexOf(b,0)};
rb=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.sb=function(a){return/^[\s\xa0]*$/.test(a)};
tb=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Bb=function(a){if(!ub.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(vb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(wb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(xb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(yb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(zb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ab,"&#0;"));return a};
Cb=function(a,b){a.length>b&&(a=a.substring(0,b-3)+"...");return a};
Db=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.Fb=function(a,b){var c=g.t(void 0)?a.toFixed(void 0):String(a),d=c.indexOf(".");-1==d&&(d=c.length);return Eb("0",Math.max(0,b-d))+c};
g.Gb=function(a){return null==a?"":String(a)};
g.Hb=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.H)()).toString(36)};
g.Kb=function(a,b){for(var c=0,d=Ib(String(a)).split("."),e=Ib(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Jb(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||Jb(0==l[2].length,0==m[2].length)||Jb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Jb=function(a,b){return a<b?-1:a>b?1:0};
g.Lb=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
Mb=function(a){var b=Number(a);return 0==b&&g.sb(a)?window.NaN:b};
Nb=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};
Ob=function(a){var b=g.w(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};
Qb=function(a){return-1!=g.Pb.indexOf(a)};
g.Rb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Sb=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};
Tb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Ub=function(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0};
g.Vb=function(a){var b=0,c;for(c in a)b++;return b};
g.Wb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
g.Xb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.Yb=function(a,b){var c=g.za(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a};
Zb=function(a,b){return null!==a&&b in a};
g.$b=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
ac=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
bc=function(a,b){var c=ac(a,b,void 0);return c&&a[c]};
g.cc=function(a){for(var b in a)return!1;return!0};
g.dc=function(a){for(var b in a)delete a[b]};
ec=function(a,b){b in a&&delete a[b]};
fc=function(a,b,c){return null!==a&&b in a?a[b]:c};
g.gc=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.hc=function(a){var b=xa(a);if("object"==b||"array"==b){if(g.Aa(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.hc(a[c]);return b}return a};
g.jc=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ic.length;f++)c=ic[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
lc=function(){return Qb("Safari")&&!(kc()||Qb("Coast")||Qb("Opera")||Qb("Edge")||Qb("Silk")||Qb("Android"))};
kc=function(){return(Qb("Chrome")||Qb("CriOS"))&&!Qb("Edge")};
g.mc=function(){return Qb("Android")&&!(kc()||Qb("Firefox")||Qb("Opera")||Qb("Silk"))};
nc=function(){return Qb("iPhone")&&!Qb("iPod")&&!Qb("iPad")};
oc=function(){return nc()||Qb("iPad")||Qb("iPod")};
pc=function(a){pc[" "](a);return a};
qc=function(a,b){try{return pc(a[b]),!0}catch(c){}return!1};
sc=function(a,b){var c=rc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
tc=function(){var a=g.x.document;return a?a.documentMode:void 0};
g.vc=function(a){return sc(a,function(){return 0<=g.Kb(uc,a)})};
g.xc=function(a){return Number(wc)>=a};
zc=function(){this.g="";this.l=yc};
Ac=function(a){return a instanceof zc&&a.constructor===zc&&a.l===yc?a.g:"type_error:Const"};
g.Bc=function(a){var b=new zc;b.g=a;return b};
Dc=function(){this.g="";this.l=Cc};
Ec=function(a){if(a instanceof Dc&&a.constructor===Dc&&a.l===Cc)return a.g;xa(a);return"type_error:TrustedResourceUrl"};
Fc=function(a){var b=new Dc;b.g=a;return b};
Hc=function(){this.g="";this.l=Gc};
g.Ic=function(a){if(a instanceof Hc&&a.constructor===Hc&&a.l===Gc)return a.g;xa(a);return"type_error:SafeUrl"};
g.Lc=function(a){if(a instanceof Hc)return a;a=a.tg?a.Df():String(a);Jc.test(a)||(a="about:invalid#zClosurez");return Kc(a)};
Mc=function(a){if(a instanceof Hc)return a;a=a.tg?a.Df():String(a);Jc.test(a)||(a="about:invalid#zClosurez");return Kc(a)};
Kc=function(a){var b=new Hc;b.g=a;return b};
g.Oc=function(){this.g="";this.o=Nc;this.l=null};
g.Pc=function(a){if(a instanceof g.Oc&&a.constructor===g.Oc&&a.o===Nc)return a.g;xa(a);return"type_error:SafeHtml"};
Qc=function(a,b){var c=new g.Oc;c.g=a;c.l=b;return c};
g.Rc=function(a,b){var c=b instanceof Hc?b:Mc(b);a.href=g.Ic(c)};
g.Sc=function(a,b){a.src=Ec(b)};
g.Tc=function(a,b){Ac(a);Ac(a);return Qc(b,null)};
g.Uc=function(a,b,c){return Math.min(Math.max(a,b),c)};
g.Vc=function(a,b){var c=a%b;return 0>c*b?c+b:c};
Wc=function(a,b,c){return a+c*(b-a)};
g.Xc=function(a){return a*Math.PI/180};
g.Yc=function(a,b){this.x=g.t(a)?a:0;this.y=g.t(b)?b:0};
Zc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.$c=function(a,b){return new g.Yc(a.x-b.x,a.y-b.y)};
g.ad=function(a,b){this.width=a;this.height=b};
g.bd=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};
g.fd=function(a){return a?new cd(g.dd(a)):ed||(ed=new cd)};
g.gd=function(a){return g.w(a)?window.document.getElementById(a):a};
g.id=function(a,b){var c=b||window.document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):g.hd(window.document,"*",a,b)};
g.jd=function(a,b){var c=b||window.document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=window.document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(""+(a?"."+a:"")):g.hd(c,"*",a,b)[0]||null}return c||null};
g.hd=function(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,k;k=a[f];f++)b==k.nodeName&&(d[e++]=k);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;k=a[f];f++)b=k.className,"function"==typeof b.split&&g.Sa(b.split(/\s+/),c)&&(d[e++]=k);d.length=e;return d}return a};
g.ld=function(a,b){g.Rb(b,function(b,d){b&&b.tg&&(b=b.Df());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:kd.hasOwnProperty(d)?a.setAttribute(kd[d],b):g.qb(d,"aria-")||g.qb(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.nd=function(a){a=a.document;a=g.md(a)?a.documentElement:a.body;return new g.ad(a.clientWidth,a.clientHeight)};
g.qd=function(a){var b=od(a);a=a.parentWindow||a.defaultView;return g.pd&&g.vc("10")&&a.pageYOffset!=b.scrollTop?new g.Yc(b.scrollLeft,b.scrollTop):new g.Yc(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
od=function(a){return a.scrollingElement?a.scrollingElement:!g.rd&&g.md(a)?a.documentElement:a.body||a.documentElement};
sd=function(a){return a?a.parentWindow||a.defaultView:window};
g.vd=function(a,b,c){var d=arguments,e=window.document,f=String(d[0]),k=d[1];if(!td&&k&&(k.name||k.type)){f=["<",f];k.name&&f.push(' name="',g.Bb(k.name),'"');if(k.type){f.push(' type="',g.Bb(k.type),'"');var l={};g.jc(l,k);delete l.type;k=l}f.push(">");f=f.join("")}f=e.createElement(f);k&&(g.w(k)?f.className=k:g.ya(k)?f.className=k.join(" "):g.ld(f,k));2<d.length&&g.ud(e,f,d,2);return f};
g.ud=function(a,b,c,d){function e(c){c&&b.appendChild(g.w(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.za(f)||g.Ba(f)&&0<f.nodeType?e(f):(0,g.G)(wd(f)?g.ab(f):f,e)}};
g.yd=function(a){return window.document.createElement(String(a))};
g.zd=function(a){return window.document.createTextNode(String(a))};
g.md=function(a){return"CSS1Compat"==a.compatMode};
g.Ad=function(a,b){a.appendChild(b)};
g.Bd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
Cd=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
g.Dd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.Gd=function(a){return Ed&&void 0!=a.children?a.children:(0,g.Fd)(a.childNodes,function(a){return 1==a.nodeType})};
g.Hd=function(a){if(g.t(a.firstElementChild))a=a.firstElementChild;else for(a=a.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a};
g.Jd=function(a){var b;if(Id&&!(g.pd&&g.vc("9")&&!g.vc("10")&&g.x.SVGElement&&a instanceof g.x.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return g.Ba(b)&&1==b.nodeType?b:null};
g.Kd=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
g.dd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
g.Ld=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{g.Bd(a);var c=g.dd(a);a.appendChild(c.createTextNode(String(b)))}};
g.Od=function(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Md(a)||Nd(a)):Md(a)&&Nd(a))&&g.pd){var c;!g.Aa(a.getBoundingClientRect)||g.pd&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
Md=function(a){return g.pd&&!g.vc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")};
Nd=function(a){a=a.tabIndex;return g.ua(a)&&0<=a&&32768>a};
wd=function(a){if(a&&"number"==typeof a.length){if(g.Ba(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Aa(a))return"function"==typeof a.item}return!1};
g.Qd=function(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return g.Pd(a,function(a){return(!e||a.nodeName==e)&&(!c||g.w(a.className)&&g.Sa(a.className.split(/\s+/),c))},!0,d)};
g.Rd=function(a,b){return g.Qd(a,null,b,void 0)};
g.Pd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
cd=function(a){this.g=a||g.x.document||window.document};
g.Sd=function(a){a=a.g;return a.parentWindow||a.defaultView};
g.Ud=function(a){Td();return Fc(a)};
g.Vd=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b};
Wd=function(a){return(0,g.I)(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};
g.$d=function(a,b){g.za(a);Xd();for(var c=b?Yd:Zd,d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,n=m?a[e+2]:0,p=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|n>>6;n&=63;m||(n=64,k||(l=64));d.push(c[p],c[f],c[l],c[n])}return d.join("")};
be=function(a){var b=[];ae(a,function(a){b.push(a)});
return b};
ce=function(a){var b=a.length,c=0;"="===a[b-2]?c=2:"="===a[b-1]&&(c=1);var d=new window.Uint8Array(Math.ceil(3*b/4)-c),e=0;ae(a,function(a){d[e++]=a});
return d.subarray(0,e)};
ae=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=de[c];if(null!=e)return e;if(!g.sb(c))throw Error("Unknown base64 encoding at char: "+c);}return b}
Xd();for(var d=0;;){var e=c(-1),f=c(0),k=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=k&&(b(f<<4&240|k>>2),64!=l&&b(k<<6&192|l))}};
Xd=function(){if(!Zd){Zd={};de={};Yd={};for(var a=0;65>a;a++)Zd[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),de[Zd[a]]=a,Yd[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(de["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
fe=function(a,b,c){this.l=null;this.C=this.F=this.g=this.o=this.A=0;this.B=!1;a&&ee(this,a,b,c)};
he=function(a,b,c){if(ge.length){var d=ge.pop();a&&ee(d,a,b,c);return d}return new fe(a,b,c)};
ee=function(a,b,c,d){b=b.constructor===window.Uint8Array?b:b.constructor===window.ArrayBuffer?new window.Uint8Array(b):b.constructor===Array?new window.Uint8Array(b):b.constructor===String?ce(b):new window.Uint8Array(0);a.l=b;a.A=g.t(c)?c:0;a.o=g.t(d)?a.A+d:a.l.length;a.g=a.A};
ie=function(a){var b=a.l;var c=b[a.g+0];var d=c&127;if(128>c)return a.g+=1,d;c=b[a.g+1];d|=(c&127)<<7;if(128>c)return a.g+=2,d;c=b[a.g+2];d|=(c&127)<<14;if(128>c)return a.g+=3,d;c=b[a.g+3];d|=(c&127)<<21;if(128>c)return a.g+=4,d;c=b[a.g+4];d|=(c&15)<<28;if(128>c)return a.g+=5,d>>>0;a.g+=5;128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&a.g++;return d};
je=function(a){this.g=he(a,void 0,void 0);this.l=this.o=-1;this.A=!1};
ke=function(a){var b=a.g;if(b.g==b.o||a.getError())return!1;b=ie(a.g);var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.A=!0,!1;a.o=b>>>3;a.l=c;return!0};
le=function(a){switch(a.l){case 0:if(0!=a.l)le(a);else{for(a=a.g;a.l[a.g]&128;)a.g++;a.g++}break;case 1:1!=a.l?le(a):(a=a.g,a.g+=8);break;case 2:if(2!=a.l)le(a);else{var b=ie(a.g);a=a.g;a.g+=b}break;case 5:5!=a.l?le(a):(a=a.g,a.g+=4);break;case 3:b=[a.o];do{if(!ke(a)){a.A=!0;break}if(3==a.l)b.push(a.o);else if(4==a.l&&a.o!=b.pop()){a.A=!0;break}}while(0<b.length)}};
me=function(a){var b=ie(a.g);a=a.g;var c=a.l,d=a.g,e=d+b;b=[];for(var f="";d<e;){var k=c[d++];if(128>k)b.push(k);else if(192>k)continue;else if(224>k){var l=c[d++];b.push((k&31)<<6|l&63)}else if(240>k){l=c[d++];var m=c[d++];b.push((k&15)<<12|(l&63)<<6|m&63)}else if(248>k){l=c[d++];m=c[d++];var n=c[d++];k=(k&7)<<18|(l&63)<<12|(m&63)<<6|n&63;k-=65536;b.push((k>>10&1023)+55296,(k&1023)+56320)}8192<=b.length&&(f+=String.fromCharCode.apply(null,b),b.length=0)}c=f;if(8192>=b.length)b=String.fromCharCode.apply(null,
b);else{e="";for(f=0;f<b.length;f+=8192)k=g.cb(b,f,f+8192),e+=String.fromCharCode.apply(null,k);b=e}a.g=d;return c+b};
ne=function(a){var b=ie(a.g);a=a.g;if(0>b||a.g+b>a.l.length)a.B=!0,b=new window.Uint8Array(0);else{var c=a.l.subarray(a.g,a.g+b);a.g+=b;b=c}return b};
pe=function(){};
te=function(a,b,c){a.g=null;b||(b=[]);a.F=void 0;a.A=-1;a.l=b;a:{if(a.l.length){b=a.l.length-1;var d=a.l[b];if(d&&"object"==typeof d&&!g.ya(d)&&!(qe&&d instanceof window.Uint8Array)){a.B=b-a.A;a.o=d;break a}}a.B=Number.MAX_VALUE}a.C={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.B?(d+=a.A,a.l[d]=a.l[d]||re):(se(a),a.o[d]=a.o[d]||re)};
se=function(a){var b=a.B+a.A;a.l[b]||(a.o=a.l[b]={})};
ue=function(a,b){if(b<a.B){var c=b+a.A,d=a.l[c];return d===re?a.l[c]=[]:d}if(a.o)return d=a.o[b],d===re?a.o[b]=[]:d};
ve=function(a,b){if(b<a.B){var c=b+a.A,d=a.l[c];return d===re?a.l[c]=[]:d}d=a.o[b];return d===re?a.o[b]=[]:d};
we=function(a){if(null==a||a instanceof window.Uint8Array)return a;if(g.w(a))return ce(a);xa(a);return null};
xe=function(a,b,c){b<a.B?a.l[b+a.A]=c:(se(a),a.o[b]=c)};
ze=function(a){if(a.g)for(var b in a.g){var c=a.g[b];if(g.ya(c))for(var d=0;d<c.length;d++)c[d]&&ye(c[d]);else c&&ye(c)}};
ye=function(a){ze(a);return a.l};
Ae=function(a){var b;if(g.ya(a)){for(var c=Array(a.length),d=0;d<a.length;d++)null!=(b=a[d])&&(c[d]="object"==typeof b?Ae(b):b);return c}if(qe&&a instanceof window.Uint8Array)return new window.Uint8Array(a);c={};for(d in a)null!=(b=a[d])&&(c[d]="object"==typeof b?Ae(b):b);return c};
Be=function(a){for(var b=[],c=a=sd(a.ownerDocument);c!=a.top;c=c.parent)if(c.frameElement)b.push(c.frameElement);else break;return b};
g.J=function(){this.rb=this.rb;this.nb=this.nb};
g.K=function(a,b){g.Ce(a,g.B(g.De,b))};
g.Ce=function(a,b){a.rb?g.t(void 0)?b.call(void 0):b():(a.nb||(a.nb=[]),a.nb.push(g.t(void 0)?(0,g.A)(b,void 0):b))};
g.De=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Ee=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];g.za(d)?g.Ee.apply(null,d):g.De(d)}};
g.Fe=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Mg=!1;this.xv=!0};
Ge=function(a,b){g.Fe.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)};
g.Ie=function(a){return!(!a||!a[g.He])};
Ke=function(a,b,c,d,e){this.listener=a;this.g=null;this.src=b;this.type=c;this.capture=!!d;this.qk=e;this.key=++Je;this.vh=this.Dj=!1};
Le=function(a){a.vh=!0;a.listener=null;a.g=null;a.src=null;a.qk=null};
Me=function(a){this.src=a;this.listeners={};this.g=0};
Ne=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Xa(a.listeners[c],b);d&&(Le(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--));return d};
g.Oe=function(a){var b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Le(d[e]);delete a.listeners[c];a.g--}};
Pe=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.vh&&f.listener==b&&f.capture==!!c&&f.qk==d)return e}return-1};
g.Te=function(a,b,c,d,e){if(d&&d.once)return Se(a,b,c,d,e);if(g.ya(b)){for(var f=0;f<b.length;f++)g.Te(a,b[f],c,d,e);return null}c=Ue(c);return g.Ie(a)?a.ea(b,c,g.Ba(d)?!!d.capture:!!d,e):Ve(a,b,c,!1,d,e)};
Ve=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ba(e)?!!e.capture:!!e,l=g.We(a);l||(a[Xe]=l=new Me(a));c=l.add(b,c,d,k,f);if(c.g)return c;d=Ye();c.g=d;d.src=a;d.listener=c;if(a.addEventListener)Ze||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent($e(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");af++;return c};
Ye=function(){var a=bf,b=cf?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
Se=function(a,b,c,d,e){if(g.ya(b)){for(var f=0;f<b.length;f++)Se(a,b[f],c,d,e);return null}c=Ue(c);return g.Ie(a)?a.Ek(b,c,g.Ba(d)?!!d.capture:!!d,e):Ve(a,b,c,!0,d,e)};
g.df=function(a,b,c,d,e){if(g.ya(b))for(var f=0;f<b.length;f++)g.df(a,b[f],c,d,e);else d=g.Ba(d)?!!d.capture:!!d,c=Ue(c),g.Ie(a)?a.Pa(b,c,d,e):a&&(a=g.We(a))&&(b=a.ci(b,c,d,e))&&g.ef(b)};
g.ef=function(a){if(g.ua(a)||!a||a.vh)return!1;var b=a.src;if(g.Ie(b))return Ne(b.Ed,a);var c=a.type,d=a.g;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent($e(c),d):b.addListener&&b.removeListener&&b.removeListener(d);af--;(c=g.We(b))?(Ne(c,a),0==c.g&&(c.src=null,b[Xe]=null)):Le(a);return!0};
$e=function(a){return a in ff?ff[a]:ff[a]="on"+a};
hf=function(a,b,c,d){var e=!0;if(a=g.We(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.vh&&(f=gf(f,d),e=e&&!1!==f)}return e};
gf=function(a,b){var c=a.listener,d=a.qk||a.src;a.Dj&&g.ef(a);return c.call(d,b)};
bf=function(a,b){if(a.vh)return!0;if(!cf){var c=b||g.z("window.event"),d=new Ge(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.Mg&&0<=k;k--){d.currentTarget=c[k];var l=hf(c[k],f,!0,d);e=e&&l}for(k=0;!d.Mg&&k<c.length;k++)d.currentTarget=c[k],l=hf(c[k],f,!1,d),e=e&&l}return e}return gf(a,new Ge(b,
this))};
g.We=function(a){a=a[Xe];return a instanceof Me?a:null};
Ue=function(a){if(g.Aa(a))return a;a[jf]||(a[jf]=function(b){return a.handleEvent(b)});
return a[jf]};
g.kf=function(){g.J.call(this);this.Ed=new Me(this);this.fa=this;this.K=null};
lf=function(a,b,c,d){b=a.Ed.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.vh&&k.capture==c){var l=k.listener,m=k.qk||k.src;k.Dj&&Ne(a.Ed,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.xv};
mf=function(a,b){this.o=a;this.A=b;this.l=0;this.g=null};
nf=function(a,b){a.A(b);100>a.l&&(a.l++,b.next=a.g,a.g=b)};
of=function(a){return function(){return a}};
pf=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};
g.qf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
rf=function(a){var b=a;return function(){if(b){var a=b;b=null;a()}}};
sf=function(a){g.x.setTimeout(function(){throw a;},0)};
vf=function(a,b){var c=a;b&&(c=(0,g.A)(a,b));!g.Aa(g.x.setImmediate)||g.x.Window&&g.x.Window.prototype&&!Qb("Edge")&&g.x.Window.prototype.setImmediate==g.x.setImmediate?(tf||(tf=uf()),tf(c)):g.x.setImmediate(c)};
uf=function(){var a=g.x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Qb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.A)(function(a){if(("*"==d||
a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!Qb("Trident")&&!Qb("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.t(c.next)){c=c.next;var a=c.bq;c.bq=null;a()}};
return function(a){d.next={bq:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.x.setTimeout(a,0)}};
wf=function(){this.l=this.g=null};
xf=function(){this.next=this.scope=this.g=null};
g.Cf=function(a,b){yf||zf();Af||(yf(),Af=!0);Bf.add(a,b)};
zf=function(){if(-1!=String(g.x.Promise).indexOf("[native code]")){var a=g.x.Promise.resolve(void 0);yf=function(){a.then(Df)}}else yf=function(){vf(Df)}};
Df=function(){for(var a;a=Bf.remove();){try{a.g.call(a.scope)}catch(b){sf(b)}nf(Ef,a)}Af=!1};
Ff=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
Gf=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.If=function(a,b){this.g=0;this.F=void 0;this.A=this.l=this.o=null;this.B=this.C=!1;if(a!=g.va)try{var c=this;a.call(b,function(a){Hf(c,2,a)},function(a){Hf(c,3,a)})}catch(d){Hf(this,3,d)}};
Jf=function(){this.next=this.context=this.l=this.A=this.g=null;this.o=!1};
Lf=function(a,b,c){var d=Kf.get();d.A=a;d.l=b;d.context=c;return d};
Mf=function(a){if(a instanceof g.If)return a;var b=new g.If(g.va);Hf(b,2,a);return b};
Nf=function(a){return new g.If(function(b,c){c(a)})};
Pf=function(a,b,c){Of(a,b,c,null)||g.Cf(g.B(b,a))};
Qf=function(a){return new g.If(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Pf(e,b,c)})};
g.Rf=function(a){return new g.If(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],Pf(m,g.B(f,l),k);
else b(e)})};
Tf=function(a,b){var c=Lf(b,b,void 0);c.o=!0;Sf(a,c);return a};
g.Vf=function(a,b){return Uf(a,null,b,void 0)};
Wf=function(a,b){if(0==a.g)if(a.o){var c=a.o;if(c.l){for(var d=0,e=null,f=null,k=c.l;k&&(k.o||(d++,k.g==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.g&&1==d?Wf(c,b):(f?(d=f,d.next==c.A&&(c.A=d),d.next=d.next.next):Xf(c),Yf(c,e,3,b)))}a.o=null}else Hf(a,3,b)};
Sf=function(a,b){a.l||2!=a.g&&3!=a.g||Zf(a);a.A?a.A.next=b:a.l=b;a.A=b};
Uf=function(a,b,c,d){var e=Lf(null,null,null);e.g=new g.If(function(a,k){e.A=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){k(n)}}:a;
e.l=c?function(b){try{var e=c.call(d,b);!g.t(e)&&b instanceof $f?k(b):a(e)}catch(n){k(n)}}:k});
e.g.o=a;Sf(a,e);return e.g};
Hf=function(a,b,c){0==a.g&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.g=1,Of(c,a.I,a.K,a)||(a.F=c,a.g=b,a.o=null,Zf(a),3!=b||c instanceof $f||ag(a,c)))};
Of=function(a,b,c,d){if(a instanceof g.If)return Sf(a,Lf(b||g.va,c||null,d)),!0;if(Gf(a))return a.then(b,c,d),!0;if(g.Ba(a))try{var e=a.then;if(g.Aa(e))return bg(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
bg=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Zf=function(a){a.C||(a.C=!0,g.Cf(a.H,a))};
Xf=function(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.A=null);return b};
Yf=function(a,b,c,d){if(3==c&&b.l&&!b.o)for(;a&&a.B;a=a.o)a.B=!1;if(b.g)b.g.o=null,cg(b,c,d);else try{b.o?b.A.call(b.context):cg(b,c,d)}catch(e){dg.call(null,e)}nf(Kf,b)};
cg=function(a,b,c){2==b?a.A.call(a.context,c):a.l&&a.l.call(a.context,c)};
ag=function(a,b){a.B=!0;g.Cf(function(){a.B&&dg.call(null,b)})};
$f=function(a){Ka.call(this,a)};
g.eg=function(a,b){g.kf.call(this);this.Hb=a||1;this.Fh=b||g.x;this.Ul=(0,g.A)(this.gc,this);this.un=(0,g.H)()};
g.fg=function(a,b,c){if(g.Aa(a))c&&(a=(0,g.A)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.A)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.x.setTimeout(a,b||0)};
gg=function(a,b){var c=null;return g.Vf(new g.If(function(d,e){c=g.fg(function(){d(b)},a);
-1==c&&e(Error("Failed to schedule timer."))}),function(a){g.x.clearTimeout(c);
throw a;})};
hg=function(){return Math.round((0,g.H)()/1E3)};
ig=function(a){var b=window.performance&&window.performance.timing&&window.performance.timing.domLoading&&0<window.performance.timing.domLoading?Math.round(window.performance.timing.domLoading/1E3):null;return null!=b?b:null!=a?a:hg()};
jg=function(){this.l=-1};
kg=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};
mg=function(a){try{return g.x.JSON.parse(a)}catch(d){var b=d}a=String(a);if(kg(a))try{var c=eval("("+a+")");b&&lg("Invalid JSON: "+a,b);return c}catch(d){}throw Error("Invalid JSON string: "+a);};
g.pg=function(a){var b=[];ng(new og,a,b);return b.join("")};
og=function(){};
ng=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ng(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),qg(d,c),c.push(":"),ng(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":qg(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
qg=function(a,b){b.push('"',a.replace(rg,function(a){var b=sg[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),sg[a]=b);return b}),'"')};
tg=function(a){this.g=a||{cookie:""}};
ug=function(a){a=(a.g.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ib(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.vg=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.xg=function(a){return a.match(wg)};
g.yg=function(a){return a?(0,window.decodeURI)(a):a};
g.zg=function(a){return g.yg(g.xg(a)[3]||null)};
g.Ag=function(a){return Number(g.xg(a)[4]||null)||null};
Bg=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var k=c[d].substring(0,e);f=c[d].substring(e+1)}else k=c[d];b(k,f?tb(f):"")}};
Cg=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
Dg=function(a,b){return b?a?a+"&"+b:b:a};
Eg=function(a,b){if(!b)return a;var c=Cg(a);c[1]=Dg(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
Fg=function(a,b,c){if(g.ya(b))for(var d=0;d<b.length;d++)Fg(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+(0,window.encodeURIComponent)(String(b))))};
Gg=function(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Fg(a[d],a[d+1],c);return c.join("&")};
g.Hg=function(a){var b=[],c;for(c in a)Fg(c,a[c],b);return b.join("&")};
Ig=function(a,b){var c=2==arguments.length?Gg(arguments[1],0):Gg(arguments,1);return Eg(a,c)};
g.Jg=function(a,b){var c=g.Hg(b);return Eg(a,c)};
Kg=function(a,b,c){c=null!=c?"="+(0,window.encodeURIComponent)(String(c)):"";return Eg(a,b+c)};
Lg=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.Og=function(a,b){for(var c=a.search(Mg),d=0,e,f=[];0<=(e=Lg(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(Ng,"$1")};
Pg=function(a,b,c){return Kg(g.Og(a,b),b,c)};
Qg=function(a,b){var c=Cg(a),d=c[1],e=[];d&&(0,g.G)(d.split("&"),function(a){var c=a.indexOf("=");b.hasOwnProperty(0<=c?a.substr(0,c):a)||e.push(a)});
c[1]=Dg(e.join("&"),g.Hg(b));return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
Rg=function(){this.g={};return this};
Sg=function(a,b){a.g.eb=fc(a.g,"eb",0)|b};
g.Tg=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
Ug=function(a,b){return a==b?!0:a&&b?a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left:!1};
Vg=function(a,b,c){b instanceof g.Yc?(a.left+=b.x,a.right+=b.x,a.top+=b.y,a.bottom+=b.y):(a.left+=b,a.right+=b,g.ua(c)&&(a.top+=c,a.bottom+=c));return a};
g.Wg=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Xg=function(a){return new g.Tg(a.top,a.left+a.width,a.top+a.height,a.left)};
g.Yg=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
g.Zg=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return a.left=c,a.top=e,a.width=d-c,a.height=f-e,!0}return!1};
g.$g=function(a){return new g.ad(a.width,a.height)};
g.ah=function(a){return new g.Yc(a.left,a.top)};
bh=function(){this.g={};this.l=0};
ch=function(a,b){this.B=a;this.o=!0;this.g=b};
eh=function(a,b){ch.call(this,String(a),b);this.A=a;this.g=!!b};
fh=function(a,b){ch.call(this,a,b)};
gh=function(a){if(a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)){a=a.split(".");var b=Number(a[0]),c=Number(a[1]);return new fh("",new g.Wg(c,b,Number(a[3])-c,Number(a[2])-b))}return new fh("",new g.Wg(0,0,0,0))};
ih=function(){hh||(hh=new bh);return hh};
jh=function(a,b){a.g[b.B]=b};
g.lh=function(a,b,c){if(g.w(b))(b=kh(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=kh(c,d);f&&(c.style[f]=e)}};
kh=function(a,b){var c=mh[b];if(!c){var d=Nb(b);c=d;void 0===a.style[d]&&(d=(g.rd?"Webkit":g.nh?"Moz":g.pd?"ms":g.oh?"O":null)+Ob(d),void 0!==a.style[d]&&(c=d));mh[b]=c}return c};
ph=function(a,b){var c=a.style[Nb(b)];return"undefined"!==typeof c?c:a.style[kh(a,b)]||""};
g.qh=function(a,b){var c=g.dd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""};
g.rh=function(a,b){return g.qh(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]};
g.th=function(a,b,c){if(b instanceof g.Yc){var d=b.x;b=b.y}else d=b,b=c;a.style.left=sh(d,!1);a.style.top=sh(b,!1)};
uh=function(a){return new g.Yc(a.offsetLeft,a.offsetTop)};
vh=function(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}g.pd&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b};
g.wh=function(a){if(g.pd&&!g.xc(8))return a.offsetParent;var b=g.dd(a),c=g.rh(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=g.rh(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
g.yh=function(a){for(var b=new g.Tg(0,window.Infinity,window.Infinity,0),c=g.fd(a),d=c.g.body,e=c.g.documentElement,f=od(c.g);a=g.wh(a);)if(!(g.pd&&0==a.clientWidth||g.rd&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=g.rh(a,"overflow")){var k=g.xh(a),l=new g.Yc(a.clientLeft,a.clientTop);k.x+=l.x;k.y+=l.y;b.top=Math.max(b.top,k.y);b.right=Math.min(b.right,k.x+a.clientWidth);b.bottom=Math.min(b.bottom,k.y+a.clientHeight);b.left=Math.max(b.left,k.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,
d);b.top=Math.max(b.top,f);c=g.nd(g.Sd(c)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null};
g.xh=function(a){var b=g.dd(a),c=new g.Yc(0,0);var d=b?g.dd(b):window.document;d=!g.pd||g.xc(9)||g.md(g.fd(d).g)?d.documentElement:d.body;if(a==d)return c;a=vh(a);b=g.qd(g.fd(b).g);c.x=a.left+b.x;c.y=a.top+b.y;return c};
g.Ah=function(a,b){var c=new g.Yc(0,0),d=sd(g.dd(a));if(!qc(d,"parent"))return c;var e=a;do{var f=d==b?g.xh(e):zh(e);c.x+=f.x;c.y+=f.y}while(d&&d!=b&&d!=d.parent&&(e=d.frameElement)&&(d=d.parent));return c};
g.Ch=function(a,b){var c=g.Bh(a),d=g.Bh(b);return new g.Yc(c.x-d.x,c.y-d.y)};
zh=function(a){a=vh(a);return new g.Yc(a.left,a.top)};
g.Bh=function(a){if(1==a.nodeType)return zh(a);a=a.changedTouches?a.changedTouches[0]:a;return new g.Yc(a.clientX,a.clientY)};
g.Eh=function(a,b,c){if(b instanceof g.ad)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");g.Dh(a,b);a.style.height=sh(c,!0)};
sh=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Dh=function(a,b){a.style.width=sh(b,!0)};
g.Gh=function(a){var b=Fh;if("none"!=g.rh(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};
Fh=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=g.rd&&!b&&!c;return g.t(b)&&!d||!a.getBoundingClientRect?new g.ad(b,c):(a=vh(a),new g.ad(a.right-a.left,a.bottom-a.top))};
g.Hh=function(a,b){a.style.display=b?"":"none"};
Ih=function(a){var b=new g.Wg(-Number.MAX_VALUE/2,-Number.MAX_VALUE/2,Number.MAX_VALUE,Number.MAX_VALUE),c=new g.Wg(0,0,0,0);if(!a||0==a.length)return c;for(var d=0;d<a.length;d++)if(!g.Zg(b,a[d]))return c;return b};
Jh=function(a,b){var c=a.getBoundingClientRect(),d=g.Ah(a,b);return new g.Wg(Math.round(d.x),Math.round(d.y),Math.round(c.right-c.left),Math.round(c.bottom-c.top))};
Kh=function(a,b,c){if(b&&c){a:{var d=Math.max(b.left,c.left);var e=Math.min(b.left+b.width,c.left+c.width);if(d<=e){var f=Math.max(b.top,c.top),k=Math.min(b.top+b.height,c.top+c.height);if(f<=k){d=new g.Wg(d,f,e-d,k-f);break a}}d=null}e=d?d.height*d.width:0;f=d?b.height*b.width:0;d=d&&f?Math.round(e/f*100):0;jh(a,new ch("vp",d));d&&0<d?(e=g.Xg(b),f=g.Xg(c),e=e.top>=f.top&&e.top<f.bottom):e=!1;jh(a,new eh(512,e));d&&0<d?(e=g.Xg(b),f=g.Xg(c),e=e.bottom<=f.bottom&&e.bottom>f.top):e=!1;jh(a,new eh(1024,
e));d&&0<d?(e=g.Xg(b),f=g.Xg(c),e=e.left>=f.left&&e.left<f.right):e=!1;jh(a,new eh(2048,e));d&&0<d?(b=g.Xg(b),c=g.Xg(c),c=b.right<=c.right&&b.right>c.left):c=!1;jh(a,new eh(4096,c))}};
Lh=function(a,b){var c=0;g.Yb(sd(),"ima","video","client","tagged")&&(c=1);var d=null;a&&(d=a());if(d){var e=d;d=ih();d.g={};var f=new eh(32,!0);f.o=!1;jh(d,f);f=sd().document;f=f.webkitVisibilityState||f.mozVisibilityState||f.visibilityState||f.msVisibilityState||"";jh(d,new eh(64,"hidden"!=f.toLowerCase().substring(f.length-6)?!0:!1));try{var k=sd().top;try{var l=!!k.location.href||""===k.location.href}catch(u){l=!1}if(l){var m=Be(e);var n=m&&0!=m.length?"1":"0"}else n="2"}catch(u){n="2"}jh(d,new eh(256,
"2"==n));jh(d,new eh(128,"1"==n));m=l=sd().top;"2"==n&&(m=sd());k=Jh(e,m);jh(d,new fh("er",k));try{var p=m.document&&!m.document.body?null:g.nd(m||window)}catch(u){p=null}p?(m=g.qd(g.fd(m.document).g),jh(d,new eh(16384,!!m)),p=m?new g.Wg(m.x,m.y,p.width,p.height):null):p=null;jh(d,new fh("vi",p));if(p&&"1"==n){n=Be(e);e=[];for(m=0;m<n.length;m++)(f=Jh(n[m],l))&&e.push(f);e.push(p);p=Ih(e)}Kh(d,k,p);d.l&&(n=hg()-d.l,jh(d,new ch("ts",n)));d.l=hg()}else d=ih(),d.g={},d.l=hg(),jh(d,new eh(32,!1));this.o=
d;this.g=new Rg;this.g.set("ve",4);c&&Sg(this.g,1);g.Yb(sd(),"ima","video","client","crossdomainTag")&&Sg(this.g,4);g.Yb(sd(),"ima","video","client","sdkTag")&&Sg(this.g,8);g.Yb(sd(),"ima","video","client","jsTag")&&Sg(this.g,2);b&&fc(b,"fullscreen",!1)&&Sg(this.g,16);this.l=d=null;if(c&&(c=g.Yb(sd(),"ima","video","client"),c.getEData)){this.l=c.getEData();if(c=g.Yb(sd(),"ima","video","client","getLastSnapshotFromTop"))if(n=c())this.l.extendWithDataFromTopIframe(n.tagstamp,n.playstamp,n.lactstamp),
c=this.o,d=n.er,n=n.vi,d&&n&&(d=gh(d).getValue(),n=gh(n).getValue(),e=null,fc(c.g,"er",null)&&(e=fc(c.g,"er",null).getValue(),e.top+=d.top,e.left+=d.left,jh(c,new fh("er",e))),fc(c.g,"vi",null)&&(p=fc(c.g,"vi",null).getValue(),p.top+=d.top,p.left+=d.left,l=[],l.push(p),l.push(d),l.push(n),d=Ih(l),Kh(c,e,d),jh(c,new fh("vi",n))));a:{if(this.l){if(this.l.getTagLoadTimestamp){d=this.l.getTagLoadTimestamp();break a}if(this.l.getTimeSinceTagLoadSeconds){d=this.l.getTimeSinceTagLoadSeconds();break a}}d=
null}}this.g.set("td",hg()-ig(d))};
Mh=function(a,b){try{var c=new Lh(a,b),d=[],e=Number(c.g.get("eb"));c.g.remove("eb");var f,k=c.g,l=[],m;for(m in k.g)l.push(m+k.g[m]);(f=l.join("_"))&&d.push(f);if(c.l){var n=c.l.serialize();n&&d.push(n)}var p,u=c.o;f=e;k=[];f||(f=0);for(var v in u.g){var C=u.g[v];if(C instanceof eh)C.getValue()&&(f|=C.A);else{var D,E=u.g[v];(D=E.o?E.l():"")&&k.push(v+D)}}k.push("eb"+String(f));(p=k.join("_"))&&d.push(p);c.g.set("eb",e);return d.join("_")}catch(ea){return"tle;"+Cb(ea.name,12)+";"+Cb(ea.message,40)}};
Nh=function(a,b){this.type=a;this.label=b};
Oh=function(a){new Nh(a,1)};
Ph=function(a){new Nh(a,2)};
Qh=function(a){new Nh(a,3)};
Rh=function(a,b,c,d){if(d)c=a+("&"+b+"="+c);else{var e="&"+b+"=",f=a.indexOf(e);0>f?c=a+e+c:(f+=e.length,e=a.indexOf("&",f),c=0<=e?a.substring(0,f)+c+a.substring(e):a.substring(0,f)+c)}return 2E3<c.length?g.t(void 0)?Rh(a,b,void 0,d):a:c};
Sh=function(a){try{return!!a&&null!=a.location.href&&qc(a,"foo")}catch(b){return!1}};
Th=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
Vh=function(a){return(a=Uh.exec(a))&&a[0]||""};
Xh=function(){var a=Wh;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec((0,window.decodeURIComponent)(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};
Zh=function(a){return a?a.passive&&Yh()?a:a.capture||!1:a};
$h=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,Zh(d)):a.attachEvent&&a.attachEvent("on"+b,c)};
ai=function(a){a=a||g.x;var b=a.context;if(!b)try{b=a.parent.context}catch(c){}try{if(b&&"pageViewId"in b&&"canonicalUrl"in b)return b}catch(c){}return null};
bi=function(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};
fi=function(){if(ci&&!Sh(di)){var a="."+ei.domain;try{for(;2<a.split(".").length&&!Sh(di);)ei.domain=a=a.substr(a.indexOf(".")+1),di=window.parent}catch(b){}Sh(di)||(di=window)}return di};
gi=function(a,b,c){a&&null!==b&&b!=b.top&&(b=b.top);try{return(void 0===c?0:c)?(new g.ad(b.innerWidth,b.innerHeight)).round():g.nd(b||window).round()}catch(d){return new g.ad(-12245933,-12245933)}};
hi=function(){this.g=0;this.o=!1;this.l=-1;this.Xe=!1};
ii=function(a,b){this.o=a;this.g=null;this.l=b};
ji=function(){this.g={};this.o=!0;this.l={}};
ki=function(a,b){var c=a.g.osd;c&&null===c.g&&g.$b(c.o,b)&&(c.g=b)};
li=function(a,b){if(Zb(a.l,b))return a.l[b];if(!a.o)return null;var c=a.g[b];if(c)return c.getValue()};
ni=function(){return(0,g.H)()-mi};
ti=function(a){var b=0<=oi?ni()-oi:-1,c=pi?ni()-qi:-1,d=0<=si?ni()-si:-1;if(79463068==a)return 500;if(947190542==a)return 100;if(79463069==a)return 200;a=[2E3,4E3];var e=[250,500,1E3];var f=b;-1!=c&&c<b&&(f=c);for(b=0;b<a.length;++b)if(f<a[b]){var k=e[b];break}void 0===k&&(k=e[a.length]);return-1!=d&&1500<d&&4E3>d?500:k};
ui=function(){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[ei.webkitVisibilityState||ei.mozVisibilityState||ei.visibilityState||""]||0};
xi=function(a){vi.e=-1;vi.i=6;vi.n=7;vi.t=8;if(!wi){var b=[];Th(vi,function(a,c){b[a+1]=c});
var c=b.join(""),d=a&&a[c];wi=d&&function(b,c){return d.call(a,b,c)}}return wi};
yi=function(){this.l=this.o=this.A=this.g=0};
zi=function(){this.l=[1,.75,.5,.3,0];this.g=(0,g.I)(this.l,function(){return new yi})};
Bi=function(a,b){return Ai(a,function(a){return a.g},void 0===b?!0:b)};
Di=function(a,b){return Ci(a,b,function(a){return a.g})};
Ei=function(a){return Ai(a,function(a){return a.o},!0)};
Fi=function(a,b){return Ci(a,b,function(a){return a.o})};
Gi=function(a,b){return Ci(a,b,function(a){return a.l})};
Hi=function(a){(0,g.G)(a.g,function(a){a.l=0})};
Ai=function(a,b,c){a=(0,g.I)(a.g,function(a){return b(a)});
return c?a:Ii(a)};
Ci=function(a,b,c){var d=g.Pa(a.l,function(a){return b<=a});
return-1==d?0:c(a.g[d])};
Ii=function(a){return(0,g.I)(a,function(a,c,d){return 0<c?d[c]-d[c-1]:d[c]})};
Ji=function(){this.g=new zi;this.V=new yi;this.P=this.F=-1;this.ba=1E3};
Ki=function(a,b){this.l=(void 0===a?0:a)||0;this.g=(void 0===b?"":b)||""};
Li=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
Mi=function(a,b,c){this.g=a;this.l=b;this.o=c};
Ni=function(a,b,c){this.url=a;this.A=b;this.nn=!!c;this.depth=g.ua(void 0)?void 0:null};
Qi=function(a){a=a||Oi();for(var b=new Ni(g.x.location.href,g.x,!1),c=null,d=a.length-1,e=d;0<=e;--e){var f=a[e];!c&&Pi.test(f.url)&&(c=f);if(f.url&&!f.nn){b=f;break}}e=null;f=a.length&&a[d].url;0!=b.depth&&f&&(e=a[d]);return new Mi(b,e,c)};
Oi=function(){var a=g.x,b=[],c=null;do{var d=a;if(Sh(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new Ni(e||"",d));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);a=0;for(d=b.length-1;a<=d;++a)b[a].depth=d-a;d=g.x;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.nn=!0);return b};
Ri=function(){this.o="&";this.A=g.t(void 0)?void 0:"trn";this.B=!1;this.l={};this.C=0;this.g=[]};
Si=function(a,b){var c={};c[a]=b;return[c]};
Ui=function(a,b,c,d,e){var f=[];Th(a,function(a,l){var k=Ti(a,b,c,d,e);k&&f.push(l+"="+k)});
return f.join(b)};
Ti=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],k=0;k<a.length;k++)f.push(Ti(a[k],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(Ui(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
Vi=function(a,b,c,d){a.g.push(b);a.l[b]=Si(c,d)};
Wi=function(a){if(!a.A)return 4E3;var b=1,c;for(c in a.l)b=c.length>b?c.length:b;return 4E3-a.A.length-b-a.o.length-1};
Xi=function(a,b,c,d){if(Math.random()<(d||a.g))try{if(c instanceof Ri)var e=c;else e=new Ri,Th(c,function(a,b){var c=e,d=c.C++,f=Si(b,a);c.g.push(d);c.l[d]=f});
var f=e.wb(a.A,a.l,a.o+b+"&","");f&&bi(g.x,f)}catch(k){}};
g.Yi=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};
Zi=function(){var a=g.x.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.H)()};
$i=function(){var a=g.x.performance;return a&&a.now?a.now():null};
aj=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
dj=function(){var a=bj;this.events=[];this.o=a||g.x;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=cj()||(null!=b?b:1>Math.random())};
fj=function(a){a&&cj()&&(ej.clearMarks("goog_"+a.uniqueId+"_start"),ej.clearMarks("goog_"+a.uniqueId+"_end"))};
ij=function(){var a=gj;this.o=hj;this.l=!0;this.A=this.g;this.xa=void 0===a?null:a};
kj=function(a,b,c,d,e){try{if(a.xa&&a.xa.g){var f=a.xa.start(b.toString(),3);var k=c();a.xa.end(f)}else k=c()}catch(m){c=a.l;try{fj(f);var l=jj(m);c=(e||a.A).call(a,b,l,void 0,d)}catch(n){a.g(217,n)}if(!c)throw m;}return k};
mj=function(a,b,c,d){var e=lj;return function(f){for(var k=[],l=0;l<arguments.length;++l)k[l-0]=arguments[l];return kj(e,a,function(){return b.apply(c,k)},d,void 0)}};
jj=function(a){return new nj(oj(a),a.fileName,a.lineNumber)};
oj=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
nj=function(a,b,c){Li.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
qj=function(a,b){return kj(lj,a,b,void 0,pj)};
rj=function(a,b,c,d){return mj(a,b,c,d)};
sj=function(a,b){lj.g(a,b,void 0,void 0)};
tj=function(a,b,c,d){c=mj(d,c,void 0,void 0);$h(a,b,c,{capture:!1});return c};
uj=function(a,b){a&&(a.l&&(b[4]=a.l),a.g&&(b[12]=a.g))};
vj=function(a){var b=[];g.Rb(a,function(a,d){var c=(0,window.encodeURIComponent)(d),f=a;g.w(f)&&(f=(0,window.encodeURIComponent)(f));b.push(c+"="+f)});
b.push("24="+(0,g.H)());return b.join("\n")};
wj=function(){var a=g.vd("DIV");a.style.cssText="position:relative;left:0px;top:0px;width:0;height:0;";return a};
xj=function(a,b,c,d){if(!a)return{value:d,done:!1};d=b(d,a);var e=c(d,a);return!e&&qc(a,"parentElement")?xj(g.Jd(a),b,c,d):{done:e,value:d}};
yj=function(a,b,c,d){if(!a)return d;d=xj(a,b,c,d);if(!d.done)try{var e=g.dd(a),f=e&&sd(e);return yj(f&&f.frameElement,b,c,d.value)}catch(k){}return d.value};
zj=function(a){var b=!g.pd||g.vc(8);return yj(a,function(a,d){var c=qc(d,"style")&&d.style&&ph(d,"visibility");return{hidden:"hidden"===c,visible:b&&"visible"===c}},function(a){return a.hidden||a.visible},{hidden:!1,
visible:!1}).hidden};
Aj=function(a){return yj(a,function(a,c){return!(!qc(c,"style")||!c.style||"none"!==ph(c,"display"))},function(a){return a},!1)?!0:zj(a)};
Bj=function(a){return new g.Tg(a.top,a.right,a.bottom,a.left)};
Cj=function(a){return null!=a&&0<=a&&1>=a};
Dj=function(a,b){return null===a||null===b?new g.Tg(0,0,0,0):new g.Tg(Math.max(a.top,b.top),Math.min(a.right,b.right),Math.min(a.bottom,b.bottom),Math.max(a.left,b.left))};
Ej=function(a,b){if(!a||!b)return!1;for(var c=0;null!==a&&100>c++;){if(a===b)return!0;try{if(a=g.Jd(a)||a){var d=g.dd(a),e=d&&sd(d),f=e&&e.frameElement;f&&(a=f)}}catch(k){break}}return!1};
Fj=function(a,b,c){if(!a||!b)return!1;b=Vg(a.clone(),-b.left,-b.top);a=(b.left+b.right)/2;b=(b.top+b.bottom)/2;var d=fi();Sh(d.top)&&d.top&&d.top.document&&(d=d.top);d=xi(d&&d.document);if(!d)return!1;a=d(a,b);if(!a)return!1;b=(b=(b=g.dd(c))&&b.defaultView&&b.defaultView.frameElement)&&Ej(b,a);d=a===c;a=!d&&a&&g.Pd(a,function(a){return a===c});
return!(b||d||a)};
Gj=function(a,b,c,d){return 0>=a.Vd()||0>=a.getHeight()?!0:c&&d?qj(208,function(){return Fj(a,b,c)}):!1};
Hj=function(a,b){this.l=null;this.C=a;this.F=b||1};
Ij=function(a,b){var c=b.right-b.left,d=b.bottom-b.top,e=Math.floor(c/2),f=Math.floor(d/2);switch(a.F){case 4:return a.C?(e=Math.floor(.3*c),f=Math.floor(.3*d),[new g.Yc(e,f),new g.Yc(c-e,f),new g.Yc(e,d-f),new g.Yc(c-e,d-f)]):[new g.Yc(e,0),new g.Yc(0,f),new g.Yc(e,d-1),new g.Yc(c-1,f)];case 3:return[new g.Yc(c-1,0),new g.Yc(e,f),new g.Yc(0,d-1)];default:return[new g.Yc(e,f)]}};
Jj=function(a,b){if(void 0===b)try{b=a.l.getBoundingClientRect()}catch(d){b=new g.Tg(0,0,0,0)}var c=Ij(a,b);(0,g.G)(c,function(a){a.x+=b.left;a.y+=b.top});
return c};
Kj=function(a,b,c){this.snapshot=a;this.l=b;this.g=c};
Lj=function(a,b){Hj.call(this,a,b);this.g=[];this.B=!1;this.A=0;this.o=-1};
Oj=function(a,b){var c=b.getBoundingClientRect(),d="DIV"==b.tagName||"INS"==b.tagName,e=g.dd(b),f=!0,k=a.g;if(d){var l=wj();c=Ij(a,c);Cd(b,l,0);(0,g.G)(c,function(a){var b=new Mj(e);k.push(b);var c;if(c=f)if(b.g){b.g.style.position="absolute";Nj(b,a);a=!0;try{l.appendChild(b.g)}catch(u){a=!1}c=a}else c=!1;f=c})}else c=Jj(a,c),(0,g.G)(c,function(a){var c=new Mj(e);
k.push(c);var d;if(d=f)if(c.g&&b.parentNode){c.g.style.position="fixed";Nj(c,a);a=!0;try{b.parentNode&&b.parentNode.insertBefore(c.g,b.nextSibling)}catch(u){a=!1}d=a}else d=!1;f=d});
f?(a.l=b,a.B=!d&&!1):((0,g.G)(k,function(a){a.remove()}),a.g=[]);
return f};
Pj=function(a){if(a.l&&a.B){var b=Jj(a);(0,g.G)(b,function(a,b){this.g[b]&&Nj(this.g[b],a)},a)}};
Qj=function(a){(0,g.G)(a.g,function(a){a.remove()});
a.g=[]};
Vj=function(a){var b=(0,g.H)(),c=a.A?b-a.A:0,d=Ma(a.g,function(a){return a.isVisible(b)});
d=4==a.g.length?a.C?Rj[d]:Sj[d]:3==a.g.length?Tj[d]:1==a.g.length?Uj[d]:-1;c=new Kj(d,a.o,c);a.o=d;a.A=b;Pj(a);return c};
Mj=function(a){this.g=null;this.o=this.l=0;Wj(this,a)};
Wj=function(a,b){var c=(new cd(b)).createElement("IFRAME");c.srcdoc="";c.frameBorder="0";c.style.width="1px";c.style.height="1px";c.style.opacity="0";c.style.zIndex=-999999;a.g=c;var d=mj(245,a.A,a,void 0);c.addEventListener("load",rj(244,function(){c.contentWindow.requestAnimationFrame(d)}))};
Nj=function(a,b){a.g&&!Zc(b,uh(a.g))&&g.th(a.g,b)};
Yj=function(){this.F=!1;this.I=void 0;this.l=!Sh(L.top);var a=Oi();this.domain=0<a.length&&null!=a[a.length-1]&&null!=a[a.length-1].url?g.zg(a[a.length-1].url)||"":"";this.A=this.H=this.C=this.g=null;this.L=0;this.o=!1;this.B=null;this.K=0;this.fb="geo";this.Wc=new ji;this.Wc.g.nio2=new ii(Xj,!0);this.Wc.g.omid=new ii(Xj,!1)};
Zj=function(a,b,c,d,e,f){this.time=a;this.l=b;this.volume=void 0===f?null:f;this.A=d;this.g=c;this.o=e};
ak=function(a,b,c,d,e,f){this.C=a;this.A=b;this.g=c;this.o=d;this.l=e;this.B=f};
bk=function(a){this.l=a;this.g=null};
dk=function(){return!ck()&&(Qb("iPod")||Qb("iPhone")||Qb("Android")||Qb("IEMobile"))};
ck=function(){return Qb("iPad")||Qb("Android")&&!Qb("Mobile")||Qb("Silk")};
ek=function(a,b){b=void 0===b?0:b;this.A=a;this.B=[];this.g=new Zj(-1,new g.ad(0,0),null,!0,this);this.I=this.l=b;this.H=this.P=!1;this.F="uk";this.U=!1};
fk=function(a,b){g.Sa(a.B,b)||(a.B.push(b),b.oi(a.l),b.ni(a.g),b.yh()&&(a.H=!0))};
hk=function(a){a.H=a.B.length?(0,g.gk)(a.B,function(a){return a.yh()}):!1};
ik=function(a){(0,g.G)(a.B,function(b){b.ni(a.g)})};
jk=function(a){(0,g.G)(a.B,function(b){b.oi(a.l)})};
kk=function(a,b,c,d){this.element=a;this.g=b;this.Wc=c;this.Kj=d;this.A=!1;this.o=new ak(b.Te(),this.element,new g.Tg(0,0,0,0),null,0,0)};
nk=function(a,b,c){this.position=lk.clone();this.yd=0;this.zn=this.fk();this.wn=-2;this.OI=(0,g.H)();this.bw=-1;this.zg=b;this.mg=-1!=b;this.cj=this.Zt=null;this.opacity=-1;this.tv=c;this.qw=this.An=g.va;this.ne=this.element=a;this.Ng=null;this.sp=this.Ye=!1;this.qm=1;this.bp=!0;this.Zd=!1;Yj.getInstance().L++;this.domain=null;this.sn=0;this.Kb=this.Cm();this.aw=-1;this.Gl=new g.Tg(0,0,0,0);this.Wc=new ji;this.Wc.g.od=new ii(mk,!1);this.Wc.g.opac=new ii(Xj,!0)};
ok=function(a,b,c,d,e){if(a.mg){var f=L.innerWidth,k=L.innerHeight,l=new g.Tg(Math.round(L.mozInnerScreenY),Math.round(L.mozInnerScreenX+f),Math.round(L.mozInnerScreenY+k),Math.round(L.mozInnerScreenX));c=new g.Tg(L.screenY+d,L.screenX+c.width,L.screenY+c.height,L.screenX);e||(d=new g.Tg(l.top-c.top,l.right-c.left,l.bottom-c.top,l.left-c.left),d.top>a.position.top?a.position=d:(a.position.right=a.position.left+f,a.position.bottom=a.position.top+k),a.yd=f*k);a.kf(l,c,b,e,!0,!0)}};
rk=function(a,b,c){if(a.mg){var d=xi(L&&L.document);if(d){c||pk(a,L,!0);if(a.Xe()||a.sp){var e=qk(a,d);d=!0}else e=g.qd(window.document),e=d(Math.floor((a.position.left+a.position.right)/2)-e.x,Math.floor((a.position.top+a.position.bottom)/2)-e.y)?.5:0,d=!1;a.kf(a.position,e,b,c,!0,d)}}};
sk=function(a,b,c){if(c(b))return b;for(;;){var d=Math.floor((a+b)/2);if(d==a||d==b)return a;c(d)?a=d:b=d}};
qk=function(a,b){var c=g.qd(window.document),d=a.qm,e=Math.floor(a.position.left-c.x)+1,f=Math.floor(a.position.top-c.y)+1,k=Math.floor(a.position.right-c.x)-d,l=Math.floor(a.position.bottom-c.y)-d;c=(l-f)*(k-e);if(f>l||e>k)return 0;d=!!b(e,f);var m=!!b(k,l);if(d&&m)return 1;var n=!!b(k,f),p=!!b(e,l);if(d)l=sk(f,l,function(a){return!!b(e,a)}),k=sk(e,k,function(a){return!!b(a,f)});
else if(n)l=sk(f,l,function(a){return!!b(k,a)}),e=sk(k,e,function(a){return!!b(a,f)});
else if(p)f=sk(l,f,function(a){return!!b(e,a)}),k=sk(e,k,function(a){return!!b(a,l)});
else if(m)f=sk(l,f,function(a){return!!b(k,a)}),e=sk(k,e,function(a){return!!b(a,l)});
else{var u=Math.floor((e+k)/2),v=Math.floor((f+l)/2);if(!b(u,v))return 0;f=sk(v,f,function(a){return!!b(u,a)});
l=sk(v,l,function(a){return!!b(u,a)});
e=sk(u,e,function(a){return!!b(a,v)});
k=sk(u,k,function(a){return!!b(a,v)})}return(l-f)*(k-e)/c};
tk=function(a,b,c,d,e){a.mg&&(d||pk(a,L,e),a.kf(a.position,c,b,d,!1,!0))};
uk=function(a,b,c){if(a.mg){var d=c?a.Kb.g:a.sn;a.Gl&&!Ug(a.Gl,new g.Tg(0,0,0,0))&&(d=Vg(a.Gl.clone(),a.position.left,a.position.top));a.kf(a.position,d,b,c,!0,!0)}};
vk=function(a,b){a.ne?a.fb=b.create(a.ne,a.Wc,a.Kj(),function(){return a.qw(a)}):sj(300,Error("Could not observe; element does not exist."))};
wk=function(a,b,c){if(a.mg&&a.fb){var d=fi(),e=Yj.getInstance();pk(a,d,e.l);a.fb.Xl();d=a.fb.o;e=d.Te().g;if(null!=d.o&&e){var f=d.g;a.Zt=new g.Yc(f.left-e.left,f.top-e.top);a.cj=new g.ad(e.right-e.left,e.bottom-e.top)}a.kf(a.position,d.l,b,c,!0,!0)}};
pk=function(a,b,c,d){if(d)a.position=d;else{b=c?b:b.top;try{var e=lk.clone(),f=new g.Yc(0,0);if(a.ne){var k=1==a.tv;!c&&k&&Aj(a.ne)||(e=a.ne.getBoundingClientRect());f=g.Ah(a.ne,b)}c=f;var l=c.x,m=c.y;a.position=new g.Tg(Math.round(m),Math.round(l+(e.right-e.left)),Math.round(m+(e.bottom-e.top)),Math.round(l))}catch(n){a.position=lk.clone()}}a.yd=(a.position.bottom-a.position.top)*(a.position.right-a.position.left)};
xk=function(a,b){var c=Math.pow(10,b);return Math.floor(a*c)/c};
Bk=function(a,b){var c=!1,d=a.ne;b.document&&b.document.body&&12==a.tv&&(d=b.document.body);if(null===d)return!1;qj(152,function(){var e=new b.IntersectionObserver(function(c){try{yk(b,c,a)}catch(k){try{e.unobserve(d),sj("osd_adblock::nioc",k)}catch(l){}}},zk);
e.observe(d);Ak(d);c=!0});
return c};
Ak=function(a){if(a&&(a=a.style)){var b=a.opacity;a.opacity=.98;a.opacity=.99;a.opacity=b}};
Ck=function(a,b){var c=!1;qj(151,function(){var d=ai(b).OM(function(c){try{yk(b,c,a)}catch(f){try{d(),sj("osd_adblock::aioc",f)}catch(k){}}});
c=!0});
return c};
yk=function(a,b,c){if(!b||!b.length||0>=b.length)b=null;else{for(var d=b[0],e=1;e<b.length;e++)b[e].time>d.time&&(d=b[e]);b=d}if(d=b)b=Bj(d.boundingClientRect),e=Bj(d.intersectionRect),c.Kb.g=g.Uc(d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height),0,1),c.sn=c.Kb.g,pk(c,a,!0,b),a=Dj(b,e),c.Gl=0>=c.yd||a.top>=a.bottom||a.left>=a.right?new g.Tg(0,0,0,0):Vg(a,-b.left,-b.top)};
Dk=function(a,b,c,d){d&&(a.qw=d);switch(c){case "nio":return Bk(a,b);case "aio":return Ck(a,b);case "raf":return a.Yo();case "geo":case "xde":case "iem":return!0}return!1};
Ek=function(){};
Gk=function(a){if(a instanceof Ek)return a;if("function"==typeof a.Me)return a.Me(!1);if(g.za(a)){var b=0,c=new Ek;c.next=function(){for(;;){if(b>=a.length)throw Fk;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Hk=function(a,b,c){if(g.za(a))try{(0,g.G)(a,b,c)}catch(d){if(d!==Fk)throw d;}else{a=Gk(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Fk)throw d;}}};
Ik=function(a){if(g.za(a))return g.ab(a);a=Gk(a);var b=[];g.Hk(a,function(a){b.push(a)});
return b};
Mk=function(a){var b=g.Jk&&0<=g.Kb(g.Kk,9),c=g.Lk&&g.vc(601);return!(void 0===a?0:a)&&(b||c)};
Nk=function(a,b,c){this.l=void 0===c?0:c;this.Jb=a;this.g=null==b?"":b};
Ok=function(a,b){return new Nk(a.Jb,a.g,a.l+b)};
Pk=function(a,b){return a.l<b.l?!0:a.l>b.l?!1:a.Jb<b.Jb?!0:a.Jb>b.Jb?!1:typeof a.g<typeof b.g?!0:typeof a.g>typeof b.g?!1:a.g<b.g};
Qk=function(){this.o=0;this.g=[];this.l=!1};
Rk=function(a){var b=new Qk;var c=void 0===c?0:c;var d=void 0===d?!0:d;Th(a,function(a,f){d&&void 0===a||b.add(f,a,c)});
return b};
Tk=function(a){a.l&&(g.jb(a.g,function(a,c){return Pk(c,a)?1:Pk(a,c)?-1:0}),a.l=!1);
return Sk(a.g,function(a,c){var b="boolean"===typeof c.g;b=""+(b&&!c.g?"":c.Jb)+(b||""===c.g?"":"="+c.g);return""+a+(""!=a&&""!=b?"&":"")+b},"")};
Uk=function(a){Th(a,function(b,c){b instanceof Array&&(a[c]=b.join(","))});
return a};
Vk=function(){for(var a=L,b=a,c=0;a&&a!=a.parent;)a=a.parent,c++,Sh(a)&&(b=a);return b};
Wk=function(a){var b=[],c=[];g.Rb(a,function(a,e){if(!(e in Object.prototype)&&"undefined"!=typeof a){g.ya(a)&&(a=a.join(","));var d=[e,"=",a].join("");switch(e){case "adk":case "r":case "tt":case "error":case "mtos":case "tos":case "p":case "bs":case "aio":case "nio":case "iem":b.unshift(d);break;case "req":case "url":case "referrer":case "iframe_loc":c.push(d);break;default:b.push(d)}}});
return b.concat(c)};
Xk=function(){this.A=this.g=this.o=this.l=this.B=0};
$k=function(){this.g=new Xk;var a=sd();Yk(this,a,window.document);var b=Zk();try{if("1"==b){for(var c=a.parent;c!=a.top;c=c.parent)Yk(this,c,c.document);Yk(this,a.top,a.top.document)}}catch(d){}};
Zk=function(){var a=window.document.documentElement;try{if(!Sh(sd().top))return"2";var b=[],c=sd(a.ownerDocument);for(a=c;a!=c.top;a=a.parent)if(a.frameElement)b.push(a.frameElement);else break;return b&&0!=b.length?"1":"0"}catch(d){return"2"}};
Yk=function(a,b,c){tj(c,"mousedown",function(){var b=a.g;1E5<b.o||++b.o},301);
tj(b,"scroll",function(){var b=a.g;1E5<b.g||++b.g},302);
tj(c,"touchmove",function(){var b=a.g;1E5<b.g||++b.g},303);
tj(c,"mousemove",function(){var b=a.g;1E5<b.A||++b.A},304);
tj(c,"keydown",function(){var b=a.g;1E5<b.l||++b.l},305)};
al=function(){hi.call(this);this.fullscreen=!1;this.volume=void 0;this.paused=!1;this.A=-1};
bl=function(a){return Cj(a.volume)&&.1<=a.volume};
cl=function(){var a={};this.o=(a.vs=[1,0],a.vw=[0,1],a.am=[2,2],a.a=[4,4],a.f=[8,8],a.bm=[16,16],a.b=[32,32],a.avw=[0,64],a.cm=[128,128],a.pv=[256,256],a.gdr=[0,512],a.p=[0,1024],a.r=[0,2048],a.m=[0,4096],a.um=[0,8192],a.ef=[0,16384],a.s=[0,32768],a.pmx=[0,16777216],a);this.l={};for(var b in this.o)0<this.o[b][1]&&(this.l[b]=0);this.A=0};
el=function(a){return dl(a,g.Xb(a.o))};
dl=function(a,b){var c=0,d;for(d in a.l)g.Sa(b,d)&&1==a.l[d]&&(c+=a.o[d][1],a.l[d]=2);return c};
fl=function(a){var b=0,c;for(c in a.l){var d=a.l[c];if(1==d||2==d)b+=a.o[c][1]}return b};
gl=function(){this.g=[]};
hl=function(a,b){return g.Sa(a.g,b)};
il=function(){this.g=this.l=0};
jl=function(){Ji.call(this);this.l=new yi;this.R=this.I=this.L=0;this.H=-1;this.fa=new yi;this.B=new yi;this.o=new zi;this.C=this.A=-1;this.K=new yi;this.ba=2E3;this.U=new il;this.X=new il;this.aa=new il};
kl=function(a,b,c){var d=a.R;pi||c||-1==a.H||(d+=b-a.H);return d};
ll=function(){this.g=!1};
ml=function(a,b){this.g=!1;this.B=a;this.F=b;this.l=0};
nl=function(a,b){if(a.A(b)){var c=a.F.g(a.B,b);a.l|=c;return 0==c}return!1};
ol=function(a,b,c,d,e,f){e=void 0===e?null:e;f=void 0===f?[]:f;nk.call(this,b,c,d);this.X=0;this.o={};this.Tb=new cl;this.hs={};this.uc="";this.Sf=null;this.rw=!1;this.l=[];this.C=!1;this.ti=e;this.F=f;this.A=void 0;this.B=-1;this.P=this.nb=void 0;this.ba=!1;this.L=this.U=0;this.V=-1;this.sa=this.Ma=!1;this.Jh=this.Za=0;this.wa=!1;this.Ta=this.Ua=-1;this.R=this.I=this.g=0;this.bb=this.ia=-1;this.Wa=0;this.Ra=new zi;this.aa=this.rb=this.fa=0;this.Ha=-1;this.Ga=0;this.K=!1;this.ma=null;this.Ka=this.tp=
!1;this.ya=g.va;this.H=[this.fk()];this.Ya=!1;this.sp=!0;this.qm=2;b=Yj.getInstance();pk(this,a,b.l);this.Vg={};this.Vg.pause="p";this.Vg.resume="r";this.Vg.skip="s";this.Vg.mute="m";this.Vg.unmute="um";this.Vg.exitfullscreen="ef"};
pl=function(a,b,c){a.tp=!0;a.o={};a.o.firstquartile=!1;a.o.midpoint=!1;a.o.thirdquartile=!1;a.o.complete=!1;a.o.pause=!1;a.o.skip=!1;a.o.viewable_impression=!1;a.X=0;c||(a.Lc().H=b)};
ql=function(a){return g.t(a)?Number(a)?xk(a,3):0:a};
rl=function(a,b){(0,g.gk)(a.F,function(a){return a.o()&&a.getId()==b.getId()})||a.F.push(b)};
sl=function(a,b,c){return 15E3<=b?!0:a.Ma?(void 0===c?0:c)?!0:-1!=a.B?b>=a.B/2:-1!=a.V?b>=a.V:!1:!1};
tl=function(a){var b={},c=Yj.getInstance();b.insideIframe=c.l;b.unmeasurable=a.Ye;b.position=a.position;b.exposure=a.Kb.g;b.documentSize=c.A;b.viewportSize=c.g;return b};
vl=function(a,b){ul(a.l,b,function(){return{dJ:0,uk:void 0}});
a.l[b]={viewableArea:xk(a.Kb.g,2),instantaneousState:a.Tb.A}};
ul=function(a,b,c){for(var d=a.length;d<b+1;)a.push(c()),d++};
xl=function(a,b,c){var d=a.hs[b];if(null!=d)return d;g.Sa(wl,b)?d=!0:(d=a.o[b],g.t(d)?(a.o[b]=!0,d=!d):d=!1);c=a.jk(d,d,c);"fully_viewable_audible_half_duration_impression"==b&&(c.std="csm",c.ic=dl(a.Tb,["gdr"]));return c};
yl=function(a){if(a.Zd)return 1;var b=L.screen.width*L.screen.height;return 0>=b?-1:Math.min(a.yd*a.Kb.g/b,1)};
zl=function(a){this.B=!1;this.g=a};
Al=function(){this.l=null};
Bl=function(a,b){function c(c,e){a.g=null;b(c,e)}
if(null==a.l)return!1;a.g=g.Oa(a.l,function(a){return null!=a&&a.Qh()&&a.init(c)});
return null!=a.g};
g.Cl=function(a,b,c){g.J.call(this);this.o=null!=c?(0,g.A)(a,c):a;this.Hb=b;this.l=(0,g.A)(this.Vy,this);this.g=[]};
Dl=function(a){a.xa=g.fg(a.l,a.Hb);a.o.apply(null,a.g)};
El=function(){this.g=this.A=null;this.o=0;this.l=null};
Fl=function(){this.g=[];this.o=[];this.done=!1;this.l={hy:0,Rp:0,Qo:0,Kq:0,bn:-1};this.P=this.F=this.K=this.H=this.L=null;this.U=!1;this.B=null;this.I=0;this.C=ck()||dk();this.R=0;this.A=new bk(this)};
Gl=function(){var a=Yj.getInstance().fb;return"nio"==a||"aio"==a};
Jl=function(){var a=Hl;if(!a.U){a.U=!0;var b=g.x.requestAnimationFrame||g.x.webkitRequestAnimationFrame||g.x.mozRequestAnimationFrame||g.x.oRequestAnimationFrame||g.x.msRequestAnimationFrame;if(!a.L&&!Gl()){if(b){var c=rj(136,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];return a.Qm.apply(a,[].concat(g.qa(c)))});
var d=function(){b(function(){L.setTimeout(c,0)})}}else d=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.Qm.apply(a,[].concat(g.qa(c)))};
a.H=new g.Cl(mj(137,d,void 0,void 0),100);a.L=tj(L,"scroll",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];return a.H.fh.apply(a.H,[].concat(g.qa(c)))},138)}if(!a.K&&!Gl()){if(b){var e=rj(139,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.Yr.apply(a,[].concat(g.qa(c)))});
d=function(){b(function(){L.setTimeout(e,0)})}}else d=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.Yr.apply(a,[].concat(g.qa(c)))};
a.F=new g.Cl(mj(140,d,void 0,void 0),100);a.K=tj(L,"resize",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];return a.F.fh.apply(a.F,[].concat(g.qa(c)))},141)}Il(a,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.yr.apply(a,[].concat(g.qa(c)))});
a.yr()}};
Ll=function(a){var b=a.C,c=Yj.getInstance();b&&!c.o&&"exc"!=c.fb&&Kl(a,!0);b=new El;switch(c.fb){case "xde":var d=a.I;Kl(a,!1);a=Yj.getInstance();var e=a.H,f=e.height-d;0>=f&&(f=e.height,d=0);a.g=new g.ad(e.width,f);f=new El;f.A=a.g;f.g=e;f.o=d;return f;case "geo":a:{c=c.g;b=new El;b.A=c;if(null!=c&&-12245933!=c.width&&-12245933!=c.height){var k=Yj.getInstance();if(k.o)d=k.B;else try{k=L;e=a.C;k=k.top;f=c||gi(!0,k,void 0===e?!1:e);var l=g.qd(g.fd(k.document).g);if(-12245933==f.width){var m=f.width;
var n=new g.Tg(m,m,m,m)}else n=new g.Tg(l.y,l.x+f.width,l.y+f.height,l.x);d=n}catch(p){a=b;break a}b.l=d}a=b}return a;default:return b}};
Ml=function(a,b,c,d){if(!a.done)if(a.A.cancel(),0==b.length)c||a.A.schedule();else{a.B=null;var e=Ll(a),f=Yj.getInstance();try{var k=ni();if(null!=Al.getInstance().g)for(d=0;d<b.length;d++)wk(b[d],k,c);else switch(f.fb){case "exc":for(d=0;d<b.length;d++)uk(b[d],k,c);break;case "nis":for(e=0;e<b.length;e++)g.t(d)?b[e].Cl(d):b[e].Xr(k);break;case "gsv":for(e=0;e<b.length;e++)g.t(d)?b[e].sr(d):b[e].Wr(k);break;case "aio":case "nio":for(d=0;d<b.length;d++)uk(b[d],k,c);break;case "xde":if(e.g)for(d=0;d<
b.length;d++)ok(b[d],k,e.g,e.o,c);break;case "iem":for(d=0;d<b.length;d++)rk(b[d],k,c);break;case "raf":(0,g.G)(b,function(a){if(c)a.Ng&&(a.Ng.o=3,a.Kb.g=0);else if(a.Ng){var b=Vj(a.Ng),d=[0,0,0,0,0,.01,.5,1,.01,.3],e=d[b.snapshot+1];a.Kb.g=d[b.l+1];a.kf(a.position,e,a.zg+b.g,!1,!0,!1);a.Kf()&&1!=a.qe()&&!a.bp&&a.Ng&&Qj(a.Ng)}});
break;case "geo":if(e.l)for(d=0;d<b.length;d++)tk(b[d],k,e.l,c,f.l)}a.l.Qo+=ni()-k;++a.l.Kq}finally{c?(0,g.G)(b,function(a){a.Kb.g=0}):a.A.schedule()}}};
Il=function(a,b){var c;ei.mozVisibilityState?c="mozvisibilitychange":ei.webkitVisibilityState?c="webkitvisibilitychange":ei.visibilityState&&(c="visibilitychange");c&&(a.P=a.P||tj(ei,c,b,142))};
Nl=function(a){var b=Yj.getInstance().Wc,c=[];li(b,"nio2")||c.push(a.SI);c.push(a.TI,a.RI,a.QI);return c};
Pl=function(){var a=Hl;var b=void 0===b?Nl(a):b;b=g.q(b);for(var c=b.next();!c.done;c=b.next())if(c.value.call(a,L))return!0;(0,g.G)(a.o,function(b){b.Ye=!0;b.o(Ol(a),"goog_update_data","i")});
return!1};
Rl=function(a){if(Ql(a))return!0;var b=ui();a=1===b;b=0===b;return Yj.getInstance(),a||b};
Sl=function(a,b){return null!=b&&(0,g.gk)(a.g,function(a){return a.element==b})};
Tl=function(a){return g.Oa(Hl.g,function(b){return b.uc==a})};
Ul=function(a){return 0==a.g.length?a.o:0==a.o.length?a.g:g.$a(a.o,a.g)};
Kl=function(a,b){var c=a.C,d=Yj.getInstance(),e,f=Al.getInstance();null!=f.g&&(e=f.g.g);d.g=e?e.Te().l:d.o?d.B?(new g.ad(d.B.Vd(),d.B.getHeight())).round():new g.ad(0,0):gi(!0,L,c);if(!b){d.H=L&&L.outerWidth?new g.ad(L.outerWidth,L.outerHeight):new g.ad(-12245933,-12245933);var k=void 0===k?L:k;null!==k&&k!=k.top&&(k=k.top);e=c=0;f=Yj.getInstance().g;try{var l=k.document,m=l.body,n=l.documentElement;if("CSS1Compat"==l.compatMode&&n.scrollHeight)c=n.scrollHeight!=f.height?n.scrollHeight:n.offsetHeight,
e=n.scrollWidth!=f.width?n.scrollWidth:n.offsetWidth;else{var p=n.scrollHeight,u=n.scrollWidth,v=n.offsetHeight,C=n.offsetWidth;n.clientHeight!=v&&(p=m.scrollHeight,u=m.scrollWidth,v=m.offsetHeight,C=m.offsetWidth);p>f.height?p>v?(c=p,e=u):(c=v,e=C):p<v?(c=p,e=u):(c=v,e=C)}var D=new g.ad(e,c)}catch(E){D=new g.ad(-12245933,-12245933)}d.A=D}};
Vl=function(){var a=Yj.getInstance();L.screen&&(a.C=new g.ad(L.screen.width,L.screen.height))};
Ol=function(a){if(!a.B){var b=L.document,c=0<=oi?ni()-oi:-1,d=ni();-1==a.l.bn&&(c=d);var e=Yj.getInstance(),f=e.Wc,k={},l;for(l in f.g)if(f.g.hasOwnProperty(l)){var m="";void 0!==f.l[l]?m=String(f.l[l]):f.o&&(m=f.g[l],m=m.l&&null!==m.g?String(m.g):"");0<m.length&&(k[l]=m)}f=Ul(a);try{if(0<f.length){var n=e.g;n&&(k.bs=[n.width,n.height]);var p=e.H;p&&(k.bos=[p.width,p.height]);var u=e.A;u&&(k.ps=[u.width,u.height]);L.screen&&(k.ss=[L.screen.width,L.screen.height])}else k.url=(0,window.encodeURIComponent)(L.location.href.substring(0,
1024)),b.referrer&&(k.referrer=(0,window.encodeURIComponent)(b.referrer.substring(0,512)));k.tt=c;k.pt=oi;switch(Yj.getInstance().fb){case "xde":k.xde=1;break;case "iem":k.iem=1;break;case "aio":k.aio=1;break;case "nio":k.nio=1}k.deb=[1,a.l.hy,a.l.Rp,a.l.Qo,a.l.Kq,a.l.bn].join("-");k.tvt=Wl(a,d);if(null!==L&&L!=L.top){0<f.length&&(k.iframe_loc=(0,window.encodeURIComponent)(L.location.href.substring(0,512)));var v=gi(!1,L,a.C);k.is=[v.width,v.height]}}catch(C){k.error=1}a.B=k}return Wk(g.gc(a.B))};
Yl=function(a,b){var c=Xl(b,"raf",Ul(a));c&&(Yj.getInstance().fb="raf");return c};
Xl=function(a,b,c){var d=!1;(0,g.G)(c,function(c){Dk(c,a,b,void 0)&&(d=!0)});
return d};
Zl=function(a){var b=Hl,c=[];(0,g.G)(a,function(a){Sl(b,a.element)||(b.g.push(a),c.push(a))})};
$l=function(a){var b=Hl,c=[];(0,g.G)(a,function(a){null==g.Oa(b.g,function(b){return b.element==a.element&&!0})&&(b.g.push(a),c.push(a))})};
Wl=function(a,b){var c=a.R;pi&&(c+=b-qi);return c};
Ql=function(a){return(0,g.gk)(Ul(a),function(a){return a.Zd})};
am=function(){var a=g.Pb;return a?(0,g.gk)("AppleTV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;OMI/".split(";"),function(b){return Db(a,b)})?!0:Db(a,"Presto")&&Db(a,"Linux")&&!Db(a,"X11")&&!Db(a,"Android")&&!Db(a,"Mobi"):!1};
bm=function(a){if(!a)return"";var b=[];b.push("url="+(0,window.encodeURIComponent)(a.location.href.substring(0,512)));a.document&&a.document.referrer&&b.push("referrer="+(0,window.encodeURIComponent)(a.document.referrer.substring(0,512)));return b.join("&")};
cm=function(a){return function(b){return!g.t(b[a])&&g.t(0)?0:b[a]}};
em=function(){var a=[0,2,4];return function(b){b=b.tos;if(g.ya(b)){for(var c=Array(b.length),d=0;d<b.length;d++)c[d]=0<d?c[d-1]+b[d]:b[d];return g.t(a)?dm(c,a):c}}};
fm=function(a,b){return function(c){c=c[a];if(g.ya(c))return dm(c,b)}};
hm=function(a){var b=gm;return function(c){return b(c)?c[a]:void 0}};
dm=function(a,b){return(0,g.Fd)(a,function(a,d){return g.Sa(b,d)})};
im=function(a,b){ml.call(this,a,b)};
jm=function(){this.l=this.A=this.C=this.B=this.o=this.g=""};
km=function(){};
lm=function(a,b,c,d,e){var f={};if(g.t(a))if(null!=b)for(var k in b){var l=b[k];k in Object.prototype||null!=l&&(g.Aa(l)?f[k]=l(a):f[k]=a[l])}else g.jc(f,a);g.t(c)&&g.jc(f,c);a=Tk(Rk(Uk(f)));0<a.length&&g.t(d)&&g.t(e)&&(e=e(a),a+="&"+d+"="+e);return a};
mm=function(){};
nm=function(a,b,c,d,e){kk.call(this,a,b,c,d,e);this.l=new g.Tg(0,0,0,0)};
pm=function(a){a=om(a);zl.call(this,a.length?a[a.length-1]:null);this.o=a;this.A=g.va;this.l=null};
om=function(a){if(!a.length)return[];a=(0,g.Fd)(a,function(a){return null!=a&&a.Qh()});
for(var b=1;b<a.length;b++)fk(a[b-1],a[b]);return a};
qm=function(){ek.call(this,L,1);this.C=new Ki(0,"");this.V=4;this.o=[];this.ba=[];this.K=0;this.R=!1;this.aa=this.X=0;this.L=""};
rm=function(a,b){var c=0,d=a.A;try{if(d&&d.Goog_AdSense_getAdAdapterInstance)return d}catch(e){}for(;d&&5>c;){try{if(d.google_osd_static_frame)return d}catch(e){}try{if(d.aswift_0&&(!b||d.aswift_0.google_osd_static_frame))return d.aswift_0}catch(e){}c++;d=d!=d.parent?d.parent:null}return null};
sm=function(a,b,c,d,e,f){e=void 0===e?!1:e;f=void 0===f?"":f;var k={};uj(c,k);k[0]="goog_request_monitoring";k[6]=b;k[27]=a.A.document.domain;k[16]=e;f&&f.length&&(k[19]=f);try{var l=vj(k);d.postMessage(l,"*")}catch(m){}};
um=function(a,b,c,d,e,f){d=void 0===d?!1:d;e=void 0===e?"":e;f=void 0===f?function(){return null}:f;
++a.aa;2==a.K?tm(a):10<a.aa?(a.F="no",tm(a),f()):a.A.postMessage?c.Nc()?(f=rm(a,!0))&&sm(a,b,c,f,d,e):(a.F="ib",tm(a),f()):(a.F="c",tm(a),f())};
tm=function(a){a.A.clearInterval(a.X)};
vm=function(a,b){(0,g.G)(a.o,function(a){a.A(b)})};
wm=function(a,b){(0,g.G)(a.o,function(a){a.o(b)})};
xm=function(a,b){(0,g.G)(a.o,function(a){a.l(b)})};
ym=function(a,b){(0,g.G)(a.o,function(a){a.H(b)})};
zm=function(a,b){(0,g.G)(a.o,function(a){a.g(b)})};
Am=function(a,b,c){(0,g.G)(a.o,function(a){a.B(b,c)})};
Em=function(a,b){(0,g.G)(a.o,function(a){a.F(b)})};
Fm=function(a){(0,g.G)(a.o,function(a){a.C()})};
Gm=function(a,b){(0,g.G)(a.ba,function(a){a(b)})};
Hm=function(){this.A=this.I=!1;this.o=null;this.l=new mm;this.g=null;var a={};this.L=(a.start=this.Bz,a.firstquartile=this.vz,a.midpoint=this.xz,a.thirdquartile=this.Cz,a.complete=this.sz,a.pause=this.Uu,a.resume=this.zz,a.skip=this.Az,a.viewable_impression=this.Ef,a.mute=this.Hh,a.unmute=this.Hh,a.fullscreen=this.wz,a.exitfullscreen=this.uz,a.fully_viewable_audible_half_duration_impression=this.Ef,a.measurable_impression=this.Ef,a.abandon=this.Uu,a.engagedview=this.Ef,a.impression=this.Ef,a.creativeview=
this.Ef,a.progress=this.Hh,a.custom_metric_viewable=this.Ef,a);a={};this.P=(a.overlay_resize=this.yz,a.abandon=this.Vm,a.close=this.Vm,a.collapse=this.Vm,a.overlay_unmeasurable_impression=function(a){return xl(a,"overlay_unmeasurable_impression",Rl(Hl))},a.overlay_viewable_immediate_impression=function(a){return xl(a,"overlay_viewable_immediate_impression",Rl(Hl))},a.overlay_unviewable_impression=function(a){return xl(a,"overlay_unviewable_impression",Rl(Hl))},a.overlay_viewable_end_of_session_impression=
function(a){return xl(a,"overlay_viewable_end_of_session_impression",Rl(Hl))},a);
Yj.getInstance().K=3};
Im=function(a,b,c,d){a.g||(a.g=a.Cq());c=d?c:-1;return null==a.g||a.A?new ol(L,b,c,7):new ol(L,b,c,7,new ml("measurable_impression",a.g),a.Hm())};
Mm=function(a){if(!a.I){a.I=!0;try{var b=ni(),c=Yj.getInstance();oi=b;Jm=Vk();Kl(Hl,!1);Vl();if("nis"!=c.fb&&"gsv"!=c.fb)if(L.document.body&&L.document.body.getBoundingClientRect){Hl.l.Rp=0;Hl.l.bn=ni()-b;var d=gl.getInstance();c.Wc.g.osd=new ii(Xj,!0);var e=hl(d,370204015);ki(c.Wc,e?1:0);b=[];if(e&&c.l&&c.o&&"exc"!=c.fb){c.o=!1;var f=[qm.getInstance()];b.push(new pm(f))}var k=Al.getInstance();k.l=b;if(Bl(k,function(){c.o=!1;Km()}))Hl.done||Jl();
else if(!c.l&&Mk()&&Yl(Hl,L))Jl();else if(c.l&&"exc"!=c.fb)if(c.o&&!e){var l=qm.getInstance();fk(l,a);l.initialize()}else Km();else Jl()}else Lm=!0}catch(m){throw Hl.reset(),m;}}};
Nm=function(a){var b=Yj.getInstance();if(null==a.o)switch(b.fb){case "nis":a.o="n";break;case "gsv":a.o="m";break;default:a.o="h"}return a.o};
Om=function(a,b,c){if(null==a.g)return b.Jh|=4,!1;a=a.g.g(c,b);b.Jh|=a;return 0==a};
Km=function(){Pl()?Jl():(Hl.A.cancel(),Pm="i",Hl.done=!0)};
Qm=function(a,b,c){if(!b.rw){var d=xl(b,"start",Rl(Hl));a=a.l.g(d).g;d=Jm||L;var e=[];e.push("v=644v");e.push("r="+c);e.push(a);e.push(bm(d));c=("//pagead2.googlesyndication.com/pagead/gen_204?id=lidarvf&"+e.join("&")).toString();c=c.substring(0,2E3);a=fi()||L;bi(a,c);b.rw=!0}};
Rm=function(a,b,c,d){Ml(Hl,[a],!Rl(Hl),d);vl(a,c);b=xl(a,b,Rl(Hl));4!=c&&ul(a.H,c,a.fk);return b};
Sm=function(a,b,c){if(!b.tp){"i"!=Pm&&(Hl.done=!1);var d=Al.getInstance();null!=d.g&&vk(b,d.g);Dk(b,L,Yj.getInstance().fb,function(b){if(b){b.Ye=!0;switch(b.qe()){case 1:Qm(a,b,"fp");break;case 2:a.Lo(b)}a.So(b)}});
d=g.t(c)?c.opt_nativeTime:void 0;si=d=g.ua(d)?d:ni();b.mg=!0;var e=Rl(Hl);pl(b,d,e);Ml(Hl,[b],!e,c)}};
Tm=function(a,b){if(g.w(b)){if(1==a)var c=Hl.g;else if(2==a)c=Hl.o;else return;var d=g.Na(c,function(c){return c.qe()!=a?!1:c.uc==b});
0<=d&&g.Wa(c,d)}};
Vm=function(a,b,c,d){var e=g.Oa(Hl.g,function(a){return a.element==c});
null!==e&&e.uc!=b&&(Tm(1,e.uc),e=null);e||(e=Um(a,c),e.uc=b,e.A=Nm(a),d&&(e.Sf=d));return e};
Um=function(a,b){var c=Im(a,b,ni(),!1);c.An=(0,g.A)(a.Tm,a);0==Hl.o.length&&(Yj.getInstance().I=79463069);$l([c]);Jl();return c};
Ym=function(a,b){var c={sv:"644",cb:"j"};c.nas=Hl.g.length;c.msg=a;if(g.t(b)){var d=Wm(b);d&&(c.e=Xm[d])}return c};
Wm=function(a){var b=a.toLowerCase();return ac(Zm,function(a){return a==b})};
bn=function(a,b){b.I=0;for(var c in $m)null==a[c]&&(b.I|=$m[c]);an(a,"currentTime");an(a,"duration")};
an=function(a,b){var c=a[b];g.t(c)&&(a[b]=Math.floor(1E3*c))};
cn=function(){this.g=void 0;this.l=!1;this.o=0;this.A=-1;this.B="tos"};
fn=function(a){try{var b=a.split(",");return b.length>g.Xb(dn).length?null:Sk(b,function(a,b){var c=b.toLowerCase().split("=");if(2!=c.length||!g.t(en[c[0]])||!en[c[0]](c[1]))throw Error("Entry ("+c[0]+", "+c[1]+") is invalid.");a[c[0]]=c[1];return a},{})}catch(c){return null}};
gn=function(a,b){if(void 0==a.g)return 0;switch(a.B){case "mtos":return a.l?Fi(b.o,a.g):Fi(b.g,a.g);case "tos":return a.l?Di(b.o,a.g):Di(b.g,a.g)}return 0};
hn=function(a,b,c,d){ml.call(this,b,d);this.Aa=a;this.C=c};
jn=function(a){ml.call(this,"fully_viewable_audible_half_duration_impression",a)};
kn=function(a){return!a||"function"!==typeof a||0>String(Function.prototype.toString).indexOf("[native code]")?!1:0<=String(a).indexOf("[native code]")&&!0||!1};
mn=function(a){return!!(1<<a&ln)};
rn=function(){try{nn()}catch(d){}var a="a=1&b="+ln+"&",b=[],c=99;(0,g.G)(on,function(a,c){var d=!1;try{d=a(L)}catch(k){}b[c/32>>>0]|=d<<c%32});
(0,g.G)(b,function(b,e){a+=String.fromCharCode(c+e)+"="+(b>>>0).toString(16)+"&"});
c=105;(0,g.G)(pn,function(b){var d="false";try{d=b(L)}catch(f){}a+=String.fromCharCode(c++)+"="+d+"&"});
(0,g.G)(qn,function(b){var d="";try{var f=b(L);d=g.$d(g.Vd(f),!0)}catch(k){}a+=String.fromCharCode(c++)+"="+d+"&"});
return a.slice(0,-1)};
nn=function(){if(!sn){var a=function(){tn=!0;L.document.removeEventListener("webdriver-evaluate",a,!0)};
L.document.addEventListener("webdriver-evaluate",a,!0);var b=function(){un=!0;L.document.removeEventListener("webdriver-evaluate-response",b,!0)};
L.document.addEventListener("webdriver-evaluate-response",b,!0);sn=!0}};
vn=function(){this.l=64;this.g=Array(4);this.B=Array(this.l);this.A=this.o=0;this.reset()};
wn=function(a,b,c){c||(c=0);var d=Array(16);if(g.w(b))for(var e=0;16>e;++e)d[e]=b.charCodeAt(c++)|b.charCodeAt(c++)<<8|b.charCodeAt(c++)<<16|b.charCodeAt(c++)<<24;else for(e=0;16>e;++e)d[e]=b[c++]|b[c++]<<8|b[c++]<<16|b[c++]<<24;b=a.g[0];c=a.g[1];e=a.g[2];var f=a.g[3];var k=b+(f^c&(e^f))+d[0]+3614090360&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[1]+3905402710&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[2]+606105819&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^
b))+d[3]+3250441966&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[4]+4118548399&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[5]+1200080426&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[6]+2821735955&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[7]+4249261313&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[8]+1770035416&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[9]+2336552879&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+
(c^f&(b^c))+d[10]+4294925233&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[11]+2304563134&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[12]+1804603682&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[13]+4254626195&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[14]+2792965006&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[15]+1236535329&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(e^f&(c^e))+d[1]+4129170786&4294967295;b=c+(k<<5&4294967295|
k>>>27);k=f+(c^e&(b^c))+d[6]+3225465664&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[11]+643717713&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[0]+3921069994&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(e^f&(c^e))+d[5]+3593408605&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[10]+38016083&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[15]+3634488961&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[4]+3889429448&4294967295;c=e+(k<<20&4294967295|
k>>>12);k=b+(e^f&(c^e))+d[9]+568446438&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[14]+3275163606&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[3]+4107603335&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[8]+1163531501&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(e^f&(c^e))+d[13]+2850285829&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[2]+4243563512&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[7]+1735328473&4294967295;e=f+(k<<14&4294967295|
k>>>18);k=c+(f^b&(e^f))+d[12]+2368359562&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(c^e^f)+d[5]+4294588738&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[8]+2272392833&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[11]+1839030562&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[14]+4259657740&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[1]+2763975236&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[4]+1272893353&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^
b^c)+d[7]+4139469664&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[10]+3200236656&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[13]+681279174&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[0]+3936430074&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[3]+3572445317&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[6]+76029189&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[9]+3654602809&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[12]+3873151461&4294967295;
f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[15]+530742520&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[2]+3299628645&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(e^(c|~f))+d[0]+4096336452&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[7]+1126891415&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[14]+2878612391&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[5]+4237533241&4294967295;c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[12]+1700485571&4294967295;b=c+
(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[3]+2399980690&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[10]+4293915773&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[1]+2240044497&4294967295;c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[8]+1873313359&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[15]+4264355552&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[6]+2734768916&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[13]+1309151649&4294967295;
c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[4]+4149444226&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[11]+3174756917&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[2]+718787259&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[9]+3951481745&4294967295;a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+(e+(k<<21&4294967295|k>>>11))&4294967295;a.g[2]=a.g[2]+e&4294967295;a.g[3]=a.g[3]+f&4294967295};
xn=function(){this.l=null};
yn=function(a){return function(b){var c=new vn;c.update(b+a);return Wd(c.digest()).slice(-8)}};
zn=function(a,b){this.o=a;this.A=b};
An=function(a){var b=ac(Zm,function(b){return b==a});
return Xm[b]};
Bn=function(a,b,c){zn.call(this,a,b);this.B=c};
Cn=function(a,b){this.g=a;this.depth=b};
En=function(a){function b(a,b){return null==a?b:a}
var c=a||Oi();a=Math.max(c.length-1,0);var d=Qi(c);c=d.g;var e=d.l,f=d.o,k=[];f&&k.push(new Cn([f.url,f.nn?2:0],b(f.depth,1)));e&&e!=f&&k.push(new Cn([e.url,2],0));c.url&&c!=f&&k.push(new Cn([c.url,0],b(c.depth,a)));d=(0,g.I)(k,function(a,b){return k.slice(0,k.length-b)});
!c.url||(f||e)&&c!=f||(e=Vh(c.url))&&d.push([new Cn([e,1],b(c.depth,a))]);d.push([]);return(0,g.I)(d,g.B(Dn,a))};
Dn=function(a,b){(0,g.Fn)(b,function(a){return 0<=a.depth});
var c=Sk(b,function(a,b){return Math.max(a,b.depth)},-1),d=pb(c+2);
d[0]=a;(0,g.G)(b,function(a){return d[a.depth+1]=a.g});
return d};
Gn=function(){var a=En();return(0,g.I)(a,function(a){return Ti(a)})};
Hn=function(){Hm.call(this);this.C=void 0;this.B=this.K=null;this.F=!1;this.H={};this.l=new xn;var a=gl.getInstance();(hl(a,509445015)||hl(a,509445017))&&"exc"!=Yj.getInstance().fb&&(this.F=!0,this.K=new $k)};
In=function(a,b,c){c=c.opt_configurable_tracking_events;if(null!=a.g&&g.ya(c)){var d=a.g;(0,g.G)(c,function(a){var c=(0,g.I)(a.GM,function(a){var b=fn(a);if(null==b)a=null;else if(a=new cn,null!=b.visible&&(a.g=b.visible/100),null!=b.audible&&(a.l=1==b.audible),null!=b.time){var c="mtos"==b.timetype?"mtos":"tos",d=rb(b.time,"%")?"%":"ms";b=(0,window.parseInt)(b.time,10);"%"==d&&(b/=100);"ms"==d?(a.o=b,a.A=-1):(a.o=-1,a.A=b);a.B=void 0===c?"tos":c}return a});
(0,g.gk)(c,function(a){return null==a})||rl(b,new hn(a.id,a.event,c,d))})}};
Jn=function(a,b,c,d){d=Im(a,null,d,!0);d.A=c;d.An=function(b){a.Tm(b)};
Zl([d]);d.uc=b;return d};
Kn=function(a,b,c){var d=Tl(b);d||(d=c.opt_nativeTime||-1,d=Jn(a,b,Nm(a),d),c.opt_osdId&&(d.Sf=c.opt_osdId));return d};
Ln=function(a,b,c){var d=Tl(b);d||(d=Jn(a,b,"n",c.opt_nativeTime||-1),d.K=Yj.getInstance().F);return d};
Mn=function(a,b){var c=Tl(b);c||(c=Jn(a,b,"h",-1));return c};
Nn=function(a){var b=Yj.getInstance();switch(Nm(a)){case "b":return"ytads.bulleit.triggerExternalActivityEvent";case "n":return"ima.bridge.triggerExternalActivityEvent";case "h":if("exc"==b.fb)return"ima.bridge.triggerExternalActivityEvent";case "m":case "ml":return"ima.common.triggerExternalActivityEvent"}return null};
Qn=function(a,b,c,d){c=void 0===c?{}:c;var e={};g.jc(e,{opt_adElement:void 0,opt_fullscreen:void 0},c);if(e.opt_bounds)return a.l.g(Ym("ol",d));if(g.t(d))if(c=Wm(d),g.t(c))if(Lm)d=Ym("ue",d);else if(b=a.ik(b,e))b:{Mm(a);"i"==Pm&&(b.Ye=!0,a.So(b));c=e.opt_fullscreen;g.t(c)&&(b.Zd=!!c);Db(g.Pb,"CrKey")||Db(g.Pb,"PlayStation")||Db(g.Pb,"Roku")||am()||Db(g.Pb,"Xbox")?c=!1:(c=Yj.getInstance().fb,c=L&&L.g||"nis"===c||"gsv"===c?!1:0===ui());var f=c;if(f){switch(b.qe()){case 1:Qm(a,b,"pv");break;case 2:a.Lo(b)}Hl.A.cancel();
Pm="pv";Hl.done=!0}c=d.toLowerCase();!f&&g.Sa(On,c)&&Sm(a,b,e);b.tp&&g.Sa(Pn,c)&&!b.Ye&&!a.A&&b.ti&&(f=b.ti,f.g||(f.g=nl(f,b)));(f=b.Vg[c])&&b.Tb.g(f);switch(b.qe()){case 1:var k=a.L[c];break;case 2:k=a.P[c]}if(k&&(d=k.call(a,b,e,d),g.t(d))){e=Ym(void 0,c);g.jc(e,d);d=e;break b}d=void 0}else d=Ym("nf",d);else d=void 0;else d=a.jk(b,e);if(d){if(e=a.B)e=a.B,k={},k=(k.ptlt=e.B,k),(b=e.l)&&(k.pnk=b),(b=e.o)&&(k.pnc=b),(b=e.A)&&(k.pnmm=b),(e=e.g)&&(k.pns=e),e=k;g.jc(d,e||{})}return a.l.g(d)};
Rn=function(a,b,c){a=Yj.getInstance();if(a.F!=b){a.F=b;var d=(0,g.gk)(Hl.g,function(a){return a.Ka});
(0,g.G)(Hl.g,function(a){b||d||(a.zg=c);a.K=b;a.Ka=!1})}};
Tn=function(a,b){var c;if(b.Sf&&Sn(a)){var d=a.H[b.Sf];d?c=function(a,b){d.o(a,b)}:null!==d&&sj("lidar::missingPlayerCallback",Error())}else c=g.z("ima.common.triggerViewabilityMeasurementUpdate");
if(g.Aa(c)){var e=tl(b);e.nativeVolume=a.C;a.F&&(e.userActivity=a.B);c(b.uc,e)}};
Sn=function(a){return"exc"==Yj.getInstance().fb||"h"!=Nm(a)&&Nm(a),!1};
Un=function(a){var b={};return b.viewability=a.g,b.googleViewability=a.o,b.moatInit=a.B,b.moatViewability=a.C,b.integralAdsViewability=a.A,b.doubleVerifyViewability=a.l,b};
Vn=function(a,b,c){c=void 0===c?{}:c;a=Qn(Hn.getInstance(),b,c,a);return Un(a)};
Wn=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
Xn=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=n=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var n=l^d&(f^l);var p=1518500249}else n=d^f^l,p=1859775393;else 60>c?(n=d&f|l&(d|f),p=2400959708):(n=d^f^l,p=3395469782);n=((a<<5|a>>>27)&4294967295)+n+m+p+b[c]&4294967295;m=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=n}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64;for(;d<c;)if(f[n++]=a[d++],p++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64}
function d(){var a=[],d=8*p;56>n?c(l,56-n):c(l,64-(n-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var n,p;a();return{reset:a,update:c,digest:d,vy:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
Zn=function(a,b,c){var d=[],e=[];if(1==(g.ya(c)?2:1))return e=[b,a],(0,g.G)(d,function(a){e.push(a)}),Yn(e.join(" "));
var f=[],k=[];(0,g.G)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ta(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.G)(d,function(a){e.push(a)});
a=Yn(e.join(" "));a=[c,a];g.Ta(k)||a.push(k.join(""));return a.join("_")};
Yn=function(a){var b=Xn();b.update(a);return b.vy().toLowerCase()};
g.$n=function(){var a=[],b=Wn(String(g.x.location.href)),c=g.x.__OVERRIDE_SID;null==c&&(c=(new tg(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.x.__SAPISID:g.x.__APISID,null==b&&(b=(new tg(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.x.location.href);return d&&b&&c?[c,Zn(Wn(d),b,a||null)].join(" "):null}return null};
g.ao=function(a,b){this.l={};this.g=[];this.dg=this.va=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof g.ao?(c=a.jd(),d=a.Ub()):(c=g.Xb(a),d=g.Wb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};
co=function(a){if(a.va!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];bo(a.l,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.va!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],bo(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}};
bo=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.eo=function(a,b){this.g=this.H=this.A="";this.B=null;this.C=this.l="";this.F=!1;var c;a instanceof g.eo?(this.F=g.t(b)?b:a.F,g.fo(this,a.A),this.H=a.H,g.go(this,a.g),g.ho(this,a.B),this.l=a.l,io(this,a.o.clone()),this.C=a.C):a&&(c=g.xg(String(a)))?(this.F=!!b,g.fo(this,c[1]||"",!0),this.H=jo(c[2]||""),g.go(this,c[3]||"",!0),g.ho(this,c[4]),this.l=jo(c[5]||"",!0),io(this,c[6]||"",!0),this.C=jo(c[7]||"")):(this.F=!!b,this.o=new g.ko(null,this.F))};
g.fo=function(a,b,c){a.A=c?jo(b,!0):b;a.A&&(a.A=a.A.replace(/:$/,""))};
g.go=function(a,b,c){a.g=c?jo(b,!0):b;return a};
g.ho=function(a,b){if(b){b=Number(b);if((0,window.isNaN)(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null;return a};
io=function(a,b,c){b instanceof g.ko?(a.o=b,lo(a.o,a.F)):(c||(b=mo(b,no)),a.o=new g.ko(b,a.F))};
g.oo=function(a,b,c){a.o.set(b,c);return a};
g.po=function(a){return a instanceof g.eo?a.clone():new g.eo(a,void 0)};
jo=function(a,b){return a?b?(0,window.decodeURI)(a.replace(/%25/g,"%2525")):(0,window.decodeURIComponent)(a):""};
mo=function(a,b,c){return g.w(a)?(a=(0,window.encodeURI)(a).replace(b,qo),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};
qo=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
g.ko=function(a,b){this.va=this.g=null;this.l=a||null;this.o=!!b};
ro=function(a){a.g||(a.g=new g.ao,a.va=0,a.l&&Bg(a.l,function(b,c){a.add(tb(b),c)}))};
to=function(a,b){ro(a);b=so(a,b);return bo(a.g.l,b)};
g.uo=function(a,b,c){a.remove(b);0<c.length&&(a.l=null,a.g.set(so(a,b),g.ab(c)),a.va=a.va+c.length)};
so=function(a,b){var c=String(b);a.o&&(c=c.toLowerCase());return c};
lo=function(a,b){b&&!a.o&&(ro(a),a.l=null,a.g.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),g.uo(this,c,a))},a));
a.o=b};
g.vo=function(a){g.J.call(this);this.l=a;this.g={}};
wo=function(a,b,c,d,e,f){if(g.ya(c))for(var k=0;k<c.length;k++)wo(a,b,c[k],d,e,f);else{b=Se(b,c,d||a.handleEvent,e,f||a.l||a);if(!b)return a;a.g[b.key]=b}return a};
g.xo=function(a){g.Rb(a.g,function(a,c){this.g.hasOwnProperty(c)&&g.ef(a)},a);
a.g={}};
g.zo=function(a,b){return a.replace(yo,function(a,d){try{var c=fc(b,d);if(null==c)return a;c=c.toString();if(""==c||!g.sb(g.Gb(c)))return(0,window.encodeURIComponent)(c).replace(/%2C/g,",")}catch(f){}return a})};
Ao=function(a){g.Fe.call(this,a)};
Bo=function(a){this.g=a};
Do=function(){var a=Co();a:{if(Zb(a.g,"disableExperiments")&&(a=a.g.disableExperiments,g.ta(a)))break a;a=!1}return a};
Eo=function(a){if(Zb(a.g,"forceExperimentIds")){a=a.g.forceExperimentIds;var b=[],c=0;g.ya(a)&&(0,g.G)(a,function(a){g.ua(a)&&(b[c++]=a)});
return b}return null};
Fo=function(){this.l=null;try{En(void 0)}catch(a){}};
Co=function(){var a=Go;if(null==a.l){var b={},c=(new g.eo(sd().location.href)).o;if(to(c,"tcnfp"))try{b=JSON.parse(c.get("tcnfp"))}catch(d){}a.l=new Bo(b)}return a.l};
Ho=function(a,b,c){this.Aa=a;this.g=g.Uc(b||0,0,1);this.l=null!=c?c:!0};
Io=function(a){this.Aa=a;this.l=new g.ao;this.Ze=this.g=null};
Jo=function(a){var b=Math.random(),c=0,d=a.l.Ub();(0,g.G)(d,function(a){c+=a.g},a);
var e=1<c?c:1;a.g=null;for(var f=0,k=0;k<d.length;++k)if(f+=d[k].g,f/e>=b){a.g=d[k];break}};
No=function(){this.l=null!=g.x.G_testRunner;this.g=new g.ao;Go.g()||(Ko(this,"GvnExternalLayer",31061774,.01),Ko(this,"GvnExternalLayer",31061775,.01),Ko(this,"GvnExternalLayer",41351088,.01),Ko(this,"GvnExternalLayer",41351089,.01),Ko(this,"GvnExternalLayer",420706008,.05),Ko(this,"GvnExternalLayer",420706009,.05),Ko(this,"GvnExternalLayer",41351073,.01),Ko(this,"GvnExternalLayer",41351074,.01),Ko(this,"GvnExternalLayer",41351075,.01),Ko(this,"GvnExternalLayer",634360101,0),Ko(this,"GvnExternalLayer",
634360102,0),Ko(this,"GvnExternalLayer",21592080,.1),Ko(this,"GvnExternalLayer",21592081,.1),Ko(this,"GvnExternalLayer",21592082,.01),Ko(this,"GvnExternalLayer",413051059,.05),Ko(this,"GvnExternalLayer",413051060,.05),Ko(this,"GvnExternalLayer",324123E3,.05),Ko(this,"GvnExternalLayer",324123001,.05),Ko(this,"GvnExternalLayer",420706068,.01),Ko(this,"GvnExternalLayer",420706069,.01),Ko(this,"GvnExternalLayer",324123020,.01),Ko(this,"GvnExternalLayer",324123021,.01),Ko(this,"GvnExternalLayer",420706081,
.01),Ko(this,"GvnExternalLayer",420706082,.01),Mk(!1)&&(Sh(L.top)?(Ko(this,"ActiveViewExternalLayer",509445010,.01),Ko(this,"ActiveViewExternalLayer",509445011,.01)):(Ko(this,"ActiveViewExternalLayer",509445012,.01),Ko(this,"ActiveViewExternalLayer",509445013,.01))),Ko(this,"ActiveViewExternalLayer",509445016,.01),Ko(this,"ActiveViewExternalLayer",509445017,.01));Lo(this);var a=Co();a=Eo(a);null!=a&&(this.l=!1,Mo(this,a.map(String)))};
Po=function(){Oo||(Oo=new No);return Oo};
Ko=function(a,b,c,d){g.sb(g.Gb(b))||(0,window.isNaN)(c)||0>=c||(c=new Ho(c,d),Qo(a,b).l.set(c.getId(),c))};
Lo=function(a){Do()||(0,g.G)(a.g.Ub(),function(a){Jo(a)},a)};
Mo=function(a,b){(0,g.G)(b,function(a){var b=Number(a);a="FORCED_PUB_EXP_LAYER_"+a;(0,window.isNaN)(b)||0>=b||g.sb(g.Gb(a))||(Qo(this,a).g=new Ho(b,0,!0))},a)};
Ro=function(a,b){return a.l?!1:(0,g.gk)(a.g.Ub(),function(a){return!!a.g&&a.g.getId()==b})};
So=function(){var a=Po();if(a.l)return"";var b=[];(0,g.G)(a.g.Ub(),function(a){(a=a.g)&&a.l&&b.push(a.getId())});
return b.sort().join(",")};
Qo=function(a,b){var c=a.g.get(b);null==c&&(c=new Io(b),a.g.set(b,c));return c};
Vo=function(a){try{var b=(new g.eo(a)).g;b=b.replace(/^www./i,"");return(0,g.gk)(To,function(a){return Uo(a,b)})}catch(c){return!1}};
Uo=function(a,b){if(g.sb(g.Gb(b)))return!1;a=a.toLowerCase();b=b.toLowerCase();return"*."==a.substr(0,2)?(a=a.substr(2),a.length>b.length?!1:b.substr(-a.length)==a&&(b.length==a.length||"."==b.charAt(b.length-a.length-1))):a==b};
Wo=function(a,b){return(new RegExp("^https?://([a-z0-9-]{1,63}\\.)*("+b.join("|").replace(/\./g,"\\.")+")(:[0-9]+)?([/?#]|$)","i")).test(a)};
$o=function(a){try{a:{var b=a,c=void 0,d=b.length-11-2;if(!(-1==b.indexOf("URL_SIGNALS")||2048<=d||!c&&!window.Goog_AdSense_Lidar_getUrlSignalsArray)){c=c||window.Goog_AdSense_Lidar_getUrlSignalsArray();d={};for(var e=0;e<c.length;++e){d.URL_SIGNALS=c[e];var f=g.zo(b,d);if(2048>f.length){a=f;break a}}}a=b}}catch(n){}try{f=a;b=!1;Wo(f,Xo)?b=!1:null!=f&&Vo(f)?b=!0:"https:"==window.location.protocol&&(Wo(f,Yo)||Go.g())&&(b=!0);if(b){var k=new g.eo(f);"https"==k.A?a=f:(g.fo(k,"https"),a=k.toString())}else a=
f;var l=Po(),m=!Go.g()||Ro(l,41351089);k=!1;Go.g()||!Ro(Po(),634360102)||(k=!0);Zo.xI(a,m,k)}catch(n){}};
ap=function(a){return(a=a.exec(g.Pb))?a[1]:""};
g.cp=function(a){return 0<=g.Kb(bp,a)};
g.fp=function(a,b,c){g.ua(a)?(this.date=dp(a,b||0,c||1),ep(this,c||1)):g.Ba(a)?(this.date=dp(a.getFullYear(),a.getMonth(),a.getDate()),ep(this,a.getDate())):(this.date=new Date((0,g.H)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),ep(this,a))};
dp=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
ep=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))};
gp=function(){this.g=null;this.o="";this.l=null};
ip=function(){var a="h."+hp.o;null!=hp.l&&(a+="/n."+hp.l,null!=hp.g&&(a+="/"+hp.g));return a};
jp=function(){this.l=.01>Math.random();this.o=Math.floor(4503599627370496*Math.random())};
lp=function(a,b){b.id="ima_html5";var c=kp();b.c=a.o;b.domain=c.g;return b};
kp=function(){var a=sd(),b=window.document;return new g.eo(a.parent==a?a.location.href:b.referrer)};
mp=function(){g.kf.call(this);this.g=new g.ao;this.l=null;this.da=new g.vo(this);g.K(this,this.da);this.A=null;this.o=-1};
op=function(){null!=np||(np=new mp);return np};
pp=function(a,b){var c={};c.queryId=a;c.viewabilityString=b;op().dispatchEvent(new Ao("measurable_impression",null,c))};
qp=function(a,b){var c={};c.queryId=a;c.viewabilityString=b;op().dispatchEvent(new Ao("viewable_impression",null,c))};
rp=function(a,b,c){var d={};d.queryId=a;d.viewabilityString=b;d.eventName=c;op().dispatchEvent(new Ao("externalActivityEvent",null,d))};
sp=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
tp=function(){g.kf.call(this);this.g=null;this.da=new g.vo(this);g.K(this,this.da);this.C=new g.ao;this.B=new g.ao;this.l=!1;this.o=null};
vp=function(){null!=up||(up=new tp);return up};
wp=function(a){if(g.Aa(window.Goog_AdSense_Lidar_getUrlSignalsArray)){var b={};b.pageSignals=window.Goog_AdSense_Lidar_getUrlSignalsArray();a.g.send("activityMonitor","pageSignals",b)}};
xp=function(a,b,c){var d=b?a.B.get(b):Go.o;a={};null!=c&&(a.fullscreen=c);c="";try{c=Mh(function(){return d},a)}catch(e){c="sdktle;"+Cb(e.name,12)+";"+Cb(e.message,40)}return c};
g.yp=function(){};
g.zp=function(a,b){var c=a.g(b);return-1==(0==c?null:c)?"rtl":"ltr"};
Ap=function(){throw Error("Do not instantiate directly");};
Bp=function(){Ap.call(this)};
Dp=function(a,b){var c="key_"+a+":"+b,d=Cp[c];if(void 0===d||0>d)Cp[c]=0;else if(0==d)throw Error('Encountered two active delegates with the same priority ("'+a+":"+b+'").');};
g.Ep=function(a){if(a.classList)return a.classList;a=a.className;return g.w(a)&&a.match(/\S+/g)||[]};
g.Fp=function(a,b){return a.classList?a.classList.contains(b):g.Sa(g.Ep(a),b)};
g.M=function(a,b){a.classList?a.classList.add(b):g.Fp(a,b)||(a.className+=0<a.className.length?" "+b:b)};
g.Gp=function(a,b){if(a.classList)(0,g.G)(b,function(b){g.M(a,b)});
else{var c={};(0,g.G)(g.Ep(a),function(a){c[a]=!0});
(0,g.G)(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}};
g.N=function(a,b){a.classList?a.classList.remove(b):g.Fp(a,b)&&(a.className=(0,g.Fd)(g.Ep(a),function(a){return a!=b}).join(" "))};
g.Hp=function(a,b){a.classList?(0,g.G)(b,function(b){g.N(a,b)}):a.className=(0,g.Fd)(g.Ep(a),function(a){return!g.Sa(b,a)}).join(" ")};
g.O=function(a,b,c){c?g.M(a,b):g.N(a,b)};
g.Ip=function(a,b){var c=!g.Fp(a,b);g.O(a,b,c)};
Jp=function(){if(!g.pd)return!1;try{return new window.ActiveXObject("MSXML2.DOMDocument"),!0}catch(a){return!1}};
g.Lp=function(a){if("undefined"!=typeof window.DOMParser)return(new window.DOMParser).parseFromString(a,"application/xml");if(Kp){var b=new window.ActiveXObject("MSXML2.DOMDocument");b.resolveExternals=!1;b.validateOnParse=!1;try{b.setProperty("ProhibitDTD",!0),b.setProperty("MaxXMLSize",2048),b.setProperty("MaxElementDepth",256)}catch(c){}b.loadXML(a);return b}throw Error("Your browser does not support loading xml documents");};
g.Mp=function(a,b,c){g.J.call(this);this.Aa=null;this.o=!1;this.B=a;this.A=c;this.g=b||window;this.l=(0,g.A)(this.Sy,this)};
Np=function(a){a=a.g;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null};
Op=function(a){a=a.g;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};
g.P=function(a,b,c){g.J.call(this);this.g=a;this.Hb=b||0;this.l=c;this.o=(0,g.A)(this.kr,this)};
g.Pp=function(a,b){a.isActive()||a.start(b)};
g.Qp=function(a){a.stop();a.kr()};
g.Rp=function(a){a.isActive()&&g.Qp(a)};
g.Sp=function(){};
g.Tp=function(a){return":"+(a.g++).toString(36)};
g.Up=function(a){g.kf.call(this);this.U=a||g.fd();this.Aa=null;this.ug=!1;this.l=null;this.B=void 0;this.C=this.H=this.I=null};
Vp=function(a,b){a.H&&(0,g.G)(a.H,b,void 0)};
g.Wp=function(a){if(g.x.JSON)try{return g.x.JSON.parse(a)}catch(b){}return mg(a)};
Xp=function(){};
Yp=function(){};
Zp=function(a,b,c,d,e,f,k,l){this.g=a;this.F=b;this.o=c;this.B=d;this.A=e;this.C=f;this.l=k;this.H=l};
$p=function(a,b){if(0==b)return a.g;if(1==b)return a.l;var c=Wc(a.g,a.o,b),d=Wc(a.o,a.A,b),e=Wc(a.A,a.l,b);c=Wc(c,d,b);d=Wc(d,e,b);return Wc(c,d,b)};
aq=function(a,b){var c=(b-a.g)/(a.l-a.g);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,k=0;8>k;k++){f=$p(a,c);var l=($p(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(k=0;1E-6<Math.abs(f-b)&&8>k;k++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=$p(a,c);return c};
bq=function(){this.g=this.o=this.A=5E3};
g.cq=function(a,b,c,d,e,f){a=a.clone();b=b.clone();var k=0;if(d||0!=c)c&4?a.x-=b.width+(d?d.right:0):c&2?a.x-=b.width/2:d&&(a.x+=d.left),c&1?a.y-=b.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){k=a;c=b;d=0;65==(f&65)&&(k.x<e.left||k.x>=e.right)&&(f&=-2);132==(f&132)&&(k.y<e.top||k.y>=e.bottom)&&(f&=-5);k.x<e.left&&f&1&&(k.x=e.left,d|=1);if(f&16){var l=k.x;k.x<e.left&&(k.x=e.left,d|=4);k.x+c.width>e.right&&(c.width=Math.min(e.right-k.x,l+c.width-e.left),c.width=Math.max(c.width,0),d|=4)}k.x+c.width>
e.right&&f&1&&(k.x=Math.max(e.right-c.width,e.left),d|=1);f&2&&(d|=(k.x<e.left?16:0)|(k.x+c.width>e.right?32:0));k.y<e.top&&f&4&&(k.y=e.top,d|=2);f&32&&(l=k.y,k.y<e.top&&(k.y=e.top,d|=8),k.y+c.height>e.bottom&&(c.height=Math.min(e.bottom-k.y,l+c.height-e.top),c.height=Math.max(c.height,0),d|=8));k.y+c.height>e.bottom&&f&4&&(k.y=Math.max(e.bottom-c.height,e.top),d|=2);f&8&&(d|=(k.y<e.top?64:0)|(k.y+c.height>e.bottom?128:0));e=d}else e=256;k=e}e=new g.Wg(0,0,0,0);e.left=a.x;e.top=a.y;e.width=b.width;
e.height=b.height;return{rect:e,status:k}};
g.dq=function(a){g.J.call(this);this.Jb=1;this.o=[];this.A=0;this.g=[];this.l={};this.B=!!a};
eq=function(a,b,c){g.Cf(function(){a.apply(b,c)})};
g.fq=function(a){this.g=a};
gq=function(a){this.g=a};
hq=function(a){this.data=a};
iq=function(a){return!g.t(a)||a instanceof hq?a:new hq(a)};
lq=function(a){this.g=a};
g.mq=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.H)()||!!b&&b>(0,g.H)()};
g.nq=function(a){this.g=a};
oq=function(){};
pq=function(){};
qq=function(a){this.g=a};
rq=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a};
sq=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.g=a};
tq=function(a,b){this.l=a;this.g=b+"::"};
g.uq=function(a){var b=new rq;return b.isAvailable()?a?new tq(b,a):b:null};
vq=function(a,b){this.Jb=a;this.g=b};
wq=function(a){this.g=[];if(a)a:{if(a instanceof wq){var b=a.jd();a=a.Ub();if(0>=this.Sd()){for(var c=this.g,d=0;d<b.length;d++)c.push(new vq(b[d],a[d]));break a}}else b=g.Xb(a),a=g.Wb(a);for(d=0;d<b.length;d++)xq(this,b[d],a[d])}};
xq=function(a,b,c){var d=a.g;d.push(new vq(b,c));b=d.length-1;a=a.g;for(c=a[b];0<b;)if(d=b-1>>1,a[d].Jb>c.Jb)a[b]=a[d],b=d;else break;a[b]=c};
yq=function(){wq.call(this)};
zq=function(a,b){var c="script";c=void 0===c?"":c;var d=a.createElement("link");d.rel="preload";d.href=Db("preload","stylesheet")?Ec(b):b instanceof Dc?Ec(b):b instanceof Hc?g.Ic(b):Mc(b).Df();c&&(d.as=c);(c=a.getElementsByTagName("head")[0])&&c.appendChild(d)};
Cq=function(a){return Aq.test(a)&&!Bq.test(a)};
Eq=function(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+(0,window.encodeURIComponent)(g.x.location.hostname)];Dq[3]>=(0,g.H)()&&b.push("adsid="+(0,window.encodeURIComponent)(Dq[1]));return a+"?"+b.join("&")};
Hq=function(){Fq=g.x;Dq=Fq.googleToken=Fq.googleToken||{};var a=(0,g.H)();Dq[1]&&Dq[3]>a&&0<Dq[2]||(Dq[1]="",Dq[2]=-1,Dq[3]=-1,Dq[4]="",Dq[6]="");Gq=Fq.googleIMState=Fq.googleIMState||{};Cq(Gq[1])||(Gq[1]=".google.com");g.ya(Gq[5])||(Gq[5]=[]);g.ta(Gq[6])||(Gq[6]=!1);g.ya(Gq[7])||(Gq[7]=[]);g.ua(Gq[8])||(Gq[8]=0)};
Iq=function(){Hq();return Dq[1]};
Kq=function(a){Hq();var b=Fq.googleToken[5]||0;a&&(0!=b||Dq[3]>=(0,g.H)()?Jq.Zp(a):(Jq.Wq().push(a),Jq.Ko()));Dq[3]>=(0,g.H)()&&Dq[2]>=(0,g.H)()||Jq.Ko()};
Lq=function(a){g.x.processGoogleToken=g.x.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",k="NT"==f,l=(0,window.parseInt)(b.freshLifetimeSecs||"",10),m=(0,window.parseInt)(b.validLifetimeSecs||"",10);k&&!m&&(m=3600);var n=b["1p_jar"]||"";b=b.pucrd||"";Hq();1==e?Jq.hI():Jq.gI();if(!f&&Jq.shouldRetry())Cq(".google.com")&&(Gq[1]=".google.com"),Jq.Ko();else{var p=Fq.googleToken=Fq.googleToken||{},u=0==e&&f&&g.w(f)&&!k&&g.ua(l)&&0<l&&g.ua(m)&&0<m&&
g.w(n);k=k&&!Jq.Am()&&(!(Dq[3]>=(0,g.H)())||"NT"==Dq[1]);var v=!(Dq[3]>=(0,g.H)())&&0!=e;if(u||k||v)k=(0,g.H)(),l=k+1E3*l,m=k+1E3*m,1E-5>Math.random()&&bi(g.x,"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e),p[5]=e,p[1]=f,p[2]=l,p[3]=m,p[4]=n,p[6]=b,Hq();if(u||!Jq.Am()){e=Jq.Wq();for(f=0;f<e.length;f++)Jq.Zp(e[f]);e.length=0}}};
Kq(a)};
Mq=function(a,b){this.B=[];this.P=a;this.L=b||null;this.A=this.g=!1;this.o=void 0;this.I=this.U=this.F=!1;this.C=0;this.l=null;this.H=0};
Oq=function(a,b,c){a.g=!0;a.o=c;a.A=!b;Nq(a)};
Qq=function(a){if(a.g){if(!a.I)throw new Pq(a);a.I=!1}};
Rq=function(a,b,c){a.B.push([b,c,void 0]);a.g&&Nq(a)};
Sq=function(a){return(0,g.gk)(a.B,function(a){return g.Aa(a[1])})};
Nq=function(a){if(a.C&&a.g&&Sq(a)){var b=a.C,c=Tq[b];c&&(g.x.clearTimeout(c.Aa),delete Tq[b]);a.C=0}a.l&&(a.l.H--,delete a.l);b=a.o;for(var d=c=!1;a.B.length&&!a.F;){var e=a.B.shift(),f=e[0],k=e[1];e=e[2];if(f=a.A?k:f)try{var l=f.call(e||a.L,b);g.t(l)&&(a.A=a.A&&(l==b||a.isError(l)),a.o=b=l);if(Gf(b)||"function"===typeof g.x.Promise&&b instanceof g.x.Promise)d=!0,a.F=!0}catch(m){b=m,a.A=!0,Sq(a)||(c=!0)}}a.o=b;d&&(l=(0,g.A)(a.K,a,!0),d=(0,g.A)(a.K,a,!1),b instanceof Mq?(Rq(b,l,d),b.U=!0):b.then(l,
d));c&&(b=new Uq(b),Tq[b.Aa]=b,a.C=b.Aa)};
Pq=function(){Ka.call(this)};
Vq=function(){Ka.call(this)};
Uq=function(a){this.Aa=g.x.setTimeout((0,g.A)(this.l,this),0);this.g=a};
Wq=function(a){te(this,a,null)};
Xq=function(a,b){for(;ke(b)&&4!=b.l;)switch(b.o){case 1:var c=ne(b);xe(a,1,c);break;case 2:c=ne(b);xe(a,2,c);break;default:le(b)}return a};
Zq=function(a){te(this,a,Yq)};
$q=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.br=function(a){$q(g.ar,arguments)};
g.cr=function(a,b){return a in g.ar?g.ar[a]:b};
dr=function(){};
er=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Q(b)}}:a};
g.Q=function(a,b,c,d,e){var f=g.z("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.cr("ERRORS",[]),f.push([a,b,c,d,e]),g.br("ERRORS",f))};
fr=function(a){g.Q(a,"WARNING",void 0,void 0,void 0)};
hr=function(){if(!gr)return null;var a=gr();return"open"in a?a:null};
g.ir=function(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.jr=function(a,b){g.Aa(a)&&(a=er(a));return window.setTimeout(a,b)};
g.kr=function(a,b){g.Aa(a)&&(a=er(a));return window.setInterval(a,b)};
g.lr=function(a){window.clearTimeout(a)};
g.mr=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=tb(e[0]||"");e=tb(e[1]||"");f in b?g.ya(b[f])?bb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.nr=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return g.mr(a)};
or=function(a){a=a.split(",");return a=a.map(function(a){return g.nr(a)})};
g.pr=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),g.nr(1<a.length?a[1]:a[0])):{}};
g.rr=function(a,b){return qr(a,b||{},!0)};
g.sr=function(a,b){return qr(a,b||{},!1)};
qr=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.nr(e[1]||"");for(var f in b)if(c||!Zb(e,f))e[f]=b[f];return g.Jg(a,e)+d};
tr=function(a){if(!b)var b=window.location.href;var c=g.xg(a)[1]||null,d=g.zg(a);c&&d?(a=g.xg(a),b=g.xg(b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.zg(b)==d&&g.Ag(b)==g.Ag(a):!0;return a};
ur=function(a){a||(a=window.document.location.href);a=g.xg(a)[1]||null;return null!==a&&"https"==a};
vr=function(a){a=g.zg(a);a=null===a?null:a.split(".").reverse();return null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1};
xr=function(a,b){b=void 0===b?{}:b;var c=tr(a),d;for(d in wr){var e=g.cr(wr[d]),f;if((f=e)&&!(f=c)){f=d;var k=g.cr("CORS_HEADER_WHITELIST")||{},l=g.zg(a);f=l?(k=k[l])?g.Sa(k,f):!1:!0}f&&(b[d]=e)}return b};
Br=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=yr(a,b);var d=zr(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.lr(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.x;c?b.ib&&b.ib.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Ac&&b.Ac.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.ou&&0<b.timeout&&(f=g.jr(function(){e||(e=!0,g.lr(f),b.ou.call(b.context||g.x))},b.timeout))}else g.Ar(a,b)};
g.Ar=function(a,b){var c=b.format||"JSON";a=yr(a,b);var d=zr(a,b),e=!1,f,k=Cr(a,function(a){if(!e){e=!0;f&&g.lr(f);var d=g.ir(a),k=null;if(d||400<=a.status&&500>a.status)k=Dr(c,a,b.FM);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.x;d?b.ib&&b.ib.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Ac&&b.Ac.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Qc&&0<b.timeout&&(f=g.jr(function(){e||(e=!0,k.abort(),g.lr(f),b.Qc.call(b.context||g.x,k))},b.timeout));
return k};
yr=function(a,b){b.IM&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.cr("XSRF_FIELD_NAME",void 0),d=b.hc;d&&(d[c]&&delete d[c],a=g.rr(a,d));return a};
zr=function(a,b){var c=g.cr("XSRF_FIELD_NAME",void 0),d=g.cr("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.jb,k=g.cr("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.HM||g.zg(a)&&!b.withCredentials&&g.zg(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.jb&&b.jb[k]||(f||(f={}),f[c]=d);f&&g.w(e)&&(e=g.nr(e),g.jc(e,f),e=b.Wu&&"JSON"==b.Wu?JSON.stringify(e):g.Hg(e));f=e||f&&!g.cc(f);!Er&&f&&"POST"!=b.method&&(Er=!0,g.Q(Error("AJAX request with postData should use POST")));
return e};
Dr=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Fr(b):null)d={},(0,g.G)(b.getElementsByTagName("*"),function(a){d[a.tagName]=Gr(a)})}c&&Hr(d);
return d};
Hr=function(a){if(g.Ba(a))for(var b in a)"html_content"==b||rb(b,"_html")?a[b]=g.Tc(g.Bc("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Hr(a[b])};
Fr=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
Gr=function(a){var b="";(0,g.G)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Ir=function(a,b){b.method="POST";b.jb||(b.jb={});g.Ar(a,b)};
Cr=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&er(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=hr();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c;if(e=xr(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
g.Jr=function(){var a=/Chrome\/(\d+)/.exec(g.Pb);return a?(0,window.parseFloat)(a[1]):window.NaN};
Mr=function(){return Kr("android")&&Kr("chrome")&&!Lr()};
g.Nr=function(){return Kr("cobalt")};
Or=function(){return Kr("cobalt")&&Kr("; youtubevr")};
Pr=function(){return Kr("cobalt")&&Kr("appletv")};
Qr=function(){return Kr("(ps3; leanback shell)")||Kr("ps3")&&g.Nr()};
Rr=function(){return Kr("(ps4; leanback shell)")||Kr("ps4")&&g.Nr()};
Sr=function(){var a=/WebKit\/([0-9]+)/.exec(g.Pb);return!!(a&&600<=(0,window.parseInt)(a[1],10))};
Tr=function(){return Kr("iemobile")||Kr("windows phone")&&Kr("edge")};
Lr=function(){return Kr("trident/")||Kr("edge/")};
Ur=function(){return Kr("smart-tv")&&Kr("samsung")};
Kr=function(a){var b=g.Pb;return b?0<=b.toLowerCase().indexOf(a):!1};
g.Wr=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&!g.Nr()?a&&(a=g.vd("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.dd(a).body.appendChild(a)):e?Cr(a,b,"POST",e,d):g.cr("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Cr(a,b,"GET","",d):Vr(a,b))};
Xr=function(a,b,c){c=void 0===c?"":c;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,c)?b&&b():g.Wr(a,b,void 0,void 0,c)}catch(d){g.Wr(a,b,void 0,void 0,c)}};
Vr=function(a,b){var c=new window.Image,d=""+Yr++;Zr[d]=c;c.onload=c.onerror=function(){b&&Zr[d]&&b();delete Zr[d]};
c.src=a};
g.$r=function(a){return g.cr("EXPERIMENT_FLAGS",{})[a]};
bs=function(a,b){var c=g.gc(b);return new g.If(function(b,e){c.ib=function(a){g.ir(a)?b(a):e(new as("Request failed, status="+a.status,"net.badstatus",a))};
c.onError=function(a){e(new as("Unknown request error","net.unknown",a))};
c.Qc=function(a){e(new as("Request timed out","net.timeout",a))};
g.Ar(a,c)})};
cs=function(a,b,c,d){function e(d,l,m){return g.Vf(d,function(d){return 0>=l||403===d.g.status?Nf(new as("Request retried too many times","net.retryexhausted",d.g)):f(m).then(function(){return e(bs(a,b),l-1,Math.pow(2,c-l+1)*m)})})}
function f(a){return new g.If(function(b){(0,window.setTimeout)(b,a)})}
return e(bs(a,b),c-1,d)};
as=function(a,b,c){Ka.call(this,a+", errorCode="+b);this.errorCode=b;this.g=c;this.name="PromiseAjaxError"};
ds=function(a){this.o=void 0===a?null:a;this.l=0;this.g=null};
es=function(a){var b=new ds;a=void 0===a?null:a;b.l=2;b.g=void 0===a?null:a;return b};
fs=function(a){var b=new ds;a=void 0===a?null:a;b.l=1;b.g=void 0===a?null:a;return b};
hs=function(a){Ka.call(this,a.message||a.description||a.name);this.isMissing=a instanceof gs;this.isTimeout=a instanceof as&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof $f};
gs=function(){Ka.call(this,"Biscotti ID is missing from server")};
is=function(){var a;(a=!!g.Yb(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie"))||(a=!!g.cr("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1));return a||g.$r("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id"};
ns=function(){if("1"===g.Yb(g.cr("PLAYER_CONFIG",{}),"args","privembed"))return Nf(Error("Biscotti ID is not available in private embed mode"));js||(js=g.Vf(bs(is(),ks).then(ls),function(a){return ms(2,a)}));
return js};
ls=function(a){a=a.responseText;if(!g.qb(a,")]}'"))throw new gs;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new gs;a=a.id;os(a);js=fs(a);ps(18E5,2);return a};
ms=function(a,b){var c=new hs(b);os("");js=es(c);0<a&&ps(12E4,a-1);throw c;};
ps=function(a,b){g.jr(function(){g.Vf(bs(is(),ks).then(ls,function(a){return ms(b,a)}),g.va)},a)};
os=function(a){g.y("yt.ads.biscotti.lastId_",a,void 0)};
qs=function(){try{var a=g.z("yt.ads.biscotti.getId_");return a?a():ns()}catch(b){return Nf(b)}};
rs=function(a){Ka.apply(this,arguments)};
ts=function(){var a=new rs("ID is missing"),b=new rs("Timeout"),c=null,d=!1;Lq(function(){c=Iq();d=!0});
if(d)return c?fs(c):es(a);var e=new g.If(function(b,c){Lq(function(){var d=Iq();d?b(d):c(a)})}),f=gg(5E3).then(function(){return Nf(b)});
return Tf(Qf([e,f]),function(){return f.cancel()})};
us=function(){g.z("yt.ads.mutsu.getId_")||g.y("yt.ads.mutsu.getId_",ts,void 0);try{return g.z("yt.ads.mutsu.getId_")()}catch(a){return Nf(a)}};
g.ws=function(a,b,c){a&&(a.dataset?a.dataset[g.vs(b)]=String(c):a.setAttribute("data-"+b,c))};
g.xs=function(a,b){return a?a.dataset?a.dataset[g.vs(b)]:a.getAttribute("data-"+b):null};
g.vs=function(a){return ys[a]||(ys[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
As=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=zs+"VisibilityState";if(b in a)return a[b]};
Bs=function(a,b){var c;(0,g.gk)(a,function(a){c=b[a];return!!c});
return c};
Es=function(a){var b;Cs()?g.Ds()==a&&(b=window.document):b=a;b&&(a=Bs(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],b))&&a.call(b)};
Fs=function(a){return g.Oa(["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(b){return"on"+b.toLowerCase()in a})};
Gs=function(){var a=window.document;return g.Oa(["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"],function(b){return"on"+b.toLowerCase()in a})};
Cs=function(){return!!Bs(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],window.document)};
g.Ds=function(){var a=Bs(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],window.document);return a?a:null};
Is=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Hs||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?
b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.g=a.pageX;this.l=a.pageY}};
Js=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.g=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.l=a.clientY+b}};
Ls=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ac(Ks,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.Ns=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ls(a,b,c,d);if(e)return e;e=++Ms.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new Is(d);if(!g.Pd(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Is(b);
b.currentTarget=a;return c.call(a,b)};
k=er(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);Ks[e]=[a,b,c,k,d];return e};
g.Os=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.G)(a,function(a){if(a in Ks){var b=Ks[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ks[a]}}))};
g.Ps=function(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a};
Qs=function(a){a=a||window.event;return a.path&&a.path.length?a.path[0]:g.Ps(a)};
Rs=function(a){a=a||window.event;var b=a.relatedTarget;b||("mouseover"==a.type?b=a.fromElement:"mouseout"==a.type&&(b=a.toElement));return b};
Ss=function(a){a=a||window.event;var b=a.pageX,c=a.pageY;window.document.body&&window.document.documentElement&&(g.ua(b)||(b=a.clientX+window.document.body.scrollLeft+window.document.documentElement.scrollLeft),g.ua(c)||(c=a.clientY+window.document.body.scrollTop+window.document.documentElement.scrollTop));return new g.Yc(b,c)};
g.Ts=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Us=function(a){a=a||window.event;return!1===a.returnValue||a.Hr&&a.Hr()};
g.Vs=function(a){a=a||window.event;return a.keyCode?a.keyCode:a.which};
g.Ws=function(a,b,c){var d;return d=g.Ns(a,b,function(){g.Os(d);c.apply(a,arguments)},!1)};
Xs=function(a){for(var b in Ks)Ks[b][0]==a&&g.Os(b)};
Ys=function(a){this.H=a;this.g=null;this.A=0;this.B=null;this.o=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.Oa=0;this.F=g.Ns(window,"mousemove",(0,g.A)(this.K,this));this.I=g.kr((0,g.A)(this.C,this),25)};
g.Zs=function(a){g.J.call(this);this.P=[];this.Mb=a||this};
$s=function(a,b,c,d){for(var e=0;e<c.length;e++)a.M(b,c[e],d)};
g.at=function(a){for(;a.P.length;){var b=a.P.pop();b.target.removeEventListener(b.name,b.Fj)}};
g.R=function(){g.J.call(this);this.fc=new g.dq;g.K(this,this.fc)};
g.ct=function(a,b,c,d){g.R.call(this);this.o=!!b;this.C=a;this.I=c||a;this.H=!!d;this.g=new g.Zs(this);g.K(this,this.g);this.B=this.F=null;this.A=this.l=!1;b&&(g.rd&&a.setAttribute("draggable","true"),a.style.touchAction="none");bt(this)};
dt=function(a,b,c){a.g.M(a.I,b,c,void 0,!a.o)};
bt=function(a){a.B=null;a.F=null;dt(a,et("over"),a.os);dt(a,"touchstart",a.En);a.o&&dt(a,et("down"),a.RD)};
ft=function(a,b){for(var c=0;c<b.changedTouches.length;c++){var d=b.changedTouches[c];if(d.identifier==a.F)return d}return null};
et=function(a){return window.navigator.msPointerEnabled?"MSPointer"+a.charAt(0).toUpperCase()+a.substr(1):"mouse"+a};
jt=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.gc(gt);this.assets=a.assets||{};this.attrs=a.attrs||g.gc(ht);this.params=a.params||g.gc(it);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
kt=function(a){a instanceof jt||(a=new jt(a));return a};
lt=function(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&g.Wr(c.data.follow_on_url)}};
g.qt=function(a,b,c){var d=g.mt();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){g.nt[e]&&b.apply(c||window,d)};
try{ot[a]?k():g.jr(k,0)}catch(l){g.Q(l)}},c);
g.nt[e]=!0;g.pt[a]||(g.pt[a]=[]);g.pt[a].push(e);return e}return 0};
g.tt=function(a,b){var c=g.qt(a,function(a){b.apply(void 0,arguments);g.rt(c)},void 0);
return c};
g.rt=function(a){var b=g.mt();b&&(g.ua(a)?a=[a]:g.w(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.G)(a,function(a){b.unsubscribeByKey(a);delete g.nt[a]}))};
g.ut=function(a,b){var c=g.mt();return c?c.publish.apply(c,arguments):!1};
g.vt=function(a,b){ot[a]=!0;var c=g.mt();c&&c.publish.apply(c,arguments);ot[a]=!1};
g.mt=function(){return g.z("ytPubsubPubsubInstance")};
g.Ct=function(a,b){wt[a.endpoint]=b;if(a.Qj){var c=a.Qj;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);xt[a.Qj.token]=d;c=zt(a.endpoint,a.Qj.token)}else c=zt(a.endpoint);c.push(a.payload);c.length>=(Number(g.$r("web_logging_max_batch")||0)||20)?At():Bt()};
At=function(){g.lr(Dt);if(!g.cc(Et)){for(var a in Et){var b=Ft[a];if(!b){var c=wt[a];if(!c)continue;b=new c;Ft[a]=b}c=void 0;var d=a,e=b,f=Gt[d],k=Ht[d]||{};Ht[d]=k;b=Math.round(g.It());for(c in Et[d]){var l={context:g.Jt(e.g)};l[f]=zt(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var m=xt[c];if(m)a:{var n=l,p=c;if(m.videoId)var u="VIDEO";else if(m.playlistId)u="PLAYLIST";else break a;n.credentialTransferTokenTargetId=m;n.context=n.context||
{};n.context.user=n.context.user||{};n.context.user.credentialTransferTokens=[{token:p,scope:u}]}delete xt[c];g.Kt(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete Et[a]}g.cc(Et)||Bt()}};
Bt=function(){g.lr(Dt);Dt=g.jr(At,g.cr("LOGGING_BATCH_TIMEOUT",1E4))};
zt=function(a,b){b=void 0===b?"":b;Et[a]=Et[a]||{};Et[a][b]=Et[a][b]||[];return Et[a][b]};
Lt=function(){};
g.Nt=function(a,b){return Mt(a,1,b)};
Ot=function(){};
g.Pt=function(){return!!g.z("yt.scheduler.instance")};
Mt=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.jr(a,c||0)};
g.Qt=function(a){if(!(0,window.isNaN)(a)){var b=g.z("yt.scheduler.instance.cancelJob");b?b(a):g.lr(a)}};
Rt=function(a){var b=g.z("yt.scheduler.instance.setPriorityThreshold");b&&b(a)};
Ut=function(){if(null==g.z("_lact",window)){var a=(0,window.parseInt)(g.cr("LACT"),10);a=(0,window.isFinite)(a)?(0,g.H)()-Math.max(a,0):-1;g.y("_lact",a,window);g.y("_fact",a,window);-1==a&&St();g.Ns(window.document,"keydown",St);g.Ns(window.document,"keyup",St);g.Ns(window.document,"mousedown",St);g.Ns(window.document,"mouseup",St);g.$r("lact_local_listeners")?(g.Ns(window,"resize",function(){Tt("resize",200)}),g.Ns(window,"scroll",function(){Tt("scroll",200)}),new Ys(function(){Tt("mouse",100)}),
g.Ns(window.document,"touchstart",St),g.Ns(window.document,"touchend",St)):(g.qt("page-mouse",St),g.qt("page-scroll",St),g.qt("page-resize",St))}};
Tt=function(a,b){Vt[a]||(Vt[a]=!0,g.Nt(function(){St();Vt[a]=!1},b))};
St=function(){null==g.z("_lact",window)&&Ut();var a=(0,g.H)();g.y("_lact",a,window);-1==g.z("_fact",window)&&g.y("_fact",a,window);(a=g.z("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Wt=function(){var a=g.z("_lact",window);return null==a?-1:Math.max((0,g.H)()-a,0)};
g.Yt=function(a,b,c,d){var e=g.Xt,f={};f.eventTimeMs=Math.round(c||g.It());f[a]=b;f.context={lastActivityMs:String(c?-1:g.Wt())};g.Ct({endpoint:"log_event",payload:f,Qj:d},e)};
Zt=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.Jt=function(a){a={client:{hl:a.gn,gl:a.fn,clientName:a.dn,clientVersion:a.innertubeContextClientVersion}};g.cr("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.cr("DELEGATED_SESSION_ID")});return a};
g.Xt=function(a){this.g=a||{innertubeApiKey:g.cr("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.cr("INNERTUBE_API_VERSION",void 0),dn:g.cr("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.cr("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),gn:g.cr("INNERTUBE_CONTEXT_HL",void 0),fn:g.cr("INNERTUBE_CONTEXT_GL",void 0),tk:g.cr("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
g.Kt=function(a,b,c,d){!g.cr("VISITOR_DATA")&&.01>Math.random()&&g.Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.cr("VISITOR_DATA","")},method:"POST",jb:c,Wu:"JSON",Qc:function(){d.Qc()},
ou:d.Qc,ib:function(a,b){d.ib&&d.ib(b)},
LM:function(a){d.ib&&d.ib(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
KM:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=g.$n();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.cr("SESSION_INDEX",0));var k="",l=a.g.tk;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);a=""+k+Zt(a.g.innertubeApiVersion,b,c)+"?alt=json&key="+a.g.innertubeApiKey;try{g.$r("use_fetch_for_op_xhr")?Br(a,e):g.Ir(a,e)}catch(m){if("InvalidAccessError"==m)g.Q(Error("An extension is blocking network request."),"WARNING");else throw m;}};
au=function(a,b){var c=Object.keys(a).join("");$t("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Yt("latencyActionInfo",a,void 0,void 0))};
$t=function(a){bu[a]=bu[a]||{count:0};var b=bu[a];b.count++;b.time=g.It();cu||(cu=Mt(du,0,5E3));if(10<b.count){if(11==b.count){b=Error("CSI data exceeded logging limit with key: "+a);var c=0==a.indexOf("info")?"WARNING":"ERROR";var d=d||{};d.name=g.cr("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=g.cr("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);a=b;b=void 0===c?"ERROR":c;c=window&&window.yterr||!1;if(a&&c&&!(5<=eu)){c=a.stacktrace;var e=a.columnNumber;var f=g.z("window.location.href");if(g.w(a))a={message:a,
name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var k=!1;try{var l=a.lineNumber||a.line||"Not available"}catch(u){l="Not available",k=!0}try{var m=a.fileName||a.filename||a.sourceURL||g.x.$googDebugFname||f}catch(u){m="Not available",k=!0}a=!k&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:l,fileName:m,stack:a.stack||"Not available"}}c=c||a.stack;l=a.lineNumber.toString();(0,window.isNaN)(l)||
(0,window.isNaN)(e)||(l=l+":"+e);if(!(fu[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js"))){m=c;l={hc:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:l,level:void 0===b?"ERROR":b,"client.name":d.name},jb:{url:g.cr("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};d.version&&(l["client.version"]=d.version);m&&(l.jb.stack=m);for(var n in d)l.jb["client."+n]=d[n];if(d=g.cr("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var p in d)l.jb[p]=
d[p];g.Ar("/error_204",l);fu[a.message]=!0;eu++}}}return!0}return!1};
du=function(){var a=g.It(),b;for(b in bu)6E4<a-bu[b].time&&delete bu[b];cu=0};
g.gu=function(a,b,c){this.l=a;this.A=b;this.o=c;this.g=void 0};
g.ju=function(a,b,c){var d=c&&0<c?c:0;c=d?(0,g.H)()+1E3*d:0;if((d=d?g.hu:iu)&&window.JSON){g.w(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}};
g.ku=function(a){if(!iu&&!g.hu||!window.JSON)return null;try{var b=iu.get(a)}catch(c){}if(!g.w(b))try{b=g.hu.get(a)}catch(c){}if(!g.w(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.lu=function(a){try{iu&&iu.remove(a),g.hu&&g.hu.remove(a)}catch(b){}};
g.mu=function(){var a=g.cr("client-screen-nonce")||g.cr("EVENT_ID");return a?a:null};
g.ou=function(a,b,c){g.nu.set(""+a,b,c,"/","youtube.com",!1)};
g.pu=function(){return g.ku("yt-remote-session-screen-id")};
g.ru=function(a){$q(qu,arguments)};
g.S=function(a,b,c){b=void 0===b?{}:b;a=(a=a in qu?qu[a]:c)||"";c={};for(var d in b)c.Xk=d,a=a.replace(new RegExp("\\$"+c.Xk,"gi"),function(a){return function(){return b[a.Xk]}}(c)),c={Xk:c.Xk};
return a};
tu=function(a,b,c){this.sampleRate=a||0;this.g=b||0;this.spatialAudioType=c||0};
uu=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
xu=function(a,b,c,d,e,f,k,l,m,n,p){this.width=a;this.height=b;this.quality=f||vu(a,b);this.g=g.wu[this.quality];this.isAccelerated=!!k;this.fps=c||0;this.stereoLayout=!e||null!=d&&0!=d&&1!=d?0:e;this.projectionType=d?2==d&&2==e?3:d:0;(a=l)||(a=this.fps,b=this.projectionType,c=g.wu[this.quality],a=0==c?g.S("YTP_AUTO"):c+(2==b||3==b||4==b?"s":"p")+(55<a?"60":49<a?"50":39<a?"48":""));this.qualityLabel=a;this.l=m||"";this.primaries=n||"";this.o=!1!==p};
yu=function(a){return 1280<=a.width||720<=a.height};
zu=function(a){return"smpte2084"==a.l||"arib-std-b67"==a.l};
vu=function(a,b){for(var c=Math.max(a,b),d=Math.min(a,b),e=Au[0],f=0;f<Au.length;f++){var k=Au[f],l=g.wu[k];if(c>=1.3*Math.floor(16*l/9)||d>=1.3*l)return e;e=k}return"tiny"};
Du=function(a,b,c,d,e,f,k,l){this.id=a;this.containerType=0<=b.indexOf("/mp4")?1:0<=b.indexOf("/webm")?2:0<=b.indexOf("/x-flv")?3:0<=b.indexOf("/vtt")?4:0;this.mimeType=b;this.g=k||0;this.o=l||0;this.audio=void 0===c?null:c;this.video=void 0===d?null:d;this.bc=void 0===e?null:e;this.Ob=void 0===f?null:f;this.l=Bu[Cu(this)]||""};
Cu=function(a){return a.id.split(";",1)[0]};
Eu=function(a){return"9"==a.l||"("==a.l||"9h"==a.l||"(h"==a.l};
Fu=function(a){return"9h"==a.l||"(h"==a.l};
Gu=function(a){return 1==a.containerType};
Hu=function(a){return 0<=a.indexOf("opus")||0<=a.indexOf("vorbis")||0<=a.indexOf("mp4a")};
Iu=function(a){return 0<=a.indexOf("vp9")||0<=a.indexOf("vp8")||0<=a.indexOf("avc1")};
Ju=function(a,b,c,d,e,f,k){var l=new tu;b in g.wu||(b="small");d&&e?(e=(0,window.parseInt)(e,10),d=(0,window.parseInt)(d,10)):(e=g.wu[b],d=Math.round(16*e/9));b=new xu(d,e,0,null,void 0,b,f,void 0,void 0,void 0,k);a=(0,window.unescape)(a.replace(/&quot;/g,'"'));return new Du(c,a,l,b)};
Ku=function(a,b){this.experimentIds=a?a.split(","):[];this.flags=g.mr(b||"");var c={};(0,g.G)(this.experimentIds,function(a){c[a]=!0});
this.experiments=c;this.A=!!c["9414740"]};
Lu=function(a,b){this.Of=a;this.g=!!b;this.l=!1};
Mu=function(a){this.yf=a};
Nu=function(a,b,c){this.l=a||0;this.g=b||0;this.o=c};
Ou=function(a,b,c){return new Nu(g.wu[a]||0,g.wu[b]||0,c)};
Pu=function(a){var b=g.wu.auto;return a.l==b&&a.g==b};
Ru=function(a,b){if(b.o&&Pu(b))return Qu;if(b.o||Pu(a))return b;if(a.o||Pu(b))return a;var c=a.l&&b.l?Math.max(a.l,b.l):a.l||b.l,d=a.g&&b.g?Math.min(a.g,b.g):a.g||b.g;c=Math.min(c,d);return c==a.l&&d==a.g?a:new Nu(c,d,!1)};
g.Tu=function(a){var b=a.g||a.l;return bc(Su,function(a){return g.wu[a]==b})||"auto"};
Uu=function(a,b){var c=g.wu[b];return a.l<=c&&(!a.g||a.g>=c)};
Vu=function(){var a=g.ku("yt-player-volume")||{},b=a.volume;return{volume:(0,window.isNaN)(b)?100:g.Uc(Math.floor(b),0,100),muted:!!a.muted}};
Wu=function(a){g.ju("yt-player-bandwidth",a,2592E3)};
Xu=function(){return g.ku("yt-player-quality")||"auto"};
Yu=function(a){g.ju("yt-player-watch-later-pending",a)};
Zu=function(){return g.ku("yt-player-performance-cap")||0};
av=function(a,b,c){g.w(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return $u(a)};
$u=function(a,b,c){if(g.Ba(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}};
bv=function(a,b,c,d){!a&&(void 0===c?0:c)&&fr(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a};
dv=function(a){return(a=cv.exec(a))?a[0]:""};
fv=function(a){var b=void 0===b?!1:b;return bv(ev.test(a),a,b,"Nielsen OCR URL")};
hv=function(a){var b=void 0===b?!1:b;return bv(gv.test(a),a,b,"Active View 3rd Party Integration URL")};
ov=function(a){var b=void 0===b?!1:b;return bv(nv.test(a),a,b,"Google/YouTube Brand Lift URL")};
qv=function(a){var b=void 0===b?!1:b;return bv(pv.test(a),a,b,"Trusted Stream URL")};
g.tv=function(a){var b=void 0===b?!1:b;return bv(rv.test(a),a,b,"Trusted Image URL")};
vv=function(a){var b=void 0===b?!1:b;return bv(uv.test(a),a,b,"Trusted Ad Domain URL")};
g.xv=function(a){var b=void 0===b?!1:b;return bv(wv.test(a),a,b,"Trusted Promoted Video Domain URL")};
zv=function(a,b){b=void 0===b?!1:b;return bv(yv.test(a),a,b,"Captions URL")};
Av=function(a){a=new g.eo(a);g.fo(a,window.document.location.protocol);g.go(a,window.document.location.hostname);window.document.location.port&&g.ho(a,window.document.location.port);return a.toString()};
Bv=function(a){a=new g.eo(a);g.fo(a,window.document.location.protocol);return a.toString()};
Ev=function(a,b){g.J.call(this);this.app=a;this.g=!0;this.o=null;this.I={};this.K={};this.A={};this.H=[];this.F={};this.B={};this.l=null;this.L=new window.Set;this.playerType=b;Cv(this,"cueVideoById",this.Us);Cv(this,"loadVideoById",this.eC);Cv(this,"cueVideoByUrl",this.QB);Cv(this,"loadVideoByUrl",this.fC);Cv(this,"playVideo",this.Oc);Cv(this,"pauseVideo",this.Wb);Cv(this,"stopVideo",this.cf);Cv(this,"clearVideo",this.OB);Cv(this,"getVideoBytesLoaded",this.XB);Cv(this,"getVideoBytesTotal",this.YB);
Cv(this,"getVideoLoadedFraction",this.Tn);Cv(this,"getVideoStartBytes",this.ZB);Cv(this,"cuePlaylist",this.PB);Cv(this,"loadPlaylist",this.dC);Cv(this,"nextVideo",this.rh);Cv(this,"previousVideo",this.Ei);Cv(this,"playVideoAt",this.Xs);Cv(this,"setShuffle",this.setShuffle);Cv(this,"setLoop",this.hC);Cv(this,"getPlaylist",this.Ce);Cv(this,"getPlaylistIndex",this.Vs);Cv(this,"getPlaylistId",this.getPlaylistId);Cv(this,"loadModule",this.Di);Cv(this,"unloadModule",this.Kk);Cv(this,"setOption",this.Pc);
Cv(this,"getOption",this.Lb);Cv(this,"getOptions",this.Eg);Cv(this,"mute",this.mute);Cv(this,"unMute",this.De);Cv(this,"isMuted",this.isMuted);Cv(this,"setVolume",this.setVolume);Cv(this,"getVolume",this.getVolume);Cv(this,"seekTo",this.yb);Cv(this,"getPlayerState",this.qh);Cv(this,"getPlaybackRate",this.dc);Cv(this,"setPlaybackRate",this.Be);Cv(this,"getAvailablePlaybackRates",this.ph);Cv(this,"getPlaybackQuality",this.Ci);Cv(this,"setPlaybackQuality",this.Fi);Cv(this,"getAvailableQualityLevels",
this.Sn);Cv(this,"getCurrentTime",this.getCurrentTime);Cv(this,"getDuration",this.getDuration);Cv(this,"addEventListener",this.addEventListener);Cv(this,"removeEventListener",this.removeEventListener);Cv(this,"getVideoUrl",this.getVideoUrl);Cv(this,"getDebugText",this.Bi);Cv(this,"getVideoEmbedCode",this.Ws);Cv(this,"getVideoData",this.Y);Cv(this,"addCueRange",this.Ts);Cv(this,"removeCueRange",this.Ys);Cv(this,"setSize",this.setSize);Cv(this,"getApiInterface",this.SB);Cv(this,"destroy",this.destroy);
Cv(this,"showVideoInfo",this.gt);Cv(this,"hideVideoInfo",this.bC);Cv(this,"getMediaReferenceTime",this.UB);Dv(this,"getInternalApiInterface",this.TB);Dv(this,"getAdState",this.RB);Dv(this,"isNotServable",this.cC);Dv(this,"getUpdatedConfigurationData",this.WB);Dv(this,"sendAbandonmentPing",this.gC);Dv(this,"setAutonav",this.Zs);Dv(this,"setAutonavState",this.Un);Dv(this,"startInteractionLogging",this.iC);Dv(this,"channelSubscribed",this.MB);Dv(this,"channelUnsubscribed",this.NB);Dv(this,"handleExternalCall",
this.aC)};
Cv=function(a,b,c){var d=void 0===d?!0:d;a.I[b]=function(e){for(var f=[],k=0;k<arguments.length;++k)f[k-0]=arguments[k];d&&Fv(a,b);return c.apply(a,f)};
Dv(a,b,c);a.H.push(b)};
Gv=function(a,b,c){var d=void 0===d?!0:d;a.K[b]=function(e){for(var f=[],k=0;k<arguments.length;++k)f[k-0]=arguments[k];d&&Fv(a,b);return c.apply(a,f)};
Dv(a,b,c);a.H.push(b)};
Dv=function(a,b,c){var d=void 0===d?!1:d;a.A[b]=function(e){for(var f=[],k=0;k<arguments.length;++k)f[k-0]=arguments[k];d&&Fv(a,b);return c.apply(a,f)}};
Hv=function(a){a.l||(a.l={},g.Ia(a.l,a.I),g.Ia(a.l,a.K),a.l.addEventListener=(0,g.A)(a.Ey,a),a.l.removeEventListener=(0,g.A)(a.Fy,a));return a.l};
Fv=function(a,b){var c=a.app.g;c.ej&&!a.L.has(b)&&(a.L.add(b),c={callerUrl:c.aa,methodName:b},a.app.g.experiments.g("web_player_gel_logging_killswitch")||(a.app.g.experiments.g("web_player_gel_direct")?g.Yt("webPlayerApiCalled",c,void 0,void 0):a.la("onLogToGel",{payload_name:"webPlayerApiCalled",payload:c})))};
Jv=function(a,b,c){b=g.Uc(Math.floor(b),0,100);(0,window.isFinite)(b)&&Iv(a.app,{volume:b,muted:a.isMuted()},c)};
Kv=function(a,b){Iv(a.app,{muted:!0,volume:a.getVolume()},b)};
Lv=function(a,b){Iv(a.app,{muted:!1,volume:Math.max(5,a.getVolume())},b)};
g.Mv=function(a){this.languageCode=a.languageCode;this.languageName=a.languageName||null;this.g=a.languageOriginal||null;this.id=a.id||null;this.isDefault=a.is_default||!1};
g.Nv=function(a){a=void 0===a?{}:a;this.L=a.formats||"";this.o=a.format||1;if(1==this.o)for(var b=this.L.split(","),c=0;c<b.length;c++){var d=(0,window.parseInt)(b[c],10);(0,window.isNaN)(d)||(this.o=Math.max(d,this.o))}this.l=a.languageCode||"";this.C=a.languageName;this.A=a.kind||"";this.B=a.name;this.Aa=a.id;this.P=a.is_servable;this.H=a.is_translateable;this.I=a.url||null;this.F=a.vss_id||"";this.g=null;a.translationLanguage&&(this.g=new g.Mv(a.translationLanguage))};
g.Ov=function(a){var b=a.C||"",c=[b];"asr"==a.A&&-1==b.indexOf("(")&&c.push(" ("+g.S("YTP_ASR_SETTINGS_LABEL")+")");a.B&&c.push(" - "+a.B);a.g&&c.push(" >> "+a.g.languageName);return c.join("")};
Pv=function(a,b){this.id=a;this.bc=b;this.captionTracks=[];this.ai=this.pm=this.g=null;this.aq="UNKNOWN"};
Qv=function(){var a=As();return!(!a||"visible"==a)};
Sv=function(a){var b=Rv();b&&window.document.addEventListener(b,a,!1)};
Rv=function(){if(window.document.visibilityState)var a="visibilitychange";else{if(!window.document[zs+"VisibilityState"])return"";a=zs+"visibilitychange"}return a};
Tv=function(a,b,c,d,e,f,k,l){this.duration=c;this.endTime=b+c;this.ingestionTime=d;this.na=a;this.sourceURL=e;this.startTime=b;this.l=k||0;this.range=f||null;this.g=l||!1};
g.Uv=function(){this.segments=[]};
Vv=function(a,b){if(b>a.Pb())a.segments=[];else{var c=g.Na(a.segments,function(a){return a.na>=b},a);
0<c&&a.segments.splice(0,c)}};
Wv=function(a,b,c,d,e){e=void 0===e?!1:e;this.data=a;this.offset=b;this.size=c;this.type=d;this.g=e?0:8;this.dataOffset=this.offset+this.g;this.l=e};
Xv=function(a){var b=a.data.getInt32(a.offset+a.g);a.g+=4;return b};
Yv=function(a){var b=a.data.getUint32(a.offset+a.g);a.g+=4;return b};
Zv=function(a){var b=a.data;var c=a.offset+a.g;b=4294967296*b.getUint32(c)+b.getUint32(c+4);a.g+=8;return b};
$v=function(a){var b=[];do{var c=a.data.getUint8(a.offset+a.g);b.push(c);a.g++}while(0!=c);b.pop()};
aw=function(a){this.data=new window.DataView(new window.ArrayBuffer(a));this.g=0};
bw=function(a,b){a.data.setInt32(a.g,b);a.g+=4};
cw=function(a,b){for(var c=0;c+4<=b.size;)bw(a,b.data.getUint32(b.offset+c)),c+=4;for(;c<b.size;)a.data.setUint8(a.g++,b.data.getUint8(b.offset+c++))};
dw=function(a,b,c){for(var d=8,e=g.q(c),f=e.next();!f.done;f=e.next())d+=f.value.size;bw(a,d);bw(a,b);b=g.q(c);for(f=b.next();!f.done;f=b.next())cw(a,f.value)};
ew=function(a,b,c){this.Pd=a;this.durationSecs=b;this.context=c};
fw=function(a,b){this.g=a;this.A=void 0===b?null:b;this.l=(0,window.parseInt)(this.g["Sequence-Number"],10)||0;this.ingestionTime=((0,window.parseInt)(this.g["Ingestion-Walltime-Us"],10)||0)/1E6;this.B=(((0,window.parseInt)(this.g["First-Frame-Time-Us"],10)||0)+((0,window.parseInt)(this.g["First-Frame-Uncertainty-Us"],10)||0))/1E6;this.H=((0,window.parseInt)(this.g["Target-Duration-Us"],10)||0)/1E6;this.F="T"==this.g["Overlayed-With-Slate"];this.o="T"==this.g["Stream-Finished"];this.C="T"==this.g.Streamable};
gw=function(a,b,c,d,e){this.l=a||0;this.pitch=b||0;this.yaw=c||0;this.Ui=d||0;this.g=e;e.getUint32(4)};
hw=function(a){var b={};a=a.split("\r\n");for(var c=0;c<a.length;c++){if(0==a[c].length)return b;var d=a[c].match(/([^:]+):\s+([\S\s]+)/);null!=d&&(b[d[1]]=d[2])}return null};
jw=function(a,b,c,d){d=void 0===d?!1:d;var e=iw(a,0,1836019558);if(!e)return null;var f=iw(a,e.dataOffset,1835427940),k=iw(a,e.dataOffset,1953653094),l=iw(a,e.dataOffset,1886614376);if(!f||!k)return null;var m=iw(a,k.dataOffset,1952868452),n=iw(a,k.dataOffset,1953658222),p=iw(a,k.dataOffset,1952867444);if(!m||!n||!p)return null;var u=iw(a,k.dataOffset,1935763823),v=iw(a,k.dataOffset,1935763834),C=0;if(u){C=Xv(u);var D=Xv(u);if(0!=C||1!=D)return null;C=Xv(u)}D=iw(a,k.dataOffset,1935828848);k=iw(a,
k.dataOffset,1936158820);var E=Xv(m),ea=Xv(m),fa=E&2,Za=E&1?Zv(m):0,Ga=fa?Xv(m):0,Ja=E&8?Xv(m):0,ri=E&16?Xv(m):0,Qe=E&32?Xv(m):0;E=Xv(n);var Re=E&1,dh=E&4,iv=E&256;m=E&512;var jv=E&1024,Bm=E&2048;E=Xv(n);var jq=Re?Xv(n):0,kv=dh?Xv(n):0;Re=[];for(var lv=[],Cm=[],oe=[],mv=0,xd=0,kq=0;kq<E;kq++){var R7=iv?Xv(n):Ja;m&&Re.push(Xv(n));var Dm=Qe;dh&&0==kq?Dm=kv:jv&&(Dm=Xv(n));lv.push(Dm);Dm=Bm?Xv(n):0;0==kq&&(mv=Dm);Cm.push(xd+Dm);oe.push(kq);xd+=R7}1<=Math.abs(xd-b)&&c({flaw:"segDurMismatch",dts:xd.toFixed(),
seg:b.toFixed()});g.jb(oe,function(a,b){return Cm[a]-Cm[b]});
c=[];for(xd=0;xd<E;xd++)c[oe[xd]]=xd;xd=fa?4:0;Qe=16*E;dh=68+xd+p.size+Qe+(u?u.size:0)+(v?v.size:0)+(D?D.size:0)+(k?k.size:0)+(l?l.size:0);n=dh-e.size;Ja=new aw(dh+(d?0:e.offset));!d&&e.offset&&Ja.Nj(a,0,e.offset);bw(Ja,dh);bw(Ja,1836019558);cw(Ja,f);bw(Ja,dh-24-(l?l.size:0));bw(Ja,1953653094);bw(Ja,16+xd);bw(Ja,1952868452);bw(Ja,131072|(fa?2:0));bw(Ja,ea);fa&&bw(Ja,Ga);cw(Ja,p);bw(Ja,20+Qe);bw(Ja,1953658222);bw(Ja,16781057);bw(Ja,E);bw(Ja,Za+jq+n);for(a=xd=0;a<E;a++)e=c[a],d=Math.round(b*e/E),e=
Math.round(b*(e+1)/E)-d,d=d-xd+mv,bw(Ja,e),bw(Ja,m?Re[a]:ri),bw(Ja,lv[a]),bw(Ja,d),xd+=e;u&&(bw(Ja,u.size),bw(Ja,1935763823),bw(Ja,0),bw(Ja,1),bw(Ja,C+n));v&&cw(Ja,v);D&&cw(Ja,D);k&&cw(Ja,k);l&&cw(Ja,l);return Ja.data.buffer};
kw=function(a,b){var c=iw(a.data,a.dataOffset,1952868452),d=iw(a.data,a.dataOffset,1953658222),e=Xv(c);Xv(c);e&2&&Xv(c);c=e&8?Xv(c):0;var f=Xv(d),k=f&1;e=f&4;var l=f&256,m=f&512,n=f&1024;f&=2048;var p=Yv(d);k&&Xv(d);e&&Xv(d);for(var u=k=0;u<p;u++){var v=l?Xv(d):c;m&&Xv(d);e&&0==u||!n||Xv(d);f&&Xv(d);k+=v}return k/b};
nw=function(a){a=new window.DataView(a.buffer,a.byteOffset,a.byteLength);return(a=lw(a,1836476516))?mw(a):window.NaN};
ow=function(a){var b=lw(a,1937011556);if(!b)return null;b=iw(a,b.dataOffset+8,1635148593);if(!b)return null;var c=iw(a,b.dataOffset+78,1936995172),d=iw(a,b.dataOffset+78,1937126244);if(!d)return null;b=null;if(c)switch(c.skip(4),b=c.data.getUint8(c.offset+c.g),c.g+=1,b){default:b=0;break;case 1:b=2;break;case 2:b=1;break;case 3:b=255}var e=c=null,f=null;if(d=iw(a,d.dataOffset,1886547818)){var k=iw(a,d.dataOffset,1886546020),l=iw(a,d.dataOffset,2037673328);if(!l&&(l=iw(a,d.dataOffset,1836279920),!l))return null;
k&&(c=Xv(k)/65536,f=Xv(k)/65536,e=Xv(k)/65536);a=new window.DataView(l.data.buffer,l.dataOffset,l.size-8);return new gw(b,c,f,e,a)}return null};
iw=function(a,b,c){for(;pw(a,b);){var d=qw(a,b);if(d.type==c)return d;b+=d.size}return null};
lw=function(a,b){for(var c=0;pw(a,c);){var d=qw(a,c);if(d.type==b)return d;c=rw(d.type)?c+8:c+d.size}return null};
tw=function(a,b){if(a.data.getUint8(a.dataOffset)){var c=a.data,d=a.dataOffset+4;c.setUint32(d,Math.floor(b/4294967296));c.setUint32(d+4,b&4294967295)}else a.data.setUint32(a.dataOffset+4,b)};
uw=function(a){if(a.data.getUint8(a.dataOffset)){var b=a.data;a=a.dataOffset+4;return 4294967296*b.getUint32(a)+b.getUint32(a+4)}return a.data.getUint32(a.dataOffset+4)};
qw=function(a,b){var c=a.getUint32(b),d=a.getUint32(b+4);return new Wv(a,b,c,d)};
mw=function(a){var b=a.data.getUint8(a.dataOffset)?20:12;return a.data.getUint32(a.dataOffset+b)};
vw=function(a){return a.data.getUint32(a.dataOffset+8)};
ww=function(a){var b=a.data.getUint8(a.dataOffset);a.data.getUint16(a.dataOffset+(0==b?22:30));return a.data.getUint32(a.dataOffset+(0==b?28:36))};
pw=function(a,b){if(8>a.byteLength-b)return!1;var c=a.getUint32(b);if(8>c||a.byteLength-b<c)return!1;c=a.getUint32(b+4);if(1635148593==c||1635148611==c||1937126244==c||1936995172==c)return!0;for(c=4;8>c;c++){var d=a.getInt8(b+c);if(97>d||122<d)return!1}return!0};
rw=function(a){return 1836019558==a||1836019574==a||1835297121==a||1835626086==a||1937007212==a||1953653094==a||1953653099==a};
xw=function(a){return(a=iw(a,0,1836019558))?a.offset+a.size:null};
yw=function(a,b){for(var c=iw(a,0,b);c;){var d=c;d.type=1936419184;d.data.setUint32(d.offset+4,1936419184);c=iw(a,c.offset+c.size,b)}};
zw=function(a,b){for(var c=[],d=b.dataOffset,e=b.offset+b.size;d<e&&pw(a,d);){var f=qw(a,d);c.push(f);d+=f.size}return c};
Aw=function(a){for(var b=0,c=[];pw(a,b);){var d=qw(a,b);1886614376==d.type&&c.push(d);b=rw(d.type)?b+8:b+d.size}return c};
g.Bw=function(a,b){this.start=a;this.end=b;this.length=b-a+1};
Cw=function(a){a=a.split("-");return 2==a.length&&(a=new g.Bw((0,window.parseInt)(a[0],10),(0,window.parseInt)(a[1],10)),!(0,window.isNaN)(a.start)&&!(0,window.isNaN)(a.end)&&!(0,window.isNaN)(a.length)&&0<a.length)?a:null};
Dw=function(a,b){return new g.Bw(a,a+b-1)};
Fw=function(a,b,c,d,e,f,k,l,m){this.g=b;this.range=c;this.type=a;this.na=0<=d?d:-1;this.startTime=e||0;this.duration=f||0;this.l=k||0;this.Ja=0<=l?l:this.range?this.range.length:window.NaN;this.C=!!m;this.range?(this.o=this.l+this.Ja==this.range.length,this.B=this.startTime+this.duration*this.l/this.range.length,this.F=this.duration*this.Ja/this.range.length,this.A=this.B+this.F):(this.o=0!=this.Ja,Ew(this));this.H=[]};
Ew=function(a){a.B=a.startTime;a.F=a.duration;a.A=a.B+a.F};
Gw=function(a,b,c){var d=!(!b||b.g!=a.g||b.type!=a.type||b.na!=a.na);return c?d&&(a.range&&b.range?b.range.end==a.range.end:b.range==a.range)&&b.l+b.Ja==a.l+a.Ja:d};
Hw=function(a){return 1==a.type||2==a.type};
Iw=function(a,b,c){return c||a.g==b.g?a.range&&b.range?a.range.start+a.l+a.Ja==b.range.start+b.l:a.na==b.na?a.l+a.Ja==b.l:a.na+1==b.na&&0==b.l&&a.o:!1};
Jw=function(a,b){return Iw(a,b)||1E-6>=Math.abs(a.A-b.B)||a.na+1==b.na&&0==b.l&&a.o?!0:!1};
Kw=function(a){1==a.length||(0,g.Fn)(a,function(a){return!!a.range});
for(var b=1;b<a.length;b++);b=a[a.length-1];return new g.Bw(a[0].range.start+a[0].l,b.range.start+b.l+b.Ja-1)};
Mw=function(a){var b="";g.Rb(Lw(a),function(a,d){b+=d+"="+a+","});
return b.slice(0,-1)};
Lw=function(a){var b={};b.itag=Cu(a.g.info);b.seg=String(a.na);a.range&&(b.range=""+(a.range.start+a.l)+"-"+(a.range.start+a.l+a.Ja-1));b.time=""+a.B.toFixed(1)+"-"+(a.B+a.F).toFixed(1);b.off=String(a.l);b.len=String(a.Ja);a.o&&(b.end="1");a.C&&(b.eos="1");return b};
Nw=function(a,b,c,d){a=new Fw(a.type,a.g,a.range,a.na,a.startTime,a.duration,b,c,d&&a.C);a.o=d;return a};
Ow=function(a,b){a.na=b.na;if(a.startTime!=b.startTime||a.duration!=b.duration)a.startTime=b.startTime,a.duration=b.duration,Ew(a)};
Pw=function(a,b){this.l=a;this.g=0;this.o=b||0};
Qw=function(a){return a.g>=a.l.byteLength};
Vw=function(a,b){var c=new Pw(b);if(!Rw(c,[408125543,374648427,174,224]))return!1;c=Sw(c);if(Tw(c,a)){for(var d=0;a;)a>>>=8,d++;var e=c.o+c.g-d;d=Uw(c,!0)+d-1;var f;f||(f=Math.ceil(Math.log(d+2)/Math.log(2)/7));var k=1<<8-f;for(c=[];c.length<f-1;)c.unshift(d%256),d=Math.floor(d/256);c.unshift(d|k);b.setUint8(e,236);for(f=0;f<c.length;f++)b.setUint8(e+1+f,c[f]);return!0}return!1};
Xw=function(a){Ww(new Pw(a));Vw(30320,a)&&Vw(21432,a)};
bx=function(a){var b=new Pw(a);Ww(b);if(Rw(b,[408125543,374648427,174,224]))b=Sw(b);else return null;for(var c=a=null;!Qw(b);){var d=Uw(b,!1);if(21432==d)switch(Yw(b)){default:a=0;break;case 1:a=1;break;case 3:a=2;break;case 15:a=255}else 30320==d?c=Sw(b):Zw(b)}if(!c)return null;for(var e,f=d=b=null;!Qw(c);)switch(Uw(c,!1)){case 30321:if(3!=Yw(c))return null;break;case 30324:b=$w(c);break;case 30323:f=$w(c);break;case 30325:d=$w(c);break;case 30322:e=Uw(c,!0);e=ax(c,e);e=new window.DataView(e.buffer,
e.byteOffset,e.byteLength);break;default:Zw(c)}return e?new gw(a,b,f,d,e):null};
Sw=function(a){var b=Uw(a,!0),c=a.l.byteOffset+a.g;c=new window.DataView(a.l.buffer,c,Math.min(b,a.l.buffer.byteLength-c));c=new Pw(c,a.o+a.g);a.g+=b;return c};
Yw=function(a){for(var b=Uw(a,!0),c=cx(a),d=1;d<b;d++)c=256*c+cx(a);return c};
$w=function(a){var b=Uw(a,!0),c=0;4==b?c=a.l.getFloat32(a.g):8==b&&(c=a.l.getFloat64(a.g));a.g+=b;return c};
Zw=function(a){var b=Uw(a,!0);a.g+=b};
Ww=function(a){var b=a.g;a.g=0;var c=!1;Tw(a,440786851)&&(a.g=0,Tw(a,408125543)&&(c=!0));a.g=b;return c};
dx=function(a){var b=a.g;a.g=0;var c=1E6;Rw(a,[408125543,357149030,2807729])&&(c=Yw(a));a.g=b;return c};
fx=function(a,b){var c=a.g;a.g=0;if(!ex(a)||!Tw(a,160))return a.g=c,window.NaN;Uw(a,!0);var d=a.g;if(!Tw(a,161))return a.g=c,window.NaN;Uw(a,!0);cx(a);var e=cx(a)<<8|cx(a);a.g=d;if(!Tw(a,155))return a.g=c,window.NaN;d=Yw(a);a.g=c;return(e+d)*b/1E9};
ex=function(a){a:{if(Ww(a)){if(!Tw(a,408125543)){var b=!1;break a}Uw(a,!0)}b=!0}if(!b||!Tw(a,524531317))return!1;Uw(a,!0);return!0};
Rw=function(a,b){for(var c=0;c<b.length;c++){if(!Tw(a,b[c]))return!1;c!=b.length-1&&Uw(a,!0)}return!0};
Tw=function(a,b){if(Qw(a))return!1;for(;Uw(a,!1)!=b;)if(Zw(a),Qw(a))return!1;return!0};
Uw=function(a,b){var c=cx(a);if(1==c){for(var d=c=0;7>d;d++)c=256*c+cx(a);return c}d=128;for(var e=0;6>e&&d>c;e++)c=256*c+cx(a),d*=128;return b?c-d:c};
cx=function(a){return a.l.getUint8(a.g++)};
ax=function(a,b){var c=new window.Uint8Array(a.l.buffer,a.l.byteOffset+a.g,b);a.g+=b;return c};
gx=function(a,b,c,d,e){this.info=a;this.g=b;this.range=c;this.l=null;this.o=d;this.pd=e};
hx=function(a){return a.range?new window.DataView(a.g,a.range.start,a.range.length):new window.DataView(a.g)};
ix=function(a,b){b=Math.min(b,a.info.Ja);var c=new Fw(a.info.type,a.info.g,a.info.range,a.info.na,a.info.startTime,a.info.duration,a.info.l,b,!1);c.o=!1;var d=Dw(a.range.start,b);c=new gx(c,a.g,d,a.o,a.pd);var e=new Fw(a.info.type,a.info.g,a.info.range,a.info.na,a.info.startTime,a.info.duration,a.info.l+b,a.info.Ja-b,a.info.C);e.o=a.info.o;d=new g.Bw(d.end+1,a.range.end);d=new gx(e,a.g,d,a.o,!1);return[c,d]};
jx=function(a,b){if(Gu(a.info.g.info)){for(var c=a.info.g.g,d=new window.DataView(a.g),e=window.NaN,f=window.NaN,k=0;pw(d,k);){var l=qw(d,k);(0,window.isNaN)(e)&&(1936286840==l.type?e=vw(l):1836476516==l.type&&(e=mw(l)));if(1952867444==l.type){!e&&c&&(e=nw(c));var m=uw(l);(0,window.isNaN)(f)&&(f=Math.round(b*e)-m);tw(l,m+f)}k=rw(l.type)?k+8:k+l.size}return!0}c=new Pw(new window.DataView(a.g));e=a.pd?c:new Pw(new window.DataView(a.info.g.g.buffer));d=b;f=dx(e);e=c.g;c.g=0;if(ex(c)&&Tw(c,231))if(k=
Uw(c,!0),d=Math.floor(1E9*d/f),Math.ceil(Math.log(d)/Math.log(2)/8)>k)c=!1;else{for(f=k-1;0<=f;f--)c.l.setUint8(c.g+f,d&255),d>>>=8;c.g=e;c=!0}else c=!1;return c};
kx=function(a){var b;if(Gu(a.info.g.info)){for(var c=b=0,d=new window.DataView(a.g);pw(d,b);){var e=qw(d,b);if(1936286840==e.type){var f=vw(e),k=ww(e);c+=k/f}b=rw(e.type)?b+8:b+e.size}b=c||window.NaN;if(!(0<=b))a:{b=a.info.g.g;c=0;d=new window.DataView(a.g);for(e=0;pw(d,c);){f=qw(d,c);if(1836476516==f.type)var l=mw(f);else if(1836019558==f.type){!l&&b&&(l=nw(b));if(!l){b=window.NaN;break a}k=iw(f.data,f.dataOffset,1953653094);e+=kw(k,l)}c=rw(f.type)?c+8:c+f.size}b=e||window.NaN}}else l=new Pw(new window.DataView(a.g)),
b=a.pd?l:new Pw(new window.DataView(a.info.g.g.buffer)),b=fx(l,dx(b));return b||a.info.F};
lx=function(a){return Gu(a.info.g.info)?a.l?a.l.F&&!!iw(new window.DataView(a.g),0,1718909296):!1:Ww(new Pw(new window.DataView(a.g)))};
mx=function(){var a=g.z("yt.player.utils.videoElement_");a||(a=g.yd("VIDEO"),g.y("yt.player.utils.videoElement_",a,void 0));return a};
px=function(a){try{var b=mx();if(b.canPlayType){a=a?nx:ox;for(var c=0;c<a.length;c++)if(b.canPlayType(a[c]))return null}return"fmt.noneavailable"}catch(d){return"html5.missingapi"}};
qx=function(){var a=mx();return!!a.webkitSetPresentationMode&&g.Aa(a.webkitSupportsPresentationMode)&&!!a.webkitSupportsPresentationMode("picture-in-picture")};
rx=function(){var a=mx();try{var b=a.muted;a.muted=!b;return a.muted!=b}catch(c){}return!1};
sx=function(a){a=g.vd("DIV",{"class":a});window.document.body.appendChild(a);var b="none"==g.qh(a,"display");g.Dd(a);return b};
tx=function(){this.length=1};
ux=function(){this.buffered=new tx};
vx=function(a,b){this.l=a;this.o=b;this.A=0;Object.defineProperty(this,"timestampOffset",{get:this.iJ,set:this.mJ});Object.defineProperty(this,"buffered",{get:this.gJ})};
wx=function(){this.length=0};
xx=function(a){this.activeSourceBuffers=this.sourceBuffers=[];this.g=a;this.l=window.NaN;this.o=0;Object.defineProperty(this,"duration",{get:this.hJ,set:this.lJ});Object.defineProperty(this,"readyState",{get:this.jJ});this.g.addEventListener("webkitsourceclose",(0,g.A)(this.kJ,this),!0)};
yx=function(a){return window.MediaSource?new window.MediaSource:window.WebKitMediaSource?new window.WebKitMediaSource:new xx(a)};
zx=function(a,b){g.J.call(this);this.F=new g.Zs(this);g.K(this,this.F);this.l=this.g=null;this.o=a;var c=this.o;c=c.GB?c.g.webkitMediaSourceURL:window.URL.createObjectURL(c);this.B=new Lu(c,!0);this.H=this.C=this.A=null;this.I=b;$s(this.F,this.o,["sourceopen","webkitsourceopen"],this.L);$s(this.F,this.o,["sourceclose","webkitsourceclose"],this.K)};
Ax=function(a){a.H||(a.H=new window.Promise((0,g.A)(function(a){this.A=a},a)));
return a.H};
Bx=function(a){try{return"open"==a.o.readyState}catch(b){return!1}};
Cx=function(a){try{return"closed"==a.o.readyState}catch(b){return!0}};
Dx=function(a){return!!(a.g&&a.g.updating||a.l&&a.l.updating)};
Ex=function(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported)};
Fx=function(a){return a.g?!!a.g.appendBuffer:Ex()};
Hx=function(a){if(/opus/.test(a)&&(g.Gx&&!g.cp("38")||g.Gx&&Kr("crkey")))return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(/webm/.test(a)&&!Rr())return!1;'audio/mp4; codecs="mp4a.40.2"'==a&&(a='video/mp4; codecs="avc1.4d401f"');return!!mx().canPlayType(a)};
g.Ix=function(){this.kj=this.jj=!1;this.qf=2;this.A=20971520;this.B=8388608;this.l=window.NaN;this.aa=3145728;this.I=62914560;this.X=10485760;this.eg=this.Ta=0;this.C=window.NaN;this.wa=0;this.Aj=this.Bc=this.zv=2;this.fa=25;this.K=2097152;this.qj=1048576;this.U=!1;this.F=1800;this.Ma=5;this.Ua=10;this.L=30;this.Ab=1;this.g=1.15;this.o=1.05;this.fg=8;this.gj=!0;var a;!(a=Kr("xboxone"))&&(a=Sr())&&(a=/WebKit\/([0-9]+)/.exec(g.Pb),a=!(a&&602<=(0,window.parseInt)(a[1],10)));this.JI=a||Mr();this.Ka=15;
this.bb=!1;this.VI=this.ia=this.rk=!0;this.Nh=this.H=!1;this.Uj=.8;this.Za=this.nj=!1;this.oj=!0;this.ya=this.xd=!1;this.nf=25;this.jv=!0;this.fJ=this.pj=!1;this.ba=6;this.Le=this.V=!1;this.Mb=.5;this.R=0;this.Xb=this.ma=!1;this.Ra=0;this.Tc=this.fj=this.Sc=!1;this.Ya=0;this.rb=this.nb=this.lf=this.gd=!1;this.hv=.5;this.zb=2;this.Xt=.8;this.Yt=.2;this.Or=this.mf=this.ej=this.wd=!1;this.Ga=15;this.Ha=1;this.bk=this.Ec=this.hj=this.Wa=this.ud=!1;this.pf=0;this.P=this.mj=this.Ie=this.sa=this.zk=this.Je=
this.Gc=this.lj=this.ij=!1};
Jx=function(a,b){1080<b.video.g&&!a.jj&&(a.A=36700160,a.B=5242880,a.aa=10485760,a.K=4194304,a.jj=!0);2160<b.video.g&&!a.kj&&(a.A=104857600,a.C=13107200,a.kj=!0);a.qj=Math.min(a.K,5*b.g)};
Kx=function(){this.g=this.Ge=this.l=this.o=0};
Lx=function(a,b){a[b]||(a[b]=new Kx);return a[b]};
g.Mx=function(a){this.A=a;this.B=this.l=this.C="";this.g={};this.o=""};
Ox=function(a){Nx(a);return a.B};
Px=function(a){Nx(a);return Tb(a.g,function(a){return null!==a})};
Rx=function(a){Nx(a);if("/videoplayback"!=a.l){var b=a.clone();b.set("playerfallback","1");return b}var c=a.wb();b=new g.eo(c);if(Qx){var d=a.get("fvip");a=(0,window.decodeURIComponent)(a.get("mn")||"").split(",");if(d&&a&&1<a.length&&a[1])return c=b.g.replace(/^[^.]*/,""),g.go(b,"r"+d+"---"+a[1]+c),b=new g.Mx(b.toString()),b.set("fallback_count","1"),b}d=b.g.match("\\.a1\\.googlevideo\\.com$");b.g.match("\\.googlevideo\\.com$")?(g.go(b,"redirector.googlevideo.com"),c=b.toString()):b.g.match("r[1-9].*\\.c\\.youtube\\.com$")?
(g.go(b,"www.youtube.com"),c=b.toString()):c=Av(c);b=new g.Mx(c);b.set("cmo=pf","1");d&&b.set("cmo=td","a1.googlevideo.com");return b};
Nx=function(a){if(a.A){if(!qv(a.A))throw Error("Untrusted URL: "+a.A);var b=g.po(a.A);a.C=b.A;a.B=b.g+(null!=b.B?":"+b.B:"");var c=b.l;if(0==c.indexOf("/videoplayback"))a.l="/videoplayback",c=c.substr(14);else if(0==c.indexOf("/api/manifest/")){var d=c.indexOf("/",14);0<d?(a.l=c.substr(0,d),c=c.substr(d+1)):(a.l=c,c="")}else a.l=c,c="";d=a.g;a.g=Sx(c);g.Ia(a.g,Tx(b.I()));g.Ia(a.g,d);"index.m3u8"==a.g.file&&(delete a.g.file,a.l+="/file/index.m3u8");a.A="";a.o=""}};
Ux=function(a){Nx(a);var b=a.C+(a.C?"://":"//")+a.B+a.l;if(Px(a)){var c=[];g.Rb(a.g,function(a,b){null!==a&&c.push(b+"="+a)});
b+="?"+c.join("&")}return b};
Sx=function(a){a=a.split("/");var b=0;a[0]||b++;for(var c={};b<a.length;b+=2)a[b]&&Vx(c,a[b],a[b+1]);return c};
Tx=function(a){a=a.split("&");for(var b={},c=0;c<a.length;c++){var d=a[c],e=d.indexOf("=");0<e?Vx(b,d.substr(0,e),d.substr(e+1)):d&&(b[d]="")}return b};
Vx=function(a,b,c){if("cmo"==b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c};
Wx=function(a){this.g=a;this.l={};this.o=""};
Xx=function(a,b){var c=b.indexOf("?");if(0<c){var d=Tx(b.substr(c+1));g.Rb(d,function(a,b){this.set(b,a)},a);
b=b.substr(0,c)}c=Sx(b);g.Rb(c,function(a,b){this.set(b,a)},a)};
Yx=function(a){var b=a.g.wb(),c=[];g.Rb(a.l,function(a,b){c.push(b+"="+a)});
if(!c.length)return b;var d=c.join("&");a=Px(a.g)?"&":"?";return b+a+d};
Zx=function(a,b){var c=new g.Mx(b),d=c.get("req_id");d&&a.set("req_id",d);g.Rb(a.l,function(a,b){c.set(b,null)});
return c};
$x=function(a){this.B=a.clone();this.o=a;this.l=null;this.A=this.g=0};
by=function(a,b){var c=Lx(b,Ox(a.o));if(2<=c.Ge||1<=c.g){var d=ay(a);d=Lx(b,Ox(d));if(d.Ge+d.g<=c.Ge+c.g)return!0}return!1};
g.cy=function(a,b){var c=b?ay(a):a.o;return new Wx(c)};
ay=function(a){a.l||(a.l=Rx(a.B));return a.l};
dy=function(a){return 1<a.g?a.A+1E3*Math.pow(1.6,a.g-1)<g.It():!0};
g.ey=function(a,b,c){b.g===a.o&&(a.o=Zx(b,c));b.g===a.l&&(a.l=Zx(b,c))};
fy=function(a,b){this.g=a[0].g.A;this.o=b||"";this.ra=a;this.range=this.ra[0].range&&0<this.ra[0].Ja?Kw(this.ra):null;this.l=window.NaN;this.A=this.requestId=null};
gy=function(a){return 4==a.ra[a.ra.length-1].type};
g.hy=function(a,b,c){/http[s]?:\/\//.test(a.o)?b=new Wx(new g.Mx(a.o)):(b=null===a.A?by(a.g,b):a.A,b=g.cy(a.g,b),a.o&&Xx(b,a.o));(c=c||a.range)&&b.set("range",c.toString());a.requestId&&b.set("req_id",a.requestId);(0,window.isNaN)(a.l)||b.set("headm",a.l.toString());return b};
iy=function(a){if(a.range)return a.range.length;a=a.ra[0];return Math.round(a.F*a.g.info.g)};
jy=function(a,b,c){return a.range?new g.Bw(a.range.start+b,a.range.end):Dw(b,c)};
ky=function(a,b,c){this.index=null;this.info=b;this.initRange=c||null;this.g=null;this.C=this.F=!1;this.A=new $x(a);this.o=null};
ly=function(a,b){a.info&&a.info.video&&4==a.info.video.projectionType&&!a.o&&(Gu(a.info)?a.o=ow(b):2==a.info.containerType&&(a.o=bx(b)))};
my=function(a,b,c,d,e,f){f=void 0===f?0:f;ky.call(this,a,b,d);this.index=e||new g.Uv;this.B=f;this.I=c;this.H=!0;if(this.l=!c)this.F=!0};
ny=function(a,b,c){this.segments=[];this.l=a;this.o=void 0===b?0:b;this.g=void 0===c?!1:c};
py=function(a,b,c){b=oy(a,b);return 0<=b&&(c||!a.segments[b].g)};
oy=function(a,b){return g.gb(a.segments,{na:b},function(a,b){return a.na-b.na})};
qy=function(a,b,c){return new Tv(b,c.startTime-(c.na-b)*a.l,a.l,0,"sq/"+b,void 0,void 0,!0)};
ry=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?14400:e;my.call(this,a,b,"",void 0,void 0,c);this.index=new ny(c||0,e,d)};
sy=function(a,b,c,d,e){this.na=a;this.Pd=b;this.durationSecs=c;this.g=d||window.NaN;this.l=e||window.NaN};
ty=function(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName==c)){var d=a.getAttribute(b);if(d)return d}return""};
uy=function(a,b){for(var c=a;c;c=c.parentNode){var d=c.getElementsByTagName(b);if(0<d.length)return d[0]}return null};
vy=function(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*(0,window.parseFloat)(b[2]||0)+60*(0,window.parseFloat)(b[4]||0)+(0,window.parseFloat)(b[6]||0):(0,window.parseFloat)(a)};
wy=function(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/)?a+"Z":a};
yy=function(){this.g=[];this.l=null;this.B=0;this.A=[];this.o=!1;this.C=""};
zy=function(a){var b=a.A;a.A=[];return b};
Ay=function(){this.A=[];this.g=null;this.l={};this.o={}};
Ey=function(a,b,c){var d=[];b=g.q(b.getElementsByTagName("SegmentTimeline"));for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=e.parentNode.parentNode,k=null;"Period"==f.nodeName?k=By(a):"AdaptationSet"==f.nodeName?k=Cy(a,f.attributes.id?f.attributes.id.value:f.attributes.mimetype.value):"Representation"==f.nodeName&&(k=Dy(a,f.attributes.id.value));if(null==k)return;k.update(e,c);bb(d,zy(k))}kb(d,function(a){return a.Pd});
bb(a.A,d)};
Fy=function(a){a.g&&(a.g.g=[]);g.Rb(a.l,function(a){a.g=[]});
g.Rb(a.o,function(a){a.g=[]})};
By=function(a){a.g||(a.g=new yy);return a.g};
Cy=function(a,b){a.l[b]||(a.l[b]=new yy);return a.l[b]};
Dy=function(a,b){a.o[b]||(a.o[b]=new yy);return a.o[b]};
g.Gy=function(){this.va=0;this.g=new window.Float64Array(128);this.l=new window.Float64Array(128);this.A=1;this.o=!1};
Hy=function(a){if(a.g.length<a.va+1){var b=2*a.g.length;b+=2;var c=a.g;a.g=new window.Float64Array(b+1);var d=a.l;a.l=new window.Float64Array(b+1);for(b=0;b<a.va+1;b++)a.g[b]=c[b],a.l[b]=d[b]}};
g.Iy=function(a,b,c,d,e,f){ky.call(this,a,b,c||void 0);this.indexRange=d;this.B=null;this.index=new g.Gy;this.l=e;this.lastModified=f};
Jy=function(a,b,c,d){for(var e=[];b<=a.index.Pb();b++){var f=a.index,k=b;f=Dw(f.Fk(k),k+1<f.va||f.o?f.g[k+1]-f.g[k]:-1);k=a.index.nd(b);var l=a.index.getDuration(b),m=Math.max(0,c-f.start),n=Math.min(f.end+1,c+d)-(f.start+m);e.push(new Fw(3,a,f,b,k,l,m,n,b==a.index.Pb()&&m+n==f.length));if(f.start+m+n>=c+d)break}return new fy(e)};
Ly=function(a,b){return Ky(function(a,b){return cs(a,b,4,1E3)},a,b)};
g.My=function(a){var b;a.responseType&&"text"!=a.responseType?"arraybuffer"==a.responseType&&(b=String.fromCharCode.apply(String,new window.Uint8Array(a.response))):b=a.responseText;return!b||2048<b.length?"":0==b.indexOf("https://")?b:""};
Ky=function(a,b,c){return a(b,c).then(function(b){var d=g.My(b);return d?Ky(a,d,c):b})};
Oy=function(a){a=a.split("");Ny.yM(a,2);Ny.EE(a,60);Ny.EE(a,51);Ny.yM(a,3);Ny.EE(a,52);Ny.d9(a,78);Ny.EE(a,22);return a.join("")};
Py=function(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;g.R.call(this);this.R=this.duration=0;this.isLive=this.A=!1;this.K=g.It();this.F=window.Infinity;this.g={};this.V=a||"";this.C=this.P=0;this.B=null;this.fa=!!b&&b.g("html5_live_nonzero_first_segment_start_time");this.l=!1;this.L=[];this.ia=!!b&&b.g("html5_live_self_init_segments");this.o=null;this.ma=c;this.ba=!b||!b.g("html5_manifest_without_credentials");this.H=0;this.U=!!b&&b.g("disable_html5_manifest_namespace_redux");
this.aa="";this.I=window.NaN;this.X=b&&b.g("disable_html5_duration_caching")?window.Infinity:10};
Qy=function(a){return Tb(a.g,function(a){return!!a.info.Ob})};
g.Ry=function(a){return Tb(a.g,function(a){return a.info.mimeType.includes("vtt")})};
Sy=function(a){return g.Ub(a.g,function(a){return a.info.video?a.Io():!0})};
Vy=function(a,b,c,d,e){c=void 0===c?0:c;return(void 0===d?0:d)?Ty(a,b,e):Uy(a,b,c,e)};
Uy=function(a,b,c,d){c=void 0===c?0:c;var e=new Py("",d,!1);e.duration=c||0;(0,g.G)(a,function(a){var c=Wy(a,b,e.duration),d=Cw(a.init),f=Cw(a.index),n=(0,window.parseInt)(a.clen,10),p=Xy(a.url,a.s);a=(0,window.parseInt)(a.lmt,10);p&&(c=new g.Iy(p,c,d,f,n,a),e.g[c.info.id]=c)});
return e};
Ty=function(a,b,c){var d=new Py("",c,!0);(0,g.G)(a,function(a){var e=Wy(a,b),k=Xy(a.url,a.s),l=(0,window.parseInt)(a.target_duration_sec,10);a=(0,window.parseInt)(a.max_dvr_duration_sec,10)||14400;k&&(e=new ry(k,e,l,c&&c.g("html5_manifestless_always"),a),d.g[e.info.id]=e)});
d.A=!0;d.l=!0;d.isLive=!0;return d};
Wy=function(a,b,c){c=void 0===c?0:c;var d=a.type,e=a.itag,f=Yy(a),k=null;Iu(d)&&(k=(a.size||"640x360").split("x"),k=new xu(+k[0],+k[1],+a.fps,+a.projection_type,+a.stereo_layout,void 0,!!a.isAccelerated,a.quality_label,a.eotf,a.primaries,!!a.isAcceleratedUiEnabled),d=Zy(d,k));var l=null,m=null;if(Hu(d)){l=0;if("258"==e||"261"==e)l=6;l=new tu(void 0,l,+a.spatial_audio_type);a.name&&(m=new uu(a.name,a.audio_track_id,"1"==a.isDefault))}e=(0,window.parseInt)(a.bitrate,10)/8;var n=(0,window.parseInt)(a.clen,
10);c=c&&n?n/c:0;var p=null;b&&a.drm_families&&(p={},(0,g.G)(a.drm_families.split(","),function(a){p[a]=b[a]}));
return new Du(f,d,l,k,m,p,e,c)};
Yy=function(a){var b=a.itag;a.xtags&&(b=a.itag+";"+a.xtags);return b};
Xy=function(a,b){b=void 0===b?"":b;var c=new g.Mx(a);a.match(/https:\/\/yt.akamaized.net/)||c.set("alr","yes");b&&c.set("signature",Oy(b));return c};
dz=function(a,b){var c=ty(b,"id");c=c.replace(":",";");"captions"==c&&(c=ty(b,"lang"));var d=ty(b,"mimeType"),e=ty(b,"codecs");d=e?d+'; codecs="'+e+'"':d;e=(0,window.parseInt)(ty(b,"bandwidth"),10)/8;var f=(0,window.parseInt)(uy(b,"BaseURL").getAttribute($y(a,"contentLength")),10);f=a.duration&&f?f/a.duration:0;var k=null;if(Iu(d)){k=(0,window.parseInt)(ty(b,"width"),10);var l=(0,window.parseInt)(ty(b,"height"),10),m=(0,window.parseInt)(ty(b,"frameRate"),10),n=az(ty(b,$y(a,"projectionType")));a:switch(ty(b,
$y(a,"stereoLayout"))){case "layout_left_right":var p=1;break a;case "layout_top_bottom":p=2;break a;default:p=0}k=new xu(k,l,m,n,p)}m=l=null;if(Hu(d))if(l=(0,window.parseInt)(ty(b,"audioSamplingRate"),10),m=(0,window.parseInt)(ty(b.getElementsByTagName("AudioChannelConfiguration")[0],"value"),10),n=bz(ty(b,$y(a,"spatialAudioType"))),l=new tu(l,m,n),m=ty(b,"lang")||"und",n=uy(b,"Role")){var u=ty(n,"value")||"";Zb(cz,u)?(n=m+"."+cz[u],p="main"==u,m=ty(b,$y(a,"langName"))||m+" - "+u,m=new uu(m,n,p)):
m=null}else m=null;p=null;if(n=uy(b,"ContentProtection"))if(g.Nr())if((p=n.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==p.value)for(p={},n=n.firstChild;null!=n;n=n.nextSibling)"yt:SystemURL"==n.nodeName&&(p[n.attributes.type.value]=n.textContent.trim());else p=null;else if((p=n.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==p.textContent)for(p={},n=n.firstChild;null!=n;n=n.nextSibling)"SystemURL"==n.localName&&"http://youtube.com/yt/2012/10/10"==n.namespaceURI&&(p[n.attributes.type.textContent]=
n.textContent.trim());else p=null;return new Du(c,d,l,k,m,p,e,f)};
az=function(a){switch(a){case "equirectangular":return 2;case "equirectangular_threed_top_bottom":return 3;case "mesh":return 4;case "rectangular":return 1;default:return 0}};
bz=function(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return 1;case "spatial_audio_type_ambisonics_quad":return 2;case "spatial_audio_type_foa_with_non_diegetic":return 3;default:return 0}};
ez=function(a,b){b=void 0===b?"":b;a.C=1;a.K=g.It();return g.Vf(Ly(b||a.V,{format:"RAW",method:"GET",withCredentials:a.ba}).then((0,g.A)(a.Yy,a)),(0,g.A)(a.az,a))};
fz=function(a,b){var c=new Py,d;for(d in a)c[d]=g.hc(a[d]);var e={},f=!1;g.Rb(a.g,function(a,c){if(a){var d=b(a,c);d?(e[c]=d,f=!0):e[c]=a}});
c.g=e;return f?c:null};
gz=function(a,b,c){var d=a.getAttribute("media"),e=null;c||(a=a.getAttribute("mediaRange"),null!=a&&(0<=(0,window.parseInt)(a.split("-")[1],10)?e=Cw(a):d=d+"?range="+a));return new Tv(b.na,b.Pd,b.durationSecs,b.g,d,e,b.l)};
hz=function(a){return a.isLive&&g.It()-a.K>=a.F};
iz=function(a){var b=a.F;(0,window.isFinite)(b)&&(hz(a)?a.us():(b=Math.max(0,a.K+b-g.It()),a.o||(a.o=new g.P(a.us,b,a),g.K(a,a.o)),a.o.start(b)))};
jz=function(a){a=a.g;for(var b in a){var c=a[b].index;if(c&&c.Vb())return c.Pb()+1}return 0};
kz=function(a){if(!(0,window.isNaN)(a.I))return a.I;var b=a.g,c;for(c in b){var d=b[c].index;if(d&&d.Vb()){b=0;for(c=d.Re();c<=d.Pb();c++)b+=d.getDuration(c);b/=d.eh();b=.5*Math.round(b/.5);d.eh()>a.X&&(a.I=b);return b}if(a.isLive&&(d=b[c],d.B))return d.B}return window.NaN};
lz=function(a,b){for(var c in a.g){var d=a.g[c].index;if(d&&d.Vb()){var e=d.Cf(b),f=d.Hn(e);if(f)return f+b-d.nd(e)}}return window.NaN};
mz=function(a,b){g.Rb(a.g,function(a){g.Rb(b,function(b,c){var d=a.A;d.o.set(c,b);d.B.set(c,b);d.l&&d.l.set(c,b)})})};
nz=function(a,b,c){var d=!1,e;for(e in a.g)if(!!a.g[e].info.video==c){var f=a.g[e].index;py(f,b.na)||(f.ts(b),d=!0)}return d};
oz=function(a,b,c){for(var d in a.g)if(!!a.g[d].info.video==c){var e=a.g[d].index,f=oy(e,b);0<=f&&e.segments.splice(f,1)}};
$y=function(a,b){return a.U?"yt:"+b:a.aa+":"+b};
Zy=function(a,b){if('video/webm; codecs="vp9.2"'!=a)return a;null===pz&&(pz=window.MediaSource&&window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16"')&&!window.MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99"'));pz&&(a='video/webm; codecs="vp09.02.51.10.01.'+("bt2020"==b.primaries?"09":"01")+"."+("smpte2084"==b.l?"16":"arib-std-b67"==b.l?"18":"01")+'"');return a};
qz=function(a){return g.Oa(Object.values(a.g),function(a){return a.info.Ob&&a.info.video?480<a.info.video.g&&"H"==a.info.l:!1})};
rz=function(a,b,c,d){this.flavor=a;this.g=b;this.A=c;this.o={};this.l=null;this.fairPlayCert="";this.B=!!d&&d.g("edge_nonprefixed_eme")};
tz=function(a){return a.B?!1:!a.l&&!!sz()&&"com.microsoft.playready"==a.g};
uz=function(a){return"com.microsoft.playready"==a.g};
wz=function(a){return vz&&"com.microsoft.playready"==a.g&&!!window.navigator.requestMediaKeySystemAccess};
xz=function(a){return!a.l&&!!sz()&&"com.apple.fps.1_0"==a.g};
sz=function(){var a=window.MSMediaKeys;Sr()&&!a&&(a=window.WebKitMediaKeys);return a&&a.isTypeSupported?a:null};
zz=function(a){return window.navigator.requestMediaKeySystemAccess?g.Gx?g.cp("45"):vz||g.pd?a.g("edge_nonprefixed_eme"):g.yz?g.cp("47"):!a.g("html5_disable_nonprefixed_eme_for_other"):!1};
Bz=function(a,b,c){g.J.call(this);this.l=[];this.g={};this.o={};this.B=null;this.A=b;this.I=c;this.C=!1;Az(this,a)};
Az=function(a,b){for(var c in b)for(var d=g.q(b[c]),e=d.next();!e.done;e=d.next()){e=e.value;if(!e.Ob)return;for(var f in e.Ob){if(!Cz[f])return;for(var k=g.q(Cz[f]),l=k.next();!l.done;l=k.next())l=l.value,a.g[l]=a.g[l]||new rz(f,l,e.Ob[f],a.A),a.o[f]=a.o[f]||{},a.o[f][e.mimeType]=!0}}Pr()?(a.l=["com.youtube.fairplay"],a.g["com.youtube.fairplay"]=new rz("fairplay","com.youtube.fairplay","",a.A),a.o.fairplay={'audio/mp4; codecs="avc1.4d4015"':!0,'video/mp4; codecs="mp4a.40.2"':!0}):a.l=Dz.filter(function(b){return a.g[b]?
!(a.I&&"widevine"==a.g[b].flavor):!1})};
Ez=function(a){if(!a.ga())if(0==a.l.length)a.B(null);else{var b=a.l[0],c=a.g[b],d={initDataTypes:["cenc","webm"],audioCapabilities:[],videoCapabilities:[]};uz(c)&&(d.initDataTypes=["keyids","cenc"]);for(var e in a.o[c.flavor]){var f=0==e.indexOf("audio/"),k=f?d.audioCapabilities:d.videoCapabilities;a.A.g("html5_widevine_robustness_strings")&&"widevine"==c.flavor&&!a.C?f?k.push({contentType:e,robustness:"SW_SECURE_CRYPTO"}):(k.push({contentType:e,robustness:"HW_DECODE_ALL"}),k.push({contentType:e,
robustness:"SW_SECURE_DECODE"})):k.push({contentType:e})}window.navigator.requestMediaKeySystemAccess(b,[d]).then(er((0,g.A)(a.H,a,c)),er((0,g.A)(a.F,a)))}};
Fz=function(a,b){function c(a){b.o[a.contentType]=!0}
if(uz(b)){var d=mx(),e;for(e in a.o[b.flavor])b.o[e]=!!d.canPlayType(e)}else d=b.l.getConfiguration(),d.audioCapabilities&&d.audioCapabilities.forEach(c),d.videoCapabilities&&d.videoCapabilities.forEach(c)};
Hz=function(a){if(sz()&&g.Lk)a.B(new rz("fairplay","com.apple.fps.1_0","",a.A));else{var b=Gz(),c=g.Oa(a.l,function(c){var d=a.g[c],f=!1,k=!1,l;for(l in a.o[d.flavor])b(l,c)&&(d.o[l]=!0,f=f||0==l.indexOf("audio/"),k=k||0==l.indexOf("video/"));return f&&k});
c=c?a.g[c]:null;a.l=[];a.B(c)}};
Gz=function(){var a=sz();if(a)return function(b,d){return a.isTypeSupported(d,b)};
var b=mx();return b&&(b.addKey||b.webkitAddKey)?(0,g.A)(b.canPlayType,b):function(){return!1}};
Iz=function(){this.l=2048;this.o=17;this.B=13E4;this.F=.5;this.C=!1;this.A=0;this.g=!1};
Jz=function(a){this.B=Math.exp(Math.log(.5)/a);this.o=this.A=0};
Kz=function(a,b,c,d){this.L=b;this.o=Math.round(a*b);this.B=Array(this.o);for(a=0;a<this.o;a++)this.B[a]=window.Infinity;this.K=Array(this.o);for(a=0;a<this.o;a++)this.K[a]=a;this.A=0;this.I=!1;this.H=!0;this.C=void 0===c?.5:c;this.F=void 0===d?0:d};
Lz=function(a,b){if(!a.I&&0==a.A)return 0;a.H&&(g.jb(a.K,function(b,d){return a.B[b]-a.B[d]}),a.H=!1);
return a.B[a.K[Math.round(b*((a.I?a.o:a.A)-1))]]||0};
Mz=function(){this.l=0;this.bandwidthEstimate=this.F=this.A=this.B=window.NaN;this.C=0;this.I=this.K=this.o=this.H=window.NaN;this.g=""};
Nz=function(a){this.policy=a;this.H=this.K=0;this.A=-1;this.F=this.o=g.It();this.C=new Kz(4,1,.6,.4);this.I=new Kz(10,1,.5,.4);this.l=a.C?new Jz(a.o):new Kz(a.o,20,.5,.4);this.B=new Kz(5,1,.25);this.g=new Kz(30,1,.5);a=g.ku("yt-player-bandwidth")||{};this.l.g(this.policy.F,0<a.byterate?a.byterate:this.policy.B);0<a.delay&&this.C.g(1,Math.min(+a.delay,2));0<a.stall&&this.I.g(1,+a.stall);0<a.init&&(this.F=Math.min(a.init,this.F));this.A=g.It()};
Oz=function(a,b,c){b=Math.max(b,.05);a.l.g(b,c/b);a.o=g.It()};
Qz=function(a,b,c){b=Math.max(b,a.policy.l);a.I.g(1,c/b);Pz(a)};
Rz=function(a){a=a.C.l();a=(0,window.isNaN)(a)?.5:a;return a=Math.min(a,5)};
Sz=function(a,b,c){(0,window.isNaN)(c)||(a.H+=c);(0,window.isNaN)(b)||(a.K+=b)};
Tz=function(a){return a.I.l()||0};
Uz=function(a){a=a.l.l();return 0<a?a:1};
Vz=function(a){var b=Uz(a);a.policy.g&&(b=1/(Tz(a)+1/b));a=a.B.l();return Math.max(b,0<a?a:1)};
Wz=function(a){var b={};b.delay=Rz(a);b.stall=Tz(a);b.byterate=Uz(a);b.init=a.F;return b};
Pz=function(a){-1<a.A&&3E4<g.It()-a.A&&(Wu(Wz(a)),a.A=g.It())};
Xz=function(a){return 4E3<=g.It()-a.o};
Yz=function(a,b,c){this.videoInfos=a;this.g=b||null;this.audioTracks=[];this.l=c||null;if(this.g){var d={};(0,g.G)(this.g,(0,g.A)(function(a){if(a.bc&&!d[a.id]){var b=new Pv(a.id,a.bc);d[a.id]=b;this.audioTracks.push(b)}},this))}};
Zz=function(a,b,c,d){this.o=a;this.g=b;this.C=c;this.F=void 0===d?!1:d;this.A={};this.B=!!g.z("cast.receiver.platform.canDisplayType");a=g.z("cast.receiver.platform.getValue");this.l=!this.B&&a&&a("max-video-resolution-vpx")||null};
cA=function(a,b,c){if(2.2!=$z&&px(a.g)||c)return es();var d={};a=mx();b=g.q(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,Cu(c.yf)in aA||"5"==Cu(c.yf)?0:bA(a,c.Se().mimeType)){var e=c.yf.video.quality;d[e]&&2!=d[e].Se().containerType||(d[e]=c)}var f=[];d.auto&&f.push(d.auto);(0,g.G)(Au,function(a){(a=d[a])&&f.push(a)});
return fs(f)};
dA=function(){var a=Mr()&&!g.cp(29),b=Kr("google tv")&&Kr("chrome")&&!g.cp(30),c=Pr();return a||b||c?!1:!!(window.MediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&window.HTMLMediaElement.prototype.webkitSourceAddId)};
bA=function(a,b){var c=a.canPlayType(b);eA?c=c||fA[b]:2.2==$z?c=c||gA[b]:Mr()&&(c=c||hA[b]);return!!c};
g.iA=function(){return!(!bA(mx(),"application/x-mpegURL")&&!dA())};
kA=function(a,b){var c={},d=b.Hd()||b.te()||b.ue();Or();for(var e in b.g){var f=b.g[e],k=Cu(f.info);("304"!=k&&"266"!=k||b.A||d)&&jA(a,f.info)&&(c[f.info.l]=c[f.info.l]||[],c[f.info.l].push(f.info))}return c};
oA=function(a,b,c){var d={},e;g.Rb(b,function(b,k){var f=b.filter(function(b){return b.Ob?c&&b.Ob[c.flavor]&&c.o[b.mimeType]?"261"!=Cu(b)||lA(a,mA)?"("!=b.l&&"(h"!=b.l||lA(a,nA)||a.F?!0:!1:(e||(e=mx()),!1):!1:!0});
f.length&&(d[k]=f)});
return d};
BA=function(a,b,c,d,e){function f(a){return!!k[a]}
var k=kA(a,b);Qy(b)&&(k=oA(a,k,c));var l=a.o.g("html5_disable_vp9_hdr_enc")?pA:qA;a.g?!Kr("windows nt 5.1")||g.yz&&!a.o.g("html5_prefer_h264_on_xp")?(b.te()||b.ue()||b.Hd())&&rA&&6>=$z&&(l=sA):l=sA:l=tA;c=uA;d&&(a.g&&(l=sA),c=vA);if(Qr()||Rr()||lA(a,mA))c=wA;(b.te()||b.ue()||b.Hd())&&e&&(c=xA.concat(c));b=g.Oa(l,f);d=g.Oa(c,f);if(!b||!d)return es();"9"==b&&k.h&&(e=function(a,b){return Math.max(a,b.video.height)},c=Sk(k["9"],e,0),Sk(k.h,e,0)>1.5*c&&(b="h"));
e=k[b];c=k[d];e=yA(a,e);zA(e,c);return fs(new Yz(e,c,AA(a,k,b,d)))};
AA=function(a,b,c,d){var e=a.g?b.h:b[c];b=b.a;c=a.g&&"h"!=c;return e&&b&&(c||"a"!=d)?(e=yA(a,e),zA(e,b),new Yz(e,b)):null};
zA=function(a,b){g.jb(a,function(a,b){return b.video.height*b.video.width-a.video.height*a.video.width||b.g-a.g});
g.jb(b,function(a,b){return b.g-a.g})};
yA=function(a,b){var c=(0,g.gk)(b,function(a){return 32<a.video.fps});
c&&(b=a.C||lA(a,CA)?(0,g.Fd)(b,function(a){var b;(b=32<a.video.fps)||(a=a.video,b=!(854<a.width||480<a.height));return b}):(0,g.Fd)(b,function(a){return!(32<a.video.fps)}));
c&&Qr()&&(b=(0,g.Fd)(b,function(a){return"299"!=Cu(a)}));
return b};
jA=function(a,b){if("0"==Cu(b)&&!a.g)return!0;var c=b.mimeType;if(b.video&&(zu(b.video)||"bt2020"==b.video.primaries)&&!(24<window.screen.pixelDepth||lA(a,DA))||!("338"!=Cu(b)||g.Gx&&g.cp(53)))return!1;var d={};b.video&&(b.video.width&&(d[EA.name]=b.video.width),b.video.height&&(d[FA.name]=b.video.height),b.video.fps&&(d[CA.name]=b.video.fps),b.video.l&&(d[DA.name]=b.video.l),b.g&&(d[GA.name]=8*b.g),"("==b.l&&(d[nA.name]="subsample"));b.audio&&b.audio.g&&(d[mA.name]=b.audio.g);for(var e in HA){var f=
HA[e];if(d[f.name]&&!(f==DA&&0<b.mimeType.indexOf("vp09.02")))if(lA(a,f))if(a.l){if(a.l[f.name]<d[f.name])return!1}else c=c+"; "+f.name+"="+d[f.name];else if(Fu(b)&&f==DA)return!1}!a.o.g("disable_html5_cast_hdcp_filter2")&&a.B&&b.video&&1080<b.video.g&&b.Ob&&(c+="; hdcp=2.2");return IA(a,c)};
lA=function(a,b){if(!(b.name in a.A)){var c=a.A,d=b.name;if(a.l)var e=!!a.l[b.name];else b==GA&&a.o.g("html5_ignore_bad_bitrates")&&IA(a,'video/webm; codecs="vp9"; width=3840; height=2160; bitrate=2000000')&&!IA(a,'video/webm; codecs="vp9"; width=3840; height=2160; bitrate=20000000')?e=!1:(b.video?(e='video/webm; codecs="vp9"',IA(a,e)||(e='video/mp4; codecs="avc1.4d401e"')):(e='audio/webm; codecs="opus"',IA(a,e)||(e='audio/mp4; codecs="mp4a.40.2"')),e=IA(a,e+"; "+b.name+"="+b.valid)&&!IA(a,e+"; "+
b.name+"="+b.vg));c[d]=e}return a.A[b.name]};
IA=function(a,b){return a.B?window.cast.receiver.platform.canDisplayType(b):Hx(b)};
JA=function(){g.R.call(this);this.za={}};
KA=function(a,b){return void 0==b?a:"1"==b?!0:!1};
LA=function(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a};
MA=function(a,b){return void 0==b?a:Number(b)};
NA=function(a,b){return void 0==b?a:b.toString()};
PA=function(a,b){if(b){if("fullwidth"==a)return window.Infinity;if("fullheight"==a)return 0}if(a){var c=a.match(OA);if(c){var d=(0,window.parseFloat)(c[2]);if(0<d)return(0,window.parseFloat)(c[1])/d}}return window.NaN};
QA=function(a,b){var c=g.wu.auto,d=b?g.wu[b]:void 0;return d>g.wu.medium?new Nu(d,c,!1):d>=c?new Nu(c,d,!1):a};
RA=function(a){return a.docid||a.video_id||a.videoId||a.id};
TA=function(){this.g=g.cr("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=g.nu.get(""+this.g,void 0)){a=(0,window.decodeURIComponent)(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(SA[d]=c.toString())}}};
UA=function(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);};
VA=function(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);};
XA=function(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(e){}a=Array(16);for(b=0;16>b;b++){c=(0,g.H)();for(var d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(WA)for(b=1,c=0;c<WA.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^WA.charCodeAt(c),b++;return a};
YA=function(){for(var a=XA(),b=[],c=0;c<a.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a[c]&63));return b.join("")};
g.ZA=function(){return(0,g.I)(XA(),function(a){return(a&15).toString(16)}).join("")};
rB=function(a){g.J.call(this);a=g.gc(a);this.Ka=!1;this.sa=this.ya="";this.Gc={};this.gj=NA("",a.csp_nonce);this.experiments=new Ku(a.fexp,a.fflags);this.forcedExperiments=a.forced_experiments||null;try{var b=window.document.location.toString()}catch(e){b=""}this.wa=b;this.aa=(this.o=$A.test(this.wa))?NA("",a.loaderUrl):this.wa;this.ob=aB.test(this.aa);this.mj=vv(this.aa);this.Ma=KA(!1,a.privembed);this.K=(this.Ha=KA(!1,a.forcenewui))||this.experiments.g("embed_new_info_bar")&&this.o;this.protocol=
0==this.wa.indexOf("http:")?"http":"https";this.baseYtUrl=dv(a.BASE_YT_URL)||dv(this.wa)||this.protocol+"://www.youtube.com/";b=a.el;var c="detailpage";"adunit"==b?c=this.experiments.g("html5_adunit_from_adformat")?this.o?"embedded":"detailpage":this.mj?"adunit":"embedded":"embedded"==b||this.ob?c=LA(c,b,bB):b&&(c="embedded");this.V=c;Ut();b=null;c=a.ps;var d=g.Sa(cB,c);!c||d&&!this.ob||(b=c);this.g=b;this.I=(this.Rb=g.Sa(cB,this.g))&&"play"!=this.g&&"jamboard"!=this.g;this.lj=!this.I;b={};this.B=
(b.c=a.c||"web",b.cver=a.cver||"html5",b.cplayer="UNIPLAYER",b);this.P=KA(!1,a.disableplaybackui);this.Ga=!this.P&&!(!mx().defaultPlaybackRate||g.oh&&!Kr("chrome")||dB||eB||Kr("android")||Kr("silk"));this.l=KA("blazer"==this.g,a.is_html5_mobile_device);this.l?b=!0:(b=(0,window.parseInt)((0,g.H)()/1E3,10),c=TA.getInstance(),b=this.experiments.g("block_desktop_background_playback_with_mobile_cookie")&&c&&b>(0,window.parseInt)(c.get("dhmu",b.toString()),10));this.kj=b;this.fa="3"==this.A||this.l||KA(!1,
a.use_media_volume);this.U=rx();this.Aj=fB;(dB||eB||g.Lk)&&"blazer"!=this.g&&g.gB(this);this.Ua=g.hB(this)&&this.experiments.g("use_rawcc_captions");this.H=KA(!1,a.is_dni);this.zb=NA("#cc181e",a.dni_color);this.Tc=this.Ha||KA("adunit"!=this.V&&!iB(this)&&!this.Rb,a.showinfo);this.lf=KA(!1,a.playsinline);b=this.l&&rA&&2.3>=$z;c=this.l;c=jB(this)||!b&&KA(c,a.use_native_controls)?"3":"1";this.A="0"!=a.controls?c:"0";this.useTabletControls=this.l;this.color=LA("red",a.color,kB);this.nj="3"==this.A||KA(!1,
a.modestbranding)&&"red"==this.color;this.ba=0==this.aa.indexOf(this.baseYtUrl);this.pf=(c=!this.ba&&!iB(this)&&!this.I&&!this.Rb)&&(this.H||!this.nj)&&"1"==this.A;this.qf=g.lB(this)&&c&&!this.Tc&&!this.pf;this.zk=this.oj=b;this.eg=!eB||g.vc(601)?!0:!1;this.jj=this.o||!1;this.Ra=iB(this)?"":(this.aa||a.post_message_origin||"").substring(0,128);this.widgetReferrer=NA("",a.widget_referrer);this.Ab=(!this.ob||KA(!0,a.enablecastapi))&&"1"==this.A&&!this.l&&(iB(this)||g.lB(this)||g.mB(this));this.hj=((this.bb=
KA(!1,a.autoplay))||iB(this))&&!a.suppress_autoplay_on_watch;this.wd=!this.l&&!Kr("nintendo wiiu")&&!Kr("nintendo 3ds")||KA(!1,a.autoplayoverride);this.gd=KA(!1,a.mutedautoplay)&&!1;b=(iB(this)||"adunit"==this.V)&&("blazer"==this.g||"mweb-polymer"==this.g);this.Xb=!KA(!0,a.fs);this.ma=!this.Xb&&(b||Cs());this.fj=this.experiments.g("uniplayer_block_pip")&&Mr()&&g.cp(58)&&!(g.nB&&Kr("version/"));this.ud=this.Ha||KA(!this.Rb,a.rel);this.ia=g.mB(this);this.Sc="blazer"==this.g||"mweb-polymer"==this.g;
switch(this.g){case "blogger":b="bl";break;case "gmail":b="gm";break;case "books":b="gb";break;case "docs":b="gd";break;case "google-live":b="gl";break;case "play":b="gp";break;case "chat":b="hc";break;case "picasaweb":b="pw";break;default:b="yt"}this.Wa=b;this.jc=NA("",a.authuser);this.bk=(this.o&&!this.Ma||!!this.jc)&&KA(!this.I,a.showwatchlater);this.Ie=KA(!1,a.disablekb);this.Je=NA("",a.ecver);this.loop=KA(!1,a.loop);this.pageId=NA("",a.pageid);this.pj=QA(Qu,a.vq);this.Uj=KA(!0,a.canplaylive);
this.ij=KA(this.Rb,a.ss);(b=a.video_container_override)?(c=b.split("x"),2!=c.length?b=null:(b=(0,window.parseInt)(c[0],10),c=(0,window.parseInt)(c[1],10),b=(0,window.isNaN)(b)||(0,window.isNaN)(c)||0>=b*c?null:new g.ad(b,c))):b=null;this.fg=b;this.mute=KA(!1,a.mute);this.storeUserVolume=!this.mute&&KA("0"!=this.A,a.store_user_volume);this.sf="3"==this.A?3:LA(void 0,a.iv_load_policy,oB);this.uf=NA("",a.cc_lang_pref);b=LA(2,a.cc_load_policy,oB);"3"==this.A&&2==b&&(b=3);this.vf=b;this.Bc=NA("en_US",
a.hl);this.region=NA("US",a.cr);this.hostLanguage=NA("en",a.host_language);this.ej=!this.Ma&&Math.random()<this.experiments.l("web_player_api_logging_fraction");b=!this.experiments.g("web_player_interaction_logging_killswitch");this.F=!this.Ma&&b;this.Mb=new window.Set;this.C=KA(!0,a.deviceHasDisplay);this.We=MA(this.We,a.ismb);this.lj?(b=a.vss_host||"s.youtube.com",this.experiments.g("www_for_videostats")&&"s.youtube.com"==b&&(b=g.zg(this.baseYtUrl)||"www.youtube.com")):b="video.google.com";this.Nh=
b;this.jf(a);this.Gc=a;this.L=new JA;g.K(this,this.L);this.X=this.l;this.Le={innertubeApiKey:NA("",a.innertube_api_key),innertubeApiVersion:NA("",a.innertube_api_version),dn:this.B.c,innertubeContextClientVersion:NA("",a.innertube_context_client_version),gn:this.hostLanguage,fn:this.region,tk:""};this.nf=void 0!=window.WebKitPlaybackTargetAvailabilityEvent;this.R=new Zz(this.experiments,this.C,this.experiments.g("html5_force_hfr_support")?!0:g.pB(this)||Qr()||Rr()||qB(this),g.Gx&&56<=g.Jr()||qB(this));
b=new Iz;g.gB(this)&&(b.C=!0,b.F=.1);this.experiments.g("html5_ewma_bandwidth_estimator")&&(b.C=!0);this.We&&(b.B=this.We/8);b.o=this.experiments.l("html5_bandwidth_window_size")||b.o;b.g=this.experiments.g("html5_composite_stall");this.schedule=new Nz(b);this.enableSafetyMode=KA(!1,a.enable_safety_mode);this.xd=KA(this.P?!1:iB(this)&&"blazer"!=this.g&&"mweb-polymer"!=this.g,a.autonav);this.Ec=KA(!1,a.send_visitor_id_header)||this.experiments.A;this.tf=!1;this.mf=Qu;this.qj=g.It();this.Fd=!1;this.rk=
KA(!1,a.transparent_background);this.disableNativeContextMenu=KA(!1,a.disable_native_context_menu)};
sB=function(a,b){return!a.Rb&&Mr()&&g.cp(55)&&!b};
tB=function(a){var b=g.zg(a.baseYtUrl);(a=g.Ag(a.baseYtUrl))&&(b+=":"+a);return"www.youtube-nocookie.com"==b?"www.youtube.com":b};
uB=function(a){return"gaming"==a.g?"gaming.youtube.com":tB(a)};
vB=function(a,b,c){return a.protocol+"://i1.ytimg.com/vi/"+b+"/"+(c||"hqdefault.jpg")};
xB=function(a){return iB(a)&&"gaming"!=a.g&&!g.wB(a)};
jB=function(a){return eB&&!a.lf||Kr("nintendo wiiu")||Kr("nintendo 3ds")?!0:!1};
g.gB=function(a){return g.Gx&&Kr("crkey")||"TV"==a.B.cplatform};
qB=function(a){return"CHROMECAST ULTRA/STEAK"==a.B.cmodel||"CHROMECAST/STEAK"==a.B.cmodel};
g.yB=function(){return 1<window.devicePixelRatio?window.devicePixelRatio:1};
g.pB=function(a){return"web"==a.B.c.toLowerCase().substr(0,3)};
g.wB=function(a){return"WEB_UNPLUGGED"==a.B.c};
g.hB=function(a){return g.wB(a)||"TV_UNPLUGGED_CAST"==a.B.c||"TVHTML5_UNPLUGGED"==a.B.c};
g.zB=function(a){return a.C&&g.Gx&&!eA&&"3"!==a.A?g.nB?a.o&&g.vc(51):!0:!1};
g.AB=function(a){return a.C&&g.yz&&!eA&&"3"!==a.A?g.nB?a.o&&g.vc(48):g.vc(38):!1};
CB=function(a){return g.zB(a)||g.AB(a)||(a.C&&g.oh&&!eA&&"3"!==a.A?g.nB?a.o&&g.vc(37):g.vc(27):!1)||a.C&&g.BB&&!Tr()&&g.vc(11)||a.C&&g.Lk&&g.vc("604.4")&&a.experiments.g("safari_enable_spherical")};
DB=function(a){return a.experiments.g("disable_html5_ambisonic_audio")||!(CB(a)||a.experiments.g("html5_enable_spherical")||a.experiments.g("html5_enable_spherical3d"))||g.lB(a)&&rA||g.yz&&(!g.vc(47)||!g.vc(52)&&g.vc(51))?!1:window.AudioContext||window.webkitAudioContext?!0:!1};
iB=function(a){return"detailpage"==a.V};
g.lB=function(a){return"embedded"==a.V};
g.EB=function(a){return"leanback"==a.V};
g.mB=function(a){return"profilepage"==a.V};
FB=function(a){return Ur()&&/(K\d{3}|KS\d{3}|KU\d{3})/.test(a.B.cmodel)};
g.GB=function(a,b,c){this.errorCode=a;this.g=b;this.details=c||{}};
HB=function(a){var b;for(b in a){var c=(""+a[b]).replace(/[:,]/g,"_");var d=(d?d+";":"")+b+"."+c}return d||""};
JB=function(a){if(a){var b=[],c;for(c in a)IB.has(c)||b.push(c);b.length&&.01>Math.random()&&g.Q(Error("Unknown house brand player vars: "+b),"WARNING")}};
KB=function(a,b){this.l=a;this.g=b;this.o=0};
LB=function(a){for(var b=[],c=[],d=0,e=a.g.length;d<e;++d){var f=a.g[d];f.bitrate<=a.o?b.push(f):c.push(f)}b.sort(function(a,b){return b.bitrate-a.bitrate});
c.sort(function(a,b){return a.bitrate-b.bitrate});
a.g=b.concat(c)};
MB=function(a,b,c,d,e,f,k,l,m){this.itag=a;this.url=b;this.rq=c;this.width=d;this.height=e;this.bitrate=k;this.fps=f;this.audioItag=l||null;this.g=m||""};
NB=function(a){for(var b={},c=0,d=a.length;c<d;++c){var e=a[c],f=e.type.match(/codecs="([^"]*)"/);e=new MB(e.itag,e.url,f?f[1]:"",+e.width,+e.height,+e.fps,+e.bitrate,e.audio_itag,e.drm_families);b[e.itag]=e}return b};
OB=function(a,b){this.yf=a;this.A=b;this.l=null};
QB=function(a,b,c,d){if(!(eA||Sr()||Pr()))return es();c=NB(c);if(!c)return es();var e={};e=(e.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",e);var f=[],k=[],l=[],m;for(m in c){var n=c[m];if(n.width){var p=c[n.audioItag];if(p){f.push(n);var u="fairplay"==n.g?e:null;l.push(PB([p],[n],n.itag,n.width,n.height,n.fps,void 0,void 0,u));if(!v||n.width*n.height*n.fps>v.width*v.height*v.fps)var v=n}}else k.push(n)}u=l.reduce(function(a,b){return!!b.yf.Ob&&a},!0)?e:null;
!a.experiments.g("html5_hls_optimal_resolution_killswitch")&&v?l.push(PB(k,f,"93",v.width,v.height,v.fps,"auto",d,u)):l.push(PB(k,f,"93",0,0,0,"auto",d,u));return cA(a.R,l,sB(a,b))};
PB=function(a,b,c,d,e,f,k,l,m){var n=new tu;d=new xu(d,e,f,null,void 0,k);c=new Du(c,"application/x-mpegURL",n,d,void 0,m);a=new KB(a,b);a.o=l?l:1369843;return new OB(c,a)};
RB=function(a,b){this.yf=a;this.l=b};
SB=function(a,b,c,d){var e=[];c=g.q(c);for(var f=c.next();!f.done;f=c.next()){var k=f.value;if(k.url){f=new g.Mx(k.url);k.sig?f.set("signature",k.sig):k.s&&f.set("signature",Oy(k.s));for(var l in d)f.set(l,d[l]);k=Ju(k.type,k.quality,k.itag,k.width,k.height,!!k.isAccelerated,!!k.isAcceleratedUiEnabled);e.push(new RB(k,f))}}return cA(a.R,e,sB(a,b))};
g.TB=function(a,b,c,d){this.xe=new window.Set;this.I=a;this.K=b;a=c.split("#");this.C=(0,window.parseInt)(a[0],10);this.B=(0,window.parseInt)(a[1],10);this.l=(0,window.parseInt)(a[2],10);this.columns=(0,window.parseInt)(a[3],10);this.rows=(0,window.parseInt)(a[4],10);this.o=(0,window.parseInt)(a[5],10);this.A=a[6];this.F=a[7];this.L=d};
g.UB=function(a,b){var c=Math.floor(b/(a.columns*a.rows)),d=a.columns*a.rows,e=b%d,f=e%a.columns;e=Math.floor(e/a.columns);var k=a.Mk()+1-d*c;if(k<a.columns){var l=k;d=1}else l=a.columns,d=k<d?Math.ceil(k/a.columns):a.rows;return{url:a.wb(c),tq:f,columns:l,Sb:e,rows:d,to:a.C*l,so:a.B*d}};
VB=function(a){g.R.call(this);this.A=new yq;this.l=null;this.H=new window.Set;this.F=a||""};
XB=function(a,b,c){for(c=WB(a,c);0<=c;){var d=a.g[c];if(d.Vb(Math.floor(b/(d.columns*d.rows)))&&(d=g.UB(d,b)))return d;c--}return g.UB(a.g[0],b)};
ZB=function(a,b,c){c=WB(a,c);for(var d,e;0<=c;c--)if(d=a.g[c],e=Math.floor(b/(d.columns*d.rows)),!d.Vb(e)){d=a;var f=c,k=f+"-"+e;d.H.has(k)||(d.H.add(k),xq(d.A,f,{Sr:f,Qt:e}))}YB(a)};
YB=function(a){if(!a.l&&!a.A.isEmpty()){var b=a.A.remove();var c=new window.Image;a.F&&(c.crossOrigin=a.F);c.src=a.g[b.Sr].wb(b.Qt);c.onload=(0,g.A)(a.K,a,b.Sr,b.Qt);a.l=c}};
$B=function(a,b,c,d){d=void 0===d?!1:d;VB.call(this,c);this.isLive=d;this.g=this.o(a,b);this.B=new window.Map;1<this.g.length&&this.g[0].isDefault()&&this.g.splice(0,1)};
WB=function(a,b){var c=a.B.get(b);if(c)return c;c=a.g.length;for(var d=0;d<c;d++)if(a.g[d].Vd()>=b)return a.B.set(b,d),d;a.B.set(b,c-1);return c-1};
aC=function(a,b,c,d){c=c.split("#");c=[c[1],c[2],0,c[3],c[4],-1,c[0],""].join("#");g.TB.call(this,a,b,c,0);this.g=null;this.H=d?3:0};
bC=function(a,b){$B.call(this,a,0,void 0,b)};
cC=function(a,b){this.yf=a;this.l=b};
dC=function(a){var b=[];(0,g.G)(a,function(a){if(a.url){var c=Ju(a.type,"medium","0");b.push(new cC(c,a.url))}});
return b};
fC=function(a,b){var c={},d;for(d in eC){var e=b?b+d:d;e=a[e+"_webp"]||a[e];g.tv(e)&&(c[eC[d]]=e)}return c};
iC=function(a){var b={};if(!a||!a.thumbnails)return b;var c=null;a=g.q(a.thumbnails);for(var d=a.next();!d.done;d=a.next()){d=d.value;var e=gC(d);if(g.tv(e)){var f=hC[d.width];f&&(b[f]=e);if(!c||c.width<d.width)c=d}}c&&1280<c.width&&(b["maxresdefault.jpg"]=gC(c));return b};
gC=function(a){a=a.url;return 0==a.indexOf("//")?"https:"+a:a};
g.jC=function(a,b){this.version=a;this.args=b};
g.kC=function(a,b){this.topic=a;this.g=b};
g.mC=function(a,b){var c=lC();c&&c.publish.call(c,a.toString(),a,b)};
g.qC=function(a,b,c){var d=lC();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,k){var f=g.z("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(nC[e])try{if(k&&a instanceof g.kC&&a!=d)try{var f=a.g,l=k;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.dg){var p=new f;f.dg=p.version}var u=f.dg}catch(v){}if(!u||l.version!=u)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=window.Reflect.construct(f,
g.ab(l.args))}catch(v){throw v.message="yt.pubsub2.Data.deserialize(): "+v.message,v;}}catch(v){throw v.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+v.message,v;}b.call(c||window,k)}catch(v){g.Q(v)}},oC[a.toString()]?g.Pt()?g.Nt(f):g.jr(f,0):f())});
nC[e]=!0;pC[a.toString()]||(pC[a.toString()]=[]);pC[a.toString()].push(e);return e};
tC=function(a,b){var c=g.qC(rC,function(d){a.apply(b,arguments);g.sC(c)},b);
return c};
g.sC=function(a){var b=lC();b&&(g.ua(a)&&(a=[a]),(0,g.G)(a,function(a){b.unsubscribeByKey(a);delete nC[a]}))};
lC=function(){return g.z("ytPubsub2Pubsub2Instance")};
vC=function(a){if(uC.getEntriesByType){var b=uC.getEntriesByType("paint");if(b=g.Oa(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Aa(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
wC=function(){var a=g.cr("TIMING_TICK_EXPIRATION");a||(a={},g.br("TIMING_TICK_EXPIRATION",a));return a};
xC=function(){var a=wC(),b;for(b in a)g.Qt(a[b]);g.br("TIMING_TICK_EXPIRATION",{})};
yC=function(a,b){g.jC.call(this,1,arguments)};
zC=function(a,b){g.jC.call(this,1,arguments);this.g=a};
DC=function(a){AC(a);BC();CC(!1,a);a||(g.cr("TIMING_ACTION")&&g.br("PREVIOUS_ACTION",g.cr("TIMING_ACTION")),g.br("TIMING_ACTION",""))};
SC=function(a,b){a:if(!EC(a)){if(!g.$r("send_empty_timing")){var c=g.cr("CSI_SERVICE_NAME","youtube");if(!g.cr((a||"")+"TIMING_ACTION",void 0)||!c)break a}g.FC("aa",void 0,a);g.GC("ap",1,a);g.GC("yt_fss","c",a);if(g.$r("enable_csi_abandonment_info")&&!a&&!HC("yt_lt")){c=g.cr("TIMING_INFO",{});for(var d in c)g.GC(d,c[d]);g.GC("is_nav",1);(d=g.mu())&&g.GC("csn",d);(d=g.cr("PREVIOUS_ACTION",void 0))&&g.GC("pa",d);c=IC();c.p=g.cr("CLIENT_PROTOCOL")||"unknown";c.t=g.cr("CLIENT_TRANSPORT")||"unknown";g.GC("yt_vis",
JC());if("cold"==c.yt_lt){d=uC.timing||{};d.navigationStart&&(g.FC("srt",d.responseStart),1!=c.prerender&&KC("n",d.navigationStart));c=vC(d);0<c&&g.FC("fpt",c);g.FC("nreqs",d.requestStart,void 0);g.FC("nress",d.responseStart,void 0);g.FC("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(g.FC("nrs",d.redirectStart,void 0),g.FC("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(g.FC("ndnss",d.domainLookupStart,void 0),g.FC("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-
d.connectStart&&(g.FC("ntcps",d.connectStart,void 0),g.FC("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=d.navigationStart&&0<d.connectEnd-d.secureConnectionStart&&(g.FC("nstcps",d.secureConnectionStart,void 0),g.FC("ntcpe",d.connectEnd,void 0));uC.getEntriesByType&&LC();d=[];if(window.document.querySelector&&uC&&uC.getEntriesByName)for(var e in MC)c=MC[e],NC(e,c)&&d.push(c);d.length&&g.GC("rc",d.join(","))}g.$r("csi_on_gel")&&(e={},e.actionType=OC[g.cr("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",
d=PC(),au(e,d))}QC(a)}DC(a);g.br(a+"TIMING_AFT_KEYS",b);g.br(a+"TIMING_ACTION",a);KC("c",void 0,a);g.y("ytglobal.timing"+(a||"")+"ready_",!0,void 0);RC(a)};
g.FC=function(a,b,c){if(!b&&"_"!=a[0]){var d=a;uC.mark&&(g.qb(d,"mark_")||(d="mark_"+d),c&&(d+=" ("+c+")"),uC.mark(d))}d=TC(c);var e=b||g.It();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;d=wC();if(e=d[a])g.Qt(e),d[a]=0;UC(c)["tick_"+a]=b;c||b||g.It();g.$r("csi_on_gel")?(d=PC(c),"_start"==a?$t("baseline_"+d)||g.Yt("latencyActionBaselined",{clientActionNonce:d},b,void 0):$t("tick_"+a+"_"+d)||g.Yt("latencyActionTicked",{tickName:a,clientActionNonce:d},b,void 0),a=!0):a=!1;a||RC(c)};
VC=function(a){var b="above_the_fold";uC&&uC.measure&&(g.qb(b,"measure_")||(b="measure_"+b),a?uC.measure(b,a):uC.measure(b))};
KC=function(a,b,c){g.GC("yt_sts",a,c);g.FC("_start",b,c)};
WC=function(a,b){var c=TC(b);return a in c};
g.GC=function(a,b,c){var d=IC(c)[a]=b;UC(c)["info_"+a]=d;if(g.$r("csi_on_gel"))if(a in XC){b={};a=XC[a];g.Sa(YC,a)&&(d=!!d);a=a.split(".");for(var e=b,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];b[a[a.length-1]]=d;c=PC(c);au(b,c)}else g.Sa(ZC,a)||g.Q(Error("Unknown label "+a+" logged with GEL CSI."))};
HC=function(a){var b=IC(void 0);return a in b};
$C=function(a){var b=TC(a);if(b.aft)return b.aft;a=g.cr((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
RC=function(a){if(!EC(a)){var b=g.cr((a||"")+"TIMING_ACTION",void 0),c=TC(a);if(g.z("ytglobal.timing"+(a||"")+"ready_")&&b&&c._start&&(b=$C(a)))if(g.$r("tighter_critical_section")&&!aD&&(g.mC(bD,new yC(Math.round(b-c._start),a)),aD=!0),a)QC(a);else{b=!0;var d=g.cr("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&QC(a)}}};
JC=function(){switch(As()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
QC=function(a){xC();if(!g.$r("csi_on_gel")){var b=TC(a),c=IC(a),d=b._start,e;for(e in b)if(g.qb(e,"_")&&g.ya(b[e])){var f=e.slice(1);if(f in cD){var k=(0,g.I)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.z("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))dD(k,f),DC(a)}else{var l=g.cr("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.cr((a||"")+"TIMING_ACTION",void 0)};var m=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var n=window.location.protocol+g.z("ytplayer.config.assets.js");(n=uC.getEntriesByName?uC.getEntriesByName(n)[0]:null)?c.h5jse=Math.round(c.h5jse-n.responseEnd):delete c.h5jse}b.aft=$C(a);eD(a)&&"youtube"==l&&(g.GC("yt_lt","hot_bg",a),
l=b.vc,n=b.pbs,delete b.aft,c.aft=Math.round(n-l));for(var p in c)"_"!=p.charAt(0)&&(k[p]=c[p]);b.ps=g.It();c={};p=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,p.push(e+"."+l));k.rt=p.join(",");(b=g.z("ytdebug.logTiming"))&&b(k,c);dD(k,f,a);g.mC(rC,new zC(c.aft+(m||0),a))}}};
fD=function(a){return Math.round(uC.timing.navigationStart+a)};
LC=function(){var a=window.location.protocol,b=uC.getEntriesByType("resource");b=(0,g.Fd)(b,function(b){return 0==b.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Sk(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.FC("wffs",fD(b.startTime)),g.FC("wffe",fD(b.responseEnd)))};
NC=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=uC.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.FC("rsf_"+b,d+Math.round(c.fetchStart)),g.FC("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(HC("rc")||g.GC("rc",""),0===c.transferSize))?!0:!1:!1};
dD=function(a,b,c){if(g.$r("debug_csi_data")){var d=g.z("yt.timing.csiData");d||(d=[],g.y("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);window.navigator&&window.navigator.sendBeacon&&b?Xr(a):g.Wr(a);CC(!0,c)};
PC=function(a){var b=gD(a).nonce;b||(b=YA(),gD(a).nonce=b);return b};
TC=function(a){return gD(a).tick};
IC=function(a){return gD(a).info};
UC=function(a){a=gD(a);"gel"in a||(a.gel={});return a.gel};
gD=function(a){return g.z("ytcsi."+(a||"")+"data_")||AC(a)};
AC=function(a){var b={tick:{},info:{}};g.y("ytcsi."+(a||"")+"data_",b,void 0);return b};
EC=function(a){return!!g.z("yt.timing."+(a||"")+"pingSent_")};
CC=function(a,b){g.y("yt.timing."+(b||"")+"pingSent_",a,void 0)};
eD=function(a){var b=TC(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==IC(a).yt_pvis};
g.iD=function(a){if(a.simpleText)return a.simpleText;a=g.hD(a);var b=g.yd("div");b.appendChild(a);return b.textContent};
g.hD=function(a,b){if(a.simpleText){a:{var c=a.simpleText;if(b){var d=jD(c);if(d){c=g.vd("SPAN",null,d);break a}}c=window.document.createTextNode(c)}return c}c=[];if(a.runs)for(d=0;d<a.runs.length;d++){var e=a.runs[d];e.text&&c.push(kD(e,b))}return 1==c.length?c[0]:g.vd("SPAN",null,c)};
kD=function(a,b){var c=null,d=a.text;b&&(d=jD(d)||d);a.bold&&(c=g.vd("B",null,c||d));a.italics&&(c=g.vd("I",null,c||d));a.strikethrough&&(c=g.vd("STRIKE",null,c||d));if(a.navigationEndpoint&&a.navigationEndpoint.urlEndpoint){var e=a.navigationEndpoint.urlEndpoint;c=g.vd("A",null,c||d);g.Rc(c,e.url);"TARGET_NEW_WINDOW"==e.target&&(c.target="_blank")}return c||g.vd("SPAN",null,d)};
jD=function(a){a=a.split(/(?:\r\n|\r|\n)/g);if(1<a.length){for(var b=[a[0]],c=1;c<a.length;c++)b.push(g.vd("BR")),b.push(a[c]);return b}return null};
g.lD=function(a){g.R.call(this);this.adModule=!1;this.adaptiveFormats="";this.Ob=null;this.allowEmbed=!0;this.Ne=this.backgroundable=!1;this.he="";this.xj=this.uj=this.tj=!1;this.relativeLoudness=window.NaN;this.watchAjaxToken=this.ag=null;this.author="";this.Pe=0;this.Wl=this.Gq=this.Gj=!1;this.clientScreenNonce=this.clientPlaybackNonce=this.Zo=this.channelBanner=this.channelPath=this.Hj="";this.contentCheckOk=!1;this.je=0;this.Lq=this.enableCardioBeforePlayback=this.enableCardio=!1;this.endSeconds=
0;this.ye=!1;this.We=this.ih=0;this.vk=!1;this.Qu=0;this.isLowLatencyLiveStream=this.isLiveDefaultBroadcast=this.isLiveDestination=this.oa=this.kh=this.isListed=this.kn=this.Kg=!1;this.latencyClass="UNKNOWN";this.isMdxPlayback=!1;this.mdxControlMode=null;this.isPharma=!1;this.Uf=0;this.reloadReason="";this.pn=this.Nr=this.Jf=!1;this.Ak=0;this.liveChunkReadahead=window.NaN;this.liveStartWalltime=0;this.vn=null;this.si=this.lengthSeconds=0;this.playerParams=null;this.paygated=!1;this.rd=[];this.profilePicture=
void 0;this.racyCheckOk=!1;this.rootVeType=0;this.autonavState=1;this.Vi=Qu;this.Fd=!1;this.cn=this.startSeconds=0;this.spacecastModule=!1;this.rj=null;this.Zi=Qu;this.Dh=this.suggestions=null;this.hlsFormats=this.Ih=this.title="";this.kb=this.uh=this.Tf=null;this.Hl="vvt";this.ypcOfferButtonFormattedText=null;this.requiresPurchase=!1;this.clipStart=0;this.clipEnd=window.Infinity;this.Yk=this.yg=this.Wh=!1;this.Gm="";this.nl=this.No=this.hr=0;this.Ir=!1;this.cp=!0;this.Eh={};this.Wm=!1;this.captionTracks=
[];this.Sh=[];this.Yl=0;this.captionTranslationLanguages=[];this.Th=!1;this.Rj=new Pv("und",new uu("Default","und",!0));this.tn=0;this.zh=this.rv=!1;this.we=null;this.hg=[];this.Ar=!1;this.Qg={};this.Cv=new g.P(this.Dv,5E3,this);g.K(this,this.Cv);this.Fm=0;this.ir=!0;this.cg=this.Xa=null;this.jn=this.Pv=this.partialSpherical=this.If=!1;this.Bb={};this.keywords={};this.Dd={};this.setData(a)};
uD=function(a,b,c){b=b||{};var d={};if(!c)d=a.Xa||{};else if(b.player_response)for(d=g.Wp(b.player_response)||{},a.Xa||(a.Xa={}),c=0;c<mD.length;c++){var e=mD[c];e in d&&(a.Xa[e]=d[e])}(c=nD(d))?(a.he=Bv(c.invideoUrl),a.tj=!!c.adsOnly,a.uj=!!c.allowInPlaceSwitch):(b.iv_invideo_url&&(a.he=Bv(b.iv_invideo_url)),a.tj=KA(a.tj,b.iv_ads_only),a.uj=KA(a.uj,b.iv_allow_in_place_switch));b.cta_conversion_urls&&(a.Vp=b.cta_conversion_urls);a.isPharma=KA(a.isPharma,b.is_pharma);a.author=NA(a.author,b.author);
a.Gj=KA(a.Gj,b.cc_asr);c=b.ttsurl;zv(c)?a.Hj=c:c&&(c=Av(c),zv(c,!0)&&(a.Hj=c));d.captions&&d.captions.playerCaptionsTracklistRenderer?oD(a,d.captions.playerCaptionsTracklistRenderer):(a.Wm=void 0!=b.caption_tracks,b.caption_tracks&&b.caption_audio_tracks&&(pD(a,b.caption_tracks),qD(a,b.caption_audio_tracks),b.default_audio_track_index&&(a.Yl=(0,window.parseInt)(b.default_audio_track_index,10)||0),b.caption_translation_languages&&rD(a,b.caption_translation_languages)),a.Th=KA(a.Th,b.cc_contribute));
a.channelPath=NA(a.channelPath,b.channel_path);a.channelBanner=NA(a.channelBanner,b.channel_banner);a.Zo=NA(a.Zo,b.short_subscriber_count_text);a.clientPlaybackNonce=NA(a.clientPlaybackNonce,b.cpn);a.subscribed=KA(a.subscribed,b.subscribed);a.cI=MA(a.cI,b.view_count);a.shortViewCount=NA(a.shortViewCount,b.short_view_count_text);a.title=NA(a.title,b.title);a.ypcPreview=NA(a.ypcPreview,b.ypc_preview);a.ypcOrigin=NA(a.ypcOrigin,b.ypc_origin);a.paygated=KA(a.paygated,b.paygated);a.requiresPurchase=KA(a.requiresPurchase,
b.requires_purchase);b.keywords&&(a.keywords=sD(b.keywords));b.rvs&&(a.suggestions=or(b.rvs));a.contentCheckOk=KA(a.contentCheckOk,"1"==b.cco);a.racyCheckOk=KA(a.racyCheckOk,"1"==b.rco);a.oauthToken=NA(a.oauthToken,b.oauth_token);a.visitorData=NA(a.visitorData,b.visitor_data);b.session_data&&(a.fd=g.mr(b.session_data));b.endscreen_autoplay_session_data&&(a.Nq=g.mr(b.endscreen_autoplay_session_data));a.Mq=NA(a.Mq,b.endscreen_ad_tracking_data);a.Cw=KA(a.Cw,b.wait_for_vast_info_cards_xml);a.Wv=KA(a.Wv,
b.suppress_creator_endscreen);a.qg=NA(a.qg,b.wpid);a.hw=NA(a.hw,b.tracking_list||b.tv_list);b.skip_wv&&(a.Pv=!0);(0,g.G)(tD,function(a){a in b&&(this.Bb[a]=b[a])},a)};
vD=function(a){if(!a||!a.adPlacements)return!1;a=g.q(a.adPlacements);for(var b=a.next();!b.done;b=a.next())if(b=b.value.adPlacementRenderer,null!=b&&"AD_PLACEMENT_KIND_START"==(b.config&&b.config.adPlacementConfig&&b.config.adPlacementConfig.kind))return!0;return!1};
wD=function(a){return!(!a.Ia||!a.Ia.videoInfos.length)};
xD=function(a){return a.l&&Hx('video/webm; codecs="vp9"')&&Tb(a.g,function(a){return Eu(a.info)})};
yD=function(a){return!dA()||a.Gq?!0:!1};
g.zD=function(a){if(!a.cg)return null;var b=null!=a.cg.latitudeE7&&null!=a.cg.longitudeE7?a.cg.latitudeE7+","+a.cg.longitudeE7:",";return b+=","+(a.cg.clientPermissionState||0)+","+(a.cg.locationRadiusMeters||"")};
AD=function(a){a.ga()||(a.ye=!1,a.O("dataloaded",a.Bb))};
BD=function(a,b,c){c&&a.ka&&a.ka.dispose();a.ka=b;g.K(a,b);(a.ue()||a.te()||a.wg()||a.Hd())&&a.rd.push("webgl");a.ka.isLive||(a.oa=!1)};
g.DD=function(a,b,c){if(a.ga())return es();a.Ia=null;a.Tf=null;a.uh=null;var d=b.B,e=d.c;d=d.cmodel;b.experiments.g("disable_rqs")||(a.If=/^rq/.test(a.clientPlaybackNonce)||/^r/.test(a.clientPlaybackNonce)&&/UNPLUGGED/.test(e)||/FUGU/.test(d)||b.experiments.g("html5_high_res_logging"));a:{if(!c&&!yD(a)&&(e=!1,a.spacecastAdaptiveFormats?(BD(a,Vy(CD(a,a.spacecastAdaptiveFormats),a.Ob,a.lengthSeconds,void 0),!0),e=!0):a.ka&&a.ul&&(d=fz(a.ka,a.ul))&&(BD(a,d,!0),e=!0),e)){e=BA(b.R,a.ka,a.we,!0,!1).then(a.Xo,
void 0,a).then(a.Qq,void 0,a);break a}e=es()}return e.then(void 0,(0,g.A)(a.gA,a,b)).then(void 0,(0,g.A)(a.dA,a,b,c)).then(void 0,(0,g.A)(a.eA,a,b)).then(void 0,(0,g.A)(a.hA,a,b)).then(void 0,(0,g.A)(a.fA,a,b))};
ED=function(a,b){var c={cpn:a.clientPlaybackNonce,c:b.B.c,cver:b.B.cver};a.Wk&&(c.ptk=a.Wk,c.oid=a.Su,c.ptchn=a.Ru,c.pltype=a.Tu);return c};
g.FD=function(a){return Pr()&&a.fairPlayCert?(a={},a.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",a):a.Ba&&a.Ba.Ob||null};
GD=function(a){var b=a.Xa&&a.Xa.paidContentOverlay&&a.Xa.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.text?g.iD(b.text):a.TH};
HD=function(a){var b=a.Xa&&a.Xa.paidContentOverlay&&a.Xa.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.durationMs?Mb(b.durationMs):a.Qu};
g.ID=function(a,b){return g.w(a.keywords[b])?a.keywords[b]:null};
g.JD=function(a){if(!a.kb)if(a.Xa&&a.Xa.storyboards){var b=a.Xa.storyboards;b.playerStoryboardSpecRenderer?a.kb=new $B(b.playerStoryboardSpecRenderer.spec,a.lengthSeconds):b.playerLiveStoryboardSpecRenderer&&a.ka&&(a.kb=new bC(b.playerLiveStoryboardSpecRenderer.spec,a.ka.isLive))}else a.Bb.storyboard_spec?a.kb=new $B(a.Bb.storyboard_spec,a.lengthSeconds):a.Bb.live_storyboard_spec&&a.ka&&(a.kb=new bC(a.Bb.live_storyboard_spec,a.ka.isLive));return a.kb};
KD=function(a){return!!(a.hd||a.adaptiveFormats||a.Ih||a.Dh||a.spacecastFormatMap||a.spacecastAdaptiveFormats||a.hlsvp)};
LD=function(a){var b=g.Sa(a.rd,"ypc");a.ypcPreview&&(b=!1);return a.Nc()&&!a.ye&&(KD(a)||g.Sa(a.rd,"fresca")||g.Sa(a.rd,"heartbeat")||b)};
CD=function(a,b,c){b=or(b);var d={};c&&(0,g.G)(c.split(","),function(a){(a=a.match(/^([0-9]+)\/([0-9]+)x([0-9]+)(\/|$)/))&&(d[a[1]]={width:a[2],height:a[3]})});
(0,g.G)(b,function(a){var b=d[a.itag];b&&(a.width=b.width,a.height=b.height)},a);
return b};
MD=function(a){a=or(a);var b={};(0,g.G)(a,function(a){var c=a.family;a=a.url;c&&a&&(b[c]=a)});
return b};
pD=function(a,b){for(var c=or(b),d=0;d<c.length;d++){var e=c[d],f=e.u;zv(f)&&a.captionTracks.push(new g.Nv({is_translateable:KA(!1,e.t),languageCode:e.lc,languageName:e.n,url:f,vss_id:e.v,kind:e.k,format:3}))}};
qD=function(a,b){var c=or(b);a.Sh=[];(0,g.G)(c,function(a){var b={};g.t(a.aid)&&(b.audioTrackId=a.aid);a.i&&(b.captionTrackIndices=(0,g.I)(a.i.split(","),function(a){return(0,window.parseInt)(a,10)}));
b.hasDefaultTrack=g.t(a.d);b.hasDefaultTrack&&(b.defaultCaptionTrackIndex=(0,window.parseInt)(a.d,10)||void 0);b.hasForcedTrack=g.t(a.f);b.hasForcedTrack&&(b.forcedCaptionTrackIndex=(0,window.parseInt)(a.f,10));b.visibility=ND[(0,window.parseInt)(a.v,10)]||"UNKNOWN";this.Sh.push(b)},a)};
rD=function(a,b){for(var c=or(b),d=0;d<c.length;d++){var e=c[d];a.captionTranslationLanguages.push(new g.Mv({languageCode:e.lc,languageName:e.n}))}};
oD=function(a,b){a.Wm=!0;a.captionTracks=[];b.captionTracks&&(0,g.G)(b.captionTracks,function(a){var b=a.baseUrl;zv(b,!0)&&(a=new g.Nv({is_translateable:!!a.isTranslatable,languageCode:a.languageCode,languageName:a.name&&g.iD(a.name),url:b,vss_id:a.vssId,kind:a.kind,format:3}),this.captionTracks.push(a))},a);
a.Sh=b.audioTracks||[];a.Yl=b.defaultAudioTrackIndex||0;a.captionTranslationLanguages=b.translationLanguages?(0,g.I)(b.translationLanguages,function(a){return new g.Mv({languageCode:a.languageCode,languageName:g.iD(a.languageName)})}):[];
a.Th=!!b.contribute&&!!b.contribute.captionsMetadataRenderer};
g.OD=function(a,b){return!!a.Bb[b]};
g.PD=function(a){return a.oa&&!a.Ne};
QD=function(a){return a.oa&&a.Ne};
RD=function(a){var b=g.gc(a.Bb);!a.oa&&0<a.startSeconds&&(b.start=a.startSeconds);return b};
SD=function(a){a.Ia=a.Ia.l};
g.TD=function(a){if(a.Wv)return null;var b=a.Bb.iv_endscreen_url;b||(b=a.Xa&&a.Xa.endscreen&&a.Xa.endscreen.endscreenUrlRenderer&&a.Xa.endscreen.endscreenUrlRenderer.url);return b};
UD=function(a,b){return a.adFormat&&"1_5"!=a.adFormat?"adunit":b.V};
VD=function(a,b){if(a.isAd()&&a.videoId!=b.ya)return b.ya};
WD=function(a,b){var c=b.hj||a.Kg;if(b.experiments.g("html5_new_autoplay_redux")){var d=a.Kg||iB(b);d!=c&&g.Q(Error("b/64881898 a "+d),"WARNING");return d}return c};
XD=function(a,b){var c=a.Kg||!b.experiments.g("html5_deprecated_autoplay_killswitch")&&b.bb;if(b.experiments.g("html5_new_autoplay_redux")){var d=!1;WD(a,b)&&(d="detailpage"==UD(a,b)?a.vk||0<a.Uf:!0);d!=c&&g.Q(Error("b/64881898 b "+d),"WARNING");return d}return c};
YD=function(a,b){var c=1,d=b.experiments.l("html5_default_ad_gain");d&&a.isAd()&&(c=d);return Math.min(1,Math.pow(10,-a.relativeLoudness/20))||c};
nD=function(a){return a&&a.annotations&&(a=a.annotations[0],a.playerAnnotationsUrlsRenderer)?a.playerAnnotationsUrlsRenderer:null};
sD=function(a){var b={};(0,g.G)(a.split(","),function(a){var c=a.split("=");2==c.length?b[c[0]]=c[1]:b[a]=!0});
return b};
ZD=function(a,b,c,d){this.videoData=a;this.g=b;this.reason=c;this.l=d};
g.aE=function(a){return(a=$D[a.toString()])?a:"YTP_ERROR_LICENSE"};
bE=function(){this.B=this.g=window.NaN;this.o=this.A=this.l=!1};
cE=function(a,b){return b>a.g&&b<a.g+5};
dE=function(a,b,c,d){if(d=1<d)a.A=!0;if(a.l)b!=a.g&&(a.l=!1);else if(0<b&&a.g==b)return c-a.B>(d||!a.A?1500:400);a.g=b;a.B=c;return!1};
eE=function(){var a=[],b=[];return{start:function(b){return a[b]},
end:function(a){return b[a]},
length:a.length}};
fE=function(a,b){b=void 0===b?",":b;var c="";if(a)for(var d=0;d<a.length;d++)c+=a.start(d).toFixed(3)+"-"+a.end(d).toFixed(3)+b;return c};
gE=function(a,b){if(!a)return-1;for(var c=0;c<a.length;c++)if(a.start(c)<=b&&a.end(c)>=b)return c;return-1};
hE=function(a,b){var c=gE(a,b);return 0<=c?a.end(c):window.NaN};
iE=function(a){return a&&a.length?a.end(a.length-1):window.NaN};
jE=function(a,b){var c=hE(a,b);return 0<=c?c-b:0};
kE=function(){};
lE=function(){g.J.call(this);this.o=this.l=null;this.F=this.C=!1;this.B=new g.kf;g.K(this,this.B)};
mE=function(a){a=a.g.seekable||eE();return 1>a.length?window.NaN:a.end(a.length-1)};
pE=function(a,b){var c="";b&&(nE(a,b),c=b.Of);a.Zc()&&""==c||(c&&a.Zc()!=c&&(oE(a,c),a.o&&(a.o.dispose(),a.o=null)),b&&b.g||a.load(),a.F||(a.addEventListener("volumechange",a.mq),a.F=!0))};
qE=function(a,b){var c=yx(a.g);return new zx(c,b)};
rE=function(a,b){if(!a.o||a.o.ga()){var c=new zx(yx(a.g),b);Ax(c);pE(a,c.B);a.o=c}};
sE=function(a,b){rE(a,b);var c=a.o;a.o=null;return c};
nE=function(a,b){a.l&&null!=b&&b.Of==a.l.Of||(a.l&&a.l.dispose(),a.l=b)};
uE=function(a){return jE(tE(a),a.getCurrentTime())};
vE=function(a){var b=tE(a);return 0<iE(b)&&a.getDuration()?hE(b,a.getCurrentTime()):0};
wE=function(a){var b=a.getDuration();return window.Infinity==b?1:b?vE(a)/b:0};
xE=function(a){return{vct:a.getCurrentTime().toFixed(3),vd:a.getDuration().toFixed(3),vpl:fE(a.g.played||eE()),vbu:fE(tE(a)),vpa:String(a.g.paused),vsk:String(a.g.seeking),ven:String(a.g.ended),vpr:String(a.dc()),vrs:String(a.g.readyState),vns:String(a.g.networkState),vec:String(a.Td()),vvol:String(a.getVolume())}};
yE=function(a){a=a.Td();switch(a){case 1:return"aborted";case 2:return"network";case 3:return"decode";case 4:return"unsupported";case 5:return"encrypted";default:return a.toString()}};
zE=function(a,b,c){g.Fe.call(this,b,a);this.g=c||null};
g.AE=function(a,b){this.l=a||64;this.g=void 0===b?null:b};
FE=function(a,b,c,d){function e(a){return!!d&&d.g(a)}
if(g.T(a,128))return a;BE=BE||e("html5_dompause_is_paused_killswitch");var f=a.l,k=a.g,l=b.target;if(!g.T(a,64)||"ended"!=b.type&&"pause"!=b.type)if("pause"==b.type&&l.g.ended||"ended"==b.type&&(l.g.ended||1>Math.abs(l.getCurrentTime()-l.getDuration())))0<l.g.networkState&&l.Zc()&&(f=14,k=null);else if("pause"==b.type)g.T(a,256)?(f^=256)||(f=64):g.T(a,32)||g.T(a,2)||g.T(a,4)||(f=4,g.T(a,1)&&g.T(a,8)&&(f|=1),k=null);else if("playing"==b.type)e("html5_ignore_playing_evt")?f=(f|8)&-5:(f=8,k=null,g.T(a,
32)&&(f|=32),g.T(a,1)&&dE(c,l.getCurrentTime(),g.It(),uE(l))&&(f|=1));else if("error"==b.type){if(c=CE(l))k=c,f|=128}else if("progress"!=b.type||e("html5_ignore_playing_evt"))if("seeked"==b.type)f&=-17;else if("seeking"==b.type)f|=16,0>=uE(l)&&(f|=1),f&=-3;else if("waiting"==b.type)g.T(a,2)||(f|=1);else if("timeupdate"==b.type)e("html5_ignore_playing_evt")?((g.T(a,8)||g.T(a,16))&&cE(c,l.getCurrentTime())&&(f=8),dE(c,l.getCurrentTime(),g.It(),uE(l))&&(f|=1)):(b=2<l.g.readyState,c.o=c.o||b,g.T(a,16)||
g.T(a,4)||(dE(c,l.getCurrentTime(),g.It(),uE(l))?f|=1:e("html5_timeupdate_readystate_check")&&!b&&c.o||(f&=-2)),1<l.g.readyState&&0<l.getCurrentTime()&&(f&=-65));else return a;else DE(a)&&dE(c,l.getCurrentTime(),g.It(),uE(l))&&(f|=1);return EE(a,f,k)};
EE=function(a,b,c){return b==a.l&&c==a.g||void 0!=b&&(b&128&&!c||b&2&&b&16)?a:new g.AE(b,c)};
GE=function(a,b){return EE(a,a.l|b)};
HE=function(a,b){return EE(a,a.l&~b)};
IE=function(a,b,c){return EE(a,(a.l|b)&~c)};
g.T=function(a,b){return!!(a.l&b)};
g.JE=function(a,b){return b.l==a.l&&b.g==a.g};
DE=function(a){return g.T(a,8)&&!g.T(a,2)&&!(!BE&&g.T(a,1024))};
KE=function(a){return g.T(a,64)&&!g.T(a,8)&&!g.T(a,4)};
g.LE=function(a){return g.T(a,1)&&!g.T(a,2)};
ME=function(a){return g.T(a,128)?-1:g.T(a,2)?0:g.T(a,64)?-1:g.T(a,1)&&!g.T(a,32)?3:g.T(a,8)?1:g.T(a,4)?2:-1};
CE=function(a){if(2==a.Td())var b="progressive.net.retryexhausted";else if(3==a.Td())b="fmt.decode";else if(4==a.Td())b="fmt.unplayable";else if(5==a.Td())b="drm.unavailable";else return null;var c="mediaElem.1";NE(a)&&(c+=";msg."+NE(a));.001>Math.random()&&(c+=";gpu."+(0,g.OE)());return{errorCode:b,errorDetail:c,message:g.S("YTP_ERROR_GENERIC_WITHOUT_LINK"),messageKey:"YTP_ERROR_GENERIC_WITHOUT_LINK"}};
g.PE=function(a,b){this.state=a;this.g=b};
QE=function(a,b){return g.T(a.state,b)&&!g.T(a.g,b)?1:!g.T(a.state,b)&&g.T(a.g,b)?-1:0};
RE=function(){this.endTime=this.startTime=-1;this.Zl="-";this.playbackRate=1;this.visibilityState=0;this.Rl="";this.volume=this.connectionType=this.tf=0;this.muted=!1};
TE=function(a){this.l=a;this.g=0;this.B=-1;this.K=this.l.Yc().volume;this.I=this.l.Yc().muted;this.C=window.NaN;this.o=0;this.Sa=[];this.A=SE(this.l);this.F=this.H=0};
g.UE=function(a){a.A.startTime=a.o;a.A.endTime=a.g;a.Sa.length&&g.La(a.Sa).isEmpty()?a.Sa[a.Sa.length-1]=a.A:a.Sa.length&&a.A.isEmpty()||a.Sa.push(a.A);a.H+=a.g-a.o;a.A=SE(a.l);a.o=a.g};
VE=function(a){return a.H+a.l.l()-a.o};
WE=function(a){a.Sa.length&&a.g==a.o||g.UE(a);var b=a.Sa;a.Sa=[];return b};
XE=function(a,b,c){c-=a.C;return b==a.g&&.5<c};
YE=function(a,b,c,d,e,f,k,l,m,n,p,u,v){this.videoData=a;this.g=b;this.Yc=c;this.C=d;this.l=e;this.B=f;this.P=k;this.K=l;this.L=m;this.F=n;this.A=p;this.H=u||function(){};
this.o=null;this.I=v||function(){}};
g.$E=function(a){return ZE(a)()};
ZE=function(a){if(!a.o){var b=g.B(function(a){var b=g.It();a&&631152E6>=b&&(g.Q(Error("invalid yt.global.now value: "+b)),b=(new Date).getTime()+2);return b},a.g.experiments.g("html5_validate_yt_now"));
a.o=g.B(function(a){return Math.round(b()-a)/1E3},b());
a.I()}return a.o};
aF=function(a){var b=a.Yc();g.Ia(b,a.videoData.Yc());return b};
cF=function(){return window.navigator.connection&&window.navigator.connection.type?bF[window.navigator.connection.type]||bF.other:0};
SE=function(a){var b=new RE;b.Zl=a.Yc().cc||"-";b.playbackRate=a.L();var c=a.A();0!=c&&(b.visibilityState=c);a.g.tf&&(b.tf=1);c=a.K();c.bc&&c.bc.id&&"und"!=c.bc.id&&(b.Rl=c.bc.id);b.connectionType=cF();b.volume=a.Yc().volume;b.muted=a.Yc().muted;return b};
eF=function(a){g.J.call(this);var b=this;this.g=a;this.l={};this.ya=1;this.R=window.NaN;this.o="N";this.C=this.aa=this.A=0;this.L=this.ba="";this.V=0;this.fa=-1;this.K=this.P=0;this.U=this.I=!1;this.ia=[];this.F=null;this.H=!1;(a=window.navigator.getBattery?window.navigator.getBattery():null)&&a.then&&a.then(function(a){b.F=a});
this.sa=(this.g.g.experiments.l("html5_disable_qoe_percentage")||0)>Math.floor(100*Math.random());this.g.g.experiments.g("html5_qoe_unstarted_in_initialization")&&g.dF(this,0,"vps",["N"])};
g.dF=function(a,b,c,d){var e=a.l[c];e||(e=[],a.l[c]=e);e.push(b.toFixed(3)+":"+d.join(":"))};
hF=function(a,b){b=0<=b?b:g.$E(a.g);var c=a.g.B();if(!(0,window.isNaN)(a.X)&&!(0,window.isNaN)(c.A)){var d=c.A-a.X;0<d&&g.dF(a,b,"bwm",[d,(c.F-a.wa).toFixed(3)])}a.X=c.A;a.wa=c.F;(0,window.isNaN)(c.bandwidthEstimate)||g.dF(a,b,"bwe",[c.bandwidthEstimate.toFixed(0)]);a.g.videoData.If&&c.g&&fF(a,"bwinfo",c.g);a.F&&g.dF(a,b,"bat",[a.F.level,a.F.charging?"1":"0"]);d=a.g.A();a.fa!=d&&(g.dF(a,b,"vis",[d]),a.fa=d);g.dF(a,b,"cmt",[a.g.l().toFixed(3)]);(d=cF())&&d!=a.V&&(g.dF(a,b,"conn",[d]),a.V=d);gF(a,b,
c);d=b;0<c.C&&!a.g.g.experiments.g("html5_new_e2e_latency_tracking")&&g.dF(a,d,"e2el",[c.C,c.H.toFixed(3),c.o.toFixed(3),c.K.toFixed(3),c.I.toFixed(3)]);null!==a.g.videoData.rj&&(a.l.acc=[a.g.videoData.rj.join(":")])};
gF=function(a,b,c){if(!(0,window.isNaN)(c.l)){var d=c.l;c.B<d&&(d=c.B);g.dF(a,b,"bh",[d.toFixed(3)])}};
iF=function(a){var b=0,c;for(c in a.l)b+=c.length+Sk(a.l[c],function(a,b){return a+b.length},0);
1E3<b&&(new g.P(a.B,0,a)).start()};
jF=function(a,b,c,d){var e=a.g.l();c=[c,e.toFixed(3)];d&&c.push(d);g.dF(a,b,"error",c)};
lF=function(a,b){if(g.T(b,128))return"ER";if(g.T(b,512))return"SU";if(g.T(b,16)||g.T(b,32))return"S";var c=kF[ME(b)];a.g.g.experiments.g("tvhtml5_background_su")&&g.gB(a.g.g)&&"B"==c&&3==a.g.A()&&(c="SU");"B"==c&&g.T(b,4)&&(c="PB");return c};
mF=function(a,b){var c=a.l.cat||[];c.push(b);a.l.cat=c};
fF=function(a,b,c,d){var e=a.l.ctmp||[],f=-1!=a.ia.indexOf(b);f||a.ia.push(b);d&&f||(d||(c="t."+g.$E(a.g).toFixed(3)+";"+c),e.push(b+":"+c),a.l.ctmp=e,iF(a))};
nF=function(a,b,c,d){this.Ua=b;this.segments=[];this.experimentIds=[];this.Jf=this.Ka=this.fa=this.ba=this.Ga=this.U=this.autoplay=this.autonav=!1;this.ma="yt";this.ag=this.l=this.B=null;this.R=!1;this.A="watchtime"==c;this.o="playback"==c;this.H="delayplay"==c;this.F="atr"==c;this.Ha="engage"==c;this.zh=!1;this.zb=this.F?"/api/stats/"+c:"//"+b.Nh+"/api/stats/"+c;d&&(this.fa=d.fs,d.rtn&&(this.l=d.rtn),this.A?(this.Wa=d.state,0<d.rti&&(this.B=d.rti)):(this.Ma=d.mos,this.Za=d.volume,d.at&&(this.adType=
d.at)),d.autonav&&(this.autonav=d.autonav),d.inview&&(this.nb=d.inview),d.size&&(this.sa=d.size));this.Ta=g.gc(b.B);this.U=b.H;this.wa=b.Ra;this.experimentIds=b.experiments.experimentIds;this.X=b.Bc;this.ma=b.Wa;this.region=b.region;this.Ya=b.Ta?b.Ta.toString():"";this.userAge=b.userAge;this.userGender=b.userGender;this.Ab=g.Wt();this.zh=b.Ec;c=this.Ua;this.I=a.oauthToken||c.sa;this.adFormat=a.adFormat;this.autoplay=XD(a,c);this.autonav=a.vk||this.autonav;this.contentVideoId=VD(a,c);this.ag=a.ag;
this.clientPlaybackNonce=a.clientPlaybackNonce;a.vssCredentialsToken&&(this.P=a.vssCredentialsToken,this.ya=a.Hl);a.mdxEnvironment&&(this.mdxEnvironment=a.mdxEnvironment);this.Pe=a.Pe;this.je=a.je;a.Ba&&(this.ia=Cu(a.Ba),a.Hc&&Cu(a.Hc)!=this.ia&&(this.L=Cu(a.Hc)));this.Jf=a.Jf;this.ih=a.ih;a.oa&&(this.Ra=a.Ne?"dvr":"live");this.si=a.si;this.Fe=a.Fe;this.playbackId=a.playbackId;this.eventId=a.eventId;this.playlistId=a.hw||a.playlistId;this.il=a.il;this.Vf=a.Vf;this.gf=a.gf;this.tl=a.tl;this.subscribed=
a.subscribed;this.videoId=a.videoId;this.videoMetadata=a.videoMetadata;this.visitorData=a.visitorData;this.osid=a.osid;this.Ho=a.Ho;this.referrer=a.referrer;this.Ti=a.Jo||a.Ti;this.Gh=a.Gh;this.yl=a.yl;this.qg=a.qg;this.rb=UD(a,b)};
pF=function(a){var b={ns:a.ma,el:a.rb,cpn:a.clientPlaybackNonce,docid:a.videoId,ver:2,referrer:a.referrer,cmt:a.g(a.Pe),plid:a.playbackId,ei:a.eventId,fmt:a.ia,fs:a.fa?"1":"0",rt:a.g(a.bb),of:a.Ho,adformat:a.adFormat,content_v:a.contentVideoId,euri:a.wa,lact:a.Ab,live:a.Ra,cl:a.Ya,mos:a.Ma,osid:a.osid,state:a.Wa,vm:a.videoMetadata,volume:a.Za};a.subscribed&&(b.subscribed="1");g.Ia(b,a.Ta);a.autonav&&(b.autonav="1");a.autoplay&&(b.autoplay="1");a.U&&(b.dni="1");a.ba&&(b["final"]="1");a.Jf&&(b.splay=
"1");a.je&&(b.delay=a.je);a.X&&(b.hl=a.X);a.region&&(b.cr=a.region);g.t(a.userAge)&&a.userGender&&(b.uga=a.userGender+a.userAge);g.t(a.aa)&&(b.len=a.g(a.aa));!a.A&&0<a.experimentIds.length&&(b.fexp=a.experimentIds.toString());null!=a.l&&(b.rtn=a.g(a.l));a.Ti&&(b.feature=a.Ti);a.playlistId&&(b.list=a.playlistId);a.Vf&&(b.ctrl=a.Vf);a.gf&&(b.ytr=a.gf);a.tl&&(b.ssrt="1");a.L&&(b.afmt=a.L);a.V&&(b.lio=a.g(a.V));a.A?(b.idpj=a.ih,b.ldpj=a.si,null!=a.B&&(b.rti=a.g(a.B))):g.t(a.adType)&&(b.at=a.adType);(a.o||
a.H)&&a.ag&&(b.tst=a.ag);a.sa&&(a.o||a.H)&&(b.size=a.sa);null!=a.nb&&(a.o||a.H)&&(b.inview=a.g(a.nb));a.A&&(b.volume=oF(a,(0,g.I)(a.segments,function(a){return a.volume})),b.muted=oF(a,(0,g.I)(a.segments,function(a){return a.muted?1:0})),b.st=oF(a,(0,g.I)(a.segments,function(a){return a.startTime})),b.et=oF(a,(0,g.I)(a.segments,function(a){return a.endTime})),(0,g.gk)(a.segments,function(a){return 1!=a.playbackRate})&&(b.rate=oF(a,(0,g.I)(a.segments,function(a){return a.playbackRate}))));
(0,g.gk)(a.segments,function(a){return 0!=a.visibilityState})&&(b.vis=oF(a,(0,g.I)(a.segments,function(a){return a.visibilityState})));
(0,g.gk)(a.segments,function(a){return 0!=a.connectionType})&&(b.conn=oF(a,(0,g.I)(a.segments,function(a){return a.connectionType})));
(0,g.gk)(a.segments,function(a){return 0!=a.tf})&&(b.blo=oF(a,(0,g.I)(a.segments,function(a){return a.tf})));
(0,g.gk)(a.segments,function(a){return"-"!=a.Zl})&&(b.cc=(0,g.I)(a.segments,function(a){return a.Zl}).join(","));
if((0,g.gk)(a.segments,function(a){return!!a.Rl})){var c="au";
a.o&&(c="au_d");b[c]=(0,g.I)(a.segments,function(a){return a.Rl}).join(",")}ur()&&a.P&&(b.ctt=a.P,b.cttype=a.ya,b.mdx_environment=a.mdxEnvironment);
a.Ha&&(b.etype=g.t(a.C)?a.C:0);a.Gh&&(b.uoo=a.Gh);a.yl&&(b.upt=a.yl);a.qg&&(b.wpid=a.qg);return b};
oF=function(a,b){return(0,g.I)(b,a.g).join(",")};
qF=function(a){g.J.call(this);this.g=a;this.l=new eF(a);g.K(this,this.l);this.o=new TE(a);this.C="paused";this.F=window.NaN;this.I=[10,10,10,40];this.K=this.H=0;this.R=this.U=this.aa=this.V=this.P=this.L=this.B=!1;this.A=window.NaN};
rF=function(a,b,c){var d=g.$E(a.g);c=(0,window.isNaN)(c)?d:c;c=Math.ceil(c);var e=a.I[a.H];a.H+1<a.I.length&&a.H++;c+=e;d=1E3*(c-d);a.F=g.jr((0,g.A)(a.XE,a,c,b),d);return c};
sF=function(a,b){var c=aF(a.g);g.Ia(c,{state:a.C});c=new nF(a.g.videoData,a.g.g,b,c);c.Pe=a.g.l();a.g.videoData.oa||(c.aa=a.g.C());if(a.g.videoData.ka){var d=lz(a.g.videoData.ka,c.Pe);d&&(c.V=d-c.Pe)}c.bb=g.$E(a.g);c.segments=[SE(a.g)];return c};
tF=function(a,b){var c=sF(a,"watchtime");c.segments=b;c.Pe=a.o.g;return c};
uF=function(a){a.o.update();return tF(a,WE(a.o))};
xF=function(a){a.g.videoData.remarketingUrl&&!a.V&&(vF(a,a.g.videoData.remarketingUrl),a.V=!0);a.g.videoData.youtubeRemarketingUrl&&!a.aa&&(vF(a,a.g.videoData.youtubeRemarketingUrl),a.aa=!0);a.g.videoData.googleRemarketingUrl&&!a.U&&(vF(a,a.g.videoData.googleRemarketingUrl),a.U=!0);a.g.videoData.ppvRemarketingUrl&&!a.R&&(vF(a,a.g.videoData.ppvRemarketingUrl),a.R=!0);wF(a)};
yF=function(a){a.A=g.kr((0,g.A)(a.pl,a,"heartbeat"),3E4)};
wF=function(a){a.g.videoData.Dd.eventLabel=UD(a.g.videoData,a.g.g);a.g.videoData.Dd.playerStyle=a.g.g.g;a.g.videoData.al&&(a.g.videoData.Dd.feature="pyv");a.g.videoData.Dd.vid=a.g.videoData.videoId;var b=a.g.videoData.Dd;a=a.g.videoData;a=a.isAd()||!!a.al;b.isAd=a};
vF=function(a,b,c){a.g.g.Ec&&a.g.videoData.visitorData&&tr(b)?g.Ar(b,{Ac:c,headers:{"X-Goog-Visitor-Id":a.g.videoData.visitorData}}):g.Wr(b,c)};
zF=function(a,b){var c=a.l;g.dF(c,g.$E(c.g),"lra",[b]);fF(c,"live-readahead-seconds",b.toString())};
AF=function(a,b){Ev.call(this,a,b);this.g=!1;Gv(this,"getPresentingPlayerType",this.Ca);Gv(this,"addInfoCardXml",this.jC);Gv(this,"cueVideoByPlayerVars",this.kC);Gv(this,"loadVideoByPlayerVars",this.Gi);Gv(this,"preloadVideoByPlayerVars",this.Xn);Gv(this,"seekBy",this.Md);Gv(this,"updatePlaylist",this.GC);Gv(this,"updateLastActiveTime",this.FC);Gv(this,"updateVideoData",this.HC);Gv(this,"getPlayerResponse",this.getPlayerResponse);Gv(this,"getStoryboardFormat",this.getStoryboardFormat);Gv(this,"getProgressState",
this.Qf);Gv(this,"getHousebrandProperties",this.nC);Gv(this,"setPlaybackQualityRange",this.it);Gv(this,"getCurrentPlaylistSequence",this.mC);Gv(this,"canPlayType",this.Rn);Gv(this,"sendVideoStatsEngageEvent",this.Hg);Gv(this,"setCardsVisible",this.Hi);Gv(this,"handleGlobalKeyDown",this.rC);Gv(this,"getAudioTrack",this.Pf);Gv(this,"setAudioTrack",this.Zn);Gv(this,"getAvailableAudioTracks",this.Wn);Gv(this,"getMaxPlaybackQuality",this.oC);Gv(this,"getUserPlaybackQualityPreference",this.pC);Gv(this,
"setSizeStyle",this.BC);Gv(this,"forceFrescaUpdate",this.lC);Gv(this,"setAutonav",this.Zs);Gv(this,"setAutonavState",this.Un);Gv(this,"showControls",this.EC);Gv(this,"hideControls",this.sC);Gv(this,"getVisibilityState",this.df);Gv(this,"shouldSendVisibilityState",this.DC);Gv(this,"getVideoContentRect",this.ht);Gv(this,"setSafetyMode",this.AC);Gv(this,"setFauxFullscreen",this.wC);Gv(this,"cancelPlayback",this.Vn);Gv(this,"getVideoStats",this.jr);Gv(this,"updateSubtitlesUserSettings",this.Lk);Gv(this,
"getSubtitlesUserSettings",this.Gg);Gv(this,"resetSubtitlesUserSettings",this.Yn);Gv(this,"isFastLoad",this.tC);Gv(this,"isInline",this.uC);Gv(this,"isPeggedToLive",this.isPeggedToLive);Gv(this,"setMinimized",this.zC);Gv(this,"setInline",this.yC);Gv(this,"getSphericalConfig",this.VB);Gv(this,"setSphericalConfig",this.ct);Gv(this,"setBlackout",this.vC);Gv(this,"onAdUxClicked",this.ae);Gv(this,"getPlayerSize",this.Fg);Gv(this,"setGlobalCrop",this.xC);Gv(this,"wakeUpControls",this.eJ);Gv(this,"isMutedByMutedAutoplay",
this.Pz);Gv(this,"getVideoAspectRatio",this.qC);Gv(this,"setUseFastSizingOnWatch",this.CC)};
BF=function(a,b){this.o=a;this.l=b||null;this.A=!1};
CF=function(a,b){var c=a.o,d=g.lB(c)&&c.bb&&c.wd;if(c.Sc&&(iB(c)||g.EB(c)||d)&&!a.A){a.A=!0;g.cr("TIMING_ACTION")||g.br("TIMING_ACTION",a.o.csiPageType);a.o.Za&&g.br("CSI_SERVICE_NAME",a.o.Za);if(a.l){c=a.l.X;for(var e in c)g.FC(e,c[e],"");e=a.l.aa;for(var f in e)g.GC(f,e[f],"");f=a.l;f.X={};f.aa={}}g.GC("yt_pvis",JC(),"");g.GC("yt_pt","html5","");b&&!WC("pbs","")&&a.g("pbs",b);f=a.o;iB(f)&&"blazer"!=f.g||g.EB(f)||!WC("_start","")||QC("")}};
g.EF=function(a,b,c){this.start=a;this.end=b;this.B=DF++;a=c||{};this.Aa=a.id||"";this.C=a.priority||7;this.active=!0;this.visible=a.visible||!1;this.style=a.style||"ytp-ad-progress";this.namespace=a.namespace||"";this.color="";a.color&&(b=a.color.toString(16),this.color="#"+Array(7-b.length).join("0")+b);this.l=null;this.tooltip=a.tooltip;this.visible=this.visible;this.style=this.style;this.start=this.start};
FF=function(a){return-0x8000000000000==a?"BEFORE_MEDIA_START":0==a?"MEDIA_START":0x7ffffffffffff==a?"MEDIA_END":0x8000000000000==a?"AFTER_MEDIA_END":a.toString()};
GF=function(a){switch(a.style){case "ytp-chapter-marker":return 8;case "ytp-ad-progress":return 6;case "ytp-time-marker":return Number.POSITIVE_INFINITY;default:return 0}};
g.HF=function(a,b){return a.start-b.start||a.C-b.C||a.B-b.B};
IF=function(a,b){this.type=a||"";this.id=b||""};
g.JF=function(a){return new IF(a.substr(0,2),a.substr(2))};
g.PF=function(a){g.R.call(this);this.startSeconds=0;this.Sv=!1;this.Oa=0;this.title="";this.Lf=0;this.za=[];this.ri=this.xe=!1;this.fd=this.Nq=this.Si=null;this.views=0;this.jy=0!=a.fetch;this.ed=[];this.Oa=Math.max(0,a.index||0);this.loop=!!a.loop;this.startSeconds=a.startSeconds||0;this.UD="1"==a.mob;this.title=a.playlist_title||"";this.description=a.playlist_description||"";this.author=a.author||a.playlist_author||"";this.Eh={};a.video_id&&(this.za[this.Oa]=a);a.api&&("string"==typeof a.api&&16==
a.api.length?a.list="PL"+a.api:a.playlist=a.api);this.Ck=0;if(a.list)switch(a.listType){case "user_uploads":KF(this,a.list);break;case "user_favorites":LF(this,a.list);break;case "search":MF(this,a.list);break;default:a.playlist_length&&(this.Lf=a.playlist_length),this.listId=g.JF(a.list),a.video?(this.za=a.video.slice(0),this.xe=!0):NF(this)}else if(a.playlist){var b=a.playlist.toString().split(",");0<this.Oa&&(this.za=[]);(0,g.G)(b,function(a){a&&this.za.push({video_id:a})},this);
this.Lf=this.za.length;b=(0,g.I)(this.za,function(a){return a.video_id});
OF(this,"/list_ajax?style=json&action_get_templist=1",{video_ids:b.join(",")});this.xe=!0}this.setShuffle(!!a.shuffle);a.suggestedQuality&&(this.quality=a.suggestedQuality);this.Eh=fC(a,"playlist_");this.Zv=a.thumbnail_ids?a.thumbnail_ids.split(","):[]};
QF=function(a){return!!(a.playlist||a.list||a.api)};
RF=function(a){var b=a.Oa+1;return b>=a.Lf?0:b};
SF=function(a){var b=a.Oa-1;return 0>b?a.Lf-1:b};
TF=function(a,b){a.Oa=g.Uc(b,0,a.Lf-1);a.startSeconds=0};
KF=function(a,b){a.ri||(a.listId=new IF("UU","PLAYER_"+b),OF(a,"/list_ajax?style=json&action_get_user_uploads_by_user=1",{username:b}))};
LF=function(a,b){a.ri||(a.listId=new IF("FL","PLAYER_"+b),OF(a,"/list_ajax?style=json&action_get_favorited_by_user=1",{username:b}))};
MF=function(a,b){if(!a.ri){a.listId=new IF("SR",b);var c={search_query:b};a.UD&&(c.mob="1");OF(a,"/search_ajax?style=json&embeddable=1",c)}};
NF=function(a){if(!a.ri){var b=b||a.listId;b={list:b};var c=a.Eb();c&&c.videoId&&(b.v=c.videoId);OF(a,"/list_ajax?style=json&action_get_list=1",b)}};
OF=function(a,b,c){a.jy&&g.Ar(g.Jg(b,c),{format:"JSON",ib:(0,g.A)(function(a,b){UF(this,b)},a),
onError:(0,g.A)(function(){this.O("error")},a)})};
UF=function(a,b){if(b.video&&b.video.length){a.title=b.title;a.description=b.description;a.views=b.views;a.author=b.author;b.loop&&(a.loop=b.loop);var c=a.Eb();a.za=[];(0,g.G)(b.video,function(a){a&&(a.video_id=a.encrypted_id,this.za.push(a))},a);
a.Lf=a.za.length;b.index?a.Oa=b.index:a.Zh(c);a.setShuffle(!1);a.ri=!1;a.xe=!0;a.Ck++;a.Si&&a.Si()}};
VF=function(a,b,c){this.audio=a;this.video=b;this.reason=c};
WF=function(a){this.l=window.Float32Array?new window.Float32Array(a):Array(a);this.o=this.g=a-1};
XF=function(a){return a.l[a.g]||0};
YF=function(a){for(var b=[];a.o!=a.g;)a.o=(a.o+1)%a.l.length,b.push(a.l[a.o]);return b};
ZF=function(){this.A=new WF(50);this.g=null;this.B=this.o=0;this.l=null};
$F=function(a,b){var c=YF(a.A);0!=c.length&&(b.C=c.length,b.H=Sk(c,function(a,b){return a+b},0),b.o=g.La(c),b.K=Math.min.apply(Math,c),b.I=Math.max.apply(Math,c))};
cG=function(a,b,c){g.R.call(this);var d=new aG;if("ULTRALOW"==a.latencyClass||b.g("html5_treat_latency_low_like_ultra_low")&&a.isLowLatencyLiveStream)d.o=!1;a.kh?d.l=3:g.PD(a)&&(d.l=2);if(Lr()){var e=b.l("html5_platform_minimum_readahead_seconds")||3;d.g=Math.max(d.g,e)}b.l("html5_minimum_readahead_seconds")&&(d.g=b.l("html5_minimum_readahead_seconds"));b.l("html5_maximum_readahead_seconds")&&(d.F=b.l("html5_maximum_readahead_seconds"));b.g("html5_force_adaptive_readahead")&&(d.o=!0);b.l("html5_allowable_liveness_drift_chunks")&&
(d.B=b.l("html5_allowable_liveness_drift_chunks"));b.g("html5_new_peg_to_live_v2")&&(d.A=!0);b.g("html5_disable_use_media_max_time")&&(d.C=!0);this.g=d;this.A=a;this.H=c;this.o=[];this.C=0;this.B=1!=this.g.l;this.F=!1;b=(0,window.isNaN)(a.liveChunkReadahead)?3:a.liveChunkReadahead;a.kh&&b--;a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||b++;this.l=bG(this,b)};
eG=function(a){return dG(a)*a.l};
gG=function(a,b){var c=fG(a);var d=a.g.B;if(a.g.A&&!a.F||!a.g.A&&!a.isPeggedToLive())d=Math.max(d-1,0);d*=dG(a);return b>=c-d};
fG=function(a){return Math.max(hG(a)-eG(a),a.A.tb())};
hG=function(a){return a.g.C?a.A.kd():a.H()};
iG=function(a,b,c){3==a.g.l&&((b=gG(a,b),c||b)?b&&(a.B=!0):a.B=!1)};
jG=function(a,b){var c=gG(a,b);a.F!=c&&a.O("livestatusshift",c);a.F=c};
dG=function(a){return a.A.ka?kz(a.A.ka)||5:5};
bG=function(a,b){b=Math.max(Math.max(1,Math.ceil(a.g.g/dG(a))),b);return Math.min(Math.min(8,Math.floor(a.g.F/dG(a))),b)};
aG=function(){this.g=0;this.F=window.Infinity;this.o=!0;this.B=2;this.l=1;this.C=this.A=!1};
lG=function(a){this.g=new kG(0,0,null);this.A=8;this.C=[];this.o=[];this.B=this.H=window.NaN;this.K=this.l=this.I=0;this.F=window.NaN;this.U=0;this.P=void 0===a?!0:a;this.L=!1};
mG=function(a){return{startTime:a.F/a.l,duration:a.K/a.l}};
nG=function(a){return!(0,window.isNaN)(a.B)&&a.l?a.B/a.l:a.U};
oG=function(a,b,c){var d=b.getUint32(c);b=b.getUint32(c+4);a.g=new kG(b,d,a.g);return 8};
pG=function(a){a.l&&!(0,window.isNaN)(a.H)&&(a.B=Math.floor(a.H*a.l),a.H=window.NaN)};
qG=function(a){return 0==a.g.type||1836019574==a.g.type||1952867444==a.g.type||1936286840==a.g.type||1953653094==a.g.type||1836019558==a.g.type};
rG=function(a,b,c){for(var d=c;d<b.byteLength;d++)a.C.push(b.getUint8(d));0<c&&a.o.push(new window.DataView(b.buffer,b.byteOffset,c))};
sG=function(a,b,c){return new Wv(b,c,a.g.size,a.g.type,!0)};
kG=function(a,b,c){this.type=a;this.size=b;this.g=c;this.offset=this.version=0};
tG=function(a,b){this.l=a;this.C=this.B=!1;this.length=b?b:0;this.o=0;this.g=[];this.A=null;this.length?1!=this.l.length||this.l[0].Ja||(this.l[0].Ja=this.length):1==this.l.length||(0,g.Fn)(this.l,function(a){return!!a.range})};
uG=function(a){var b=a.length-a.o;(0,g.G)(a.g,function(a){b+=a.range.length});
return b};
vG=function(a,b,c,d,e){this.g=a;this.fa=b;this.ia=c;this.ba=e;this.R=this.l=window.NaN;this.X=0;this.K=this.L=this.o=this.C=window.NaN;this.aa=this.V=this.A=!1;this.B=0;this.H=Wz(this.g);this.U=this.P=window.NaN;this.I=d;this.F=null};
wG=function(a){return{rt:(((0,g.H)()-a.l)/1E3).toFixed(2),lb:String(a.o),pt:a.P.toFixed(2),pb:String(a.fa),stall:a.B.toFixed(2),elbowTime:((a.R-a.l)/1E3).toFixed(2),elbowBytes:String(a.X)}};
xG=function(a,b,c){var d=(b-a.C)/1E3,e=c-a.o;if(a.A)!a.I&&0<e&&(.2<d||1024>e?(a.B+=d,.2<d&&Oz(a.g,.05,e)):Oz(a.g,d,e),a.aa=!0);else if(c>=a.g.policy.l){if(!a.I){var f=a.g;f.C.g(1,(b-a.l)/1E3);Pz(f)}a.R=b;a.X=c;a.A=!0}Sz(a.g,d,e);a.C=b;a.o=c};
yG=function(a,b,c){c=Math.round(c/1024);if(a.F){var d=b-a.L,e=c-a.K;d=Math.min(d,4095);e=Math.min(e,4095);a.F.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(e>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(e&63))}a.L=b;a.K=c};
zG=function(a){return a.o>=a.g.policy.l};
AG=function(a){return Math.max(0,((0,g.H)()-a.L)/1E3)};
BG=function(a){var b=a.fa-a.o;b=1E3*(b*a.H.stall+b/a.H.byterate);var c=(0,g.H)();b=zG(a)?b+c:b+Math.max(c,a.l+1E3*a.H.delay);a.U=b};
DG=function(a,b,c,d,e,f){this.status=0;this.I=this.response=null;this.U=d;this.B=c;this.V=e;this.F=f;this.A=[];this.l=null;this.o=this.g=0;this.Aa=CG++;this.R=window.NaN;this.C=null;a=new window.Request(a,{method:"GET",credentials:"include"});(0,window.fetch)(a).then(er((0,g.A)(this.dI,this)),er((0,g.A)(this.lt,this)));(0,g.H)();this.P=this.L=this.H=!1;this.K="";b()};
IG=function(a,b){a.o+=b.length;var c=b.length;var d=EG(a)?1:Math.max(FG(a)/2,16384);c=c>=d;d=b.length+a.g>FG(a);a.P?((c||d)&&0!==a.g&&GG(a),c?a.A.push(b):HG(a,b)):(HG(a,b),a.o>=(EG(a)?1:16384)&&GG(a))};
GG=function(a){a.P=!0;a.A.push(a.l.subarray(0,a.g));a.g=0;a.l=a.H?null:new window.Uint8Array(FG(a))};
HG=function(a,b){if(b.length+a.g>FG(a)){var c=new window.Uint8Array(a.g+b.length);c.set(a.l,0);a.l=c}a.l.set(b,a.g);a.g+=b.length};
JG=function(a){a.C.read().then(er((0,g.A)(a.HE,a)),er((0,g.A)(a.lt,a)));var b=(0,g.H)();a.R=b};
LG=function(a){if(a.B){a.H=!0;if(a.F.sa&&KG(a)&&!a.A.length&&!a.g){KG(a);if(!a.l||8>a.l.length)a.l=new window.Uint8Array(8);var b=new window.DataView(a.l.buffer,0,8);b.setUint32(0,8);b.setUint32(4,1936419184);a.g=8;a.o+=8}a.U()}};
KG=function(a){if(a.ck())return!1;a=a.Ee("content-type");return"audio/mp4"==a||"video/mp4"==a};
EG=function(a){return a.F.Or&&KG(a)};
FG=function(a){a=a.ck()||0;return Math.max(16384,.125*a)};
MG=function(a,b,c,d,e){this.status=0;this.response=null;this.l=this.o=!1;this.g=new window.XMLHttpRequest;this.g.open("GET",a);this.g.responseType="arraybuffer";this.g.withCredentials=!0;this.g.onreadystatechange=(0,g.A)(this.KC,this);this.A=d;this.C=c;this.B=e;a=er((0,g.A)(this.IC,this));this.g.addEventListener("load",a,!1);this.g.addEventListener("error",a,!1);this.g.send();b();this.g.addEventListener("progress",er((0,g.A)(this.JC,this)),!1)};
NG=function(a,b,c,d){this.C=a;this.info=b;this.timing=c;this.R=d;this.state=1;this.g=this.V=null;this.P=this.K=0;this.L=new g.P(this.mI,a.F,this);this.A=this.o=this.H=null;this.B=0;this.F=this.l=null;this.I=0;this.aa=this.U=!1};
OG=function(a){return a.o?Ox(a.o.g):""};
PG=function(a){var b=wG(a.timing);b.shost=OG(a);b.rn=a.K.toString();a.B&&(b.rc=a.B.toString());b.itag=""+Cu(a.info.ra[0].g.info);b.ml=""+ +a.info.ra[0].g.Mc();b.sq=""+a.info.ra[0].na;410!=a.B&&500!=a.B&&503!=a.B||(b.fmt_unav="true");a.g&&a.g.ao()&&(b.msg=a.g.ao());return b};
QG=function(a){OG(a);return Lx(a.R,OG(a))};
SG=function(a){if("net.timeout"==a.A){var b=a.timing,c=(0,g.H)();c=c>b.l&&4E12>c?c:(0,g.H)();yG(b,c,1024*b.K);var d=(c-b.l)/1E3;if(!b.I)if(zG(b))b.B+=(c-b.C)/1E3,Qz(b.g,b.o,b.B);else{var e=b.g;e.C.g(1,d);Pz(e);b.R=c}e=b.g;var f=b.P,k=b.ba;e.B.g(d,b.o/d);e.o=g.It();k||e.g.g(1,d-f);Sz(b.g,(c-b.C)/1E3,0)}else(0,g.H)();"net.nocontent"!=a.A&&("net.timeout"==a.A||"net.connect"==a.A?(b=QG(a),b.Ge+=1):(b=QG(a),b.g+=1),a.info.g.g++);RG(a,7)};
TG=function(a){if(1==a.state)return!0;a=QG(a);return 100>a.Ge&&6>a.g};
RG=function(a,b){a.state=b;if(5<=a.state){var c=a.timing;c.A&&(c.A=!1)}a.H&&a.H(a)};
UG=function(a){return(0,g.Fn)(a.info.ra,function(a){return 3==a.type})};
VG=function(a){if(a.g){var b=a.g;a.g=null;b.abort()}a=a.timing;a.A&&(a.A=!1)};
XG=function(a){var b=a.g.Ee("content-type"),c=a.g.ck();(b=(!WG(a)||!b||-1!=b.indexOf("text/plain"))&&(!c||2048>=c))&&WG(a)&&EG(a.g);return b};
YG=function(a,b){var c=(0,g.A)(a.MH,a),d=(0,g.A)(a.PH,a),e=(0,g.A)(a.OH,a),f=(0,g.A)(a.NH,a);return a.C.H&&(a.C.bk&&!(0,window.isNaN)(a.info.l)&&a.info.l>a.C.pf?0:"function"==typeof window.fetch&&window.ReadableStream&&UG(a))?new DG(b,d,e,c,f,a.C):new MG(b,d,e,c,f)};
WG=function(a){return a.g?a.g.Vv():!1};
ZG=function(a){return 2<=a.state&&!!a.l&&!!a.l.g.length};
$G=function(a,b){if(b||WG(a)&&!XG(a)){if(!a.l){var c;WG(a)||(c=a.g.wm());a.l=new tG(a.info.ra,c)}for(;a.g.xg();){c=a.l;for(var d=a.g.Nv(),e=b&&!a.g.xg(),f=0,k=0,l=g.q(c.l),m=l.next();!m.done;m=l.next())if(m=m.value,m.range&&f+m.Ja<=c.o)f+=m.Ja;else{var n=c,p=m;if(1==p.type){n.B=!0;var u=!1}else 3==p.type||4==p.type?(p=n.B&&!n.C,n.C=!0,u=p):u=!1;n=c;var v=c.o-f,C=k;p=d;u=u||m.g.ws();var D=p.length-C;m.range&&(D=Math.min(m.Ja-v,D));v=Nw(m,m.l+v,D,m.range?m.l+v+D==m.range.length:!!e);var E=Dw(p.byteOffset,
p.length);C=Dw(p.byteOffset+C,D);n.g.push(new gx(v,p.buffer,C,E,u));n=D;c.o+=n;k+=n;f+=m.Ja;if(k==d.length)break}}}};
aH=function(a){for(var b=new window.Uint8Array(0),c=new window.DataView(a.buffer,a.byteOffset,a.length),d=0;d<a.length-8;){var e=c.getUint32(d);if(1>=e)break;var f=c.getUint32(d+4);if(1836019574==f)d+=8;else{if(1886614376==f){f=a.subarray(d,d+e);var k=new window.Uint8Array(b.length+f.length);k.set(b);k.set(f,b.length);b=k}d+=e}}return b};
bH=function(a){a=Aw(a);(0,g.G)(a,function(a){return!a.l});
return(0,g.I)(a,function(a){return new window.Uint8Array(a.data.buffer,a.offset+a.data.byteOffset,a.size)})};
cH=function(a){return g.$d(a,!0).replace(/[\.]{1,2}$/,"")};
dH=function(a,b){g.R.call(this);this.F=0;this.o=a;this.g=[];this.A=null;this.K=b;this.B=this.H=window.NaN;this.U=null;this.V=(0,g.A)(function(a){this.o.oj&&(this.O("timestamprewrite",a),this.o.oj=!1)},this);
this.R=this.L=this.C=this.l=null;this.P=!1;this.I=null;this.o.ya&&(this.l=new lG(this.o.ia))};
eH=function(a){return a.g.length?a.g[0]:null};
fH=function(a){return a.g.length?a.g[a.g.length-1]:null};
hH=function(a,b,c){b=gH(a,b,c);(0,g.G)(b,function(b){a.g.push(b)})};
iH=function(a){return(0,g.gk)(a.g,function(a){return a.info.o})};
jH=function(a,b){if(b){var c=g.Na(a.g,function(a){return a.info.o});
-1!=c&&(a.g=g.cb(a.g,0,c+1))}else a.g=[]};
kH=function(a){if(!a.g.length)return 0;for(var b=a.g[0].o.length,c=1;c<a.g.length;c++)a.g[c].g!=a.g[c-1].g&&(b+=a.g[c].o.length);a.A&&(b+=a.A.o.length);return b};
lH=function(a){return(0,g.I)(a.g,function(a){return a.info})};
mH=function(a){return a.l?nG(a.l):a.H||0};
gH=function(a,b,c){if(!c.verify()||c.info.g.ln()){var d=Lw(c.info);d.verification="1";a.O("error",d||{})}c.pd&&c.info.g.info.video&&ly(c.info.g,hx(c));a.K.info.Ob&&Gu(c.info.g.info)&&(c.info.H=bH(hx(c)));c.info.o&&(a.R=c.info);if(!a.K.Cd()){2==c.info.g.info.containerType&&(d=hx(c),c.pd&&c.info.g.info.video&&Xw(d));if(a.C){d=c.info;var e=a.C;d.na=e.l;d.C=e.o}!a.L||(a.o.Tc?Iw(a.L,c.info,!0):Jw(a.L,c.info))||(a.l&&a.l.reset(),a.H=window.NaN,a.F=0);a.L=c.info;a.l?c=nH(a,c):(d=(0,window.isNaN)(a.B)?(0,window.isNaN)(a.H)?
c.info.startTime:a.H:a.B,a.B=window.NaN,a.o.ia&&!jx(c,d)?(d=Lw(c.info),d.smst="1",a.O("error",d||{})):a.H=d+kx(c));if(!c)return[];if(oH(a,c)){d=c;if(Gu(d.info.g.info))if(e=hx(d),e=iw(e,0,1701671783)){0==e.data.getUint32(e.dataOffset)&&e.skip(4);$v(e);$v(e);Yv(e);Yv(e);Yv(e);Yv(e);var f=new window.Uint8Array(new window.ArrayBuffer(e.size-e.g));var k=new window.Uint8Array(e.data.buffer,e.offset+e.g,e.size-e.g);f.set(k);e.g=e.size;f=f.buffer;e=e.offset;f=String.fromCharCode.apply(String,new window.Uint8Array(f));
e=(f=hw(f))?new fw(f,e):null}else e=null;else e=new Pw(hx(d)),f=e.g,e.g=0,k=null,Rw(e,[408125543,307544935,29555,26568,17543])&&(k=Uw(e,!0),k=String.fromCharCode.apply(String,ax(e,k)),k=(k=hw(k))?new fw(k):null),e.g=f,e=k;d.l=e;c.l&&(a.C=c.l,a.P=!!a.l,d=c.info,e=a.C,d.na=e.l,d.C=e.o,d=a.L,e=a.C,d.na=e.l,d.C=e.o)}a.o.nj&&oH(a,c)&&yw(hx(c),1701671783);e=c;if(a.C)if(e.info.o){a.P=!1;a.I=null;d=a.C;if(a.l)e=mG(a.l),f=a.l,f.F=window.NaN,f.K=0,f=e.startTime,e=e.duration;else{if(Gu(e.info.g.info)){f=e.info.g.g;
for(var l=k=window.NaN,m=0,n=new window.DataView(e.g);pw(n,m);){var p=qw(n,m);1936286840==p.type?l=vw(p):1836476516==p.type?l=mw(p):1952867444==p.type&&(0,window.isNaN)(k)&&(k=uw(p));m=rw(p.type)?m+8:m+p.size}!l&&f&&(l=nw(f));f=k/l}else f=new Pw(hx(e)),k=e.pd?f:new Pw(new window.DataView(e.info.g.g.buffer)),l=dx(k),k=f.g,f.g=0,ex(f)?Tw(f,231)?(l=Yw(f)*l/1E9,f.g=k,f=l):(f.g=k,f=window.NaN):(f.g=k,f=window.NaN);f=f||e.info.B;e=kx(e)}e=new Tv(d.l,f,e,d.ingestionTime,"sq/"+d.l,void 0,void 0,!1);a.O("segmentinfo",
e);if(k=d.g["Cuepoint-Type"]?new ew((0,window.parseFloat)(d.g["Cuepoint-Playhead-Time-Sec"])||0,(0,window.parseFloat)(d.g["Cuepoint-Total-Duration-Sec"])||0,d.g["Cuepoint-Context"]):null)k.Pd+=f,a.O("cuepoint",k,d.l);d=e}else a.P&&!(0,window.isNaN)(a.l.F)?(d=a.C,e=mG(a.l).startTime,d=new Tv(d.l,e,a.C.H,d.ingestionTime,"sq/"+d.l,void 0,void 0,!0),a.I=d,a.O("placeholderinfo",d),a.P=!1):d=null;else d=null;e=c;if(a.o.mf)if(d)for(Ow(e.info,d),b=g.q(b.info.ra),e=b.next();!e.done;e=b.next())Ow(e.value,d);
else a.I&&Ow(e.info,a.I);c.info.o&&(a.C=null)}b=c;if(a.o.rk&&!a.K.Cd()&&(0==b.info.l||a.A)&&Gu(b.info.g.info)&&3==b.info.type&&!lx(b)&&b.info.duration&&!a.o.ya&&(b=c,a.F+=1E3*(kx(b)-b.info.duration),a.U&&Math.abs(a.F-a.U.F)>=a.o.nf))return b=c,c=(a.U.F-a.F)/1E3,d=kx(b)+c,e=new window.DataView(b.g),e=(e=lw(e,1936286840))?vw(e):window.NaN,(0,window.isNaN)(e)&&(e=b.info.g.g,f=new window.DataView(b.g),e=(f=lw(f,1836476516))?mw(f):e?nw(e):window.NaN),(e=pH(a,b,d*e))&&e.length&&(f=Lw(b.info),f.fds=d.toFixed(3),
f.com=a.F.toFixed(3),a.O("timestamprewrite",f),a.H+=c,a.F+=1E3*c),e?e:qH(a,b);if(!a.K.Cd()&&a.K.info.Ob&&a.o.ej)if(b=c,c=rH(a,b)){e=iw(c,0,1718909296);m=iw(c,0,1836019574);f=iw(c,0,1701671783);l=iw(c,0,1836019558);if(e&&m&&l){k=zw(c,m);d=zw(c,l);n=m.size;p=g.q(d);for(m=p.next();!m.done;m=p.next())m=m.value,1886614376==m.type&&(k.push(m),n+=m.size);l=e.size+n+l.size;f&&(l+=f.size);l=new aw(l);cw(l,e);dw(l,1836019574,k);f&&cw(l,f);e=g.q(d);for(m=e.next();!m.done;m=e.next())f=m.value,1886614376==f.type&&
(f.type=1936419184,f.data.setUint32(f.offset+4,1936419184));dw(l,1836019558,d);d=l.data.buffer}else d=null;a=d?sH(a,c,d,b):qH(a,b)}else a=qH(a,b);else a.o.bb&&a.K.Cd()&&(0==c.info.l||a.A)&&Gu(c.info.g.info)?(b=c,c=b.info.g.index.ym(b.info.na),a=(c=pH(a,b,c))?c:qH(a,b)):a=[c];return a};
oH=function(a,b){return!a.K.Cd()&&3==b.info.type&&0==b.info.l&&(Gu(b.info.g.info)||2==b.info.g.info.containerType)};
nH=function(a,b){var c;(c=!(0,window.isNaN)(a.B))||(c=a.l,c=!(!(0,window.isNaN)(c.B)||!(0,window.isNaN)(c.H)));c&&(c=a.l,c.H=(0,window.isNaN)(a.B)?(0,window.isNaN)(a.H)?b.info.startTime:a.H:a.B,pG(c),a.B=window.NaN);c=hx(b);a.l.process(c);if(a.o.zk){if(!a.l.L&&!b.info.o)return null}else if((0,window.isNaN)(a.l.F))return null;c=a.l;if(c.o.length)if(c.L=!1,1==c.o.length){var d=c.o[0];c.o.length=0;c=d}else{var e=0,f=g.q(c.o);for(d=f.next();!d.done;d=f.next())e+=d.value.byteLength;e=new window.Uint8Array(e);
f=0;var k=g.q(c.o);for(d=k.next();!d.done;d=k.next())d=d.value,e.set(new window.Uint8Array(d.buffer,d.byteOffset,d.byteLength),f),f+=d.byteLength;c.o.length=0;c=new window.DataView(e.buffer)}else c=null;if(!c)return null;d=Dw(c.byteOffset,c.byteLength);e=Nw(b.info,b.info.l+b.info.Ja-a.l.C.length-c.byteLength,c.byteLength,b.info.o);return new gx(e,c.buffer,d,d,b.pd)};
qH=function(a,b){if(a.A&&a.A!=b){var c=[a.A,b];a.A=null;return c}return[]};
pH=function(a,b,c){var d=rH(a,b);return d?(c=jw(d,c,a.V,a.o.Sc))?sH(a,d,c,b):null:null};
sH=function(a,b,c,d){b=xw(b);a.A&&(b-=a.A.range.length,a.A=null);a=ix(d,b);a[0].g=c;a[0].range=Dw(0,c.byteLength);a[0].o=Dw(0,c.byteLength);d=a[0];c=new window.DataView(c);c=!!iw(c,0,1836019574);d.pd=c;return a};
rH=function(a,b){if(a.A){var c=a.A,d=new window.Uint8Array(c.range.length+b.range.length);d.set(new window.Uint8Array(c.g,c.range.start,c.range.length));d.set(new window.Uint8Array(b.g,b.range.start,b.range.length),c.range.length);c=new window.DataView(d.buffer);xw(c);return c}c=hx(b);if((d=xw(c))&&d<c.byteLength)return c;a.A=b;return null};
tH=function(){this.g=this.l=!1};
uH=function(a,b){this.X=a;this.Ea=b;this.o=[];this.l=new dH(a,b);this.V=this.A=this.g=null;this.U=0;this.L=b.info.g;this.I=this.H=!1;this.F=new tH;this.P=0;this.C=b.Ib();this.B=-1;this.Bh=this.C?0:window.NaN;this.K=0};
vH=function(a,b){a.o.push(b);a.g=g.La(b.info.ra)};
xH=function(a,b){for(;a.o.length&&6==a.o[0].state;){var c=a.o.shift();wH(a,c);var d=c.timing;a.U=(d.C-d.l)/1E3;a.H||(c=c.info,a.K=Math.max(a.K,Math.max(0,c.ra[c.ra.length-1].A-b)))}a.o.length&&ZG(a.o[0])&&!Hw(a.o[0].info.ra[0])&&wH(a,a.o[0])};
wH=function(a,b){if(ZG(b)){b.U=!0;var c=b.l,d=c.g;c.g=[];c.A=g.La(d).info;(0,g.G)(d,(0,g.A)(a.aa,a,b))}};
AH=function(a,b){a.Ea.Mc();a.K=0;var c=yH(a,b);if(0<=c)return c;a.g=a.Ea.Bf(b).ra[0];zH(a)&&(a.A=null);a.P=0;return a.g.startTime};
DH=function(a,b){var c=a.l.g.length?fH(a.l).info:a.A;if(b&&c&&!c.o){var d=c.na;c=[];for(var e=g.q(a.o),f=e.next();!f.done;f=e.next())f=f.value,(0,g.gk)(f.info.ra,function(a){return a.na==d})?c.push(f):BH(a,f);
a.o=c;a.g=a.o.length?g.La(g.La(a.o).info.ra):null}else CH(a)};
EH=function(a){var b=0;(0,g.G)(a.o,function(a){var c=b;a=a.l&&a.l.length?uG(a.l):iy(a.info);b=c+a},a);
return b+=kH(a.l)};
FH=function(a,b){var c=!!a.Ea.info.video&&!!a.A&&!a.A.o,d=1<=b&&c;jH(a.l,d);a.H=d;DH(a,2<=b&&c)};
GH=function(a){a.F.l||a.F.start();FH(a,0);zH(a)&&(a.A=null)};
zH=function(a){return!!a.A&&a.A.C};
HH=function(a){var b=[];a.A&&b.push(a.A);b=g.$a(b,lH(a.l));(0,g.G)(a.o,function(a){(0,g.G)(a.info.ra,function(c){a.U&&(b=(0,g.Fd)(b,function(a){return!(a.g!=c.g?0:a.range&&c.range?a.range.start+a.l>=c.range.start+c.l&&a.range.start+a.l+a.Ja<=c.range.start+c.l+c.Ja:a.na==c.na&&a.l>=c.l&&(a.l+a.Ja<=c.l+c.Ja||c.o))}));
3!=c.type&&4!=c.type||b.push(c)})});
a.g&&!Gw(a.g,g.La(b),a.g.g.Cd())&&b.push(a.g);return b};
IH=function(a){if(!a.g||!a.g.Ja)return!1;var b=HH(a);if(!b.length)return!1;for(var c=1;c<b.length;c++){var d=1E-6>=Math.abs(b[c].B-b[c-1].A),e=b[c].B==b[c-1].B&&b[c].A==b[c-1].A&&b[c].na==b[c-1].na&&b[c].g==b[c-1].g&&b[c-1].l+b[c-1].Ja==b[c].l;if(!(a.X.wd?d||e:Jw(b[c-1],b[c])))return!1}return!0};
yH=function(a,b){if(IH(a)){a:{var c=HH(a);c=g.q(c);for(var d=c.next();!d.done;d=c.next())if(d=d.value,d.B<=b&&d.startTime+d.duration>=b){c=d;break a}c=null}if(c)return c.startTime}return window.NaN};
JH=function(a){return(0,g.gk)(a.o,function(a){return 4<=a.state})};
KH=function(a){return!(!a.g||!a.Ea.Mc()||a.g.g==a.Ea)};
LH=function(a){return KH(a)&&a.g.g.info.g<a.Ea.info.g};
MH=function(a,b,c){return(a=fH(a.l)?fH(a.l).info:a.A)&&!a.C?a.A>b&&a.A<b+c:!1};
CH=function(a){(0,g.G)(a.o,function(a){BH(this,a)},a);
a.o=[];a.g=null};
BH=function(a,b){if(b.U){var c=a.l,d=b.info;c.P=!1;c.I&&(c.O("placeholderrollback",c.I),c.I=null);if(c.l){var e=window.NaN;(0,window.isNaN)(c.B)&&(e=d.ra[0].range?d.ra[0].B:mG(c.l).startTime);c.l.reset();c.L=c.R;(0,window.isNaN)(e)||(c.B=e)}c.C=null}b.dispose()};
NH=function(a){return!!a.g&&-1!=a.g.na&&a.g.na<a.Ea.index.Re()};
OH=function(a){if(a.g){var b=fH(a.l);b&&3==b.info.type&&-1==a.g.na&&(a.g.na=b.info.na)}};
PH=function(a,b){this.g=a;this.l=b;this.o=1};
RH=function(a,b,c,d,e){e=void 0===e?!1:e;d/=a.o;var f=a.g.policy.g?1/Vz(a.g):Tz(a.g)+1/Vz(a.g);var k=Math.max(.9*(d-3),Rz(a.g)+a.g.policy.l*f);c=k/f*a.l.Uj/(b+c);c=Math.min(c,d);a.l.Ga&&e&&(c=Math.max(c,a.l.Ga));return QH(a,c,b)};
QH=function(a,b,c){return Math.ceil(Math.max(Math.max(65536,a.l.Aj*c),Math.min(Math.min(a.l.K,a.l.fa*c),Math.ceil(b*c))))};
SH=function(a,b){var c=QH(a,b.video?a.l.zv:a.l.Bc,b.g);return a.l.wa&&b.video?Math.max(c,a.l.wa):c};
TH=function(a){var b=Vz(a.g);if(a.l.xd)return b;var c=a.l.qj,d=1E-9+Rz(a.g);a.g.policy.g||(d+=c*Tz(a.g));b*=Math.min(1,c/(b*d));a.l.Mb&&(c=((Lz(a.g.g,.98)||0)-1)/2,c=Math.max(0,Math.min(1,c)),b*=1-a.l.Mb*c);return b};
UH=function(a){return TH(a)/a.o};
VH=function(a,b,c,d){this.X=a;this.C=b;this.H=c;this.K=d;this.o=this.U=this.fa=this.F=null;this.A="i";this.R=-1;this.l=this.B=null;this.g=[];this.aa={};this.V=this.L=0;this.ia=null;this.P=this.I=!1;this.ba=0};
$H=function(a,b,c,d){"m"==c&&a.F.isLocked()&&!b.isLocked()&&(c="a");a.I=a.I||d;if("m"==c&&b.isLocked())return a.A=c,WH(a,b),a.L=a.g.length-1,XH(a),YH(a),a.P=a.P||a.o!=a.l,a.o=a.l,new VF(a.B,a.o,c);d=a.F;d=d.l==b.l&&d.g==b.g&&d.o==b.o;if("m"==a.A&&a.F.isLocked()&&d)return null;"r"!=c||d||(a.R=-1);if("u"==c){if("m"==a.A)return null;a.fa=b;b=a.F}"m"==c&&(a.fa=null);a.fa?WH(a,Ru(b,a.fa)):WH(a,b);YH(a);if("r"==c&&a.l==a.o){if(d)return null;a.o=a.l;return new VF(a.B,a.l,c)}a.A=c;ZH(a);return null};
aI=function(a){return!!a.V&&1E4>=g.It()-a.V};
bI=function(a){return a.F.isLocked()};
ZH=function(a){a.o&&a.l&&cI(a,a.o.info)<cI(a,a.l.info)&&(a.I=a.I||"r"==a.A,a.I=a.C.gd?a.I||"v"==a.A&&a.l.info.video.width>a.o.info.video.width:a.I||a.l.info.video.width>1.6*a.o.info.video.width)};
dI=function(a){var b=a.A;a.A="a";a.R=g.It();a.I=!1;return new VF(a.U,a.o,b)};
WH=function(a,b){a.F=b;var c=a.K.videoInfos;if(!bI(a)&&(c=(0,g.Fd)(c,function(a){return a.g>this.C.C||4<this.H.g[a.id].A.g?!1:!0},a),aI(a))){c=(0,g.Fd)(c,function(a){return a.id!=this.ia.id},a);
var d=(0,g.Fd)(c,function(a){a=Cu(a);return"140"==a||"134"==a||"243"==a});
d.length&&(c=d)}c.length||(c=a.K.videoInfos);d=(0,g.Fd)(c,b.A,b);d.length||(d=[c[0]]);d.sort((0,g.A)(function(a,b){return cI(this,a)-cI(this,b)},a));
for(c=1;c<d.length;c++){var e=d[c-1],f=d[c];e.video.width>f.video.width?(g.Wa(d,c),c--):cI(a,e)*a.C.g>cI(a,f)&&(g.Wa(d,c-1),c--)}c=d[d.length-1];a.g=d;Jx(a.C,c)};
eI=function(a,b){if(b)a.B=a.H.g[b];else{var c=g.Oa(a.K.g,function(a){return!!a.bc&&a.bc.isDefault});
c=c||a.K.g[0];a.B=a.H.g[c.id]}XH(a)};
XH=function(a){if(!a.B.info.bc&&(a.B=a.H.g[a.K.g[0].id],1<a.K.g.length)){if(a.F.isLocked())var b=240>a.F.g;else{for(b=0;b+1<a.g.length&&"tiny"==a.g[b].video.quality;)b++;var c=UH(a.X)/a.C.g;b=cI(a,a.B.info)+cI(a,a.g[b])>c}b&&(a.B=a.H.g[a.K.g[1].id])}};
YH=function(a){if(bI(a))a.l=a.H.g[a.g[a.g.length-1].id];else{for(var b=Math.min(a.L,a.g.length-1),c=UH(a.X),d=cI(a,a.B.info),e=c/a.C.o-d;0<b&&!(cI(a,a.g[b])<=e);b--);for(c=c/a.C.g-d;b<a.g.length-1&&!(cI(a,a.g[b+1])>=c);b++);a.l=a.H.g[a.g[b].id];a.L=b;ZH(a)}};
fI=function(a){var b=a.C.o,c=UH(a.X)/b-cI(a,a.B.info);b=g.Pa(a.g,function(a){return cI(this,a)<c},a);
0>b&&(b=0);a.L=b;a.l=a.H.g[a.g[b].id]};
cI=function(a,b){if(!a.C.R)return b.g;if(!a.aa[b.id]){var c=a.H.g[b.id].index.br(a.ba,a.C.R);c=b.o&&a.o&&a.o.index.Vb()?c||b.o:c||b.g;a.aa[b.id]=c}return a.aa[b.id]};
gI=function(a,b){var c=bc(a.H.g,function(a){return Cu(a.info)==b});
if(void 0!=c)return $H(a,Ou("auto",c.info.video.quality,!0),"u",!0),c;throw Error("Itag "+b+" from server not known.");};
hI=function(){this.g=this.l=0;this.o=[]};
iI=function(a,b){return(a[b]<<24)+(a[b+1]<<16)+(a[b+2]<<8)+a[b+3]};
jI=function(a,b,c,d){this.l=a;this.C=b;this.B=d;this.A=c;this.g=0};
kI=function(a,b){this.l=a;this.I=b;this.F=this.C=this.H=this.g=null;this.A=this.o=window.NaN;this.B=!1};
nI=function(a,b,c){var d=(0,g.H)()/1E3-a.A<a.l.zb;if(d&&!a.g.ga()&&!(5<=a.g.state)&&AG(a.g.timing)<a.o)return window.NaN;var e=lI(a,a.C,a.F);if((0,window.isNaN)(e))return mI(a),window.NaN;if(eH(b.l)==a.H||(0,window.isNaN)(c)||c<e)return d?a.B=!0:mI(a),window.NaN;mI(a);return e};
mI=function(a){a.g=null;a.H=null;a.C=null;a.F=null;a.o=window.NaN;a.A=window.NaN;a.B=!1};
lI=function(a,b,c){b=(0,g.H)()/1E3-(a.I.l()||0)-b.B-a.l.hv;if(0>=b)return window.NaN;var d=c.g.index;if(!py(d,c.na,!0))return window.NaN;var e=d.getDuration(c.na);c=d.nd(c.na);a=Math.min(c+b,c+e-a.l.Yt);return a<=c?window.NaN:a};
oI=function(){this.g=[];this.l=g.HF};
pI=function(a,b){for(var c=[],d=g.q(a.g),e=d.next();!e.done&&!(e=e.value,e.contains(b)&&c.push(e),e.start>b);e=d.next());return c};
rI=function(a){return a.g.slice(qI(a,0x7ffffffffffff),a.g.length)};
qI=function(a,b){var c=ib(a.g,function(a){return b-a.start||1});
return 0>c?-(c+1):c};
sI=function(a,b){for(var c=window.NaN,d=g.q(a.g),e=d.next();!e.done;e=d.next())if(e=e.value,e.contains(b)&&((0,window.isNaN)(c)||e.end<c)&&(c=e.end),e.start>b&&((0,window.isNaN)(c)||e.start<c)){c=e.start;break}return c};
tI=function(a,b,c,d){g.J.call(this);this.A=window.NaN;this.I=!1;this.H=null;this.K=this.L=this.B=!1;this.aa=a;this.V=b;this.P=c;this.U=d;this.R=new g.P(this.o,250,this);g.K(this,this.R);this.F=new g.P(this.o,0,this);g.K(this,this.F);this.l=[];this.g=new oI};
uI=function(a,b){a.o();var c=a.g;if(1<b.length&&b.length>c.g.length)c.g=c.g.concat(b),c.g.sort(c.l);else for(var d=g.q(b),e=d.next();!e.done;e=d.next()){var f=e.value;if(!c.g.length||0<c.l(f,c.g[c.g.length-1]))c.g.push(f);else{e=c.g;var k=g.gb(e,f,c.l);0>k&&g.db(e,-(k+1),0,f)}}a.A=window.NaN;a.o()};
vI=function(a){return a.ga()?[]:a.g.g};
wI=function(a,b){var c=(0,g.Fd)(vI(a),function(a){return a.namespace==b});
a.C.apply(a,c);return c};
xI=function(a,b){var c=[];if(!b.length)return c;for(var d=0;d<b.length;d++){var e=b[d];e.active&&-1==a.l.indexOf(e)&&(a.l.push(e),c.push([1,e]))}return c};
yI=function(a,b){var c=[];if(!b.length)return c;b.sort(g.HF);for(var d=0;d<b.length;d++){var e=b[d];a.l.splice(a.l.indexOf(e),1);c.push([2,e])}return c};
zI=function(){var a=this;this.l=this.g=null;this.o=new g.If(function(b,c){a.g=b;a.l=c})};
AI=function(a,b,c,d,e){g.R.call(this);this.P=a;this.l=b;this.C=c;this.Ya=e||null;this.g=this.A=null;this.H=new PH(a,b);this.o=null;this.F=new VH(this.H,b,this.C,d);this.U=new g.P(this.Nd,0,this);g.K(this,this.U);this.ma=new g.P(this.Nd,1E3,this);g.K(this,this.ma);this.Za=new g.P(this.Nd,void 0,this);g.K(this,this.Za);this.Ta=new g.P(this.Nd,1E4,this);g.K(this,this.Ta);this.B=window.NaN;this.K=!1;this.I=window.NaN;this.Wa=0;this.aa=this.ya=this.R=!1;this.bb={};this.ia="";this.wa=this.Ga=0;this.Ua=
b.Nh?new hI:null;this.Ma=new Jz(5);this.V=!1;this.Ra={};this.Ka="";this.Ha=window.NaN;this.X=!1;a=this.l;this.L=a.rb&&this.C.l?new kI(a,this.Ma):null;this.ba=null};
BI=function(a,b){b=b||a.g&&a.g.g&&a.g.g.startTime||a.B;var c=a.g;var d=a.F;if(d.C.R){var e=d.l&&d.l.index.Cf(b)||0;d.ba!=e&&(d.aa={},d.ba=e,WH(d,d.F))}e=!bI(d)&&-1<d.R&&g.It()-d.R<1E3*d.C.fg;var f=3*cI(d,d.l.info)<UH(d.X);if(!e||f)d.V&&!aI(d)&&(d.V=0,WH(d,d.F)),XH(d),YH(d),d.P=d.P||d.l!=d.o;d.l.index.Vb()||(d.ba=-1);d=d.l;c.Ea!=d&&(c.Ea=d);c=a.A;d=a.F.B;c.Ea!=d&&(c.Ea=d)};
CI=function(a,b){a.R=!0;a.ya=b};
g.DI=function(a,b){var c=a.g.Ea.info.mimeType;b.g=b.o.addSourceBuffer(a.A.Ea.info.mimeType);b.I?b.l=b.o.addSourceBuffer(c):b.l=new ux;a.o=b;a.A.I=!1;a.g.I=!1;a.A.A=null;a.g.A=null;a.resume();Fx(b)&&(b.g.addEventListener("updateend",(0,g.A)(a.Nd,a),!1),b.l.addEventListener("updateend",(0,g.A)(a.Nd,a),!1),b.g.addEventListener("error",(0,g.A)(a.Pk,a,!0),!1),b.l.addEventListener("error",(0,g.A)(a.Pk,a,!1),!1));a.gc("msa");g.FC("msa",void 0,"video_to_ad");uC.measure&&uC.getEntriesByName("mark_vta").length&&
uC.measure("measure_vta_to_msa","mark_vta");a.sa&&a.fa&&(c=g.z("yt.scheduler.instance.enablePriorityThreshold"))&&c(1);a.Nd()};
FI=function(a){a.o&&a.o.g&&a.o.g.removeEventListener&&(a.o.g.removeEventListener("updateend",(0,g.A)(a.Nd,a),!1),a.o.l.removeEventListener("updateend",(0,g.A)(a.Nd,a),!1),a.o.g.removeEventListener("error",(0,g.A)(a.Pk,a,!0),!1),a.o.l.removeEventListener("error",(0,g.A)(a.Pk,a,!1),!1));a.o=null;CI(a,!1);EI(a,!1)};
GI=function(a){a.o&&Cx(a.o)&&FI(a)};
HI=function(a,b,c){if(!b.F.l||!c.remove)return!1;if(c.updating)return!0;if(!b.F.g&&c.buffered.length)return a=c.buffered.end(c.buffered.length-1),c.remove(0,a),b.F.g=!0;b.F.reset();a.O("seekelementrequired");return!1};
KI=function(a,b,c){if(a.R&&(!Xz(a.P)||a.ya))return!1;if(a.C.l){if(1<a.l.Ha&&0<b.o.length&&b.g&&-1==b.g.na||b.o.length>=a.l.Ha&&!a.l.ma||!a.l.ij&&0<b.o.length&&!a.V)return!1;if(b.C)return!(0,window.isNaN)(a.Ha)}if(!(b.g||a.C.l&&a.l.ma&&b.C)){if(!b.Ea.Mc())return!1;AH(b,a.B)}var d=b.o.length+c.o.length;(JH(b)||JH(c)||a.C.isLive&&(!a.l.ma||!b.o.length))&&--d;if(d+1>=a.l.qf)return!1;d=b.g;if(!d)return!0;if(!dy(d.g.A))return!1;4==d.type&&d.g.Mc()&&(b.g=g.La(d.g.ll(d)),d=b.g);!d.C&&!d.g.Dg(d)||d.g.info.audio&&
4==d.type?a=!1:LH(b)&&!a.l.U?a=!0:(!(c=d.C||EH(b)&&EH(b)+EH(c)>a.l.aa||!!(c.g&&!c.g.C&&c.g.A<d.A)&&(!a.C.l||c.g.A&&d.A))&&(c=3==d.type)&&(d=d.A,b=II(a,b,!0),!bI(a.F)&&0<a.l.L&&(c=(g.It()-a.Wa)/1E3,b=Math.min(b,a.l.L+a.l.Ab*c)),b=a.B+b,a.l.Ya?(c=Math.min(b,JI(a)+a.l.Ya),c!=b&&a.ze("mrl","ori."+b+";mod."+c,!0),a=c):a=b,c=d>a),a=c?!1:!0);return a};
LI=function(a,b,c){if((!a.o||Bx(a.o)||Fx(a.o))&&!a.K&&a.F.I&&!a.l.Gc){var d=a.B;a=a.H;c=RH(a,b.Ea.info.g,c.Ea.info.g,0);var e=a.g.policy.g?Rz(a.g)+c/Vz(a.g):Rz(a.g)+c*Tz(a.g)+c/Vz(a.g);d+=Math.max(e,e+a.l.Ua-c/b.Ea.info.g);a:{if(b.o.length){if(b.o[0].info.ra[0].startTime<=d)break a;CH(b)}a=b.l;for(c=a.g.length-1;0<=c;c--)a.g[c].info.startTime>d&&a.g.pop();b.o.length?b.g=g.La(g.La(b.o).info.ra):b.l.g.length?b.g=fH(b.l).info:b.g=b.A;b.g&&d<b.g.startTime&&(b.P=0,b.g=b.Ea.Bf(d,!0).ra[0])}}};
OI=function(a,b,c){KI(a,b,c);var d=b.g;if(b.C)a.V=!0,d=b.Ea.Bf(window.Infinity),d.l=a.Ha;else if(b.g.g.Mc()){!LH(b)||a.l.U||a.C.l||(LI(a,b,c),b.g||AH(b,a.B));d=b.g;var e=d.A-a.B,f=!d.range||0==d.Ja&&0==d.l?0:d.range.length-(d.l+d.Ja),k=d.g;if(KH(b)){var l=Math.min(a.l.Ka,.5*II(a,b,!0));l=LH(b)||e<=l}else l=!1;l&&0==f&&(a.C.l?k=b.Ea:(k=d.startTime+MI,d.Ja&&(k+=d.duration),AH(b,k),d=b.g,k=d.g));k.Cd()?(f=a.F,c=RH(a.H,k.info.g,c.Ea.info.g,e,0<f.g.length&&0==f.L&&a.aa),e=KH(b),c=d.g.Cg(d,c),c.range&&
1<c.ra.length&&(e||c.g.g?c=d.g.Cg(d,c.ra[0].Ja):(e=c.ra[c.ra.length-1],k=e.Ja/c.range.length,!e.o&&.4>k&&(c=d.g.Cg(d,c.range.length-e.Ja)))),d=c):d=k.wi(d)}else d.g.Cd()?(c=RH(a.H,b.Ea.info.g,c.Ea.info.g,0),d=d.g.Cg(d,c)):d=d.g.wi(d);vH(b,NI(a,d))};
NI=function(a,b){if(3==b.ra[b.ra.length-1].type){a:{var c=a.F;var d=b.ra[0].g;if(d.info.video){if(c.o!=d){c.o=d;c=dI(c);break a}}else c.U=d;c=null}c&&a.O("videoformatchange",c)}c=iy(b);d=a.P;var e=a.H,f=Math.min(2.5,Rz(e.g));e=TH(e);c=new vG(d,c,c-f*e,a.l.jv&&a.V,Hw(b.ra[0]));a.l.Le&&(c.F=[]);c=new NG(a.l,b,c,a.Ra);d=(0,g.A)(a.QG,a);c.H=d;if(3==b.ra.length&&1==b.ra[0].type&&2==b.ra[1].type&&4==b.ra[2].type&&b.ra[0].g.info.video){d=a.F;f=[];if("i"==d.A||"a"==d.A||"u"==d.A)if(e=!1,Sy(d.H)){for(var k=
Math.max(0,d.L-2);k<d.L;k++){var l=Cu(d.g[k]);yu(d.g[k].video)||(e=!0);f.push(l)}if(!e&&d.C.hj)for(k=Math.max(0,d.L-3);0<=k&&!e;k--)yu(d.g[k].video)||(e=!0,f.push(Cu(d.g[k])))}c.V=f}c.start(Math.max(0,b.ra[0].B-a.B));b.ra[0].g.info.video&&(d=OG(c))&&(a.Ka=d.substr(0,d.indexOf(".")));return c};
SI=function(a){var b=-1!=a.g.B,c=-1!=a.A.B;if(!b||!c)if(b=!b&&eH(a.g.l),c=!c&&eH(a.A.l),b||c){c=b?a.g:a.A;b=b?a.A:a.g;var d=eH(c.l).info.na;if(-1!=b.B&&b.B!=d)a.l.ia&&oz(a.C,d,c==a.g),PI(c,b.B),QI(a,!1,"qoe.avsync",{start:"1",target:String(b.B),actual:String(d)});else{c.B=d;c.Bh=window.NaN;var e=Math.max(b.Ea.index.nd(b.B),c.Ea.index.nd(c.B));-1!=b.B&&(a.ba&&(a.ba.resolve(e+.1),a.ba=null),g.Cf(function(){return RI(a,e)}))}}};
PI=function(a,b){FH(a,0);AH(a,window.Infinity);var c=a.Bh;a.l.B=c;a.Bh=c;a.g.na=b-1};
TI=function(a){if(a.C.A)return!1;var b;if(b=a.K){b=a.H;var c=a.g,d=a.A;if(0==c.o.length&&0==d.o.length)b=!0;else{var e=0,f=lH(c.l).concat(lH(d.l));f=g.q(f);for(var k=f.next();!k.done;k=f.next())e+=k.value.Ja;c=c.Ea.info.g+d.Ea.info.g;e/=c;b=10<e?!0:10>c*(10-e)/UH(b)}(b=!b)||(b=a.g,b=0<b.o.length&&1==b.l.g.length&&eH(b.l).info.F<b.U)}if(b)return!0;if(!a.aa||!a.l.ba||10>a.B||360<a.g.Ea.info.video.g)return!1;b=MH(a.g,a.B,a.l.ba)||MH(a.A,a.B,a.l.ba);return(0<a.g.o.length||0<a.A.o.length||KI(a,a.g,a.A)||
KI(a,a.A,a.g))&&b};
WI=function(a,b,c,d){if(c.updating)return!0;var e=eH(b.l);if(!e)return!1;!b.A||b.A.o||Iw(b.A,e.info)||(b.A=null,Bx(a.o)&&c.abort(),c.g=null);var f=a.C.isLive&&lx(e),k;if(k=a.l.Za&&a.C.A&&0==e.info.l&&Gu(e.info.g.info)){if(null==c.g){if(!(k=null==b.A||b.A.g!=e.info.g)){a:{k=b.A.H;var l=e.info.H;if(k.length!=l.length)k=!1;else{for(var m=0;m<k.length;m++)if(!g.nb(k[m],l[m])){k=!1;break a}k=!0}}k=!k}}else k=c.g!=e.info.g.g;k=!k}k&&(yw(hx(e),1836019574),yw(hx(e),1718909296),e.pd=!1);if(!a.C.A||0==e.info.l)if(f||
a.C.l||e.pd)c.g=null;else if(UI(a,c,e))return!0;f=II(a,b,!1);f=a.B+f;null!==d&&0<=d&&(f=Math.min(f,d));d=f;if(a.L)a:if(a.L.g&&b.Ea.info.audio){if((f=eH(b.l))&&(f=f.l)&&null!=f.A){f=f.A-1;break a}f=-1}else f=window.Infinity;else f=window.Infinity;if(b.H)d=eH(b.l).range;else if(k=b.l,!k.g.length||k.g[0].info.B>=d)d=null;else if(l=k.g[0].pd?0:k.g[0].range.start,l>f)d=null;else{for(m=1;m<k.g.length;m++){var n=k.g[m].range.start>f,p=k.g[m].g!=k.g[m-1].g;if(k.g[m].info.B>d||n||p||k.o.bb)break}m--;d=new g.Bw(l,
Math.min(k.g[m].range.end,f))}if(!d)return!1;f=new window.Uint8Array(e.g,d.start,d.length);if(a.Ua&&e.info.g.info.video&&Gu(e.info.g.info)&&(k=a.Ua,0==e.info.l&&(k.l=0,k.g=0,k.o.length=0),!((0,window.isNaN)(k.l)||8>f.length))){l=new window.DataView(f.buffer,f.byteOffset);for(m=!1;!m;)if(k.l==k.g)a:if(m=k,n=f.length,m.l+7>=n){for(p=m.l;p<n;p++)m.o.push(l.getUint8(p));m=!0}else{if(0<m.o.length){for(p=0;8>m.o.length;p++)m.o.push(l.getUint8(p));var u=iI(m.o,0);p=iI(m.o,4);m.o.length=0}else u=l.getUint32(m.g),
p=l.getUint32(m.g+4);if(1836019558==p||1836019574==p||1718909296==p||1936286840==p)m.l+=u,m.g=m.l;else if(1835295092==p)m.l+=u,m.g+=8;else{m.l=window.NaN;m=!0;break a}m=m.g>=n}else a:if(m=k,n=f.length,m.g+5>=n){for(p=m.g;p<n;p++)m.o.push(l.getUint8(p));m=!0}else{if(0<m.o.length){for(p=0;6>m.o.length;p++)m.o.push(l.getUint8(p));p=iI(m.o,0);12==p&&6==m.o[4]&&45==m.o[5]&&l.setUint8(m.g+5,63);m.g+=p+4;m.o.length=0}for(;m.g<m.l&&m.g+5<n;){p=l.getUint32(m.g);if(0>=p){m.l=window.NaN;m=!0;break a}12==p&&
6==l.getUint8(m.g+4)&&45==l.getUint8(m.g+5)&&l.setUint8(m.g+5,63);m.g+=p+4}m=m.g>=n}(0,window.isNaN)(k.l)||(k.l-=f.length,k.g-=f.length)}k=!1;3!=e.info.type||!Gu(e.info.g.info)&&2!=e.info.g.info.containerType||(k=Gu(e.info.g.info)&&a.l.JI&&!b.I&&0==e.info.l&&0<e.info.startTime)&&jx(e,0);f=VI(a,c,f);if(0!=f){if(2!=f)if(e.info.g.info.video?(l=a.l,l.A=Math.floor(.8*l.A),l.I=Math.floor(.8*l.I)):(l=a.l,l.B=Math.floor(.8*l.B),l.X=Math.floor(.8*l.X)),l.l=Math.floor(.8*l.l),1==f&&c.remove&&!c.updating){f=
!1;l=c.buffered.length;for(m=0;!f&&m<l;m++)c.buffered.start(m)>e.info.A&&(c.remove(c.buffered.start(m),c.buffered.end(l-1)),f=!0);f||c.remove(0,Math.max(0,Math.min(a.B,e.info.startTime)-5))}else GH(b);f=!1}else f=!0;if(!f)return!1;b.I=!0;if(k)jx(e,e.info.startTime),c.abort(),c.g=null;else{f=b.l;for(k=[];f.g.length&&(f.g[0].range.end>d.end?(m=ix(f.g[0],d.end-f.g[0].range.start+1),l=m[0],f.g[0]=m[1]):l=f.g.shift(),k.push(l),l.range.end!=d.end););k.length&&(0,g.G)(k,b.ba,b)}e.pd&&e.info.g.g&&(c.g=e.info.g.g,
a.O("initsegment",c.g));return!0};
XI=function(a,b,c){nz(a.C,b,c)&&c&&g.Cf(function(){return RI(a,b.startTime)})};
RI=function(a,b){!a.ga()&&a.l.nb&&a.X&&-1!=a.g.B&&-1!=a.A.B&&(a.X=!1,a.O("seekplayerrequired",b+.1,!0))};
UI=function(a,b,c){c.info.g.Mc();c=c.info.g.g;if(null==c||b.g==c)return!1;VI(a,b,c);b.g=c;a.O("initsegment",b.g);return b.updating};
VI=function(a,b,c){try{Fx(a.o)?b.appendBuffer(c):b.append(c)}catch(d){if(11==d.code)return QI(a,!1,"html5.invalidstate",{updating:""+ +b.updating,mrs:a.o.o.readyState}),2;if(22!=d.code&&0!=d.message.indexOf("Not enough storage"))return g.Q(d),4;a.l.lf&&a.ze("quex","br."+fE(b.buffered).replace(/,/g,"_"));return 1}return Cx(a.o)?3:0};
YI=function(a,b){b.l.subscribe("error",a.OF,a);b.l.subscribe("timestamprewrite",a.SF,a);var c=(0,g.A)(a.PF,a,b);b.l.subscribe("placeholderinfo",c,void 0);c=(0,g.A)(a.QF,a,b);b.l.subscribe("placeholderrollback",c,void 0);c=(0,g.A)(a.RF,a,b);b.l.subscribe("segmentinfo",c,void 0);b==a.g&&b.l.subscribe("cuepoint",a.NF,a)};
II=function(a,b,c){if(a.R)return 1;var d=b.Ea.info.audio?a.l.B:a.l.A;!a.l.U&&bI(a.F)&&(d=Math.max(d,b.Ea.info.audio?a.l.X:a.l.I));c&&(d+=a.l.aa);var e=bI(a.F)?b.g?b.g.g.info.g:b.Ea.info.g:b.L;d/=e;0<a.l.Ta&&a.o&&Bx(a.o)&&(b=b.Ea.info.video?a.o.l:a.o.g)&&!b.updating&&(e=gE(b.buffered,a.B),0<=e&&(b=a.B-b.buffered.start(e),d+=Math.max(0,Math.min(b-a.l.Ta,a.l.eg))));0<a.l.l&&(d=Math.min(d,a.l.l));a.l.Ra&&c&&!bI(a.F)&&(c=a.F,c=cI(c,g.La(c.g))+cI(c,c.K.g[0]),c=a.l.Ra*(c/TH(a.H)),c<d&&15>c&&a.ze("bwcapped",
"1",!0),c=Math.max(c,15),d=Math.min(d,c));return d};
JI=function(a){if(!a.Ya)return window.Infinity;var b=(0,g.Fd)(vI(a.Ya),function(a){return"ad"==a.namespace});
b=g.q(b);for(var c=b.next();!c.done;c=b.next())if(c=c.value,c.start/1E3>a.B)return c.start/1E3;return window.Infinity};
$I=function(a){ZI(a);a.ba=new zI;return a.ba};
ZI=function(a){EI(a,!1);var b=Math.max(mH(a.g.l),mH(a.A.l)),c=a.g;c.C=!0;c.B=-1;AH(c,window.Infinity);c.l.B=b;c.Bh=b;c=a.A;c.C=!0;c.B=-1;AH(c,window.Infinity);c.l.B=b;c.Bh=b;c=a.C;for(var d in c.g)Vv(c.g[d].index,window.Infinity);a.l.nb&&(a.X=!0);a.B=b;a.K=!0;g.Pp(a.U);return b+.1};
aJ=function(a,b,c,d){if(b.Ea.Mc())if(d){var e=hE(d.buffered,c),f=window.NaN,k=b.A;k&&(f=hE(d.buffered,k.g.index.nd(k.na)));if(e==f&&IH(b))return c;d=yH(b,c);if(0<=d)return d;FH(b,b.Ea.Cd()?1:2);b.Ea.info.video&&b.A&&!b.A.o&&!iH(b.l)&&b.Ea.Cd()&&(d=b.A,b.l.g.length&&(d=fH(b.l).info),d=b.g||d,d=d.g.Cg(d,d.range.length-(d.Ja+d.l)),vH(b,NI(a,d)));if((0,window.isNaN)(e))return AH(b,c);AH(b,e+MI)}else AH(b,c);else 0!=c&&CH(b);return c};
bJ=function(a,b,c,d){c.Mc()||c.F||!dy(c.A)||(d=c.di(d?SH(a.H,c.info):0),(0,g.G)(d,function(a){if("f"!=a.ra[0].g.info.l){var c=NI(this,a);!Hw(a.ra[a.ra.length-1])&&vH(b,c)}},a),c.F=!0)};
QI=function(a,b,c,d){a.ga()||(c=new g.GB(c,b,d),HB(c.details),a.O("error",c),b&&a.dispose())};
cJ=function(a){var b={lct:a.B.toFixed(3),lsk:a.K,lmf:bI(a.F),lbw:Uz(a.P).toFixed(3),lhd:Rz(a.P).toFixed(3),lst:(1E9*Tz(a.P)).toFixed(3),laa:a.A.A?Mw(a.A.A):"",lva:a.g.A?Mw(a.g.A):"",lar:a.A.g?Mw(a.A.g):"",lvr:a.g.g?Mw(a.g.g):"",lvh:a.Ka};a.o&&!Cx(a.o)&&(b.lab=fE(a.o.g.buffered),b.lvb=fE(a.o.l.buffered));return b};
EI=function(a,b){var c=b?1:0;a.A&&FH(a.A,c);a.g&&FH(a.g,c)};
dJ=function(a,b,c){if(!b||!c)return!0;c=-1!=gE(c.buffered,a);var d=fH(b.l)?fH(b.l).info.A>=a:!1,e=b.o.length?b.o[0]:null;a=(b=e?e.info.ra[0]:b.g)&&b.startTime<=a;return!!(c||d||a)};
eJ=function(a,b){var c=b.info.video?a.g:a.A;null!=c&&bJ(a,c,b,!1)};
fJ=function(a,b){var c=new g.Ix;c.Ab=a.experiments.l("html5_throttle_rate")||c.Ab;a.experiments.g("html5_streaming_xhr")&&(c.H=!0);a.experiments.g("html5_streaming_debug")&&(c.H=!0,c.ya=!0);a.experiments.l("html5_max_av_sync_drift")&&(c.nf=a.experiments.l("html5_max_av_sync_drift"));var d=a.schedule;d.l.l()==d.policy.B?c.L=10:c.L=a.experiments.l("html5_throttle_burst_secs")||c.L;a.experiments.l("html5_min_secs_between_format_selections")&&(c.fg=a.experiments.l("html5_min_secs_between_format_selections"));
c.R=a.experiments.l("html5_local_max_byterate_lookahead");c.ma=a.experiments.g("html5_stop_overlapping_requests");c.Ta=a.experiments.l("html5_min_readbehind_secs");c.eg=a.experiments.l("html5_min_readbehind_cap_secs");c.Xb=a.experiments.g("html5_append_init_while_paused");c.Ra=a.experiments.l("html5_max_readahead_bandwidth_cap");c.Sc=a.experiments.g("disable_html5_copy_pre_moof");c.fj=a.experiments.g("html5_disable_audio_append_cap");c.Tc=a.experiments.g("html5_disable_non_contiguous");c.Ya=a.experiments.l("html5_post_interrupt_readahead");
c.gd=a.experiments.g("html5_disable_urgent_upgrade_for_quality");c.lf=a.experiments.g("html5_log_quota_exceeded");c.hv=a.experiments.l("html5_subsegment_readahead_target_buffer_health_secs");c.zb=a.experiments.l("html5_subsegment_readahead_timeout_secs");c.Xt=a.experiments.l("html5_subsegment_readahead_progress_timeout_fraction");c.Yt=a.experiments.l("html5_subsegment_readahead_tail_margin_secs");c.wd=a.experiments.g("disable_html5_new_contiguity_logic");c.Or=a.experiments.g("html5_streaming_xhr_optimize_lengthless_mp4");
c.Wa=a.experiments.g("html5_peak_shave");c.hj=a.experiments.g("html5_peak_shave_always_include_sd");c.Ec=a.experiments.g("disable_clear_out_of_sync");c.bk=a.experiments.g("html5_restrict_streaming_xhr_on_sqless_requests");c.pf=a.experiments.l("html5_max_headm_for_streaming_xhr");c.ij=a.experiments.g("html5_pipeline_manifestless_allow_nonstreaming");c.lj=a.experiments.g("html5_prefer_server_bwe3");c.Gc=a.experiments.g("html5_disable_clear_track_upgrade");c.wa=1024*a.experiments.l("html5_video_tbd_min_kb");
c.Je=a.experiments.g("html5_live_probe_primary_host");c.zk=a.experiments.g("html5_streaming_xhr_buffer_mdat");c.sa=a.experiments.g("html5_streaming_xhr_no_mp4_holdback_chunk");c.Ie=a.experiments.g("html5_last_slice_transition");c.P=a.experiments.g("html5_clear_by_reattaching");Sr()&&(c.bb=!0);Lr()&&(c.l=240);g.nh&&(c.I=41943040);g.gB(a)||!Ex()?(c.A=8388608,c.B=524288,c.Bc=5,c.aa=2097152,c.K=1048576,c.Aj=1.5,c.fa=15,c.U=!Ex(),c.gj=!1,c.C=4587520,Qr()&&(c.C=786432),c.g*=1.1,c.o*=1.1,c.Za=!0,c.I=c.A,
c.X=c.B,c.P=!0,a.experiments.g("tvhtml5_slow_start")&&!a.Fd&&(c.wa=393216)):a.l&&(c.g*=1.3,c.o*=1.3);g.Gx&&Kr("crkey")&&(d="CHROMECAST/ANCHOVY"==a.B.cmodel,c.A=20971520,c.B=1572864,d&&(c.C=812500,c.F=1E3,c.zv=5,c.K=2097152));(d=FB(a))||(d=Ur()&&/(J\d{3}|JS\d{3}|JU\d{3})/.test(a.B.cmodel));d&&!a.experiments.g("html5_disable_move_pssh_to_moov")&&(c.ej=!0);c.VI=a.C;c.Nh=!a.experiments.g("disable_fpa_sei_removal")&&Kr("windows nt")&&(b.wg()||b.Hd());d="ULTRALOW"==b.latencyClass||a.experiments.g("html5_treat_latency_low_like_ultra_low")&&
b.isLowLatencyLiveStream;b.Ib()&&(a.experiments.g("disable_html5_manifestless_delay")||(c.xd=!0),c.rk=!1,a.experiments.g("html5_manifestless_always")&&(c.ia=!1,c.nb=!0),!(a.experiments.g("html5_pipeline_manifestless")||a.experiments.g("html5_pipeline_ultra_low_latency")&&d)||"ULTRALOW"!=b.latencyClass&&"LOW"!=b.latencyClass||(c.Ha=2,c.qf=4));b.isAd()&&(c.ba=0,c.Ga=0);(a.experiments.g("html5_streaming_response_mediastream_rewrite_v2")||a.experiments.g("html5_ultra_low_latency_streaming_responses")&&
d)&&b.Ia&&b.Ia.videoInfos.length&&Gu(b.Ia.videoInfos[0])&&b.Ib()&&!g.Nr()&&(c.H=!0,c.ya=!0);c.rb=a.experiments.g("html5_enable_subsegment_readahead_v3")||a.experiments.g("html5_ultra_low_latency_subsegment_readahead")&&d;c.mf=(a.experiments.g("html5_manifestless_accurate_sliceinfo")||c.rb)&&b.Ib();c.V=b.If;c.Le=c.V&&(/^rq[a-f]/.test(b.clientPlaybackNonce)||a.experiments.g("html5_high_res_logging"));/^pp/.test(b.clientPlaybackNonce)&&(c.fJ=!0,c.pj=!0);FB(a)&&!a.experiments.g("html5_disable_move_pssh_to_moov")&&
b.ka&&Qy(b.ka)&&(c.Za=!1);if(b.oa){d=kz(b.ka);var e=a.experiments.l("html5_live_abr_head_miss_fraction"),f=a.experiments.l("html5_live_abr_repredict_fraction");e&&d&&(c.Ma=Math.min(d*e,c.Ma));f&&d&&(c.F=Math.min(1E3*d*f,c.F))}b.Ia.videoInfos[0].Ob&&(c.P=!1);a.schedule.policy.A=b.Ib()?.5:0;d=a.experiments.l("html5_deadzone_multiplier")||1;(e=a.experiments.l("html5_sticky_reduces_discount_by"))&&"auto"!=Xu()&&(d-=e);c.g*=d;c.o*=d;if(d=a.experiments.l("html5_request_sizing_multiplier"))c.Uj=d;a.experiments.g("html5_strip_emsg")&&
(c.nj=!0);c.l=a.experiments.l("html5_max_buffer_duration")||c.l;c.Ka=a.experiments.l("html5_max_buffer_health_for_downgrade")||c.Ka;c.Ua=a.experiments.l("html5_min_upgrade_health")||c.Ua;a.experiments.g("disable_html5_streaming_response_timing")&&(c.jv=!1);lA(a.R,GA)&&(c.C=window.NaN);c.fa=a.experiments.l("html5_request_size_max_secs")||c.fa;c.ud=a.experiments.g("killswitch_metadata_events");a.experiments.g("html5_sticky_disables_variability")&&"auto"!=Xu()&&(c.Mb=0);c.mj=a.experiments.g("html5_rec_2020_matrix_correction_killswitch");
return c};
gJ=function(a,b,c){this.url=a;this.interval=b;this.g=c};
hJ=function(a,b){this.message=a;this.number=b;this.g=new bq};
iJ=function(a,b,c,d){this.statusCode=a;this.statusMessage=b;this.headers=c;this.message=d};
jJ=function(a){var b=String.fromCharCode.apply(String,a.subarray(0,16384)),c=b.indexOf("\r\n\r\n");if(-1==c)return null;var d=b.indexOf("\r\n"),e=b.slice(0,d).match(/^GLS\/1.\d ([0-9]{1,3}) (\w+)$/);if(null==e)return null;var f=e[1];(0,window.isFinite)(f)&&(f=String(f));f=g.w(f)?/^\s*-?0x/i.test(f)?(0,window.parseInt)(f,16):(0,window.parseInt)(f,10):window.NaN;e=e[2];b=hw(b.slice(d+2));return null==b?null:new iJ(f,e,b,a.subarray(c+4))};
kJ=function(a,b,c,d,e){g.J.call(this);this.A=a;this.K=b;this.F=c;this.g=d;this.l=e;this.sessionId="";this.I=this.H=this.B=this.C=null;this.da=new g.Zs(this);g.K(this,this.da);this.g?(this.da.M(this.g,"message",this.PC),this.da.M(this.g,"keystatuseschange",this.QC)):this.l&&($s(this.da,this.l,["mskeymessage","webkitkeymessage"],this.Bu),$s(this.da,this.l,["mskeyerror","webkitkeyerror"],this.Au),$s(this.da,this.l,["mskeyadded","webkitkeyadded"],this.zu))};
lJ=function(a,b){this.initData=a;this.contentType=(void 0===b?"":b)||null;this.g=this.l=window.NaN;this.o=!1;this.A=[]};
mJ=function(a,b){g.J.call(this);this.l=a;this.g=b;this.C={};this.A=null;this.da=new g.Zs(this);g.K(this,this.da);this.o=this.B=null};
oJ=function(a){if(a.g.l)return a.g.l.createMediaKeys().then(er(function(b){a.ga()||(a.B=b,a.l.setMediaKeys(b))}));
tz(a.g)?a.o=new (sz())(a.g.g):xz(a.g)?(a.o=new (sz())(a.g.g),a.l.webkitSetMediaKeys(a.o)):nJ(a);return null};
nJ=function(a){$s(a.da,a.l,["keymessage","webkitkeymessage"],a.TC);$s(a.da,a.l,["keyerror","webkitkeyerror"],a.SC);$s(a.da,a.l,["keyadded","webkitkeyadded"],a.RC)};
pJ=function(a,b){var c=b.subarray(4);c=String.fromCharCode.apply(null,new window.Uint16Array(c.buffer,c.byteOffset,c.byteLength/2)).match(/ek=([0-9a-f]+)/)[1];for(var d="",e=0;e<c.length;e+=2)d+=String.fromCharCode((0,window.parseInt)(c.substr(e,2),16));e=a.g.fairPlayCert;c=new window.Uint8Array(new window.ArrayBuffer(e.length));for(var f=0;f<e.length;f++)c[f]=e.charCodeAt(f);e=new window.ArrayBuffer(2*d.length);f=new window.Uint16Array(e);for(var k=0;k<d.length;k++)f[k]=d.charCodeAt(k);d=new window.Uint8Array(e);
e=0;k=new window.ArrayBuffer(b.byteLength+4+d.byteLength+4+c.byteLength);f=new window.Uint8Array(k);k=new window.DataView(k);f.set(b);e+=b.byteLength;k.setUint32(e,d.length,!0);e+=4;f.set(d,e);e+=d.length;k.setUint32(e,c.byteLength,!0);f.set(c,e+4);return f};
qJ=function(a,b){var c=a.C[b.sessionId];!c&&a.A&&(c=a.A,a.A=null,c.sessionId=b.sessionId,a.C[b.sessionId]=c);return c};
sJ=function(a,b,c,d,e,f){g.J.call(this);this.o=a;this.fc=d;this.fc.subscribe("oauthtoken",this.mt,this);this.C={session_id:e};this.H=!0;"playready"==a.flavor&&(a=(0,window.parseInt)(f.o("playready_first_play_expiration"),10),!(0,window.isNaN)(a)&&0<=a&&(this.C.mfpe=a),f.g("html5_playready_keystatuses_killswitch")||(this.H=!1));this.R=f.g("html5_use_drm_retry");this.P=0;f=this.o.A;"fairplay"==this.o.flavor&&(f=c.initData.subarray(4),f=String.fromCharCode.apply(null,new window.Uint16Array(f.buffer,
f.byteOffset,f.byteLength/2)).replace("skd://","https://"));rJ(this,f);this.F=this.I=!1;g.FC("drm_gk_s");try{var k=b.createSession(c)}catch(l){b="t.g",l instanceof window.DOMException&&(b+=";c."+l.code),this.fc.O("licenseerror","drm.unavailable",!0,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"),k=null}if(this.A=k)b=this.A,k=this.MC,f=this.LC,a=this.OC,b.C=this.NC,b.B=k,b.H=f,b.I=a,b.o=this,g.K(this,this.A);this.V=c.A;this.B=[];this.g={};this.K=window.NaN;this.l=c.l||window.NaN};
rJ=function(a,b){var c=b;var d=void 0===d?!1:d;if(bv(tJ.test(c),c,d,"Drm Licensor URL")){for(var e in a.C)b=Pg(b,e,a.C[e]);a.U=b}else uJ(a,"drm.net",!0,"t.x")};
vJ=function(a){var b={};g.jc(b,a.C);return b};
wJ=function(a){for(var b="",c=0;c<a.length;c+=2)b+=String.fromCharCode(a[c]);a=(new window.DOMParser).parseFromString(b,"text/xml").querySelector("Challenge");return new window.Uint8Array(be(a.childNodes[0].data))};
xJ=function(a){var b;if(b=a.H)a=a.A,b=!(!a.g||!a.g.keyStatuses);return b};
uJ=function(a,b,c,d,e){a.ga()||a.fc.O("licenseerror",b,c,d,e);c&&a.dispose()};
yJ=function(a){return g.Sa(a,"UHD2")?"highres":g.Sa(a,"UHD1")?"hd2160":g.Sa(a,"HD")?"hd1080":g.Sa(a,"HD720")?"hd720":"large"};
zJ=function(a,b){if(!xJ(a)&&wz(a.o)&&!b)return"large";var c=[],d=!0;if(xJ(a))for(var e in a.g)"usable"==a.g[e].status&&c.push(a.g[e].type),"unknown"!=a.g[e].status&&(d=!1);if(!xJ(a)||d)c=a.B;return yJ(c)};
AJ=function(a){if(!a)return{};var b={};(0,g.G)(a.split(";"),function(a){a=a.split(",");2==a.length&&(b[a[1]]={type:a[0],status:"unknown"})});
return b};
BJ=function(a){var b=a[0];a[0]=a[3];a[3]=b;b=a[1];a[1]=a[2];a[2]=b;b=a[4];a[4]=a[5];a[5]=b;b=a[6];a[6]=a[7];a[7]=b};
CJ=function(a,b){var c=[],d;for(d in a.g)c.push.apply(c,[d,a.g[d].type,a.g[d].status]);return c.join(b)};
DJ=function(a){return xJ(a)?CJ(a,";"):a.B.join(";")};
EJ=function(a,b,c,d){a=new window.Uint8Array(a);a=wJ(a);a={format:"RAW",method:"POST",postBody:(new hJ(a,1)).message,responseType:"arraybuffer",withCredentials:!0,timeout:3E4};c=Qg(c,d);cs(c,a,3,500).then(function(a){a=new window.Uint8Array(a.response);(a=jJ(a))&&b.update(a.message)})};
FJ=function(){this.keys=[];this.values=[]};
HJ=function(a,b,c,d,e){e=void 0===e?"":e;g.R.call(this);a&&(a.addKey||a.webkitAddKey)||sz()||zz(c);this.K=c;this.I=a;this.g=b;this.subscribe("newlicense",this.hG,this);this.subscribe("newsession",this.iG,this);this.subscribe("sessionready",this.cH,this);this.subscribe("keystatuseschange",this.UC,this);this.subscribe("hdentitled",this.rF,this);this.fa=e||g.ZA();this.P=null;this.l=new FJ;this.A=this.C=null;this.o=[];this.F="fairplay"==this.g.flavor?Qu:GJ;this.L=new mJ(a,b);g.K(this,this.L);this.B=null;
tz(b)&&(this.B=new mJ(a,b),g.K(this,this.B));this.X=2;this.da=new g.Zs(this);g.K(this,this.da);this.V=!1;this.aa=null;this.H=!1;a=this.I;this.g.l?this.da.M(a,"encrypted",this.gF):$s(this.da,a,tz(this.g)?["msneedkey"]:["needkey","webkitneedkey"],this.eG);(a=oJ(this.L))?a.then(er((0,g.A)(this.LF,this)),er((0,g.A)(this.rE,this))):this.H=!0;this.B&&oJ(this.B);this.ba=d;this.R=this.U=!1;zz(c)};
JJ=function(a,b){if(tz(a.g)&&!a.U){var c=aH(b);if(0!=c.length){var d=new lJ(c);a.U=!0;window.navigator.requestMediaKeySystemAccess("com.microsoft.playready",[{initDataTypes:["keyids","cenc"],audioCapabilities:[{contentType:'audio/mp4; codecs="mp4a"'}],videoCapabilities:[{contentType:'video/mp4; codecs="avc1"'}]}]).then(function(b){b.createMediaKeys().then(function(b){IJ(a,b,d)})},null)}}};
IJ=function(a,b,c){var d=b.createSession(),e=a.l.values[0],f=vJ(e);d.addEventListener("message",function(b){EJ(b.message,d,a.g.A,f)});
d.addEventListener("keystatuseschange",function(){d.keyStatuses.forEach(function(b,c){"usable"==c&&(a.R=!0,KJ(a,zJ(e,a.R)))})});
d.generateRequest("cenc",c.initData)};
MJ=function(a,b,c){a.ga()||tz(a.g)==c||a.V&&a.ba||(a.V=!0,a.o.push(b),1<a.o.length||a.H&&LJ(a))};
LJ=function(a){for(;a.o.length;){var b=a.o[0];if(g.nb(a.C,b.initData))a.o.shift();else{if(a.l.get(b.initData))if("fairplay"==a.g.flavor)a.l.remove(b.initData);else{a.o.shift();continue}a:{var c=b.initData;try{for(var d=0,e=new window.DataView(c.buffer);d<e.byteLength-8;){var f=e.getUint32(d);if(1>=f)break;if(1886614376==e.getUint32(d+4)){var k=32;if(0<e.getUint8(d+8)){var l=e.getUint32(d+28);k+=16*l+4}var m=e.getUint32(d+k-4);try{var n=new je(c.subarray(d+k,d+k+m)),p=new Zq;for(k=n;ke(k)&&4!=k.l;)switch(k.o){case 1:var u=
k.g;b:{for(var v,C,D=u,E=0,ea=0;4>ea;ea++)if(C=D.l[D.g++],E|=(C&127)<<7*ea,128>C){D.F=E>>>0;D.C=0;break b}C=D.l[D.g++];E|=(C&127)<<28;v=0|(C&127)>>4;if(128>C)D.F=E>>>0,D.C=v>>>0;else{for(ea=0;5>ea;ea++)if(C=D.l[D.g++],v|=(C&127)<<7*ea+3,128>C){D.F=E>>>0;D.C=v>>>0;break b}D.B=!0}}var fa=u.F,Za=u.C;if(D=Za&2147483648)fa=~fa+1>>>0,Za=~Za>>>0,0==fa&&(Za=Za+1>>>0);E=4294967296*Za+fa;var Ga=D?-E:E;xe(p,1,Ga);break;case 2:D=Ga=ne(k);ve(p,2).push(D);break;case 3:Ga=me(k);xe(p,3,Ga);break;case 4:Ga=ne(k);
xe(p,4,Ga);break;case 5:Ga=me(k);xe(p,5,Ga);break;case 6:Ga=me(k);xe(p,6,Ga);break;case 7:Ga=ie(k.g);xe(p,7,Ga);break;case 8:Ga=ne(k);xe(p,8,Ga);break;case 9:Ga=ie(k.g);xe(p,9,Ga);break;case 10:Ga=ie(k.g);xe(p,10,Ga);break;case 11:Ga=new Wq;D=k;E=Ga;ea=Xq;var Ja=D.g.o,ri=ie(D.g),Qe=D.g.g+ri;D.g.o=Qe;ea(E,D);D.g.g=Qe;D.g.o=Ja;D=p;E=Ga;ea=Wq;var Re=D,dh=ea;Re.g||(Re.g={});if(!Re.g[11]){for(var iv=ve(Re,11),jv=[],Bm=0;Bm<iv.length;Bm++)jv[Bm]=new dh(iv[Bm]);Re.g[11]=jv}var jq=D.g[11];jq||(jq=D.g[11]=
[]);var kv=E?E:new ea,lv=ve(D,11);jq.push(kv);lv.push(ye(kv));break;case 12:Ga=ne(k);xe(p,12,Ga);break;default:le(k)}var Cm=p;if(null!=Cm){var oe=Cm;break a}}catch(mv){}}d+=f}oe=null}catch(mv){oe=null}}if(null!=oe)for(c=ue(oe,7),null!=c&&(b.l=c),c=ue(oe,10),null!=c&&0<c&&(b.g=c),c=ve(oe,2),c=!c.length||c[0]instanceof window.Uint8Array?c:(0,g.I)(c,we),c=g.q(c),d=c.next();!d.done;d=c.next())b.A.push(cH(d.value));if("widevine"==a.g.flavor){a:if(c=a,(0,window.isNaN)(b.l)&&0<c.l.values.length)c=!0;else{c=
g.q(c.l.values);for(d=c.next();!d.done;d=c.next())if(d.value.l==b.l){c=!0;break a}c=!1}if(c&&!a.K.g("html5_dedup_by_cryptoperiod_killswitch"))a.o.shift();else{a:{c=a;if(!(c.K.g("disable_license_delay")||"widevine"!=c.g.flavor||b.o||(0,window.isNaN)(b.l)))for(c=g.q(c.l.values),d=c.next();!d.done;d=c.next())if(1>=Math.abs(d.value.l-b.l)){c=!0;break a}c=!1}if(c){NJ(a,b);a.o.shift();continue}}}break}}a.o.length&&(b=a.o[0],a.l.get(b.initData),oe=new sJ(a.g,a.L,b,a,a.fa,a.K),oe.mt(a.P),a.l.set(b.initData,
oe))};
NJ=function(a,b){a.A&&a.A.dispose();a.C=b.initData;a.A=new g.P(function(){a.C=null;a.A=null;b.o=!0;a.o.push(b);1<a.o.length||LJ(a)},OJ(b.g));
a.A.start()};
OJ=function(a){return 1E3*Math.max(0,Math.random()*(((0,window.isNaN)(a)?120:a)-30))};
KJ=function(a,b){Uu(a.F,b)||(a.F=Ou("auto",b,!1),a.O("qualitychange"))};
PJ=function(a){var b={};this.o=(b.c1a=(0,g.A)(this.B,this),b.c3a=(0,g.A)(this.C,this),b.c6a=(0,g.A)(this.A,this),b);(this.g=a)&&this.g.wj?this.l=g.nr(this.g.wj):this.l=[]};
QJ=function(a,b){this.g=a;this.l=b};
RJ=function(a,b){var c=Ru(Ru(a.g.pj,b.Vi),b.Zi);"auto"!=Xu()||(c=a.g.experiments.g("html5_restore_performance_cap")?Ru(c,new Nu(0,Zu(),!1)):Ru(c,a.g.mf));return c};
TJ=function(a,b){var c=Xu();if("auto"!=c)var d=Ou("auto",c,!1);else if(g.gB(a.g)&&lA(a.g.R,FA))d=Qu;else{var e;c=!!b.Ia.g;jB(a.g)&&(e=window.screen&&window.screen.width?new g.ad(window.screen.width,window.screen.height):null);e||(e=a.g.fg?a.g.fg.clone():a.l.Da());(eB||SJ||c)&&e.scale(g.yB());var f=b.Ia.videoInfos;if(f.length){c=.85;4!=f[0].video.projectionType&&2!=f[0].video.projectionType&&3!=f[0].video.projectionType||rA||(c=.45);f=g.q(f);for(var k=f.next();!k.done&&!(d=k.value.video,null===e||
d.width*c<e.width&&d.height*c<e.height);k=f.next());d=Ou("auto",d.quality,!1)}else d=Qu;e=d.g;(Kr("armv7")||Kr("android"))&&!g.gB(a.g)&&Eu(b.Ia.videoInfos[0])&&(e=Math.min(e,g.wu.large));!a.g.experiments.g("html5_mweb_client_cap")||!a.g.l||g.lB(a.g)||Tr()||a.g.experiments.g("mweb_uniplayer_auto_quality")||a.g.experiments.g("hls_for_vod")||(e=Math.min(e,g.wu.medium));e=Math.max(e,g.wu.medium);a.g.experiments.l("html5_default_quality_cap")&&(c=!0,(f=a.g.experiments.l("html5_quality_cap_min_age_secs"))&&
(c=g.It()-a.g.schedule.F>1E3*f),c&&(e=Math.min(e,a.g.experiments.l("html5_default_quality_cap"))));d.g!=e&&(d=new Nu(d.l,e,d.o))}return d};
WJ=function(a,b,c,d){a=void 0===a?null:a;b=void 0===b?null:b;c=void 0===c?null:c;d=void 0===d?null:d;g.R.call(this);var e=this;this.I=new g.Zs;g.K(this,this.I);this.l=a;UJ(this);this.B=null;VJ(this,b);this.o=c;this.P=d;this.g=window.NaN;this.H=this.C=this.A=null;this.K=this.F=!1;this.L=new g.P(function(){e.O("ctmp","seektimeout",HB(aaa(e)))},2E4);
g.K(this,this.L)};
VJ=function(a,b){a.B&&a.B.unsubscribe("seekelementrequired",a.U,a);a.B=b;a.B&&a.B.subscribe("seekelementrequired",a.U,a)};
YJ=function(a,b,c){c=void 0===c?!0:c;if(b!=a.g||!a.F){a.F&&XJ(a);a.H||(a.H=new zI);if((0,window.isFinite)(b)||!a.o.Ib())b=g.Uc(b,a.tb(),a.kd());a.g=b;a.O("seekto",b,c);c&&(a.F=!0,!a.o.oa&&a.g>=a.kd()?(b=a.kd(),a.O("seekstart"),a.H.resolve(b),a.O("seekend"),XJ(a),a.g=b,a.O("ended")):baa(a))}};
baa=function(a){caa(a).then(void 0,function(){XJ(a)});
daa(a).then(function(b){a.H.resolve(b);a.O("seekend");XJ(a)},function(){XJ(a)});
a.L.start();a.O("seekstart")};
caa=function(a){a.C||(a.B?(0,window.isFinite)(a.g)?a.C=a.B.seek(a.g):(a.O("pausemediaelement"),a.C=$I(a.B).then(function(b){a.g=b;ZJ(a);a.O("seekto",b,a.F);a.O("resumemediaelement")})):a.C=Mf(a.g));
return a.C};
daa=function(a){a.A||(a.A=new zI,ZJ(a));return a.A};
ZJ=function(a){a.A&&(0<a.l.g.readyState||0<a.l.getCurrentTime())&&!(0,window.isNaN)(a.g)&&(0,window.isFinite)(a.g)&&a.l.yb(a.g)};
XJ=function(a){a.g=window.NaN;a.A=null;a.C=null;a.H=null;a.F=!1;a.K=!1;a.L.stop()};
UJ=function(a){if(a.l)for(var b=g.q(["loadedmetadata","seeked","seeking"]),c=b.next();!c.done;c=b.next())a.I.M(a.l,c.value,function(b){switch(b.type){case "seeking":b=a.l.getCurrentTime();if(!a.A||a.K&&b!=a.g)a.A=new zI,a.A.resolve(b),YJ(a,b,!0),a.K=!0;break;case "seeked":a.A&&a.A.resolve(a.l.getCurrentTime());break;case "loadedmetadata":ZJ(a)}})};
aaa=function(a){var b={Bh:a.g};a.B&&g.Ia(b,cJ(a.B));a.l&&g.Ia(b,xE(a.l));return b};
$J=function(a){lE.call(this);this.g=a;this.A={}};
oE=function(a,b){var c=a.dc();a.g.src=b;a.Be(c)};
tE=function(a){return a.g.buffered||eE()};
NE=function(a){return a.g.error?a.g.error.message:""};
aK=function(){g.J.call(this);this.o={};this.g={};this.l=new g.P(this.qI,250,this);g.K(this,this.l)};
bK=function(a,b){return a.g[b]?YF(a.g[b].g):[]};
cK=function(a,b){return a.g[b]?XF(a.g[b].g):0};
dK=function(a){this.o=a;this.g=new WF(100);this.l=window.NaN};
fK=function(a,b,c,d,e,f){g.R.call(this);this.Ma=new bE;this.P=c;this.bb=d;this.nf=f;c=(0,g.A)(function(a,b){"crn_endcr"!=a||g.T(this.o,32)||eK(this);e(a,b)},this);
this.K=new tI((0,g.A)(this.getCurrentTime,this),(0,g.A)(this.rs,this),(0,g.A)(this.vA,this),c);g.K(this,this.K);this.ma=window.NaN;this.aa=this.H=null;this.A=a;this.sa=new QJ(a,this.bb);this.Gc=!0;this.L=this.B=null;this.X=[];this.Ka=new tH;this.R=new tH;this.Le=this.gd=this.pf=this.Ra=!1;this.zb=window.NaN;this.o=new g.AE;this.Ab=[];this.Za=b;this.ya=null;this.V=window.NaN;this.wa=new g.Zs;g.K(this,this.wa);this.g=new g.lD;this.l=null;this.ba=window.NaN;this.C=null;this.Ie=this.Ta=!1;this.Ua=window.NaN;
this.Ga=this.Tc=this.Mb=this.Wa=!1;this.Xb=this.ud=window.NaN;this.eg=a.experiments.g("html5_force_play_on_suspend_event");this.fg=a.experiments.g("html5_force_play_on_suspend_event_limited");this.U=null;this.ia=new aK;g.K(this,this.ia);this.ia.vl("bufferhealth",(0,g.A)(this.Vq,this));this.ia.vl("bandwidth",(0,g.A)(this.Ly,this));this.ia.vl("networkactivity",(0,g.A)(this.Oy,this),!0);this.ia.vl("livelatency",(0,g.A)(this.ar,this));this.ia.start();this.Je=!1;this.Bc=!0;this.Sc=!1;this.Ya=window.NaN;
this.wd=!1;this.Ha=1;this.I=null;this.lf=(0,g.A)(this.FH,this);Sv(this.lf);this.qf=this.mf=this.xd=0;this.fa=this.F=null};
gK=function(a){g.Pt()?g.Qt(a.Ua):g.lr(a.Ua)};
qK=function(a,b,c,d){d=void 0===d?!0:d;a.X.length=0;a.Ka.reset();a.R.reset();a.ma=window.NaN;a.V=window.NaN;a.Ta=!1;a.Sc=!1;a.Ya=window.NaN;a.Gc=!0;a.l&&a.l.cf();hK(a);iK(a);jK(a);a.F&&(a.F.dispose(),a.F=null);gK(a);a.ia.clear();a.U=null;a.I=null;g.De(a.g);if(2==a.Za||vv(a.A.aa))b.Nr=!0;var e=b.Bb;var f=a.A.o;var k=a.A.ob,l;(l=e.adformat)||(l=(e=e.attrib)&&Zb(kK,e)&&Zb(lK,e)?lK[e]+"_"+kK[e]:void 0);if(e=l)if((l=e.match(mK))&&5==l.length){l=e.match(mK);var m=(0,window.parseInt)(l[3],10),n=[7,8,10,
5,6];l=!(1==(0,window.parseInt)(l[1],10)&&8==m)&&0<=n.indexOf(m);f=f||k||l?e:null}else f=null;else f=null;f&&(b.adFormat=f);2==a.Za&&(b.Kg=!0);if(a.A.Ka||a.A.o)f=g.ku("yt-player-autonavstate"),b.autonavState=f||(a.A.o?2:a.g.autonavState);a.Bc=d;a.g=b;a.g.subscribe("dataupdated",a.CH,a);a.g.subscribe("dataloaded",a.lq,a);a.g.subscribe("dataloaderror",a.nh,a);a.g.subscribe("onStatusFail",a.BH,a);b.endSeconds&&b.endSeconds>b.startSeconds&&nK(a,b.endSeconds);eaa(a,c);a.Wa=!1;oK(a,"newdata");pK(a,new g.AE)};
eaa=function(a,b){iK(a);if(!a.g.Dh){var c=new YE(a.g,a.A,b,(0,g.A)(a.getDuration,a),(0,g.A)(a.getCurrentTime,a),(0,g.A)(a.Py,a),(0,g.A)(a.bb.Da,a.bb),(0,g.A)(a.Gn,a),(0,g.A)(a.rs,a),(0,g.A)(a.Em,a),a.nf,(0,g.A)(a.Zy,a),function(){return a.P.g("qoes")});
a.C=new qF(c)}};
iK=function(a){if(a.C){var b=a.C;if(!b.ga()&&b.B){b.C="paused";var c=uF(b);c.ba=!0;c.send();c=b.l;"PL"==c.o&&(c.o="N");var d=g.$E(c.g);g.dF(c,d,"vps",[c.o]);c.B(d);g.lr(b.A);b.dispose()}g.De(a.C);a.C=null}};
sK=function(a){if(a.g.Nc())return!0;g.rK(a,"api.invalidparam",void 0,"invalidVideodata.1");return!1};
tK=function(a,b){a.Ra=void 0===b?!1:b;if(sK(a)&&!a.Ka.l){a.Ka.start();if(a.C){var c=a.C.l;c.g.g.experiments.g("html5_qoe_unstarted_in_initialization")?g.$E(c.g):g.dF(c,g.$E(c.g),"vps",["N"]);c.g.videoData.Yk?mF(c,"prefetch"):(c.l.user_intent=["0"],c.H=!0);c.g.videoData.Uf&&(fF(c,"reload",c.g.videoData.reloadReason),fF(c,"reloadcount",c.g.videoData.Uf.toString()));c.g.videoData.kh&&mF(c,"monitor");c.g.videoData.oa&&mF(c,"live");c.g.videoData.If&&mF(c,"rqs");c.g.videoData.Vf&&fF(c,"ctrl",c.g.videoData.Vf,
!0);c.g.videoData.gf&&fF(c,"ytp",c.g.videoData.gf,!0);if(c.g.videoData.ov){var d=c.g.videoData.ov.replace(/,/g,".");fF(c,"ytrexp",d,!0)}if(!c.g.g.experiments.g("html5_disable_gpu_reporting")){var e=c.g.g.experiments;d=c.g.videoData;e=e.g("enable_white_noise")||e.g("enable_webgl_noop")||e.g("enable_gpu_logging");var f=d.wg()||d.te()||d.ue()||d.Hd();d=0==d.clientPlaybackNonce.indexOf("gp");(e||f||d)&&(d=(0,g.OE)())&&(c.l.gpu=[d])}c.R=g.kr((0,g.A)(c.B,c),1E4)}a.lq()}};
vK=function(a){a.l&&pE(a.l);tK(a);sK(a)&&!g.T(a.o,128)&&(a.R.l||(a.R.start(),pK(a,GE(GE(a.o,8),1))),uK(a))};
uK=function(a){if(!a.R.g&&a.Ka.g&&!g.T(a.o,128)&&!a.X.length){if(!a.K.B){var b=a.K;b.B=!0;b.o()}if(!wK(a)){a.B&&(b=a.B,a.pf=!!b.fa&&!!b.sa);a.R.g||(a.R.g=!0);!a.g.oa||0<a.g.cn&&!a.g.Ib()||(xK(a,window.Infinity,!0),yK(a,!0),Qv()&&(a.Ie=!0));if(a.C&&(b=a.C,b.g.videoData.enableCardio&&b.g.videoData.enableCardioBeforePlayback&&(b.pl("connected"),yF(b)),b.g.videoData.oa)){b=b.l;var c=b.g.videoData.ka;b.g.videoData.Ib()&&mF(b,"manifestless");c&&kz(c)&&mF(b,"live-segment-"+kz(c).toFixed(1))}a.O("playbackready",
a);WC("pbr","")||(a.P.g("pbr"),g.FC("pbr",void 0,"video_to_ad"))}}};
eK=function(a,b){b=void 0===b?!0:b;zK(a);var c=b?new g.AE(14):new g.AE;pK(a,c)};
nK=function(a,b){a.aa&&(a.K.C(a.aa),a.aa=null);a.aa=new g.EF(1E3*b,0x7ffffffffffff);a.aa.namespace="endcr";uI(a.K,[a.aa])};
CK=function(a,b,c,d){a.g.Ba=c;a.g.Hc=d||c;if(a.C){var e=AK(a);e=new ZD(a.g,c,b,e?Cu(e):"");d&&"i"==b&&BK(a,b,d);d=a.C.l;c=g.$E(d.g);g.dF(d,c,"vfs",[e.g.id,e.l,d.ba,"b"==e.reason?"a":e.reason]);d.ba=e.g.id;e=d.g.P();if(0<e.width&&0<e.height){e=[Math.round(e.width),Math.round(e.height)];var f=g.yB();1<f&&e.push(f);g.dF(d,c,"view",e)}g.dF(d,c,"vps",[d.o]);d.B(c);a.A.experiments.g("html5_report_performance_cap")&&"i"==b&&(d=Zu())&&a.tc("perfCap",""+d)}a.xd=0;a.O("internalvideoformatchange",a.g,"m"==b)};
AK=function(a){if(!a.g.Ia)return null;var b=Ru(Ru(TJ(a.sa,a.g),DK(a)),EK(a));return g.Oa(a.g.Ia.videoInfos,(0,g.A)(b.A,b))};
BK=function(a,b,c){a.g.Hc=c;if(a.C){var d=a.C.l;c=new ZD(a.g,c,b,"");var e=g.$E(d.g);c.g.id!=d.L&&(g.dF(d,e,"afs",[c.g.id,d.L,c.reason]),d.L=c.g.id)}"i"!=b&&a.O("internalaudioformatchange",a.g,"m"==b)};
g.rK=function(a,b,c,d){var e,f;g.$b(faa,c)?e=c:c?f=c:e="YTP_ERROR_GENERIC_WITHOUT_LINK";b={errorCode:b,errorDetail:d,message:f||g.S(e),messageKey:e};pK(a,EE(a.o,128,b));gK(a);jK(a);g.FK(a)};
gaa=function(a,b){a.X=a.X.filter(function(a){return b!=a});
a.R.l&&uK(a)};
wK=function(a){var b;(b=!!a.X.length)||(a=a.K.g.g[0],b=!!a&&-0x8000000000000>=a.start);return b};
IK=function(a,b){a.l&&GK(a);a.o.isError()||pK(a,HE(a.o,512));a.l=b;a.l.g.loop=a.wd;a.l.Be(a.Ha);haa(a);HK(a);if(a.F){var c=a.F,d=a.l;g.at(c.I);c.l=d;UJ(c)}};
HK=function(a){if(a.A.experiments.g("html5_prewarm_mse")&&dA())try{rE(a.l,a.A.C)}catch(b){}};
GK=function(a){JK(a);a.B&&(g.Pp(a.B.U),CI(a.B,!1));a.l&&(!a.R.l||a.o.isError()||g.T(a.o,2)||pK(a,GE(a.o,512)),hK(a),g.at(a.wa),a.l.cf(),a.l=null,a.F&&(a=a.F,g.at(a.I),a.l=null,UJ(a)))};
OK=function(a){if(!g.T(a.o,128))if(a.Je)a.Je=!1,KK(a);else if(vK(a),g.T(a.o,64)&&pK(a,GE(a.o,8)),a.R.g&&a.l)if(a.g.Ia){if(a.g.oa){var b=LK(a),c=g.PD(a.g)&&g.T(a.o,4);if(b||c)c?xK(a,window.Infinity,!0):xK(a,a.tb(),!0);MK(a,void 0,!0)?yK(a,!0):a.isPeggedToLive()&&xK(a,window.Infinity,!0);if(a.A.experiments.g("html5_new_seeking")&&g.T(a.o,256)&&a.g.Fd){pK(a,IE(a.o,8,4));return}}NK(a)?a.A.Aj?g.jr((0,g.A)(a.Pi,a),0):a.Pi():a.Pi()}else b=a.g.oa&&!g.iA()?"html5.unsupportedlive":a.g.Ob?"fmt.unplayable":"fmt.noneavailable",
g.rK(a,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","selectableFormats.1")};
QK=function(a){hK(a);jK(a);PK(a)};
RK=function(a){if(!a.g.Ia)return[];var b=DK(a);g.gB(a.A)&&(b=Ru(b,TJ(a.sa,a.g)));b=b||Qu;a=(0,g.Fd)(a.g.Ia.videoInfos,(0,g.A)(b.A,b));b=[];for(var c={},d=0;d<a.length;d++){var e=a[d].video;c[e.quality]||(b.push(e),c[e.quality]=!0)}return b};
SK=function(a){return Ru(Ru(Ru(RJ(a.sa,a.g),TJ(a.sa,a.g)),DK(a)),EK(a))};
DK=function(a){return a.H?a.H.F:wD(a.g)&&a.g.Ia.g&&Qy(a.g.ka)?GJ:Qu};
TK=function(a,b,c){if(!a.ga()&&!g.T(a.o,128)&&(c&&(a.g.Zi=c),wD(a.g))){if("m"==b&&c){Pu(c)&&(b="a");a:{var d=a.g;if(d.Ia){var e=g.wu[Xu()];d=d.Ia.videoInfos[0].video.g;if(e>d&&c.g==d)break a}g.ju("yt-player-quality",g.Tu(c),2592E3)}}c=SK(a);if(a.g.Ia.g){if(a.B&&"i"!=b&&(e=a.B,!e.ga()&&e.g)){(c=$H(e.F,c,b,!1))&&e.O("videoformatchange",c);BI(e);if(bI(e.F)&&"m"==b&&e.F.P||"b"==b)e.l.P?e.O("reattachrequired"):(GH(e.g),GH(e.A));LH(e.g)&&LI(e,e.g,e.A);g.Pp(e.U)}}else{e=a.g;a:if(d=a.g.uh,c.g){for(var f=
g.q(d),k=f.next();!k.done;k=f.next()){k=k.value;var l=k.Se(),m=g.wu[l.video.quality];if((!c.o||"auto"!=l.video.quality)&&m<=c.g){c=k;break a}}c=d[d.length-1]}else c=d[0];e.Tf=c;CK(a,b,a.g.Tf.Se())}a.o.gb()&&OK(a)}};
iaa=function(a){a.I=new cG(a.g,a.A.experiments,function(){return UK(a,!0)});
a.C&&zF(a.C,eG(a.I))};
g.VK=function(a){mz(a.g.ka,{cpn:a.g.clientPlaybackNonce,c:a.A.B.c,cver:a.A.B.cver});var b=fJ(a.A,a.g);a.A.schedule.policy.A=a.g.Ib()?.5:0;a.B=new AI(a.A.schedule,b,a.g.ka,a.g.Ia,a.K);a.B.subscribe("initsegment",a.uF,a);a.B.subscribe("videoformatchange",a.FF,a);a.B.subscribe("audioformatchange",a.EF,a);a.B.subscribe("error",a.nh,a);a.B.subscribe("ctmp",a.tc,a);a.B.subscribe("seekelementrequired",a.tI,a);a.B.subscribe("seekplayerrequired",(0,g.A)(function(a,b){xK(this,a,!0,void 0,b)},a));
a.B.subscribe("reattachrequired",a.pI,a);a.B.subscribe("metadata",a.xu,a);b=g.Sa(a.X,"spacecast")||a.Ra;var c=a.Gn();c=c.bc.isDefault?void 0:c;a.B.initialize(a.g.startSeconds,SK(a),b,c);a.g.probeUrl&&(a.B.ia=a.g.probeUrl);(a.X.length||a.Ra)&&CI(a.B,!1);a.F&&VJ(a.F,a.B)};
jaa=function(a){a.F=new WJ(a.l,a.B,a.g,a.I);a.F.subscribe("seekto",function(b,c){WK(a,b);c||XK(a);YK(a,b);a.O("seekto",a,b)});
a.F.subscribe("seekstart",function(){return ZK(a)});
a.F.subscribe("ended",function(){return eK(a)});
a.F.subscribe("pausemediaelement",function(){return zK(a,!0)});
a.F.subscribe("resumemediaelement",function(){g.T(a.o,8)&&a.Pi()});
a.F.subscribe("ctmp",a.tc,a)};
EK=function(a){var b=a.A.experiments.l("html5_background_quality_cap");a=a.A.experiments.l("html5_background_cap_idle_secs");return!b||"auto"!=Xu()||g.Wt()/1E3<a?Qu:Qv()?new Nu(0,b,!1):Qu};
jK=function(a){a.B&&(a.B.dispose(),a.B=null,a.F&&VJ(a.F,null));JK(a)};
JK=function(a){a.L&&(a.L.dispose(),a.L=null)};
PK=function(a){if(a.L)return a.L.B;a.B?a.B.seek(a.getCurrentTime()):g.VK(a);try{a.A.experiments.g("html5_prewarm_mse")?a.L=sE(a.l,a.A.C):a.L=qE(a.l,a.A.C)}catch(d){return d.message="window.URL object overwritten by external code",window.setTimeout(function(){throw d;},0),g.rK(a,a.g.Ob?"drm.unavailable":"html5.missingapi","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","updateMs.1"),null}var b=(0,g.A)(a.MF,a),c=(0,g.A)(function(a){g.rK(this,"fmt.unplayable",void 0,"msi.1;ename."+a.name)},a);
a.A.experiments.g("html5_prewarm_mse")?Ax(a.L).then(b).then(void 0,c):(a.L.A=b,a.L.C=c);return a.L.B};
kaa=function(a){return 403==a.details.rc?(a=a.errorCode,"net.badstatus"==a||"manifest.net.retryexhausted"==a):!1};
KK=function(a){!a.g.Fd&&a.g.Uf||a.Mb||(a.Mb=!0,a.O("signatureexpired"))};
$K=function(a){return"net.retryexhausted"==a.errorCode||"net.badstatus"==a.errorCode&&!!a.details.fmt_unav};
laa=function(a,b){if(a.l&&("fmt.unplayable"==b.errorCode||"html5.invalidstate"==b.errorCode)){var c=a.l.Td();b.details.merr=c?c.toString():"0";b.details.msg=NE(a.l)}};
zK=function(a,b){b=void 0===b?!1:b;var c=!a.A.experiments.g("web_player_ended_pause_killswitch")&&g.T(a.o,2);if((g.T(a.o,64)||c)&&!b)if(g.T(a.o,8))pK(a,IE(a.o,4,8));else return;if(a.l||a.A.experiments.g("html5_pause_video_fix"))g.T(a.o,128)||(b?pK(a,GE(a.o,256)):pK(a,IE(a.o,4,8))),a.l&&a.l.pause()};
aL=function(a){zK(a);a.B&&(CI(a.B,!1),EI(a.B,!1))};
g.FK=function(a,b){b=void 0===b?!1:b;if(a.l){try{a.l.pause()}catch(c){return}hK(a);jK(a);a.g&&(a.g.startSeconds=a.getCurrentTime());a.V=window.NaN;a.l.cf();HK(a);g.T(a.o,128)||(b?pK(a,IE(a.o,4,8)):pK(a,EE(a.o)));a.A.L.remove(a.g.videoId)}};
xK=function(a,b,c,d,e){b=void 0===b?0:b;c=void 0===c?!1:c;e=void 0===e?!1:e;if(a.l&&a.R.g){if(b&&!(0,window.isFinite)(b)&&a.I&&a.B){if(a.g.isLowLatencyLiveStream||"LOW"==a.g.latencyClass||"ULTRALOW"==a.g.latencyClass){var f=a.I;if(f.o.length){var k=f.l;1<Math.min.apply(null,f.o)?f.l=bG(f,f.l-1):f.g.o&&(f.l=bG(f,f.l+1));if(k=k!=f.l)f.o=[],f.C=0;f=k}else f=!1;f&&a.C&&zF(a.C,eG(a.I))}a.B.Ha=Math.max(0,a.I.l-1)}if(a.A.experiments.g("html5_new_seeking"))YJ(a.F,b,c);else{var l;if(f=b&&!(0,window.isFinite)(b)&&
a.B&&a.g.Ib())f=a.B,f=!(f.g.C||f.A.C)||a.g.Fd&&!a.A.experiments.g("html5_manifestless_no_redundant_seek_to_head");f&&(l=ZI(a.B));l||(l=g.Uc(b||0,a.tb(),UK(a,e)));WK(a,l);c?a.Oq():XK(a,d);YK(a,l);a.O("seekto",a,l)}}else a.g.startSeconds=b};
WK=function(a,b){if(a.A.experiments.g("html5_new_peg_to_live_v2")&&a.I){var c=a.I;iG(c,b,!1);jG(c,b)}else c=a.g.oa&&!g.T(a.o,4)&&MK(a,b),yK(a,c);a.g.startSeconds=b;a.V=b;c=a.Ma;c.g=b;c.l=!0};
YK=function(a,b){a.aa&&b>a.g.endSeconds&&(0,window.isFinite)(b)&&(a.K.C(a.aa),a.aa=null);b<UK(a)&&pK(a,HE(a.o,2))};
XK=function(a,b){g.T(a.o,32)||(pK(a,GE(a.o,32)),g.T(a.o,8)&&zK(a,!0),a.O("beginseeking",a));b&&(a.ya||(a.ya=new g.P(a.Oq,b,a)),a.ya.start());bL(a)};
ZK=function(a){a.ya&&(a.ya.dispose(),a.ya=null);g.T(a.o,32)&&(pK(a,GE(HE(a.o,32),16)),a.O("endseeking",a))};
cL=function(a){return a.g.ka?lz(a.g.ka,a.getCurrentTime()):window.NaN};
maa=function(a){if(!a.l)return 0;if(g.PD(a.g))return 1;if(QD(a.g)){if(MK(a)||a.isPeggedToLive())return 1;var b=a.l,c=tE(b);b=(0<iE(c)&&b.getDuration()?c.end(c.length-1):0)-a.tb();a=dL(a)-a.tb();return Math.max(0,Math.min(1,b/a))}return wE(a.l)};
eL=function(a,b){var c={};if(void 0===b?0:b){a.C?g.Ia(c,pF(sF(a.C,"playback"))):a.g&&(c.cpn=a.g.clientPlaybackNonce);a.l&&(g.Ia(c,xE(a.l)),g.Ia(c,a.Em()));a.B&&g.Ia(c,cJ(a.B));if(a.H){var d=a.H,e=d.g;e={systemInfo:{flavor:e.flavor,keySystem:e.g},sessions:[]};d=g.q(d.l.values);for(var f=d.next();!f.done;f=d.next()){f=f.value;var k={requestedKeyIds:f.V,cryptoPeriodIndex:f.l};f.A&&(k.keyStatuses=f.g);e.sessions.push(k)}c.drm=e}c.state=a.o.l.toString(16);g.T(a.o,128)&&(c.debug_error=a.o.g);wK(a)&&(c.prerolls=
a.X.join(","));a.g.We&&(c.ismb=a.g.We);"UNKNOWN"!=a.g.latencyClass&&(c.latency_class=a.g.latencyClass);a.g.isLowLatencyLiveStream&&(c.lowlatency="1");a.g.oa&&(a.g.ka&&kz(a.g.ka)&&(c.segduration=kz(a.g.ka)),a.U&&(c.lat=XF(a.U.A)));c.relative_loudness=a.g.relativeLoudness.toFixed(3);if(e=AK(a))c.optimal_format=e.video.qualityLabel;c.user_qual=Xu()}c.debug_videoId=a.g.videoId;return c};
oK=function(a,b){a.O("internalvideodatachange",void 0===b?"dataupdated":b,a,a.g)};
haa=function(a){(0,g.G)("loadstart loadeddata loadedmetadata play playing pause ended suspend progress seeking seeked timeupdate durationchange ratechange error waiting abort resize".split(" "),function(a){this.wa.M(this.l,a,this.yA,this)},a);
a.A.nf&&(a.wa.M(a.l,"webkitplaybacktargetavailabilitychanged",a.iE,a),a.wa.M(a.l,"webkitcurrentplaybacktargetiswirelesschanged",a.jE,a))};
fL=function(a){var b=a.getCurrentTime(),c=a.g;!WC("pbs","")&&uC.measure&&uC.getEntriesByName&&(uC.getEntriesByName("mark_nr")[0]?VC("mark_nr"):VC());c.videoId&&a.P.info("docid",c.videoId);c.eventId&&a.P.info("ei",c.eventId);c.clientPlaybackNonce&&a.P.info("cpn",c.clientPlaybackNonce);0<c.startSeconds&&a.P.info("start",c.startSeconds.toString());a.l&&a.l.g.paused&&a.P.info("paused",1);c.Ba?a.P.info("fmt",Cu(c.Ba)):a.P.info("fmt","-1");c.Yk&&a.P.info("yt_pre",a.pf?"2":"1");a.A.Ka&&a.P.info("yt_fs",
"1");a.P.info("cmt",b.toFixed(3));if(a.B){b=a.B;window&&window.performance&&window.performance.getEntriesByName&&(c=window.performance.getEntriesByName(b.sa),c.length&&(c=c[0],b.gc("vri",c.fetchStart),b.gc("vdns",c.domainLookupEnd),b.gc("vreq",c.requestStart),b.gc("fvb",c.responseStart),b.gc("vrc",c.responseEnd)),c=window.performance.getEntriesByName(b.fa),c.length&&(c=c[0],b.gc("ari",c.fetchStart),b.gc("adns",c.domainLookupEnd),b.gc("areq",c.requestStart),b.gc("avb",c.responseStart),b.gc("arc",c.responseEnd)));
b=b.bb;for(var d in b)a.P.g(d,b[d])}};
bL=function(a,b){b=void 0===b?!1:b;if(a.l&&a.g){var c=a.getCurrentTime();if(a.I&&MK(a)){var d=a.I,e=a.Vq();d.C++;3>d.C||(d.o.push(e),50<d.o.length&&d.o.shift())}if(a.A.experiments.g("html5_new_peg_to_live_v2"))a.I&&(d=a.o.gb(),e=a.I,iG(e,c,void 0===d?!0:d),jG(e,c),d&&(d=a.I,d=!gG(d,c)&&d.isPeggedToLive()?window.Infinity:c<d.A.tb()?d.A.tb():window.NaN,(0,window.isNaN)(d)||xK(a,d,!0)));else{if(LK(a)&&a.o.gb()){xK(a,a.tb(),!0);return}if(a.isPeggedToLive()){if(!MK(a,c,!0)){if(a.o.gb()&&(a.g.kh||g.PD(a.g))){xK(a,
window.Infinity,!0);return}a.g.oa&&yK(a,!1)}}else a.g.oa&&MK(a,c)&&yK(a,!0)}a.U&&MK(a)&&(d=a.U,!d.g||c>=d.o&&c<d.B||(e=d.g.Cf(c),-1!=e&&(d.o=d.g.nd(e),d.B=d.o+d.g.getDuration(e),e=(0,g.H)()/1E3-d.g.Hn(e),d.l&&(e-=d.l()),d.A.add(e))));if(a.B&&(d=a.B,d.o)){d.B!=c&&d.resume();if(d.K&&!Cx(d.o)){e=d.B<=c&&c<d.B+10;var f=0<=gE(d.o.l.buffered,d.B+MI);e&&f&&(d.K=!1)}d.K||(d.B=c);g.Pp(d.ma)}5<c&&(a.g.startSeconds=c);(d=g.Pt())?g.Qt(a.Ua):g.lr(a.Ua);!g.LE(a.o)&&a.l.g.paused||g.T(a.o,128)||(e=(0,g.A)(a.lz,a),
a.Ua=0==(a.l.g.played||eE()).length?d?g.Nt(e,100):g.jr(e,100):d?g.Nt(e,500):g.jr(e,500));a.g.Pe=c;!b&&a.o.gb()&&a.C&&(c=a.C,c.o.update(),c.g.videoData.Vb()&&c.g.videoData.je&&!c.P&&VE(c.o)>=c.g.videoData.je&&(c.B&&c.g.videoData.je&&(d=sF(c,"delayplay"),d.Ga=!0,d.send(),c.P=!0),xF(c)),a.A.experiments.g("html5_new_e2e_latency_tracking")&&MK(a)&&(!a.g.ka||!hz(a.g.ka))&&(0,g.H)()>a.qf+6283&&(c=a.C.l,e=c.g.B(),d=g.$E(c.g),gF(c,d,e),e=e.o,(0,window.isNaN)(e)||g.dF(c,d,"e2el",[e.toFixed(3)]),a.qf=(0,g.H)()));
a.O("progresssync",a,b)}};
pK=function(a,b){if(!g.JE(a.o,b)){var c=new g.PE(b,a.o);a.o=b;var d=!a.Ab.length;a.Ab.push(c);var e=a.l&&a.l.g.seeking;if(0<QE(c,1)&&!g.T(c.g,16)&&!e&&g.T(a.o,8)&&!g.T(a.o,64)&&a.B){a.B.aa=!0;a.g.If&&a.l&&a.tc("rbinfo","rs."+a.l.g.readyState+";lact."+g.Wt());e=a.A.experiments.l("html5_nnr_downgrade_count");var f=5<=uE(a.l),k=a.A.experiments.g("html5_perf_cap_for_live")&&a.g.oa;e&&a.l&&(f||k)&&(a.xd++,f=a.g.Ba.video.g,k=360,a.A.experiments.g("html5_mobile_perf_cap_240")&&a.A.l&&(k=240),a.xd==e&&f>
k&&(e=a.sa,e.g.mf=new Nu(0,f-1,!1),e.g.experiments.g("html5_report_performance_cap")&&g.ju("yt-player-performance-cap",f-1,2592E3),TK(a,"b"),a.A.experiments.g("html5_report_performance_cap")&&a.tc("perfDowngrade",""+f)))}0>QE(c,8)&&(g.lr(a.ba),a.ba=window.NaN,yK(a,!1));0<QE(c,8)&&!a.g.Fd&&(0,window.isNaN)(a.ba)&&(a.ba=g.jr((0,g.A)(a.uu,a),15E3));0<QE(c,32)&&yK(a,!1);g.T(c.state,2)&&QD(a.g)&&(e=a.getCurrentTime(),a.g.lengthSeconds!=e&&(a.g.lengthSeconds=e,oK(a)),bL(a,!0));0<QE(c,2)&&a.Ro();a.g.ka&&
a.g.oa&&(0>QE(c,8)?(e=a.g.ka,e.o&&e.o.stop()):0<QE(c,8)&&a.g.ka.resume());0<QE(c,1)&&(a.Xb=g.jr((0,g.A)(a.nI,a),5E3));if(a.C&&(e=a.C,!e.ga())){g.T(c.state,2)?(e.C="paused",0<QE(c,2)&&e.B&&uF(e).send()):g.T(c.state,8)?(e.C="playing",e.B&&(0,window.isNaN)(e.F)&&rF(e,!1)):e.C="paused";f=e.l;k=c.state;var l=g.$E(f.g),m=lF(f,c.state);m!=f.o&&(l<f.A||("PL"==f.o?f.K+=l-f.A:"B"==f.o&&f.I&&(f.I=!1,f.P+=l-f.A,!f.U&&10<=f.P&&180>=f.K&&(f.g.H(),f.l.qoealert=["1"],f.U=!0)),"B"!=m||"PL"!=f.o&&"PB"!=f.o||(f.I=!0),
f.A=l),"B"==m&&"PL"==f.o||f.g.videoData.If?hF(f,l):g.dF(f,l,"cmt",[f.g.l().toFixed(3)]),g.dF(f,l,"vps",[m]),f.o=m,f.A=l);g.T(k,128)&&jF(f,l,k.g.errorCode,k.g.errorDetail);(g.T(k,2)||g.T(k,128))&&f.B(l);g.T(k,8)&&f.g.videoData.Yk&&!f.H&&(f.l.user_intent=[g.$E(f.g).toString()],f.H=!0);iF(f);e.A&&g.T(c.state,128)&&(e.pl("error-100"),g.lr(e.A))}if(d)try{for(var n=g.q(a.Ab),p=n.next();!p.done;p=n.next()){var u=p.value,v=a.K;c=u;if(v.B&&!v.I&&(v.o(),g.T(c.g,16))){c=v;var C=sI(c.g,Math.max(c.A-2E3,0));!(0,window.isNaN)(C)&&
0x7ffffffffffff>C&&c.F.start()}a.O("statechange",u)}}finally{a.Ab.length=0}}};
gL=function(a){g.T(a.o,2)||g.T(a.o,32)||(a.V=window.NaN)};
yK=function(a,b){a.g.oa&&a.isPeggedToLive()!=b&&a.I&&!a.A.experiments.g("html5_new_peg_to_live_v2")&&(a.I.B=b)};
hL=function(a,b){pK(a,IE(a.o,1028,9));a.tc("dompaused",b)};
NK=function(a){if(!a.l||!a.g.Ia)return!1;if(a.g.Ia.g){var b=PK(a);a.B.resume()}else jK(a),b=a.g.Tf.g();var c=a.l.l;if(!c||null==b||b.Of!=c.Of){a.P.g("vta");g.FC("vta",void 0,"video_to_ad");pE(a.l,b);a:if(g.FD(a.g)&&a.l)if(b=a.g.we){if(a.H)if("fairplay"==b.flavor)hK(a);else break a;c=a.l.ha();a.H=new HJ(c,b,a.A.experiments,"widevine"==b.flavor&&!a.g.oa&&!a.g.hn,a.g.drmSessionId);a.H.subscribe("newsession",a.gG,a);a.H.subscribe("licenseerror",a.xF,a);a.H.subscribe("qualitychange",a.zF,a);a.H.subscribe("heartbeatparams",
a.wA,a);a.H.subscribe("keystatuseschange",a.xA,a);a.H.subscribe("hdproberequired",a.yF,a);b=a.H;c=a.g.oauthToken;b.P=c;b.O("oauthtoken",c)}else g.rK(a,"fmt.unplayable","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","drm.1");a.L&&Rt(4);g.lr(a.ba);!a.g.Fd&&DE(a.o)&&(a.ba=g.jr((0,g.A)(a.uu,a),15E3));return!0}return!1};
hK=function(a){a.H&&(a.H.dispose(),a.H=null)};
dL=function(a){return a.g.oa&&(MK(a)||a.isPeggedToLive()||g.PD(a.g))?a.getCurrentTime():UK(a)};
UK=function(a,b){b=void 0===b?!1:b;return a.A.experiments.g("html5_new_seeking")?a.F?a.F.kd(b):0:a.l?a.g.oa?a.g.Ia&&a.g.Ia.g&&a.I?b?a.g.kd():fG(a.I):mE(a.l)||0:a.g.kd():0};
iL=function(a,b){a.Ha=b;a.l&&a.l.Be(b)};
MK=function(a,b,c){if(!a.g.oa||!a.I||!(a.Gc||void 0!==c&&c))return!1;void 0==b&&(b=a.getCurrentTime());return gG(a.I,b)};
g.jL=function(a,b){a.Gc=b;if(a.g.ka)if(b)a.g.ka.resume();else{var c=a.g.ka;c.o&&c.o.stop()}a.A.experiments.g("html5_suspend_loader")&&a.B&&(b?a.B.resume():CI(a.B,!0));a.A.experiments.g("html5_fludd_suspend")&&(g.T(a.o,2)||b?g.T(a.o,512)&&b&&pK(a,HE(a.o,512)):pK(a,GE(a.o,512)));a.C&&(c=a.C.l,g.dF(c,g.$E(c.g),"stream",[b?"A":"I"]))};
kL=function(a){a.l&&(a.L?QK(a):(a.g.Tf&&a.g.Tf.o(),a.l.cf()),OK(a))};
LK=function(a){return a.getCurrentTime()<a.tb()-15};
lL=function(a,b){a.A.experiments.g("html5_log_rebuffer_reason")&&a.tc("bufreason","r."+b+";lact."+g.Wt())};
mL=function(a,b){AF.call(this,a,b);this.C=null};
g.nL=function(a){return a.app.A};
g.oL=function(a){a=g.nL(a).K;return!!a&&a.zs()};
pL=function(a){a=g.nL(a);var b=a.K;return b&&b.As()?!0:g.OD(a.g.Y(),"ypc_module")};
g.qL=function(a,b){3==a.Ca()?a.O("mdxautoplaycancel"):a.O("autonavcancel",b)};
g.U=function(a){return a.app.g};
g.tL=function(a){var b=a.app;a=a.playerType;return 3==rL(b)?g.sL(b.A).F:g.V(b,a).o};
g.uL=function(a){return a.app.H};
vL=function(a){var b=g.sL(g.nL(a));return a.app.aa&&!a.isFullscreen()||3==a.Ca()&&b.hasNext()&&b.se()||!!a.Ce()};
g.wL=function(a,b){var c=a.playerType;(c=g.V(a.app,void 0===c?1:c))&&eK(c,b)};
g.xL=function(a){if(Cs())if(a.isFullscreen())Es(a.getRootNode());else{a=a.getRootNode();var b=Bs(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],a);b&&b.call(a)}else a.la("onFullscreenToggled",a.isFullscreen())};
g.yL=function(a){var b={};a=RK(g.V(a.app));a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b[c.quality]=c;return b};
g.zL=function(a){return(a=g.V(a.app))?g.Tu(RJ(a.sa,a.g)):"unknown"};
g.AL=function(a){return(a=g.nL(a).o)?a.bB():{}};
g.BL=function(a,b,c,d){var e=g.V(a.app);c.event=b;a.isFullscreen()&&(c.fs=1);c.ux=1;e.logEvent(c,d)};
g.CL=function(a){a=g.nL(a).A;return!!a&&a.xi()};
g.DL=function(a){a=g.nL(a).A;return!!a&&a.ys()};
g.EL=function(a){var b=a.app.A.I;if(b){a=g.uL(b.g).Da();a=new g.Wg(0,0,a.width,a.height);if(b.A.g&&!b.Ah()){if(g.U(b.g).Tc){var c=b.cd()?b.wa:b.Ga;a.top+=c;a.height-=c}b.o&&(a.height-=b.o.o.cd()?72:50)}return a}b=a.app.H.Da();return new g.Wg(0,0,b.width,b.height)};
FL=function(a){a=g.nL(a).P;return!!a&&a.OA()};
g.HL=function(a,b,c){GL(a.app,b,c||a.playerType)};
g.JL=function(a,b,c){var d=a.app;a=c||a.playerType;if(c=g.V(d,a))c.K.C.apply(c.K,b),a&&rL(d)!=a||IL(d,"cuerangesremoved",b)};
g.KL=function(a,b){var c=a.app,d=a.playerType,e=g.V(c,d);e&&(e=wI(e.K,b),d&&rL(c)!=d||IL(c,"cuerangesremoved",e))};
g.LL=function(a,b){var c=g.V(a.app,a.playerType);c&&gaa(c,b)};
g.ML=function(a){a=a.Y().Ba;return!!a&&!(!a.audio||!a.video)&&"application/x-mpegURL"!=a.mimeType};
g.NL=function(a){a=a.Y();return!!(a.adaptiveFormats||a.hlsFormats||a.hd)};
g.OL=function(a,b,c){a=g.uL(a).element;var d=ib(a.children,function(a){a=(0,window.parseInt)(a.getAttribute("data-layer"),10);return c-a||1});
0>d&&(d=-(d+1));Cd(a,b,d);b.setAttribute("data-layer",c)};
g.PL=function(a){var b=g.U(a);if(!b.xd)return!1;var c=a.Y();if(!c||3==a.Ca())return!1;b=c.oa&&(!b.experiments.g("allow_live_autoplay")||c.isLiveDefaultBroadcast);return!c.ypcPreview&&!b&&!g.Sa(c.rd,"ypc")&&!a.Ce()};
RL=function(a,b,c,d){if(g.U(a).F){a=a.app.L;g.Sa(a.g,b);g.Va(a.g,b);var e=String(a.H++);b.setAttribute("data-visual-id",e);QL(a,"onLogClientVeCreated",{id:e,ve_type:d});g.Ce(c,(0,g.A)(a.F,a,b))}};
SL=function(a,b){return g.U(a).F?g.Sa(a.app.L.g,b):!1};
paa=function(){var a={};a.dt=naa;a.flash=oaa||"0";a:{try{var b=window.top.location.href}catch(e){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}a=(a.frm=b,a);a.u_tz=-(new Date).getTimezoneOffset();var c=void 0===c?L:c;try{var d=c.history.length}catch(e){d=0}a.u_his=d;if(d=!!L.navigator)d="unknown"!==typeof L.navigator.javaEnabled;a.u_java=d&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(a.u_h=L.screen.height,a.u_w=L.screen.width,a.u_ah=L.screen.availHeight,a.u_aw=L.screen.availWidth,
a.u_cd=L.screen.colorDepth);L.navigator&&L.navigator.plugins&&(a.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(a.u_nmime=L.navigator.mimeTypes.length);return a};
TL=function(a){return a.isTimeout?"NO_BID":"ERR_BID"};
qaa=function(){var a=null;qs().then(function(b){return a=b},function(b){return a=TL(b)});
return a};
raa=function(){var a=gg(1E3,"NO_BID");return Tf(g.Vf(Qf([qs(),a]),TL),function(){return a.cancel()})};
saa=function(){var a=null;us().then(function(b){return a=b},function(){return a="NO_ADS_ID"});
return a};
taa=function(){var a=gg(1E3,"NO_ADS_ID");return Tf(g.Vf(Qf([us(),a]),function(){return"NO_ADS_ID"}),function(){return a.cancel()})};
UL=function(a){this.g=a;this.l=1};
VL=function(a,b){a.g.app.I.g(b)};
WL=function(a,b,c,d){c=void 0===c?"":c;d=void 0===d?"":d;var e=a.g.Y(1),f={AD_BLOCK:a.l++,CA_TYPE:uaa?"flash":"image",CPN:e.clientPlaybackNonce,LACT:g.Wt(),VIS:a.g.df(),P_H:g.uL(a.g).Da().height,P_W:g.uL(a.g).Da().width},k=paa();Object.keys(k).forEach(function(a){f[a.toUpperCase()]=k[a].toString()});
""!==c&&(f.BISCOTTI_ID=c);""!==d&&(f.MUTSU_ID=d);a=g.zo(b,f).split("?");if(2!=a.length)return Nf(Error("Invalid AdBreakInfo URL"));b=g.q(a);a=b.next().value;c=b.next().value;b={};e.oauthToken&&ur()&&(b.Authorization="Bearer "+e.oauthToken);(e=g.nr(c))&&e.post_data&&(c=g.nr(e.post_data),Object.assign(e,c),delete e.post_data);return bs(a,{format:"RAW",headers:b,method:"POST",jb:e,timeout:2E3,withCredentials:!0})};
g.XL=function(a){g.R.call(this);this.g=a;this.loaded=!1};
YL=function(a,b,c){this.o=a;this.l=null;this.A=b;this.g=0;this.livestream=void 0===c?!1:c};
ZL=function(a,b,c,d){g.EF.call(this,b.start,b.end,{id:d,namespace:"ad",priority:2,visible:c});this.o=a.kind||"AD_PLACEMENT_KIND_UNKNOWN";this.g=!1;this.A=null};
$L=function(a){return"AD_PLACEMENT_KIND_START"==a.o};
aM=function(a,b,c){c=void 0===c?!1:c;switch(a.kind){case "AD_PLACEMENT_KIND_START":return new g.Yi(-0x8000000000000,-0x8000000000000);case "AD_PLACEMENT_KIND_END":return c?new g.Yi(Math.max(0,b.o-b.g),0x7ffffffffffff):new g.Yi(0x7ffffffffffff,0x8000000000000);case "AD_PLACEMENT_KIND_MILLISECONDS":var d=a.adTimeOffset;a=(0,window.parseInt)(d.offsetStartMilliseconds,10);d=(0,window.parseInt)(d.offsetEndMilliseconds,10);-1===d&&(d=b.o);c&&(d=a,a=Math.max(0,a-b.g));return new g.Yi(a,d);case "AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED":return a=
b.l,d=1E3*a.Pd,c?new g.Yi(Math.floor(b.A+Math.random()*Math.max(0,d-b.A-1E4)),d):new g.Yi(d,d+(0<a.durationSecs?1E3*a.durationSecs:5E3))}return new g.Yi(0,0)};
cM=function(a,b,c){b=void 0===b?null:b;c=void 0===c?{}:c;this.id=bM(a);this.componentType=a;this.macros=c;this.renderer=b};
bM=function(a){return a+g.Tp(g.Sp.getInstance())};
dM=function(a,b,c){this.id=c;this.content=a;this.actionType=b};
eM=function(){this.g=null};
vaa=function(a){return fM(a).then(function(){return new g.If(function(a,c){var b=gM();(b=b?hM(b):null)&&"adSizes"in b[0]?a((0,g.I)(b[0].adSizes,function(a){return new g.ad(a.adWidth,a.adHeight)})):c(Error("No slots registered with GPT services"))})})};
waa=function(a){!iM()&&a.g?a.g.cancel():fM(a).then(function(){return jM(null,300,60)})};
jM=function(a,b,c){var d=gg(5E3).then(function(){throw Error("Timed out while waiting for GPT set companion");}),e=new g.If(function(d,e){var f=gM();
if(f){var k=hM(f);if(k&&0!=k.length){var n={};n.slotId=k[0].slotId;n.adContent="<div></div>";n.adWidth=b;n.adHeight=c;n.friendlyIframeRendering=!1;n.onAdContentSet=function(b){var c=g.Hd(b);c||(c=g.yd("div"),b.appendChild(c));a&&c.appendChild(a);d()};
(f=f.googleSetCompanionAdContents)?f([n]):e(Error("Missing googleSetCompanionAdContents API"))}else e(Error("No slots registered with GPT services"))}else e(Error("Failed to find GPT services"))});
return Qf([e,d])};
fM=function(a){null==a.g&&(a.g=new g.If(function(a,c){function b(d){iM()?a():0>=d?c(Error("Timed out while waiting for GPT services")):g.Vf(gg(200).then(function(){b(d-1)}),c)}
b(150)}));
return a.g};
iM=function(){var a=gM();if(!a)return!1;a=hM(a);return g.ya(a)&&0!=a.length?null!=g.gd("google_companion_ad_div"):!1};
gM=function(){var a=sd();return g.z("googletag.cmd",a)?a:null};
hM=function(a){a=g.t(a.googleGetCompanionAdSlots)?er(a.googleGetCompanionAdSlots)():void 0;return g.t(a)&&0<a.length?a:null};
xaa=function(){this.url=null;this.height=this.width=0;this.clickTrackingUrls=null};
kM=function(){this.contentVideoId=null;this.macros={};this.imageCompanionAdRenderer=this.iframeCompanionRenderer=null};
lM=function(a,b){this.l=a;this.g=b};
yaa=function(a){return a.g?vaa(a.g):Nf("GPT is not enalbed")};
zaa=function(a){this.o=a;this.g={};this.l=dk()?500:2500};
Aaa=function(a,b){return b.reduce(function(b,d){if(!(d&&d.mimeType&&d.maxBitrate&&d.uri))return b;d.mimeType in a.g||(a.g[d.mimeType]=a.o.Rn(d.mimeType));if(!a.g[d.mimeType])return b;if(!b)return d;if(d.delivery!=b.delivery)return"STREAMING"==d.delivery?d:b;var c=b.maxBitrate-a.l,f=d.maxBitrate-a.l;return 0>=c&&0>=f?f>c?d:b:0<c&&0<f?f<c?d:b:0>=f?d:b},null)};
mM=function(a){this.aa=a||{};this.L=String(Math.floor(1E9*Math.random()))};
nM=function(a,b){return a.aa[b]?a.aa[b]:[]};
oM=function(a,b){this.g=a;this.l=b.length;this.adBreakLengthSeconds=b.reduce(function(a,b){return a+b},0);
for(var c=0,d=a+1;d<b.length;d++)c+=b[d];this.adBreakRemainingLengthSeconds=c};
pM=function(a,b){var c;if(c=a.pings){var d={};d.impression=c.impressionPings||[];d.error=c.errorPings||[];d.mute=c.mutePings||[];d.unmute=c.unmutePings||[];d.pause=c.pausePings||[];d.rewind=c.rewindPings||[];d.resume=c.resumePings||[];d.skip=c.skipPings||[];d.close=c.closePings||[];d.progress=c.progressPings||[];d.clickthrough=c.clickthroughPings||[];d.fullscreen=c.fullscreenPings||[];d.active_view_viewable=c.activeViewViewablePings||[];d.active_view_measurable=c.activeViewMeasurablePings||[];d.active_view_fully_viewable_audible_half_duration=
c.activeViewFullyViewableAudibleHalfDurationPings||[];d.end_fullscreen=c.endFullscreenPings||[];d.channel_clickthrough=c.channelClickthroughPings||[];d.abandon=c.abandonPings||[];d.start=c.startPings||[];d.first_quartile=c.firstQuartilePings||[];d.midpoint=c.secondQuartilePings||[];d.third_quartile=c.thirdQuartilePings||[];d.complete=c.completePings||[];c=d}else c={};mM.call(this,c);this.I=new oM(0,[]);this.C=this.B=null;this.F=!1;this.X=b;this.H=[];this.l={};this.A=a;this.V=this.R=null;this.o=0;
this.U=this.K=null;c=this.A.skipOffsetMilliseconds;0<c&&(this.R=c);this.l=g.nr(this.A.playerVars||"");(c=this.A.external)?(this.H=c.mediaFiles||[],c=c.durationMilliseconds,g.ua(c)&&(this.o=c/1E3,this.l.length_seconds=this.o.toString()),(c=Aaa(this.X,this.H))?(d=c.mimeType,this.l.url_encoded_third_party_media="url="+(0,window.encodeURIComponent)(c.uri)+"&type="+(0,window.encodeURIComponent)(d)):this.U=Error("Nonplayable third party ad media file.")):(this.K=this.l.video_id,this.B=this.l.ucid||null,
this.F=KA(this.F,this.l.is_listed),this.V=this.l.title||null,this.o=MA(this.o,this.l.length_seconds));this.C=this.A.clickthroughEndpoint||null};
qM=function(a){mM.call(this);this.l=a};
rM=function(a){mM.call(this);this.l=a};
sM=function(a){mM.call(this);this.l=a};
tM=function(){this.g=[];this.l=null;this.o=0};
uM=function(a){a=a.impressionUrls;var b={};a&&(b.impression=a);mM.call(this,b)};
vM=function(){return"ytp-id-"+Baa++};
g.xM=function(a){g.J.call(this);this.Z={};this.Ha={};this.element=wM(this,a)};
wM=function(a,b,c){c=c||"svg"==b.D;if(c){var d=window.document.createElementNS("http://www.w3.org/2000/svg",b.D);g.BB&&(b.N||(b.N={}),b.N.focusable="false")}else d=g.yd(b.D);var e=b.J;if(e){if(e=yM(a,d,"class",e))zM(a,d,"class",e),a.Z[e]=d}else if(e=b.W){for(var f=0;f<e.length;f++)a.Z[e[f]]=d;zM(a,d,"class",e.join(" "))}if(e=b.G)for(var k=f=0;k<e.length;k++){var l=e[k];if(l)if(g.w(l))l=yM(a,d,"child",l),null!=l&&d.appendChild(g.zd(l));else if(l.element)d.appendChild(l.element);else{var m=l;l=wM(a,
m,c);d.appendChild(l);m.Fa&&(m=vM(),l.id=m,l=window.document.createElementNS("http://www.w3.org/2000/svg","use"),l.setAttribute("class","ytp-svg-shadow"),l.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+m),Cd(d,l,f++))}}if(b=b.N){c=d;for(var n in b)e=b[n],null!=e&&zM(a,c,n,g.w(e)?yM(a,c,n,e):e)}return d};
g.AM=function(a){g.Dd(a.element)};
yM=function(a,b,c,d){return"{{"==d.substr(0,2)?(a.Ha[d]=[b,c],null):d};
zM=function(a,b,c,d){if("child"==c){g.Bd(b);if(!g.ya(d)||g.Ba(d)&&g.w(d.D))d=[d];c=[];for(var e=0;e<d.length;e++){var f=d[e];if(null!=f){var k=f.nodeType;if(1==k||3==k)c.push(f);else if(g.Ba(f)&&g.w(f.D))c.push(wM(a,f));else if(f.element)c.push(f.element);else if(g.w(f)&&-1!=f.indexOf("\n"))for(f=f.split("\n"),k=0;k<f.length;k++)0<k&&c.push(g.yd("BR")),c.push(g.zd(f[k]));else c.push(g.zd(f))}}for(a=0;a<c.length;a++)b.appendChild(c[a])}else"style"==c?b.style.cssText=d?d:"":null===d?b.removeAttribute(c):
b.setAttribute(c,d.toString())};
BM=function(){mM.call(this)};
g.CM=function(a,b){a&&(a.style.display=b)};
DM=function(a){if(window.document.createRange){var b=window.document.createRange();b.selectNodeContents(a);window.getSelection().removeAllRanges();window.getSelection().addRange(b)}};
g.W=function(a){g.xM.call(this,a);this.aa=!0;this.U=[]};
g.EM=function(a,b){b?a.show():a.hide()};
GM=function(a,b){var c=g.cr("VALID_SESSION_TEMPDATA_DOMAINS",[]),d=g.zg(window.location.href);d&&c.push(d);d=g.zg(a);if(g.Sa(c,d)||!d&&g.qb(a,"/"))if(g.$r("autoescape_tempdata_url")&&(c=window.document.createElement("a"),g.Rc(c,a),a=c.href),a&&(c=g.xg(a),c=g.vg(null,null,null,null,c[5],c[6],c[7]),d=c.indexOf("#"),c=0>d?c:c.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.mu();if(e){var e=(0,window.parseInt)(e,10);(0,window.isFinite)(e)&&0<e&&(c="ST-"+g.Lb(c).toString(36),d=b?g.Hg(b):"",g.ou(c,d,e||5),
FM(b))}else e="ST-"+g.Lb(c).toString(36),c=b?g.Hg(b):"",g.ou(e,c,5),FM(b)}};
FM=function(a){if(a){a=a.itct||a.ved;var b=g.z("yt.logging.screen.storeParentElement");a&&b&&b(new g.gu(a))}};
g.HM=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=g.Jg(a,b)+c;a=a instanceof Hc?a:Mc(a);d.href=g.Ic(a)};
g.IM=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.cr("EVENT_ID");d&&(b.ei||(b.ei=d));b&&GM(a,b);if(c)return!1;(window.ytspf||{}).enabled?window.spf.navigate(a):g.HM(a);return!0};
g.JM=function(a,b,c){c&&GM(a,c);window.open(a,b||g.Lb(a).toString(36))};
KM=function(a){this.g=a};
Caa=function(a,b){switch(b.action){case "START_LINEAR_AD":g.Cf(function(){var b=a.g;b.l&&LM(b.l.g)&&b.l.xt()});
break;case "END_LINEAR_AD":g.Cf(function(){var b=a.g;b.l&&LM(b.l.g)&&(b=b.l,LM(b.g)&&b.xf())})}};
NM=function(a,b){(0,g.G)(a,function(a){return MM(a,b)})};
MM=function(a,b){a.loggingUrls&&(0,g.G)(a.loggingUrls,function(a){if(a.baseUrl){a=g.zo(a.baseUrl,b);if("https:"==window.location.protocol){var c=g.xg(a);a="https"==c[1]?a:g.vg("https",c[2],c[3],c[4],c[5],c[6],c[7])}g.Wr(a,void 0,Zo.yk(a))}});
a.urlEndpoint&&a.urlEndpoint.url&&g.JM(a.urlEndpoint.url)};
OM=function(a,b){g.W.call(this,a);this.o=b;this.g=Daa(this)};
Daa=function(a){var b=a.o;if(b){a=function(a){return{toString:function(){return a()}}};
var c={};c.AD_MT=a(function(){return Math.round(Math.max(0,1E3*b.getCurrentTime(2))).toString()});
c.MT=a(function(){return Math.round(Math.max(0,1E3*b.getCurrentTime(1))).toString()});
c.P_H=a(function(){return b.Fg().height.toString()});
c.PV_H=c.P_H;c.P_W=a(function(){return b.Fg().width.toString()});
c.PV_W=c.P_W;c.CONN="0";c.WT=a(function(){return(0,g.H)().toString()});
c.LACT=a(function(){return g.Wt().toString()});
c.VIS=a(function(){return b.df().toString()});
c.VOL=a(function(){return b.getVolume().toString()});
return c}return{}};
PM=function(a,b,c){c=Eaa(b,c);var d={D:"div"};c&&(d={D:"div",J:"image-companion",G:[{D:"img",N:{src:c.url,border:"0",style:"cursor:pointer;"}}]});OM.call(this,d,a);this.l=b;if(a=this.Z["image-companion"])void 0!==c.width&&void 0!==c.height&&g.Eh(a,c.width,c.height),this.ea("click",this.A,this),this.Jc(b.impressionCommands)};
Eaa=function(a,b){if(!a.image||!a.image.thumbnail)return null;var c=a.image.thumbnail;return null==c.thumbnails?null:g.Oa(c.thumbnails||[],function(a){return a.width==b.width&&a.height==b.height})};
QM=function(a){mM.call(this);this.l=a;this.C=(0,g.I)((a.image&&a.image.thumbnail?a.image.thumbnail.thumbnails:null)||[],function(a){return new g.ad(a.width,a.height)})};
RM=function(a){mM.call(this);this.l=a};
SM=function(a){g.Wb(a).filter(g.Ba).forEach(SM);Object.freeze(a)};
TM=function(a){mM.call(this);this.l=g.hc(a);SM(this.l)};
UM=function(a){if(!a)return[];var b=[];a=g.q(a);for(var c=a.next();!c.done;c=a.next())if(c=c.value,c.loggingUrls){c=g.q(c.loggingUrls);for(var d=c.next();!d.done;d=c.next())b.push({baseUrl:d.value.baseUrl})}return b};
Faa=function(a){var b={};b.impression=UM(a.impressionCommands)||[];b.complete=UM(a.completionCommands)||[];return b};
VM=function(a){mM.call(this,Faa(a));this.l=a};
WM=function(a){if(!a)return[];var b=[];a.forEach(function(a){a.command.loggingUrls.forEach(function(c){b.push({baseUrl:c.baseUrl,offsetMilliseconds:a.adVideoOffset.milliseconds})})});
return b};
XM=function(a){return a&&a.adVideoOffset&&a.adVideoOffset.percent||0};
YM=function(a){return"AD_VIDEO_PROGRESS_KIND_PERCENT"==a.adVideoOffset.kind};
Gaa=function(a){a=a.playbackCommands;if(!a)return{};var b={};b.impression=UM(a.impressionCommands)||[];b.error=UM(a.errorCommands)||[];b.mute=UM(a.muteCommands)||[];b.unmute=UM(a.unmuteCommands)||[];b.pause=UM(a.pauseCommands)||[];b.rewind=UM(a.rewindCommands)||[];b.resume=UM(a.resumeCommands)||[];b.skip=UM(a.skipCommands)||[];b.close=UM(a.closeCommands)||[];b.clickthrough=UM(a.clickthroughCommands)||[];b.fullscreen=UM(a.fullscreenCommands)||[];b.active_view_viewable=UM(a.activeViewViewableCommands)||
[];b.active_view_measurable=UM(a.activeViewMeasurableCommands)||[];b.active_view_fully_viewable_audible_half_duration=UM(a.activeViewFullyViewableAudibleHalfDurationCommands)||[];b.end_fullscreen=UM(a.endFullscreenCommands)||[];b.channel_clickthrough=UM(a.channelClickthroughCommands)||[];b.abandon=UM(a.abandonCommands)||[];b.progress=WM(a.progressCommands.filter(function(a){return"AD_VIDEO_PROGRESS_KIND_MILLISECONDS"==a.adVideoOffset.kind}));
b.start=WM(a.progressCommands.filter(function(a){return YM(a)&&1E-6>=Math.abs(XM(a)-0)}));
b.first_quartile=WM(a.progressCommands.filter(function(a){return YM(a)&&1E-6>=Math.abs(XM(a)-.25)}));
b.midpoint=WM(a.progressCommands.filter(function(a){return YM(a)&&1E-6>=Math.abs(XM(a)-.5)}));
b.third_quartile=WM(a.progressCommands.filter(function(a){return YM(a)&&1E-6>=Math.abs(XM(a)-.75)}));
b.complete=WM(a.progressCommands.filter(function(a){return YM(a)&&1E-6>=Math.abs(XM(a)-1)}));
return b};
ZM=function(a,b){b=void 0===b?!0:b;mM.call(this,Gaa(a));this.A=a;this.o=b;this.l=a.questions?a.questions.reduce(function(a,b){var c=b.instreamSurveyAdSingleSelectQuestionRenderer||b.instreamSurveyAdMultiSelectQuestionRenderer;return c?a+c.surveyAdQuestionCommon.durationMilliseconds/1E3:a},0):0};
$M=function(a){mM.call(this);this.l=a};
aN=function(a){mM.call(this);this.l=a};
cN=function(a,b){tM.call(this);var c=bN(this,a.adVideoStart);c&&this.g.push(c);(c=Haa(this,a.linearAd,b))&&this.g.push(c);(c=bN(this,a.adVideoEnd))&&this.g.push(c);a.persistingOverlay&&a.persistingOverlay.persistingAdOverlayRenderer&&(this.l=new sM(a.persistingOverlay.persistingAdOverlayRenderer))};
Haa=function(a,b,c){if(b){if(b.instreamVideoAdRenderer)return new pM(b.instreamVideoAdRenderer,c);if(b.instreamSurveyAdRenderer)return a=!a.g.some(function(a){return a instanceof $M}),new ZM(b.instreamSurveyAdRenderer,a)}return null};
bN=function(a,b){return null==b?null:b.adActionInterstitialRenderer?new VM(b.adActionInterstitialRenderer):b.adTextInterstitialRenderer?new aN(b.adTextInterstitialRenderer):b.surveyTextInterstitialRenderer?(a.o=1,new $M(b.surveyTextInterstitialRenderer)):null};
dN=function(a){mM.call(this);this.l=a};
eN=function(a,b){OM.call(this,{D:"iframe",J:"videowall-companion",N:{marginwidth:"0",marginheight:"0",hspace:"0",vspace:"0",frameborder:"0",scrolling:"no",src:b.iframeUrl}},a);var c=this;this.element.width=g.t(b.iframeWidth)?b.iframeWidth:300;this.element.height=g.t(b.iframeHeight)?b.iframeHeight:250;this.l=b;var d=this.Z["videowall-companion"];d&&d.addEventListener("load",function(){c.Jc(b.impressionCommands);try{var a=d.contentDocument||d.contentWindow.document;var f=a&&a.body}catch(k){g.Q(k),f=
null}f&&g.Te(f,"click",c.A.bind(c))})};
fN=function(a){mM.call(this);this.l=a};
gN=function(a){return a.length?(0,g.I)(a[0].loggingUrls||[],function(a){return a.baseUrl}):[]};
Iaa=function(a,b){var c=a.instreamVideoAdRenderer,d=a.clientForecastingAdRenderer,e=a.invideoOverlayAdRenderer,f=a.videowallIframeCompanionAdRenderer,k=a.imageCompanionAdRenderer,l=a.instreamSurveyAdRenderer,m=a.plaShelfRenderer,n=a.sandwichedLinearAdRenderer,p=a.shoppingCompanionCarouselRenderer,u=a.backfillMpuCompanionAdRenderer,v=a.actionCompanionAdRenderer;return null!=c&&c.playerVars?new pM(c,b):null!=d?new uM(d):null!=e?new RM(e):null!=f?new fN(f):null!=k?new QM(k):null!=l?new ZM(l):null!=n?
new cN(n,b):null!=m?new TM(m):null!=p?new dN(p):null!=u?new rM(u):null!=v?new qM(v):null};
hN=function(a,b,c,d){this.id=b;this.g=[];this.B=[];this.K=[];this.o=[];this.l=[];this.P=[];this.H=[];this.A=[];this.I=[];this.F=[];this.C=[];this.aa=c;this.R=a.placementStartPings||[];this.U=a.placementEndPings||[];b=a.config&&a.config.adPlacementConfig;if(!b)throw Error("Malformed AdPlacementRenderer: missing AdPlacementConfig");c=a.renderer&&a.renderer.adBreakServiceRenderer&&a.renderer.adBreakServiceRenderer||{};this.L=c.getAdBreakUrl||"";d.g=(0,window.parseInt)(c.prefetchMilliseconds,10)||0;c=
g.Tp(g.Sp.getInstance());var e=aM(b,d);e=new ZL(b,e,!(d.livestream||d.l),"adcuerange:"+c);var f=null;if(d.l||0<d.g)d=aM(b,d,!0),f=new ZL(b,d,!1,"prefetch:"+c),e.A=f,f.A=e;d=[f,e];this.X=d[0];this.V=d[1];Jaa(this,a)};
iN=function(a,b,c,d){var e=null;try{e=new hN(a,b,c,d)}catch(f){g.Q(f)}return e};
jN=function(a){return"AD_PLACEMENT_KIND_MILLISECONDS"==a.Kc().o||"AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"==a.Kc().o};
LM=function(a){return 0<a.g.length||0<a.B.length||0<a.A.length};
Jaa=function(a,b){var c=0,d;(c=b.renderer)&&c.multipleInstreamVideoAdRenderer&&c.multipleInstreamVideoAdRenderer.renderers?d=c.multipleInstreamVideoAdRenderer.renderers:d=c?[c]:[];c=d.length;a.g=[];a.B=[];a.K=[];a.o=[];a.l=[];a.H=[];a.A=[];a.I=[];a.F=[];a.C=[];for(var e=0;e<c;e++){var f=Iaa(d[e],a.aa);null!=f&&(f instanceof uM?a.K.push(f):f instanceof pM?f.U?a.P.push(f):a.g.push(f):f instanceof RM?a.o.push(f):f instanceof BM?a.l.push(f):f instanceof TM?a.H.push(f):f instanceof dN?a.I.push(f):f instanceof
ZM?a.B.push(f):f instanceof cN?a.A.push(f):f instanceof rM?a.F.push(f):f instanceof qM&&a.C.push(f))}0<a.o.length&&LM(a)&&(g.Q(Error("Linear and overlay ads found in ad break")),a.o=[]);var k=(0,g.I)(a.g,function(a){return a.o});
(0,g.G)(a.g,function(a,b){var c=new oM(b,k);a.I=c})};
lN=function(a){var b={};Kaa(a,b);Laa(b);b.LACT=kN(function(){return g.Wt().toString()});
b.VIS=kN(function(){return a.df().toString()});
b.SDKV="h.3.0";b.VOL=kN(function(){return a.getVolume().toString()});
b.VED="";return b};
mN=function(a){var b=Object.assign({},{});b.MIDROLL_POS=jN(a)?kN(of(Math.round(a.Kc().start/1E3).toString())):kN(of("0"));return b};
nN=function(a,b){var c={};return c.YT_ERROR_CODE=a.toString(),c.ERRORCODE="400",c.ERROR_MSG=b,c};
kN=function(a){return{toString:function(){return a()}}};
oN=function(a){for(var b={},c=g.q(Maa),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];e&&(b[d]=e.toString())}return b};
pN=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];c={};Object.assign.apply(Object,[].concat([c],g.qa(b)));return c};
Kaa=function(a,b){b.CPN=kN(function(){var b;(b=a.Y(1))?b=b.clientPlaybackNonce:(g.Q(Error("Video data is null."),"WARNING"),b=null);return b});
b.AD_MT=kN(function(){return qN(a,2)});
b.MT=kN(function(){return qN(a,1)});
b.P_H=kN(function(){return g.uL(a).Da().height.toString()});
b.P_W=kN(function(){return g.uL(a).Da().width.toString()});
b.PV_H=kN(function(){return g.rN(g.uL(a)).height.toString()});
b.PV_W=kN(function(){return g.rN(g.uL(a)).width.toString()})};
qN=function(a,b){var c=1E3*a.getCurrentTime(b);return Math.round(Math.max(0,c)).toString()};
Laa=function(a){a.CONN=kN(of("0"));a.WT=kN(function(){return Date.now().toString()})};
sN=function(){g.R.call(this);this.g=new window.Map};
uN=function(){null==tN&&(tN=new sN,Hn.getInstance().o="b");return tN};
Naa=function(a){switch(a){case "fully_viewable_audible_half_duration_impression":return"f";case "measurable_impression":return"b";case "overlay_unmeasurable_impression":return"g";case "overlay_unviewable_impression":return"h";case "overlay_viewable_end_of_session_impression":return"i";case "overlay_viewable_immediate_impression":return"j";case "viewable_impression":return"n";default:return null}};
vN=function(a){a=a.gi();return null!=a&&2==a.getPlayerType()};
wN=function(a){a=a.l||{};a.autoplay="1";return a};
xN=function(a){a=g.U(a);return g.pB(a)&&!g.hB(a)&&"desktop-polymer"==a.g};
zN=function(a,b){var c=g.U(a);jB(c)||"3"!=c.A||(c=g.uL(a),jB(c.app.g),c.H=!b,yN(c))};
AN=function(a){g.J.call(this);this.g=a};
Oaa=function(a){switch(a){case "abandon":return"abandon";case "active_view_fully_viewable_audible_half_duration":return"fully_viewable_audible_half_duration_impression";case "active_view_measurable":return"measurable_impression";case "active_view_viewable":return"viewable_impression";case "complete":return"complete";case "end_fullscreen":return"exitfullscreen";case "first_quartile":return"firstquartile";case "fullscreen":return"fullscreen";case "impression":return"impression";case "midpoint":return"midpoint";
case "mute":return"mute";case "pause":return"pause";case "progress":return"progress";case "resume":return"resume";case "skip":return"skip";case "start":return"start";case "third_quartile":return"thirdquartile";case "unmute":return"unmute"}return null};
BN=function(a,b,c,d){g.J.call(this);this.o=a;this.F=b;g.K(this,this.F);this.g=c;this.H=d;this.I=ur();this.B=Array.from(nM(this.o,"progress"));this.B.sort(function(a,b){return a.offsetMilliseconds-b.offsetMilliseconds});
this.A=0;this.l={};this.C={tx:.25,Mx:.5,Xx:.75}};
DN=function(a){CN(a,"impression");CN(a,"start")};
Paa=function(a,b){b&&b.forEach(function(b){b.baseUrl&&EN(a,b.baseUrl,{})})};
GN=function(a,b,c){for(c=void 0===c?!1:c;a.A<a.B.length;){var d=FN(a,"progress"),e=a.B[a.A];if(e.offsetMilliseconds<=1E3*b||c)(e=e.baseUrl)&&EN(a,e,d),a.A++;else break}};
HN=function(a,b,c,d){d=void 0===d?!1:d;(b>=c*a.C.tx||d)&&CN(a,"first_quartile");(b>=c*a.C.Mx||d)&&CN(a,"midpoint");(b>=c*a.C.Xx||d)&&CN(a,"third_quartile")};
IN=function(a,b){for(var c=FN(a,b),d=g.q(nM(a.o,b)),e=d.next();!e.done;e=d.next())(e=e.value.baseUrl)&&EN(a,e,c);a.l[b]=!0};
CN=function(a,b){a.l.hasOwnProperty(b)||IN(a,b)};
EN=function(a,b,c){for(var d=Zo.yk(b),e={},f=lN(a.H),k=g.q(Object.keys(f)),l=k.next();!l.done;l=k.next())l=l.value,e[l]=f[l].toString();e=Object.assign(e,a.g);c&&((f=c.doubleVerifyViewability)&&(e.DV_VIEWABILITY=d?(0,window.encodeURIComponent)(f):f),(f=c.integralAdsViewability)&&(e.IAS_VIEWABILITY=d?(0,window.encodeURIComponent)(f):f),(f=c.googleViewability)&&(e.GOOGLE_VIEWABILITY=f),(f=c.moatInit)&&(e.MOAT_INIT=d?(0,window.encodeURIComponent)(f):f),(f=c.moatViewability)&&(e.MOAT_VIEWABILITY=d?(0,window.encodeURIComponent)(f):
f),(c=c.viewability)&&(e.VIEWABILITY=c));b=g.zo(b,e);"https:"==window.location.protocol&&(c=g.xg(b),b="https"==c[1]?b:g.vg("https",c[2],c[3],c[4],c[5],c[6],c[7]));c=void 0;(e=a.H.Y())&&e.oauthToken&&a.I&&ur(b)&&vr(b)&&(c={Authorization:"Bearer "+e.oauthToken});try{g.Wr(b,void 0,d,c)}catch(m){}};
FN=function(a,b){var c=a.F;var d=a.o;if(d.P()){var e=Oaa(b);if(null==e)d={};else{var f;(f=c.g)&&f.gi?(f=f.gi(),f=null!=f&&2==f.getPlayerType()?f.l?f.l.ha():null:null):f=null;c={opt_adElement:f,opt_fullscreen:c.g.isFullscreen()};d=Vn(e,d.L,c)}}else d={};return d?Object.assign({},d):{}};
JN=function(a,b,c,d){d=void 0===d?!1:d;g.R.call(this);this.g=a;this.l=new BN(b,new AN(this.g),c,this.g);g.K(this,this.l);this.A=uN();this.A.g.set(b.L,this);this.A.subscribe("b",this.av,this);this.A.subscribe("f",this.bv,this);this.A.subscribe("g",this.cv,this);this.A.subscribe("h",this.dv,this);this.A.subscribe("i",this.ev,this);this.A.subscribe("j",this.fv,this);this.A.subscribe("n",this.gv,this);this.I=b;this.H=[];this.macros=c;this.F=!1;if(a=d)a=g.U(this.g),g.hB(a)||a.l||g.gB(a)||a.experiments.g("disable_bulleit_adblocker_check")&&
!g.Lk?a=!0:(a=g.jd("video-ads"),a=null!=a&&"none"!=g.qh(a,"display")),a=!a;this.U=a};
KN=function(a){a.U?a.bd("html5.unsupportedads"):a.ub()};
MN=function(a,b){bb(a.H,b);LN(a,b,1)};
Qaa=function(a,b){var c=[];(0,g.G)(b,function(a){0<=g.Na(this.H,function(b){return b.componentType==a.componentType})?c.push(a):g.Q(Error("Cannot find UX Component "+a.componentType+" to modify"),"WARNING")},a);
LN(a,c,2)};
NN=function(a){LN(a,a.H,3);a.H=[]};
LN=function(a,b,c){0!=b.length&&(b=(0,g.I)(b,function(a){return new dM(a,c,a.id)}),a.O("onAdUxUpdate",b))};
ON=function(a){return(a=a.g.Y(2))&&a.clientPlaybackNonce||""};
PN=function(a,b){cM.call(this,"action-companion",a,b)};
Raa=function(a){var b=a.renderer;var c=a.renderer;c=c.navigationEndpoint&&c.navigationEndpoint.urlEndpoint&&c.navigationEndpoint.urlEndpoint.url||"";var d=QN(b.bannerImage),e=QN(b.iconImage),f=b.headline&&b.headline.text||"",k=b.description&&b.description.text||"";a=a.renderer;a=(a=a.actionButton&&a.actionButton.buttonRenderer&&a.actionButton.buttonRenderer.text)?g.iD(a):"";return{target:c,bannerImageUrl:d,iconImageUrl:e,headline:f,descriptionText:k,actionTitle:a,impressionEndpoints:b.impressionCommands}};
QN=function(a){return a&&a.thumbnail&&a.thumbnail.thumbnails&&a.thumbnail.thumbnails.length?a.thumbnail.thumbnails[0].url||"":""};
RN=function(a,b,c){JN.call(this,a,b,c);this.o=null};
SN=function(a,b){var c=b.renderer,d=c.iconImage&&c.iconImage.thumbnail&&c.iconImage.thumbnail.thumbnails||null;d&&d.length&&g.sb(g.Gb(d[0].url))&&(d[0].url=a.profilePicture);(d=c.bannerImage&&c.bannerImage.thumbnail&&c.bannerImage.thumbnail.thumbnails||null)&&d.length&&g.sb(g.Gb(d[0].url))&&(d[0].url=a.channelBanner);c=c.headline;null!=c&&g.sb(g.Gb(c.text))&&(c.text=a.author)};
TN=function(a,b){cM.call(this,"ad-action-interstitial",a,b)};
UN=function(a,b,c){JN.call(this,a,b,c,!0);this.B=b;this.o=b.l.durationMilliseconds||0;this.xa=null};
VN=function(a,b){b.SLOT_POS="1";cM.call(this,"backfill-mpu-companion",a,b)};
WN=function(a,b,c){JN.call(this,a,b,c)};
XN=function(a,b,c){JN.call(this,a,b,c)};
YN=function(a,b){cM.call(this,"invideo-overlay",a,b)};
ZN=function(a,b,c){JN.call(this,a,b,c);this.o=b};
$N=function(a){cM.call(this,"persisting-overlay",a)};
aO=function(a,b,c){JN.call(this,a,b,c);this.o=b};
bO=function(a,b){cM.call(this,"pla-shelf",a,b)};
cO=function(a,b,c){JN.call(this,a,b,c);this.o=b};
dO=function(a,b){cM.call(this,"shopping-companion",a,b)};
eO=function(a,b,c){JN.call(this,a,b,c)};
fO=function(a){cM.call(this,"survey",a);this.g=!1};
gO=function(a,b,c){JN.call(this,a,b,c,!0);this.B=b;this.o=null};
hO=function(a,b){cM.call(this,"survey-interstitial",a,b)};
iO=function(a,b,c){JN.call(this,a,b,c,!0);this.o=b};
jO=function(a){cM.call(this,"ad-text-interstitial",a)};
kO=function(a,b){JN.call(this,a,b,{});this.B=b;this.o=b.l.durationMilliseconds||0;this.xa=null};
lO=function(a,b){a.xa&&a.xa.stop();NN(a);a.O(b)};
mO=function(){cM.call(this,"ad-attribution-bar");this.adPodPositionInfoString=null;this.adPodPosition=0;this.adPodLength=1;this.adBreakLengthSeconds=0;this.adBadgeText=null;this.adBreakRemainingLengthSeconds=0;this.adVideoId=null};
nO=function(a){a=void 0===a?null:a;cM.call(this,"ad-channel-thumbnail");this.channelIconThumbnailUrl=a};
oO=function(a){cM.call(this,"skip-button",a)};
pO=function(a){a=void 0===a?null:a;cM.call(this,"ad-title");this.videoTitle=a};
qO=function(a){a=void 0===a?null:a;cM.call(this,"advertiser-name");this.channelName=a};
rO=function(a){cM.call(this,"player-overlay",a)};
sO=function(a){cM.call(this,"visit-advertiser",a);var b={};var c=a.text;a=a.navigationEndpoint;null!=c&&null!=c.runs&&null!=a?(b.runs=[g.gc(c.runs[0])],b.runs[0].navigationEndpoint=a):(b={text:g.S("YTP_VISIT_ADVERTISERS_SITE")},a&&(b.navigationEndpoint=a),b={runs:[b]});this.visitAdvertiserLabel=b};
tO=function(a,b,c,d){JN.call(this,a,b,c,!0);this.o=b;this.C=d;this.B=new g.P(this.dz,15E3,this);g.K(this,this.B)};
Saa=function(a){var b=new mO;b.adBadgeText=g.S("YTP_AD_BADGE");var c=a.o.I;1<c.l&&(b.adPodPositionInfoString=g.S("YTP_AD_POD_POSITION",{AD_INDEX:String(c.g+1),ADS_COUNT:String(c.l)}));b.adBreakLengthSeconds=c.adBreakLengthSeconds;b.adBreakRemainingLengthSeconds=c.adBreakRemainingLengthSeconds;b.adPodPosition=c.g+1;b.adPodLength=c.l;if(a=a.o.K)b.adVideoId=a;return b};
wO=function(a){var b=a.o.A,c=b.playerOverlay&&b.playerOverlay.instreamAdPlayerOverlayRenderer;c||(c={});var d=g.U(a.g);if((g.hB(d)||g.gB(d))&&!c.skipOrPreviewRenderer){var e=1E3*a.g.getDuration(2),f=0<e&&7050>=e;(0,window.isFinite)(e)&&33E3<e&&!a.o.isSkippable()&&!g.hB(d)&&g.Q(Error("Instream ad is skippable by length, but was was marked "+("nonskippable. adLengthMs:"+e+", IVAR: "+JSON.stringify(b))),"ERROR");d={};a.o.isSkippable()&&!f?d.skipAdRenderer=uO(a):d.adPreviewRenderer=vO(a,!1,f);c.skipOrPreviewRenderer=
d}c.skipOrPreviewRenderer&&g.cc(c.skipOrPreviewRenderer)&&g.Q(Error("IAPOR.skipOrPreview was filled, but empty. IVAR: "+JSON.stringify(b)),"ERROR");return c};
xO=function(a,b){a.B.stop();NN(a);zN(a.g,!0);a.O(b)};
uO=function(a){var b={preskipRenderer:{}};b.preskipRenderer.adPreviewRenderer=vO(a,!0,!1);b.skippableRenderer={};a=b.skippableRenderer;var c={message:{}};c.message.text=g.S("YTP_SKIP_AD");a.skipButtonRenderer=c;return b};
vO=function(a,b,c){var d=a.g.Y(1),e={};if(b||c){var f={},k={};c=c?g.S("YTP_AD_PREVIEW_NONSKIPPABLE_COUNTDOWN",{NEW_LINE:"\n",TIME_REMAINING:"{TIME_REMAINING}"}):g.S("YTP_CAN_SKIP_AD_SOON",{NEW_LINE:"\n",TIME_REMAINING:"{TIME_REMAINING}"});k.text=c;k.isTemplated=!0;f.g=5;f.templatedAdText=k;e.templatedCountdown=f}else f={},k=g.S("YTP_AD_PREVIEW_NONSKIPPABLE",{NEW_LINE:"\n"}),f.text=k,f.isTemplated=!1,e.staticPreview=f;b&&(e.durationMilliseconds=5E3);e.thumbnail={};b=e.thumbnail;f={};f.url=vB(g.U(a.g),
d.videoId,"mqdefault.jpg");f.width=320;f.height=180;b.thumbnail={thumbnails:[f]};return e};
yO=function(a,b,c,d){var e=Object.assign({},{});e.FINAL=kN(of("1"));e.SLOT_POS=kN(of("0"));c=pN(c,oN(e));return b instanceof pM?(e={},e.SLOT_POS=kN(of(b.I.g.toString())),c=pN(c,oN(e)),new tO(a,b,c,d)):b instanceof RM?new ZN(a,b,c):b instanceof uM?new XN(a,b,c):b instanceof dN?new eO(a,b,c):b instanceof ZM?new gO(a,b,c):b instanceof TM?new cO(a,b,c):b instanceof rM?new WN(a,b,c):b instanceof VM?new UN(a,b,c):b instanceof sM?new aO(a,b,c):b instanceof qM?new RN(a,b,c):b instanceof aN?new kO(a,b):b instanceof
$M?new iO(a,b,c):null};
zO=function(){this.L=g.cr("INNERTUBE_CLIENT_NAME",void 0);this.P=g.cr("INNERTUBE_CLIENT_VERSION",void 0);this.H="AD_PLACEMENT_KIND_UNKNOWN";this.o=this.F=this.B=this.A=null;this.g="unknown_type";this.I=!0;this.K=this.l=this.C=!1};
AO=function(a){a.A=null;a.B=null;a.F=null;a.o=null;a.H="AD_PLACEMENT_KIND_UNKNOWN";a.g="unknown_type";a.C=!1;a.l=!1};
Taa=function(a){a.l=!1;a.K?SC("ad_to_video",["pbresume"]):SC("ad_to_ad",["apbs"])};
Uaa=function(a){a.C&&!a.l&&(a.I=!1,a.l=!0,"ad_to_video"!=a.g&&g.FC("apbs",void 0,a.g))};
CO=function(a,b,c,d,e){g.R.call(this);this.B=a;this.C=b;this.g=d;this.L=pN(e,oN(mN(d)));this.P=d.g.length;this.K=-1;this.l=[];this.H=null;this.F=c;this.I=!1;this.U=(a=b.Y(1))&&a.oa||!1;this.R=0;this.V=!1;BO(this.B,this.g.Kc(),this)};
Vaa=function(a){a.l.forEach(function(a){return a.Xd()})};
DO=function(a){(a=a.baseUrl)&&g.Wr(a,void 0,Zo.yk(a))};
Waa=function(a){if(a.V)return function(a){a.yb(window.Infinity,!0)};
var b=Math.floor((0,g.H)()/1E3)-a.R;return function(a){a.yb(a.getCurrentTime()+b,!0)}};
EO=function(a,b){a.l.forEach(function(a){if(a.F){var c=a.l;a=a.getDuration();0<a&&(GN(c,b),HN(c,b,a))}})};
Xaa=function(a){a.l.forEach(function(a){var b=a.g.isMuted();CN(a.l,b?"mute":"unmute")})};
Yaa=function(a,b){a.l.forEach(function(a){CN(a.l,b?"fullscreen":"end_fullscreen")})};
FO=function(a,b,c,d){g.R.call(this);this.o=a;this.A=b;this.l=c;this.g=null;this.B=pN(d,oN(mN(c)));Zaa(this)};
aba=function(a,b){var c=$aa(b);c.Mr||(c.isEmpty||GO(a.o,c.Tp),$L(a.g)||(c=[a.g,a.g.A].filter(function(a){return null!=a}),HO(a.o,c)))};
$aa=function(a){var b=null,c={isEmpty:!0,Mr:!1,Tp:[]};try{b=JSON.parse(a.response)}catch(d){return c}if(!b)return c;if((a=b)&&a.adThrottled)return c.Mr=!0,c;a=a.playerAds;if(!a||!a.length)return c;a=a.map(function(a){return a.adPlacementRenderer}).filter(function(a){return a&&null!=a.renderer});
if(g.Ta(a))return c;c.Tp=a;c.isEmpty=!1;return c};
Zaa=function(a){[a.l.X,a.l.Kc()].filter(function(a){return null!=a}).forEach(function(b){BO(a.o,b,a)})};
IO=function(a,b,c,d,e){JN.call(this,b,d.l[0],e);this.P=c;this.K=d;this.B=d.l[0];this.L=a;this.o=this.C=null;a=this.K.Kc();a.visible=!1;BO(this.L,a,this)};
JO=function(a,b,c,d,e){CO.call(this,a,b,c,d,e);this.A=0<d.A.length?d.A[0]:null;this.o=null;this.A&&this.A.l&&(this.o=yO(b,this.A.l,e,a),g.K(this,this.o))};
LO=function(a){KO=a&&a.data};
NO=function(a){MO=a&&a.data};
OO=function(){KO=null};
PO=function(a,b){g.R.call(this);var c=this;this.g=a;this.bo=null;this.U=b;this.P=new lM(a,xN(a)?null:new eM);this.o=null;this.K=rf(function(){c.g.ga()||g.LL(c.g,"ad")});
this.l=null;this.B=new window.Map;this.A=new window.Set;this.H=[];this.F=this.I=null;this.R=new zaa(a);this.da=new g.Zs(this);g.K(this,this.da);this.C=new g.Zs(this);g.K(this,this.C);this.L=!1};
bba=function(a){return a&&a.adPlacements?a.adPlacements.map(function(a){return a.adPlacementRenderer}).filter(function(a){return a&&null!=a.renderer}):[]};
cba=function(a,b){return b.filter(function(b){return"AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"==(b.config&&b.config.adPlacementConfig&&b.config.adPlacementConfig.kind||null)?(a.I=b,!1):!0})};
dba=function(a,b){return b.every(function(b){b=a.B.get(b);return null==b?(g.Q(Error("AdCueRange without a corresponding AdPlacement.")),!0):b instanceof FO?!1:b instanceof CO?!LM(b.g):!0})};
QO=function(a){var b=eba(a);0<b.length?(dba(a,b)&&a.K(),g.Cf(function(){if(!a.ga())for(var c=g.q(b),d=c.next();!d.done;d=c.next())a.co(d.value)})):a.K()};
eba=function(a){for(var b=[],c=g.q(a.A),d=c.next();!d.done;d=c.next())d=d.value,$L(d)&&b.push(d);c=g.q(b);for(d=c.next();!d.done;d=c.next())a.A["delete"](d.value);return b};
GO=function(a,b,c){c=void 0===c?null:c;c=void 0===c?null:c;var d=a.R;var e=1E3*a.g.getDuration(1);var f=a.g.Y(1).oa||!1;e=new YL(e,1E3*a.g.getCurrentTime()||0,f);f=a.H.length;var k=c;f=void 0===f?0:f;k=void 0===k?null:k;c=[];var l=0;if(k){k=g.q(k);for(var m=k.next();!m.done;m=k.next()){m=m.value;var n=e,p=new YL(n.o,n.A,n.livestream),u=n.l;u&&(p.l=new ew(u.Pd,u.durationSecs,u.context));n.g&&(p.g=n.g);n=p;n.l=m;c.push(iN(b[0],f+l,d,n));l++}}else for(b=g.q(b),k=b.next();!k.done;k=b.next())c.push(iN(k.value,
f+l,d,e)),l++;a.H=a.H.concat(c);if(0!=c.length)for(d=oN(lN(a.g)),b=c.length-1;0<=b;b--)e=a,f=a.g,l=a.U,k=a.P,m=c[b],0<m.A.length?new JO(e,f,new zO,m,d):0<m.l.length?new IO(e,f,k,m,d):""==m.L?new CO(e,f,new zO,m,d):new FO(e,l,m,d)};
TO=function(a,b){if(b.wk())g.De(a.o),a.o=b;else{if((0<b.g.g.length||0<b.g.B.length)&&a.o&&a.o.Kc().start<b.Kc().start){var c=a.P;if(c.g)c.g&&waa(c.g);else{var d=c.l.Y(1);c.l.la("updatekevlarcompanion",{contentVideoId:d&&d.videoId})}g.De(a.o);a.o=null}b.Kr()&&(a.l&&RO(a),a.l=b,LM(b.g)&&(a.C.M(a.g,"presentingplayerstatechange",a.ZC),a.C.M(a.g,"internalAbandon",a.VC),a.C.M(a.g,"aduxclicked",a.eE),a.C.M(a.g,"progresssync",a.aD),a.C.M(a.g,"onVolumeChange",a.bD),a.C.M(a.g,"fullscreentoggled",a.YC),g.Gp(a.g.getRootNode(),
["ad-showing","ad-interrupting"]),SO(a.g.app,2)))}};
RO=function(a,b){var c=!!a.l&&LM(a.l.g)&&vN(a.g);a.l&&UO(a,a.l);a.l=null;if(c&&(g.at(a.C),g.Hp(a.g.getRootNode(),["ad-showing","ad-interrupting"]),c=g.U(a.g),c.experiments.g("call_release_video_in_bulleit")&&g.FK(g.V(a.g.app,2)),!c.experiments.g("skip_restore_on_abandon_in_bulleit")||!a.L)){c=a.g;if(2==rL(c.app)){c=c.app;var d=g.V(c,2);d&&(d!=c.o?VO(c,c.o):WO(c))}a.g.Oc();b&&b(a.g)}a.K()};
BO=function(a,b,c){if(b instanceof ZL){if("AD_PLACEMENT_KIND_MILLISECONDS"==b.o&&g.T(g.tL(a.g),64)){var d=1E3*a.g.getCurrentTime()||0;d!=b.start&&b.contains(d)&&(b.g=!0)}a.B.has(b)?g.Q(Error(b.toString()+" has already been seen")):(a.A.add(b),a.B.set(b,c),"AD_PLACEMENT_KIND_START"!=b.o&&g.HL(a.g,[b],1))}else g.Q(Error("Should use AdCueRange instead of CueRange"))};
HO=function(a,b){g.Cf(function(){return g.JL(a.g,b,1)});
for(var c=g.q(b),d=c.next();!d.done;d=c.next())d=d.value,a.A["delete"](d),a.B["delete"](d)};
UO=function(a,b){for(var c=a.B,d=g.q(c),e=d.next();!e.done;e=d.next()){e=g.q(e.value);var f=e.next().value;if(e.next().value==b){c["delete"](f);break}}g.De(b)};
g.XO=function(a){g.W.call(this,a);this.R=new g.R;g.K(this,this.R)};
YO=function(a){g.J.call(this);this.F=a};
ZO=function(a,b){if(!a.F)throw Error("This does not support the append operation");a.Oh(b.ha())};
$O=function(a){YO.call(this,!0);this.g=a};
aP=function(a,b){function c(a){return{toString:a}}
var d={};d.CPN=c(function(){var b=a.Y();return b&&b.clientPlaybackNonce||null});
d.AD_CPN=c(function(){return b.bo});
d.AD_MT=c(function(){return Math.round(Math.max(0,1E3*a.getCurrentTime(2))).toString()});
d.MT=c(function(){return Math.round(Math.max(0,1E3*a.getCurrentTime(1))).toString()});
d.P_H=c(function(){return a.Fg().height.toString()});
d.PV_H=d.P_H;d.P_W=c(function(){return a.Fg().width.toString()});
d.PV_W=d.P_W;d.CONN="0";d.WT=c(function(){return Date.now().toString()});
d.LACT=c(function(){return g.Wt().toString()});
d.VIS=c(function(){return a.df().toString()});
d.VOL=c(function(){return a.getVolume().toString()});
return d};
X=function(a,b,c,d,e){e=void 0===e?null:e;g.XO.call(this,c);this.g=a;this.l=b;this.macros={};this.componentType=d;this.H=null;this.X=e;this.K=null;this.fa=new $O(this.element);g.K(this,this.fa);this.M(this.element,"click",this.onClick)};
bP=function(a,b){a=void 0===a?null:a;b=void 0===b?null:b;if(null==a)return g.Q(Error("Got null or undefined adText object"),"WARNING"),"";var c=g.Gb(a.text);if(!a.isTemplated)return c;if(null==b)return g.Q(Error("Missing required parameters for a templated message"),"WARNING"),c;for(var d=g.q(Object.entries(b)),e=d.next();!e.done;e=d.next()){var f=g.q(e.value);e=f.next().value;f=f.next().value;c=c.replace("{"+e+"}",f)}return c};
eP=function(a,b,c){var d=a.g;g.U(d).F&&g.cP(d.app.L,b,a);a=a.g;g.U(a).F&&g.dP(a.app.L,b,c)};
fP=function(a){return a&&a.thumbnails&&!g.Ta(a.thumbnails||null)&&a.thumbnails[0].url?g.Gb(a.thumbnails[0].url):""};
gP=function(a,b,c){X.call(this,a,b,{D:"img",J:"ytp-ad-image"},"ad-image",void 0===c?null:c);this.hide()};
hP=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-text"},"ad-text",void 0===c?null:c);this.o=null;this.hide()};
g.iP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-cast-desktop-on"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",
fill:"#fff"}}]}};
jP=function(){return{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",N:{d:"m 14.8,21.9 -4.2,-4.2 -1.4,1.4 5.6,5.6 12,-12 -1.4,-1.4 -10.6,10.6 z",fill:"#fff"}}]}};
g.kP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-chevron-back"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},G:[{D:"path",N:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}};
g.lP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-chevron-forward"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},G:[{D:"path",N:{d:"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z",fill:"#fff"}}]}};
mP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-clip-clear"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},G:[{D:"path",N:{d:"M14,14 L14,0 L0,0 L0,14 L14,14 Z"}},{D:"path",N:{d:"M7.15,8.35 L9.25,10.45 L10.65,9.05 L8.55,6.95 L10.7,4.8 L9.3,3.4 L7.15,5.55 L5,3.4 L3.6,4.8 L5.75,6.95 L3.65,9.05 L5.05,10.45 L7.15,8.35 Z",fill:"#fff"}}]}};
nP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-clip-end"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z",fill:"#eaeaea"}}]}};
oP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-clip-start"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z",fill:"#eaeaea"}}]}};
g.pP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-close"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#fff"}}]}};
qP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-closed-captioning"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z",
fill:"#fff"}}]}};
rP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-forward-five-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.7,.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.5,.3 C 18.3,22 18.1,22 17.9,22 17.7,22 17.5,22 17.4,21.9 17.3,21.8 17.1,21.8 16.9,21.7 16.7,21.6 16.7,21.5 16.6,21.3 16.5,21.1 16.5,21 16.5,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.4,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.6 z"}}]}};
sP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-link"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",N:{d:"M5.85 18.0c0.0-2.56 2.08-4.65 4.65-4.65h6.0V10.5H10.5c-4.14 .0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h6.0v-2.85H10.5c-2.56 .0-4.65-2.08-4.65-4.65zM12.0 19.5h12.0v-3.0H12.0v3.0zm13.5-9.0h-6.0v2.85h6.0c2.56 .0 4.65 2.08 4.65 4.65s-2.08 4.65-4.65 4.65h-6.0V25.5h6.0c4.14 .0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z",fill:"#fff"}}]}};
tP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-next"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"}}]}};
g.uP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-notifications-active"]}:{D:"svg",N:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},G:[{D:"path",N:{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}};
vP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-pause"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}};
wP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-play"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}};
xP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-prev"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"}}]}};
yP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-replay"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"}}]}};
zP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-rewind-five-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z m -1.3,8.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.4,.3 C 18.5,22 18.2,22 18,22 17.8,22 17.6,22 17.5,21.9 17.4,21.8 17.2,21.8 17,21.7 16.8,21.6 16.8,21.5 16.7,21.3 16.6,21.1 16.6,21 16.6,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.5,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.7 z"}}]}};
g.AP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-settings"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z",
fill:"#fff"}}]}};
BP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-stop"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 12,25 19,25 19,11 12,11 z M 19,25 26,25 26,11 19,11 z"}}]}};
CP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-volume-high"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff"}}]}};
DP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-volume-low"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",fill:"#fff"}}]}};
EP=function(){return g.Y?{D:"div",W:["ytp-icon","ytp-icon-volume-muted"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}};
FP=function(a){if(!a)return null;switch(a.iconType){case "OPEN_IN_NEW":return{D:"svg",N:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},G:[{D:"path",N:{d:"M0 0h48v48H0z",fill:"none"}},{D:"path",N:{d:"M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"}}]};case "CHECK_BOX":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-check-box"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},
G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"#d4d4d4"}}]};case "CHECK_BOX_OUTLINE_BLANK":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-check-box-outline-blank"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",fill:"#d4d4d4"}},
{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}}]};case "CLOSE":return g.pP();case "INFO_OUTLINE":return{D:"svg",N:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},G:[{D:"path",N:{d:"M0 0h48v48H0z",fill:"none"}},{D:"path",N:{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"}}]};case "REMOVE_CIRCLE":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-remove-circle"]}:
{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z",fill:"#757575"}}]};case "SKIP_NEXT":return tP();case "LIKE":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-like"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z",
fill:"#fff"}}]};case "DISLIKE":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-dislike"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",fill:"#fff"}}]};default:return g.Q(Error("Unexpected icon "+a),"WARNING"),null}};
GP=function(a,b,c,d,e){c=void 0===c?[]:c;e=void 0===e?!1:e;X.call(this,a,b,{D:"button",W:["ytp-ad-button"].concat(c)},void 0===d?"button":d);this.B=this.A=this.C=null;this.F=e;this.hide()};
HP=function(a){var b=null;null!=a.B&&(b=[a.B.serviceEndpoint,a.B.navigationEndpoint].filter(function(a){return null!=a}));
return b||[]};
IP=function(a,b){X.call(this,a,b,{D:"div",J:"iv-website-companion",G:[{D:"div",J:"iv-website-companion-block",G:[{D:"div",J:"iv-website-companion-icon"},{D:"div",J:"iv-website-companion-text",G:[{D:"div",J:"iv-website-companion-desc",G:[{D:"span",W:["yt-badge","yt-badge-ad"],G:["{{adBadgeText}}"]}]}]}]}]},"action-companion");this.V=this.Z["iv-website-companion"];this.B=new gP(this.g,this.l,"iv-website-companion-banner");g.K(this,this.B);this.B.ca(this.V,0);this.L=new gP(this.g,this.l);g.K(this,this.B);
this.L.ca(this.Z["iv-website-companion-icon"]);this.F=new hP(this.g,this.l,"iv-website-companion-header");g.K(this,this.F);this.F.ca(this.Z["iv-website-companion-text"],0);this.C=new hP(this.g,this.l,"iv-website-companion-domain");g.K(this,this.C);this.C.ca(this.Z["iv-website-companion-desc"]);this.A=new GP(this.g,this.l,["iv-website-companion-action","yt-uix-button-size-default","yt-uix-button-primary"]);g.K(this,this.A);this.A.ca(this.Z["iv-website-companion-block"]);this.I=null;this.P=[];this.da=
new g.Zs;g.K(this,this.da);this.ba=new eM;this.o=null;this.hide()};
JP=function(){g.J.call(this);this.A=this.l=this.B=this.g=this.C=this.o=null};
fba=function(a,b){return KP(a).then(function(a){a.promotionShelfShow(b)})};
gba=function(a){KP(a).then(function(a){a.promotionShelfClear()})};
iba=function(a){window.google_ad_output="html";window.google_ad_height="250";window.google_ad_format="300x250_as";window.google_container_id="google_companion_ad_div";return KP(a).then(function(b){return hba(a,b)}).then(function(b){b();
return LP(a)})};
jba=function(a){return KP(a).then(function(b){b.loadAfc();return LP(a)})};
MP=function(){return g.z("yt.www.watch.ads")};
NP=function(){return g.z("window.google_show_companion_ad")};
KP=function(a){if(a.ga())throw Error("Object is disposed");if(!a.o){var b=MP();a.o=b?Mf(b):(new g.If(function(b){a.C=g.tt("watchAdsInit",b)})).then(MP)}return a.o};
hba=function(a,b){if(a.ga())throw Error("Object is disposed");if(!a.g){var c=NP();kba(c,b.getGlobals)?a.g=Mf(c):a.g=(new g.If(function(b){a.B=g.tt("showCompanionAdLoaded",b)})).then(NP)}return a.g};
LP=function(a){if(a.ga())throw Error("Object is disposed");a.l||(OP()?Mf():a.l=new g.If(function(b,c){a.A=new g.P(function(){OP()?b():c()},2E3,a);
a.A.start()}));
return a.l};
kba=function(a,b){if(!g.Aa(a)||!g.Aa(b))return!1;var c=b();return!(!c||!c.length)};
OP=function(){var a=g.gd("google_companion_ad_div");return a?(a=g.Hd(a))&&"IFRAME"==a.tagName?-1!=a.src.indexOf("youtube.com%2Fad_frame"):!1:!1};
PP=function(a,b){X.call(this,a,b,{D:"div"},"backfill-mpu-companion");this.A=new JP;g.K(this,this.A);this.o=null};
QP=function(a,b,c,d,e){X.call(this,a,b,c,d);this.o=e;g.K(this,this.o);this.V=this.C=-1};
RP=function(a){a.o&&-1===a.C&&(a.C=a.o.subscribe("p",a.Ri,a),a.V=a.o.subscribe("o",a.Zk,a),a.Ri())};
SP=function(a){null!=a.o&&-1!==a.C&&(a.o.wc(a.C),a.o.wc(a.V),a.V=-1,a.C=-1)};
TP=function(a,b,c){QP.call(this,a,b,{D:"div",J:"ytp-ad-timed-pie-countdown-container",G:[{D:"svg",J:"ytp-ad-timed-pie-countdown",N:{viewBox:"0 0 20 20"},G:[{D:"circle",J:"ytp-ad-timed-pie-countdown-inner",N:{r:"5",cx:"10",cy:"10"}},{D:"circle",J:"ytp-ad-timed-pie-countdown-outer",N:{r:"10",cx:"10",cy:"10"}}]}]},"timed-pie-countdown",c);this.B=this.Z["ytp-ad-timed-pie-countdown-inner"];this.A=Math.ceil(10*3.14);this.hide()};
UP=function(a,b){g.R.call(this);this.A=b;this.B=new g.Zs(this);g.K(this,this.B);this.l=a;this.xa=new g.eg(100);g.K(this,this.xa);this.B.M(this.xa,"tick",this.C);this.o={seekableStart:0,seekableEnd:a/1E3,current:0};this.F=(0,g.H)();this.xa.start()};
VP=function(a,b){X.call(this,a,b,{D:"div",J:"ytp-ad-action-interstitial",G:[{D:"div",J:"ytp-ad-action-interstitial-background"},{D:"div",J:"ytp-ad-action-interstitial-slot",G:[{D:"div",J:"ytp-ad-action-interstitial-card"}]}]},"ad-action-interstitial");this.A=this.Z["ytp-ad-action-interstitial-card"];this.C=new gP(this.g,this.l,"ytp-ad-action-interstitial-image");g.K(this,this.C);this.C.ca(this.A);this.I=new hP(this.g,this.l,"ytp-ad-action-interstitial-headline");g.K(this,this.I);this.I.ca(this.A);
this.F=new hP(this.g,this.l,"ytp-ad-action-interstitial-description");g.K(this,this.F);this.F.ca(this.A);this.P=this.Z["ytp-ad-action-interstitial-background"];this.B=this.o=null;this.da=new g.Zs;g.K(this,this.da);this.L=null;this.hide()};
WP=function(a,b){X.call(this,a,b,{D:"div",J:"ytp-ad-text-interstitial"},"ad-text-interstitial");this.A=this.Z["ytp-ad-text-interstitial"];this.o=new hP(this.g,this.l,"ytp-ad-text-interstitial-message");g.K(this,this.o);this.o.ca(this.A);this.hide()};
YP=function(a,b){X.call(this,a,b,{D:"div",J:"ytp-ad-overlay-slot",G:[{D:"div",J:"ytp-ad-overlay-container"}]},"invideo-overlay");this.I=[];this.o=this.L=null;var c=this.Z["ytp-ad-overlay-container"];this.F=new XP(c,"ytp-overlay-ad-dimmed");g.K(this,this.F);this.M(c,"mouseover",this.F.bG,this.F);this.M(c,"mouseout",this.F.YF,this.F);var d=new g.XO({D:"div",J:"ytp-ad-text-overlay",G:[{D:"div",J:"ytp-ad-close-container",G:[{D:"button",J:"ytp-ad-close-button",G:[g.pP()]}]},{D:"div",J:"ytp-ad-overlay-title",
G:["{{title}}"]},{D:"div",J:"ytp-ad-overlay-desc",G:["{{description}}"]},{D:"div",J:"ytp-ad-overlay-link",G:["{{displayUrl}}"]},{D:"div",J:"ytp-ad-overlay-attribution",G:["{{attribution}}"]}]});this.M(d.Z["ytp-ad-overlay-title"],"click",g.B(this.Li,d.element));this.M(d.Z["ytp-ad-overlay-link"],"click",g.B(this.Li,d.element));this.M(d.Z["ytp-ad-close-container"],"click",this.ro);this.M(d.Z["ytp-ad-overlay-attribution"],"click",this.yo);d.hide();this.C=d;g.K(this,this.C);this.C.ca(c);d=new g.XO({D:"div",
W:["ytp-ad-text-overlay","ytp-ad-enhanced-overlay"],G:[{D:"div",J:"ytp-ad-close-container",G:[{D:"button",J:"ytp-ad-close-button",G:[g.pP()]}]},{D:"div",J:"ytp-ad-overlay-text-image",G:[{D:"img",N:{src:"{{imageUrl}}"}}]},{D:"div",J:"ytp-ad-overlay-title",G:["{{title}}"]},{D:"div",J:"ytp-ad-overlay-desc",G:["{{description}}"]},{D:"div",J:"ytp-ad-overlay-link",G:["{{displayUrl}}"]},{D:"div",J:"ytp-ad-overlay-attribution",G:["{{attribution}}"]}]});this.M(d.Z["ytp-ad-overlay-title"],"click",g.B(this.Li,
d.element));this.M(d.Z["ytp-ad-overlay-link"],"click",g.B(this.Li,d.element));this.M(d.Z["ytp-ad-close-container"],"click",this.ro);this.M(d.Z["ytp-ad-overlay-attribution"],"click",this.yo);this.M(d.Z["ytp-ad-overlay-text-image"],"click",this.pH);d.hide();this.A=d;g.K(this,this.A);this.A.ca(c);d=new g.XO({D:"div",J:"ytp-ad-image-overlay",G:[{D:"div",J:"ytp-ad-close-container",G:[{D:"button",J:"ytp-ad-close-button",G:[g.pP()]}]},{D:"div",J:"ytp-ad-overlay-image",G:[{D:"img",N:{src:"{{imageUrl}}",width:"{{width}}",
height:"{{height}}"}}]},{D:"div",J:"ytp-ad-overlay-attribution",G:["{{attribution}}"]}]});this.M(d.Z["ytp-ad-overlay-image"],"click",g.B(this.Li,d.element));this.M(d.Z["ytp-ad-close-container"],"click",this.ro);this.M(d.Z["ytp-ad-overlay-attribution"],"click",this.yo);d.hide();this.B=d;g.K(this,this.B);this.B.ca(c);this.hide()};
ZP=function(a,b){g.Hh(b.Z["ytp-ad-overlay-attribution"],null!=a.o.attributionText);b.updateValue("attribution",bP(a.o.attributionText))};
$P=function(a,b){var c=a.g.getRootNode();g.O(c,"ytp-ad-overlay-open",b);g.O(c,"ytp-ad-overlay-closed",!b)};
XP=function(a,b){g.J.call(this);this.B=a;this.l=!1;this.A=b;this.C=!1;this.g=new g.P(this.Wp,45E3,this);g.K(this,this.g);this.o=new g.P(this.Wp,6E3,this);g.K(this,this.o)};
g.aQ=function(a,b,c,d){g.J.call(this);this.l=a;c||a.hide();this.B=null==d?b:d;this.g=this.A=null;this.o=new g.P(this.Al,0,this);g.K(this,this.o)};
bQ=function(a,b){var c=a.l.element;b?c.setAttribute("aria-hidden",!0):c.removeAttribute("aria-hidden")};
cQ=function(a,b,c){QP.call(this,a,b,{D:"div",J:"ytp-ad-preview-slot"},"ad-preview",c);this.ba=-1;this.B=new g.XO({D:"span",J:"ytp-ad-preview-container"});g.K(this,this.B);this.A=new hP(this.g,this.l,"ytp-ad-preview-text");g.K(this,this.A);this.A.ca(this.B.element);this.I=new g.XO({D:"span",J:"ytp-ad-preview-image"});g.K(this,this.I);this.F=new gP(this.g,this.l);g.K(this,this.F);this.F.ca(this.I.element);this.I.ca(this.B.element);this.B.ca(this.element);this.P=new g.aQ(this.B,400,!1,100);g.K(this,
this.P);this.L=0;this.hide()};
dQ=function(a){a.P.hide(function(){return a.hide()})};
eQ=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-skip-button-slot"},(void 0===c?0:c)?"persisting-skip-button":"skip-button");this.B=null;this.F=!1;this.A=new g.XO({D:"span",J:"ytp-ad-skip-button-container"});g.K(this,this.A);this.A.ca(this.element);this.o=this.C=null;this.I=new g.aQ(this.A,500,!1,100);g.K(this,this.I);this.hide()};
fQ=function(a,b,c,d){d=void 0===d?!1:d;QP.call(this,a,b,{D:"div",J:"ytp-ad-skip-ad-slot"},"skip-ad",c);this.F=!1;this.I=0;this.B=this.A=null;this.L=d;this.hide()};
gQ=function(a,b){if(!a.F)if(a.F=!0,a.A&&(b?dQ(a.A):a.A.hide()),b){var c=a.B;c.I.show();c.show()}else a.B.show()};
hQ=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-persisting-overlay",G:[{D:"div",J:"ytp-ad-persisting-overlay-skip"}]},"persisting-overlay");this.A=this.Z["ytp-ad-persisting-overlay-skip"];this.o=c;g.K(this,this.o);this.hide()};
g.iQ=function(a){var b=Math.abs(Math.floor(a)),c=Math.floor(b/86400),d=Math.floor(b%86400/3600),e=Math.floor(b%3600/60);b=Math.floor(b%60);var f="";0<c&&(f+=c+":",10>d&&(f+="0"));if(0<c||0<d)f+=d+":",10>e&&(f+="0");f+=e+":";10>b&&(f+="0");f+=b;return 0<=a?f:"-"+f};
g.jQ=function(a){return(!g.ua(a.button)||0==a.button)&&!a.shiftKey&&!a.altKey&&!a.metaKey&&!a.ctrlKey};
kQ=function(a,b,c){QP.call(this,a,b,{D:"span",J:"ytp-ad-duration-remaining"},"ad-duration-remaining",c);this.A=null;this.hide()};
lQ=function(a,b){X.call(this,a,b,{D:"div",J:"ytp-ad-feedback-dialog-background",G:[{D:"div",J:"ytp-ad-feedback-dialog-container",G:[{D:"div",J:"ytp-ad-feedback-dialog-form",G:[{D:"div",J:"ytp-ad-feedback-dialog-title",G:[{D:"span",G:["{{title}}"]}]},{D:"div",J:"ytp-ad-info-dialog-feedback-options"},{D:"div",J:"ytp-ad-feedback-dialog-confirm-container",G:[{D:"button",J:"ytp-ad-feedback-dialog-cancel-button",G:["{{cancelLabel}}"]},{D:"button",J:"ytp-ad-feedback-dialog-confirm-button",G:["{{confirmLabel}}"]}]}]}]}]},
"ad-info-dialog");this.B=[];this.o=null;this.C=this.Z["ytp-ad-feedback-dialog-cancel-button"];this.F=this.Z["ytp-ad-feedback-dialog-confirm-button"];this.I=this.Z["ytp-ad-info-dialog-feedback-options"];this.L=this.Z["ytp-ad-feedback-dialog-title"];this.A=null;this.hide()};
mQ=function(a,b){this.l=b;this.g=new g.XO({D:"label",J:"ytp-ad-feedback-dialog-reason-label",G:[{D:"input",J:"ytp-ad-feedback-dialog-reason-input",N:{type:"radio",name:"feedback-reason-group"}},{D:"span",J:"ytp-ad-feedback-dialog-reason-text",G:[g.iD(a)]}]});this.o=this.g.Z["ytp-ad-feedback-dialog-reason-input"]};
nQ=function(a,b,c,d){c=void 0===c?[]:c;d=void 0===d?"confirm-dialog":d;X.call(this,a,b,{D:"div",W:["ytp-ad-confirm-dialog-background"],G:[{D:"div",J:"ytp-ad-confirm-dialog-container",G:[{D:"div",W:["ytp-ad-confirm-dialog"].concat(c),G:[{D:"div",J:"ytp-ad-confirm-dialog-title",G:["{{title}}"]},{D:"div",J:"ytp-ad-confirm-dialog-messages"},{D:"div",J:"ytp-ad-confirm-dialog-confirm-container",G:[{D:"button",J:"ytp-ad-confirm-dialog-cancel-button",G:["{{cancelLabel}}"]},{D:"button",J:"ytp-ad-confirm-dialog-confirm-button",
G:["{{confirmLabel}}"]}]}]}]},{D:"button",W:["ytp-ad-confirm-dialog-close-overlay-button","ytp-ad-button","ytp-ad-button-link"],G:[{D:"span",J:"ytp-ad-button-icon",G:[g.pP()]}]}]},d);this.A=this.Z["ytp-ad-confirm-dialog-close-overlay-button"];this.B=this.Z["ytp-ad-confirm-dialog-cancel-button"];this.F=this.Z["ytp-ad-confirm-dialog-confirm-button"];this.C=this.Z["ytp-ad-confirm-dialog-messages"];this.da=new g.Zs;g.K(this,this.da);this.o=null;this.hide()};
lba=function(a,b){if(b.title){var c=g.iD(b.title);a.updateValue("title",c)}if(b.dialogMessages){c=g.q(b.dialogMessages);for(var d=c.next();!d.done;d=c.next())d=g.hD(d.value),a.C.appendChild(d)}b.cancelLabel&&(c=g.iD(b.cancelLabel),a.updateValue("cancelLabel",c),a.da.M(a.B,"click",function(b){return a.Bo(b)}));
b.confirmLabel&&(c=g.iD(b.confirmLabel),a.updateValue("confirmLabel",c),a.da.M(a.F,"click",function(b){return a.Do(b)}));
a.da.M(a.A,"click",function(b){return a.Co(b)})};
oQ=function(a,b){nQ.call(this,a,b,[],"ad-mute-confirm-dialog")};
pQ=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-info-dialog-background",G:[{D:"div",J:"ytp-ad-info-dialog-container",G:[{D:"div",J:"ytp-ad-info-dialog-form",G:[{D:"div",J:"ytp-ad-info-dialog-title",G:["{{title}}"]},{D:"div",J:"ytp-ad-info-dialog-ad-reasons"},{D:"div",J:"ytp-ad-info-dialog-mute-container"},{D:"div",J:"ytp-ad-info-dialog-confirm-container",G:[{D:"button",J:"ytp-ad-info-dialog-confirm-button",G:["{{confirmLabel}}"]}]}]}]}]},"ad-info-dialog");this.o=this.B=null;this.I=this.Z["ytp-ad-info-dialog-confirm-button"];
this.P=this.Z["ytp-ad-info-dialog-mute-container"];this.V=this.Z["ytp-ad-info-dialog-ad-reasons"];this.C=this.A=null;this.L=c;this.F=null;this.hide()};
qQ=function(a,b,c){GP.call(this,a,b,["ytp-ad-info-icon-button"],"ad-info-icon-button");this.o=c;g.K(this,this.o);this.hide()};
rQ=function(a,b,c){X.call(this,a,b,{D:"span",J:"ytp-ad-info-overlay"},"ad-info-overlay");this.o=this.B=this.A=null;this.C=c;this.hide()};
sQ=function(a,b,c,d){c=void 0===c?[]:c;d=void 0===d?"toggle-button":d;var e=bM("ytp-ad-toggle-button-input");X.call(this,a,b,{D:"div",W:["ytp-ad-toggle-button"].concat(c),G:[{D:"label",J:"ytp-ad-toggle-button-label",N:{"for":e},G:[{D:"span",J:"ytp-ad-toggle-button-icon",G:[{D:"span",J:"ytp-ad-toggle-button-untoggled-icon",G:["{{untoggledIconTemplateSpec}}"]},{D:"span",J:"ytp-ad-toggle-button-toggled-icon",G:["{{toggledIconTemplateSpec}}"]}]},{D:"input",J:"ytp-ad-toggle-button-input",N:{id:e,type:"checkbox"}},
{D:"span",J:"ytp-ad-toggle-button-text",G:["{{buttonText}}"]},{D:"span",J:"ytp-ad-toggle-button-tooltip",G:["{{tooltipText}}"]}]}]},d);this.B=this.Z["ytp-ad-toggle-button"];this.o=this.Z["ytp-ad-toggle-button-input"];this.P=this.Z["ytp-ad-toggle-button-icon"];this.F=this.Z["ytp-ad-toggle-button-untoggled-icon"];this.C=this.Z["ytp-ad-toggle-button-toggled-icon"];this.L=this.Z["ytp-ad-toggle-button-text"];this.A=null;this.I=!1;this.hide()};
tQ=function(a){a.I&&(a.isToggled()?(g.Hh(a.F,!1),g.Hh(a.C,!0)):(g.Hh(a.F,!0),g.Hh(a.C,!1)))};
mba=function(a,b){var c=null;a.A&&(c=(b?[a.A.defaultServiceEndpoint,a.A.defaultNavigationEndpoint]:[a.A.toggledServiceEndpoint]).filter(function(a){return null!=a}));
return c||[]};
uQ=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-instream-user-sentiment-container"},"instream-user-sentiment",void 0===c?null:c);this.o=null;this.B=new sQ(this.g,this.l,["ytp-ad-instream-user-sentiment-like-button"]);g.K(this,this.B);this.B.ca(this.element);this.A=new sQ(this.g,this.l,["ytp-ad-instream-user-sentiment-dislike-button"]);g.K(this,this.A);this.A.ca(this.element);this.C=new g.aQ(this,400,!1,500);g.K(this,this.C);this.hide()};
nba=function(a){a.C.hide(function(){return a.hide()})};
vQ=function(a,b){X.call(this,a,b,{D:"span",J:"ytp-ad-simple-ad-badge"},"simple-ad-badge");this.hide()};
wQ=function(a,b){GP.call(this,a,b,["ytp-ad-visit-advertiser-button"],"visit-advertiser")};
xQ=function(a,b){this.l=a;this.g=b};
yQ=function(a,b){return a.l+b*a.getLength()};
zQ=function(a,b,c){if(!a.getLength())return null!=c?c:window.Infinity;a=(b-a.l)/a.getLength();return g.Uc(a,0,1)};
AQ=function(a,b){g.XO.call(this,{D:"div",J:"ytp-ad-persistent-progress-bar-container",G:[{D:"div",J:"ytp-ad-persistent-progress-bar"}]});this.o=a;this.l=b;g.K(this,this.l);this.C=this.Z["ytp-ad-persistent-progress-bar"];this.g=-1;this.M(a,"presentingplayerstatechange",this.B);this.hide();this.B()};
BQ=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-player-overlay",G:[{D:"div",J:"ytp-ad-player-overlay-instream-info"},{D:"div",J:"ytp-ad-player-overlay-skip-or-preview"},{D:"div",J:"ytp-ad-player-overlay-progress-bar"},{D:"div",J:"ytp-ad-player-overlay-instream-user-sentiment"}]},"player-overlay");this.A=this.Z["ytp-ad-player-overlay-instream-info"];this.B=this.Z["ytp-ad-player-overlay-skip-or-preview"];this.F=this.Z["ytp-ad-player-overlay-progress-bar"];this.C=this.Z["ytp-ad-player-overlay-instream-user-sentiment"];
this.o=c;g.K(this,this.o);this.hide()};
CQ=function(a,b){YO.call(this,a);this.Zb=b};
oba=function(a,b,c){var d=a.ha();g.U(b).F&&g.cP(b.app.L,d,a);g.U(b).F&&g.dP(b.app.L,d,c)};
DQ=function(a){g.J.call(this);this.Nb=a;this.Zb=new g.R;g.K(this,this.Zb);this.g=new window.Set};
pba=function(a,b,c){if(a.g.has(b))throw Error("View already registered");a.g.add(b);g.Ce(b,function(){return a.g["delete"](b)});
c&&oba(b,a.Nb,c)};
EQ=function(a,b){for(var c=g.q(a.g),d=c.next();!d.done;d=c.next())a.Va(d.value,b)};
FQ=function(a,b){DQ.call(this,a);this.Ol=b;this.view=this.Pj();g.K(this,this.view);this.B=null;this.l=[];this.macros={};this.A=!1;this.hide()};
GQ=function(a){for(var b={},c=g.q(Object.entries(aP(a.Nb,a.Ol))),d=c.next();!d.done;d=c.next()){var e=g.q(d.value);d=e.next().value;e=e.next().value;b[d]=e.toString()}Object.assign(b,a.macros);return b};
HQ=function(){g.W.call(this,{D:"div",J:"ad-carousel",G:[{D:"div",J:"ad-carousel-clip",G:[{D:"ul",W:["ad-carousel-list","ad-carousel-list-animation"]}]}]});var a=this.Z["ad-carousel"];this.o=new g.W({D:"button",W:["ad-carousel-nav-button","ad-carousel-nav-prev"],N:{type:"button",onclick:"return false;"},G:[{D:"span",W:["ad-carousel-prev-icon","yt-uix-tooltip","yt-sprite"],N:{"data-tooltip-text":"Prev",title:"Prev"}}]});g.K(this,this.o);this.o.ea("click",this.C,this);this.o.ca(a);this.l=new g.W({D:"button",
W:["ad-carousel-nav-button","ad-carousel-nav-next"],N:{type:"button",onclick:"return false;"},G:[{D:"span",W:["ad-carousel-next-icon","yt-uix-tooltip","yt-sprite"],N:{"data-tooltip-text":"Next",title:"Next"}}]});g.K(this,this.l);this.l.ea("click",this.B,this);this.l.ca(a);this.A=this.Z["ad-carousel-list"];this.g=0;this.za=[]};
JQ=function(a){a.A&&g.lh(a.A,"left",(2>a.za.length?0:-a.g*a.za[1].element.clientWidth)+"px");g.EM(a.o,0<a.g);g.EM(a.l,a.g<a.za.length-IQ(a))};
IQ=function(a){return 2>a.za.length?1:Math.round((a.element.clientWidth-a.za[0].element.clientWidth)/a.za[1].element.clientWidth)+1};
KQ=function(a){CQ.call(this,!0,a);this.Uc=new HQ};
LQ=function(a){CQ.call(this,!1,a);this.l=new g.W({D:"div",J:"iv-btp-card",G:[{D:"a",J:"iv-btp-card-content",G:[{D:"div",G:["{{cards}}"]}]}]});g.K(this,this.l);a={D:"div",J:"iv-btp-card-merchant",G:[{D:"span",J:"iv-btp-card-merchant-text",G:["{{merchant}}"]}]};this.A=new g.xM({D:"div",W:["iv-btp-small-card","yt-uix-hovercard-target"],N:{"data-position":"bottomright","data-orientation":"vertical"},G:[{D:"div",W:["iv-btp-card-image","yt-uix-hovercard-anchor"],G:["{{image}}"]},{D:"div",J:"iv-btp-card-info",
G:[{D:"span",J:"iv-btp-card-action",G:["{{price}}"]},a]},{D:"div",W:["yt-uix-hovercard-content","iv-btp-hovercard"],G:["{{hovercard}}"]}]});g.K(this,this.A);this.g=new g.xM({D:"div",J:"iv-btp-large-card",G:[{D:"div",J:"iv-btp-card-image",G:[{D:"span"},{D:"div",J:"iv-btp-card-image-aligned",G:["{{image}}"]}]},{D:"div",J:"iv-btp-card-info",G:[{D:"div",J:"iv-btp-card-text-box",G:[{D:"div",J:"iv-btp-card-text-valign",G:[{D:"div",W:["yt-ui-ellipsis","yt-ui-ellipsis-4","iv-btp-card-headline"],G:["{{headline}}"]}]}]},
{D:"span",J:"iv-btp-card-action",G:["{{price}}"]},a,{D:"div",G:["{{review}}"]}]}]});g.K(this,this.g);this.o=new g.xM({D:"div",J:"iv-btp-hovercard-text-box",G:[{D:"a",G:[{D:"div",W:["yt-ui-ellipsis","yt-ui-ellipsis-4","iv-btp-hovercard-headline"],G:["{{headline}}"]}]},{D:"div",J:"iv-btp-hovercard-info",G:[{D:"span",J:"iv-btp-hovercard-action",G:["{{price}}"]},a]},{D:"div",G:["{{review}}"]}]});g.K(this,this.o);this.B=new g.xM({D:"div",J:"iv-btp-card-review",G:[{D:"div",J:"iv-btp-card-rating",G:[{D:"span",
J:"iv-btp-card-rating-bg",G:[{D:"span",J:"iv-btp-card-rating-fg"}]}]},{D:"span",J:"iv-btp-card-reviews",G:["{{reviewText}}"]}]});g.K(this,this.B);this.A.updateValue("hovercard",this.o);this.l.updateValue("cards",[this.A,this.g]);this.Qd()};
MQ=function(a,b,c){c=c?g.hD(c):null;a.updateValue(b,c)};
NQ=function(a,b){FQ.call(this,a,b);this.o=null;this.Qd()};
OQ=function(a){CQ.call(this,!0,a);this.g=new g.W({D:"div",J:"iv-btp-companion",G:[{D:"div",J:"iv-btp-block-clicks"},{D:"div",J:"iv-btp-attribution",G:[{D:"span",J:"iv-btp-title",G:["{{shopText}}"]},{D:"div",W:["yt-uix-hovercard","ad-info-container"],G:[{D:"span",J:"iv-btp-sponsored",G:[{D:"span",G:["{{sponsoredText}}"]},{D:"span",J:"yt-uix-hovercard-target",N:{"data-position":"topright","data-orientation":"horizontal"},G:[{D:"span",J:"ad-info-icon"}]}]},{D:"div",J:"yt-uix-hovercard-content",G:[{D:"span",
J:"ytp-ad_settings",G:["{{adInfoText}}"]}]}]}]},{D:"div",G:["{{content}}"]}]});g.K(this,this.g);this.o=this.g.Z["iv-btp-block-clicks"];this.l=new JP;g.K(this,this.l);this.A=fba(this.l,this.g.element)};
PQ=function(a,b,c){c=c?g.hD(c):null;a.g.updateValue(b,c)};
RQ=function(a,b){FQ.call(this,a,b);this.da=new g.Zs(this);g.K(this,this.da);this.Qd();this.Jg=[];this.Bd=null;this.Uc=new QQ.Il(this.Zb);g.K(this,this.Uc);ZO(this.view,this.Uc)};
qba=function(a){var b=a.re();g.Hh(b.o,!0);Qf([a.Bd,gg(1E3)]).then(function(){g.Hh(b.o,!1)})};
SQ=function(a){CQ.call(this,!0,a);var b=this;this.A=this.l=0;this.g=new g.W({D:"div",J:"iv-cards-slider",G:[{D:"div",J:"iv-cards-slider-body",G:[{D:"ul",J:"iv-cards-slider-list"}]},{D:"button",W:["iv-cards-slider-button","iv-cards-slider-prev"],N:{type:"button",onclick:";return false;"},G:[{D:"span",W:["iv-cards-slider-prev-icon","yt-sprite"]}]},{D:"button",W:["iv-cards-slider-button","iv-cards-slider-next"],N:{type:"button",onclick:";return false;"},G:[{D:"span",W:["iv-cards-slider-next-icon","yt-sprite"]}]}]});
this.C=g.jd("iv-cards-slider-list",this.g.element);if(this.o=g.jd("iv-cards-slider-prev",this.g.element))this.g.M(this.o,"click",function(){b.Zb.O("prevbuttonclick",b)}),g.Hh(this.o,!1);
(this.B=g.jd("iv-cards-slider-next",this.g.element))&&this.g.M(this.B,"click",function(){b.Zb.O("nextbuttonclick",b)});
g.K(this,this.g)};
TQ=function(a){a.C.style.left=125*-a.l+"px";a.o&&g.Hh(a.o,0<a.l);a.B&&g.Hh(a.B,a.l<a.A-3)};
UQ=function(a){CQ.call(this,!0,a);this.g=new g.W({D:"div",J:"iv-cards-companion",G:[{D:"div",J:"iv-cards-attribution",G:[{D:"span",W:["yt-badge","yt-badge-ad"],G:["{{adBadgeText}}"]},{D:"a",J:"ad-companion-clickthrough",N:{target:"_blank"},G:["{{shopText}}"]},{D:"div",W:["yt-uix-hovercard","ad-info-container"],G:[{D:"span",J:"yt-uix-hovercard-target",N:{"data-position":"topright","data-orientation":"horizontal",hidden:"true"},G:[{D:"span",J:"ad-info-icon"}]},{D:"div",J:"yt-uix-hovercard-content",
G:[{D:"p",G:["{{adSettingsText}}"]}]}]}]},{D:"div",G:["{{content}}"]}]});g.K(this,this.g);this.l=new eM;this.o=this.l.showCompanion(this.g.element,300,250);this.Qd()};
VQ=function(a){CQ.call(this,!1,a);this.g=new g.W({D:"li",J:"iv-cards-slider-item",G:[{D:"div",J:"iv-cards-slider-unit",G:[{D:"a",G:[{D:"div",J:"iv-cards-slider-image",G:["{{image}}"]},{D:"span",W:["yt-ui-ellipsis","yt-ui-ellipsis-4","iv-cards-slider-text"],G:["{{headline}}"]},{D:"span",J:"iv-cards-slider-action",G:["{{price}}"]}]}]}]});g.K(this,this.g);this.Qd()};
WQ=function(a,b){FQ.call(this,a,b);var c=this;this.o=null;this.Zb.subscribe("offerclick",function(){return c.onClick()})};
YQ=function(a,b){FQ.call(this,a,b);this.da=new g.Zs(this);g.K(this,this.da);this.pq=[];this.vo=null;this.Qd();this.Jg=[];this.Bd=null;this.ah=new XQ.Il(this.Zb);g.K(this,this.ah);ZO(this.view,this.ah)};
ZQ=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-survey-answer"},"survey-answer");this.C=c;this.A=this.Z["ytp-ad-survey-answer"];this.o=null;this.B="";this.hide()};
$Q=function(a,b){X.call(this,a,b,{D:"div",J:"ytp-ad-survey-none-of-the-above"},"survey-none-of-the-above");this.A=this.Z["ytp-ad-survey-none-of-the-above"];this.o=null;this.hide()};
aR=function(a,b){GP.call(this,a,b,["ytp-ad-survey-submit-button"],"survey-submit")};
bR=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-survey-player-overlay",G:[{D:"div",J:"ytp-ad-survey-player-overlay-instream-info"},{D:"div",J:"ytp-ad-survey-player-overlay-skip-preview-submit",G:[{D:"div",J:"ytp-ad-survey-player-overlay-skip-or-preview"},{D:"div",J:"ytp-ad-survey-player-overlay-submit"}]}]},"survey-player-overlay");this.F=this.Z["ytp-ad-survey-player-overlay-instream-info"];this.A={};this.I=this.Z["ytp-ad-survey-player-overlay-skip-or-preview"];this.o=null;this.L=this.Z["ytp-ad-survey-player-overlay-submit"];
this.B=null;this.C=c;g.K(this,this.C);this.hide()};
cR=function(a,b,c,d,e){X.call(this,a,b,{D:"div",J:"ytp-ad-survey-question",G:[{D:"div",W:["ytp-ad-survey-question-text","ytp-ad-survey-question-foreground"]},{D:"div",W:["ytp-ad-survey-answers","ytp-ad-survey-question-foreground"]},{D:"div",W:["ytp-ad-survey-question-player-overlay","ytp-ad-survey-question-foreground"]},{D:"div",J:"ytp-ad-survey-question-background"}]},c);this.L=d;this.question=this.Z["ytp-ad-survey-question"];this.sa=this.Z["ytp-ad-survey-question-background"];this.V=this.Z["ytp-ad-survey-question-text"];
this.answers=this.Z["ytp-ad-survey-answers"];this.ba=this.Z["ytp-ad-survey-question-player-overlay"];this.I=null;this.B=[];this.o=null;this.F=(0,g.H)();this.C=null;this.ma=e};
dR=function(a,b,c){var d=new ZQ(a.g,a.l,a.L);d.ca(a.answers);d.init(bM("survey-answer"),b,c);a.B.push(d)};
fR=function(a,b){a.C=b;var c=b.background;c&&c.instreamSurveyAdBackgroundImageRenderer&&(c=(c=c.instreamSurveyAdBackgroundImageRenderer.image)&&fP(c)||"",g.sb(c)?g.Q(Error("Found ThumbnailDetails without valid image URL"),"WARNING"):g.lh(a.sa,"backgroundImage","url("+c+")"));a.ma&&eR(a)};
eR=function(a){a.F=(0,g.H)();if(a.C){var b=a.C;if(null==b.durationMilliseconds||void 0==b.durationMilliseconds)g.Q(Error("durationMilliseconds unset for SurveyAdCommon"),"WARNING");else{a.o=new UP(b.durationMilliseconds,a.l);g.K(a,a.o);if(b.timeoutCommands){var c=b.timeoutCommands;a.o.subscribe("o",function(){return a.L.Jc(c,a.macros)})}if(a.o&&b.instreamAdPlayerOverlay&&b.instreamAdPlayerOverlay.instreamSurveyAdPlayerOverlayRenderer){var d=new bR(a.g,a.l,a.o);
d.ca(a.ba);d.init(bM("survey-player-overlay"),b.instreamAdPlayerOverlay.instreamSurveyAdPlayerOverlayRenderer,a.macros);a.I=d;g.K(a,d);a.lv()}a.o&&b.durationMilliseconds&&0<b.durationMilliseconds&&(b=new AQ(a.g,a.o),b.ca(a.ba),g.K(a,b))}}else g.Q(Error("addCommonComponents() needs to be called before starting countdown."))};
rba=function(a){function b(a){return{toString:function(){return a()}}}
a.macros.SURVEY_LOCAL_TIME_EPOCH_S=b(function(){var a=new Date;return Math.round(a.valueOf()/1E3)+-60*a.getTimezoneOffset()});
a.macros.SURVEY_ELAPSED_MS=b(function(){return(0,g.H)()-a.F})};
gR=function(a,b,c,d){cR.call(this,a,b,"survey-question-multi-select",c,d);this.A=null;this.ia=[];this.P=null;this.hide()};
sba=function(a,b,c){a.A=new $Q(a.g,a.l);a.A.ca(a.answers);a.A.init(bM("survey-none-of-the-above"),b,c)};
tba=function(a){a.B.forEach(function(a){a.o.toggleButton(!1)});
hR(a,!0)};
hR=function(a,b){var c=a.I,d=uba(a),e=b;e=void 0===e?!1:e;c.o&&(d?c.o.hide():c.o.show(),e&&c.o instanceof fQ&&!c.o.F&&gQ(c.o,!1));c.B&&(d?c.B.show():c.B.hide())};
uba=function(a){return a.B.some(function(a){return a.o.isToggled()})||a.A.o.isToggled()};
iR=function(a,b,c,d){cR.call(this,a,b,"survey-question-single-select",c,d);this.hide()};
jR=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-survey",G:[{D:"div",J:"ytp-ad-survey-title"},{D:"div",J:"ytp-ad-survey-questions"}]},"survey");this.A=c;this.C=this.Z["ytp-ad-survey-title"];this.B=this.Z["ytp-ad-survey-questions"];this.o=[];this.hide()};
kR=function(a,b,c){X.call(this,a,b,{D:"div",J:"ytp-ad-survey-interstitial",G:[{D:"div",J:"ytp-ad-survey-interstitial-modal",G:[{D:"div",J:"ytp-ad-survey-interstitial-contents",G:[{D:"div",J:"ytp-ad-survey-interstitial-text"},{D:"div",J:"ytp-ad-survey-interstitial-logo"}]},{D:"div",J:"ytp-ad-survey-interstitial-action"}]}]},"survey-interstitial");this.A=c;this.F=this.Z["ytp-ad-survey-interstitial-action"];this.P=this.Z["ytp-ad-survey-interstitial"];this.o=null;this.L=this.Z["ytp-ad-survey-interstitial-modal"];
this.V=this.Z["ytp-ad-survey-interstitial-text"];this.I=this.Z["ytp-ad-survey-interstitial-logo"];this.C=null;this.da=new g.Zs;g.K(this,this.da);this.B=new g.aQ(this,500,!1,300);g.K(this,this.B)};
vba=function(a,b,c){var d={adLifecycleCommand:{action:"START_LINEAR_AD"}},e=[d];c.dismissCommands&&(e=c.dismissCommands);var f=b.target==a.P,k=a.o.element.contains(b.target);a.B.hide(function(){e.length&&f?a.A.Jc(e,a.macros):k&&a.A.Jc([d],a.macros)})};
lR=function(a,b){var c=b&&fP(b)||"";g.sb(c)?fr(Error("Found ThumbnailDetails without valid image URL")):g.lh(a,"backgroundImage","url("+c+")")};
mR=function(a){g.R.call(this);this.o=a;this.l=new g.Zs(this);g.K(this,this.l);this.B=wba;this.A=null;this.l.M(this.o,"presentingplayerstatechange",this.C);this.A=this.l.M(this.o,"progresssync",this.F)};
nR=function(a,b,c,d){switch(a){case "invideo-overlay":return new YP(b,c);case "persisting-overlay":return new hQ(b,c,new mR(b));case "player-overlay":return new BQ(b,c,new mR(b));case "pla-shelf":return new RQ(b,c);case "shopping-companion":return new YQ(b,c);case "survey":return new jR(b,c,d);case "backfill-mpu-companion":return new PP(b,c);case "ad-action-interstitial":return new VP(b,c);case "action-companion":return new IP(b,c);case "ad-text-interstitial":return new WP(b,c);case "survey-interstitial":return new kR(b,
c,d);default:return null}};
oR=function(a){g.Zs.call(this);this.Nb=a;this.M(this.Nb,"onAdUxUpdate",this.F)};
pR=function(a,b){oR.call(this,a);this.A=b;this.o=null;this.g=new window.Map};
qR=function(a){oR.call(this,a)};
rR=function(a,b){oR.call(this,a);this.A=a;this.C=b;this.o=null;this.g={};var c=new g.W({D:"div",W:["video-ads","ytp-ad-module"]});g.K(this,c);this.B=new $O(c.element);g.K(this,this.B);g.OL(this.A,c.element,4)};
sR=function(a,b){var c=fc(a.g,b.id,null);null!=c||g.Q(Error("Component not found for element id: "+b.id),"WARNING");return c||null};
tR=function(a){g.XL.call(this,a);var b=this;this.l=null;this.created=!1;var c=g.U(a);g.pB(c)&&!g.wB(c)&&(c=function(){return b.l},g.K(this,new rR(a,c)),g.K(this,xN(a)?new qR(a):new pR(a,c)))};
uR=function(a,b,c){g.J.call(this);this.ia=b;this.ma=c;this.H=this.P=this.F=this.A=this.U=this.V=this.R=this.o=this.K=this.l=null;this.aa={};this.X={};this.fa=null;this.g=a;this.I=this.C=this.L=this.B=null;this.ba=g.U(a).experiments.g("web_player_defer_modules")};
g.vR=function(a){var b=g.U(a.g);if(g.EB(b)||b.Rb||!b.ud&&!b.ia)return!1;var c=a.g.Ca();if(2==c)return!1;if(3==c)return b.experiments.g("desktop_enable_autoplay");a=a.g.Y();return!!a&&(!a.oa||b.experiments.g("allow_live_autoplay"))};
wR=function(a){a.ba&&(a.km(),a.im(),a.jm())};
xR=function(a){if(a=a.g.Y(1).getPlayerResponse())if(a=a.adPlacements)for(var b=0;b<a.length;b++)if(a[b].adPlacementRenderer)return!0;return!1};
AR=function(a,b,c,d){try{if(d){var e=g.yR[b];if(e)return new e(a.g);"creatorendscreen"==b?zR(a,"annotations_module",c):zR(a,b,c)}else g.LL(a.g,b)}catch(f){g.LL(a.g,b),g.Q(f)}return null};
BR=function(a,b){a.l&&(b||a.l.Dc())&&(g.De(a.l),a.l=null);a.K&&(b||a.K.Dc())&&(g.De(a.K),a.K=null);a.o&&(b||a.o.Dc()?(g.De(a.o),a.o=null):a.o.loaded&&a.o.unload());a.R&&(b||a.R.Dc())&&(g.De(a.R),a.R=null);a.V&&(b||a.V.Dc())&&(g.De(a.V),a.V=null);a.U&&(b||a.U.Dc())&&(g.De(a.U),a.U=null);a.A&&(b||a.A.Dc())&&(g.De(a.A),a.A=null);a.F&&(b||a.F.Dc())&&(g.De(a.F),a.F=null);a.P&&(b||a.P.Dc())&&(g.De(a.P),a.P=null);a.H&&(b||a.H.Dc())&&(g.De(a.H),a.H=null);a.L&&(b||a.L.Dc())&&(g.De(a.L),a.L=null);a.C&&(b||
a.C.Dc())&&(g.De(a.C),a.C=null);a.B&&(b||a.B.Dc())&&(g.De(a.B),a.B=null)};
g.sL=function(a){return g.U(a.g).Ab?a.L:null};
zR=function(a,b,c){if(a.ia){for(var d=a.ia+b+".js",e=window.document.getElementsByTagName("SCRIPT"),f=!1,k,l=0;l<e.length;l++){var m=e[l];m.src==d&&(k=m)}k||(k=g.yd("SCRIPT"),f=!0);var n=(0,g.A)(function(){this.ga()||c.call(this)},a),p=(0,g.A)(function(){this.ga()||g.LL(this.g,b)},a);
k.onload=g.B(function(a){vf(n);a&&a()},k.onload);
k.onerror=g.B(function(a){vf(p);a&&a()},k.onerror);
k.onreadystatechange=g.B(function(a){switch(k.readyState){case "loaded":case "complete":vf(n,this)}a&&a()},k.onreadystatechange);
f&&((e=g.U(a.g).gj)&&k.setAttribute("nonce",e),g.Sc(k,g.Ud(d)),d=window.document.getElementsByTagName("HEAD")[0]||window.document.body,d.insertBefore(k,d.firstChild),g.Ce(a,function(){k.parentNode&&k.parentNode.removeChild(k);g.yR[b]=null;"annotations_module"==b&&(g.yR.creatorendscreen=null)}))}};
CR=function(a){var b=a.g,c=["html5-video-player"];b.H&&c.push("ytp-dni");var d=b.experiments.g("web_player_tabindex_killswitch")?"-1":"0";g.W.call(this,{D:"div",W:c,N:{tabindex:d,id:a.ma.attrs.id},G:[{D:"div",J:"html5-video-container",N:{"data-layer":"0"}}]});b.rk&&this.Ik("ytp-transparent");g.ws(this.element,"version",a.ma.assets.js);this.app=a;this.l=this.Z["html5-video-container"];this.X=!!this.l;this.o=new g.Wg(0,0,0,0);this.g=null;this.B=new g.Wg(0,0,0,0);this.F=this.L=this.K=window.NaN;this.H=
!1;this.C=window.NaN;this.I=!1;this.A=null;this.addEventListener=(0,g.A)(this.element.addEventListener,this.element);this.removeEventListener=(0,g.A)(this.element.removeEventListener,this.element);this.dispatchEvent=function(){};
this.P=(0,g.A)(function(){this.element.focus()},this);
xB(b)&&"blazer"!=b.g&&"mweb-polymer"!=b.g&&window.matchMedia&&(this.R="desktop-polymer"==b.g?[{query:window.matchMedia("(max-width: 656px)"),size:new g.ad(426,240)},{query:window.matchMedia("(max-width: 856px)"),size:new g.ad(640,360)},{query:window.matchMedia("(max-width: 999px)"),size:new g.ad(854,480)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.ad(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.ad(854,480)},{query:window.matchMedia("(min-width: 1000px)"),
size:new g.ad(640,360)}]:[{query:window.matchMedia("(max-width: 656px)"),size:new g.ad(426,240)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.ad(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.ad(854,480)},{query:window.matchMedia("(min-width: 657px)"),size:new g.ad(640,360)}]);this.V=!0;g.ru({YTP_ADVERTISEMENT:"Advertisement",YTP_AD_BADGE:"Ad",YTP_AD_POD_POSITION:"$AD_INDEX of $ADS_COUNT",YTP_AD_PREVIEW_NONSKIPPABLE:"Video will play after ad",
YTP_AD_PREVIEW_NONSKIPPABLE_COUNTDOWN:"Your video will begin in $TIME_REMAINING",YTP_AIRPLAY:"AirPlay",YTP_AUDIO_TRACK_TITLE:"Audio track",YTP_AUTO:"Auto",YTP_CAN_SKIP_AD_SOON:"You can skip to video in $TIME_REMAINING",YTP_CARDS_BUTTON_ARIA_LABEL:"Show cards",YTP_CARDS_BUTTON_INFO:"Info",YTP_CARDS_BUTTON_SHOPPING:"Shopping",YTP_COPY_DEBUG_INFO:"Copy debug info",YTP_COPY_VIDEO_URL:"Copy video URL",YTP_COPY_VIDEO_URL_AT_TIME:"Copy video URL at current time",YTP_GET_DEBUG_INFO:"Get debug info",YTP_GET_VIDEO_URL:"Get video URL",
YTP_GET_VIDEO_URL_AT_TIME:"Get video URL at current time",YTP_GET_EMBED:"Get embed code",YTP_PLAYBACK_SPEED_CHANGED:"Speed is $RATE",YTP_DEFAULT_VIEW:"Default view",YTP_EMBED_COPY:"Copy embed code",YTP_ERROR_GENERIC_WITHOUT_LINK:"An error occurred. Please try again later.",YTP_ERROR_GENERIC_WITH_LINK_AND_CPN:"An error occurred. Please try again later. (Playback ID: $CPN) $BEGIN_LINKLearn More$END_LINK",YTP_EXIT_FULLSCREEN:"Exit full screen",YTP_FULLSCREEN_GENERIC_ERROR:"Full screen is unavailable. $BEGIN_LINKLearn More$END_LINK",
YTP_FULLSCREEN_UNSUPPORTED_ERROR:"Your browser doesn't support full screen. $BEGIN_LINKLearn More$END_LINK",YTP_VOLUME_UNSUPPORTED_ERROR:"Your browser doesn't support changing the volume. $BEGIN_LINKLearn More$END_LINK",YTP_FULLSCREEN:"Full screen",YTP_GOTO_LIVE_TOOLTIP:"Skip ahead to live broadcast.",YTP_LIVE:"Live",YTP_LIVE_NOW:"LIVE NOW",YTP_LOOP:"Loop",YTP_MORE:"More",YTP_MORE_VIDEOS:"More videos",YTP_MDX_TOOLTIP:"Play on TV",YTP_MUTE:"Mute",YTP_NEXT:"Next",YTP_NORMAL_SPEED:"Normal",YTP_ON:"On",
YTP_OFF:"Off",YTP_OPTIONS:"Options",YTP_PREVIOUS:"Previous",YTP_PLAYBACK_STALLED_AT_START:"If playback doesn't begin shortly, try restarting your device.",YTP_MISSING_FORMATS:"Missing options?",YTP_PLAYLIST:"Playlist",YTP_QUALITY_TITLE:"Quality",YTP_REPLAY:"Replay",YTP_TROUBLESHOOT_ISSUE:"Troubleshoot playback issue",YTP_SETTINGS:"Settings",YTP_SHARE:"Share",YTP_SHARE_LINK:"Share link",YTP_SHARE_WITH_PLAYLIST_2:"Include playlist",YTP_SHOW_VIDEO_INFO:"Stats for nerds",YTP_SIGN_IN:"Sign in",YTP_SKIP_AD:"Skip Ad",
YTP_SPEED_TITLE:"Speed",YTP_SUBSCRIBE:"Subscribe",YTP_SUBSCRIBED:"Subscribed",YTP_SUBSCRIBE_NOTIFY_OFF:"Get notified about every new video",YTP_SUBSCRIBE_NOTIFY_ON:"Stop getting notified about every new video",YTP_SUBTITLES:"Subtitles/CC",YTP_SUBTITLES_TOOLTIP:"Subtitles/closed captions",YTP_SUBTITLES_OFF:"Subtitles/closed captions off",YTP_SUBTITLES_ON:"Subtitles/closed captions on",YTP_TAP_TO_UNMUTE_SHORT:"Tap to unmute",YTP_THEATER_MODE:"Theater mode",YTP_UNMUTE:"Unmute",YTP_URL_NAVIGATE_TO:"Watch on $WEBSITE",
YTP_WATCH_ALL:"Watch entire video",YTP_WATCH_LATER_2:"Watch later",YTP_WATCH_LATER_AS_2:"Watch later as $USER_NAME",YTP_ADDED_TO_WATCH_LATER_AS:"Added as $USER_NAME",YTP_PLAY:"Play",YTP_ERROR_LICENSE:"Sorry, there was an error licensing this video.",YTP_ERROR_VIDEO_NOT_FOUND:"This video can not be found.",YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE:"This video has already been downloaded on the maximum number of devices allowed by the copyright holder. Before you can play the video here, it needs to be unpinned on another device.",
YTP_ERROR_PURCHASE_NOT_FOUND:"This video requires payment.",YTP_ERROR_PURCHASE_REFUNDED:"This video's purchase has been refunded.",YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK:"Your account is playing this video in another location. Please reload this page to resume watching.",YTP_ERROR_TOO_MANY_STREAMS_PER_USER:"Playback stopped because too many videos belonging to the same account are playing.",YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT:"Playback stopped because this video has been played on too many devices.",
YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED:"Too many devices/IP addresses have been used over the 24 hour period.",YTP_ERROR_STREAM_LICENSE_NOT_FOUND:"Video playback interrupted. Please try again.",YTP_CLOSE:"Close",YTP_ANNOTATIONS:"Annotations",YTP_SEEK_SLIDER:"Seek slider",YTP_PAUSE:"Pause",YTP_AUTOPLAY:"Autoplay",YTP_RESET:"Reset",YTP_STOP:"Stop live playback",YTP_SCREENREADER_VOLUME_SETTING:"volume",YTP_SCREENREADER_VOLUME_MUTED:"muted",YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK:"This video format is not supported.",
YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK:"Your browser does not currently recognize any of the video formats available. $BEGIN_LINKClick here to visit our frequently asked questions about HTML5 video.$END_LINK",YTP_HTML5_FLASH_DEPRECATED:"Flash videos are no longer supported. For the best experience, please upgrade your browser to the latest version. $BEGIN_LINKLEARN MORE$END_LINK",YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED:"The device in the cast session doesn't match the requested one.",
YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED:"The video in the cast session doesn't match the requested one.",YTP_ERROR_CAST_TOKEN_EXPIRED:"Cast session was expired. Please refresh.",YTP_ERROR_CAST_TOKEN_FAILED:"Cast session not available. Please refresh or try again later.",YTP_ERROR_CAST_TOKEN_MALFORMED:"Invalid cast session. Please refresh or try again later.",YTP_ERROR_GEO_FAILURE:"This video isn't available in your country.",YTP_ERROR_INVALID_DRM_MESSAGE:"The DRM system specific message is invalid.",
YTP_ERROR_RENTAL_EXPIRED:"This video's rental has expired.",YTP_ERROR_RETRYABLE_ERROR:"There was a temporary server error. Please try again later.",YTP_ERROR_SERVER_ERROR:"There was an internal server error. Please try again later.",YTP_ERROR_STREAMING_NOT_ALLOWED:"Playback not allowed because this video is pinned on another device.",YTP_ERROR_UNSUPPORTED_DEVICE:"Playback isn't supported on this device.",YTP_ERROR_VIDEO_FORBIDDEN:"Access to this video is forbidden.",YTP_ERROR_VIDEO_UNAVAILABLE:"Video unavailable",
YTP_ERROR_FORMAT_UNAVALIABLE:"This video isn't avaliable at the selected quality. Please try again later.",YTP_DEVICE_FALLBACK:"Sorry, this video is not available on this device.",YTP_VISIT_ADVERTISERS_SITE:"Visit advertiser's site",YTP_PROGRESS_LABEL_2:"$PLAY_PROGRESS of $DURATION",YTP_PLAYLIST_NAME:"Playlist: $PLAYLIST_NAME",YTP_PLAYLIST_POSITION:"$CURRENT_POSITION/$PLAYLIST_LENGTH",YTP_SHARE_PANEL_ERROR:"An error occurred while retrieving sharing information. Please try again later.",YTP_PLAYLIST_AUTHOR_AND_POSITION:"by $AUTHOR \u2022 $CURRENT_POSITION/$PLAYLIST_LENGTH",
YTP_PLAYER_NORMAL:"YouTube Video Player",YTP_PLAYER_FULLSCREEN:"YouTube Video Player in Fullscreen",YTP_SPONSORED:"Sponsored",YTP_SPONSORED_PRODUCT_INFO:"You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.",YTP_PIP:"Picture in Picture",YTP_AUTO_TRANSLATE:"Auto-translate",YTP_SWITCH_CAMERA:"Switch camera",YTP_MULTICAM_INDEX:"Viewing $CAMERA_INDEX of $CAMERA_COUNT",YTP_MORE_CAMERAS_AVAILABLE:"More cameras available",YTP_VIDEO_SUBTITLES_OVERRIDE:"Video Override",
YTP_VIDEO_SUBTITLES_OVERRIDE_DESC:"Allow for a different caption style if specified by the video.",YTP_WATCH_VIDEO_OR_PLAYLIST:"Watch $TITLE",YTP_FONT_FAMILY:"Font family",YTP_FONT_SIZE:"Font size",YTP_FONT_COLOR:"Font color",YTP_FONT_OPACITY:"Font opacity",YTP_BACKGROUND_COLOR:"Background color",YTP_BACKGROUND_OPACITY:"Background opacity",YTP_WINDOW_COLOR:"Window color",YTP_WINDOW_OPACITY:"Window opacity",YTP_COLOR_WHITE:"White",YTP_COLOR_YELLOW:"Yellow",YTP_COLOR_GREEN:"Green",YTP_COLOR_CYAN:"Cyan",
YTP_COLOR_BLUE:"Blue",YTP_COLOR_MAGENTA:"Magenta",YTP_COLOR_RED:"Red",YTP_COLOR_BLACK:"Black",YTP_FONT_FAMILY_MONO_SERIF:"Monospaced Serif",YTP_FONT_FAMILY_PROP_SERIF:"Proportional Serif",YTP_FONT_FAMILY_MONO_SANS:"Monospaced Sans-Serif",YTP_FONT_FAMILY_PROP_SANS:"Proportional Sans-Serif",YTP_FONT_FAMILY_CASUAL:"Casual",YTP_FONT_FAMILY_CURSIVE:"Cursive",YTP_FONT_FAMILY_SMALL_CAPS:"Small Capitals",YTP_CHAR_EDGE_STYLE:"Character edge style",YTP_EDGE_STYLE_NONE:"None",YTP_EDGE_STYLE_RAISED:"Raised",
YTP_EDGE_STYLE_DEPRESSED:"Depressed",YTP_EDGE_STYLE_OUTLINE:"Outline",YTP_EDGE_STYLE_DROP_SHADOW:"Drop Shadow",YTP_CONTRIBUTE_MENU_ITEM:"Add subtitles/CC",YTP_ASR_SETTINGS_LABEL:"Automatic Captions",YTP_LANGUAGE_OFF:"Off"});xba(this);this.M(a.l,"mutedautoplaychange",this.EB)};
xba=function(a){var b=a.app.l,c=(0,g.A)(a.Dz,a),d=(0,g.A)(a.Ez,a),e=(0,g.A)(a.DB,a),f=(0,g.A)(a.kz,a);b.addEventListener("initializingmode",c);b.addEventListener("videoplayerreset",d);b.addEventListener("videodatachange",e);b.addEventListener("presentingplayerstatechange",f);g.Ce(a,function(){b.removeEventListener("initializingmode",c);b.removeEventListener("videoplayerreset",d);b.removeEventListener("videodatachange",e);b.removeEventListener("presentingplayerstatechange",f)})};
DR=function(a){a.g&&(a.g.removeEventListener("focus",a.P),g.Dd(a.g),a.g=null)};
ER=function(a,b){if(a.g){var c=a.app.g;eA&&(a.g.setAttribute("x-webkit-airplay","allow"),b.title?a.g.setAttribute("title",b.title):a.g.removeAttribute("title"));a.g.setAttribute("controlslist","nodownload");c.zk&&b.videoId&&(a.g.poster=b.kc(c,"default.jpg"))}c=g.ID(b,"yt:bgcolor");a.l.style.backgroundColor=c?c:"";a.K=PA(g.ID(b,"yt:stretch"));a.L=PA(g.ID(b,"yt:crop"),!0);a.Ae()};
g.GR=function(a){var b=a.app.g.experiments.g("html5_aspect_from_adaptive_format");if(b){var c=g.V(a.app);if((c=c?c.g:null)&&c.Ia&&c.Ia.g)return b=c.Ia.videoInfos[0],FR(b.video.width,b.video.height)}return(a=a.g)?FR(a.videoWidth,a.videoHeight):b?16/9:window.NaN};
g.rN=function(a,b){var c=a.Da(),d=HR(a,c,g.GR(a),b);return new g.Wg((c.width-d.width)/2,(c.height-d.height)/2,d.width,d.height)};
HR=function(a,b,c,d){(0,window.isNaN)(a.K)||(c=a.K);var e=c;(0,window.isNaN)(a.F)?(0,window.isNaN)(a.L)||(e=a.L):e=a.F;a=FR(b.width,b.height);(0,window.isFinite)(e)||(e=Math.max(c,a));var f;e>a?f={width:b.width,height:b.width/e,aspectRatio:e}:e<a?f={width:b.height*e,height:b.height,aspectRatio:e}:f={width:b.width,height:b.height,aspectRatio:a};d||(0,window.isNaN)(c)||(c>e?f.width=f.height*c:c<e&&(f.height=f.width/c),f.aspectRatio=c);return f};
FR=function(a,b){return 1>Math.abs(IR*b-a)||1>Math.abs(IR/a-b)?IR:a/b};
JR=function(a){if(1==a.app.R)return!1;var b=g.tL(a.app.l);a=g.T(b,1024)&&!a.app.g.experiments.g("dompaused_video_visible_killswitch");return b&&!g.T(b,2)&&!a&&!KE(b)};
yN=function(a){var b="3"==a.app.g.A&&!a.H&&JR(a)&&!a.app.X;a.g.controls=b;a.g.tabIndex=b?0:-1;b?a.g.removeEventListener("focus",a.P):a.app.g.experiments.g("disable_focus_redirect")||a.g.addEventListener("focus",a.P)};
KR=function(a){var b=g.GR(a),c=a.Da(),d=1,e=!1,f=HR(a,c,b),k=Tr();if(JR(a)){var l=(0,window.isNaN)(b)||vz;eA&&!g.vc(601)?b=f.aspectRatio:l=l||"3"==a.app.g.A;l?l=new g.Wg(0,0,c.width,c.height):(d=f.aspectRatio/b,l=new g.Wg((c.width-f.width/d)/2,(c.height-f.height)/2,f.width/d,f.height),1==d&&g.Lk&&(b=l.width-c.height*b,0<b&&(l.width+=b,l.height+=b)));k&&(a.g.style.display="");a.I=!0}else b=-c.height,eA?b*=window.devicePixelRatio:g.BB&&(b-=window.screen.height),l=new g.Wg(0,b,c.width,c.height),k&&(a.g.style.display=
"none"),a.I=!1;g.Yg(a.B,l)||(a.B=l,g.wB(a.app.g)?(a.g.style.setProperty("width",l.width+"px","important"),a.g.style.setProperty("height",l.height+"px","important")):g.Eh(a.g,g.$g(l)),g.th(a.g,g.ah(l)),e=!0);c=new g.Wg((c.width-f.width)/2,(c.height-f.height)/2,f.width,f.height);g.Yg(a.o,c)||(a.o=c,e=!0);g.lh(a.g,"transform",1==d?"":"scaleX("+d+")");return e};
LR=function(a,b,c,d,e){g.W.call(this,{D:"div",J:"ytp-horizonchart"});this.l=Math.round(a/c);this.H=b;this.B=c;this.C=d;this.F=e;this.Oa=0;this.element.style.width=this.l*this.B+"px";this.element.style.height=this.H+"em";this.g=-1;this.A=this.o=null};
MR=function(a,b){if(-1==a.g){try{var c=g.yd("CANVAS");a.o=c.getContext("2d")}catch(m){}if(a.o){var d=a.l*a.B;a.A=c;a.A.width=d;a.A.style.width=d+"px";a.element.appendChild(a.A)}else for(a.B=Math.floor(a.B/4),a.l*=4,c=0;c<a.B;c++)d=g.yd("SPAN"),d.style.width=a.l+"px",d.style.left=a.l*c+"px",a.element.appendChild(d)}c=a.element.clientHeight||24;c!=a.g&&(a.g=c,a.o&&(c=1<(window.devicePixelRatio||1)?2:1,a.A.height=a.g*c,a.A.style.height=a.g+"px",a.o.scale(1,c)));c=g.q(b);for(var e=c.next();!e.done;e=
c.next()){d=a;var f=a.Oa,k=e.value;for(e=0;e+2<d.C.length&&d.C[e+1]<k;)e++;k=Math.min(1,(k-d.C[e])/(d.C[e+1]-d.C[e]));if(d.o)d.o.fillStyle=d.F[e],d.o.fillRect(f*d.l,0,d.l,d.g),d.o.fillStyle=d.F[e+1],d.o.fillRect(f*d.l,d.g*(1-k),d.l,d.g);else{f=d.element.children[f];var l=window.devicePixelRatio||1;k=Math.min(d.g,Math.round(d.g*k*l)/l);f.style.height=k+"px";f.style.backgroundColor=d.F[e+1];f.style.borderTop="solid "+(d.g-k)+"px "+d.F[e]}a.Oa=(a.Oa+1)%a.B}c=a.Oa;a.o?a.o.clearRect(c*a.l,0,a.l,a.g):(c=
a.element.children[c],c.style.height="0px",c.style.borderTop="")};
NR=function(a){var b=null;b={D:"button",W:["html5-video-info-panel-close","ytp-button"],N:{title:"close"},G:["[x]"]};g.W.call(this,{D:"div",J:"html5-video-info-panel",G:[b,{D:"div",J:"html5-video-info-panel-content",G:[{D:"div",G:[{D:"div",G:["Video ID / CPN"]},{D:"span",G:["{{video_id_and_cpn}}"]}]},{D:"div",G:[{D:"div",G:["Viewport"]},{D:"span",G:["{{dimensions}}"]}]},{D:"div",G:[{D:"div",G:["Current / Optimal Res"]},{D:"span",G:["{{resolution}}"]}]},{D:"div",G:[{D:"div",G:["Volume / Normalized"]},
{D:"span",G:["{{volume}}"]}]},{D:"div",G:[{D:"div",G:["Codecs"]},{D:"span",G:["{{codecs}}"]}]},{D:"div",N:{style:"{{shader_info_style}}"},G:[{D:"div",G:["Shader Info"]},{D:"span",G:["{{shader_info}}"]}]},{D:"div",N:{style:"{{color_style}}"},G:[{D:"div",G:["Color"]},{D:"span",G:["{{color}}"]}]},{D:"div",N:{style:"{{drm_style}}"},G:[{D:"div",G:["Protected"]},{D:"span",G:["{{drm}}"]}]},{D:"div",G:[{D:"div",G:["Host"]},{D:"span",G:["{{stream_host}}"]}]},{D:"div",G:[{D:"div",G:["Connection Speed"]},{D:"span",
G:[{D:"span",G:["{{bandwidth_chart}}"]},{D:"span",G:["{{bandwidth_kbps}}"]}]}]},{D:"div",G:[{D:"div",G:["Network Activity"]},{D:"span",G:[{D:"span",G:["{{network_activity_chart}}"]},{D:"span",G:["{{network_activity_bytes}}"]}]}]},{D:"div",G:[{D:"div",G:["Buffer Health"]},{D:"span",G:[{D:"span",G:["{{buffer_health_chart}}"]},{D:"span",G:["{{buffer_health_seconds}}"]}]}]},{D:"div",N:{style:"{{live_latency_style}}"},G:[{D:"div",G:["Live Latency"]},{D:"span",G:[{D:"span",G:["{{live_latency_chart}}"]},
{D:"span",G:["{{live_latency_secs}}"]}]}]},{D:"div",N:{style:"{{live_mode_style}}"},G:[{D:"div",G:["Live Mode"]},{D:"span",G:["{{live_mode}}"]}]},{D:"div",G:[{D:"div",G:["Dropped Frames"]},{D:"span",G:["{{dropped_frames}}"]}]}]}]});b&&this.M(this.Z["html5-video-info-panel-close"],"click",this.hide);b=[0,18750,37500,81250,128E3,256E3,512E3,2048E3,8192E3,32768E3,131072E3];var c="#000 #d53e4f #f46d43 #fdae61 #fee08b #e6f598 #abdda4 #66c2a5 #3288bd #124588 #fff".split(" "),d=b.map(function(a){return a/
4});
this.o=new LR(300,1,150,b,c);g.K(this,this.o);this.updateValue("bandwidth_chart",this.o);this.B=new LR(300,1,150,[0,3,10,15,30,60,90],"#000 #66c2a5 #abdda4 #e6f598 #fdae61 #f46d43 #a8330f".split(" "));g.K(this,this.B);this.updateValue("live_latency_chart",this.B);this.A=new LR(300,1,150,[0,15,30,60,90,120],"#000 #fdae61 #e6f598 #66c2a5 #3288bd #fff".split(" "));g.K(this,this.A);this.updateValue("buffer_health_chart",this.A);this.C=new LR(300,1,150,d,c);g.K(this,this.C);this.updateValue("network_activity_chart",
this.C);this.l=new g.P(this.Qn,500,this);g.K(this,this.l);this.g=a};
OR=function(a){var b=/codecs="([^"]*)"/.exec(a.mimeType);return(b&&b[1]?b[1]+" ("+Cu(a)+")":Cu(a))+(a.video&&a.video.isAccelerated?" [acc]":"")};
PR=function(a,b){g.J.call(this);this.o=a||window.NaN;this.g=b||null;this.l=[]};
g.QR=function(a){return QF(a)?(a.fetch=0,new g.PF(a)):new g.lD(a)};
RR=function(){this.g=[];this.l=[];this.o=[]};
UR=function(a,b,c){c=g.yd(c?"AUDIO":"VIDEO");g.Ia(c,yba);g.Ns(c,"loadeddata",(0,g.A)(c.l,c));eB&&6<=SR&&g.Ns(c,"webkitbeginfullscreen",(0,g.A)(c.play,c));a.l.push(c);b?a.o.push(c):TR(a,c);return c};
TR=function(a,b){g.Sa(a.l,b)&&!g.Sa(a.g,b)&&(b.src||b.load(),g.Xa(a.o,b)||a.g.push(b))};
VR=function(a){g.J.call(this);this.l=null;for(var b=[],c=0;100>=c;c++)b.push(c/100);b={threshold:b};(this.g=window.IntersectionObserver?new window.IntersectionObserver((0,g.A)(this.o,this),b):null)&&this.g.observe(a)};
WR=function(a,b,c,d){g.R.call(this);this.l=a;this.P=(0,g.A)(b,null);this.g=0;this.C=!1;this.A=new g.Yc(window.NaN,window.NaN);this.da=new g.Zs(this);g.K(this,this.da);b=d?4E3:3E3;this.H=new g.P(g.B(this.xb,1,!1),b,this);g.K(this,this.H);this.I=new g.P(g.B(this.xb,2,!1),b,this);g.K(this,this.I);this.L=new g.P(g.B(this.xb,512,!1),0,this);g.K(this,this.L);this.R=c&&0<c.hg.length?5E3:3E3;d||(this.o=this.da.M(a,"mouseover",this.Pn),this.da.M(a,"mousemove",this.AB),this.da.M(a,"mouseleave",this.SD));g.nh?
this.da.M(a,"keypress",this.Tz):this.da.M(a,"focusin",this.Gy);this.B=this.da.M(a,"mousedown",this.Qs);this.F=this.da.M(a,"touchstart",this.Ss,void 0,!0);this.U=null;this.xb(640,!0)};
XR=function(a){a.xb(4,!1);a.K&&(a.da.Pa(a.K),a.K=null,a.o=a.da.M(a.l,"mouseover",a.Pn));a.o&&(a.da.Pa(a.o),a.o=a.da.M(a.l,"mouseover",a.Pn))};
ZR=function(a,b){g.W.call(this,{D:"canvas",J:"ytp-tv-static"});this.l=this.element.getContext("2d");this.height=this.width=window.NaN;this.H=null;this.I=this.K=this.A=this.o=0;this.B=-75;this.g=new g.Mp(this.F,void 0,this);g.K(this,this.g);this.C=new g.P(this.g.ii,75,this.g);g.K(this,this.C);YR(this,a,b)};
$R=function(a){for(var b=Math.floor(.6*a),c=b;c<a;++c){for(var d=!1,e=2;e<Math.sqrt(c);e++){if(!(c%e)){d=!1;break}d=!0}if(d)return c}return b};
YR=function(a,b,c){if(b&&c){a.width=a.element.width=b;a.height=a.element.height=c;var d=g.yd("CANVAS");d.width=b;d.height=c;for(var e=d.getContext("2d"),f=e.getImageData(0,0,b,c),k=b*c,l=0;l<k;l++){var m=4*l;f.data[m]=f.data[m+1]=f.data[m+2]=Math.floor(35*Math.random());f.data[m+3]=255}e.putImageData(f,0,0);a.H=d;a.K=$R(b);a.I=$R(c/10);a.l.scale(1.5,1.5);a.l.fillStyle="rgba(255, 255, 255, 0.02)"}};
aS=function(a){var b=!g.U(a).Xb&&3!=a.Ca();return a.isFullscreen()||b};
g.bS=function(a,b,c,d){if((void 0===c||!c)&&g.jQ(a))return g.Ts(a),!0;b.Wb();a=a.currentTarget.getAttribute("href");g.IM(a,d,!0);return!1};
cS=function(a,b,c){if(xB(g.U(b))&&2!=b.Ca()){if(g.jQ(c))return b.isFullscreen()&&g.xL(b),g.Ts(c),!0}else{var d=g.jQ(c);d&&b.Wb();g.IM(a,void 0,!0);d&&(g.JM(a),g.Ts(c))}return!1};
dS=function(){return{D:"div",J:"ytp-spinner-container",G:[{D:"div",J:"ytp-spinner-rotator",G:[{D:"div",J:"ytp-spinner-left",G:[{D:"div",J:"ytp-spinner-circle"}]},{D:"div",J:"ytp-spinner-right",G:[{D:"div",J:"ytp-spinner-circle"}]}]}]}};
fS=function(a){g.W.call(this,{D:"div",W:["ytp-error"],N:{role:"alert"},G:[{D:"div",J:"ytp-error-content",G:[{D:"div",J:"ytp-error-content-wrap",G:["{{content}}"]}]}]});this.g=a;this.o=[];try{this.l=new ZR(1,1),g.K(this,this.l),this.l.ca(this.element,0)}catch(b){}eS(this,g.uL(this.g).Da())};
eS=function(a,b){gS(a,function(a){YR(a,b.width,b.height)})};
gS=function(a,b){if(a.l)try{b.call(a,a.l)}catch(c){a.l.dispose(),a.l=null}};
hS=function(a,b,c,d,e,f){e||(e=g.U(a.g).o);a=d?{CPN:a.g.Y().clientPlaybackNonce}:null;b=g.S(b,a).split(/\$(BEGIN|END)_LINK/);a=[];f&&(f=g.S(f,null))&&a.push({D:"h2",G:[f]});a.push(b[0]);a.push({D:"br"});a.push({D:"a",N:{href:c,target:e?"_blank":null},G:[b[2]]});a.push(b[4]);return{D:"span",G:a}};
iS=function(a){g.W.call(this,{D:"div",J:"ytp-bezel",N:{role:"status","aria-label":"{{label}}"},G:[{D:"div",J:"ytp-bezel-icon",G:["{{icon}}"]}]});this.l=new g.P(this.show,10,this);g.K(this,this.l);this.g=new g.P(this.hide,500,this);g.K(this,this.g);this.o=a;this.hide()};
kS=function(a,b){if(b)g.T(g.tL(a.o),64)||jS(a,wP(),g.S("YTP_PLAY"));else{var c=a.o.Y();c.oa&&!c.Ne?jS(a,BP(),g.S("YTP_STOP")):jS(a,vP(),g.S("YTP_PAUSE"))}};
lS=function(a,b,c){0>=b?(c=EP(),b=g.S("YTP_SCREENREADER_VOLUME_MUTED")):(c=c?DP():CP(),b=Math.floor(b)+"% "+g.S("YTP_SCREENREADER_VOLUME_SETTING"));jS(a,c,b)};
mS=function(a,b,c){c=c?g.Y?{D:"div",W:["ytp-icon","ytp-icon-fast-rewind"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 17,24 V 12 l -8.5,6 8.5,6 z m .5,-6 8.5,6 V 12 l -8.5,6 z"}}]}:g.Y?{D:"div",W:["ytp-icon","ytp-icon-fast-forward"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"}}]};b=g.S("YTP_PLAYBACK_SPEED_CHANGED",
{RATE:String(b)});jS(a,c,b)};
nS=function(a){jS(a,xP(),g.S("YTP_PREVIOUS"))};
jS=function(a,b,c){a.updateValue("label",void 0===c?"":c);a.updateValue("icon",b);g.Rp(a.g);a.l.start()};
oS=function(a){var b=g.U(a),c=["ytp-large-play-button","ytp-button"];b.H&&b.zb?b=[{D:"div",J:"ytp-large-play-button-circle",N:{style:"background-color: "+b.zb}},g.Y?{D:"div",W:["ytp-icon","ytp-icon-dni-large-play-button"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"4 -6 60 60",width:"100%"},G:[{D:"path",N:{d:"m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z",fill:"#fff"}}]}]:b.X&&!b.Rb?b=[g.Y?{D:"div",W:["ytp-icon","ytp-icon-large-play-button-hover"]}:{D:"svg",N:{height:"100%",version:"1.1",
viewBox:"0 0 68 48",width:"100%"},G:[{D:"path",J:"ytp-large-play-button-bg",N:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}},{D:"path",N:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]:(b.l&&c.push("ytp-touch-device"),b=[b.Rb?
g.Y?{D:"div",W:["ytp-icon","ytp-icon-house-brand-large-play-button"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 60 60",width:"100%"},G:[{D:"path",J:"ytp-large-play-button-bg",N:{"clip-rule":"evenodd",d:"M59.6,1.35c0.26,.5,.4,1.13,.4,1.9v53.5c0,.76-0.13,1.4-0.4,1.9c-0.5,.9-1.45,1.35-2.85,1.35H3.25c-1.4,0-2.33-0.43-2.8-1.3C0.15,58.16,0,57.51,0,56.75V3.25c0-0.83,.16-1.5,.5-2C1,.41,1.91,0,3.25,0h53.5C58.15,0,59.1,.45,59.6,1.35z M21,41.65l22.7-11.8L21,18V41.65z",fill:"#1f1f1f","fill-rule":"evenodd"}},
{D:"path",N:{d:"M21,41.65 L21,18 L43.7,29.85 L21,41.65 Z",fill:"#fff"}}]}:g.Y?{D:"div",W:["ytp-icon","ytp-icon-large-play-button"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},G:[{D:"path",J:"ytp-large-play-button-bg",N:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
fill:"#212121","fill-opacity":"0.8"}},{D:"path",N:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]);g.W.call(this,{D:"div",J:"ytp-cued-thumbnail-overlay",G:[{D:"div",J:"ytp-cued-thumbnail-overlay-image"},{D:"button",W:c,N:{"aria-label":g.S("YTP_PLAY")},G:b}]});this.A=new g.Zs(this);g.K(this,this.A);this.g=a;this.C=this.Z["ytp-cued-thumbnail-overlay-image"];this.B=this.Z["ytp-large-play-button"];this.o=new g.aQ(this,250);g.K(this,this.o);this.l=new g.P(this.Dt,0,this);g.K(this,this.l);this.Dt();this.M(a,
"presentingplayerstatechange",this.jD);this.M(a,"ypcStateChanged",this.RH);iB(g.U(a))&&this.M(a,"videoplayerreset",this.iD)};
qS=function(a,b){g.Zs.call(this);this.g=a;this.A=b;this.o=new window.Set;this.l=window.navigator.mediaSession;pS(this,"play",function(){kS(b,!0);a.Oc()});
pS(this,"pause",function(){kS(b,!1);a.Wb()});
pS(this,"seekbackward",function(){jS(b,zP());a.Md(-5*a.dc())});
pS(this,"seekforward",function(){jS(b,rP());a.Md(5*a.dc())});
this.M(a,"videodatachange",this.C);this.M(a,"presentingplayerstatechange",this.B);this.C()};
pS=function(a,b,c){a.l.setActionHandler(b,c?(0,g.A)(c,a):null);a.o.add(b)};
rS=function(a){g.W.call(this,{D:"div",J:"ytp-paid-content-overlay",N:{"aria-live":"assertive","aria-atomic":"true"}});this.C=new g.W({D:"div",W:["ytp-button","ytp-paid-content-overlay-text"]});g.K(this,this.C);this.C.ca(this.element);this.I=a;this.l=null;this.F=!1;this.A=new g.aQ(this.C,250,!1,100);g.K(this,this.A);this.B=this.g=null;this.o={};this.H=0;this.M(a,"videodatachange",this.P);this.M(a,"presentingplayerstatechange",this.L)};
sS=function(a,b){var c=GD(b),d=HD(b);a.g?b.videoId&&b.videoId!=a.l&&(g.Rp(a.g),a.l=b.videoId,c=a.o[b.videoId]||0,a.F=!!d&&3E3>c):c&&d&&(a.g=new g.P(a.K,d,a),g.K(a,a.g),g.Ld(g.jd("ytp-paid-content-overlay-text",a.element),c))};
tS=function(a,b){a.g&&g.T(b,8)&&a.F&&(a.F=!1,a.A.show(),a.H=(0,g.H)(),a.g.start())};
wS=function(a){g.W.call(this,{D:"div",J:"ytp-spinner",G:[{D:"div",G:["{{icon}}"]},{D:"div",J:"ytp-spinner-message",G:[g.S("YTP_PLAYBACK_STALLED_AT_START")]}]});this.A=this.Z["ytp-spinner-message"];this.g=a;this.l=new g.P(this.show,500,this);g.K(this,this.l);this.o=!0;uS(this,!1);this.M(a,"presentingplayerstatechange",this.DD);this.M(a,"onFrescaStateChange",this.kF);this.M(a,"playbackstalledatstart",this.uG);this.M(a,"videodatachange",this.mu);this.M(a,"videoplayerreset",this.mu);vS(this,g.tL(a))};
uS=function(a,b){if(b!=a.o){var c;b?c={D:"div",W:["ytp-spinner-container","ytp-fidget-spinner"],G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-fidget-spinner"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 64 64",width:"100%"},G:[{D:"path",J:"ytp-fidget-spinner",N:{d:"m32 2.2c-7.6 0-10.7 7.1-10.7 10.6 0 3.5 1 5.3 2.3 7 1.3 1.7 2.2 4.3-0.2 7.7-2.4 3.5-3.5 2.9-7.9 3.1-4.4 .1-10.5 3.9-10.5 11-0.1 7.1 6.4 10.4 10.4 10.5 4 .1 7.6-2.1 9.4-5.2 2.2-3.8 4-5.4 7.3-5.3 3.3 .1 5.1 1.5 7 4.9 1.8 3.4 5.5 5.6 9.6 5.6 4.2 0 10.5-2.8 10.4-10.8-0.1-8.1-6.6-10.3-10.3-10.5-3.7-0.2-6-0.1-8.1-3.3-2.1-3.2-1.2-5.9-0.1-7.5 1.1-1.7 2.3-3.2 2.3-7.1C42.8 8.7 39.6 2.2 32 2.2zm0.1 4.3c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5zm0 18.8c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5zm-16.3 9.4c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5zm32.7 0c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5z",
fill:"#fff"}}]}]}:c=dS();a.update({icon:c});a.o=b}};
vS=function(a,b){if(g.T(b,128))var c=0;else!(c=g.T(b,16))&&(c=g.T(b,1))&&(c=g.nL(a.g).H,c=!(c&&c.loaded));c?a.l.start():a.hide()};
xS=function(a,b,c,d){d=void 0===d?!1:d;g.XO.call(this,b);this.V=a;this.ba=d;this.I=null;this.H=new g.Zs(this);g.K(this,this.H);this.K=new g.aQ(this,c,!0);g.K(this,this.K);this.A=null};
yS=function(a){a.A&&(window.document.activeElement&&g.Kd(a.element,window.document.activeElement)&&(g.Od(a.A),a.A.focus()),a.A.removeAttribute("aria-expanded"),a.A=null);g.at(a.H);a.I=null};
zS=function(a){return a.Na()&&3!=a.K.g};
BS=function(a){var b=g.U(a).experiments.o("mweb_muted_autoplay_animation"),c=[],d=[];"none"!=b&&(c.push("ytp-unmute-animated"),d.push({D:"div",W:["ytp-unmute-box"]}),"expand"==b?c.push("ytp-unmute-expand"):"shrink"==b&&c.push("ytp-unmute-shrink"));xS.call(this,a,{D:"button",W:["ytp-unmute","ytp-popup","ytp-button"].concat(c),G:[{D:"div",J:"ytp-unmute-inner",G:[{D:"div",W:["ytp-unmute-icon"],G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-volume-muted-dark"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",
width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}]},
{D:"div",W:["ytp-unmute-text"],G:[g.S("YTP_TAP_TO_UNMUTE_SHORT")]}].concat(d)}]},100);this.g=a;this.l=this.o=!1;this.M(a,"mutedautoplaychange",this.B,this);this.M(a,"presentingplayerstatechange",this.C);this.ea("click",this.onClick,this);a=a.app.X;g.EM(this,a);a&&AS(this)};
CS=function(a){a.o||(a.o=!0,g.BL(a.g,"mutedAutoplayClick",{}))};
AS=function(a){a.l||(a.l=!0,g.BL(a.g,"mutedAutoplayImpression",{}))};
DS=function(a){g.Zs.call(this);var b=g.U(a),c=g.uL(a);this.g=a;this.Ab=!1;this.L=null;this.Ha=!1;this.Ya=new g.P(this.uE,0,this);g.K(this,this.Ya);var d=new oS(a);g.K(this,d);g.OL(a,d.element,4);var e=new wS(a);g.K(this,e);g.OL(a,e.element,4);this.C=new iS(a);g.K(this,this.C);g.OL(a,this.C.element,4);var f=a.Y();this.A=new WR(c,(0,g.A)(this.cD,this),f,b.useTabletControls);g.K(this,this.A);this.A.subscribe("autohideupdate",this.zo,this);var k=new rS(a);g.K(this,k);g.OL(a,k.element,4);this.ia=new BS(a);
g.K(this,this.ia);g.OL(this.g,this.ia.element,2);this.Za=this.g.app.X;this.M(a,"mutedautoplaychange",this.dD);this.ba=new g.P(this.ko,200,this);g.K(this,this.ba);this.Ka=f.videoId;this.F=null;this.K=!1;this.Wa=null;this.sa=[];f=a.getRootNode();f.setAttribute("aria-label",g.S("YTP_PLAYER_NORMAL"));switch(b.color){case "white":g.M(f,"ytp-color-white")}!g.U(a).experiments.g("disable_mediasession2")&&"mediaSession"in window.navigator&&!window.navigator.mediaSession.metadata&&window.navigator.mediaSession.setActionHandler&&
(f=new qS(a,this.C),g.K(this,f));this.M(a,"appresize",this.ee);this.M(a,"presentingplayerstatechange",this.xG);this.M(a,"videodatachange",this.Bt);this.M(a,"videoplayerreset",this.vG);this.M(a,"autonavvisibility",this.Ug,this);g.U(a).experiments.g("player_minimized_controls_killswitch")&&this.M(a,"minimized",this.hf,this);this.M(a,"onFrescaStateChange",this.hf,this);this.M(c,"click",this.UG,this);this.M(c,"dblclick",this.VG,this);b.ma&&(this.M(c,"gesturechange",this.WG,this),this.M(c,"gestureend",
this.XG,this));this.bb=[c.l,e.element,d.element,this.C.element]};
ES=function(a){return g.U(a.g).experiments.g("player_minimized_controls_killswitch")?a.g.app.Mb:!1};
FS=function(a,b){if(!b)return!1;var c=a.g.app.B.ha();if(c&&g.Kd(c,b))return c.controls;for(c=0;c<a.bb.length;c++)if(g.Kd(a.bb[c],b))return!1;return g.Fp(b,"ytp-player-content")||g.Fp(b,"html5-endscreen")||b==a.g.getRootNode()?!1:!0};
GS=function(a,b){if(g.jQ(b)&&a.g.app.X){a.g.De();2==a.g.Ca()&&a.g.Oc();var c=g.tL(a.g);!g.T(c,4)||g.T(c,8)||g.T(c,2)||a.ko();return!0}return!1};
HS=function(a,b,c){a.g.isFullscreen()?c<1-b&&g.xL(a.g):c>1+b&&g.xL(a.g)};
JS=function(a,b,c){var d={"aria-label":g.S("YTP_CARDS_BUTTON_ARIA_LABEL"),"aria-owns":"iv-drawer","aria-haspopup":"true","data-tooltip-opaque":String(g.U(a).K)},e={D:"span",J:"ytp-cards-button-icon-default",G:[{D:"div",J:"ytp-cards-button-icon",G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-info-card"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M17,16 L19,16 L19,24 L17,24 L17,16 Z M17,12 L19,12 L19,14 L17,14 L17,12 Z"}}]}]},
{D:"div",J:"ytp-cards-button-title",G:[g.S("YTP_CARDS_BUTTON_INFO")]}]};d={D:"button",W:["ytp-button","ytp-cards-button"],N:d,G:[e,{D:"span",J:"ytp-cards-button-icon-shopping",G:[{D:"div",J:"ytp-cards-button-icon",G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-shopping-card"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",J:"ytp-svg-shadow",N:{d:"M 27.99,18 A 9.99,9.99 0 1 1 8.00,18 9.99,9.99 0 1 1 27.99,18 z"}},{D:"path",J:"ytp-svg-fill",N:{d:"M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 z m -4.68,4 4.53,0 c .35,0 .70,.14 .93,.37 l 5.84,5.84 c .23,.23 .37,.58 .37,.93 0,.35 -0.13,.67 -0.37,.90 L 20.06,24.62 C 19.82,24.86 19.51,25 19.15,25 c -0.35,0 -0.70,-0.14 -0.93,-0.37 L 12.37,18.78 C 12.13,18.54 12,18.20 12,17.84 L 12,13.31 C 12,12.59 12.59,12 13.31,12 z m .96,1.31 c -0.53,0 -0.96,.42 -0.96,.96 0,.53 .42,.96 .96,.96 .53,0 .96,-0.42 .96,-0.96 0,-0.53 -0.42,-0.96 -0.96,-0.96 z",
"fill-opacity":"1"}},{D:"path",J:"ytp-svg-shadow-fill",N:{d:"M 24.61,18.22 18.76,12.37 C 18.53,12.14 18.20,12 17.85,12 H 13.30 C 12.58,12 12,12.58 12,13.30 V 17.85 c 0,.35 .14,.68 .38,.92 l 5.84,5.85 c .23,.23 .55,.37 .91,.37 .35,0 .68,-0.14 .91,-0.38 L 24.61,20.06 C 24.85,19.83 25,19.50 25,19.15 25,18.79 24.85,18.46 24.61,18.22 z M 14.27,15.25 c -0.53,0 -0.97,-0.43 -0.97,-0.97 0,-0.53 .43,-0.97 .97,-0.97 .53,0 .97,.43 .97,.97 0,.53 -0.43,.97 -0.97,.97 z",fill:"#000","fill-opacity":"0.15"}}]}]},{D:"div",
J:"ytp-cards-button-title",G:[g.S("YTP_CARDS_BUTTON_SHOPPING")]}]}]};g.W.call(this,d);this.g=a;this.A=b;this.B=c;this.l=null;this.o=new g.aQ(this,250,!0,100);g.K(this,this.o);a=g.U(this.g);b=g.uL(this.g).Da().width;b=a.o&&480<b;a.K&&g.O(this.B,"ytp-show-cards-title",b);this.hide();this.ea("click",this.C);this.ea("mouseover",this.F);IS(this,!0)};
IS=function(a,b){b?a.l=KS(a.A.l,a.element):(a.l(),a.l=null)};
LS=function(a,b){g.W.call(this,{D:"div",J:"ytp-cards-teaser",G:[{D:"div",J:"ytp-cards-teaser-box"},{D:"div",J:"ytp-cards-teaser-text",G:[{D:"span",J:"ytp-cards-teaser-label",G:["{{text}}"]}]}]});this.l=a;this.B=new g.aQ(this,250,!1,250);g.K(this,this.B);this.I=b;this.g=null;this.H=new g.P(this.dG,300,this);g.K(this,this.H);this.F=new g.P(this.aG,2E3,this);g.K(this,this.F);this.K=new g.yp;this.C=[];this.A=this.o=null;this.M(b.element,"mouseover",this.Ct);this.M(b.element,"mouseout",this.Rf);this.M(a,
"cardsteasershow",this.oH);this.M(a,"cardsteaserhide",this.Ji);this.M(a,"cardstatechange",this.ww);this.M(a,"presentingplayerstatechange",this.ww);this.ea("click",this.KI);this.ea("mouseenter",this.eD)};
zba=function(a,b){a.updateValue("text",b.teaserText);a.element.setAttribute("dir",g.zp(a.K,b.teaserText));a.B.show();a.o=new g.P(function(){g.M(this.l.getRootNode(),"ytp-cards-teaser-shown")},0,a);
a.o.start();IS(a.I,!1);a.g=new g.P(a.Ji,580+b.durationMs,a);a.g.start();a.C.push(a.ea("mouseover",a.Ct,a));a.C.push(a.ea("mouseout",a.Rf,a))};
g.NS=function(a,b,c,d){g.XO.call(this,a);this.priority=b;c&&g.MS(this,c);d&&this.sb(d)};
g.OS=function(a,b,c){a=void 0===a?{}:a;b=void 0===b?[]:b;c=void 0===c?!1:c;b.push("ytp-menuitem");"role"in a||(a.role="menuitem");c||"tabindex"in a||(a.tabindex="0");return{D:c?"a":"div",W:b,N:a,G:[{D:"div",J:"ytp-menuitem-label",G:["{{label}}"]},{D:"div",J:"ytp-menuitem-content",G:["{{content}}"]}]}};
g.MS=function(a,b){a.updateValue("label",b)};
PS=function(a,b,c,d,e){var f={D:"div",J:"ytp-panel"};if(c){var k="ytp-panel-title";var l={D:"div",J:"ytp-panel-header",G:[{D:"button",W:["ytp-button",k],G:[c]}]};if(e){var m="ytp-panel-options";l.G.push({D:"button",W:["ytp-button",m],G:[d]})}f.G=[l]}g.XO.call(this,f);this.V=b;b.ca(this.element);this.fa=!1;c&&(this.M(this.Z[k],"click",this.ma),this.fa=!0,e&&this.M(this.Z[m],"click",e));b.subscribe("size-change",this.ia,this);this.M(a,"fullscreentoggled",this.ia)};
g.QS=function(a,b,c,d,e){b=new g.XO({D:"div",J:"ytp-panel-menu",N:{role:"menu",id:String(void 0===b?null:b)}});PS.call(this,a,b,c,d,e);this.C=b;g.K(this,this.C);this.za=[]};
g.RS=function(a,b,c){if(void 0===c?0:c)a.za.push(b),a.C.element.appendChild(b.element);else{c=g.gb(a.za,b,Aba);if(0<=c)return;c=~c;g.db(a.za,c,0,b);Cd(a.C.element,b.element,c)}b.subscribe("size-change",a.X,a);a.C.O("size-change")};
g.SS=function(a,b){b.unsubscribe("size-change",a.X,a);a.ga()||(g.Xa(a.za,b),a.C.element.removeChild(b.element),a.C.O("size-change"))};
g.TS=function(a){for(var b=g.q(a.za),c=b.next();!c.done;c=b.next())c.value.unsubscribe("size-change",a.X,a);a.za=[];g.Bd(a.C.element);a.C.O("size-change")};
Aba=function(a,b){return b.priority-a.priority};
g.US=function(a,b){xS.call(this,a,{D:"div",W:["ytp-popup",b||null]},100,!0);this.g=[];this.size=new g.ad(0,0);this.B=this.C=null;this.L=this.P=0;this.ea("keydown",this.mD)};
WS=function(a){g.Eh(a.element,a.P||"100%",a.L||"100%");var b=VS(a);b.element.style.width="";b.element.style.height="";b.element.style.maxWidth="100%";b.element.style.maxHeight="100%";b.V.element.style.height="";var c=g.Gh(b.element);c.width+=1;c.height+=1;b.element.style.width=c.width+"px";b.element.style.height=c.height+"px";b.element.style.maxWidth="";b.element.style.maxHeight="";var d=0;b.fa&&(d=g.Gh(b.Z["ytp-panel-header"]).height);b.V.element.style.height=c.height-d+"px";a.size=c};
g.YS=function(a,b){var c=a.g[a.g.length-1];a.g.push(b);XS(a,c,b)};
g.ZS=function(a){var b=a.g.pop(),c=a.g[0];a.g=[c];XS(a,b,c,!0)};
XS=function(a,b,c,d){$S(a);VS(a);g.Fp(c.element,"ytp-panel-animate-back")||g.Fp(c.element,"ytp-panel-animate-forward");b&&(b.unsubscribe("size-change",a.aj,a),b.unsubscribe("back",a.Od,a));c.subscribe("size-change",a.aj,a);c.subscribe("back",a.Od,a);if(a.Na()){g.M(c.element,d?"ytp-panel-animate-back":"ytp-panel-animate-forward");c.ca(a.element);c.focus();a.element.scrollLeft=0;a.element.scrollTop=0;var e=a.size;WS(a);g.Eh(a.element,e);a.C=new g.P(g.B(a.GI,b,c,d),20,a);a.C.start()}else c.ca(a.element),
b&&g.AM(b)};
VS=function(a){return a.g[a.g.length-1]};
$S=function(a){a.C&&g.Qp(a.C);a.B&&g.Qp(a.B)};
aT=function(a){var b=g.OS({"aria-haspopup":"true"});g.NS.call(this,b,a);this.ea("keydown",this.g)};
bT=function(a,b){a.element.setAttribute("aria-haspopup",b)};
cT=function(a,b){var c=g.OS({role:"menuitemcheckbox","aria-checked":"false"});g.NS.call(this,c,b,a,{D:"div",J:"ytp-menuitem-toggle-checkbox"});this.l=!1;this.ea("click",this.I)};
dT=function(a,b){a.l=b;a.element.setAttribute("aria-checked",a.l)};
eT=function(a,b,c){var d={};b&&(d.v=b);c&&(d.list=c);a={name:a,locale:void 0,feature:void 0};for(var e in d)a[e]=d[e];d=g.Jg("/sharing_services",a);g.Wr(d)};
hT=function(a,b,c){g.QS.call(this,a);this.g=a;this.L=b;this.K=c;this.A=new aT(8);g.K(this,this.A);g.RS(this,this.A,!0);this.A.ea("click",this.qF,this);RL(a,this.A.element,this.A,28659);this.o=new aT(7);g.K(this,this.o);g.RS(this,this.o,!0);this.o.ea("click",this.pF,this);RL(a,this.o.element,this.o,28660);this.l=new aT(6);g.K(this,this.l);g.RS(this,this.l,!0);this.l.ea("click",this.nF,this);RL(a,this.l.element,this.l,28658);this.B=new cT(g.S("YTP_LOOP"),5);g.K(this,this.B);g.RS(this,this.B,!0);this.B.ea("click",
this.IF,this);RL(a,this.B.element,this.B,28661);this.P=new g.NS(g.OS({href:"{{href}}",target:"_blank"},void 0,!0),4,g.S("YTP_TROUBLESHOOT_ISSUE"));g.K(this,this.P);g.RS(this,this.P,!0);this.P.ea("click",this.OG,this);this.I=new aT(3);g.K(this,this.I);g.RS(this,this.I,!0);this.I.ea("click",this.mF,this);b=new g.NS(g.OS(),2,g.S("YTP_SHOW_VIDEO_INFO"));g.K(this,b);g.RS(this,b,!0);b.ea("click",this.fH,this);this.H=new g.XO({D:"div",W:["ytp-copytext","ytp-no-contextmenu"],N:{draggable:"false",tabindex:"1"},
G:["{{text}}"]});g.K(this,this.H);this.H.ea("click",this.TE,this);this.ba=new PS(a,this.H);g.K(this,this.ba);this.F=null;b=window.document.queryCommandSupported&&window.document.queryCommandSupported("copy");g.Gx&&g.vc(43)&&(b=!0);g.yz&&!g.vc(41)&&(b=!1);b&&(this.F=new g.W({D:"textarea",J:"ytp-html5-clipboard"}),g.K(this,this.F),this.F.ca(this.element));this.M(a,"loopchange",this.HF);this.M(a,"videodatachange",this.gD);fT(this);a=this.g.Y();gT(this,a)};
iT=function(a,b){if(a.F){var c=a.F.element;c.value=b;c.select();try{var d=window.document.execCommand("copy")}catch(e){}}d?a.K.qb():(a.H.sb(b,"text"),g.YS(a.K,a.ba),DM(a.H.element),a.F&&(a.F=null,fT(a)));return d};
gT=function(a,b){var c=g.U(a.g),d=2!=a.g.Ca()||b.isListed;d=!c.I&&!!b.videoId&&d;"play"!=c.g?c="https://support.google.com/youtube/?p=report_playback":(c={contact_type:"playbackissue",html5:1,plid:b.playbackId,ei:b.eventId,v:b.videoId,p:"movies_playback"},b.Ba&&(c.fmt=Cu(b.Ba)),b.clientPlaybackNonce&&(c.cpn=b.clientPlaybackNonce),b.Fe&&(c.partnerid=b.Fe),c=g.Jg("//support.google.com/googleplay/",c));g.EM(a.l,d&&b.allowEmbed);g.EM(a.A,d);g.EM(a.o,d&&!b.oa);a.P.sb(c,"href")};
fT=function(a){var b=!!a.F;g.MS(a.I,g.S(b?"YTP_COPY_DEBUG_INFO":"YTP_GET_DEBUG_INFO"));bT(a.I,!b);g.MS(a.l,g.S(b?"YTP_EMBED_COPY":"YTP_GET_EMBED"));bT(a.l,!b);g.MS(a.A,g.S(b?"YTP_COPY_VIDEO_URL":"YTP_GET_VIDEO_URL"));bT(a.A,!b);g.MS(a.o,g.S(b?"YTP_COPY_VIDEO_URL_AT_TIME":"YTP_GET_VIDEO_URL_AT_TIME"));bT(a.o,!b)};
jT=function(a,b){a.g.Va(a.l.element,b);a.g.Va(a.A.element,b);a.g.Va(a.o.element,b);a.g.Va(a.B.element,b)};
lT=function(a,b){g.US.call(this,a);this.l=a;this.X=b;this.o=new g.Zs(this);g.K(this,this.o);this.F=null;RL(a,this.element,this,28656);g.M(this.element,"ytp-contextmenu");g.U(a).H&&g.M(this.element,"ytp-dni");kT(this);this.hide()};
kT=function(a){g.at(a.o);"gvn"!=g.U(a.l).g&&a.o.M(g.uL(a.l),"contextmenu",a.SE)};
mT=function(a){a.l.isFullscreen()?g.OL(a.l,a.element,9):a.ca(window.document.body)};
nT=function(a,b,c,d,e,f){g.Zs.call(this);this.g=a;this.F=c;this.B=d;this.l=e;this.C=f;this.A=new g.P(g.B(this.Ft,!1),1E3,this);g.K(this,this.A);this.o="";a=g.B(this.Vo,!1);this.M(b,"mousedown",a);this.M(c.element,"mousedown",a);this.M(b,"keydown",this.wr);this.M(c.element,"keydown",this.wr);this.M(b,"keyup",this.xr);this.M(c.element,"keyup",this.xr)};
pT=function(a,b,c){var d=!1,e=g.U(a.g);if(!e.Ie){switch(b){case 80:c&&!e.P&&(nS(a.l),a.g.Ei(),d=!0);break;case 78:c&&!e.P&&(jS(a.l,tP(),g.S("YTP_NEXT")),a.g.rh(),d=!0);break;case 74:a.g.qc()&&(jS(a.l,g.Y?{D:"div",W:["ytp-icon","ytp-icon-rewind-ten-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z M 16.9,22 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 -0.2,0 -0.4,.1 -0.6,.1 -0.2,0 -0.4,0 -0.6,-0.1 -0.2,-0.1 -0.3,-0.2 -0.5,-0.3 -0.2,-0.1 -0.2,-0.3 -0.3,-0.6 -0.1,-0.3 -0.1,-0.5 -0.1,-0.8 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.9,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
a.g.Md(-10*a.g.dc()),d=!0);break;case 76:a.g.qc()&&(jS(a.l,g.Y?{D:"div",W:["ytp-icon","ytp-icon-forward-ten-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.8,3 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 C 20,21.9 19.8,22 19.6,22 19.4,22 19.2,22 19,21.9 18.8,21.8 18.7,21.7 18.5,21.6 18.3,21.5 18.3,21.3 18.2,21 18.1,20.7 18.1,20.5 18.1,20.2 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.8,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
a.g.Md(10*a.g.dc()),d=!0);break;case 77:a.g.isMuted()?(a.g.De(),lS(a.l,a.g.getVolume(),!1)):(a.g.mute(),lS(a.l,0,!0));d=!0;break;case 75:e.P||(d=!DE(g.tL(a.g)),kS(a.l,d),d?a.g.Oc():a.g.Wb(),d=!0);break;case 190:if(c){if(e.Ga)for(b=a.g.ph(),c=a.g.dc(),e=0;e<b.length-1;e++)b[e]==c&&(d=b[e+1],a.g.Be(d,!0),mS(a.l,d,!1),d=!0)}else a.g.qc()&&(oT(a,1),d=!0);break;case 188:if(c){if(e.Ga)for(b=a.g.ph(),c=a.g.dc(),e=b.length-1;1<=e;e--)b[e]==c&&(d=b[e-1],a.g.Be(d,!0),mS(a.l,d,!0),d=!0)}else a.g.qc()&&(oT(a,
-1),d=!0);break;case 70:aS(a.g)&&(g.xL(a.g),d=!0)}d&&a.B.xb(2,!0)}return d};
rT=function(a,b,c,d){if(g.nL(a.g).l){for(var e=a.g.Gg(),f,k=0;k<g.qT.length;k++){var l=g.qT[k];if(l.option==b){f=l.options;break}}var m;for(k=0;k<f.length;k++)f[k].option==e[b]&&(m=k);if(d)if(c){if(0==m)return!1}else if(m==f.length-1)return!1;d={};d[b]=f[(m+(c?f.length-1:1))%f.length].option;a.g.Lk(d);a.Ft(!0);a.A.start();return!0}return!1};
oT=function(a,b){a.g.qc();if(g.T(g.tL(a.g),4)){var c=a.g.Y().Ba;c&&(c=c.video)&&a.g.Md(b/(c.fps||30))}};
tT=function(a,b){g.W.call(this,{D:"div",J:"ytp-pause-overlay",G:[{D:"div",J:"ytp-suggestions"}]});this.g=a;this.X=b;this.o=new g.Zs(this);g.K(this,this.o);this.H=new g.aQ(this,250,!1,100);g.K(this,this.H);var c=g.U(a);this.B=[];this.l=[];this.C=0;this.ba=c.o&&!c.H;this.R=!1;this.L=new g.W({D:"button",W:["ytp-button","ytp-previous"],N:{"aria-label":g.S("YTP_PREVIOUS")},G:[g.kP()]});g.K(this,this.L);this.L.ca(this.element);this.L.ea("click",this.oD,this);c=g.Gx||g.oh?{style:"will-change: opacity"}:
null;this.V=new sT((0,g.A)(this.zw,this));g.K(this,this.V);this.P=this.A=0;this.K=this.Z["ytp-suggestions"];for(var d=0;16>d;d++){var e=new g.W({D:"a",J:"ytp-suggestion-link",N:{href:"{{link}}",target:"_blank"},G:[{D:"div",J:"ytp-suggestion-image"},{D:"div",J:"ytp-suggestion-overlay",N:c,G:[{D:"div",J:"ytp-suggestion-title",G:["{{title}}"]},{D:"div",J:"ytp-suggestion-author",G:["{{author_and_views}}"]},{D:"div",J:"ytp-suggestion-duration",G:["{{duration}}"]}]}]});g.K(this,e);e.ca(this.K);var f=e.Z["ytp-suggestion-link"];
g.lh(f,"transitionDelay",d/20+"s");this.o.M(f,"click",g.B(this.NE,d));this.B.push(e)}this.I=new g.W({D:"button",W:["ytp-button","ytp-next"],N:{"aria-label":g.S("YTP_NEXT")},G:[g.lP()]});g.K(this,this.I);this.I.ca(this.element);this.I.ea("click",this.nD,this);c={"aria-label":g.S("YTP_CLOSE")};c=new g.W({D:"button",W:["ytp-button","ytp-collapse"],N:c,G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-small-close"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 16 16",width:"100%"},G:[{D:"path",N:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",
fill:"#fff"}}]}]});g.K(this,c);c.ca(this.element);c.ea("click",this.JE,this);this.F=new g.W({D:"button",W:["ytp-button","ytp-expand"],G:[g.S("YTP_MORE_VIDEOS")]});g.K(this,this.F);this.F.ca(this.element);this.F.ea("click",this.LE,this);this.o.M(this.g,"appresize",this.ec);this.o.M(this.g,"fullscreentoggled",this.pD);this.o.M(this.g,"presentingplayerstatechange",this.qD);this.o.M(this.g,"videodatachange",this.rD);this.ec(g.uL(this.g).Da())};
vT=function(a,b){var c=g.Uc(b,a.C-a.l.length*(a.P+8),0);a.V.start(a.A,c,1E3);a.A=c;uT(a)};
uT=function(a){var b=a.A,c=a.C-a.l.length*(a.P+8);g.O(a.element,"ytp-scroll-min",0<=b);g.O(a.element,"ytp-scroll-max",b<=c)};
Bba=function(a){for(var b=g.U(a.g),c=0;c<a.l.length;c++){var d=a.l[c].Eb(),e=a.B[c],f=d.shortViewCount?d.author+" \u2022 "+d.shortViewCount:d.author;e.element.style.display="";e.update({author_and_views:f,duration:d.lengthSeconds?g.iQ(d.lengthSeconds):0,link:d.kk(b),title:d.title});e=e.Z["ytp-suggestion-image"];d=d.kc(b);e.style.backgroundImage=d?"url("+d+")":""}for(;c<a.B.length;c++)a.B[c].element.style.display="none";uT(a)};
sT=function(a){g.J.call(this);this.B=a;this.A=new Zp(0,0,.4,0,.2,1,1,1);this.l=new g.Mp(this.o,window,this);g.K(this,this.l)};
wT=function(a,b,c){var d=b.Eb(c);var e=g.U(a),f=d.kc(e,"default.jpg");g.W.call(this,{D:"a",W:["ytp-video-menu-item","ytp-button"],N:{role:"menuitemradio","aria-label":d.title,href:e.getVideoUrl(d.videoId,b.listId?b.listId.toString():null)},G:[{D:"div",J:"ytp-video-menu-item-index",G:[String(c+1)]},{D:"div",J:"ytp-video-menu-item-now-playing",G:["\u25b6"]},{D:"div",J:"ytp-video-menu-item-thumbnail",N:{style:f?"background-image: url("+f+");":null}},{D:"div",J:"ytp-video-menu-item-title",G:[d.title]},
{D:"div",J:"ytp-video-menu-item-author",G:[d.author]}]});this.g=a;this.Oa=c;this.ea("click",this.l)};
xT=function(a){xS.call(this,a,{D:"div",J:"ytp-playlist-menu",N:{role:"dialog",id:vM()},G:[{D:"div",J:"ytp-playlist-menu-header",G:[{D:"div",J:"ytp-playlist-menu-title",G:[{D:"a",J:"ytp-playlist-menu-title-name",N:{href:"{{playlisturl}}"},G:["{{title}}"]},{D:"button",W:["ytp-playlist-menu-close","ytp-button"],N:{"aria-label":g.S("YTP_CLOSE")},G:[g.pP()]}]},{D:"div",J:"ytp-playlist-menu-subtitle",G:["{{subtitle}}"]}]},{D:"div",J:"ytp-playlist-menu-items",N:{role:"menu"}}]},250);this.M(this.Z["ytp-playlist-menu-close"],
"click",this.qb);this.M(this.Z["ytp-playlist-menu-title-name"],"click",this.qH);this.l=a;this.B=this.F=this.g=null;this.za=this.Z["ytp-playlist-menu-items"];this.C=new g.Zs(this);g.K(this,this.C);this.o=[];this.hide()};
yT=function(a,b){if(a.g!=b)if(a.g&&a.g.unsubscribe("shuffle",a.kl,a),a.g=b,a.F=null,b){b.subscribe("shuffle",a.kl,a);var c=b.author;a.update({title:b.title,subtitle:g.S(c?"YTP_PLAYLIST_AUTHOR_AND_POSITION":"YTP_PLAYLIST_POSITION",{AUTHOR:c,CURRENT_POSITION:String(b.Oa+1),PLAYLIST_LENGTH:String(b.getLength())}),playlisturl:a.l.getVideoUrl(!0)});a.kl()}else a.Na()&&a.hide();else a.g&&a.kl()};
zT=function(a,b,c){var d={title:"{{title}}","aria-owns":String(c.element.id),"aria-haspopup":"true","aria-label":g.S("YTP_PLAYLIST")};g.W.call(this,{D:"button",W:["ytp-playlist-menu-button","ytp-button"],N:d,G:[{D:"div",J:"ytp-playlist-menu-button-icon",G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-playlist"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"m 22.53,21.42 0,6.85 5.66,-3.42 -5.66,-3.42 0,0 z m -11.33,0 9.06,0 0,2.28 -9.06,0 0,-2.28 0,0 z m 0,-9.14 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z m 0,4.57 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z",
fill:"#fff"}}]}]},{D:"div",J:"ytp-playlist-menu-button-text",G:["{{text}}"]}]});this.o=a;this.g=null;this.A=b.l;this.M(a,"videodatachange",this.B);this.M(a,"onPlaylistUpdate",this.B);this.M(a,"presentingplayerstatechange",this.l);this.M(a,"appresize",this.l);this.hide();this.B();g.Ce(this,KS(this.A,this.element));this.ea("click",(0,g.A)(c.Zf,c,this.element,!1))};
AT=function(a,b){g.W.call(this,{D:"button",W:["ytp-replay-button","ytp-button"],N:{title:g.S("YTP_REPLAY")},G:[yP()]});this.g=a;this.M(a,"presentingplayerstatechange",this.o);this.ea("click",this.l,this);var c=g.tL(a);g.EM(this,g.T(c,2));KS(b.l,this.element)};
BT=function(a,b){var c=vM();c={D:"div",J:"ytp-share-panel",N:{id:vM(),role:"dialog","aria-labelledby":c},G:[{D:"button",W:["ytp-share-panel-close","ytp-button"],N:{title:g.S("YTP_CLOSE")},G:[g.pP()]},{D:"div",J:"ytp-share-panel-inner-content",G:[{D:"div",J:"ytp-share-panel-title",N:{id:c},G:[g.S("YTP_SHARE")]},{D:"a",W:["ytp-share-panel-link","ytp-no-contextmenu"],N:{href:"{{link}}",target:"_blank",title:g.S("YTP_SHARE_LINK"),"aria-label":g.S("YTP_SHARE_LINK")},G:["{{linkText}}"]},{D:"label",J:"ytp-share-panel-include-playlist",
G:[{D:"input",J:"ytp-share-panel-include-playlist-checkbox",N:{type:"checkbox",checked:!0}},g.S("YTP_SHARE_WITH_PLAYLIST_2")]},{D:"div",J:"ytp-share-panel-loading-spinner",G:[dS()]},{D:"div",J:"ytp-share-panel-service-buttons",G:["{{buttons}}"]},{D:"div",J:"ytp-share-panel-error",G:[g.S("YTP_SHARE_PANEL_ERROR")]}]}]};xS.call(this,a,c,250);this.g=a;this.l=b.l;this.o=[];this.L=this.Z["ytp-share-panel-inner-content"];this.C=this.Z["ytp-share-panel-close"];this.M(this.C,"click",this.qb);g.Ce(this,KS(this.l,
this.C));this.F=this.Z["ytp-share-panel-include-playlist-checkbox"];this.M(this.F,"click",this.Ht);this.B=this.Z["ytp-share-panel-link"];g.Ce(this,KS(this.l,this.B));this.ea("click",this.rG);this.M(a,"videoplayerreset",this.hide);this.M(a,"fullscreentoggled",this.xD);this.hide()};
Cba=function(a){switch(a){case "facebook":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-share-facebook"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z m -1.9,3.8 0,5.7 -3.8,0 c -1.04,0 -1.9,.84 -1.9,1.9 l 0,3.8 5.7,0 0,5.7 -5.7,0 0,13.3 -5.7,0 0,-13.3 -3.8,0 0,-5.7 3.8,0 0,-4.75 c 0,-3.67 2.97,-6.65 6.65,-6.65 l 4.75,0 z",
fill:"#39579b"}}]};case "googleplus":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-share-googleplus"]}:{D:"svg",N:{height:"100%",version:"1.0",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M34.3,0H3.7C1.7,0,0,1.7,0,3.7v30.5c0,2,1.7,3.7,3.7,3.7h30.5c2,0,3.7-1.7,3.7-3.7V3.7C38,1.7,36.3,0,34.3,0z M13.3,28.5c-5.2,0-9.5-4.3-9.5-9.5c0-5.2,4.3-9.5,9.5-9.5c2.6,0,4.7,.9,6.4,2.5l-2.7,2.7c-1-0.9-2.2-1.4-3.6-1.4 c-3.1,0-5.6,2.6-5.6,5.7s2.5,5.7,5.6,5.7c2.8,0,4.7-1.6,5.1-3.8h-5.1v-3.6h8.9c0.1,.6,.2,1.3,.2,2C22.4,24.6,18.8,28.5,13.3,28.5 z M34.2,19.6H31v3.2h-2.2v-3.2h-3.2v-2.2h3.2v-3.2H31v3.2h3.2V19.6z",
fill:"#dc4537"}}]};case "twitter":return g.Y?{D:"div",W:["ytp-icon","ytp-icon-share-twitter"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z M 29.84,13.92 C 29.72,22.70 24.12,28.71 15.74,29.08 12.28,29.24 9.78,28.12 7.6,26.75 c 2.55,.40 5.71,-0.60 7.41,-2.06 -2.50,-0.24 -3.98,-1.52 -4.68,-3.56 .72,.12 1.48,.09 2.17,-0.05 -2.26,-0.76 -3.86,-2.15 -3.95,-5.07 .63,.28 1.29,.56 2.17,.60 C 9.03,15.64 7.79,12.13 9.21,9.80 c 2.50,2.75 5.52,4.99 10.47,5.30 -1.24,-5.31 5.81,-8.19 8.74,-4.62 1.24,-0.23 2.26,-0.71 3.23,-1.22 -0.39,1.23 -1.17,2.09 -2.11,2.79 1.03,-0.14 1.95,-0.38 2.73,-0.77 -0.47,.99 -1.53,1.9 -2.45,2.66 l 0,0 z",
fill:"#01abf0"}}]};default:return null}};
CT=function(a){for(var b=g.q(a.o),c=b.next();!c.done;c=b.next())c=c.value,g.AM(c),g.De(c);a.o=[]};
DT=function(a,b,c,d){g.W.call(this,{D:"button",W:["ytp-button","ytp-share-button"],N:{title:g.S("YTP_SHARE"),"aria-haspopup":"true","aria-owns":c.element.id,"data-tooltip-opaque":String(g.U(a).K)},G:[{D:"div",J:"ytp-share-icon",G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-sharrow"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 20.20,14.19 0,-4.45 7.79,7.79 -7.79,7.79 0,-4.56 C 16.27,20.69 12.10,21.81 9.34,24.76 8.80,25.13 7.60,27.29 8.12,25.65 9.08,21.32 11.80,17.18 15.98,15.38 c 1.33,-0.60 2.76,-0.98 4.21,-1.19 z"}}]}]},
{D:"div",J:"ytp-share-title",G:["{{share}}"]}]});this.g=a;this.o=d;this.F=c;this.B=this.l=!1;RL(a,this.element,this,28664);this.ea("click",this.C);this.M(a,"videodatachange",this.A);this.M(a,"appresize",this.A);this.A();g.Ce(this,KS(b.l,this.element))};
ET=function(a,b){g.W.call(this,{D:"button",W:["ytp-airplay-button","ytp-button"],N:{title:g.S("YTP_AIRPLAY")},G:["{{icon}}"]});this.g=a;this.ea("click",this.o);this.M(a,"airplayactivechange",this.l);this.M(a,"airplayavailabilitychange",this.l);this.l();g.Ce(this,KS(b.l,this.element))};
FT=function(a,b,c,d,e){var f=b.so/b.rows,k=Math.min(c/(b.to/b.columns),d/f),l=b.to*k,m=b.so*k;l=Math.floor(l/b.columns)*b.columns;m=Math.floor(m/b.rows)*b.rows;var n=l/b.columns,p=m/b.rows,u=-b.tq*n,v=-b.Sb*p;e&&45>=f&&(p-=1/k);n-=2/k;a=a.style;a.width=n+"px";a.height=p+"px";e||(d=(d-p)/2,c=(c-n)/2,a.marginTop=Math.floor(d)+"px",a.marginBottom=Math.ceil(d)+"px",a.marginLeft=Math.floor(c)+"px",a.marginRight=Math.ceil(c)+"px");a.background="url("+b.url+") "+u+"px "+v+"px/"+l+"px "+m+"px";if(e)return new g.ad(n,
p)};
GT=function(a,b){g.XO.call(this,{D:"div",J:"ytp-storyboard",G:[{D:"div",J:"ytp-storyboard-filmstrip",G:[{D:"div",J:"ytp-storyboard-thumbnail"}]},{D:"div",J:"ytp-storyboard-lens",G:[{D:"div",J:"ytp-storyboard-lens-thumbnail"},{D:"div",J:"ytp-storyboard-lens-timestamp-wrapper",G:[{D:"span",J:"ytp-storyboard-lens-timestamp"}]}]}]});this.l=a;this.V=b.l;this.L=new g.Cl(this.Yz,250,this);g.K(this,this.L);this.H=g.uL(a).Da().width;this.g=this.Z["ytp-storyboard-filmstrip"];this.ba=this.Z["ytp-storyboard-lens"];
this.fa=this.Z["ytp-storyboard-lens-thumbnail"];this.ia=this.Z["ytp-storyboard-lens-timestamp"];this.X=this.Z["ytp-storyboard-thumbnail"];g.Dd(this.X);this.I=0;this.P=!1;this.K=this.A=this.o=window.NaN;this.kb=this.B=null;this.C=new g.Zs(this);g.K(this,this.C);this.F=new g.aQ(this,100);g.K(this,this.F);this.M(this.l,"appresize",this.nz);this.M(this.l,"presentingplayerstatechange",this.HB)};
HT=function(a,b){var c=!!a.kb;c&&a.kb.unsubscribe("l",a.Bl,a);a.kb=b&&g.JD(b);a.P=!!b&&b.oa;a.kb?(c||(a.C.M(a.l,"videodatachange",a.IB),a.C.M(a.l,"progresssync",a.Jk),a.C.M(a.l,"videoplayerreset",a.Jk)),a.kb.subscribe("l",a.Bl,a),a.K=window.NaN,a.o=window.NaN,a.A=window.NaN,a.Jk(),a.F.show(200)):(c&&g.at(a.C),a.L.stop(),g.Qt(a.I),a.F.hide(),a.F.stop())};
IT=function(a,b,c,d){var e=a.X.cloneNode(!1);a=XB(a.kb,b,c);FT(e,a,c,d);return e};
JT=function(a){g.W.call(this,{D:"div",J:"ytp-storyboard-framepreview",G:[{D:"div",J:"ytp-storyboard-framepreview-img"}]});this.B=this.Z["ytp-storyboard-framepreview-img"];this.g=a;this.kb=null;this.A=window.NaN;this.l=new g.Zs(this);g.K(this,this.l);this.o=new g.aQ(this,100);g.K(this,this.o);this.M(this.g,"presentingplayerstatechange",this.JB)};
LT=function(a,b){var c=!!a.kb;a.kb=b&&g.JD(b);a.kb?(c||(a.l.M(a.g,"videodatachange",a.LB),a.l.M(a.g,"progresssync",a.KB),a.l.M(a.g,"appresize",a.oz)),a.A=window.NaN,KT(a),a.o.show(200)):(c&&g.at(a.l),a.o.hide(),a.o.stop())};
KT=function(a){var b=a.g.getCurrentTime(),c=g.uL(a.g).Da(),d=WB(a.kb,c.width);b=a.kb.g[d].Ii(b);b!=a.A&&(a.A=b,ZB(a.kb,b,c.width),b=XB(a.kb,b,c.width),FT(a.B,b,c.width,c.height))};
NT=function(a,b){g.W.call(this,{D:"button",W:["ytp-fullscreen-button","ytp-button"],N:{title:"{{title}}"},G:["{{icon}}"]});this.l=a;this.B=b;this.g=null;this.o=KS(b.l,this.element);this.A=new g.P(this.ry,2E3,this);g.K(this,this.A);this.M(a,"fullscreentoggled",this.Jv);this.M(a,"presentingplayerstatechange",this.Et);this.ea("click",this.kD);if(Cs()){var c=g.uL(this.l);this.M(c,Gs(),this.qu);this.M(c,Fs(window.document),this.lD)}g.U(a).ma||MT(this);this.Et();this.Jv(a.isFullscreen())};
MT=function(a){if(!a.g){var b=g.S(null!=Bs(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],window.document.body)?"YTP_FULLSCREEN_GENERIC_ERROR":"YTP_FULLSCREEN_UNSUPPORTED_ERROR").split(/\$(BEGIN|END)_LINK/);a.g=new xS(a.l,{D:"div",W:["ytp-popup","ytp-generic-popup"],N:{role:"alert",tabindex:"0"},G:[b[0],{D:"a",N:{href:"https://support.google.com/youtube/answer/6276924",target:"_blank"},G:[b[2]]},b[4]]},100,!0);a.g.hide();g.K(a,a.g);a.g.subscribe("show",
(0,g.A)(a.B.sm,a.B,a.g));g.OL(a.l,a.g.element,4);a.element.setAttribute("aria-disabled",!0);a.element.setAttribute("aria-haspopup",!0);a.o();a.o=null}};
OT=function(a){var b={D:"div",J:"ytp-multicam-menu",N:{role:"dialog"},G:[{D:"div",J:"ytp-multicam-menu-header",G:[{D:"div",J:"ytp-multicam-menu-title",G:[g.S("YTP_SWITCH_CAMERA"),{D:"button",W:["ytp-multicam-menu-close","ytp-button"],N:{"aria-label":g.S("YTP_CLOSE")},G:[g.pP()]}]}]},{D:"div",J:"ytp-multicam-menu-items"}]};xS.call(this,a,b,250);this.o=new g.Zs(this);g.K(this,this.o);this.M(this.Z["ytp-multicam-menu-close"],"click",this.qb);this.g=a;this.za=this.Z["ytp-multicam-menu-items"];this.l=
[];this.hide()};
PT=function(a,b,c){g.W.call(this,{D:"button",W:["ytp-multicam-button","ytp-button"],N:{title:g.S("YTP_SWITCH_CAMERA"),"aria-haspopup":"true","data-preview":"{{preview}}","data-tooltip-text":"{{text}}"},G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-switch-camera"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M 26,10 22.83,10 21,8 15,8 13.17,10 10,10 c -1.1,0 -2,.9 -2,2 l 0,12 c 0,1.1 .9,2 2,2 l 16,0 c 1.1,0 2,-0.9 2,-2 l 0,-12 c 0,-1.1 -0.9,-2 -2,-2 l 0,0 z m -5,11.5 0,-2.5 -6,0 0,2.5 -3.5,-3.5 3.5,-3.5 0,2.5 6,0 0,-2.5 3.5,3.5 -3.5,3.5 0,0 z",
fill:"#fff"}}]}]});this.g=a;this.A=!1;this.l=b.l;this.B=new g.P(this.F,400,this);g.K(this,this.B);this.ea("click",(0,g.A)(c.Zf,c,this.element,!1));this.M(a,"presentingplayerstatechange",g.B(this.o,!1));this.M(a,"videodatachange",this.C);this.o(!0);g.Ce(this,KS(this.l,this.element))};
QT=function(){g.J.call(this);this.B=null;this.A=this.g=0;this.o=new g.Mp(this.l,null,this);g.K(this,this.o)};
RT=function(a,b){if("path"==b.D)return b.N.d;if(b.G)for(var c=0;c<b.G.length;c++){var d=b.G[c];if(d&&!g.w(d)&&(d=RT(a,d)))return d}};
VT=function(a,b,c){c=RT(a,c);var d=b.getElementsByTagName("path")[0],e=d.getAttribute("d");if(d.getAttribute("id")){var f=vM();b=b.getElementsByTagName("use");for(var k=0;k<b.length;k++)b[k].setAttributeNS("http://www.w3.org/1999/xlink","href","#"+f);d.setAttribute("id",f)}var l=ST(e),m=ST(c);TT(a,function(a){d.setAttribute("d",UT(l,m,a))},200)};
TT=function(a,b,c){a.B=b;a.A=g.It();a.g=c;a.l()};
ST=function(a){var b=[];a=a.match(Dba);for(var c=0;c<a.length;c++){var d=(0,window.parseFloat)(a[c]);b.push((0,window.isNaN)(d)?a[c]:d)}return b};
UT=function(a,b,c){for(var d="",e=0;e<a.length;e++){var f=a[e];d=g.ua(f)?d+(f+(b[e]-f)*c):d+f}return d};
XT=function(a,b){var c=g.U(a);g.W.call(this,{D:"button",W:["ytp-mute-button","ytp-button"],N:c.U?{title:"{{title}}"}:{"aria-disabled":"true","aria-haspopup":"true"},G:["{{icon}}"]});this.updateValue("icon",EP());this.g=a;this.ba=b.l;this.H=this.K=this.I=this.P=window.NaN;this.C=[];this.B=[];this.F=this.o=!1;g.U(this.g).X||(this.l=new g.xM({D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"defs",G:[{D:"clipPath",N:{id:"ytp-svg-volume-animation-mask"},G:[{D:"path",N:{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}},
{D:"path",N:{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}},{D:"path",J:"ytp-svg-volume-animation-mover",N:{d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"}}]},{D:"clipPath",N:{id:"ytp-svg-volume-animation-slash-mask"},G:[{D:"path",J:"ytp-svg-volume-animation-mover",N:{d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"}}]}]},{D:"path",Fa:!0,W:["ytp-svg-fill","ytp-svg-volume-animation-speaker"],N:{"clip-path":"url(#ytp-svg-volume-animation-mask)",d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",
fill:"#fff"}},{D:"path",Fa:!0,W:["ytp-svg-fill","ytp-svg-volume-animation-hider"],N:{"clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff"}}]}),g.K(this,this.l),this.R=this.l.Z["ytp-svg-volume-animation-speaker"],this.ma=this.R.getAttribute("d"),this.C=g.id("ytp-svg-volume-animation-mover",this.l.element),this.B=g.id("ytp-svg-volume-animation-hider",this.l.element));this.A=null;this.V=new QT;g.K(this,this.V);this.L=new QT;g.K(this,this.L);
this.ea("click",this.fa);this.M(a,"appresize",this.Fc);this.M(a,"onVolumeChange",this.ia);var d=null;c.U?g.Ce(this,KS(b.l,this.element)):(c=g.S("YTP_VOLUME_UNSUPPORTED_ERROR").split(/\$(BEGIN|END)_LINK/),d=new xS(a,{D:"span",W:["ytp-popup","ytp-generic-popup"],N:{tabindex:"0"},G:[c[0],{D:"a",N:{href:"https://support.google.com/youtube/?p=noaudio",target:"_blank"},G:[c[2]]},c[4]]},100,!0),g.K(this,d),d.hide(),d.subscribe("show",(0,g.A)(b.sm,b,d)),g.OL(a,d.element,4));this.X=d;RL(a,this.element,this,
28662);this.Fc(g.uL(a).Da());WT(this,a.getVolume(),a.isMuted())};
WT=function(a,b,c){var d=c?0:b/100,e=g.U(a.g);if(e.X)d=0==d?EP():0<d&&.5>d?DP():CP(),d!=a.A&&(a.updateValue("icon",d),a.A=d);else{b=0==d?1:50<b?1:0;if(a.I!=b){var f=a.P;(0,window.isNaN)(f)?ZT(a,b):TT(a.V,(0,g.A)(function(a){ZT(this,f+(this.I-f)*a)},a),250);
a.I=b}d=0==d?1:0;if(a.H!=d){var k=a.K;(0,window.isNaN)(k)?$T(a,d):TT(a.L,(0,g.A)(function(a){$T(this,k+(this.H-k)*a)},a),250);
a.H=d}}e.U&&(a.updateValue("title",c?g.S("YTP_UNMUTE"):g.S("YTP_MUTE")),aU(a.ba))};
ZT=function(a,b){a.P=b;var c=a.ma;b&&(c+=UT(Eba,Fba,b));a.R.setAttribute("d",c)};
$T=function(a,b){a.K=b;for(var c=20*b,d=0;d<a.C.length;d++)a.C[d].setAttribute("transform","translate("+c+", "+c+")");var e;1==b?e=EP():e=a.l;for(c=0;c<a.B.length;c++)a.B[c].style.display=0==b?"none":"";e!=a.A&&(a.updateValue("icon",e),a.A=e)};
bU=function(a,b){g.W.call(this,{D:"button",W:["ytp-pip-button","ytp-button"],N:{title:g.S("YTP_PIP")},G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-pip"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z",fill:"#fff"}}]}]});
this.g=a;this.ea("click",this.l);g.Ce(this,KS(b.l,this.element))};
dU=function(a,b){g.W.call(this,{D:"button",W:["ytp-play-button","ytp-button"],N:{title:"{{title}}","aria-label":"{{label}}"},G:["{{icon}}"]});this.l=a;this.o=null;this.A=b.l;this.g=null;this.B=new QT;g.K(this,this.B);this.M(a,"fullscreentoggled",this.C);this.M(a,"presentingplayerstatechange",this.F);this.M(a,"videodatachange",this.C);cU(this,g.tL(a));this.ea("click",this.H,this)};
eU=function(a){switch(a){case 1:return wP();case 2:return vP();case 3:return yP();case 4:return BP();default:return null}};
cU=function(a,b){var c=g.PD(a.l.Y()),d=!1;if(DE(b))var e=c?4:2;else g.T(b,2)?(e=3,d=c):e=1;a.element.disabled=d;if(a.o!=e){switch(e){case 2:var f=g.S("YTP_PAUSE");break;case 3:f=g.S("YTP_REPLAY");break;case 1:f=g.S("YTP_PLAY");break;case 4:f=g.S("YTP_STOP")}3==e?(a.g||(a.g=KS(a.A,a.element)),a.update({title:f,label:null,icon:eU(e)})):(a.g&&(a.g(),a.g=null),a.update({title:null,label:f}),(c=eU(e))&&a.o&&3!=a.o&&!g.U(a.l).X?VT(a.B,a.element,c):a.updateValue("icon",c));aU(a.A);a.o=e}};
gU=function(a,b,c){if(c){var d="ytp-next-button";var e=tP()}else d="ytp-prev-button",e=xP();g.W.call(this,{D:"a",W:[d,"ytp-button"],N:{title:"{{title}}",href:"{{url}}","data-preview":"{{preview}}","data-tooltip-text":"{{text}}","data-duration":"{{duration}}","aria-disabled":"{{disabled}}","data-next":"{{next}}","data-prev":"{{prev}}"},G:[e]});this.g=a;this.K=b.l;this.o=c;this.l=this.C=null;this.I=!1;this.F=this.H=this.A=null;this.B=!1;this.M(a,"fullscreentoggled",this.sh);this.M(a,"videodatachange",
this.sh);this.M(a,"onPlaylistUpdate",this.sh);this.o||this.M(a,"appresize",this.Fc);this.M(a,"mdxpreviousnextchange",function(){fU(this);this.Fc()});
this.sh()};
hU=function(a){a.l&&a.l.unsubscribe("shuffle",a.sh,a)};
iU=function(a){return!!a.l&&!a.o&&!!a.C&&!a.C.oa&&3<=a.g.getCurrentTime()&&2!=a.g.Ca()};
jU=function(a){var b=g.sL(g.nL(a.g));return b?a.o?b.hasNext():b.se():!1};
fU=function(a){var b={duration:null,preview:null,text:null,title:null,url:null},c=g.U(a.g),d=vL(a.g),e=a.o&&g.PL(a.g),f=jU(a);if(a.B)b.title=g.S("YTP_REPLAY");else if(d){var k=null;a.l&&(k=a.l.Eb(a.o?RF(a.l):SF(a.l)));if(k){if(k.videoId){var l=a.l.listId;b.url=c.getVideoUrl(k.videoId,l?l.toString():void 0)}b.text=k.title;b.duration=k.lengthSeconds?g.iQ(k.lengthSeconds):null;b.preview=k.kc(c,"mqdefault.jpg")}b.title=g.S(a.o?"YTP_NEXT":"YTP_PREVIOUS")}else e&&(a.C.suggestions&&a.C.suggestions.length&&
(k=g.QR(a.C.suggestions[0]),b.url=k.kk(c),b.text=k.title,b.duration=k instanceof g.lD?g.iQ(k.lengthSeconds):null,b.preview=k.kc(c,"mqdefault.jpg")),b.title=g.S("YTP_NEXT"));b.disabled=!e&&!d&&!f;a.update(b);a.I=!!b.url;e||d||a.B||f?a.A||(a.A=KS(a.K,a.element),a.H=a.ea("click",a.tD,a)):a.A&&(a.A(),a.A=null,a.Pa(a.H),a.H=null);aU(a.K)};
kU=function(){this.l=this.position=this.A=this.g=this.B=this.o=this.width=window.NaN};
mU=function(a,b){g.XO.call(this,{D:"div",J:"ytp-progress-bar-container",N:{"aria-disabled":"true"},G:[{D:"div",W:["ytp-progress-bar",g.U(a).l?"ytp-mobile":""],N:{tabindex:"0",role:"slider","aria-label":g.S("YTP_SEEK_SLIDER"),"aria-valuemin":"{{ariamin}}","aria-valuemax":"{{ariamax}}","aria-valuenow":"{{arianow}}","aria-valuetext":"{{arianowtext}}"},G:[{D:"div",J:"ytp-progress-bar-padding"},{D:"div",J:"ytp-progress-list",G:[{D:"div",W:["ytp-play-progress","ytp-swatch-background-color"]},{D:"div",J:"ytp-load-progress"},
{D:"div",J:"ytp-hover-progress"},{D:"div",J:"ytp-clip-start-exclude"},{D:"div",J:"ytp-clip-end-exclude"},{D:"div",J:"ytp-ad-progress-list"},{D:"div",J:"ytp-marker-crenellation-list"},{D:"div",J:"ytp-marker-progress-list"}]},{D:"div",J:"ytp-scrubber-container",G:[{D:"div",W:["ytp-scrubber-button","ytp-swatch-background-color"],G:[{D:"div",J:"ytp-scrubber-pull-indicator"}]}]}]},{D:"div",J:"ytp-bound-time-left",G:["{{boundTimeLeft}}"]},{D:"div",J:"ytp-bound-time-right",G:["{{boundTimeRight}}"]},{D:"div",
J:"ytp-clip-start",N:{title:g.S("YTP_WATCH_ALL")},G:["{{clipstarticon}}"]},{D:"div",J:"ytp-clip-end",N:{title:g.S("YTP_WATCH_ALL")},G:["{{clipendicon}}"]}]});this.updateValue("clipstarticon",oP());this.updateValue("clipendicon",nP());this.l=a;this.Ga=b.l;this.Ma=!1;this.B=this.Ab=0;this.V=1;this.Mb=this.F=0;this.o=null;this.Ua=!1;this.I=this.ma=0;this.Xb=this.Z["ytp-ad-progress-list"];this.Bc=this.Z["ytp-marker-progress-list"];this.Ta=this.Z["ytp-marker-crenellation-list"];this.P={};this.ia={};this.K=
window.Infinity;var c=b.l;this.X=this.Z["ytp-clip-end"];g.Ce(this,KS(c,this.X));this.sa=new g.ct(this.X,!0);g.K(this,this.sa);this.sa.subscribe("hoverstart",this.iu,this);this.sa.subscribe("hoverend",this.hu,this);this.M(this.X,"click",this.jl);this.Ra=this.Z["ytp-clip-end-exclude"];this.Ec=this.Z["ytp-clip-start-exclude"];this.L=0;this.ba=this.Z["ytp-clip-start"];g.Ce(this,KS(c,this.ba));this.ya=new g.ct(this.ba,!0);g.K(this,this.ya);this.ya.subscribe("hoverstart",this.iu,this);this.ya.subscribe("hoverend",
this.hu,this);this.M(this.ba,"click",this.jl);this.bb=this.Z["ytp-load-progress"];this.fa=0;this.Gc=this.Z["ytp-play-progress"];this.Ya=this.Z["ytp-hover-progress"];this.C=0;this.zb=this.Z["ytp-progress-bar"];this.A=null;this.Sc=this.Z["ytp-scrubber-button"];this.Tc=this.Z["ytp-scrubber-container"];this.wa=new g.Yc;this.Wa=new kU;this.g=new xQ(0,0);this.H=this.Ka=!1;this.Za=null;this.M(a,"presentingplayerstatechange",this.jz);this.M(a,"videodatachange",this.Gt);this.M(a,"videoplayerreset",this.iz);
this.M(a,"cuerangesadded",this.yw);this.M(a,"cuerangesremoved",this.kI);this.M(a,"cuerangemarkersupdated",this.yw);this.M(a,"onPlaybackQualityChange",this.mz);lU(this,a.Y(),!0)};
qU=function(a){if(a.B){var b=a.l.Qf(),c=new xQ(b.seekableStart,b.seekableEnd),d=zQ(c,b.loaded,0);b=zQ(c,b.current,0);var e=a.g.l!=c.l||a.g.g!=c.g;a.g=c;nU(a,b,d);e&&oU(a);pU(a)}};
lU=function(a,b,c){c=void 0===c?!1:c;var d=!!b&&b.Nc();a.Ka=d&&b.Ne;rU(a,a.l.qc());c&&(d?(c=b.clipEnd,a.L=b.clipStart,a.K=c,sU(a),nU(a,a.C,a.fa)):a.jl(),b=a.Ga,1==b.g&&b.Yd());qU(a)};
tU=function(a){return!!a&&a.Nc()&&!!a.Ba&&a.Ba.video.isAccelerated&&a.Ba.video.o};
uU=function(a,b){a.Ua=b;g.O(a.bb,"ytp-fast-load",b)};
vU=function(a,b,c,d){b=g.Uc(b,0,a.H?60:40);a.F=b;var e=a.V,f=Math.max(a.g.getLength()/a.B,1);a.V=b/(a.H?60:40)*(f-1)+1;b=a.B*a.V;a.I=g.Uc(d*b-c,0,b-a.B);e!=a.V&&oU(a)};
oU=function(a){var b=wU(a),c=-b.o/b.g,d=(-b.o+b.width)/b.g,e=g.Gd(a.Ta),f=0;if(a.F>.2*(a.H?60:40)){var k=c*(a.g.getLength()/60),l=d*(a.g.getLength()/60);for(k=Math.ceil(k);k<l;k++){var m=e[f];m||(m=g.yd("DIV"),a.Ta.appendChild(m));f++;m.className=0==k%60?"ytp-60m-progress":0==k%30?"ytp-30m-progress":0==k%15?"ytp-15m-progress":"ytp-1m-progress";var n=(60*k/a.g.getLength()-c)*b.g;m.style.left=n+"px"}}b=a.Ka?a.g.g:0;a.update({boundTimeLeft:g.iQ(yQ(a.g,c)-b),boundTimeRight:g.iQ(yQ(a.g,d)-b)});for(c=e.length-
1;c>=f;c--)g.Dd(e[c]);a.element.style.height=a.F+(a.H?8:5)+"px";a.O("height-change",a.F);a.Sc.style.height=a.F+(a.H?20:13)+"px";for(var p in a.P)xU(a,a.P[p],a.ia[p]);sU(a);nU(a,a.C,a.fa)};
wU=function(a){var b=a.wa.x,c=a.B*a.V;b=g.Uc(b,0,a.B);a.Wa.update(b,a.B,-a.I,-(c-a.I-a.B));return a.Wa};
nU=function(a,b,c){a.C=b;a.fa=c;var d=wU(a),e=a.g.g,f=yQ(a.g,a.C);a.update({ariamin:Math.floor(a.g.l),ariamax:Math.floor(e),arianow:Math.floor(f),arianowtext:g.S("YTP_PROGRESS_LABEL_2",{PLAY_PROGRESS:g.iQ(f),DURATION:g.iQ(e)})});e=zQ(a.g,a.L,0);var k=zQ(a.g,a.K,1);f=g.Uc(b,e,k);c=a.Ua?1:g.Uc(c,e,k);g.lh(a.Tc,"transform","translateX("+(b*d.g+d.o)+"px)");yU(a,a.Gc,d,e,f);yU(a,a.bb,d,e,c)};
yU=function(a,b,c,d,e,f){b.style.left=Math.max(d*c.g+c.o,0)+"px";d=g.Uc((e-d)*c.g+c.o,0,c.width);(void 0===f?0:f)||g.U(a.l).l?b.style.width=d+"px":g.lh(b,"transform","scalex("+(c.width?d/c.width:0)+")")};
sU=function(a){var b=a.L>a.g.l,c=0<a.g.g&&a.K<a.g.g;g.O(a.element,"ytp-clip-start-enabled",b);g.O(a.element,"ytp-clip-end-enabled",c);b=b?zQ(a.g,a.L,0):0;c=c?zQ(a.g,a.K,1):1;a.ba.style.left=Math.round(1E3*b)/10+"%";a.X.style.left=Math.round(1E3*c)/10+"%";a.Ec.style.width=Math.round(1E3*b)/10+"%";a.Ra.style.left=Math.round(1E3*c)/10+"%";a.Ra.style.width=Math.round(1E3*(1-c))/10+"%"};
pU=function(a){var b=wU(a);yU(a,a.Ya,b,a.C,b.l);g.O(a.Ya,"ytp-hover-progress-light",b.l>a.C)};
xU=function(a,b,c){var d=wU(a),e=zQ(a.g,b.start/1E3,0),f=GF(b)/d.width;switch(b.style){case "ytp-chapter-marker":var k=e+f/2;e-=f/2;break;default:k=zQ(a.g,b.end/1E3,1),f!=Number.POSITIVE_INFINITY&&(e=g.Uc(e,0,k-f)),k=Math.min(k,e+f),b.color&&(c.style.background=b.color)}yU(a,c,d,e,k,!0);c.className=b.style};
zU=function(a,b){var c=b.getId();a.P[c]==b&&(g.Dd(a.ia[c]),delete a.P[c],delete a.ia[c])};
rU=function(a,b){b?a.A||(a.element.removeAttribute("aria-disabled"),a.A=new g.ct(a.zb,!0),a.A.subscribe("hovermove",a.CG,a),a.A.subscribe("hoverend",a.BG,a),a.A.subscribe("dragstart",a.AG,a),a.A.subscribe("dragmove",a.EG,a),a.A.subscribe("dragend",a.DG,a),a.Za=a.ea("keydown",a.uD)):a.A&&(a.element.setAttribute("aria-disabled",!0),a.Pa(a.Za),a.A.cancel(),a.A.dispose(),a.A=null)};
AU=function(a,b){cT.call(this,g.S("YTP_ANNOTATIONS"),5);this.A=b;this.o=a;this.g=!1;this.M(a,"videodatachange",this.B);this.M(a,"onApiChange",this.B);this.subscribe("select",this.C,this);this.B()};
g.BU=function(a,b,c,d,e,f){var k=g.OS({"aria-haspopup":"true"});g.NS.call(this,k,b,a);this.o=d;this.H=!1;this.C=null;this.l={};this.B=new g.QS(c,void 0,a,e,f);g.K(this,this.B);this.ea("keydown",this.vD);this.ea("click",this.open)};
g.CU=function(a,b){g.TS(a.B);for(var c={},d=!1,e=0;e<b.length;e++){var f=b[e],k=a.l[f],l=f==a.C;l&&(d=!0);k&&k.priority==-e?(l=a,g.MS(l.l[f],l.be(f,!0)),delete a.l[f]):(k=new g.NS({D:"div",W:["ytp-menuitem"],N:{tabindex:"0",role:"menuitemradio","aria-checked":l?"true":void 0},G:[{D:"div",W:["ytp-menuitem-label"],G:["{{label}}"]}]},-e,a.be(f,!0)),k.ea("click",(0,g.A)(a.wD,a,f)));c[f]=k;g.RS(a.B,k,!0)}d||(a.C=null);for(var m in a.l)a.l[m].dispose();a.l=c};
DU=function(a,b){g.BU.call(this,g.S("YTP_AUDIO_TRACK_TITLE"),2,a,b);this.g=a;this.I=new g.W({D:"div",G:[{D:"span",G:[g.S("YTP_AUDIO_TRACK_TITLE")]},{D:"span",J:"ytp-menuitem-label-count",G:["{{content}}"]}]});g.MS(this,this.I);this.K={};this.M(a,"videodatachange",this.F);this.M(a,"onPlaybackAudioChange",this.F);this.F()};
EU=function(a,b){cT.call(this,g.S("YTP_AUTOPLAY"),6);this.C=b;this.g=a;this.A=!1;this.o=[];this.M(a,"presentingplayerstatechange",this.B);this.subscribe("select",this.H,this);this.B()};
FU=function(a,b){g.BU.call(this,g.S("YTP_QUALITY_TITLE"),1,a,b);g.M(this.B.element,"ytp-quality-menu");this.g=a;this.I={};this.F="unknown";this.M(a,"videodatachange",this.A);this.M(a,"videoplayerreset",this.A);this.M(a,"onPlaybackQualityChange",this.K);this.A()};
GU=function(a,b,c){a=a.I[b];var d=g.wu[b];d=a?a.qualityLabel:d?d+"p":g.S("YTP_AUTO");c={D:"span",W:c,G:[]};a&&a.isAccelerated&&a.o&&c.G.push({D:"div",J:"ytp-menuitem-badge-container",G:[{D:"svg",N:{fill:"#00838f",height:"11px",viewBox:"0 0 48 48",width:"11px"},G:[{D:"path",N:{d:"M0 0v48h48V0H0zm10.6 30.64L4 24.05l6.69-6.69 6.6 6.59-6.69 6.69zM24 44l-6.7-6.7 13.35-13.35-13.32-13.28L24 4l20 20-20 20z"}},{D:"path",N:{d:"M 24,44 44,24 24,4 17.33,10.67 30.65,23.95 17.3,37.3 z M 10.6,30.64 17.29,23.95 10.69,17.36 4,24.05 z",
fill:"#fff"}}]}]});c.G.push(d);var e;"highres"==b?e="8K":"hd2880"==b?e="5K":"hd2160"==b?e="4K":0==b.indexOf("hd")&&(e="HD");e&&(c.G.push(" "),c.G.push({D:"sup",J:"ytp-swatch-color",G:[e]}));return c};
HU=function(a,b,c){g.W.call(this,{D:"button",W:["ytp-button","ytp-settings-button"],N:{"aria-haspopup":"true","aria-owns":vM(),title:g.S("YTP_SETTINGS")},G:[g.AP()]});this.o=c;this.g=a;this.A=!0;this.ea("click",this.B);this.M(a,"onPlaybackQualityChange",this.l);this.M(a,"videodatachange",this.l);this.M(a,"webglsettingschanged",this.l);this.M(a,"appresize",this.Fc);g.Ce(this,KS(b.l,this.element));this.l();this.Fc(g.uL(a).Da())};
IU=function(a,b){a.A=!!b;a.Fc(g.uL(a.g).Da())};
JU=function(a,b){g.BU.call(this,g.S("YTP_SPEED_TITLE"),4,a,b);this.g=a;this.A=null;this.M(a,"presentingplayerstatechange",this.It);this.It()};
KU=function(a){g.US.call(this,a,"ytp-settings-menu");this.o=a;this.l=new g.QS(a);g.K(this,this.l);this.F=null;this.X=!1;this.hide();g.YS(this,this.l)};
LU=function(a){if(!a.X){a.X=!0;var b=new FU(a.o,a);g.K(a,b);b=new AU(a.o,a);g.K(a,b);g.U(a.o).Ga&&(b=new JU(a.o,a),g.K(a,b));g.U(a.o).xd&&(b=new EU(a.o,a),g.K(a,b));b=new DU(a.o,a);g.K(a,b);IU(a.F,a.l.za.length)}};
MU=function(a,b){LU(a);g.RS(a.l,b);IU(a.F,a.l.za.length)};
NU=function(a,b){a.Na()&&1>=a.l.za.length&&a.hide();g.SS(a.l,b);IU(a.F,a.l.za.length)};
Gba=function(a,b){a.F=b;var c=a.element;var d=b.element.getAttribute("aria-owns");c.id=d};
OU=function(a,b,c){g.W.call(this,{D:"button",J:"ytp-button",N:{title:g.S("YTP_MDX_TOOLTIP"),"aria-haspopup":"true"},G:["{{icon}}"]});this.g=a;this.A=c;this.o=null;this.M(a,"onMdxReceiversChange",this.l);this.M(a,"presentingplayerstatechange",this.l);this.M(a,"appresize",this.l);this.l();this.ea("click",this.B,this);g.Ce(this,KS(b.l,this.element))};
PU=function(a,b){g.W.call(this,{D:"button",W:["ytp-size-button","ytp-button"],N:{title:"{{title}}"},G:["{{icon}}"]});this.g=a;this.A=b.l;this.o=null;this.B=new QT;g.K(this,this.B);this.M(a,"sizestylechange",this.l);this.M(a,"fullscreentoggled",this.l);this.M(a,"presentingplayerstatechange",this.l);this.l();this.ea("click",this.C);g.Ce(this,KS(this.A,this.element))};
QU=function(a,b){g.W.call(this,{D:"button",W:["ytp-subtitles-button","ytp-button"],N:{"aria-pressed":"{{pressed}}",title:g.S("YTP_SUBTITLES_TOOLTIP")},G:[qP()]});this.l=a;this.M(a,"videodatachange",this.g);this.M(a,"appresize",this.g);this.M(a,"onApiChange",this.g);this.M(a,"onCaptionsTrackListChanged",this.g);this.M(a,"captionschanged",this.g);this.g();this.ea("click",this.o);g.Ce(this,KS(b.l,this.element))};
RU=function(a,b){g.W.call(this,{D:"div",W:["ytp-time-display","notranslate"],G:[{D:"span",J:"ytp-time-current",G:["{{currenttime}}"]},{D:"span",J:"ytp-time-separator",G:[" / "]},{D:"span",J:"ytp-time-duration",G:["{{duration}}"]}]});this.A=new g.W({D:"button",W:["ytp-live-badge","ytp-button"],N:{disabled:"true"},G:[g.S("YTP_LIVE")]});g.K(this,this.A);this.A.ca(this.element);this.B=a;this.I=b.l;this.g=null;this.C=this.l=!1;this.H=this.F=null;this.ea("click",this.K);this.M(a,"presentingplayerstatechange",
this.o);this.M(a,"appresize",this.o);this.M(a,"videodatachange",this.L);var c=a.Y();c&&(this.l=c.oa,g.O(this.element,"ytp-live",this.l));this.o()};
TU=function(a,b,c){g.W.call(this,{D:"div",J:"ytp-volume-panel",N:{role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"{{valuenow}}","aria-valuetext":"{{valuetext}}",tabindex:"0"},G:[{D:"div",J:"ytp-volume-slider",G:[{D:"div",J:"ytp-volume-slider-handle"}]}]});this.g=a;this.C=b;this.L=c;this.I=!1;this.F=b.cd();this.R=this.A=0;this.P=this.Z["ytp-volume-slider"];this.V=this.Z["ytp-volume-slider-handle"];this.H=new g.ct(this.P,!0);g.K(this,this.H);this.H.subscribe("dragstart",this.jH,
this);this.H.subscribe("dragmove",this.iH,this);this.H.subscribe("dragend",this.hH,this);this.K=null;this.l=this.o=this.B=!1;this.M(a,"onVolumeChange",this.ID);this.M(a,"appresize",this.Fc);this.M(a,"fullscreentoggled",this.GD);this.M(a,"onShowControls",this.kq);this.M(a,"onHideControls",this.kq);this.M(this.element,"keydown",this.kH);this.M(this.element,"focus",g.B(this.Nt,!0));this.M(this.element,"blur",g.B(this.Nt,!1));this.Fc(g.uL(a).Da());SU(this,a.getVolume(),a.isMuted())};
SU=function(a,b,c){var d=Math.floor(b),e=d+"% "+g.S("YTP_SCREENREADER_VOLUME_SETTING")+(c?" "+g.S("YTP_SCREENREADER_VOLUME_MUTED"):"");c=c?0:b/100;a.updateValue("valuenow",d);a.updateValue("valuetext",e);a.V.style.left=(a.F?60:40)*c+"px";a.A=b};
UU=function(a,b,c,d,e){var f=a.o||a.B||a.l||a.I;a.o=b;a.B=c;a.l=d;a.I=e;b=a.o||a.B||a.l||a.I;f!=b&&(b?a.K=a.M(a.element,"wheel",a.HD):(a.Pa(a.K),a.K=null),g.O(a.L,"ytp-volume-slider-active",b))};
VU=function(a,b){var c=g.U(a),d=uB(c);0==d.indexOf("www.")&&(d=d.substring(4));var e=["ytp-youtube-button","ytp-button","yt-uix-sessionlink"];(c="gaming"==c.g)&&e.push("ytp-youtube-gaming-button");g.W.call(this,{D:"a",W:e,N:{href:"{{url}}",target:"_blank",title:g.S("YTP_URL_NAVIGATE_TO",{WEBSITE:d}),"data-sessionlink":"feature=player-button"},G:[c?g.Y?{D:"div",W:["ytp-icon","ytp-icon-logo-gaming"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 122 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",
N:{d:"M 45.32 10 L 45.32 25.81 L 47.39 25.81 L 47.64 24.75 L 47.68 24.75 C 47.87 25.13 48.17 25.43 48.56 25.65 C 48.95 25.87 49.37 25.98 49.84 25.98 C 50.69 25.98 51.32 25.59 51.72 24.81 C 52.12 24.03 52.32 22.81 52.32 21.15 L 52.32 19.39 C 52.34 18.13 52.26 17.15 52.11 16.44 C 51.96 15.74 51.72 15.23 51.38 14.91 C 51.04 14.60 50.57 14.44 49.98 14.44 C 49.52 14.44 49.08 14.57 48.68 14.83 C 48.48 14.96 48.31 15.11 48.15 15.29 C 48.00 15.46 47.86 15.65 47.75 15.86 L 47.74 15.86 L 47.74 10 L 45.32 10 z M 94.83 10.25 C 93.91 10.25 93.48 10.61 93.48 11.81 C 93.48 13.05 93.91 13.35 94.83 13.35 C 95.77 13.35 96.19 13.05 96.19 11.81 C 96.19 10.66 95.78 10.25 94.83 10.25 z M 67.44 10.31 C 64.14 10.31 63.40 12.21 63.40 16.34 L 63.40 20.15 C 63.40 24.06 64.21 26.00 66.56 26.00 C 68.00 26.00 68.86 25.31 69.19 23.91 L 69.55 25.81 L 71.03 25.81 L 71.03 18.25 L 71.03 18.24 L 67.41 18.24 L 67.41 20.19 L 68.82 20.19 L 68.82 21.47 C 68.82 23.38 68.38 24.10 67.34 24.10 C 66.32 24.10 66 23.12 66 20.52 L 66 16.22 C 66 13.11 66.37 12.19 67.35 12.19 C 68.01 12.19 68.40 12.58 68.53 14.02 C 68.57 14.50 68.59 15.10 68.58 15.83 L 70.83 15.68 C 71.14 12.21 70.35 10.31 67.44 10.31 z M 14.06 10.55 L 13.01 15.24 C 12.72 16.61 12.54 17.58 12.46 18.16 L 12.39 18.16 C 12.27 17.35 12.08 16.38 11.83 15.23 L 10.83 10.56 L 8.33 10.56 L 11.18 20.86 L 11.18 25.80 L 13.66 25.80 L 13.66 20.85 L 16.55 10.55 L 14.06 10.55 z M 30.33 10.56 L 30.33 12.58 L 32.83 12.58 L 32.83 25.81 L 35.27 25.81 L 35.27 12.58 L 37.76 12.58 L 37.76 10.56 L 30.33 10.56 z M 113.35 13.31 C 112.35 13.40 111.89 14.17 111.65 15.17 C 111.12 14.68 110.37 14.47 109.41 14.47 C 107.10 14.47 106.06 15.76 106.06 18.80 L 106.06 19.03 C 106.06 21.16 106.61 22.30 107.57 22.85 C 106.66 23.21 106.14 23.92 106.16 24.76 C 106.18 25.61 106.75 26.05 107.51 26.34 C 106.45 26.61 105.76 27.27 105.76 28.40 C 105.76 30.03 107.14 30.96 109.36 30.96 C 111.91 30.96 113.39 29.76 113.39 27.74 C 113.39 23.92 108.06 25.30 108.07 23.82 C 108.07 23.59 108.17 23.34 108.44 23.16 C 108.73 23.23 109.06 23.25 109.41 23.25 C 111.54 23.25 112.74 22.21 112.74 19.01 L 112.74 18.77 C 112.74 17.70 112.60 16.84 112.33 16.19 C 112.42 16.12 112.51 16.05 112.60 15.99 C 112.90 15.82 113.25 15.73 113.66 15.73 L 113.35 13.31 z M 85.40 14.43 C 84.45 14.43 83.64 14.88 83.07 15.71 C 82.99 15.82 82.91 15.95 82.84 16.08 L 82.81 16.08 L 82.58 14.66 L 80.60 14.66 L 80.60 25.81 L 83.11 25.81 L 83.11 16.91 C 83.38 16.45 83.77 16.21 84.21 16.21 C 84.75 16.21 84.99 16.66 84.99 17.57 L 84.99 25.81 L 87.5 25.81 L 87.5 17.39 C 87.5 17.23 87.50 17.08 87.48 16.93 C 87.75 16.45 88.14 16.21 88.58 16.21 C 89.12 16.21 89.36 16.66 89.36 17.57 L 89.36 25.81 L 91.88 25.81 L 91.88 17.39 C 91.88 15.52 91.29 14.42 89.77 14.43 C 88.77 14.43 87.91 14.95 87.33 15.91 C 87.05 14.97 86.45 14.43 85.40 14.43 z M 102.56 14.43 C 101.77 14.43 101.08 14.77 100.56 15.38 C 100.38 15.59 100.22 15.82 100.08 16.08 L 100.03 16.08 L 99.82 14.66 L 97.83 14.66 L 97.83 25.81 L 100.34 25.81 L 100.34 16.91 C 100.61 16.45 100.99 16.21 101.43 16.21 C 101.99 16.21 102.24 16.72 102.24 17.63 L 102.24 25.81 L 104.75 25.81 L 104.75 17.39 C 104.75 15.52 104.12 14.42 102.56 14.43 z M 19.43 14.46 C 18.59 14.46 17.92 14.63 17.41 14.96 C 16.89 15.29 16.50 15.82 16.26 16.55 C 16.02 17.28 15.91 18.23 15.91 19.43 L 15.91 21.06 C 15.91 22.24 16.02 23.20 16.23 23.91 C 16.44 24.62 16.80 25.15 17.30 25.49 C 17.80 25.83 18.49 26 19.39 26 C 20.25 26 20.92 25.83 21.42 25.5 C 21.92 25.17 22.29 24.63 22.51 23.91 C 22.74 23.19 22.85 22.25 22.85 21.06 L 22.85 19.43 C 22.85 18.23 22.73 17.28 22.50 16.56 C 22.27 15.84 21.91 15.31 21.41 14.97 C 20.91 14.63 20.25 14.46 19.43 14.46 z M 56.83 14.47 C 55.59 14.47 54.70 14.84 54.19 15.61 C 53.68 16.38 53.42 17.60 53.42 19.27 L 53.42 21.23 C 53.42 22.86 53.67 24.05 54.17 24.83 C 54.55 25.40 55.13 25.77 55.92 25.91 C 56.18 25.96 56.46 25.99 56.77 25.99 C 57.80 25.99 58.60 25.74 59.16 25.23 C 59.73 24.72 60.01 23.94 60.01 22.91 C 60.01 22.74 60.01 22.61 60 22.51 L 57.83 22.39 C 57.81 23.06 57.74 23.54 57.60 23.83 C 57.46 24.12 57.21 24.27 56.83 24.27 C 56.55 24.27 56.35 24.18 56.22 24.02 C 56.09 23.86 56.00 23.61 55.96 23.25 C 55.92 22.89 55.90 22.36 55.90 21.64 L 55.90 21.08 L 60.07 21.08 L 60.07 19.16 C 60.07 17.99 59.97 17.08 59.78 16.41 C 59.59 15.75 59.28 15.25 58.82 14.93 C 58.36 14.62 57.69 14.47 56.83 14.47 z M 75.83 14.47 C 73.32 14.47 72.24 15.61 72.46 18.32 L 74.66 18.5 C 74.68 16.77 74.93 16.18 75.73 16.18 C 76.44 16.18 76.59 16.72 76.59 18.27 L 76.59 19.08 C 73.41 19.93 72.22 21.31 72.22 23.33 C 72.22 25.15 73.30 26.06 74.68 26.06 C 75.79 26.06 76.46 25.44 76.82 24.46 L 76.85 24.46 L 77.10 25.82 L 79.01 25.82 L 79.01 18.38 C 79.01 15.78 78.18 14.45 75.83 14.47 z M 24.15 14.66 L 24.15 22.99 C 24.15 24.02 24.32 24.77 24.67 25.25 C 25.03 25.74 25.58 25.99 26.32 25.99 C 27.39 25.99 28.19 25.47 28.72 24.44 L 28.76 24.44 L 28.99 25.81 L 30.94 25.81 L 30.94 14.66 L 28.44 14.66 L 28.44 23.51 C 28.34 23.72 28.2 23.89 28 24.02 C 27.8 24.15 27.58 24.23 27.36 24.23 C 27.10 24.23 26.93 24.12 26.82 23.91 C 26.71 23.70 26.66 23.34 26.66 22.84 L 26.66 14.66 L 24.15 14.66 z M 37.01 14.66 L 37.01 22.99 C 37.01 24.02 37.20 24.77 37.55 25.25 C 37.82 25.62 38.19 25.85 38.67 25.94 C 38.83 25.97 39.00 25.99 39.18 25.99 C 40.25 25.99 41.05 25.47 41.58 24.44 L 41.64 24.44 L 41.85 25.81 L 43.82 25.81 L 43.82 14.66 L 41.32 14.66 L 41.32 23.51 C 41.22 23.72 41.06 23.89 40.86 24.02 C 40.66 24.15 40.46 24.23 40.24 24.23 C 39.98 24.23 39.79 24.12 39.68 23.91 C 39.57 23.70 39.52 23.34 39.52 22.84 L 39.52 14.66 L 37.01 14.66 z M 93.63 14.66 L 93.63 25.82 L 96.02 25.82 L 96.02 14.66 L 93.63 14.66 z M 56.83 16.15 C 57.10 16.15 57.28 16.23 57.41 16.38 C 57.53 16.53 57.62 16.79 57.67 17.16 C 57.72 17.53 57.75 18.07 57.75 18.78 L 57.75 19.58 L 55.91 19.58 L 55.91 18.78 C 55.91 18.05 55.93 17.52 55.97 17.16 C 56.01 16.81 56.09 16.55 56.22 16.39 C 56.35 16.23 56.55 16.15 56.83 16.15 z M 19.36 16.18 C 19.72 16.18 19.96 16.37 20.10 16.74 C 20.24 17.11 20.32 17.69 20.32 18.49 L 20.32 21.96 C 20.32 22.78 20.24 23.38 20.10 23.74 C 19.97 24.11 19.72 24.28 19.36 24.28 C 19.01 24.28 18.77 24.10 18.64 23.74 C 18.51 23.38 18.43 22.78 18.43 21.96 L 18.43 18.49 C 18.43 17.69 18.51 17.11 18.65 16.74 C 18.79 16.37 19.02 16.18 19.36 16.18 z M 109.41 16.19 C 110.12 16.19 110.33 16.73 110.33 18.75 L 110.33 19.14 C 110.33 21.14 110.09 21.63 109.41 21.63 C 108.73 21.63 108.46 21.14 108.46 19.14 L 108.46 18.75 C 108.46 16.74 108.70 16.19 109.41 16.19 z M 48.84 16.22 C 49.09 16.22 49.29 16.31 49.43 16.51 C 49.57 16.71 49.68 17.05 49.73 17.52 C 49.78 17.99 49.81 18.68 49.81 19.55 L 49.81 21 L 49.82 21 C 49.82 21.81 49.79 22.45 49.72 22.91 C 49.65 23.37 49.54 23.70 49.38 23.89 C 49.22 24.08 49.01 24.17 48.74 24.17 C 48.53 24.17 48.33 24.12 48.16 24.02 C 47.98 23.92 47.85 23.78 47.74 23.58 L 47.74 17.25 C 47.82 16.95 47.96 16.70 48.17 16.50 C 48.38 16.31 48.60 16.22 48.84 16.22 z M 76.60 20.36 L 76.60 23.60 C 76.36 23.99 75.98 24.30 75.58 24.30 C 74.98 24.30 74.74 23.81 74.74 22.88 C 74.74 21.66 75.29 20.78 76.60 20.36 z M 108.67 26.65 C 110.00 26.90 111.34 27.06 111.30 28.02 C 111.28 28.64 110.64 29.16 109.48 29.16 C 108.33 29.16 107.76 28.59 107.76 27.81 C 107.76 27.27 108.11 26.85 108.67 26.65 z"}}]}:
g.Y?{D:"div",W:["ytp-icon","ytp-icon-logo"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 67 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 45.09 10 L 45.09 25.82 L 47.16 25.82 L 47.41 24.76 L 47.47 24.76 C 47.66 25.14 47.94 25.44 48.33 25.66 C 48.72 25.88 49.16 25.99 49.63 25.99 C 50.48 25.99 51.1 25.60 51.5 24.82 C 51.9 24.04 52.09 22.82 52.09 21.16 L 52.09 19.40 C 52.12 18.13 52.05 17.15 51.90 16.44 C 51.75 15.74 51.50 15.23 51.16 14.91 C 50.82 14.59 50.34 14.44 49.75 14.44 C 49.29 14.44 48.87 14.57 48.47 14.83 C 48.27 14.96 48.09 15.11 47.93 15.29 C 47.78 15.46 47.64 15.65 47.53 15.86 L 47.51 15.86 L 47.51 10 L 45.09 10 z M 8.10 10.56 L 10.96 20.86 L 10.96 25.82 L 13.42 25.82 L 13.42 20.86 L 16.32 10.56 L 13.83 10.56 L 12.78 15.25 C 12.49 16.62 12.31 17.59 12.23 18.17 L 12.16 18.17 C 12.04 17.35 11.84 16.38 11.59 15.23 L 10.59 10.56 L 8.10 10.56 z M 30.10 10.56 L 30.10 12.58 L 32.59 12.58 L 32.59 25.82 L 35.06 25.82 L 35.06 12.58 L 37.55 12.58 L 37.55 10.56 L 30.10 10.56 z M 19.21 14.46 C 18.37 14.46 17.69 14.63 17.17 14.96 C 16.65 15.29 16.27 15.82 16.03 16.55 C 15.79 17.28 15.67 18.23 15.67 19.43 L 15.67 21.06 C 15.67 22.24 15.79 23.19 16 23.91 C 16.21 24.62 16.57 25.15 17.07 25.49 C 17.58 25.83 18.27 26 19.15 26 C 20.02 26 20.69 25.83 21.19 25.5 C 21.69 25.17 22.06 24.63 22.28 23.91 C 22.51 23.19 22.63 22.25 22.63 21.06 L 22.63 19.43 C 22.63 18.23 22.50 17.28 22.27 16.56 C 22.04 15.84 21.68 15.31 21.18 14.97 C 20.68 14.63 20.03 14.46 19.21 14.46 z M 56.64 14.47 C 55.39 14.47 54.51 14.84 53.99 15.61 C 53.48 16.38 53.22 17.60 53.22 19.27 L 53.22 21.23 C 53.22 22.85 53.47 24.05 53.97 24.83 C 54.34 25.40 54.92 25.77 55.71 25.91 C 55.97 25.96 56.26 25.99 56.57 25.99 C 57.60 25.99 58.40 25.74 58.96 25.23 C 59.53 24.72 59.81 23.94 59.81 22.91 C 59.81 22.74 59.79 22.61 59.78 22.51 L 57.63 22.39 C 57.62 23.06 57.54 23.54 57.40 23.83 C 57.26 24.12 57.01 24.27 56.63 24.27 C 56.35 24.27 56.13 24.18 56.00 24.02 C 55.87 23.86 55.79 23.61 55.75 23.25 C 55.71 22.89 55.68 22.36 55.68 21.64 L 55.68 21.08 L 59.86 21.08 L 59.86 19.16 C 59.86 17.99 59.77 17.08 59.58 16.41 C 59.39 15.75 59.07 15.25 58.61 14.93 C 58.15 14.62 57.50 14.47 56.64 14.47 z M 23.92 14.67 L 23.92 23.00 C 23.92 24.03 24.11 24.79 24.46 25.27 C 24.82 25.76 25.35 26.00 26.09 26.00 C 27.16 26.00 27.97 25.49 28.5 24.46 L 28.55 24.46 L 28.76 25.82 L 30.73 25.82 L 30.73 14.67 L 28.23 14.67 L 28.23 23.52 C 28.13 23.73 27.97 23.90 27.77 24.03 C 27.57 24.16 27.37 24.24 27.15 24.24 C 26.89 24.24 26.70 24.12 26.59 23.91 C 26.48 23.70 26.43 23.35 26.43 22.85 L 26.43 14.67 L 23.92 14.67 z M 36.80 14.67 L 36.80 23.00 C 36.80 24.03 36.98 24.79 37.33 25.27 C 37.60 25.64 37.97 25.87 38.45 25.96 C 38.61 25.99 38.78 26.00 38.97 26.00 C 40.04 26.00 40.83 25.49 41.36 24.46 L 41.41 24.46 L 41.64 25.82 L 43.59 25.82 L 43.59 14.67 L 41.09 14.67 L 41.09 23.52 C 40.99 23.73 40.85 23.90 40.65 24.03 C 40.45 24.16 40.23 24.24 40.01 24.24 C 39.75 24.24 39.58 24.12 39.47 23.91 C 39.36 23.70 39.31 23.35 39.31 22.85 L 39.31 14.67 L 36.80 14.67 z M 56.61 16.15 C 56.88 16.15 57.08 16.23 57.21 16.38 C 57.33 16.53 57.42 16.79 57.47 17.16 C 57.52 17.53 57.53 18.06 57.53 18.78 L 57.53 19.58 L 55.69 19.58 L 55.69 18.78 C 55.69 18.05 55.71 17.52 55.75 17.16 C 55.79 16.81 55.87 16.55 56.00 16.39 C 56.13 16.23 56.32 16.15 56.61 16.15 z M 19.15 16.19 C 19.50 16.19 19.75 16.38 19.89 16.75 C 20.03 17.12 20.09 17.7 20.09 18.5 L 20.09 21.97 C 20.09 22.79 20.03 23.39 19.89 23.75 C 19.75 24.11 19.51 24.29 19.15 24.30 C 18.80 24.30 18.54 24.11 18.41 23.75 C 18.28 23.39 18.22 22.79 18.22 21.97 L 18.22 18.5 C 18.22 17.7 18.28 17.12 18.42 16.75 C 18.56 16.38 18.81 16.19 19.15 16.19 z M 48.63 16.22 C 48.88 16.22 49.08 16.31 49.22 16.51 C 49.36 16.71 49.45 17.05 49.50 17.52 C 49.55 17.99 49.58 18.68 49.58 19.55 L 49.58 21 L 49.59 21 C 49.59 21.81 49.57 22.45 49.5 22.91 C 49.43 23.37 49.32 23.70 49.16 23.89 C 49.00 24.08 48.78 24.17 48.51 24.17 C 48.30 24.17 48.11 24.12 47.94 24.02 C 47.76 23.92 47.62 23.78 47.51 23.58 L 47.51 17.25 C 47.59 16.95 47.75 16.70 47.96 16.50 C 48.17 16.31 48.39 16.22 48.63 16.22 z "}}]}]});
this.g=a;this.o=this.l=!1;RL(a,this.element,this,28666);this.ea("click",this.B);this.M(a,"videodatachange",this.A);this.A();g.Ce(this,KS(b.l,this.element))};
WU=function(a,b,c){g.Zs.call(this);var d=this,e=g.U(a);this.A=a;this.o=b;this.X=window.NaN;this.aa=null;this.U=c;this.U.subscribe("autohideupdate",this.du,this);c=!KE(g.tL(a));var f=new g.W({D:"div",J:"ytp-gradient-bottom"});g.K(this,f);g.OL(a,f.element,8);this.L=new g.aQ(f,250,c,100);g.K(this,this.L);this.l=new g.W({D:"div",J:"ytp-chrome-bottom",G:[{D:"div",J:"ytp-chrome-controls"}]});g.K(this,this.l);g.OL(a,this.l.element,8);this.K=new g.aQ(this.l,250,c,100);g.K(this,this.K);c=this.l.element.children[0];
e.H&&(c.style.background=e.zb);this.g=new KU(a);g.Ce(this.g,function(){a.C==d.g&&(a.C=null)});
g.K(this,this.g);a.C=this.g;g.OL(a,this.g.element,6);this.g.subscribe("show",this.cJ,this);this.g.subscribe("show",(0,g.A)(b.DI,b,this.g));this.C=new mU(a,b);g.K(this,this.C);this.C.ca(this.l.element,0);f=new GT(a,b);g.K(this,f);g.OL(a,f.element,4);this.C.subscribe("height-change",f.AI,f);f=new JT(a);g.K(this,f);g.OL(a,f.element,4);f=new g.xM({D:"div",J:"ytp-left-controls"});g.K(this,f);f.ca(c);var k=new gU(a,b,!1);g.K(this,k);k.ca(f.element);e.P||(k=new dU(a,b),g.K(this,k),k.ca(f.element));k=new gU(a,
b,!0);g.K(this,k);k.ca(f.element);var l=new g.W({D:"span"});g.K(this,l);l.ca(f.element);if(!e.fa&&(this.B=new XT(a,b),g.K(this,this.B),this.B.ca(l.element),e.U)){k=new TU(a,b,this.l.element);g.K(this,k);k.ca(l.element);l=new g.ct(l.element);g.K(this,l);var m=(0,g.A)(k.Kv,k,!0);l.subscribe("hoverstart",m);l=new g.ct(f.element);g.K(this,l);k=(0,g.A)(k.Kv,k,!1);l.subscribe("hoverend",k)}this.R=new RU(a,b);g.K(this,this.R);this.R.ca(f.element);f=new g.xM({D:"div",J:"ytp-right-controls"});g.K(this,f);
f.ca(c);c=new QU(a,b);g.K(this,c);c.ca(f.element);c=new HU(a,b,this.g);g.K(this,c);Gba(this.g,c);c.ca(f.element);c=new OT(a);g.K(this,c);g.OL(a,c.element,5);c.subscribe("show",(0,g.A)(b.rm,b,c));c=new PT(a,b,c);g.K(this,c);c.ca(f.element);e.pf&&(this.F=new VU(a,b),g.K(this,this.F),this.F.ca(f.element));c=new PU(a,b);g.K(this,c);c.ca(f.element);e.Ab&&(c=new OU(a,b,this.g),g.K(this,c),c.ca(f.element));e.nf&&(e=new ET(a,b),g.K(this,e),e.ca(f.element));qx()&&(e=new bU(a,b),g.K(this,e),e.ca(f.element));
this.V=new NT(a,b);g.K(this,this.V);this.V.ca(f.element);this.H=new g.Mp(this.tF,null,this);g.K(this,this.H);this.I=null;this.M(a,"appresize",this.ec);this.M(a,"fullscreentoggled",this.ec);this.M(a,"presentingplayerstatechange",this.qp);this.ec()};
XU=function(a,b){if(KE(g.tL(a.A))||b){if(b){a.K.hide();a.L.hide();if(a.B){var c=a.B;c.F=!1;c.g.Va(c.element,c.o&&!1)}a.F&&(c=a.F,c.o=!1,c.g.Va(c.element,c.l&&!1));a.o.l.Zg(a.ha())}}else b||(a.K.show(),a.L.show(),a.B&&(c=a.B,c.F=!0,c.g.Va(c.element,c.o&&!0)),a.F&&(c=a.F,c.o=!0,c.g.Va(c.element,c.l&&!0)),a.du())};
ZU=function(a){var b=g.uL(a.A).Da().width;return Math.max(b-2*YU(a),100)};
YU=function(a){var b=a.o.cd();return 12*(g.U(a.A).H?0:b?2:1)};
g.$U=function(a,b,c,d,e,f,k,l,m,n,p,u){f&&(a=a.charAt(0)+a.substring(1).toLowerCase(),c=c.charAt(0)+c.substring(1).toLowerCase());if("0"===b||"-1"===b)b=null;if("0"===d||"-1"===d)d=null;if(p){c=g.U(u);p={href:p,"aria-label":a,tabindex:"-1"};if(g.lB(c)||g.mB(c))p.target="_blank";g.W.call(this,{D:"div",W:["ytp-button","ytp-sb"],G:[{D:"a",J:"ytp-sb-subscribe",N:p,G:[{D:"div",J:"ytp-sb-text",G:[{D:"div",J:"ytp-sb-icon"},a]},b?{D:"div",J:"ytp-sb-count",G:[b]}:""]}]});f&&g.M(this.element,"ytp-sb-classic")}else{g.W.call(this,
{D:"div",W:["ytp-button","ytp-sb"],G:[{D:"div",J:"ytp-sb-subscribe",N:{tabindex:"-1","aria-label":a},G:[{D:"div",J:"ytp-sb-text",G:[{D:"div",J:"ytp-sb-icon"},a]},b?{D:"div",J:"ytp-sb-count",G:[b]}:""]},{D:"div",J:"ytp-sb-unsubscribe",N:{tabindex:"-1","aria-label":c},G:[{D:"div",J:"ytp-sb-text",G:[{D:"div",J:"ytp-sb-icon"},c]},d?{D:"div",J:"ytp-sb-count",G:[d]}:""]}]});var v=this;this.g=k;var C=this.Z["ytp-sb-subscribe"],D=this.Z["ytp-sb-unsubscribe"];f&&g.M(this.element,"ytp-sb-classic");if(e){l&&
g.M(this.element,"ytp-sb-subscribed");a=g.U(u);var E=null;"gaming"==a.g&&(E="gaming_channels");if(m){var ea=a.baseYtUrl+"subscription_ajax";var fa=function(){return{method:"POST",hc:{action_create_subscription_to_channel:1,c:v.g},jb:{feature:m,silo_name:E},withCredentials:!0}};
var Za=function(){return{method:"POST",hc:{action_remove_subscriptions:1},jb:{c:v.g,silo_name:E,feature:m},withCredentials:!0}}}else if(n)ea="/subscription_service",fa=function(){return{method:"POST",
hc:{action_subscribe:1},jb:{channel_ids:v.g,itct:n}}},Za=function(){return{method:"POST",
hc:{action_unsubscribe:1},jb:{channel_ids:v.g,itct:n}}};
else return;var Ga=function(){g.Ar(ea,fa());u.la("SUBSCRIBE");D.focus();D.removeAttribute("aria-hidden");C.setAttribute("aria-hidden",!0)},Ja=function(){g.Ar(ea,Za());
u.la("UNSUBSCRIBE");C.focus();C.removeAttribute("aria-hidden");D.setAttribute("aria-hidden",!0)};
this.M(C,"click",Ga);this.M(D,"click",Ja);this.M(C,"keypress",function(a){13==a.keyCode&&Ga(a)});
this.M(D,"keypress",function(a){13==a.keyCode&&Ja(a)});
var ri=(0,g.A)(this.l,this),Qe=(0,g.A)(this.o,this);u.addEventListener("SUBSCRIBE",ri);u.addEventListener("UNSUBSCRIBE",Qe);g.Ce(this,function(){u.removeEventListener("SUBSCRIBE",ri);u.removeEventListener("UNSUBSCRIBE",Qe)})}else g.M(C,"ytp-sb-disabled"),g.M(D,"ytp-sb-disabled")}};
g.bV=function(a,b,c,d,e,f){b=aV(b,c,f);d=d||375;e=e||440;if(b=window.open(b,"loginPopup","width="+d+",height="+e+",resizable=yes,scrollbars=yes",!0))c=g.qt("LOGGED_IN",function(b){g.rt(g.cr("LOGGED_IN_PUBSUB_KEY",void 0));g.br("LOGGED_IN",!0);a(b)}),g.br("LOGGED_IN_PUBSUB_KEY",c),b.moveTo((window.screen.width-d)/2,(window.screen.height-e)/2)};
aV=function(a,b,c){var d="/signin?context=popup";c&&(d=window.document.location.protocol+"//"+c+d);c=window.document.location.protocol+"//"+window.document.domain+"/post_login";a&&(c=Ig(c,"mode",a));a=Ig(d,"next",c);b&&(a=Ig(a,"feature",b));return a};
cV=function(a){var b=new g.W({D:"a",J:"ytp-title-channel-logo",N:{href:"{{channelLink}}",target:"_blank"}});g.W.call(this,{D:"div",J:"ytp-title",G:[{D:"div",J:"ytp-title-channel",G:[b,{D:"div",J:"ytp-title-channel-popup",G:[{D:"div",J:"ytp-title-channel-heading",G:[{D:"h2",J:"ytp-title-channel-text",G:[{D:"a",N:{href:"{{popupChannelLink}}",target:"_blank"},G:["{{popupChannelName}}"]}]},{D:"h3",J:"ytp-title-channel-subtext",G:["{{subscriberCount}}"]}]}]}]},{D:"div",J:"ytp-title-text",G:[{D:"a",W:["ytp-title-link",
"yt-uix-sessionlink"],N:{target:"_blank",href:"{{url}}","data-sessionlink":"feature=player-title"},G:["{{title}}"]},{D:"div",J:"ytp-title-subtext",G:[{D:"a",J:"ytp-title-channel-name",N:{href:"{{channelLink}}",target:"_blank"},G:["{{channelName}}"]},{D:"span",J:"ytp-title-view-count",G:["{{viewCount}}"]}]}]}]});g.K(this,b);this.g=a;this.o=null;this.P=this.Z["ytp-title-link"];this.l=this.Z["ytp-title-channel"];this.C=b;this.I=this.Z["ytp-title-channel-popup"];this.A=null;this.B=!1;this.F=this.L=this.K=
null;RL(a,this.element,this,23851);RL(a,b.element,this,36925);this.M(a,"videodatachange",this.H);this.M(a,"videoplayerreset",this.H);g.U(a).K&&Hba(this);this.H()};
Hba=function(a){var b=new g.W({D:"div",J:"ytp-title-beacon"});g.K(a,b);b.ca(a.l,0);b=g.U(a.g).jc?null:aV();var c=a.g.Y(),d=new g.$U(g.S("YTP_SUBSCRIBE"),null,g.S("YTP_SUBSCRIBED"),null,!0,!1,c.bj,c.subscribed,"embed_title",null,b,a.g);a.A=d;g.K(a,d);d.ca(a.I);RL(a.g,d.element,a,36926);b={D:"div",J:"ytp-title-notifications-on",N:{title:g.S("YTP_SUBSCRIBE_NOTIFY_ON",void 0,"")},G:[g.uP()]};c={title:g.S("YTP_SUBSCRIBE_NOTIFY_OFF",void 0,"")};var e=new g.W({D:"button",W:["ytp-button","ytp-title-notifications"],
G:[b,{D:"div",J:"ytp-title-notifications-off",N:c,G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-notifications-inactive"]}:{D:"svg",N:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},G:[{D:"path",N:{d:"M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}]}]});g.K(a,e);e.ca(a.I);RL(a.g,e.element,a,36927);a.M(a.g,"SUBSCRIBE",function(){g.M(a.element,
"ytp-subscribed")});
a.M(a.g,"UNSUBSCRIBE",function(){a.B=!1;g.N(a.element,"ytp-subscribed");g.N(a.element,"ytp-notifications-enabled")});
a.M(a.l,"mouseenter",function(){if(524<=a.g.Fg().width){a.F.stop();var b=a.g.getRootNode();g.M(b,"ytp-title-channel-expanded");g.N(b,"ytp-title-channel-collapsed");a.g.Va(d.element,!0);a.g.Va(e.element,!0)}});
a.M(a.l,"mouseleave",function(){a.F.start();a.g.Va(d.element,!1);a.g.Va(e.element,!1)});
a.M(a.l,"click",function(){a.g.sc(a.l)});
a.M(d.element,"click",function(){a.g.sc(d.element)});
a.M(e.element,"click",function(){a.g.sc(e.element);g.Ar("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",jb:{channel_id:a.L,receive_all_updates:!a.B}});a.B=!a.B;g.O(a.element,"ytp-notifications-enabled",a.B)});
a.F=new g.P(function(){var b=a.g.getRootNode();g.Fp(b,"ytp-title-channel-expanded")&&(g.N(b,"ytp-title-channel-expanded"),g.M(b,"ytp-title-channel-collapsed"))},500);
g.K(a,a.F)};
dV=function(a){var b=a.g.Y(),c=2==a.g.Ca()&&b.isListed;c=b.videoId&&(c||g.U(a.g).K);var d=a.g.getRootNode();if(c&&b.videoId==a.K)g.M(d,"ytp-title-extra-info"),a.g.Va(a.C.element,!0);else if(g.N(d,"ytp-title-extra-info"),a.g.Va(a.C.element,!1),c&&b.author&&b.channelPath&&b.profilePicture){c=b.videoId;d=b.bj;var e=b.author,f=b.channelPath,k=b.profilePicture;b=b.Zo;f=g.U(a.g).protocol+"://"+tB(g.U(a.g))+f;a.C.element.style.backgroundImage="url("+k+")";a.A&&(a.A.g=d);a.C.updateValue("channelLink",f);
a.updateValue("channelLink",f);2==a.g.Ca()?a.updateValue("channelName",e):a.updateValue("channelName","");a.updateValue("popupChannelLink",f);a.updateValue("popupChannelName",e);a.updateValue("subscriberCount",b);a.L=d;a.K=c;dV(a)}};
eV=function(a,b){var c=g.uL(a).Da();g.W.call(this,{D:"div",G:[{D:"div",J:"ytp-tooltip-bg",G:[{D:"div",J:"ytp-tooltip-duration",G:["{{duration}}"]}]},{D:"div",J:"ytp-tooltip-text-wrapper",G:[{D:"div",J:"ytp-tooltip-image"},{D:"div",J:"ytp-tooltip-title",G:["{{title}}"]},{D:"span",J:"ytp-tooltip-text",G:["{{text}}"]}]}]});this.L=a;this.ma=b;this.ba=g.U(a).l;this.F=this.Z["ytp-tooltip-bg"];this.sa=this.Z["ytp-tooltip-image"];this.ia=(0,g.A)(this.ZF,this);this.P=(0,g.A)(this.cG,this);this.R=(0,g.A)(this.Yd,
this);this.l=null;this.H=new g.aQ(this,100);g.K(this,this.H);this.g=null;this.K=!1;this.o=null;this.B=window.NaN;this.C="";this.fa=c.width;this.I=!0;this.A=1;this.V=new g.P(this.Zz,250,this);g.K(this,this.V);this.X=new g.P(this.Yd,5E3,this);g.K(this,this.X)};
gV=function(a,b){if(null!=a.g)if(b)switch(a.g){case 3:case 2:fV(a);a.H.show();break;default:a.H.show()}else a.H.hide();a.I=b};
KS=function(a,b){if(a.ba)return g.va;b.addEventListener("mouseover",a.P);return(0,g.A)(function(){this.l==b&&this.Yd();b.removeEventListener("mouseover",this.P)},a)};
iV=function(a,b,c){if(a.g)if(3==a.g)a.Yd();else return;hV(a,b,3,c)};
hV=function(a,b,c,d){(0,window.isNaN)(a.B)||(a.B=window.NaN,a.F.style.background="");a.l=b;a.K=!!d;d?a.C=d:(a.C=b.getAttribute("title"),b.removeAttribute("title"));a.element.className="ytp-tooltip";if(d=b.getAttribute("data-tooltip-image"))a.sa.style.backgroundImage="url("+d+")";g.O(a.element,"ytp-tooltip-image-enabled",!!d);b=b.getAttribute("data-tooltip-opaque");g.O(a.element,"ytp-tooltip-opaque",!!b);a.g=c;a.L.addEventListener("appresize",a.R);a.I&&(fV(a),a.H.show(0))};
fV=function(a){var b=a.l.getAttribute("data-tooltip-text");if(b&&!a.K){a.updateValue("text",b);var c=a.l.getAttribute("data-duration");a.update({title:a.C,duration:c});var d=a.l.getAttribute("data-preview"),e=160*a.A,f=90*a.A,k=160*a.A,l=90*a.A;a.F.style.width=e+"px";a.F.style.height=f+"px";a.F.style.backgroundImage=d?"url("+d+")":"";a.F.style.backgroundPosition=(e-k)/2+"px "+(f-l)/2+"px";a.F.style.backgroundSize=k+"px "+l+"px";g.Gp(a.element,["ytp-text-detail","ytp-preview"]);g.O(a.element,"ytp-has-duration",
!!c)}else a.updateValue("text",a.C),g.Hp(a.element,["ytp-text-detail","ytp-preview","ytp-has-duration"]);3==a.g?a.element.setAttribute("role","status"):a.element.removeAttribute("role");jV(a,!!b)};
jV=function(a,b,c){a.element.style.maxWidth=b?"":Math.min(a.fa,300*a.A)+"px";kV(a.ma,a.element,a.l,c,1==a.g);a.element.style.top?g.M(a.element,"ytp-bottom"):a.element.style.bottom&&g.M(a.element,"ytp-top");3==a.g&&a.X.start()};
aU=function(a){a.l&&!a.K&&a.l.hasAttribute("title")&&(a.C=a.l.getAttribute("title"),a.l.removeAttribute("title"),a.I&&fV(a))};
lV=function(a,b){g.O(a.element,"ytp-preview",0<=b);if(!(0>b||b==a.B)){a.B=b;var c=160*a.A,d=160*a.A,e=XB(a.o,a.B,c);FT(a.F,e,c,d,!0);a.V.start()}};
Iba=function(a,b,c){mV("add_to_watch_later_list",a,b,c)};
Jba=function(a,b,c){mV("delete_from_watch_later_list",a,b,c)};
mV=function(a,b,c,d){g.Ar(c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1",{method:"POST",hc:{feature:b.feature||null,authuser:b.jc||null,pageid:b.pageId||null},jb:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.MM||null,add_to_playlists:b.DM||null,plid:g.cr("PLAYBACK_ID")||null},context:b.context,onError:b.onError,ib:function(a,c){var d=c.result;d&&d.actions&&lt(d.actions);b.ib.call(this,
a,c)},
Ac:b.Ac,withCredentials:!!d})};
pV=function(a,b,c){g.W.call(this,{D:"button",W:["ytp-watch-later-button","ytp-button"],N:{title:"{{title}}","data-tooltip-image":"{{image}}","data-tooltip-opaque":String(g.U(a).K)},G:[{D:"div",J:"ytp-watch-later-icon",G:["{{icon}}"]},{D:"div",J:"ytp-watch-later-title",G:["{{watch_later}}"]}]});this.g=a;this.F=b.l;this.H=c;this.B=null;this.C=this.A=this.o=this.l=!1;RL(a,this.element,this,28665);this.ea("click",this.JD,this);this.M(a,"videoplayerreset",this.KD);this.M(a,"appresize",this.Fc);this.Fc(g.uL(a).Da());
a=g.U(this.g);c=g.ku("yt-player-watch-later-pending");a.o&&c?(Yu(),nV(this,c.videoId)):oV(this,2);g.Ce(this,KS(b.l,this.element))};
nV=function(a,b){if(!a.o){a.o=!0;oV(a,3);var c=g.U(a.g);(a.l?Jba:Iba)({videoIds:b,jc:c.jc,pageId:c.pageId,onError:a.IH,ib:a.l?a.JH:a.HH,context:a},c.baseYtUrl,!0)}};
oV=function(a,b,c){if(b!=a.B){switch(b){case 3:var d=dS();break;case 1:d=jP();break;case 2:d=g.Y?{D:"div",W:["ytp-icon","ytp-icon-watch-later"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M16,19.02 L16,12.00 L18,12.00 L18,17.86 L23.10,20.81 L22.10,22.54 L16,19.02 Z"}}]};break;case 4:d=g.Y?{D:"div",W:["ytp-icon","ytp-icon-alert"]}:
{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M21,7.91 L19.60,20.91 L16.39,20.91 L15,7.91 L21,7.91 Z M18,27.91 C16.61,27.91 15.5,26.79 15.5,25.41 C15.5,24.03 16.61,22.91 18,22.91 C19.38,22.91 20.5,24.03 20.5,25.41 C20.5,26.79 19.38,27.91 18,27.91 Z"}}]}}a.updateValue("icon",d);a.B=b}b=g.U(a.g);c?a.update({title:c,image:null}):b.userDisplayName?(c={USER_NAME:b.userDisplayName},a.update({title:a.l?g.S("YTP_ADDED_TO_WATCH_LATER_AS",
c):g.S("YTP_WATCH_LATER_AS_2",c),image:b.userDisplayImage})):a.update({title:g.S("YTP_WATCH_LATER_2"),image:null});aU(a.F)};
qV=function(a){g.W.call(this,{D:"a",W:["ytp-watermark","yt-uix-sessionlink"],N:{target:"_blank",href:"{{url}}","aria-label":g.S("YTP_URL_NAVIGATE_TO",{WEBSITE:uB(g.U(a))}),"data-sessionlink":"feature=player-watermark"},G:[g.Y?{D:"div",W:["ytp-icon","ytp-icon-watermark"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}]});
this.l=a;this.g=null;this.M(a,"videodatachange",this.o);this.M(a,"presentingplayerstatechange",this.B);a=g.tL(a);g.EM(this,!g.T(a,2));this.o()};
rV=function(a){DS.call(this,a);var b=g.U(a),c=g.uL(a);this.Ga=48;this.wa=69;b.K&&(this.Ga=42,this.wa=63);var d=g.U(this.g),e=d.X;if(sx("ytp-normal-css-loaded")){var f=sx("ytp-sprite-mode-css-loaded");e!=f&&g.Q(Error("Player sprite mode mismatch. playerInSpriteMode: "+e+", spriteModeCssServed: "+f+", isMobile: "+d.l),"WARNING")}this.U=null;this.H=[];d=new g.W({D:"div",J:"ytp-gradient-top"});g.K(this,d);g.OL(a,d.element,1);this.Ua=new g.aQ(d,250,!0,100);g.K(this,this.Ua);this.B=new g.W({D:"div",J:"ytp-chrome-top"});
g.K(this,this.B);g.OL(a,this.B.element,1);this.Ta=new g.aQ(this.B,250,!0,100);g.K(this,this.Ta);this.fa=[];this.l=new eV(a,this);g.K(this,this.l);g.OL(a,this.l.element,4);b.o&&b.ud&&(this.zb=new tT(a,this),g.K(this,this.zb),g.OL(a,this.zb.element,4));d=new xT(a);g.K(this,d);g.OL(a,d.element,5);d.subscribe("show",(0,g.A)(this.rm,this,d));this.fa.push(d);d=new zT(a,this,d);g.K(this,d);d.ca(this.B.element);this.Ma=new cV(a);g.K(this,this.Ma);this.Ma.ca(this.B.element);d=new g.xM({D:"div",J:"ytp-chrome-top-buttons"});
g.K(this,d);d.ca(this.B.element);b.bk&&(this.ma=new pV(a,this,this.B.element),g.K(this,this.ma),this.ma.ca(d.element));e=new BT(a,this);g.K(this,e);g.OL(a,e.element,5);e.subscribe("show",(0,g.A)(this.rm,this,e));this.fa.push(e);this.Ra=new DT(a,this,e,this.B.element);g.K(this,this.Ra);this.Ra.ca(d.element);this.R=new JS(a,this,this.B.element);g.K(this,this.R);this.R.ca(d.element);e=new LS(a,this.R);g.K(this,e);e.ca(d.element);(this.o="1"==b.A?new WU(a,this,this.A):null)&&g.K(this,this.o);"3"==b.A&&
(d=new AT(a,this),g.K(this,d),g.OL(a,d.element,8));this.I=new lT(a,this);g.K(this,this.I);this.I.subscribe("show",this.tw,this);this.ya=!1;b.qf&&(d=new qV(a),g.K(this,d),g.OL(a,d.element,7));d=new AQ(a,new mR(a));g.K(this,d);g.OL(a,d.element,4);this.aa=new g.W({D:"div",N:{tabindex:"0"}});this.aa.ea("focus",this.Hy,this);g.K(this,this.aa);this.V=new g.W({D:"div",N:{tabindex:"0"}});this.V.ea("focus",this.Iy,this);g.K(this,this.V);(this.X=b.useTabletControls?null:new nT(a,c,this.I,this.A,this.C,(0,g.A)(this.Tj,
this)))&&g.K(this,this.X);this.M(a,"fullscreentoggled",this.fD);this.M(a,"offlineslatestatechange",this.lG,this);this.M(a,"cardstatechange",this.hf,this)};
kV=function(a,b,c,d,e){b.style.left="";b.style.top="";b.style.bottom="";var f=g.Gh(b);e=e||a.o&&g.Kd(a.o.ha(),c);if(null==d||!e){var k=g.Gh(c);var l=g.Ch(c,a.g.getRootNode())}d=(null==d?l.x+k.width/2:d)-f.width/2;e?(k=YU(a.o),l=ZU(a.o),c=g.uL(a.g).Da().height,d=g.Uc(d,k,k+l-f.width),f=c-(a.o.o.cd()?72:50)-f.height):g.Kd(a.B.element,c)?(k=g.uL(a.g).Da().width,d=g.Uc(d,12,k-f.width-12),f=a.cd()?a.wa:a.Ga,"gvn"==g.U(a.g).g&&(f+=20)):(a=g.uL(a.g).Da(),d=g.Uc(d,12,a.width-f.width-12),f=l.y>(a.height-k.height)/
2?l.y-f.height-12:l.y+k.height+12);b.style.top=f+"px";b.style.left=d+"px"};
sV=function(a,b,c){b=c?b.lastElementChild:b.firstElementChild;for(var d=null;b;){if("none"!=g.qh(b,"display")&&"true"!=b.getAttribute("aria-hidden")){var e=void 0;0<=b.tabIndex?e=b:e=sV(a,b,c);e&&(d?c?e.tabIndex>d.tabIndex&&(d=e):e.tabIndex<d.tabIndex&&(d=e):d=e)}b=c?b.previousElementSibling:b.nextElementSibling}return d};
tV=function(a){this.I=a;this.C=null;this.g=[];this.o=[];this.B=[];this.H=1;this.l=[];this.A=!1};
QL=function(a,b,c){a.A?a.B.push({type:b,data:c}):a.I.O(b,c)};
g.cP=function(a,b,c){g.Sa(a.g,b);g.Va(a.g,b);var d=String(a.H++);b.setAttribute("data-visual-id",d);g.Ce(c,(0,g.A)(a.F,a,b))};
g.dP=function(a,b,c){var d=b.getAttribute("data-visual-id");g.Sa(a.g,b);QL(a,"onLogServerVeCreated",{id:d,tracking_params:c})};
uV=function(a,b){g.J.call(this);var c=this;this.ma=kt(b);var d=this.ma.args||{};this.g=new rB(d);g.K(this,this.g);this.g.experiments.g("html5_parse_inline_fallback_host")&&(Qx=!0);this.xd=KA(iB(this.g)&&"blazer"!=this.g.g,d.enablesizebutton);this.Bc=KA(!1,d.player_wide);this.Ab=this.Mb=!1;this.aa=this.g.ob&&KA(!1,d.external_list);this.Ga=(this.Sc=this.g.ob&&KA(!1,d.external_play_video))&&this.g.experiments.g("player_unified_fullscreen_transitions");this.P=new g.Zs(this);g.K(this,this.P);lg=function(a,
b){g.Q(b,"WARNING")};
this.V=null;this.ba=new g.dq;g.K(this,this.ba);this.fa=new g.dq;g.K(this,this.fa);this.L=new tV(this.fa);this.L.pause();this.l=new mL(this);g.K(this,this.l);this.U=new mL(this,1);g.K(this,this.U);this.H=new CR(this);g.K(this,this.H);this.R=1;this.Ya={};this.K=this.g.storeUserVolume?Vu():{volume:100,muted:this.g.mute};this.wd=this.g.ob?new AF(this,1):new Ev(this,1);g.K(this,this.wd);this.B=null;this.Ra={};d={};this.Za=(d.internalvideodatachange=this.oE,d.playbackready=this.pE,d.playbackstarted=this.qE,
d.statechange=this.oA,d.signatureexpired=this.gH,d);this.A=Kba(this);g.K(this,this.A);this.Ec=new g.Zs(this);g.K(this,this.Ec);this.I=new BF(this.g,this.A);this.o=Lba(this);d={};this.gd=(d.airplayactivechange=this.gE,d.airplayavailabilitychange=this.hE,d.beginseeking=this.xE,d.endseeking=this.hF,d.internalAbandon=this.vF,d.internalaudioformatchange=this.sE,d.internalvideodatachange=this.Fn,d.internalvideoformatchange=this.DH,d.liveviewshift=this.BF,d.playbackstalledatstart=this.lH,d.progresssync=
this.rA,d.seekto=this.sA,d.onLoadProgress=this.CF,d.onVideoProgress=this.uA,d.onLoadedMetadata=this.DF,d.playbackready=this.tG,d.statechange=this.Pu,d.connectionissue=this.QE,d.newelementrequired=this.fG,d.heartbeatparams=this.pA,d.videoelementevent=this.tA,d.drmoutputrestricted=this.eF,d);this.F=null;this.ya=new PR(10,function(a){a!=g.V(c,a.getPlayerType())&&a.dispose()});
g.K(this,this.ya);this.bb=this.zb=-1;this.Ua=new g.P(this.H.Ae,16,this.H);g.K(this,this.Ua);this.Wa=!1;this.ia=!0;this.wa=this.Ma=this.C=null;this.Tc=!1;this.Xb=this.ud=null;this.Ta=this.sa=0;this.X=this.Ka=!1;this.Ha=null;this.P.M(this.l,"crn_appapi",this.mE);this.P.M(this.l,"crx_appapi",this.nE);this.P.M(this.l,"crn_appad",this.au);this.P.M(this.l,"crx_appad",this.au);this.P.M(this.l,"presentingplayerstatechange",this.qA);this.P.M(this.l,"resize",this.RG);this.H.ca(g.gd(a));this.P.M(this.l,"offlineslatestatechange",
this.kG);this.Gc=Mba(this,this.H.element);g.K(this,this.Gc);g.Y=this.g.X;Nba(this);this.I.g("fs");Oba(this);g.wB(this.g)||(this.Ha=new rV(this.l),this.A.I=this.Ha,this.Ha.init())};
Lba=function(a){var b=new fK(a.g,1,a.I,a.H,(0,g.A)(a.ba.O,a.ba),(0,g.A)(a.l.df,a.l));iL(b,a.g.o?1:vV(a,g.ku("yt-player-playback-rate")||1));wV(a,b,a.Za);return b};
Kba=function(a){var b="",c=a.ma.assets.js||"";0==c.indexOf("//")&&(c=a.g.protocol+":"+c);"/base.js"==c.substr(-8)&&(b=c.substr(0,c.length-8)+"/");!a.g.experiments.g("web_player_module_url_debug_killswitch")&&(c=Error().stack)&&(c=c.match(/\((https?:.*?\.js):\d+:\d+\)/))&&(c=c[1],c.includes(b)||g.Q(Error("Player module URL mismatch: "+(c+" vs "+b+".")),"WARNING"));b=new uR(a.l,b,a);c={};a=(c.loaded=(0,g.A)(a.VF,a),c.unloaded=(0,g.A)(a.WF,a),c.destroyed=(0,g.A)(a.xo,a),c);b.fa=a;return b};
yV=function(a,b){var c=!(!a.V||!a.V.Na());a.V||(a.V=new NR(a),g.K(a,a.V),g.OL(a.l,a.V.element,4));g.EM(a.V,b);xV(a)&&c!=b&&g.sL(a.A).WA();b&&a.F.tc("sfn","1",!0)};
AV=function(a){var b=zV.getTag(!0,!a.g.C);a.B=new $J(b);g.K(a,a.B);a.F&&IK(a.F,a.B);try{if(a.g.fa)a.wa&&a.P.Pa(a.wa),a.wa=a.P.M(a.B,"volumechange",a.TF);else{a.B.setVolume(a.K.volume/100);var c=a.B,d=a.K.muted;rx();c.g.muted=d}}catch(e){b="setvolume.1;emsg."+(e.message&&e.message.replace(/[;:,]/g,"_"));g.rK(a.o,"html5.missingapi","YTP_ERROR_UNSUPPORTED_DEVICE",b);return}c=a.H;c.g=b;c.H=!1;if(!c.g.parentNode)try{Cd(c.l,c.g,0)}catch(e){throw Error("videoElement_: "+!!c.g+", containerElement: "+!!c.l+
", containerElement.childNodes: "+!(!c.l||!c.l.childNodes)+", containerInitiallyTruthy: "+c.X+", isDisposed: "+c.ga());}c.B=new g.Wg(0,0,0,0);KR(c);yN(c);g.M(c.g,"video-stream");g.M(c.g,"html5-main-video");b=c.app.g;b.Xb&&c.g.setAttribute("data-no-fullscreen",!0);b.lf&&(c.g.setAttribute("webkit-playsinline",""),c.g.setAttribute("playsinline",""));b.oj&&c.g&&c.M(c.g,"click",c.g.play,c.g);try{pE(a.B)}catch(e){b="activate.1;emsg."+(e.message&&e.message.replace(/[;:,]/g,"_")),g.rK(a.o,"html5.missingapi",
"YTP_ERROR_UNSUPPORTED_DEVICE",b)}};
BV=function(a){if(a.B){a.wa&&(a.P.Pa(a.wa),a.wa=null);a.F&&GK(a.F);DR(a.H);var b=a.B.ha();zV.releaseTag(b);a.B=null}};
SO=function(a,b){var c=g.V(a,b);c||(c=CV(a,b),DV(a,c));VO(a,c)};
VO=function(a,b){if(a.F!=b){var c=null;a.F&&(c=a.F.o,BR(a.A),IL(a,"cuerangesremoved",vI(a.F.K)||[]),WO(a));DV(a,b);a.F=b;a.B&&IK(b,a.B);wV(a,b,a.gd);a.Fn("newdata",b,b.g);c&&!g.JE(c,b.o)&&a.Pu(new g.PE(b.o,c));b.Ka.g&&a.Fn("dataloaded",b,b.g);b.g.Ba&&a.l.la("onPlaybackQualityChange",b.g.Ba.video.quality);IL(a,"cuerangesadded",vI(a.F.K)||[]);DE(b.o)&&OK(b)}};
wV=function(a,b,c){for(var d in c)b.subscribe(d,c[d],a)};
DV=function(a,b){if(b!=a.o){var c=b.getPlayerType();a.Ra[c]=b}};
WO=function(a){if(a.B){var b=a.A.o;b&&b.Lr(a.B)&&(BV(a),AV(a))}GK(a.F);b=a.F;var c=a.gd;for(d in c)b.unsubscribe(d,c[d],a);if(a.g.experiments.g("html5_disable_preserve_reference_redux")){var d=a.F;d!=a.o&&(b=d.getPlayerType(),a.Ra[b]==d&&delete a.Ra[b])}a.F=null};
g.V=function(a,b){return b?1==b?a.o:a.Ra[b]||null:a.F};
CV=function(a,b){var c=a.I;2==b&&(c=new BF(a.g));return new fK(a.g,b,c,a.H,(0,g.A)(a.ba.O,a.ba),(0,g.A)(a.l.df,a.l))};
FV=function(a){var b=a.A;if(!b.B)try{xR(b)?(b.B=new tR(b.ma.U),b.B.create()):g.LL(b.g,"ad")}catch(c){g.LL(b.g,"ad"),g.Q(c)}b.Aq();b.ba?g.LL(b.g,"endscreen"):b.km();b.Dq();b.Fq();b.Eq();b.zq();b.ba?(g.LL(b.g,"annotations_module"),g.LL(b.g,"creatorendscreen")):(b.im(),b.jm());b.yq();b.xq();b.lm();b.Bq();b=EV(a);WD(b,a.g)||wR(a.A);a.Ec.M(a.l,"presentingplayerstatechange",a.yG);a.l.O("videoready",b)};
GV=function(a){var b=mx();return!!(b&&b.canPlayType&&b.canPlayType(a))};
EV=function(a){return a.F.g};
HV=function(a,b){var c=g.V(a,b);return(c=c?c.l:null)?wE(c):0};
Nba=function(a){var b=a.ma.args;a.g.Rb&&JB(b);b=new g.lD(b);g.pu()&&b.rd.push("remote");b.Nc()&&(qK(a.o,b,(0,g.A)(a.Yc,a)),WD(a.o.g,a.g)&&(a.g.wd||a.g.gd)&&tK(a.o))};
Oba=function(a){var b=a.H,c=b.app.g;c.eg||b.Ik("tag-pool-enabled");c.Rb&&b.Ik("house-brand");"gvn"==c.g&&(b.Ik("ytp-gvn"),b.element.style.backgroundColor="transparent");c.ba&&(b.C=g.qt("yt-dom-content-change",b.Ae,b));b.M(window,"resize",b.Ae,b);b=a.wd;b.o=a.H.element;for(var d in b.A)b.o[d]=b.A[d];(d=Fs(a.H.element))&&a.P.M(a.H,d,a.lF);a.P.M(window,"resize",a.SG);b=a.ma.args;AV(a);d=a.o.g;a.l.la("onVolumeChange",a.K);if(b&&QF(b))if((c=xB(a.g))&&!a.aa&&(b.fetch=0),IV(a,b),c&&!a.aa)JV(a);else if(!d.Nc())a.C.onReady((0,g.A)(a.Fo,
a));VO(a,a.o);g.T(a.o.o,128)||(b=px(a.g.C),"fmt.noneavailable"==b?g.rK(a.o,"html5.missingapi","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nocodecs.1"):"html5.missingapi"==b?g.rK(a.o,b,"YTP_ERROR_UNSUPPORTED_DEVICE","nocanplaymedia.1"):d&&d.Nc()&&WD(a.o.g,a.g)&&(a.g.wd||a.g.gd)?KV(a):g.EB(a.g)||LV(a))};
LV=function(a){a.l.O("initializingmode");g.MV(a,2);a.A.lm()};
KV=function(a){if(g.T(a.o.o,128))return!1;WD(a.o.g,a.g)&&a.g.gd&&(zV.hasTags(void 0)&&a.X?(Iv(a,{muted:!1,volume:a.K.volume},!1),NV(a,!1)):zV.hasTags(void 0)||a.K.muted||(Iv(a,{muted:!0,volume:a.K.volume},!1),NV(a,!0)));OV(a,1,a.o.g.videoId);a.l.O("initializingmode");VO(a,a.o);g.MV(a,3);var b=a.A.o,c;(c=!a.g.eg)||(c=!1);if(c||b&&b.Lr(a.B)&&a.Tc)BV(a),AV(a),IK(a.o,a.B);vK(a.o);if(g.T(a.o.o,128))return!1;PV(a,3);return a.Tc=!0};
xV=function(a){a=g.sL(a.A);return!!a&&a.loaded};
QV=function(a,b){if(a.F==a.o&&a.F.wd!=b){var c=a.F;c.wd=b;c.l&&(c.l.g.loop=b);a.l.O("loopchange",b)}};
RV=function(a,b,c){(0,window.isNaN)(b)||(b=vV(a,b),a.o.Ha!=b&&(iL(a.o,b),c&&!a.g.o&&g.ju("yt-player-playback-rate",b),a.l.la("onPlaybackRateChange",b)))};
vV=function(a,b){var c=1;c=a.l.ph();return c=1>b?g.Oa(c,function(a){return a>=b}):Qa(c,function(a){return a<=b})};
TV=function(a,b){var c=eL(a.o,b);a.F&&a.F!=a.o&&(c=SV(c,eL(a.F,b),"ad_"));if(b&&a.B){c["0sz"]=0==g.Gh(a.B.g).yd();c.op=ph(a.B.g,"opacity");var d=uh(a.B.g).y+g.Gh(a.B.g).height;c.yof=0>=d;c.dis=ph(a.B.g,"display")}(d=b?(0,g.OE)():null)&&(c.gpu=d);c.cgr=!0;c.debug_playbackQuality=a.U.Ci();c.debug_date=(new Date).toString();delete c.uga;delete c.q;(d=a.A.H)&&(c=SV(c,d.Mw(),"fresca_"));return JSON.stringify(c,null,2)};
rL=function(a){return 1==a.R?1:xV(a)?3:g.V(a).getPlayerType()};
UV=function(a,b){return 3==rL(a)?ME(g.sL(a.A).F):2==b?a.bb:a.zb};
VV=function(a){var b=a.A.B;b&&b.created&&b.destroy();QV(a,!1);a.Ya={};a=a.I;b=a.l;b.X={};b.aa={};a.A=!1};
JV=function(a){var b=WV();if(b)if(b.list){if(a.C&&a.C.listId.toString()==b.list)if(0<=b.index){var c=b.video;a.l.isFullscreen()&&((c=c[a.C.Oa])&&c.encrypted_id!=a.C.Eb().videoId||(b.index=a.C.Oa));UF(a.C,b);a.Ma&&XV(a,a.Ma)}else a.Ma=null}else a.Lj()};
IV=function(a,b){a.C&&(a.C.unsubscribe("error",a.Lj,a),g.De(a.C),a.C=null);b&&(a.aa&&(b.fetch=0),a.C=new g.PF(b),a.C.subscribe("error",a.Lj,a))};
YV=function(a,b,c,d){b in a.Ya||(c=new g.EF(c,d,{id:b,priority:1}),c.namespace="appad",uI(a.o.K,[c]),a.Ya[b]=c)};
g.MV=function(a,b){b!=a.R&&(2==b&&(PV(a,-1),PV(a,5)),a.R=b,a.l.O("appstatechange",b))};
PV=function(a,b){a.F&&2==a.F.getPlayerType()?a.bb!=b&&(a.bb=b,a.l.la("onAdStateChange",b)):a.zb!=b&&(a.zb=b,a.l.la("onStateChange",b))};
ZV=function(a,b,c,d,e){c=0!=c;if(e=g.V(a,e))2==a.R&&KV(a),xK(e,b,c,d)};
aW=function(a,b,c,d,e){a.g.Rb&&JB(b);var f=new g.lD(b);d||(b&&QF(b)?(xB(a.g)&&!a.aa&&(b.fetch=0),IV(a,b)):a.C&&IV(a,null),a.aa=KA(!1,b.external_list),xB(a.g)&&!a.aa&&JV(a));return $V(a,f,c,e)};
OV=function(a,b,c){var d=b+c;if(c=a.ya.get(d)){a.ya.remove(d);if(c==g.V(a,b))return c;if(1==c.getPlayerType()){c.g.autonavState=a.o.g.autonavState;b=a.o;d=a.Za;for(var e in d)b.unsubscribe(e,d[e],a);e=a.o.Ha;a.o.dispose();a.o=c;iL(a.o,e);wV(a,c,a.Za);VV(a)}else(e=g.V(a,b))&&e.dispose();a.F.getPlayerType()==c.getPlayerType()?VO(a,c):DV(a,c)}return c};
$V=function(a,b,c,d){WC("_start","")||(KC("p",void 0,""),a.I.info("srt",0));var e=OV(a,c||a.F.getPlayerType(),b.videoId);if(!e){e=g.V(a,c);if(!e)return!1;a.Ua.stop();bW(a,c);qK(e,b,(0,g.A)(a.Yc,a),d)}if(!sK(e))return!1;a.Wa&&(e.Mb=!1,a.Wa=!1);if(e==a.o)return g.MV(a,1),KV(a);vK(e);return!0};
cW=function(a,b,c){c=g.V(a,c);b&&c==a.o&&(c.g.Jf=!0)};
eW=function(a,b,c){a.g.Rb&&JB(b);if(b&&QF(b))if(a.ia=!0,IV(a,b),(b=a.C.Eb())&&b.Nc())dW(a,b,c);else a.C.onReady((0,g.A)(a.Fo,a));else c||(c=rL(a)),1==c&&a.Lj(),dW(a,new g.lD(b),c)};
dW=function(a,b,c){var d=g.V(a,c);d&&(bW(a,c),qK(d,b,(0,g.A)(a.Yc,a)),d==a.o&&(g.MV(a,1),LV(a)))};
g.gW=function(a,b,c,d,e,f,k){if(!b&&!d)throw Error("Playback source is invalid");a.l.isFullscreen()&&!a.Ga||!iB(a.g)&&!g.hB(a.g)?(c=a.I,f=c.l,f.X={},f.aa={},c.A=!1,a.I.reset(),b={video_id:b},e&&(b.autoplay="1"),a.g.experiments.g("html5_player_autonav_logging")&&e&&(b.autonav="1"),d?(b.list=d,a.ia=!1,fW(a,b,void 0,void 0,void 0)):aW(a,b,1)):(c=c||{},c.lact=g.Wt(),c.vis=a.l.df(),a.Sc||"gaming"==a.g.g?a.l.la("onPlayVideo",{videoId:b,watchEndpoint:k,sessionData:c,listId:d}):(a=f&&EV(a).isLiveDestination?
a.g.aa:a.g.getVideoUrl(b,d),g.z("yt.player.exports.navigate")(a,c)))};
fW=function(a,b,c,d,e){if(g.Ba(b)&&!g.ya(b)){c="playlist list listType index startSeconds suggestedQuality".split(" ");d={};for(e=0;e<c.length;e++){var f=c[e];b[f]&&(d[f]=b[f])}b=d}else c={index:c,startSeconds:d,suggestedQuality:e},g.w(b)&&16==b.length?c.list="PL"+b:c.playlist=b,b=c;IV(a,b);a.C.onReady((0,g.A)(a.Fo,a))};
g.hW=function(a){if(a.l.app.X)return!1;if(3==rL(a))return!0;xB(a.g)&&!a.aa&&JV(a);return!(!a.C||!a.C.hasNext())};
iW=function(a,b,c){var d=g.V(a,1).g.suggestions;g.PL(a.l)&&d?(d=g.I(d,g.QR),b=d[0],d=c?b.Nq:b.fd,g.gW(a,b.Eb().videoId,d,b.getPlaylistId(),c)):!a.aa||a.l.isFullscreen()&&!a.Ga?3==rL(a)?g.sL(a.A).UA():a.C&&(xB(a.g)&&!a.l.isFullscreen()?XV(a,"yt.www.watch.lists.next"):(a.C.hasNext(b)&&TF(a.C,RF(a.C)),a.C.xe?(b=c&&a.g.experiments.g("html5_player_autonav_logging"),$V(a,a.C.Eb(void 0,c,b),1)):a.ia=!1)):a.l.la("onPlaylistNext")};
jW=function(a,b){!a.aa||a.l.isFullscreen()&&!a.Ga?3==rL(a)?g.sL(a.A).VA():a.C&&(xB(a.g)&&!a.l.isFullscreen()?XV(a,"yt.www.watch.lists.prev"):(a.C.se(b)&&TF(a.C,SF(a.C)),a.C.xe?$V(a,a.C.Eb(),1):a.ia=!1)):a.l.la("onPlaylistPrevious")};
XV=function(a,b){var c=g.z(b);if(c){var d=WV();d&&d.list&&c();a.Ma=null}else a.Ma=b};
WV=function(){var a=g.z("yt.www.watch.lists.getState");return a?a():null};
kW=function(a,b,c,d,e,f){b={id:b};"chapter"==f?(b.style="ytp-chapter-marker",b.visible=!0):(0,window.isNaN)(e)||("ad"==f?b.style="ytp-ad-progress":(b.style="ytp-time-marker",b.color=e),b.visible=!0);c=new g.EF(1E3*c,1E3*d,b);c.namespace="appapi";GL(a,[c],1);return!0};
GL=function(a,b,c){var d=g.V(a,c);d&&(uI(d.K,b),c&&rL(a)!=c||IL(a,"cuerangesadded",b))};
lW=function(a){var b=g.It(),c=a.getCurrentTime();a=EV(a);return b-Math.max(1E3*(c-a.startSeconds),0)};
Iv=function(a,b,c){a.g.U&&(a.K=b,b.muted||NV(a,!1),c&&a.g.storeUserVolume&&!a.g.fa&&(c={volume:Math.floor(b.volume),muted:b.muted},c.unstorable||(g.ju("yt-player-volume",c),g.ju("yt-player-volume",c,2592E3))),mW(a),c=g.Gx&&!a.B.Zc(),!a.g.fa||c)&&(b=g.gc(b),a.g.storeUserVolume||(b.unstorable=!0),a.l.la("onVolumeChange",b))};
mW=function(a){var b=EV(a);b.xj||(b=a.g.fa?1:YD(b,a.g),a.B.setVolume(a.K.volume*b/100),b=a.B,a=a.K.muted,rx(),b.g.muted=a)};
NV=function(a,b){b!=a.X&&(a.X=b,a.l.O("mutedautoplaychange",b))};
oW=function(a,b){var c=window.screen&&window.screen.orientation;if(a.g.experiments.g("lock_fullscreen2")&&c&&c.lock&&(!g.Gx||!g.nW))if(b){var d=0==c.type.indexOf("portrait"),e=g.GR(a.H),f=d;1>e?f=!0:1<e&&(f=!1);if(!a.Ka||f!=d){if(c=c.lock(f?"portrait":"landscape"))c["catch"](g.va);a.Ka=!0}}else a.Ka&&(a.Ka=!1,c.unlock())};
pW=function(a,b){var c=!!b,d=!!a.Ta!=c;a.Ta=b;a.g.Ka=c;a.H.Ae();d&&a.I.g("fsc");d&&(a.l.O("fullscreentoggled",c),d=a.o.g,c={fullscreen:c,videoId:d.ypcOrigin||d.videoId,time:a.getCurrentTime()},a.U.getPlaylistId()&&(c.listId=a.U.getPlaylistId()),a.l.la("onFullscreenChange",c))};
IL=function(a,b,c){a.l.O(b,c);var d=g.gB(a.g)||g.wB(a.g);if(c&&d){switch(b){case "cuerangemarkersupdated":var e="onCueRangeMarkersUpdated";break;case "cuerangesadded":e="onCueRangesAdded";break;case "cuerangesremoved":e="onCueRangesRemoved"}e&&a.l.la(e,c)}};
rW=function(a,b){var c=g.V(a,b);c&&(2==a.R?KV(a):a.g.experiments.g("html5_restore_userreload_killswitch")&&c.o.isError()?qW(a,"user"):(null!=a.V&&a.V.Na()&&a.V.start(),g.T(c.o,2)?(ZV(a,0),a.g.experiments.g("html5_ignore_playing_evt")&&OK(c)):OK(c)))};
bW=function(a,b){g.sC(a.sa);a.sa=0;var c=g.V(a,b);if(c&&1!=a.R&&2!=a.R){(a.g.experiments.g("html5_disable_module_ownership")||c==a.F)&&BR(a.A);if(1==b){a.g.experiments.g("html5_stop_video_in_cancel_playback")&&aL(c);var d=a.A.B;d&&d.created&&d.destroy()}g.FK(c);d=a.g.experiments.g("html5_disable_non_presenting_cueranges")?a.F:c;IL(a,"cuerangesremoved",vI(d.K)||[]);c.K.reset()}};
sW=function(a,b,c,d,e){c=0!=c;var f=g.V(a,e);if(!f||2!=f.getPlayerType()&&!g.PD(f.g))3==rL(a)?g.sL(a.A).yi("control_seek",b,c):ZV(a,b,c,d,e)};
qW=function(a,b,c){if(!a.Wa){c&&(BV(a),AV(a));a.Wa=!0;c=g.V(a);c.Mb=!0;c.tc("reloading","reason."+b);c=EV(a);var d={};d.video_id=c.videoId;d.adformat=c.adFormat;c.oa||(d.start=g.V(a).getCurrentTime(),d.resume="1");c.He&&(d.vvt=c.He);c.vssCredentialsToken&&(d.vss_credentials_token=c.vssCredentialsToken,d.vss_credentials_token_type=c.Hl);c.oauthToken&&(d.oauth_token=c.oauthToken);d.autoplay=1;d.reload_count=c.Uf+1;d.reload_reason=b;c.Gh&&(d.unplugged_partner_opt_out=c.Gh);aW(a,d)}};
tW=function(a,b){a.o.g.autonavState=b;g.ju("yt-player-autonavstate",b);a.l.O("autonavchange",b)};
uW=function(a){var b=EV(a).xj,c=a.g.tf;b||c?(a=a.B,a.C=!0,rx(),a.g.muted=!0):(a.B.C=!1,Iv(a,a.K))};
Mba=function(a,b){return a.g.experiments.g("html5_enable_embedded_player_visibility_signals")&&a.g.o?new VR(b):null};
SV=function(a,b,c){for(var d in b)a[c+d]=b[d];return a};
aa=[];ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ha="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;ia=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)vW=Object.setPrototypeOf;else{var wW;a:{var Pba={xc:!0},xW={};try{xW.__proto__=Pba;wW=xW.xc;break a}catch(a){}wW=!1}vW=wW?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=vW;
ra("Array.prototype.find",function(a){return a?a:function(a,c){a:{var b=this;b instanceof String&&(b=String(b));for(var e=b.length,f=0;f<e;f++){var k=b[f];if(a.call(c,k,f,b)){b=k;break a}}b=void 0}return b}});
ra("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)sa(e,f)&&(a[f]=e[f])}return a}});
ra("Promise",function(a){function b(a){this.g=0;this.o=void 0;this.l=[];var b=this.A();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.g=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.l=function(a){null==this.g&&(this.g=[],this.A());this.g.push(a)};
c.prototype.A=function(){var a=this;this.o(function(){a.C()})};
var e=ha.setTimeout;c.prototype.o=function(a){e(a,0)};
c.prototype.C=function(){for(;this.g&&this.g.length;){var a=this.g;this.g=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(n){this.B(n)}}}this.g=null};
c.prototype.B=function(a){this.o(function(){throw a;})};
b.prototype.A=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.K),reject:a(this.B)}};
b.prototype.K=function(a){if(a===this)this.B(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.L(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.I(a):this.C(a)}};
b.prototype.I=function(a){var b=void 0;try{b=a.then}catch(m){this.B(m);return}"function"==typeof b?this.P(b,a):this.C(a)};
b.prototype.B=function(a){this.F(2,a)};
b.prototype.C=function(a){this.F(1,a)};
b.prototype.F=function(a,b){if(0!=this.g)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.g);this.g=a;this.o=b;this.H()};
b.prototype.H=function(){if(null!=this.l){for(var a=this.l,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.l=null}};
var f=new c;b.prototype.L=function(a){var b=this.A();a.Ej(b.resolve,b.reject)};
b.prototype.P=function(a,b){var c=this.A();try{a.call(b,c.resolve,c.reject)}catch(n){c.reject(n)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(E){f(E)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Ej(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Ej=function(a,b){function c(){switch(d.g){case 1:a(d.o);break;case 2:b(d.o);break;default:throw Error("Unexpected state: "+d.g);}}
var d=this;null==this.l?f.l(c):this.l.push(function(){f.l(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.q(a),f=e.next();!f.done;f=e.next())d(f.value).Ej(b,c)})};
b.all=function(a){var c=g.q(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Ej(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
ra("Math.trunc",function(a){return a?a:function(a){a=Number(a);if((0,window.isNaN)(a)||window.Infinity===a||-window.Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b}});
ra("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
ra("WeakMap",function(a){function b(a){this.Aa=(f+=Math.random()+1).toString();if(a){da();ma();a=g.q(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){sa(a,e)||ka(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!sa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.Aa]=b;return this};
b.prototype.get=function(a){return sa(a,e)?a[e][this.Aa]:void 0};
b.prototype.has=function(a){return sa(a,e)&&sa(a[e],this.Aa)};
b.prototype["delete"]=function(a){return sa(a,e)&&sa(a[e],this.Aa)?delete a[e][this.Aa]:!1};
return b});
ra("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.g;return na(function(){if(c){for(;c.head!=a.g;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.l[c];if(d&&sa(a.l,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,Ic:l}}return{id:c,list:d,index:-1,Ic:void 0}}
function e(a){this.l={};this.g=b();this.size=0;if(a){a=g.q(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.q([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(u){return!1}}())return a;
da();ma();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.l[c.id]=[]);c.Ic?c.Ic.value=b:(c.Ic={next:this.g,previous:this.g.previous,head:this.g,key:a,value:b},c.list.push(c.Ic),this.g.previous.next=c.Ic,this.g.previous=c.Ic,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.Ic&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.l[a.id],a.Ic.previous.next=a.Ic.next,a.Ic.next.previous=a.Ic.previous,a.Ic.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.l={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).Ic};
e.prototype.get=function(a){return(a=d(this,a).Ic)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
ra("Set",function(a){function b(a){this.g=new window.Map;if(a){a=g.q(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.g.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.q([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
da();ma();b.prototype.add=function(a){this.g.set(a,a);this.size=this.g.size;return this};
b.prototype["delete"]=function(a){a=this.g["delete"](a);this.size=this.g.size;return a};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(a){return this.g.has(a)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.g.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ra("Array.from",function(a){return a?a:function(a,c,d){ma();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
ra("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
ra("Array.prototype.includes",function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));for(var e=b.length,f=c||0;f<e;f++)if(b[f]==a||Object.is(b[f],a))return!0;return!1}});
ra("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
ra("Object.values",function(a){return a?a:function(a){var b=[],d;for(d in a)sa(a,d)&&b.push(a[d]);return b}});
var Qba=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
ra("Reflect.construct",function(){return Qba});
ra("Object.entries",function(a){return a?a:function(a){var b=[],d;for(d in a)sa(a,d)&&b.push([d,a[d]]);return b}});
ra("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}});
g.yW=g.yW||{};g.x=this;Ca="closure_uid_"+(1E9*Math.random()>>>0);Da=0;g.H=Date.now||function(){return+new Date};g.F(Ka,Error);Ka.prototype.name="CustomError";var ed;var Sk;g.Ra=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.w(a))return g.w(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.Rba=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.w(a))return g.w(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Fd=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.w(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.I=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.w(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
Sk=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
(0,g.G)(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
g.gk=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Fn=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var Ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},vb=/&/g,wb=/</g,xb=/>/g,yb=/"/g,zb=/'/g,Ab=/\x00/g,ub=/[\x00&<>"']/,Eb=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var zW=g.x.navigator;if(zW){var AW=zW.userAgent;if(AW){g.Pb=AW;break a}}g.Pb=""};var ic="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");pc[" "]=g.va;var vz,SJ,BW,CW,Sba,DW;g.oh=Qb("Opera");g.pd=Qb("Trident")||Qb("MSIE");vz=Qb("Edge");g.BB=vz||g.pd;g.nh=Qb("Gecko")&&!(Db(g.Pb,"WebKit")&&!Qb("Edge"))&&!(Qb("Trident")||Qb("MSIE"))&&!Qb("Edge");g.rd=Db(g.Pb,"WebKit")&&!Qb("Edge");SJ=Qb("Macintosh");g.nW=Qb("Windows");g.nB=Qb("Android");BW=nc();CW=Qb("iPad");Sba=Qb("iPod");g.Jk=oc();
a:{var EW="",FW=function(){var a=g.Pb;if(g.nh)return/rv:([^\);]+)(\)|;)/.exec(a);if(vz)return/Edge\/([\d\.]+)/.exec(a);if(g.pd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.rd)return/WebKit\/(\S+)/.exec(a);if(g.oh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
FW&&(EW=FW?FW[1]:"");if(g.pd){var GW=tc();if(null!=GW&&GW>(0,window.parseFloat)(EW)){DW=String(GW);break a}}DW=EW}var uc=DW,rc={},HW;var IW=g.x.document;HW=IW&&g.pd?tc()||("CSS1Compat"==IW.compatMode?(0,window.parseInt)(uc,10):5):void 0;var wc=HW;var td,Ed,Id;td=!g.pd||g.xc(9);Ed=!g.nh&&!g.pd||g.pd&&g.xc(9)||g.nh&&g.vc("1.9.1");g.JW=g.pd&&!g.vc("9");Id=g.pd||g.oh||g.rd;zc.prototype.tg=!0;zc.prototype.Df=function(){return this.g};
zc.prototype.toString=function(){return"Const{"+this.g+"}"};
var yc={};g.Bc("");var Tba=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),Uba=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),Vba=/^http:\/\/.*/,Wba=/\s+/,Xba=/[\d\u06f0-\u06f9]/;Dc.prototype.tg=!0;Dc.prototype.Df=function(){return this.g};
Dc.prototype.Ym=!0;Dc.prototype.xm=function(){return 1};
var Cc={};Hc.prototype.tg=!0;Hc.prototype.Df=function(){return this.g};
Hc.prototype.Ym=!0;Hc.prototype.xm=function(){return 1};
var Jc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Gc={};Kc("about:blank");g.Oc.prototype.Ym=!0;g.Oc.prototype.xm=function(){return this.l};
g.Oc.prototype.tg=!0;g.Oc.prototype.Df=function(){return this.g};
var Nc={};Qc("<!DOCTYPE html>",0);Qc("",0);Qc("<br>",0);g.h=g.Yc.prototype;g.h.clone=function(){return new g.Yc(this.x,this.y)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.ad.prototype;g.h.clone=function(){return new g.ad(this.width,this.height)};
g.h.yd=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.yd()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.width*=a;this.height*=c;return this};var kd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.h=cd.prototype;g.h.ha=function(){return g.w(void 0)?this.g.getElementById(void 0):void 0};
g.h.getElementsByTagName=function(a,b){return(b||this.g).getElementsByTagName(String(a))};
g.h.createElement=function(a){return this.g.createElement(String(a))};
g.h.appendChild=g.Ad;g.h.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
g.h.removeNode=g.Dd;g.h.contains=g.Kd;var Td=g.va;var eB,dB,fB;g.yz=Qb("Firefox");eB=nc()||Qb("iPod");dB=Qb("iPad");fB=g.mc();g.Gx=kc();g.Lk=lc()&&!oc();var Zd=null,de=null,Yd=null;var ge=[];fe.prototype.clone=function(){return he(this.l,this.A,this.o-this.A)};
fe.prototype.clear=function(){this.l=null;this.g=this.o=this.A=0;this.B=!1};
fe.prototype.reset=function(){this.g=this.A};
fe.prototype.getError=function(){return this.B||0>this.g||this.g>this.o};je.prototype.getError=function(){return this.A||this.g.getError()};
je.prototype.reset=function(){this.g.reset();this.l=this.o=-1};var qe="function"==typeof window.Uint8Array,re=[];pe.prototype.toString=function(){ze(this);return this.l.toString()};
pe.prototype.getExtension=function(a){if(this.o){this.g||(this.g={});var b=a.o;if(a.A){if(a.l())return this.g[b]||(this.g[b]=(0,g.I)(this.o[b]||[],function(b){return new a.g(b)})),this.g[b]}else if(a.l())return!this.g[b]&&this.o[b]&&(this.g[b]=new a.g(this.o[b])),this.g[b];
return this.o[b]}};
pe.prototype.clone=function(){return new this.constructor(Ae(ye(this)))};window.console&&"function"===typeof window.console.log&&(0,g.A)(window.console.log,window.console);var cf=!g.pd||g.xc(9),Yba=g.pd&&!g.vc("9"),Ze=function(){if(!g.x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.x.addEventListener("test",g.va,b);g.x.removeEventListener("test",g.va,b);return a}();g.J.prototype.rb=!1;g.J.prototype.ga=function(){return this.rb};
g.J.prototype.dispose=function(){this.rb||(this.rb=!0,this.T())};
g.J.prototype.T=function(){if(this.nb)for(;this.nb.length;)this.nb.shift()()};g.Fe.prototype.stopPropagation=function(){this.Mg=!0};
g.Fe.prototype.preventDefault=function(){this.defaultPrevented=!0;this.xv=!1};g.F(Ge,g.Fe);var Zba={2:"touch",3:"pen",4:"mouse"};
Ge.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.nh&&(qc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=g.rd||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=g.rd||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?
a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=g.w(a.pointerType)?
a.pointerType:Zba[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Ge.prototype.stopPropagation=function(){Ge.ua.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Ge.prototype.preventDefault=function(){Ge.ua.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Yba)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Je;g.He="closure_listenable_"+(1E6*Math.random()|0);Je=0;Me.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var k=Pe(a,b,d,e);-1<k?(b=a[k],c||(b.Dj=!1)):(b=new Ke(b,this.src,f,!!d,e),b.Dj=c,a.push(b));return b};
Me.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Pe(e,b,c,d);return-1<b?(Le(e[b]),g.Wa(e,b),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
Me.prototype.ci=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Pe(a,b,c,d));return-1<e?a[e]:null};
Me.prototype.hasListener=function(a,b){var c=g.t(a),d=c?a.toString():"",e=g.t(b);return Tb(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Xe="closure_lm_"+(1E6*Math.random()|0),ff={},af=0,jf="__closure_events_fn_"+(1E9*Math.random()>>>0);g.F(g.kf,g.J);g.kf.prototype[g.He]=!0;g.h=g.kf.prototype;g.h.Wo=function(a){this.K=a};
g.h.addEventListener=function(a,b,c,d){g.Te(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.df(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.K;if(b){var c=[];for(var d=1;b;b=b.K)c.push(b),++d}b=this.fa;d=a.type||a;if(g.w(a))a=new g.Fe(a,b);else if(a instanceof g.Fe)a.target=a.target||b;else{var e=a;a=new g.Fe(d,b);g.jc(a,e)}e=!0;if(c)for(var f=c.length-1;!a.Mg&&0<=f;f--){var k=a.currentTarget=c[f];e=lf(k,d,!0,a)&&e}a.Mg||(k=a.currentTarget=b,e=lf(k,d,!0,a)&&e,a.Mg||(e=lf(k,d,!1,a)&&e));if(c)for(f=0;!a.Mg&&f<c.length;f++)k=a.currentTarget=c[f],e=lf(k,d,!1,a)&&e;return e};
g.h.T=function(){g.kf.ua.T.call(this);this.Ed&&g.Oe(this.Ed);this.K=null};
g.h.ea=function(a,b,c,d){return this.Ed.add(String(a),b,!1,c,d)};
g.h.Ek=function(a,b,c,d){return this.Ed.add(String(a),b,!0,c,d)};
g.h.Pa=function(a,b,c,d){this.Ed.remove(String(a),b,c,d)};
g.h.ci=function(a,b,c,d){return this.Ed.ci(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.Ed.hasListener(g.t(a)?String(a):void 0,b)};mf.prototype.get=function(){if(0<this.l){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.o();return a};var tf;var Ef=new mf(function(){return new xf},function(a){a.reset()});
wf.prototype.add=function(a,b){var c=Ef.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
wf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
xf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
xf.prototype.reset=function(){this.next=this.scope=this.g=null};var yf,Af=!1,Bf=new wf;Jf.prototype.reset=function(){this.context=this.l=this.A=this.g=null;this.o=!1};
var Kf=new mf(function(){return new Jf},function(a){a.reset()});
g.If.prototype.then=function(a,b,c){return Uf(this,g.Aa(a)?a:null,g.Aa(b)?b:null,c)};
Ff(g.If);g.If.prototype.cancel=function(a){0==this.g&&g.Cf(function(){var b=new $f(a);Wf(this,b)},this)};
g.If.prototype.I=function(a){this.g=0;Hf(this,2,a)};
g.If.prototype.K=function(a){this.g=0;Hf(this,3,a)};
g.If.prototype.H=function(){for(var a;a=Xf(this);)Yf(this,a,this.g,this.F);this.C=!1};
var dg=sf;g.F($f,Ka);$f.prototype.name="cancel";g.F(g.eg,g.kf);g.h=g.eg.prototype;g.h.enabled=!1;g.h.xa=null;g.h.setInterval=function(a){this.Hb=a;this.xa&&this.enabled?(this.stop(),this.start()):this.xa&&this.stop()};
g.h.gc=function(){if(this.enabled){var a=(0,g.H)()-this.un;0<a&&a<.8*this.Hb?this.xa=this.Fh.setTimeout(this.Ul,this.Hb-a):(this.xa&&(this.Fh.clearTimeout(this.xa),this.xa=null),this.dispatchEvent("tick"),this.enabled&&(this.xa=this.Fh.setTimeout(this.Ul,this.Hb),this.un=(0,g.H)()))}};
g.h.start=function(){this.enabled=!0;this.xa||(this.xa=this.Fh.setTimeout(this.Ul,this.Hb),this.un=(0,g.H)())};
g.h.stop=function(){this.enabled=!1;this.xa&&(this.Fh.clearTimeout(this.xa),this.xa=null)};
g.h.T=function(){g.eg.ua.T.call(this);this.stop();delete this.Fh};var lg=g.va,sg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},rg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.h=tg.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.t(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.H)()+1E3*c)).toUTCString();this.g.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ib(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.t(this.get(a));this.set(a,"",0,b,c);return d};
g.h.jd=function(){return ug(this).keys};
g.h.Ub=function(){return ug(this).values};
g.h.isEmpty=function(){return!this.g.cookie};
g.h.Sd=function(){return this.g.cookie?(this.g.cookie||"").split(";").length:0};
g.h.clear=function(){for(var a=ug(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.nu=new tg("undefined"==typeof window.document?null:window.document);g.nu.l=3950;var wg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,Mg=/#|$/,Ng=/[?&]($|#)/;Rg.prototype.remove=function(a){ec(this.g,a)};
Rg.prototype.set=function(a,b){this.g[a]=b};
Rg.prototype.get=function(a){return fc(this.g,a,null)};g.h=g.Tg.prototype;g.h.Vd=function(){return this.right-this.left};
g.h.getHeight=function(){return this.bottom-this.top};
g.h.clone=function(){return new g.Tg(this.top,this.right,this.bottom,this.left)};
g.h.contains=function(a){return this&&a?a instanceof g.Tg?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.h.expand=function(a,b,c,d){g.Ba(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};
g.h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};g.h=g.Wg.prototype;g.h.clone=function(){return new g.Wg(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Yc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};var hh=null;ch.prototype.getValue=function(){return this.g};
ch.prototype.l=function(){return String(this.g)};
g.F(eh,ch);eh.prototype.l=function(){return this.g?"1":"0"};
g.F(fh,ch);fh.prototype.l=function(){return this.g?Math.round(this.g.top)+"."+Math.round(this.g.left)+"."+(Math.round(this.g.top)+Math.round(this.g.height))+"."+(Math.round(this.g.left)+Math.round(this.g.width)):""};var mh={};new g.eg(200);Oh("d");Ph("d");Qh("d");Oh("f");Ph("f");Qh("f");Oh("i");Ph("i");Qh("i");Oh("j");Ph("j");Qh("j");Qh("j");Oh("u");Ph("u");Qh("u");Oh("v");Ph("v");Qh("v");Qh("v");Oh("b");Ph("b");Qh("b");Oh("e");Ph("e");Qh("e");Oh("s");Ph("s");Qh("s");Oh("B");Ph("B");Qh("B");Oh("x");Ph("x");Qh("x");Oh("y");Ph("y");Qh("y");Oh("g");Ph("g");Qh("g");Oh("h");Ph("h");Qh("h");Oh("n");Ph("n");Qh("n");Oh("o");Ph("o");Qh("o");Qh("o");var ei=window.document,L=window;var Uh=/https?:\/\/[^\/]+/;var Yh=g.qf(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.x.addEventListener("test",null,b)}catch(c){}return a});var ci=!!window.google_async_iframe_id,di=ci&&window.parent||window;var $ba=[0,2,1],KW=null;window.document.addEventListener&&window.document.addEventListener("mousedown",function(a){KW=a},!0);
window.mb=function(a){if(a){var b;if(b=window.event||KW){var c;(c=b.which?1<<$ba[b.which-1]:b.button)&&b.shiftKey&&(c|=8);c&&b.altKey&&(c|=16);c&&b.ctrlKey&&(c|=32);b=c}else b=null;b&&(window.css?(0,window.css)(a.id,"mb",b,void 0,void 0):a&&(a.href=Rh(a.href,"mb",b,void 0)))}};var mk={NONE:0,mK:1},Xj={aK:0,rK:1};hi.prototype.isVisible=function(){return this.Xe?.3<=this.g:.5<=this.g};ii.prototype.getValue=function(){return this.g};ji.prototype.enable=function(){this.o=!0};
ji.prototype.isEnabled=function(){return this.o};
ji.prototype.reset=function(){this.g={};this.o=!0;this.l={}};var mi=(0,g.H)(),qi=-1,oi=-1,LW,si=-1,pi=!1;var vi={},wi=null;vi.le=0;vi.nt=2;vi.Fr=3;vi.Po=5;vi.me=1;vi.om=4;yi.prototype.update=function(a,b,c){a&&(this.g+=b,this.l+=b,this.A+=b,this.o=Math.max(this.o,this.A));if(void 0===c?!a:c)this.A=0};zi.prototype.update=function(a,b,c,d,e,f){f=void 0===f?!0:f;b=e?Math.min(a,b):b;for(e=0;e<this.l.length;e++){var k=this.l[e],l=0<b&&b>=k;k=!(0<a&&a>=k)||c;this.g[e].update(f&&l,d,!f||k)}};Ji.prototype.update=function(a,b,c,d,e){this.F=-1!=this.F?Math.min(this.F,b.g):b.g;e&&(this.P=Math.max(this.P,b.g));this.g.update(b.g,c.g,b.o,a,d);c=d||c.Xe!=b.Xe?c.isVisible()&&b.isVisible():c.isVisible();this.V.update(c,a,!b.isVisible())};
Ji.prototype.Kf=function(){return this.V.o>=this.ba};Ki.prototype.Nc=function(){return!!this.l||!!this.g};
Ki.prototype.toString=function(){return this.l+(this.g?"-":"")+this.g};
Ki.prototype.matches=function(a){return this.g||a.g?this.g==a.g:this.l||a.l?this.l==a.l:!1};var Pi=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;Ri.prototype.wb=function(a,b,c,d){a=a+"//"+b+c;var e=Wi(this)-c.length-d.length;if(0>e)return"";this.g.sort(function(a,b){return a-b});
c=null;b="";for(var f=0;f<this.g.length;f++)for(var k=this.g[f],l=this.l[k],m=0;m<l.length;m++){if(!e){c=null==c?k:c;break}var n=Ui(l[m],this.o,",$");if(n){n=b+n;if(e>=n.length){e-=n.length;a+=n;b=this.o;break}else this.B&&(b=e,n[b-1]==this.o&&--b,a+=n.substr(0,b),b=this.o,e=0);c=null==c?k:c}}f="";this.A&&null!=c&&(f=b+this.A+"="+c);return a+f+d};g.Yi.prototype.clone=function(){return new g.Yi(this.start,this.end)};
g.Yi.prototype.getLength=function(){return this.end-this.start};var MW=null;var ej=g.x.performance,aca=!!(ej&&ej.mark&&ej.measure&&ej.clearMarks),cj=g.qf(function(){var a;if(a=aca){var b;if(null===MW){MW="";try{a="";try{a=g.x.top.location.hash}catch(c){a=g.x.location.hash}a&&(MW=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=MW;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
dj.prototype.l=function(){this.g=!1;this.events!=this.o.google_js_reporting_queue&&(cj()&&(0,g.G)(this.events,fj),this.events.length=0)};
dj.prototype.A=function(a){this.g&&this.events.push(a)};
dj.prototype.start=function(a,b){if(!this.g)return null;var c=$i()||Zi();c=new aj(a,b,c);var d="goog_"+c.uniqueId+"_start";cj()&&ej.mark(d);return c};
dj.prototype.end=function(a){if(this.g&&g.ua(a.value)){var b=$i()||Zi();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";cj()&&ej.mark(b);this.A(a)}};ij.prototype.g=function(a,b,c,d,e){e=e||"jserror";try{var f=new Ri;f.B=!0;Vi(f,1,"context",a);b.error&&b.meta&&b.id||(b=jj(b));b.msg&&Vi(f,2,"msg",b.msg.substring(0,512));b.file&&Vi(f,3,"file",b.file);0<b.line&&Vi(f,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(m){}b=[k];f.g.push(5);f.l[5]=b;var l=Qi();l.l&&Vi(f,6,"top",l.l.url||"");Vi(f,7,"url",l.g.url||"");Xi(this.o,e,f,c)}catch(m){try{Xi(this.o,e,{context:"ecmserr",rctx:a,msg:oj(m),url:l.g.url},c)}catch(n){}}return this.l};
g.r(nj,Li);var hj,lj,bj=fi(),gj=new dj;hj=new function(){var a=void 0===a?L:a;this.A="http:"===a.location.protocol?"http:":"https:";this.l="pagead2.googlesyndication.com";this.o="/pagead/gen_204?id=";this.g=.01};
lj=new ij;"complete"==bj.document.readyState?bj.google_measure_js_timing||gj.l():gj.g&&$h(bj,"load",function(){bj.google_measure_js_timing||gj.l()});
var pj=lj.g;if(ei&&ei.URL){var NW,Wh=ei.URL;NW=!!Wh&&0<Xh().length;lj.l=!NW};g.OW=!g.pd&&!lc();Hj.prototype.getStatus=function(){return"u"};
g.r(Lj,Hj);var Rj=[3,7,8,5,5],Sj=[3,4,4,5,6],Tj=[3,4,5,6],Uj=[3,5];Mj.prototype.A=function(a){this.g&&this.g.contentWindow&&(this.g.contentWindow.requestAnimationFrame(mj(245,this.A,this,void 0)),this.l||(this.l=(0,g.H)()-a),this.o=a)};
Mj.prototype.isVisible=function(a){return 50>a-this.l-this.o};
Mj.prototype.remove=function(){try{g.Dd(this.g)}catch(a){}this.g=null};g.wa(Yj);ak.prototype.Te=function(){return this.C};
ak.prototype.ha=function(){return this.A};bk.prototype.cancel=function(){L.clearTimeout(this.g);this.g=null};
bk.prototype.schedule=function(){var a=this;L&&(this.g=L.setTimeout(rj(143,function(){a.l.yv()}),ti(Yj.getInstance().I)))};g.h=ek.prototype;g.h.Qh=function(){return!0};
g.h.initialize=function(){};
g.h.Bg=function(){return"geo"};
g.h.rg=function(){return{}};
g.h.yv=function(){};
g.h.fp=function(){};
g.h.Te=function(){return this.g};
g.h.oi=function(a){var b=this.l;this.P=a>=this.I;this.l=Math.max(this.I,a);!this.P||1==a&&0!=this.I||this.fp();this.l!=b&&jk(this)};
g.h.ni=function(a){var b=this.g,c=this.H;b=!(a&&(void 0===c||!c||b.volume==a.volume)&&b.A==a.A&&Ug(b.g,a.g));this.g=a;b&&ik(this)};
g.h.yh=function(){return this.H};
g.h.dispose=function(){this.U=!0};
g.h.ga=function(){return this.U};g.h=kk.prototype;g.h.Xl=function(){this.o=new ak(this.g.Te(),this.element,this.o.g,this.o.o,this.o.l,this.o.B)};
g.h.dispose=function(){if(!this.ga()){var a=this.g;g.Xa(a.B,this);a.H&&this.yh()&&hk(a);this.A=!0}};
g.h.ga=function(){return this.A};
g.h.rg=function(){return this.g.rg()};
g.h.oi=function(){};
g.h.ni=function(){this.Xl()};
g.h.yh=function(){return this.Kj};var lk=new g.Tg(0,0,0,0),zk={threshold:[0,.3,.5,.75,1]};g.h=nk.prototype;g.h.Kj=function(){return!1};
g.h.fk=function(){return new Ji};
g.h.Lc=function(){return this.zn};
g.h.Xr=function(){};
g.h.Wr=function(){};
g.h.sr=function(){};
g.h.Cl=function(){};
g.h.kf=function(a,b,c,d,e,f,k){k=void 0===k?{}:k;var l=this.gr(c,k);k=this.Vl(a,b,d,k);g.ua(b)||(this.Zt=new g.Yc(a.left-b.left,a.top-b.top),this.cj=new g.ad(b.right-b.left,b.bottom-b.top));e=e&&this.Kb.g>=(this.Xe()?.3:.5);this.pp(l,k,e,f);this.zg=c;0<k.g&&-1===this.aw&&(this.aw=c);-1==this.bw&&this.Kf()&&(this.bw=c);if(-2==this.wn)try{a:{var m=g.ua(b)?null:b;if(a&&a!=lk&&0!=this.yd){if(!m){if(!this.cj){var n=-1;break a}m=new g.Tg(0,this.cj.width,this.cj.height,0)}n=m.Vd&&0<m.Vd()&&m.getHeight&&
0<m.getHeight()?this.Vh(a,m):-1}else n=-1}this.wn=n}catch(p){sj(207,p)}this.Kb=k;d&&(this.Kb.g=0);this.An(this)};
g.h.pp=function(a,b,c,d){this.Lc().update(a,b,this.Kb,c,d)};
g.h.Cm=function(){return new hi};
g.h.Vl=function(a,b,c){var d=this.Cm();d.o=c;c=ui();d.l=0==c?-1:1==c?0:1;d.g=g.ua(b)?this.Vh(b):this.Vh(a,b);d.Xe=this.Xe();return d};
g.h.gr=function(a){if(-1==this.zg)return 0;a=a-this.zg||1;return 1E4<a?1:a};
g.h.Vh=function(a,b){if(0===this.opacity&&1===li(this.Wc,"opac"))return 0;if(g.ua(a))return a;if(b){var c=Dj(a,b),d=1==li(this.Wc,"od");return 0>=this.yd||Gj(c,b,this.ne,d)?0:(c.bottom-c.top)*(c.right-c.left)/this.yd}return 0};
g.h.Xe=function(){return!1};
g.h.qe=function(){return 0};
g.h.Kf=function(){return this.zn.Kf()};
g.h.Yo=function(a){a=void 0===a?1:a;if(!this.ne)return!1;var b=this.Xe();b&&(a=4);b=new Lj(b,a);if(a=Oj(b,this.ne))this.Ng=b;return a};var Fk="StopIteration"in g.x?g.x.StopIteration:{message:"StopIteration",stack:""};Ek.prototype.next=function(){throw Fk;};
Ek.prototype.Me=function(){return this};g.Kk=function(){if(g.nW){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(g.Pb))?a[1]:"0"}return SJ?(a=/10[_.][0-9_.]+/,(a=a.exec(g.Pb))?a[0].replace(/_/g,"."):"10"):g.nB?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(g.Pb))?a[1]:""):BW||CW||Sba?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(g.Pb))?a[1].replace(/_/g,"."):""):""}();Qk.prototype.add=function(a,b,c){++this.o;var d=this.o/4096;this.g.push(Ok(new Nk(a,b,c),d));this.l=!0;return this};var PW=new Date(0);g.Fb(PW.getUTCFullYear(),4);g.Fb(PW.getUTCMonth()+1,2);g.Fb(PW.getUTCDate(),2);g.Fb(PW.getUTCHours(),2);g.Fb(PW.getUTCMinutes(),2);var $m={currentTime:1,duration:2,isVpaid:4,volume:8,isYouTube:16,isPlaying:32},Zm={Tx:"start",vx:"firstquartile",Ex:"midpoint",Yx:"thirdquartile",Yw:"complete",Dx:"metric",PAUSE:"pause",Kx:"resume",Qx:"skip",ay:"viewable_impression",Fx:"mute",Zx:"unmute",wx:"fullscreen",rx:"exitfullscreen",xx:"fully_viewable_audible_half_duration_impression",Cx:"measurable_impression",Tw:"abandon",nx:"engagedview",Ax:"impression",hx:"creativeview",Bx:"loaded",EL:"progress",CLOSE:"close",XJ:"collapse",rL:"overlay_resize",
sL:"overlay_unmeasurable_impression",tL:"overlay_unviewable_impression",vL:"overlay_viewable_immediate_impression",uL:"overlay_viewable_end_of_session_impression",jx:"custom_metric_viewable"},On="start firstquartile midpoint thirdquartile resume loaded".split(" "),Pn=["start","firstquartile","midpoint","thirdquartile"],wl=["abandon"],Xm={UNKNOWN:-1,Tx:0,vx:1,Ex:2,Yx:3,Yw:4,Dx:5,PAUSE:6,Kx:7,Qx:8,ay:9,Fx:10,Zx:11,wx:12,rx:13,xx:14,Cx:15,Tw:16,nx:17,Ax:18,hx:19,Bx:20,jx:21};g.r(al,hi);cl.prototype.g=function(a){var b=this.o[a],c=b[1];this.A+=b[0];0<c&&0==this.l[a]&&(this.l[a]=1)};g.wa(gl);il.prototype.getValue=function(){return this.l};
il.prototype.update=function(a,b){32<=a||(this.g&1<<a&&!b?this.l&=~(1<<a):this.g&1<<a||!b||(this.l|=1<<a),this.g|=1<<a)};g.r(jl,Ji);
jl.prototype.update=function(a,b,c,d,e){if(!b.paused){Ji.prototype.update.call(this,a,b,c,d,e);e=bl(b)&&bl(c);var f=.5<=(d?Math.min(b.g,c.g):c.g);Cj(b.volume)&&(this.A=-1!=this.A?Math.min(this.A,b.volume):b.volume,this.C=Math.max(this.C,b.volume));f&&(this.L+=a,this.I+=e?a:0);this.o.update(b.g,c.g,b.o,a,d,e);this.l.update(!0,a);this.B.update(e,a);this.K.update(c.fullscreen,a);this.fa.update(e&&!f,a);a=Math.floor(b.A/1E3);this.U.update(a,b.isVisible());this.X.update(a,1<=b.g);this.aa.update(a,bl(b))}};g.r(ml,ll);ml.prototype.A=function(){return!0};
ml.prototype.o=function(){return!1};
ml.prototype.getId=function(){var a=this,b=ac(Zm,function(b){return b==a.B});
return Xm[b].toString()};
ml.prototype.toString=function(){var a="";this.o()&&(a+="c");this.g&&(a+="s");0<this.l&&(a+=":"+this.l);return this.getId()+a};var bca=new g.Tg(0,0,0,0);g.r(ol,nk);g.h=ol.prototype;g.h.Kj=function(){return!0};
g.h.Yo=function(a){a=void 0===a?3:a;var b=gl.getInstance(),c=hl(b,509445013);b=hl(b,509445011);return c||b?(this.Ya=!0,nk.prototype.Yo.call(this,a)):!1};
g.h.Xr=function(a){var b=this,c=a-this.Ua;this.wa&&1E3>=c||(c=g.z("ima.bridge.getNativeViewability"),g.Aa(c)&&(c(this.uc,function(a){b.wa=!1;b.K&&(b.Ka=!0);g.cc(a)&&b.Ga++;b.Cl(a)}),this.wa=!0,this.Ua=a))};
g.h.Wr=function(a){var b=Yj.getInstance();a-this.Ta>ti(b.I)&&(a=g.z("ima.admob.getViewability"),g.Aa(a)&&a(this.uc))};
g.h.sr=function(a){this.Ta=ni();this.Cl(a)};
g.h.Cl=function(a){var b=a.opt_nativeViewBounds||{},c=a.opt_nativeViewVisibleBounds||{},d=a.opt_nativeTime||-1,e=a.opt_nativeVolume,f=a.opt_nativeViewAttached;a=a.opt_nativeViewHidden;void 0!==f&&(this.ma=!!f);b=new g.Tg(b.top||0,b.left+b.width||0,b.top+b.height||0,b.left||0);c=a?bca.clone():new g.Tg(c.top||0,c.left+c.width||0,c.top+c.height||0,c.left||0);f=void 0;if("n"==this.A||"ml"==this.A)f={volume:e};e=f;e=void 0===e?{}:e;this.yd=(b.bottom-b.top)*(b.right-b.left);this.position=b;this.kf(b,c,
d,!1,!0,!0,e)};
g.h.kf=function(a,b,c,d,e,f,k){var l=this;k=void 0===k?{}:k;var m=this.ya(this)||{};g.jc(m,k);this.B=m.duration||this.B;this.nb=m.isVpaid||this.nb;this.P=m.isYouTube||this.P;this.ba=f;nk.prototype.kf.call(this,a,b,c,d,e,f,m);(0,g.G)(this.F,function(a){a.g||(a.g=nl(a,l))})};
g.h.pp=function(a,b,c,d){nk.prototype.pp.call(this,a,b,c,d);this.H[this.H.length-1].update(a,b,this.Kb,c,d);this.sa=bl(this.Kb)&&bl(b);-1==this.V&&this.Ma&&(this.V=this.Lc().l.g);this.Tb.A=0;a=this.Kb;b=this.Kf();.5<=a.g&&this.Tb.g("vs");b&&this.Tb.g("vw");Cj(a.volume)&&this.Tb.g("am");this.sa&&this.Tb.g("a");this.Zd&&this.Tb.g("f");-1!=a.l&&(this.Tb.g("bm"),1==a.l&&this.Tb.g("b"));this.sa&&b&&this.Tb.g("avw");this.ba&&this.Tb.g("cm");this.ba&&0<a.g&&this.Tb.g("pv");sl(this,this.Lc().l.g,!0)&&this.Tb.g("gdr");
2E3<=Fi(this.Lc().g,1)&&this.Tb.g("pmx")};
g.h.fk=function(){return new jl};
g.h.Lc=function(){return this.zn};
g.h.Cm=function(){return new al};
g.h.Vl=function(a,b,c,d){a=nk.prototype.Vl.call(this,a,b,c,d);a.fullscreen=this.Zd;a.paused=this.C;a.volume=d.volume;Cj(a.volume)||(this.Za++,b=this.Kb,Cj(b.volume)&&(a.volume=b.volume));d=d.currentTime;a.A=g.t(d)&&0<=d?d:-1;return a};
g.h.gr=function(a,b){var c=g.t(b.currentTime)?b.currentTime:this.U;if(-1==this.zg||this.C)var d=0;else{d=a-this.zg||1;var e=1E4;g.t(this.B)&&-1!=this.B&&(e=Math.max(e,this.B/3));d=d>e?1:d}e=c-this.U;var f=0;0<=e?(this.L+=d,this.aa+=Math.max(d-e,0),f=Math.min(e,this.L)):this.rb+=Math.abs(e);0!=e&&(this.L=0);-1==this.Ha&&0<e&&(this.Ha=0<=si?ni()-si:-1);this.U=c;return 1==(hl(gl.getInstance(),668123009)||this.P?1:0)?f:d};
g.h.Vh=function(a,b){return this.K?0:this.Zd?1:nk.prototype.Vh.call(this,a,b)};
g.h.qe=function(){return 1};
g.h.getDuration=function(){return this.B};
g.h.jk=function(a,b,c){if(this.Ye)return{"if":0};var d=this.position.clone();d.round();var e=(0,g.I)(this.l,function(a){return 100*a.dJ|0}),f=Yj.getInstance(),k=this.Lc(),l={};
this.Ya&&(l.avms="raf");l["if"]=f.l?1:void 0;l.sdk=this.A?this.A:void 0;l.t=this.OI;l.p=[d.top,d.left,d.bottom,d.right];l.tos=Bi(k.g,!1);l.mtos=Ei(k.g);l.mcvt=k.V.o;l.ps=void 0;l.pt=e;d=kl(k,ni(),!!this.C);l.vht=d;l.mut=k.fa.o;l.a=ql(this.Kb.volume);l.mv=ql(k.C);l.fs=this.Zd?1:0;l.ft=k.K.g;l.at=k.B.g;l.as=.1<=k.A?1:0;l.atos=Bi(k.o);l.amtos=Ei(k.o);l.uac=this.Za;l.vpt=k.l.g;"nio"==f.fb&&(l.nio=1,l.avms="nio");l.gmm="4";l.gdr=sl(this,k.l.g,!0)?1:0;this.sp&&(l.efpf=this.qm);0<this.Ga&&(l.nnut=this.Ga);
l.tcm=hl(gl.getInstance(),668123009)||this.P?1:0;l.nmt=this.rb;l.bt=this.aa;l.pst=this.Ha;l.vpaid=this.nb;l.dur=this.B;l.vmtime=this.U;l.is=this.Tb.A;1<=this.l.length&&(l.i0=this.l[0].uk);2<=this.l.length&&(l.i1=this.l[1].uk);3<=this.l.length&&(l.i2=this.l[2].uk);4<=this.l.length&&(l.i3=this.l[3].uk);l.cs=fl(this.Tb);a&&(l.ic=el(this.Tb),l.dvpt=k.l.l,l.dvs=Gi(k.g,.5),l.dfvs=Gi(k.g,1),l.davs=Gi(k.o,.5),l.dafvs=Gi(k.o,1),b&&(k.l.l=0,Hi(k.g),Hi(k.o)),this.Kf()&&(l.dtos=k.L,l.dav=k.I,l.dtoss=this.X+1,
b&&(k.L=0,k.I=0,this.X++)),l.dat=k.B.l,l.dft=k.K.l,b&&(k.B.l=0,k.K.l=0));f.A&&(l.ps=[f.A.width,f.A.height]);f.g&&(l.bs=[f.g.width,f.g.height]);f.C&&(l.scs=[f.C.width,f.C.height]);l.dom=f.domain;this.Jh&&(l.vds=this.Jh);if(0<this.F.length||this.ti)a=g.ab(this.F),this.ti&&a.push(this.ti),l.pings=(0,g.I)(a,function(a){return a.toString()});
l.ces=(0,g.I)((0,g.Fd)(this.F,function(a){return a.o()}),function(a){return a.getId()});
this.g&&(l.vmer=this.g);this.I&&(l.vmmk=this.I);this.R&&(l.vmiec=this.R);this.fb&&(l.avms=this.fb.Bg(),g.jc(l,this.fb.rg()));"exc"==f.fb&&(l.femt=this.ia,l.femvt=this.bb,l.emc=this.Wa,l.emb=Bi(this.Ra,!1),l.emuc=this.fa,l.avms="exc");c?(l.c=xk(this.Kb.g,2),l.ss=xk(yl(this),2)):l.tth=ni()-LW;l.mc=xk(k.P,2);l.nc=xk(k.F,2);l.mv=ql(k.C);l.nv=ql(k.A);l.lte=xk(this.wn,2);c=this.H[this.H.length-1];Ei(k.g);l.qmtos=Ei(c.g);l.qnc=xk(c.F,2);l.qmv=ql(c.C);l.qnv=ql(c.A);l.qas=.1<=c.A?1:0;l.qi=this.uc;null!==this.ma&&
(l.nvat=this.ma?1:0);l.avms||(l.avms="geo");l.psm=k.U.g;l.psv=k.U.getValue();l.psfv=k.X.getValue();l.psa=k.aa.getValue();k=gl.getInstance().g;k.length&&(l.veid=k);return l};g.h=zl.prototype;g.h.create=function(a,b,c,d){var e=null;this.g&&(e=new nm(a,this.g,b,void 0===c?!1:c,void 0===d?function(){return null}:d),fk(this.g,e));
return e};
g.h.Qh=function(){return!1};
g.h.init=function(){return!0};
g.h.dispose=function(){this.B=!0};
g.h.ga=function(){return this.B};
g.h.rg=function(){return{}};g.wa(Al);g.F(g.Cl,g.J);g.h=g.Cl.prototype;g.h.gh=!1;g.h.ji=0;g.h.xa=null;g.h.fh=function(a){this.g=arguments;this.xa||this.ji?this.gh=!0:Dl(this)};
g.h.stop=function(){this.xa&&(g.x.clearTimeout(this.xa),this.xa=null,this.gh=!1,this.g=[])};
g.h.pause=function(){this.ji++};
g.h.resume=function(){this.ji--;this.ji||!this.gh||this.xa||(this.gh=!1,Dl(this))};
g.h.T=function(){g.Cl.ua.T.call(this);this.stop()};
g.h.Vy=function(){this.xa=null;this.gh&&!this.ji&&(this.gh=!1,Dl(this))};g.h=Fl.prototype;g.h.Yr=function(){Kl(this,!1);this.Qm()};
g.h.Qm=function(){Ml(this,Ul(this),!1)};
g.h.yv=function(){Ml(this,Ul(this),!1)};
g.h.yr=function(){var a=Rl(this),b=ni();a?(pi||(qi=b,(0,g.G)(this.g,function(a){var c=a.Lc();c.R=kl(c,b,!!a.C)})),pi=!0,Kl(this,!0)):(this.R=Wl(this,b),pi=!1,LW=b,(0,g.G)(this.g,function(a){a.mg&&(a.Lc().H=b)}));
Ml(this,Ul(this),!a)};
g.h.SI=function(a){var b;if(b=null!=a.IntersectionObserver){if(a=Xl(a,"nio",Ul(this)))Yj.getInstance().fb="nio";b=a}return b};
g.h.TI=function(a){return Mk()&&Yl(this,a)};
g.h.RI=function(a){if(g.nh&&g.ua(a.screenX)&&g.ua(a.mozInnerScreenX)&&g.ua(a.outerWidth)){a=a.navigator.userAgent;var b=a.indexOf("Firefox/");if(0<=b){b=Math.floor(a.substr(b+8))||-1;var c=a.indexOf("Mac OS X 10."),d=-1;0<=c&&(d=Number(a.substr(c+12,1))||-1);var e=0<d?-1:a.indexOf("Windows NT ");c=-1;0<=e&&(c={"6.0":0,"6.1":1,"6.2":2}[a.substr(e+11,3)]||-1);a=148;5<=d?a=4<=b?108:3<=b?127:108:0<=c&&(16==b||17==b||18==b)&&(a=[[146,146,146],[148,147,148],[131,130,136]][c][b-16])}else a=null;null!==a&&
(this.I=a,Yj.getInstance().fb="xde");return!0}return!1};
g.h.QI=function(a){return g.pd&&g.vc(8)&&g.Aa(xi(a&&a.document))?(Yj.getInstance().fb="iem",!0):!1};
g.h.reset=function(){this.g=[];this.o=[]};
g.wa(Fl);var Hl=Fl.getInstance();var Jm=null,Pm="",Lm=!1;var gm=function(a,b){return function(c){for(var d=0;d<b.length;d++)if(b[d]===c[a]||!g.t(b[d])&&!c.hasOwnProperty(a))return!0;return!1}}("e",[void 0,
1,2,3,4,8,16]),cca={sv:"sv",cb:"cb",e:"e",nas:"nas",msg:"msg","if":"if",sdk:"sdk",p:"p",tos:"tos",mtos:"mtos",mcvt:"mcvt",ps:"ps",scs:"scs",bs:"bs",pt:"pt",vht:"vht",mut:"mut",a:"a",ft:"ft",dft:"dft",at:"at",dat:"dat",as:"as",vpt:"vpt",gmm:"gmm",std:"std",efpf:"efpf",swf:"swf",nio:"nio",px:"px",nnut:"nnut",vmer:"vmer",vmmk:"vmmk",vmiec:"vmiec",nmt:"nmt",tcm:"tcm",bt:"bt",pst:"pst",vpaid:"vpaid",dur:"dur",vmtime:"vmtime",dtos:"dtos",dtoss:"dtoss",dvs:"dvs",dfvs:"dfvs",dvpt:"dvpt",fmf:"fmf",vds:"vds",
is:"is",i0:"i0",i1:"i1",i2:"i2",i3:"i3",ic:"ic",cs:"cs",c:"c",mc:"mc",nc:"nc",mv:"mv",nv:"nv",qmt:hm("qmtos"),qnc:hm("qnc"),qmv:hm("qmv"),qnv:hm("qnv"),raf:"raf",rafc:"rafc",lte:"lte",ces:"ces",tth:"tth",femt:"femt",femvt:"femvt",emc:"emc",emuc:"emuc",emb:"emb",avms:"avms",nvat:"nvat",qi:"qi",psm:"psm",psv:"psv",psfv:"psfv",psa:"psa",pnk:"pnk",pnc:"pnc",pnmm:"pnmm",pns:"pns",ptlt:"ptlt",dc_rfl:"urlsigs",pngs:"pings",obd:"obd",veid:"veid"},dca={c:cm("c"),at:"at",atos:fm("atos",[0,2,4]),ta:function(a,
b){return function(c){if(!g.t(c[a]))return b}}("tth","1"),
a:"a",dur:"dur",p:"p",tos:em(),j:"dom",mtos:fm("mtos",[0,2,4]),gmm:"gmm",gdr:"gdr",ss:cm("ss"),vsv:of("w2"),t:"t"},eca={atos:"atos",amtos:"amtos",avt:fm("atos",[2]),davs:"davs",dafvs:"dafvs",dav:"dav",ss:cm("ss"),t:"t"},fca={a:"a",tos:em(),at:"at",c:cm("c"),mtos:fm("mtos",[0,2,4]),dur:"dur",fs:"fs",p:"p",vpt:"vpt",vsv:of("ias_w2"),dom:"dom",gmm:"gmm",gdr:"gdr",t:"t"},gca={tos:em(),at:"at",c:cm("c"),mtos:fm("mtos",[0,2,4]),p:"p",vpt:"vpt",vsv:of("dv_w4"),gmm:"gmm",gdr:"gdr",dom:"dom",t:"t",mv:"mv",
qmpt:fm("qmtos",[0,2,4]),qvs:function(a,b){return function(c){var d=c[a];if(g.ua(d))return(0,g.I)(b,function(a){return 0<d&&d>=a?1:0})}}("qnc",[1,
.5,0]),qmv:"qmv",qa:"qas",a:"a"};g.r(im,ml);im.prototype.A=function(a){return a.Lc().Kf()};g.r(mm,km);mm.prototype.g=function(a){var b=new jm;b.g=lm(a,cca);b.o=lm(a,eca);return b};g.r(nm,kk);
nm.prototype.Xl=function(){if(this.element){var a=this.element.getBoundingClientRect(),b=a.right-a.left;a=a.bottom-a.top;var c=g.Ah(this.element,this.g.A),d=c.x;c=c.y;this.l=new g.Tg(Math.round(c),Math.round(d+b),Math.round(c+a),Math.round(d))}(b=this.g.Te().g)?(b=Dj(this.l,b),b=b.top>=b.bottom||b.left>=b.right?new g.Tg(0,0,0,0):Vg(b,-this.l.left,-this.l.top)):b=new g.Tg(0,0,0,0);var e=this.g.Te().g;d=a=0;var f=1==li(this.Wc,"od");c=(this.l.bottom-this.l.top)*(this.l.right-this.l.left);e&&b&&0<c&&
(Gj(b,e,this.element,f)?b=new g.Tg(0,0,0,0):(f=(b.bottom-b.top)*(b.right-b.left),e=(e.bottom-e.top)*(e.right-e.left),a=f/c,e&&(d=f/e)));this.o=new ak(this.g.Te(),this.element,this.l,b,a,d)};
nm.prototype.Bg=function(){return this.o.Te().o.Bg()};g.r(pm,zl);g.h=pm.prototype;g.h.Bg=function(){return this.l?this.l.Bg():this.g?this.g.Bg():"none"};
g.h.rg=function(){return this.l?this.l.rg():this.g?this.g.rg():{}};
g.h.init=function(a){this.A=a;return this.g?((0,g.G)(this.o,function(a){return a.initialize()}),fk(this.g,this),!0):!1};
g.h.dispose=function(){(0,g.G)(this.o,function(a){a.fp();a.dispose()});
zl.prototype.dispose.call(this)};
g.h.Qh=function(){return(0,g.gk)(this.o,function(a){return a.Qh()})};
g.h.oi=function(a){0==a&&this.A(this.g.F,this)};
g.h.ni=function(a){this.l=a.o};
g.h.yh=function(){return!1};g.r(qm,ek);qm.prototype.Bg=function(){return"osd"};
qm.prototype.initialize=function(){var a=this;if(this.C.Nc()){tj(g.x,"message",function(b){if(null!=b&&b.data&&g.w(b.data)){var c=b.data;if(g.w(c)){var e={};c=c.split("\n");for(var f=0;f!=c.length;++f){var k=c[f],l=k.indexOf("=");if(!(0>=l)){var m=Number(k.substr(0,l));k=k.substr(l+1);switch(m){case 26:case 15:case 8:case 11:case 16:case 5:case 18:k="true"==k;break;case 4:case 6:case 25:case 28:case 29:case 24:case 23:case 22:case 7:case 21:case 20:k=Number(k);break;case 19:case 3:if(g.Aa(window.decodeURIComponent))try{k=
(0,window.decodeURIComponent)(k)}catch(p){throw Error("Error: URI malformed: "+k);}}e[m]=k}}e=e[0]?e:null}else e=null;if(e&&a.C.matches(new Ki(e[4],e[12]))&&(c=e[29],f=e[0],g.Sa(["goog_acknowledge_monitoring","goog_get_mode","goog_update_data","goog_image_request"],f))){Gm(a,e);if("goog_get_mode"==f&&b.source){m={};uj(a.C,m);m[0]="goog_provide_mode";m[6]=a.V;m[19]=a.L;m[16]=a.R;try{var n=vj(m);b.source.postMessage(n,b.origin)}catch(p){}}if("goog_get_mode"==f||"goog_acknowledge_monitoring"==f)vm(a,
e[28]),a.K=2,tm(a);if(a.o.length||a.B.length)switch(4!=c&&(k=e[0],m=!1,b=a.g.l,n=a.g.volume,c=a.g.g,f=ni(),"goog_acknowledge_monitoring"==k&&(a.l=e[8]?0:2,jk(a)),(0,window.isNaN)(e[22])||(0,window.isNaN)(e[23])||(m=!0,b=new g.ad(e[22],e[23])),e[9]&&(m=!0,k=e[9].split("-"),4==k.length&&(c=new g.Tg(Mb(k[0]),Mb(k[3]),Mb(k[2]),Mb(k[1])))),m&&(m=Rl(Hl),a.g=new Zj(f,b,c,m,a,n),ik(a))),b=e[0],n=100*e[25],g.ua(n)&&!(0,window.isNaN)(n)&&xm(a,n),void 0!=e[18]&&ym(a,e[18]),void 0!=e[7]&&0<e[7]&&zm(a,e[7]),n=
!!e[5],c=!!e[11],f=!1,"goog_update_data"==b&&(f=!!e[15],wm(a,e[3])),b){case "goog_image_request":Am(a,n,c);case "goog_update_data":n&&Em(a,f),c&&Fm(a)}}}},118);
var b=rj(197,function(){um(a,a.V,a.C,a.R,a.L,function(){a.l=0;jk(a)})});
this.K=1;this.X=this.A.setInterval(b,500)}else this.l=0,this.F="ib",this.I=this.l=0,jk(this)};
qm.prototype.fp=function(){var a={};uj(this.C,a);a[0]="goog_stop_monitoring";a=vj(a);var b=rm(this,!1),c=!b;c&&(b=this.A.parent);if(b&&b.postMessage)try{b.postMessage(a,"*"),c&&this.A.postMessage(a,"*")}catch(d){}};
g.wa(qm);g.h=Hm.prototype;g.h.ik=function(){};
g.h.Hm=function(){return[new im("viewable_impression",this.g)]};
g.h.oi=function(a){switch(a){case 0:Yj.getInstance().o=!1;Km();break;case 2:Jl()}};
g.h.ni=function(a){var b=Yj.getInstance();b.g=a.l;b.B=a.g};
g.h.yh=function(){return!1};
g.h.Bz=function(a){vl(a,0);return xl(a,"start",Rl(Hl))};
g.h.Hh=function(a,b,c){Ml(Hl,[a],!Rl(Hl),b);return this.Ef(a,b,c)};
g.h.Ef=function(a,b,c){return xl(a,c,Rl(Hl))};
g.h.vz=function(a,b){return Rm(a,"firstquartile",1,b)};
g.h.xz=function(a,b){a.Ma=!0;return Rm(a,"midpoint",2,b)};
g.h.Cz=function(a,b){return Rm(a,"thirdquartile",3,b)};
g.h.sz=function(a,b){var c=Rm(a,"complete",4,b);a.Zd=!1;Tm(1,a.uc);return c};
g.h.zz=function(a,b){var c=Rl(Hl);if(a.C&&!c){var d=ni();a.Lc().H=d}Ml(Hl,[a],!c,b);a.C=!1;return xl(a,"resume",c)};
g.h.Az=function(a,b){var c=this.Hh(a,b||{},"skip");a.Zd=!1;Tm(1,a.uc);return c};
g.h.wz=function(a,b){a.Zd=!0;return this.Hh(a,b||{},"fullscreen")};
g.h.uz=function(a,b){a.Zd=!1;return this.Hh(a,b||{},"exitfullscreen")};
g.h.Uu=function(a,b,c){var d=a.Lc(),e=ni();d.R=kl(d,e,!!a.C);Ml(Hl,[a],!Rl(Hl),b);a.C=!0;return xl(a,c,Rl(Hl))};
g.h.yz=function(a,b){Ml(Hl,[a],!Rl(Hl),b);return a.l()};
g.h.Vm=function(a,b){Ml(Hl,[a],!Rl(Hl),b);this.qv(a);Tm(2,a.uc);return a.l()};
g.h.Tm=function(){};
g.h.jk=function(a,b){if(Lm)return Ym("ue");var c=this.ik(a,b);if(!c)return Ym("nf");var d=Ym();g.jc(d,c.jk(!0,!1));return d};
g.h.Lo=function(){};
g.h.qv=function(){};
g.h.ks=function(){};
g.h.So=function(){};
g.h.Cq=function(){};var dn={sK:"visible",BJ:"audible",fM:"time",gM:"timetype"},en={visible:function(a){return/^(100|[0-9]{1,2})$/.test(a)},
audible:function(a){return"0"==a||"1"==a},
timetype:function(a){return"mtos"==a||"tos"==a},
time:function(a){return/^(100|[0-9]{1,2})%$/.test(a)||/^([0-9])+ms$/.test(a)}};g.r(hn,ml);hn.prototype.getId=function(){return this.Aa};
hn.prototype.o=function(){return!0};
hn.prototype.A=function(a){var b=a.Lc(),c=a.getDuration();return(0,g.gk)(this.C,function(a){if(void 0!=a.g)var d=gn(a,b);else b:{switch(a.B){case "mtos":d=a.l?b.B.o:b.l.g;break b;case "tos":d=a.l?b.B.g:b.l.g;break b}d=0}0==d?a=!1:(a=-1!=a.o?a.o:g.t(c)&&0<c?a.A*c:-1,a=-1!=a&&d>=a);return a})};g.r(jn,ml);jn.prototype.A=function(a){var b=Di(a.Lc().o,1);return sl(a,b)};var ln=(0,g.H)(),sn=!1,tn=!1,un=!1,on=[function(a){return!(!a.chrome||!a.chrome.webstore)},
function(a){return!!a.document.documentMode},
function(a){return!!a.document.fonts.ready},
function(){return mn(0)},
function(a){return!!a.ActiveXObject},
function(a){return!!a.chrome},
function(a){return!!a.navigator.serviceWorker},
function(a){return!!a.opera},
function(a){return!!a.sidebar},
function(){return!+"\v1"},
function(){return mn(1)},
function(a){return!a.ActiveXObject},
function(a){return"-ms-ime-align"in a.document.documentElement.style},
function(a){return"-ms-scroll-limit"in a.document.documentElement.style},
function(a){return"-webkit-font-feature-settings"in a.document.body.style},
function(){return mn(2)},
function(a){return"ActiveXObject"in a},
function(a){return"MozAppearance"in a.document.documentElement.style},
function(a){return"_phantom"in a},
function(a){return"callPhantom"in a},
function(a){return"content"in a.document.createElement("template")},
function(a){return"getEntriesByType"in a.performance},
function(){return mn(3)},
function(a){return"image-rendering"in a.document.body.style},
function(a){return"object-fit"in a.document.body.style},
function(a){return"open"in a.document.createElement("details")},
function(a){return"orientation"in a.screen},
function(a){return"performance"in a},
function(a){return"shape-image-threshold"in a.document.body.style},
function(){return mn(4)},
function(a){return"srcset"in a.document.createElement("img")},
function(){return tn},
function(){return un},
function(){return mn(5)},
function(a){a=a.document.createElement("div");a.style.width="1px";a.style.width="-webkit-min-content";a.style.width="min-content";return"1px"!=a.style.width},
function(a){a=a.document.createElement("div");a.style.width="1px";a.style.width="calc(1px - 1px)";a.style.width="-webkit-calc(1px - 1px)";return"1px"!=a.style.width},
function(){var a=!1;eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');try{(0,window.DummyFunction1)()}catch(b){a=!0}return a},
function(){var a=!1;try{(0,window.DummyFunction2)()}catch(b){a=!0}return a},
function(){return!1},
function(){return mn(6)},
function(a){var b=a.document.createElement("canvas");b.width=b.height=1;b=b.getContext("2d");b.globalCompositeOperation="multiply";b.fillStyle="rgb(0,255,255)";b.fillRect(0,0,1,1);b.fill();b.fillStyle="rgb(255,255,0)";b.fillRect(0,0,1,1);b.fill();b=b.getImageData(0,0,1,1).data;return b[0]==b[2]&&b[1]==b[3]||kn(a.navigator.vibrate)},
function(a){a=a.document.createElement("canvas");a.width=a.height=1;a=a.getContext("2d");a.globalCompositeOperation="multiply";a.fillStyle="rgb(0,255,255)";a.fillRect(0,0,1,1);a.fill();a.fillStyle="rgb(255,255,0)";a.fillRect(0,0,1,1);a.fill();a=a.getImageData(0,0,1,1).data;return a[0]==a[2]&&a[1]==a[3]},
function(a){a=a.document.createElement("div");return kn(a.matches)},
function(a){a=a.document.createElement("input");a.setAttribute("type","range");return"text"!==a.type},
function(a){return a.CSS.supports("image-rendering","pixelated")},
function(a){return a.CSS.supports("object-fit","contain")},
function(){return mn(7)},
function(a){return a.CSS.supports("object-fit","inherit")},
function(a){return a.CSS.supports("shape-image-threshold","0.9")},
function(a){return a.CSS.supports("word-break","keep-all")},
function(){return eval("1 == [for (item of [1,2,3]) item][0]")},
function(a){return kn(a.CSS.supports)},
function(){return kn(window.Intl.Collator)},
function(a){return kn(a.document.createElement("dialog").show)},
function(){return mn(8)},
function(a){return kn(a.document.createElement("div").animate([{transform:"scale(1)",Ay:"ease-in"},{transform:"scale(1.3)",Ay:"ease-in"}],{duration:1300,JM:1}).reverse)},
function(a){return kn(a.document.createElement("div").animate)},
function(a){return kn(a.document.documentElement.webkitRequestFullScreen)},
function(a){return kn(a.navigator.getBattery)},
function(a){return kn(a.navigator.permissions.query)},
function(){return!1},
function(){return mn(9)},
function(){return kn(window.webkitRequestAnimationFrame)},
function(a){return kn(a.BroadcastChannel.call)},
function(a){return kn(a.FontFace)},
function(a){return kn(a.Gamepad)},
function(){return mn(10)},
function(a){return kn(a.MutationEvent)},
function(a){return kn(a.MutationObserver)},
function(a){return kn(a.crypto.getRandomValues)},
function(a){return kn(a.document.body.createShadowRoot)},
function(a){return kn(a.document.body.webkitCreateShadowRoot)},
function(a){return kn(a.fetch)},
function(){return mn(11)},
function(a){return kn(a.navigator.serviceWorker.register)},
function(a){return kn(a.navigator.webkitGetGamepads)},
function(a){return kn(a.speechSynthesis.speak)},
function(a){return kn(a.webkitRTCPeerConnection)},
function(a){return a.CSS.supports("--fake-var","0")},
function(){return mn(12)},
function(a){return a.CSS.supports("cursor","grab")},
function(a){return a.CSS.supports("cursor","zoom-in")},
function(a){return a.CSS.supports("image-orientation","270deg")},
function(){return mn(13)},
function(a){return a.CSS.supports("position","sticky")},
function(a){return void 0===a.document.createElement("style").scoped},
function(a){return a.performance.getEntriesByType("resource")instanceof Array},
function(){return"undefined"==typeof window.InstallTrigger},
function(){return"object"==typeof(new window.Intl.Collator).resolvedOptions()},
function(a){return"boolean"==typeof a.navigator.onLine},
function(){return mn(14)},
function(a){return"undefined"==typeof a.navigator.NM},
function(a){return"number"==typeof a.performance.now()},
function(){return 0==(new window.Uint16Array(1))[0]},
function(a){return-1==a.ActiveXObject.toString().indexOf("native")},
function(a){return-1==Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")}],pn=[function(a){a=a.document.createElement("div");
var b=null,c=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];try{a.style.behavior="url(#default#clientcaps)"}catch(e){}for(var d=0;d<c.length;d++){try{b=a.getComponentVersion(c[d],"componentid").replace(/,/g,".")}catch(e){}if(b)return b.split(".")[0]}return!1},
function(){return(new Date).getTimezoneOffset()},
function(a){return(a.innerWidth||a.document.documentElement.clientWidth||a.document.body.clientWidth)/(a.innerHeight||a.document.documentElement.clientHeight||a.document.body.clientHeight)},
function(a){return(a.outerWidth||a.document&&a.document.body&&a.document.body.offsetWidth)/(a.outerHeight||a.document&&a.document.body&&a.document.body.offsetHeight)},
function(a){return a.screen.availWidth/a.screen.availHeight},
function(a){return a.screen.width/a.screen.height}],qn=[function(a){return a.navigator.userAgent},
function(a){return a.navigator.platform},
function(a){return a.navigator.vendor}];g.F(vn,jg);vn.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.A=this.o=0};
vn.prototype.update=function(a,b){g.t(b)||(b=a.length);for(var c=b-this.l,d=this.B,e=this.o,f=0;f<b;){if(0==e)for(;f<=c;)wn(this,a,f),f+=this.l;if(g.w(a))for(;f<b;){if(d[e++]=a.charCodeAt(f++),e==this.l){wn(this,d);e=0;break}}else for(;f<b;)if(d[e++]=a[f++],e==this.l){wn(this,d);e=0;break}}this.o=e;this.A+=b};
vn.prototype.digest=function(){var a=Array((56>this.o?this.l:2*this.l)-this.o);a[0]=128;for(var b=1;b<a.length-8;++b)a[b]=0;var c=8*this.A;for(b=a.length-8;b<a.length;++b)a[b]=c&255,c/=256;this.update(a);a=Array(16);for(b=c=0;4>b;++b)for(var d=0;32>d;d+=8)a[c++]=this.g[b]>>>d&255;return a};g.r(xn,mm);xn.prototype.g=function(a){var b=mm.prototype.g.call(this,a);var c=ln=(0,g.H)();var d=mn(5);c=(tn?!d:d)?c|2:c&-3;d=mn(2);c=(un?!d:d)?c|8:c&-9;c={s1:(c>>>0).toString(16)};this.l||(this.l=rn());b.B=this.l;b.C=lm(a,dca,c,"h",yn("kArwaWEsTs"));b.A=lm(a,fca,{},"h",yn("b96YPMzfnx"));b.l=lm(a,gca,{},"h",yn("yb8Wev6QDg"));return b};zn.prototype.g=function(a,b){var c=this.l(b);if(g.Aa(c)){var d={};d=(d.sv="644",d.cb="j",d.e=An(a),d);var e=xl(b,a,Rl(Hl));g.jc(d,e);b.hs[a]=e;d=2==b.qe()?Wk(d).join("&"):this.A.g(d).g;try{return c(b.uc,d,a),0}catch(f){return 2}}else return 1};
zn.prototype.l=function(){return g.z(this.o)};g.r(Bn,zn);Bn.prototype.l=function(a){if(!a.Sf)return zn.prototype.l.call(this,a);var b=this.B[a.Sf];if(b)return function(a,d,e){b.l(a,d,e)};
sj("lidar::missingPlayerCallback",Error());return null};g.r(Hn,Hm);g.h=Hn.prototype;g.h.ik=function(a,b){var c=this;switch(Yj.getInstance().fb){case "nis":var d=Ln(this,a,b);break;case "gsv":d=Kn(this,a,b);break;case "exc":d=Mn(this,a);break;default:b.opt_overlayAdElement?d=void 0:b.opt_adElement?d=Vm(this,a,b.opt_adElement,b.opt_osdId):d=Tl(a)||void 0}d&&1==d.qe()&&(d.ya==g.va&&(d.ya=function(a){return c.ks(a)}),In(this,d,b));
return d};
g.h.ks=function(a){var b=Yj.getInstance();a.g=0;a.R=0;if("h"==a.A||"n"==a.A){if("exc"==b.fb||"nis"==b.fb)var c=g.z("ima.bridge.getVideoMetadata");else if(a.Sf&&Sn(this)){var d=this.H[a.Sf];d?c=function(a){d.g(a)}:null!==d&&sj("lidar::missingPlayerCallback",Error())}else c=g.z("ima.common.getVideoMetadata");
if(g.Aa(c))try{var e=c(a.uc)}catch(f){a.g|=4}else a.g|=2}else if("b"==a.A)if(b=g.z("ytads.bulleit.getVideoMetadata"),g.Aa(b))try{e=b(a.uc)}catch(f){a.g|=4}else a.g|=2;else if("ml"==a.A)if(b=g.z("ima.common.getVideoMetadata"),g.Aa(b))try{e=b(a.uc)}catch(f){a.g|=4}else a.g|=2;else a.g|=1;a.g||(g.t(e)?null===e?a.g|=16:g.cc(e)?a.g|=32:null!=e.errorCode&&(a.R=e.errorCode,a.g|=64):a.g|=8);null!=e||(e={});bn(e,a);Cj(e.volume)&&Cj(this.C)&&(e.volume*=this.C);return e};
g.h.Cq=function(){if(Sn(this))return new Bn("ima.common.triggerExternalActivityEvent",this.l,this.H);var a=Nn(this);return null!=a?new zn(a,this.l):null};
g.h.Hm=function(){var a=this.g,b=Hm.prototype.Hm.call(this);b.push(new jn(a));return b};
g.h.Lo=function(a){!a.g&&a.Ye&&Om(this,a,"overlay_unmeasurable_impression")&&(a.g=!0)};
g.h.qv=function(a){a.bp&&(a.Kf()?Om(this,a,"overlay_viewable_end_of_session_impression"):Om(this,a,"overlay_unviewable_impression"),a.bp=!1)};
g.h.Tm=function(a){if(this.F){var b=this.K,c=b.g,d=ni();c.B=d;this.B=b.g}this.A&&1==a.qe()&&Tn(this,a)};
g.h.So=function(a){this.A&&1==a.qe()&&Tn(this,a)};
g.wa(Hn);g.y("Goog_AdSense_Lidar_sendVastEvent",rj(193,Vn,void 0,function(){var a=Yj.getInstance(),b={};return b.sv="644",b["if"]=a.l?"1":"0",b.nas=String(Hl.g.length),b}),void 0);
g.y("Goog_AdSense_Lidar_getViewability",mj(194,function(a,b){b=void 0===b?{}:b;var c=Qn(Hn.getInstance(),a,b);return Un(c)},void 0,void 0),void 0);
g.y("Goog_AdSense_Lidar_getUrlSignalsArray",rj(195,function(){return Gn()}),void 0);
g.y("Goog_AdSense_Lidar_getUrlSignalsList",rj(196,function(){return g.pg(Gn())}),void 0);var naa=(new Date).getTime();g.h=g.ao.prototype;g.h.Sd=function(){return this.va};
g.h.Ub=function(){co(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.l[this.g[b]]);return a};
g.h.jd=function(){co(this);return this.g.concat()};
g.h.isEmpty=function(){return 0==this.va};
g.h.clear=function(){this.l={};this.dg=this.va=this.g.length=0};
g.h.remove=function(a){return bo(this.l,a)?(delete this.l[a],this.va--,this.dg++,this.g.length>2*this.va&&co(this),!0):!1};
g.h.get=function(a,b){return bo(this.l,a)?this.l[a]:b};
g.h.set=function(a,b){bo(this.l,a)||(this.va++,this.g.push(a),this.dg++);this.l[a]=b};
g.h.forEach=function(a,b){for(var c=this.jd(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.ao(this)};
g.h.Me=function(a){co(this);var b=0,c=this.dg,d=this,e=new Ek;e.next=function(){if(c!=d.dg)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)throw Fk;var e=d.g[b++];return a?e:d.l[e]};
return e};g.eo.prototype.toString=function(){var a=[],b=this.A;b&&a.push(mo(b,QW,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.H)&&a.push(mo(b,QW,!0),"@"),a.push((0,window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.B,null!=c&&a.push(":",String(c));if(c=this.l)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(mo(c,"/"==c.charAt(0)?hca:ica,!0));(c=this.o.toString())&&a.push("?",c);(c=this.C)&&a.push("#",mo(c,jca));return a.join("")};
g.eo.prototype.resolve=function(a){var b=this.clone(),c=!!a.A;c?g.fo(b,a.A):c=!!a.H;c?b.H=a.H:c=!!a.g;c?g.go(b,a.g):c=null!=a.B;var d=a.l;if(c)g.ho(b,a.B);else if(c=!!a.l){if("/"!=d.charAt(0))if(this.g&&!this.l)d="/"+d;else{var e=b.l.lastIndexOf("/");-1!=e&&(d=b.l.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=g.qb(e,"/");e=e.split("/");for(var f=[],k=0;k<e.length;){var l=e[k++];"."==l?d&&k==e.length&&f.push(""):".."==l?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&k==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?b.l=d:c=""!==a.o.toString();c?io(b,a.o.clone()):c=!!a.C;c&&(b.C=a.C);return b};
g.eo.prototype.clone=function(){return new g.eo(this)};
g.eo.prototype.I=function(){return this.o.toString()};
var QW=/[#\/\?@]/g,ica=/[#\?:]/g,hca=/[#\?]/g,no=/[#\?@]/g,jca=/#/g;g.h=g.ko.prototype;g.h.Sd=function(){ro(this);return this.va};
g.h.add=function(a,b){ro(this);this.l=null;a=so(this,a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.va=this.va+1;return this};
g.h.remove=function(a){ro(this);a=so(this,a);return bo(this.g.l,a)?(this.l=null,this.va=this.va-this.g.get(a).length,this.g.remove(a)):!1};
g.h.clear=function(){this.g=this.l=null;this.va=0};
g.h.isEmpty=function(){ro(this);return 0==this.va};
g.h.forEach=function(a,b){ro(this);this.g.forEach(function(c,d){(0,g.G)(c,function(c){a.call(b,c,d,this)},this)},this)};
g.h.jd=function(){ro(this);for(var a=this.g.Ub(),b=this.g.jd(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.h.Ub=function(a){ro(this);var b=[];if(g.w(a))to(this,a)&&(b=g.$a(b,this.g.get(so(this,a))));else{a=this.g.Ub();for(var c=0;c<a.length;c++)b=g.$a(b,a[c])}return b};
g.h.set=function(a,b){ro(this);this.l=null;a=so(this,a);to(this,a)&&(this.va=this.va-this.g.get(a).length);this.g.set(a,[b]);this.va=this.va+1;return this};
g.h.get=function(a,b){var c=a?this.Ub(a):[];return 0<c.length?String(c[0]):b};
g.h.toString=function(){if(this.l)return this.l;if(!this.g)return"";for(var a=[],b=this.g.jd(),c=0;c<b.length;c++){var d=b[c],e=(0,window.encodeURIComponent)(String(d));d=this.Ub(d);for(var f=0;f<d.length;f++){var k=e;""!==d[f]&&(k+="="+(0,window.encodeURIComponent)(String(d[f])));a.push(k)}}return this.l=a.join("&")};
g.h.clone=function(){var a=new g.ko;a.l=this.l;this.g&&(a.g=this.g.clone(),a.va=this.va);return a};var Zo={yx:5E3,zx:15E3,Dp:"://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/sul www.google.com/pagead/xsul www.youtube.com/pagead/sul www.youtube.com/pagead/psul www.youtube.com/pagead/slav".split(" "),Jx:/\bocr\b/,hm:0,ff:{},xI:function(a,b,c){a&&(Zo.yk(a)?Zo.yI(a,b):Zo.wI(a,b,c))},
yk:function(a){if(g.sb(g.Gb(a)))return!1;if(0<=a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&"))return!0;try{var b=new g.eo(a)}catch(c){return null!=g.Oa(Zo.Dp,function(b){return 0<a.search(b)})}return b.C.match(Zo.Jx)?!0:null!=g.Oa(Zo.Dp,function(b){return null!=a.match(b)})},
yI:function(a,b){if(a&&(a=Zo.Ny(a),!g.sb(a))){var c='javascript:"<body><img src=\\""+'+a+'+"\\"></body>"';b?Zo.Jr(function(b){Zo.Ev(b?c:'javascript:"<body><object data=\\""+'+a+'+"\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')}):Zo.Ev(c)}},
Ev:function(a){var b=g.vd("IFRAME",{src:a,style:"display:none"});a=g.dd(b).body;var c=g.fg(function(){g.ef(d);g.Dd(b)},Zo.zx);
var d=Se(b,["load","error"],function(){g.fg(function(){g.x.clearTimeout(c);g.Dd(b)},Zo.yx)});
a.appendChild(b)},
Jr:function(a,b){var c=Zo.ff.imageLoadingEnabled;if(null!=c)a(c);else{var d=!1;c=function(b,c){delete Zo.ff[c];d||(d=!0,null!=Zo.ff.imageLoadingEnabled||(Zo.ff.imageLoadingEnabled=b),a(b))};
b?b(c):Zo.aA(c)}},
aA:function(a){var b=new window.Image,c=""+Zo.hm++;Zo.ff[c]=b;b.onload=function(){(0,window.clearTimeout)(d);a(!0,c)};
var d=(0,window.setTimeout)(function(){a(!1,c)},300);
b.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},
vI:function(a){if(a){var b=g.yd("OBJECT");b.data=a;b.width="1";b.height="1";b.style.visibility="hidden";var c=""+Zo.hm++;Zo.ff[c]=b;b.onload=b.onerror=function(){delete Zo.ff[c]};
window.document.body.appendChild(b)}},
Fv:function(a){if(a){var b=new window.Image,c=""+Zo.hm++;Zo.ff[c]=b;b.onload=b.onerror=function(){delete Zo.ff[c]};
b.src=a}},
wI:function(a,b,c){if(a){if(c)try{if(g.x.navigator&&g.x.navigator.sendBeacon&&g.x.navigator.sendBeacon(a,""))return}catch(d){}b?Zo.Jr(function(b){b?Zo.Fv(a):Zo.vI(a)}):Zo.Fv(a)}},
Ny:function(a){var b=g.Ic(g.Lc(a));if("about:invalid#zClosurez"===b)return"";b instanceof g.Oc?a=b:(a=null,b.Ym&&(a=b.xm()),b=g.Bb(b.tg?b.Df():String(b)),a=Qc(b,a));a=g.Pc(a);return(0,window.encodeURIComponent)(String(g.pg(a)))}};g.F(g.vo,g.J);var RW=[];g.h=g.vo.prototype;g.h.ea=function(a,b,c,d){g.ya(b)||(b&&(RW[0]=b.toString()),b=RW);for(var e=0;e<b.length;e++){var f=g.Te(a,b[e],c||this.handleEvent,d||!1,this.l||this);if(!f)break;this.g[f.key]=f}return this};
g.h.Ek=function(a,b,c,d){return wo(this,a,b,c,d)};
g.h.Pa=function(a,b,c,d,e){if(g.ya(b))for(var f=0;f<b.length;f++)this.Pa(a,b[f],c,d,e);else c=c||this.handleEvent,d=g.Ba(d)?!!d.capture:!!d,e=e||this.l||this,c=Ue(c),d=!!d,b=g.Ie(a)?a.ci(b,c,d,e):a?(a=g.We(a))?a.ci(b,c,d,e):null:null,b&&(g.ef(b),delete this.g[b.key])};
g.h.T=function(){g.vo.ua.T.call(this);g.xo(this)};
g.h.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var yo=/(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g;g.F(Ao,g.Fe);Fo.prototype.g=function(){return!1};
Fo.prototype.getPlayerType=function(){return""};
var Go=new Fo;Ho.prototype.getId=function(){return this.Aa};Io.prototype.getId=function(){return this.Aa};var Oo=null;var To=["*.youtu.be","*.youtube.com"],Yo="ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),Xo=["c.googlesyndication.com"];var bp=function(){if(g.yz)return ap(/Firefox\/([0-9.]+)/);if(g.pd||vz||g.oh)return uc;if(g.Gx)return oc()?ap(/CriOS\/([0-9.]+)/):ap(/Chrome\/([0-9.]+)/);if(g.Lk&&!oc())return ap(/Version\/([0-9.]+)/);if(eB||dB){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(g.Pb);if(a)return a[1]+"."+a[2]}else if(fB)return(a=ap(/Android\s+([0-9.]+)/))?a:ap(/Version\/([0-9.]+)/);return""}();var SW;
SW={qx:["BC","AD"],ox:["Before Christ","Anno Domini"],Gx:"JFMAMJJASOND".split(""),Rx:"JFMAMJJASOND".split(""),Cp:"January February March April May June July August September October November December".split(" "),Gp:"January February March April May June July August September October November December".split(" "),Ep:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Hp:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Op:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Jp:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Fp:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Ip:"Sun Mon Tue Wed Thu Fri Sat".split(" "),gL:"SMTWTFS".split(""),Sx:"SMTWTFS".split(""),Nx:["Q1","Q2","Q3","Q4"],Ix:["1st quarter","2nd quarter","3rd quarter","4th quarter"],zp:["AM","PM"],Jl:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],Np:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],lx:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],Kl:6,by:[5,6],Ll:5};g.TW=SW;g.TW=SW;g.h=g.fp.prototype;g.h.Wj=g.TW.Kl;g.h.Yj=g.TW.Ll;g.h.clone=function(){var a=new g.fp(this.date);a.Wj=this.Wj;a.Yj=this.Yj;return a};
g.h.getFullYear=function(){return this.date.getFullYear()};
g.h.getMonth=function(){return this.date.getMonth()};
g.h.getDate=function(){return this.date.getDate()};
g.h.getTime=function(){return this.date.getTime()};
g.h.getDay=function(){return this.date.getDay()};
g.h.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.h.getUTCMonth=function(){return this.date.getUTCMonth()};
g.h.getUTCDate=function(){return this.date.getUTCDate()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.h.add=function(a){if(a.l||a.months){var b=this.getMonth()+a.months+12*a.l,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(a=new Date((new Date(this.getFullYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),this.date.setFullYear(a.getFullYear()),
this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),ep(this,a.getDate()))};
g.h.lk=function(a){return[this.getFullYear(),g.Fb(this.getMonth()+1,2),g.Fb(this.getDate(),2)].join(a?"-":"")+""};
g.h.toString=function(){return this.lk()};
g.h.valueOf=function(){return this.date.valueOf()};var hp=new gp;gp.prototype.clear=function(){this.g=null;this.o="";this.l=null};g.wa(jp);jp.prototype.g=function(a,b,c){if(this.l||c){b=b||{};b.lid=a;b.sdkv=ip();a=So();g.sb(g.Gb(a))||(b.e=a);b=lp(this,b);var d=new g.eo("http://pagead2.googlesyndication.com/pagead/gen_204");g.Rb(b,function(a,b){g.oo(d,b,null!=a?"boolean"==typeof a?a?"t":"f":""+a:"")},this);
a=kp();g.fo(d,a.A);$o(d.toString())}};
jp.prototype.isLoggingEnabled=function(){return this.l};g.F(mp,g.kf);var np=null;mp.prototype.destroy=function(){this.da.Pa(this.l,"activityMonitor",this.B);this.l=null};
mp.prototype.B=function(a){var b=a.g;switch(a.l){case "appStateChanged":Rn(Hn.getInstance(),b.appState,b.nativeTime);break;case "externalActivityEvent":rp(b.queryId,b.viewabilityString,b.eventName);break;case "measurableImpression":pp(b.queryId,b.viewabilityString);break;case "viewableImpression":qp(b.queryId,b.viewabilityString);break;case "engagementData":b=b.engagementString;op().A=b;op().o=(0,g.H)();break;case "viewability":a=b.eventId;window.clearTimeout(a);var c=this.g.get(a);c&&(this.g.remove(a),
c(b.viewabilityData));break;case "viewabilityMeasurement":var d=Hn.getInstance(),e=b.queryId;b=b.viewabilityData;a=Yj.getInstance();if("exc"==a.fb){d.C=b.nativeVolume;c=b.exposure||0;var f=b.unmeasurable;null!=b.userActivity&&(d.B=b.userActivity);d=d.ik(e,{});-1==d.ia&&(d.ia=ni(),d.bb=d.Lc().l.g);d.fa+=f?1:0;d.Wa++;d.Ra.update(c,c,!1,1,!1);e=b.insideIframe;g.t(e)&&0==e&&(a.l=!1);d.Ye=f||d.Ye;b.position&&pk(d,L,a.l,new g.Tg(b.position.top,b.position.right,b.position.bottom,b.position.left));b.documentSize&&
(a.A=new g.ad(b.documentSize.width,b.documentSize.height));b.viewportSize&&(a.g=new g.ad(b.viewportSize.width,b.viewportSize.height));d.Kb.g=g.Uc(c,0,1);d.sn=d.Kb.g}break;case "engagement":a=b.eventId,window.clearTimeout(a),c=this.g.get(a),jp.getInstance().isLoggingEnabled()&&(f=-1,this.C&&(f=(0,g.H)()-this.C),d=!1,c||(d=!0),Zb(b,"loggingId")&&jp.getInstance().g(43,{step:"receivedResponse",time:(0,g.H)(),timeout:d,logid:b.loggingId,timediff:f})),c&&(this.g.remove(a),c(b.engagementString))}};
g.y("ima.bridge.getNativeViewability",function(a,b){op();b({})},void 0);
g.y("ima.bridge.getVideoMetadata",function(){var a=(op(),null);return g.Aa(a)?a():{}},void 0);
g.y("ima.bridge.triggerViewEvent",qp,void 0);g.y("ima.bridge.triggerMeasurableEvent",pp,void 0);g.y("ima.bridge.triggerExternalActivityEvent",rp,void 0);var UW=!1,VW="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(UW=!0,a.description)){VW=sp(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){UW=!0;VW="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],UW=!(!a||!a.enabledPlugin))){VW=sp(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");UW=
!0;VW=sp(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");UW=!0;VW="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),UW=!0,VW=sp(b.GetVariable("$version"))}catch(c){}})();
var uaa=UW,oaa=VW;g.F(tp,g.kf);var up=null;tp.prototype.destroy=function(){this.da.Pa(this.g,"activityMonitor",this.A);this.l=!1;this.C.clear()};
tp.prototype.T=function(){this.destroy();tp.ua.T.call(this)};
tp.prototype.init=function(a){if(!this.l){if(this.g=a||null)this.da.ea(this.g,"activityMonitor",this.A),wp(this);if(!(g.x.ima&&g.x.ima.video&&g.x.ima.video.client&&g.x.ima.video.client.tagged)){g.y("ima.video.client.sdkTag",!0,void 0);var b=g.x.document;a=b.createElement("script");var c=b.location.protocol;"http:"!=c&&"https:"!=c&&(c="");a.src=c+"//s0.2mdn.net/instream/video/client.js";a.async=!0;a.type="text/javascript";b=b.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}(a=Go.g())||
(a=!1);a||(Hn.getInstance().A=!0);this.o=(g.Aa(null),null);this.l=!0}};
tp.prototype.A=function(a){var b=a.g,c=b.queryId,d={};d.eventId=b.eventId;switch(a.l){case "getPageSignals":wp(this);break;case "reportVastEvent":a=b.vastEvent;var e=b.osdId,f={};f.opt_fullscreen=b.isFullscreen;b.isOverlay&&(f.opt_bounds=b.overlayBounds);if(this.l)if(this.o)c=this.o(a,c,f);else{b=f||{};if(e=e?this.B.get(e):Go.o){if(null==b.opt_fullscreen){if(null==e)f=!1;else if((BW&&!CW||Db(g.Pb,"iPod"))&&null!=e.webkitDisplayingFullscreen)f=e.webkitDisplayingFullscreen;else{f=window.screen.availWidth||
window.screen.width;var k=window.screen.availHeight||window.screen.height;var l=g.Aa(e.getBoundingClientRect)&&g.Kd(g.dd(e),e)?e.getBoundingClientRect():{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight};f=0>=f-l.width&&42>=k-l.height}b.opt_fullscreen=f}null!=b.opt_adElement||(b.opt_adElement=e)}c=qj("lidar::handlevast_html5",g.B(Vn,a,c,b))||{}}else c={};d.viewabilityData=c;this.g.send("activityMonitor","viewability",d);break;case "fetchAdTagUrl":c={},c.eventId=b.eventId,
e=b.osdId,d=null,Zb(b,"isFullscreen")&&(d=b.isFullscreen),Zb(b,"loggingId")&&(a=b.loggingId,c.loggingId=a,jp.getInstance().g(43,{step:"beforeLookup",logid:a,time:(0,g.H)()},!0)),c.engagementString=xp(this,e,d),this.g.send("activityMonitor","engagement",c)}};
g.y("ima.common.getVideoMetadata",function(a){a=vp().C.get(a);return g.Aa(a)?a():{}},void 0);
g.y("ima.common.triggerViewEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;var d=vp().g;d?d.send("activityMonitor","viewableImpression",c):vp().dispatchEvent(new Ao("viewable_impression",null,c))},void 0);
g.y("ima.common.triggerViewabilityMeasurementUpdate",function(a,b){var c=vp().g,d={};d.queryId=a;d.viewabilityData=b;c&&c.send("activityMonitor","viewabilityMeasurement",d)},void 0);
g.y("ima.common.triggerMeasurableEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;var d=vp().g;d?d.send("activityMonitor","measurableImpression",c):vp().dispatchEvent(new Ao("measurable_impression",null,c))},void 0);
g.y("ima.common.triggerExternalActivityEvent",function(a,b,c){var d={};d.queryId=a;d.viewabilityString=b;d.eventName=c;(a=vp().g)?a.send("activityMonitor","externalActivityEvent",d):vp().dispatchEvent(new Ao("externalActivityEvent",null,d))},void 0);
vp();g.yp.prototype.g=function(a){var b=0,c=0,d=!1;a=a.split(Wba);for(var e=0;e<a.length;e++){var f=a[e];Uba.test(f)?(b++,c++):Vba.test(f)?d=!0:Tba.test(f)?c++:Xba.test(f)&&(d=!0)}return 0==c?d?1:0:.4<b/c?-1:1};Ap.prototype.g=null;Ap.prototype.toString=function(){return this.content};
g.F(Bp,Ap);(function(a){function b(a){this.content=a}
b.prototype=a.prototype;return function(a,d){var c=new b(String(a));void 0!==d&&(c.g=d);return c}})(Bp);
var Cp={};(function(a){function b(a){this.content=a}
b.prototype=a.prototype;return function(a,d){var c=String(a);if(!c)return"";c=new b(c);void 0!==d&&(c.g=d);return c}})(Bp);var kca=g.pd?Fc(Ac(g.Bc('javascript:""'))):Fc(Ac(g.Bc("about:blank")));Ec(kca);var lca=g.pd?Fc(Ac(g.Bc('javascript:""'))):Fc(Ac(g.Bc("javascript:undefined")));Ec(lca);Dp("a","");Dp("a","fixedDirectionality");Dp("a","redesign2014q4");Dp("b","");Dp("b","redesign2014q4");Dp("b","forcedlinebreak");var Kp=g.pd&&Jp();g.F(g.Mp,g.J);g.h=g.Mp.prototype;g.h.start=function(){this.stop();this.o=!1;var a=Np(this),b=Op(this);a&&!b&&this.g.mozRequestAnimationFrame?(this.Aa=g.Te(this.g,"MozBeforePaint",this.l),this.g.mozRequestAnimationFrame(null),this.o=!0):this.Aa=a&&b?a.call(this.g,this.l):this.g.setTimeout(pf(this.l),20)};
g.h.ii=function(){this.isActive()||this.start()};
g.h.stop=function(){if(this.isActive()){var a=Np(this),b=Op(this);a&&!b&&this.g.mozRequestAnimationFrame?g.ef(this.Aa):a&&b?b.call(this.g,this.Aa):this.g.clearTimeout(this.Aa)}this.Aa=null};
g.h.isActive=function(){return null!=this.Aa};
g.h.Sy=function(){this.o&&this.Aa&&g.ef(this.Aa);this.Aa=null;this.B.call(this.A,(0,g.H)())};
g.h.T=function(){this.stop();g.Mp.ua.T.call(this)};g.F(g.P,g.J);g.h=g.P.prototype;g.h.Aa=0;g.h.T=function(){g.P.ua.T.call(this);this.stop();delete this.g;delete this.l};
g.h.start=function(a){this.stop();this.Aa=g.fg(this.o,g.t(a)?a:this.Hb)};
g.h.stop=function(){this.isActive()&&g.x.clearTimeout(this.Aa);this.Aa=0};
g.h.isActive=function(){return 0!=this.Aa};
g.h.kr=function(){this.Aa=0;this.g&&this.g.call(this.l)};g.wa(g.Sp);g.Sp.prototype.g=0;g.F(g.Up,g.kf);g.h=g.Up.prototype;g.h.Lz=g.Sp.getInstance();g.h.getId=function(){return this.Aa||(this.Aa=g.Tp(this.Lz))};
g.h.ha=function(){return this.l};
g.h.Wo=function(a){if(this.I&&this.I!=a)throw Error("Method not supported");g.Up.ua.Wo.call(this,a)};
g.h.Om=ba(0);g.h.Xh=function(){Vp(this,function(a){a.ug&&a.Xh()});
this.B&&g.xo(this.B);this.ug=!1};
g.h.T=function(){this.ug&&this.Xh();this.B&&(this.B.dispose(),delete this.B);Vp(this,function(a){a.dispose()});
this.l&&g.Dd(this.l);this.I=this.l=this.C=this.H=null;g.Up.ua.T.call(this)};
g.h.bi=ba(1);g.h.removeChild=function(a,b){if(a){var c=g.w(a)?a:a.getId();a=this.C&&c?fc(this.C,c)||null:null;if(c&&a){ec(this.C,c);g.Xa(this.H,a);b&&(a.Xh(),a.l&&g.Dd(a.l));c=a;if(null==c)throw Error("Unable to set parent component");c.I=null;g.Up.ua.Wo.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};Fc(Ac(g.Bc("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Fc(Ac(g.Bc("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Fc(Ac(g.Bc("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Fc(Ac(g.Bc("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Xp.prototype.g=null;g.F(Yp,Xp);g.WW=new Yp;new g.ao;var XW=[];g.y("onYouTubeIframeAPIReady",function(){(0,g.G)(XW,function(a){a()});
Ua(XW)},window);Zp.prototype.clone=function(){return new Zp(this.g,this.F,this.o,this.B,this.A,this.C,this.l,this.H)};bq.prototype.l=0;bq.prototype.reset=function(){this.g=this.o=this.A;this.l=0};
bq.prototype.getValue=function(){return this.o};g.F(g.dq,g.J);g.h=g.dq.prototype;g.h.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.Jb;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.Jb=e+3;d.push(e);return e};
g.h.unsubscribe=function(a,b,c){if(a=this.l[a]){var d=this.g;if(a=g.Oa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.wc(a)}return!1};
g.h.wc=function(a){var b=this.g[a];if(b){var c=this.l[b];0!=this.A?(this.o.push(a),this.g[a+1]=g.va):(c&&g.Xa(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
g.h.O=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var k=c[e];eq(this.g[k+1],this.g[k+2],d)}else{this.A++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.g[k+1].apply(this.g[k+2],d)}finally{if(this.A--,0<this.o.length&&0==this.A)for(;c=this.o.pop();)this.wc(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.l[a];b&&((0,g.G)(b,this.wc,this),delete this.l[a])}else this.g.length=0,this.l={}};
g.h.Sd=function(a){if(a){var b=this.l[a];return b?b.length:0}a=0;for(b in this.l)a+=this.Sd(b);return a};
g.h.T=function(){g.dq.ua.T.call(this);this.clear();this.o.length=0};g.fq.prototype.set=function(a,b){g.t(b)?this.g.set(a,g.pg(b)):this.g.remove(a)};
g.fq.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.fq.prototype.remove=function(a){this.g.remove(a)};g.F(gq,g.fq);gq.prototype.set=function(a,b){gq.ua.set.call(this,a,iq(b))};
gq.prototype.l=function(a){a=gq.ua.get.call(this,a);if(!g.t(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
gq.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,!g.t(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.F(lq,gq);lq.prototype.set=function(a,b,c){if(b=iq(b)){if(c){if(c<(0,g.H)()){lq.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.H)()}lq.ua.set.call(this,a,b)};
lq.prototype.l=function(a,b){var c=lq.ua.l.call(this,a);if(c)if(!b&&g.mq(c))lq.prototype.remove.call(this,a);else return c};g.F(g.nq,lq);g.F(pq,oq);pq.prototype.Sd=function(){var a=0;g.Hk(this.Me(!0),function(){a++});
return a};
pq.prototype.clear=function(){var a=Ik(this.Me(!0)),b=this;(0,g.G)(a,function(a){b.remove(a)})};g.F(qq,pq);g.h=qq.prototype;g.h.isAvailable=function(){if(!this.g)return!1;try{return this.g.setItem("__sak","1"),this.g.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.g.getItem(a);if(!g.w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.g.removeItem(a)};
g.h.Sd=function(){return this.g.length};
g.h.Me=function(a){var b=0,c=this.g,d=new Ek;d.next=function(){if(b>=c.length)throw Fk;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.w(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.g.clear()};
g.h.key=function(a){return this.g.key(a)};g.F(rq,qq);g.F(sq,qq);g.F(tq,pq);tq.prototype.set=function(a,b){this.l.set(this.g+a,b)};
tq.prototype.get=function(a){return this.l.get(this.g+a)};
tq.prototype.remove=function(a){this.l.remove(this.g+a)};
tq.prototype.Me=function(a){var b=this.l.Me(!0),c=this,d=new Ek;d.next=function(){for(var d=b.next();d.substr(0,c.g.length)!=c.g;)d=b.next();return a?d.substr(c.g.length):c.l.get(d)};
return d};vq.prototype.getValue=function(){return this.g};
vq.prototype.clone=function(){return new vq(this.Jb,this.g)};g.h=wq.prototype;g.h.remove=function(){var a=this.g,b=a.length,c=a[0];if(!(0>=b)){if(1==b)Ua(a);else{a[0]=a.pop();a=0;b=this.g;for(var d=b.length,e=b[a];a<d>>1;){var f=2*a+1,k=2*a+2;f=k<d&&b[k].Jb<b[f].Jb?k:f;if(b[f].Jb>e.Jb)break;b[a]=b[f];a=f}b[a]=e}return c.getValue()}};
g.h.Ub=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].getValue());return b};
g.h.jd=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].Jb);return b};
g.h.clone=function(){return new wq(this)};
g.h.Sd=function(){return this.g.length};
g.h.isEmpty=function(){return g.Ta(this.g)};
g.h.clear=function(){Ua(this.g)};g.F(yq,wq);var Aq=/^\.google\.(com?\.)?[a-z]{2,3}$/,Bq=/\.(cn|com\.bi|do|sl)$/,Fq=g.x,Dq,Gq,Jq={Am:function(){return 0<Gq[8]},
fI:function(){Gq[8]++},
gI:function(){0<Gq[8]&&Gq[8]--},
hI:function(){Gq[8]=0},
shouldRetry:function(){return!1},
Wq:function(){return Gq[5]},
Zp:function(a){try{a()}catch(b){g.x.setTimeout(function(){throw b;},0)}},
Ko:function(){if(!Jq.Am()){var a=g.x.document,b=function(b){var c=Eq(b);zq(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return g.x.processGoogleToken({},2)};
c=g.Ud(c);g.Sc(b,c);try{(a.head||a.body||a.documentElement).appendChild(b),Jq.fI()}catch(k){}},c=Gq[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);g.x.setTimeout(function(){return g.x.processGoogleToken(d,1)},1E3)}}};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
Mq.prototype.cancel=function(a){if(this.g)this.o instanceof Mq&&this.o.cancel();else{if(this.l){var b=this.l;delete this.l;a?b.cancel(a):(b.H--,0>=b.H&&b.cancel())}this.P?this.P.call(this.L,this):this.I=!0;this.g||(a=new Vq(this),Qq(this),Oq(this,!1,a))}};
Mq.prototype.K=function(a,b){this.F=!1;Oq(this,a,b)};
Mq.prototype.Fj=function(a){Qq(this);Oq(this,!0,a)};
Mq.prototype.then=function(a,b,c){var d,e,f=new g.If(function(a,b){d=a;e=b});
Rq(this,d,function(a){a instanceof Vq?f.cancel():e(a)});
return f.then(a,b,c)};
Ff(Mq);Mq.prototype.isError=function(a){return a instanceof Error};
g.F(Pq,Ka);Pq.prototype.message="Deferred has already fired";Pq.prototype.name="AlreadyCalledError";g.F(Vq,Ka);Vq.prototype.message="Deferred was canceled";Vq.prototype.name="CanceledError";Uq.prototype.l=function(){delete Tq[this.Aa];throw this.g;};
var Tq={};g.F(Wq,pe);g.F(Zq,pe);var Yq=[2,11];g.It=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};g.ar=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.y("yt.config_",g.ar,void 0);(0,g.H)();var gr=g.t(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.t(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var wr={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Er=!1;var eA=eB||dB;var Zr={},Yr=0;g.r(as,Ka);ds.prototype.then=function(a,b,c){return this.o?this.o.then(a,b,c):1===this.l&&a?(a=a.call(c,this.g),Gf(a)?a:fs(a)):2===this.l&&b?(a=b.call(c,this.g),Gf(a)?a:es(a)):this};
ds.prototype.getValue=function(){return this.g};
Ff(ds);g.r(hs,Ka);hs.prototype.name="BiscottiError";g.r(gs,Ka);gs.prototype.name="BiscottiMissingError";var ks={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},js=null;g.r(rs,Ka);rs.prototype.name="MutsuError";var ys={};var mca,zs;mca=0;zs=g.rd?"webkit":g.nh?"moz":g.pd?"ms":g.oh?"o":"";g.YW=g.z("ytDomDomGetNextId")||function(){return++mca};
g.y("ytDomDomGetNextId",g.YW,void 0);var Hs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};Is.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Is.prototype.Hr=function(){return this.event?!1===this.event.returnValue:!1};
Is.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Is.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ks=g.z("ytEventsEventsListeners")||{};g.y("ytEventsEventsListeners",Ks,void 0);var Ms=g.z("ytEventsEventsCounter")||{count:0};g.y("ytEventsEventsCounter",Ms,void 0);var nca=g.qf(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.F(Ys,g.J);Ys.prototype.K=function(a){g.t(a.g)||Js(a);var b=a.g;g.t(a.l)||Js(a);this.g=new g.Yc(b,a.l)};
Ys.prototype.C=function(){if(this.g){var a=g.It();if(0!=this.A){var b=this.B,c=this.g,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.A);this.l[this.Oa]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.H();this.o=d}this.A=a;this.B=this.g;this.Oa=(this.Oa+1)%4}};
Ys.prototype.T=function(){window.clearInterval(this.I);g.Os(this.F)};g.r(g.Zs,g.J);g.Zs.prototype.M=function(a,b,c,d,e){c=er((0,g.A)(c,d||this.Mb));c={target:a,name:b,Fj:c};var f;e&&nca()&&(f={passive:!0});a.addEventListener(b,c.Fj,f);this.P.push(c);return c};
g.Zs.prototype.Pa=function(a){for(var b=0;b<this.P.length;b++)if(this.P[b]==a){this.P.splice(b,1);a.target.removeEventListener(a.name,a.Fj);break}};
g.Zs.prototype.T=function(){g.at(this);g.J.prototype.T.call(this)};g.F(g.R,g.J);g.h=g.R.prototype;g.h.subscribe=function(a,b,c){return this.ga()?0:this.fc.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.ga()?!1:this.fc.unsubscribe(a,b,c)};
g.h.wc=function(a){return this.ga()?!1:this.fc.wc(a)};
g.h.O=function(a,b){return this.ga()?!1:this.fc.O.apply(this.fc,arguments)};
g.h.Af=ba(3);g.r(g.ct,g.R);g.h=g.ct.prototype;g.h.cancel=function(){this.A&&(this.A=!1,this.O("dragend",0,0,null));this.l&&(this.l=!1,this.O("hoverend",0,0,null),g.at(this.g),bt(this))};
g.h.os=function(a){g.at(this.g);dt(this,et("move"),this.ls);dt(this,et("out"),this.ms);dt(this,"touchstart",this.En);this.o&&dt(this,et("down"),this.Dn);var b=g.Ps(a);a=Ss(a);this.l=!0;this.O("hoverstart",a.x,a.y,b);this.O("hovermove",a.x,a.y,b)};
g.h.ls=function(a){var b=g.Ps(a);a=Ss(a);if(this.B){var c=this.B;this.B=null;if(Rs(c)==b&&Zc(Ss(c),a))return}this.O("hovermove",a.x,a.y,b)};
g.h.ms=function(a){var b=Ss(a),c=Rs(a);c&&g.Kd(this.C,c)?(this.B=a,this.O("hovermove",b.x,b.y,c)):(g.at(this.g),bt(this),this.l=!1,this.O("hoverend",b.x,b.y,c))};
g.h.RD=function(a){this.os(a);this.Dn(a)};
g.h.Dn=function(a){if(!g.ua(a.button)||0==a.button){g.at(this.g);this.g.M(window.document,et("move"),this.QD);this.g.M(window.document,et("up"),this.mA);var b=g.Ps(a);if(g.rd)dt(this,"dragstart",this.yy);else if(g.Ts(a),(g.BB||g.nh)&&b)a:{for(var c=b;c;){if(g.Od(c)||"-1"===c.getAttribute("tabindex")){c.focus();break a}c=c.parentElement}window.document.activeElement.blur()}this.A=!0;a=Ss(a);this.O("dragstart",a.x,a.y,b);this.O("dragmove",a.x,a.y,b)}};
g.h.yy=function(a){g.Ts(a)};
g.h.QD=function(a){var b=g.Ps(a);b==window.document&&(b=null);a=Ss(a);this.O("hovermove",a.x,a.y,b);this.O("dragmove",a.x,a.y,b)};
g.h.mA=function(a){g.at(this.g);this.A=!1;var b=Qs(a),c=g.Ps(a);a=Ss(a);b&&g.Kd(this.C,b)?(dt(this,et("move"),this.ls),dt(this,et("out"),this.ms),dt(this,et("down"),this.Dn),dt(this,"touchstart",this.En),this.O("dragend",a.x,a.y,c)):(bt(this),this.l=!1,this.O("dragend",a.x,a.y,c),this.O("hoverend",a.x,a.y,c))};
g.h.En=function(a){var b=a.changedTouches[0];b&&(g.at(this.g),dt(this,"touchmove",this.nA),dt(this,"touchend",this.qs),dt(this,"touchcancel",this.qs),this.F=b.identifier,a=g.Ps(a),this.l||(this.l=!0,this.O("hoverstart",b.pageX,b.pageY,a)),this.O("hovermove",b.pageX,b.pageY,a),this.o&&(this.A=!0,this.O("dragstart",b.pageX,b.pageY,a),this.O("dragmove",b.pageX,b.pageY,a)))};
g.h.nA=function(a){var b=ft(this,a);b&&(this.o&&g.Ts(a),a=g.Ps(a),this.O("hovermove",b.pageX,b.pageY,a),this.o&&this.O("dragmove",b.pageX,b.pageY,a))};
g.h.qs=function(a){var b=ft(this,a);if(b){g.at(this.g);bt(this);this.l=!1;var c=g.Ps(a);this.o&&(this.H||g.Ts(a),this.A=!1,this.O("dragend",b.pageX,b.pageY,c));this.O("hoverend",b.pageX,b.pageY,c)}};
g.h.T=function(){this.o&&(g.rd&&this.C.removeAttribute("draggable"),this.C.style.touchAction="");g.at(this.g);g.R.prototype.T.call(this)};var gt={enablejsapi:1},ht={},it={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};jt.prototype.clone=function(){var a=new jt,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==xa(c)?a[b]=g.gc(c):a[b]=c}return a};var fu={},eu=0;var oca=g.z("ytPubsubPubsubInstance")||new g.dq;g.dq.prototype.subscribe=g.dq.prototype.subscribe;g.dq.prototype.unsubscribeByKey=g.dq.prototype.wc;g.dq.prototype.publish=g.dq.prototype.O;g.dq.prototype.clear=g.dq.prototype.clear;g.y("ytPubsubPubsubInstance",oca,void 0);g.nt=g.z("ytPubsubPubsubSubscribedKeys")||{};g.y("ytPubsubPubsubSubscribedKeys",g.nt,void 0);g.pt=g.z("ytPubsubPubsubTopicToKeys")||{};g.y("ytPubsubPubsubTopicToKeys",g.pt,void 0);var ot=g.z("ytPubsubPubsubIsSynchronous")||{};
g.y("ytPubsubPubsubIsSynchronous",ot,void 0);var Gt={log_event:"events",log_interaction:"interactions"},ZW=Object.create(null);ZW.log_event="GENERIC_EVENT_LOGGING";ZW.log_interaction="INTERACTION_LOGGING";var Ft={},wt={},Dt=0,Et=g.z("ytLoggingTransportLogPayloadsQueue_")||{};g.y("ytLoggingTransportLogPayloadsQueue_",Et,void 0);var xt=g.z("ytLoggingTransportTokensToCttTargetIds_")||{};g.y("ytLoggingTransportTokensToCttTargetIds_",xt,void 0);var Ht=g.z("ytLoggingTransportDispatchedStats_")||{};g.y("ytLoggingTransportDispatchedStats_",Ht,void 0);
g.y("ytytLoggingTransportCapturedTime_",g.z("ytLoggingTransportCapturedTime_")||{},void 0);g.r(Ot,Lt);Ot.prototype.start=function(){var a=g.z("yt.scheduler.instance.start");a&&a()};
Ot.prototype.pause=function(){var a=g.z("yt.scheduler.instance.pause");a&&a()};
g.wa(Ot);Ot.getInstance();var Vt={};var bu=g.z("ytLoggingLatencyUsageStats_")||{};g.y("ytLoggingLatencyUsageStats_",bu,void 0);var cu=0;var $W;$W=new rq;g.hu=$W.isAvailable()?new g.nq($W):null;var iu,aX=new sq;iu=aX.isAvailable()?new g.nq(aX):null;var qu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.y("yt.msgs_",qu,void 0);var IR=16/9,pca=[.25,.5,.75,1,1.25,1.5,2];var Bu={0:"f",160:"h",133:"h",134:"h",135:"h",136:"h",137:"h",264:"h",266:"h",138:"h",298:"h",299:"h",304:"h",305:"h",140:"a",327:"sa",258:"m",161:"H",142:"H",143:"H",144:"H",222:"H",223:"H",145:"H",224:"H",225:"H",146:"H",226:"H",147:"H",384:"H",376:"H",385:"H",377:"H",149:"A",261:"M",278:"9",242:"9",243:"9",244:"9",247:"9",248:"9",271:"9",313:"9",272:"9",302:"9",303:"9",308:"9",315:"9",330:"9h",331:"9h",332:"9h",333:"9h",334:"9h",335:"9h",336:"9h",337:"9h",171:"v",338:"so",250:"o",251:"o",194:"*",
195:"*",220:"*",221:"*",196:"*",197:"*",198:"V",279:"(",280:"(",317:"(",318:"(",273:"(",274:"(",357:"(",358:"(",275:"(",359:"(",360:"(",276:"(",314:"(",277:"(",362:"(h",363:"(h",364:"(h",365:"(h",366:"(h",367:"(h",368:"(h"};var EA={name:"width",video:!0,valid:640,vg:99999},FA={name:"height",video:!0,valid:360,vg:99999},CA={name:"framerate",video:!0,valid:30,vg:9999},GA={name:"bitrate",video:!0,valid:3E5,vg:2E9},DA={name:"eotf",video:!0,valid:"bt709",vg:"catavision"},mA={name:"channels",video:!1,valid:2,vg:99},nA={name:"cryptoblockformat",video:!0,valid:"subsample",vg:"invalidformat"},HA={wM:EA,CK:FA,vK:CA,HJ:GA,oK:DA,UJ:mA,cK:nA};uu.prototype.l=function(){return this.name};
uu.prototype.getId=function(){return this.id};
uu.prototype.g=function(){return this.isDefault};
uu.prototype.toString=function(){return this.name};
uu.prototype.getName=uu.prototype.l;uu.prototype.getId=uu.prototype.getId;uu.prototype.getIsDefault=uu.prototype.g;var Su={EJ:"auto",hM:"tiny",WK:"light",XL:"small",cL:"medium",UK:"large",BK:"hd720",xK:"hd1080",yK:"hd1440",zK:"hd2160",AK:"hd2880",GK:"highres",UNKNOWN:"unknown"};var bX;bX={};g.wu=(bX.auto=0,bX.tiny=144,bX.light=144,bX.small=240,bX.medium=360,bX.large=480,bX.hd720=720,bX.hd1080=1080,bX.hd1440=1440,bX.hd2160=2160,bX.hd2880=2880,bX.highres=4320,bX);var Au="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");Ku.prototype.g=function(a){return"true"==this.flags[a]};
Ku.prototype.l=function(a){return(0,window.parseFloat)(this.flags[a])||0};
Ku.prototype.o=function(a){return(a=this.flags[a])?a.toString():""};Lu.prototype.dispose=function(){if(!this.l){if(this.g)try{window.URL.revokeObjectURL(this.Of)}catch(a){}this.l=!0}};
Lu.prototype.ga=function(){return this.l};Mu.prototype.Se=function(){return this.yf};
Mu.prototype.g=function(){return null};
Mu.prototype.o=function(){};
var aA={52:!0,53:!0,54:!0,55:!0,60:!0,79:!0,87:!0};Nu.prototype.isLocked=function(){return this.o&&!!this.l&&this.l==this.g};
Nu.prototype.A=function(a){return a.video?Uu(this,a.video.quality):!1};
var GJ=Ou("auto","large",!1),Qu=Ou("auto","auto",!1);Ou("small","auto",!1);var cX={},dX=(cX["api.invalidparam"]=2,cX.auth=150,cX["drm.auth"]=150,cX["heartbeat.net"]=150,cX["heartbeat.servererror"]=150,cX["heartbeat.stop"]=150,cX["html5.unsupportedads"]=5,cX["fmt.noneavailable"]=5,cX["fmt.decode"]=5,cX["fmt.unplayable"]=5,cX["html5.missingapi"]=5,cX["html5.unsupportedlive"]=5,cX["drm.unavailable"]=5,cX);var gv=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/,cv=/^http:\/\/0\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.l2gfe\.[a-z0-9_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?\/|^https?:\/\/((?:uytfe\.corp|dev-uytfe\.corp|uytfe\.sandbox)\.google\.com\/|([-\w]*www[-\w]*\.|[-\w]*web[-\w]*\.|[-\w]*canary[-\w]*\.|[-\w]*dev[-\w]*\.|[-\w]{1,3}\.)+youtube(education|-nocookie)?\.com\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.([a-z]{3}|i)\.corp\.google\.com(:[0-9]+)?\/|(docs|drive)\.google\.com\/(a\/[^/\\%]+\/|)|[A-Za-z0-9]+(-v6)?\.prod\.google\.com(:[0-9]+)?\/|m?web-ppg\.corp\.google\.com\/|play\.google\.com\/)/,
nv=/^https?:\/\/(www\.google\.com\/pagead\/sul|www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/psul|www\.youtube\.com\/pagead\/slav|www\.youtube\.com\/pagead\/sul)/,yv=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|docs\.google\.com|drive\.google\.com|prod\.google\.com|plus\.google\.com|mail\.google\.com|youtube\.com|youtube\-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,tJ=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|youtube\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,
$A=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|video\.google\.com|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/\/*embed(\/+|\?|#|$)/,rv=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|play\.google\.com|prod\.google\.com|plus\.google\.com|video\.google\.com|youtube\.com|ytimg\.com|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|s2\.googleusercontent\.com\/s2\/favicons\?|yt[3-4]\.ggpht\.com\/)/,
ev=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/,wv=/^https?:\/\/(googleads\.g\.doubleclick\.net\/(aclk|pagead\/conversion)|www\.google\.com\/(aclk|pagead\/conversion)|www\.googleadservices\.com\/(aclk|pagead\/(aclk|conversion)))/,pv=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(ba\.l\.google\.com|c\.googlesyndication\.com|corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|googlevideo\.com|play\.google\.com|prod\.google\.com|c\.lh3\.googleusercontent\.com|plus\.google\.com|mail\.google\.com|ed\.video\.google\.com|vp\.video\.l\.google\.com|youtube\.com|youtubeeducation\.com|xfx7\.com|yt\.akamaized\.net|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,
uv=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|2mdn\.net|googlesyndication\.com|corp\.google\.com|borg\.google\.com|googleads\.g\.doubleclick\.net|prod\.google\.com|static\.doubleclick\.net|static\.googleadsserving\.cn|studioapi\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com|ytimg\.com)(:[0-9]+)?\/|lightbox-(demos|builder)\.appspot\.com\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|tpc\.googlesyndication\.com\/safeframe\/|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/ytplayer)/,
aB=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleads\.g\.doubleclick\.net|googleplex\.com|play\.google\.com|prod\.google\.com|photos\.google\.com|picasaweb\.google\.com|get\.google\.com|lh2\.google\.com|plus\.google\.com|spaces\.google\.com|books\.googleusercontent\.com|blogger\.com|mail\.google\.com|play\-books\-internal\-sandbox\.googleusercontent\.com|talkgadget\.google\.com|survey\.g\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com|vevo\.com|jamboard\.google\.com|chat\.google\.com|meet\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|(www\.|encrypted\.)?google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))\/(search|webhp)\?|24e12c4a-a-95274a9c-s-sites\.googlegroups\.com\/a\/google\.com\/flash-api-test-harness\/apiharness\.swf|lightbox-(demos|builder)\.appspot\.com\/|s0\.2mdn\.net\/instream\/html5\/native\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|tpc\.googlesyndication\.com\/safeframe\/|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris)/;g.r(Ev,g.J);g.h=Ev.prototype;g.h.aC=function(a,b,c){var d=this.I[a];d||(d=this.K[a])&&(c&&aB.test(c+"/")||fr(Error('API call from an untrusted origin: "'+c+'"')));if(d)return d.apply(this,b);throw Error('Unknown API method: "'+a+'".');};
g.h.SB=function(){return this.H.slice()};
g.h.TB=function(){return g.Xb(this.A)};
g.h.ha=function(){return this.o};
g.h.addEventListener=function(a,b){if(g.w(b)){var c=function(){g.z(b).apply(window,arguments)};
this.F[b]=c}else c=b;this.app.fa.subscribe(a,c)};
g.h.Ey=function(a,b){var c=this,d=g.w(b)?a+b:a+g.Ea(b);if(!this.B[d]){var e;g.w(b)?e=function(){g.z(b).apply(window,arguments)}:e=b;
var f=function(a){e({target:c.l,data:a})};
this.B[d]=f;this.app.fa.subscribe(a,f)}};
g.h.removeEventListener=function(a,b){if(g.w(b)){var c=this.F[b];ec(this.F,b);b=c}this.app.fa.unsubscribe(a,b)};
g.h.Fy=function(a,b){var c=g.w(b)?a+b:a+g.Ea(b),d=this.B[c];d&&(this.app.fa.unsubscribe(a,d),ec(this.B,c))};
g.h.qh=function(){return UV(this.app)};
g.h.yb=function(a,b){this.g&&cW(this.app,!0,this.playerType);sW(this.app,a,b,void 0,this.playerType)};
g.h.getCurrentTime=function(){return this.app.getCurrentTime(this.playerType)};
g.h.UB=function(){var a=g.V(this.app,this.playerType);if(!a)return 0;a=cL(a);return(0,window.isNaN)(a)?this.getCurrentTime():a};
g.h.getDuration=function(){return this.app.getDuration(this.playerType)};
g.h.getVolume=function(){return this.app.K.volume};
g.h.setVolume=function(a){Jv(this,a)};
g.h.isMuted=function(){return this.app.K.muted};
g.h.mute=function(){Kv(this)};
g.h.De=function(){Lv(this)};
g.h.Oc=function(){this.g&&cW(this.app,!0,this.playerType);var a=rL(this.app);2==a?(a=this.app.A.B)&&a.Fs("control_play"):3==a?g.sL(this.app.A).yi("control_play"):rW(this.app,this.playerType)};
g.h.Wb=function(){var a=rL(this.app);2==a?(a=this.app.A.B)&&a.Fs("control_pause"):3==a?g.sL(this.app.A).yi("control_pause"):(a=g.V(this.app,this.playerType))&&zK(a)};
g.h.cf=function(){var a=this.app;a.g.ba&&(a.l.isFullscreen()&&!a.g.experiments.g("player_external_control_on_classic_desktop")&&g.xL(a.l),a.l.O("pageTransition"));var b=a.o.g;b=new g.lD({video_id:b.videoId,oauth_token:b.oauthToken});dW(a,b,1);null!=a.V&&a.V.stop()};
g.h.OB=function(){};
g.h.dc=function(){return g.V(this.app,1).Ha};
g.h.Be=function(a){RV(this.app,a)};
g.h.ph=function(){return this.app.g.Ga?pca:[1]};
g.h.Ci=function(){var a=g.V(this.app,this.playerType);if(a){var b="unknown";a.g.Ba&&(b=a.g.Ba.video.quality,"auto"==b&&a.l&&(a=a.l?a.l.ha():null)&&0<a.videoHeight&&(b=vu(a.videoWidth,a.videoHeight)))}else b="unknown";return b};
g.h.Fi=function(a){if(!this.app.g.experiments.g("html5_ignore_public_setPlaybackQuality")&&!this.app.g.l){var b=g.V(this.app,this.playerType);b&&(a=Ou(a,a,!0),TK(b,"p",a))}};
g.h.Sn=function(){var a=g.V(this.app,this.playerType);return a?(a=(0,g.I)(RK(a),function(a){return a.quality}),a.length&&("auto"==a[0]&&a.shift(),a=a.concat(["auto"])),a):[]};
g.h.XB=function(){return this.Tn()};
g.h.YB=function(){return 1};
g.h.Tn=function(){return HV(this.app)};
g.h.ZB=function(){return 0};
g.h.setSize=function(){this.app.H.Ae()};
g.h.Zs=function(a){this.Un(a?2:1)};
g.h.Un=function(a){tW(this.app,a)};
g.h.MB=function(){this.la("SUBSCRIBE")};
g.h.NB=function(){this.la("UNSUBSCRIBE")};
g.h.Di=function(a){"captions"==a&&(a=this.app.A.l)&&!a.loaded&&a.load()};
g.h.Kk=function(a){"captions"==a&&(a=this.app.A.l)&&a.loaded&&a.WI()};
g.h.eC=function(a,b,c){a=aW(this.app,$u(a,b,c),this.playerType);this.g&&cW(this.app,a,this.playerType)};
g.h.Us=function(a,b,c){eW(this.app,$u(a,b,c),this.playerType)};
g.h.fC=function(a,b,c){a=av(a,b,c);a=aW(this.app,a,this.playerType);this.g&&cW(this.app,a,this.playerType)};
g.h.QB=function(a,b,c){a=av(a,b,c);eW(this.app,a,this.playerType)};
g.h.getVideoUrl=function(){var a=this.app.g;if(a.I)return"";var b=this.app.o.g,c=void 0;b.oa||(c=Math.floor(this.app.getCurrentTime(1)));return a.getVideoUrl(b.videoId,this.getPlaylistId()||void 0,c)};
g.h.Bi=function(){return TV(this.app)};
g.h.Ws=function(){var a=this.app.g;if(a.I)var b="";else{var c=this.app.o.g.videoId;b=this.app.H.Da();var d=this.getPlaylistId()||void 0;c="https://"+uB(a)+"/embed/"+c;d&&(c=g.Jg(c,{list:d}));d=!a.experiments.g("enable_responsive_embed_snippet");a.experiments.g("embed_snippet_includes_version")&&(c=g.Jg(c,{ecver:d?"1":"2"}));a=b.width;b=b.height;d?(d=g.Bb(c),b='<iframe width="'+a+'" height="'+b+'" src="'+d+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'):(d=Math.round(360*
a/b),b='<div style="position:relative;height:0;padding-bottom:'+Math.round(1E4*b/a)/100+'%"><iframe src="'+g.Bb(c)+'" style="position:absolute;width:100%;height:100%;left:0" width="'+d+'" height="360" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>')}return b};
g.h.Ts=function(a,b,c){return kW(this.app,a,b,c)};
g.h.Ys=function(a){a:{for(var b=this.app,c=vI(b.o.K)||[],d=0;d<c.length;d++){var e=c[d];if(e.getId()==a){b.o.K.C(e);IL(b,"cuerangesremoved",[e]);a=!0;break a}}a=!1}return a};
g.h.dC=function(a,b,c,d){var e=this.app;e.ia=!1;fW(e,a,b,c,d);this.g&&cW(this.app,!0,this.playerType)};
g.h.PB=function(a,b,c,d){var e=this.app;e.ia=!0;fW(e,a,b,c,d)};
g.h.rh=function(){iW(this.app);this.g&&cW(this.app,!0,this.playerType)};
g.h.Ei=function(){jW(this.app);this.g&&cW(this.app,!0,this.playerType)};
g.h.Xs=function(a){var b=this.app;!b.aa||b.l.isFullscreen()&&!b.Ga?b.C&&(b.C.xe?$V(b,b.C.Eb(a),1):b.ia=!1,TF(b.C,a)):b.l.la("onPlaylistIndex",a);this.g&&cW(this.app,!0,this.playerType)};
g.h.setShuffle=function(a){var b=this.app.C;b&&b.setShuffle(a)};
g.h.hC=function(a){var b=this.app.C;b&&(b.loop=a)};
g.h.Ce=function(){var a=this.app.C;if(!a)return null;for(var b=[],c=0;c<a.getLength();c++){var d=a.Eb(c);d&&b.push(d.videoId)}return b};
g.h.Vs=function(){var a=this.app.C;return a?a.Oa:-1};
g.h.getPlaylistId=function(){var a=this.app.C;return a&&a.listId?a.listId.toString():null};
g.h.Pc=function(a,b,c){if(!b)return null;var d=this.app.A;return"captions"==a?(a=d.l)&&a.Ln(b,c):null};
g.h.Lb=function(a,b,c){return this.Pc(a,b,c)};
g.h.Eg=function(a){var b=this.app.A;return"captions"==a?(b=b.l)&&b.XA():a?null:(a=[],b.l&&a.push("captions"),a)};
g.h.Y=function(){var a={},b=g.V(this.app,this.playerType);if(b&&(b=b.g,a.video_id=b.videoId,a.author=b.author,a.title=b.title,b.Ba)){a.video_quality=b.Ba.video.quality;b=b.Ba.video;var c=[];32<b.fps&&c.push("hfr");zu(b)&&c.push("hdr");"bt2020"==b.primaries&&c.push("wcg");a.video_quality_features=c}(b=this.getPlaylistId())&&(a.list=b);return a};
g.h.gt=function(){yV(this.app,!0)};
g.h.bC=function(){yV(this.app,!1)};
g.h.RB=function(){return-1};
g.h.cC=function(a){if(a!=this.app.ma.args.video_id)return!1;a=(a=g.V(this.app,1))?a.o:null;return!(!a||!g.T(a,128)||5!=dX[a.g.errorCode])};
g.h.WB=function(){var a=this.app.ma.clone();g.Ia(a.args,RD(this.app.o.g));return a};
g.h.iC=function(){this.app.g.F&&this.app.L.resume()};
g.h.VB=function(){var a=this.app.A.o;return a?a.cB():{}};
g.h.ct=function(a){if(a){var b=this.app.A.o;b&&b.Cs(a,!0)}};
g.h.destroy=function(){this.app.dispose()};
g.h.gC=function(){var a=g.V(this.app);a&&!g.T(a.o,128)&&(a.O("internalAbandon"),iK(a),gK(a))};
g.h.O=function(a,b){for(var c=1;c<arguments.length;++c);this.app.g.ob&&("videodatachange"==a||"audiotrackchanged"==a||"resize"==a||"cardstatechange"==a)&&this.app.fa.O.apply(this.app.fa,arguments);this.app.ba.O.apply(this.app.ba,arguments)};
g.h.la=function(a,b){this.app.fa.O.apply(this.app.fa,arguments);this.app.ba.O.apply(this.app.ba,arguments)};
g.h.T=function(){if(this.o){for(var a in this.A)this.o[a]=null;this.o=null}this.F=this.B=null;g.J.prototype.T.call(this)};g.Mv.prototype.toString=function(){return this.languageCode+"_"+this.languageName+"_"+this.g+"_"+this.id+"_"+this.isDefault};g.Nv.prototype.wb=function(){return this.I};
g.Nv.prototype.toString=function(){return this.l+": "+g.Ov(this)+" - "+this.F};
g.Nv.prototype.K=ba(4);g.Nv.prototype.Nc=function(){return!(!this.l||this.g&&!this.g.languageCode)};Pv.prototype.l=function(){return this.bc};
Pv.prototype.toString=function(){return this.bc.name};
Pv.prototype.getLanguageInfo=Pv.prototype.l;g.h=g.Uv.prototype;g.h.ts=function(a){this.segments.push(a)};
g.h.getDuration=function(a){return(a=this.og(a))?a.duration:0};
g.h.ym=function(a){return this.getDuration(a)};
g.h.Re=function(){return this.segments.length?this.segments[0].na:-1};
g.h.Hn=function(a){return(a=this.og(a))?a.ingestionTime:window.NaN};
g.h.Pb=function(){return this.segments.length?this.segments[this.segments.length-1].na:-1};
g.h.ek=function(){var a=this.segments[this.segments.length-1];return a?a.endTime:window.NaN};
g.h.tb=function(){return this.segments[0].startTime};
g.h.eh=function(){return this.segments.length};
g.h.Fk=function(){return 0};
g.h.Cf=function(a){return(a=this.Vj(a))?a.na:-1};
g.h.fr=function(a){return(a=this.og(a))?a.sourceURL:""};
g.h.nd=function(a){return(a=this.og(a))?a.startTime:0};
g.h.gk=ba(6);g.h.Vb=function(){return 0<this.segments.length};
g.h.og=function(a){a=g.gb(this.segments,new Tv(a,0,0,0,""),function(a,c){return a.na-c.na});
return 0<=a?this.segments[a]:null};
g.h.Vj=function(a){a=g.gb(this.segments,{startTime:a},function(a,c){return a.startTime-c.startTime});
return 0<=a?this.segments[a]:this.segments[Math.max(0,-a-2)]};
g.h.br=function(){return 0};Wv.prototype.skip=function(a){this.g+=a};aw.prototype.Nj=function(a,b,c){(new window.Uint8Array(this.data.buffer,this.g,c)).set(new window.Uint8Array(a.buffer,b+a.byteOffset,c));this.g+=c};g.Bw.prototype.toString=function(){return this.start+"-"+(null==this.end?"":this.end)};gx.prototype.verify=function(){if(this.info.Ja!=this.range.length)return!1;if(1==this.info.g.info.containerType){if(8>this.info.Ja||4==this.info.type)return!0;var a=hx(this),b=a.getUint32(0,!1);a=a.getUint32(4,!1);if(2==this.info.type)return b==this.info.Ja&&1936286840==a;if(3==this.info.type&&0==this.info.l)return 1836019558==a||1936286840==a||1937013104==a||1718909296==a||1701671783==a||1936419184==a}else if(2==this.info.g.info.containerType){if(4>this.info.Ja||4==this.info.type)return!0;b=hx(this).getUint32(0,
!1);if(3==this.info.type&&0==this.info.l)return 524531317==b||440786851==b}return!0};var eX={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},fX;var gX=g.Pb;gX=gX.toLowerCase();if(-1!=gX.indexOf("android")){var hX=gX.match(/android\D*(\d\.\d)[^;|\)]*[;\)]/);if(hX)fX=(0,window.parseFloat)(hX[1]);else{var iX=gX.match("("+g.Xb(eX).join("|")+")");fX=iX?eX[iX[0]]:0}}else fX=void 0;var $z=fX,rA=0<=$z;var nx=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],ox=['audio/mp4; codecs="mp4a.40.2"'];tx.prototype.start=function(){return 0};
tx.prototype.end=function(){return window.Infinity};g.h=ux.prototype;g.h.addEventListener=function(){};
g.h.removeEventListener=function(){};
g.h.dispatchEvent=function(){return!1};
g.h.abort=function(){};
g.h.remove=function(){};
g.h.appendBuffer=function(){};g.h=vx.prototype;g.h.append=function(a){this.l.webkitSourceAppend(this.o,a)};
g.h.abort=function(){this.l.webkitSourceAbort(this.o)};
g.h.gJ=function(){return this.l.webkitSourceState==this.l.SOURCE_CLOSED?new wx:this.l.webkitSourceBuffered(this.o)};
g.h.iJ=function(){return this.A};
g.h.mJ=function(a){this.A=a;this.l.webkitSourceTimestampOffset(this.o,a)};g.h=xx.prototype;g.h.addEventListener=function(a,b,c){this.g.addEventListener(a,b,c)};
g.h.removeEventListener=function(a,b,c){this.g.removeEventListener(a,b,c)};
g.h.GB=function(){return this.g.webkitMediaSourceURL};
g.h.addSourceBuffer=function(a){var b=(this.o++).toString();this.g.webkitSourceAddId(b,a);a=new vx(this.g,b);this.sourceBuffers.push(a);return a};
g.h.removeSourceBuffer=function(a){for(var b=0;b<this.sourceBuffers.length;b++)if(a===this.sourceBuffers[b]){this.g.webkitSourceRemoveId(a.o);for(a=b+1;a<this.sourceBuffers.length;a++)this.sourceBuffers[a-1]=this.sourceBuffers[a];this.sourceBuffers.pop();break}};
g.h.jJ=function(){switch(this.g.webkitSourceState){case this.g.SOURCE_CLOSED:return"closed";case this.g.SOURCE_OPEN:return"open";case this.g.SOURCE_ENDED:return"ended"}return""};
g.h.endOfStream=function(){this.g.webkitSourceEndOfStream(this.g.EOS_NO_ERROR)};
g.h.kJ=function(){Ua(this.sourceBuffers)};
g.h.hJ=function(){return this.l};
g.h.lJ=function(a){this.l=a;this.g.webkitSourceSetDuration&&this.g.webkitSourceSetDuration(a)};g.r(zx,g.J);zx.prototype.L=function(){if(!this.ga()&&Bx(this))try{this.A&&(this.A(this),this.A=null)}catch(a){this.C&&this.C(a)}};
zx.prototype.K=function(){this.dispose()};g.Mx.prototype.set=function(a,b){this.g[a]!==b&&(this.g[a]=b,this.o="")};
g.Mx.prototype.get=function(a){Nx(this);return this.g[a]||null};
g.Mx.prototype.wb=function(){this.o||(this.o=Ux(this));return this.o};
g.Mx.prototype.clone=function(){var a=new g.Mx(this.A);a.C=this.C;a.l=this.l;a.B=this.B;a.g=g.gc(this.g);a.o=this.o;return a};
var Qx=!1;Wx.prototype.set=function(a,b){this.g.get(a);this.l[a]=b;this.o=""};
Wx.prototype.get=function(a){return this.l[a]||this.g.get(a)};
Wx.prototype.wb=function(){this.o||(this.o=Yx(this));return this.o};var qca=0;g.h=ky.prototype;g.h.Cd=function(){};
g.h.Ib=function(){};
g.h.ln=function(){return!1};
g.h.Mc=function(){return!!this.g&&!!this.index&&this.index.Vb()};
g.h.Dg=function(){};
g.h.ws=function(){return!1};
g.h.di=function(){};
g.h.Cg=function(){};
g.h.wi=function(){};
g.h.Bf=function(){};
g.h.Um=function(){};
g.h.xs=function(a){return[a]};
g.h.ll=function(a){return[a]};
g.h.Io=function(){};
g.h.Bm=function(){};g.r(my,ky);g.h=my.prototype;g.h.Cd=function(){return!1};
g.h.Ib=function(){return!1};
g.h.ws=function(){return this.l};
g.h.di=function(){if(this.l)return[];var a=new Fw(1,this,this.initRange);return[new fy([a],this.I)]};
g.h.Cg=function(){return null};
g.h.wi=function(a){this.Dg(a);return this.Oj(a.o?a.na+1:a.na,!1)};
g.h.Bf=function(a,b){b=void 0===b?!1:b;var c=this.index.Cf(a);b&&(c=Math.min(this.index.Pb(),c+1));return this.Oj(c,!0)};
g.h.Um=function(a){this.g=new window.Uint8Array(hx(a).buffer)};
g.h.ln=function(){return!1};
g.h.Dg=function(a){return 0==a.Ja?!0:this.index.Pb()>a.na&&this.index.Re()<=a.na+1};
g.h.update=function(a,b,c){var d=this.index;if(0!=a.length)if(a=g.ab(a),0==d.segments.length)d.segments=a;else{var e=d.segments.length?g.La(d.segments).endTime:0,f=a[0].na-d.Pb();1<f&&Ua(d.segments);for(f=0<f?0:-f+1;f<a.length;f++){var k=a[f];k.startTime=e;k.endTime=k.startTime+k.duration;e+=a[f].duration;d.segments.push(a[f])}}Vv(this.index,c);this.H=b};
g.h.Mc=function(){return this.l?!0:ky.prototype.Mc.call(this)};
g.h.Oj=function(a,b){var c=this.index.fr(a),d=this.index.nd(a),e=this.index.getDuration(a),f;b?e=f=0:f=0<this.info.g?this.info.g*e:1E3;d=new Fw(3,this,null,a,d,e,0,f,a==this.index.Pb()&&!this.H&&0<f);return new fy([d],c)};
g.h.Bm=function(){return this.l?0:this.initRange.length};
g.h.Io=function(){return!1};g.r(ny,g.Uv);g.h=ny.prototype;g.h.Re=function(){return this.g?this.segments.length?this.Vj(this.tb()).na:-1:g.Uv.prototype.Re.call(this)};
g.h.tb=function(){return this.g?this.segments.length?Math.max(g.La(this.segments).endTime-this.o,0):0:g.Uv.prototype.tb.call(this)};
g.h.eh=function(){return this.g?this.segments.length?this.Pb()-this.Re()+1:0:g.Uv.prototype.eh.call(this)};
g.h.ts=function(a){var b=oy(this,a.na);0<=b?this.segments[b]=a:this.segments.splice(-(b+1),0,a)};
g.h.Vj=function(a){if(!this.g)return g.Uv.prototype.Vj.call(this,a);if(!this.segments.length)return null;var b=g.gb(this.segments,{startTime:a},function(a,b){return a.startTime-b.startTime}),c=this.segments[0<=b?b:Math.max(-(b+2),0)];
return c.startTime+c.duration>a&&c.startTime<=a?c:-1==b?qy(this,c.na-Math.ceil((c.startTime-a)/this.l),c):qy(this,c.na+Math.ceil((a-c.endTime)/this.l),c)};
g.h.og=function(a){if(!this.g)return g.Uv.prototype.og.call(this,a);if(!this.segments.length)return null;var b=oy(this,a);return 0<=b?this.segments[b]:qy(this,a,this.segments[Math.max(-(b+2),0)])};g.r(ry,my);g.h=ry.prototype;g.h.Ib=function(){return!0};
g.h.Mc=function(){return!0};
g.h.Dg=function(){return!0};
g.h.di=function(){return[]};
g.h.Bf=function(a,b){if(g.ua(a)&&!(0,window.isFinite)(a)){var c=new Fw(3,this,null,-1,void 0,this.B,void 0,this.B*this.info.g);return new fy([c],"")}return my.prototype.Bf.call(this,a,b)};
g.h.Oj=function(a,b){if(py(this.index,a))return my.prototype.Oj.call(this,a,b);var c=this.index.nd(a);c=new Fw(3,this,null,a,c,void 0,void 0,b?0:this.B*this.info.g);return new fy([c],0<=a?"sq/"+a:"")};yy.prototype.update=function(a,b){var c=void 0;this.l&&(c=this.l);var d=new yy,e=a.getElementsByTagName("S");if(e.length){var f=+ty(a,"timescale")||1,k=(+e[0].getAttribute("t")||0)/f,l=+ty(a,"startNumber")||0;var m=k;var n=+ty(a,"presentationTimeOffset")||0;m=c?c.Pd+c.durationSecs:b?m-n/f:0;n=Date.parse(wy(ty(a,"yt:segmentIngestTime")))/1E3;d.o="SegmentTemplate"==a.parentNode.tagName;d.o&&(d.C=ty(a,"media"));var p=c?l-c.na:1;d.B=0<p?0:-p+1;e=g.q(e);for(p=e.next();!p.done;p=e.next()){p=p.value;for(var u=
+p.getAttribute("d")/f,v=(+p.getAttribute("yt:sid")||0)/f,C=+p.getAttribute("r")||0,D=0;D<=C;D++)if(c&&l<=c.na)l++;else{var E=new sy(l,m,u,n+v,k);d.g.push(E);var ea=E.Pd,fa=p.getAttribute("yt:cuepointTimeOffset");E=p.getAttribute("yt:cuepointDuration");fa&&E?(ea=+fa/f+ea,E=+E/f,fa=p.getAttribute("yt:cuepointContext")||null,E=new ew(ea,E,fa)):E=null;E&&d.A.push(E);l++;m+=u;k+=u;n+=u+v}}d.g.length&&(d.l=g.La(d.g))}this.B=d.B;this.l=d.l||this.l;bb(this.g,d.g);bb(this.A,d.A);this.o=d.o;this.C=d.C};
yy.prototype.F=function(a,b,c,d){for(var e=this.C.split("$$"),f=0;f<e.length;f++)e[f]=e[f].replace("$RepresentationID$",a),e[f]=e[f].replace("$Number$",c.toString()),e[f]=e[f].replace("$Bandwidth$",b.toString()),e[f]=e[f].replace("$Time$",d.toString());return e.join("$")};g.h=g.Gy.prototype;g.h.Fk=function(a){return this.g[a]};
g.h.nd=function(a){return this.l[a]/this.A};
g.h.gk=ba(5);g.h.Hn=function(){return window.NaN};
g.h.getDuration=function(a){a=this.ym(a);return 0<=a?a/this.A:-1};
g.h.ym=function(a){return a+1<this.va||this.o?this.l[a+1]-this.l[a]:-1};
g.h.Re=function(){return 0};
g.h.Pb=function(){return this.va-1};
g.h.ek=function(){return this.o?this.l[this.va]/this.A:window.NaN};
g.h.tb=function(){return 0};
g.h.eh=function(){return this.va};
g.h.fr=function(){return""};
g.h.Cf=function(a){a=g.gb(this.l.subarray(0,this.va),a*this.A);return 0<=a?a:Math.max(0,-a-2)};
g.h.Vb=function(){return 0<=this.Pb()};
g.h.br=function(a,b){if(a>=this.Pb())return 0;for(var c=0,d=this.nd(a)+b,e=a;e<this.Pb()&&d>this.nd(e);e++)c=Math.max(c,(e+1<this.va||this.o?this.g[e+1]-this.g[e]:-1)/this.getDuration(e));return c};
g.h.cap=function(a,b){Hy(this);this.o=!0;this.l[this.va]=b;this.g[this.va]=a};g.r(g.Iy,ky);g.h=g.Iy.prototype;g.h.di=function(a){var b=new Fw(1,this,this.initRange),c=new Fw(2,this,this.indexRange),d=[],e=[b];Iw(b,c)?e.push(c):(d.push(new fy([c])),a=0);(0,window.isNaN)(this.l)&&(a=0);b=e[e.length-1];a=Math.min(a,this.l-(b.range.end-e[0].range.start+1));0<a&&(a=Dw(b.range.end+1,a),e.push(new Fw(4,this,a)));d.push(new fy(e));return d};
g.h.Um=function(a){if(1==a.info.type){if(this.g)return;if(a.g.slice)var b=new window.Uint8Array(a.g.slice(a.range.start,a.range.end+1));else b=new window.Uint8Array(a.g,a.range.start,a.range.end+1),b=new window.Uint8Array(b);this.g=b}else if(2==a.info.type){if(this.B||0<=this.index.Pb())return;if(Gu(this.info)){b=this.index;var c=hx(a),d=a.info.range.start;a=0;var e=c.getUint32(0,!1),f=c.getUint8(a+8);a+=12;var k=c.getUint32(a+4,!1);b.A=k;a+=8;0==f?(f=c.getUint32(a,!1),k=c.getUint32(a+4,!1),a+=8):
(f=4294967296*c.getUint32(a,!1)+c.getUint32(a+4,!1),k=4294967296*c.getUint32(a+8,!1)+c.getUint32(a+12,!1),a+=16);b.g[0]=k+(e+d);b.l[0]=f;b.o=!0;d=c.getUint16(a+2,!1);a+=4;for(e=0;e<d;e++){f=c.getUint32(a,!1);k=c.getUint32(a+4,!1);a+=12;var l=b;l.va++;Hy(l);l.g[l.va]=l.g[l.va-1]+f;l.l[l.va]=l.l[l.va-1]+k}}else this.B=hx(a)}if(2==this.info.containerType&&this.g&&this.B){a=new window.DataView(this.g.buffer);b=this.index;k=this.B;c=this.indexRange.end;a=new Pw(a);if(Tw(a,440786851)&&(Zw(a),Tw(a,408125543)&&
(e=a,f=e.g,d=Uw(e,!0),e.g=f,a=Sw(a),e=a.o+a.g,Tw(a,357149030)))){a=Sw(a);l=1E6;var m=1E9;for(f=0;!Qw(a);){var n=Uw(a,!1);2807729==n?l=Yw(a):2807730==n?m=Yw(a):17545==n?f=$w(a):Zw(a)}b.A=m/l;a=new Pw(k);if(Tw(a,475249515)){a=Sw(a);k=!0;for(l=!1;Tw(a,187);){m=Sw(a);if(Tw(m,179))if(n=Yw(m),Tw(m,183)){m=Sw(m);for(var p=e;Tw(m,241);)p=Yw(m)+e;m=[p,n]}else m=null;else m=null;p=m;k&&c==p[0]&&(l=!0);k=!1;l&&(p[0]+=1);m=b;n=p[0];p=p[1];Hy(m);m.g[m.va]=n;m.l[m.va]=p;m.va++}b.cap(d+e,f)}}this.B=null}};
g.h.xs=function(a){for(var b=this.ll(a.info),c=[],d=a.pd,e=0;e<b.length;e++){var f=Dw(b[e].range.start+b[e].l-a.info.range.start+a.range.start,b[e].Ja);c.push(new gx(b[e],a.g,f,a.o,d));d=!1}return c};
g.h.ll=function(a){for(var b=0;b<this.index.Pb()&&a.range.start>=this.index.Fk(b+1);)b++;return Jy(this,b,a.range.start,a.range.length).ra};
g.h.Dg=function(a){return this.Mc()?!0:(0,window.isNaN)(this.l)?!1:a.range.end+1<this.l};
g.h.Cg=function(a,b){this.Dg(a);if(!this.Mc()){var c=Dw(a.range.end+1,b);c.end+1>this.l&&(c=new g.Bw(c.start,this.l-1));c=[new Fw(4,a.g,c)];return new fy(c)}4==a.type&&(c=this.ll(a),a=c[c.length-1]);c=0;var d=a.range.start+a.l+a.Ja;3==a.type&&(c=a.na,d==a.range.end+1&&(c+=1));return Jy(this,c,d,b)};
g.h.wi=function(){return null};
g.h.Bf=function(a,b){var c=this.index.Cf(a);b&&(c=Math.min(this.index.Pb(),c+1));return Jy(this,c,this.index.Fk(c),0)};
g.h.ln=function(){var a;if(a=this.Mc()&&!(0,window.isNaN)(this.l))a=this.index,a=(a.o?a.g[a.va]:-1)!=this.l;return a};
g.h.Cd=function(){return!0};
g.h.Ib=function(){return!1};
g.h.Bm=function(){return this.indexRange.length+this.initRange.length};
g.h.Io=function(){return this.indexRange&&this.initRange&&this.initRange.end+1==this.indexRange.start?!0:!1};var Ny={EE:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b]=c},
d9:function(a){a.reverse()},
yM:function(a,b){a.splice(0,b)}};g.r(Py,g.R);g.h=Py.prototype;g.h.te=function(){return Tb(this.g,function(a){return a.info.video?2==a.info.video.projectionType:!1})};
g.h.ue=function(){return Tb(this.g,function(a){return a.info.video?3==a.info.video.projectionType:!1})};
g.h.Hd=function(){return Tb(this.g,function(a){return a.info.video?4==a.info.video.projectionType:!1})};
g.h.wg=function(){return Tb(this.g,function(a){return a.info.video?1==a.info.video.stereoLayout:!1})};
g.h.UH=function(a){var b=a.getElementsByTagName("Representation");if(0<a.getElementsByTagName("SegmentList").length||0<a.getElementsByTagName("SegmentTemplate").length){this.A=!0;this.B||(this.B=new Ay);Ey(this.B,a,this.fa);this.O("refresh");for(a=0;a<b.length;a++){var c=dz(this,b[a]),d=this.isLive&&Gu(c)&&this.ia;if(!this.g[c.id]){var e=Xy(uy(b[a],"BaseURL").textContent),f=uy(b[a],"Initialization"),k=ty(f,"sourceURL");f=Cw(ty(f,"range"));d&&(k="",f=void 0);this.g[c.id]=new my(e,c,k,null===f?void 0:
f)}c=this.g[c.id];e=ty(b[a],"id","AdaptationSet");e=""!=e?e:ty(b[a],"mimetype","AdaptationSet");k=this.B;e=k.o[c.info.id]||k.l[e]||k.g||null;k=e.g;if(e.o)for(d=[],k=g.q(k),f=k.next();!f.done;f=k.next()){f=f.value;var l=e.F(c.info.id,8*c.info.g,f.na,f.Pd);d.push(new Tv(f.na,f.Pd,f.durationSecs,f.g,l,null,f.l))}else{e=g.cb(uy(b[a],"SegmentList").getElementsByTagName("SegmentURL"),e.B);f=[];for(l=0;l<e.length;l++)f.push(gz(e[l],k[l],d));d=f}c.update(d,this.isLive,this.R)}Fy(this.B);return!0}this.duration=
vy(ty(a,"mediaPresentationDuration"));a:{for(a=0;a<b.length;a++){k=b[a];c=dz(this,k);e=uy(k,"BaseURL");d=Xy(e.textContent);f=uy(k,"SegmentBase");k=Cw(f.attributes.indexRange.value);f=Cw(f.getElementsByTagName("Initialization")[0].attributes.range.value);e=(0,window.parseInt)(e.getAttribute($y(this,"contentLength")),10);c=new g.Iy(d,c,f,k,e,window.NaN);if(!c){b=!1;break a}this.g[c.info.id]=c}b=!0}return b};
g.h.My=function(a){return this.B?g.cb(this.B.A,a):this.L.length?g.cb(this.L,a):[]};
g.h.Yy=function(a){if(this.ga())return this;this.P=a.status;a=a.responseText;a=(new window.DOMParser).parseFromString(a,"text/xml").getElementsByTagName("MPD")[0];this.F=1E3*vy(ty(a,"minimumUpdatePeriod"))||window.Infinity;if(!this.U){var b;a:{for(b=0;b<a.attributes.length;b++)if("http://youtube.com/yt/2012/10/10"==a.attributes[b].value){b=a.attributes[b].name.split(":")[1];break a}b=""}this.aa=b}this.isLive=window.Infinity>this.F&&this.ma;this.R=(0,window.parseInt)(ty(a,$y(this,"earliestMediaSequence")),
10)||0;if(b=Date.parse(wy(ty(a,$y(this,"mpdResponseTime")))))this.H=((0,g.H)()-b)/1E3;this.isLive&&0>=a.getElementsByTagName("SegmentTimeline").length||(0,g.Fn)(a.getElementsByTagName("Period"),this.UH,this);this.C=2;this.O("loaded");iz(this);return this};
g.h.az=function(a){this.P=a.g.status;this.C=3;this.O("loaderror");return Nf(a.g)};
g.h.us=function(){if(1!=this.C&&!this.ga()){var a=g.Jg(this.V,{start_seq:jz(this).toString()});g.Vf(ez(this,a),function(){})}};
g.h.resume=function(){iz(this)};
g.h.kd=function(){var a=this.g,b=window.NaN,c;for(c in a){var d=a[c].index;d&&d.Vb()&&((0,window.isNaN)(b)||d.ek()<b)&&(b=d.ek())}return b};
g.h.tb=function(){var a=this.g,b;for(b in a){var c=a[b].index;if(c&&c.Vb())return c.tb()}return 0};
g.h.zA=function(){return this.H};
var pz=null,cz={commentary:1,alternate:2,dub:3,main:4};var jX={},Cz=(jX.playready=["com.youtube.playready","com.microsoft.playready"],jX.widevine=["com.widevine.alpha"],jX),Dz=g.$a(Cz.widevine,Cz.playready);g.r(Bz,g.J);Bz.prototype.F=function(){(this.C=this.A.g("html5_widevine_robustness_strings")&&!this.C&&"widevine"==this.g[this.l[0]].flavor)||this.l.shift();Ez(this)};
Bz.prototype.H=function(a,b){this.ga()||(a.l=b,Fz(this,a),this.B(a))};var kB={KL:"red",uM:"white"};Jz.prototype.g=function(a,b){var c=Math.pow(this.B,a);this.o=b*(1-c)+c*this.o;this.A+=a};
Jz.prototype.l=function(){return this.o/(1-Math.pow(this.B,this.A))};Kz.prototype.g=function(a,b){var c=Math.max(1,Math.round(a*this.L));c+this.A>=this.o&&(this.I=!0);for(;c--;)this.B[this.A]=b,this.A=(this.A+1)%this.o;this.H=!0};
Kz.prototype.l=function(){return this.F?(Lz(this,this.C-this.F)+Lz(this,this.C)+Lz(this,this.C+this.F))/3:Lz(this,this.C)};var bB={zJ:"adunit",gK:"detailpage",lK:"editpage",nK:"embedded",VK:"leanback",BL:"previewpage",DL:"profilepage",nM:"unplugged"};var qA="9h 9 h 8 (h ( H *".split(" "),pA="9h 9 h 8 ( H *".split(" "),sA="h98H(*".split(""),uA="oMavAV".split(""),xA=["so","sa"],wA="moMavAV".split(""),vA="aoMvAV".split(""),tA=["f"],gA={'video/mp4; codecs="avc1.42001E, mp4a.40.2"':"maybe"},hA={"application/x-mpegURL":"maybe"},fA={"application/x-mpegURL":"maybe"};var oB={XK:1,YK:2,ZK:3};g.r(JA,g.R);JA.prototype.add=function(a,b){if(!this.za[a]&&(b.Ij||b.Jj||b.jp)){var c=this.za,d=b;Object.isFrozen&&!Object.isFrozen(b)&&(d=Object.create(b),Object.freeze(d));c[a]=d;this.O("vast_info_card_add",a)}};
JA.prototype.remove=function(a){var b=this.get(a);delete this.za[a];return b};
JA.prototype.get=function(a){return this.za[a]||null};
JA.prototype.isEmpty=function(){return g.cc(this.za)};var OA=/^([0-9\.]+):([0-9\.]+)$/;var SA=g.z("ytglobal.prefsUserPrefsPrefs_")||{};g.y("ytglobal.prefsUserPrefsPrefs_",SA,void 0);g.h=TA.prototype;g.h.get=function(a,b){VA(a);UA(a);var c=void 0!==SA[a]?SA[a].toString():null;return null!=c?c:b?b:""};
g.h.set=function(a,b){VA(a);UA(a);if(null==b)throw Error("ExpectedNotNull");SA[a]=b.toString()};
g.h.remove=function(a){VA(a);UA(a);delete SA[a]};
g.h.save=function(){var a=this.g,b=[],c;for(c in SA)b.push(c+"="+(0,window.encodeURIComponent)(String(SA[c])));g.ou(a,b.join("&"),63072E3)};
g.h.clear=function(){g.dc(SA)};
g.wa(TA);var WA=(0,g.H)().toString();var cB="blogger books docs google-live play chat picasaweb gmail jamboard".split(" ");g.r(rB,g.J);
rB.prototype.jf=function(a){this.ya=NA(this.ya,a.video_id);this.Ya=NA(this.Ya,a.eventid);this.sa=a.oauth_token;for(var b in kX){var c=kX[b],d=a[c];void 0!=d&&(this.B[c]=d)}!this.Ta&&a.cl&&(this.Ta=+a.cl);this.userAge=MA(this.userAge,a.user_age);this.userDisplayImage=NA(this.userDisplayImage,a.user_display_image);g.tv(this.userDisplayImage)||(this.userDisplayImage="");this.userDisplayName=NA(this.userDisplayName,a.user_display_name);this.userGender=NA(this.userGender,a.user_gender);this.csiPageType=
NA(this.csiPageType,a.csi_page_type);this.Za=NA(this.Za,a.csi_service_name);this.Sc=KA(this.Sc,a.enablecsi);a.enabled_engage_types&&(this.Mb=new window.Set(a.enabled_engage_types.split(",")))};
rB.prototype.getVideoUrl=function(a,b,c,d,e){b={list:b};c&&(e?b.time_continue=c:b.t=c);c=uB(this);d&&"www.youtube.com"==c?d="https://youtu.be/"+a:g.wB(this)?(d="https://"+c+"/fire",b.v=a):(d=this.protocol+"://"+c+"/watch",b.v=a,eA&&(a=g.z("yt.ads.biscotti.lastId_")||"")&&(b.ebc=a));return g.Jg(d,b)};
var kX={IJ:"cbrand",JJ:"cbr",KJ:"cbrver",NK:"c",QK:"cver",PK:"ctheme",OK:"cplayer",dL:"cmodel",hL:"cnetwork",oL:"cos",pL:"cosver",xL:"cplatform"};var IB=new window.Set("BASE_URL BASE_YT_URL abd allow_embed authuser autoplay captions_load_policy cc_load_policy cc3_module dash dashmpd disable_native_context_menu docid el enable_cardio enablecastapi enablepostapi fmt_list fmt_stream_map hl hlsdvr hlsrange hlsvp html5 iurl iurlhq iurlmq length_seconds live_playback nohtml5 origin override_hl partnerid plid postid ps public rel reload_count reload_reason reportabuseurl resume start status streaminglib_load_policy streaminglib_preroll t timestamp title token ttsurl use_native_controls url_encoded_fmt_stream_map video_id videoid wmode".split(" "));g.r(OB,Mu);
OB.prototype.g=function(){if(!this.l||this.l.ga()){var a=this.A;LB(a);for(var b=["#EXTM3U","#EXT-X-INDEPENDENT-SEGMENTS"],c={},d=0,e=a.l.length;d<e;++d){var f=a.l[d];c[f.itag]=f;b.push('#EXT-X-MEDIA:TYPE=AUDIO,NAME="audio",DEFAULT=YES,AUTOSELECT=YES,'+('GROUP-ID="'+f.itag.toString()+'",')+('URI="'+f.url+'"'))}d=0;for(e=a.g.length;d<e;++d){f=a.g[d];var k=c[f.audioItag];b.push("#EXT-X-STREAM-INF:BANDWIDTH="+(f.bitrate+k.bitrate)+","+('CODECS="'+f.rq+","+k.rq+'",')+("RESOLUTION="+f.width+"x"+f.height+
",")+('AUDIO="'+k.itag.toString()+'",')+"CLOSED-CAPTIONS=NONE");b.push(f.url)}a="data:application/x-mpegurl;charset=utf-8,"+(0,window.encodeURIComponent)(b.join("\n"));this.l=new Lu(a)}return this.l};var rca={UNKNOWN:"UNKNOWN",NORMAL:"NORMAL",aL:"LOW",mM:"ULTRALOW"};g.r(RB,Mu);RB.prototype.g=function(){return new Lu(this.l.wb())};
RB.prototype.o=function(){this.l=Rx(this.l)};g.h=g.TB.prototype;g.h.Vd=function(){return this.C};
g.h.getHeight=function(){return this.B};
g.h.Zq=ba(7);g.h.zm=function(){return this.l};
g.h.isDefault=function(){return-1!=this.A.indexOf("default")};
g.h.Vb=function(a){return this.xe.has(a)};
g.h.wb=function(a){var b=this.K;b=b.replace("$N",this.A);b=b.replace("$L",this.I.toString());b=b.replace("$M",a.toString());this.F&&(b=g.Jg(b,{sigh:this.F}));return Bv(b)};
g.h.Ii=function(a){var b=this.zm()-1;return g.Uc(0==this.o?Math.round(a*this.l/this.L):Math.round(1E3*a/this.o),0,b)};
g.h.Mk=function(){return this.l-1};
g.h.zt=function(){return this.l?0:-1};
g.h.At=function(){};g.r(VB,g.R);VB.prototype.K=function(a,b){this.l=this.l.onload=null;var c=this.g[a];c.xe.add(b);YB(this);var d=c.columns*c.rows;var e=b*d;c=Math.min(e+d-1,c.zm()-1);e=[e,c];this.O("l",e[0],e[1])};
VB.prototype.T=function(){this.l&&(this.l=this.l.onload=null);g.R.prototype.T.call(this)};g.r($B,VB);$B.prototype.o=function(a,b){for(var c=[],d=a.split("|"),e=d[0],f=1;f<d.length;f++){var k=this.C(f-1,e,d[f],b);180>k.getHeight()&&c.push(k)}return c};
$B.prototype.C=function(a,b,c,d){return new g.TB(a,b,c,d)};
$B.prototype.I=function(){};g.r(aC,g.TB);g.h=aC.prototype;g.h.zm=function(){return this.g?this.g.eh():-1};
g.h.Ii=function(a){var b=this.rows*this.columns*this.H,c=-1,d=-1,e=this.g;e&&(c=e.Pb(),d=e.Cf(a));return d>c-b?-1:d};
g.h.Mk=function(){return this.g?this.g.Pb():-1};
g.h.zt=function(){return this.g?this.g.Re():-1};
g.h.At=function(a){this.g=a};g.r(bC,$B);bC.prototype.o=function(a,b){return $B.prototype.o.call(this,"$N|"+a,b)};
bC.prototype.C=function(a,b,c){return new aC(a,b,c,this.isLive)};
bC.prototype.I=function(a){for(var b=0;b<this.g.length;b++)this.g[b].At(a)};g.r(cC,Mu);cC.prototype.g=function(){return new Lu(this.l)};var eC={iurl:"default.jpg",iurlmq:"mqdefault.jpg",iurlhq:"hqdefault.jpg",iurlsd:"sddefault.jpg",iurlpop1:"pop1.jpg",iurlpop2:"pop2.jpg",iurlhq720:"hq720.jpg",iurlmaxres:"maxresdefault.jpg"},hC={120:"default.jpg",320:"mqdefault.jpg",480:"hqdefault.jpg",560:"pop1.jpg",640:"sddefault.jpg",854:"pop2.jpg",1280:"hq720.jpg"};g.kC.prototype.toString=function(){return this.topic};var sca=g.z("ytPubsub2Pubsub2Instance")||new g.dq;g.dq.prototype.subscribe=g.dq.prototype.subscribe;g.dq.prototype.unsubscribeByKey=g.dq.prototype.wc;g.dq.prototype.publish=g.dq.prototype.O;g.dq.prototype.clear=g.dq.prototype.clear;g.y("ytPubsub2Pubsub2Instance",sca,void 0);var nC=g.z("ytPubsub2Pubsub2SubscribedKeys")||{};g.y("ytPubsub2Pubsub2SubscribedKeys",nC,void 0);var pC=g.z("ytPubsub2Pubsub2TopicToKeys")||{};g.y("ytPubsub2Pubsub2TopicToKeys",pC,void 0);
var oC=g.z("ytPubsub2Pubsub2IsAsync")||{};g.y("ytPubsub2Pubsub2IsAsync",oC,void 0);g.y("ytPubsub2Pubsub2SkipSubKey",null,void 0);var uC=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.r(yC,g.jC);g.r(zC,g.jC);var bD=new g.kC("aft-recorded",yC),rC=new g.kC("timing-sent",zC);var cD={vc:!0},MC={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},XC={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",
yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},ZC="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
OC={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",
prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT",
"video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR"},YC="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),aD=!1,BC=(0,g.A)(uC.clearResourceTimings||uC.webkitClearResourceTimings||uC.mozClearResourceTimings||uC.msClearResourceTimings||uC.oClearResourceTimings||g.va,uC);var lX;var mX=g.Pb,nX=mX.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!nX||2>nX.length)lX=void 0;else{var oX=mX.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);lX=oX&&6==oX.length?Number(oX[5].replace("_",".")):0}var SR=lX,pX=0<=SR;pX&&0<=g.Pb.search("Safari")&&g.Pb.search("Version");var ND={0:"UNKNOWN",1:"OFF",2:"ON",3:"FORCED_ON"},qX={},tca=(qX.ALWAYS=1,qX.BY_REQUEST=3,qX),tD,mD;g.r(g.lD,g.R);g.h=g.lD.prototype;g.h.jf=function(a,b){b?(this.setData(a),LD(this)&&AD(this)):(uD(this,a,!0),this.O("dataupdated"))};
g.h.setData=function(a){a=a||{};a.player_response&&(this.Xa=g.Wp(a.player_response));this.Ne="1"!=a.hlsdvr?!1:dA()?!0:dB&&5>SR?!1:!0;this.adQueryId=a.ad_query_id;this.adSafetyReason=a.encoded_ad_safety_reason;this.iy=a.agcid;this.xj="1"==a.infringe||"1"==a.muted;this.authKey=a.authkey;this.jc=a.authuser;this.clientPlaybackNonce||(this.clientPlaybackNonce=a.cpn||YA());this.enableCardio=KA(this.enableCardio,a.enable_cardio);this.enableCardioBeforePlayback=KA(this.enableCardioBeforePlayback,a.enable_cardio_before_playback);
this.endSeconds=MA(this.endSeconds,a.end||a.endSeconds);this.jh=NA(this.jh,a.itct);this.kn=KA(this.kn,a.noiba);this.kh="1"==a.livemonitor;this.oa="1"==a.live_playback||!!a.fresca_preroll||!!a.heartbeat_preroll;this.isLiveDestination=KA(this.isLiveDestination,a.is_live_destination);this.isLiveDefaultBroadcast="1"==a.live_default_broadcast;this.isLowLatencyLiveStream="1"==a.is_low_latency_live_stream;a.latency_class&&(this.latencyClass=LA("UNKNOWN",a.latency_class,rca));this.isMdxPlayback=KA(this.isMdxPlayback,
a.mdx);a.mdx_control_mode&&(this.mdxControlMode=Mb(a.mdx_control_mode));this.jn=KA(this.jn,a.is_inline_playback_no_ad);this.Uf=MA(this.Uf,a.reload_count);this.reloadReason=NA(this.reloadReason,a.reload_reason);this.cp=KA(this.cp,a.show_content_thumbnail);this.pn=KA(this.pn,a.utpsa);this.cycToken=a.cyc;this.cw=a.tkn;this.Eh="1"==a.innertube_thumbnail&&this.Xa.videoDetails.thumbnail?iC(this.Xa.videoDetails.thumbnail):fC(a);this.He=NA(this.He,a.vvt);this.revocableUnlistedToken=a.revocable_unlisted_token;
this.mdxEnvironment=NA(this.mdxEnvironment,a.mdx_environment);this.XD=a.osig;this.Ru=a.ptchn;this.Su=a.oid;this.Wk=a.ptk;this.Tu=a.pltype;this.playbackId=a.plid;this.eventId=a.eventid;this.osid=a.osid;this.videoMetadata=a.vm;this.Ho=a.of;this.yl=a.upt;this.playlistId=NA(this.playlistId,a.list);this.Zu=a.pyv_view_beacon_url;this.ZH=a.pyv_quartile25_beacon_url;this.aI=a.pyv_quartile50_beacon_url;this.bI=a.pyv_quartile75_beacon_url;this.YH=a.pyv_quartile100_beacon_url;a.remarketing_url&&(this.remarketingUrl=
a.remarketing_url);this.Xa&&this.Xa.playbackTracking&&this.Xa.playbackTracking.youtubeRemarketingUrl&&(this.youtubeRemarketingUrl=this.Xa.playbackTracking.youtubeRemarketingUrl.baseUrl);this.Xa&&this.Xa.playbackTracking&&this.Xa.playbackTracking.googleRemarketingUrl&&(this.googleRemarketingUrl=this.Xa.playbackTracking.googleRemarketingUrl.baseUrl);a.ppv_remarketing_url&&(this.ppvRemarketingUrl=a.ppv_remarketing_url);this.il=a.sdetail;!this.Jo&&a.session_data&&(this.Jo=g.mr(a.session_data).feature);
this.isFling=1==MA(this.isFling?1:0,a.is_fling);this.vnd=MA(this.vnd,a.vnd);this.tm=NA(this.tm,a.force_ads_url);this.Vf=NA(this.Vf,a.ctrl);this.gf=NA(this.gf,a.ytr);this.uq=a.ytrcc;this.ov=a.ytrexp;this.Vi=QA(this.Vi,a.vq);this.Zi=QA(this.Zi,a.suggestedQuality);this.tl=KA(this.tl,a.ssrt);this.videoId=RA(a)||this.videoId;this.vssCredentialsToken=NA(this.vssCredentialsToken,a.vss_credentials_token);this.Hl=NA(this.Hl,a.vss_credentials_token_type);this.heartbeatToken=NA(this.heartbeatToken,a.heartbeat_token);
this.heartbeatInterval=MA(this.heartbeatInterval,a.heartbeat_interval);this.heartbeatRetries=MA(this.heartbeatRetries,a.heartbeat_retries);this.heartbeatSoftFail=KA(this.heartbeatSoftFail,a.heartbeat_soft_fail);this.hn=KA(this.hn,a.ithb);this.relativeLoudness=MA(this.relativeLoudness,a.relative_loudness);vD(this.Xa)&&(this.adModule=!0,this.rd.push("ad"));a.adaptive_fmts&&(this.adaptiveFormats=a.adaptive_fmts);void 0!=a.atc&&(this.wj=a.atc);a.license_info&&(this.Ob=MD(a.license_info));a.allow_embed&&
(this.allowEmbed="1"==a.allow_embed);a.backgroundable&&(this.backgroundable="1"==a.backgroundable);a.autonav&&(this.vk="1"==a.autonav);a.autoplay&&(this.Kg="1"==a.autoplay);if(a.iv_load_policy)this.sf=LA(this.sf,a.iv_load_policy,oB);else{var b=nD(this.Xa);b&&b.loadPolicy&&(this.sf=tca[b.loadPolicy])}a.cc_lang_pref&&(this.uf=NA(a.cc_lang_pref,this.uf));a.cc_load_policy&&(this.vf=LA(this.vf,a.cc_load_policy,oB));a.cached_load&&(this.Wl=KA(this.Wl,a.cached_load));"0"==a.dash&&(this.Gq=!0);if(a.dashmpd){this.hd=
g.Jg(a.dashmpd,{cpn:this.clientPlaybackNonce});b=/\/s\/([0-9A-F.]+)/;var c=b.exec(this.hd);c&&(c=Oy(c[1]),this.hd=this.hd.replace(b,"/signature/"+c))}a.delay&&(this.je=Mb(a.delay));a.drm_session_id&&(this.drmSessionId=a.drm_session_id);void 0!=a.end&&(this.clipEnd=a.end);a.fair_play_cert&&window.atob&&(this.fairPlayCert=(0,window.atob)(a.fair_play_cert));a.fmt_list&&(this.fmtList=a.fmt_list);a.fresca_preroll&&this.rd.push("fresca");a.heartbeat_preroll&&this.rd.push("heartbeat");a.idpj&&(this.ih=Mb(a.idpj));
a.ismb&&(this.We=Mb(a.ismb));a.is_listed&&(this.isListed=KA(this.isListed,a.is_listed));a.paid_content_overlay_duration_ms&&(this.Qu=Mb(a.paid_content_overlay_duration_ms));a.paid_content_overlay_text&&(this.TH=a.paid_content_overlay_text);a.url_encoded_fmt_stream_map&&(this.Ih=a.url_encoded_fmt_stream_map);a.hls_formats&&(this.hlsFormats=a.hls_formats);a.hlsvp&&(this.hlsvp=a.hlsvp);a.length_seconds&&(this.lengthSeconds=Mb(a.length_seconds));a.live_chunk_readahead&&(this.liveChunkReadahead=MA(this.liveChunkReadahead,
a.live_chunk_readahead));a.live_start_walltime&&(this.liveStartWalltime=Mb(a.live_start_walltime));a.live_manifest_duration&&(this.vn=Mb(a.live_manifest_duration));a.ldpj&&(this.si=Mb(a.ldpj));a.player_params&&(this.playerParams=a.player_params);a.partnerid&&(this.Fe=Mb(a.partnerid));a.probe_url&&(this.probeUrl=Bv(g.Jg(a.probe_url,{cpn:this.clientPlaybackNonce})));a.profile_picture&&(this.profilePicture=NA(a.profile_picture,this.profilePicture));a.pyv_billable_url&&g.xv(a.pyv_billable_url)&&(this.al=
a.pyv_billable_url);a.pyv_conv_url&&g.xv(a.pyv_conv_url)&&(this.bl=a.pyv_conv_url);a.video_masthead_ad_quartile_urls&&(b=a.video_masthead_ad_quartile_urls,this.Bn=b.quartile_0_url,this.ds=b.quartile_25_url,this.es=b.quartile_50_url,this.gs=b.quartile_75_url,this.Zr=b.quartile_100_url);"1"==a.spacecast_playback&&(this.rd.push("spacecast"),this.spacecastModule=!0,this.Qg.VH=!0);a.spacecast_addrs&&(this.spacecastModule=!0,b={},b.addresses=a.spacecast_addrs.split(","),b.probe=!0,a.spacecast_query_params&&
(b.applianceQueryParams=a.spacecast_query_params),this.Qg.init=b);0<this.startSeconds||(this.cn=this.startSeconds=MA(this.startSeconds,a.start||a.startSeconds));null!=a.live_utc_start&&(this.liveUtcStartSeconds=(0,window.parseInt)(a.live_utc_start,10));void 0==a.start||"1"==a.resume||this.oa||(this.clipStart=a.start);a.two_stage_token&&(this.ag=a.two_stage_token);a.url_encoded_third_party_media&&(this.Dh=or(a.url_encoded_third_party_media));a.watch_ajax_token&&(this.watchAjaxToken=a.watch_ajax_token);
a.ypc_module&&this.rd.push("ypc");a.ypc_clickwrap_module&&this.rd.push("ypc_clickwrap");a.ypc_offer_button_formatted_text&&(this.ypcOfferButtonFormattedText=g.Wp(a.ypc_offer_button_formatted_text)||null);this.bj=NA(this.bj,a.ucid);(0,g.G)("baseUrl uid oeid ieid ppe engaged subscribed".split(" "),function(b){a[b]&&(this.Dd[b]=a[b])},this);
this.Dd.focEnabled=KA(this.Dd.focEnabled,a.focEnabled);this.Dd.rmktEnabled=KA(this.Dd.rmktEnabled,a.rmktEnabled);this.Bb=a;uD(this,a,!1);yD(this)?Pr()&&this.fairPlayCert&&(this.yg=!0):this.adaptiveFormats&&!this.oa?(BD(this,Vy(CD(this,this.adaptiveFormats),this.Ob,this.lengthSeconds,void 0)),Qy(this.ka)&&(this.yg=!0)):this.hd&&(this.Wh=!0);a.adpings&&(this.Sp=a.adpings?g.nr(a.adpings):null);a.feature&&(this.Ti=a.feature);a.referrer&&(this.referrer=a.referrer);a.multifeed_metadata_list&&(this.hg=or(a.multifeed_metadata_list));
this.clientScreenNonce=NA(this.clientScreenNonce,a.csn);this.rootVeType=MA(this.rootVeType,a.root_ve_type);this.Ak=MA(this.Ak,a.kids_age_up_mode);a.unplugged_location_info&&(this.cg=a.unplugged_location_info);a.unplugged_partner_opt_out&&(this.Gh=NA("",a.unplugged_partner_opt_out));a.partial_spherical&&(this.partialSpherical="1"==a.partial_spherical);a.fflags&&(b=g.mr(a.fflags),b.enable_spherical_kabuki&&(this.Lq="true"==b.enable_spherical_kabuki));this.pi=NA(this.pi,a.internal_ip_override);this.innertubez=
NA(this.innertubez,a.innertubez)};
g.h.qc=function(){return!this.oa||this.Ne};
g.h.Uz=function(a){(this.we=a)&&"fairplay"==this.we.flavor&&(this.we.fairPlayCert=this.fairPlayCert);AD(this)};
g.h.Ib=function(){return!(!this.ka||!this.ka.l)};
g.h.VE=function(a){if(!this.ga()){if(this.ul){var b=fz(a,this.ul);b&&(a=b)}BD(this,a);this.oa&&this.ka.subscribe("refresh",this.lu,this);g.FC("mrc");Qy(this.ka)&&(this.yg=!0);AD(this)}};
g.h.UE=function(a){this.ga()||(this.ye=!1,this.O("dataloaderror",new g.GB("manifest.net.retryexhausted",!0,{backend:"manifest",rc:a.status})))};
g.h.lu=function(){this.ga()||(this.ka.isLive||this.ka.unsubscribe("refresh",this.lu,this),this.jq())};
g.h.jq=function(){var a=this.ka.My(this.tn);0<a.length&&(this.O("cuepointupdated",a),this.tn+=a.length)};
g.h.gA=function(a){if(this.spacecastFormatMap){var b=CD(this,this.spacecastFormatMap);return SB(a,this.isAd(),b,ED(this,a)).then(this.rl,void 0,this).then(this.Qq,void 0,this)}return es()};
g.h.dA=function(a,b){var c=b||yD(this);if(this.ka&&!c){if(!a.C){c=this.ka;var d=this.oa;if(!c.g["0"]){var e=new xu(0,0,0,void 0,void 0,"auto");e=new Du("0","",void 0,e);c.g["0"]=d?new my(new g.Mx("http://www.youtube.com/videoplayback"),e,"fake"):new g.Iy(new g.Mx("http://www.youtube.com/videoplayback"),e,new g.Bw(0,0),new g.Bw(0,0),0,window.NaN)}}return BA(a.R,this.ka,this.we,!1,DB(a)).then(this.Xo,void 0,this)}return es()};
g.h.eA=function(a){if(this.hlsFormats){var b=CD(this,this.hlsFormats);return QB(a,this.isAd(),b,this.We).then(this.rl,void 0,this)}return es()};
g.h.hA=function(a){if(this.Dh&&this.Nr){var b=this.isAd(),c=dC(this.Dh);a=cA(a.R,c,sB(a,b)).then(this.rl,void 0,this)}else a=es();return a};
g.h.fA=function(a){var b=CD(this,this.Ih,this.fmtList);if(this.hlsvp){var c=this.hlsvp;var d=this.We,e={cpn:this.clientPlaybackNonce};-1==c.indexOf("/ibw/")&&(e.ibw=d?String(d):"1369843");c={url:g.Jg(c,e),type:"application/x-mpegURL",quality:"auto",itag:"93"};b.push(c)}return SB(a,this.isAd(),b,ED(this,a)).then(this.rl,void 0,this)};
g.h.Xo=function(a){this.Ia=a;/^r/.test(this.clientPlaybackNonce)&&(this.Ia.videoInfos.length&&1080<this.Ia.videoInfos[0].video.g&&(this.If=!0),this.Ib()&&(this.If=!0));a=this.Ia?this.Ia.audioTracks:[];a=a.concat(this.Rj);for(var b=0;b<this.Sh.length;b++)for(var c=this.Sh[b],d=0;d<a.length;d++){var e=a[d],f=e.bc.id==c.audioTrackId;if(e.bc.isDefault&&b==this.Yl||f){if(c.captionTrackIndices)for(f=0;f<c.captionTrackIndices.length;f++)e.captionTracks[f]=this.captionTracks[c.captionTrackIndices[f]];g.t(c.defaultCaptionTrackIndex)&&
(e.pm=this.captionTracks[c.defaultCaptionTrackIndex]);g.t(c.forcedCaptionTrackIndex)&&(e.ai=this.captionTracks[c.forcedCaptionTrackIndex]);e.aq=c.visibility||"UNKNOWN"}}};
g.h.rl=function(a){this.uh=a;this.Xo(new Yz((0,g.I)(this.uh,function(a){return a.Se()})))};
g.h.Qq=function(){var a=Sk(this.Ia.videoInfos,function(a,c){return c.video.isAccelerated&&(!a||a.height<c.video.height)?c.video:a},null);
a&&(this.Zi=this.Vi=a=Ou(a.quality,a.quality,!0))};
g.h.Yc=function(){var a={};this.Ba&&(a.fmt=Cu(this.Ba),this.Hc&&Cu(this.Hc)!=Cu(this.Ba)&&(a.afmt=Cu(this.Hc)));a.plid=this.playbackId;a.ei=this.eventId;a.list=this.playlistId;a.cpn=this.clientPlaybackNonce;this.videoId&&(a.v=this.videoId);this.xj&&(a.infringe=1);this.Jf&&(a.splay=1);this.oa&&(a.live=this.Ne?"dvr":"live");this.Kg&&(a.autoplay=1);this.il&&(a.sdetail=this.il);this.Fe&&(a.partnerid=this.Fe);this.osid&&(a.osid=this.osid);return a};
g.h.getStoryboardFormat=function(){if(this.Xa&&this.Xa.storyboards){var a=this.Xa.storyboards;return(a=a.playerStoryboardSpecRenderer||a.playerLiveStoryboardSpecRenderer)&&a.spec||null}return this.Bb.storyboard_spec||this.Bb.live_storyboard_spec};
g.h.kd=function(){return this.ka&&!(0,window.isNaN)(this.ka.kd())?this.ka.kd():this.Ib()?0:this.lengthSeconds};
g.h.tb=function(){return this.ka&&!(0,window.isNaN)(this.ka.tb())?this.ka.tb():0};
g.h.Nc=function(){return!this.ga()&&!(!this.videoId&&!this.Dh)};
g.h.Vb=function(){return LD(this)&&!this.Wh&&!this.yg};
g.h.Dv=function(){var a={format:"RAW",method:"GET",withCredentials:this.rv};this.zh&&this.visitorData&&(a.headers={"X-Goog-Visitor-Id":this.visitorData});0<this.Fm&&(a.timeout=this.Fm);var b=this.Gm;0<this.nl&&(b=g.sr(b,{playerretry:this.nl}));this.ir?Ky(bs,b,a).then(er(this.ru),er(this.oF),this):(a.context=this,a.ib=this.ru,a.onError=this.Sm,g.Ar(b,a));g.FC("vir");g.FC("vir",void 0,"video_to_ad");this.hr=g.It()};
g.h.kc=function(a,b){if(30==this.Fe){var c=this.Eh["default.jpg"];return c?c:this.videoId?g.Jg("//docs.google.com/vt",{id:this.videoId,authuser:this.jc,authkey:this.authKey}):"//docs.google.com/images/doclist/cleardot.gif"}b||(b="hqdefault.jpg");return(c=this.Eh[b])||a.I||"pop1.jpg"==b||"pop2.jpg"==b||"sddefault.jpg"==b||"hq720.jpg"==b||"maxresdefault.jpg"==b?c:vB(a,this.videoId,b)};
g.h.ru=function(a){if(!this.ga()){var b=a.responseText;if(b){this.ye=!1;var c=g.nr(b);this.Ir&&JB(c);"fail"==c.status?this.O("onStatusFail",c):(g.FC("virc"),g.FC("virc",void 0,"video_to_ad"),(0,g.G)(g.rX,function(a){a in this.Bb&&(c[a]=this.Bb[a])},this),this.setData(c),LD(this)?AD(this):this.O("dataloaderror",new g.GB("manifest.net.retryexhausted",!0,{successButUnplayable:"1"})))}else this.Sm(a)}};
g.h.oF=function(a){this.Sm(a.g)};
g.h.Sm=function(a){if(!this.ga()){var b=a?a.status:-1;a=this.nl>=this.No||400==b;var c=200<b?"manifest.net.badstatus":"manifest.net.connect",d=((g.It()-this.hr)/1E3).toFixed(3);b={backend:"gvi",rc:b,rt:d};a&&this.No?(c="manifest.net.retryexhausted",b.urllen=String(this.Gm.length)):a||(this.nl++,this.Cv.start());this.O("dataloaderror",new g.GB(c,a,b))}};
g.h.getPlayerResponse=function(){return this.Xa};
g.h.getPlaylistId=function(){return null};
g.h.Eb=function(){return this};
g.h.kk=function(a){return a.getVideoUrl(this.videoId)};
g.h.te=function(){return!!this.ka&&this.ka.te()};
g.h.ue=function(){return!!this.ka&&this.ka.ue()};
g.h.Hd=function(){return!!this.ka&&this.ka.Hd()};
g.h.wg=function(){return!!this.ka&&this.ka.wg()};
g.h.isAd=function(){return!!this.adFormat};
g.rX="oauth_token ypc_buy_url ypc_full_video_message ypc_item_thumbnail ypc_item_title ypc_item_url ypc_module ypc_offer_button_text ypc_offer_button_formatted_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_offer_type ypc_overlay_timeout ypc_preview ypc_signin_message ypc_vid".split(" ");tD="author cc_asr cc_load_policy iv_load_policy iv_new_window keywords oauth_token requires_purchase rvs subscribed title ttsurl ypc_buy_url ypc_full_video_length ypc_item_thumbnail ypc_item_title ypc_item_url ypc_offer_button_text ypc_offer_button_formatted_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_preview ypc_price_string ypc_video_rental_bar_text".split(" ");
mD=["annotations","captions","storyboard"];var faa={AJ:"YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",AUTHENTICATION_EXPIRED:"ERROR_AUTHENTICATION_EXPIRED",CJ:"ERROR_AUTHENTICATION_MALFORMED",DJ:"ERROR_AUTHENTICATION_MISSING",GJ:"ERROR_BAD_REQUEST",SJ:"ERROR_CGI_PARAMS_MALFORMED",TJ:"ERROR_CGI_PARAMS_MISSING",hK:"YTP_DEVICE_FALLBACK",pK:"YTP_ERROR_LICENSE",qK:"YTP_ERROR_VIDEO_UNAVAILABLE",uK:"YTP_ERROR_FORMAT_UNAVALIABLE",wK:"YTP_ERROR_GEO_FAILURE",JK:"YTP_ERROR_GENERIC_WITHOUT_LINK",KK:"YTP_HTML5_FLASH_DEPRECATED",LK:"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK",
RK:"YTP_ERROR_INVALID_DRM_MESSAGE",GL:"YTP_ERROR_PURCHASE_NOT_FOUND",HL:"YTP_ERROR_PURCHASE_REFUNDED",ML:"YTP_ERROR_RENTAL_EXPIRED",NJ:"YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",OJ:"YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",QJ:"YTP_ERROR_CAST_TOKEN_FAILED",PJ:"YTP_ERROR_CAST_TOKEN_EXPIRED",RJ:"YTP_ERROR_CAST_TOKEN_MALFORMED",QL:"YTP_ERROR_SERVER_ERROR",aM:"YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",dM:"YTP_ERROR_STREAM_LICENSE_NOT_FOUND",bM:"YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",cM:"YTP_ERROR_STREAMING_NOT_ALLOWED",
OL:"YTP_ERROR_RETRYABLE_ERROR",kM:"YTP_ERROR_TOO_MANY_STREAMS_PER_USER",jM:"YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",oM:"YTP_ERROR_UNSUPPORTED_DEVICE",pM:"YTP_ERROR_VIDEO_FORBIDDEN",qM:"YTP_ERROR_VIDEO_NOT_FOUND"},$D={300:"YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",301:"YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",303:"YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",304:"YTP_ERROR_TOO_MANY_STREAMS_PER_USER",305:"YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",400:"YTP_ERROR_VIDEO_NOT_FOUND",401:"YTP_ERROR_GEO_FAILURE",
402:"YTP_ERROR_STREAMING_NOT_ALLOWED",403:"YTP_ERROR_UNSUPPORTED_DEVICE",405:"YTP_ERROR_VIDEO_FORBIDDEN",500:"YTP_ERROR_PURCHASE_NOT_FOUND",501:"YTP_ERROR_RENTAL_EXPIRED",502:"YTP_ERROR_PURCHASE_REFUNDED",5E3:"ERROR_BAD_REQUEST",5001:"ERROR_CGI_PARAMS_MISSING",5002:"ERROR_CGI_PARAMS_MALFORMED",5100:"ERROR_AUTHENTICATION_MISSING",5101:"ERROR_AUTHENTICATION_MALFORMED",5102:"ERROR_AUTHENTICATION_EXPIRED",5200:"YTP_ERROR_CAST_TOKEN_MALFORMED",5201:"YTP_ERROR_CAST_TOKEN_EXPIRED",5202:"YTP_ERROR_CAST_TOKEN_FAILED",
5203:"YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",5204:"YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",6E3:"YTP_ERROR_INVALID_DRM_MESSAGE",7E3:"YTP_ERROR_SERVER_ERROR",8E3:"YTP_ERROR_RETRYABLE_ERROR"};var uca=pX&&4>SR?.1:0,yba=new kE;kE.prototype.g=null;kE.prototype.getDuration=function(){return this.duration||0};
kE.prototype.getCurrentTime=function(){return this.currentTime||0};
kE.prototype.l=function(){this.hasAttribute("controls")&&this.setAttribute("controls","true")};g.r(lE,g.J);g.h=lE.prototype;g.h.Oc=function(){this.g.ended&&this.yb(0);!this.Zc()&&this.l&&(g.Q(Error("playVideo without src")),oE(this,this.l.Of),this.l.g||this.load());var a=this.play();!a&&pX&&7<=SR&&g.Ws(this,"playing",(0,g.A)(function(){g.jr((0,g.A)(this.Tq,this,this.getCurrentTime(),0),500)},this));
return a};
g.h.Tq=function(a,b){this.g.paused||this.getCurrentTime()>a||10<b||(this.play(),g.jr((0,g.A)(this.Tq,this,this.getCurrentTime(),b+1),500))};
g.h.yb=function(a){0<this.g.readyState&&(pX&&4>SR&&(a=Math.max(.1,a)),this.g.currentTime=a)};
g.h.cf=function(){!this.o&&this.Zc()&&(eA&&0<this.getCurrentTime()&&this.yb(0),this.g.removeAttribute("src"),this.load(),nE(this,null))};
g.h.addEventListener=function(a,b){this.B.ea(a,b,!1,this);if(!this.A[a]){var c=(0,g.A)(this.FB,this);this.g.addEventListener(a,c);this.A[a]=c}};
g.h.removeEventListener=function(a,b){this.B.Pa(a,b,!1,this)};
g.h.dispatchEvent=function(a){return this.B.dispatchEvent(a)};
g.h.mq=function(){this.C&&!this.g.muted&&(rx(),this.g.muted=!0)};
g.h.T=function(){this.F&&this.removeEventListener("volumechange",this.mq);g.J.prototype.T.call(this)};g.r(zE,g.Fe);zE.prototype.preventDefault=function(){g.Fe.prototype.preventDefault.call(this);this.g&&this.g.preventDefault()};
zE.prototype.stopPropagation=function(){g.Fe.prototype.stopPropagation.call(this);this.g&&this.g.stopPropagation()};g.OE=g.qf(function(){var a="";try{var b=g.yd("CANVAS").getContext("webgl");b&&(b.getExtension("WEBGL_debug_renderer_info"),a=b.getParameter(37446),a=a.replace(/[ :]/g,"_"))}catch(c){}return a});g.AE.prototype.gb=function(){return g.T(this,8)&&!g.T(this,64)&&!g.T(this,2)};
g.AE.prototype.isError=function(){return g.T(this,128)};
var BE=!1;RE.prototype.isEmpty=function(){return this.endTime==this.startTime};TE.prototype.update=function(){var a=this.l.l()||0,b=g.$E(this.l);if(a!=this.g||XE(this,a,b)){var c;if(!(c=a<this.g||a-this.g>b-this.C+2||XE(this,a,b))){var d=this.l.Yc();c=d.volume;var e=c!=this.K;d=d.muted;d!=this.I?(this.I=d,c=!0):(!e||0<=this.B||(this.K=c,this.B=b),c=b-this.B,0<=this.B&&2<c?(this.B=-1,c=!0):c=!1)}c&&(g.UE(this),this.o=a);this.C=b;this.g=a}};var bF={other:1,none:2,wifi:3,cellular:7};g.r(eF,g.J);
eF.prototype.B=function(a){if(!this.ga()&&(a=0<=a?a:g.$E(this.g),"PL"==this.o&&(!g.cc(this.l)||a>=this.A+30)&&(g.dF(this,a,"vps",[this.o]),this.A=a),!g.cc(this.l)&&!this.sa)){hF(this,a);var b=a,c=this.g.F(),d=c.droppedVideoFrames,e=d-this.aa;if(d>c.totalVideoFrames||5E3<e)this.onError("html5.badframedropcount","df."+d+";tf."+c.totalVideoFrames);else 0<e&&g.dF(this,b,"df",[e]);this.aa=d;!this.g.g.experiments.g("disable_webgl_reporting")&&0<this.C&&(g.dF(this,a,"glf",[this.C]),this.C=0);a={event:"streamingstats"};
this.g.videoData.Ba&&(a.fmt=Cu(this.g.videoData.Ba),(b=this.g.videoData.Hc)&&Cu(b)!=a.fmt&&(a.afmt=Cu(b)));a.cpn=this.g.videoData.clientPlaybackNonce;a.ei=this.g.videoData.eventId;a.el=UD(this.g.videoData,this.g.g);a.docid=this.g.videoData.videoId;a.ns=this.g.g.Wa;a.fexp=this.g.g.experiments.experimentIds.toString();a.cl=this.g.g.Ta;this.g.videoData.adFormat&&(a.adformat=this.g.videoData.adFormat);this.g.videoData.oa&&(a.live=this.g.videoData.Ne?"dvr":"live");a.seq=this.ya++;g.jc(a,this.g.g.B);a=
g.Jg("//"+this.g.g.Nh+"/api/stats/qoe",a);b="";for(var f in this.l)null==this.l[f]?g.Q(Error("Stats report key has invalid value: "+f),"WARNING"):b+="&"+f+"="+this.l[f].join(",");this.g.g.experiments.g("html5_qoe_post")?Xr(a,void 0,b):Xr(a+b);this.l={}}};
eF.prototype.ma=function(){this.g.videoData.we&&mF(this,"drm-"+this.g.videoData.we.flavor)};
eF.prototype.onError=function(a,b){var c=g.$E(this.g);jF(this,c,a,b);hF(this,c);iF(this)};
eF.prototype.T=function(){g.J.prototype.T.call(this);window.clearInterval(this.R)};
var sX={},kF=(sX[5]="N",sX[-1]="N",sX[3]="B",sX[0]="EN",sX[2]="PA",sX[1]="PL",sX);nF.prototype.send=function(a){if(!this.R){var b=pF(this);b=g.Jg(this.zb,b);if(this.F)this.K&&(a={method:"POST",jb:{atr:this.K}},this.zh&&this.visitorData&&(a.headers={"X-Goog-Visitor-Id":this.visitorData}),g.Ar(b,a));else{if(this.F)var c=null;else{c=this.I&&ur();var d=this.zh&&!!this.visitorData;if(c||d){var e={};c&&(e.Authorization="Bearer "+this.I);d&&(e["X-Goog-Visitor-Id"]=this.visitorData);c={headers:e,withCredentials:!0,Ac:a}}else c=null}c?g.Ar(b,c):g.Wr(b,a)}this.R=!0}};
nF.prototype.g=function(a){void 0==a&&(a=window.NaN);return(1*a.toFixed(3)).toString()};g.r(qF,g.J);g.h=qF.prototype;g.h.XE=function(a,b){if(!this.ga()){this.F=window.NaN;this.o.update();var c=WE(this.o),d=tF(this,c);b&&(d.B=a);var e=400<this.K;!(1<c.length)&&c[0].isEmpty()||e||(d.l=rF(this,!0,a));d.send();this.K++}};
g.h.onError=function(a,b){if(!this.ga())this.l.onError(a,b)};
g.h.pl=function(a){var b=this.g.g,c=this.g.videoData,d={ns:b.Wa,el:UD(c,b),eurl:b.Ra,fmt:c.Ba?Cu(c.Ba):0,html5:1,list:c.playlistId,plid:c.playbackId,cpn:c.clientPlaybackNonce,ei:c.eventId,ps:b.g,noflv:1,st:this.g.l(),video_id:c.videoId,metric:a};XD(c,b)&&(d.autoplay="1");"heartbeat"==a&&(d.tpmt=VE(this.o));g.Ia(d,b.B);a=b.baseYtUrl;if(b.l||b.experiments.g("player_cardio_base_url_killswitch")&&(g.wB(b)||"gaming"==b.g))a=b.protocol+"://www.youtube.com/";vF(this,g.Jg(a+"live_204",d))};
g.h.Ze=function(){};
g.h.T=function(){g.J.prototype.T.call(this);g.lr(this.F);this.F=window.NaN;var a=this.o;window.clearInterval(a.F);a.F=window.NaN;g.lr(this.A)};g.r(AF,Ev);g.h=AF.prototype;g.h.Ca=function(){return rL(this.app)};
g.h.Ts=function(a,b,c,d,e){return kW(this.app,a,b,c,d,e)};
g.h.jC=function(a,b,c){this.app.g.L.add(a,{Jj:b,jp:c})};
g.h.kC=function(a,b){eW(this.app,a,b||this.playerType)};
g.h.qh=function(a){return UV(this.app,a)};
g.h.Gi=function(a,b,c,d){aW(this.app,a,c||this.playerType,b,d)};
g.h.Xn=function(a,b,c){var d=this.app;b=b||this.playerType||1;c=c||!1;d.ya.get(b+RA(a))||(d.g.Rb&&JB(a),a=new g.lD(a),d.ya.get(b+a.videoId)||(a.Yk=!0,c?(c=g.V(d,b),bW(d,b)):c=CV(d,b),qK(c,a,(0,g.A)(d.Yc,d)),tK(c,!0),d.ya.set(b+a.videoId,c)))};
g.h.rh=function(a,b){iW(this.app,a,b)};
g.h.Ei=function(a){jW(this.app,a)};
g.h.Md=function(a,b,c){sW(this.app,this.app.getCurrentTime()+a,b,c,this.playerType)};
g.h.GC=function(a){if(a){var b=this.getPlaylistId();if(!b||b==a.list){var c=a.video;(b=this.app.C)?this.isFullscreen()&&((c=c[b.Oa])&&c.encrypted_id!=b.Eb().videoId||(a.index=b.Oa)):IV(this.app,{list:a.list,index:a.index,playlist_length:c.length});UF(this.app.C,a);this.la("onPlaylistUpdate")}}else a=this.app,JV(a),a.l.la("onPlaylistUpdate")};
g.h.FC=function(){St()};
g.h.HC=function(a,b){var c=g.V(this.app,this.playerType||1);c&&c.g.jf(a,b)};
g.h.getPlayerResponse=function(){var a=g.V(this.app,this.playerType);return a?a.g.getPlayerResponse():null};
g.h.getStoryboardFormat=function(){return EV(this.app).getStoryboardFormat()};
g.h.nC=function(){var a=this.app.g;return{Rb:a.Rb,ob:a.ob}};
g.h.Y=function(){var a=Ev.prototype.Y.call(this),b=g.V(this.app,this.playerType);b&&(b=b.g,a.backgroundable=b.backgroundable,a.eventId=b.eventId,a.cpn=b.clientPlaybackNonce,a.isLive=b.oa,a.itct=b.jh,a.paidContentOverlayText=GD(b),a.paidContentOverlayDurationMs=HD(b),null!=b.liveUtcStartSeconds&&(a.liveUtcStartSeconds=b.liveUtcStartSeconds));return a};
g.h.getCurrentTime=function(a){return a?this.app.getCurrentTime(a):Ev.prototype.getCurrentTime.call(this)};
g.h.getDuration=function(a){return a?this.app.getDuration(a):Ev.prototype.getDuration.call(this)};
g.h.Qf=function(a){if(3==this.Ca())return g.sL(this.app.A).TA();var b=EV(this.app),c=g.V(this.app,a)||g.V(this.app),d=this.app.qc(),e=b.clipEnd;b=b.clipStart;var f=this.getCurrentTime(a);a=this.getDuration(a);var k=cL(c),l=MK(c),m=g.V(this.app,void 0);if(m){var n=window.NaN;m.l&&(n=vE(m.l));m=0<=n?n:m.getCurrentTime()}else m=0;return{allowSeeking:d,clipEnd:e,clipStart:b,current:f,displayedStart:-1,duration:a,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:dL(c),seekableStart:c.tb()}};
g.h.Tn=function(a){return HV(this.app,a)};
g.h.Rn=function(a){return GV(a)};
g.h.it=function(a,b){var c=g.V(this.app,this.playerType);if(c){var d=Ou(a,b||a,!0);TK(c,"m",d)}};
g.h.mC=function(){var a=EV(this.app);var b=this.app.getCurrentTime();if(a.ka&&a.oa&&a.Ba){var c=a.ka.g[a.Ba.id];c&&c.index?(a=c.index.Cf(b),c=c.index.nd(a),b={sequence:a,elapsed:Math.floor(1E3*(b-c))}):b=null}else b=null;return b};
g.h.Hg=function(a){var b=this.app,c=g.V(b,this.playerType);c&&b.g.Mb.has(a.toString())&&c.C&&(b=sF(c.C,"engage"),b.C=a,b.send(void 0))};
g.h.Hi=function(a,b,c){var d=this.app.A.A;d&&d.xi()&&d.Jn(a,b,c)};
g.h.rC=function(a,b){var c=this.app.A.I;c&&c.X&&pT(c.X,a,b)};
g.h.Pf=function(){var a=g.V(this.app,this.playerType);return a?a.Gn():EV(this.app).Rj};
g.h.Zn=function(a){3==this.Ca()&&g.sL(this.app.A).yi("control_set_audio_track",a);var b=g.V(this.app,this.playerType),c;if(c=b)if(c=!b.ga()&&!g.T(b.o,128)&&!!b.g.Ia.g){c=b.B;if(c.ga())a=!0;else{var d=c.F;a=a.id;d.A="m";d.B=d.H.g[a];d.U=d.B;c.O("audioformatchange",new VF(d.U,d.o,d.A));c.o&&!c.o.g.remove?a=!1:(BI(c),GH(c.g),GH(c.A),g.Pp(c.U),a=!0)}c=!a}c&&(QK(b),OK(b))};
g.h.Wn=function(){var a=g.V(this.app,this.playerType);return a.g.Ia?a.g.Ia.audioTracks:[]};
g.h.oC=function(){var a=g.V(this.app,this.playerType);return a&&a.g.Ba?g.Tu(TJ(a.sa,a.g)):"unknown"};
g.h.pC=function(){return Xu()};
g.h.BC=function(a,b){var c=this.app;c.xd=a;c.Bc=b;c.l.O("sizestylechange",a,b);c.H.Ae()};
g.h.lC=function(){var a=this.app.A.H;a&&a.Ky()};
g.h.EC=function(){var a=this.app.A.I;a&&(a.Ha=!1,a.hf())};
g.h.sC=function(){var a=this.app.A.I;a&&(a.Ha=!0,a.hf())};
g.h.df=function(){var a=this.isFullscreen()||jB(this.app.g);return this.Ai()?4:Qv()?3:a?2:this.app.Mb?1:this.app.Ab?5:0};
g.h.isFullscreen=function(){return this.app.g.Ka};
g.h.uC=function(){return this.app.Ab};
g.h.Ai=function(){var a=g.V(this.app,this.playerType);return!!a&&a.Ga};
g.h.DC=function(){return!0};
g.h.ht=function(a){a=g.rN(this.app.H,a);return{left:a.left,top:a.top,width:a.width,height:a.height}};
g.h.AC=function(a){this.app.g.enableSafetyMode=a};
g.h.wC=function(a){Cs();pW(this.app,a?2:0)};
g.h.Vn=function(){var a=this.app.A.B;a&&a.created&&a.destroy();(a=g.V(this.app))&&aL(a);(a=this.app.A.K)&&a.Oz()&&g.qL(this.app.U,!0)};
g.h.cf=function(){var a=this.app.g;!a.experiments.g("disable_new_pause_state3")&&xB(a)&&"blazer"!=a.g?this.Vn():Ev.prototype.cf.call(this)};
g.h.jr=function(){return eL(g.V(this.app,this.playerType),!0)};
g.h.Lk=function(a){this.app.A.l.rp(a,!0)};
g.h.Gg=function(){var a=this.app.A.l;return a?a.Dm():null};
g.h.Yn=function(){this.app.A.l.vv()};
g.h.tC=function(){var a=g.V(this.app,this.playerType);if(!a)return!1;a=a.g;return!!a&&a.Nc()&&!!a.Ba&&a.Ba.video.isAccelerated&&a.Ba.video.o};
g.h.isPeggedToLive=function(a){return this.app.isPeggedToLive(void 0===a?!0:a)};
g.h.zC=function(a){var b=this.app;b.Mb=a;b.l.O("minimized")};
g.h.yC=function(a){this.app.Ab=a};
g.h.Bi=function(a){return TV(this.app,a)};
g.h.ct=function(a){if(a){var b=this.app.A.o;b&&b.Cs(a,!1)}};
g.h.vC=function(a){var b=this.app;b.g.tf=a;b.F&&(a=b.F,a.C&&g.UE(a.C.o),b.g.U&&uW(b))};
g.h.ae=function(a){this.O("aduxclicked",a)};
g.h.setVolume=function(a,b){Jv(this,a,b)};
g.h.mute=function(a){Kv(this,a)};
g.h.De=function(a){Lv(this,a)};
g.h.Pz=function(){return this.app.X};
g.h.Di=function(a){if("annotations_module"==a){var b=this.app.A.A;b&&!b.loaded&&b.load()}Ev.prototype.Di.call(this,a)};
g.h.Kk=function(a){if("annotations_module"==a){var b=this.app.A.A;b&&b.loaded&&b.unload()}Ev.prototype.Kk.call(this,a)};
g.h.Pc=function(a,b,c){if(!b)return null;var d=this.app.A;switch(a){case "ad":return(a=d.B)&&a.Ds&&a.Ds(b,c);case "remote":return(a=g.sL(d))&&a.SA(b,c);case "unplugged":return(a=g.wB(g.U(d.g))?d.C:null)&&a.B(b,c);case "spacecast":return(c=d.U)&&c.C(b);case "annotations_module":return(a=d.A)&&a.AA(b,c);case "creatorendscreen":return(a=d.F)&&a.GA(b,c)}return Ev.prototype.Pc.call(this,a,b,c)};
g.h.Eg=function(a){var b=this.app.A;switch(a){case "ad":return(b=b.B)&&b.Es&&b.Es();case "remote":return g.sL(b)&&["casting","receivers","currentReceiver","quickCast"];case "annotations_module":return(b=b.A)&&b.BA();case "creatorendscreen":return(b=b.F)&&b.HA();case "unplugged":return(g.wB(g.U(b.g))?b.C:null)&&"settingsMenuShown hideSettingsMenu showSettingsMenu getStoryboardFrameData getStoryboardFrameIndex getStoryboardFrameIntervalSeconds getStoryboardMaxFrameIndex".split(" ")}return a?Ev.prototype.Eg.call(this,
a):(a=Ev.prototype.Eg.call(this),b.B&&a.push("ad"),g.sL(b)&&a.push("remote"),b.A&&a.push("annotations_module"),b.F&&a.push("creatorendscreen"),g.wB(g.U(b.g))&&b.C&&a.push("unplugged"),a)};
g.h.Fg=function(){var a=this.app.H.Da();return{width:a.width,height:a.height}};
g.h.xC=function(a){var b=this.app.H;b.F=PA(a,!0);b.Ae()};
g.h.eJ=function(){var a=this.app.A.I;a&&a.A.xb(2,!0)};
g.h.qC=function(){return g.GR(this.app.H)};
g.h.CC=function(a){var b=this.app.H;b.V=a;b.Ae()};BF.prototype.reset=function(){DC("")};
BF.prototype.g=function(a,b){g.FC(a,b,"")};
BF.prototype.info=function(a,b){g.GC(a,b,"")};g.EF.prototype.Af=ba(2);g.EF.prototype.getId=function(){return this.Aa};
g.EF.prototype.toString=function(){return"CueRange{"+this.namespace+":"+this.Aa+"}["+FF(this.start)+", "+FF(this.end)+"]"};
g.EF.prototype.contains=function(a,b){return a>=this.start&&(a<this.end||a==this.end&&this.start==this.end)&&(null==b||a<b&&b<=this.end)};
var DF=1;g.EF.prototype.getId=g.EF.prototype.getId;IF.prototype.toString=function(){return this.type+this.id};g.r(g.PF,g.R);g.h=g.PF.prototype;g.h.hasNext=function(a){return this.loop||!!a||this.Oa+1<this.Lf};
g.h.se=function(a){return this.loop||!!a||0<=this.Oa-1};
g.h.Eb=function(a,b,c){a=void 0!=a?a:this.Oa;a=this.za&&a in this.za?this.za[this.ed[a]]:null;var d=null;a&&(b&&(a.autoplay="1"),c&&(a.autonav="1"),d=new g.lD(a),d.startSeconds=this.startSeconds||d.clipStart||0,this.listId&&(d.playlistId=this.listId.toString()));return d};
g.h.setShuffle=function(a){this.Sv=a;a=this.ed&&null!=this.ed[this.Oa]?this.ed[this.Oa]:this.Oa;this.ed=[];for(var b=0;b<this.za.length;b++)this.ed.push(b);this.Oa=a;this.Ck++;if(this.Sv){a=this.ed[this.Oa];for(b=1;b<this.ed.length;b++){var c=Math.floor(Math.random()*(b+1)),d=this.ed[b];this.ed[b]=this.ed[c];this.ed[c]=d}for(b=0;b<this.ed.length;b++)this.ed[b]==a&&(this.Oa=b);this.Ck++}this.O("shuffle")};
g.h.kc=function(a,b){b=b||"hqdefault.jpg";var c=this.Eh[b];if(c||a.I||"sddefault.jpg"==b||"hq720.jpg"==b||"maxresdefault.jpg"==b)return c;if(this.Zv.length)return vB(a,this.Zv[0],b)};
g.h.getLength=function(){return this.Lf};
g.h.Zh=function(a){if(a&&(a=a.videoId,!this.za[this.Oa]||this.za[this.Oa].video_id!=a))for(var b=0;b<this.za.length;b++)if(this.za[b].video_id==a){this.Oa=b;break}};
g.h.onReady=function(a){this.Si=a;this.xe&&g.jr(this.Si,0)};
g.h.getPlaylistId=function(){return this.listId?this.listId.toString():null};
g.h.kk=function(a){return a.getVideoUrl(this.Eb().videoId,this.getPlaylistId())};
g.h.T=function(){this.Si=null;g.Ee(this.za);g.R.prototype.T.call(this)};WF.prototype.add=function(a){this.g=(this.g+1)%this.l.length;this.l[this.g]=a};
WF.prototype.clear=function(){for(var a=this.l.length,b=0;b<a;b++)this.l[b]=0;this.o=this.g=this.l.length-1};g.r(cG,g.R);cG.prototype.isPeggedToLive=function(){return this.B};lG.prototype.reset=function(){this.U=nG(this);this.F=window.NaN;this.K=0;this.g=new kG(0,0,null);this.A=8;this.C=[];this.o=[];this.B=this.H=window.NaN;this.l=this.I=0;this.L=!1};
lG.prototype.process=function(a){if(this.C.length){if(qG(this)&&this.C.length+a.byteLength<this.A){rG(this,a,0);return}var b=this.C.length,c=new window.Uint8Array(b+a.byteLength);c.set(this.C,0);c.set(new window.Uint8Array(a.buffer,a.byteOffset,a.byteLength),b);this.C=[];a=new window.DataView(c.buffer)}for(b=0;b<a.byteLength;){c=a.byteLength-b;var d=window.NaN;if(qG(this)){if(c<this.A){rG(this,a,b);return}switch(this.g.type){case 0:case 1836019574:case 1836019558:d=oG(this,a,b);break;case 1953653094:c=
a;d=b;this.I||(this.I=kw(sG(this,c,d),this.l));d=oG(this,c,d);break;case 1836476516:this.l=mw(sG(this,a,b));pG(this);d=this.g.size-8;break;case 1952867444:(0,window.isNaN)(this.B)||(c=sG(this,a,b),d=this.P?this.B:uw(c),this.P&&tw(c,d),(0,window.isNaN)(this.F)&&(this.F=d),this.B+=this.I,this.K+=this.I);d=this.g.size-8;break;case 1936286840:c=sG(this,a,b),d=ww(c),this.l=vw(c),pG(this),this.I=d,d=this.g.size-8}}else d=Math.min(this.A,c);this.g.offset+=d;this.A-=d;b+=d;if(0==this.A){for(;0!=this.g.type&&
this.g.offset==this.g.size&&this.g.g;)1835295092==this.g.type&&(this.L=!0),this.g.g.offset+=this.g.size,this.g=this.g.g;switch(this.g.type){case 0:case 1836019574:case 1836019558:case 1953653094:this.A=8;break;default:this.A=this.g.size-8}}}0<a.byteLength&&this.o.push(a)};var CG=0;g.h=DG.prototype;g.h.dI=function(a){this.status=a.status;a.ok?(this.C=a.body.getReader(),this.B?(this.I=a.headers,this.V(),this.l=new window.Uint8Array(FG(this)),JG(this)):this.C.cancel("Cancelling")):LG(this)};
g.h.HE=function(a){if(this.B){var b=a.value?a.value:null;(0,g.H)();a.done?(this.C=null,LG(this)):(this.F.sa&&KG(this)?(IG(this,b),this.B({timeStamp:(0,g.H)(),loaded:this.o})):(this.B({timeStamp:(0,g.H)(),loaded:this.o}),IG(this,b)),JG(this))}};
g.h.lt=function(a){this.K=""+a;this.L=!0;LG(this)};
g.h.Ee=function(a){return this.I.get(a)};
g.h.Br=function(){return!!this.I};
g.h.wm=function(){return this.o};
g.h.ck=function(){return+this.Ee("content-length")};
g.h.zr=function(){return 200<=this.status&&300>this.status&&!!this.o};
g.h.xg=function(){return!!this.A.length||(this.H||this.F.sa&&KG(this))&&0<this.g};
g.h.Nv=function(){this.xg();this.A.length||GG(this);return this.A.shift()};
g.h.jt=function(){this.xg();this.A.length||GG(this);return this.A[0]};
g.h.abort=function(){this.C&&this.C.cancel("Cancelling");this.U=this.B=null};
g.h.Vv=function(){return!0};
g.h.kv=function(){return this.L};
g.h.ao=function(){return this.K};g.h=MG.prototype;g.h.IC=function(a){if(!this.l){this.status=this.g.status;try{this.response=this.g.response}catch(b){}this.o=!0;this.A(a)}};
g.h.KC=function(){2==this.g.readyState&&this.B()};
g.h.JC=function(a){this.l||(this.status=this.g.status,this.C(a))};
g.h.Br=function(){return 2<=this.g.readyState};
g.h.Ee=function(a){try{return this.g.getResponseHeader(a)}catch(b){return g.Q(b),""}};
g.h.ck=function(){return+this.Ee("content-length")};
g.h.wm=function(){return this.response.byteLength};
g.h.zr=function(){return 200<=this.status&&300>this.status&&!!this.response&&!!this.response.byteLength};
g.h.xg=function(){return this.o&&!!this.response&&!!this.response.byteLength};
g.h.Nv=function(){this.xg();var a=this.response;this.response=null;return new window.Uint8Array(a)};
g.h.jt=function(){this.xg();return new window.Uint8Array(this.response)};
g.h.abort=function(){this.l=!0;this.g.abort()};
g.h.Vv=function(){return!1};
g.h.kv=function(){return!1};
g.h.ao=function(){return""};g.h=NG.prototype;g.h.wb=function(){return this.o?this.o.wb():""};
g.h.Td=function(){return this.A};
g.h.start=function(a){var b=this;RG(this,2);this.K=qca++;this.l?(this.F=jy(this.info,this.l.o,this.l.length),this.o=g.hy(this.info,this.R,this.F)):(this.F=this.info.range,this.o=g.hy(this.info,this.R));if(this.C.Wa&&2>this.info.g.g){var c=this.o.get("aitags");if(c&&(gy(this.info)||Hw(this.info.ra[0]))&&this.V){c=tb(c).split(",");var d=[];(0,g.G)(c,function(a){g.Sa(b.V,a)&&d.push(a)});
0<d.length&&this.o.set("altitags",(0,window.encodeURIComponent)(String(d.join(","))))}}this.o.set("rn",this.K.toString());0<=a&&this.o.set("rbuf",(1E3*a).toFixed().toString());a=this.o.wb();try{this.g=YG(this,a)}catch(e){this.A="net.ssl";SG(this);return}0<this.C.F&&this.L.start()};
g.h.PH=function(){this.P=0;this.info.g.A=g.It();var a=QG(this);a.o=g.It();a.l+=1;a=this.timing;a.l=(0,g.H)();a.C=a.l;a.o=0;a.L=a.l;a.K=0;a.F&&(a.F=[]);a.V=!1;a.aa=!1;a.B=0;a.H=Wz(a.g);BG(a);a.P=(a.U-a.l)/1E3};
g.h.OH=function(a){if(!this.ga()){this.B=this.g.status;$G(this,!1);var b=this.timing,c=a.timeStamp;a=a.loaded;c=c>b.l&&4E12>c?c:(0,g.H)();yG(b,c,a);50>c-b.C&&zG(b)||xG(b,c,a);b=this.timing;b.o>b.ia&&b.o>b.g.policy.l&&4>this.state?RG(this,4):WG(this)&&ZG(this)&&RG(this,Math.max(3,this.state))}};
g.h.NH=function(){if(!this.ga()&&!this.I&&this.g.Br()&&this.g.Ee("X-Walltime-Ms")){var a=(0,window.parseInt)(this.g.Ee("X-Walltime-Ms"),10);this.I=((0,g.H)()-a)/1E3}};
g.h.MH=function(){var a=this.g;if(!this.ga()&&a){this.L.stop();this.B=a.status;var b=!1;if(400<=a.status)b=!0,this.A="net.badstatus";else if(a.zr()){var c="";XG(this)&&(c=a.jt(),2048<c.length?c="":(c=String.fromCharCode.apply(String,c),c=qv(c)?c:""));if(c){a=QG(this);g.It();a.l=0;a.Ge=0;a.g=0;a=this.info;var d=this.o;g.ey(a.g,d,c);a.requestId=d.get("req_id");RG(this,5)}else if(c=a.wm(),(d=!!this.F&&this.F.length)&&d!=c||a.kv())b=!0,this.A="net.closed";else{$G(this,!0);var e=UG(this)?this.g.Ee("X-Bandwidth-Est"):
0;if(a=UG(this)?this.g.Ee("X-Bandwidth-Est3"):0)this.aa=!0,this.C.lj&&(e=a);a=this.timing;d=(0,g.H)();e=e?(0,window.parseInt)(e,10):0;if(!a.V){a.V=!0;d=d>a.l&&4E12>d?d:(0,g.H)();yG(a,d,c);xG(a,d,c);a.I&&e?Oz(a.g,a.o/e,a.o):(e=(d-a.l)/1E3,(e<=a.g.policy.A||!a.g.policy.A)&&!a.aa&&zG(a)&&Oz(a.g,e,c),zG(a)&&Qz(a.g,c,a.B));c=a.g;d=(d-a.l)/1E3;e=a.P;var f=a.ba;c.B.g(d,a.o/d);c.o=g.It();f||c.g.g(1,d-e);a.A&&(a.A=!1)}a=QG(this);g.It();a.l=0;a.Ge=0;a.g=0;this.info.g.g=0;RG(this,6)}}else b=!0,this.A=204==a.status?
"net.nocontent":"net.connect";b&&SG(this)}};
g.h.mI=function(){if(!this.ga()){var a=(0,g.H)(),b=!1;zG(this.timing)?(a=this.timing.U,BG(this.timing),this.timing.U-a>=.8*this.C.F?(this.P++,b=5<=this.P):this.P=0):(b=this.timing,b=a-(b.l+1E3*b.H.delay)>1E3*this.C.Ma);b?(VG(this),this.A="net.timeout",SG(this)):this.L.start()}};
g.h.ga=function(){return-1==this.state};
g.h.dispose=function(){Hw(this.info.ra[0])&&6!=this.state&&(this.info.ra[0].g.F=!1);RG(this,-1);this.H=null;this.L.dispose();VG(this)};
NG.DEBUG=!1;g.r(dH,g.R);tH.prototype.start=function(){this.l=!0};
tH.prototype.reset=function(){this.g=this.l=!1};uH.prototype.aa=function(a,b){switch(b.info.type){case 1:case 2:this.R(b);break;case 4:var c=b.info.g.xs(b),d=b.info,e=this.g;e&&e.g==d.g&&e.type==d.type&&(d.range&&e.range?e.range.start==d.range.start&&e.range.end==d.range.end:e.range==d.range)&&e.na==d.na&&e.l==d.l&&e.Ja==d.Ja&&(this.g=g.La(c).info);(0,g.G)(c,(0,g.A)(this.aa,this,a));break;case 3:hH(this.l,a,b)}};
uH.prototype.R=function(a){var b=this.l;if(1==a.info.type){var c=hx(a);Eu(a.info.g.info)&&!Fu(a.info.g.info)&&(Ww(new Pw(c)),Vw(21936,c));!b.o.mj&&Fu(a.info.g.info)&&"bt2020"==a.info.g.info.video.primaries&&(b=new Pw(c),Rw(b,[408125543,374648427,174,224,21936,21937])&&(b=b.o+b.g,129==c.getUint8(b)&&1==c.getUint8(b+1)&&c.setUint8(b+1,9)));a.info.g.info.video&&ly(a.info.g,c);2==a.info.g.info.containerType&&a.info.g.info.video&&Xw(c)}a.info.g.Um(a)};
uH.prototype.ba=function(a){a=a.info;this.A&&(this.V=this.A);this.A=a;this.H&&this.A.o&&(this.H=!1);a.g.info.g>=this.L&&(this.L=a.g.info.g)};
uH.prototype.getDuration=function(){return this.Ea.index.ek()};jI.prototype.send=function(){g.Ar(this.l,{format:"RAW",responseType:"arraybuffer",timeout:1E4,Ac:this.o,Qc:this.o,context:this});this.g=g.It()};
jI.prototype.o=function(a){var b={rc:a.status,lb:a.response?a.response.byteLength:0,rt:((g.It()-this.g)/1E3).toFixed(3),shost:g.zg(this.l),trigger:this.C};204==a.status||a.response?this.A&&this.A(HB(b)):this.B(new g.GB("pathprobe.net",!1,b))};var vca=1024/48E3;g.r(tI,g.J);tI.prototype.C=function(a){if(!this.ga()){for(var b=arguments.length-1;0<=b;b--){var c=arguments[b];if(c){g.Xa(this.l,c);var d=this.g,e=d.g;c=g.gb(e,c,d.l);0<=c&&g.Wa(e,c)}}this.o()}};
tI.prototype.reset=function(){this.B=this.I=!1;this.F.stop();this.g.g=[];this.l=[];this.o();this.H=null};
tI.prototype.o=function(){this.K=!0;if(!this.L){for(var a=3;this.K&&a;){this.K=!1;this.L=!0;if(this.B&&!this.I&&!this.ga()){this.F.stop();var b=this.P();g.T(b,32)&&this.R.start();for(var c=g.T(this.P(),2)?0x8000000000000:1E3*this.aa(),d=g.T(b,2),e=[],f=[],k=0;k<this.l.length;k++){var l=this.l[k];l.active&&(d?0x8000000000000>l.end:!l.contains(c))&&f.push(l)}e=e.concat(yI(this,f));if(d)b=pI(this.g,0x7ffffffffffff),b=b.concat(rI(this.g));else if(this.A<=c&&b.gb()&&!g.T(b,16)&&!g.T(b,32)){b=this.g;d=
c;f=[];for(k=qI(b,this.A);k<b.g.length&&!(l=b.g[k],(l.end<=d||l.contains(d))&&f.push(l),l.start>d);++k);b=f}else b=pI(this.g,c);e=e.concat(xI(this,b));this.A=c;!this.I&&this.H&&(this.H=null);c=g.q(e);for(e=c.next();!e.done;e=c.next())e=e.value,b=e[1],1==e[0]?(b.l&&b.l.O("onEnter",b),this.U("crn_"+b.namespace,b)):(b.l&&b.l.O("onExit",b),this.U("crx_"+b.namespace,b))}this.L=!1;a--}this.P().gb()&&(a=sI(this.g,this.A),!(0,window.isNaN)(a)&&0x7ffffffffffff>a&&(a=(a-this.A)/this.V(),this.F.start(a)))}};
tI.prototype.T=function(){this.l=[];this.g.g=[];this.H=null;g.J.prototype.T.call(this)};zI.prototype.then=function(a,b){return this.o.then(a,b)};
zI.prototype.resolve=function(a){this.g(a)};
zI.prototype.reject=function(a){this.l(a)};g.r(AI,g.R);g.h=AI.prototype;g.h.initialize=function(a,b,c,d){a=a||0;var e=this.F;d=d&&d.id;e.A="i";"auto"!=Xu()&&(e.A="s");WH(e,b);eI(e,d);e.U=e.B;fI(e);e.o=e.l;b=dI(e);this.A=new uH(this.l,b.audio);this.g=new uH(this.l,b.video);YI(this,this.A);YI(this,this.g);this.g.l.U=this.A.l;this.O("videoformatchange",b);this.X=this.g.C;this.l.H&&this.ze("streaming","1",!0);this.B=a;c?(CI(this,!1),g.Pp(this.ma)):(a=0==this.B,bJ(this,this.g,this.g.Ea,a),bJ(this,this.A,this.A.Ea,a),this.seek(this.B),this.gc("gv"))};
g.h.resume=function(){if(this.R||this.aa)this.ya=this.aa=this.R=!1};
g.h.QG=function(a){if(!this.ga()&&3<=a.state){var b=a.info.ra[0].g,c=!this.sa&&b.info.video;b=!this.fa&&b.info.audio;5==a.state?c?this.gc("vrr"):b&&this.gc("arr"):6==a.state?c?(this.sa=a.wb(),Rt(4)):b&&(this.fa=a.wb()):4==a.state&&c&&Rt(4);if(5<=a.state){if(this.l.V){c=wG(a.timing);b=a.timing;c={rn:a.K.toString(),rt:c.rt,pt:c.pt,stall:c.stall,elt:c.elbowTime,elb:c.elbowBytes,rqd:b.F?b.F.join(""):""};b=c.rqd;delete c.rqd;if(b)for(var d=0;256*d<b.length;d++)this.ze("rqd",HB({rn:c.rn,ix:String(d),d:b.substring(256*
d,256*(d+1))}));this.ze("rqs",HB(c))}a.aa&&this.ze("sbwe3","1",!0)}if(5==a.state)a.start(Math.max(0,a.info.ra[0].B-this.B));else if(5<=a.state&&5==a.info.ra[0].type)a.dispose();else{if(this.l.Wa&&6==a.state&&(c=a.g?a.g.Ee("X-Response-Itag"):null)&&(c=gI(this.F,c),b=c.di(a.info.range.length-c.Bm())[0],a.info=b,a.l))for(c=a.l,b=b.ra,c.l=b,d=0;d<c.g.length;d++)c.g[d].info=b[d],c.g[d].range.start=b[d].range.start,c.g[d].range.end=b[d].range.end,c.g[d].range.length=b[d].range.length;if(6==a.state||this.l.H&&
3<=a.state&&!(5<=a.state)){c=a.info.ra[0].g;b=c.info.video?this.g:this.A;this.C.l&&(b.C=!1,a.I&&this.Ma.g(1,a.I));if(d=Hw(a.info.ra[0]))d=a.info,d=!!Hw(d.ra[d.ra.length-1]);d&&((0,g.G)(a.l.g,b.R,b),this.l.ud||this.O("metadata",c))}else if(7==a.state)if(b=a.info.ra[0].g,TG(a)){d=(b.info.video&&1<b.A.g||410==a.B||500==a.B||503==a.B)&&!aI(this.F);var e=PG(a);c=b.info.video?this.g:this.A;d&&(e.stun="1");QI(this,!1,a.Td(),e);if(!this.ga()){d&&(d=this.F,b=b.info,aI(d),d.ia=b,d.V=g.It(),d.R=-1,WH(d,d.F));
for(b=0;b<c.o.length&&a!==c.o[b];b++);if(b==c.o.length)BH(c,a);else{for(;b<c.o.length;)BH(c,c.o.pop());3==a.info.ra[0].type?(a.l&&a.l.A?(b=a.l.A,b=new Fw(b.type,b.g,b.range,b.na,b.startTime+b.duration,0,b.l+b.Ja,0,!1)):(b=a.info.ra[0],b=new Fw(b.type,b.g,b.range,b.na,b.startTime,0,b.l,0,!1)),c.g=b):c.g=null}this.Nd()}}else Hw(a.info.ra[0])?(b.C=!0,this.Nd()):QI(this,!0,"net.retryexhausted",PG(a));this.Nd();if(5<=a.state&&TG(a)&&by(a.info.g,this.Ra)&&(c=Lx(this.Ra,Ox(a.info.g.o)),b=5E3*Math.pow(1.6,
c.l),!(c.g||c.o+b>g.It()))){a:{a=a.info;c=this.l.Je;b=null;d=a.ra[0];if(a.range)b=Dw(a.range.start,Math.min(4096,a.range.length));else if(!c||d.g.info.video){a=null;break a}a=new Fw(5,d.g,b,d.na);a=new fy([a]);a.A=!1}a&&NI(this,a)}}}};
g.h.Nd=function(){GI(this);if(this.o&&Bx(this.o)&&!Dx(this.o)){var a=this.l.Ie&&this.g.A&&this.g.A.C;this.C.isLive&&!a?(0,window.isNaN)(this.I)?(this.I=this.B+3600,this.o.o.duration=this.I):this.I<=this.B+1800&&(this.I=Math.max(this.I+1800,this.B+3600),this.o.o.duration=this.I):(a=Math.max(this.A.getDuration(),this.g.getDuration()),(!(0,window.isFinite)(this.I)||this.I!=a)&&0<a&&(this.I=this.o.o.duration=a))}if(!this.ga())if(hz(this.C)&&3==this.C.C)QI(this,!0,"manifest.net.retryexhausted",{rc:this.C.P.toString()});
else if(this.C.isLive&&(NH(this.g)||NH(this.A)))this.l.Ec||EI(this,!0),this.O("seekplayerrequired",window.Infinity);else if(GI(this),xH(this.g,this.B),!this.ga()&&(xH(this.A,this.B),!this.ga())){this.C.l&&(OH(this.g),OH(this.A),SI(this),(a=eH(this.g.l))&&a.l&&(this.V=eH(this.g.l).l.C,this.ze("strm",this.V?"1":"0",!0)));if(this.o){a=this.o.g;var b=this.o.l;if(!HI(this,this.A,a)&&!HI(this,this.g,b))if(TI(this)){if(this.l.Xb){if(!a.g){var c=eH(this.A.l);c&&UI(this,a,c)}b.g||(a=eH(this.g.l))&&UI(this,
b,a)}}else{if(this.L){c=!!this.L.g;var d=this.L;var e=this.A,f=iE(this.o.l.buffered);if(d.g)d=nI(d,e,f);else{if(f=eH(e.l)){var k=f.l;if(k&&k.C&&k.B&&(e=e.o.length?e.o[0]:null)&&3<=e.state&&7!=e.state&&WG(e)&&0==e.info.l&&lI(d,k,f.info)){var l=d.l.Xt*vca;d.g=e;d.H=f;d.C=k;d.F=f.info;d.o=l;d.A=(0,g.H)()/1E3}}d=window.NaN}f=!!this.L.g;c!=f&&this.ze("ssr",f?"start":"stop."+d);d&&this.O("seekplayerrequired",d,!0)}(c=WI(this,this.g,b,null))&&!this.Ga&&(this.Ga=(0,g.H)(),this.gc("vda"),g.FC("vda",void 0,
"video_to_ad"),this.wa&&Rt(4));if(!Cx(this.o)){b=hE(b.buffered,this.B+MI);if(!(0,window.isNaN)(b)||zH(this.g)||!a.buffered.length){if(zH(this.g)||this.l.fj)b=window.NaN;a=WI(this,this.A,a,b);c=c||a;a&&!this.wa&&(this.wa=(0,g.H)(),this.gc("ada"),g.FC("ada",void 0,"video_to_ad"),this.Ga&&Rt(4))}zH(this.g)&&zH(this.A)&&Bx(this.o)&&!Dx(this.o)&&(a=this.o,Bx(a)&&a.o.endOfStream(),a=this.P,Wu(Wz(a)),a.A=g.It());c&&!Fx(this.o)&&g.Pp(this.U)}}}BI(this);bJ(this,this.g,this.g.Ea,!1);bJ(this,this.A,this.A.Ea,
!1);this.g.Ea.C||this.A.Ea.C?QI(this,!0,"net.retryexhausted",{metadata:"1",video:this.g.Ea.C?"1":"0",audio:this.A.Ea.C?"1":"0"}):(KI(this,this.g,this.A)&&OI(this,this.g,this.A),KI(this,this.A,this.g)&&OI(this,this.A,this.g),this.l.gj&&this.ia&&!this.R&&Xz(this.P)&&(a=this.ia,b=(0,g.A)(this.O,this,"error"),c=this.l.pj?(0,g.A)(this.ze,this,"pathprobe"):null,(new jI(a,"cms",c,b)).send(),this.ia=""),this.C.A&&g.Pp(this.ma),this.L&&(a=this.L,a.g?(b=0,a.g.ga()||5<=a.g.state||(b=1E3*(a.o-AG(a.g.timing))),
a=0<b?b+1:a.B?Math.max(0,1E3*(a.A+a.l.zb)-(0,g.H)()):0):a=window.NaN,(0,window.isNaN)(a)||g.Pp(this.Za,a)),g.Pp(this.Ta))}};
g.h.Pk=function(a){var b=a?this.A:this.g;a=b&&b.A;var c=b&&b.V;b=void 0;a&&(b=Lw(a));if(c){b=b||{};a=Lw(c);for(var d in a)b["prev_"+d]=a[d]}QI(this,!0,"fmt.unplayable",b)};
g.h.OF=function(a){QI(this,!0,"fmt.unparseable",a)};
g.h.SF=function(a){QI(this,!1,"qoe.avsync",a)};
g.h.PF=function(a,b){this.C.l&&XI(this,b,a==this.g)};
g.h.QF=function(a,b){this.C.l&&oz(this.C,b.na,a==this.g)};
g.h.RF=function(a,b){this.C.l&&XI(this,b,a==this.g)};
g.h.NF=function(a,b){if(this.g.Ea.index.Pb()<=b){var c=this.C;c.L.push(a);c.O("cuepointsadded")}};
g.h.seek=function(a){if(this.ga())return Nf();if(this.g.C||this.A.C)return Mf();GI(this);this.Wa=g.It();BI(this,a);var b=this.g.g,c=aJ(this,this.g,a,this.o&&this.o.l),d=aJ(this,this.A,c,this.o&&this.o.g);this.B=Math.max(a,c,d);this.K=!0;this.C.l&&this.l.nb&&(c=this.g.g.na,py(this.g.Ea.index,c)||b&&b.na==c||(this.X=!0));g.Pp(this.U);return Mf(a)};
g.h.T=function(){FI(this);this.A&&(CH(this.A),CH(this.g));g.R.prototype.T.call(this)};
g.h.gc=function(a,b){this.bb[a]=b?window.performance.timing.navigationStart+b:g.It()};
g.h.kt=function(){return this.Ma.l()||0};
g.h.ze=function(a,b,c){this.O("ctmp",a,b,void 0===c?!1:c)};
var MI=2/24;g.r(kJ,g.J);g.h=kJ.prototype;g.h.PC=function(a){this.C.call(this.o,new window.Uint8Array(a.message))};
g.h.QC=function(){this.I.call(this.o,this.g.keyStatuses)};
g.h.cu=function(a,b){g.Q(b);var c=a;b instanceof window.DOMException&&(c+=";n."+b.name+";m."+b.message);this.B.call(this.o,c)};
g.h.Bu=function(a){this.C.call(this.o,a.message)};
g.h.Au=function(a){if(this.l){var b=this.l.error.code;a=this.l.error.systemCode}else b=a.errorCode&&a.errorCode.code,a=a.systemCode;this.B.call(this.o,"t.prefixedKeyError;c."+b+";sc."+a)};
g.h.zu=function(){this.H.call(this.o)};
g.h.update=function(a){if(this.g)return this.g.update(a).then(null,er((0,g.A)(this.cu,this,"t.update")));this.l?this.l.update(a):this.A.addKey?this.A.addKey(this.K.g,a,this.F,this.sessionId):this.A.webkitAddKey(this.K.g,a,this.F,this.sessionId);return fs()};
g.h.T=function(){this.g&&this.g.close();this.A=null;g.J.prototype.T.call(this)};g.r(mJ,g.J);g.h=mJ.prototype;
g.h.createSession=function(a){var b=a.initData;if(this.g.l){var c=this.B.createSession();"com.youtube.fairplay"==this.g.g&&(b=pJ(this,b));b=c.generateRequest(a.contentType,b);c=new kJ(null,null,null,c,null);b.then(null,er((0,g.A)(c.cu,c,"t.generateRequest")));return c}if(tz(this.g)){c=new window.Uint8Array(270);for(a=0;135>a;a++)c[2*a]='<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="true"></LicenseAcquisition></PlayReadyCDMData>'.charCodeAt(a);b=this.o.createSession("video/mp4",
b,c);return new kJ(null,null,null,null,b)}if(xz(this.g))return b=pJ(this,b),b=this.o.createSession("video/mp4",b),new kJ(null,null,null,null,b);this.l.generateKeyRequest?this.l.generateKeyRequest(this.g.g,b):this.l.webkitGenerateKeyRequest(this.g.g,b);return this.A=new kJ(this.l,this.g,b,null,null)};
g.h.TC=function(a){var b=qJ(this,a);b&&b.Bu(a)};
g.h.SC=function(a){var b=qJ(this,a);b&&b.Au(a)};
g.h.RC=function(a){var b=qJ(this,a);b&&b.zu(a)};
g.h.T=function(){this.l=null;g.J.prototype.T.call(this)};g.r(sJ,g.J);g.h=sJ.prototype;g.h.mt=function(a){this.L=a};
g.h.NC=function(a){if(!this.ga()){this.I||(g.FC("drm_gk_f"),this.I=!0,this.fc.O("newsession",this));uz(this.o)&&(a=wJ(a));if("fairplay"==this.o.flavor){var b=g.$d(a);a=new window.Uint8Array(new window.ArrayBuffer(b.length));for(var c=0;c<b.length;c++)a[c]=b.charCodeAt(c)}a=new hJ(a,++this.P);this.Gv(a)}};
g.h.LC=function(){this.ga()||this.F||(this.fc.O("sessionready"),this.F=!0)};
g.h.OC=function(a){var b=this;this.ga()||(a.forEach(function(a,d){var c=uz(b.o)?d:a,f=new window.Uint8Array(uz(b.o)?a:d);uz(b.o)&&BJ(f);var k=cH(f);BJ(f);f=cH(f);b.g[k]?b.g[k].status=c:b.g[f]?b.g[f].status=c:b.g[k]={type:"",status:c}}),dr("Key statuses changed: "+CJ(this,",")),this.fc.O("keystatuseschange",this))};
g.h.Gv=function(a){g.FC("drm_net_s");a={format:"RAW",method:"POST",postBody:a.message,responseType:"arraybuffer",withCredentials:!0,timeout:3E4,ib:(0,g.A)(this.AF,this,a),onError:(0,g.A)(this.tu,this,a)};var b=this.U;this.L&&(b=Pg(b,"access_token",this.L));(0,window.isNaN)(this.l)||(b=Pg(b,"cpi",this.l));g.Ar(b,a)};
g.h.AF=function(a,b){if(!this.ga())if(0!=b.status&&b.response){g.FC("drm_net_r");var c=new window.Uint8Array(b.response);if(c=jJ(c))if(0!=c.statusCode)uJ(this,"drm.auth",!0,"t.f;c."+c.statusCode,g.aE(c.statusCode));else{g.FC("drm_kr_s");var d=null,e=c.headers["Heartbeat-Url"];e&&(d=new gJ(e,(0,window.parseInt)(c.headers["Heartbeat-Interval-Secs"],10)||60,(0,window.parseInt)(c.headers["Heartbeat-Num-Retries"],10)||4));d&&this.fc.O("newlicense",d);if(d=c.headers["Authorized-Format-Types"])this.B=d.split(","),
xJ(this)||(wz(this.o)?(d=yJ(this.B),480<g.wu[d]&&this.fc.O("hdentitled",this)):this.fc.O("keystatuseschange",this));c.headers["Key-Ids"]&&(this.g=AJ(c.headers["Key-Ids"]));xz(this.o)&&(c.message=new window.Uint8Array(be(String.fromCharCode.apply(null,c.message))));this.A.update(c.message).then(function(){g.FC("drm_kr_f")});
this.F&&(this.K=g.It())}else uJ(this,"drm.net",!0,"t.p","YTP_ERROR_SERVER_ERROR")}else this.tu(a,b)};
g.h.MC=function(a){this.ga()||uJ(this,"drm.keyerror",!0,a)};
g.h.tu=function(a,b){var c=!1;if(3<=a.g.l||this.R&&36E4<g.It()-this.K){var d="drm.net.retryexhausted";c=!0}else d=b.status?"drm.net.badstatus":"drm.net.connect";uJ(this,d,c,"t.r;c."+b.status);if(this.R&&this.F?0:!c&&this.P==a.number)d=a.g.getValue(),d=new g.P((0,g.A)(this.Gv,this,a),d),g.K(this,d),d.start(),d=a.g,d.g=Math.min(2E4,2*d.g),d.o=Math.min(2E4,d.g+Math.round(.4*(Math.random()-.5)*d.g)),d.l++};
g.h.T=function(){this.fc=null;g.J.prototype.T.call(this)};
g.h.Se=function(){var a=this.B.join();if(xJ(this)){var b=[],c;for(c in this.g)"usable"!=this.g[c].status&&b.push(this.g[c].type);a+="/UKS:"+b}return a};FJ.prototype.get=function(a){a=this.Zh(a);return-1!=a?this.values[a]:null};
FJ.prototype.remove=function(a){a=this.Zh(a);-1!=a&&(this.keys.splice(a,1),this.values.splice(a,1))};
FJ.prototype.set=function(a,b){var c=this.Zh(a);-1!=c?this.values[c]=b:(this.keys.push(a),this.values.push(b))};
FJ.prototype.Zh=function(a){return g.Pa(this.keys,function(b){return g.nb(a,b)})};g.r(HJ,g.R);g.h=HJ.prototype;g.h.gF=function(a){a=new lJ(new window.Uint8Array(a.initData),a.initDataType);MJ(this,a,!0)};
g.h.eG=function(a){MJ(this,new lJ(a.initData,a.contentType),!0)};
g.h.LF=function(){this.ga()||(this.H=!0,LJ(this))};
g.h.rE=function(a){if(!this.ga()){g.Q(a);var b="t.a";a instanceof window.DOMException&&(b+=";n."+a.name+";m."+a.message);this.O("licenseerror","drm.unavailable",!0,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK")}};
g.h.hG=function(a){this.ga()||!a||this.aa||(this.aa=a,this.O("heartbeatparams",a))};
g.h.iG=function(){this.ga()||(this.o.shift(),LJ(this))};
g.h.cH=function(){if(tz(this.g)&&(this.X--,0==this.X)){var a=this.B;a.l.msSetMediaKeys(a.o)}};
g.h.UC=function(a){this.ga()||KJ(this,zJ(a,this.R))};
g.h.rF=function(){this.ga()||!this.U&&wz(this.g)&&this.O("hdproberequired")};
g.h.T=function(){this.g.l&&this.I.setMediaKeys(null);this.I=null;this.o=[];for(var a=g.q(this.l.values),b=a.next();!b.done;b=a.next())b.value.dispose();a=this.l;a.keys=[];a.values=[];this.A&&(this.A.dispose(),this.A=null);this.C=null;g.R.prototype.T.call(this)};
g.h.Se=function(){return 0>=this.l.values.length?"no session":this.l.values[0].Se()};PJ.prototype.B=function(){var a=g.z("yt.abuse.botguardInitialized");return a&&a()?(a=g.z("yt.abuse.invokeBotguard")())?"r1a="+a:null:null};
PJ.prototype.C=function(a){return"r3a="+Math.floor(this.g.lengthSeconds%Mb(a.c3a))};
PJ.prototype.A=function(a){a=Mb(a.c);var b=g.z("yt.abuse.dclkstatus.checkDclkStatus")();return"r6a="+(a^b)};g.r(WJ,g.R);WJ.prototype.getCurrentTime=function(){return!(0,window.isNaN)(this.g)&&(0,window.isFinite)(this.g)?this.g:this.l?this.l.getCurrentTime():window.NaN};
WJ.prototype.kd=function(a){return this.l&&this.o?this.o.oa?this.o&&this.o.Ia&&this.o.Ia.g&&this.P?a?this.o.kd():fG(this.P):mE(this.l)||0:this.o.kd():0};
WJ.prototype.tb=function(){return this.o?this.o.tb():0};
WJ.prototype.U=function(){var a=this.getCurrentTime()+.1;this.C=Mf(a);YJ(this,a,!0)};var kK={"ad-trueview-indisplay-pv":6,"ad-trueview-insearch":7},lK={"ad-trueview-indisplay-pv":2,"ad-trueview-insearch":2},mK=/^(\d*)_((\d*)_?(\d*))$/;g.r($J,lE);g.h=$J.prototype;g.h.ha=function(){return this.g};
g.h.Zc=function(){return this.g.src};
g.h.dc=function(){try{return 0<=this.g.playbackRate?this.g.playbackRate:1}catch(a){return 1}};
g.h.Be=function(a){this.dc()!=a&&(this.g.playbackRate=a);return a};
g.h.Rn=function(a,b){return this.g.canPlayType(a,b)};
g.h.getCurrentTime=function(){return this.g.currentTime};
g.h.getDuration=function(){return this.g.duration};
g.h.load=function(){var a=this.g.playbackRate;this.g.load&&this.g.load();this.g.playbackRate=a};
g.h.pause=function(){this.g.pause()};
g.h.play=function(){var a=this.g.play();return a&&a.then?a:null};
g.h.Td=function(){return this.g.error?this.g.error.code:null};
g.h.Ai=function(){return!!this.g.webkitCurrentPlaybackTargetIsWireless};
g.h.setSize=function(a){return g.Eh(this.g,a)};
g.h.getVolume=function(){return this.g.volume};
g.h.setVolume=function(a){rx();this.g.volume=a};
g.h.FB=function(a){this.dispatchEvent(new zE(this,a.type,a))};
g.h.setAttribute=function(a,b){this.g.setAttribute(a,b)};
g.h.removeAttribute=function(a){this.g.removeAttribute(a)};
g.h.hasAttribute=function(a){return this.g.hasAttribute(a)};
g.h.T=function(){for(var a in this.A)this.g.removeEventListener(a,this.A[a]);lE.prototype.T.call(this)};g.r(aK,g.J);g.h=aK.prototype;g.h.start=function(){this.l.start()};
g.h.stop=function(){this.l.stop()};
g.h.vl=function(a,b,c){this.o[a]=b;this.g[a]=new dK(!!c)};
g.h.clear=function(){for(var a in this.g)this.g[a].clear()};
g.h.qI=function(){for(var a in this.o)this.g[a].update(this.o[a]());this.l.start()};
dK.prototype.update=function(a){this.o?(this.g.add(a-this.l||0),this.l=a):this.g.add(a)};
dK.prototype.clear=function(){this.g.clear();this.l=0};g.r(fK,g.R);g.h=fK.prototype;g.h.T=function(){g.lr(this.ba);window.clearInterval(this.zb);g.lr(this.Xb);var a=Rv();a&&window.document.removeEventListener(a,this.lf,!1);iK(this);jK(this);this.F&&(this.F.dispose(),this.F=null);gK(this);GK(this);g.Ee(this.ya,this.g);this.aa=null;this.Wa=!1;g.R.prototype.T.call(this)};
g.h.lq=function(){if(this.g.Vb())g.T(this.o,128)||(this.g.Vb(),this.Bc=this.Ka.g=!0,4!=this.Za&&(this.X=g.ab(this.g.rd)),g.DD(this.g,this.A,this.Ga).then(this.Rq,this.Rq,this),this.tc("loudness",""+this.g.relativeLoudness.toFixed(3),!0));else{var a=this.g;if(a.oa&&a.adaptiveFormats&&!a.Ar&&(g.PD(a)||this.A.experiments.g("html5_manifestless_always"))){a=this.g;var b=this.A.experiments;if(!yD(a)){a.Ar=!0;var c=Vy(CD(a,a.adaptiveFormats),a.Ob,a.lengthSeconds,!0,b);!b.g("html5_manifestless_vp9")&&xD(c)||
!b.g("html5_manifestless_captions")&&a.Wm?c.dispose():(a.Wh=!1,BD(a,c),c.subscribe("cuepointsadded",a.jq,a),Qy(a.ka)&&(a.yg=!0));AD(a)}}else if(this.g.Wh){a=this.g;b=this.A.experiments;a.ye=!0;a.Wh=!1;qv(a.hd)||g.Q(Error("DASH MPD Origin invalid: "+a.hd),"WARNING");c=a.hd;var d=b.l("dash_manifest_version")||4;c=g.Jg(c,{mpd_version:d});a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||(c=g.Jg(c,{pacing:0}));ez(new Py(c,b,a.oa),c).then(a.VE,a.UE,a);g.FC("mrs")}else if(this.g.yg)this.C&&(a=this.C.l,
mF(a,"protected"),a.g.videoData.we?a.ma():a.g.videoData.subscribe("dataloaded",a.ma,a)),a=this.g,c=this.A.R,b=this.A.experiments,a.fairPlayCert||a.ka&&Qy(a.ka),c=a.ka?kA(c,a.ka):{},b=new Bz(c,b,a.Pv),g.K(a,b),a.yg=!1,a.ye=!0,a=(0,g.A)(a.Uz,a),b.B=a,zz(b.A)?Ez(b):Hz(b);else if(!this.g.ye&&this.Bc){b=this.A;a=this.g;d=this.bb.Da();var e=this.nf();38==a.Fe&&"books"==b.g?(b=a.videoId.indexOf(":"),a=g.Jg("//play.google.com/books/volumes/"+a.videoId.slice(0,b)+"/content/media",{aid:a.videoId.slice(b+1),
sig:a.XD})):30==a.Fe&&"docs"==b.g?a=g.Jg("https://docs.google.com/get_video_info",{docid:a.videoId,authuser:a.jc,authkey:a.authKey,eurl:b.Ra}):33==a.Fe&&"google-live"==b.g?a=g.Jg("//google-liveplayer.appspot.com/get_video_info",{key:a.videoId}):(c={html5:"1",video_id:a.videoId,cpn:a.clientPlaybackNonce,eurl:b.Ra,ps:b.g,el:UD(a,b),hl:b.Bc,list:a.playlistId,agcid:a.iy,aqi:a.adQueryId,sts:17508,lact:g.Wt()},g.Ia(c,b.B),b.Je&&(c.ecver=b.Je),b.forcedExperiments&&(c.forced_experiments=b.forcedExperiments),
a.He?(c.vvt=a.He,a.mdxEnvironment&&(c.mdx_environment=a.mdxEnvironment)):(a.oauthToken||b.sa)&&(c.access_token=a.oauthToken||b.sa),a.revocableUnlistedToken&&(c.ut=a.revocableUnlistedToken),a.adFormat&&(c.adformat=a.adFormat),b.uf&&(c.cc_lang_pref=b.uf),b.vf&&2!=b.vf&&(c.cc_load_policy=b.vf),b.mute&&(c.mute=b.mute),a.sf&&2!=b.sf&&(c.iv_load_policy=a.sf),a.jh&&(c.itct=a.jh),XD(a,b)&&(c.autoplay="1"),a.vk&&(c.autonav="1"),a.kn&&(c.noiba="1"),a.isMdxPlayback&&(c.mdx="1",c.ytr=a.gf),a.mdxControlMode&&
(c.mdx_control_mode=a.mdxControlMode),a.uq&&(c.ytrcc=a.uq),a.pn&&(c.utpsa="1"),a.isFling&&(c.is_fling="1"),a.jn&&(c.mute="1"),a.vnd&&(c.vnd=a.vnd),a.tm&&(c.force_ad_param_ad_type="video_ad",c.force_ad_param_url=a.tm,c.force_ad_param_break_type="1",c.force_ad_param_offset_value=0),d.width&&(c.width=d.width),d.height&&(c.height=d.height),a.Jf&&(c.splay="1"),a.ypcPreview&&(c.ypc_preview="1"),VD(a,b)&&(c.content_v=VD(a,b)),a.kh&&(c.livemonitor=1),b.jc&&(c.authuser=b.jc),b.pageId&&(c.pageid=b.pageId),
b.Ya&&(c.ei=b.Ya),b.o&&(c.iframe="1"),a.ag&&(c.tst=a.ag),a.contentCheckOk&&(c.cco="1"),a.racyCheckOk&&(c.rco="1"),b.ob&&a.liveStartWalltime&&(c.live_start_walltime=a.liveStartWalltime),b.ob&&a.vn&&(c.live_manifest_duration=a.vn),b.ob&&a.playerParams&&(c.player_params=a.playerParams),b.ob&&a.cycToken&&(c.cyc=a.cycToken),b.ob&&a.cw&&(c.tkn=a.cw),0!=e&&(c.vis=e),b.enableSafetyMode&&(c.enable_safety_mode="1"),a.Ak&&(c.kids_age_up_mode=a.Ak),b.widgetReferrer&&(c.widget_referrer=b.widgetReferrer.substring(0,
128)),(d=b.Gc.embedding_app)&&(c.embedding_app=d),(d=g.zD(a))&&(c.uloc=d),a.pi&&(c.internalipoverride=a.pi),a.innertubez&&(c.innertubez=a.innertubez),b.ob&&a.qg&&(c.wpid=a.qg),a=g.Jg(b.baseYtUrl+"get_video_info",c));b=2;this.g.isAd()&&(b=0);c=this.g;d=this.A.Ec;e=this.A.experiments;var f=this.A.Rb;c.ga()||(c.Gm=a,c.No=b,c.zh=!!d,c.Ir=!!f,e&&(c.rv=!e.g("disable_gvi_cors"),c.Fm=e.l("html5_get_video_info_timeout_ms")||0,c.ir=e.g("html5_get_video_info_promiseajax")),c.ye=!0,c.Dv())}}};
g.h.Rq=function(){if(wD(this.g)){this.g.oa&&(this.U=new ZF,iaa(this),0<this.g.cn&&!this.g.Ib()||xK(this,UK(this),!0));this.g.Ia.g&&g.VK(this);TK(this,"i");if(this.U)if(this.g.Ib()){var a=(0,g.A)(this.B.kt,this.B);this.U.l=a}else this.g.ka&&(a=(0,g.A)(this.g.ka.zA,this.g.ka),this.U.l=a);this.A.experiments.g("html5_new_seeking")&&jaa(this)}this.Ra&&NK(this);a=this.g;a.endSeconds&&a.endSeconds>a.startSeconds&&nK(this,a.endSeconds);oK(this,"dataloaded");this.R.l?uK(this):this.Ra&&pK(this,GE(GE(this.o,
512),1))};
g.h.logEvent=function(a,b){if(this.C){var c=this.C,d={};d.rt=g.$E(c.g).toFixed(3);g.Ia(d,aF(c.g));var e=c.g.g,f=c.g.videoData,k={ns:e.Wa,html5:"1",el:UD(f,e),ps:e.g,fexp:e.experiments.experimentIds.join(",")||void 0,feature:f.Jo||f.Ti||void 0,ctrl:f.Vf||void 0,ytr:f.gf||void 0,list:f.playlistId};XD(f,e)&&(k.autoplay="1");f.subscribed&&(k.subscribed=f.subscribed);g.Ia(d,k);delete d.fexp;g.Ia(d,a);d=g.rr(c.g.g.baseYtUrl+"player_204",d);vF(c,d,b)}};
g.h.isPeggedToLive=function(){return!!this.I&&this.I.isPeggedToLive()};
g.h.vA=function(){return this.o};
g.h.getPlayerType=function(){return this.Za};
g.h.pI=function(){JK(this);pK(this,GE(this.o,16));NK(this);DE(this.o)&&OK(this)};
g.h.Gn=function(){var a=this.g,b=a.Hc;if(!b)return a.Rj;var c=g.Oa(this.g.Ia?this.g.Ia.audioTracks:[],function(a){return a.id==b.id});
return c?c:a.Rj};
g.h.FH=function(){this.A.experiments.l("html5_background_quality_cap")&&this.B&&TK(this,"v");this.A.kj&&!this.g.backgroundable&&this.l&&!this.Ga&&(Qv()&&this.l.l?(this.tc("bgmobile","suspend"),g.FK(this,!0)):NK(this)&&this.tc("bgmobile","resume"))};
g.h.MF=function(a){if(this.Le)this.gd=!0;else{var b=this.getDuration();!b&&this.g.Ib()&&(b=3600);a.o.duration=b;g.DI(this.B,a)}};
g.h.uF=function(a){if(this.H){var b=this.H;tz(b.g)&&(a=aH(a),0!=a.length&&MJ(b,new lJ(a),!1))}};
g.h.xu=function(){vz&&this.fa&&this.fa.g&&this.H&&(JJ(this.H,this.fa.g),this.fa=null)};
g.h.FF=function(a){CK(this,a.reason,a.video.info,a.audio.info);var b=g.JD(this.g);b&&b.I(a.video.index);this.U&&(this.U.g=a.audio.index)};
g.h.EF=function(a){BK(this,a.reason,a.audio.info)};
g.h.nh=function(a){laa(this,a);var b=/^pp/.test(this.g.clientPlaybackNonce);kaa(a)?g.T(this.o,4)?(this.Je=!0,jK(this)):KK(this):$K(a)&&this.g.Ia.l?(this.tc("highrepfallback","1",!0),SD(this.g),QK(this),OK(this)):a.g?(b=this.B?this.B.F.F:null,b=$K(a)&&b&&b.isLocked()?"YTP_ERROR_FORMAT_UNAVALIABLE":void 0,g.rK(this,a.errorCode,b,HB(a.details))):this.C&&(this.C.onError(a.errorCode,HB(a.details)),b&&"manifest.net.connect"==a.errorCode&&(a="https://www.youtube.com/generate_204?cpn="+this.g.clientPlaybackNonce+
"&t="+g.It(),(new jI(a,"manifest",(0,g.A)(function(a){this.tc("pathprobe",a)},this),(0,g.A)(function(a){this.onError(a.errorCode,HB(a.details))},this.C))).send()))};
g.h.Oq=function(){if(this.A.experiments.g("html5_new_seeking"))YJ(this.F,this.F.getCurrentTime(),!0);else{if(!(0,window.isNaN)(this.V)&&this.l){var a=this.getDuration(),b=UK(this);!this.g.oa&&this.V>=b?(this.V=a,this.O("endseeking",this),zK(this,!0),eK(this)):(this.B&&this.B.seek(this.V),(!this.g.oa||1<=this.l.g.readyState)&&this.l.yb(this.V),this.B&&!g.T(this.o,2)&&pK(this,GE(this.o,16)))}ZK(this)}};
g.h.getCurrentTime=function(){if(this.F&&!(0,window.isNaN)(this.F.getCurrentTime()))return this.F.getCurrentTime();if(!(0,window.isNaN)(this.V))return this.V;var a=0;this.l&&1<=this.l.g.readyState?a=this.l.getCurrentTime():this.g&&(a=this.g.Pe||this.g.startSeconds||0);return a};
g.h.getDuration=function(){return this.g.lengthSeconds?this.g.lengthSeconds:UK(this)?UK(this):0};
g.h.Py=function(){var a=new Mz;if(this.B){var b=this.A.schedule;a.A=b.H;a.F=b.K;a.bandwidthEstimate=Vz(b);a.g="d."+Rz(b).toFixed(2)+";st."+(1E9*Tz(b)).toFixed(2)+";bw."+b.l.l().toFixed(0)+";abw."+b.B.l().toFixed(0)+";v50."+Lz(b.g,.5).toFixed(2)+";v92."+Lz(b.g,.92).toFixed(2)+";v96."+Lz(b.g,.96).toFixed(2)+";v98."+Lz(b.g,.98).toFixed(2);b=this.B;if(b.o&&!Cx(b.o)&&(a.l=zH(b.g)?b.g.A.A:jE(b.o.l.buffered,b.B),a.B=zH(b.A)?b.A.A.A:jE(b.o.g.buffered,b.B),b.l.V)){var c=EH(b.g),d=EH(b.A),e=fE(b.o.l.buffered,
"_"),f=fE(b.o.g.buffered,"_");a.g=(a.g||"")+(";lvq."+c+";laq."+d+";lvb."+e+";lab."+f)}a.bandwidthEstimate=TH(b.H)}else this.l&&(a.l=uE(this.l));this.A.experiments.g("html5_new_e2e_latency_tracking")?a.o=this.ar():this.U&&$F(this.U,a);return a};
g.h.CH=function(){if(this.H){var a=this.H,b=this.g.oauthToken;a.P=b;a.O("oauthtoken",b)}oK(this)};
g.h.BH=function(a){g.rK(this,"auth",(0,window.unescape)(a.reason),a.errordetail||"sec."+a.errorcode)};
g.h.yA=function(a){var b=a.target.Zc();if(this.l&&this.l.Zc()&&this.l.Zc()==b){var c=!1;switch(a.type){case "error":var d=!this.Sc,e=this.A.experiments.l("html5_error_reload_cooldown_ms");0<e&&(d=(0,window.isNaN)(this.Ya)||(0,g.H)()-this.Ya>e);if(d&&0<this.l.Td()){this.Sc=!0;this.Ya=(0,g.H)();a=this.g;a=a.Tf?+g.pr(a.Tf.g().Of).expire<Date.now()/1E3+1800:!1;this.C&&(c={e:yE(this.l),msg:NE(this.l)},this.L&&(c.msopened=""+ +!!this.L.g),a&&(c.stale="1"),this.C.onError("qoe.restart",HB(c)));if(a){KK(this);
return}if(Kr("philips"))try{window.close()}catch(f){}kL(this);return}if(this.A.experiments.g("html5_defer_background_errors")&&Qv()&&4==this.l.Td()){g.FK(this);hL(this,"unplayable");return}break;case "durationchange":d=this.l.getDuration();(!this.L||(0,window.isFinite)(d)&&0<d)&&1!=d&&this.g.lengthSeconds!=d&&(this.g.lengthSeconds=d,oK(this));break;case "ratechange":this.B&&(this.B.H.o=Math.max(1,this.l.dc()));d=this.K;d.B=!0;d.o();break;case "loadedmetadata":this.g.startSeconds&&(0<(this.l.g.seekable||
eE()).length?this.A.experiments.g("html5_new_seeking")?xK(this,this.g.startSeconds,!0):this.l.g.currentTime=this.g.startSeconds:(this.ma=this.g.startSeconds,zK(this,!0))),this.O("onLoadedMetadata");case "loadstart":window.clearInterval(this.zb);this.gm()||(this.zb=g.kr((0,g.A)(this.gm,this),100));break;case "progress":this.ma&&this.l&&(d=this.l.g.seekable||eE(),d.length&&d.end(0)>this.ma&&(this.A.experiments.g("html5_new_seeking")?xK(this,this.ma,!0):this.l.g.currentTime=this.ma,this.ma=window.NaN,
this.Ec=this.wa.M(this.l,"canplay",this.WE,this)));case "suspend":bL(this);this.O("onLoadProgress",this,maa(this));g.T(this.o,8)&&(this.eg?c=!0:this.fg&&((0,window.isNaN)(this.ud)||this.ud+1<this.l.getCurrentTime())&&(c=!0,this.ud=this.l.getCurrentTime()));break;case "seeked":gL(this);break;case "seeking":this.A.experiments.g("html5_new_seeking")||(d=this.getCurrentTime(),this.B&&this.B.seek(d),e=this.Ma,e.g=d,e.l=!0);break;case "playing":this.P.g("plev");g.FC("plev",void 0,"video_to_ad");this.Ie&&
(this.Ie=!1,MK(this)||xK(this,window.Infinity,!0));g.lr(this.Xb);this.Xb=window.NaN;break;case "timeupdate":d=this.l&&!this.l.getCurrentTime();e=this.l&&0==this.l.g.readyState;if(d&&(!this.Ta||e))return;this.Ta=this.Ta||!!this.l.getCurrentTime();this.gm();gL(this);bL(this);if(!this.l||this.l.Zc()!=b)return;this.O("onVideoProgress",this,this.l.getCurrentTime());break;case "waiting":if(0<(this.l.g.played||eE()).length&&0==tE(this.l).length&&0<this.l.getCurrentTime()&&5>this.l.getCurrentTime()&&this.B)return;
break;case "resize":this.g.Ba&&"auto"==this.g.Ba.video.quality&&this.O("internalvideoformatchange",this.g,!1)}this.l&&this.l.Zc()==b&&(this.O("videoelementevent",a),b=FE(this.o,a,this.Ma,this.A.experiments),!g.T(this.o,1)&&g.T(b,1)&&lL(this,"evt_"+a.type),pK(this,b),c&&this.l.play())}};
g.h.iE=function(a){a="available"==a.g.availability;a!=this.Tc&&(this.Tc=a,this.O("airplayavailabilitychange"))};
g.h.jE=function(){var a=this.l.Ai();a!=this.Ga&&(this.Ga=a)&&(g.DD(this.g,this.A,this.Ga),TK(this,"m"));this.O("airplayactivechange")};
g.h.gm=function(){var a=this.l;a&&this.Ta&&!this.g.Fd&&!WC("vfp","")&&2<=a.g.readyState&&!a.g.ended&&0<iE(tE(a))&&this.P.g("vfp");if((a=this.l)&&!this.g.Fd&&0<a.getDuration()){!WC("pbp","")&&a.g.paused&&2<=a.g.readyState&&0<iE(tE(a))&&this.P.g("pbp");var b=this.A.experiments.g("html5_use_start_seconds_for_pbs")?this.g.startSeconds:0;if(a.getCurrentTime()>b){window.clearInterval(this.zb);g.lr(this.ba);this.ba=window.NaN;this.g.Fd=!0;this.A.Fd=!0;fL(this);this.A.experiments.g("html5_ignore_playing_evt")&&
g.T(this.o,8)&&pK(this,HE(this.o,65));if(this.C){a=this.C;if(!a.B){a.g.g.experiments.g("disable_embedpage_playback_logging")||16623!=a.g.videoData.rootVeType||fr(Error("Playback for EmbedPage"));b=sF(a,"playback");a.I=[10+a.g.videoData.ih,10,10,40+a.g.videoData.si-a.g.videoData.ih,40];var c=a.o;window.clearInterval(c.F);c.F=window.NaN;c.F=g.kr((0,g.A)(c.update,c),100);c.C=g.$E(c.l);c.A=SE(c.l);b.l=rF(a,!0);b.Ka=!0;b.send();a.g.videoData.Wk&&(b=a.g.g,c=a.g.videoData,c={html5:"1",video_id:c.videoId,
cpn:c.clientPlaybackNonce,plid:c.playbackId,ei:c.eventId,ptk:c.Wk,oid:c.Su,ptchn:c.Ru,pltype:c.Tu,content_v:VD(c,b)},b=g.Jg(b.baseYtUrl+"ptracking",c),vF(a,b));a.g.videoData.enableCardio&&(a.pl("playback"),a.A||yF(a));a.g.videoData.je||xF(a);a.B=!0;a=a.o;a.g=a.l.l();a.C=g.$E(a.l);!(0==a.o&&5>a.g)&&2<a.g-a.o&&(a.o=a.g)}g.jr((0,g.A)(this.Ro,this),4500)}this.O("playbackstarted");g.Pt()&&((a=g.z("yt.scheduler.instance.clearPriorityThreshold"))?a():Rt(0));return!0}}return!1};
g.h.WE=function(){this.Ec&&(this.wa.Pa(this.Ec),delete this.Ec,this.Pi())};
g.h.lz=function(){if(this.l){var a=this.A.experiments.g("html5_ignore_playing_evt");if(!a||!g.T(this.o,128)){var b=this.getCurrentTime();a&&g.T(this.o,8)&&cE(this.Ma,b)?pK(this,HE(this.o,1)):g.T(this.o,8)&&dE(this.Ma,b,g.It(),uE(this.l))?(a=this.getDuration(),!this.g.oa&&a&&1.1>Math.abs(a-b)?this.l.g.loop?xK(this,0,!0):eK(this):(g.LE(this.o)||lL(this,"progress_fix"),pK(this,GE(this.o,1)))):g.T(this.o,4)&&g.LE(this.o)&&5<uE(this.l)&&pK(this,HE(this.o,1));bL(this)}}};
g.h.Ly=function(){return this.B?TH(this.B.H):Vz(this.A.schedule)};
g.h.Vq=function(){return this.l?uE(this.l):0};
g.h.Oy=function(){return this.A.schedule.H};
g.h.ar=function(){if(!(this.g.oa&&this.g.ka&&this.B&&MK(this)&&this.o.gb()))return window.NaN;var a=this.g.Ib()?this.B.kt():this.g.ka.H;return(0,g.H)()/1E3-cL(this)-a};
g.h.nI=function(){var a;if(a=g.T(this.o,1)&&this.B){a=this.B;var b=this.getCurrentTime();a=!(!a.o||Cx(a.o)||Dx(a.o)||dJ(b,a.g,a.o.l)&&dJ(b,a.A,a.o.g))}a&&(a=cJ(this.B),this.tc("reseek",HB({cur:a.lct,vb:a.lvb,ab:a.lab})),xK(this,this.getCurrentTime(),!0))};
g.h.Zy=function(){this.g.oa||this.O("connectionissue")};
g.h.tI=function(){this.A.experiments.g("html5_new_seeking")||this.l.yb(this.l.getCurrentTime()+.1)};
g.h.Pi=function(){var a=this,b=this.l.Oc();b&&b.then(void 0,function(){g.T(a.o,4)||hL(a,"promise")})};
g.h.gG=function(a){var b={};g.Ia(b,this.A.B);b.cpn=this.g.clientPlaybackNonce;this.g.He&&(b.vvt=this.g.He,this.g.mdxEnvironment&&(b.mdx_environment=this.g.mdxEnvironment));this.A.jc&&(b.authuser=this.A.jc);this.A.pageId&&(b.pageid=this.A.pageId);g.jc(a.C,b);rJ(a,a.U)};
g.h.xF=function(a,b,c,d){d=void 0===d?"YTP_ERROR_LICENSE":d;c=c.substr(0,256);"drm.keyerror"==a&&1<this.H.l.keys.length&&96>this.mf&&(a="drm.sessionlimitexhausted",b=!1);if(b)g.rK(this,a,d,c);else if(this.C)this.C.onError(a,c);"drm.sessionlimitexhausted"==a&&(this.mf++,kL(this))};
g.h.zF=function(){var a=this,b=this.A.experiments.l("html5_license_constraint_delay"),c=Ur();b&&c?(b=new g.P(function(){TK(a,"r");oK(a)},b),g.K(this,b),b.start()):(TK(this,"r"),oK(this))};
g.h.yF=function(){var a=this;vz&&(this.fa=qz(this.g.ka))&&(this.fa.g?g.Cf(function(){a.xu()}):eJ(this.B,this.fa))};
g.h.wA=function(a){this.O("heartbeatparams",a)};
g.h.xA=function(a){this.tc("keystatuses",DJ(a));var b=0;this.g.Ba&&(b=this.g.Ba.video.g);a:{for(var c in a.g)if("output-restricted"==a.g[c].status){a=!0;break a}a=!1}a&&480<b&&this.O("drmoutputrestricted")};
g.h.uu=function(){if(!this.g.Fd&&this.l&&!Qv()){var a="0";0<this.l.g.readyState&&5<=uE(this.l)&&this.g.Ia.g&&(pK(this,GE(this.o,1)),lL(this,"load_soft_timeout"),this.O("playbackstalledatstart"),a="1");this.C&&(a={preroll:""+ +wK(this),restartmsg:a},this.B&&g.Ia(a,cJ(this.B)),this.l&&g.Ia(a,xE(this.l)),this.C.onError("qoe.start15s",HB(a)));this.O("loadsofttimeout")}};
g.h.Ro=function(){if(!this.Wa){var a=new PJ(this.g);if("c1a"in a.l){var b=g.z("yt.abuse.botguardInitialized");b=!(b&&b())}else b=!1;if(b)g.jr((0,g.A)(this.Ro,this),4500);else{if(a.g&&a.g.wj){b=[a.g.wj];for(var c in a.o)if(a.l[c]&&a.o[c]){var d=a.o[c](a.l);d&&b.push(d)}a=b.join("&")}else a=null;a&&this.C&&(c=this.C,c.L||(b=sF(c,"atr"),b.K=a,b.send(),c.L=!0),this.Wa=!0)}}};
g.h.tb=function(){return this.A.experiments.g("html5_new_seeking")?this.F?this.F.tb():0:this.g.tb()};
g.h.rs=function(){return this.Ha};
g.h.Em=function(){if(this.l)a:{var a=this.l;var b={};if(a.g){if(a.g.getVideoPlaybackQuality){a=a.g.getVideoPlaybackQuality();break a}a.g.webkitDecodedFrameCount&&(b.totalVideoFrames=a.g.webkitDecodedFrameCount,b.droppedVideoFrames=a.g.webkitDroppedFrameCount)}a=b}else a={};return a};
g.h.tc=function(a,b,c){if(this.C){var d=this.C;d.ga()||fF(d.l,a,b,void 0===c?!1:c)}};g.r(mL,AF);g.h=mL.prototype;g.h.getPlayerType=function(){return this.playerType};
g.h.getRootNode=function(){return g.uL(this).element};
g.h.Ce=function(){return this.app.C};
g.h.Y=function(a){return(a=g.V(this.app,a||this.playerType))&&a.g};
g.h.isWidescreen=function(){return this.app.isWidescreen()};
g.h.Oc=function(a){3==this.Ca()?g.sL(this.app.A).yi("control_play"):rW(this.app,a)};
g.h.cf=function(a){aL(g.V(this.app,a))};
g.h.addEventListener=function(a,b){this.app.ba.subscribe(a,b)};
g.h.removeEventListener=function(a,b){this.app.ba.unsubscribe(a,b)};
g.h.Fi=function(a){this.it(a,a)};
g.h.Bi=function(a){return TV(this.app,a)};
g.h.getVideoUrl=function(a,b,c,d){var e=this.Ca(),f=2==e;if(d&&f||3==e)f=!1,e=1;d=this.Y(e);if(!d)return"";var k;a||d.oa||(k=Math.floor(this.getCurrentTime(e)));return this.app.g.getVideoUrl(d.videoId,f?void 0:this.getPlaylistId()||void 0,k,b,c)};
g.h.Hi=function(a,b,c){var d=g.nL(this).A;d&&d.Jn(a,b,c)};
g.h.qc=function(){if(g.U(this).P)return!1;var a=g.V(this.app,1);if(!a)return!1;var b=a.g;return b.Nc()&&!g.PD(b)&&2!=this.Ca()&&(!wK(a)||3==this.Ca())};
g.h.Hg=function(a,b){var c=this.app,d=g.V(c,this.playerType);d&&c.g.Mb.has(a.toString())?d.C?(c=sF(d.C,"engage"),c.C=a,c.send(b)):b&&b():b&&b()};
g.h.Be=function(a,b){RV(this.app,a,b)};
g.h.setVolume=function(a){a=g.Uc(a,0,100);Iv(this.app,{volume:a,muted:this.isMuted()},!0)};
g.h.mute=function(){Iv(this.app,{muted:!0,volume:this.getVolume()},!0)};
g.h.De=function(){Iv(this.app,{muted:!1,volume:Math.max(5,this.getVolume())},!0)};
g.h.sc=function(a){g.U(this).F&&this.app.L.click(a)};
g.h.Va=function(a,b){if(g.U(this).F){var c=this.app.L,d=a.getAttribute("data-visual-id");g.Sa(c.g,a);b?g.Va(c.l,d):g.Xa(c.l,d);b&&!g.Sa(c.o,d)&&(QL(c,"onLogVesShown",{ids:[d]}),g.Va(c.o,d))}};
g.h.gi=function(){return g.V(this.app)};UL.prototype.fetch=function(a){var b=this,c=a.match(/\[(?:BISCOTTI|MUTSU)_ID\]/g);if(!c)return WL(this,a);var d=c.includes("[BISCOTTI_ID]");c=c.includes("[MUTSU_ID]");var e=1===this.l;e&&(d&&VL(this,"a_bid_s"),c&&VL(this,"a_mid_s"));var f=d?qaa():"",k=c?saa():"";if(null!==f&&null!==k)return e&&(d&&VL(this,"a_bid_f"),c&&VL(this,"a_mid_f")),WL(this,a,f,k);f=d?raa():Mf("");k=c?taa():Mf("");e&&(d&&Tf(f,function(){return VL(b,"a_bid_f")}),c&&Tf(k,function(){return VL(b,"a_mid_f")}));
return g.Rf([f,k]).then(function(c){return WL(b,a,c[0],c[1])})};var wca={NL:"replaceUrlMacros",SK:"isExternalShelfAllowedFor"};g.F(g.XL,g.R);g.h=g.XL.prototype;g.h.load=function(){this.loaded=!0};
g.h.unload=function(){this.loaded=!1};
g.h.Dc=function(){return!0};
g.h.T=function(){this.loaded&&this.unload();g.XL.ua.T.call(this)};
g.h.Mw=function(){return{}};g.r(ZL,g.EF);eM.prototype.showCompanion=function(a,b,c){return fM(this).then(function(){return jM(a,b,c)})};lM.prototype.showCompanion=function(a,b){b.contentVideoId||(b.contentVideoId=a);this.l.la("updatekevlarcompanion",b)};mM.prototype.P=function(){return!1};g.r(pM,mM);pM.prototype.g=function(){return!0};
pM.prototype.isListed=function(){return this.F};
pM.prototype.isSkippable=function(){return null!=this.R};
pM.prototype.P=function(){return!0};g.r(qM,mM);qM.prototype.g=function(){return!1};g.r(rM,mM);rM.prototype.g=function(){return!1};g.r(sM,mM);sM.prototype.g=function(){return!0};g.r(uM,mM);uM.prototype.g=function(){return!1};var Baa=1;g.r(g.xM,g.J);g.xM.prototype.ca=function(a,b){g.ua(b)?Cd(a,this.element,b):a.appendChild(this.element)};
g.xM.prototype.update=function(a){for(var b in a)this.updateValue(b,a[b])};
g.xM.prototype.updateValue=function(a,b){var c=this.Ha["{{"+a+"}}"];c&&zM(this,c[0],c[1],b)};
g.xM.prototype.T=function(){this.Z={};this.Ha={};g.AM(this);g.J.prototype.T.call(this)};g.r(BM,mM);g.r(g.W,g.xM);g.h=g.W.prototype;g.h.sb=function(a,b){this.updateValue(b||"content",a)};
g.h.show=function(){this.aa||(g.CM(this.element,""),this.aa=!0)};
g.h.hide=function(){this.aa&&(g.CM(this.element,"none"),this.aa=!1)};
g.h.Na=function(){return this.aa};
g.h.ea=function(a,b,c){return this.M(this.element,a,b,c)};
g.h.M=function(a,b,c,d){c=(0,g.A)(c,d||this);d={target:a,type:b,listener:c};this.U.push(d);a.addEventListener(b,c);return d};
g.h.Pa=function(a){for(var b=0;b<this.U.length;b++)if(this.U[b]==a){a=this.U.splice(b,1)[0];a.target.removeEventListener(a.type,a.listener);break}};
g.h.focus=function(){g.Od(this.element);this.element.focus()};
g.h.T=function(){for(;this.U.length;){var a=this.U.pop();a.target.removeEventListener(a.type,a.listener)}g.xM.prototype.T.call(this)};KM.prototype.Jc=function(a,b){var c=this;a.forEach(function(a){return c.ng(a,b)})};
KM.prototype.ng=function(a,b){(a.loggingUrls||a.urlEndpoint&&a.urlEndpoint.url)&&MM(a,b);a.adLifecycleCommand&&Caa(this,a.adLifecycleCommand)};g.r(OM,g.W);OM.prototype.Jc=function(a){a=void 0===a?null:a;null!=a&&NM(a,this.g)};
OM.prototype.ng=function(a){a=void 0===a?null:a;null!=a&&MM(a,this.g)};g.r(PM,OM);PM.prototype.A=function(a){g.Ts(a);this.Jc(this.l.onClickCommands);this.ng(this.l.clickthroughEndpoint)};g.r(QM,BM);QM.prototype.g=function(){return!1};
QM.prototype.B=function(){var a=new kM;a.imageCompanionAdRenderer=this.l;return a};
QM.prototype.A=function(){return this.C};
QM.prototype.o=function(a,b){return new PM(a,this.l,b)};g.r(RM,mM);RM.prototype.g=function(){return!0};g.r(TM,mM);TM.prototype.g=function(){return!1};g.r(VM,mM);VM.prototype.g=function(){return!0};g.r(ZM,mM);ZM.prototype.g=function(){return!0};g.r($M,mM);$M.prototype.g=function(){return!0};g.r(aN,mM);aN.prototype.g=function(){return!0};g.r(cN,tM);g.r(dN,mM);dN.prototype.g=function(){return!1};g.r(eN,OM);eN.prototype.A=function(){this.Jc(this.l.onClickCommands)};g.r(fN,BM);fN.prototype.g=function(){return!1};
fN.prototype.B=function(){var a=new xaa;a.url=this.l.iframeUrl||null;a.width=this.l.iframeWidth||0;a.height=this.l.iframeHeight||0;var b=gN(this.l.impressionCommands||[]);a.impressionTrackingUrls=b;b=gN(this.l.onClickCommands||[]);a.clickTrackingUrls=b;b=new kM;b.iframeCompanionRenderer=a;return b};
fN.prototype.A=function(){return[new g.ad(300,60)]};
fN.prototype.o=function(a){return new eN(a,this.l)};hN.prototype.Kc=function(){return this.V};var Maa=["FINAL","CPN","MIDROLL_POS","SDKV","SLOT_POS"];g.r(sN,g.R);sN.prototype.dispose=function(){this.g.clear();g.R.prototype.dispose.call(this)};
var tN=null;g.y("ytads.bulleit.getVideoMetadata",function(a){return(a=uN().g.get(a))?a.qt():{}},void 0);
g.y("ytads.bulleit.triggerExternalActivityEvent",function(a,b,c){var d=uN();c=Naa(c);null!=c&&d.O(c,{queryId:a,viewabilityString:b})},void 0);g.r(AN,g.J);g.r(BN,g.J);g.r(JN,g.R);g.h=JN.prototype;g.h.qt=function(){return{}};
g.h.mn=function(){return!1};
g.h.getDuration=function(){return this.g.getDuration(2)};
g.h.nk=function(){CN(this.l,"pause")};
g.h.pk=function(){if(!this.U){this.F||this.ac();var a=this.l;a.l.hasOwnProperty("pause")&&CN(a,"resume")}};
g.h.Hf=function(){var a=this.l;GN(a,0,!0);HN(a,0,0,!0);CN(a,"complete")};
g.h.Xd=function(){var a=this.l;!a.l.hasOwnProperty("impression")||a.l.hasOwnProperty("skip")||a.l.hasOwnProperty("complete")||IN(a,"abandon")};
g.h.Ve=function(){IN(this.l,"skip")};
g.h.ac=function(){var a=ON(this);this.l.g.AD_CPN=a;DN(this.l);this.F=!0};
g.h.bd=function(a){var b=this.l;b.g=pN(b.g,nN(3,"There was an error playing the video ad. Error code: "+a));CN(b,"error")};
g.h.av=function(){this.O("b")};
g.h.bv=function(){this.O("f")};
g.h.cv=function(){this.O("g")};
g.h.dv=function(){this.O("h")};
g.h.ev=function(){this.O("i")};
g.h.fv=function(){this.O("j")};
g.h.gv=function(){this.O("n")};
g.h.dispose=function(){if(!this.ga()){NN(this);this.A.unsubscribe("b",this.av,this);this.A.unsubscribe("f",this.bv,this);this.A.unsubscribe("g",this.cv,this);this.A.unsubscribe("h",this.dv,this);this.A.unsubscribe("i",this.ev,this);this.A.unsubscribe("j",this.fv,this);this.A.unsubscribe("n",this.gv,this);for(var a=this.A,b=[],c=g.q(a.g),d=c.next();!d.done;d=c.next()){d=g.q(d.value);var e=d.next().value;d.next().value==this&&b.push(e)}b=g.q(b);for(c=b.next();!c.done;c=b.next())a.g["delete"](c.value);
g.R.prototype.dispose.call(this)}};g.r(PN,cM);g.r(RN,JN);RN.prototype.ub=function(){var a=new PN(this.I.l,this.macros),b=this.g.Y(2);!b||b.ye?(this.o=this.B.bind(this,a),this.g.addEventListener("videodatachange",this.o)):b.profilePicture&&b.channelBanner&&(SN(b,a),MN(this,[a]))};
RN.prototype.B=function(a,b,c,d){c&&2==d&&(this.o&&(this.g.removeEventListener("videodatachange",this.o),this.o=null),c.profilePicture&&c.channelBanner&&(SN(c,a),MN(this,[a])))};
RN.prototype.ad=function(){};
RN.prototype.T=function(){this.o&&(this.g.removeEventListener("videodatachange",this.o),this.o=null);JN.prototype.T.call(this)};g.r(TN,cM);g.r(UN,JN);g.h=UN.prototype;g.h.ub=function(){0<this.o&&this.ac()};
g.h.ac=function(){this.xa=new g.P(g.B(this.ot,"e"),this.o,this);g.K(this,this.xa);this.xa.start();MN(this,[new TN(this.B.l,this.macros)]);JN.prototype.ac.call(this)};
g.h.Xd=function(){JN.prototype.Xd.call(this);this.ot("a")};
g.h.ot=function(a){this.xa&&this.xa.stop();"e"==a&&this.Hf();NN(this);this.O(a)};
g.h.ad=function(){};g.r(VN,cM);g.r(WN,JN);WN.prototype.ub=function(){var a=new VN(this.I.l,this.macros);MN(this,[a])};
WN.prototype.ad=function(){};g.r(XN,JN);XN.prototype.ub=function(){var a=ON(this);this.l.g.AD_CPN=a;DN(this.l)};
XN.prototype.ad=function(){};g.r(YN,cM);g.r(ZN,JN);ZN.prototype.ub=function(){var a=new YN(this.o.l,this.macros);MN(this,[a])};
ZN.prototype.ad=function(){};g.r($N,cM);g.r(aO,JN);g.h=aO.prototype;g.h.ub=function(){this.ac()};
g.h.ac=function(){MN(this,[new $N(this.o.l)]);JN.prototype.ac.call(this)};
g.h.bd=function(a){JN.prototype.bd.call(this,a);NN(this);this.O("e")};
g.h.Ve=function(){JN.prototype.Ve.call(this);NN(this);this.O("e")};
g.h.ad=function(a){switch(a){case "persisting-skip-button":this.Ve()}};g.r(bO,cM);g.r(cO,JN);cO.prototype.ub=function(){var a=new bO(this.o.l,this.macros);MN(this,[a])};
cO.prototype.ad=function(){};g.r(dO,cM);g.r(eO,JN);eO.prototype.ub=function(){var a=new dO(this.I.l,this.macros);MN(this,[a])};
eO.prototype.ad=function(){};g.r(fO,cM);g.r(gO,JN);g.h=gO.prototype;g.h.mn=function(){return!0};
g.h.ub=function(){this.F?this.o&&(this.o.g=!0,Qaa(this,[this.o])):this.ac()};
g.h.ac=function(){this.o=new fO(this.B.A);this.o.g=this.B.o;MN(this,[this.o]);JN.prototype.ac.call(this)};
g.h.getDuration=function(){return this.B.l};
g.h.Xd=function(){JN.prototype.Xd.call(this);NN(this);this.O("a")};
g.h.Ve=function(){JN.prototype.Ve.call(this);NN(this);this.O("e")};
g.h.bd=function(a){JN.prototype.bd.call(this,a);NN(this);this.O("e")};
g.h.ad=function(a){switch(a){case "ad-info-icon-button":case "toggle-button":this.nk();break;case "skip-button":this.Ve();break;case "ad-feedback-dialog-close-button":case "ad-feedback-dialog-confirm-button":case "survey-submit":NN(this),this.O("e")}};g.r(hO,cM);g.r(iO,JN);g.h=iO.prototype;g.h.ub=function(){this.ac()};
g.h.ac=function(){MN(this,[new hO(this.o.l,this.macros)]);JN.prototype.ac.call(this)};
g.h.Xd=function(){JN.prototype.Xd.call(this);NN(this);this.O("a")};
g.h.bd=function(a){JN.prototype.bd.call(this,a);NN(this);this.O("e")};
g.h.ad=function(){};g.r(jO,cM);g.r(kO,JN);g.h=kO.prototype;g.h.ub=function(){0<this.o&&this.ac()};
g.h.ac=function(){this.xa=new g.P(this.Hf,this.o,this);g.K(this,this.xa);this.xa.start();MN(this,[new jO(this.B.l)]);JN.prototype.ac.call(this)};
g.h.Hf=function(){JN.prototype.Hf.call(this);lO(this,"e")};
g.h.Xd=function(){JN.prototype.Xd.call(this);lO(this,"a")};
g.h.bd=function(a){JN.prototype.bd.call(this,a);lO(this,"e")};
g.h.ad=function(){};g.r(mO,cM);g.r(nO,cM);g.r(oO,cM);g.r(pO,cM);g.r(qO,cM);g.r(rO,cM);g.r(sO,cM);g.r(tO,JN);g.h=tO.prototype;g.h.oy=function(a){if((a=JSON.parse(a.response))&&a.items&&a.items.length){a=a.items[0].snippet;if(a){var b=a.title;var c=g.Yb(a,"thumbnails","default","url")}(a=this.o.V)&&b&&c?c=[new pO(a),new nO(c),new qO(b)]:(g.Q(Error("Channel metadata contains null for "+(a?b?"channel icon thumbnail.":"channel name.":"video title."))),c=[]);MN(this,c)}};
g.h.qt=function(){var a=this.g.getCurrentTime(2),b=this.o.o;var c=this.g;c=vN(c)&&1==c.qh(2);return{currentTime:a,duration:b,isPlaying:c,isVpaid:!1,isYouTube:!0,volume:this.g.getVolume()/100}};
g.h.mn=function(){return!0};
g.h.ub=function(){var a=this.o.A.legacyInfoCardVastExtension,b=this.o.K;a&&b&&g.U(this.g).L.add(b,{Ij:a});zN(this.g,!1);a=wN(this.o);this.B.start();this.g.Gi(a,!0,2)};
g.h.nk=function(){JN.prototype.nk.call(this);this.O("k",2)};
g.h.pk=function(){JN.prototype.pk.call(this);this.O("l",1)};
g.h.ac=function(){JN.prototype.ac.call(this);this.B.stop();var a=this.C,b=this.g.Y(2);a.bo=b?b.clientPlaybackNonce:null;this.o.isListed()&&this.o.B&&(a=g.Jg("https://www.googleapis.com/youtube/v3/channels",{id:this.o.B,part:"snippet",fields:"items/snippet/title,items/snippet/thumbnails/default/url",key:"AIzaSyA-dlBUjVQeuc4a6ZN4RkNUYDFddrVLxrA"}),b={timeout:2E3,method:"GET"},b.ib=(0,g.A)(this.oy,this),g.Ar(a,b));a=[];a.push(Saa(this));b=this.o.C;if(null==b)b=null;else{var c={};b.urlEndpoint&&(c.url=
b.urlEndpoint.url,c.target="TARGET_NEW_WINDOW");b=new sO({navigationEndpoint:{urlEndpoint:c}})}b&&a.push(b);b=1E3*this.o.o;b=0<b&&7050>=b;this.o.isSkippable()&&!b&&(b=wO(this),(b=b.skipOrPreviewRenderer&&b.skipOrPreviewRenderer.skipAdRenderer)||(b=uO(this)),a.push(new oO(b)));b=wO(this);a.push(new rO(b));MN(this,a);this.g.isMuted()&&(a=this.g.isMuted(),CN(this.l,a?"mute":"unmute"));this.O("l",1)};
g.h.Hf=function(){JN.prototype.Hf.call(this);xO(this,"e")};
g.h.Xd=function(){JN.prototype.Xd.call(this);xO(this,"a")};
g.h.Ve=function(){JN.prototype.Ve.call(this);xO(this,"e")};
g.h.bd=function(a){JN.prototype.bd.call(this,a);xO(this,"e")};
g.h.dz=function(){this.bd("net.timeout")};
g.h.ad=function(a){switch(a){case "ad-mute-confirm-dialog-confirm-button":case "ad-feedback-dialog-close-button":case "ad-feedback-dialog-confirm-button":xO(this,"e");break;case "ad-mute-confirm-dialog-close-button":case "ad-feedback-undo-mute-button":case "ad-info-dialog-close-button":this.g.Oc();break;case "ad-info-icon-button":this.g.Wb();break;case "ad-channel-thumbnail":case "advertiser-name":a=g.U(this.g).protocol+"://"+tB(g.U(this.g))+"/channel/"+this.o.B;g.JM(a);break;case "ad-title":this.g.Wb();
g.JM(this.g.getVideoUrl());break;case "visit-advertiser":this.g.Wb();if(a=this.o.C)Paa(this.l,a.loggingUrls||null),a.urlEndpoint&&a.urlEndpoint.url&&g.JM(a.urlEndpoint.url);IN(this.l,"clickthrough");break;case "skip-button":this.Ve()}};g.r(CO,g.R);g.h=CO.prototype;g.h.Kc=function(){return this.g.Kc()};
g.h.eo=function(){return jN(this.g)};
g.h.Pm=function(a){this.H=a;$L(this.H)||(this.U&&(this.V=this.C.isPeggedToLive(),this.R=Math.ceil((0,g.H)()/1E3)),HO(this.B,[this.H]));TO(this.B,this);a=g.q(this.g.R);for(var b=a.next();!b.done;b=a.next())DO(b.value);a=g.q(this.g.K);for(b=a.next();!b.done;b=a.next())b=yO(this.C,b.value,this.L,this.B),KN(b),g.De(b);a=g.q(this.g.P);for(b=a.next();!b.done;b=a.next()){b=yO(this.C,b.value,this.L,this.B);var c=b.l;c.g=pN(c.g,nN(0,"No playable media files can be selected"));CN(c,"error");g.De(b)}this.F.l=
!1;SC("video_to_ad",["apbs"]);this.Vu()};
g.h.wk=function(){return!g.Ta(this.g.I)||!g.Ta(this.g.F)||0<this.g.C.length||0<this.g.l.length};
g.h.Kr=function(){return!!g.Ta(this.g.H)&&!this.wk()};
g.h.Vu=function(){if(0<this.g.g.length){for(var a=g.q(this.g.g),b=a.next();!b.done;b=a.next())b=b.value,0<b.H.length||(b=wN(b),this.C.Xn(b,2));this.Qi()}else 0<this.g.o.length?this.ub(this.g.o[0]):0<this.g.B.length?this.ub(this.g.B[0]):g.Ta(this.g.H)?g.Ta(this.g.I)?g.Ta(this.g.F)?0<this.g.C.length?this.ub(this.g.C[0]):this.xf():this.ub(this.g.F[0]):this.ub(this.g.I[0]):this.ub(this.g.H[0])};
g.h.vt=function(a){a=void 0===a?!1:a;this.jo(0);a||this.I?this.xf(a):this.Qi()};
g.h.YD=function(){this.l.forEach(function(a){IN(a.l,"active_view_measurable")})};
g.h.ZD=function(){this.l.forEach(function(a){IN(a.l,"active_view_fully_viewable_audible_half_duration")})};
g.h.aE=function(){this.l.forEach(function(){})};
g.h.bE=function(){this.l.forEach(function(){})};
g.h.cE=function(){this.l.forEach(function(){})};
g.h.dE=function(){this.l.forEach(function(){})};
g.h.fE=function(){this.l.forEach(function(a){IN(a.l,"active_view_viewable")})};
g.h.ho=function(a){if(0!=this.l.length){var b=a.state;g.T(b,2)?(Taa(this.F),this.l.forEach(function(a){return a.Hf()})):b.gb()?(Uaa(this.F),this.l.forEach(function(a){return a.pk()})):b.isError()?this.l.forEach(function(a){return a.bd(b.g.errorCode)}):g.T(b,4)&&this.l.forEach(function(a){return a.nk()})}};
g.h.xt=function(){};
g.h.jo=function(a){var b=this.B.g.app;1==a&&(b.I.g("vr"),b.sa||(b.sa=tC(b.ju,b)),fL(b.F),CF(b.I,lW(b)));var c=b.g;(g.EB(c)&&c.ob||g.wB(c))&&b.l.la("onAdStateChange",a)};
g.h.wt=function(a){this.B.g.la("onAdUxUpdate",a)};
g.h.fo=function(a){this.l.forEach(function(b){return b.ad(a)})};
g.h.Qi=function(){this.K++;this.K<this.P&&0<this.P?this.ub(this.g.g[this.K]):this.xf();var a=this.F,b=this.C,c=this.g.Kc().o,d=this.K,e=this.P;AO(a);var f=b.Y(1);b=b.Y(2);f&&(a.A=f.clientPlaybackNonce,a.F=f.videoId);b&&(a.B=b.clientPlaybackNonce,a.o=b.videoId);a.H=c;0>=e?AO(a):(a.I?a.g="video_to_ad":d<e?a.g="ad_to_ad":d==e&&(a.g="ad_to_video"),a.K=d+1==e,a.C=!0,a.C&&(g.GC("c",a.L,a.g),g.GC("cver",a.P,a.g),g.GC("yt_pt","html5",a.g),g.GC("yt_pre","2",a.g),g.GC("yt_abt",a.H,a.g),a.A&&g.GC("cpn",a.A,
a.g),a.F&&g.GC("docid",a.F,a.g),a.B&&g.GC("ad_cpn",a.B,a.g),a.o&&g.GC("ad_docid",a.o,a.g)))};
g.h.ub=function(a){a instanceof ZM&&(this.I=!0);this.Ov()&&(g.Ee(this.l),this.l.length=0);a=yO(this.C,a,this.L,this.B);this.l.push(a);g.K(this,a);a.subscribe("a",g.B(this.vt,!0),this);a.subscribe("b",this.YD,this);a.subscribe("e",this.vt,this);a.subscribe("f",this.ZD,this);a.subscribe("g",this.aE,this);a.subscribe("h",this.bE,this);a.subscribe("i",this.cE,this);a.subscribe("j",this.dE,this);a.subscribe("k",this.jo,this);a.subscribe("l",this.jo,this);a.subscribe("onAdUxUpdate",this.wt,this);a.subscribe("n",
this.fE,this);KN(a)};
g.h.Ov=function(){return!0};
g.h.xf=function(a){a=void 0===a?!1:a;g.Ee(this.l);this.l.length=0;this.H=null;if(!a){a=g.q(this.g.U);for(var b=a.next();!b.done;b=a.next())DO(b.value)}this.U&&this.eo()&&0<this.g.g.length?RO(this.B,Waa(this)):RO(this.B)};g.r(FO,g.R);FO.prototype.Kc=function(){return this.l.Kc()};
FO.prototype.eo=function(){return jN(this.l)};
FO.prototype.wk=function(){return!1};
FO.prototype.Pm=function(a){var b=this,c=a.A;c&&!c.g&&(c.g=!0);c=g.zo(this.l.L,this.B);this.g=a;Tf(this.A.fetch(c).then(function(a){b.ga()||aba(b,a)}),function(){$L(b.g)&&QO(b.o);
var a=b.g.A;a&&a.g&&(a.g=!1)})};g.r(IO,JN);g.h=IO.prototype;g.h.Pm=function(a){var b=this;HO(this.L,[a]);if(this.B instanceof fN){a=this.g.Y(2);if(!a||a.ye){this.o=function(a,d,e){d&&2==e&&(b.o&&(b.g.removeEventListener("videodatachange",b.o),b.o=null),d.isListed&&b.ub())};
this.g.addEventListener("videodatachange",this.o);return}if(!a.isListed)return}this.ub()};
g.h.ub=function(){var a=this;TO(this.L,this);if(xN(this.g)){var b=this.g.Y(1),c=this.B.B();null!=c&&(c.macros=Object.assign({},this.macros),this.P.showCompanion(b.videoId,c))}else{var d=this.B.A();yaa(this.P).then(function(b){a:{if(d&&b){b=g.q(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;for(var e=g.q(d),l=e.next();!l.done;l=e.next())if(l=l.value,l.width==c.width&&l.height==c.height){b=l;break a}}}b=null}b&&(c=a.B.o(a.g,b),null!=c&&(g.K(a,c),e=a.P,e.g&&e.g.showCompanion(c.element,b.width,b.height)))})}if(this.B instanceof
fN){this.C=this.Fz.bind(this);
try{window.addEventListener("message",this.C)}catch(e){g.Q(e)}}};
g.h.Fz=function(a){var b;if(b=a.data)a:{try{if(vr(a.source.document.location.origin)){b=!0;break a}}catch(d){g.Q(d)}b=!1}if(b)if(b=this.B.l,"companion-setup-complete"==a.data)try{a.source.postMessage(JSON.stringify(b),"*");var c=a.source.frameElement;c.parentNode.style.cssText="";c.width=String(b.iframeWidth);c.height=String(b.iframeHeight)}catch(d){g.Q(d)}else"pause-video"==a.data&&this.g.Wb()};
g.h.Kc=function(){return this.K.Kc()};
g.h.eo=function(){return jN(this.K)};
g.h.wk=function(){return!0};
g.h.ad=function(){};
g.h.T=function(){if(this.C)try{window.removeEventListener("message",this.C),this.C=null}catch(a){g.Q(a)}this.o&&(this.g.removeEventListener("videodatachange",this.o),this.o=null);JN.prototype.T.call(this)};g.r(JO,CO);g.h=JO.prototype;g.h.Kr=function(){return null==this.A?!1:this.A.g.some(function(a){return a.g()})};
g.h.Vu=function(){this.o&&(this.o.subscribe("e",this.xf,this),this.o.subscribe("onAdUxUpdate",this.wt,this),KN(this.o));this.Qi()};
g.h.Qi=function(){if(null!=this.A)if(this.A.g.length){var a=this.A.g.shift();this.ub(a);1==this.A.o&&this.A.g.length&&this.Qi()}else this.xf()};
g.h.xf=function(a){a=void 0===a?!1:a;this.o&&g.De(this.o);CO.prototype.xf.call(this,a)};
g.h.xt=function(){for(var a=this.l;a.length;)if(a[0].mn()){a[0].ub();break}else g.De(a.shift())};
g.h.Ov=function(){return null==this.A?!0:0==this.A.o};
g.h.ho=function(a){CO.prototype.ho.call(this,a);this.o&&(a=a.state,g.T(a,2)?this.o.Hf():a.gb()?this.o.pk():a.isError()&&this.o.bd(a.g.errorCode))};
g.h.fo=function(a){CO.prototype.fo.call(this,a);this.o&&this.o.ad(a)};var KO=null,MO=null;g.y("yt.www.ads.eventcache.getLastCompanionData",function(){return KO},void 0);
g.y("yt.www.ads.eventcache.getLastPlaShelfData",function(){return MO},void 0);g.r(PO,g.R);g.h=PO.prototype;
g.h.init=function(){var a=this.g.Y();if(a.Wl||g.cr("SERVED_VIA_SPF_HISTORY"))QO(this);else{if(xN(this.g)){var b=Hv(this.g);b.addEventListener("updatekevlarcompanion",LO);b.addEventListener("onPlaShelfInfoCardsReady",NO);window.addEventListener("yt-navigate-start",OO)}this.da.M(this.g,"applicationplayerstatechange",this.WC);b=bba(a.getPlayerResponse()||{});b=cba(this,b);if(0<b.length){GO(this,b);b=!1;for(var c=g.q(this.A),d=c.next();!d.done;d=c.next())if($L(d.value)){b=!0;break}c=g.U(this.g);if(!b&&
!g.hB(c))for(b=g.q(this.A),c=b.next();!c.done;c=b.next())c.value.g=!1}this.da.M(this.g,"crn_ad",this.co,this);this.da.M(this.g,"crx_ad",this.XC,this);a.subscribe("cuepointupdated",this.ku,this);QO(this);g.Cf(this.ZI,this)}};
g.h.T=function(){g.at(this.da);this.g.Y(1).unsubscribe("cuepointupdated",this.ku,this);if(xN(this.g)){var a=Hv(this.g);a.removeEventListener("updatekevlarcompanion",LO);a.removeEventListener("onPlaShelfInfoCardsReady",NO);window.removeEventListener("yt-navigate-start",OO);KO=null}a=g.q(this.B.values());for(var b=a.next();!b.done;b=a.next())UO(this,b.value);RO(this);this.A.clear();this.H=[];this.F=null;g.De(this.o);this.o=null;this.B.clear();g.R.prototype.T.call(this)};
g.h.co=function(a){if(!a.g){this.F=null;var b=g.tL(this.g);g.T(b,32)||g.T(b,16)?this.F=a:(b=this.B.get(a))&&b.Pm(a)}};
g.h.XC=function(a){a.g&&(a.g=!1);a==this.F&&(this.F=null)};
g.h.ku=function(a){if(null==this.I)g.Q(Error("Dynamically inserted ad was requested, but no cuepoint AdPlacementRenderer was present to fulfill the request."));else{var b=this.g.getCurrentTime()||0;a=a.filter(function(a){return 0!=b&&a.Pd>b});
GO(this,[this.I],a)}};
g.h.ZC=function(a){this.l&&this.l.ho(a)};
g.h.WC=function(a){0>QE(a,16)&&this.F&&this.co(this.F)};
g.h.aD=function(){if(vN(this.g)&&this.l){var a=this.g.getCurrentTime(2);EO(this.l,a)}};
g.h.VC=function(){this.L=!0;this.l&&Vaa(this.l)};
g.h.eE=function(a){this.l&&this.l.fo(a)};
g.h.bD=function(){2==this.g.Ca()&&this.l&&Xaa(this.l)};
g.h.YC=function(a){this.l&&Yaa(this.l,a)};
g.h.ZI=function(){for(var a=[],b=g.q(this.A),c=b.next();!c.done;c=b.next())c=c.value,$L(c)||a.push(c);c=this.g;b=c.app;(c=c.playerType)&&rL(b)!=c||IL(b,"cuerangemarkersupdated",a)};g.r(g.XO,g.W);g.XO.prototype.subscribe=function(a,b,c){return this.R.subscribe(a,b,c)};
g.XO.prototype.unsubscribe=function(a,b,c){return this.R.unsubscribe(a,b,c)};
g.XO.prototype.wc=function(a){return this.R.wc(a)};
g.XO.prototype.O=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];return this.R.O.apply(this.R,[].concat([a],g.qa(c)))};g.r(YO,g.J);YO.prototype.Oh=function(a){this.ha().appendChild(a)};
g.r($O,YO);$O.prototype.ha=function(){return this.g};g.r(X,g.XO);g.h=X.prototype;g.h.vj=function(a){ZO(a,this.fa)};
g.h.bind=function(a){if(this.K)this.Nk(a);else if(a.renderer){var b=Object.assign({},aP(this.g,this.l),a.macros);this.init(a.id,a.renderer,b,a)}return window.Promise.resolve()};
g.h.init=function(a,b,c){this.K=a;this.element.setAttribute("id",this.K);this.X&&g.M(this.element,this.X);this.macros=c;this.H=b.trackingParams||null;null!=this.H&&eP(this,this.element,this.H)};
g.h.Nk=function(){};
g.h.clear=function(){};
g.h.hide=function(){g.XO.prototype.hide.call(this);null!=this.H&&this.Va(this.element,!1)};
g.h.show=function(){g.XO.prototype.show.call(this);null!=this.H&&this.Va(this.element,!0)};
g.h.onClick=function(){if(null!=this.H){var a=this.element;SL(this.g,a)&&this.Na()&&this.g.sc(a)}};
g.h.getImageUrl=function(a){a=void 0===a?null:a;return null==a||(a=a.thumbnail,null==a||null==a.thumbnails||g.Ta(a.thumbnails)||null==a.thumbnails[0].url)?"":g.Gb(a.thumbnails[0].url)};
g.h.Va=function(a,b){SL(this.g,a)&&this.g.Va(a,b)};
g.h.T=function(){this.clear(null);g.XO.prototype.T.call(this)};g.r(gP,X);gP.prototype.init=function(a,b,c){var d=b.thumbnail;d=d&&fP(d)||"";g.sb(d)?g.Q(Error("Found AdImage without valid image URL"),"WARNING"):(g.ld(this.element,{src:d}),X.prototype.init.call(this,a,b,c),this.show())};
gP.prototype.clear=function(){this.hide()};g.r(hP,X);hP.prototype.init=function(a,b,c){this.o=b;this.isTemplated()||g.Ld(this.element,bP(this.o));X.prototype.init.call(this,a,b,c);this.show()};
hP.prototype.isTemplated=function(){return this.o.isTemplated||!1};
hP.prototype.clear=function(){this.hide()};g.r(GP,X);
GP.prototype.init=function(a,b,c){this.B=b;if(null==b.text&&null==b.icon)g.Q(Error("ButtonRenderer did not have text or an icon set."),"WARNING");else{switch(b.style||null){case "STYLE_UNKNOWN":var d="ytp-ad-button-link";break;default:d=null}null!=d&&g.M(this.element,d);null!=b.text&&(d=g.iD(b.text),g.sb(d)||(this.element.setAttribute("aria-label",d),this.C=new g.XO({D:"span",J:"ytp-ad-button-text",G:[d]}),g.K(this,this.C),this.C.ca(this.element)));null!=b.icon&&(d=FP(b.icon),null!=d&&(this.A=new g.XO({D:"span",
J:"ytp-ad-button-icon",G:[d]}),g.K(this,this.A)),this.F?Cd(this.element,this.A.element,0):this.A.ca(this.element));X.prototype.init.call(this,a,b,c)}};
GP.prototype.clear=function(){this.hide()};
GP.prototype.onClick=function(a){X.prototype.onClick.call(this,a);NM(HP(this),this.macros);this.g.ae(this.componentType)};g.r(IP,X);g.h=IP.prototype;
g.h.init=function(a,b,c){var d=this;X.prototype.init.call(this,a,b,c);this.o&&(this.o.cancel(),this.o=null);this.o=new g.If(g.va);b.bannerImage?b.iconImage?b.headline?b.description?b.actionButton&&b.actionButton.buttonRenderer?b.navigationEndpoint?(this.B.init(bM("ad-image"),b.bannerImage,c),this.L.init(bM("ad-image"),b.iconImage,c),this.F.init(bM("ad-text"),b.headline,c),this.C.init(bM("ad-text"),b.description,c),this.A.init(bM("button"),b.actionButton.buttonRenderer,c),g.Ld(this.Z["yt-badge-ad"],
g.S("YTP_AD_BADGE")),this.P=b.impressionCommands||[],this.I=b.navigationEndpoint,this.da.M(this.element,"click",this.onClick,this),window.Promise.race([this.o,this.ba.showCompanion(this.element,300,250)]).then(function(){return d.show()})):g.Q(Error("ActionCompanionAdRenderer has no navigation endpoint.")):g.Q(Error("ActionCompanionAdRenderer has no button.")):g.Q(Error("ActionCompanionAdRenderer has no description string.")):g.Q(Error("ActionCompanionAdRenderer has no headline string.")):g.Q(Error("ActionCompanionAdRenderer has no icon image.")):
g.Q(Error("ActionCompanionAdRenderer has no banner image."))};
g.h.clear=function(){g.at(this.da);this.hide()};
g.h.show=function(){this.A.show();X.prototype.show.call(this);NM(this.P,this.macros)};
g.h.hide=function(){this.A.hide();X.prototype.hide.call(this)};
g.h.onClick=function(a){X.prototype.onClick.call(this,a);this.I&&MM(this.I,this.macros)};
g.h.T=function(){this.o&&(this.o.cancel(),this.o=null);X.prototype.T.call(this)};g.r(JP,g.J);JP.prototype.T=function(){this.C&&g.rt(this.C);this.o&&(this.o.cancel(),this.o=null);this.B&&g.rt(this.B);this.g&&(this.g.cancel(),this.g=null);this.l&&(this.l.cancel(),this.l=null);this.A&&(this.A.stop(),this.A=null);g.J.prototype.T.call(this)};g.r(PP,X);PP.prototype.init=function(a,b,c){var d=this;X.prototype.init.call(this,a,b,c);this.o&&(this.o.cancel(),this.o=null);this.o=new g.If(g.va);"BACKFILL_MPU_TYPE_AFV"==b.type?window.Promise.race([this.o,iba(this.A)]).then(function(){NM(b.impressionEndpoints||[],d.macros)}):"BACKFILL_MPU_TYPE_AFC"==b.type&&(b.mpuAllowed?window.Promise.race([this.o,
jba(this.A)]).then(function(){NM(b.impressionEndpoints||[],d.macros)},function(){NM(b.noAdEndpoints||[],d.macros)}):NM(b.noAdEndpoints||[],this.macros))};
PP.prototype.T=function(){this.o&&(this.o.cancel(),this.o=null);X.prototype.T.call(this)};var wba={seekableStart:0,seekableEnd:1,current:0};g.r(QP,X);QP.prototype.clear=function(){this.dispose()};g.r(TP,QP);g.h=TP.prototype;g.h.init=function(a,b,c){QP.prototype.init.call(this,a,b,c);g.lh(this.B,"stroke-dasharray","0 "+this.A);this.show()};
g.h.clear=function(){this.hide()};
g.h.hide=function(){SP(this);QP.prototype.hide.call(this)};
g.h.show=function(){RP(this);QP.prototype.show.call(this)};
g.h.Zk=function(){this.hide()};
g.h.Ri=function(){if(this.o){var a=this.o.g();null!=a&&null!=a.current&&g.lh(this.B,"stroke-dasharray",a.current/a.seekableEnd*this.A+" "+this.A)}};g.r(UP,g.R);UP.prototype.stop=function(){this.xa.stop()};
UP.prototype.C=function(){var a=(0,g.H)()-this.F,b=!1;a>this.l&&(a=this.l,this.xa.stop(),b=!0);this.o={seekableStart:0,seekableEnd:this.l/1E3,current:a/1E3};if(this.A){a=this.A;var c=this.o.current;a.l&&EO(a.l,c)}this.O("p");b&&this.O("o")};
UP.prototype.g=function(){return this.o};g.r(VP,X);g.h=VP.prototype;
g.h.init=function(a,b,c){X.prototype.init.call(this,a,b,c);if(b.image&&b.image.thumbnail)if(b.headline)if(b.description)if(b.background)if(b.actionButton&&b.actionButton.buttonRenderer)if(a=b.durationMilliseconds||0,!g.ua(a)||0>=a)g.Q(Error("durationMilliseconds was specified incorrectly in AdActionInterstitialRenderer with a value of: "+a));else if(b.navigationEndpoint){var d=this.g.Y(2);if(null!=d){var e=b.image.thumbnail.thumbnails;null!=e&&0<e.length&&g.sb(g.Gb(e[0].url))&&(e[0].url=d.profilePicture);
e=b.background.thumbnails;null!=e&&0<e.length&&g.sb(g.Gb(e[0].url))&&(e[0].url=d.kc(g.U(this.g)));e=b.headline;null!=e&&g.sb(g.Gb(e.text))&&(e.text=d.author)}this.C.init(bM("ad-image"),b.image,c);this.I.init(bM("ad-text"),b.headline,c);this.F.init(bM("ad-text"),b.description,c);d=(d=b.background)&&fP(d)||"";g.sb(d)?fr(Error("Found ThumbnailDetails without valid image URL")):g.lh(this.P,"backgroundImage","url("+d+")");this.o=new GP(this.g,this.l,["ytp-ad-action-interstitial-action-button"]);g.K(this,
this.o);this.o.ca(this.A);this.o.init(bM("button"),b.actionButton.buttonRenderer,c);this.L=b.navigationEndpoint;this.da.M(this.P,"click",this.onClick,this);this.B=new UP(a);g.K(this,this.B);(b=b.countdownRenderer)&&b.timedPieCountdownRenderer&&this.B&&(c=new TP(this.g,this.l,this.B),g.K(this,c),c.ca(this.element),c.init(bM("timed-pie-countdown"),b.timedPieCountdownRenderer,this.macros));this.show()}else g.Q(Error("AdActionInterstitialRenderer has no navigation endpoint."));else g.Q(Error("AdActionInterstitialRenderer has no button."));
else g.Q(Error("AdActionInterstitialRenderer has no background."));else g.Q(Error("AdActionInterstitialRenderer has no description AdText."));else g.Q(Error("AdActionInterstitialRenderer has no headline AdText."));else g.Q(Error("AdActionInterstitialRenderer has no image."))};
g.h.clear=function(){g.at(this.da);this.hide()};
g.h.show=function(){this.Wi(!0);this.o&&this.o.show();X.prototype.show.call(this)};
g.h.hide=function(){this.Wi(!1);this.o&&this.o.hide();X.prototype.hide.call(this)};
g.h.onClick=function(a){X.prototype.onClick.call(this,a);this.L&&MM(this.L,this.macros)};
g.h.Wi=function(a){var b=g.jd("html5-video-player");b&&g.O(b,"ytp-ad-display-override",a)};g.r(WP,X);g.h=WP.prototype;g.h.init=function(a,b,c){X.prototype.init.call(this,a,b,c);b.text?(a=b.durationMilliseconds||0,!g.ua(a)||0>=a?g.Q(Error("durationMilliseconds was specified incorrectly in AdTextInterstitialRenderer with a value of: "+a)):(this.o.init(bM("ad-text"),b.text,c),this.show())):g.Q(Error("AdTextInterstitialRenderer has no message AdText."))};
g.h.clear=function(){this.hide()};
g.h.show=function(){this.Wi(!0);X.prototype.show.call(this)};
g.h.hide=function(){this.Wi(!1);X.prototype.hide.call(this)};
g.h.onClick=function(){};
g.h.Wi=function(a){var b=g.jd("html5-video-player");b&&g.O(b,"ytp-ad-display-override",a)};g.r(YP,X);g.h=YP.prototype;
g.h.init=function(a,b,c){this.o=b;this.I=g.ab(this.o.onClickCommands||[]);var d;if(d=this.o.contentSupportedRenderer)if(d=this.o.contentSupportedRenderer,this.clear(),d.textOverlayAdContentRenderer){d=d.textOverlayAdContentRenderer;var e=bP(d.title),f=bP(d.description);g.sb(e)||g.sb(f)?d=!1:(eP(this,this.C.element,d.trackingParams||null),this.C.updateValue("title",bP(d.title)),this.C.updateValue("description",bP(d.description)),this.C.updateValue("displayUrl",bP(d.displayUrl)),d.navigationEndpoint&&
bb(this.I,d.navigationEndpoint),ZP(this,this.C),this.C.show(),this.Va(this.C.element,!0),d=!0)}else if(d.enhancedTextOverlayAdContentRenderer)d=d.enhancedTextOverlayAdContentRenderer,e=bP(d.title),f=bP(d.description),g.sb(e)||g.sb(f)?d=!1:(eP(this,this.A.element,d.trackingParams||null),this.A.updateValue("title",bP(d.title)),this.A.updateValue("description",bP(d.description)),this.A.updateValue("displayUrl",bP(d.displayUrl)),this.A.updateValue("imageUrl",this.getImageUrl(d.image)),d.navigationEndpoint&&
bb(this.I,d.navigationEndpoint),this.L=d.imageNavigationEndpoint||null,ZP(this,this.A),this.A.show(),this.Va(this.A.element,!0),d=!0);else if(d.imageOverlayAdContentRenderer){d=d.imageOverlayAdContentRenderer;b:{e=d.image;e=void 0===e?null:e;if(null!=e&&(e=e.thumbnail,null!=e&&null!=e.thumbnails&&!g.Ta(e.thumbnails)&&null!=e.thumbnails[0].width&&null!=e.thumbnails[0].height)){e=new g.ad(e.thumbnails[0].width||0,e.thumbnails[0].height||0);break b}e=new g.ad(0,0)}0==e.width||0==e.height?d=!1:(eP(this,
this.B.element,d.trackingParams||null),this.B.updateValue("imageUrl",this.getImageUrl(d.image)),this.B.updateValue("width",e.width),this.B.updateValue("height",e.height),d.navigationEndpoint&&bb(this.I,d.navigationEndpoint),g.lh(this.B.Z["ytp-ad-image-overlay"],"max-width",e.width+"px"),ZP(this,this.B),this.B.show(),this.Va(this.B.element,!0),(new g.P(this.clear,45E3,this)).start(),d=!0)}else d=!1;d&&(X.prototype.init.call(this,a,b,c),this.F.start(),this.show(),$P(this,!0),NM(this.o&&this.o.impressionCommands?
this.o.impressionCommands:[],this.macros))};
g.h.clear=function(){$P(this,!1);this.F.reset();this.C.hide();this.Va(this.C.element,!1);this.A.hide();this.Va(this.A.element,!1);this.B.hide();this.Va(this.B.element,!1);this.hide()};
g.h.Li=function(a,b){var c=g.gc(this.macros),d=g.Ch(b,a).floor();c.I_X={toString:function(){return d.x.toString()}};
c.I_Y={toString:function(){return d.y.toString()}};
NM(this.I,c)};
g.h.pH=function(){this.L&&MM(this.L,this.macros)};
g.h.ro=function(){this.clear();a:{if(this.o&&this.o.closeButton&&this.o.closeButton.buttonRenderer){var a=this.o.closeButton.buttonRenderer;if(a.serviceEndpoint){a=[a.serviceEndpoint];break a}}a=[]}NM(a,this.macros)};
g.h.yo=function(){var a=this.o&&this.o.attributionEndpoint?this.o.attributionEndpoint:null;null!=a&&MM(a,this.macros)};
g.r(XP,g.J);g.h=XP.prototype;g.h.reset=function(){this.C=!1;this.g.stop();this.o.stop();this.l=!1;g.N(this.B,this.A)};
g.h.start=function(){this.reset();this.g.start()};
g.h.bG=function(){this.l&&(this.l=!1,g.N(this.B,this.A));this.o.stop();this.g.stop()};
g.h.YF=function(){this.C?this.o.start():this.g.start()};
g.h.Wp=function(){this.l||(this.l=!0,g.M(this.B,this.A),this.C=!0)};g.r(g.aQ,g.J);g.h=g.aQ.prototype;g.h.show=function(a){1!=this.g&&2!=this.g&&(3==this.g&&this.Al(),4==this.g?(this.l.show(),this.g=null,this.o.stop()):this.l.Na()||(bQ(this,!0),this.g=1,a?this.o.start(a):this.Al()))};
g.h.hide=function(a){3!=this.g&&(1==this.g||2==this.g?(this.l.hide(),this.g=null,this.o.stop()):this.l.Na()&&(a&&(this.A=a),bQ(this,!0),this.g=3,this.o.start(this.B)))};
g.h.Al=function(){switch(this.g){case 1:this.l.show();this.g=2;this.o.start(10);break;case 2:bQ(this,!1);this.g=null;break;case 3:this.l.hide();bQ(this,!1);this.g=4;this.o.start(0);break;case 4:this.g=null,this.A&&this.A()}};
g.h.stop=function(){for(;null!=this.g&&4!=this.g;)this.o.stop(),this.Al()};
g.h.T=function(){this.l.ga()||this.l.element.removeAttribute("aria-hidden");g.J.prototype.T.call(this)};g.r(cQ,QP);g.h=cQ.prototype;
g.h.init=function(a,b,c){var d=b.durationMilliseconds;g.ua(d)&&0>d&&g.Q(Error("durationMilliseconds was specified incorrectly in AdPreviewRenderer with a value of: "+d));d=b.durationMilliseconds;this.L=null==d||0===d?1E3*this.g.getDuration(2):d;if(b.templatedCountdown)var e=b.templatedCountdown.templatedAdText;else b.staticPreview&&(e=b.staticPreview);this.A.init(bM("ad-text"),e,c);this.g.Y()&&this.g.Y().cp&&b.thumbnail?this.F.init(bM("ad-image"),b.thumbnail,c):this.I.hide();QP.prototype.init.call(this,
a,b,c);this.P.show(100);this.show()};
g.h.clear=function(){this.hide()};
g.h.hide=function(){this.B.hide();this.A.hide();this.F.hide();SP(this);QP.prototype.hide.call(this)};
g.h.show=function(){RP(this);this.B.show();this.A.show();this.F.show();QP.prototype.show.call(this)};
g.h.Zk=function(){this.hide()};
g.h.Ri=function(){if(null!=this.o){var a=this.o.g();if(null!=a&&null!=a.current)if(a=1E3*a.current,a>=this.L)dQ(this);else if(this.A&&this.A.isTemplated()&&(a=Math.max(0,Math.ceil((this.L-a)/1E3)),a!=this.ba)){var b=this.A,c={TIME_REMAINING:String(a)};null!=c&&g.Ld(b.element,bP(b.o,c));this.ba=a}}};g.r(eQ,X);g.h=eQ.prototype;
g.h.init=function(a,b,c){this.B=b;if(!b||g.cc(b))g.Q(Error("SkipButtonRenderer was not specified or empty."),"ERROR");else if(!b.message||g.cc(b.message))g.Q(Error("SkipButtonRenderer.message was not specified or empty."),"ERROR");else{var d={iconType:"SKIP_NEXT"},e=FP(d);null==e?g.Q(Error("Icon for SkipButton was unable to be retrieved. yt.innertube.Icon.IconType: "+d.iconType+"."),"ERROR"):(this.C=new g.XO({D:"button",W:["ytp-ad-skip-button","ytp-button"],G:[{D:"span",J:"ytp-ad-skip-button-icon",
G:[e]}]}),g.K(this,this.C),this.C.ca(this.A.element),this.o=new hP(this.g,this.l,"ytp-ad-skip-button-text"),this.o.init(bM("ad-text"),this.B.message,c),g.K(this,this.o),Cd(this.C.element,this.o.element,0));X.prototype.init.call(this,a,b,c)}};
g.h.clear=function(){this.hide()};
g.h.hide=function(){this.A.hide();this.o&&this.o.hide();X.prototype.hide.call(this)};
g.h.onClick=function(a){null!=this.C&&(g.Ts(a),X.prototype.onClick.call(this,a),NM(this.B&&this.B.onClickCommands||[],this.macros),this.g.ae(this.componentType))};
g.h.show=function(){this.F||(NM(this.B&&this.B.impressionCommands||[],this.macros),this.F=!0);this.A.show();this.o&&this.o.show();X.prototype.show.call(this)};g.r(fQ,QP);g.h=fQ.prototype;
g.h.init=function(a,b,c){var d=b&&b.preskipRenderer&&b.preskipRenderer.adPreviewRenderer||{};d=g.cc(d)?null:d;null==d?this.I=0:(this.I=null!=d.durationMilliseconds&&void 0!==d.durationMilliseconds?d.durationMilliseconds:5E3,this.A=new cQ(this.g,this.l,this.o),this.A.init(bM("preskip-component"),d,c),g.K(this,this.A),this.A.ca(this.element));d=b&&b.skippableRenderer&&b.skippableRenderer.skipButtonRenderer||{};d=g.cc(d)?null:d;null==d?g.Q(Error("SkipButtonRenderer was not set in player response."),"ERROR"):
(null!=d&&(this.B=new eQ(this.g,this.l,this.L),this.B.init(bM(this.L?"persisting-skip-button":"skip-button"),d,c),g.K(this,this.B),this.B.ca(this.element)),QP.prototype.init.call(this,a,b,c),this.show())};
g.h.show=function(){this.F&&this.B?this.B.show():this.A&&this.A.show();RP(this);QP.prototype.show.call(this)};
g.h.Zk=function(){};
g.h.clear=function(){this.A&&this.A.clear();this.B&&this.B.clear();SP(this);QP.prototype.hide.call(this)};
g.h.hide=function(){this.A&&this.A.hide();this.B&&this.B.hide();SP(this);QP.prototype.hide.call(this)};
g.h.Ri=function(){1E3*this.o.g().current>=this.I&&gQ(this,!0)};g.r(hQ,X);hQ.prototype.init=function(a,b,c){X.prototype.init.call(this,a,b,c);b.skipAd&&(a=b.skipAd,a.skipAdRenderer&&(b=new fQ(this.g,this.l,this.o,!0),b.ca(this.A),b.init(bM("skip-button"),a.skipAdRenderer,this.macros),g.K(this,b)));this.show()};g.r(kQ,QP);g.h=kQ.prototype;g.h.init=function(a,b,c){if(b.templatedCountdown){var d=b.templatedCountdown.templatedAdText;if(!d.isTemplated){g.Q(Error("AdDurationRemainingRenderer has no templated ad text."),"WARNING");return}this.A=new hP(this.g,this.l);this.A.init(bM("ad-text"),d,{});this.A.ca(this.element);g.K(this,this.A)}QP.prototype.init.call(this,a,b,c);this.show()};
g.h.clear=function(){this.hide()};
g.h.hide=function(){SP(this);QP.prototype.hide.call(this)};
g.h.Zk=function(){this.hide()};
g.h.Ri=function(){if(null!=this.o){var a=this.o.g();if(null!=a&&null!=a.current){var b=this.o instanceof UP?a.seekableEnd:this.g.getDuration(2);b=g.iQ(b-a.current);this.A&&(a=this.A,b={FORMATTED_AD_DURATION_REMAINING:String(b)},null!=b&&g.Ld(a.element,bP(a.o,b)))}}};
g.h.show=function(){RP(this);QP.prototype.show.call(this)};g.r(lQ,X);g.h=lQ.prototype;
g.h.init=function(a,b,c){X.prototype.init.call(this,a,b,c);if(b.reasons)if(null==b.confirmLabel)g.Q(Error("AdFeedbackRenderer.confirmLabel was not set."),"ERROR");else{null==b.cancelLabel&&g.Q(Error("AdFeedbackRenderer.cancelLabel was not set."),"WARNING");null==b.title&&g.Q(Error("AdFeedbackRenderer.title was not set."),"WARNING");if(a=b.cancelRenderer&&b.cancelRenderer.buttonRenderer||null)this.o=new GP(this.g,this.l,["ytp-ad-feedback-dialog-close-button"],"button"),g.K(this,this.o),this.o.init(bM("button"),
a,this.macros),this.o.ea("click",this.Ot,this),this.o.ca(this.element);b.title&&(a=g.iD(b.title),this.updateValue("title",a));if(b.reasons)for(a=g.q(b.reasons),c=a.next();!c.done;c=a.next()){var d=c.value;c=d.reason;null==c?g.Q(Error("AdFeedbackReason.reason was not set."),"WARNING"):(d=d.endpoint,null==d?g.Q(Error("AdFeedbackReason.endpoint was not set."),"WARNING"):(c=new mQ(c,d),g.K(this,c),d=c.ha(),this.I.appendChild(d),this.B.push(c)))}b.cancelLabel&&(a=g.iD(b.cancelLabel),this.updateValue("cancelLabel",
a),g.Ns(this.C,"click",this.Ot.bind(this)));b.confirmLabel&&(a=g.iD(b.confirmLabel),this.updateValue("confirmLabel",a),g.Ns(this.F,"click",this.ND.bind(this)));b.undoRenderer&&(b=(b=b.undoRenderer)&&b.buttonRenderer||null)&&(b.serviceEndpoint?(this.A=new GP(this.g,this.l,["ytp-ad-feedback-dialog-undo-mute-button"],"ad-feedback-undo-mute-button"),g.K(this,this.A),this.A.init(bM("ad-feedback-undo-mute-button"),b,this.macros),this.A.ea("click",this.yH,this),this.A.ca(this.L)):g.Q(Error("AdFeedbackRenderer.undoRenderer.undoButtonRenderer was specified but did not contain a service endpoint."),
"WARNING"))}else g.Q(Error("AdFeedbackRenderer.reasons were not set."),"ERROR")};
g.h.clear=function(){Xs(this.C);Xs(this.F);this.B.length=0;this.hide()};
g.h.hide=function(){this.o&&this.o.hide();this.A&&this.A.hide();X.prototype.hide.call(this)};
g.h.show=function(){this.o&&this.o.show();this.A&&this.A.show();X.prototype.show.call(this)};
g.h.Ot=function(){this.g.ae("ad-feedback-dialog-close-button");this.hide()};
g.h.ND=function(){var a=this.B.filter(function(a){return a.o.checked});
0!==a.length&&(MM(a[0].l,this.macros),this.g.ae("ad-feedback-dialog-confirm-button"),this.hide())};
g.h.yH=function(){this.hide()};
mQ.prototype.ha=function(){return this.g.element};g.r(nQ,X);g.h=nQ.prototype;g.h.init=function(a,b,c){X.prototype.init.call(this,a,b,c);this.o=b;b.dialogMessages||null!=b.title?null==b.confirmLabel?g.Q(Error("ConfirmDialogRenderer.confirmLabel was not set."),"ERROR"):null==b.cancelLabel?g.Q(Error("ConfirmDialogRenderer.cancelLabel was not set."),"ERROR"):lba(this,b):g.Q(Error("Neither ConfirmDialogRenderer.title nor ConfirmDialogRenderer.dialogMessages were set."),"ERROR")};
g.h.clear=function(){g.at(this.da);this.hide()};
g.h.Co=function(){this.hide()};
g.h.Bo=function(){var a=this.o.cancelEndpoint;a&&MM(a,this.macros);this.hide()};
g.h.Do=function(){var a=this.o.confirmNavigationEndpoint||this.o.confirmEndpoint;a&&MM(a,this.macros);this.hide()};g.r(oQ,nQ);oQ.prototype.Co=function(a){nQ.prototype.Co.call(this,a);this.g.ae("ad-mute-confirm-dialog-close-button")};
oQ.prototype.Bo=function(a){nQ.prototype.Bo.call(this,a);this.g.ae("ad-mute-confirm-dialog-close-button")};
oQ.prototype.Do=function(a){nQ.prototype.Do.call(this,a);this.g.ae("ad-mute-confirm-dialog-confirm-button")};g.r(pQ,X);g.h=pQ.prototype;
g.h.init=function(a,b,c){X.prototype.init.call(this,a,b,c);this.F=b;if(null==b.dialogMessage&&null==b.title)g.Q(Error("Neither AdInfoDialogRenderer.dialogMessage nor AdInfoDialogRenderer.title was set."),"ERROR");else{null==b.confirmLabel&&g.Q(Error("AdInfoDialogRenderer.confirmLabel was not set."),"WARNING");if(a=b.closeOverlayRenderer&&b.closeOverlayRenderer.buttonRenderer||null)this.o=new GP(this.g,this.l,["ytp-ad-info-dialog-close-button"],"ad-info-dialog-close-button"),g.K(this,this.o),this.o.init(bM("button"),
a,this.macros),this.o.ca(this.element);b.title&&(a=g.iD(b.title),this.updateValue("title",a));b.dialogMessage&&(a=g.hD(b.dialogMessage,!0),this.V.appendChild(a));b.confirmLabel&&(a=g.iD(b.confirmLabel),this.updateValue("confirmLabel",a));if(b.muteAdRenderer&&(b=(b=b.muteAdRenderer)&&b.buttonRenderer||null))if(a=b.navigationEndpoint&&b.navigationEndpoint.adFeedbackEndpoint||null,c=b.navigationEndpoint&&b.navigationEndpoint.confirmDialogEndpoint||null,null==a&&null==c)g.Q(Error("AdInfoDialogRenderer.muteAdRenderer was specified but contains neither an AdFeedbackEndpoint, nor a ConfirmDialogEndpoint."),
"WARNING");else{if(a){if(a=a.content&&a.content.adFeedbackRenderer||null)this.B=new lQ(this.g,this.l),g.K(this,this.B),this.B.init(bM("ad-feedback-dialog"),a,this.macros),this.B.ca(this.L)}else c&&(a=c.content&&c.content.confirmDialogRenderer||null)&&(this.C=new oQ(this.g,this.l),g.K(this,this.C),this.C.init(bM("ad-mute-confirm-dialog"),a,this.macros),this.C.ca(this.L));this.A=new GP(this.g,this.l,["ytp-ad-info-dialog-mute-button"],"button",!0);g.K(this,this.A);this.A.init(bM("button"),b,this.macros);
this.A.ea("click",this.OD,this);this.A.ca(this.P)}this.o.ea("click",this.Pt,this);g.Ns(this.I,"click",this.Pt.bind(this))}};
g.h.clear=function(){Xs(this.I);this.hide()};
g.h.hide=function(){this.B?this.B.hide():this.C&&this.C.hide();this.o&&this.o.hide();this.A&&this.A.hide();X.prototype.hide.call(this)};
g.h.show=function(){this.o&&this.o.show();this.A&&this.A.show();X.prototype.show.call(this)};
g.h.Pt=function(){this.F&&this.F.confirmServiceEndpoint&&MM(this.F.confirmServiceEndpoint,this.macros);this.g.ae("ad-info-dialog-close-button");this.hide()};
g.h.OD=function(){var a=this.B?this.B:this.C;a&&!a.Na()&&(this.hide(),a.show())};g.r(qQ,GP);qQ.prototype.init=function(a,b,c){this.o&&!g.Fp(this.element,"ytp-ad-clickable")&&g.M(this.element,"ytp-ad-clickable");GP.prototype.init.call(this,a,b,c);this.show()};
qQ.prototype.onClick=function(){this.o&&!this.o.Na()&&(this.o.show(),NM(HP(this),this.macros),this.g.ae(this.componentType))};g.r(rQ,X);
rQ.prototype.init=function(a,b,c){if(b.hoverText){var d=b.button&&b.button.buttonRenderer||null;if(null==d)g.Q(Error("AdInfoOverlayRenderer.button was not set in player response."),"WARNING");else{var e=b.hoverText;this.B=new g.XO({D:"div",J:"ytp-ad-info-hover-text-container",G:[{D:"div",J:"ytp-ad-info-hover-text-callout"}]});g.K(this,this.B);this.B.ca(this.element);e=g.hD(e);Cd(this.B.element,e,0);e=d.serviceEndpoint&&d.serviceEndpoint.adInfoDialogEndpoint||null;var f="ytp-ad-info-hover-text-long";if(e){if(e=
e.dialog&&e.dialog.adInfoDialogRenderer||null)this.A=new pQ(this.g,this.l,this.C),g.K(this,this.A),this.A.init(bM("ad-info-dialog"),e,c),this.A.ca(this.C);f="ytp-ad-info-hover-text-short"}g.M(this.B.element,f);this.o=new qQ(this.g,this.l,this.A);g.K(this,this.o);this.o.init(bM("ad-info-icon-button"),d,c);this.o.ca(this.element);X.prototype.init.call(this,a,b,c);this.show()}}else g.Q(Error("AdInfoOverlayRenderer.hoverText not set in player response."),"WARNING")};
rQ.prototype.hide=function(){this.o&&this.o.hide();this.A&&this.A.hide();X.prototype.hide.call(this)};
rQ.prototype.show=function(){this.o&&this.o.show();X.prototype.show.call(this)};g.r(sQ,X);g.h=sQ.prototype;
g.h.init=function(a,b,c){this.A=b;if(null==b.defaultText&&null==b.defaultIcon)g.Q(Error("ToggleButtonRenderer must have either text or icon set."));else if(null==b.defaultIcon&&null!=b.toggledIcon)g.Q(Error("ToggleButtonRenderer cannot have toggled icon set without a default icon."));else{if(b.style){switch(b.style.styleType){case "STYLE_UNKNOWN":case "STYLE_DEFAULT":var d="ytp-ad-toggle-button-default-style";break;default:d=null}null!=d&&g.M(this.B,d)}d={};if(b.defaultText){var e=g.iD(b.defaultText);
g.sb(e)||(d.buttonText=e,this.o.setAttribute("aria-label",e))}else g.Hh(this.L,!1);b.defaultTooltip&&(d.tooltipText=b.defaultTooltip);b.defaultIcon?(e=FP(b.defaultIcon),this.updateValue("untoggledIconTemplateSpec",e),b.toggledIcon?(this.I=!0,e=FP(b.toggledIcon),this.updateValue("toggledIconTemplateSpec",e)):(g.Hh(this.F,!0),g.Hh(this.C,!1)),g.Hh(this.o,!1)):g.Hh(this.P,!1);g.cc(d)||this.update(d);b.isToggled&&(g.M(this.B,"ytp-ad-toggle-button-toggled"),this.toggleButton(b.isToggled));tQ(this);this.M(this.element,
"change",this.LD);X.prototype.init.call(this,a,b,c);this.show()}};
g.h.LD=function(){g.O(this.B,"ytp-ad-toggle-button-toggled",this.isToggled());NM(mba(this,this.isToggled()),this.macros);this.isToggled()&&this.g.ae("toggle-button");tQ(this)};
g.h.clear=function(){this.hide()};
g.h.toggleButton=function(a){g.O(this.B,"ytp-ad-toggle-button-toggled",a);this.o.checked=a;tQ(this)};
g.h.isToggled=function(){return this.o.checked};g.r(uQ,X);g.h=uQ.prototype;g.h.init=function(a,b,c){this.o=b;this.o.rectangle&&(this.B.init(bM("toggle-button"),this.o.likeButton.toggleButtonRenderer,c),this.A.init(bM("toggle-button"),this.o.dislikeButton.toggleButtonRenderer,c),this.M(this.element,"change",this.MD),X.prototype.init.call(this,a,b,c),this.C.show(100),this.show(),NM(this.o&&this.o.impressionCommands||[],this.macros))};
g.h.clear=function(){this.hide()};
g.h.hide=function(){this.B.hide();this.A.hide();X.prototype.hide.call(this)};
g.h.show=function(){this.B.show();this.A.show();X.prototype.show.call(this)};
g.h.MD=function(){g.Ip(this.element,"ytp-ad-instream-user-sentiment-selected");this.o.postMessageAction&&this.g.la("onYtShowToast",this.o.postMessageAction);nba(this)};g.r(vQ,X);vQ.prototype.init=function(a,b,c){var d=b.text;if(g.sb(bP(d)))g.Q(Error("SimpleAdBadgeRenderer has invalid or empty text"),"WARNING");else{if(d&&d.text){var e={text:d.text+" \u00b7",isTemplated:d.isTemplated};d.style&&(e.style=d.style);d=new hP(this.g,this.l);d.init(bM("simple-ad-badge"),e,c);d.ca(this.element);g.K(this,d)}X.prototype.init.call(this,a,b,c);this.show()}};
vQ.prototype.clear=function(){this.hide()};g.r(wQ,GP);wQ.prototype.init=function(a,b,c){var d=!1;null!=b.text&&(d=g.iD(b.text),d=!g.sb(d));d?null==b.navigationEndpoint?g.Q(Error("No visit advertiser clickthrough provided in renderer,"),"WARNING"):"STYLE_UNKNOWN"!==b.style?g.Q(Error("Button style was not a link-style type in renderer,"),"WARNING"):(GP.prototype.init.call(this,a,b,c),this.show()):g.Q(Error("No visit advertiser text was present in the renderer."),"WARNING")};xQ.prototype.getLength=function(){return this.g-this.l};g.r(AQ,g.XO);AQ.prototype.A=function(){var a=this.l.g();a=zQ(new xQ(a.seekableStart,a.seekableEnd),a.current,0);this.C.style.width=100*a+"%"};
AQ.prototype.B=function(){g.wB(g.U(this.o))||(2==this.o.Ca()?-1===this.g&&(this.show(),this.g=this.l.subscribe("p",this.A,this),this.A()):-1!==this.g&&(this.hide(),this.l.wc(this.g),this.g=-1))};g.r(BQ,X);
BQ.prototype.init=function(a,b,c){X.prototype.init.call(this,a,b,c);b.skipOrPreviewRenderer&&(a=b.skipOrPreviewRenderer,a.skipAdRenderer?(c=new fQ(this.g,this.l,this.o),c.ca(this.B),c.init(bM("skip-button"),a.skipAdRenderer,this.macros),g.K(this,c)):a.adPreviewRenderer&&-1!==a.adPreviewRenderer.durationMilliseconds&&(c=new cQ(this.g,this.l,this.o),c.ca(this.B),c.init(bM("ad-preview"),a.adPreviewRenderer,this.macros),g.K(this,c)));b.brandInteractionRenderer&&(a=b.brandInteractionRenderer.brandInteractionRenderer,c=
new uQ(this.g,this.l),c.ca(this.C),c.init(bM("instream-user-sentiment"),a,this.macros),g.K(this,c));b.adBadgeRenderer&&(a=b.adBadgeRenderer.simpleAdBadgeRenderer,null==a&&(a={},c={},c.text=g.S("YTP_AD_BADGE"),c.isTemplated=!1,a.text=c),c=new vQ(this.g,this.l),g.K(this,c),c.ca(this.A),c.init(bM("simple-ad-badge"),a,this.macros));b.adDurationRemaining&&(a=b.adDurationRemaining.adDurationRemainingRenderer,null==a&&(a={templatedCountdown:{templatedAdText:{text:"{FORMATTED_AD_DURATION_REMAINING}",isTemplated:!0}}}),
c=new kQ(this.g,this.l,this.o),g.K(this,c),c.ca(this.A),c.init(bM("ad-duration-remaining"),a,this.macros));b.adInfoOverlay&&(a=b.adInfoOverlay,a.adInfoOverlayRenderer&&(c=new rQ(this.g,this.l,this.element),g.K(this,c),c.ca(this.A),c.init(bM("ad-info-overlay"),a.adInfoOverlayRenderer,this.macros)));b.visitAdvertiserRenderer&&(b=b.visitAdvertiserRenderer,b.buttonRenderer&&(a=new wQ(this.g,this.l),g.K(this,a),a.ca(this.A),a.init(bM("visit-advertiser"),b.buttonRenderer,this.macros)));(b=g.U(this.g))&&
!jB(b)&&"3"==b.A&&(b=new AQ(this.g,this.o),b.ca(this.F),g.K(this,b));this.show()};g.r(CQ,YO);g.r(DQ,g.J);DQ.prototype.vj=function(a){ZO(a,this.view)};
DQ.prototype.Va=function(a,b){if(!this.g.has(a))throw Error("View not registered");var c=this.Nb,d=a.ha();SL(c,d)&&c.Va(d,b)};
DQ.prototype.sc=function(a){if(!this.g.has(a))throw Error("View not registered");var b=this.Nb;a=a.ha();SL(b,a)&&b.sc(a)};g.r(FQ,DQ);g.h=FQ.prototype;g.h.bind=function(a){var b=a.renderer,c=b.trackingParams;if(this.g.has(this.view)){if(this.B!=c)throw Error("Cannot re-bind presenter with new tracking params");}else this.B=c||null,pba(this,this.view,c);this.l=b.impressionEndpoints||[];this.macros=Object.assign({},a.macros);return this.Bj(a)};
g.h.Na=function(){return this.A};
g.h.show=function(){this.view.show();this.A=!0;EQ(this,!0);this.Jc(this.l);this.l=[]};
g.h.hide=function(){this.view.hide();this.A=!1;EQ(this,!1)};
g.h.onClick=function(a){a=void 0===a?{}:a;this.Vk(a);this.Na()&&this.sc(this.view)};
g.h.ng=function(a){MM(a,GQ(this))};
g.h.Jc=function(a){NM(a,GQ(this))};g.r(HQ,g.W);HQ.prototype.clear=function(){for(var a=g.q(this.za),b=a.next();!b.done;b=a.next())g.De(b.value);this.za=[]};
HQ.prototype.C=function(a){g.Ts(a);this.g=Math.max(0,this.g-IQ(this));JQ(this)};
HQ.prototype.B=function(a){g.Ts(a);this.g=Math.min(this.za.length-1,this.g+IQ(this));JQ(this)};
HQ.prototype.T=function(){this.clear();g.W.prototype.T.call(this)};g.r(KQ,CQ);g.h=KQ.prototype;g.h.ha=function(){return this.Uc.element};
g.h.Oh=function(a){var b=this.Uc,c=new g.W({D:"li",J:"ad-carousel-listitem",G:[{D:"div",J:"ad-carousel-item"}]});c.Z["ad-carousel-item"].appendChild(a);b.za.push(c);b.A.appendChild(c.element)};
g.h.show=function(){this.Uc.show()};
g.h.hide=function(){this.Uc.hide()};
g.h.clear=function(){this.Uc.clear()};var xca={Hx:"offerclick",mL:"offernavclick"};g.r(LQ,CQ);LQ.prototype.show=function(){this.l.show()};
LQ.prototype.hide=function(){this.l.hide()};
LQ.prototype.Qd=function(){var a=this;this.l.ea("click",function(){a.Zb.O("offerclick",a)});
for(var b=g.q((this.l.element||window.document).getElementsByTagName("A")),c=b.next();!c.done;c=b.next())this.l.M(c.value,"click",function(){a.Zb.O("offernavclick",a)})};
LQ.prototype.ha=function(){return this.l.element};var yca={Nl:LQ};g.r(NQ,FQ);g.h=NQ.prototype;g.h.Pj=function(){return new yca.Nl(this.Zb)};
g.h.Bj=function(a){var b=this.re();a=a.renderer;this.o=a.clickthroughEndpoint||null;var c=a.headline||null;MQ(b.o,"headline",c);MQ(b.g,"headline",c);c=a.merchant||null;MQ(b.A,"merchant",c);MQ(b.o,"merchant",c);MQ(b.g,"merchant",c);c=a.priceText||null;MQ(b.A,"price",c);MQ(b.o,"price",c);MQ(b.g,"price",c);c=(c=a.image&&0<a.image.thumbnails.length?a.image.thumbnails[0].url||null:null)?{D:"img",N:{src:c}}:null;b.A.updateValue("image",c);b.g.updateValue("image",c);a.rating?(c=a.reviewText||null,g.Dh(b.B.element,
Math.floor(100*a.rating/5)+"%"),MQ(b.B,"reviewText",c),b.o.updateValue("review",b.B),b.g.updateValue("review",b.B)):(b.o.updateValue("review",null),b.g.updateValue("review",null));this.show();return window.Promise.resolve()};
g.h.Qd=function(){for(var a=this,b={},c=g.q(Object.values(xca)),d=c.next();!d.done;b={type:b.type},d=c.next())b.type=d.value,this.Zb.subscribe(b.type,function(b){return function(){return a.onClick({type:b.type})}}(b))};
g.h.Vk=function(a){switch(void 0===a.type?void 0:a.type){case "offernavclick":this.o&&this.ng(this.o)}};
g.h.re=function(){return this.view};g.r(OQ,CQ);g.h=OQ.prototype;g.h.ha=function(){return this.g.element};
g.h.show=function(){this.g.show()};
g.h.hide=function(){this.g.hide()};
g.h.Oh=function(a){this.g.sb(a)};
g.h.T=function(){gba(this.l);CQ.prototype.T.call(this)};var QQ={Wx:OQ,Ml:NQ,Il:KQ};g.r(RQ,FQ);g.h=RQ.prototype;g.h.Pj=function(){return new QQ.Wx(this.Zb)};
g.h.re=function(){return this.view};
g.h.Bj=function(a){var b=this;this.Rh();this.Bd=new g.If(g.va);return window.Promise.race([this.Bd,this.re().A]).then(function(){return b.Tl(a.renderer)})};
g.h.Tl=function(a){var b=this.re();PQ(b,"shopText",a.shopText||null);PQ(b,"sponsoredText",a.sponsoredText||null);PQ(b,"adInfoText",a.adInfoText||null);a=a.itemList.horizontalListRenderer||null;this.Uh();this.Uc.clear();a=g.q(a&&a.items||[]);for(b=a.next();!b.done;b=a.next()){b=b.value.plaShelfItemRenderer;var c=new QQ.Ml(this.Nb,this.Ol);this.Jg.push(c);c.vj(this.Uc);c.bind({renderer:b,macros:this.macros})}JQ(this.Uc.Uc);qba(this);this.show()};
g.h.Qd=function(){this.da.M(this.Nb,"appresize",this.ec)};
g.h.ec=function(){JQ(this.Uc.Uc)};
g.h.Vk=function(){};
g.h.Rh=function(){this.Bd&&(this.Bd.cancel(),this.Bd=null)};
g.h.Uh=function(){g.Ee(this.Jg);this.Jg=[]};
g.h.T=function(){this.Rh();this.Uh();FQ.prototype.T.call(this)};var zca={YJ:"companionclick",kL:"nextbuttonclick",CL:"prevbuttonclick",TL:"shoptextclick",Hx:"offerclick"};g.r(SQ,CQ);g.h=SQ.prototype;g.h.ha=function(){return this.g.element};
g.h.Oh=function(a){this.A++;this.C.appendChild(a);TQ(this)};
g.h.show=function(){this.g.show()};
g.h.hide=function(){this.g.hide()};
g.h.clear=function(){this.A=0;g.Bd(this.C)};
g.h.scrollLeft=function(){this.l=Math.max(0,this.l-1);TQ(this)};g.r(UQ,CQ);g.h=UQ.prototype;g.h.ha=function(){return this.g.element};
g.h.show=function(){this.g.show()};
g.h.hide=function(){this.g.hide()};
g.h.Oh=function(a){this.g.sb(a)};
g.h.Qd=function(){var a=this;this.g.ea("click",function(){a.Zb.O("companionclick",a)});
var b=g.jd("ad-companion-clickthrough",this.g.element);b&&this.g.M(b,"click",function(){a.Zb.O("shoptextclick",a)})};
g.h.T=function(){CQ.prototype.T.call(this);g.De(this.l)};g.r(VQ,CQ);VQ.prototype.show=function(){this.g.show()};
VQ.prototype.hide=function(){this.g.hide()};
VQ.prototype.Qd=function(){var a=this;this.g.ea("click",function(){a.Zb.O("offerclick",a)})};
VQ.prototype.ha=function(){return this.g.element};var Aca={Nl:VQ};g.r(WQ,FQ);WQ.prototype.Pj=function(){return new Aca.Nl(this.Zb)};
WQ.prototype.Bj=function(a){var b=this.re();a=a.renderer;this.o=a.clickthroughEndpoint||null;var c=a.headline||null;c&&g.Ld(b.g.Z["iv-cards-slider-text"],g.iD(c));(c=a.priceText||null)&&g.Ld(b.g.Z["iv-cards-slider-action"],g.iD(c));a=a.image&&0<a.image.thumbnails.length?a.image.thumbnails[0].url||null:null;b.g.updateValue("image",a?{D:"img",N:{src:a}}:null);this.show();return window.Promise.resolve()};
WQ.prototype.Vk=function(){this.o&&this.ng(this.o)};
WQ.prototype.re=function(){return this.view};var XQ={kx:UQ,Ml:WQ,Il:SQ};g.r(YQ,FQ);g.h=YQ.prototype;g.h.Pj=function(){return new XQ.kx(this.Zb)};
g.h.re=function(){return this.view};
g.h.Bj=function(a){var b=this;this.Rh();this.Bd=new g.If(g.va);return window.Promise.race([this.Bd,this.re().o]).then(function(){return b.Tl(a.renderer)})};
g.h.Tl=function(a){this.pq=a.clickTrackingEndpoints||[];this.vo=a.clickToAdvSiteEndpoint||null;var b=this.re(),c=a.adBadgeText||null;c&&g.Ld(b.g.Z["yt-badge-ad"],g.iD(c));(c=a.shopText||null)&&g.Ld(b.g.Z["ad-companion-clickthrough"],g.iD(c));(c=a.g||null)&&g.Ld(b.g.Z["yt-uix-hovercard-content"],g.iD(c));a=a.itemList.horizontalListRenderer||null;this.Uh();this.ah.clear();a=g.q(a&&a.items||[]);for(b=a.next();!b.done;b=a.next())b=b.value.shoppingCompanionCarouselItemRenderer,c=new XQ.Ml(this.Nb,this.Ol),
this.Jg.push(c),c.vj(this.ah),c.bind({renderer:b,macros:this.macros});this.show()};
g.h.Qd=function(){for(var a=this,b={},c=g.q(Object.values(zca)),d=c.next();!d.done;b={type:b.type},d=c.next())b.type=d.value,this.Zb.subscribe(b.type,function(b){return function(){return a.onClick({type:b.type})}}(b))};
g.h.Vk=function(a){switch(void 0===a.type?void 0:a.type){case "companionclick":this.Jc(this.pq);break;case "nextbuttonclick":a=this.ah;a.l=Math.min(a.A-3,a.l+1);TQ(a);break;case "prevbuttonclick":this.ah.scrollLeft();break;case "shoptextclick":this.vo&&this.ng(this.vo)}};
g.h.Uh=function(){g.Ee(this.Jg);this.Jg=[]};
g.h.Rh=function(){this.Bd&&(this.Bd.cancel(),this.Bd=null)};
g.h.T=function(){this.Rh();this.Uh();FQ.prototype.T.call(this)};g.r(ZQ,X);ZQ.prototype.init=function(a,b,c){var d=this;b.toggledLoggingParams&&(this.B=b.toggledLoggingParams);if(b.clickCommands){var e=b.clickCommands;this.M(this.element,"click",function(){d.C.Jc(e,d.macros)})}if(b.answer&&b.answer.buttonRenderer){var f=new GP(this.g,this.l,["ytp-ad-survey-answer-button"],"survey-single-select-answer-button");
f.ca(this.A);f.init(bM("ytp-ad-survey-answer-button"),b.answer.buttonRenderer,c);f.show()}else b.answer&&b.answer.toggleButtonRenderer&&(this.o=new sQ(this.g,this.l,["ytp-ad-survey-answer-toggle-button"]),this.o.ca(this.A),g.K(this,this.o),this.o.init(bM("survey-answer-button"),b.answer.toggleButtonRenderer,c));X.prototype.init.call(this,a,b,c);this.show()};g.r($Q,X);$Q.prototype.init=function(a,b,c){b.answer&&b.answer.toggleButtonRenderer&&(this.o=new sQ(this.g,this.l,["ytp-ad-survey-answer-toggle-button","ytp-ad-survey-none-of-the-above-button"]),this.o.ca(this.A),this.o.init(bM("survey-none-of-the-above-button"),b.answer.toggleButtonRenderer,c));X.prototype.init.call(this,a,b,c);this.show()};g.r(aR,GP);aR.prototype.init=function(a,b,c){var d=!1;b.text&&(d=g.iD(b.text),d=!g.sb(d));d?GP.prototype.init.call(this,a,b,c):g.Q(Error("No submit text was present in the renderer."),"WARNING")};
aR.prototype.onClick=function(a){this.O("q");GP.prototype.onClick.call(this,a)};g.r(bR,X);
bR.prototype.init=function(a,b,c){this.A=c;var d=b.skipOrPreviewRenderer;if(d)if(d.skipAdRenderer){d=d.skipAdRenderer;var e=new fQ(this.g,this.l,this.C);e.ca(this.I);e.init(bM("skip-button"),d,this.A);g.K(this,e);this.o=e}else d.adPreviewRenderer&&(d=d.adPreviewRenderer,e=new cQ(this.g,this.l,this.C),e.ca(this.I),e.init(bM("ad-preview"),d,this.A),g.K(this,e),this.o=e);b.submitButton&&(d=b.submitButton,d.buttonRenderer&&(d=d.buttonRenderer,e=new aR(this.g,this.l),e.ca(this.L),e.init(bM("survey-submit"),d,
this.A),g.K(this,e),this.B=e));if(d=b.adBadgeRenderer)d=d.simpleAdBadgeRenderer,e=new vQ(this.g,this.l),e.ca(this.F),e.init(bM("simple-ad-badge"),d,this.A),g.K(this,e);if(d=b.adDurationRemaining)d=d.adDurationRemainingRenderer,e=new kQ(this.g,this.l,this.C),e.ca(this.F),e.init(bM("ad-duration-remaining"),d,this.A),g.K(this,e);(d=b.adInfoOverlay)&&d.adInfoOverlayRenderer&&(e=new rQ(this.g,this.l,this.element),g.K(this,e),e.ca(this.F),e.init(bM("ad-info-overlay"),d.adInfoOverlayRenderer,this.macros));
X.prototype.init.call(this,a,b,c);this.show()};g.r(cR,X);cR.prototype.init=function(a,b,c){X.prototype.init.call(this,a,b,c);rba(this)};
cR.prototype.show=function(){this.F=(0,g.H)();X.prototype.show.call(this)};
cR.prototype.lv=function(){};
cR.prototype.Nk=function(a){a instanceof fO&&a.g&&eR(this)};g.r(gR,cR);g.h=gR.prototype;g.h.init=function(a,b,c){var d=this;cR.prototype.init.call(this,a,b,c);b.questionText&&g.Ld(this.V,g.iD(b.questionText));b.answers&&b.answers.forEach(function(a){a.instreamSurveyAdAnswerRenderer&&dR(d,a.instreamSurveyAdAnswerRenderer,c)});
this.P=new window.Set(this.B.map(function(a){return a.o.o}));
(a=b.noneOfTheAbove)&&(a=a.instreamSurveyAdAnswerNoneOfTheAboveRenderer)&&sba(this,a,c);b.surveyAdQuestionCommon&&fR(this,b.surveyAdQuestionCommon);b.submitEndpoints&&(this.ia=b.submitEndpoints);this.M(this.element,"change",this.PD);this.show()};
g.h.lv=function(){hR(this,!1);this.I.B.subscribe("q",this.mH,this)};
g.h.PD=function(a){this.o&&this.o.stop();a.target==this.A.o.o?tba(this):this.P.has(a.target)&&(this.A.o.toggleButton(!1),hR(this,!0))};
g.h.mH=function(){var a=this.B.reduce(function(a,b){var c=b.B;b.o&&b.o.isToggled()&&c&&a.push(c);return a},[]).join("&"),b=this.ia.map(function(b){if(!b.loggingUrls)return b;
b=g.hc(b);b.loggingUrls=b.loggingUrls.map(function(b){b.baseUrl&&(b.baseUrl=Kg(b.baseUrl,a));return b});
return b});
b&&this.L.Jc(b,this.macros)};
g.h.clear=function(){this.dispose()};g.r(iR,cR);iR.prototype.init=function(a,b,c){var d=this;cR.prototype.init.call(this,a,b,c);null!=b.questionText&&g.Ld(this.V,g.iD(b.questionText));null!=b.answers&&b.answers.forEach(function(a){null!=a.instreamSurveyAdAnswerRenderer&&dR(d,a.instreamSurveyAdAnswerRenderer,c)});
null!=b.surveyAdQuestionCommon&&fR(this,b.surveyAdQuestionCommon);this.show()};
iR.prototype.clear=function(){this.dispose()};g.r(jR,X);
jR.prototype.init=function(a,b,c,d){var e=this;null!=d&&d instanceof fO&&(b.titleText&&g.Ld(this.C,g.iD(b.titleText)),b.questions.forEach(function(a){if(a.instreamSurveyAdSingleSelectQuestionRenderer){a=a.instreamSurveyAdSingleSelectQuestionRenderer;var b=new iR(e.g,e.l,e.A,d.g);b.ca(e.B);b.init(bM("survey-question-single-select"),a,c);e.o.push(b);g.K(e,b)}else a.instreamSurveyAdMultiSelectQuestionRenderer&&(a=a.instreamSurveyAdMultiSelectQuestionRenderer,b=new gR(e.g,e.l,e.A,d.g),b.ca(e.B),b.init(bM("survey-question-multi-select"),
a,c),e.o.push(b),g.K(e,b))}),X.prototype.init.call(this,a,b,c),this.show())};
jR.prototype.Nk=function(a){this.o.forEach(function(b){return b.Nk(a)})};
jR.prototype.clear=function(){this.hide();this.dispose()};g.r(kR,X);
kR.prototype.init=function(a,b,c){var d=this;X.prototype.init.call(this,a,b,c);a=b.timeoutSeconds||0;if(!g.ua(a)||0>a)g.Q(Error("timeoutSeconds was specified incorrectly in SurveyTextInterstitialRenderer with a value of: "+a));else if(b.timeoutCommands)if(b.text)if(b.ctaButton&&b.ctaButton.buttonRenderer)if(b.brandImage)if(b.backgroundImage&&b.backgroundImage.thumbnailLandscapePortraitRenderer&&b.backgroundImage.thumbnailLandscapePortraitRenderer.landscape){lR(this.L,b.backgroundImage.thumbnailLandscapePortraitRenderer.landscape);lR(this.I,
b.brandImage);g.Ld(this.V,g.iD(b.text));this.o=new GP(this.g,this.l,["ytp-ad-survey-interstitial-action-button"]);g.K(this,this.o);this.o.ca(this.F);this.o.init(bM("button"),b.ctaButton.buttonRenderer,c);this.o.show();var e=b.timeoutCommands;this.C=new UP(1E3*a);this.C.subscribe("o",function(){return d.B.hide(function(){return d.A.Jc(e,c)})});
g.K(this,this.C);this.M(this.element,"click",function(a){return vba(d,a,b)});
this.B.show(100);b.impressionCommands&&this.A.Jc(b.impressionCommands,c)}else g.Q(Error("SurveyTextInterstitialRenderer has no landscape background image."));else g.Q(Error("SurveyTextInterstitialRenderer has no brandImage."));else g.Q(Error("SurveyTextInterstitialRenderer has no button."));else g.Q(Error("SurveyTextInterstitialRenderer has no text."));else g.Q(Error("timeoutSeconds was specified yet no timeoutCommands where specified"))};
kR.prototype.clear=function(){g.at(this.da);this.hide()};g.r(mR,g.R);mR.prototype.stop=function(){this.A&&this.l.Pa(this.A)};
mR.prototype.F=function(){var a=this.o.Qf(2);this.B={seekableStart:a.seekableStart,seekableEnd:a.seekableEnd,current:a.current};this.O("p")};
mR.prototype.g=function(){return this.B};
mR.prototype.C=function(a){0<QE(a,2)&&this.O("o")};g.r(oR,g.Zs);oR.prototype.F=function(a){if(Array.isArray(a)){a=g.q(a);for(var b=a.next();!b.done;b=a.next())b=b.value,b instanceof dM&&this.l(b)}};var Bca=["pla-shelf","shopping-companion","backfill-mpu-companion","action-companion"];g.r(pR,oR);pR.prototype.l=function(a){var b=a.id,c=a.content,d=c.componentType;if(Bca.includes(d)){var e=this.A();this.o||(this.o=new KM(e));switch(a.actionType){case 1:if(this.g.has(b))break;a=nR(d,this.Nb,e,this.o);if(!a){fr(Error("Unable to create component with type: "+d));break}this.g.set(b,a);case 2:b=this.g.get(b);if(!b)break;b.bind(c);break;case 3:if(c=this.g.get(b))c.dispose(),this.g["delete"](b)}}};
pR.prototype.T=function(){g.Ee([].concat(g.qa(this.g.values())))};g.r(qR,oR);
qR.prototype.l=function(a){var b=a.content;switch(b.componentType){case "pla-shelf":switch(a.actionType){case 1:case 2:this.Nb.la("onPlaShelfInfoCardsReady",{renderer:b.renderer,macros:b.macros});break;case 3:this.Nb.la("onPlaShelfInfoCardsReady",{})}break;case "shopping-companion":switch(a.actionType){case 1:case 2:a=this.Nb.Y(1);this.Nb.la("updatekevlarcompanion",{contentVideoId:a&&a.videoId,shoppingCompanionCarouselRenderer:b.renderer,macros:b.macros});break;case 3:this.Nb.la("updatekevlarcompanion",{})}break;
case "action-companion":switch(a.actionType){case 1:case 2:a=this.Nb.Y(1);this.Nb.la("updatekevlarcompanion",{contentVideoId:a&&a.videoId,actionCompanionRenderer:Raa(b),macros:b.macros});break;case 3:this.Nb.la("updatekevlarcompanion",{})}break;case "backfill-mpu-companion":switch(a.actionType){case 1:case 2:if(!b.renderer)break;a=this.Nb.Y(1);a={contentVideoId:a&&a.videoId,backfillMpuCompanionAdRenderer:b.renderer};if("BACKFILL_MPU_TYPE_AFV"==b.renderer.type)NM(b.renderer.impressionEndpoints||[],
b.macros);else if("BACKFILL_MPU_TYPE_AFC"==b.renderer.type){if(!b.renderer.mpuAllowed){NM(b.renderer.noAdEndpoints||[],b.macros);break}a.afcMpu={logImpression:(0,g.A)(NM,this,b.renderer.impressionEndpoints||[],b.macros),logNoAd:(0,g.A)(NM,this,b.renderer.noAdEndpoints||[],b.macros)}}this.Nb.la("updatekevlarcompanion",a);break;case 3:this.Nb.la("updatekevlarcompanion",{})}}};var Cca="ad-attribution-bar ad-channel-thumbnail advertiser-name ad-preview ad-title skip-button visit-advertiser".split(" ").concat(["pla-shelf","shopping-companion","backfill-mpu-companion","action-companion"]);g.r(rR,oR);
rR.prototype.l=function(a){var b=a.id,c=a.content;if(c){var d=c.componentType;if(!Cca.includes(d))switch(a.actionType){case 1:a=this.C();this.o||(this.o=new KM(a));a=nR(d,this.A,a,this.o);if(!a){g.Q(Error("No UI component returned from ComponentFactory for type: "+d),"WARNING");break}Zb(this.g,b)?g.Q(Error("Ad UI component already registered: "+b),"WARNING"):this.g[b]=a;a.bind(c);a.vj(this.B);break;case 2:b=sR(this,a);if(null==b)break;b.bind(c);break;case 3:c=sR(this,a),null!=c&&(g.De(c),Zb(this.g,
b)?ec(this.g,b):g.Q(Error("Ad UI component does not exist: "+b),"WARNING"))}}};
rR.prototype.T=function(){g.Ee(Object.values(this.g));this.g={};oR.prototype.T.call(this)};g.r(tR,g.XL);g.h=tR.prototype;g.h.create=function(){this.load();this.created=!0};
g.h.load=function(){g.XL.prototype.load.call(this);this.g.getRootNode().classList.add("ad-created");this.l=new PO(this.g,new UL(this.g));this.l.init()};
g.h.destroy=function(){this.unload();this.created=!1};
g.h.unload=function(){g.XL.prototype.unload.call(this);this.g.getRootNode().classList.remove("ad-created");var a=this.l;this.l=null;a.dispose()};
g.h.Dc=function(){return!1};
g.h.iB=function(){if(null==this.l)var a=!1;else{a=this.l;var b=a.g.Y(2);a=b?b.isListed&&!g.hB(g.U(a.g)):!1}return a};
g.h.Fs=function(a){var b=this.l;switch(a){case "control_play":vN(b.g)&&!b.l.I&&OK(b.g.gi());break;case "control_pause":vN(b.g)&&!b.l.I&&zK(b.g.gi())}};
g.h.Es=function(){return Object.values(wca)};
g.h.Ds=function(a,b){b=void 0===b?{}:b;switch(a){case "replaceUrlMacros":var c=b;if(c.url){var d=lN(this.g);Object.assign(d,c.additionalMapping);this.l&&!d.AD_CPN&&(d.AD_CPN=this.l.bo);c=g.zo(c.url,d)}else c=null;return c;case "isExternalShelfAllowedFor":a:if(b.playerResponse){c=b.playerResponse.adPlacements||[];for(d=0;d<c.length;d++){var e=c[d];if(e.adPlacementRenderer&&e.adPlacementRenderer.renderer&&e.adPlacementRenderer.renderer.plaShelfRenderer){c=!1;break a}}c=!0}else c=!1;return c;default:return null}};g.yR={};var Dca=[2,5];var tX=!1,uX=!1;g.qt("showCompanionAdLoaded",function(){if(uX){var a=g.z("window.google_show_companion_ad");var b=g.z("yt.www.watch.ads.getGlobals");g.Aa(a)&&g.Aa(b)?(b=b(),b=!(!b||!b.length)):b=!1;b?a():uX=!0;uX=!1}});
g.qt("watchAdsInit",function(){if(tX){tX=!1;var a=g.z("yt.www.watch.ads.loadAfc");g.Aa(a)?a():tX=!0}});new function(){this.l=1;this.g=g.ua(void 0)?void 0:null;if(g.Sa(Dca,this.l)){if(!g.ua(this.g)||0>this.g)throw Error("Must have valid offset");}else if(null!==this.g)throw Error("Must not have offset");};g.F(uR,g.J);g.h=uR.prototype;g.h.Aq=function(){if(!this.l){var a=this.Aq;if("lb3"==g.U(this.g).g)var b=!1;else b=this.g.Y(),b=b.Hj||b.captionTracks.length||b.oa&&b.ka&&(null!=b.ka.g.en||g.Ry(b.ka))?!0:!1;(a=AR(this,"captions",a,b))&&!this.l&&(this.l=a,a.Bs()&&a.load(),this.g.la("onApiChange"))}};
g.h.km=function(){this.K=this.K||AR(this,"endscreen",this.km,g.vR(this))};
g.h.Dq=function(){var a=this.g.Y();var b=g.U(this.g).experiments,c=g.Nr()&&(Kr("ps4 vr")||Kr("ps4 pro vr")),d=Or(),e=c&&b.g("enable_mesh_ps4"),f=b.g("enable_mesh_cobalt"),k=b.g("enable_spherical_kabuki")||a.Lq,l=CB(g.U(this.g));a=a.Hd()?e||f||k||l||d||b.g("html5_enable_spherical"):a.te()?l||c||k||b.g("html5_enable_spherical"):a.ue()?l||c||b.g("html5_enable_spherical3d"):a.wg()?l||b.g("html5_enable_anaglyph3d"):l&&!g.FD(a)&&(b.g("enable_webgl_noop")||b.g("enable_white_noise"));this.o||(this.o=AR(this,
"webgl",this.Dq,a));this.o&&a&&this.o.load()};
g.h.Fq=function(){this.R=this.R||AR(this,"ypc",this.Fq,g.OD(this.g.Y(),"ypc_module"))};
g.h.Eq=function(){this.V=this.V||AR(this,"ypc_clickwrap",this.Eq,g.OD(this.g.Y(),"ypc_clickwrap_module"))};
g.h.zq=function(){this.U=this.U||AR(this,"spacecast",this.zq,this.g.Y().spacecastModule)};
g.h.yq=function(){this.P=this.P||AR(this,"heartbeat",this.yq,g.OD(this.g.Y(),"ypc_license_checker_module"))};
g.h.im=function(){if(!this.A){var a=this.im;var b=g.U(this.g);if("3"==b.A)b=!1;else if(b.L.isEmpty()&&"annotation-editor"!=b.g&&"live-dashboard"!=b.g){var c=this.g.Y();b=b.experiments.g("disable_new_iv_module_create_logic")?g.OD(c,"iv3_module"):!!c.he}else b=!0;if(this.A=AR(this,"annotations_module",a,b)){a=this.A;for(var d in this.fa)b=d,a.subscribe(b,this.fa[b]);this.g.la("onApiChange")}}};
g.h.xq=function(){this.H=this.H||AR(this,"fresca",this.xq,g.OD(this.g.Y(),"fresca_module"))};
g.h.lm=function(){this.L||(this.L=AR(this,"remote",this.lm,g.U(this.g).Ab))&&this.L.create()};
g.h.Bq=function(){this.C||(this.C=AR(this,"unplugged",this.Bq,g.wB(g.U(this.g))))&&this.C.init()};
g.h.jm=function(){if(!this.F){var a=this.jm;var b=g.U(this.g);"3"==b.A?b=!1:"creator-endscreen-editor"==b.g?b=!0:(b=this.g.Y(),b=!!b&&!!g.TD(b));(this.F=AR(this,"creatorendscreen",a,b))&&this.g.la("onApiChange")}};
g.h.T=function(){uR.ua.T.call(this);BR(this,!0)};g.r(CR,g.W);g.h=CR.prototype;g.h.Dz=function(){this.B=new g.Wg(0,0,0,0);this.o=new g.Wg(0,0,0,0)};
g.h.Ik=function(a){g.Gp(this.element,arguments)};
g.h.Ae=function(){if(this.g){var a=this.Da();if(!a.isEmpty()){var b=!g.bd(a,g.$g(this.o)),c=KR(this);b&&(this.o.width=a.width,this.o.height=a.height);a=this.app.g;(c||b||a.ba)&&this.app.l.O("resize",this.Da())}}};
g.h.DB=function(a,b){ER(this,b)};
g.h.Ez=function(a){a.g&&ER(this,a.g)};
g.h.Da=function(){var a=this.app.g,b=this.app.U.isFullscreen();if(b&&Mr())return new g.ad(window.outerWidth,window.outerHeight);if(b||a.jj){if(window.matchMedia){a="(width: "+window.innerWidth+"px) and (height: "+window.innerHeight+"px)";this.A&&this.A.media==a||(this.A=window.matchMedia(a));var c=this.A&&this.A.matches}if(c)return new g.ad(window.innerWidth,window.innerHeight)}else if(this.R&&this.V&&!this.app.isWidescreen())for(a=0;a<this.R.length;a++)if(b=this.R[a],b.query.matches)return new g.ad(b.size.width,
b.size.height);return new g.ad(this.element.clientWidth,this.element.clientHeight)};
g.h.kz=function(){this.g&&yN(this);JR(this)!=this.I&&this.Ae()};
g.h.EB=function(){yN(this)};
g.h.T=function(){this.C&&g.rt(this.C);DR(this);g.W.prototype.T.call(this)};g.r(LR,g.W);g.r(NR,g.W);g.h=NR.prototype;g.h.show=function(){g.W.prototype.show.call(this);this.Qn()};
g.h.hide=function(){g.W.prototype.hide.call(this);this.l.stop()};
g.h.stop=function(){this.l.stop()};
g.h.start=function(){this.l.isActive()||this.Qn()};
g.h.Qn=function(){var a=g.It(),b=g.V(this.g),c=EV(this.g),d=this.g.l,e=d.app.B.ha(),f=this.g.g,k=b.Em(),l=b.ia,m=8*cK(l,"bandwidth")/1024,n=cK(l,"networkactivity")/1024,p=cK(l,"bufferhealth");if(b.H){var u=b.H.g.g+"/"+g.Tu(DK(b));u=u+"/"+b.H.Se()}else u="";var v=g.yB();d=g.AL(d).Zm;k={video_id_and_cpn:c.videoId+" / "+c.clientPlaybackNonce,codecs:"",dropped_frames:k.totalVideoFrames?""+(k.droppedVideoFrames||0)+"/"+k.totalVideoFrames:"-",stream_host:b.B?b.B.Ka:"",dimensions:e.clientWidth+"x"+e.clientHeight+
(1<v?"*"+v:""),bandwidth_kbps:m.toFixed(0)+" Kbps",buffer_health_seconds:p.toFixed(2)+" s",drm_style:u?"":"display:none",drm:u,network_activity_bytes:n.toFixed(0)+" KB",shader_info:d,shader_info_style:d?"":"display:none"};m=this.g.U.getVolume();f=YD(c,f);f=Math.round(m)+"% / "+Math.round(m*f)+"%";m=c.relativeLoudness.toFixed(1);(0,window.isFinite)(m)&&(f+=" (content loudness "+m+"dB)");k.volume=f;k.resolution=e.videoWidth+"x"+e.videoHeight;if(c.Ba){e=c.Ba.video.fps;1<e&&(k.resolution+="@"+e);(b=AK(b))&&
b.video&&(k.resolution+=" / "+b.video.width+"x"+b.video.height,1<b.video.fps&&(k.resolution+="@"+b.video.fps));k.codecs=OR(c.Ba);if(b=c.Hc)b=c.Ba,b=!(b.audio&&b.video);b&&(k.codecs+=" / "+OR(c.Hc));c.Ba.video.l||c.Ba.video.primaries?(b=c.Ba.video.l||"unknown","smpte2084"==b?b+=" (PQ)":"arib-std-b67"==b&&(b+=" (HLG)"),k.color=b+" / "+(c.Ba.video.primaries||"unknown"),k.color_style=""):k.color_style="display:none"}b=c.oa;k.live_latency_style=b?"":"display:none";k.live_mode_style=b?"":"display:none";
if(b){b=cK(l,"livelatency");k.live_latency_secs=b.toFixed(2)+"s";e=c.Ib()?"Manifestless, ":"";f="Uncertain";if(0<=b&&120>b)if(c.latencyClass&&"UNKNOWN"!=c.latencyClass)switch(c.latencyClass){case "NORMAL":f="Optimized for Normal Latency";break;case "LOW":f="Optimized for Low Latency";break;case "ULTRALOW":f="Optimized for Ultra Low Latency";break;default:f="Unknown Latency Setting"}else f=c.isLowLatencyLiveStream?"Optimized for Low Latency":"Optimized for Smooth Streaming";k.live_mode=e+f}MR(this.o,
bK(l,"bandwidth"));MR(this.C,bK(l,"networkactivity"));MR(this.B,bK(l,"livelatency"));MR(this.A,bK(l,"bufferhealth"));this.update(k);a=25<g.It()-a?5E3:500;this.l.start(a)};g.r(PR,g.J);PR.prototype.get=function(a){var b=this.l.find(function(b){return b[0]==a});
return b?b[1]:null};
PR.prototype.set=function(a,b){this.remove(a,!0);for(this.l.push([a,b]);this.l.length>this.o;){var c=this.l.shift();this.g&&this.g(c[1])}};
PR.prototype.remove=function(a,b){if(b&&this.g){var c=this.get(a);if(c)this.g(c);else return}g.Ya(this.l,function(b){return b[0]==a})};
PR.prototype.T=function(){var a=this;this.g&&this.l.forEach(function(b){a.g(b[1])})};g.wa(RR);var zV=g.z("ytPlayerUtilsVideoTagPoolInstance")||RR.getInstance();g.y("ytPlayerUtilsVideoTagPoolInstance",zV,void 0);g.h=RR.prototype;g.h.Pq=function(a){if(!(this.g.length>=a)){a-=this.g.length;for(var b=0;b<a;b++)UR(this)}};
g.h.Ry=function(a,b){if(this.g.length)return this.g.pop();var c=UR(this,a,b);a||g.Xa(this.g,c);return c};
g.h.iI=function(a){a&&g.Sa(this.l,a)&&(a.src&&(eA&&0<a.readyState&&(a.currentTime=Math.max(uca,0)),a.removeAttribute("src"),a.load(),a.g&&a.g.g&&(a.g&&a.g.dispose(),a.g=null)),Xs(a),g.Xa(this.l,a),g.Xa(this.o,a))};
g.h.Gz=function(a){return this.g.length>=(a||1)};
g.h.gy=function(){for(var a=this.o.length-1;0<=a;a--)TR(this,this.o[a]);this.g.length==this.l.length&&4<=this.g.length||(4>this.l.length?this.Pq(4):(this.g=[],(0,g.G)(this.l,function(a){TR(this,a)},this)))};
RR.prototype.fillPool=RR.prototype.Pq;RR.prototype.getTag=RR.prototype.Ry;RR.prototype.releaseTag=RR.prototype.iI;RR.prototype.hasTags=RR.prototype.Gz;RR.prototype.activateTags=RR.prototype.gy;g.r(VR,g.J);VR.prototype.o=function(a){this.l=a[a.length-1].intersectionRatio};
VR.prototype.T=function(){g.J.prototype.T.call(this);this.l=null;this.g&&this.g.disconnect()};g.r(WR,g.R);g.h=WR.prototype;g.h.AB=function(a){a=Ss(a);if(!Zc(a,this.A)){var b=2;this.C&&(b|=8);this.A=a;this.xb(b,!0)}};
g.h.SD=function(){this.C&&this.xb(8,!0);this.xb(2,!1)};
g.h.Pn=function(a){var b=Ss(a);Zc(b,this.A)||(this.A=b,(a=g.Ps(a))&&this.P(a)&&(this.xb(4,!0),this.da.Pa(this.o),this.o=this.da.M(this.l,"mouseover",this.Rs),this.K=this.da.M(this.l,"mouseout",this.Rs)))};
g.h.Rs=function(a){a=Rs(a);a&&this.P(a)||(this.A=new g.Yc(window.NaN,window.NaN),XR(this))};
g.h.Tz=function(){this.xb(1,!0)};
g.h.Gy=function(a){a=g.Ps(a);a instanceof window.Element&&!(0<a.tabIndex)||this.xb(1,!0)};
g.h.Qs=function(){this.C=!0;this.da.Pa(this.B);this.B=this.da.M(window.document,"mouseup",this.BB)};
g.h.BB=function(){this.C=!1;this.xb(8,!1);this.da.Pa(this.B);this.B=this.da.M(this.l,"mousedown",this.Qs)};
g.h.Ss=function(a){if(a=a.changedTouches[0])this.U=a.identifier,this.da.Pa(this.F),this.F=this.da.M(this.l,"touchend",this.CB,void 0,!0),this.xb(1024,!0)};
g.h.CB=function(a){for(var b,c=0;c<a.changedTouches.length;c++){var d=a.changedTouches[c];if(d.identifier==this.U){b=d;break}}b&&(this.da.Pa(this.F),this.F=this.da.M(this.l,"touchstart",this.Ss,void 0,!0),this.xb(1024,!1))};
g.h.xb=function(a,b){var c=!this.g;b?(this.g|=a,a&1&&this.H.start(),a&2&&this.I.start()):(this.g&=~a,a&1&&this.H.stop(),a&2&&this.I.stop(),a&512&&this.L.stop());this.g&512&&!(this.g&128)&&g.Pp(this.L,this.R);var d=!this.g;c!=d&&this.O("autohideupdate",d)};
g.h.toString=function(){var a=[],b;for(b in vX)this.g&vX[b]&&a.push(b);return"yt.player.ui.AutohideBlock<"+a.join(",")+">"};
var vX={tK:1,eL:2,HK:4,jK:8,qL:16,iK:32,bK:64,lL:128,LL:256,jL:512,lM:1024};g.r(ZR,g.W);ZR.prototype.show=function(){g.W.prototype.show.call(this);this.F()};
ZR.prototype.F=function(){var a=1-1/1.5;this.o=(this.o+this.K)%(this.width*a);this.A=(this.A+this.I)%(this.height*a);this.l.drawImage(this.H,-1*this.o,-1*this.A);this.l.fillRect(0,this.B,this.width,75);this.B=(this.B+75+7)%this.height-75;this.g.isActive()||g.Pp(this.C)};
ZR.prototype.hide=function(){this.g.stop();this.C.stop();g.W.prototype.hide.call(this)};g.r(fS,g.W);fS.prototype.show=function(){g.W.prototype.show.call(this);gS(this,function(a){a.show()})};
fS.prototype.hide=function(){g.W.prototype.hide.call(this);gS(this,function(a){a.hide()})};
fS.prototype.A=function(a){if(g.bS(a,this.g,!xB(g.U(this.g)))){a={as3:!1,html5:!0,player:!0,cpn:this.g.Y().clientPlaybackNonce};var b=this.g;b.la("onFeedbackArticleRequest",{articleId:3037019,helpContext:"player_error",productData:a});b.isFullscreen()&&g.xL(b)}};
var Eca=/<a\s+href=["']([^"']+)["'](?:\s+target=["']([^"']+)["'])?>([^<>]+)<\/a>/;g.r(iS,g.W);iS.prototype.show=function(){g.W.prototype.show.call(this);g.Pp(this.g)};
iS.prototype.hide=function(){this.l.stop();g.W.prototype.hide.call(this)};g.r(oS,g.W);g.h=oS.prototype;g.h.show=function(){var a=this;this.Na()||(this.A.M(this.g,"videodatachange",function(){return g.Pp(a.l)}),this.A.M(this.g,"videoplayerreset",function(){return g.Pp(a.l)}));
g.W.prototype.show.call(this)};
g.h.hide=function(){this.A&&g.at(this.A);g.W.prototype.hide.call(this)};
g.h.jD=function(a){var b=g.U(this.g);b.experiments.g("disable_new_pause_state3")&&xB(b)&&(a=KE(a.state)&&!KE(a.g)||vL(this.g)&&g.T(a.state,2),g.lh(this.element,"transition-delay",a?"2s":""));g.Pp(this.l)};
g.h.RH=function(){g.Pp(this.l)};
g.h.iD=function(){this.o.stop();this.hide();g.Pp(this.l)};
g.h.Dt=function(){var a=g.tL(this.g);if(3==this.g.Ca()&&(a.gb()||g.T(a,4)))var b=!0;else(b=g.nL(this.g).R)&&b.FI()?b=!0:(b=g.U(this.g),b=g.T(a,2)&&pL(this.g)&&b.ia?!0:!1);b?(b=!0,window.document.activeElement==this.B&&this.g.getRootNode().focus(),this.B.style.display="none"):(this.B.style.display="",KE(a)&&2!=this.g.Ca()?b=!0:(b=!g.U(this.g).experiments.g("disable_new_pause_state3"),b=!(!g.T(a,2)||pL(this.g)||b&&g.hW(this.g.app))||g.T(a,1024)?!0:!1));b?(this.o.show(),this.bJ(this.g.Ce(),this.g.Y())):
(this.o.hide(),g.T(a,1)||this.o.stop())};
g.h.bJ=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];c=g.U(this.g);b=g.q(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,!(!d||d instanceof g.lD&&!d.videoId)){var e=g.uL(this.g).Da();var f=g.yB(),k=e.width*f;f*=e.height;if(1280<k||720<f)if(e=d.kc(c,"maxresdefault.jpg"))break;if(640<k||480<f)if(e=d.kc(c,"maxresdefault.jpg"))break;if(320<k||180<f)if(e=d.kc(c,"sddefault.jpg")||d.kc(c,"hqdefault.jpg")||d.kc(c,"mqdefault.jpg"))break;if(e=d.kc(c,"default.jpg"))break}this.C.style.backgroundImage=
e?"url("+e+")":""};g.r(qS,g.Zs);qS.prototype.C=function(){this.B();var a=g.U(this.g),b=this.g.Y(),c=[];a.I||c.push({src:b.kc(a,"mqdefault.jpg"),sizes:"320x180"});this.l.metadata=new window.MediaMetadata({title:b.title,artist:b.author,artwork:c});a=vL(this.g);this.o.has("nexttrack")!=a&&(c=b=null,a&&(b=(0,g.A)(function(){jS(this.A,tP(),g.S("YTP_NEXT"));this.g.rh()},this),c=(0,g.A)(function(){nS(this.A);
this.g.Ei()},this)),pS(this,"nexttrack",b),pS(this,"previoustrack",c))};
qS.prototype.B=function(){var a=g.tL(this.g);a=a.isError()?"none":DE(a)?"playing":"paused";this.l.playbackState=a};
qS.prototype.T=function(){this.l.playbackState="none";this.l.metadata=null;for(var a=g.q(this.o),b=a.next();!b.done;b=a.next())pS(this,b.value,null);g.Zs.prototype.T.call(this)};g.r(rS,g.W);rS.prototype.P=function(a,b){sS(this,b);this.B&&tS(this,this.B)};
rS.prototype.L=function(a){var b=this.I.Y();this.l!=b.videoId&&sS(this,b);this.g&&tS(this,a.state);this.B=a.state};
rS.prototype.K=function(){this.A.hide();this.l&&(this.o[this.l]=(this.o[this.l]||0)+((0,g.H)()-this.H));this.H=0};var Fca=/fidget ?spinner/i;g.r(wS,g.W);g.h=wS.prototype;g.h.hide=function(){this.l.stop();this.A.style.display="none";g.W.prototype.hide.call(this)};
g.h.mu=function(){uS(this,Fca.test(this.g.Y().title))};
g.h.DD=function(a){vS(this,a.state)};
g.h.kF=function(){vS(this,g.tL(this.g))};
g.h.uG=function(){this.A.style.display="block"};g.r(xS,g.XO);g.h=xS.prototype;g.h.show=function(){var a=zS(this);g.XO.prototype.show.call(this);this.ba&&(this.H.M(window,"blur",this.qb),this.H.M(window.document,"click",this.bF));a||this.O("show",!0)};
g.h.hide=function(){var a=zS(this);g.XO.prototype.hide.call(this);yS(this);a&&this.O("show",!1)};
g.h.Id=function(a,b){this.A=a;this.K.show();b?(this.I||(this.I=this.H.M(this.V,"appresize",this.Up)),this.Up()):this.I&&(this.H.Pa(this.I),this.I=null);a&&(a.getAttribute("aria-haspopup"),a.setAttribute("aria-expanded",!0),window.document.activeElement&&g.Kd(a,window.document.activeElement)&&this.focus())};
g.h.Up=function(){kV(g.nL(this.V).I,this.element,this.A)};
g.h.qb=function(){var a=zS(this);yS(this);this.K.hide();a&&this.O("show",!1)};
g.h.Zf=function(a,b){zS(this)?this.qb():this.Id(a,b)};
g.h.bF=function(a){var b=Qs(a);b&&(g.Kd(this.element,b)||this.A&&g.Kd(this.A,b)||!g.jQ(a))||this.qb()};g.r(BS,xS);BS.prototype.B=function(a){a?(AS(this),this.Id()):(this.l&&CS(this),this.qb())};
BS.prototype.C=function(a){this.g.app.X&&0<QE(a,2)&&this.qb()};
BS.prototype.onClick=function(){this.g.De();CS(this)};g.r(DS,g.Zs);g.h=DS.prototype;g.h.init=function(){var a=g.tL(this.g);this.ql(a);this.Ug();this.ee()};
g.h.Bt=function(a,b){if(this.Ka!=b.videoId){this.Ka=b.videoId;var c=this.A;c.R=b&&0<b.hg.length?5E3:3E3;c.xb(512,!0);this.Ug()}};
g.h.vG=function(){this.Bt("newdata",this.g.Y())};
g.h.Ah=function(){var a=g.CL(this.g)&&g.DL(this.g);ES(this);(a=this.Ha||a)||(a=g.nL(this.g).H,a=!!a&&a.MA());return a||this.Za||ES(this)};
g.h.hf=function(){var a=!this.Ah();g.O(this.g.getRootNode(),"ytp-menu-shown",!a)};
g.h.cD=function(a){if(!g.Kd(this.g.getRootNode(),a))return!1;for(;a&&!g.Od(a);)a=a==this.g.getRootNode()?null:g.Jd(a);return!!a};
g.h.zo=function(a){var b=this.g.getRootNode();g.O(b,"ytp-autohide",a);g.O(b,"ytp-autohide-active",!0);this.Ya.start(a?250:100);a&&(this.K=!1,g.N(b,"ytp-touch-mode"));b=this.g;a=!a;b.la("onVideoAreaChange");b.la(a?"onShowControls":"onHideControls")};
g.h.uE=function(){if(!g.U(this.g).experiments.g("web_player_edge_autohide_killswitch3")){var a=this.g.getRootNode();g.O(a,"ytp-autohide-active",!1)}};
g.h.YG=function(a){var b=zS(this.ia);g.Jk&&GS(this,a)?b&&g.Ts(a):(KE(g.tL(this.g))&&!g.U(this.g).Ma&&(b=this.g.Y(),b.videoId&&this.g.Xn(RD(b))),this.A.g||FS(this,Qs(a))||zS(this.ia)||(g.tL(this.g),g.Ts(a)),this.K=!0,g.M(this.g.getRootNode(),"ytp-touch-mode"),this.A.xb(2,!0))};
g.h.UG=function(a){GS(this,a)||FS(this,Qs(a))||(this.A.xb(2,!0),g.jQ(a)&&!g.U(this.g).P&&(this.Tj()?g.Ts(a):(a=g.tL(this.g),g.T(a,2)&&pL(this.g)||kS(this.C,!DE(a)),!g.U(this.g).ma||KE(a)||g.T(a,1024)?this.ko():this.ba.isActive()?(this.C.hide(),this.ba.stop()):this.ba.start())))};
g.h.ko=function(){var a=g.tL(this.g);g.T(a,2)&&pL(this.g)||(DE(a)?this.g.Wb():this.g.Oc())};
g.h.VG=function(a){FS(this,Qs(a))||3!=this.g.Ca()&&g.xL(this.g)};
g.h.WG=function(a){HS(this,.3,a.scale);g.Ts(a)};
g.h.XG=function(a){HS(this,.1,a.scale)};
g.h.ee=function(){var a=this.cd(),b=g.uL(this.g).Da(),c=this.g.isFullscreen(),d=this.g.getRootNode();g.Gx&&XR(this.A);g.O(d,"ytp-fullscreen",c);g.O(d,"ytp-small-mode",!a&&(480>b.width||290>b.height));g.O(d,"ytp-big-mode",a);this.F&&eS(this.F,b)};
g.h.xG=function(a){this.ql(a.state);this.Ug()};
g.h.Ug=function(){var a=!!this.Ka&&!g.oL(this.g);var b=2==this.g.Ca(),c=g.U(this.g);b?(b=g.nL(this.g).B,a=a&&b.iB()):a=(c.experiments.g("embed_api_deprecation")||c.Ha)&&c.H&&5==this.g.app.R?a:a&&(c.Tc||this.g.isFullscreen());this.L!=a&&(this.L=a,g.O(this.g.getRootNode(),"ytp-hide-info-bar",!a))};
g.h.ql=function(a){var b=KE(a);b!=this.Xb&&(this.Xb=b,this.Wa&&this.Pa(this.Wa),this.Wa=this.M(g.uL(this.g),"touchstart",this.YG,void 0,b));var c=a.gb()&&!g.T(a,32)||FL(this.g);this.A.xb(128,!c);c=3==this.g.Ca();this.A.xb(256,c);c=this.g.getRootNode();if(g.T(a,2))var d=["ended-mode"];else d=[],g.T(a,8)?d.push("playing-mode"):g.T(a,4)&&d.push("paused-mode"),g.T(a,1)&&!g.T(a,32)&&d.push("buffering-mode"),g.T(a,32)&&d.push("seeking-mode"),g.T(a,64)&&d.push("unstarted-mode");g.nb(this.sa,d)||(g.Hp(c,
this.sa),this.sa=d,g.Gp(c,d));d=g.U(this.g);var e=g.T(a,2);g.O(c,"ytp-hide-controls",("3"==d.A?!e:"1"!=d.A)||b);g.O(c,"ytp-native-controls","3"==d.A&&!b&&!e);if(g.T(a,128)){this.F||(this.F=new fS(this.g),g.K(this,this.F),g.OL(this.g,this.F.element,4));b=this.F;a=a.g;for(c=0;c<b.o.length;c++)b.Pa(b.o[c]);b.o=[];c=a.messageKey;d=g.U(b.g);"play"!=d.g||"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"!=c&&"YTP_ERROR_UNSUPPORTED_DEVICE"!=c||(c="YTP_HTML5_FLASH_DEPRECATED");if("YTP_ERROR_GENERIC_WITHOUT_LINK"!=
c||d.Rb)if("YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"!=c||d.Rb)if("YTP_HTML5_FLASH_DEPRECATED"==c)b.sb(hS(b,c,"//support.google.com/googleplay/answer/2844198#movies",!1,!0,"YTP_ERROR_VIDEO_UNAVAILABLE"));else{a=a.message.split(Eca);c=[];for(d=0;d<a.length;d+=3){e=a[d++].split("\n");c.push(e[0]);for(var f=1;f<e.length;f++)c.push({D:"br"}),c.push(e[f]);d<a.length&&c.push({D:"a",N:{href:a[d],target:a[d+1]},G:[a[d+2]]})}b.sb({D:"span",G:c})}else b.sb(hS(b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK",
"//www.youtube.com/html5"));else if(b.sb(hS(b,"YTP_ERROR_GENERIC_WITH_LINK_AND_CPN","//support.google.com/youtube/?p=player_error1",!0)),d.ba&&!d.o)for(a=(0,g.A)(b.A,b),c=b.element.getElementsByTagName("a"),d=0;d<c.length;d++)e=b.M(c[d],"click",a),b.o.push(e);this.F.show()}else this.F&&(this.F.dispose(),this.F=null)};
g.h.Tj=function(){return g.CL(this.g)&&g.DL(this.g)?(this.g.Hi(!1,!1),!0):g.oL(this.g)?(g.qL(this.g,!0),!0):!1};
g.h.dD=function(a){this.Za=a;this.hf()};
g.h.cd=function(){return!1};g.r(JS,g.W);JS.prototype.T=function(){this.l&&this.l();g.W.prototype.T.call(this)};
JS.prototype.F=function(){g.ut("iv-button-mouseover")};
JS.prototype.C=function(a){g.CL(this.g);var b=g.Fp(this.g.getRootNode(),"ytp-cards-teaser-shown");g.ut("iv-teaser-clicked",b);a=0==a.screenX&&0==a.screenY;this.g.Hi(!g.DL(this.g),a,"YOUTUBE_DRAWER_MANUAL_OPEN")};g.r(LS,g.W);g.h=LS.prototype;g.h.ww=function(){g.CL(this.l)&&g.DL(this.l)&&this.Na()&&3!=this.B.g&&this.Ji()};
g.h.KI=function(){this.Ji();g.ut("iv-teaser-clicked",!!this.g);this.l.Hi(!0,!1,"YOUTUBE_DRAWER_MANUAL_OPEN")};
g.h.eD=function(){g.ut("iv-teaser-mouseover");this.g&&this.g.stop()};
g.h.oH=function(a){this.g||!a||g.DL(this.l)||this.o&&this.o.isActive()||(zba(this,a),g.ut("iv-teaser-shown"))};
g.h.Ct=function(){this.F.stop();this.g&&this.g.isActive()&&this.H.start()};
g.h.Rf=function(){this.H.stop();this.g&&!this.g.isActive()&&this.F.start()};
g.h.dG=function(){this.g&&this.g.stop()};
g.h.aG=function(){this.Ji()};
g.h.Ji=function(){!this.g||this.A&&this.A.isActive()||(this.B.hide(),g.N(this.l.getRootNode(),"ytp-cards-teaser-shown"),this.A=new g.P(function(){for(var a=g.q(this.C),b=a.next();!b.done;b=a.next())this.Pa(b.value);this.C=[];this.g&&(this.g.dispose(),this.g=null);IS(this.I,!0)},330,this),this.A.start())};
g.h.T=function(){var a=this.l.getRootNode();a&&g.N(a,"ytp-cards-teaser-shown");g.Ee(this.o,this.A,this.g);g.W.prototype.T.call(this)};g.r(g.NS,g.XO);g.NS.prototype.updateValue=function(a,b){g.XO.prototype.updateValue.call(this,a,b);this.O("size-change")};g.r(PS,g.XO);PS.prototype.ia=function(){this.O("size-change")};
PS.prototype.focus=function(){this.V.focus()};
PS.prototype.ma=function(){this.O("back")};g.r(g.QS,PS);g.QS.prototype.X=function(){this.C.O("size-change")};
g.QS.prototype.focus=function(){for(var a=0,b=0;b<this.za.length;b++)if("true"==this.za[b].element.getAttribute("aria-checked")){a=b;break}this.za[a].focus()};g.r(g.US,xS);g.h=g.US.prototype;g.h.show=function(){xS.prototype.show.call(this);this.aj()};
g.h.hide=function(){xS.prototype.hide.call(this);1<this.g.length&&g.ZS(this)};
g.h.aj=function(){$S(this);this.Na()&&(WS(this),g.Eh(this.element,this.size))};
g.h.Od=function(){var a=this.g.pop(),b=VS(this);XS(this,a,b,!0)};
g.h.GI=function(a,b,c){this.C.dispose();this.C=null;g.M(this.element,"ytp-popup-animating");c?(g.M(a.element,"ytp-panel-animate-forward"),g.N(b.element,"ytp-panel-animate-back")):(g.M(a.element,"ytp-panel-animate-back"),g.N(b.element,"ytp-panel-animate-forward"));g.Eh(this.element,this.size);this.B=new g.P(g.B(this.kE,a,b),250,this);this.B.start()};
g.h.kE=function(a){g.N(this.element,"ytp-popup-animating");g.AM(a);g.Hp(a.element,["ytp-panel-animate-back","ytp-panel-animate-forward"]);this.B.dispose();this.B=null};
g.h.mD=function(a){if(!g.Us(a))switch(g.Vs(a)){case 27:this.qb();g.Ts(a);break;case 37:1<this.g.length&&this.Od();g.Ts(a);break;case 39:g.Ts(a)}};
g.h.focus=function(){VS(this).focus()};
g.h.T=function(){xS.prototype.T.call(this);this.C&&this.C.dispose();this.B&&this.B.dispose()};g.r(aT,g.NS);aT.prototype.g=function(a){g.Us(a)||39!=g.Vs(a)||(this.element.click(),g.Ts(a))};g.r(cT,g.NS);cT.prototype.I=function(){dT(this,!this.l);this.O("select",this.l)};
cT.prototype.getValue=function(){return this.l};g.r(hT,g.QS);g.h=hT.prototype;g.h.TE=function(){DM(this.H.element)};
g.h.mF=function(){iT(this,this.g.Bi(!0))&&jS(this.L.C,jP())};
g.h.nF=function(){iT(this,this.g.Ws())&&jS(this.L.C,g.Y?{D:"div",W:["ytp-icon","ytp-icon-code"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",N:{d:"M14.1 24.9L7.2 18.0l6.9-6.9L12.0 9.0l-9.0 9.0 9.0 9.0 2.1-2.1zm7.8 .0l6.9-6.9-6.9-6.9L24.0 9.0l9.0 9.0-9.0 9.0-2.1-2.1z",fill:"#fff"}}]});this.g.sc(this.l.element);eT("EMBED",this.g.Y().videoId,this.g.getPlaylistId()||void 0)};
g.h.qF=function(){iT(this,this.g.getVideoUrl(!0,!0))&&jS(this.L.C,sP());this.g.sc(this.A.element);eT("COPY_PASTE",this.g.Y().videoId,this.g.getPlaylistId()||void 0)};
g.h.pF=function(){iT(this,this.g.getVideoUrl(!1,!0))&&jS(this.L.C,sP());this.g.sc(this.o.element);eT("COPY_PASTE",this.g.Y().videoId,this.g.getPlaylistId()||void 0)};
g.h.HF=function(a){dT(this.B,a)};
g.h.IF=function(){var a=this.B.getValue();QV(this.g.app,a);this.K.qb();this.g.sc(this.B.element)};
g.h.OG=function(a){var b=g.V(this.g.app);b&&b.nh(new g.GB("feedback",!1,{gpu:(0,g.OE)()}));if(g.bS(a,this.g,!xB(g.U(this.g)))){a=this.g;b=b={as3:!1,html5:!0,player:!0};var c=a.jr();c.debug_error&&(b.player_error=c.debug_error.errorCode,b.player_error_details=c.debug_error.errorDetail);b.debug_text=a.Bi(!0);a.la("onFeedbackStartRequest",b);a.isFullscreen()&&g.xL(a)}this.K.qb()};
g.h.fH=function(){this.g.gt();this.K.qb()};
g.h.gD=function(a,b){gT(this,b)};g.r(lT,g.US);g.h=lT.prototype;g.h.show=function(){this.F||(this.F=new hT(this.l,this.X,this),g.K(this,this.F),g.YS(this,this.F));g.US.prototype.show.call(this);this.l.Va(this.element,!0);jT(this.F,!0)};
g.h.hide=function(){kT(this);g.US.prototype.hide.call(this);this.l.Va(this.element,!1);this.F&&jT(this.F,!1)};
g.h.SE=function(a){var b=Qs(a);this.Na()||b&&(g.Qd(b,"a")||g.Rd(b,"ytp-no-contextmenu"))||(g.Ts(a),mT(this),this.element.style.left="",this.element.style.top="",a=Ss(a),a.x++,a.y++,this.Id(),b=g.yh(window.document.body),a=g.cq(a,this.size,0,void 0,b,5),g.th(this.element,g.ah(a.rect)),g.at(this.o),this.o.M(window.document,"contextmenu",this.cF),this.o.M(this.l,"fullscreentoggled",this.hD),this.o.M(this.l,"pageTransition",this.oG))};
g.h.cF=function(a){g.Us(a)||(g.Kd(this.element,Qs(a))||this.qb(),g.U(this.l).disableNativeContextMenu&&g.Ts(a))};
g.h.hD=function(){this.qb();mT(this)};
g.h.oG=function(){this.qb()};var wX,xX;wX=[{option:"#fff",message:"YTP_COLOR_WHITE"},{option:"#ff0",message:"YTP_COLOR_YELLOW"},{option:"#0f0",message:"YTP_COLOR_GREEN"},{option:"#0ff",message:"YTP_COLOR_CYAN"},{option:"#00f",message:"YTP_COLOR_BLUE"},{option:"#f0f",message:"YTP_COLOR_MAGENTA"},{option:"#f00",message:"YTP_COLOR_RED"},{option:"#080808",message:"YTP_COLOR_BLACK"}];xX=[{option:0,text:"0%"},{option:.25,text:"25%"},{option:.5,text:"50%"},{option:.75,text:"75%"},{option:1,text:"100%"}];
g.qT=[{option:"fontFamily",message:"YTP_FONT_FAMILY",options:[{option:1,message:"YTP_FONT_FAMILY_MONO_SERIF"},{option:2,message:"YTP_FONT_FAMILY_PROP_SERIF"},{option:3,message:"YTP_FONT_FAMILY_MONO_SANS"},{option:4,message:"YTP_FONT_FAMILY_PROP_SANS"},{option:5,message:"YTP_FONT_FAMILY_CASUAL"},{option:6,message:"YTP_FONT_FAMILY_CURSIVE"},{option:7,message:"YTP_FONT_FAMILY_SMALL_CAPS"}]},{option:"color",message:"YTP_FONT_COLOR",options:wX},{option:"fontSizeIncrement",message:"YTP_FONT_SIZE",options:[{option:-2,
text:"50%"},{option:-1,text:"75%"},{option:0,text:"100%"},{option:1,text:"150%"},{option:2,text:"200%"},{option:3,text:"300%"},{option:4,text:"400%"}]},{option:"background",message:"YTP_BACKGROUND_COLOR",options:wX},{option:"backgroundOpacity",message:"YTP_BACKGROUND_OPACITY",options:xX},{option:"windowColor",message:"YTP_WINDOW_COLOR",options:wX},{option:"windowOpacity",message:"YTP_WINDOW_OPACITY",options:xX},{option:"charEdgeStyle",message:"YTP_CHAR_EDGE_STYLE",options:[{option:0,message:"YTP_EDGE_STYLE_NONE"},
{option:4,message:"YTP_EDGE_STYLE_DROP_SHADOW"},{option:1,message:"YTP_EDGE_STYLE_RAISED"},{option:2,message:"YTP_EDGE_STYLE_DEPRESSED"},{option:3,message:"YTP_EDGE_STYLE_OUTLINE"}]},{option:"textOpacity",message:"YTP_FONT_OPACITY",options:[{option:.25,text:"25%"},{option:.5,text:"50%"},{option:.75,text:"75%"},{option:1,text:"100%"}]}];g.r(nT,g.Zs);g.h=nT.prototype;
g.h.wr=function(a){var b=!1,c=g.Vs(a),d=Qs(a),e=!a.altKey&&!a.ctrlKey&&!a.metaKey,f=!1,k=!1,l=g.U(this.g);g.Us(a)?(e=!1,k=!0):l.Ie&&(e=!1);if(9==c)b=!0;else{if(d)switch(c){case 32:case 13:if("BUTTON"==d.tagName||"A"==d.tagName||"INPUT"==d.tagName)b=!0,e=!1;else if(e){var m=d.getAttribute("role");!m||"option"!=m&&"button"!=m&&0!=m.indexOf("menuitem")||(b=!0,d.click(),f=!0)}break;case 37:case 39:case 36:case 35:b="slider"==d.getAttribute("role");break;case 38:case 40:m=d.getAttribute("role"),d=38==
c?d.previousSibling:d.nextSibling,"slider"==m?b=!0:e&&("option"==m?(d&&"option"==d.getAttribute("role")&&d.focus(),f=b=!0):m&&0==m.indexOf("menuitem")&&(d&&d.hasAttribute("role")&&0==d.getAttribute("role").indexOf("menuitem")&&d.focus(),f=b=!0))}if((d=g.nL(this.g).o)&&e&&!f&&d.o&&d.o.Na())switch(c){case 65:case 68:case 87:case 83:case 107:case 221:case 109:case 219:f=d.o.tr(c)}l.Rb||!e||f||(f=String.fromCharCode(c).toLowerCase(),this.o+=f,0=="awesome".indexOf(this.o)?(f=!0,7==this.o.length&&g.Ip(this.g.getRootNode(),
"ytp-color-party")):(this.o=f,f=0=="awesome".indexOf(this.o)));if(e&&!f){switch(c){case 32:l.P||(k=!DE(g.tL(this.g)),kS(this.l,k),k?this.g.Oc():this.g.Wb(),k=f=!0);break;case 37:this.g.qc()&&(jS(this.l,zP()),this.g.Md(-5*this.g.dc()),k=f=!0);break;case 39:this.g.qc()&&(jS(this.l,rP()),this.g.Md(5*this.g.dc()),k=f=!0);break;case 38:k=Math.min(this.g.getVolume()+5,100);lS(this.l,k,!1);this.g.setVolume(k);k=f=!0;break;case 40:k=Math.max(this.g.getVolume()-5,0);lS(this.l,k,!0);this.g.setVolume(k);k=f=
!0;break;case 27:this.C()&&(k=f=!0);break;case 36:this.g.qc()&&(this.g.yb(0),k=f=!0);break;case 35:this.g.qc()&&(this.g.yb(window.Infinity),k=f=!0)}if("3"!=l.A)switch(c){case 67:g.nL(this.g).l&&(k=this.g.Lb("captions","track"),(f=g.nL(this.g).l)&&f.dw(),f=this.l,k=!k||k&&!k.displayName?g.S("YTP_SUBTITLES_ON"):g.S("YTP_SUBTITLES_OFF"),jS(f,qP(),k),k=f=!0);break;case 79:rT(this,"textOpacity")&&(f=!0);break;case 87:rT(this,"windowOpacity")&&(f=!0);break;case 187:rT(this,"fontSizeIncrement",!1,!0)&&(f=
!0);break;case 189:rT(this,"fontSizeIncrement",!0,!0)&&(f=!0)}var n;48<=c&&57>=c?n=c-48:96<=c&&105>=c&&(n=c-96);null!=n&&this.g.qc()&&(k=this.g.Qf(),this.g.yb(n/10*(k.seekableEnd-k.seekableStart)+k.seekableStart),k=f=!0)}}b&&this.Vo(!0);(b||k)&&this.B.xb(2,!0);(f||e&&pT(this,c,a.shiftKey))&&g.Ts(a);l.ob&&(a={keyCode:g.Vs(a),altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,handled:g.Us(a),fullscreen:this.g.isFullscreen()},this.g.la("onKeyPress",a))};
g.h.xr=function(a){a=g.Vs(a);var b=g.nL(this.g).o;b&&b.o&&b.o.Na()&&b.o.vr(a);9==a&&this.Vo(!0)};
g.h.Vo=function(a){g.O(this.g.getRootNode(),"ytp-probably-keyboard-focus",a);g.O(this.F.element,"ytp-probably-keyboard-focus",a)};
g.h.Ft=function(a){g.nL(this.g).l&&this.g.Pc("captions","sampleSubtitles",a)};
g.h.T=function(){g.Rp(this.A);g.Zs.prototype.T.call(this)};g.r(tT,g.W);g.h=tT.prototype;g.h.hide=function(){g.N(this.g.getRootNode(),"ytp-expand-pause-overlay");g.W.prototype.hide.call(this)};
g.h.JE=function(){this.R=!0;g.N(this.g.getRootNode(),"ytp-expand-pause-overlay");this.F.focus()};
g.h.LE=function(){this.R=!1;g.M(this.g.getRootNode(),"ytp-expand-pause-overlay")};
g.h.nD=function(){vT(this,this.A-this.C)};
g.h.oD=function(){vT(this,this.A+this.C)};
g.h.NE=function(a,b){var c=this.l[a],d=c.fd;if(g.bS(b,this.g,this.ba,d||void 0)){var e=c.Eb().videoId;c=c.getPlaylistId();g.gW(this.g.app,e,d,c,void 0,void 0,void 0)}};
g.h.pD=function(){this.ec(g.uL(this.g).Da())};
g.h.qD=function(a){g.T(a.state,1)||g.T(a.state,16)||g.T(a.state,32)||(g.T(a.state,4)&&!g.T(a.state,2)?this.l.length&&(this.R||(g.M(this.g.getRootNode(),"ytp-expand-pause-overlay"),uT(this)),this.H.show()):this.H.hide())};
g.h.ec=function(a){var b=16/9,c=this.X.cd();a=a.width-(c?136:68);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.B.length;d++){var e=this.B[d].Z["ytp-suggestion-image"];e.style.width=c+"px";e.style.height=b+"px"}this.K.style.height=b+"px";this.P=c;this.C=a;this.A=0;this.zw(0);uT(this)};
g.h.rD=function(){var a=this.g.Y();a.suggestions?(a=(0,g.Fd)(a.suggestions,function(a){return a&&!a.list}),this.l=(0,g.I)(a,function(a){return g.QR(a)})):this.l.length=0;
Bba(this)};
g.h.zw=function(a){this.K.scrollLeft=-a};
g.r(sT,g.J);sT.prototype.start=function(a,b,c){this.g=a;this.H=b;this.C=c;this.F=g.It();this.o()};
sT.prototype.o=function(){var a=g.It()-this.F;var b=this.A;a=aq(b,a/this.C);if(0==a)b=b.F;else if(1==a)b=b.H;else{var c=Wc(b.F,b.B,a),d=Wc(b.B,b.C,a);b=Wc(b.C,b.H,a);c=Wc(c,d,a);d=Wc(d,b,a);b=Wc(c,d,a)}b=g.Uc(b,0,1);this.B((this.H-this.g)*b+this.g);1>b&&this.l.start()};g.r(wT,g.W);wT.prototype.l=function(a){g.bS(a,this.g)&&this.g.Xs(this.Oa)};g.r(xT,xS);g.h=xT.prototype;g.h.show=function(){xS.prototype.show.call(this);this.C.M(this.l,"videodatachange",this.mo);this.C.M(this.l,"onPlaylistUpdate",this.mo);this.mo()};
g.h.hide=function(){xS.prototype.hide.call(this);g.at(this.C);yT(this,null)};
g.h.mo=function(){yT(this,this.l.Ce())};
g.h.kl=function(){var a=this.g.Ck;if(a==this.F)this.B.element.setAttribute("aria-checked",!1),this.B=this.o[this.g.Oa];else{for(var b=g.q(this.o),c=b.next();!c.done;c=b.next())c.value.dispose();b=this.g.getLength();this.o=[];for(c=0;c<b;c++){var d=new wT(this.l,this.g,c);this.o.push(d);d.ca(this.za)}this.B=this.o[this.g.Oa];this.F=a}this.B.element.setAttribute("aria-checked",!0)};
g.h.qH=function(a){var b=this.l.getVideoUrl(!0);cS(b,this.l,a)};
g.h.focus=function(){this.B.focus()};
g.h.T=function(){this.hide();xS.prototype.T.call(this)};g.r(zT,g.W);zT.prototype.l=function(){g.O(this.element,"ytp-playlist-menu-button-tiny",400>g.uL(this.o).Da().width);this.g&&2!=this.o.Ca()?(this.update({text:g.S("YTP_PLAYLIST_POSITION",{CURRENT_POSITION:String(this.g.Oa+1),PLAYLIST_LENGTH:String(this.g.getLength())}),title:g.S("YTP_PLAYLIST_NAME",{PLAYLIST_NAME:this.g.title})}),this.Na()||(this.show(),aU(this.A))):this.Na()&&(this.hide(),aU(this.A))};
zT.prototype.B=function(){this.g&&this.g.unsubscribe("shuffle",this.l,this);(this.g=this.o.Ce())&&this.g.subscribe("shuffle",this.l,this);this.l()};g.r(AT,g.W);AT.prototype.o=function(a){g.EM(this,g.T(a.state,2))};
AT.prototype.l=function(){g.tL(this.g);this.g.Oc()};g.r(BT,xS);g.h=BT.prototype;g.h.rG=function(a){a=Qs(a);g.Kd(this.L,a)||g.Kd(this.C,a)||this.Zf()};
g.h.qb=function(){xS.prototype.qb.call(this);this.l.Zg(this.element)};
g.h.show=function(){var a=this.Na();xS.prototype.show.call(this);this.Ht();a||this.g.la("onSharePanelOpened")};
g.h.Ht=function(){g.M(this.element,"ytp-share-panel-loading");g.N(this.element,"ytp-share-panel-fail");var a=this.g.Y(),b=this.g.getPlaylistId(),c=b&&this.F.checked;g.O(this.element,"ytp-share-panel-has-playlist",!!b);var d={action_get_share_info:1,feature:"player_embedded",video_id:a.videoId},e=g.U(this.g);e.jc&&(d.authuser=e.jc);e.pageId&&(d.pageid=e.pageId);c&&(d.list=b);g.Ar(g.U(this.g).baseYtUrl+"share_ajax",{method:"GET",onError:(0,g.A)(this.Rv,this),ib:(0,g.A)(function(a,b){if(b){if(b.actions&&
lt(b.actions),!this.ga()){g.N(this.element,"ytp-share-panel-loading");CT(this);for(var c=b.links,d=0,e=0;e<c.length&&3>d;e++){var f=c[e],k=Cba(f.img);k&&(k=new g.W({D:"a",W:["ytp-share-panel-service-button","ytp-button"],N:{href:f.url,target:"_blank",title:f.sname},G:[k]}),k.ea("click",g.B(this.bH,f.url)),g.Ce(k,KS(this.l,k.element)),this.o.push(k),d++)}c=new g.W({D:"a",W:["ytp-share-panel-service-button","ytp-button"],G:[{D:"span",J:"ytp-share-panel-service-button-more",G:[g.Y?{D:"div",W:["ytp-icon",
"ytp-icon-share-more"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 Z m -5.7,21.85 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z",
fill:"#4e4e4f","fill-rule":"evenodd"}}]}]}],N:{href:b.more,target:"_blank",title:g.S("YTP_MORE")}});c.ea("click",(0,g.A)(this.XF,this,b.more));g.Ce(c,KS(this.l,c.element));this.o.push(c);this.updateValue("buttons",this.o)}}else this.Rv(null,null)},this),
hc:d,withCredentials:!0});a=e.getVideoUrl(a.videoId,c?b:void 0,void 0,!0);this.updateValue("link",a);this.updateValue("linkText",a);DM(this.B)};
g.h.Rv=function(){g.N(this.element,"ytp-share-panel-loading");g.M(this.element,"ytp-share-panel-fail")};
g.h.bH=function(a,b){if(g.jQ(b)){var c=void 0===c?{}:c;c.target=c.target||"YouTube";c.width=c.width||"600";c.height=c.height||"600";c||(c={});var d=window;var e=a instanceof Hc?a:g.Lc("undefined"!=typeof a.href?a.href:String(a));var f=c.target||a.target,k=[];for(l in c)switch(l){case "width":case "height":case "top":case "left":k.push(l+"="+c[l]);break;case "target":case "noopener":case "noreferrer":break;default:k.push(l+"="+(c[l]?1:0))}var l=k.join(",");oc()&&d.navigator&&d.navigator.standalone&&
f&&"_self"!=f?(l=d.document.createElement("A"),g.Rc(l,e),l.setAttribute("target",f),c.noreferrer&&l.setAttribute("rel","noreferrer"),c=window.document.createEvent("MouseEvent"),c.initMouseEvent("click",!0,!0,d,1),l.dispatchEvent(c),d={}):c.noreferrer?(d=d.open("",f,l),c=g.Ic(e),d&&(g.BB&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),d.opener=null,c=g.Tc(g.Bc("b/12014412, meta tag with sanitized URL"),'<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+
g.Bb(c)+'">'),d.document.write(g.Pc(c)),d.document.close())):(d=d.open(g.Ic(e),f,l))&&c.noopener&&(d.opener=null);if(c=d)c.opener||(c.opener=window),c.focus();g.Ts(b)}};
g.h.XF=function(a,b){cS(a,this.g,b)&&this.g.la("SHARE_CLICKED")};
g.h.xD=function(a){!a&&zS(this)&&this.Zf()};
g.h.focus=function(){this.B.focus()};
g.h.T=function(){xS.prototype.T.call(this);CT(this)};g.r(DT,g.W);DT.prototype.C=function(){this.F.Zf(this.element,!1);this.g.sc(this.element)};
DT.prototype.A=function(){var a=g.U(this.g).ij&&2!=this.g.Ca(),b=g.uL(this.g).Da().width;this.l=!!this.g.Y().videoId&&300<=b&&!a;g.O(this.o,"ytp-share-button-visible",this.l);a=480<b;g.U(this.g).K&&(g.O(this.o,"ytp-show-share-title",a),this.updateValue("share",a?g.S("YTP_SHARE"):""));this.g.Va(this.element,this.l&&this.B)};
DT.prototype.T=function(){g.W.prototype.T.call(this);g.N(this.o,"ytp-share-button-visible")};g.r(ET,g.W);ET.prototype.o=function(){var a=g.V(this.g.app);a&&a.l.g.webkitShowPlaybackTargetPicker()};
ET.prototype.l=function(){var a=g.V(this.g.app);g.EM(this,!!a&&a.Tc);this.updateValue("icon",this.g.Ai()?g.Y?{D:"div",W:["ytp-icon","ytp-icon-airplay-on"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M11,13 L25,13 L25,21 L11,21 L11,13 Z M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",fill:"#fff"}}]}:
g.Y?{D:"div",W:["ytp-icon","ytp-icon-airplay-off"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z"}}]})};g.r(GT,g.XO);g.h=GT.prototype;g.h.HB=function(a){g.T(a.state,32)?HT(this,this.l.Y()):this.F.hide()};
g.h.Jk=function(){var a=this.l.Qf(),b=a.current,c=WB(this.kb,141);b=this.kb.g[c].Ii(b);b!=this.K&&(c=XB(this.kb,b,141),this.B=FT(this.fa,c,141,141,!0),g.th(this.ba,(this.H-this.B.width)/2),this.K=b);g.Ld(this.ia,g.iQ(this.P?a.current-a.seekableEnd:a.current));g.Qt(this.I);this.I=g.Nt((0,g.A)(this.Bl,this));this.L.fh()};
g.h.IB=function(a,b){HT(this,b)};
g.h.Bl=function(){g.Hh(this.g,!1);g.Qt(this.I);var a=Math.round(.5*this.B.width),b=Math.round(.5*this.B.height),c=this.l.Qf(),d=c.current/(c.seekableEnd-c.seekableStart);c=this.kb.g[0].zt();var e=this.kb.g[0].Mk();d=a*(e-c+1)*d-this.H/2;var f=Math.floor(d/a)+c;e=Math.min(f+Math.min(20,Math.ceil(this.H/a)),e);f=Math.max(f,c);var k;if(this.A>=f&&this.o<=e){for(k=this.A;k>e;k--)g.Dd(this.g.children[k-this.o]);for(k=f-1;k>=this.o;k--)g.Dd(this.g.children[k-this.o]);for(k=this.o-1;k>=f;k--)this.g.insertBefore(IT(this,
k,a,b),this.g.firstChild);k=this.A+1}else g.Bd(this.g),k=f;for(;k<=e;k++){var l=IT(this,k,a,b);this.g.appendChild(l)}for(k=f;k<=e;k++)g.lh(this.g.children[k-f],"transform","translatex("+(-d+(k-c)*a)+"px)");this.o=f;this.A=e;g.Hh(this.g,!0)};
g.h.Yz=function(){for(var a=this.o;a<=this.A;a++)ZB(this.kb,a,this.B.width)};
g.h.nz=function(){var a=g.uL(this.l).Da();this.H!=a.width&&(this.H=a.width,this.kb&&(this.Jk(),this.Bl()))};
g.h.AI=function(a){this.element.style.g=a+"px"};
g.h.show=function(){g.XO.prototype.show.call(this);gV(this.V,!1)};
g.h.hide=function(){this.kb&&HT(this,null);g.XO.prototype.hide.call(this);gV(this.V,!0)};
g.h.T=function(){HT(this,null);g.XO.prototype.T.call(this)};
GT.g=200;g.r(JT,g.W);g.h=JT.prototype;g.h.JB=function(a){g.T(a.state,32)?LT(this,this.g.Y()):this.Na()&&(g.T(a.state,16)||g.T(a.state,1))||this.o.hide()};
g.h.LB=function(a,b){LT(this,b)};
g.h.KB=function(){var a=g.tL(this.g);(g.T(a,32)||g.T(a,16))&&KT(this)};
g.h.oz=function(){this.A=window.NaN;KT(this)};
g.h.hide=function(){this.kb&&LT(this,null);g.W.prototype.hide.call(this)};g.r(NT,g.W);g.h=NT.prototype;g.h.kD=function(){g.U(this.l).ma?g.xL(this.l):this.g.Zf(this.element,!0)};
g.h.qu=function(){MT(this);this.g.Id(this.element,!0)};
g.h.lD=function(){g.Ds()==this.l.getRootNode()?this.A.start():(this.A.stop(),this.g&&this.g.hide())};
g.h.ry=function(){if(window.screen&&window.outerWidth&&window.outerHeight){var a=.9*window.screen.width,b=.9*window.screen.height,c=Math.max(window.outerWidth,window.innerWidth),d=Math.max(window.outerHeight,window.innerHeight);if(c>d!=a>b){var e=c;c=d;d=e}a>c&&b>d&&this.qu()}};
g.h.Et=function(){g.EM(this,aS(this.l))};
g.h.Jv=function(a){if(a){var b=g.Y?{D:"div",W:["ytp-icon","ytp-icon-full-screen-close"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"g",J:"ytp-fullscreen-button-corner-2",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-3",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-0",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",
N:{d:"m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-1",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"}}]}]};a=g.S("YTP_EXIT_FULLSCREEN");window.document.activeElement==this.element&&this.l.getRootNode().focus()}else b=g.Y?{D:"div",W:["ytp-icon","ytp-icon-full-screen"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"g",J:"ytp-fullscreen-button-corner-0",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"}}]},
{D:"g",J:"ytp-fullscreen-button-corner-1",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-2",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-3",G:[{D:"path",Fa:!0,J:"ytp-svg-fill",N:{d:"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"}}]}]},a=g.S("YTP_FULLSCREEN");this.updateValue("icon",b);this.updateValue("title",this.g?null:a);aU(this.B.l)};
g.h.T=function(){this.g||(this.o(),this.o=null);g.W.prototype.T.call(this)};g.r(OT,xS);g.h=OT.prototype;g.h.show=function(){var a=this.Na();xS.prototype.show.call(this);a||(this.o.M(this.g,"presentingplayerstatechange",this.lo),this.o.M(this.g,"videodatachange",this.lo),this.lo())};
g.h.hide=function(){this.o&&(g.at(this.o),xS.prototype.hide.call(this))};
g.h.lo=function(){var a=this.g.Y(),b=a.hg,c;for(c=0;c<b.length;c++){var d=this.l[c];d||(d=new g.W({D:"button",W:["ytp-multicam-menu-item","ytp-button"],N:{"aria-checked":"{{selected}}","data-id":"{{videoId}}"},G:[{D:"div",J:"ytp-multicam-menu-item-title",G:["{{cameraName}}"]}]}),d.ea("click",g.B(this.ME,c),this),d.ca(this.za),this.l[c]=d);var e=b[c],f=e.id;if(f!=d.element.getAttribute("data-id")){var k=e.thumbnail_url;!k&&f&&(k=vB(g.U(this.g),f,"default.jpg"));d.element.style.backgroundImage=k?"url("+
k+")":""}d.update({cameraName:e.title,videoId:f,selected:f==a.videoId?!0:null})}for(;c<this.l.length;)this.l.pop().dispose();c=g.tL(this.g);a=b.length||!a.Vb();DE(c)||g.T(c,4)||a||!zS(this)||this.Zf()};
g.h.ME=function(a){this.g.Y();var b=this.g;a=this.g.Y().hg[a];var c=g.V(b.app,1).g,d=b.getCurrentTime();a.id==c.videoId?g.V(b.app)!=g.V(b.app,1)&&(SO(b.app,1),c.oa||b.yb(d)):(SO(b.app,4),aW(b.app,{videoId:a.id,title:c.title,start:c.oa?null:d,multifeed_metadata_list:c.Bb.multifeed_metadata_list},4))};
g.h.focus=function(){for(var a=this.g.Y(),b=a.hg,c=0;c<b.length;c++)if(b[c].id==a.videoId){this.l[c].focus();break}};
g.h.T=function(){g.Ee(this.l);xS.prototype.T.call(this)};g.r(PT,g.W);PT.prototype.C=function(a){this.o("newdata"==a)};
PT.prototype.o=function(a){var b=this.g.Y(),c=b.hg,d=g.tL(this.g);d=(DE(d)||g.T(d,4))&&0<c.length;g.EM(this,d);a&&(this.A=!0);if(d){this.A&&g.Pp(this.B);a=null;d="";for(var e=0;e<c.length;e++)if(c[e].id==b.videoId){a=c[e].title;d=g.S("YTP_MULTICAM_INDEX",{CAMERA_INDEX:String(e+1),CAMERA_COUNT:String(c.length)})+"\n";break}this.update({text:d+a,preview:b.kc(g.U(this.g),"default.jpg")});aU(this.l)}else this.B.stop()};
PT.prototype.F=function(){iV(this.l,this.element,g.S("YTP_MORE_CAMERAS_AVAILABLE"));this.A=!1};g.r(QT,g.J);QT.prototype.l=function(){var a=g.It()-this.A;a=a<this.g?a/this.g:1;this.B($p(Gca,a));1>a&&this.o.start()};
var Gca=new Zp(0,0,.4,0,.2,1,1,1),Dba=/[0-9.-]+|[^0-9.-]+/g;g.r(XT,g.W);XT.prototype.Fc=function(a){this.o=300<=a.width;g.EM(this,this.o);this.g.Va(this.element,this.o&&this.F)};
XT.prototype.fa=function(){g.U(this.g).U?this.g.isMuted()?this.g.De():this.g.mute():this.X.Zf(this.element,!0);this.g.sc(this.element)};
XT.prototype.ia=function(a){WT(this,a.volume,a.muted)};
var Eba=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",24.77," C",21.89,",",23.85," ",24,",",21.17," ",24,",",18," C",24,",",14.83," ",21.89,",",12.15," ",19,",",11.29," L",19,",",11.29," Z"],Fba=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",26.77," C",23.01,",",25.86," ",26,",",22.28," ",26,",",18," C",26,",",13.72," ",
23.01,",",10.14," ",19,",",9.23," L",19,",",11.29," Z"];g.r(bU,g.W);bU.prototype.l=function(){var a=g.V(this.g.app);a&&(a=a.l,a.g.webkitSetPresentationMode("picture-in-picture"==a.g.webkitPresentationMode?"inline":"picture-in-picture"))};g.r(dU,g.W);dU.prototype.F=function(a){cU(this,a.state)};
dU.prototype.C=function(){g.O(this.element,"ytp-play-button-playlist",vL(this.l))};
dU.prototype.H=function(){DE(g.tL(this.l))?this.l.Wb():this.l.Oc()};
dU.prototype.T=function(){this.g&&this.g();g.W.prototype.T.call(this)};g.r(gU,g.W);g.h=gU.prototype;g.h.sh=function(){hU(this);this.F&&(this.Pa(this.F),this.F=null);this.C=this.g.Y(1);if(this.l=this.g.Ce())this.l.subscribe("shuffle",this.sh,this),this.F=this.M(this.g,"progresssync",this.sD);this.B=iU(this);fU(this);this.Fc(g.uL(this.g).Da())};
g.h.Fc=function(a){a=void 0===a?g.uL(this.g).Da():a;var b=vL(this.g)||this.o&&g.PL(this.g)||jU(this);g.EM(this,b&&(this.o||400<=a.width))};
g.h.tD=function(a){var b=!0;this.I?b=g.bS(a,this.g):g.Ts(a);b&&(this.o?this.g.rh(!0):this.B?this.g.yb(0):this.g.Ei(!0))};
g.h.sD=function(){var a=iU(this);a!=this.B&&(this.B=a,fU(this))};
g.h.T=function(){this.A&&(this.A(),this.A=null);hU(this);g.W.prototype.T.call(this)};kU.prototype.update=function(a,b,c,d){this.width=b;this.o=c;this.B=d;this.g=b-c-d;this.position=g.Uc(a,c,c+this.g);this.A=this.position-c;this.l=this.A/this.g};g.r(mU,g.XO);g.h=mU.prototype;g.h.uD=function(a){if(!g.Us(a)){var b=!1;switch(g.Vs(a)){case 36:this.l.yb(0);b=!0;break;case 35:this.l.yb(window.Infinity);b=!0;break;case 34:this.l.Md(-60);b=!0;break;case 33:this.l.Md(60);b=!0;break;case 38:this.l.Md(5);b=!0;break;case 40:this.l.Md(-5),b=!0}b&&g.Ts(a)}};
g.h.Gt=function(a,b){lU(this,b,"newdata"==a)};
g.h.iz=function(){this.Gt("newdata",this.l.Y())};
g.h.mz=function(){tU(this.l.Y())?g.tL(this.l).gb()&&uU(this,!0):uU(this,!1)};
g.h.jz=function(a){0<QE(a,64)||!tU(this.l.Y())?uU(this,!1):DE(a.state)&&0>QE(a,64)&&uU(this,!0);this.A&&!g.T(a.state,32)&&3!=this.l.Ca()&&this.A.cancel()};
g.h.CG=function(a,b,c){var d=g.xh(this.element),e=wU(this).g,f=c?c.getAttribute("data-tooltip"):void 0;f&&(a=zQ(this.g,Number(c.getAttribute("data-position")),0)*e+g.xh(this.zb).x);this.wa.x=a-d.x;this.wa.y=b-d.y;c=wU(this);a=yQ(this.g,c.l);d=f||g.iQ(this.Ka?a-this.g.g:a);b=this.Ga;c=c.position+this.Ab;f=!!f;b.ba||(3==b.g&&b.Yd(),1!=b.g&&(b.element.className="ytp-tooltip ytp-bottom",b.g=1,b.I&&b.H.show(),b.o=g.JD(b.L.Y()),b.o&&b.o.subscribe("l",b.pu,b)),b.update({text:d,title:""}),g.O(b.element,"ytp-text-detail",
!!f),d=-1,b.o&&(d=WB(b.o,160*b.A),d=b.o.g[d].Ii(a)),lV(b,d),jV(b,!!f,c));g.O(this.l.getRootNode(),"ytp-progress-bar-hover",!g.T(g.tL(this.l),64));pU(this)};
g.h.BG=function(){var a=this.Ga;1==a.g&&a.Yd();g.N(this.l.getRootNode(),"ytp-progress-bar-hover")};
g.h.AG=function(a,b){this.o&&(this.o.dispose(),this.o=null);this.Mb=b;this.l.yb(yQ(this.g,wU(this).l),!1);g.M(this.element,"ytp-drag");(this.Ma=DE(g.tL(this.l)))&&this.l.Wb()};
g.h.DG=function(){this.ma=0;g.N(this.element,"ytp-pull-ui");g.N(this.element,"ytp-pulling");this.o&&(this.o.dispose(),this.o=null);0<this.F&&(this.o=new g.Mp((0,g.A)(this.ky,this,g.It(),this.F,wU(this).position)),this.o.start());if(g.T(g.tL(this.l),32)||3==this.l.Ca())this.l.yb(yQ(this.g,wU(this).l)),g.N(this.element,"ytp-drag"),this.Ma&&!g.T(g.tL(this.l),2)&&this.l.Oc()};
g.h.ky=function(a,b,c){a=1-Math.pow(1-(g.It()-a)/200,3);c+=a*(this.C*this.B-c);if(0>a||1<a)a=1;vU(this,(1-a)*b,c,this.C);1>a&&this.o.start()};
g.h.EG=function(a,b){var c=!1,d=!1,e=wU(this);3600<=this.g.getLength()&&(vU(this,this.Mb-b-10,e.position,e.l),d=!0,c=this.F>.1*(this.H?60:40),e=wU(this));g.O(this.element,"ytp-pull-ui",d);c&&g.M(this.element,"ytp-pulling");c=0;e.o&&0>=e.position?c=-1:e.B&&e.position>=e.width&&(c=1);this.ma!=c&&(this.ma=c,this.o&&(this.o.dispose(),this.o=null),c&&(this.o=new g.Mp((0,g.A)(this.rI,this,g.It(),this.I)),this.o.start()));this.l.yb(yQ(this.g,e.l),!1)};
g.h.rI=function(a,b){var c=this.B*(this.V-1);this.I=g.Uc(b+this.ma*(g.It()-a)*.3,0,c);oU(this);this.l.yb(yQ(this.g,wU(this).l),!1);0<this.I&&this.I<c&&this.o.start()};
g.h.iu=function(){this.updateValue("clipstarticon",mP());this.updateValue("clipendicon",mP());g.M(this.element,"ytp-clip-hover")};
g.h.hu=function(){this.updateValue("clipstarticon",oP());this.updateValue("clipendicon",nP());g.N(this.element,"ytp-clip-hover")};
g.h.jl=function(){this.L=0;this.K=window.Infinity;sU(this);nU(this,this.C,this.fa)};
g.h.yw=function(a){a=g.q(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.visible){var c=b.getId();if(!this.P[c]){var d=g.yd("DIV");b.tooltip&&(d.setAttribute("data-tooltip",b.tooltip),d.setAttribute("data-position",b.start/1E3));this.P[c]=b;this.ia[c]=d;xU(this,b,d);"ytp-chapter-marker"==b.style?this.Bc.appendChild(d):this.Xb.appendChild(d)}}else zU(this,b)};
g.h.kI=function(a){a=g.q(a);for(var b=a.next();!b.done;b=a.next())zU(this,b.value)};
g.h.T=function(){rU(this,!1);g.XO.prototype.T.call(this)};g.r(AU,cT);AU.prototype.B=function(){g.nL(this.o).A&&3!=this.o.Ca()?this.g||(MU(this.A,this),this.g=!0):this.g&&(NU(this.A,this),this.g=!1);var a=g.nL(this.o).A;dT(this,!!a&&a.loaded)};
AU.prototype.C=function(a){a?this.o.Di("annotations_module"):this.o.Kk("annotations_module")};
AU.prototype.T=function(){this.g&&NU(this.A,this);cT.prototype.T.call(this)};g.r(g.BU,g.NS);g.h=g.BU.prototype;g.h.open=function(){g.YS(this.o,this.B)};
g.h.ce=function(a){if(this.C){var b=this.l[this.C];b.element.getAttribute("aria-checked");b.element.removeAttribute("aria-checked")}this.l[a].element.setAttribute("aria-checked",!0);this.sb(this.be(a));this.C=a};
g.h.enable=function(a){this.H?a||(this.H=!1,this.th(!1)):a&&(this.H=!0,this.th(!0))};
g.h.th=function(a){a?MU(this.o,this):NU(this.o,this)};
g.h.zc=function(a){this.O("select",a)};
g.h.wD=function(a){"true"!=this.l[a].element.getAttribute("aria-disabled")&&this.zc(a)};
g.h.be=function(a){return a.toString()};
g.h.vD=function(a){g.Us(a)||39!=g.Vs(a)||(this.open(),g.Ts(a))};
g.h.T=function(){this.H&&NU(this.o,this);g.NS.prototype.T.call(this);for(var a in this.l)this.l[a].dispose()};g.r(DU,g.BU);DU.prototype.F=function(){var a=this.g.Wn();1<a.length?(g.CU(this,(0,g.I)(a,this.A)),this.K=g.ob(a,this.A,this),this.I.sb(a.length?" ("+a.length+")":""),this.O("size-change"),this.ce(this.A(this.g.Pf())),this.enable(!0)):this.enable(!1)};
DU.prototype.zc=function(a){g.BU.prototype.zc.call(this,a);this.g.Zn(this.K[a]);this.o.Od()};
DU.prototype.A=function(a){return a.toString()};g.r(EU,cT);EU.prototype.B=function(){var a=this.g.Ca();if(2!=a&&3!=a&&g.PL(this.g))this.A||(MU(this.C,this),this.A=!0,this.o.push(this.M(this.g,"videodatachange",this.B)),this.o.push(this.M(this.g,"videoplayerreset",this.B)),this.o.push(this.M(this.g,"onPlaylistUpdate",this.B)),this.o.push(this.M(this.g,"autonavchange",this.F)),this.F(this.g.Y().autonavState));else if(this.A){NU(this.C,this);this.A=!1;a=g.q(this.o);for(var b=a.next();!b.done;b=a.next())this.Pa(b.value)}};
EU.prototype.F=function(a){dT(this,1!=a)};
EU.prototype.H=function(a){var b=this.g;a=a?2:1;b.app.l.la("onAutonavChangeRequest",1!=a);a&&tW(b.app,a)};
EU.prototype.T=function(){this.A&&NU(this.C,this);cT.prototype.T.call(this)};g.r(FU,g.BU);FU.prototype.A=function(){var a=this.g.Ca();if(2!=a&&3!=a&&(this.I=g.yL(this.g),a=this.g.Sn(),g.ML(this.g)&&g.NL(this.g)&&a.unshift("missing-qualities"),g.CU(this,a),a.length)){this.K();this.enable(!0);return}this.enable(!1)};
FU.prototype.K=function(){var a=g.zL(this.g);this.l[a]&&(this.F=this.g.Ci(),this.ce(a),"auto"==a&&this.sb(this.be(a)))};
FU.prototype.zc=function(a){"missing-qualities"!=a&&(g.BU.prototype.zc.call(this,a),this.g.Fi(a),this.o.qb())};
FU.prototype.be=function(a,b){b=void 0===b?!1:b;if("missing-qualities"==a)return{D:"a",N:{href:"https://support.google.com/youtube/?p=missing_quality",target:"_blank"},G:[g.S("YTP_MISSING_FORMATS")]};var c=[GU(this,a)],d=g.zL(this.g);b||"auto"!=d||"auto"!=a||(c.push(" "),c.push(GU(this,this.F,["ytp-menu-label-secondary"])));return{D:"div",G:c}};g.r(HU,g.W);HU.prototype.Fc=function(a){g.EM(this,this.A&&400<=a.width)};
HU.prototype.B=function(){if(this.o.Na())this.o.qb();else{var a=g.nL(this.g).l;a&&!a.loaded&&(a.Ln("tracklist",{includeAsr:!0}).length||a.load());this.o.Id(this.element)}};
HU.prototype.l=function(){var a=this.g.Ca(),b=2!=a&&3!=a,c=g.AL(this.g),d=b&&!!g.nL(this.g).o;a=d&&1==c.Qe;c=d&&2==c.Qe;b=(d=a||c)||!b?null:this.g.Ci();g.O(this.element,"ytp-hd-quality-badge","hd720"==b||"hd1080"==b||"hd1440"==b);g.O(this.element,"ytp-4k-quality-badge","hd2160"==b);g.O(this.element,"ytp-5k-quality-badge","hd2880"==b);g.O(this.element,"ytp-8k-quality-badge","highres"==b);g.O(this.element,"ytp-3d-badge-grey",d&&a);g.O(this.element,"ytp-3d-badge",d&&c)};g.r(JU,g.BU);g.h=JU.prototype;g.h.no=function(a){return a.toString()};
g.h.be=function(a){return"1"==a?g.S("YTP_NORMAL_SPEED"):a.toString()};
g.h.It=function(){var a=this.g.Ca();this.enable(2!=a&&3!=a)};
g.h.th=function(a){g.BU.prototype.th.call(this,a);a?(this.A=this.M(this.g,"onPlaybackRateChange",this.yD),g.CU(this,(0,g.I)(this.g.ph(),this.no)),this.ce(this.no(this.g.dc()))):(this.Pa(this.A),this.A=null)};
g.h.yD=function(a){this.ce(this.no(a))};
g.h.zc=function(a){g.BU.prototype.zc.call(this,a);this.g.Be((0,window.parseFloat)(a),!0);this.o.Od()};g.r(KU,g.US);KU.prototype.Id=function(a){LU(this);0<this.l.za.length&&g.US.prototype.Id.call(this,a)};
KU.prototype.show=function(){g.US.prototype.show.call(this);g.M(this.o.getRootNode(),"ytp-settings-shown")};
KU.prototype.hide=function(){g.US.prototype.hide.call(this);g.N(this.o.getRootNode(),"ytp-settings-shown")};g.r(OU,g.W);
OU.prototype.l=function(){var a=!1;-1!=this.g.Eg().indexOf("remote")&&(a=1<this.g.Lb("remote","receivers").length);g.EM(this,a&&400<=g.uL(this.g).Da().width);var b=1;a&&this.g.Lb("remote","casting")&&(b=2);if(this.o!=b){this.o=b;switch(b){case 1:this.updateValue("icon",g.Y?{D:"div",W:["ytp-icon","ytp-icon-cast-desktop-off"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z",fill:"#fff"}}]});
break;case 2:this.updateValue("icon",g.iP())}g.O(this.element,"ytp-remote-button-active",!!this.g.Lb("remote","casting"))}};
OU.prototype.B=function(){if(this.g.Lb("remote","quickCast"))this.g.Pc("remote","quickCast",!0);else{var a=this.A,b=this.element;if(zS(a))a.qb();else{LU(a);a:{var c=g.q(a.l.za);for(var d=c.next();!d.done;d=c.next())if(d=d.value,0==d.priority){c=d;break a}c=null}c&&(c.open(),a.Id(b));a.Id(b)}}};g.r(PU,g.W);PU.prototype.C=function(){var a=this.g.app;a.l.la("SIZE_CLICKED",!a.Bc)};
PU.prototype.l=function(){g.EM(this,this.g.app.xd&&!this.g.isFullscreen()&&3!=this.g.Ca());if(this.Na()){var a=this.g.isWidescreen();if(this.o!=a){var b=a?g.Y?{D:"div",W:["ytp-icon","ytp-icon-default-view"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Fa:!0,N:{d:"m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z",fill:"#fff","fill-rule":"evenodd"}}]}:g.Y?{D:"div",W:["ytp-icon","ytp-icon-theater-mode"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",
width:"100%"},G:[{D:"path",Fa:!0,N:{d:"m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z",fill:"#fff","fill-rule":"evenodd"}}]};g.U(this.g).X||null==this.o?this.updateValue("icon",b):VT(this.B,this.element,b);a=(this.o=a)?g.S("YTP_DEFAULT_VIEW"):g.S("YTP_THEATER_MODE");this.updateValue("title",a);aU(this.A)}}};g.r(QU,g.W);QU.prototype.o=function(){var a=g.nL(this.l).l;a&&a.dw()};
QU.prototype.g=function(){var a=!!g.nL(this.l).l;g.EM(this,a&&300<=g.uL(this.l).Da().width);a&&this.updateValue("pressed",!!this.l.Lb("captions","track").displayName)};g.r(RU,g.W);
RU.prototype.o=function(){var a=g.uL(this.B).Da().width,b=350<=a&&(!this.l||!g.T(g.tL(this.B),64));g.EM(this,b);g.O(this.element,"ytp-time-display-allow-autohide",b&&400>a);a=this.B.Qf();b&&(b=g.iQ(a.current),this.F!=b&&(this.updateValue("currenttime",b),this.F=b),b=g.iQ(a.duration),this.H!=b&&(this.updateValue("duration",b),this.H=b));this.l&&(a=a.isPeggedToLive,this.C!=a&&(this.C=a,this.o(),b=this.A.element,(b.disabled=a)?this.g&&(this.g(),this.g=null,b.removeAttribute("title")):(b.title=g.S("YTP_GOTO_LIVE_TOOLTIP"),
this.g=KS(this.I,this.A.element))))};
RU.prototype.L=function(a,b){this.l=b.oa;g.O(this.element,"ytp-live",this.l);this.o()};
RU.prototype.K=function(a){a.target==this.A.element&&(this.B.yb(window.Infinity),this.B.Oc())};
RU.prototype.T=function(){this.g&&this.g();g.W.prototype.T.call(this)};g.r(TU,g.W);g.h=TU.prototype;g.h.GD=function(){var a=this.C.cd();this.F!=a&&(this.F=a,SU(this,this.g.getVolume(),this.g.isMuted()))};
g.h.Fc=function(a){g.EM(this,350<=a.width)};
g.h.kH=function(a){if(!g.Us(a)){var b=g.Vs(a),c=null;37==b?c=this.A-5:39==b?c=this.A+5:36==b?c=0:35==b&&(c=100);null!=c&&(c=g.Uc(c,0,100),0==c?this.g.mute():(this.g.isMuted()&&this.g.De(),this.g.setVolume(c)),g.Ts(a))}};
g.h.HD=function(a){var b=a.deltaX||-a.deltaY;a.deltaMode?this.g.setVolume(this.A+(0>b?-10:10)):this.g.setVolume(this.A+g.Uc(b/10,-10,10));g.Ts(a)};
g.h.jH=function(){UU(this,this.o,!0,this.l,this.C.K);this.R=this.A;this.g.isMuted()&&this.g.De()};
g.h.iH=function(a){a-=g.xh(this.P).x;this.g.setVolume(100*g.Uc(a/(this.F?78:52),0,1))};
g.h.hH=function(){UU(this,this.o,!1,this.l,this.C.K);0==this.A&&(this.g.mute(),this.g.setVolume(this.R))};
g.h.ID=function(a){SU(this,a.volume,a.muted)};
g.h.kq=function(){UU(this,this.o,this.B,this.l,this.C.K)};
g.h.Nt=function(a){UU(this,this.o,this.B,a,this.C.K)};
g.h.Kv=function(a){g.O(this.element,"ytp-volume-control-hover",a);UU(this,a,this.B,this.l,this.C.K)};
g.h.T=function(){g.W.prototype.T.call(this);g.N(this.L,"ytp-volume-slider-active")};g.r(VU,g.W);VU.prototype.A=function(){this.l=!!this.g.Y().videoId;g.EM(this,this.l);this.g.Va(this.element,this.l&&this.o);if(this.l){var a=this.g.getVideoUrl(!0,!1,!1,!0);this.updateValue("url",a)}};
VU.prototype.B=function(a){var b=this.g.getVideoUrl(!g.jQ(a),!1,!0,!0);cS(b,this.g,a);this.g.sc(this.element)};g.r(WU,g.Zs);g.h=WU.prototype;g.h.po=function(){var a=this.C;qU(a);var b=a.l.getCurrentTime();(b<a.L||b>a.K)&&a.jl();this.R.o()};
g.h.du=function(){this.qp();!this.U.g||this.po()};
g.h.tF=function(){this.po();this.H.start()};
g.h.qp=function(){var a;if(a=!g.U(this.A).l){a=this.C;var b=2*a.B*g.yB();a=300>1E3*a.g.getLength()/a.l.dc()/b}a=a&&g.tL(this.A).gb()&&!!window.requestAnimationFrame;b=!a;this.U.g||(a=b=!1);b?this.I||(this.I=this.M(this.A,"progresssync",this.po)):this.I&&(this.Pa(this.I),this.I=null);a?this.H.isActive()||this.H.start():this.H.stop()};
g.h.cJ=function(a){gV(this.o.l,!a)};
g.h.ec=function(){var a=this.o.cd(),b=g.uL(this.A).Da(),c=YU(this),d=Math.max(b.width-2*c,100);if(this.X!=b.width||this.aa!=a){this.X=b.width;this.aa=a;var e=ZU(this);this.l.element.style.width=e+"px";this.l.element.style.left=c+"px";var f=this.C;f.Ab=c;f.B=e;f.H=a;oU(f);this.o.l.fa=e}c=this.g;b=Math.min(413*(a?1.5:1),Math.round(.82*(b.height-(this.o.cd()?72:50))));c.P=Math.min(570*(a?1.5:1),d);c.L=b;c.aj();this.qp()};
g.h.ha=function(){return this.l.element};g.r(g.$U,g.W);g.$U.prototype.l=function(){g.M(this.element,"ytp-sb-subscribed")};
g.$U.prototype.o=function(){g.N(this.element,"ytp-sb-subscribed")};g.y("yt.pubsub.publish",g.ut,void 0);g.r(cV,g.W);cV.prototype.R=function(a){this.g.sc(this.element);var b=this.g.getVideoUrl(!g.jQ(a),!1,!0);cS(b,this.g,a)};
cV.prototype.H=function(){dV(this);var a=this.g.Y();this.updateValue("title",a.title);this.A&&(this.A.g=a.bj);var b=g.U(this.g);if(b.K&&2!=this.g.Ca()){var c=a.shortViewCount;g.O(this.g.getRootNode(),"ytp-show-title-view-count",!!c);this.updateValue("viewCount",c)}else g.N(this.g.getRootNode(),"ytp-show-title-view-count"),this.updateValue("viewCount","");!b.I&&a.videoId?(this.updateValue("url",this.g.getVideoUrl(!0)),this.o||(this.o=this.M(this.P,"click",this.R))):this.o&&(this.updateValue("url",
null),this.Pa(this.o),this.o=null)};g.r(eV,g.W);g.h=eV.prototype;g.h.cG=function(a){3==this.g&&this.Yd();a=a.currentTarget;this.g||(a.removeEventListener("mouseover",this.P),a.addEventListener("mouseout",this.ia),hV(this,a,2))};
g.h.ZF=function(a){(a=Rs(a))&&g.Kd(this.l,a)||this.Yd()};
g.h.pu=function(a,b){if(a<=this.B&&this.B<=b){var c=this.B;this.B=window.NaN;lV(this,c)}};
g.h.Zz=function(){ZB(this.o,this.B,160*this.A)};
g.h.Yd=function(){switch(this.g){case 2:this.l.removeEventListener("mouseout",this.ia),this.l.addEventListener("mouseover",this.P);case 3:3==this.g&&this.X.stop();this.L.removeEventListener("appresize",this.R);this.K||this.l.setAttribute("title",this.C);this.C="";this.l=null;break;case 1:this.o&&(this.o.unsubscribe("l",this.pu,this),this.o=null),this.L.removeEventListener("videoready",this.R),this.V.stop()}this.g=null;this.I&&this.H.hide()};
g.h.Zg=function(a){if(this.l)for(var b=0;b<arguments.length;b++)g.Kd(arguments[b],this.l)&&this.Yd()};
g.h.T=function(){null!=this.g&&this.Yd();g.W.prototype.T.call(this)};g.r(pV,g.W);g.h=pV.prototype;g.h.Fc=function(a){this.A=300<=a.width;g.EM(this,this.A);a=480<a.width;g.U(this.g).K&&(g.O(this.H,"ytp-show-watch-later-title",a),this.updateValue("watch_later",a?g.S("YTP_WATCH_LATER_2"):""));this.g.Va(this.element,this.A&&this.C)};
g.h.HH=function(){this.l=!0;this.o=!1;oV(this,1);g.U(this.g).l&&iV(this.F,this.element);g.U(this.g).ob&&this.g.la("WATCH_LATER_VIDEO_ADDED")};
g.h.JD=function(){this.g.sc(this.element);var a=this.g.Y().videoId,b=g.U(this.g);b.jc?nV(this,a):g.bV(function(){Yu({videoId:a});window.location.reload()},null,"wl_button",800,600,tB(b))};
g.h.IH=function(a,b){this.o=!1;var c=g.S("YTP_ERROR_GENERIC_WITHOUT_LINK");b&&(c=b.errors&&b.errors.length?b.errors[0]:b.error_message);oV(this,4,c);g.U(this.g).ob&&this.g.la("WATCH_LATER_ERROR",c)};
g.h.JH=function(){this.o=this.l=!1;oV(this,2);g.U(this.g).ob&&this.g.la("WATCH_LATER_VIDEO_REMOVED")};
g.h.KD=function(){this.o=this.l=!1;oV(this,2)};g.r(qV,g.W);qV.prototype.B=function(a){g.EM(this,!g.T(a.state,2))};
qV.prototype.o=function(){if(this.l.Y().videoId){var a=this.l.getVideoUrl(!0,!1,!1,!0);this.updateValue("url",a);this.g||(this.g=this.ea("click",this.A))}else this.g&&(this.updateValue("url",null),this.Pa(this.g),this.g=null)};
qV.prototype.A=function(a){var b=this.l.getVideoUrl(!g.jQ(a),!1,!0,!0);cS(b,this.l,a)};g.r(rV,DS);g.h=rV.prototype;g.h.rm=function(a,b){b?this.U=a:this.U=null;this.hf()};
g.h.sm=function(a,b){if(b)this.H.push(a);else for(var c=this.H.length;0<=c;c--)if(this.H[c]==a){this.H.splice(c,1);break}this.A.xb(64,0<this.H.length)};
g.h.Ah=function(){g.CL(this.g)&&g.DL(this.g);ES(this);return!!this.U||DS.prototype.Ah.call(this)};
g.h.hf=function(){var a=!this.Ah(),b=a&&g.CL(this.g)&&!g.T(g.tL(this.g),2);a?(this.Ta.show(),this.Ua.show()):(this.Ta.hide(),this.Ua.hide(),this.l.Zg(this.B.element));b?this.R.o.show():this.R.o.hide();this.o&&XU(this.o,!a);DS.prototype.hf.call(this)};
g.h.zo=function(a){a&&(this.l.Zg(this.B.element),this.o&&this.l.Zg(this.o.ha()));DS.prototype.zo.call(this,a)};
g.h.fD=function(a){var b=this.g.getRootNode();a?b.parentElement?(b.setAttribute("aria-label",g.S("YTP_PLAYER_FULLSCREEN")),b.parentElement.insertBefore(this.aa.element,b),b.parentElement.insertBefore(this.V.element,b.nextSibling)):g.Q(Error("Player not in DOM.")):(b.setAttribute("aria-label",g.S("YTP_PLAYER_NORMAL")),g.AM(this.aa),g.AM(this.V));this.ee();this.Ug()};
g.h.cd=function(){return this.g.isFullscreen()||!1};
g.h.ee=function(){var a=this.cd();this.l.A=a?1.5:1;g.O(this.I.element,"ytp-big-mode",a);DS.prototype.ee.call(this)};
g.h.Ug=function(){DS.prototype.Ug.call(this);this.g.Va(this.Ma.element,!!this.L);var a=this.Ra,b=!!this.L;a.B=b;a.g.Va(a.element,a.l&&b);this.ma&&(a=this.ma,b=!!this.L,a.C=b,a.g.Va(a.element,a.A&&b));if(!this.L)for(this.l.Zg(this.B.element),a=0;a<this.fa.length;a++)b=this.fa[a],zS(b)&&b.qb()};
g.h.ql=function(a){this.o&&XU(this.o,this.Ah());DS.prototype.ql.call(this,a)};
g.h.lG=function(){FL(this.g)&&this.A.xb(128,!1)};
g.h.Tj=function(){return this.I.Na()?(this.I.qb(),!0):this.H.length?(this.H[this.H.length-1].qb(),!0):this.U?(this.U.qb(),!0):DS.prototype.Tj.call(this)};
g.h.DI=function(a,b){this.Ab=b;this.sm(a,b);this.tw()};
g.h.tw=function(){var a=this.Ab||zS(this.I);this.ya!=a&&(this.ya=a,this.g.la("onAutonavPauseRequest",this.ya))};
g.h.Hy=function(){sV(this,this.g.getRootNode(),!0).focus()};
g.h.Iy=function(){sV(this,this.g.getRootNode(),!1).focus()};tV.prototype.click=function(a){var b=a.getAttribute("data-visual-id");g.Sa(this.g,a);g.Sa(this.l,b);QL(this,"onLogVeClicked",{id:b})};
tV.prototype.F=function(a){g.Sa(this.g,a);var b=a.getAttribute("data-visual-id");g.Xa(this.g,a);g.Xa(this.o,b);g.Xa(this.l,b);a.removeAttribute("data-visual-id")};
tV.prototype.pause=function(){this.A=!0};
tV.prototype.resume=function(){this.A=!1;for(var a=g.q(this.B),b=a.next();!b.done;b=a.next())b=b.value,QL(this,b.type,b.data);this.B.length=0};g.r(uV,g.J);g.h=uV.prototype;g.h.pE=function(){xV(this)||g.MV(this,5)};
g.h.tG=function(a){xV(this)||(mW(this),DE(a.o)&&rW(this))};
g.h.Yc=function(){var a=this.A,b={};a.l&&g.Ia(b,a.l.YA());this.A.B&&g.Ia(b,{});b.fs=this.l.isFullscreen();b.volume=Math.round(this.U.getVolume());b.mos=this.U.isMuted()?1:0;if(this.g.experiments.g("html5_enable_embedded_player_visibility_signals")&&this.g.o&&(this.Gc&&(a=this.Gc,a=null==a.l?null:Math.round(100*a.l)/100,null!=a&&(b.inview=a)),a=this.H.Da(),0<a.height&&0<a.width)){a=[Math.round(a.height),Math.round(a.width)];var c=g.yB();1<c&&a.push(c);b.size=a.join(":")}return b};
g.h.getCurrentTime=function(a){return 3==rL(this)?g.sL(this.A).getCurrentTime():(a=g.V(this,a))?a.getCurrentTime():0};
g.h.getDuration=function(a){return(a=g.V(this,a))?a.getDuration():0};
g.h.tA=function(a){switch(a.type){case "loadedmetadata":WC("fvb","")||this.I.g("fvb");g.FC("fvb",void 0,"video_to_ad");this.Ua.start();break;case "loadstart":WC("gv","")||this.I.g("gv");g.FC("gv",void 0,"video_to_ad");break;case "progress":case "timeupdate":!WC("l2s","")&&2<=iE(tE(a.target))&&this.I.g("l2s");break;case "playing":g.BB&&this.Ua.start();if(g.gB(this.g))a=!1;else{var b=this.A.o;a="none"==ph(this.B.g,"display")||0==g.Gh(this.B.g).yd();b=!JR(this.H)||b||!this.g.C||this.g.tf;a=a&&!b}a&&
(this.F.tc("hidden","1",!0),EV(this).Uf||qW(this,"hidden",!0))}};
g.h.CF=function(a,b){this.l.la("onLoadProgress",b)};
g.h.lH=function(){this.l.O("playbackstalledatstart")};
g.h.uA=function(a,b){this.l.la("onVideoProgress",b)};
g.h.rA=function(){this.U.O("progresssync")};
g.h.oA=function(a){0<QE(a,1)&&!g.T(a.state,64)&&this.o.g.oa&&MK(this.o)&&1<this.l.dc()&&RV(this,1,!0);var b;if(b=0<QE(a,2))this.C&&(g.lB(this.g)||this.l.isFullscreen()&&!this.Ga)&&g.hW(this)?(b=this.g.experiments.g("html5_player_autonav_logging"),iW(this,!1,b),b=!0):b=!1,b=!b;b&&(b=this.o.l)&&Es(b.g);g.T(a.state,128)&&(b=a.state,bW(this),b=b.g,this.l.la("onError",dX[b.errorCode]||5),this.l.la("onDetailedError",b),6048E5<g.It()-this.g.qj&&this.l.la("onReloadRequired"));!a.state.gb()||g.LE(a.state)||
WC("pbresume")||(b=EV(this),g.GC("cpn",b.clientPlaybackNonce,"ad_to_video"),b.videoId&&g.GC("docid",b.videoId,"ad_to_video"),b.playbackId&&g.GC("plid",b.playbackId,"ad_to_video"),g.FC("pbresume",void 0,"ad_to_video"));this.l.O("applicationplayerstatechange",a)};
g.h.Pu=function(a){3!=rL(this)&&(this.g.experiments.g("html5_ignore_playing_evt")||!g.T(a.state,32)&&0>QE(a,16)&&(!g.T(a.state,8)||g.T(a.state,64)||this.B.g.ended||g.T(a.state,2)||rW(this)),this.l.O("presentingplayerstatechange",a))};
g.h.qA=function(a){PV(this,ME(a.state));g.T(a.state,1024)&&this.l.app.X&&(Iv(this,{muted:!1,volume:this.K.volume},!1),NV(this,!1))};
g.h.yG=function(a){a.state.gb()&&!g.LE(a.state)&&(wR(this.A),g.at(this.Ec))};
g.h.oE=function(a){"newdata"==a&&VV(this)};
g.h.sE=function(){this.l.la("onPlaybackAudioChange",this.l.Pf().bc.name)};
g.h.DH=function(a){a==this.F.g&&this.l.la("onPlaybackQualityChange",a.Ba.video.quality)};
g.h.Fn=function(a,b,c){if("newdata"==a)BR(this.A),this.l.O("videoplayerreset",b);else{if(!this.B)return;if("dataloaded"==a)if(this.F==this.o){if(b.A.jf(c.Bb),!this.o.o.isError()){var d=xV(this),e=this.o.g;if(!KD(e)||d||wD(this.o.g))e.Vb(),d&&g.MV(this,6),FV(this),d||(e=this.A.B)&&!e.created&&xR(this.A)&&this.A.B.create();else if(this.g.experiments.g("html5_defer_background_errors")&&Qv())hL(this.o,"app_none_avail");else{d=e.oa&&!g.iA()?"html5.unsupportedlive":"fmt.noneavailable";var f=+!!e.adaptiveFormats,
k=+!!e.hd,l=+(0<=e.Ih.indexOf("itag=18")),m=+(0<=e.Ih.indexOf("itag=43")),n=+GV('video/mp4; codecs="avc1.42001E, mp4a.40.2"'),p=+GV('video/webm; codecs="vp8.0, vorbis"');f="nosupported.1;a."+f+";d."+k+";"+("f18."+l+";c18."+n+";f43."+m+";c43."+p);e.ka&&(f+=";f133."+ +!!e.ka.g["133"]+";f140."+ +!!e.ka.g["140"]);g.rK(this.o,d,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK",f)}}}else FV(this);1==b.getPlayerType()&&(this.g.U&&uW(this),EV(this).oa&&!this.g.Uj&&g.rK(this.o,"html5.unsupportedlive","YTP_DEVICE_FALLBACK",
void 0),c.Vb()&&(c.al||c.Bn||c.Dd.focEnabled||c.Dd.rmktEnabled||EV(this).Sp)&&(e=EV(this),YV(this,"part2viewed",1,0x8000000000000),YV(this,"engagedview",Math.max(1,1E3*e.je),0x8000000000000),e.oa||(e=1E3*e.lengthSeconds,YV(this,"videoplaytime25",.25*e,e),YV(this,"videoplaytime50",.5*e,e),YV(this,"videoplaytime75",.75*e,e),YV(this,"videoplaytime100",e,0x8000000000000),YV(this,"conversionview",e,0x8000000000000))));this.l.O("videodatachange",a,c,b.getPlayerType())}this.g.ob&&this.l.la("onVideoDataChange",
{type:a,playertype:b.getPlayerType()});a=c.clientScreenNonce;c=c.rootVeType;a&&c&&(b=this.L,a!=b.C&&(b.C=a,QL(b,"onScreenChanged",{csn:a,root_ve_type:c}),b.l.length&&QL(b,"onLogVesShown",{ids:b.l}),b.o=g.ab(b.l)))};
g.h.Lj=function(){IV(this,null);this.l.la("onPlaylistUpdate")};
g.h.au=function(a){var b=a.getId(),c=this.o.g;if("part2viewed"==b)c.Zu&&g.Wr(c.Zu),c.Bn&&g.Wr(c.Bn);else if("conversionview"==b){var d=this.o;d.C&&wF(d.C)}else"engagedview"==b&&g.Wr(c.al);if(c.bl){d=c.bl;var e={label:a.getId()};if(this.g.experiments.g("send_pyv_ad_mt_and_abandon_pings")){var f=1E3*this.getCurrentTime();e.ad_mt=Math.round(Math.max(0,f)).toString()}d=g.rr(d,e);g.Wr(d)}switch(b){case "videoplaytime25":c.ds&&g.Wr(c.ds);g.Wr(c.ZH);break;case "videoplaytime50":c.es&&g.Wr(c.es);g.Wr(c.aI);
break;case "videoplaytime75":c.gs&&g.Wr(c.gs);g.Wr(c.bI);break;case "videoplaytime100":c.Zr&&g.Wr(c.Zr),g.Wr(c.YH)}(b=EV(this).Sp)&&b[a.getId()]&&(c=b[a.getId()],g.Wr(c,void 0,hv(c)||ov(c)||fv(c)),b=b[a.getId()+"gaia"],g.Wr(b,void 0,hv(b)||ov(b)||fv(b)));this.o.K.C(a)};
g.h.isPeggedToLive=function(a){return MK(this.o,void 0,void 0===a?!1:a)};
g.h.sA=function(a,b){var c=a.g;if(1==this.R||2==this.R)c.startSeconds=b;2==this.R?KV(this):this.l.O("seekto",b)};
g.h.gE=function(){this.l.O("airplayactivechange")};
g.h.hE=function(){this.l.O("airplayavailabilitychange")};
g.h.xE=function(){this.l.O("beginseeking")};
g.h.hF=function(){this.l.O("endseeking")};
g.h.Fo=function(){var a=this.C.Eb(),b=EV(this);b.Kg||!this.ia?(b=b.Jf,a=$V(this,a),b&&cW(this,a)):a&&dW(this,a);this.l.la("onPlaylistUpdate")};
g.h.mE=function(a){this.l.la("onCueRangeEnter",a.getId())};
g.h.nE=function(a){this.l.la("onCueRangeExit",a.getId())};
g.h.qE=function(){this.sa||(this.sa=tC(this.ju,this));CF(this.I,lW(this))};
g.h.vF=function(){this.U.O("internalAbandon")};
g.h.ju=function(a){a=a.g;if(!(0,window.isNaN)(a)&&0<a&&this.o){var b=this.o;b.C&&0<a&&(b.C.l.l.aft=[a])}};
g.h.VF=function(){this.xo()};
g.h.WF=function(){this.xo()};
g.h.xo=function(){this.g.ob&&this.F?this.l.la("onApiChange",this.F.getPlayerType()):this.l.la("onApiChange")};
g.h.TF=function(){var a={volume:g.Uc(Math.floor(100*this.B.getVolume()),0,100),muted:this.B.g.muted};a.muted||NV(this,!1);this.K=g.gc(a);this.l.la("onVolumeChange",a)};
g.h.lF=function(){var a=g.Ds();pW(this,a==this.H.element?1:0);oW(this,!!a&&g.Kd(this.H.element,a))};
g.h.SG=function(){2!=this.Ta&&pW(this,g.Ds()==this.H.element?1:0);this.g.fj&&EV(this)&&!EV(this).backgroundable&&this.B&&.33>window.outerHeight*window.outerWidth/(window.screen.width*window.screen.height)&&Es(this.B.g)};
g.h.BF=function(a){3!=rL(this)&&this.l.O("liveviewshift",a)};
g.h.isWidescreen=function(){return this.Bc};
g.h.RG=function(a){var b=g.rN(this.H);g.Yg(this.ud,b)||(this.ud=b,this.F&&TK(this.F,"r"),this.o&&this.o!=this.F&&TK(this.o,"r"),1==this.Ta&&this.Ka&&oW(this,!0));this.Xb&&g.bd(this.Xb,a)||(this.l.O("appresize",a),this.Xb=a)};
g.h.qc=function(){return this.U.qc()};
g.h.gH=function(){qW(this,"signature")};
g.h.fG=function(){BV(this);AV(this)};
g.h.QE=function(){this.l.la("CONNECTION_ISSUE")};
g.h.pA=function(a){this.l.O("heartbeatparams",a)};
g.h.kG=function(){var a=g.V(this);a&&g.jL(a,!FL(this.l))};
g.h.DF=function(){this.l.la("onLoadedMetadata")};
g.h.eF=function(){this.l.la("onDrmOutputRestricted")};
g.h.T=function(){this.o.dispose();BV(this);g.Ee(g.Wb(this.Ra),this.C);g.sC(this.sa);this.sa=0;this.Ha&&this.Ha.dispose();g.J.prototype.T.call(this)};
var yX={};g.y("yt.player.Application.create",function(a,b){try{var c=g.w(a)?a:"player"+g.Ea(a);if(yX[c]){try{yX[c].dispose()}catch(e){g.Q(e)}yX[c]=null}var d=new uV(a,b);g.Ce(d,function(){yX[c]=null});
return yX[c]=d}catch(e){throw g.Q(e),e.stack;}},void 0);
var zX=g.z("ytcsi.tick");zX&&zX("pe");})(_yt_player);
