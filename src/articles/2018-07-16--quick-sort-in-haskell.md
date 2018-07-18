---
path: "/blog/quicksort-in-haskell"
date: "2018-07-16"
title: "Quicksort in Haskell"
---

Quicksort is a popular sorting algorithm developed by Tony Hoare in 1959. As you might have guessed by its name, it is faster than many sorting algorithms in various scenarios. Its implementation in Haskell is rather succinct. Let's analyse the implementation.

### Haskell Code
```haskell{2-3}
-- QuickSort.hs
quickSort [] = []
quickSort (x:[]) = [x]
quickSort xs = quickSort left ++ [pivot] ++ quickSort right
    where pivot = last xs
          left = filter (<= pivot) (init xs)
          right = filter (> pivot) (init xs)
```

### Analysis
Quicksort is a recursively defined algorithm. In the highlighted portion of the program, we have defined the base case first. The two base cases are:
1. The list is empty
2. The list has just one element

The remaining code deals with the recursive case. According to the algorithm we pick a pivot element, then we group the remaining elements into two sublists. We chose the last element as the pivot.

One sublist contains all the elements which are less than or equal to the pivot and the other elements which are greater than the pivot. By doing we discover the position the pivot needs to be in for the list to be sorted. So for the list to be sorted completely we have to recursively sort the `left` and `right` list then sandwich the pivot between the two. That's exactly what the code is doing.

### Haskell Syntax
In Haskell, if an operator/function does not receive all the arguments, then it returns a function which will accept the remaining parameters. This is due to the effect of a concept known as currying. This fact is applied while using `<=` and `>` operator.

`[]` - It is an empty list.

`(x:[])` - It describes a list with only one element.

`++` - It's a list concatenation operator (also a function).

`filter` - It is a function which receives two arguments, first is a function and second is a list. The function passed is executed on every element and if it returns `True` then the element is included in the output.

`<=` - It is less than or equal to operator.

`init` - It returns the full list minus the last element.

`where` - It is used to define the variables/names to be available in the immediately preceding function.

### What's next?
The benefit of Haskell and of declarative approach, in general, is that the ideas translate to code with ease. The code may seem a bit unconventional to people coming from conventional languages due to stark differences in coding styles between imperative and declarative language, but with all benefits of the declarative approach, it can be worthwhile. I have provided some useful links down below to get familiar with the Haskell syntax.

##### References:
[Quick Sort](https://en.wikipedia.org/wiki/Quicksort) \
[Learn You a Haskell for Great Good!](http://learnyouahaskell.com/) \
[Install the Haskell toolchain](https://www.haskell.org/downloads)\
[Currying](https://en.wikipedia.org/wiki/Currying)\
[Partial Application](https://en.wikipedia.org/wiki/Partial_application)