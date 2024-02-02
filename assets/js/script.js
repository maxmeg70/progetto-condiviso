let articoloInArrivo = document.getElementById('articolo_in_arrivo');
let dataArrivoArticolo = document.getElementById('data_arrivo_articolo');

articoloInArrivo.addEventListener('change', ()=>{
    if(articoloInArrivo.checked){
        dataArrivoArticolo.disabled = false;
    }else{
        dataArrivoArticolo.disabled = true;
    }
})