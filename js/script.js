const wrapper=document.querySelector('.wrapper');
const register=document.querySelector('.register');
const log=document.querySelector('.log');

log.addEventListener('click',()=>
{
    wrapper.classList.add(active);
});
register.addEventListener('click',()=>
{
    wrapper.classList.remove(active);
});


