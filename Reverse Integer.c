int reverse(int x)
{
long int temp=0;
while(fabs(x)>0)
{
 temp=temp*10+x%10;
 x/=10;
}
if ( temp > INT_MAX || temp < (-INT_MAX - 1) )
 return 0;
else
 return temp;
}


