//  ПОЛУЧАЕМ ВСЕ ЭЛЕМЕНТЫ
let items = document.querySelectorAll('.block-open');

for (let elem of items) {


    // .querySelector('.open-items')

    let main_elem_click = elem
    let all_items = elem.querySelector('.all-items')

    

    main_elem_click.addEventListener("click", function (e) {
        

        if(e.target.classList =='open-items'){
            e.preventDefault()
        }

        // e.preventDefault()123

        all_items.classList.toggle('active');
        
    })
}


//  FOR PAGE NUMBER 5  frequently-asked-questions



let items_often_asked_questions = document.querySelectorAll('.frequently-asked-questions .item');

for (let elem of items_often_asked_questions) {

    console.log(elem)

    let main_elem_click = elem.querySelector('.image')
    let all_items = elem.querySelector('.text')

    // let all_items_images = elem.querySelectorAll('.image')

    main_elem_click.addEventListener("click", function (e) {

        e.preventDefault()
        all_items.classList.toggle('active');

        if(all_items.classList.contains('active')){
            main_elem_click.querySelector('.not-active').classList.add('active')
            main_elem_click.querySelector('.active').classList.remove('active');
        }else{
            main_elem_click.querySelector('.not-active').classList.remove('active')
            main_elem_click.querySelector('.active-first').classList.add('active');
        }

    })

}