window.onload=function() {

    var a, b, c, d, e;
    var ipts,ipt1,ipt2,
        button1 = document.getElementById("button1"),
        button2 = document.getElementById("button2"),
        result1 = document.getElementById("result1"),
        result2 = document.getElementById("result2"),
        result3 = document.getElementById("result3"),
        result4 = document.getElementById("result4"),
        result5 = document.getElementById("result5"),
        ipt1 = document.getElementById("ipt1"),
        ipt2 = document.getElementById("ipt2");

    button1.onclick = function () {
        ipt2=0;
        result1.innerHTML="0";
        result2.innerHTML="0";
        result3.innerHTML="0";
        result4.innerHTML="0";
        result5.innerHTML="0";
        ipt1 = document.getElementById("ipt1");
        ipt2 = document.getElementById("ipt2");
        if(ipt1.value<=0||ipt1.value==""){
            alert("请输入正确的工资")
        }else{
            ipts = ipt1.value- ipt2.value;
            if (ipts > 0 && ipts <= 5000) {
                result1.innerHTML = 0;
                result2.innerHTML = 0;
                result3.innerHTML = 0;
                result4.innerHTML = 0;
                result5.innerHTML = ipts;
                alert("您不用交税！")
            }else if (ipts > 5000) {
                a = ipts - 5000;//应纳税额度
                if (ipts > 5000 && ipts <= 8000) {
                    b = 3;
                    c = 0;
                    d=(ipts-5000)*0.03;
                } else if (ipts > 8000 && ipts <= 17000) {
                    b = 10;
                    c = 210;
                    d=90+(ipts-8000)*0.1;
                } else if (ipts > 17000 && ipts <= 30000) {
                    b = 20;
                    c = 1410;
                    d=990+(ipts-17000)*0.2;
                    // d=900
                } else if (ipts > 30000 && ipts <= 40000) {
                    b = 25;
                    c = 2660;
                    d=3590+(ipts-30000)*0.25;
                    // 2600
                } else if (ipts > 40000 && ipts <= 60000) {
                    b = 30;
                    c = 4410;
                    d=6090+(ipts-40000)*0.3;
                    // 2500
                } else if (ipts > 60000 && ipts <= 85000) {
                    b = 35;
                    c = 7160;
                    d=12090+(ipts-60000)*0.35;
                    // 6000
                } else if (ipts > 85000) {
                    b = 45;
                    c = 15160;
                    d=20840+(ipts-85000)*0.45;
                    // 8750
                }
                e = ipts - d;//实发工资
                result1.innerHTML=a;
                result2.innerHTML=b;
                result3.innerHTML=c;
                result4.innerHTML=d.toFixed(2);
                result5.innerHTML=e.toFixed(2);
                ipt1.value= "";
                ipt2.value= "";
            }
        }
    };

    button2.onclick = function () {
        // ipt1 = document.getElementById("ipt1");
        // ipt2 = document.getElementById("ipt2");
        ipt1.value= "";
        ipt2.value= "";
    };
    // ipt1.onkeydown=function(){
    //     // alert("成功！");
    //     if(ipt1.value!==""||ipt1.value!==0){
    //         button1.style.backgroundColor="#46a0f0";
    //         button2.style.backgroundColor="#46a0f0";
    //         // alert(ipt1.value);
    //     }else if(ipt1.value==""||ipt1.value==0){
    //         button1.style.backgroundColor="#ccc";
    //         button2.style.backgroundColor="#ccc";
    //         // alert(ipt1.value);
    //     }
    // }
    ipt1.oninput=function(){
        if(ipt1.value.length>0&&ipt1.value!==0){
            button1.style.backgroundColor="#46a0f0";
            button2.style.backgroundColor="#46a0f0";
        }else{
            button1.style.backgroundColor="#ccc";
            button2.style.backgroundColor="#ccc";
        }
    }
};