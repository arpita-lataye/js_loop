# n = int(input("Enter the value of n: "))
# sum = 0

# for i in range(n + 1) :
#     fact = 1
#     for j in range(1, i) :
#         fact *= j
#     term = 1 / fact
#     sum += term
# print("Sum =", sum)


# n=int(input("no.of terms"))
# s=int(input("enter number"))
# start=s
# sum=0
# for i in range(0,n):
#    print(start,end=" ")
#    sum+=start
#    start=(start*10)+s

# n = int(input("How many numbers you want to enter? "))
# if n > 1 :
#     l = int(input('enter number:'))   # Assume first input is largest
#     sl = int(input('enter number:'))  # Assume second input is second largest
#     if sl > l :
#         t = sl
#         sl = l
#         l = t
#     for i in range(n - 2) :
#         a = int(input('enter number:'))
#         if a > l :
#             sl = l
#             l = a
#         elif a > sl :
#             sl = a
#     print("Second Largest Number =", sl)
# else :
#     print("Please enter more than 1 number")

x = int(input("Enter the value of x: "))

sum = 0
m = 1

for i in range(1, 7) :
    fact = 1
    for j in range(1, i+1) :
        fact *= j
    term = x ** i / fact
    sum += term * m
    m = m * -1

print("Sum =", sum)
