
const tabs = document.querySelector('.tabs');
tabs.addEventListener('click', showTabs)

function showTabs(event){
    const titleItem = event.target;
    titleItem.classList.toggle('active');
    
    function checkSameClass(){
        const checkSameClass = document.querySelectorAll('.active');
        for (let check of checkSameClass){
            if(check !== titleItem){
               return check.classList.remove('active');
            }
        } 
    }
    checkSameClass()
    
    function compareDataset(){
        const listText = document.querySelectorAll('.list-text');
        for (let dataName of listText){
            if (dataName.dataset.name === titleItem.dataset.name){
                dataName.hidden = false;
            }
            if (dataName.dataset.name !== titleItem.dataset.name){
                dataName.hidden = true;
            }
            if (!titleItem.classList.contains('active')){
                dataName.hidden = true;
            }
        }
    }
    compareDataset()
}
