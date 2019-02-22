const dropdownLi = document.querySelectorAll("header>ul:nth-child(1)>li:nth-child(2), header>ul:nth-child(1)>li:nth-child(4)")

dropdownLi.forEach(
    li => {
        li.addEventListener('mouseover', () => {
            li.lastElementChild.style.display = "block";
        })

        li.addEventListener('mouseout', () => {
            li.lastElementChild.style.display = "none";
        })
    }
)