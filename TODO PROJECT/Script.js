let arrayOfTask=[];
    const container = document.querySelector(".container");
    const form=document.querySelector("form");
    const newtask=document.querySelector("#task");
    form.addEventListener('submit',(event)=>{
        event.preventDefault();

        arrayOfTask.push(newtask.value)
        console.log(arrayOfTask)

        let newdiv=document.createElement('div');
        newdiv.innerHTML=`
        <h3>${newtask.value}</h3>
        <button class="menu-btn">⋮</button>

        <div class="popup">
            <button class="edit">Edit</button>
            <button class="remove">Remove</button>
        </div>

        <div class="scroll">
            <button class="up">^</button>
            <button class="down">⌄</button>
        </div>
        `
        newdiv.classList.add("tasks")
        container.appendChild(newdiv)
        form.reset()


        

    })
    
    container.addEventListener('click',(event)=>{
        if(event.target.classList.contains('menu-btn')){
            let task = event.target.parentElement;
            let popup = task.querySelector('.popup')
            popup.style.display='block';
        }
        if(event.target.classList.contains('edit')){
            let task = event.target.parentElement.parentElement;
            let h3 = task.querySelector('h3')
            let inp = prompt("Enter your new task",h3.innerText)
            h3.innerText=inp;
            let popup = task.querySelector('.popup')
            popup.style.display='none'
        }
        if(event.target.classList.contains('remove')){
            let task = event.target.parentElement.parentElement;
            task.remove();
            let popup = task.querySelector('.popup')
            popup.style.display='none'
        }
        if(event.target.classList.contains('up')){
            let task = event.target.parentElement.parentElement;
            let allTask = container.querySelectorAll('.tasks');
            for(let i=0;i<allTask.length;i++){
                if(allTask[i] === task){
                    if(i>0){
                        container.insertBefore(task, allTask[i-1])
                    }
                }
            }
        }
        if(event.target.classList.contains('down')){
            let task = event.target.parentElement.parentElement;
            let allTask = container.querySelectorAll('.tasks');
            for(let i=0;i<allTask.length;i++){
                if(allTask[i] === task){
                    if(i<allTask.length-1){
                        container.insertBefore(allTask[i+1], task)
                    }
                }
            }
        }
    })