package Basic;

import java.util.ArrayList;
import java.util.Collections;

class Pair implements Comparable<Pair>
{
	int x;
	public Pair(int i) {
		x=i;
	}
	@Override
	public int compareTo(Pair o) {
		System.out.println(x+" "+(o.x));
		if(x>o.x)
		{
			return 1;
		}
		else if(x<o.x)
		{
			return -1;
		}
		return 0;
	}
	
}

public class UsingComparable {
	public static void main(String[] args) {
		ArrayList<Pair> al=new ArrayList<>();
		al.add(new Pair(23));
		al.add(new Pair(21));
		al.add(new Pair(22));
		al.add(new Pair(27));
		al.add(new Pair(25));
		for(Pair v:al)
		{
			System.out.println(v.x);
		}
		Collections.sort(al);
		for(Pair v:al)
		{
			System.out.println(v.x);
		}
		//System.out.println(al);
	}
}
