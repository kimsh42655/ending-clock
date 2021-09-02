const clock = document.querySelectorAll('#ending-clock span');
const isvacation = false;
const nextdate = new Date(2021,11,21);


function getClock(){
    const current = new Date();
    let interval = nextdate.getTime() - current;
    const days = Math.floor(interval / (1000*60*60*24));
    interval -= days * (1000*60*60*24);
    const hours = Math.floor(interval / (1000*60*60));
    interval -= hours * (1000*60*60);
    const minutes = Math.floor(interval / (1000*60));
    interval -= minutes * (1000*60);
    const seconds= Math.floor(interval / (1000));
    if(isvacation){
        clock[0].innerText = `개강(${nextdate.getFullYear()}-${String(nextdate.getMonth() + 1).padStart(2,"0")}-${String(nextdate.getDate()).padStart(2,"0")})까지`
    }
    else{
        clock[0].innerText = `종강(${nextdate.getFullYear()}-${String(nextdate.getMonth() + 1).padStart(2,"0")}-${String(nextdate.getDate()).padStart(2,"0")})까지`
    }
    clock[1].innerText = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
}


getClock();
setInterval(getClock, 1000);