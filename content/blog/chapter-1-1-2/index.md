---
title: C Basics. part 1.2.
date: "2015-05-01T22:12:03.284Z"
description: "C Basics. part 1.2"
---

> ## 1.4 Basic Data Types

<br>

We briefly touched on the concept of a data type. For most of this book, we will use the following data types:

    int, double, and char

These, among others, are referred to as primitive data types. Each data type defines constants of that type. When we declare a variable to be of a particular type, we are really saying what kind of constants (values) can be stored in that variable. For example, if we declare the variable num to be int, we are saying that the value of num at any time can be an integer constant such as 25, -369, or 1024.

<br>

> ## 1.5 Integer Numbers - int

<br>
An int variable is used to store an integer (whole number) value. An integer value is one of 0, ±1, ±2, ±3, ±4, etc. However, on a computer, the largest and smallest integers that can be stored are determined by the number of bits used to store an integer. Appendix C shows how integers can be represented on a computer.

Typically, an int variable occupies 16 bits (2 bytes) and can be used to store whole numbers in the range -32,768 to +32,767. Note, however, that on some machines, an int could occupy 32 bits, in which case it can store whole numbers from -2,147,483,648 to +2,147,483,647. In general, if n bits are used to store an int, the range of numbers that can be stored is -2n-1 to +2n-1 - 1. As an exercise, find out the largest and smallest int values on your computer.

<!-- <br> -->

---

<br>

> ### 1.5.1 Declaring Variables

<br>

In C a variable is declared by specifying a type name followed by the variable. For example,

    int h;

declares h to be a variable of type int. The declaration allocates space for h but does not initialize it to any value. You must not assume that a variable contains any value unless you explicitly assign a value to it.

You can declare several variables of the same type in one statement as in:

    int a, b, c; // declares 3 variables of type int

The variables are separated by commas, with a semicolon after the last one. You can declare a variable and give it an initial value in one statement, as in:

    int h = 14;

This declares h to be int and gives it a value of 14.

---

<br>

> ### 1.5.2 Integer Expressions

An integer constant is written in the manner we are all accustomed to: for example, 354, 639, -1, 30705, and -4812. Note that you can use only a possible sign followed by digits from 0 to 9. In particular, you cannot use commas as you might do to separate thousands; thus 32,732 is an invalid integer constant—you must write it as 32732.

An integer expression can be written using the following arithmetic operators:

|      |                   |
| :--: | :---------------: |
|  +   |        add        |
|  −   |     subtract      |
| \\\* | multiply / divide |
|  %   |  find remainder   |
|      |                   |

<br>
For example, suppose we have the following declaration:
    
    int a, b, c;

then the following are all valid expressions:

    a + 39
    a + b - c * 2
    b % 10 //the remainder when b is divided by 10
    c + (a * 2 + b * 2) / 2

The operators +, - and \* all give the expected results. However, / performs integer division; if there is any remainder, it is thrown away. We say integer division truncates. Thus 19/5 gives the value 3; the remainder 4 is discarded.

But what is the value of -19/5? The answer here is –3. The rule is that, in C, integer division truncates toward zero. Since the exact value of –19 ÷ 5 is –3.8, truncating toward zero gives –3. (In the next section, we show how to get the precise value for the division of one integer by another.)

The % operator gives the remainder when one integer is divided by another. For example,

    19 % 5 evaluates to 4;
    h % 7 gives the remainder when h is divided by 7;

You can use it to test, for instance, if a number h is even or odd. If h % 2 is 0 then h is even; if h % 2 is 1, h is odd.

---

<br>

> ### 1.5.3 Precedence of Operators

C evaluates an expression based on the usual precedence of operators: multiplication and division are done before addition and subtraction. We say that multiplication and division have higher precedence than addition and subtraction. For example, the expression

    5 + 3 * 4

is evaluated by first multiplying 3 by 4 (giving 12) and then adding 5 to 12, giving 17 as the value of the expression.

