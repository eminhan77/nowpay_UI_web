

const ctx=document.getElementById("myChart");

const getGradient=(ctx,chartArea)=>{
    let gradient=ctx.createLinearGradient(0,chartArea.bottom,0,
        chartArea.bottom,
        0,
        chartArea.top
    );
    gradient.addColorStop(0.9,"rgba(21,123,243,0.2)");
    gradient.addColorStop(0,"transparent");
    return gradient;
}

new CharacterData(ctx,{
    typr:"line",
    data:{
        labels:["Mar","April","May","Jun","Jul","Aug","Sep","Oct"],
        datasets:[
            {
                data:[3,2,5,4,19,20,17,15,21],
                borderWidth:2,
                borderColor:"#157bf8",
                lineTension:0.8,
                fill:true,
                backgroundColor:(context)=>{
                    const chart=context.chart;
                    const {ctx,chartArea}=chart

                    if(!chartArea)return;
                    return getGradient(ctx,chartArea);

                }
            }
        ]
    },
    options:{
        responsive:false,
        scales:{
            y:{beginAtZero:true}
        },
   plugins:{
    legend:{display:false}
   }
    },

});




const transactions=[

    {
        status:1,
        name:"EMMANUEL EZE",
        image:"assets/flutterwave.jpg",
        email:"emmy@gmail.com",
        date:new Date().toLocaleDateString(),
        amount:"$230",

    },

    {
        status:1,
        name:"JAMES",
        image:"assets/paystack.png",
        email:"james@gmail.com",
        date:new Date().toLocaleDateString(),
        amount:"$50",

    },

    {
        status:2,
        name:"OLUOMA PATIENCE",
        image:"assets/paypal.png",
        email:"oluoma@gmail.com",
        date:new Date().toLocaleDateString(),
        amount:"$100",

    },

    {
        status:0,
        name:"DANIEL KASI",
        image:"assets/profile.png",
        email:"daniel@gmail.com",
        date:new Date().toLocaleDateString(),
        amount:"$5",

    },

    {
        status:4,
        name:"EMİN HAN CELİK",
        image:"",
        email:"eminhan@gmail.com",
        date:new Date().toLocaleDateString(),
        amount:"$888745",

    }
]

const shortenTextFormatter=(text,maxLength)=>text.length>maxLength ? "..." +text.slice(-maxLength):text;


transactions.forEach((data)=>{

let=status=data.status===1 ? "Success" : data.status===0 ? "Failed": "Processing";

    document.querySelector(".transactions .table .tbody").innerAdjacentHTML("beforeend",
        
        <tr>
<td class="minimize">

    <div class="profile">
        <img src="${data.image}"/>
    </div>
</td>

<td>
    <td title="${data.name}" class="minimize">${data.name} </td>
<td class="minimize">${data.date}</td>
<td title="${data.email}">${shortenTextFormatter(data.email,11)}</td>

<div class="${status}">${status}</div>
</td>


        </tr>
        );
})

const themeSwitch=document.getElementById("theme-switch");
const html=document.firstElementChild;
themeSwitch.onclick=()=>{
    html.classList.toggle("dark");
};