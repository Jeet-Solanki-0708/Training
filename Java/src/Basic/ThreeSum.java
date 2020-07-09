package Basic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.*;
import java.util.List;
class Pair1
{
	int res,l,ri;
	Pair1(int res,int l,int ri)
	{
		this.l=l;
		this.ri=ri;
		this.res=res;
	}
	
	public boolean equals(Pair1 obj) {
		if(obj==this)
			return true;
		if(obj.l==l && obj.res==res && obj.ri==ri)
			return true;
		return false;
	}
}

public class ThreeSum{

	public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        Set<Pair1<>> h=new HashSet<>();
        List<List<Integer>> al=new ArrayList<List<Integer>>();
        for(int i=0;i<nums.length;i++)
        {
            if(h.contains(nums[i])==false)
            {
                int l=i+1,r=nums.length-1,result=-nums[i];
                while(l<r)
                {
                	ArrayList<Integer> a=new ArrayList<>();
                    if(result==nums[l]+nums[r])
                    {
                        a.add(nums[i]);
                        a.add(nums[l]);
                        a.add(nums[r]);
                        Collections.sort(a);
                    }
                    al.add(a);
                }
            }
            h.add(nums[i]);
        }
        return al;
    }
	
}
