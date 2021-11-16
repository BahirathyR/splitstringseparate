function splitstringseparate(str)
    {
        let alpha = "";
        let num = "";
        let spec = "";
        for (let i=0; i<str.length; i++)
        {
            // if (!isNaN(String(str[i]) * 1))
            if( str[i]>='0' && str[i]<='9')
                num+=str[i];
            else if((str[i] >= 'A' && str[i] <= 'Z') ||
             (str[i] >= 'a' && str[i] <= 'z'))
                alpha+=str[i];
            else
                spec+=str[i];
        }
        
        console.log(num)
                console.log(alpha)
                                console.log(spec)

                

    }
     
    module.exports.splitstringseparate=splitstringseparate
    