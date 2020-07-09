package Basic;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.event.*;
import java.applet.*;

public class mouseMotionListenerImplement extends Applet implements MouseMotionListener{
	int mx,my;
	String s="";
	
	public void init() {
		 setForeground(Color.WHITE);
		 setBackground(Color.RED);
		 addMouseMotionListener(this);//registration of event with listener
	}
	
	@Override
	public void paint(Graphics g) {
		g.setFont(new Font("Times New Roman", Font.BOLD, 28));
		g.drawString(s, 100,200);
	}


	
	@Override
	public void mouseDragged(MouseEvent e) {
		// TODO Auto-generated method stub
		mx=e.getX();
		my=e.getY();
		s="Mouse dragged at "+mx+","+my;
		repaint();
	}

	@Override
	public void mouseMoved(MouseEvent e) {
		// TODO Auto-generated method stub
		mx=e.getX();
		my=e.getY();
		s="Mouse moved at "+mx+","+my;
		repaint();
	}

}
