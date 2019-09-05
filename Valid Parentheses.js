var isValid = function(s) {
    var stack = [];
    var top=-1;
    
    for(var i = 0; i<s.length; i++)
    {
        if(s[i] == ")")
        {
            if(top >= 0 && stack[top] == "(")
                top--;
            else
                return false;
        }
        else if(s[i] == "]")
        {
             if(top >= 0 && stack[top] == "[")
                top--;
            else
                return false;   
        }
        else if(s[i] == "}")
        {
            if(top >= 0 && stack[top] == "{")
                top--;
            else
                return false;    
        }
        else
        {
           stack[++top] = s[i];     
        }
    }
    return top==-1;
};

