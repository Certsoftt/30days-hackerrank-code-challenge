# Algorithm (problem solving)
String Manipulation

# Author
[Allison Phillips](https://www.hackerrank.com/profile/AllisonP)
# Task
Given a string of input , print its even-indexed and odd-indexed characters as  space-separated strings on a single line [see the Sample below for more detail](#sample-input).

`Note`:  is considered to be an even index.

## Example

```Print abc def```

### Input Format

The first line contains an integer.
Each line  of the  subsequent lines contain a string

#### Sample Input

- 2
- Hacker
- Rank

in the format "2\nHacker\nRank"

### Output Format

For each String print even-indexed characters, followed by a space, followed by odd-indexed characters.


#### Sample Output

```suggestion
Hce akr
Rn ak
Explanation
```

##### Test Case 0: 

- For `Hacker`

The even indices are `H`,`c`,and `e`, and the odd indices are `a`, `k`, and `r`.
We then print a single line of  space-separated strings; the first string contains the ordered characters from even indices, and the second string contains the ordered characters from odd indices.

##### Test Case 1: 

- For `Rank`

The even indices are  `R` and `n`, and the odd indices are  `a` and `k`. We then print a single line of  space-separated strings; the first string contains the ordered characters from even indices, and the second string contains the ordered characters from odd indices.