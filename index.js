const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const btn4=document.getElementById("btn4");
const btn5=document.getElementById("btn5");

const step1=document.getElementById("step1");
const step2=document.getElementById("step2");
const step3=document.getElementById("step3");
const step4=document.getElementById("step4");

const head1=document.getElementById("head1");
const head2=document.getElementById("head2");
const head3=document.getElementById("head3");

//form select options
let doctype=document.getElementById("idtype");
let gender=document.getElementById("gender");

let formdata=[]


let fname=document.getElementById("fname");
let mob=document.getElementById("num");
let email=document.getElementById("email");

let firstvalid=false;
let mobvalid=false;
let emailvalid=false


head1.addEventListener("click",()=>{
    step1.style.display = 'block';
    step2.style.display = 'none';
    step3.style.display = 'none';
    head1.style.backgroundColor="aqua"
    head1.style.color="red"
    head2.style.backgroundColor="aqua"
    head2.style.color="red"
    head3.style.backgroundColor="aqua"
    head3.style.color="red"
    window.scroll(0,0);

})


fname.addEventListener("blur",()=>{
    let regex=/[a-zA-Z]{2,15}/
    let value1=fname.value;
    if(regex.test(value1)){
        firstvalid=true;
        console.log(firstvalid)
        document.getElementById("infirst").innerText = ""
    }else{
        firstvalid=false;
        document.getElementById("infirst").innerText = "Please Enter the Valid first Name"
    }

})
mob.addEventListener("blur",()=>{
    let regex=/[0-9]{10}/
    let value2=mob.value;
    if(regex.test(value2)){
        mobvalid=true;
        console.log(mobvalid)
        document.getElementById("inmob").innerText = ""
    }else{
        mobvalid=false;
        document.getElementById("inmob").innerText = "Enter valid 10 digit mobile number"
        
    }

})
email.addEventListener("blur",()=>{
    let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let value3=email.value;
    if(regex.test(value3)){
        emailvalid=true;
        console.log(emailvalid)
        document.getElementById("inemail").innerText = ""
    }else{
        emailvalid=false;
        document.getElementById("inemail").innerText = "Please Enter the Valid Email ID"
    }

})




btn1.addEventListener("click",() => {
    // e.preventdefault()
    if(firstvalid && mobvalid && emailvalid && document.getElementById("moreage").checked){
        step1.style.display = 'none';
        step2.style.display = 'block';
        step3.style.display = 'none';
        head1.style.backgroundColor="green"
        head1.style.color="Yellow"
        window.scroll(0,0);
        head2.addEventListener("click",()=>{
            step1.style.display = 'none';
            step2.style.display = 'block';
            step3.style.display = 'none';
            head1.style.backgroundColor="green"
            head1.style.color="yellow"
            head2.style.backgroundColor="aqua"
            head2.style.color="red"
            head3.style.backgroundColor="aqua"
            head3.style.color="red"
            window.scroll(0,0);
        
        })  
    }else{
        alert("Please Enter the valid details")
    }

})

btn2.addEventListener("click",() => {
    // e.preventdefault()
    step1.style.display = 'block';
    step2.style.display = 'none';
    step3.style.display = 'none';
    head1.style.backgroundColor="aqua"
    head1.style.color="red"
    window.scroll(0,0);

});

let year1=document.getElementById("year1");
let year2=document.getElementById("year2");
let year3=document.getElementById("year3");
let degree=document.getElementById("degree");

let degreevalid=false;
let year1valid=false;
let year2valid=false;
let year3valid=false;

year1.addEventListener("blur",()=>{
    let regex=/[0-9]{4}/;
    let value4=year1.value;
    if(regex.test(value4)){
        year1valid=true;
        console.log(year1valid)
        document.getElementById("inyear1").innerText = ""
    }else{
        year1valid=false;
        document.getElementById("inyear1").innerText = "Enter Valid Year,only numbers allowed"
    }

})





