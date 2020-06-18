(ns fe.core)

(defn abs [num]
  (if (< 0 num)
    (* -1 num)
    num))

(def report (atom ["reports: "]))

(defn new-individual []
  (repeatedly 100 #(rand-int 2)))

;; An individual is mutated by possibly flipping each bit.

(defn mutate [individual]
  (for [b individual]
    (if (> (rand) 0.01)
      b
      (- 1 b))))

;; The error of an individual is the difference between the sum of the bits
;; and the goal, which we hardcode here.

(defn error [individual]
  (Math/abs (- (reduce + individual) 73)))

;; An individual is better than another if it has lower error.

(defn better [i1 i2]
  (< (error i1) (error i2)))

;; We evolve a solution by starting with a random population and repeatedly
;; sorting, checking for a solution, and producing a new population.
;; We produce the new population by selecting and mutating the better half
;; of the current population.

(defn evolve
  [popsize]
  (reset! report ["Reports: "])
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

;; Run it with a population of 100:

#_(evolve 100)

