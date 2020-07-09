package Basic;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AppletLabel extends Applet implements ActionListener{
	
	TextField t1,t2;
	Label l1,l2;
	TextArea ta;
	Button bt1,bt2;
	Checkbox c;
	int code=3;
	
	@Override
	public void init() {
		setLayout(new FlowLayout(FlowLayout.LEFT));
//		t1=new TextField(35);
//		t2=new TextField(35);
//		l1=new Label("Enter your name");
//		l2=new Label("Enter your Email");
//		ta=new TextArea("",26,100);
		bt1=new Button("Oval");
		bt2=new Button("Rectangle");
		c=new Checkbox("Married");
		
		bt1.addActionListener(this);
		bt2.addActionListener(this);
		
//		add(l1);
//		add(t1);
//		add(l2);
//		add(t2);
//		add(ta);
		add(bt1);
		add(bt2);
//		add(c);
		
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		if(e.getActionCommand().equals("Oval"))
		{
			code=1;
		}
		else
		{
			code=2;
		}
		repaint();
	}
	
	@Override
	public void paint(Graphics g) {
		g.setColor(Color.red);
		if(code==1)
		{
			g.drawOval(100, 120, 350, 400);
		}
		else if(code==2)
		{
			g.fillRect(100, 120, 350, 400);
		}
		
	}
}
