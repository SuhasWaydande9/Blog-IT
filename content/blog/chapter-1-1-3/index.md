---
title: C Basics. part 1.3.
date: "2020-11-28T22:16:03.284Z"
description: "C Basics. part 1.3"
---

## 1.6 Floating-Point Numbers – float and double

A floating-point number is one that may have a fractional part. A floating-point constant can be written in one of two ways:

- The normal way, with an optional sign, and including a decimal point; for example, -3.75, 0.537, 47.0.

- Using scientific notation, with an optional sign, including a decimal point and including an ‘exponent’ part; for example, -0.375E1, which means “-0.375 multiplied by 10 to the power 1”, that is, -3.75. Similarly, 0.537 can be written as 5.37e-1, that is, 5.37 x 10-1. The exponent can be specified using either e or E.

- Note that there are several ways to write the same number. For example, the following all represent the same number 27.96:

  27.96E00 2.796E1 2.796E+1 2.796E+01 0.2796E+02 279.6E-1

In C, we can declare a floating-point variable using either float or double. A float value is normally stored as a 32-bit floating-point number, giving about 6 or 7 significant digits.

A double value is stored as a 64-bit floating-point number, giving about 15 significant digits. A floating-point constant is of type double unless it is followed by f or F, in which case it is of type float. Thus 3.75 is of type double but 3.75f or 3.75F is of type float. Most calculations are done using double precision. The type float is useful if you need to store lots of floating-point numbers and you wish to use as little storage as possible (and do not mind just 6 or 7 digits of precision).

In this book, we will mostly use double for working with floating-point numbers.

---

<br>

### 1.6.1 Print double and float Variables

We have been using the format specification %d in a printf statement to print the value of an integer variable. If we wish to print the value of a double or float variable, we can use %f. For example, consider the following:

    double d = 987.654321;
    printf("%f \n", d);

The value of d will be printed to a predefined number of decimal places (usually six, but could vary from one compiler to the next). In this case, the value printed will be 987.654321. However, if d were assigned 987.6543215, the value printed would be 987.654322 (rounded to six decimal places).

Similarly, if x is of type float, its value could be printed using:

    printf("%f \n", x);

We just saw that the specification %f prints the number to a predefined number of decimal places. Most times, though, we want to say how many decimal places to print and, sometimes, how many columns to use. For example, if we want to print d, above, to 2 decimal places in a field width of 6, we can use:

    printf("%6.2f \n", d);

Between % and f, we write 6.2, that is, the field width, followed by a . (point), followed by the number of decimal places. The value is rounded to the stated number of decimal places and then printed. Here, the value printed will be 987.65, which occupies exactly 6 print columns. If the field width were bigger, the number will be padded on the left with spaces. If the field width were smaller, it is ignored, and the number is printed using as many columns as necessary.

As another example, consider

    b = 245.75;
    printf("%6.1f \n", b);

In the specification %6.1f, 1 says to round the number to 1 decimal place; this gives 245.8, which requires 5 columns for printing.

6 says to print 245.8 in 6 columns; since only 5 columns are needed for printing the number, one space is added at the beginning to make up 6 columns, so the number is printed as ◊245.8 (◊ denotes a space).

Similarly,

    printf("%6.0f \n", b);

will print b as ◊◊◊246 (rounded to 0 decimal places and printed in a field width of 6).

If the specification was %3.1f and the value to be printed is 245.8, it would be printed using 5 print columns, even though the field width is 3. Again, when the field width specified is smaller than the number of print columns required, C ignores the field width and prints the value using as many columns as needed.

We can sometimes use this to our advantage. If we do not know how big a value might be, we can deliberately use a small field width to ensure it is printed using the exact number of print columns required for printing the value.

In general, suppose the float or double value v is to be printed with the specification %w.df where w and d are integers. Firstly, the value v is rounded to d decimal places. Suppose the number of print columns required to print v, including a possible point (there will be no point if d = 0; the value is to be rounded to a whole number) and a possible sign, is n. There are two cases to consider:

1. If n is less than w (the field width is bigger), the value is padded on the left with (w - n) spaces. For example, suppose w is 7 and the value to be printed is -3.45 so that n is 5. The number is padded on the left with (7- 5) = 2 spaces and printed as ◊◊-3.45.

2. If n is greater than or equal to w (field width is the same or smaller), the value is printed using n print columns. In this case, the field width is ignored.

As with integers, a field width is useful when we want to line up numbers one below the other. Assume we have three double variables a, b, and c with values 419.563, -8.7, and 3.25, respectively. Suppose we want to print the values to two decimal places, lined up on the decimal point, like this:

    419.56
     -8.70
      3.25

Since the biggest number requires 6 print columns, we can line them up using a field width of at least 6. The following statements will line them up as above:

    printf("%6.2f \n", a);
    printf("%6.2f \n", b);
    printf("%6.2f \n", c);

If we use a field width bigger than 6, the numbers will still line up but with leading spaces. For example, if we use a field width of 8, we will get (◊ denotes a space)

    ◊◊419.56
    ◊◊◊-8.70
    ◊◊◊◊3.25

Again, we can use one printf instead of three to achieve the same effect:

    printf("%6.2f \n%6.2f \n%6.2f \n", a, b, c);

Each \n forces the following output onto a new line.

---
