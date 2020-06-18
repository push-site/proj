(ns fe.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [fe.components.header :refer [header]]
      [fe.components.button :refer [button]]))

;; -------------------------
;; Views


(defn new-individual []
  (repeatedly 100 #(rand-int 2)))

(def modifications (r/atom {:goal 73
                            :population 100}))

(defonce population (r/atom 100))

(def best-individual
  (r/atom (new-individual)))

(def report
  (r/atom ["Report: "]))

(defn greeting [message]
  [:h2 message])

(defn mutate [individual]
  (for [b individual]
    (if (> (rand) 0.01)
      b
      (- 1 b))))

(defn error [individual]
  (Math/abs (- (reduce + individual) 73)))

(defn better [i1 i2]
  (< (error i1) (error i2)))

(defn evolve
  [popsize]
  (reset! report ["Report: "])
  (loop [generation 0
         population (sort better (repeatedly popsize new-individual))]
    (let [best (first population)]
      (do (swap! report conj (str "Generation:" generation ", Best error:" (error best)))
          (println "Generation:" generation ", Best error:" (error best)))
      (if (zero? (error best))
        (do (swap! report conj (str "Success: " (apply str best)))
            (println "Success:" best))
        (let [better-half (take (int (/ popsize 2)) population)]
          (recur
            (inc generation)
            (sort better (map mutate
                              (concat better-half better-half)))))))))

;(defn text-input []
;  [:div.field "Target Number: "
;   [:input {:type "number" :id "Target" :name "Target" :min "0" :max "100"
;            :value (:goal @modifications))

(defn goal-input [goal]
  [:input {:type "number"
           :value @goal
           :on-change #(reset! goal (-> % .-target .-value))}])

(defn goal-state []
  (let [val (r/atom 73)]
    (fn []
      [:div
       [:p "The goal is now " @val]
       [:p "Change it here: " [goal-input val]]])))

(defn run-button []
   [:div.run [:input {:type "button" :value "Run Evolution"
            :on-click #(evolve  @population)}]])

(defn population-input []
  [:div
   "Population: "
   [:input {:type "number"
            :max "1000"
            :min "0"
            :value @population
            :on-change #(reset! population (.-value (.-target %)))}]])

(defn split-line [n]
  [:div (str n)])

(defn output []
  (vec (cons :div (mapv #(split-line %) @report))))

(defn centered-column-container [view-component]
  [:div.ui.grid
   {:style {:background "purple"}}
   [:div.two.column.centered.row
    [:div.column
     {:style {:background "cyan"}}
     view-component]]])

(defn population-field []
  [:div
   [:input {:type "number"}]])



(defn app []
  [:div.grid-container
   [:div.Header
    [:h2.center "Welcome to Push. Current target: " (:goal @modifications)]]
   [:div.Modify.center
    [goal-state]
    [population-input]
    [run-button]]
   [:div.Output
    [output]]])



;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [app] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
