const theme = localStorage.getItem('theme') || '1' 
change_theme(theme)


function change_theme(value) {
    const cards = document.querySelectorAll('.card')
    const background = document.querySelector('main')
    const footer = document.querySelector('footer')

    if (value == '1') {
        background.classList.replace('bg-dark', 'bg-light')
        cards.forEach(card => {
            const button = card.querySelector('button')
            card.classList.replace('bg-secondary', 'bg-light')
            card.classList.replace('text-white', 'text-black')
            button.classList.replace('btn-light', 'btn-danger')
            footer.classList.replace('bg-secondary', 'bg-danger')
        });
        localStorage.setItem('theme','1')

    }

    if (value == '2') {
        background.classList.replace("bg-light", "bg-dark")
        if (footer.classList.contains('bg-danger')) {
            footer.classList.replace('bg-danger', 'bg-secondary')

        } else {
            footer.classList.toggle('bg-secondary')
        }

        cards.forEach(card => {

            const button = card.querySelector('button')
            if (card.classList.contains('bg-light')) {
                card.classList.replace('bg-light', 'bg-secondary')
            } else {
                card.classList.toggle('bg-secondary')
            }

            if (card.classList.contains('text-black')) {
                card.classList.replace('text-black', 'text-white')
            } else {
                card.classList.toggle('text-white')
            }




            button.classList.replace('btn-danger', 'btn-light')

        });
        localStorage.setItem('theme','2')

    }
}