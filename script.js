const fetchData = async () => {
    // Get the value from the text box
    const userKeyword = document.getElementById('searchInput').value;
      const data = document.querySelector(".data");
    // Check if the user provided a keyword
    if (!userKeyword) {
      data.innerHTML='No keyword entered. Exiting.';
      return;
    }

    const url = `https://duckduckgo10.p.rapidapi.com/search/news?term=${userKeyword}&region=in-en&safeSearch=off`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e1df45be1amsh1bc437d03642a5bp1cf42djsnf14e3b6f935e',
        'X-RapidAPI-Host': 'duckduckgo10.p.rapidapi.com'
      }
    };

   
    const displayResults = (articles) => {
        const dataContainer = document.querySelector('.data');
        dataContainer.innerHTML = ''; 
      
        const cardDeck = document.createElement('div');
    cardDeck.classList.add('row');

        articles.forEach((article) => {
          const col = document.createElement('div');
          col.classList.add('col-sm-6');
      
      col.innerHTML = `
      <div class="card">
        <img src="${article.image}" class="card-img-top" alt="image">
        <div class="card-body">
          <h5 class="card-title">${article.title}</h5>
          <p class="card-text">${article.excerpt}</p>
          <p class="card-text">${article.relativeTime}</p>
          <a href="${article.url}" class="btn btn-primary" target="_blank">Read More</a>
        </div>
        </div>
      `;

      cardDeck.appendChild(col);
    });

    dataContainer.appendChild(cardDeck);
  };

      
      
      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse JSON response
        displayResults(result.data); // Display articles
      } catch (error) {
        console.error(error);
      }
      
  };
  
  