---
path: "/blog/functional-programming-in-haskell"
date: "2018-09-09"
title: "Functional Programming in Haskell"
---

Functional Programming has been in vogue for the past few years. Java, a bastion of Object-Oriented Programming, introduced functional constructs in the language with Java 8. React made declarative style popular in the UI development landscape. Redux, a popular state management library, uses functional constructs to make changes to the state a bit more transparent. Functional programming is not something new, it is older than most other forms of programming paradigms including Object Oriented Programming which was in fact influenced by it. This resurgence in functional programming is worth a closer look.

## Basic Ideas in Functional Programming
### Functions as First-Class citizens
The functions are just like other primitives in the language. Functions can be assigned to a "variable", passed as an argument to a function and returned as the output of a function. Functions which take functions as other arguments and/or returns functions are known as `higher-order functions`.
### Immutability
The data is immutable. It essentially means that the term `variable` loses its meaning, as the name once given to a data always refers to that piece of data and the data changed be changed so every "variable" is a constant. Hence, the term `name` is preferred over `variable`.

### Pure Functions
Pure functions always give the same output provided the same input. So, a change in environment, location and time cannot affect it. Pure functions should not give rise to any `side effects`. Side effect refers to anything that changes something external to the program, like reading data from `STDIN`, writing data to `STDOUT`, making API calls, generating random, getting the current timestamp, etc. No program will be useful without side effects, but minimal and isolated side effects are emphasized.

### Composition
Creation of small functions is emphasized to make them cohesive and coherent. To do larger tasks smaller functions are composed into a bigger function and so on.

### Partial Application
If arguments supplied to a function is less than that defined in the declaration then it returns a function which accepts the remaining arguments. A related concept is `Currying`. Currying treats the evaluation of a function with multiple arguments as multiple functions with a single argument.

### Recursion
Since mutations are not permitted by the language, iteration constructs like `for`, `while` and `do while` are replaced with recursion which provides the same functionality in a rather elegant manner. All functional languages heavily optimize recursion.

### Functional Data Structures
Due to restriction on mutations, the data structures implementation is different in functional languages. This mainly concerns systems programmer or library implementors as the standard library contains efficient implementations of many data structures.

## Getting Started with Haskell

