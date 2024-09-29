var products = [
    {
        id:"PRD-1",
        name:"1.3 Chair",
        image:"../images/products/Image Placeholder.png",
        additional:"Color: Brown",
        title: "Design by 1AiDo, VN, 2010",
        price: 20
    },
    {
        id:"PRD-1",
        name:"1.3 Chair",
        image:"../images/products/Image Placeholder(1).png",
        additional:"Color: Brown",
        title: "Design by 1NgNaoDo, TheGioi, 2010",
        price: 19
    },
    {
        id:"PRD-1",
        name:"1.3 Chair",
        image:"../images/products/Image Placeholder(2).png",
        additional:"Color: Brown",
        title: "Design by Merit Frank, München Deutschland, 2010",
        price: 30
    }
]

/**
 * if (homeCardList) {
    const listCardNovel = homeCardList.map((product) => {
      const { id, image, name, title } = product;

      return `
    <div class="novel-items">
                      <div class="img-card">
                          <img src="${image}" alt="${image}" class="novel-card-img">
                      </div>
                      <div class="novel-title">
                          <h6 class="novel-name">${name}</h6>
                          <p class="novel-title">${title}</p>
                      </div>
                  </div>
    `;
    });
    homeCardNovelContainer.innerHTML = listCardNovel.join("");
  }


<tr>
    <td class="productCol">
        <div class="productFrame">
            <img src="./images/products/Image Placeholder.png" alt="">
            <div class="productInfo">
                <p class="bolder">1.3 Chair</p>
                <p>Color: Brown</p>
                <div class="remove">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#52667A"/>
                    </svg>
                    <p>Remove</p>
                </div>
            </div>
        </div>
    </td>
    <td>
        <div class="quantityButton">
            <div class="quantityContents">
                <svg class="quantityButton-minus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.23047 8H12.5638" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="quantityData">1</p>
                <svg class="quantityButton-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37549 3.33398C8.37549 3.12688 8.20759 2.95898 8.00049 2.95898C7.79338 2.95898 7.62549 3.12688 7.62549 3.33398V7.62549H3.33398C3.12688 7.62549 2.95898 7.79338 2.95898 8.00049C2.95898 8.20759 3.12688 8.37549 3.33398 8.37549H7.62549V12.6673C7.62549 12.8744 7.79338 13.0423 8.00049 13.0423C8.20759 13.0423 8.37549 12.8744 8.37549 12.6673V8.37549H12.6673C12.8744 8.37549 13.0423 8.20759 13.0423 8.00049C13.0423 7.79338 12.8744 7.62549 12.6673 7.62549H8.37549V3.33398Z" fill="black"/>
                </svg>
            </div>
        </div>
    </td>
    <td>
        <div class="priceDisplay">
            $19.00    
        </div>
    </td>
    <td>
        <div class="subTotal">
            $40.00
        </div>
    </td>
</tr>

 */

//DRAW LAYOUT
document.addEventListener("DOMContentLoaded", function() {
});