package Basic;

import java.applet.Applet;
import java.awt.Checkbox;
import java.awt.CheckboxGroup;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.TextField;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.applet.*;

public class RadioItemListener extends Applet implements ItemListener{

	Checkbox c1,c2,c3;
	CheckboxGroup g;
	TextField l;
	String str="";
	
	@Override
	public void init() {
		g=new CheckboxGroup();
		c1=new Checkbox("Maths",g,false);
		c2=new Checkbox("C++",g,true);
		c3=new Checkbox("Java",g,false);
		c1.addItemListener(this);
		c2.addItemListener(this);
		c3.addItemListener(this);
		l=new TextField(35);
		l.setBackground(Color.BLUE);
		add(c1);
		add(c2);
		add(c3);
	}
	
	@Override
	public void itemStateChanged(ItemEvent e) {
		str=g.getSelectedCheckbox().getLabel();
		str="you have selectded "+str;
		repaint();
	}
	
	@Override
	public void paint(Graphics g) {
		g.drawString(str, 10, 250);
	}


}
