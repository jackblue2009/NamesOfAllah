
// $(document).ready(function() {
//     $(document).on('click', '.names', function() {
//         $(this).toggleClass('show-description');
//     });
// });

function createDivNames(items) {
    const divCollection = document.querySelector('#collections');
    divCollection.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const divItem = document.createElement('div');
        const itemRect = divItem.getBoundingClientRect();

        divItem.classList.add('names');
        divItem.innerHTML = `<p>${item.name}</p>`;
        divItem.id = item.id;

        divItem.addEventListener('mouseover', function() {
            const popup = document.getElementById('popup');
            const popupRect = popup.getBoundingClientRect();
            tPos = itemRect.top + window.scrollY + itemRect.height;
            lPos = itemRect.left + window.scrollX;
            displayPopup(item.name, item.text, tPos, lPos);
        })
        divItem.addEventListener('mouseout', function() {
            hidePopup();
        });
        divCollection.appendChild(divItem);
    }
}

function displayPopup(name, text, topPos, leftPos) {
    const popup = document.querySelector('.popup');
    const popTitle = document.getElementById('popupTitle');
    const popTxt = document.getElementById('popupTxt');

    popup.style.display = 'block';
    popup.style.top = `${topPos}px`;
    popup.style.left = `${leftPos}px`;

    popTitle.textContent = name;
    popTxt.textContent = text;
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}


const handlePage = async () => {
    let apiJson = "names.json";
    try {
        const response = await fetch(apiJson);
        if (!response.ok) {
            console.log('Error fetching json data')
        }
        const data = await response.json();
        createDivNames(data);
    } catch (error) {
        console.log('Error catching data: ', error);
    }
}

handlePage();