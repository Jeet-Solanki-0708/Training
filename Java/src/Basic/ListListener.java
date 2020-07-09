package Basic;

import java.applet.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ListListener extends Applet implements ActionListener{

	List l;
	String s="";
	
	@Override
	public void init() {
		l=new List(4, true);
		l.add("Maths");
		l.add("Chem");
		l.add("Physics");
		l.add("Biology");
		l.add("Maths");
		l.add("Maths");
		l.setBackground(Color.BLACK);
		l.setForeground(Color.white);
		//setBounds  setFont
		l.addActionListener(this);
		add(l);
		
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		int arr[]=l.getSelectedIndexes();
		for(int i=0;i<arr.length;i++)
		{
			s=s+l.getItem(arr[i]);
			repaint();
		}
	}

	@Override
	public void paint(Graphics g) {
		g.drawString(s, 10, 400);
	}
	
}