### Installation
The Haskell website provides an installer to make the installation process smooth. Install `Haskell Platform` from the [website](https://www.haskell.org/downloads). For those of you unable to install it, there is an [online IDE](https://repl.it) which can be used for the purposes of this article.

### Getting Familiar with Haskell
Most of these examples can be run on `ghci` which is a Haskell interpreter unless mentioned otherwise. `--` is the Haskell syntax for comment. Everything including and after `--` is just comments which are ignored by the Haskell compiler/interpreter in these examples.

Start the interpreter by running the following command:
```sh
$ ghci
```
#### Numbers
```haskell
Prelude> 1          -- Integers
1

Prelude> 3.14       -- Floating point numbers
3.14

Prelude> 1 + 3.14   -- Addition of numbers
4.140000000000001

Prelude> 2 * 3.14   -- Multiplication of numbers
6.28

Prelude> 3 ** 2     -- Exponentiation
9.0
```
It is worth noting that all the operators we used in this section are infix functions, which can just as easily be used as prefix functions by enclosing them in parentheses.
```haskell
Prelude> (+) 1 3.14     -- Addition of numbers
4.140000000000001

Prelude> (*) 2 3.14     -- Multiplication of numbers
6.28

Prelude> (**) 3 2       -- Exponentiation
9.0
```

#### Functions
Let us examine some standard library functions.
```haskell
Prelude> max 3 5    -- Find maximum
5

Prelude> min 9 81   -- Find minimum
9
```

Function calls in Haskell do not require parentheses. Parentheses are used when default precedence needs to be altered like in the following example.
```haskell
Prelude> min 3 5 * 2
6

Prelude> (min 3 5) * 2
6

Prelude> min 3 (5 * 2)
3
```

Let us create a `fun` function of our own which takes an argument `x` and multiplies it by `3.14`. Here the output of the function `fun` is `x * 3.14`
```haskell
Prelude> fun x = x * 3.14

Prelude> fun 5
15.700000000000001

Prelude> fun 1
3.14

Prelude> fun 0
0.0
```

Another way to do the same thing is using `lambdas` or anonymous functions. 
```haskell
Prelude> (\x -> x * 3.14) 5 
15.700000000000001

Prelude> (\x -> x * 3.14) 1
3.14

Prelude> (\x -> x * 3.14) 0
0.0
```

Another example of declaring and using `lambdas`.
```haskell
Prelude> (\x y z  -> x + y + z) 1 2 3
6
```

As it can be seen `lambdas` begin with `\` followed by the list of arguments. The argument list is followed by `->`. The right side of `->` is the output of the function.

#### Boolean
```haskell
Prelude> True
True

Prelude> False
False

Prelude> True == False  -- Equality check
False

Prelude> True /= False  -- Inequality check
True

Prelude> True || False  -- Logical OR
True

Prelude> True && False  -- Logical AND
False

Prelude> True && True   -- Logical AND
True
```

#### List
List are homogeneous data structures in Haskell. A list is defined using square brackets `[ ]`.
```haskell
Prelude> []             -- An empty list
[]

Prelude> [1, 2, 3]      -- List of numbers
[1,2,3]

Prelude> [True, False, True, True] -- List of booleans 
[True,False,True,True]

Prelude> [1, False, 3]      -- Invalid list since it is not homogeneous

<interactive>:58:2: error:
    • No instance for (Num Bool) arising from the literal ‘1’
    • In the expression: 1
      In the expression: [1, False, 3]
      In an equation for ‘it’: it = [1, False, 3]
```

Another way to define a list is using a cons operator `:`. It is also used to prepend items to a list
```haskell
Prelude> 1:2:3:[]
[1,2,3]

Prelude> 0:[1,2,3]
[0,1,2,3]

Prelude> -1:0:[1,2,3]
[-1,0,1,2,3]
```

##### init
`init` returns the entire list except the last element.
```haskell
Prelude> init [1,2,3,4]
[1,2,3]

Prelude> init [1]
[]

Prelude> init []        -- empty list causes exception
*** Exception: Prelude.init: empty list
```

##### last
`last` returns the last element of the list.
```haskell
Prelude> last [1,2,3,4]
4

Prelude> last [1]
1

Prelude> last []        -- empty list causes exception
*** Exception: Prelude.last: empty list
```

##### head
`head` returns first element of the list.
```haskell
Prelude> head [1,2,3,4]
1

Prelude> head [1]
1

Prelude> head []        -- emptry list causes exception
*** Exception: Prelude.head: empty list
```
##### tail
`tail` returns entire list except the first element.
```haskell
Prelude> tail [1,2,3,4]
[2,3,4]

Prelude> tail [1]
[]

Prelude> tail []        -- empty list causes exception
*** Exception: Prelude.tail: empty list
```

##### map
`map` is a higher-order function. It takes two arguments, first is a function and second is a list. `map` returns a new list with the provided function applied to each element in the original list.
```haskell
Prelude> map fun [1,2,3]    -- fun function was declared earlier
[3.14,6.28,9.42]
```

We can also use `lambdas` instead of a named function.
```haskell
Prelude> map (\x -> x * 3.14) [1,2,3]
[3.14,6.28,9.42]
```

##### foldr
`foldr` takes a function, an initial value (accumulator) and a list of values and returns a value. It process the items in the list from the right.
```haskell
Prelude> foldr (\x acc -> acc + x) 0 [1, 2, 3, 4]   -- summation
10

Prelude> foldr (\x acc -> acc - x) 0 [1, 2, 3, 4]   -- subtracting all numbers from 0
-10

```

##### foldl
`foldl` is similar to `foldr` but process the items from the left. Another difference is the accumulator in the function is on the left side as opposed to right.
```haskell
Prelude> foldl (\acc x -> acc + x) 0 [1, 2, 3, 4]
10

Prelude> foldl (\acc x -> acc - x) 0 [1, 2, 3, 4]
-10
```

#### Pattern Matching
Pattern matching is one of the cool constructs in Haskell which allows you to check if the provided value conforms to a particular style. Let us see how this works.

For this section, we are going to use `ghc` to compile are programs and then run the generated binaries.

```haskell
-- main.hs
isEmpty [] = True
isEmpty _ = False

main = do
    print (isEmpty [1, 2, 3])
    print (isEmpty [])

```

```sh
$ ghc -o main main.hs
$ ./main
False
True
```

Note that we declared function `isEmpty` differently this time. We are doing pattern matching here to choose which function body to execute. If we pass an empty list to the function, it just returns `True`. `_` is used as a "don't care" variable. So for every other list, the function returns `False`.

`main` is the entry point of the application, languages like C, C++ and Java also have a similar `main` from where the execution begins.

`print` is a function which displays the input on the screen.

`do` is syntactic sugar for working with something called a `monad` which we not going to discuss in this article for the sake of brevity. For the purpose of this example, you can think of it as executing the indented expressions following it. Please do note that this is an oversimplification of how it works in reality.

Lets try another example.
```haskell
-- main.hs
getUser 1 = "Tony Stark"
getUser 2 = "Peter Parker"
getUser 3 = "Bruce Wayne"
getUser _ = "Anonymous"

main = do
    print (getUser 1)
    print (getUser 2)
    print (getUser 3)
    print (getUser 4)
    print (getUser 10)
    print (getUser 57)

```

```sh
$ ghc -o main main.hs
$ ./main
"Tony Stark"
"Peter Parker"
"Bruce Wayne"
"Anonymous"
"Anonymous"
"Anonymous"
```

This example is very similar to the previous example. It just uses different input and output data.

#### Example: Generate Fibonacci Number
Fibonacci series begins with 0 and 1. These are first and second terms of the series, respectively.

```
fibonacci(1) = 0
fibonacci(2) = 1
```

All subsequent element of this series is defined as:

```
fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)
```

Lets look at the program which computes this in Haskell.
```haskell
-- main.hs
fib 1 = 0
fib 2 = 1
fib n = fib (n - 1) + fib (n - 2)

