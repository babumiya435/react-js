localStorage.setItem("key",JSON.stringify({name:"dadadad"}));
localStorage.setItem(null,null);
localStorage.setItem(true,false);
localStorage.setItem(undefined,undefined);
localStorage.setItem([],[]);
// console.log(localStorage)
JSON.parse(localStorage.getItem("key",{name:"dadadad"}));

// sets the cookie cookie1
document.cookie = 'cookie1=test; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/'

// sets the cookie cookie2 (cookie1 is *not* overwritten)
document.cookie = 'cookie2=test; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/'

// remove cookie2
document.cookie = 'cookie2=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'