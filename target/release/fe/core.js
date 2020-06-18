// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('fe.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('fe.components.header');
goog.require('fe.components.button');
fe.core.new_individual = (function fe$core$new_individual(){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((100),(function (){
return cljs.core.rand_int((2));
}));
});
fe.core.modifications = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$goal,(73),cljs.core.cst$kw$population,(100)], null));
if((typeof fe !== 'undefined') && (typeof fe.core !== 'undefined') && (typeof fe.core.population !== 'undefined')){
} else {
fe.core.population = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100));
}
fe.core.best_individual = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(fe.core.new_individual());
fe.core.report = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Report: "], null));
fe.core.greeting = (function fe$core$greeting(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,message], null);
});
fe.core.mutate = (function fe$core$mutate(individual){
var iter__4529__auto__ = (function fe$core$mutate_$_iter__26379(s__26380){
return (new cljs.core.LazySeq(null,(function (){
var s__26380__$1 = s__26380;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26380__$1);
if(temp__5735__auto__){
var s__26380__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26380__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26380__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26382 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26381 = (0);
while(true){
if((i__26381 < size__4528__auto__)){
var b = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26381);
cljs.core.chunk_append(b__26382,(((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.01))?b:((1) - b)));

var G__26383 = (i__26381 + (1));
i__26381 = G__26383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26382),fe$core$mutate_$_iter__26379(cljs.core.chunk_rest(s__26380__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26382),null);
}
} else {
var b = cljs.core.first(s__26380__$2);
return cljs.core.cons((((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.01))?b:((1) - b)),fe$core$mutate_$_iter__26379(cljs.core.rest(s__26380__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(individual);
});
fe.core.error = (function fe$core$error(individual){
var G__26384 = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,individual) - (73));
return Math.abs(G__26384);
});
fe.core.better = (function fe$core$better(i1,i2){
return (fe.core.error(i1) < fe.core.error(i2));
});
fe.core.evolve = (function fe$core$evolve(popsize){
cljs.core.reset_BANG_(fe.core.report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Report: "], null));

var generation = (0);
var population = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(fe.core.better,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(popsize,fe.core.new_individual));
while(true){
var best = cljs.core.first(population);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fe.core.report,cljs.core.conj,["Generation:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(generation),", Best error:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fe.core.error(best))].join(''));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Generation:",generation,", Best error:",fe.core.error(best)], 0));

if((fe.core.error(best) === (0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fe.core.report,cljs.core.conj,["Success: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,best))].join(''));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success:",best], 0));
} else {
var better_half = cljs.core.take.cljs$core$IFn$_invoke$arity$2(((popsize / (2)) | (0)),population);
var G__26385 = (generation + (1));
var G__26386 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(fe.core.better,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fe.core.mutate,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(better_half,better_half)));
generation = G__26385;
population = G__26386;
continue;
}
break;
}
});
fe.core.goal_input = (function fe$core$goal_input(goal){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref(goal),cljs.core.cst$kw$on_DASH_change,(function (p1__26387_SHARP_){
return cljs.core.reset_BANG_(goal,p1__26387_SHARP_.target.value);
})], null)], null);
});
fe.core.goal_state = (function fe$core$goal_state(){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((73));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The goal is now ",cljs.core.deref(val)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe.core.goal_input,val], null)], null)], null);
});
});
fe.core.run_button = (function fe$core$run_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$run,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Run Evolution",cljs.core.cst$kw$on_DASH_click,(function (){
return fe.core.evolve(cljs.core.deref(fe.core.population));
})], null)], null)], null);
});
fe.core.population_input = (function fe$core$population_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Population: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$max,"1000",cljs.core.cst$kw$min,"0",cljs.core.cst$kw$value,cljs.core.deref(fe.core.population),cljs.core.cst$kw$on_DASH_change,(function (p1__26388_SHARP_){
return cljs.core.reset_BANG_(fe.core.population,p1__26388_SHARP_.target.value);
})], null)], null)], null);
});
fe.core.split_line = (function fe$core$split_line(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)], null);
});
fe.core.output = (function fe$core$output(){
return cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$div,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26389_SHARP_){
return fe.core.split_line(p1__26389_SHARP_);
}),cljs.core.deref(fe.core.report))));
});
fe.core.centered_column_container = (function fe$core$centered_column_container(view_component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$grid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"purple"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$two$column$centered$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"cyan"], null)], null),view_component], null)], null)], null);
});
fe.core.population_field = (function fe$core$population_field(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"number"], null)], null)], null);
});
fe.core.app = (function fe$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$grid_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$center,"Welcome to Push. Current target: ",cljs.core.cst$kw$goal.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(fe.core.modifications))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Modify$center,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe.core.goal_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe.core.population_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe.core.run_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Output,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe.core.output], null)], null)], null);
});
fe.core.mount_root = (function fe$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe.core.app], null),document.getElementById("app"));
});
fe.core.init_BANG_ = (function fe$core$init_BANG_(){
return fe.core.mount_root();
});
