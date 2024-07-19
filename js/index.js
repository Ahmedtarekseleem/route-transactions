// let conter=0

async function getdata() {
    let api = await fetch("https://my-json-server.typicode.com/Ahmedtarekseleem/route-transactions")
    let data = await api.json()
    // console.log(data);
    return data.customers
    // startApp(data)
}


async function display(data) {

    let api = await fetch("https://my-json-server.typicode.com/Ahmedtarekseleem/route-transactions")
    let datas = await api.json()
    let data2= datas.transactions

    console.log(data2);
    let box = `
        <table class="table table-bordered rounded text-center border border-1 table-striped" id="example"  style="width:100%">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Date</th>
                    <th>amount</th>
                </tr>    
                </thead>
                <tbody>
            <tr >
                
                `

    for (let n = 0; n < data.length; n++) {
        let bos = data[n].id
        // console.log(bos);
        // console.log(data2.sort());
        for (let i = 0; i < data2.length; i++) {

            if (bos == data2[i].customer_id) {
                box += `       
            
            <td onclick="charts(${i})">${data[n].name}</td>
            `

                // if(box=="<td><td"){

                // }
                // if(data2[i].customer_id!=box){

                box += `       
                
                
                
                    <td >${data2[i].customer_id}</td>
                    <td>${data2[i].date} </td>
                    <td>${data2[i].amount} </td>
        
                    `


                // }

                box += `
                
                </tr>    
                `
                console.log("yes")

            }

        }


    }

    box += `

        </tbody>
        </table>
    
`
    document.getElementById("demo").innerHTML = box

}

async function search(inputValue) {

    let api = await fetch("https://my-json-server.typicode.com/Ahmedtarekseleem/route-transactions")
    let datas = await api.json()
    let data2= datas.transactions
    // let data2 = await api.json()

    let apio = await fetch("https://my-json-server.typicode.com/Ahmedtarekseleem/route-transactions")
    let datass = await apio.json()
    let data= datass.customers

    let box = `
    <table class="table table-bordered rounded text-center border border-1 table-striped" id="example"  style="width:100%">
            <thead>
            <tr>
                <th>Name</th>
                <th>Id</th>
                <th>Date</th>
                <th>amount</th>
            </tr>    
            </thead>
            <tbody>
        <tr  >
            
            `

    for (let n = 0; n < data.length; n++) {

        if (data[n].name.toLowerCase().includes(inputValue.toLowerCase())) {
            let bos = data[n].id
            console.log(bos);
            console.log(data2.sort());
            for (let i = 0; i < data2.length; i++) {

                if (bos == data2[i].customer_id) {
                    box += `       
        
        <td>${data[n].name}</td>
        `

                    // if(box=="<td><td"){

                    // }
                    // if(data2[i].customer_id!=box){

                    box += `       
            
            
            
                <td > ${data2[i].customer_id}</td>
                <td>${data2[i].date} </td>
                <td>${data2[i].amount} </td>
    
                `


                    // }

                    box += `
            
            </tr>    
            `
                    console.log("yes")

                }


            }
        }


    }

    box += `

    </tbody>
    </table>

`
    document.getElementById("demo").innerHTML = box

}



async function charts(index) {


    let api2 = await fetch("https://my-json-server.typicode.com/Ahmedtarekseleem/route-transactions")
    let datass = await api.json()
    let data= datass.customers


    let api = await fetch("https://my-json-server.typicode.com/Ahmedtarekseleem/route-transactions")
    let datas = await api.json()
    let data2= datas.transactions


    // arrDate = []
    // arrAmount = []
    for (let i = 0; i < data2.length; i++) {

        // let conter=0
        if (data2[index].customer_id == data2[i].customer_id) {

            // arrDate.push(data2[i].date)

            // arrAmount.push(data2[i].amount)
            // // let dem = arrDate
            // // console.log(dem);
            // console.log(arrDate);
            // console.log(arrAmount);
            // function demos
            //     () {
            //     return arrDate
            // }




            if (data2[i].customer_id==4) {
                console.log("cant");
                
        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [data2[i].date],
                datasets: [{
                    label: '# of Votes',
                    data: [data2[i].amount],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
            }
            else{
                console.log("can");
                const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [data2[i].date,data2[i].date],
                datasets: [{
                    label: '# of Votes',
                    data: [data2[i].amount,data2[i].amount-150],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
            }
        }
        // console.log(demos);


        // if (arr) {
        //     console.log("2");
        // }
        // else {

        //     console.log("1");
        // }



    }
}
let count = 0;
function createCounter() {

    return (function saveCount() {
        count++;
        console.log(count);
    })();
}

async function startApp() {
    let data = await getdata()
    display(data)



}






startApp()
// // getdata()
// $(document).ready(function(){
//     $('#table').DataTable({
//         dom:'Bfrtip',
//         buttons:[
//             'coppyHTml5',
//             'exelHtml5',
//             'csvHtml5',
//             'pdfHtml5'
//         ]
//     })
// })
// new DataTable('#table');