main = do
    print (fib 1)
    print (fib 2)
    print (fib 3)
    print (fib 4)
    print (fib 5)
    print (fib 6)
    print (fib 7)
    print (fib 8)
    print (fib 9)
    print (fib 10)

```

```sh
$ ghc -o main main.hs
$ ./main
0
1
1
2
3
5
8
13
21
34
```
The code uses pattern matching that we came across in the previous section. It also uses a technique called recursion where a function calls itself in its own body. A recursive function needs to have a base case to terminate. We have defined the base case as `fib 1 = 0` and `fib 2 = 1`. Feel free to tinker with the code to calculate other Fibonacci numbers. Can you find the input for which this function would never terminate?

## Benefits of Functional Programming

### Productivity
The researches carried on this topic have almost always concluded that functional programming leads to higher productivity. In some cases, the productivity can be as high as 10x. There are a lot of reasons for this, some of which directly stem from the declarative style.

### Time to Market
Since productivity is higher, time to market is lower. The companies which are looking to bring more value faster to their end users will be pleasantly surprised when the expectation starts to become a reality.

### Less Bugs
The data collected from a lot of production system show that the number of bugs is lower, which again benefits the longevity of the system. It is also less disruptive to its imperative counterparts.

### Ready for Prime Time
There are a lot of companies using one or the other functional programming language in production. Twitter uses `Scala`. Facebook uses `Haskell` to fight spams. Standard Chartered is also using `Haskell` for their needs. WhatsApp uses `Erlang` for their server-side code.

## Where to go from here?
This blog post introduces some of the really basic constructs of Haskell. Haskell has a lot of useful constructs. We didn't even cover things like conditionals, "variable" declaration and scoping.
Haskell is a typed language. You might notice that we didn't even declare types anywhere! Haskell has a really cool type inference system which deduces types based on expressions being used.
This article was not intended to discuss the language exhaustively, there are already books which cover that. I am hoping that piqued your curiosity to go on and discover all the cool goodies that come with Haskell.