year2.addEventListener("blur",()=>{
    let regex=/[0-9]{4}/;
    let value5=year2.value;
    if(regex.test(value5)){
        year2valid=true;
        console.log(year2valid)
        document.getElementById("inyear2").innerText = ""
    }else{
        year2valid=false;
        document.getElementById("inyear2").innerText = "Enter Valid Year,only numbers allowed"
    }

})
year3.addEventListener("blur",()=>{
    let regex=/[0-9]{4}/;
    let value6=year3.value;
    if(regex.test(value6)){
        year3valid=true;
        console.log(year3valid)
        document.getElementById("inyear3").innerText = ""
    }else{
        year3valid=false;
        document.getElementById("inyear3").innerText = "Enter Valid Year,only numbers allowed"

    }

})
degree.addEventListener("blur",()=>{
    let regex=/[a-zA-Z]/;
    let value7=degree.value;
    if(regex.test(value7)){
        degreevalid=true;
        console.log(degreevalid)
        document.getElementById("indegree").innerText = ""
    }else{
        degreevalid=false;
        document.getElementById("indegree").innerText = "Only Alphabet allowed"

    }

})


btn3.addEventListener("click",() => {
    // e.preventdefault()
    if(year1valid && year2valid && year3valid && degreevalid){
        step1.style.display = 'none';
        step2.style.display = 'none';
        step3.style.display = 'block';
        head2.style.backgroundColor="green"
        head2.style.color="Yellow"
        window.scroll(0,0);
        head3.addEventListener("click",()=>{
            step1.style.display = 'none';
            step2.style.display = 'none';
            step3.style.display = 'block';
            head1.style.backgroundColor="green"
            head1.style.color="yellow"
            head2.style.backgroundColor="green"
            head2.style.color="yellow"
            head3.style.backgroundColor="aqua"
            head3.style.color="red"
            window.scroll(0,0);
        
        }) 
    }else{
        alert("Please Enter the valid details")
    }


})
btn4.addEventListener("click",() => {
    // e.preventdefault()
    step1.style.display = 'none';
    step2.style.display = 'block';
    step3.style.display = 'none';
    head2.style.backgroundColor="aqua"
    head2.style.color="red"
    head3.style.backgroundColor="aqua"
    head3.style.color="red"
    window.scroll(0,0);

})
let company=document.getElementById("company");
let posi=document.getElementById("position");
let ctc=document.getElementById("ctc");


let companyvalid=false;
let posivalid=false;
let ctcvalid=false;


company.addEventListener("blur",()=>{
    let regex=/[a-zA-Z0-9]/;
    let value8=company.value;
    if(regex.test(value8)){
        companyvalid=true;
        console.log(companyvalid)
        document.getElementById("incompany").innerText = ""
    }else{
        companyvalid=false;
        document.getElementById("incompany").innerText = "Enter Valid name special character not allowed"

    }

})

posi.addEventListener("blur",()=>{
    let regex=/[a-zA-Z0-9]/;
    let value9=posi.value;
    if(regex.test(value9)){
        posivalid=true;
        console.log(posivalid)
        document.getElementById("inposition").innerText = ""
    }else{
        posivalid=false;
        document.getElementById("inposition").innerText = "Enter Valid name special character not allowed"

    }

})
ctc.addEventListener("blur",()=>{
    let regex=/[0-9]{1,8}/;
    let value10=ctc.value;
    if(regex.test(value10)){
        ctcvalid=true;
        console.log(ctcvalid)
        document.getElementById("inctc").innerText = ""
        
    }else{
        ctcvalid=false;
        document.getElementById("inctc").innerText = "only Numbers Allowed"

    }

})





btn5.addEventListener("click",() => {
    // e.preventdefault()
    if(companyvalid && posivalid && ctcvalid){
        step1.style.display = 'none';
        step2.style.display = 'none';
        step3.style.display = 'none';
        step4.style.display ="block"
        head3.style.backgroundColor="green"
        head3.style.color="Yellow"
        const arr=[...document.querySelectorAll("input")]
        let arrlength=arr.length
    // arr.push({"idtype":doctype.value})
    // arr.push({"gender":gender.value})
        let obj = {
            idType : doctype.value,
            gender:gender.value
        }
        for(let i=0;i<arrlength;i++){
            if(arr[i].name==="eligible"){
                obj[arr[i].name]=arr[i].checked
                continue
            }
            obj[arr[i].name] = arr[i].value
        }
        console.log(obj)
        localStorage.setItem("formData" , JSON.stringify(obj))
        setTimeout(()=>{
            document.querySelector(".statusbar").style.display="none"

        },2000)
        

    }else{
        alert("Please check the details")
    }

})


// background-color: aqua;
// color: red;