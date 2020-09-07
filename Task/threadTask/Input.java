package com.examples;

import java.util.Scanner;

class InputDemo implements Runnable {
  ThreadInterCommunication obj;

  InputDemo(ThreadInterCommunication obj) {
    this.obj = obj;
    new Thread(this).start();
  }

  public void run() {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    obj.put(n);
    sc.close();
  }
}