As usual, we can use brackets to force the evaluation of an expression in the order we want. For example,

    (5 + 3) * 4

first adds 5 and 3 (giving 8), and then multiplies 8 by 4, giving 32.

When two operators that have the same precedence appear in an expression, they are evaluated from left to right, unless specified otherwise by brackets. For example,

    24 / 4 * 2

is evaluated as

    (24 / 4) * 2

(giving 12) and

    12 - 7 + 3

is evaluated as

    (12 - 7) + 3

giving 8. However,

    24 / (4 * 2)

is evaluated as expected, giving 3, and

    12 - (7 + 3)

is evaluated as expected, giving 2.

In C, the remainder operator % has the same precedence as multiplication (\*) and division (/).

---

<br>

> ### 1.5.4 Print an Integer Using a “Field Width”

We have seen that we can print an integer value by specifying the value (either by a variable or an expression) in a printf statement. When we do so, C prints the value using as many “print columns” as needed. For instance, if the value is 782, it is printed using 3 print columns since 782 has 3 digits. If the value is -2345, it is printed using 5 print columns (one for the minus sign).

While this is usually sufficient for most purposes, there are times when it is useful to be able to tell C how many print columns to use. For example, if we want to print the value of n in 5 print columns, we can do this by specifying a field width of 5, as in:

    printf("%5d", n);

Instead of the specification %d, we now use %5d. The field width is placed between % and d. The value of n is printed “in a field width of 5”.

Suppose n is 279; there are 3 digits to print so 3 print columns are needed. Since the field width is 5, the number 279 is printed with 2 spaces before it, thus: ◊◊279 (◊ denotes a space). We also say “printed with 2 leading blanks/spaces” and “printed padded on the left with 2 blanks/ spaces.”
A more technical way of saying this is “n is printed right justified in a field width of 5.” “Right justify” means that the number is placed as far right as possible in the field and spaces added in front of it to make up the field width. If the number is placed as far left as possible and spaces are added after it to make up the field width, the number is left justified. For example, 279◊◊ is left justified in a field width of 5.

The minus sign can be used to specify left justification; %-wd will print a value left justified in a field width of w. For example, to print an integer value left justified in field width of 5, we use %-5d.

For another example, suppose n is -7 and the field width is 5. Printing n requires two print columns (one for - and one for 7); since the field width is 5, it is printed with 3 leading spaces, thus: ◊◊◊-7.

You may ask, what will happen if the field width is too small? Suppose the value to be printed is 23456 and the field width is 3. Printing this value requires 5 columns, which is greater than the field width 3. In this case, C ignores the field width and simply prints the value using as many columns as needed (5, in this example).

In general, suppose the integer value v is printed with the specification %wd where w is an integer, and suppose n columns are needed to print v. There are two cases to consider:

1. If n is less than w (the field width is bigger), the value is padded on the left with (w - n) spaces. For example, if w is 7 and v is -345 so that n is 4, the number is padded on the left with (7-4) = 3 spaces and printed as ◊◊◊-345.

2. If n is greater than or equal to w (field width is the same or smaller), the value is printed using n print columns. In this case, the field width is ignored.

A field width is useful when we want to line up numbers one below the other. Suppose we have three int variables a, b, and c with values 9876, -3, and 501, respectively. The statements

    printf("%d\n", a);
    printf("%d\n", b);
    printf("%d\n", c);

    will print
    9876
    -3
    501

Each number is printed using just the number of columns required. Since this varies from one number to the next, they do not line up. If we want to, we could get the numbers lined up using a field width of 5, for example. The statements

    printf("%5d\n", a);
    printf("%5d\n", b);
    printf("%5d\n", c);

will print (◊ denotes a space)

    ◊9876
    ◊◊◊-3
    ◊◊501

that will look like this (without ◊):

    9876
    -3
    501

all nicely lined up.

As a matter of interest, we don’t really need three printf statements. We can replace the last three printf statements with

    printf("%5d\n%5d\n%5d\n", a, b, c);

Each \n forces the following output onto a new line.
