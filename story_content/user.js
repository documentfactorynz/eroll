window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const input = document.querySelector('.acc-textinput');
setVar('FirstName', '');
input.addEventListener('keyup', () => {
  const val = input.value.trim();
  const formatted = val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : '';
  setVar('FirstName', formatted);
});
}

window.Script2 = function()
{
  const input = document.querySelector('.acc-textinput');
setVar('Surname', '');
input.addEventListener('keyup', () => {
  const val = input.value.trim();
  const formatted = val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : '';
  setVar('Surname', formatted);
});
}

window.Script3 = function()
{
  const input = document.querySelector('.acc-textinput');
setVar('FirstNameTwo', '');
input.addEventListener('keyup', () => {
  const val = input.value.trim();
  const formatted = val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : '';
  setVar('FirstNameTwo', formatted);
});
}

window.Script4 = function()
{
  const input = document.querySelector('.acc-textinput');
setVar('SurnameTwo', '');
input.addEventListener('keyup', () => {
  const val = input.value.trim();
  const formatted = val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : '';
  setVar('SurnameTwo', formatted);
});
}

window.Script5 = function()
{
  const input = document.querySelector('.acc-textinput');
setVar('FirstNameThree', '');
input.addEventListener('keyup', () => {
  const val = input.value.trim();
  const formatted = val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : '';
  setVar('FirstNameThree', formatted);
});
}

window.Script6 = function()
{
  const input = document.querySelector('.acc-textinput');
setVar('SurnameThree', '');
input.addEventListener('keyup', () => {
  const val = input.value.trim();
  const formatted = val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : '';
  setVar('SurnameThree', formatted);
});
}

window.Script7 = function()
{
  const input = document.querySelector('.acc-textinput');
setVar('FirstNameSeven', '');
input.addEventListener('keyup', () => {
  const val = input.value.trim();
  const formatted = val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : '';
  setVar('FirstNameSeven', formatted);
});
}

window.Script8 = function()
{
  const input = document.querySelector('.acc-textinput');
setVar('SurnameSeven', '');
input.addEventListener('keyup', () => {
  const val = input.value.trim();
  const formatted = val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : '';
  setVar('SurnameSeven', formatted);
});
}

window.Script9 = function()
{
  const input = document.querySelector('.acc-textinput');
setVar('StreetNumber', '');
input.addEventListener('keyup', () => {
  const val = input.value.trim();
  const formatted = val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : '';
  setVar('StreetNumber', formatted);
});
}

window.Script10 = function()
{
  const input = document.querySelector('.acc-textinput');
setVar('StreetName', '');
input.addEventListener('keyup', () => {
  const val = input.value.trim();
  const formatted = val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : '';
  setVar('StreetName', formatted);
});
}

window.Script11 = function()
{
  const input = document.querySelector('.acc-textinput');
setVar('Suburb', '');
input.addEventListener('keyup', () => {
  const val = input.value.trim();
  const formatted = val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : '';
  setVar('Suburb', formatted);
});
}

};
