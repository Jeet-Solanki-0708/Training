def check1():
    while True:
        try:
            val = int(input("Enter integer: "))
        except:
            print("Enter integer!")
            continue
        else:
            print("Yep that's an integer!")
            break
        finally:
            print("Finally, I executed!")
        print(val)

check1()
