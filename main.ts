import { differenceInSeconds } from "date-fns"
import inquirer from "inquirer";


const res = await inquirer.prompt([
    {
        name: "Userinput",
        type:"number",
        message: "please enter the number of the count",
        validate: (input)=>{
            if(isNaN(input)){
                return "Please enter the unvalid number"
            }else if(input > 60){
                return "sacond must be in 60"
            }else{
                return true;
            }
        }
    }
])

let input = res.Userinput

function starttime(val:number) {
    const inttime =  new Date().setSeconds(new Date().getSeconds() + val)
    const interval = new Date(inttime);
    setInterval((()=>{
        const currentt = new Date()
        const timediff = differenceInSeconds(interval,currentt)

        if(timediff <= 0){
            console.log("Timer has expired");
            process.exit();
        }

        const min = Math.floor((timediff%(3600*24))/3600)
        const sec = Math.floor((timediff%60))
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`)
    }),1000)
}

starttime(input)