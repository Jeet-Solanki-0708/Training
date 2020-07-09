package Basic;

import java.awt.*;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import java.applet.*;


public class AppletProgram extends Applet implements MouseListener,MouseMotionListener{
	int mx,my;
	String s="";
	
	@Override
	public void init() {
		 setForeground(Color.WHITE);
		 setBackground(Color.RED);
		 addMouseListener(this);//registration of event with listener
	}
	
	@Override
	public void paint(Graphics g) {
		g.setFont(new Font("Times New Roman", Font.BOLD, 28));
		g.drawString(s, 100,200);
	}

	@Override
	public void mouseClicked(MouseEvent e) {
		mx=e.getX();
		my=e.getY();
		s="Mouse clicked at "+mx+","+my;
		repaint();
		
	}

	@Override
	public void mousePressed(MouseEvent e) {
		mx=e.getX();
		my=e.getY();
		s="Mouse pressed at "+mx+","+my;
		repaint();
	}

	@Override
	public void mouseReleased(MouseEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void mouseEntered(MouseEvent e) {
		// TODO Auto-generated method stub
		showStatus("In applet");
	}

	@Override
	public void mouseExited(MouseEvent e) {
		showStatus("Out of applet");
		
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
