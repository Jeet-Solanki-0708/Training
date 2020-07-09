package Basic;

import java.awt.Checkbox;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.TextField;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.applet.*;

public class itemListener extends Applet implements ItemListener{

	Checkbox c;
	TextField l;
	
	@Override
	public void init() {
		c=new Checkbox("Do you Pay");
		c.addItemListener(this);
		l=new TextField(35);
		l.setBackground(Color.BLUE);
		add(c);
		add(l);
	}
	
	@Override
	public void itemStateChanged(ItemEvent e) {
		// TODO Auto-generated method stub
		boolean flag=c.getState();
		if(flag)
		{
			l.setText("Thanks");
		}
		else
		{
			l.setText("Opps");
		}
	}
	
	@Override
	public void paint(Graphics g) {
		// TODO Auto-generated method stub
		super.paint(g);
	}
	
}
