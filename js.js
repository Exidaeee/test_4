let question_arr = ["Хто перший президент України? ","Операція «Захід» 1947 року передбачала?", "Укажіть одну з характерних рис соціально-економічного розвитку УРСР на початку 1980-х рр?", "Започаткування системи олігархічних фінансово-промислових груп було характерним для соціально-економічного життя України в період", "Данило Романович здійснював правління Галицько-Волинською державою протягом"]
let a1_arr = ["Леонід Данилович Кучма","заселення Волині польськими осадниками для полонізації краю","зростання дефіциту товарів широкого вжитку","становлення України як незалежної держави (1991-2010 рр.)","1113-1125 рр."]
let a2_arr = ["Леонід Макарович Кравчук","депортацію частини населення західних областей України до східних регіонів СРСР","згортання ринкових механізмів управління економікою","відновлення незалежності України (1985-1991 рр.)","1238-1264 рр"]
let a3_arr = ["Віктор Андрійович Ющенко","скорочення видатків на соціальну сферу","упровадження фермерських господарств на селі","загострення кризи радянської системи (1965-1985 рр.)","1199-1205 рр."]
let a4_arr = ["Віктор Федорович Янукович","мобілізацію польовими військкоматами українців на теренах, із яких вигнано німецьких загарбників)","скорочення видатків на соціальну сферу","десталінізації та лібералізації суспільного життя(1953-1964 рр.)","1019-1054 рр."]
let answer_arr = ["Леонід Макарович Кравчук","депортацію частини населення західних областей України до східних регіонів СРСР","зростання дефіциту товарів широкого вжитку","становлення України як незалежної держави (1991-2010 рр.)","1238-1264 рр"]
let n_right_answer_arr = [2,2,1,1,2]
// let n_right_answer = 1;
let right_answers = 0;
let n_answer = 4;

question.innerHTML=question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
  function f_out (){
        console.log(y1.checked);
        console.log(y2.checked);
        console.log(y3.checked);
        console.log(y4.checked);

        if (y1.checked){ n_a = 1;}
        if (y2.checked){ n_a = 2;}
        if (y3.checked){ n_a = 3;}
        if (y4.checked){ n_a = 4;}
        console.log(n_a);
        
        if (n_a == n_right_answer){
        right_answers += 1;
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        if (n_question.value == n_answer){
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b>"+right_answers+"</b>";
            right_div.appendChild(el1);
        }
        }
        else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
        }
  }
  function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }
  function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    n_question.value = k;
    console.log(n_question)
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    a4.innerHTML = a4_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];
    
    n_right_answer =n_right_answer_arr[n_question.value];
    
  }