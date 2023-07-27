//your JS code here. If required.
 let name;
        let age;
        let btn = document.getElementById("btn");
        btn.addEventListener("click", (e)=>{
            e.preventDefault();

            name = document.getElementById("name").value;
            age = document.getElementById("age").value;

            let prom = new Promise((resolve, reject) =>{
                if(age > 18){
                    setTimeout(()=>{
                        resolve(name);
                    }, 4000)
                }else{
                    setTimeout(()=>{
                        reject(name);
                    }, 4000)
                }
            })


            prom.then((data) => {
                alert("Welcome, " +data+"." + " you can vote.");
            })
            prom.catch((data)=>{
                alert("Oh sorry " +data+"." + " You aren't old enough.")
            })

        })