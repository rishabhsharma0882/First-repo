
import java.util.*;
public class Index2{
 public static void main(String args[]){
int t;
Scanner sc=new Scanner(System.in);
t=sc.nextInt();
for(int i=0;i<t;i++){
  int n=sc.nextInt();

  int arr[]=new int[n];

  int brr[]=new int [n];

  for(int k=0;k<n;k++)
  arr[k]=sc.nextInt();

  for(int j=0;j<n;j++)
  brr[j]=sc.nextInt();
Arrays.sort(arr);
Arrays.sort(brr);
int sum=0;
for(int l=0;l<n;l++){
if(arr[l]>brr[l])
sum+=brr[l];
else
sum+=arr[l];
}
System.out.println(sum);
}



 }
}
