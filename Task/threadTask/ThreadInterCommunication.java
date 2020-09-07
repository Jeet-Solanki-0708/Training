package com.examples;

public class ThreadInterCommunication {
  int n;
  boolean flag = false;

  public static void main(String args[]) {
    ThreadInterCommunication obj = new ThreadInterCommunication();
    new OutputDemo(obj);
    new InputDemo(obj);
  }

  synchronized void put(int n) {
    if (flag) {
      try {
        wait();
      } catch (InterruptedException e) {
      }
    }

    this.n = n;
    System.out.println("name:" + Thread.currentThread().getName() + "INput :" + n);
    flag = true;
    notifyAll();
  }

  synchronized int get() {
    if (!flag) {
      try {
        wait();
      } catch (InterruptedException e) {
      }
    }

    // System.out.println("output :" + n);

    flag = false;
    notifyAll();
    return (n);
  }
}


