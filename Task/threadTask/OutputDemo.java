package com.examples;

class OutputDemo implements Runnable {
  ThreadInterCommunication obj;

  OutputDemo(ThreadInterCommunication obj) {
    this.obj = obj;
    new Thread(this).start();
  }

  public void run() {
    int n = obj.get();
    System.out.println("OutPut:" + n);
  }
}
