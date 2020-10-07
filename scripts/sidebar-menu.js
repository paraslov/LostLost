(function()
{
    var openingBtn = document.querySelector('.sidebar__hamburger');
var closingBtn = document.querySelector('.sidebar__close');
var sidebar = document.querySelector('.sidebar');

openingBtn.addEventListener("click", function()
{
    sidebar.classList.add('sidebar--opened');
});

closingBtn.addEventListener('click', function() 
{
    sidebar.classList.remove('sidebar--opened');
});
})();
