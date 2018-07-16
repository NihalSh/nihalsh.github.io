---
path: "/blog/quick-sort-in-haskell"
date: "2018-07-16"
title: "Quick Sort in Haskell"
---

First Draft - Work in Progress

### Haskell Code
```haskell
quickSort [] = []
quickSort (x:[]) = [x]
quickSort xs = quickSort left ++ [pivot] ++ quickSort right
    where pivot = last xs
          left = filter (<= pivot) (init xs)
          right = filter (> pivot) (init xs)
```

##### References:
[Quick Sort](https://en.wikipedia.org/wiki/Quicksort) \
[Learn You a Haskell for Great Good!](http://learnyouahaskell.com/)