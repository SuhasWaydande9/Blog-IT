---
title: C Basics. part 1.1.
date: "2020-11-28T22:20:03.284Z"
description: "C Basics. part 1.1"
---

> ## 1.1 Introduction

<br>

In this chapter, we discuss some basic concepts you need to know in order to write programs in the C programming language.

A programming language is similar to speaking languages in many respects. It has an alphabet (more commonly referred to as a character set) from which everything in the language is constructed. It has rules for forming words (also called tokens), rules for forming statements, and rules for forming programs. These are called the syntax rules of the language and must be obeyed
when writing programs. If you violate a rule, your program will contain a syntax error. When you attempt to compile the program, the compiler will inform you of the error. You must correct it and try again.

The first step to becoming a good programmer is learning the syntax rules of the programming language. This is the easy part, and many people mistakenly believe that this makes them a programmer. It is like saying that learning some rules of English grammar and being able to write some correctly formed sentences makes one a novelist. Novel-writing skills require much more than learning some rules of grammar. Among other things, it requires insight, creativity, and a knack for using the right words in a given situation.

In the same vein, a good programmer must be able to creatively use the features of the language to solve a wide variety of problems in an elegant and efficient manner. This is the difficult part and can be achieved only by long, hard study of problem-solving algorithms and writing programs to solve a wide range of problems. But we must start with baby steps.

---

<br>

> ## 1.2 The C Alphabet

<br>

In Section 1.4 we introduced the idea of a character. We can think of the C alphabet as consisting of all the characters one could type on a standard English keyboard: for example, the digits; uppercase and lowercase letters; and special characters such as +, =, <, >, &, and %. More formally, C uses the ASCII (American Standard Code for Information Interchange, pronounced ass-key) character set. This is a character standard that includes the letters, digits, and special characters found on a standard keyboard. It also includes control characters such as backspace, tab, line feed, form feed, and carriage return. Each character is assigned a numeric code. The ASCII codes run from 0 to 127. The programs in this book will be written using the ASCII character set. The characters in the ASCII character set are shown in Appendix B. Character handling will be discussed in detail in Chapter 6.

---

<br>

> ## 1.3 C Tokens

<br>

The tokens of a language are the basic building blocks that can be put together to construct programs. A token can be a reserved word (such as int or while), an identifier (such as b or sum), a constant (such as 25 or "Alice in Wonderland"), a delimiter (such as } or ;) or an operator (such as + or =). For example, consider the following portion of Program P1.4 given at the end of the last chapter:

    int main(){
        int a, b, sum;
        a = 14; b = 25; sum = a + b;
        printf("%d + %d = %d\n", a, b, sum);
    }

Starting from the beginning, we can list the tokens in order:

| token |           type           |
| :---: | :----------------------: |
|  int  |      reserved word       |
| main  |        identifier        |
|   (   | left bracket, delimiter  |
|   )   | right bracket, delimiter |
|   {   |  left brace, delimiter   |
|   a   |        identifier        |
|   ,   |     comma, delimiter     |
|  sum  |        identifier        |
|   ;   |   semicolon, delimiter   |

<br>
And so on. Therefore we can think of a program as a stream of tokens, which is precisely how the compiler views it. So that, as far as the compiler is concerned, the above could have been written like this:
    
    int main() {
        int a, b, sum;
        a = 14; b = 25;sum = a + b;
        printf("%d + %d = %d\n", a, b, sum);
        }

The order of the tokens is exactly the same; to the compiler, it is the same program. To the computer, only the order of the tokens is important. However, layout and spacing are important to make the program more readable to human beings.

---

<br>

> ### 1.3.1 Spacing Within a Program

<br>

Generally speaking, C programs can be written using “free format.” The language does not require us, for instance, to write one statement on a line. Even a simple statement like

> a = 14;  
> can be written as  
> a=14;  
> or  
> a = 14 ;  
> or  
> a=14;

The statement

> sum = a + b;  
> can be written as  
> sum=a+b;  
> or  
> sum= a + b ;

Note, of course, that you cannot have spaces within the variable sum. It would be wrong to write s um or su m. In general, all the characters of a token must stay together.

---

<br>

> ### 1.3.2 Reserved Words

<br>

The C language uses a number of keywords such as int, char, and while. A keyword has a special meaning in the context of a C program and can be used for that purpose only. For example, int can be used only in those places where we need to specify that the type of some item is integer. All keywords are written in lowercase letters only. Thus int is a keyword but Int and INT are not. Keywords are reserved, that is, you cannot use them as your identifiers. As such, they are usually called reserved words. A list of C keywords is given in Appendix A.

---

> ### 1.3.3 Identifiers533

<br>

The C programmer needs to make up names for things such as variables, function names (Chapter 7), and symbolic constants (see next page). A name that he makes up is called a u identifier. There are a few simple rules to follow in naming an identifier:

- It must start with a letter or underscore.
- If other characters are required, they can be any combination of letters, digits, or underscore.

The length of an identifier cannot exceed 63 characters. Examples of valid identifiers:

    r
    R
    sumOfRoots1and2
    _XYZ
    maxThrowsPerTurn
    TURNS_PER_GAME
    R2D2
    root1

Examples of invalid identifiers:

    2hotToHandle // does not start with a letter
    Net Pay // contains a space
    ALPHA;BETA // contains an invalid character ;

Important points to note:

- Spaces are not allowed in an identifier. If you need one that consists of two or more words, use a combination of uppercase and lowercase letters (as in numThrowsThisTurn) or use the underscore to separate the words (as in num_throws_this_turn). We prefer the uppercase/lowercase combination.

- In general, C is case-sensitive (an uppercase letter is considered different from the corresponding lowercase letter). Thus r is a different identifier from R. And sum is different from Sum is different from SUM is different from SuM.

- You cannot use a C reserved word as one of your identifiers.

---

<br>

> ### 1.3.4 Some Naming Conventions

<br>

Other than the rules for creating identifiers, C imposes no restriction on what names to use, or what format (uppercase or lowercase, for instance) to use. However, good programming practice dictates that some common-sense rules should be followed.

An identifier should be meaningful. For example, if it’s a variable, it should reflect the value being stored in the variable; netPay is a much better variable than x for storing someone’s net pay, even though both are valid. If it’s a function (Chapter 7), it should give some indication of what the function is supposed to do; playGame is a better identifier than plg.

It is a good idea to use upper and lowercase combinations to indicate the kind of item name by the identifier. In this book, we use the following conventions:

- A variable is normally written in lowercase: for example, sum. If we need a variable consisting of two or more words, we start the second and subsequent words with an uppercase letter: for example, voteCount or sumOfSeries.

- A symbolic (or named) constant is an identifier that can be used in place of a constant such as 100. Suppose 100 represents the maximum number of items we wish to process in some program. We would probably need to use the number 100 in various places in the program. But suppose we change our mind and want to cater for 500 items. We would have to change all occurrences of 100 to 500. However, we would have to make sure that we do not change an occurrence of 100 used for some purpose other than the maximum number of items (in a calculation like principal\*rate/100).

- To make it easy to change our mind, we can set the identifier MaxItems to 100 and use MaxItems whenever we need to refer to the maximum number of items. If we change our mind, we would only need to set MaxItems to the new value. We will begin a symbolic constant with an uppercase letter. If it consists of more than one word, we will begin each word with uppercase, as in MaxThrowsPerTurn.

- We will see how to use symbolic constants in Section 4.6.

<br>

---

---
