// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__25866__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25867__i = 0, G__25867__a = new Array(arguments.length -  0);
while (G__25867__i < G__25867__a.length) {G__25867__a[G__25867__i] = arguments[G__25867__i + 0]; ++G__25867__i;}
  args = new cljs.core.IndexedSeq(G__25867__a,0,null);
} 
return G__25866__delegate.call(this,args);};
G__25866.cljs$lang$maxFixedArity = 0;
G__25866.cljs$lang$applyTo = (function (arglist__25868){
var args = cljs.core.seq(arglist__25868);
return G__25866__delegate(args);
});
G__25866.cljs$core$IFn$_invoke$arity$variadic = G__25866__delegate;
return G__25866;
})()
);

(o.error = (function() { 
var G__25869__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25870__i = 0, G__25870__a = new Array(arguments.length -  0);
while (G__25870__i < G__25870__a.length) {G__25870__a[G__25870__i] = arguments[G__25870__i + 0]; ++G__25870__i;}
  args = new cljs.core.IndexedSeq(G__25870__a,0,null);
} 
return G__25869__delegate.call(this,args);};
G__25869.cljs$lang$maxFixedArity = 0;
G__25869.cljs$lang$applyTo = (function (arglist__25871){
var args = cljs.core.seq(arglist__25871);
return G__25869__delegate(args);
});
G__25869.cljs$core$IFn$_invoke$arity$variadic = G__25869__delegate;
return G__25869;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
