$('.names').click(function() {
    $(this).toggleClass('show-description');
    if ($(this).hasClass('show-description')) {
        $(this).css('width', '200px');
    } else {
        $(this).css('width', '100px');
    }
});

function createDivNames(items) {
    const divCollection = document.querySelector('div .collections');
    divCollection.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const divItem = document.createElement('div');
        divItem.classList.add('names');
        divItem.innerHTML = `<p>${item.name}<br /><small>${item.text}</small></p>`;
        divItem.id = item.id;
        divCollection.appendChild(divItem);
    }
}

const handlePage = async () => {
    let apiJson = "names.json";
    try {
        const response = await fetch(apiJson);
        const data = await response.json();
        createDivNames(data);
    } catch (error) {
        console.log('Error catching data: ', error);
    }
}

handlePage();