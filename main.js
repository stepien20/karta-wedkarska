const submitBtn=document.querySelector(`input[type="submit"]`)
if(!document.querySelector(`#imie`).value){
    console.log('lol')

}
submitBtn.addEventListener(`click`,e=>{
    e.preventDefault()
    const imie=document.querySelector(`#imie`).value
    const nazwisko=document.querySelector(`#nazwisko`).value
    const adres=document.querySelector(`#adres`).value
    const display=document.querySelector(`#display`)
    if(imie.length>0&&nazwisko.length>3&&adres.length>0){
        const p=document.createElement(`p`)
        p.innerHTML=`Imie: ${imie},<br>Nazwisko: ${nazwisko},<br>adres: ${adres}`
        display.append(p)
    }else{
    display.innerHTML=`<h3>Wymagane więcej niż 3 litery w nazwisku i każde pole formularza wypełnione</h3>`
    }
})