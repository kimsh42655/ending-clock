const noticetitle = document.querySelector('#notice span');
const noticebox = document.querySelector('#notice-box');
const noticeul = document.querySelector('#notice-box ul');
const page = document.querySelector('#notice #page');
const button1 = document.querySelector('#page span:nth-child(1)');
const button2 = document.querySelector('#page span:nth-child(2)');

const CLICKED_CLASS = 'clicked';

APIURL = 'http://endingclock.xyz/api/notice/';

function viewnotice(){
    if(noticebox.classList.contains(HIDDEN_CLASS)){
        noticebox.classList.remove(HIDDEN_CLASS)
    } else {
        noticebox.classList.add(HIDDEN_CLASS);
    }
}

function update(){
    const newul1 = document.createElement('ul');
    const newul2 = document.createElement('ul');
    fetch(APIURL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            for(i = 0; i < 5; i++){
                const newli = document.createElement('li');
                const newa = document.createElement('a');
                const newdate = document.createElement('span');
                newdate.classList.add('date');
                newdate.innerText = `${data[i].date.split('-')[1]}.${data[i].date.split('-')[2]} `;
                const newtitle = document.createElement('span');
                newtitle.classList.add('title');
                newtitle.innerText = `${data[i].title}`;
                newa.appendChild(newdate);
                newa.appendChild(newtitle);
                newa.setAttribute('href',data[i].link);
                newli.appendChild(newa);
                newul1.appendChild(newli);
            }
            noticebox.insertBefore(newul1, page);
            for(i = 5; i < 10; i++){
                const newli = document.createElement('li');
                const newa = document.createElement('a');
                const newdate = document.createElement('span');
                newdate.classList.add('date');
                newdate.innerText = `${data[i].date.split('-')[1]}.${data[i].date.split('-')[2]} `;
                const newtitle = document.createElement('span');
                newtitle.classList.add('title');
                newtitle.innerText = `${data[i].title}`;
                newa.appendChild(newdate);
                newa.appendChild(newtitle);
                newa.setAttribute('href',data[i].link);
                newli.appendChild(newa);
                newul2.appendChild(newli);
            }
            newul2.classList.add(HIDDEN_CLASS);
            noticebox.insertBefore(newul2, page);

            button1.addEventListener('click', function(){
                if(newul1.classList.contains(HIDDEN_CLASS)){
                    newul2.classList.add(HIDDEN_CLASS);
                    newul1.classList.remove(HIDDEN_CLASS);
                    button1.classList.add(CLICKED_CLASS);
                    button2.classList.remove(CLICKED_CLASS);
                }
            });
            button2.addEventListener('click',function(){
                if(newul2.classList.contains(HIDDEN_CLASS)){
                    newul1.classList.add(HIDDEN_CLASS);
                    newul2.classList.remove(HIDDEN_CLASS);
                    button2.classList.add(CLICKED_CLASS);
                    button1.classList.remove(CLICKED_CLASS);
                }
            })

        })
        .catch(function(error){
            console.log(error);
        });

    
}

noticetitle.addEventListener('click', viewnotice);

update();