document.querySelector('#push').onclick=function(){
    if(document.querySelector('#newtask input').value.length ==0){
        alert('Por favor, digite uma tarefa para continuar')
    }

    else{
        document.querySelector('#tasks').innerHTML+=
        `<div class="task">
            <span id='taskname'>
                ${document.querySelector
                ('#newtask input').value}
            </span>
            <button class="delete">
            <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
                    
        </div>`;

        let current_tasks= document.querySelectorAll('.delete');
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll('.task');
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed')
            }
        }

        document.querySelector('#newtask input').value = '';
    }
}