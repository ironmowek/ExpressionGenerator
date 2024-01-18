The programm is executed using the _queueStatus_ stack. The stack (array) is filled in a loop with all existing combinations in the form of the structure {exp, res, idx}.
_exp_ - the current state of the expression as a string ('98+7-65...')
_res_ - the resulting sum for the expression exp
_idx_ - index of the current last element in the string

At each step the first element of the array is extracted from the stack and returned using the _shift()_ function, this also reduces the risk of overflowing the stack itself. 

In case all digits of the number (9876543210), _res_ of the element being checked are used, it is checked against the sum sought (200). If successful, the expression is printed to the console.

If the search of elements is not completed, new sets are written to the stack (+(currDig), -(currDig), (currDig)) in the same format {exp, res, idx}.

The _ExpressionGenerator_ function takes in 0 to 2 elements. Default values are set according to the problem condition (inp = 9876543210, summ = 200), they can be changed if desired. The programme is universal.
